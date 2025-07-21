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

import BlankView from '../views/blank-view';
import HighlightView from '../views/highlight-view';
import blankView from '../views/blank-view';

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
  () : void;
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

  private blankViews: { [id: string]: BlankView } = {};
  private highlightsViews: { [id: string]: HighlightView } = {};

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
   * Sets up all blanks, the cloze itself and the views.
   * @param  {HTMLElement} root
   */
  initialize(root: HTMLElement, jquery: JQuery) {
    this.jquery = jquery;
    this.isSelectCloze = this.settings.clozeType === ClozeType.Select ? true : false;

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
    containers.cloze.innerHTML = this.cloze.html;
    this.createViews();
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

  textTyped = (event, blank: Blank) => {
    blank.onTyped();
    if (this.onTyped)
      this.onTyped();
    this.refreshCloze();
  }

  focus = (event, blank: Blank) => {
    blank.onFocused();
    this.refreshCloze();
  }

  displayFeedback = (event, blank: Blank) => {
    blank.onDisplayFeedback();
    this.refreshCloze();
  }

  showHint = (event, blank: Blank) => {
    this.cloze.hideAllHighlights();
    blank.showHint();
    this.refreshCloze();
  }

  requestCloseTooltip = (event, blank: Blank) => {
    blank.removeTooltip();
    this.refreshCloze();
    this.jquery.find("#" + blank.id).focus();
  }

  checkBlank = (event, blank: Blank, cause: string) => {
    if ((cause === 'blur' || cause === 'change')) {
      blank.lostFocus();
    }

    if (cause === 'change' && this.onTyped) {
      this.onTyped();
    }

    if (this.settings.autoCheck) {
      if (!blank.enteredText || blank.enteredText === "")
        return;

      this.cloze.hideAllHighlights();
      blank.evaluateAttempt(false);
      this.checkAndNotifyCompleteness();
      this.refreshCloze();
      this.onAutoChecked();
    }
    if ((cause === 'enter')
      && ((this.settings.autoCheck && blank.isCorrect && !this.isSolved)
        || !this.settings.autoCheck)) {
      // move to next blank
      var index = this.cloze.blanks.indexOf(blank);
      var nextId;
      while (index < this.cloze.blanks.length - 1 && !nextId) {
        index++;
        if (!this.cloze.blanks[index].isCorrect)
          nextId = this.cloze.blanks[index].id;
      }

      if (nextId)
        this.jquery.find("#" + nextId).focus();
    }
  }

  reset = () => {
    this.cloze.reset();
    this.refreshCloze();
  }

  showSolutions = () => {
    this.cloze.showSolutions();
    this.refreshCloze();
  }

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

  private createHighlightView(highlight: Highlight) {
    const highlightView = new HighlightView(highlight);
    this.highlightsViews[highlight.id] = highlightView;

    const parent = document.querySelector(`#container_${highlight.id}`);
    parent?.appendChild(highlightView.getDOM());
  }

  private createBlankView(blank: Blank) {
    const blankView = new BlankView(blank, this.isSelectCloze, {
      requestCloseTooltip: this.requestCloseTooltip,
      checkBlank: this.checkBlank,
      textTyped: this.textTyped,
      focus: this.focus,
      showHint: this.showHint,
      displayFeedback: this.displayFeedback,
      textChanged: this.onTextChanged
    });

    this.blankViews[blank.id] = blankView;

    const parent = document.querySelector(`#container_${blank.id}`);
    parent?.appendChild(blankView.getDOM());
  }

  private createViews() {
    for (var highlight of this.cloze.highlights) {
      this.createHighlightView(highlight);
    }

    for (var blank of this.cloze.blanks) {
      this.createBlankView(blank);
    }
  }

  /**
   * Updates all views of highlights and blanks. Can be called when a model
   * was changed
   */
  private refreshCloze() {
    for (var highlight of this.cloze.highlights) {
      const highlightView = this.highlightsViews[highlight.id];
      highlightView?.set(highlight);
    }

    for (var blank of this.cloze.blanks) {
      const blankView = this.blankViews[blank.id];
      blankView?.set(blank);
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
    for (var blank of this.cloze.blanks) {
      result.push(blank.getCorrectAnswers());
    }

    return result;
  }
}
