export const highlightTemplate = (id, isHighlighted, text) => `
  <span ${isHighlighted ? 'class="highlighted"' : ''} id="${id}">${text}</span>
`;

export const blankTemplate = (blank, isSelectCloze) => `
  <span id="container${blank.id}" class="blank 
      ${blank.hasPendingFeedback ? 'has-pending-feedback' : ''} 
      ${blank.hasHint ? 'has-tip' : ''} 
      ${blank.isCorrect ? 'correct' : ''} 
      ${blank.isError ? 'error' : ''} 
      ${blank.isRetry ? 'retry' : ''} 
      ${blank.isShowingSolution ? 'showing-solution' : ''}">
    ${isSelectCloze ? `
      <button class="h5p-notification">&#xf05a;</button>
      <span class="h5p-input-wrapper">
        <select id="${blank.id}" class="h5p-text-input" 
                ${blank.isCorrect || blank.isShowingSolution ? 'disabled="disabled"' : ''}>
          ${blank.choices.map(choice => `
            <option value="${choice}" ${choice === blank.enteredText ? 'selected' : ''}>${choice}</option>
          `).join('')}
        </select>
      </span>
    ` : `
      <span class="h5p-input-wrapper">
        <input id="${blank.id}" type="text" 
               value="${blank.isShowingSolution ? blank.getCorrectAnswer() : blank.enteredText || ''}"
               size="${blank.minTextLength}" 
               class="h5p-text-input" 
               autocomplete="off" 
               autocapitalize="off"
               ${blank.isCorrect || blank.isShowingSolution ? 'disabled="disabled"' : ''} />
        ${blank.hasHint ? `
          <span class="h5p-tip-container">
            <button onclick="showHint('${blank.id}')" ${blank.isCorrect || blank.isShowingSolution ? 'disabled="disabled"' : ''}>
              <span class="joubel-tip-container" title="Tip" aria-label="Tip" aria-expanded="true" role="button" tabindex="0">
                <span class="joubel-icon-tip-normal"><span class="h5p-icon-shadow"></span><span class="h5p-icon-speech-bubble"></span><span class="h5p-icon-info"></span></span>
              </span>
            </button>
          </span>` : ''}
      </span>
    `}
  </span>
`;
