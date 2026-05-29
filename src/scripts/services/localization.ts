export enum LocalizationLabels {
  showSolutionButton = "showSolutions",
  retryButton = "tryAgain",
  checkAllButton = "checkAnswer",
  submitAllButton = "submitAnswer",
  notFilledOutWarning = "notFilledOut",
  tipButton ="tipLabel",
  typoMessage = "spellingMistakeWarning",
  scoreBarLabel = "scoreBarLabel",
  a11yCheck = "a11yCheck",
  a11yShowSolution = "a11yShowSolution",
  a11yRetry = "a11yRetry",
  a11yCheckingModeHeader = "a11yCheckingModeHeader"
}

export enum LocalizationStructures {
  confirmCheck = "confirmCheck",
  confirmRetry = "confirmRetry",
  overallFeedback = "overallFeedback"
}

/**
 * Provides localization services.
 */

export class H5PLocalization {
  constructor(private h5pConfiguration: any) {

  }

  /**
   * Returns the localized string that is represented by the identifier.
   * @param  {string} localizableStringIdentifier
   * @returns string
   */
  private getText(localizableStringIdentifier: string): string {
    return this.h5pConfiguration[localizableStringIdentifier];
  }

  private labelToString(label: LocalizationLabels) {
    return label.toString();
  }
  /**
   * Returns the localized string for the label.
   * @param  {LocalizationLabels} label
   * @returns string
   */
  getTextFromLabel(label: LocalizationLabels): string {
    return this.getText(this.labelToString(label));
  }

  getObjectForStructure(structure: LocalizationStructures) : any {
    return this.h5pConfiguration[structure.toString()];
  }
}