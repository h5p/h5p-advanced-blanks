import { Blank } from "../models/blank";

type BlankCallbacks = {
  requestCloseTooltip: (event: Event, blank: Blank) => void;
  checkBlank: (event: Event, blank: Blank, action: string) => void;
  textTyped: (event: Event, blank: Blank) => void;
  focus: (event: Event, blank: Blank) => void;
  showHint: (event: Event, blank: Blank) => void;
  displayFeedback: (event: Event, blank: Blank) => void;
  textChanged: (event: Event, blank: Blank) => void;
};

const ICONS = {
  NOTIFICATION: '&#xf05a;', // FontAwesome i icon for notification
} as const;

export default class BlankView {
  private dom: HTMLSpanElement;
  private inputElement: HTMLInputElement | HTMLSelectElement;
  private tipButton: HTMLButtonElement;
  private callbacks: BlankCallbacks = {
    requestCloseTooltip: () => { },
    checkBlank: () => { },
    textTyped: () => { },
    focus: () => { },
    showHint: () => { },
    displayFeedback: () => { },
    textChanged: () => { }
  };

  constructor(blank: Blank, isSelectCloze: boolean, callbacks: BlankCallbacks) {
    this.initializeCallbacks(callbacks);
    this.createDomStructure(blank);

    if (isSelectCloze) {
      this.createSelectElement(blank, callbacks);
    }
    else {
      this.createInputElement(blank, callbacks);
    }
  }

  private initializeCallbacks(callbacks: BlankCallbacks): void {
    Object.assign(this.callbacks, callbacks);
  }

  private createDomStructure(blank: Blank): void {
    this.dom = document.createElement('span');
    this.dom.id = `container${blank.id}`;
    this.dom.classList.add('blank');
    this.updateDomClasses(blank);
  }

  private updateDomClasses(blank: Blank): void {
    this.dom.classList.toggle('has-pending-feedback', blank.hasPendingFeedback ?? false);
    this.dom.classList.toggle('has-tip', blank.hasHint ?? false);
    this.dom.classList.toggle('correct', blank.isCorrect ?? false);
    this.dom.classList.toggle('error', blank.isError ?? false);
    this.dom.classList.toggle('retry', blank.isRetry ?? false);
    this.dom.classList.toggle('showing-solution', blank.isShowingSolution ?? false);
  }

  private buildTipContainer(blank: Blank): HTMLSpanElement {
    const tipContainer = document.createElement('span');
    tipContainer.classList.add('h5p-tip-container');

    this.tipButton = document.createElement('button');
    this.tipButton.disabled = blank.isCorrect || blank.isShowingSolution;
    this.tipButton.addEventListener('click', (event: MouseEvent) => {
      this.callbacks.showHint(event, blank);
    });
    tipContainer.append(this.tipButton);

    const joubelTipContainer = document.createElement('span');
    joubelTipContainer.classList.add('joubel-tip-container');
    joubelTipContainer.setAttribute('title', 'Tip'); // TODO: Need to localize this
    joubelTipContainer.setAttribute('aria-label', 'Tip'); // TODO: Need to localize this
    joubelTipContainer.setAttribute('aria-expanded', 'true');
    joubelTipContainer.setAttribute('role', 'button');
    joubelTipContainer.setAttribute('tabindex', '0');
    this.tipButton.append(joubelTipContainer);

    const joubelIconTipNormal = document.createElement('span');
    joubelIconTipNormal.classList.add('joubel-icon-tip-normal');
    joubelTipContainer.append(joubelIconTipNormal);

    const joubelIconShadow = document.createElement('span');
    joubelIconShadow.classList.add('h5p-icon-shadow');
    joubelIconTipNormal.append(joubelIconShadow);

    const joubelIconSpeechBubble = document.createElement('span');
    joubelIconSpeechBubble.classList.add('h5p-icon-speech-bubble');
    joubelIconTipNormal.append(joubelIconSpeechBubble);

    const joubelIconInfo = document.createElement('span');
    joubelIconInfo.classList.add('h5p-icon-info');
    joubelIconTipNormal.append(joubelIconInfo);

    return tipContainer;
  }

  private createSelectElement(blank: Blank, callbacks: BlankCallbacks): void {
    this.dom.append(this.buildNotificationButton(blank));

    const inputWrapper = document.createElement('span');
    inputWrapper.classList.add('h5p-input-wrapper');
    this.dom.append(inputWrapper);

    const selectElement = document.createElement('select');
    selectElement.id = blank.id;
    selectElement.classList.add('h5p-text-input');
    selectElement.size = 1;
    selectElement.value = blank.enteredText || '';
    selectElement.disabled = blank.isCorrect || blank.isShowingSolution;

    this.bindInputToBlank(blank, selectElement);
    this.setupSelectEventHandlers(selectElement, blank);

    inputWrapper.append(selectElement);

    for (const choice of blank.choices) {
      const optionElement = document.createElement('option');
      optionElement.textContent = choice;
      selectElement.append(optionElement);
    }

    if (blank.hasHint) {
      const tipContainer = this.buildTipContainer(blank);
      inputWrapper.append(tipContainer);
    }
  }

  private buildNotificationButton(blank: Blank): HTMLButtonElement {
      const notificationButton = document.createElement('button');
      notificationButton.classList.add('h5p-notification');
      notificationButton.addEventListener('click', (event) => {
        this.callbacks.displayFeedback(event, blank);
      });
      notificationButton.innerHTML = ICONS.NOTIFICATION;

      return notificationButton;
  }

  private createInputElement(blank: Blank, callbacks: BlankCallbacks): void {
    const inputWrapper = document.createElement('span');
    inputWrapper.classList.add('h5p-input-wrapper');
    this.dom.append(inputWrapper);

    this.inputElement = document.createElement('input');
    this.inputElement.classList.add('h5p-text-input');
    this.inputElement.id = blank.id;
    this.inputElement.type = 'text';
    this.inputElement.value = blank.enteredText || '';
    this.inputElement.size = blank.minTextLength;
    this.inputElement.setAttribute('autoComplete', 'off');
    this.inputElement.setAttribute('autoCapitalize', 'off');
    this.inputElement.disabled = blank.isCorrect || blank.isShowingSolution;

    this.bindInputToBlank(blank, this.inputElement);
    this.setupInputEventHandlers(this.inputElement, blank);

    inputWrapper.append(this.inputElement);

    if (blank.hasHint) {
      const tipContainer = this.buildTipContainer(blank);
      inputWrapper.append(tipContainer);
    }
  }

  private setupInputEventHandlers(element: HTMLInputElement, blank: Blank): void {
    element.addEventListener('keydown', (event) => this.handleInputKeydown(event, blank));
    element.addEventListener('blur', (event) => this.callbacks.checkBlank(event, blank, 'blur'));
    element.addEventListener('focus', (event) => this.callbacks.focus(event, blank));
    element.addEventListener('change', (event) => this.callbacks.textChanged(event, blank));
  }

  private setupSelectEventHandlers(element: HTMLSelectElement, blank: Blank): void {
    element.addEventListener('keydown', (event) => this.handleSelectKeydown(event, blank));
    element.addEventListener('change', (event) => this.callbacks.checkBlank(event, blank, 'change'));
    element.addEventListener('focus', (event) => this.callbacks.focus(event, blank));
  }

  private handleInputKeydown(event: KeyboardEvent, blank: Blank): void {
    switch (event.key) {
      case 'Escape':
        this.callbacks.requestCloseTooltip(event, blank);
        break;
      case 'Enter':
        this.callbacks.checkBlank(event, blank, 'enter');
        break;
      case ' ':
        this.callbacks.checkBlank(event, blank, 'space');
        break;
      default:
        this.callbacks.textTyped(event, blank);
    }
  }

  private handleSelectKeydown(event: KeyboardEvent, blank: Blank): void {
    if (event.key === 'Enter') {
      this.callbacks.checkBlank(event, blank, 'enter');
    }
  }

  private bindInputToBlank(blank: Blank, inputElement: HTMLInputElement | HTMLSelectElement): void {
    Object.defineProperty(blank, 'enteredText', {
      get: () => inputElement.value,
      set: (value) => { inputElement.value = value; }
    });
  }

  getDOM() {
    return this.dom;
  }

  set(blank: Blank) {
    this.dom.id = `container${blank.id}`;
    this.updateDomClasses(blank);

    if (this.inputElement instanceof HTMLInputElement) {
      // this.inputElement.value = blank.enteredText || '';
      this.inputElement.disabled = blank.isCorrect || blank.isShowingSolution;
      this.inputElement.size = blank.minTextLength;
    }
    else if (this.inputElement instanceof HTMLSelectElement) {
      // this.inputElement.value = blank.enteredText || '';
      this.inputElement.disabled = blank.isCorrect || blank.isShowingSolution;
    }
  }
}
