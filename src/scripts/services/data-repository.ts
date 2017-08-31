﻿import { BlankLoader } from '../content-loaders/blank-loader';
import { Blank } from "../models/blank";
import { ISettings } from "../services/settings";
import { ClozeType } from "../models/enums";
import { Answer } from "../models/answer";
import { Message } from "../models/message";
import { H5PLocalization } from "./localization";

export interface IDataRepository {
  getBlanks(): Blank[];
  setSolved(): any;
  getClozeText(): string;
  getFeedbackText(): string;
  getMedia(): any;
  getTaskDescription(): string;
  getSnippets(): string[];
}

/**
 * Wraps around the h5p config object and provides access to the content.
 */
export class H5PDataRepository implements IDataRepository {
  constructor(private h5pConfigData: any, private settings: ISettings,
    private localization: H5PLocalization, private jquery: JQueryStatic) {

  }

  /**
   * Called when all blanks were entered correctly.
   */
  setSolved() {
    // TODO
  }

  /**
   * Returns the blank text of the cloze (as HTML markup).
   */
  getClozeText(): string {
    return this.h5pConfigData.blanksText;
  }

  // TODO: remove or implement
  getFeedbackText(): string {
    return "";
  }

  // TODO: implement
  getMedia(): any {
    return this.h5pConfigData.media;
  }

  getTaskDescription(): string {
    return this.h5pConfigData.task;
  }

  getBlanks(): Blank[] {
    var blanks: Blank[] = new Array();
    for (var i = 0; i < this.h5pConfigData.blanksList.length; i++) {
      var h5pBlank = this.h5pConfigData.blanksList[i];

      var correctText = h5pBlank.correctAnswerText;
      if (correctText === "" || correctText === undefined)
        continue;

      var blank = BlankLoader.createBlank(this.settings, this.localization, this.jquery, "cloze" + i, correctText, h5pBlank.hint);

      if (h5pBlank.incorrectAnswersList) {
        for (var h5pIncorrectAnswer of h5pBlank.incorrectAnswersList) {
          blank.addIncorrectAnswer(h5pIncorrectAnswer.incorrectAnswerText, h5pIncorrectAnswer.incorrectAnswerFeedback);
        }
      }

      blank.finishInitialization();
      blanks.push(blank);
    }

    return blanks;
  }

  // TODO: implement
  getSnippets(): string[] {
    var returnValue: string[] = new Array();
    var snippets = new Array();
    for (var snippet of snippets) {
      if (snippet.value === "")
        continue;
      returnValue.push(snippet.value);
    }
    return returnValue;
  }
}