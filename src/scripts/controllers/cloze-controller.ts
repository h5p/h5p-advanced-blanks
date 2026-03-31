import { MessageService } from '../services/message-service';
import { BlankLoader } from '../content-loaders/blank-loader';
import { ClozeLoader } from '../content-loaders/cloze-loader';
import { Cloze } from "../models/cloze";
import { IDataRepository } from "../services/data-repository";
import { ISettings } from "../services/settings";
import { H5PLocalization } from "../services/localization";
import { ClozeType, SelectAlternatives } from "../models/enums";
import { Highlight } from "../models/highlight";
import { Blank } from "../models/blank";
import { Correctness } from '../models/answer';
import { highlightTemplate, blankTemplate } from '../views/templates';

interface ScoreChanged {
  (score: number, maxScore: number): void;
}

interface AutoChecked {
  (): void;
}

interface Solved {
  (): void;
}

interface Typed {
  (): void;
}

interface TextChanged {
  (): void;
}

export class ClozeController {
  private jquery: JQuery;

  private cloze: Cloze;
  private isSelectCloze: boolean;

  public onScoreChanged: ScoreChanged;
  public onAutoChecked: AutoChecked;
  public onSolved: Solved;
  public onTyped: Typed;
  public onTextChanged: TextChanged;

  public get maxScore(): number {
    return this.cloze.blanks.length;
  }

  /**
   * Detect whether there are blanks with more than one solution.
   * @return {boolean} True if there is at least one blank with more than one solution.
   */
  public get hasAlternatives(): boolean {
    return this.cloze.blanks.some(b => b.correctAnswers[0].alternatives.length > 1);
  }

  public get currentScore(): number {
    const score = this.cloze.blanks.reduce((score, b) => {
      const notShowingSolution = !b.isShowingSolution;
      const correctAnswerGiven = b.correctAnswers[0].alternatives.indexOf(b.enteredText || '') !== -1;

      // Detect small mistakes
      const closeCorrectMatches = b.correctAnswers
        .map(answer => answer.evaluateAttempt(b.enteredText))
        .filter(evaluation => evaluation.correctness === Correctness.CloseMatch);
      const similarAnswerGiven = this.settings.acceptSpellingErrors && closeCorrectMatches.length > 0;

      return score += (notShowingSolution && (correctAnswerGiven || similarAnswerGiven)) ? 1 : 0;
    }, 0);

    return Math.max(0, score);
  }

  public get allBlanksEntered() {
    if (this.cloze)
      return this.cloze.blanks.every(blank => blank.isError || blank.isCorrect || blank.isRetry);
    return false;
  }

  public get isSolved(): boolean {
    return this.cloze.isSolved;
  }

  public get isFilledOut() {
    if (!this.cloze || this.cloze.blanks.length === 0)
      return true;
    return this.cloze.blanks.some(b => b.enteredText !== '');
  }

  public get isFullyFilledOut() {
    if (!this.cloze || this.cloze.blanks.length === 0)
      return true;
    return this.cloze.blanks.every(b => b.enteredText !== '');
  }

  constructor(private repository: IDataRepository, private settings: ISettings, private localization: H5PLocalization, private MessageService: MessageService) {
  }

  /**
   * Sets up all blanks, the cloze itself, and binds event listeners using jQuery.
   * @param  {HTMLElement} root
   */
  initialize(root: HTMLElement, jquery: JQuery) {
    this.jquery = jquery;
    this.isSelectCloze = this.settings.clozeType === ClozeType.Select;

    var blanks = this.repository.getBlanks();

    if (this.isSelectCloze && this.settings.selectAlternatives === SelectAlternatives.All) {
      for (var blank of blanks) {
        let otherBlanks = blanks.filter(v => v !== blank);
        blank.loadChoicesFromOtherBlanks(otherBlanks);
      }
    }

    var snippets = this.repository.getSnippets();
    blanks.forEach(blank => BlankLoader.instance.replaceSnippets(blank, snippets));

    this.cloze = ClozeLoader.createCloze(this.repository.getClozeText(), blanks);

    var containers = this.createAndAddContainers(root);
    this.jquery.find(containers.cloze).html(this.cloze.html);
    this.createBindings();
  }

  checkAll = () => {
    this.cloze.hideAllHighlights();
    for (var blank of this.cloze.blanks) {
      if ((!blank.isCorrect) && blank.enteredText !== "")
        blank.evaluateAttempt(true, true);
    }
    this.refreshCloze();
    this.checkAndNotifyCompleteness();
  }

  textTyped = (blank: Blank) => {
    // Persist the current value from the input field to the Blank model
    const newValue = this.jquery.find(`#${blank.id}`).val() as string;
    blank.enteredText = newValue; // Store the new value in the Blank model

    blank.onTyped(); // Trigger any typed event
    if (this.onTyped) this.onTyped();

    // Refresh only this specific blank field
    this.refreshCloze(blank);
  };

  focus = (blank: Blank) => {
    blank.onFocused();
    this.refreshCloze(blank);
  };

  displayFeedback = (blank: Blank) => {
    blank.onDisplayFeedback();
    this.refreshCloze(blank);
  };

  showHint = (blank: Blank) => {
    this.cloze.hideAllHighlights();
    blank.showHint();
    this.refreshCloze(blank);
  };

  requestCloseTooltip = (blank: Blank) => {
    blank.removeTooltip();
    this.refreshCloze(blank);
    this.jquery.find(`#${blank.id}`).focus();
  };

  checkBlank = (blank: Blank, cause: string) => {
    // Persist the current value before checking
    const newValue = this.jquery.find(`#${blank.id}`).val() as string;
    blank.enteredText = newValue; // Store the new value in the Blank model

    if (cause === 'blur' || cause === 'change') {
      blank.lostFocus();
    }

    if (cause === 'change' && this.onTyped) {
      this.onTyped();
    }

    if (this.settings.autoCheck) {
      if (!blank.enteredText || blank.enteredText === "") return;

      this.cloze.hideAllHighlights();
      blank.evaluateAttempt(false);
      this.checkAndNotifyCompleteness();
      this.refreshCloze(blank); // Refresh only this blank field
      this.onAutoChecked();
    }
    if ((cause === 'enter')
      && ((this.settings.autoCheck && blank.isCorrect && !this.cloze.isSolved) || !this.settings.autoCheck)
    ) {
      var index = this.cloze.blanks.indexOf(blank);
      var nextId;
      while (index < this.cloze.blanks.length - 1 && !nextId) {
        index++;
        if (!this.cloze.blanks[index].isCorrect)
          nextId = this.cloze.blanks[index].id;
      }
      if (nextId) {
        this.jquery.find("#" + nextId).focus();
      }
    }
  };

  reset = () => {
    this.cloze.reset();
    this.refreshCloze();
  }

  showSolutions = () => {
    this.cloze.blanks.forEach(blank => {
      blank.isShowingSolution = true;
      blank.enteredText = blank.getCorrectAnswers()[0] || ''; // Set the first correct answer, if available
    });
    this.refreshCloze();
  };

  private createAndAddContainers(addTo: HTMLElement): { cloze: HTMLDivElement } {
    var clozeContainerElement = document.createElement('div');
    clozeContainerElement.id = 'h5p-cloze-container';
    if (this.settings.clozeType === ClozeType.Select) {
      clozeContainerElement.className = 'h5p-advanced-blanks-select-mode';
    } else {
      clozeContainerElement.className = 'h5p-advanced-blanks-type-mode';
    }
    addTo.appendChild(clozeContainerElement);

    return {
      cloze: clozeContainerElement
    };
  }

  private createBindings() {
    this.cloze.highlights.forEach((highlight) => {
      this.bindHighlight(highlight);
    });

    this.cloze.blanks.forEach((blank) => {
      this.bindBlank(blank);
    });
  }

  private bindHighlight(highlight: Highlight) {
    const highlightContainer = this.jquery.find(`#container_${highlight.id}`);
    highlightContainer.html(highlightTemplate(highlight.id, highlight.isHighlighted, highlight.text));
  }

  private bindBlank(blank: Blank) {
    const blankContainer = this.jquery.find(`#container_${blank.id}`);
    blankContainer.html(blankTemplate(blank, this.isSelectCloze));

    const blankInput = blankContainer.find(`#${blank.id}`);
    if (this.isSelectCloze) {
      blankInput.on('change', () => this.checkBlank(blank, 'change'));
    } else {
      blankInput.on('keyup', () => this.textTyped(blank));
      blankInput.on('blur', () => this.checkBlank(blank, 'blur'));
      blankInput.on('focus', () => this.focus(blank));
      blankInput.on('keypress', (e) => {
        if (e.key === 'Enter') this.checkBlank(blank, 'enter');
      });
    }
  }

  private createSelectOptions(blank: Blank) {
    let optionsHTML = '';
    blank.choices.forEach((choice) => {
      optionsHTML += `<option value="${choice}">${choice}</option>`;
    });
    return `<select id="${blank.id}">${optionsHTML}</select>`;
  }

  // Modify refreshCloze to update only specific blanks if needed
  private refreshCloze(blank?: Blank) {
    if (blank) {
      // Update only the specific blank field
      const blankContainer = this.jquery.find(`#container_${blank.id}`);
      blankContainer.html(blankTemplate(blank, this.isSelectCloze));
    } else {
      // Update all blanks and highlights (if needed)
      this.cloze.highlights.forEach((highlight) => {
        const highlightContainer = this.jquery.find(`#container_${highlight.id}`);
        highlightContainer.html(highlightTemplate(highlight.id, highlight.isHighlighted, highlight.text));
      });

      this.cloze.blanks.forEach((blank) => {
        const blankContainer = this.jquery.find(`#container_${blank.id}`);
        blankContainer.html(blankTemplate(blank, this.isSelectCloze));
      });
    }
  }


  private checkAndNotifyCompleteness = (): boolean => {
    if (this.onScoreChanged)
      this.onScoreChanged(this.currentScore, this.maxScore);

    if (this.cloze.isSolved) {
      if (this.onSolved)
        this.onSolved();
      return true;
    }

    return false;
  }

  public serializeCloze(): string[] {
    return this.cloze.serialize();
  }

  public deserializeCloze(data: any): boolean {
    if (!this.cloze || !data)
      return false;
    this.cloze.deserialize(data);
    this.refreshCloze();
    return true;
  }

  public getCorrectAnswerList(): string[][] {
    if (!this.cloze || this.cloze.blanks.length === 0)
      return [[]];
    let result = [];
    this.cloze.blanks.forEach((blank) => {
      result.push(blank.getCorrectAnswers());
    });
    return result;
  }
}
