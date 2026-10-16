import { Highlight } from '../models/highlight';

export default class HighlightView {
  private dom: HTMLSpanElement;

  constructor(object: Highlight) {
    this.dom = document.createElement('span');
    this.set(object);
  }

  getDOM(): HTMLSpanElement {
    return this.dom;
  }

  set(object: Highlight): void {
    this.dom.id = object.id;
    this.dom.classList.toggle('highlighted', object.isHighlighted ?? false);
    this.dom.textContent = object.text || '';
  }
}
