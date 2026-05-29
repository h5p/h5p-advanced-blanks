/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/style.css":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/style.css ***!
  \**************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".h5p-advanced-blanks {\n    position: relative;\n}\n\n\n/* Text */\n\n.h5p-advanced-blanks #h5p-cloze-container p,\n.h5p-advanced-blanks #h5p-cloze-container div {\n    line-height: 1.8em;\n    margin: 0 0 1em;\n    text-align: justify;\n}\n\n@media only screen and (min-width: 480px) {\n    .h5p-advanced-blanks #h5p-cloze-container p,\n    .h5p-advanced-blanks #h5p-cloze-container div {\n        text-align: unset;\n    }\n}\n\n\n/* Input */\n\n.h5p-advanced-blanks .h5p-input-wrapper {\n    display: inline-block;\n    position: relative;\n}\n\n.h5p-advanced-blanks .blank .h5p-text-input {\n    font-family: var(--h5p-theme-font-name, H5PDroidSans, sans-serif);\n    font-size: var(--h5p-theme-font-size-m, 1em);\n    border-radius: var(--h5p-theme-border-radius-medium, 0.25em);\n    background-color: var(--h5p-theme-ui-base, #ffffff);\n    border: 2px solid var(--h5p-theme-alternative-darker, #a0a0a0);\n    padding: calc(var(--h5p-theme-spacing-xs, 0.375em) / 2) 1.5em calc(var(--h5p-theme-spacing-xs, 0.375em) / 2) var(--h5p-theme-spacing-xxs, 0.5em);\n    color: var(--h5p-theme-text-primary, inherit);\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.h5p-advanced-blanks .blank input.h5p-text-input {\n  max-width: calc(100vw - 64px);\n}\n\n.h5p-advanced-blanks .blank select.h5p-text-input {\n  max-width: calc(100vw - 36px);\n}\n\n/* IE + Chrome specific fixes */\n\n.h5p-text-input::-ms-clear {\n    display: none;\n}\n\n:not(.correct).blank.has-tip button {\n    cursor: pointer;\n}\n\n\n/* Select mode */\n\nselect.h5p-text-input {\n    appearance: button;\n    -moz-appearance: none;\n    -webkit-appearance: button;\n}\n\n\n/* Showing solution input */\n\n.h5p-advanced-blanks .blank.showing-solution .h5p-text-input {\n    border: 1px dashed #9dd8bb;\n    color: #255c41;\n    background: #FFFFFF;\n}\n\n\n/* Focussed input */\n\n.h5p-advanced-blanks .blank .h5p-text-input:focus {\n    outline: none;\n    box-shadow: 0 0 0.5em 0 var(--h5p-theme-contrast-cta-white, #7fb8ff);\n    border-color: var(--h5p-theme-contrast-cta-white, #7fb8ff);\n}\n\n\n/* Correctly answered input */\n\n.h5p-advanced-blanks .blank.correct .h5p-text-input {\n    background: #9dd8bb;\n    border: 1px solid #9dd8bb;\n    color: #255c41;\n}\n\n.h5p-advanced-blanks .blank.correct .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;    \n    top: 50%;\n    transform: translateY(-50%);\n    text-decoration: none;\n    content: \"\\f00c\";\n    font-family: 'H5PFontAwesome4';\n    color: #255c41;\n}\n\n\n/* Incorrect answers */\n\n.h5p-advanced-blanks .blank.error .h5p-text-input {\n    background-color: #f7d0d0;\n    border: 1px solid #f7d0d0;\n    color: #b71c1c;\n    text-decoration: line-through;\n}\n\n.h5p-advanced-blanks .blank.error .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    content: \"\\f00d\";\n    color: #b71c1c;\n}\n\n\n/* Spelling errors */\n\n.h5p-advanced-blanks .blank.retry .h5p-text-input {\n    background-color: #ffff99;\n    border: 1px solid #ffff99;\n    color: black;\n}\n\n.h5p-advanced-blanks .blank.retry .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    content: \"\\f00d\";\n    color: #b71c1c;\n}\n\n\n/* Buttons */\n\n.h5p-advanced-blanks .blank button {\n    padding-left: 5px;\n    padding-right: 5px;\n    border: none;\n    background: none;\n}\n\n\n/* Highlight in spelling mistake marker */\n\n.spelling-mistake .missing-character,\n.spelling-mistake .mistaken-character {\n    color: red;\n    font-weight: bold;\n    animation-duration: 500ms;\n    animation-name: blink-color;\n    animation-iteration-count: 13;\n    animation-direction: alternate;\n}\n\n@keyframes blink-color {\n    from {\n        color: initial;\n    }\n    to {\n        color: red;\n    }\n}\n\n.spelling-mistake .mistaken-character {\n    text-decoration: line-through;\n}\n\n\n/* Highlights in text */\n\n.h5p-advanced-blanks .highlighted {\n    background-color: rgba(255, 0, 0, 0.2);\n    padding: 0.4em;\n    margin: -0.4em;\n    animation-duration: 1000ms;\n    animation-name: blink-background-color;\n    animation-iteration-count: 3;\n    animation-direction: alternate;\n}\n\n@keyframes blink-background-color {\n    from {\n        background-color: initial;\n    }\n    to {\n        background-color: rgba(255, 0, 0, 0.2);\n    }\n}\n\n\n/* Others */\n\n.h5p-advanced-blanks .invisible {\n    visibility: collapse;\n}\n\n\n/* Tips */\n\n.h5p-advanced-blanks .h5p-tip-container {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0.4em;\n  font-size: 1em;\n}\n\n.h5p-advanced-blanks .blank.has-tip:not(.correct):not(.error):not(.retry) .h5p-text-input {\n    padding-right: 2.25em;\n}\n\n.h5p-advanced-blanks .blank.has-tip.correct .h5p-input-wrapper:after,\n.h5p-advanced-blanks .blank.has-tip.error .h5p-input-wrapper:after,\n.h5p-advanced-blanks .blank.has-tip.retry .h5p-input-wrapper:after {\n    right: 2.25em;\n}\n\n.h5p-advanced-blanks .blank.correct.has-tip .h5p-text-input,\n.h5p-advanced-blanks .blank.error.has-tip .h5p-text-input,\n.h5p-advanced-blanks .blank.retry.has-tip .h5p-text-input {\n    padding-right: 3.5em;\n}\n\n/* improves appearance of h5p tip shadows */\n.h5p-advanced-blanks .joubel-icon-tip-normal .h5p-icon-shadow:before {\n  color: black;\n  opacity: 0.13;\n}\n\n/* pending feedback marker */\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank:not(.has-pending-feedback) button.h5p-notification {\n    display: none;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification {\n    font-size: large;    \n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    animation: shake 3s cubic-bezier(.36, .07, .19, .97) reverse;\n    animation-iteration-count: 2;\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    perspective: 1000px;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\n    position: absolute;\n    left: -0.4em;\n    top: -0.7em;\n    content: \"\\f05a\";\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.error.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.error.has-pending-feedback .h5p-input-wrapper:before {\n    color: #b71c1c;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.retry.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.retry.has-pending-feedback .h5p-input-wrapper:before {\n    color: #ffff00;\n    text-shadow: 0px 0px 0.5em black;\n}\n\n@keyframes shake {\n    2%,\n    20% {\n        transform: translate3d(-0.5px, 0, 0);\n    }\n    4%,\n    17% {\n        transform: translate3d(1px, 0, 0);\n    }\n    6%,\n    10%,\n    15% {\n        transform: translate3d(-2px, 0, 0);\n    }\n    9%,\n    13% {\n        transform: translate3d(2px, 0, 0);\n    }\n}\n\n.h5p-advanced-blanks .hidden-but-read {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    clip: rect(1px, 1px, 1px, 1px);\n}", "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;AACtB;;;AAGA,SAAS;;AAET;;IAEI,kBAAkB;IAClB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI;;QAEI,iBAAiB;IACrB;AACJ;;;AAGA,UAAU;;AAEV;IACI,qBAAqB;IACrB,kBAAkB;AACtB;;AAEA;IACI,iEAAiE;IACjE,4CAA4C;IAC5C,4DAA4D;IAC5D,mDAAmD;IACnD,8DAA8D;IAC9D,gJAAgJ;IAChJ,6CAA6C;IAC7C,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA,+BAA+B;;AAE/B;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;AACnB;;;AAGA,gBAAgB;;AAEhB;IACI,kBAAkB;IAClB,qBAAqB;IACrB,0BAA0B;AAC9B;;;AAGA,2BAA2B;;AAE3B;IACI,0BAA0B;IAC1B,cAAc;IACd,mBAAmB;AACvB;;;AAGA,mBAAmB;;AAEnB;IACI,aAAa;IACb,oEAAoE;IACpE,0DAA0D;AAC9D;;;AAGA,6BAA6B;;AAE7B;IACI,mBAAmB;IACnB,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,2BAA2B;IAC3B,qBAAqB;IACrB,gBAAgB;IAChB,8BAA8B;IAC9B,cAAc;AAClB;;;AAGA,sBAAsB;;AAEtB;IACI,yBAAyB;IACzB,yBAAyB;IACzB,cAAc;IACd,6BAA6B;AACjC;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,2BAA2B;IAC3B,8BAA8B;IAC9B,qBAAqB;IACrB,gBAAgB;IAChB,cAAc;AAClB;;;AAGA,oBAAoB;;AAEpB;IACI,yBAAyB;IACzB,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,QAAQ;IACR,2BAA2B;IAC3B,8BAA8B;IAC9B,qBAAqB;IACrB,gBAAgB;IAChB,cAAc;AAClB;;;AAGA,YAAY;;AAEZ;IACI,iBAAiB;IACjB,kBAAkB;IAClB,YAAY;IACZ,gBAAgB;AACpB;;;AAGA,yCAAyC;;AAEzC;;IAEI,UAAU;IACV,iBAAiB;IACjB,yBAAyB;IACzB,2BAA2B;IAC3B,6BAA6B;IAC7B,8BAA8B;AAClC;;AAEA;IACI;QACI,cAAc;IAClB;IACA;QACI,UAAU;IACd;AACJ;;AAEA;IACI,6BAA6B;AACjC;;;AAGA,uBAAuB;;AAEvB;IACI,sCAAsC;IACtC,cAAc;IACd,cAAc;IACd,0BAA0B;IAC1B,sCAAsC;IACtC,4BAA4B;IAC5B,8BAA8B;AAClC;;AAEA;IACI;QACI,yBAAyB;IAC7B;IACA;QACI,sCAAsC;IAC1C;AACJ;;;AAGA,WAAW;;AAEX;IACI,oBAAoB;AACxB;;;AAGA,SAAS;;AAET;EACE,kBAAkB;EAClB,QAAQ;EACR,2BAA2B;EAC3B,YAAY;EACZ,cAAc;AAChB;;AAEA;IACI,qBAAqB;AACzB;;AAEA;;;IAGI,aAAa;AACjB;;AAEA;;;IAGI,oBAAoB;AACxB;;AAEA,2CAA2C;AAC3C;EACE,YAAY;EACZ,aAAa;AACf;;AAEA,4BAA4B;;AAE5B;IACI,aAAa;AACjB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;;IAEI,8BAA8B;IAC9B,qBAAqB;IACrB,4DAA4D;IAC5D,4BAA4B;IAC5B,+BAA+B;IAC/B,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,gBAAgB;AACpB;;AAEA;;IAEI,cAAc;AAClB;;AAEA;;IAEI,cAAc;IACd,gCAAgC;AACpC;;AAEA;IACI;;QAEI,oCAAoC;IACxC;IACA;;QAEI,iCAAiC;IACrC;IACA;;;QAGI,kCAAkC;IACtC;IACA;;QAEI,iCAAiC;IACrC;AACJ;;AAEA;IACI,kBAAkB;IAClB,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,8BAA8B;AAClC","sourcesContent":[".h5p-advanced-blanks {\n    position: relative;\n}\n\n\n/* Text */\n\n.h5p-advanced-blanks #h5p-cloze-container p,\n.h5p-advanced-blanks #h5p-cloze-container div {\n    line-height: 1.8em;\n    margin: 0 0 1em;\n    text-align: justify;\n}\n\n@media only screen and (min-width: 480px) {\n    .h5p-advanced-blanks #h5p-cloze-container p,\n    .h5p-advanced-blanks #h5p-cloze-container div {\n        text-align: unset;\n    }\n}\n\n\n/* Input */\n\n.h5p-advanced-blanks .h5p-input-wrapper {\n    display: inline-block;\n    position: relative;\n}\n\n.h5p-advanced-blanks .blank .h5p-text-input {\n    font-family: var(--h5p-theme-font-name, H5PDroidSans, sans-serif);\n    font-size: var(--h5p-theme-font-size-m, 1em);\n    border-radius: var(--h5p-theme-border-radius-medium, 0.25em);\n    background-color: var(--h5p-theme-ui-base, #ffffff);\n    border: 2px solid var(--h5p-theme-alternative-darker, #a0a0a0);\n    padding: calc(var(--h5p-theme-spacing-xs, 0.375em) / 2) 1.5em calc(var(--h5p-theme-spacing-xs, 0.375em) / 2) var(--h5p-theme-spacing-xxs, 0.5em);\n    color: var(--h5p-theme-text-primary, inherit);\n    text-overflow: ellipsis;\n    overflow: hidden;\n}\n\n.h5p-advanced-blanks .blank input.h5p-text-input {\n  max-width: calc(100vw - 64px);\n}\n\n.h5p-advanced-blanks .blank select.h5p-text-input {\n  max-width: calc(100vw - 36px);\n}\n\n/* IE + Chrome specific fixes */\n\n.h5p-text-input::-ms-clear {\n    display: none;\n}\n\n:not(.correct).blank.has-tip button {\n    cursor: pointer;\n}\n\n\n/* Select mode */\n\nselect.h5p-text-input {\n    appearance: button;\n    -moz-appearance: none;\n    -webkit-appearance: button;\n}\n\n\n/* Showing solution input */\n\n.h5p-advanced-blanks .blank.showing-solution .h5p-text-input {\n    border: 1px dashed #9dd8bb;\n    color: #255c41;\n    background: #FFFFFF;\n}\n\n\n/* Focussed input */\n\n.h5p-advanced-blanks .blank .h5p-text-input:focus {\n    outline: none;\n    box-shadow: 0 0 0.5em 0 var(--h5p-theme-contrast-cta-white, #7fb8ff);\n    border-color: var(--h5p-theme-contrast-cta-white, #7fb8ff);\n}\n\n\n/* Correctly answered input */\n\n.h5p-advanced-blanks .blank.correct .h5p-text-input {\n    background: #9dd8bb;\n    border: 1px solid #9dd8bb;\n    color: #255c41;\n}\n\n.h5p-advanced-blanks .blank.correct .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;    \n    top: 50%;\n    transform: translateY(-50%);\n    text-decoration: none;\n    content: \"\\f00c\";\n    font-family: 'H5PFontAwesome4';\n    color: #255c41;\n}\n\n\n/* Incorrect answers */\n\n.h5p-advanced-blanks .blank.error .h5p-text-input {\n    background-color: #f7d0d0;\n    border: 1px solid #f7d0d0;\n    color: #b71c1c;\n    text-decoration: line-through;\n}\n\n.h5p-advanced-blanks .blank.error .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    content: \"\\f00d\";\n    color: #b71c1c;\n}\n\n\n/* Spelling errors */\n\n.h5p-advanced-blanks .blank.retry .h5p-text-input {\n    background-color: #ffff99;\n    border: 1px solid #ffff99;\n    color: black;\n}\n\n.h5p-advanced-blanks .blank.retry .h5p-input-wrapper:after {\n    position: absolute;\n    right: 0.5em;\n    top: 50%;\n    transform: translateY(-50%);\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    content: \"\\f00d\";\n    color: #b71c1c;\n}\n\n\n/* Buttons */\n\n.h5p-advanced-blanks .blank button {\n    padding-left: 5px;\n    padding-right: 5px;\n    border: none;\n    background: none;\n}\n\n\n/* Highlight in spelling mistake marker */\n\n.spelling-mistake .missing-character,\n.spelling-mistake .mistaken-character {\n    color: red;\n    font-weight: bold;\n    animation-duration: 500ms;\n    animation-name: blink-color;\n    animation-iteration-count: 13;\n    animation-direction: alternate;\n}\n\n@keyframes blink-color {\n    from {\n        color: initial;\n    }\n    to {\n        color: red;\n    }\n}\n\n.spelling-mistake .mistaken-character {\n    text-decoration: line-through;\n}\n\n\n/* Highlights in text */\n\n.h5p-advanced-blanks .highlighted {\n    background-color: rgba(255, 0, 0, 0.2);\n    padding: 0.4em;\n    margin: -0.4em;\n    animation-duration: 1000ms;\n    animation-name: blink-background-color;\n    animation-iteration-count: 3;\n    animation-direction: alternate;\n}\n\n@keyframes blink-background-color {\n    from {\n        background-color: initial;\n    }\n    to {\n        background-color: rgba(255, 0, 0, 0.2);\n    }\n}\n\n\n/* Others */\n\n.h5p-advanced-blanks .invisible {\n    visibility: collapse;\n}\n\n\n/* Tips */\n\n.h5p-advanced-blanks .h5p-tip-container {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  right: 0.4em;\n  font-size: 1em;\n}\n\n.h5p-advanced-blanks .blank.has-tip:not(.correct):not(.error):not(.retry) .h5p-text-input {\n    padding-right: 2.25em;\n}\n\n.h5p-advanced-blanks .blank.has-tip.correct .h5p-input-wrapper:after,\n.h5p-advanced-blanks .blank.has-tip.error .h5p-input-wrapper:after,\n.h5p-advanced-blanks .blank.has-tip.retry .h5p-input-wrapper:after {\n    right: 2.25em;\n}\n\n.h5p-advanced-blanks .blank.correct.has-tip .h5p-text-input,\n.h5p-advanced-blanks .blank.error.has-tip .h5p-text-input,\n.h5p-advanced-blanks .blank.retry.has-tip .h5p-text-input {\n    padding-right: 3.5em;\n}\n\n/* improves appearance of h5p tip shadows */\n.h5p-advanced-blanks .joubel-icon-tip-normal .h5p-icon-shadow:before {\n  color: black;\n  opacity: 0.13;\n}\n\n/* pending feedback marker */\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank:not(.has-pending-feedback) button.h5p-notification {\n    display: none;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification {\n    font-size: large;    \n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\n    font-family: 'H5PFontAwesome4';\n    text-decoration: none;\n    animation: shake 3s cubic-bezier(.36, .07, .19, .97) reverse;\n    animation-iteration-count: 2;\n    transform: translate3d(0, 0, 0);\n    backface-visibility: hidden;\n    perspective: 1000px;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.has-pending-feedback .h5p-input-wrapper:before {\n    position: absolute;\n    left: -0.4em;\n    top: -0.7em;\n    content: \"\\f05a\";\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.error.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.error.has-pending-feedback .h5p-input-wrapper:before {\n    color: #b71c1c;\n}\n\n.h5p-advanced-blanks .h5p-advanced-blanks-select-mode .blank.retry.has-pending-feedback button.h5p-notification,\n.h5p-advanced-blanks .h5p-advanced-blanks-type-mode .blank.retry.has-pending-feedback .h5p-input-wrapper:before {\n    color: #ffff00;\n    text-shadow: 0px 0px 0.5em black;\n}\n\n@keyframes shake {\n    2%,\n    20% {\n        transform: translate3d(-0.5px, 0, 0);\n    }\n    4%,\n    17% {\n        transform: translate3d(1px, 0, 0);\n    }\n    6%,\n    10%,\n    15% {\n        transform: translate3d(-2px, 0, 0);\n    }\n    9%,\n    13% {\n        transform: translate3d(2px, 0, 0);\n    }\n}\n\n.h5p-advanced-blanks .hidden-but-read {\n    position: absolute;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    clip: rect(1px, 1px, 1px, 1px);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/diff/lib/convert/dmp.js":
/*!**********************************************!*\
  !*** ./node_modules/diff/lib/convert/dmp.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.convertChangesToDMP = convertChangesToDMP;

/*istanbul ignore end*/
// See: http://code.google.com/p/google-diff-match-patch/wiki/API
function convertChangesToDMP(changes) {
  var ret = [],
      change,
      operation;

  for (var i = 0; i < changes.length; i++) {
    change = changes[i];

    if (change.added) {
      operation = 1;
    } else if (change.removed) {
      operation = -1;
    } else {
      operation = 0;
    }

    ret.push([operation, change.value]);
  }

  return ret;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L2RtcC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvRE1QIiwiY2hhbmdlcyIsInJldCIsImNoYW5nZSIsIm9wZXJhdGlvbiIsImkiLCJsZW5ndGgiLCJhZGRlZCIsInJlbW92ZWQiLCJwdXNoIiwidmFsdWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ08sU0FBU0EsbUJBQVQsQ0FBNkJDLE9BQTdCLEVBQXNDO0FBQzNDLE1BQUlDLEdBQUcsR0FBRyxFQUFWO0FBQUEsTUFDSUMsTUFESjtBQUFBLE1BRUlDLFNBRko7O0FBR0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixPQUFPLENBQUNLLE1BQTVCLEVBQW9DRCxDQUFDLEVBQXJDLEVBQXlDO0FBQ3ZDRixJQUFBQSxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0ksQ0FBRCxDQUFoQjs7QUFDQSxRQUFJRixNQUFNLENBQUNJLEtBQVgsRUFBa0I7QUFDaEJILE1BQUFBLFNBQVMsR0FBRyxDQUFaO0FBQ0QsS0FGRCxNQUVPLElBQUlELE1BQU0sQ0FBQ0ssT0FBWCxFQUFvQjtBQUN6QkosTUFBQUEsU0FBUyxHQUFHLENBQUMsQ0FBYjtBQUNELEtBRk0sTUFFQTtBQUNMQSxNQUFBQSxTQUFTLEdBQUcsQ0FBWjtBQUNEOztBQUVERixJQUFBQSxHQUFHLENBQUNPLElBQUosQ0FBUyxDQUFDTCxTQUFELEVBQVlELE1BQU0sQ0FBQ08sS0FBbkIsQ0FBVDtBQUNEOztBQUNELFNBQU9SLEdBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8vIFNlZTogaHR0cDovL2NvZGUuZ29vZ2xlLmNvbS9wL2dvb2dsZS1kaWZmLW1hdGNoLXBhdGNoL3dpa2kvQVBJXG5leHBvcnQgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb0RNUChjaGFuZ2VzKSB7XG4gIGxldCByZXQgPSBbXSxcbiAgICAgIGNoYW5nZSxcbiAgICAgIG9wZXJhdGlvbjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hhbmdlID0gY2hhbmdlc1tpXTtcbiAgICBpZiAoY2hhbmdlLmFkZGVkKSB7XG4gICAgICBvcGVyYXRpb24gPSAxO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnJlbW92ZWQpIHtcbiAgICAgIG9wZXJhdGlvbiA9IC0xO1xuICAgIH0gZWxzZSB7XG4gICAgICBvcGVyYXRpb24gPSAwO1xuICAgIH1cblxuICAgIHJldC5wdXNoKFtvcGVyYXRpb24sIGNoYW5nZS52YWx1ZV0pO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/diff/lib/convert/xml.js":
/*!**********************************************!*\
  !*** ./node_modules/diff/lib/convert/xml.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.convertChangesToXML = convertChangesToXML;

/*istanbul ignore end*/
function convertChangesToXML(changes) {
  var ret = [];

  for (var i = 0; i < changes.length; i++) {
    var change = changes[i];

    if (change.added) {
      ret.push('<ins>');
    } else if (change.removed) {
      ret.push('<del>');
    }

    ret.push(escapeHTML(change.value));

    if (change.added) {
      ret.push('</ins>');
    } else if (change.removed) {
      ret.push('</del>');
    }
  }

  return ret.join('');
}

function escapeHTML(s) {
  var n = s;
  n = n.replace(/&/g, '&amp;');
  n = n.replace(/</g, '&lt;');
  n = n.replace(/>/g, '&gt;');
  n = n.replace(/"/g, '&quot;');
  return n;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb252ZXJ0L3htbC5qcyJdLCJuYW1lcyI6WyJjb252ZXJ0Q2hhbmdlc1RvWE1MIiwiY2hhbmdlcyIsInJldCIsImkiLCJsZW5ndGgiLCJjaGFuZ2UiLCJhZGRlZCIsInB1c2giLCJyZW1vdmVkIiwiZXNjYXBlSFRNTCIsInZhbHVlIiwiam9pbiIsInMiLCJuIiwicmVwbGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sU0FBU0EsbUJBQVQsQ0FBNkJDLE9BQTdCLEVBQXNDO0FBQzNDLE1BQUlDLEdBQUcsR0FBRyxFQUFWOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0YsT0FBTyxDQUFDRyxNQUE1QixFQUFvQ0QsQ0FBQyxFQUFyQyxFQUF5QztBQUN2QyxRQUFJRSxNQUFNLEdBQUdKLE9BQU8sQ0FBQ0UsQ0FBRCxDQUFwQjs7QUFDQSxRQUFJRSxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEJKLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTLE9BQVQ7QUFDRCxLQUZELE1BRU8sSUFBSUYsTUFBTSxDQUFDRyxPQUFYLEVBQW9CO0FBQ3pCTixNQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUyxPQUFUO0FBQ0Q7O0FBRURMLElBQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTRSxVQUFVLENBQUNKLE1BQU0sQ0FBQ0ssS0FBUixDQUFuQjs7QUFFQSxRQUFJTCxNQUFNLENBQUNDLEtBQVgsRUFBa0I7QUFDaEJKLE1BQUFBLEdBQUcsQ0FBQ0ssSUFBSixDQUFTLFFBQVQ7QUFDRCxLQUZELE1BRU8sSUFBSUYsTUFBTSxDQUFDRyxPQUFYLEVBQW9CO0FBQ3pCTixNQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUyxRQUFUO0FBQ0Q7QUFDRjs7QUFDRCxTQUFPTCxHQUFHLENBQUNTLElBQUosQ0FBUyxFQUFULENBQVA7QUFDRDs7QUFFRCxTQUFTRixVQUFULENBQW9CRyxDQUFwQixFQUF1QjtBQUNyQixNQUFJQyxDQUFDLEdBQUdELENBQVI7QUFDQUMsRUFBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLE9BQWhCLENBQUo7QUFDQUQsRUFBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLE1BQWhCLENBQUo7QUFDQUQsRUFBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLE1BQWhCLENBQUo7QUFDQUQsRUFBQUEsQ0FBQyxHQUFHQSxDQUFDLENBQUNDLE9BQUYsQ0FBVSxJQUFWLEVBQWdCLFFBQWhCLENBQUo7QUFFQSxTQUFPRCxDQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY29udmVydENoYW5nZXNUb1hNTChjaGFuZ2VzKSB7XG4gIGxldCByZXQgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGNoYW5nZSA9IGNoYW5nZXNbaV07XG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgcmV0LnB1c2goJzxpbnM+Jyk7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgcmV0LnB1c2goJzxkZWw+Jyk7XG4gICAgfVxuXG4gICAgcmV0LnB1c2goZXNjYXBlSFRNTChjaGFuZ2UudmFsdWUpKTtcblxuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIHJldC5wdXNoKCc8L2lucz4nKTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICByZXQucHVzaCgnPC9kZWw+Jyk7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQuam9pbignJyk7XG59XG5cbmZ1bmN0aW9uIGVzY2FwZUhUTUwocykge1xuICBsZXQgbiA9IHM7XG4gIG4gPSBuLnJlcGxhY2UoLyYvZywgJyZhbXA7Jyk7XG4gIG4gPSBuLnJlcGxhY2UoLzwvZywgJyZsdDsnKTtcbiAgbiA9IG4ucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICBuID0gbi5yZXBsYWNlKC9cIi9nLCAnJnF1b3Q7Jyk7XG5cbiAgcmV0dXJuIG47XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/diff/lib/diff/array.js":
/*!*********************************************!*\
  !*** ./node_modules/diff/lib/diff/array.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffArrays = diffArrays;
exports.arrayDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var arrayDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.arrayDiff = arrayDiff;

/*istanbul ignore end*/
arrayDiff.tokenize = function (value) {
  return value.slice();
};

arrayDiff.join = arrayDiff.removeEmpty = function (value) {
  return value;
};

function diffArrays(oldArr, newArr, callback) {
  return arrayDiff.diff(oldArr, newArr, callback);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5RGlmZiIsIkRpZmYiLCJ0b2tlbml6ZSIsInZhbHVlIiwic2xpY2UiLCJqb2luIiwicmVtb3ZlRW1wdHkiLCJkaWZmQXJyYXlzIiwib2xkQXJyIiwibmV3QXJyIiwiY2FsbGJhY2siLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFFTyxJQUFNQSxTQUFTLEdBQUc7QUFBSUM7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsQ0FBSixFQUFsQjs7Ozs7O0FBQ1BELFNBQVMsQ0FBQ0UsUUFBVixHQUFxQixVQUFTQyxLQUFULEVBQWdCO0FBQ25DLFNBQU9BLEtBQUssQ0FBQ0MsS0FBTixFQUFQO0FBQ0QsQ0FGRDs7QUFHQUosU0FBUyxDQUFDSyxJQUFWLEdBQWlCTCxTQUFTLENBQUNNLFdBQVYsR0FBd0IsVUFBU0gsS0FBVCxFQUFnQjtBQUN2RCxTQUFPQSxLQUFQO0FBQ0QsQ0FGRDs7QUFJTyxTQUFTSSxVQUFULENBQW9CQyxNQUFwQixFQUE0QkMsTUFBNUIsRUFBb0NDLFFBQXBDLEVBQThDO0FBQUUsU0FBT1YsU0FBUyxDQUFDVyxJQUFWLENBQWVILE1BQWYsRUFBdUJDLE1BQXZCLEVBQStCQyxRQUEvQixDQUFQO0FBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNvbnN0IGFycmF5RGlmZiA9IG5ldyBEaWZmKCk7XG5hcnJheURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc2xpY2UoKTtcbn07XG5hcnJheURpZmYuam9pbiA9IGFycmF5RGlmZi5yZW1vdmVFbXB0eSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmQXJyYXlzKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjaykgeyByZXR1cm4gYXJyYXlEaWZmLmRpZmYob2xkQXJyLCBuZXdBcnIsIGNhbGxiYWNrKTsgfVxuIl19


/***/ }),

/***/ "./node_modules/diff/lib/diff/base.js":
/*!********************************************!*\
  !*** ./node_modules/diff/lib/diff/base.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = Diff;

/*istanbul ignore end*/
function Diff() {}

Diff.prototype = {
  /*istanbul ignore start*/

  /*istanbul ignore end*/
  diff: function diff(oldString, newString) {
    /*istanbul ignore start*/
    var
    /*istanbul ignore end*/
    options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var callback = options.callback;

    if (typeof options === 'function') {
      callback = options;
      options = {};
    }

    this.options = options;
    var self = this;

    function done(value) {
      if (callback) {
        setTimeout(function () {
          callback(undefined, value);
        }, 0);
        return true;
      } else {
        return value;
      }
    } // Allow subclasses to massage the input prior to running


    oldString = this.castInput(oldString);
    newString = this.castInput(newString);
    oldString = this.removeEmpty(this.tokenize(oldString));
    newString = this.removeEmpty(this.tokenize(newString));
    var newLen = newString.length,
        oldLen = oldString.length;
    var editLength = 1;
    var maxEditLength = newLen + oldLen;

    if (options.maxEditLength) {
      maxEditLength = Math.min(maxEditLength, options.maxEditLength);
    }

    var bestPath = [{
      newPos: -1,
      components: []
    }]; // Seed editLength = 0, i.e. the content starts with the same values

    var oldPos = this.extractCommon(bestPath[0], newString, oldString, 0);

    if (bestPath[0].newPos + 1 >= newLen && oldPos + 1 >= oldLen) {
      // Identity per the equality and tokenizer
      return done([{
        value: this.join(newString),
        count: newString.length
      }]);
    } // Main worker method. checks all permutations of a given edit length for acceptance.


    function execEditLength() {
      for (var diagonalPath = -1 * editLength; diagonalPath <= editLength; diagonalPath += 2) {
        var basePath =
        /*istanbul ignore start*/
        void 0
        /*istanbul ignore end*/
        ;

        var addPath = bestPath[diagonalPath - 1],
            removePath = bestPath[diagonalPath + 1],
            _oldPos = (removePath ? removePath.newPos : 0) - diagonalPath;

        if (addPath) {
          // No one else is going to attempt to use this value, clear it
          bestPath[diagonalPath - 1] = undefined;
        }

        var canAdd = addPath && addPath.newPos + 1 < newLen,
            canRemove = removePath && 0 <= _oldPos && _oldPos < oldLen;

        if (!canAdd && !canRemove) {
          // If this path is a terminal then prune
          bestPath[diagonalPath] = undefined;
          continue;
        } // Select the diagonal that we want to branch from. We select the prior
        // path whose position in the new string is the farthest from the origin
        // and does not pass the bounds of the diff graph


        if (!canAdd || canRemove && addPath.newPos < removePath.newPos) {
          basePath = clonePath(removePath);
          self.pushComponent(basePath.components, undefined, true);
        } else {
          basePath = addPath; // No need to clone, we've pulled it from the list

          basePath.newPos++;
          self.pushComponent(basePath.components, true, undefined);
        }

        _oldPos = self.extractCommon(basePath, newString, oldString, diagonalPath); // If we have hit the end of both strings, then we are done

        if (basePath.newPos + 1 >= newLen && _oldPos + 1 >= oldLen) {
          return done(buildValues(self, basePath.components, newString, oldString, self.useLongestToken));
        } else {
          // Otherwise track this path as a potential candidate and continue.
          bestPath[diagonalPath] = basePath;
        }
      }

      editLength++;
    } // Performs the length of edit iteration. Is a bit fugly as this has to support the
    // sync and async mode which is never fun. Loops over execEditLength until a value
    // is produced, or until the edit length exceeds options.maxEditLength (if given),
    // in which case it will return undefined.


    if (callback) {
      (function exec() {
        setTimeout(function () {
          if (editLength > maxEditLength) {
            return callback();
          }

          if (!execEditLength()) {
            exec();
          }
        }, 0);
      })();
    } else {
      while (editLength <= maxEditLength) {
        var ret = execEditLength();

        if (ret) {
          return ret;
        }
      }
    }
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  pushComponent: function pushComponent(components, added, removed) {
    var last = components[components.length - 1];

    if (last && last.added === added && last.removed === removed) {
      // We need to clone here as the component clone operation is just
      // as shallow array clone
      components[components.length - 1] = {
        count: last.count + 1,
        added: added,
        removed: removed
      };
    } else {
      components.push({
        count: 1,
        added: added,
        removed: removed
      });
    }
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  extractCommon: function extractCommon(basePath, newString, oldString, diagonalPath) {
    var newLen = newString.length,
        oldLen = oldString.length,
        newPos = basePath.newPos,
        oldPos = newPos - diagonalPath,
        commonCount = 0;

    while (newPos + 1 < newLen && oldPos + 1 < oldLen && this.equals(newString[newPos + 1], oldString[oldPos + 1])) {
      newPos++;
      oldPos++;
      commonCount++;
    }

    if (commonCount) {
      basePath.components.push({
        count: commonCount
      });
    }

    basePath.newPos = newPos;
    return oldPos;
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  equals: function equals(left, right) {
    if (this.options.comparator) {
      return this.options.comparator(left, right);
    } else {
      return left === right || this.options.ignoreCase && left.toLowerCase() === right.toLowerCase();
    }
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  removeEmpty: function removeEmpty(array) {
    var ret = [];

    for (var i = 0; i < array.length; i++) {
      if (array[i]) {
        ret.push(array[i]);
      }
    }

    return ret;
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  castInput: function castInput(value) {
    return value;
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  tokenize: function tokenize(value) {
    return value.split('');
  },

  /*istanbul ignore start*/

  /*istanbul ignore end*/
  join: function join(chars) {
    return chars.join('');
  }
};

function buildValues(diff, components, newString, oldString, useLongestToken) {
  var componentPos = 0,
      componentLen = components.length,
      newPos = 0,
      oldPos = 0;

  for (; componentPos < componentLen; componentPos++) {
    var component = components[componentPos];

    if (!component.removed) {
      if (!component.added && useLongestToken) {
        var value = newString.slice(newPos, newPos + component.count);
        value = value.map(function (value, i) {
          var oldValue = oldString[oldPos + i];
          return oldValue.length > value.length ? oldValue : value;
        });
        component.value = diff.join(value);
      } else {
        component.value = diff.join(newString.slice(newPos, newPos + component.count));
      }

      newPos += component.count; // Common case

      if (!component.added) {
        oldPos += component.count;
      }
    } else {
      component.value = diff.join(oldString.slice(oldPos, oldPos + component.count));
      oldPos += component.count; // Reverse add and remove so removes are output first to match common convention
      // The diffing algorithm is tied to add then remove output and this is the simplest
      // route to get the desired output with minimal overhead.

      if (componentPos && components[componentPos - 1].added) {
        var tmp = components[componentPos - 1];
        components[componentPos - 1] = components[componentPos];
        components[componentPos] = tmp;
      }
    }
  } // Special case handle for when one terminal is ignored (i.e. whitespace).
  // For this case we merge the terminal into the prior string and drop the change.
  // This is only available for string mode.


  var lastComponent = components[componentLen - 1];

  if (componentLen > 1 && typeof lastComponent.value === 'string' && (lastComponent.added || lastComponent.removed) && diff.equals('', lastComponent.value)) {
    components[componentLen - 2].value += lastComponent.value;
    components.pop();
  }

  return components;
}

function clonePath(path) {
  return {
    newPos: path.newPos,
    components: path.components.slice(0)
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Jhc2UuanMiXSwibmFtZXMiOlsiRGlmZiIsInByb3RvdHlwZSIsImRpZmYiLCJvbGRTdHJpbmciLCJuZXdTdHJpbmciLCJvcHRpb25zIiwiY2FsbGJhY2siLCJzZWxmIiwiZG9uZSIsInZhbHVlIiwic2V0VGltZW91dCIsInVuZGVmaW5lZCIsImNhc3RJbnB1dCIsInJlbW92ZUVtcHR5IiwidG9rZW5pemUiLCJuZXdMZW4iLCJsZW5ndGgiLCJvbGRMZW4iLCJlZGl0TGVuZ3RoIiwibWF4RWRpdExlbmd0aCIsIk1hdGgiLCJtaW4iLCJiZXN0UGF0aCIsIm5ld1BvcyIsImNvbXBvbmVudHMiLCJvbGRQb3MiLCJleHRyYWN0Q29tbW9uIiwiam9pbiIsImNvdW50IiwiZXhlY0VkaXRMZW5ndGgiLCJkaWFnb25hbFBhdGgiLCJiYXNlUGF0aCIsImFkZFBhdGgiLCJyZW1vdmVQYXRoIiwiY2FuQWRkIiwiY2FuUmVtb3ZlIiwiY2xvbmVQYXRoIiwicHVzaENvbXBvbmVudCIsImJ1aWxkVmFsdWVzIiwidXNlTG9uZ2VzdFRva2VuIiwiZXhlYyIsInJldCIsImFkZGVkIiwicmVtb3ZlZCIsImxhc3QiLCJwdXNoIiwiY29tbW9uQ291bnQiLCJlcXVhbHMiLCJsZWZ0IiwicmlnaHQiLCJjb21wYXJhdG9yIiwiaWdub3JlQ2FzZSIsInRvTG93ZXJDYXNlIiwiYXJyYXkiLCJpIiwic3BsaXQiLCJjaGFycyIsImNvbXBvbmVudFBvcyIsImNvbXBvbmVudExlbiIsImNvbXBvbmVudCIsInNsaWNlIiwibWFwIiwib2xkVmFsdWUiLCJ0bXAiLCJsYXN0Q29tcG9uZW50IiwicG9wIiwicGF0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWUsU0FBU0EsSUFBVCxHQUFnQixDQUFFOztBQUVqQ0EsSUFBSSxDQUFDQyxTQUFMLEdBQWlCO0FBQUE7O0FBQUE7QUFDZkMsRUFBQUEsSUFEZSxnQkFDVkMsU0FEVSxFQUNDQyxTQURELEVBQzBCO0FBQUE7QUFB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R0FBMkJNLEdBQTNCO0FBQ0Q7QUFDRjtBQUNGLEdBdkMyRSxDQXlDNUU7QUFDQTtBQUNBOzs7QUFDQSxNQUFJQyxhQUFhLEdBQUd4QyxVQUFVLENBQUNrQyxZQUFZLEdBQUcsQ0FBaEIsQ0FBOUI7O0FBQ0EsTUFBSUEsWUFBWSxHQUFHLENBQWYsSUFDRyxPQUFPTSxhQUFhLENBQUN2RCxLQUFyQixLQUErQixRQURsQyxLQUVJdUQsYUFBYSxDQUFDdEIsS0FBZCxJQUF1QnNCLGFBQWEsQ0FBQ3JCLE9BRnpDLEtBR0d6QyxJQUFJLENBQUM2QyxNQUFMLENBQVksRUFBWixFQUFnQmlCLGFBQWEsQ0FBQ3ZELEtBQTlCLENBSFAsRUFHNkM7QUFDM0NlLElBQUFBLFVBQVUsQ0FBQ2tDLFlBQVksR0FBRyxDQUFoQixDQUFWLENBQTZCakQsS0FBN0IsSUFBc0N1RCxhQUFhLENBQUN2RCxLQUFwRDtBQUNBZSxJQUFBQSxVQUFVLENBQUN5QyxHQUFYO0FBQ0Q7O0FBRUQsU0FBT3pDLFVBQVA7QUFDRDs7QUFFRCxTQUFTWSxTQUFULENBQW1COEIsSUFBbkIsRUFBeUI7QUFDdkIsU0FBTztBQUFFM0MsSUFBQUEsTUFBTSxFQUFFMkMsSUFBSSxDQUFDM0MsTUFBZjtBQUF1QkMsSUFBQUEsVUFBVSxFQUFFMEMsSUFBSSxDQUFDMUMsVUFBTCxDQUFnQm9DLEtBQWhCLENBQXNCLENBQXRCO0FBQW5DLEdBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERpZmYoKSB7fVxuXG5EaWZmLnByb3RvdHlwZSA9IHtcbiAgZGlmZihvbGRTdHJpbmcsIG5ld1N0cmluZywgb3B0aW9ucyA9IHt9KSB7XG4gICAgbGV0IGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcblxuICAgIGxldCBzZWxmID0gdGhpcztcblxuICAgIGZ1bmN0aW9uIGRvbmUodmFsdWUpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkgeyBjYWxsYmFjayh1bmRlZmluZWQsIHZhbHVlKTsgfSwgMCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIEFsbG93IHN1YmNsYXNzZXMgdG8gbWFzc2FnZSB0aGUgaW5wdXQgcHJpb3IgdG8gcnVubmluZ1xuICAgIG9sZFN0cmluZyA9IHRoaXMuY2FzdElucHV0KG9sZFN0cmluZyk7XG4gICAgbmV3U3RyaW5nID0gdGhpcy5jYXN0SW5wdXQobmV3U3RyaW5nKTtcblxuICAgIG9sZFN0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShvbGRTdHJpbmcpKTtcbiAgICBuZXdTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUobmV3U3RyaW5nKSk7XG5cbiAgICBsZXQgbmV3TGVuID0gbmV3U3RyaW5nLmxlbmd0aCwgb2xkTGVuID0gb2xkU3RyaW5nLmxlbmd0aDtcbiAgICBsZXQgZWRpdExlbmd0aCA9IDE7XG4gICAgbGV0IG1heEVkaXRMZW5ndGggPSBuZXdMZW4gKyBvbGRMZW47XG4gICAgaWYob3B0aW9ucy5tYXhFZGl0TGVuZ3RoKSB7XG4gICAgICBtYXhFZGl0TGVuZ3RoID0gTWF0aC5taW4obWF4RWRpdExlbmd0aCwgb3B0aW9ucy5tYXhFZGl0TGVuZ3RoKTtcbiAgICB9XG5cbiAgICBsZXQgYmVzdFBhdGggPSBbeyBuZXdQb3M6IC0xLCBjb21wb25lbnRzOiBbXSB9XTtcblxuICAgIC8vIFNlZWQgZWRpdExlbmd0aCA9IDAsIGkuZS4gdGhlIGNvbnRlbnQgc3RhcnRzIHdpdGggdGhlIHNhbWUgdmFsdWVzXG4gICAgbGV0IG9sZFBvcyA9IHRoaXMuZXh0cmFjdENvbW1vbihiZXN0UGF0aFswXSwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIDApO1xuICAgIGlmIChiZXN0UGF0aFswXS5uZXdQb3MgKyAxID49IG5ld0xlbiAmJiBvbGRQb3MgKyAxID49IG9sZExlbikge1xuICAgICAgLy8gSWRlbnRpdHkgcGVyIHRoZSBlcXVhbGl0eSBhbmQgdG9rZW5pemVyXG4gICAgICByZXR1cm4gZG9uZShbe3ZhbHVlOiB0aGlzLmpvaW4obmV3U3RyaW5nKSwgY291bnQ6IG5ld1N0cmluZy5sZW5ndGh9XSk7XG4gICAgfVxuXG4gICAgLy8gTWFpbiB3b3JrZXIgbWV0aG9kLiBjaGVja3MgYWxsIHBlcm11dGF0aW9ucyBvZiBhIGdpdmVuIGVkaXQgbGVuZ3RoIGZvciBhY2NlcHRhbmNlLlxuICAgIGZ1bmN0aW9uIGV4ZWNFZGl0TGVuZ3RoKCkge1xuICAgICAgZm9yIChsZXQgZGlhZ29uYWxQYXRoID0gLTEgKiBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggPD0gZWRpdExlbmd0aDsgZGlhZ29uYWxQYXRoICs9IDIpIHtcbiAgICAgICAgbGV0IGJhc2VQYXRoO1xuICAgICAgICBsZXQgYWRkUGF0aCA9IGJlc3RQYXRoW2RpYWdvbmFsUGF0aCAtIDFdLFxuICAgICAgICAgICAgcmVtb3ZlUGF0aCA9IGJlc3RQYXRoW2RpYWdvbmFsUGF0aCArIDFdLFxuICAgICAgICAgICAgb2xkUG9zID0gKHJlbW92ZVBhdGggPyByZW1vdmVQYXRoLm5ld1BvcyA6IDApIC0gZGlhZ29uYWxQYXRoO1xuICAgICAgICBpZiAoYWRkUGF0aCkge1xuICAgICAgICAgIC8vIE5vIG9uZSBlbHNlIGlzIGdvaW5nIHRvIGF0dGVtcHQgdG8gdXNlIHRoaXMgdmFsdWUsIGNsZWFyIGl0XG4gICAgICAgICAgYmVzdFBhdGhbZGlhZ29uYWxQYXRoIC0gMV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY2FuQWRkID0gYWRkUGF0aCAmJiBhZGRQYXRoLm5ld1BvcyArIDEgPCBuZXdMZW4sXG4gICAgICAgICAgICBjYW5SZW1vdmUgPSByZW1vdmVQYXRoICYmIDAgPD0gb2xkUG9zICYmIG9sZFBvcyA8IG9sZExlbjtcbiAgICAgICAgaWYgKCFjYW5BZGQgJiYgIWNhblJlbW92ZSkge1xuICAgICAgICAgIC8vIElmIHRoaXMgcGF0aCBpcyBhIHRlcm1pbmFsIHRoZW4gcHJ1bmVcbiAgICAgICAgICBiZXN0UGF0aFtkaWFnb25hbFBhdGhdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VsZWN0IHRoZSBkaWFnb25hbCB0aGF0IHdlIHdhbnQgdG8gYnJhbmNoIGZyb20uIFdlIHNlbGVjdCB0aGUgcHJpb3JcbiAgICAgICAgLy8gcGF0aCB3aG9zZSBwb3NpdGlvbiBpbiB0aGUgbmV3IHN0cmluZyBpcyB0aGUgZmFydGhlc3QgZnJvbSB0aGUgb3JpZ2luXG4gICAgICAgIC8vIGFuZCBkb2VzIG5vdCBwYXNzIHRoZSBib3VuZHMgb2YgdGhlIGRpZmYgZ3JhcGhcbiAgICAgICAgaWYgKCFjYW5BZGQgfHwgKGNhblJlbW92ZSAmJiBhZGRQYXRoLm5ld1BvcyA8IHJlbW92ZVBhdGgubmV3UG9zKSkge1xuICAgICAgICAgIGJhc2VQYXRoID0gY2xvbmVQYXRoKHJlbW92ZVBhdGgpO1xuICAgICAgICAgIHNlbGYucHVzaENvbXBvbmVudChiYXNlUGF0aC5jb21wb25lbnRzLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJhc2VQYXRoID0gYWRkUGF0aDsgLy8gTm8gbmVlZCB0byBjbG9uZSwgd2UndmUgcHVsbGVkIGl0IGZyb20gdGhlIGxpc3RcbiAgICAgICAgICBiYXNlUGF0aC5uZXdQb3MrKztcbiAgICAgICAgICBzZWxmLnB1c2hDb21wb25lbnQoYmFzZVBhdGguY29tcG9uZW50cywgdHJ1ZSwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG9sZFBvcyA9IHNlbGYuZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCk7XG5cbiAgICAgICAgLy8gSWYgd2UgaGF2ZSBoaXQgdGhlIGVuZCBvZiBib3RoIHN0cmluZ3MsIHRoZW4gd2UgYXJlIGRvbmVcbiAgICAgICAgaWYgKGJhc2VQYXRoLm5ld1BvcyArIDEgPj0gbmV3TGVuICYmIG9sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAgICAgcmV0dXJuIGRvbmUoYnVpbGRWYWx1ZXMoc2VsZiwgYmFzZVBhdGguY29tcG9uZW50cywgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIHNlbGYudXNlTG9uZ2VzdFRva2VuKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIHRyYWNrIHRoaXMgcGF0aCBhcyBhIHBvdGVudGlhbCBjYW5kaWRhdGUgYW5kIGNvbnRpbnVlLlxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSBiYXNlUGF0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlZGl0TGVuZ3RoKys7XG4gICAgfVxuXG4gICAgLy8gUGVyZm9ybXMgdGhlIGxlbmd0aCBvZiBlZGl0IGl0ZXJhdGlvbi4gSXMgYSBiaXQgZnVnbHkgYXMgdGhpcyBoYXMgdG8gc3VwcG9ydCB0aGVcbiAgICAvLyBzeW5jIGFuZCBhc3luYyBtb2RlIHdoaWNoIGlzIG5ldmVyIGZ1bi4gTG9vcHMgb3ZlciBleGVjRWRpdExlbmd0aCB1bnRpbCBhIHZhbHVlXG4gICAgLy8gaXMgcHJvZHVjZWQsIG9yIHVudGlsIHRoZSBlZGl0IGxlbmd0aCBleGNlZWRzIG9wdGlvbnMubWF4RWRpdExlbmd0aCAoaWYgZ2l2ZW4pLFxuICAgIC8vIGluIHdoaWNoIGNhc2UgaXQgd2lsbCByZXR1cm4gdW5kZWZpbmVkLlxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgKGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKGVkaXRMZW5ndGggPiBtYXhFZGl0TGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWV4ZWNFZGl0TGVuZ3RoKCkpIHtcbiAgICAgICAgICAgIGV4ZWMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgICAgfSgpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKGVkaXRMZW5ndGggPD0gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICBsZXQgcmV0ID0gZXhlY0VkaXRMZW5ndGgoKTtcbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcHVzaENvbXBvbmVudChjb21wb25lbnRzLCBhZGRlZCwgcmVtb3ZlZCkge1xuICAgIGxldCBsYXN0ID0gY29tcG9uZW50c1tjb21wb25lbnRzLmxlbmd0aCAtIDFdO1xuICAgIGlmIChsYXN0ICYmIGxhc3QuYWRkZWQgPT09IGFkZGVkICYmIGxhc3QucmVtb3ZlZCA9PT0gcmVtb3ZlZCkge1xuICAgICAgLy8gV2UgbmVlZCB0byBjbG9uZSBoZXJlIGFzIHRoZSBjb21wb25lbnQgY2xvbmUgb3BlcmF0aW9uIGlzIGp1c3RcbiAgICAgIC8vIGFzIHNoYWxsb3cgYXJyYXkgY2xvbmVcbiAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXSA9IHtjb3VudDogbGFzdC5jb3VudCArIDEsIGFkZGVkOiBhZGRlZCwgcmVtb3ZlZDogcmVtb3ZlZCB9O1xuICAgIH0gZWxzZSB7XG4gICAgICBjb21wb25lbnRzLnB1c2goe2NvdW50OiAxLCBhZGRlZDogYWRkZWQsIHJlbW92ZWQ6IHJlbW92ZWQgfSk7XG4gICAgfVxuICB9LFxuICBleHRyYWN0Q29tbW9uKGJhc2VQYXRoLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgZGlhZ29uYWxQYXRoKSB7XG4gICAgbGV0IG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsXG4gICAgICAgIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGgsXG4gICAgICAgIG5ld1BvcyA9IGJhc2VQYXRoLm5ld1BvcyxcbiAgICAgICAgb2xkUG9zID0gbmV3UG9zIC0gZGlhZ29uYWxQYXRoLFxuXG4gICAgICAgIGNvbW1vbkNvdW50ID0gMDtcbiAgICB3aGlsZSAobmV3UG9zICsgMSA8IG5ld0xlbiAmJiBvbGRQb3MgKyAxIDwgb2xkTGVuICYmIHRoaXMuZXF1YWxzKG5ld1N0cmluZ1tuZXdQb3MgKyAxXSwgb2xkU3RyaW5nW29sZFBvcyArIDFdKSkge1xuICAgICAgbmV3UG9zKys7XG4gICAgICBvbGRQb3MrKztcbiAgICAgIGNvbW1vbkNvdW50Kys7XG4gICAgfVxuXG4gICAgaWYgKGNvbW1vbkNvdW50KSB7XG4gICAgICBiYXNlUGF0aC5jb21wb25lbnRzLnB1c2goe2NvdW50OiBjb21tb25Db3VudH0pO1xuICAgIH1cblxuICAgIGJhc2VQYXRoLm5ld1BvcyA9IG5ld1BvcztcbiAgICByZXR1cm4gb2xkUG9zO1xuICB9LFxuXG4gIGVxdWFscyhsZWZ0LCByaWdodCkge1xuICAgIGlmICh0aGlzLm9wdGlvbnMuY29tcGFyYXRvcikge1xuICAgICAgcmV0dXJuIHRoaXMub3B0aW9ucy5jb21wYXJhdG9yKGxlZnQsIHJpZ2h0KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGxlZnQgPT09IHJpZ2h0XG4gICAgICAgIHx8ICh0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSAmJiBsZWZ0LnRvTG93ZXJDYXNlKCkgPT09IHJpZ2h0LnRvTG93ZXJDYXNlKCkpO1xuICAgIH1cbiAgfSxcbiAgcmVtb3ZlRW1wdHkoYXJyYXkpIHtcbiAgICBsZXQgcmV0ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFycmF5W2ldKSB7XG4gICAgICAgIHJldC5wdXNoKGFycmF5W2ldKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfSxcbiAgY2FzdElucHV0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuICB0b2tlbml6ZSh2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZS5zcGxpdCgnJyk7XG4gIH0sXG4gIGpvaW4oY2hhcnMpIHtcbiAgICByZXR1cm4gY2hhcnMuam9pbignJyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGJ1aWxkVmFsdWVzKGRpZmYsIGNvbXBvbmVudHMsIG5ld1N0cmluZywgb2xkU3RyaW5nLCB1c2VMb25nZXN0VG9rZW4pIHtcbiAgbGV0IGNvbXBvbmVudFBvcyA9IDAsXG4gICAgICBjb21wb25lbnRMZW4gPSBjb21wb25lbnRzLmxlbmd0aCxcbiAgICAgIG5ld1BvcyA9IDAsXG4gICAgICBvbGRQb3MgPSAwO1xuXG4gIGZvciAoOyBjb21wb25lbnRQb3MgPCBjb21wb25lbnRMZW47IGNvbXBvbmVudFBvcysrKSB7XG4gICAgbGV0IGNvbXBvbmVudCA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zXTtcbiAgICBpZiAoIWNvbXBvbmVudC5yZW1vdmVkKSB7XG4gICAgICBpZiAoIWNvbXBvbmVudC5hZGRlZCAmJiB1c2VMb25nZXN0VG9rZW4pIHtcbiAgICAgICAgbGV0IHZhbHVlID0gbmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KTtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24odmFsdWUsIGkpIHtcbiAgICAgICAgICBsZXQgb2xkVmFsdWUgPSBvbGRTdHJpbmdbb2xkUG9zICsgaV07XG4gICAgICAgICAgcmV0dXJuIG9sZFZhbHVlLmxlbmd0aCA+IHZhbHVlLmxlbmd0aCA/IG9sZFZhbHVlIDogdmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbih2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb21wb25lbnQudmFsdWUgPSBkaWZmLmpvaW4obmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KSk7XG4gICAgICB9XG4gICAgICBuZXdQb3MgKz0gY29tcG9uZW50LmNvdW50O1xuXG4gICAgICAvLyBDb21tb24gY2FzZVxuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQpIHtcbiAgICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG9sZFN0cmluZy5zbGljZShvbGRQb3MsIG9sZFBvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcblxuICAgICAgLy8gUmV2ZXJzZSBhZGQgYW5kIHJlbW92ZSBzbyByZW1vdmVzIGFyZSBvdXRwdXQgZmlyc3QgdG8gbWF0Y2ggY29tbW9uIGNvbnZlbnRpb25cbiAgICAgIC8vIFRoZSBkaWZmaW5nIGFsZ29yaXRobSBpcyB0aWVkIHRvIGFkZCB0aGVuIHJlbW92ZSBvdXRwdXQgYW5kIHRoaXMgaXMgdGhlIHNpbXBsZXN0XG4gICAgICAvLyByb3V0ZSB0byBnZXQgdGhlIGRlc2lyZWQgb3V0cHV0IHdpdGggbWluaW1hbCBvdmVyaGVhZC5cbiAgICAgIGlmIChjb21wb25lbnRQb3MgJiYgY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXS5hZGRlZCkge1xuICAgICAgICBsZXQgdG1wID0gY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXTtcbiAgICAgICAgY29tcG9uZW50c1tjb21wb25lbnRQb3MgLSAxXSA9IGNvbXBvbmVudHNbY29tcG9uZW50UG9zXTtcbiAgICAgICAgY29tcG9uZW50c1tjb21wb25lbnRQb3NdID0gdG1wO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFNwZWNpYWwgY2FzZSBoYW5kbGUgZm9yIHdoZW4gb25lIHRlcm1pbmFsIGlzIGlnbm9yZWQgKGkuZS4gd2hpdGVzcGFjZSkuXG4gIC8vIEZvciB0aGlzIGNhc2Ugd2UgbWVyZ2UgdGhlIHRlcm1pbmFsIGludG8gdGhlIHByaW9yIHN0cmluZyBhbmQgZHJvcCB0aGUgY2hhbmdlLlxuICAvLyBUaGlzIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBzdHJpbmcgbW9kZS5cbiAgbGV0IGxhc3RDb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDFdO1xuICBpZiAoY29tcG9uZW50TGVuID4gMVxuICAgICAgJiYgdHlwZW9mIGxhc3RDb21wb25lbnQudmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAmJiAobGFzdENvbXBvbmVudC5hZGRlZCB8fCBsYXN0Q29tcG9uZW50LnJlbW92ZWQpXG4gICAgICAmJiBkaWZmLmVxdWFscygnJywgbGFzdENvbXBvbmVudC52YWx1ZSkpIHtcbiAgICBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDJdLnZhbHVlICs9IGxhc3RDb21wb25lbnQudmFsdWU7XG4gICAgY29tcG9uZW50cy5wb3AoKTtcbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuXG5mdW5jdGlvbiBjbG9uZVBhdGgocGF0aCkge1xuICByZXR1cm4geyBuZXdQb3M6IHBhdGgubmV3UG9zLCBjb21wb25lbnRzOiBwYXRoLmNvbXBvbmVudHMuc2xpY2UoMCkgfTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/diff/lib/diff/character.js":
/*!*************************************************!*\
  !*** ./node_modules/diff/lib/diff/character.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffChars = diffChars;
exports.characterDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var characterDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.characterDiff = characterDiff;

/*istanbul ignore end*/
function diffChars(oldStr, newStr, options) {
  return characterDiff.diff(oldStr, newStr, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2NoYXJhY3Rlci5qcyJdLCJuYW1lcyI6WyJjaGFyYWN0ZXJEaWZmIiwiRGlmZiIsImRpZmZDaGFycyIsIm9sZFN0ciIsIm5ld1N0ciIsIm9wdGlvbnMiLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFFTyxJQUFNQSxhQUFhLEdBQUc7QUFBSUM7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsQ0FBSixFQUF0Qjs7Ozs7O0FBQ0EsU0FBU0MsU0FBVCxDQUFtQkMsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxPQUFuQyxFQUE0QztBQUFFLFNBQU9MLGFBQWEsQ0FBQ00sSUFBZCxDQUFtQkgsTUFBbkIsRUFBMkJDLE1BQTNCLEVBQW1DQyxPQUFuQyxDQUFQO0FBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNvbnN0IGNoYXJhY3RlckRpZmYgPSBuZXcgRGlmZigpO1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZDaGFycyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykgeyByZXR1cm4gY2hhcmFjdGVyRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTsgfVxuIl19


/***/ }),

/***/ "./node_modules/diff/lib/diff/css.js":
/*!*******************************************!*\
  !*** ./node_modules/diff/lib/diff/css.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffCss = diffCss;
exports.cssDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var cssDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.cssDiff = cssDiff;

/*istanbul ignore end*/
cssDiff.tokenize = function (value) {
  return value.split(/([{}:;,]|\s+)/);
};

function diffCss(oldStr, newStr, callback) {
  return cssDiff.diff(oldStr, newStr, callback);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2Nzcy5qcyJdLCJuYW1lcyI6WyJjc3NEaWZmIiwiRGlmZiIsInRva2VuaXplIiwidmFsdWUiLCJzcGxpdCIsImRpZmZDc3MiLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUVPLElBQU1BLE9BQU8sR0FBRztBQUFJQztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQSxDQUFKLEVBQWhCOzs7Ozs7QUFDUEQsT0FBTyxDQUFDRSxRQUFSLEdBQW1CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDakMsU0FBT0EsS0FBSyxDQUFDQyxLQUFOLENBQVksZUFBWixDQUFQO0FBQ0QsQ0FGRDs7QUFJTyxTQUFTQyxPQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLFFBQWpDLEVBQTJDO0FBQUUsU0FBT1IsT0FBTyxDQUFDUyxJQUFSLENBQWFILE1BQWIsRUFBcUJDLE1BQXJCLEVBQTZCQyxRQUE3QixDQUFQO0FBQWdEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcblxuZXhwb3J0IGNvbnN0IGNzc0RpZmYgPSBuZXcgRGlmZigpO1xuY3NzRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgvKFt7fTo7LF18XFxzKykvKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmQ3NzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykgeyByZXR1cm4gY3NzRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbiJdfQ==


/***/ }),

/***/ "./node_modules/diff/lib/diff/json.js":
/*!********************************************!*\
  !*** ./node_modules/diff/lib/diff/json.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffJson = diffJson;
exports.canonicalize = canonicalize;
exports.jsonDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_line = __webpack_require__(/*! ./line */ "./node_modules/diff/lib/diff/line.js")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*istanbul ignore end*/
var objectPrototypeToString = Object.prototype.toString;
var jsonDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
](); // Discriminate between two lines of pretty-printed, serialized JSON where one of them has a
// dangling comma and the other doesn't. Turns out including the dangling comma yields the nicest output:

/*istanbul ignore start*/
exports.jsonDiff = jsonDiff;

/*istanbul ignore end*/
jsonDiff.useLongestToken = true;
jsonDiff.tokenize =
/*istanbul ignore start*/
_line
/*istanbul ignore end*/
.
/*istanbul ignore start*/
lineDiff
/*istanbul ignore end*/
.tokenize;

jsonDiff.castInput = function (value) {
  /*istanbul ignore start*/
  var _this$options =
  /*istanbul ignore end*/
  this.options,
      undefinedReplacement = _this$options.undefinedReplacement,
      _this$options$stringi = _this$options.stringifyReplacer,
      stringifyReplacer = _this$options$stringi === void 0 ? function (k, v)
  /*istanbul ignore start*/
  {
    return (
      /*istanbul ignore end*/
      typeof v === 'undefined' ? undefinedReplacement : v
    );
  } : _this$options$stringi;
  return typeof value === 'string' ? value : JSON.stringify(canonicalize(value, null, null, stringifyReplacer), stringifyReplacer, '  ');
};

jsonDiff.equals = function (left, right) {
  return (
    /*istanbul ignore start*/
    _base
    /*istanbul ignore end*/
    [
    /*istanbul ignore start*/
    "default"
    /*istanbul ignore end*/
    ].prototype.equals.call(jsonDiff, left.replace(/,([\r\n])/g, '$1'), right.replace(/,([\r\n])/g, '$1'))
  );
};

function diffJson(oldObj, newObj, options) {
  return jsonDiff.diff(oldObj, newObj, options);
} // This function handles the presence of circular references by bailing out when encountering an
// object that is already on the "stack" of items being processed. Accepts an optional replacer


function canonicalize(obj, stack, replacementStack, replacer, key) {
  stack = stack || [];
  replacementStack = replacementStack || [];

  if (replacer) {
    obj = replacer(key, obj);
  }

  var i;

  for (i = 0; i < stack.length; i += 1) {
    if (stack[i] === obj) {
      return replacementStack[i];
    }
  }

  var canonicalizedObj;

  if ('[object Array]' === objectPrototypeToString.call(obj)) {
    stack.push(obj);
    canonicalizedObj = new Array(obj.length);
    replacementStack.push(canonicalizedObj);

    for (i = 0; i < obj.length; i += 1) {
      canonicalizedObj[i] = canonicalize(obj[i], stack, replacementStack, replacer, key);
    }

    stack.pop();
    replacementStack.pop();
    return canonicalizedObj;
  }

  if (obj && obj.toJSON) {
    obj = obj.toJSON();
  }

  if (
  /*istanbul ignore start*/
  _typeof(
  /*istanbul ignore end*/
  obj) === 'object' && obj !== null) {
    stack.push(obj);
    canonicalizedObj = {};
    replacementStack.push(canonicalizedObj);

    var sortedKeys = [],
        _key;

    for (_key in obj) {
      /* istanbul ignore else */
      if (obj.hasOwnProperty(_key)) {
        sortedKeys.push(_key);
      }
    }

    sortedKeys.sort();

    for (i = 0; i < sortedKeys.length; i += 1) {
      _key = sortedKeys[i];
      canonicalizedObj[_key] = canonicalize(obj[_key], stack, replacementStack, replacer, _key);
    }

    stack.pop();
    replacementStack.pop();
  } else {
    canonicalizedObj = obj;
  }

  return canonicalizedObj;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2pzb24uanMiXSwibmFtZXMiOlsib2JqZWN0UHJvdG90eXBlVG9TdHJpbmciLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImpzb25EaWZmIiwiRGlmZiIsInVzZUxvbmdlc3RUb2tlbiIsInRva2VuaXplIiwibGluZURpZmYiLCJjYXN0SW5wdXQiLCJ2YWx1ZSIsIm9wdGlvbnMiLCJ1bmRlZmluZWRSZXBsYWNlbWVudCIsInN0cmluZ2lmeVJlcGxhY2VyIiwiayIsInYiLCJKU09OIiwic3RyaW5naWZ5IiwiY2Fub25pY2FsaXplIiwiZXF1YWxzIiwibGVmdCIsInJpZ2h0IiwiY2FsbCIsInJlcGxhY2UiLCJkaWZmSnNvbiIsIm9sZE9iaiIsIm5ld09iaiIsImRpZmYiLCJvYmoiLCJzdGFjayIsInJlcGxhY2VtZW50U3RhY2siLCJyZXBsYWNlciIsImtleSIsImkiLCJsZW5ndGgiLCJjYW5vbmljYWxpemVkT2JqIiwicHVzaCIsIkFycmF5IiwicG9wIiwidG9KU09OIiwic29ydGVkS2V5cyIsImhhc093blByb3BlcnR5Iiwic29ydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxRQUFqRDtBQUdPLElBQU1DLFFBQVEsR0FBRztBQUFJQztBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQTtBQUFBQSxDQUFKLEVBQWpCLEMsQ0FDUDtBQUNBOzs7Ozs7QUFDQUQsUUFBUSxDQUFDRSxlQUFULEdBQTJCLElBQTNCO0FBRUFGLFFBQVEsQ0FBQ0csUUFBVDtBQUFvQkM7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQTtBQUFBLENBQVNELFFBQTdCOztBQUNBSCxRQUFRLENBQUNLLFNBQVQsR0FBcUIsVUFBU0MsS0FB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Z0IsR0FBR1AsR0FBbkI7QUFDRDs7QUFDRCxTQUFPTyxnQkFBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7bGluZURpZmZ9IGZyb20gJy4vbGluZSc7XG5cbmNvbnN0IG9iamVjdFByb3RvdHlwZVRvU3RyaW5nID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZztcblxuXG5leHBvcnQgY29uc3QganNvbkRpZmYgPSBuZXcgRGlmZigpO1xuLy8gRGlzY3JpbWluYXRlIGJldHdlZW4gdHdvIGxpbmVzIG9mIHByZXR0eS1wcmludGVkLCBzZXJpYWxpemVkIEpTT04gd2hlcmUgb25lIG9mIHRoZW0gaGFzIGFcbi8vIGRhbmdsaW5nIGNvbW1hIGFuZCB0aGUgb3RoZXIgZG9lc24ndC4gVHVybnMgb3V0IGluY2x1ZGluZyB0aGUgZGFuZ2xpbmcgY29tbWEgeWllbGRzIHRoZSBuaWNlc3Qgb3V0cHV0OlxuanNvbkRpZmYudXNlTG9uZ2VzdFRva2VuID0gdHJ1ZTtcblxuanNvbkRpZmYudG9rZW5pemUgPSBsaW5lRGlmZi50b2tlbml6ZTtcbmpzb25EaWZmLmNhc3RJbnB1dCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGNvbnN0IHt1bmRlZmluZWRSZXBsYWNlbWVudCwgc3RyaW5naWZ5UmVwbGFjZXIgPSAoaywgdikgPT4gdHlwZW9mIHYgPT09ICd1bmRlZmluZWQnID8gdW5kZWZpbmVkUmVwbGFjZW1lbnQgOiB2fSA9IHRoaXMub3B0aW9ucztcblxuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkoY2Fub25pY2FsaXplKHZhbHVlLCBudWxsLCBudWxsLCBzdHJpbmdpZnlSZXBsYWNlciksIHN0cmluZ2lmeVJlcGxhY2VyLCAnICAnKTtcbn07XG5qc29uRGlmZi5lcXVhbHMgPSBmdW5jdGlvbihsZWZ0LCByaWdodCkge1xuICByZXR1cm4gRGlmZi5wcm90b3R5cGUuZXF1YWxzLmNhbGwoanNvbkRpZmYsIGxlZnQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJyksIHJpZ2h0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmSnNvbihvbGRPYmosIG5ld09iaiwgb3B0aW9ucykgeyByZXR1cm4ganNvbkRpZmYuZGlmZihvbGRPYmosIG5ld09iaiwgb3B0aW9ucyk7IH1cblxuLy8gVGhpcyBmdW5jdGlvbiBoYW5kbGVzIHRoZSBwcmVzZW5jZSBvZiBjaXJjdWxhciByZWZlcmVuY2VzIGJ5IGJhaWxpbmcgb3V0IHdoZW4gZW5jb3VudGVyaW5nIGFuXG4vLyBvYmplY3QgdGhhdCBpcyBhbHJlYWR5IG9uIHRoZSBcInN0YWNrXCIgb2YgaXRlbXMgYmVpbmcgcHJvY2Vzc2VkLiBBY2NlcHRzIGFuIG9wdGlvbmFsIHJlcGxhY2VyXG5leHBvcnQgZnVuY3Rpb24gY2Fub25pY2FsaXplKG9iaiwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpIHtcbiAgc3RhY2sgPSBzdGFjayB8fCBbXTtcbiAgcmVwbGFjZW1lbnRTdGFjayA9IHJlcGxhY2VtZW50U3RhY2sgfHwgW107XG5cbiAgaWYgKHJlcGxhY2VyKSB7XG4gICAgb2JqID0gcmVwbGFjZXIoa2V5LCBvYmopO1xuICB9XG5cbiAgbGV0IGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgaWYgKHN0YWNrW2ldID09PSBvYmopIHtcbiAgICAgIHJldHVybiByZXBsYWNlbWVudFN0YWNrW2ldO1xuICAgIH1cbiAgfVxuXG4gIGxldCBjYW5vbmljYWxpemVkT2JqO1xuXG4gIGlmICgnW29iamVjdCBBcnJheV0nID09PSBvYmplY3RQcm90b3R5cGVUb1N0cmluZy5jYWxsKG9iaikpIHtcbiAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgY2Fub25pY2FsaXplZE9iaiA9IG5ldyBBcnJheShvYmoubGVuZ3RoKTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnB1c2goY2Fub25pY2FsaXplZE9iaik7XG4gICAgZm9yIChpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY2Fub25pY2FsaXplZE9ialtpXSA9IGNhbm9uaWNhbGl6ZShvYmpbaV0sIHN0YWNrLCByZXBsYWNlbWVudFN0YWNrLCByZXBsYWNlciwga2V5KTtcbiAgICB9XG4gICAgc3RhY2sucG9wKCk7XG4gICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbiAgfVxuXG4gIGlmIChvYmogJiYgb2JqLnRvSlNPTikge1xuICAgIG9iaiA9IG9iai50b0pTT04oKTtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHtcbiAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgY2Fub25pY2FsaXplZE9iaiA9IHt9O1xuICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcbiAgICBsZXQgc29ydGVkS2V5cyA9IFtdLFxuICAgICAgICBrZXk7XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgIHNvcnRlZEtleXMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgICBzb3J0ZWRLZXlzLnNvcnQoKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc29ydGVkS2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAga2V5ID0gc29ydGVkS2V5c1tpXTtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmpba2V5XSA9IGNhbm9uaWNhbGl6ZShvYmpba2V5XSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBrZXkpO1xuICAgIH1cbiAgICBzdGFjay5wb3AoKTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIGNhbm9uaWNhbGl6ZWRPYmogPSBvYmo7XG4gIH1cbiAgcmV0dXJuIGNhbm9uaWNhbGl6ZWRPYmo7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/diff/lib/diff/line.js":
/*!********************************************!*\
  !*** ./node_modules/diff/lib/diff/line.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffLines = diffLines;
exports.diffTrimmedLines = diffTrimmedLines;
exports.lineDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_params = __webpack_require__(/*! ../util/params */ "./node_modules/diff/lib/util/params.js")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var lineDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.lineDiff = lineDiff;

/*istanbul ignore end*/
lineDiff.tokenize = function (value) {
  var retLines = [],
      linesAndNewlines = value.split(/(\n|\r\n)/); // Ignore the final empty token that occurs if the string ends with a new line

  if (!linesAndNewlines[linesAndNewlines.length - 1]) {
    linesAndNewlines.pop();
  } // Merge the content and line separators into single tokens


  for (var i = 0; i < linesAndNewlines.length; i++) {
    var line = linesAndNewlines[i];

    if (i % 2 && !this.options.newlineIsToken) {
      retLines[retLines.length - 1] += line;
    } else {
      if (this.options.ignoreWhitespace) {
        line = line.trim();
      }

      retLines.push(line);
    }
  }

  return retLines;
};

function diffLines(oldStr, newStr, callback) {
  return lineDiff.diff(oldStr, newStr, callback);
}

function diffTrimmedLines(oldStr, newStr, callback) {
  var options =
  /*istanbul ignore start*/
  (0,
  /*istanbul ignore end*/

  /*istanbul ignore start*/
  _params
  /*istanbul ignore end*/
  .
  /*istanbul ignore start*/
  generateOptions)
  /*istanbul ignore end*/
  (callback, {
    ignoreWhitespace: true
  });
  return lineDiff.diff(oldStr, newStr, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL2xpbmUuanMiXSwibmFtZXMiOlsibGluZURpZmYiLCJEaWZmIiwidG9rZW5pemUiLCJ2YWx1ZSIsInJldExpbmVzIiwibGluZXNBbmROZXdsaW5lcyIsInNwbGl0IiwibGVuZ3RoIiwicG9wIiwiaSIsImxpbmUiLCJvcHRpb25zIiwibmV3bGluZUlzVG9rZW4iLCJpZ25vcmVXaGl0ZXNwYWNlIiwidHJpbSIsInB1c2giLCJkaWZmTGluZXMiLCJvbGRTdHIiLCJuZXdTdHIiLCJjYWxsYmFjayIsImRpZmYiLCJkaWZmVHJpbW1lZExpbmVzIiwiZ2VuZXJhdGVPcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFFTyxJQUFNQSxRQUFRLEdBQUc7QUFBSUM7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsQ0FBSixFQUFqQjs7Ozs7O0FBQ1BELFFBQVEsQ0FBQ0UsUUFBVCxHQUFvQixVQUFTQyxLQUFULEVBQWdCO0FBQ2xDLE1BQUlDLFFBQVEsR0FBRyxFQUFmO0FBQUEsTUFDSUMsZ0JBQWdCLEdBQUdGLEtBQUssQ0FBQ0csS0FBTixDQUFZLFdBQVosQ0FEdkIsQ0FEa0MsQ0FJbEM7O0FBQ0EsTUFBSSxDQUFDRCxnQkFBZ0IsQ0FBQ0EsZ0JBQWdCLENBQUNFLE1BQWpCLEdBQTBCLENBQTNCLENBQXJCLEVBQW9EO0FBQ2xERixJQUFBQSxnQkFBZ0IsQ0FBQ0csR0FBakI7QUFDRCxHQVBpQyxDQVNsQzs7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSixnQkFBZ0IsQ0FBQ0UsTUFBckMsRUFBNkNFLENBQUMsRUFBOUMsRUFBa0Q7QUFDaEQsUUFBSUMsSUFBSSxHQUFHTCxnQkFBZ0IsQ0FBQ0ksQ0FBRCxDQUEzQjs7QUFFQSxRQUFJQSxDQUFDLEdBQUcsQ0FBSixJQUFTLENBQUMsS0FBS0UsT0FBTCxDQUFhQyxjQUEzQixFQUEyQztBQUN6Q1IsTUFBQUEsUUFBUSxDQUFDQSxRQUFRLENBQUNHLE1BQVQsR0FBa0IsQ0FBbkIsQ0FBUixJQUFpQ0csSUFBakM7QUFDRCxLQUZELE1BRU87QUFDTCxVQUFJLEtBQUtDLE9BQUwsQ0FBYUUsZ0JBQWpCLEVBQW1DO0FBQ2pDSCxRQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ0ksSUFBTCxFQUFQO0FBQ0Q7O0FBQ0RWLE1BQUFBLFFBQVEsQ0FBQ1csSUFBVCxDQUFjTCxJQUFkO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPTixRQUFQO0FBQ0QsQ0F4QkQ7O0FBMEJPLFNBQVNZLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ0MsUUFBbkMsRUFBNkM7QUFBRSxTQUFPbkIsUUFBUSxDQUFDb0IsSUFBVCxDQUFjSCxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QkMsUUFBOUIsQ0FBUDtBQUFpRDs7QUFDaEcsU0FBU0UsZ0JBQVQsQ0FBMEJKLE1BQTFCLEVBQWtDQyxNQUFsQyxFQUEwQ0MsUUFBMUMsRUFBb0Q7QUFDekQsTUFBSVIsT0FBTztBQUFHO0FBQUE7QUFBQTs7QUFBQVc7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQTtBQUFBLEdBQWdCSCxRQUFoQixFQUEwQjtBQUFDTixJQUFBQSxnQkFBZ0IsRUFBRTtBQUFuQixHQUExQixDQUFkO0FBQ0EsU0FBT2IsUUFBUSxDQUFDb0IsSUFBVCxDQUFjSCxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QlAsT0FBOUIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Z2VuZXJhdGVPcHRpb25zfSBmcm9tICcuLi91dGlsL3BhcmFtcyc7XG5cbmV4cG9ydCBjb25zdCBsaW5lRGlmZiA9IG5ldyBEaWZmKCk7XG5saW5lRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIGxldCByZXRMaW5lcyA9IFtdLFxuICAgICAgbGluZXNBbmROZXdsaW5lcyA9IHZhbHVlLnNwbGl0KC8oXFxufFxcclxcbikvKTtcblxuICAvLyBJZ25vcmUgdGhlIGZpbmFsIGVtcHR5IHRva2VuIHRoYXQgb2NjdXJzIGlmIHRoZSBzdHJpbmcgZW5kcyB3aXRoIGEgbmV3IGxpbmVcbiAgaWYgKCFsaW5lc0FuZE5ld2xpbmVzW2xpbmVzQW5kTmV3bGluZXMubGVuZ3RoIC0gMV0pIHtcbiAgICBsaW5lc0FuZE5ld2xpbmVzLnBvcCgpO1xuICB9XG5cbiAgLy8gTWVyZ2UgdGhlIGNvbnRlbnQgYW5kIGxpbmUgc2VwYXJhdG9ycyBpbnRvIHNpbmdsZSB0b2tlbnNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGxpbmUgPSBsaW5lc0FuZE5ld2xpbmVzW2ldO1xuXG4gICAgaWYgKGkgJSAyICYmICF0aGlzLm9wdGlvbnMubmV3bGluZUlzVG9rZW4pIHtcbiAgICAgIHJldExpbmVzW3JldExpbmVzLmxlbmd0aCAtIDFdICs9IGxpbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSkge1xuICAgICAgICBsaW5lID0gbGluZS50cmltKCk7XG4gICAgICB9XG4gICAgICByZXRMaW5lcy5wdXNoKGxpbmUpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXRMaW5lcztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBkaWZmTGluZXMob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7IHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbmV4cG9ydCBmdW5jdGlvbiBkaWZmVHJpbW1lZExpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICBsZXQgb3B0aW9ucyA9IGdlbmVyYXRlT3B0aW9ucyhjYWxsYmFjaywge2lnbm9yZVdoaXRlc3BhY2U6IHRydWV9KTtcbiAgcmV0dXJuIGxpbmVEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIG9wdGlvbnMpO1xufVxuIl19


/***/ }),

/***/ "./node_modules/diff/lib/diff/sentence.js":
/*!************************************************!*\
  !*** ./node_modules/diff/lib/diff/sentence.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffSentences = diffSentences;
exports.sentenceDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
var sentenceDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.sentenceDiff = sentenceDiff;

/*istanbul ignore end*/
sentenceDiff.tokenize = function (value) {
  return value.split(/(\S.+?[.!?])(?=\s+|$)/);
};

function diffSentences(oldStr, newStr, callback) {
  return sentenceDiff.diff(oldStr, newStr, callback);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3NlbnRlbmNlLmpzIl0sIm5hbWVzIjpbInNlbnRlbmNlRGlmZiIsIkRpZmYiLCJ0b2tlbml6ZSIsInZhbHVlIiwic3BsaXQiLCJkaWZmU2VudGVuY2VzIiwib2xkU3RyIiwibmV3U3RyIiwiY2FsbGJhY2siLCJkaWZmIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFHTyxJQUFNQSxZQUFZLEdBQUc7QUFBSUM7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUE7QUFBQUEsQ0FBSixFQUFyQjs7Ozs7O0FBQ1BELFlBQVksQ0FBQ0UsUUFBYixHQUF3QixVQUFTQyxLQUFULEVBQWdCO0FBQ3RDLFNBQU9BLEtBQUssQ0FBQ0MsS0FBTixDQUFZLHVCQUFaLENBQVA7QUFDRCxDQUZEOztBQUlPLFNBQVNDLGFBQVQsQ0FBdUJDLE1BQXZCLEVBQStCQyxNQUEvQixFQUF1Q0MsUUFBdkMsRUFBaUQ7QUFBRSxTQUFPUixZQUFZLENBQUNTLElBQWIsQ0FBa0JILE1BQWxCLEVBQTBCQyxNQUExQixFQUFrQ0MsUUFBbEMsQ0FBUDtBQUFxRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEaWZmIGZyb20gJy4vYmFzZSc7XG5cblxuZXhwb3J0IGNvbnN0IHNlbnRlbmNlRGlmZiA9IG5ldyBEaWZmKCk7XG5zZW50ZW5jZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUuc3BsaXQoLyhcXFMuKz9bLiE/XSkoPz1cXHMrfCQpLyk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHsgcmV0dXJuIHNlbnRlbmNlRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7IH1cbiJdfQ==


/***/ }),

/***/ "./node_modules/diff/lib/diff/word.js":
/*!********************************************!*\
  !*** ./node_modules/diff/lib/diff/word.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.diffWords = diffWords;
exports.diffWordsWithSpace = diffWordsWithSpace;
exports.wordDiff = void 0;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_params = __webpack_require__(/*! ../util/params */ "./node_modules/diff/lib/util/params.js")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
// Based on https://en.wikipedia.org/wiki/Latin_script_in_Unicode
//
// Ranges and exceptions:
// Latin-1 Supplement, 0080–00FF
//  - U+00D7  × Multiplication sign
//  - U+00F7  ÷ Division sign
// Latin Extended-A, 0100–017F
// Latin Extended-B, 0180–024F
// IPA Extensions, 0250–02AF
// Spacing Modifier Letters, 02B0–02FF
//  - U+02C7  ˇ &#711;  Caron
//  - U+02D8  ˘ &#728;  Breve
//  - U+02D9  ˙ &#729;  Dot Above
//  - U+02DA  ˚ &#730;  Ring Above
//  - U+02DB  ˛ &#731;  Ogonek
//  - U+02DC  ˜ &#732;  Small Tilde
//  - U+02DD  ˝ &#733;  Double Acute Accent
// Latin Extended Additional, 1E00–1EFF
var extendedWordChars = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/;
var reWhitespace = /\S/;
var wordDiff = new
/*istanbul ignore start*/
_base
/*istanbul ignore end*/
[
/*istanbul ignore start*/
"default"
/*istanbul ignore end*/
]();

/*istanbul ignore start*/
exports.wordDiff = wordDiff;

/*istanbul ignore end*/
wordDiff.equals = function (left, right) {
  if (this.options.ignoreCase) {
    left = left.toLowerCase();
    right = right.toLowerCase();
  }

  return left === right || this.options.ignoreWhitespace && !reWhitespace.test(left) && !reWhitespace.test(right);
};

wordDiff.tokenize = function (value) {
  // All whitespace symbols except newline group into one token, each newline - in separate token
  var tokens = value.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/); // Join the boundary splits that we do not consider to be boundaries. This is primarily the extended Latin character set.

  for (var i = 0; i < tokens.length - 1; i++) {
    // If we have an empty string in the next field and we have only word chars before and after, merge
    if (!tokens[i + 1] && tokens[i + 2] && extendedWordChars.test(tokens[i]) && extendedWordChars.test(tokens[i + 2])) {
      tokens[i] += tokens[i + 2];
      tokens.splice(i + 1, 2);
      i--;
    }
  }

  return tokens;
};

function diffWords(oldStr, newStr, options) {
  options =
  /*istanbul ignore start*/
  (0,
  /*istanbul ignore end*/

  /*istanbul ignore start*/
  _params
  /*istanbul ignore end*/
  .
  /*istanbul ignore start*/
  generateOptions)
  /*istanbul ignore end*/
  (options, {
    ignoreWhitespace: true
  });
  return wordDiff.diff(oldStr, newStr, options);
}

function diffWordsWithSpace(oldStr, newStr, options) {
  return wordDiff.diff(oldStr, newStr, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kaWZmL3dvcmQuanMiXSwibmFtZXMiOlsiZXh0ZW5kZWRXb3JkQ2hhcnMiLCJyZVdoaXRlc3BhY2UiLCJ3b3JkRGlmZiIsIkRpZmYiLCJlcXVhbHMiLCJsZWZ0IiwicmlnaHQiLCJvcHRpb25zIiwiaWdub3JlQ2FzZSIsInRvTG93ZXJDYXNlIiwiaWdub3JlV2hpdGVzcGFjZSIsInRlc3QiLCJ0b2tlbml6ZSIsInZhbHVlIiwidG9rZW5zIiwic3BsaXQiLCJpIiwibGVuZ3RoIiwic3BsaWNlIiwiZGlmZldvcmRzIiwib2xkU3RyIiwibmV3U3RyIiwiZ2VuZXJhdGVPcHRpb25zIiwiZGlmZiIsImRpZmZXb3Jkc1dpdGhTcGFjZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsaUJBQWlCLEdBQUcsK0RBQTFCO0FBRUEsSUFBTUMsWUFBWSxHQUFHLElBQXJCO0FBRU8sSUFBTUMsUUFBUSxHQUFHO0FBQUlDO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBLENBQUosRUFBakI7Ozs7OztBQUNQRCxRQUFRLENBQUNFLE1BQVQsR0FBa0IsVUFBU0MsSUFBVCxFQUFlQyxLQUFmLEVBQXNCO0FBQ3RDLE1BQUksS0FBS0MsT0FBTCxDQUFhQyxVQUFqQixFQUE2QjtBQUMzQkgsSUFBQUEsSUFBSSxHQUFHQSxJQUFJLENBQUNJLFdBQUwsRUFBUDtBQUNBSCxJQUFBQSxLQUFLLEdBQUdBLEtBQUssQ0FBQ0csV0FBTixFQUFSO0FBQ0Q7O0FBQ0QsU0FBT0osSUFBSSxLQUFLQyxLQUFULElBQW1CLEtBQUtDLE9BQUwsQ0FBYUcsZ0JBQWIsSUFBaUMsQ0FBQ1QsWUFBWSxDQUFDVSxJQUFiLENBQWtCTixJQUFsQixDQUFsQyxJQUE2RCxDQUFDSixZQUFZLENBQUNVLElBQWIsQ0FBa0JMLEtBQWxCLENBQXhGO0FBQ0QsQ0FORDs7QUFPQUosUUFBUSxDQUFDVSxRQUFULEdBQW9CLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEM7QUFDQSxNQUFJQyxNQUFNLEdBQUdELEtBQUssQ0FBQ0UsS0FBTixDQUFZLGlDQUFaLENBQWIsQ0FGa0MsQ0FJbEM7O0FBQ0EsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixNQUFNLENBQUNHLE1BQVAsR0FBZ0IsQ0FBcEMsRUFBdUNELENBQUMsRUFBeEMsRUFBNEM7QUFDMUM7QUFDQSxRQUFJLENBQUNGLE1BQU0sQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBUCxJQUFrQkYsTUFBTSxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUF4QixJQUNLaEIsaUJBQWlCLENBQUNXLElBQWxCLENBQXVCRyxNQUFNLENBQUNFLENBQUQsQ0FBN0IsQ0FETCxJQUVLaEIsaUJBQWlCLENBQUNXLElBQWxCLENBQXVCRyxNQUFNLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQTdCLENBRlQsRUFFZ0Q7QUFDOUNGLE1BQUFBLE1BQU0sQ0FBQ0UsQ0FBRCxDQUFOLElBQWFGLE1BQU0sQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBbkI7QUFDQUYsTUFBQUEsTUFBTSxDQUFDSSxNQUFQLENBQWNGLENBQUMsR0FBRyxDQUFsQixFQUFxQixDQUFyQjtBQUNBQSxNQUFBQSxDQUFDO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPRixNQUFQO0FBQ0QsQ0FqQkQ7O0FBbUJPLFNBQVNLLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCQyxNQUEzQixFQUFtQ2QsT0FBbkMsRUFBNEM7QUFDakRBLEVBQUFBLE9BQU87QUFBRztBQUFBO0FBQUE7O0FBQUFlO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUFBO0FBQUE7QUFBQSxHQUFnQmYsT0FBaEIsRUFBeUI7QUFBQ0csSUFBQUEsZ0JBQWdCLEVBQUU7QUFBbkIsR0FBekIsQ0FBVjtBQUNBLFNBQU9SLFFBQVEsQ0FBQ3FCLElBQVQsQ0FBY0gsTUFBZCxFQUFzQkMsTUFBdEIsRUFBOEJkLE9BQTlCLENBQVA7QUFDRDs7QUFFTSxTQUFTaUIsa0JBQVQsQ0FBNEJKLE1BQTVCLEVBQW9DQyxNQUFwQyxFQUE0Q2QsT0FBNUMsRUFBcUQ7QUFDMUQsU0FBT0wsUUFBUSxDQUFDcUIsSUFBVCxDQUFjSCxNQUFkLEVBQXNCQyxNQUF0QixFQUE4QmQsT0FBOUIsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpZmYgZnJvbSAnLi9iYXNlJztcbmltcG9ydCB7Z2VuZXJhdGVPcHRpb25zfSBmcm9tICcuLi91dGlsL3BhcmFtcyc7XG5cbi8vIEJhc2VkIG9uIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0xhdGluX3NjcmlwdF9pbl9Vbmljb2RlXG4vL1xuLy8gUmFuZ2VzIGFuZCBleGNlcHRpb25zOlxuLy8gTGF0aW4tMSBTdXBwbGVtZW50LCAwMDgw4oCTMDBGRlxuLy8gIC0gVSswMEQ3ICDDlyBNdWx0aXBsaWNhdGlvbiBzaWduXG4vLyAgLSBVKzAwRjcgIMO3IERpdmlzaW9uIHNpZ25cbi8vIExhdGluIEV4dGVuZGVkLUEsIDAxMDDigJMwMTdGXG4vLyBMYXRpbiBFeHRlbmRlZC1CLCAwMTgw4oCTMDI0RlxuLy8gSVBBIEV4dGVuc2lvbnMsIDAyNTDigJMwMkFGXG4vLyBTcGFjaW5nIE1vZGlmaWVyIExldHRlcnMsIDAyQjDigJMwMkZGXG4vLyAgLSBVKzAyQzcgIMuHICYjNzExOyAgQ2Fyb25cbi8vICAtIFUrMDJEOCAgy5ggJiM3Mjg7ICBCcmV2ZVxuLy8gIC0gVSswMkQ5ICDLmSAmIzcyOTsgIERvdCBBYm92ZVxuLy8gIC0gVSswMkRBICDLmiAmIzczMDsgIFJpbmcgQWJvdmVcbi8vICAtIFUrMDJEQiAgy5sgJiM3MzE7ICBPZ29uZWtcbi8vICAtIFUrMDJEQyAgy5wgJiM3MzI7ICBTbWFsbCBUaWxkZVxuLy8gIC0gVSswMkREICDLnSAmIzczMzsgIERvdWJsZSBBY3V0ZSBBY2NlbnRcbi8vIExhdGluIEV4dGVuZGVkIEFkZGl0aW9uYWwsIDFFMDDigJMxRUZGXG5jb25zdCBleHRlbmRlZFdvcmRDaGFycyA9IC9eW2EtekEtWlxcdXtDMH0tXFx1e0ZGfVxcdXtEOH0tXFx1e0Y2fVxcdXtGOH0tXFx1ezJDNn1cXHV7MkM4fS1cXHV7MkQ3fVxcdXsyREV9LVxcdXsyRkZ9XFx1ezFFMDB9LVxcdXsxRUZGfV0rJC91O1xuXG5jb25zdCByZVdoaXRlc3BhY2UgPSAvXFxTLztcblxuZXhwb3J0IGNvbnN0IHdvcmREaWZmID0gbmV3IERpZmYoKTtcbndvcmREaWZmLmVxdWFscyA9IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSkge1xuICAgIGxlZnQgPSBsZWZ0LnRvTG93ZXJDYXNlKCk7XG4gICAgcmlnaHQgPSByaWdodC50b0xvd2VyQ2FzZSgpO1xuICB9XG4gIHJldHVybiBsZWZ0ID09PSByaWdodCB8fCAodGhpcy5vcHRpb25zLmlnbm9yZVdoaXRlc3BhY2UgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KGxlZnQpICYmICFyZVdoaXRlc3BhY2UudGVzdChyaWdodCkpO1xufTtcbndvcmREaWZmLnRva2VuaXplID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgLy8gQWxsIHdoaXRlc3BhY2Ugc3ltYm9scyBleGNlcHQgbmV3bGluZSBncm91cCBpbnRvIG9uZSB0b2tlbiwgZWFjaCBuZXdsaW5lIC0gaW4gc2VwYXJhdGUgdG9rZW5cbiAgbGV0IHRva2VucyA9IHZhbHVlLnNwbGl0KC8oW15cXFNcXHJcXG5dK3xbKClbXFxde30nXCJcXHJcXG5dfFxcYikvKTtcblxuICAvLyBKb2luIHRoZSBib3VuZGFyeSBzcGxpdHMgdGhhdCB3ZSBkbyBub3QgY29uc2lkZXIgdG8gYmUgYm91bmRhcmllcy4gVGhpcyBpcyBwcmltYXJpbHkgdGhlIGV4dGVuZGVkIExhdGluIGNoYXJhY3RlciBzZXQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIC8vIElmIHdlIGhhdmUgYW4gZW1wdHkgc3RyaW5nIGluIHRoZSBuZXh0IGZpZWxkIGFuZCB3ZSBoYXZlIG9ubHkgd29yZCBjaGFycyBiZWZvcmUgYW5kIGFmdGVyLCBtZXJnZVxuICAgIGlmICghdG9rZW5zW2kgKyAxXSAmJiB0b2tlbnNbaSArIDJdXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaV0pXG4gICAgICAgICAgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xuICAgICAgdG9rZW5zW2ldICs9IHRva2Vuc1tpICsgMl07XG4gICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAyKTtcbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3JkcyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICBvcHRpb25zID0gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIHtpZ25vcmVXaGl0ZXNwYWNlOiB0cnVlfSk7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpZmZXb3Jkc1dpdGhTcGFjZShvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICByZXR1cm4gd29yZERpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucyk7XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/diff/lib/index.js":
/*!****************************************!*\
  !*** ./node_modules/diff/lib/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Diff", ({
  enumerable: true,
  get: function get() {
    return _base["default"];
  }
}));
Object.defineProperty(exports, "diffChars", ({
  enumerable: true,
  get: function get() {
    return _character.diffChars;
  }
}));
Object.defineProperty(exports, "diffWords", ({
  enumerable: true,
  get: function get() {
    return _word.diffWords;
  }
}));
Object.defineProperty(exports, "diffWordsWithSpace", ({
  enumerable: true,
  get: function get() {
    return _word.diffWordsWithSpace;
  }
}));
Object.defineProperty(exports, "diffLines", ({
  enumerable: true,
  get: function get() {
    return _line.diffLines;
  }
}));
Object.defineProperty(exports, "diffTrimmedLines", ({
  enumerable: true,
  get: function get() {
    return _line.diffTrimmedLines;
  }
}));
Object.defineProperty(exports, "diffSentences", ({
  enumerable: true,
  get: function get() {
    return _sentence.diffSentences;
  }
}));
Object.defineProperty(exports, "diffCss", ({
  enumerable: true,
  get: function get() {
    return _css.diffCss;
  }
}));
Object.defineProperty(exports, "diffJson", ({
  enumerable: true,
  get: function get() {
    return _json.diffJson;
  }
}));
Object.defineProperty(exports, "canonicalize", ({
  enumerable: true,
  get: function get() {
    return _json.canonicalize;
  }
}));
Object.defineProperty(exports, "diffArrays", ({
  enumerable: true,
  get: function get() {
    return _array.diffArrays;
  }
}));
Object.defineProperty(exports, "applyPatch", ({
  enumerable: true,
  get: function get() {
    return _apply.applyPatch;
  }
}));
Object.defineProperty(exports, "applyPatches", ({
  enumerable: true,
  get: function get() {
    return _apply.applyPatches;
  }
}));
Object.defineProperty(exports, "parsePatch", ({
  enumerable: true,
  get: function get() {
    return _parse.parsePatch;
  }
}));
Object.defineProperty(exports, "merge", ({
  enumerable: true,
  get: function get() {
    return _merge.merge;
  }
}));
Object.defineProperty(exports, "structuredPatch", ({
  enumerable: true,
  get: function get() {
    return _create.structuredPatch;
  }
}));
Object.defineProperty(exports, "createTwoFilesPatch", ({
  enumerable: true,
  get: function get() {
    return _create.createTwoFilesPatch;
  }
}));
Object.defineProperty(exports, "createPatch", ({
  enumerable: true,
  get: function get() {
    return _create.createPatch;
  }
}));
Object.defineProperty(exports, "convertChangesToDMP", ({
  enumerable: true,
  get: function get() {
    return _dmp.convertChangesToDMP;
  }
}));
Object.defineProperty(exports, "convertChangesToXML", ({
  enumerable: true,
  get: function get() {
    return _xml.convertChangesToXML;
  }
}));

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_base = _interopRequireDefault(__webpack_require__(/*! ./diff/base */ "./node_modules/diff/lib/diff/base.js"))
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_character = __webpack_require__(/*! ./diff/character */ "./node_modules/diff/lib/diff/character.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_word = __webpack_require__(/*! ./diff/word */ "./node_modules/diff/lib/diff/word.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_line = __webpack_require__(/*! ./diff/line */ "./node_modules/diff/lib/diff/line.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_sentence = __webpack_require__(/*! ./diff/sentence */ "./node_modules/diff/lib/diff/sentence.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_css = __webpack_require__(/*! ./diff/css */ "./node_modules/diff/lib/diff/css.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_json = __webpack_require__(/*! ./diff/json */ "./node_modules/diff/lib/diff/json.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_array = __webpack_require__(/*! ./diff/array */ "./node_modules/diff/lib/diff/array.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_apply = __webpack_require__(/*! ./patch/apply */ "./node_modules/diff/lib/patch/apply.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_parse = __webpack_require__(/*! ./patch/parse */ "./node_modules/diff/lib/patch/parse.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_merge = __webpack_require__(/*! ./patch/merge */ "./node_modules/diff/lib/patch/merge.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_create = __webpack_require__(/*! ./patch/create */ "./node_modules/diff/lib/patch/create.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_dmp = __webpack_require__(/*! ./convert/dmp */ "./node_modules/diff/lib/convert/dmp.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_xml = __webpack_require__(/*! ./convert/xml */ "./node_modules/diff/lib/convert/xml.js")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBTZWUgTElDRU5TRSBmaWxlIGZvciB0ZXJtcyBvZiB1c2UgKi9cblxuLypcbiAqIFRleHQgZGlmZiBpbXBsZW1lbnRhdGlvbi5cbiAqXG4gKiBUaGlzIGxpYnJhcnkgc3VwcG9ydHMgdGhlIGZvbGxvd2luZyBBUElTOlxuICogSnNEaWZmLmRpZmZDaGFyczogQ2hhcmFjdGVyIGJ5IGNoYXJhY3RlciBkaWZmXG4gKiBKc0RpZmYuZGlmZldvcmRzOiBXb3JkIChhcyBkZWZpbmVkIGJ5IFxcYiByZWdleCkgZGlmZiB3aGljaCBpZ25vcmVzIHdoaXRlc3BhY2VcbiAqIEpzRGlmZi5kaWZmTGluZXM6IExpbmUgYmFzZWQgZGlmZlxuICpcbiAqIEpzRGlmZi5kaWZmQ3NzOiBEaWZmIHRhcmdldGVkIGF0IENTUyBjb250ZW50XG4gKlxuICogVGhlc2UgbWV0aG9kcyBhcmUgYmFzZWQgb24gdGhlIGltcGxlbWVudGF0aW9uIHByb3Bvc2VkIGluXG4gKiBcIkFuIE8oTkQpIERpZmZlcmVuY2UgQWxnb3JpdGhtIGFuZCBpdHMgVmFyaWF0aW9uc1wiIChNeWVycywgMTk4NikuXG4gKiBodHRwOi8vY2l0ZXNlZXJ4LmlzdC5wc3UuZWR1L3ZpZXdkb2Mvc3VtbWFyeT9kb2k9MTAuMS4xLjQuNjkyN1xuICovXG5pbXBvcnQgRGlmZiBmcm9tICcuL2RpZmYvYmFzZSc7XG5pbXBvcnQge2RpZmZDaGFyc30gZnJvbSAnLi9kaWZmL2NoYXJhY3Rlcic7XG5pbXBvcnQge2RpZmZXb3JkcywgZGlmZldvcmRzV2l0aFNwYWNlfSBmcm9tICcuL2RpZmYvd29yZCc7XG5pbXBvcnQge2RpZmZMaW5lcywgZGlmZlRyaW1tZWRMaW5lc30gZnJvbSAnLi9kaWZmL2xpbmUnO1xuaW1wb3J0IHtkaWZmU2VudGVuY2VzfSBmcm9tICcuL2RpZmYvc2VudGVuY2UnO1xuXG5pbXBvcnQge2RpZmZDc3N9IGZyb20gJy4vZGlmZi9jc3MnO1xuaW1wb3J0IHtkaWZmSnNvbiwgY2Fub25pY2FsaXplfSBmcm9tICcuL2RpZmYvanNvbic7XG5cbmltcG9ydCB7ZGlmZkFycmF5c30gZnJvbSAnLi9kaWZmL2FycmF5JztcblxuaW1wb3J0IHthcHBseVBhdGNoLCBhcHBseVBhdGNoZXN9IGZyb20gJy4vcGF0Y2gvYXBwbHknO1xuaW1wb3J0IHtwYXJzZVBhdGNofSBmcm9tICcuL3BhdGNoL3BhcnNlJztcbmltcG9ydCB7bWVyZ2V9IGZyb20gJy4vcGF0Y2gvbWVyZ2UnO1xuaW1wb3J0IHtzdHJ1Y3R1cmVkUGF0Y2gsIGNyZWF0ZVR3b0ZpbGVzUGF0Y2gsIGNyZWF0ZVBhdGNofSBmcm9tICcuL3BhdGNoL2NyZWF0ZSc7XG5cbmltcG9ydCB7Y29udmVydENoYW5nZXNUb0RNUH0gZnJvbSAnLi9jb252ZXJ0L2RtcCc7XG5pbXBvcnQge2NvbnZlcnRDaGFuZ2VzVG9YTUx9IGZyb20gJy4vY29udmVydC94bWwnO1xuXG5leHBvcnQge1xuICBEaWZmLFxuXG4gIGRpZmZDaGFycyxcbiAgZGlmZldvcmRzLFxuICBkaWZmV29yZHNXaXRoU3BhY2UsXG4gIGRpZmZMaW5lcyxcbiAgZGlmZlRyaW1tZWRMaW5lcyxcbiAgZGlmZlNlbnRlbmNlcyxcblxuICBkaWZmQ3NzLFxuICBkaWZmSnNvbixcblxuICBkaWZmQXJyYXlzLFxuXG4gIHN0cnVjdHVyZWRQYXRjaCxcbiAgY3JlYXRlVHdvRmlsZXNQYXRjaCxcbiAgY3JlYXRlUGF0Y2gsXG4gIGFwcGx5UGF0Y2gsXG4gIGFwcGx5UGF0Y2hlcyxcbiAgcGFyc2VQYXRjaCxcbiAgbWVyZ2UsXG4gIGNvbnZlcnRDaGFuZ2VzVG9ETVAsXG4gIGNvbnZlcnRDaGFuZ2VzVG9YTUwsXG4gIGNhbm9uaWNhbGl6ZVxufTtcbiJdfQ==


/***/ }),

/***/ "./node_modules/diff/lib/patch/apply.js":
/*!**********************************************!*\
  !*** ./node_modules/diff/lib/patch/apply.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.applyPatch = applyPatch;
exports.applyPatches = applyPatches;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_parse = __webpack_require__(/*! ./parse */ "./node_modules/diff/lib/patch/parse.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_distanceIterator = _interopRequireDefault(__webpack_require__(/*! ../util/distance-iterator */ "./node_modules/diff/lib/util/distance-iterator.js"))
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*istanbul ignore end*/
function applyPatch(source, uniDiff) {
  /*istanbul ignore start*/
  var
  /*istanbul ignore end*/
  options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (typeof uniDiff === 'string') {
    uniDiff =
    /*istanbul ignore start*/
    (0,
    /*istanbul ignore end*/

    /*istanbul ignore start*/
    _parse
    /*istanbul ignore end*/
    .
    /*istanbul ignore start*/
    parsePatch)
    /*istanbul ignore end*/
    (uniDiff);
  }

  if (Array.isArray(uniDiff)) {
    if (uniDiff.length > 1) {
      throw new Error('applyPatch only works with a single input.');
    }

    uniDiff = uniDiff[0];
  } // Apply the diff to the input


  var lines = source.split(/\r\n|[\n\v\f\r\x85]/),
      delimiters = source.match(/\r\n|[\n\v\f\r\x85]/g) || [],
      hunks = uniDiff.hunks,
      compareLine = options.compareLine || function (lineNumber, line, operation, patchContent)
  /*istanbul ignore start*/
  {
    return (
      /*istanbul ignore end*/
      line === patchContent
    );
  },
      errorCount = 0,
      fuzzFactor = options.fuzzFactor || 0,
      minLine = 0,
      offset = 0,
      removeEOFNL,
      addEOFNL;
  /**
   * Checks if the hunk exactly fits on the provided location
   */


  function hunkFits(hunk, toPos) {
    for (var j = 0; j < hunk.lines.length; j++) {
      var line = hunk.lines[j],
          operation = line.length > 0 ? line[0] : ' ',
          content = line.length > 0 ? line.substr(1) : line;

      if (operation === ' ' || operation === '-') {
        // Context sanity check
        if (!compareLine(toPos + 1, lines[toPos], operation, content)) {
          errorCount++;

          if (errorCount > fuzzFactor) {
            return false;
          }
        }

        toPos++;
      }
    }

    return true;
  } // Search best fit offsets for each hunk based on the previous ones


  for (var i = 0; i < hunks.length; i++) {
    var hunk = hunks[i],
        maxLine = lines.length - hunk.oldLines,
        localOffset = 0,
        toPos = offset + hunk.oldStart - 1;
    var iterator =
    /*istanbul ignore start*/
    (0,
    /*istanbul ignore end*/

    /*istanbul ignore start*/
    _distanceIterator
    /*istanbul ignore end*/
    [
    /*istanbul ignore start*/
    "default"
    /*istanbul ignore end*/
    ])(toPos, minLine, maxLine);

    for (; localOffset !== undefined; localOffset = iterator()) {
      if (hunkFits(hunk, toPos + localOffset)) {
        hunk.offset = offset += localOffset;
        break;
      }
    }

    if (localOffset === undefined) {
      return false;
    } // Set lower text limit to end of the current hunk, so next ones don't try
    // to fit over already patched text


    minLine = hunk.offset + hunk.oldStart + hunk.oldLines;
  } // Apply patch hunks


  var diffOffset = 0;

  for (var _i = 0; _i < hunks.length; _i++) {
    var _hunk = hunks[_i],
        _toPos = _hunk.oldStart + _hunk.offset + diffOffset - 1;

    diffOffset += _hunk.newLines - _hunk.oldLines;

    for (var j = 0; j < _hunk.lines.length; j++) {
      var line = _hunk.lines[j],
          operation = line.length > 0 ? line[0] : ' ',
          content = line.length > 0 ? line.substr(1) : line,
          delimiter = _hunk.linedelimiters[j];

      if (operation === ' ') {
        _toPos++;
      } else if (operation === '-') {
        lines.splice(_toPos, 1);
        delimiters.splice(_toPos, 1);
        /* istanbul ignore else */
      } else if (operation === '+') {
        lines.splice(_toPos, 0, content);
        delimiters.splice(_toPos, 0, delimiter);
        _toPos++;
      } else if (operation === '\\') {
        var previousOperation = _hunk.lines[j - 1] ? _hunk.lines[j - 1][0] : null;

        if (previousOperation === '+') {
          removeEOFNL = true;
        } else if (previousOperation === '-') {
          addEOFNL = true;
        }
      }
    }
  } // Handle EOFNL insertion/removal


  if (removeEOFNL) {
    while (!lines[lines.length - 1]) {
      lines.pop();
      delimiters.pop();
    }
  } else if (addEOFNL) {
    lines.push('');
    delimiters.push('\n');
  }

  for (var _k = 0; _k < lines.length - 1; _k++) {
    lines[_k] = lines[_k] + delimiters[_k];
  }

  return lines.join('');
} // Wrapper that supports multiple file patches via callbacks.


function applyPatches(uniDiff, options) {
  if (typeof uniDiff === 'string') {
    uniDiff =
    /*istanbul ignore start*/
    (0,
    /*istanbul ignore end*/

    /*istanbul ignore start*/
    _parse
    /*istanbul ignore end*/
    .
    /*istanbul ignore start*/
    parsePatch)
    /*istanbul ignore end*/
    (uniDiff);
  }

  var currentIndex = 0;

  function processIndex() {
    var index = uniDiff[currentIndex++];

    if (!index) {
      return options.complete();
    }

    options.loadFile(index, function (err, data) {
      if (err) {
        return options.complete(err);
      }

      var updatedContent = applyPatch(data, index, options);
      options.patched(index, updatedContent, function (err) {
        if (err) {
          return options.complete(err);
        }

        processIndex();
      });
    });
  }

  processIndex();
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9hcHBseS5qcyJdLCJuYW1lcyI6WyJhcHBseVBhdGNoIiwic291cmNlIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJwYXJzZVBhdGNoIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiRXJyb3IiLCJsaW5lcyIsInNwbGl0IiwiZGVsaW1pdGVycyIsIm1hdGNoIiwiaHVua3MiLCJjb21wYXJlTGluZSIsImxpbmVOdW1iZXIiLCJsaW5lIiwib3BlcmF0aW9uIiwicGF0Y2hDb250ZW50IiwiZXJyb3JDb3VudCIsImZ1enpGYWN0b3IiLCJtaW5MaW5lIiwib2Zmc2V0IiwicmVtb3ZlRU9GTkwiLCJhZGRFT0ZOTCIsImh1bmtGaXRzIiwiaHVuayIsInRvUG9zIiwiaiIsImNvbnRlbnQiLCJzdWJzdHIiLCJpIiwibWF4TGluZSIsIm9sZExpbmVzIiwibG9jYWxPZmZzZXQiLCJvbGRTdGFydCIsIml0ZXJhdG9yIiwiZGlzdGFuY2VJdGVyYXRvciIsInVuZGVmaW5lZCIsImRpZmZPZmZzZXQiLCJuZXdMaW5lcyIsImRlbGltaXRlciIsImxpbmVkZWxpbWl0ZXJzIiwic3BsaWNlIiwicHJldmlvdXNPcGVyYXRpb24iLCJwb3AiLCJwdXNoIiwiX2siLCJqb2luIiwiYXBwbHlQYXRjaGVzIiwiY3VycmVudEluZGV4IiwicHJvY2Vzc0luZGV4IiwiaW5kZXgiLCJjb21wbGV0ZSIsImxvYWRGaWxlIiwiZXJyIiwiZGF0YSIsInVwZGF0ZWRDb250ZW50IiwicGF0Y2hlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFFTyxTQUFTQSxVQUFULENBQW9CQyxNQUFwQixFQUE0QkMsT0FBNUIsRUFBbUQ7QUFBQTtBQUFBO0FBQUE7QUFBZEMsRUFBQUEsT0FBYyx1RUFBSixFQUFJOztBQUN4RCxNQUFJLE9BQU9ELE9BQVAsS0FBbUIsUUFBdkIsRUFBaUM7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QUNEOztBQUVELE1BQUlnRCxZQUFZLEdBQUcsQ0FBbkI7O0FBQ0EsV0FBU0MsWUFBVCxHQUF3QjtBQUN0QixRQUFJQyxLQUFLLEdBQUdsRCxPQUFPLENBQUNnRCxZQUFZLEVBQWIsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFDRSxLQUFMLEVBQVk7QUFDVixhQUFPakQsT0FBTyxDQUFDa0QsUUFBUixFQUFQO0FBQ0Q7O0FBRURsRCxJQUFBQSxPQUFPLENBQUNtRCxRQUFSLENBQWlCRixLQUFqQixFQUF3QixVQUFTRyxHQUFULEVBQWNDLElBQWQsRUFBb0I7QUFDMUMsVUFBSUQsR0FBSixFQUFTO0FBQ1AsZUFBT3BELE9BQU8sQ0FBQ2tELFFBQVIsQ0FBaUJFLEdBQWpCLENBQVA7QUFDRDs7QUFFRCxVQUFJRSxjQUFjLEdBQUd6RCxVQUFVLENBQUN3RCxJQUFELEVBQU9KLEtBQVAsRUFBY2pELE9BQWQsQ0FBL0I7QUFDQUEsTUFBQUEsT0FBTyxDQUFDdUQsT0FBUixDQUFnQk4sS0FBaEIsRUFBdUJLLGNBQXZCLEVBQXVDLFVBQVNGLEdBQVQsRUFBYztBQUNuRCxZQUFJQSxHQUFKLEVBQVM7QUFDUCxpQkFBT3BELE9BQU8sQ0FBQ2tELFFBQVIsQ0FBaUJFLEdBQWpCLENBQVA7QUFDRDs7QUFFREosUUFBQUEsWUFBWTtBQUNiLE9BTkQ7QUFPRCxLQWJEO0FBY0Q7O0FBQ0RBLEVBQUFBLFlBQVk7QUFDYiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXJzZSc7XG5pbXBvcnQgZGlzdGFuY2VJdGVyYXRvciBmcm9tICcuLi91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0Y2goc291cmNlLCB1bmlEaWZmLCBvcHRpb25zID0ge30pIHtcbiAgaWYgKHR5cGVvZiB1bmlEaWZmID09PSAnc3RyaW5nJykge1xuICAgIHVuaURpZmYgPSBwYXJzZVBhdGNoKHVuaURpZmYpO1xuICB9XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkodW5pRGlmZikpIHtcbiAgICBpZiAodW5pRGlmZi5sZW5ndGggPiAxKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2FwcGx5UGF0Y2ggb25seSB3b3JrcyB3aXRoIGEgc2luZ2xlIGlucHV0LicpO1xuICAgIH1cblxuICAgIHVuaURpZmYgPSB1bmlEaWZmWzBdO1xuICB9XG5cbiAgLy8gQXBwbHkgdGhlIGRpZmYgdG8gdGhlIGlucHV0XG4gIGxldCBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgIGRlbGltaXRlcnMgPSBzb3VyY2UubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgaHVua3MgPSB1bmlEaWZmLmh1bmtzLFxuXG4gICAgICBjb21wYXJlTGluZSA9IG9wdGlvbnMuY29tcGFyZUxpbmUgfHwgKChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudCkgPT4gbGluZSA9PT0gcGF0Y2hDb250ZW50KSxcbiAgICAgIGVycm9yQ291bnQgPSAwLFxuICAgICAgZnV6ekZhY3RvciA9IG9wdGlvbnMuZnV6ekZhY3RvciB8fCAwLFxuICAgICAgbWluTGluZSA9IDAsXG4gICAgICBvZmZzZXQgPSAwLFxuXG4gICAgICByZW1vdmVFT0ZOTCxcbiAgICAgIGFkZEVPRk5MO1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGh1bmsgZXhhY3RseSBmaXRzIG9uIHRoZSBwcm92aWRlZCBsb2NhdGlvblxuICAgKi9cbiAgZnVuY3Rpb24gaHVua0ZpdHMoaHVuaywgdG9Qb3MpIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGh1bmsubGluZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgIGxldCBsaW5lID0gaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSAobGluZS5sZW5ndGggPiAwID8gbGluZVswXSA6ICcgJyksXG4gICAgICAgICAgY29udGVudCA9IChsaW5lLmxlbmd0aCA+IDAgPyBsaW5lLnN1YnN0cigxKSA6IGxpbmUpO1xuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnICcgfHwgb3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgLy8gQ29udGV4dCBzYW5pdHkgY2hlY2tcbiAgICAgICAgaWYgKCFjb21wYXJlTGluZSh0b1BvcyArIDEsIGxpbmVzW3RvUG9zXSwgb3BlcmF0aW9uLCBjb250ZW50KSkge1xuICAgICAgICAgIGVycm9yQ291bnQrKztcblxuICAgICAgICAgIGlmIChlcnJvckNvdW50ID4gZnV6ekZhY3Rvcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0b1BvcysrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgLy8gU2VhcmNoIGJlc3QgZml0IG9mZnNldHMgZm9yIGVhY2ggaHVuayBiYXNlZCBvbiB0aGUgcHJldmlvdXMgb25lc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGh1bmtzLmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IGh1bmsgPSBodW5rc1tpXSxcbiAgICAgICAgbWF4TGluZSA9IGxpbmVzLmxlbmd0aCAtIGh1bmsub2xkTGluZXMsXG4gICAgICAgIGxvY2FsT2Zmc2V0ID0gMCxcbiAgICAgICAgdG9Qb3MgPSBvZmZzZXQgKyBodW5rLm9sZFN0YXJ0IC0gMTtcblxuICAgIGxldCBpdGVyYXRvciA9IGRpc3RhbmNlSXRlcmF0b3IodG9Qb3MsIG1pbkxpbmUsIG1heExpbmUpO1xuXG4gICAgZm9yICg7IGxvY2FsT2Zmc2V0ICE9PSB1bmRlZmluZWQ7IGxvY2FsT2Zmc2V0ID0gaXRlcmF0b3IoKSkge1xuICAgICAgaWYgKGh1bmtGaXRzKGh1bmssIHRvUG9zICsgbG9jYWxPZmZzZXQpKSB7XG4gICAgICAgIGh1bmsub2Zmc2V0ID0gb2Zmc2V0ICs9IGxvY2FsT2Zmc2V0O1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobG9jYWxPZmZzZXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIFNldCBsb3dlciB0ZXh0IGxpbWl0IHRvIGVuZCBvZiB0aGUgY3VycmVudCBodW5rLCBzbyBuZXh0IG9uZXMgZG9uJ3QgdHJ5XG4gICAgLy8gdG8gZml0IG92ZXIgYWxyZWFkeSBwYXRjaGVkIHRleHRcbiAgICBtaW5MaW5lID0gaHVuay5vZmZzZXQgKyBodW5rLm9sZFN0YXJ0ICsgaHVuay5vbGRMaW5lcztcbiAgfVxuXG4gIC8vIEFwcGx5IHBhdGNoIGh1bmtzXG4gIGxldCBkaWZmT2Zmc2V0ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBodW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGxldCBodW5rID0gaHVua3NbaV0sXG4gICAgICAgIHRvUG9zID0gaHVuay5vbGRTdGFydCArIGh1bmsub2Zmc2V0ICsgZGlmZk9mZnNldCAtIDE7XG4gICAgZGlmZk9mZnNldCArPSBodW5rLm5ld0xpbmVzIC0gaHVuay5vbGRMaW5lcztcblxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgaHVuay5saW5lcy5sZW5ndGg7IGorKykge1xuICAgICAgbGV0IGxpbmUgPSBodW5rLmxpbmVzW2pdLFxuICAgICAgICAgIG9wZXJhdGlvbiA9IChsaW5lLmxlbmd0aCA+IDAgPyBsaW5lWzBdIDogJyAnKSxcbiAgICAgICAgICBjb250ZW50ID0gKGxpbmUubGVuZ3RoID4gMCA/IGxpbmUuc3Vic3RyKDEpIDogbGluZSksXG4gICAgICAgICAgZGVsaW1pdGVyID0gaHVuay5saW5lZGVsaW1pdGVyc1tqXTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgIHRvUG9zKys7XG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgIGxpbmVzLnNwbGljZSh0b1BvcywgMSk7XG4gICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKHRvUG9zLCAxKTtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgIGxpbmVzLnNwbGljZSh0b1BvcywgMCwgY29udGVudCk7XG4gICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKHRvUG9zLCAwLCBkZWxpbWl0ZXIpO1xuICAgICAgICB0b1BvcysrO1xuICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdcXFxcJykge1xuICAgICAgICBsZXQgcHJldmlvdXNPcGVyYXRpb24gPSBodW5rLmxpbmVzW2ogLSAxXSA/IGh1bmsubGluZXNbaiAtIDFdWzBdIDogbnVsbDtcbiAgICAgICAgaWYgKHByZXZpb3VzT3BlcmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICByZW1vdmVFT0ZOTCA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAocHJldmlvdXNPcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgIGFkZEVPRk5MID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEhhbmRsZSBFT0ZOTCBpbnNlcnRpb24vcmVtb3ZhbFxuICBpZiAocmVtb3ZlRU9GTkwpIHtcbiAgICB3aGlsZSAoIWxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICBsaW5lcy5wb3AoKTtcbiAgICAgIGRlbGltaXRlcnMucG9wKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFkZEVPRk5MKSB7XG4gICAgbGluZXMucHVzaCgnJyk7XG4gICAgZGVsaW1pdGVycy5wdXNoKCdcXG4nKTtcbiAgfVxuICBmb3IgKGxldCBfayA9IDA7IF9rIDwgbGluZXMubGVuZ3RoIC0gMTsgX2srKykge1xuICAgIGxpbmVzW19rXSA9IGxpbmVzW19rXSArIGRlbGltaXRlcnNbX2tdO1xuICB9XG4gIHJldHVybiBsaW5lcy5qb2luKCcnKTtcbn1cblxuLy8gV3JhcHBlciB0aGF0IHN1cHBvcnRzIG11bHRpcGxlIGZpbGUgcGF0Y2hlcyB2aWEgY2FsbGJhY2tzLlxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5UGF0Y2hlcyh1bmlEaWZmLCBvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICB1bmlEaWZmID0gcGFyc2VQYXRjaCh1bmlEaWZmKTtcbiAgfVxuXG4gIGxldCBjdXJyZW50SW5kZXggPSAwO1xuICBmdW5jdGlvbiBwcm9jZXNzSW5kZXgoKSB7XG4gICAgbGV0IGluZGV4ID0gdW5pRGlmZltjdXJyZW50SW5kZXgrK107XG4gICAgaWYgKCFpbmRleCkge1xuICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoKTtcbiAgICB9XG5cbiAgICBvcHRpb25zLmxvYWRGaWxlKGluZGV4LCBmdW5jdGlvbihlcnIsIGRhdGEpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgIH1cblxuICAgICAgbGV0IHVwZGF0ZWRDb250ZW50ID0gYXBwbHlQYXRjaChkYXRhLCBpbmRleCwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLnBhdGNoZWQoaW5kZXgsIHVwZGF0ZWRDb250ZW50LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgIHJldHVybiBvcHRpb25zLmNvbXBsZXRlKGVycik7XG4gICAgICAgIH1cblxuICAgICAgICBwcm9jZXNzSW5kZXgoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIHByb2Nlc3NJbmRleCgpO1xufVxuIl19


/***/ }),

/***/ "./node_modules/diff/lib/patch/create.js":
/*!***********************************************!*\
  !*** ./node_modules/diff/lib/patch/create.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.structuredPatch = structuredPatch;
exports.formatPatch = formatPatch;
exports.createTwoFilesPatch = createTwoFilesPatch;
exports.createPatch = createPatch;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_line = __webpack_require__(/*! ../diff/line */ "./node_modules/diff/lib/diff/line.js")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*istanbul ignore end*/
function structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  if (!options) {
    options = {};
  }

  if (typeof options.context === 'undefined') {
    options.context = 4;
  }

  var diff =
  /*istanbul ignore start*/
  (0,
  /*istanbul ignore end*/

  /*istanbul ignore start*/
  _line
  /*istanbul ignore end*/
  .
  /*istanbul ignore start*/
  diffLines)
  /*istanbul ignore end*/
  (oldStr, newStr, options);

  if (!diff) {
    return;
  }

  diff.push({
    value: '',
    lines: []
  }); // Append an empty value to make cleanup easier

  function contextLines(lines) {
    return lines.map(function (entry) {
      return ' ' + entry;
    });
  }

  var hunks = [];
  var oldRangeStart = 0,
      newRangeStart = 0,
      curRange = [],
      oldLine = 1,
      newLine = 1;

  /*istanbul ignore start*/
  var _loop = function _loop(
  /*istanbul ignore end*/
  i) {
    var current = diff[i],
        lines = current.lines || current.value.replace(/\n$/, '').split('\n');
    current.lines = lines;

    if (current.added || current.removed) {
      /*istanbul ignore start*/
      var _curRange;

      /*istanbul ignore end*/
      // If we have previous context, start with that
      if (!oldRangeStart) {
        var prev = diff[i - 1];
        oldRangeStart = oldLine;
        newRangeStart = newLine;

        if (prev) {
          curRange = options.context > 0 ? contextLines(prev.lines.slice(-options.context)) : [];
          oldRangeStart -= curRange.length;
          newRangeStart -= curRange.length;
        }
      } // Output our changes


      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_curRange =
      /*istanbul ignore end*/
      curRange).push.apply(
      /*istanbul ignore start*/
      _curRange
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      lines.map(function (entry) {
        return (current.added ? '+' : '-') + entry;
      }))); // Track the updated file position


      if (current.added) {
        newLine += lines.length;
      } else {
        oldLine += lines.length;
      }
    } else {
      // Identical context lines. Track line changes
      if (oldRangeStart) {
        // Close out any changes that have been output (or join overlapping)
        if (lines.length <= options.context * 2 && i < diff.length - 2) {
          /*istanbul ignore start*/
          var _curRange2;

          /*istanbul ignore end*/
          // Overlapping

          /*istanbul ignore start*/

          /*istanbul ignore end*/

          /*istanbul ignore start*/
          (_curRange2 =
          /*istanbul ignore end*/
          curRange).push.apply(
          /*istanbul ignore start*/
          _curRange2
          /*istanbul ignore end*/
          ,
          /*istanbul ignore start*/
          _toConsumableArray(
          /*istanbul ignore end*/
          contextLines(lines)));
        } else {
          /*istanbul ignore start*/
          var _curRange3;

          /*istanbul ignore end*/
          // end the range and output
          var contextSize = Math.min(lines.length, options.context);

          /*istanbul ignore start*/

          /*istanbul ignore end*/

          /*istanbul ignore start*/
          (_curRange3 =
          /*istanbul ignore end*/
          curRange).push.apply(
          /*istanbul ignore start*/
          _curRange3
          /*istanbul ignore end*/
          ,
          /*istanbul ignore start*/
          _toConsumableArray(
          /*istanbul ignore end*/
          contextLines(lines.slice(0, contextSize))));

          var hunk = {
            oldStart: oldRangeStart,
            oldLines: oldLine - oldRangeStart + contextSize,
            newStart: newRangeStart,
            newLines: newLine - newRangeStart + contextSize,
            lines: curRange
          };

          if (i >= diff.length - 2 && lines.length <= options.context) {
            // EOF is inside this hunk
            var oldEOFNewline = /\n$/.test(oldStr);
            var newEOFNewline = /\n$/.test(newStr);
            var noNlBeforeAdds = lines.length == 0 && curRange.length > hunk.oldLines;

            if (!oldEOFNewline && noNlBeforeAdds && oldStr.length > 0) {
              // special case: old has no eol and no trailing context; no-nl can end up before adds
              // however, if the old file is empty, do not output the no-nl line
              curRange.splice(hunk.oldLines, 0, '\\ No newline at end of file');
            }

            if (!oldEOFNewline && !noNlBeforeAdds || !newEOFNewline) {
              curRange.push('\\ No newline at end of file');
            }
          }

          hunks.push(hunk);
          oldRangeStart = 0;
          newRangeStart = 0;
          curRange = [];
        }
      }

      oldLine += lines.length;
      newLine += lines.length;
    }
  };

  for (var i = 0; i < diff.length; i++) {
    /*istanbul ignore start*/
    _loop(
    /*istanbul ignore end*/
    i);
  }

  return {
    oldFileName: oldFileName,
    newFileName: newFileName,
    oldHeader: oldHeader,
    newHeader: newHeader,
    hunks: hunks
  };
}

function formatPatch(diff) {
  var ret = [];

  if (diff.oldFileName == diff.newFileName) {
    ret.push('Index: ' + diff.oldFileName);
  }

  ret.push('===================================================================');
  ret.push('--- ' + diff.oldFileName + (typeof diff.oldHeader === 'undefined' ? '' : '\t' + diff.oldHeader));
  ret.push('+++ ' + diff.newFileName + (typeof diff.newHeader === 'undefined' ? '' : '\t' + diff.newHeader));

  for (var i = 0; i < diff.hunks.length; i++) {
    var hunk = diff.hunks[i]; // Unified Diff Format quirk: If the chunk size is 0,
    // the first number is one lower than one would expect.
    // https://www.artima.com/weblogs/viewpost.jsp?thread=164293

    if (hunk.oldLines === 0) {
      hunk.oldStart -= 1;
    }

    if (hunk.newLines === 0) {
      hunk.newStart -= 1;
    }

    ret.push('@@ -' + hunk.oldStart + ',' + hunk.oldLines + ' +' + hunk.newStart + ',' + hunk.newLines + ' @@');
    ret.push.apply(ret, hunk.lines);
  }

  return ret.join('\n') + '\n';
}

function createTwoFilesPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options) {
  return formatPatch(structuredPatch(oldFileName, newFileName, oldStr, newStr, oldHeader, newHeader, options));
}

function createPatch(fileName, oldStr, newStr, oldHeader, newHeader, options) {
  return createTwoFilesPatch(fileName, fileName, oldStr, newStr, oldHeader, newHeader, options);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9jcmVhdGUuanMiXSwibmFtZXMiOlsic3RydWN0dXJlZFBhdGNoIiwib2xkRmlsZU5hbWUiLCJuZXdGaWxlTmFtZSIsIm9sZFN0ciIsIm5ld1N0ciIsIm9sZEhlYWRlciIsIm5ld0hlYWRlciIsIm9wdGlvbnMiLCJjb250ZXh0IiwiZGlmZiIsImRpZmZMaW5lcyIsInB1c2giLCJ2YWx1ZSIsImxpbmVzIiwiY29udGV4dExpbmVzIiwibWFwIiwiZW50cnkiLCJodW5rcyIsIm9sZFJhbmdlU3RhcnQiLCJuZXdSYW5nZVN0YXJ0IiwiY3VyUmFuZ2UiLCJvbGRMaW5lIiwibmV3TGluZSIsImkiLCJjdXJyZW50IiwicmVwbGFjZSIsInNwbGl0IiwiYWRkZWQiLCJyZW1vdmVkIiwicHJldiIsInNsaWNlIiwibGVuZ3RoIiwiY29udGV4dFNpemUiLCJNYXRoIiwibWluIiwiaHVuayIsIm9sZFN0YXJ0Iiwib2xkTGluZXMiLCJuZXdTdGFydCIsIm5ld0xpbmVzIiwib2xkRU9GTmV3bGluZSIsInRlc3QiLCJuZXdFT0ZOZXdsaW5lIiwibm9ObEJlZm9yZUFkZHMiLCJzcGxpY2UiLCJmb3JtYXRQYXRjaCIsInJldCIsImFwcGx5Iiwiam9pbiIsImNyZWF0ZVR3b0ZpbGVzUGF0Y2giLCJjcmVhdGVQYXRjaCIsImZpbGVOYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxlQUFULENBQXlCQyxXQUF6QixFQUFzQ0MsV0FBdEMsRUFBbURDLE1BQW5ELEVBQTJEQyxNQUEzRCxFQUFtRUMsU0FBbkUsRUFBOEVDLFNBQTlFLEVBQXlGQyxPQUF6RixFQUFrRztBQUN2RyxNQUFJLENBQUNBLE9BQUwsRUFBYztBQUNaQSxJQUFBQSxPQUFPLEdBQUcsRUFBVjtBQUNEOztBQUNELE1BQUksT0FBT0EsT0FBTyxDQUFDQyxPQUFmLEtBQTJCLFdBQS9CLEVBQTRDO0FB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IHtkaWZmTGluZXN9IGZyb20gJy4uL2RpZmYvbGluZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzdHJ1Y3R1cmVkUGF0Y2gob2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09PSAndW5kZWZpbmVkJykge1xuICAgIG9wdGlvbnMuY29udGV4dCA9IDQ7XG4gIH1cblxuICBjb25zdCBkaWZmID0gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbiAgaWYoIWRpZmYpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkaWZmLnB1c2goe3ZhbHVlOiAnJywgbGluZXM6IFtdfSk7IC8vIEFwcGVuZCBhbiBlbXB0eSB2YWx1ZSB0byBtYWtlIGNsZWFudXAgZWFzaWVyXG5cbiAgZnVuY3Rpb24gY29udGV4dExpbmVzKGxpbmVzKSB7XG4gICAgcmV0dXJuIGxpbmVzLm1hcChmdW5jdGlvbihlbnRyeSkgeyByZXR1cm4gJyAnICsgZW50cnk7IH0pO1xuICB9XG5cbiAgbGV0IGh1bmtzID0gW107XG4gIGxldCBvbGRSYW5nZVN0YXJ0ID0gMCwgbmV3UmFuZ2VTdGFydCA9IDAsIGN1clJhbmdlID0gW10sXG4gICAgICBvbGRMaW5lID0gMSwgbmV3TGluZSA9IDE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZi5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGN1cnJlbnQgPSBkaWZmW2ldLFxuICAgICAgICAgIGxpbmVzID0gY3VycmVudC5saW5lcyB8fCBjdXJyZW50LnZhbHVlLnJlcGxhY2UoL1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpO1xuICAgIGN1cnJlbnQubGluZXMgPSBsaW5lcztcblxuICAgIGlmIChjdXJyZW50LmFkZGVkIHx8IGN1cnJlbnQucmVtb3ZlZCkge1xuICAgICAgLy8gSWYgd2UgaGF2ZSBwcmV2aW91cyBjb250ZXh0LCBzdGFydCB3aXRoIHRoYXRcbiAgICAgIGlmICghb2xkUmFuZ2VTdGFydCkge1xuICAgICAgICBjb25zdCBwcmV2ID0gZGlmZltpIC0gMV07XG4gICAgICAgIG9sZFJhbmdlU3RhcnQgPSBvbGRMaW5lO1xuICAgICAgICBuZXdSYW5nZVN0YXJ0ID0gbmV3TGluZTtcblxuICAgICAgICBpZiAocHJldikge1xuICAgICAgICAgIGN1clJhbmdlID0gb3B0aW9ucy5jb250ZXh0ID4gMCA/IGNvbnRleHRMaW5lcyhwcmV2LmxpbmVzLnNsaWNlKC1vcHRpb25zLmNvbnRleHQpKSA6IFtdO1xuICAgICAgICAgIG9sZFJhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICAgIG5ld1JhbmdlU3RhcnQgLT0gY3VyUmFuZ2UubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIE91dHB1dCBvdXIgY2hhbmdlc1xuICAgICAgY3VyUmFuZ2UucHVzaCguLi4gbGluZXMubWFwKGZ1bmN0aW9uKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoY3VycmVudC5hZGRlZCA/ICcrJyA6ICctJykgKyBlbnRyeTtcbiAgICAgIH0pKTtcblxuICAgICAgLy8gVHJhY2sgdGhlIHVwZGF0ZWQgZmlsZSBwb3NpdGlvblxuICAgICAgaWYgKGN1cnJlbnQuYWRkZWQpIHtcbiAgICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWRlbnRpY2FsIGNvbnRleHQgbGluZXMuIFRyYWNrIGxpbmUgY2hhbmdlc1xuICAgICAgaWYgKG9sZFJhbmdlU3RhcnQpIHtcbiAgICAgICAgLy8gQ2xvc2Ugb3V0IGFueSBjaGFuZ2VzIHRoYXQgaGF2ZSBiZWVuIG91dHB1dCAob3Igam9pbiBvdmVybGFwcGluZylcbiAgICAgICAgaWYgKGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQgKiAyICYmIGkgPCBkaWZmLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAvLyBPdmVybGFwcGluZ1xuICAgICAgICAgIGN1clJhbmdlLnB1c2goLi4uIGNvbnRleHRMaW5lcyhsaW5lcykpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIGVuZCB0aGUgcmFuZ2UgYW5kIG91dHB1dFxuICAgICAgICAgIGxldCBjb250ZXh0U2l6ZSA9IE1hdGgubWluKGxpbmVzLmxlbmd0aCwgb3B0aW9ucy5jb250ZXh0KTtcbiAgICAgICAgICBjdXJSYW5nZS5wdXNoKC4uLiBjb250ZXh0TGluZXMobGluZXMuc2xpY2UoMCwgY29udGV4dFNpemUpKSk7XG5cbiAgICAgICAgICBsZXQgaHVuayA9IHtcbiAgICAgICAgICAgIG9sZFN0YXJ0OiBvbGRSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgb2xkTGluZXM6IChvbGRMaW5lIC0gb2xkUmFuZ2VTdGFydCArIGNvbnRleHRTaXplKSxcbiAgICAgICAgICAgIG5ld1N0YXJ0OiBuZXdSYW5nZVN0YXJ0LFxuICAgICAgICAgICAgbmV3TGluZXM6IChuZXdMaW5lIC0gbmV3UmFuZ2VTdGFydCArIGNvbnRleHRTaXplKSxcbiAgICAgICAgICAgIGxpbmVzOiBjdXJSYW5nZVxuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKGkgPj0gZGlmZi5sZW5ndGggLSAyICYmIGxpbmVzLmxlbmd0aCA8PSBvcHRpb25zLmNvbnRleHQpIHtcbiAgICAgICAgICAgIC8vIEVPRiBpcyBpbnNpZGUgdGhpcyBodW5rXG4gICAgICAgICAgICBsZXQgb2xkRU9GTmV3bGluZSA9ICgoL1xcbiQvKS50ZXN0KG9sZFN0cikpO1xuICAgICAgICAgICAgbGV0IG5ld0VPRk5ld2xpbmUgPSAoKC9cXG4kLykudGVzdChuZXdTdHIpKTtcbiAgICAgICAgICAgIGxldCBub05sQmVmb3JlQWRkcyA9IGxpbmVzLmxlbmd0aCA9PSAwICYmIGN1clJhbmdlLmxlbmd0aCA+IGh1bmsub2xkTGluZXM7XG4gICAgICAgICAgICBpZiAoIW9sZEVPRk5ld2xpbmUgJiYgbm9ObEJlZm9yZUFkZHMgJiYgb2xkU3RyLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgLy8gc3BlY2lhbCBjYXNlOiBvbGQgaGFzIG5vIGVvbCBhbmQgbm8gdHJhaWxpbmcgY29udGV4dDsgbm8tbmwgY2FuIGVuZCB1cCBiZWZvcmUgYWRkc1xuICAgICAgICAgICAgICAvLyBob3dldmVyLCBpZiB0aGUgb2xkIGZpbGUgaXMgZW1wdHksIGRvIG5vdCBvdXRwdXQgdGhlIG5vLW5sIGxpbmVcbiAgICAgICAgICAgICAgY3VyUmFuZ2Uuc3BsaWNlKGh1bmsub2xkTGluZXMsIDAsICdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgoIW9sZEVPRk5ld2xpbmUgJiYgIW5vTmxCZWZvcmVBZGRzKSB8fCAhbmV3RU9GTmV3bGluZSkge1xuICAgICAgICAgICAgICBjdXJSYW5nZS5wdXNoKCdcXFxcIE5vIG5ld2xpbmUgYXQgZW5kIG9mIGZpbGUnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaHVua3MucHVzaChodW5rKTtcblxuICAgICAgICAgIG9sZFJhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgIG5ld1JhbmdlU3RhcnQgPSAwO1xuICAgICAgICAgIGN1clJhbmdlID0gW107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgbmV3TGluZSArPSBsaW5lcy5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBvbGRGaWxlTmFtZTogb2xkRmlsZU5hbWUsIG5ld0ZpbGVOYW1lOiBuZXdGaWxlTmFtZSxcbiAgICBvbGRIZWFkZXI6IG9sZEhlYWRlciwgbmV3SGVhZGVyOiBuZXdIZWFkZXIsXG4gICAgaHVua3M6IGh1bmtzXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRQYXRjaChkaWZmKSB7XG4gIGNvbnN0IHJldCA9IFtdO1xuICBpZiAoZGlmZi5vbGRGaWxlTmFtZSA9PSBkaWZmLm5ld0ZpbGVOYW1lKSB7XG4gICAgcmV0LnB1c2goJ0luZGV4OiAnICsgZGlmZi5vbGRGaWxlTmFtZSk7XG4gIH1cbiAgcmV0LnB1c2goJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgcmV0LnB1c2goJy0tLSAnICsgZGlmZi5vbGRGaWxlTmFtZSArICh0eXBlb2YgZGlmZi5vbGRIZWFkZXIgPT09ICd1bmRlZmluZWQnID8gJycgOiAnXFx0JyArIGRpZmYub2xkSGVhZGVyKSk7XG4gIHJldC5wdXNoKCcrKysgJyArIGRpZmYubmV3RmlsZU5hbWUgKyAodHlwZW9mIGRpZmYubmV3SGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm5ld0hlYWRlcikpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlmZi5odW5rcy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGh1bmsgPSBkaWZmLmh1bmtzW2ldO1xuICAgIC8vIFVuaWZpZWQgRGlmZiBGb3JtYXQgcXVpcms6IElmIHRoZSBjaHVuayBzaXplIGlzIDAsXG4gICAgLy8gdGhlIGZpcnN0IG51bWJlciBpcyBvbmUgbG93ZXIgdGhhbiBvbmUgd291bGQgZXhwZWN0LlxuICAgIC8vIGh0dHBzOi8vd3d3LmFydGltYS5jb20vd2VibG9ncy92aWV3cG9zdC5qc3A/dGhyZWFkPTE2NDI5M1xuICAgIGlmIChodW5rLm9sZExpbmVzID09PSAwKSB7XG4gICAgICBodW5rLm9sZFN0YXJ0IC09IDE7XG4gICAgfVxuICAgIGlmIChodW5rLm5ld0xpbmVzID09PSAwKSB7XG4gICAgICBodW5rLm5ld1N0YXJ0IC09IDE7XG4gICAgfVxuICAgIHJldC5wdXNoKFxuICAgICAgJ0BAIC0nICsgaHVuay5vbGRTdGFydCArICcsJyArIGh1bmsub2xkTGluZXNcbiAgICAgICsgJyArJyArIGh1bmsubmV3U3RhcnQgKyAnLCcgKyBodW5rLm5ld0xpbmVzXG4gICAgICArICcgQEAnXG4gICAgKTtcbiAgICByZXQucHVzaC5hcHBseShyZXQsIGh1bmsubGluZXMpO1xuICB9XG5cbiAgcmV0dXJuIHJldC5qb2luKCdcXG4nKSArICdcXG4nO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHdvRmlsZXNQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UGF0Y2goc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQYXRjaChmaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSB7XG4gIHJldHVybiBjcmVhdGVUd29GaWxlc1BhdGNoKGZpbGVOYW1lLCBmaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKTtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/diff/lib/patch/merge.js":
/*!**********************************************!*\
  !*** ./node_modules/diff/lib/patch/merge.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.calcLineCount = calcLineCount;
exports.merge = merge;

/*istanbul ignore end*/
var
/*istanbul ignore start*/
_create = __webpack_require__(/*! ./create */ "./node_modules/diff/lib/patch/create.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_parse = __webpack_require__(/*! ./parse */ "./node_modules/diff/lib/patch/parse.js")
/*istanbul ignore end*/
;

var
/*istanbul ignore start*/
_array = __webpack_require__(/*! ../util/array */ "./node_modules/diff/lib/util/array.js")
/*istanbul ignore end*/
;

/*istanbul ignore start*/ function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*istanbul ignore end*/
function calcLineCount(hunk) {
  /*istanbul ignore start*/
  var _calcOldNewLineCount =
  /*istanbul ignore end*/
  calcOldNewLineCount(hunk.lines),
      oldLines = _calcOldNewLineCount.oldLines,
      newLines = _calcOldNewLineCount.newLines;

  if (oldLines !== undefined) {
    hunk.oldLines = oldLines;
  } else {
    delete hunk.oldLines;
  }

  if (newLines !== undefined) {
    hunk.newLines = newLines;
  } else {
    delete hunk.newLines;
  }
}

function merge(mine, theirs, base) {
  mine = loadPatch(mine, base);
  theirs = loadPatch(theirs, base);
  var ret = {}; // For index we just let it pass through as it doesn't have any necessary meaning.
  // Leaving sanity checks on this to the API consumer that may know more about the
  // meaning in their own context.

  if (mine.index || theirs.index) {
    ret.index = mine.index || theirs.index;
  }

  if (mine.newFileName || theirs.newFileName) {
    if (!fileNameChanged(mine)) {
      // No header or no change in ours, use theirs (and ours if theirs does not exist)
      ret.oldFileName = theirs.oldFileName || mine.oldFileName;
      ret.newFileName = theirs.newFileName || mine.newFileName;
      ret.oldHeader = theirs.oldHeader || mine.oldHeader;
      ret.newHeader = theirs.newHeader || mine.newHeader;
    } else if (!fileNameChanged(theirs)) {
      // No header or no change in theirs, use ours
      ret.oldFileName = mine.oldFileName;
      ret.newFileName = mine.newFileName;
      ret.oldHeader = mine.oldHeader;
      ret.newHeader = mine.newHeader;
    } else {
      // Both changed... figure it out
      ret.oldFileName = selectField(ret, mine.oldFileName, theirs.oldFileName);
      ret.newFileName = selectField(ret, mine.newFileName, theirs.newFileName);
      ret.oldHeader = selectField(ret, mine.oldHeader, theirs.oldHeader);
      ret.newHeader = selectField(ret, mine.newHeader, theirs.newHeader);
    }
  }

  ret.hunks = [];
  var mineIndex = 0,
      theirsIndex = 0,
      mineOffset = 0,
      theirsOffset = 0;

  while (mineIndex < mine.hunks.length || theirsIndex < theirs.hunks.length) {
    var mineCurrent = mine.hunks[mineIndex] || {
      oldStart: Infinity
    },
        theirsCurrent = theirs.hunks[theirsIndex] || {
      oldStart: Infinity
    };

    if (hunkBefore(mineCurrent, theirsCurrent)) {
      // This patch does not overlap with any of the others, yay.
      ret.hunks.push(cloneHunk(mineCurrent, mineOffset));
      mineIndex++;
      theirsOffset += mineCurrent.newLines - mineCurrent.oldLines;
    } else if (hunkBefore(theirsCurrent, mineCurrent)) {
      // This patch does not overlap with any of the others, yay.
      ret.hunks.push(cloneHunk(theirsCurrent, theirsOffset));
      theirsIndex++;
      mineOffset += theirsCurrent.newLines - theirsCurrent.oldLines;
    } else {
      // Overlap, merge as best we can
      var mergedHunk = {
        oldStart: Math.min(mineCurrent.oldStart, theirsCurrent.oldStart),
        oldLines: 0,
        newStart: Math.min(mineCurrent.newStart + mineOffset, theirsCurrent.oldStart + theirsOffset),
        newLines: 0,
        lines: []
      };
      mergeLines(mergedHunk, mineCurrent.oldStart, mineCurrent.lines, theirsCurrent.oldStart, theirsCurrent.lines);
      theirsIndex++;
      mineIndex++;
      ret.hunks.push(mergedHunk);
    }
  }

  return ret;
}

function loadPatch(param, base) {
  if (typeof param === 'string') {
    if (/^@@/m.test(param) || /^Index:/m.test(param)) {
      return (
        /*istanbul ignore start*/
        (0,
        /*istanbul ignore end*/

        /*istanbul ignore start*/
        _parse
        /*istanbul ignore end*/
        .
        /*istanbul ignore start*/
        parsePatch)
        /*istanbul ignore end*/
        (param)[0]
      );
    }

    if (!base) {
      throw new Error('Must provide a base reference or pass in a patch');
    }

    return (
      /*istanbul ignore start*/
      (0,
      /*istanbul ignore end*/

      /*istanbul ignore start*/
      _create
      /*istanbul ignore end*/
      .
      /*istanbul ignore start*/
      structuredPatch)
      /*istanbul ignore end*/
      (undefined, undefined, base, param)
    );
  }

  return param;
}

function fileNameChanged(patch) {
  return patch.newFileName && patch.newFileName !== patch.oldFileName;
}

function selectField(index, mine, theirs) {
  if (mine === theirs) {
    return mine;
  } else {
    index.conflict = true;
    return {
      mine: mine,
      theirs: theirs
    };
  }
}

function hunkBefore(test, check) {
  return test.oldStart < check.oldStart && test.oldStart + test.oldLines < check.oldStart;
}

function cloneHunk(hunk, offset) {
  return {
    oldStart: hunk.oldStart,
    oldLines: hunk.oldLines,
    newStart: hunk.newStart + offset,
    newLines: hunk.newLines,
    lines: hunk.lines
  };
}

function mergeLines(hunk, mineOffset, mineLines, theirOffset, theirLines) {
  // This will generally result in a conflicted hunk, but there are cases where the context
  // is the only overlap where we can successfully merge the content here.
  var mine = {
    offset: mineOffset,
    lines: mineLines,
    index: 0
  },
      their = {
    offset: theirOffset,
    lines: theirLines,
    index: 0
  }; // Handle any leading content

  insertLeading(hunk, mine, their);
  insertLeading(hunk, their, mine); // Now in the overlap content. Scan through and select the best changes from each.

  while (mine.index < mine.lines.length && their.index < their.lines.length) {
    var mineCurrent = mine.lines[mine.index],
        theirCurrent = their.lines[their.index];

    if ((mineCurrent[0] === '-' || mineCurrent[0] === '+') && (theirCurrent[0] === '-' || theirCurrent[0] === '+')) {
      // Both modified ...
      mutualChange(hunk, mine, their);
    } else if (mineCurrent[0] === '+' && theirCurrent[0] === ' ') {
      /*istanbul ignore start*/
      var _hunk$lines;

      /*istanbul ignore end*/
      // Mine inserted

      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_hunk$lines =
      /*istanbul ignore end*/
      hunk.lines).push.apply(
      /*istanbul ignore start*/
      _hunk$lines
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      collectChange(mine)));
    } else if (theirCurrent[0] === '+' && mineCurrent[0] === ' ') {
      /*istanbul ignore start*/
      var _hunk$lines2;

      /*istanbul ignore end*/
      // Theirs inserted

      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_hunk$lines2 =
      /*istanbul ignore end*/
      hunk.lines).push.apply(
      /*istanbul ignore start*/
      _hunk$lines2
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      collectChange(their)));
    } else if (mineCurrent[0] === '-' && theirCurrent[0] === ' ') {
      // Mine removed or edited
      removal(hunk, mine, their);
    } else if (theirCurrent[0] === '-' && mineCurrent[0] === ' ') {
      // Their removed or edited
      removal(hunk, their, mine, true);
    } else if (mineCurrent === theirCurrent) {
      // Context identity
      hunk.lines.push(mineCurrent);
      mine.index++;
      their.index++;
    } else {
      // Context mismatch
      conflict(hunk, collectChange(mine), collectChange(their));
    }
  } // Now push anything that may be remaining


  insertTrailing(hunk, mine);
  insertTrailing(hunk, their);
  calcLineCount(hunk);
}

function mutualChange(hunk, mine, their) {
  var myChanges = collectChange(mine),
      theirChanges = collectChange(their);

  if (allRemoves(myChanges) && allRemoves(theirChanges)) {
    // Special case for remove changes that are supersets of one another
    if (
    /*istanbul ignore start*/
    (0,
    /*istanbul ignore end*/

    /*istanbul ignore start*/
    _array
    /*istanbul ignore end*/
    .
    /*istanbul ignore start*/
    arrayStartsWith)
    /*istanbul ignore end*/
    (myChanges, theirChanges) && skipRemoveSuperset(their, myChanges, myChanges.length - theirChanges.length)) {
      /*istanbul ignore start*/
      var _hunk$lines3;

      /*istanbul ignore end*/

      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_hunk$lines3 =
      /*istanbul ignore end*/
      hunk.lines).push.apply(
      /*istanbul ignore start*/
      _hunk$lines3
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      myChanges));

      return;
    } else if (
    /*istanbul ignore start*/
    (0,
    /*istanbul ignore end*/

    /*istanbul ignore start*/
    _array
    /*istanbul ignore end*/
    .
    /*istanbul ignore start*/
    arrayStartsWith)
    /*istanbul ignore end*/
    (theirChanges, myChanges) && skipRemoveSuperset(mine, theirChanges, theirChanges.length - myChanges.length)) {
      /*istanbul ignore start*/
      var _hunk$lines4;

      /*istanbul ignore end*/

      /*istanbul ignore start*/

      /*istanbul ignore end*/

      /*istanbul ignore start*/
      (_hunk$lines4 =
      /*istanbul ignore end*/
      hunk.lines).push.apply(
      /*istanbul ignore start*/
      _hunk$lines4
      /*istanbul ignore end*/
      ,
      /*istanbul ignore start*/
      _toConsumableArray(
      /*istanbul ignore end*/
      theirChanges));

      return;
    }
  } else if (
  /*istanbul ignore start*/
  (0,
  /*istanbul ignore end*/

  /*istanbul ignore start*/
  _array
  /*istanbul ignore end*/
  .
  /*istanbul ignore start*/
  arrayEqual)
  /*istanbul ignore end*/
  (myChanges, theirChanges)) {
    /*istanbul ignore start*/
    var _hunk$lines5;

    /*istanbul ignore end*/

    /*istanbul ignore start*/

    /*istanbul ignore end*/

    /*istanbul ignore start*/
    (_hunk$lines5 =
    /*istanbul ignore end*/
    hunk.lines).push.apply(
    /*istanbul ignore start*/
    _hunk$lines5
    /*istanbul ignore end*/
    ,
    /*istanbul ignore start*/
    _toConsumableArray(
    /*istanbul ignore end*/
    myChanges));

    return;
  }

  conflict(hunk, myChanges, theirChanges);
}

function removal(hunk, mine, their, swap) {
  var myChanges = collectChange(mine),
      theirChanges = collectContext(their, myChanges);

  if (theirChanges.merged) {
    /*istanbul ignore start*/
    var _hunk$lines6;

    /*istanbul ignore end*/

    /*istanbul ignore start*/

    /*istanbul ignore end*/

    /*istanbul ignore start*/
    (_hunk$lines6 =
    /*istanbul ignore end*/
    hunk.lines).push.apply(
    /*istanbul ignore start*/
    _hunk$lines6
    /*istanbul ignore end*/
    ,
    /*istanbul ignore start*/
    _toConsumableArray(
    /*istanbul ignore end*/
    theirChanges.merged));
  } else {
    conflict(hunk, swap ? theirChanges : myChanges, swap ? myChanges : theirChanges);
  }
}

function conflict(hunk, mine, their) {
  hunk.conflict = true;
  hunk.lines.push({
    conflict: true,
    mine: mine,
    theirs: their
  });
}

function insertLeading(hunk, insert, their) {
  while (insert.offset < their.offset && insert.index < insert.lines.length) {
    var line = insert.lines[insert.index++];
    hunk.lines.push(line);
    insert.offset++;
  }
}

function insertTrailing(hunk, insert) {
  while (insert.index < insert.lines.length) {
    var line = insert.lines[insert.index++];
    hunk.lines.push(line);
  }
}

function collectChange(state) {
  var ret = [],
      operation = state.lines[state.index][0];

  while (state.index < state.lines.length) {
    var line = state.lines[state.index]; // Group additions that are immediately after subtractions and treat them as one "atomic" modify change.

    if (operation === '-' && line[0] === '+') {
      operation = '+';
    }

    if (operation === line[0]) {
      ret.push(line);
      state.index++;
    } else {
      break;
    }
  }

  return ret;
}

function collectContext(state, matchChanges) {
  var changes = [],
      merged = [],
      matchIndex = 0,
      contextChanges = false,
      conflicted = false;

  while (matchIndex < matchChanges.length && state.index < state.lines.length) {
    var change = state.lines[state.index],
        match = matchChanges[matchIndex]; // Once we've hit our add, then we are done

    if (match[0] === '+') {
      break;
    }

    contextChanges = contextChanges || change[0] !== ' ';
    merged.push(match);
    matchIndex++; // Consume any additions in the other block as a conflict to attempt
    // to pull in the remaining context after this

    if (change[0] === '+') {
      conflicted = true;

      while (change[0] === '+') {
        changes.push(change);
        change = state.lines[++state.index];
      }
    }

    if (match.substr(1) === change.substr(1)) {
      changes.push(change);
      state.index++;
    } else {
      conflicted = true;
    }
  }

  if ((matchChanges[matchIndex] || '')[0] === '+' && contextChanges) {
    conflicted = true;
  }

  if (conflicted) {
    return changes;
  }

  while (matchIndex < matchChanges.length) {
    merged.push(matchChanges[matchIndex++]);
  }

  return {
    merged: merged,
    changes: changes
  };
}

function allRemoves(changes) {
  return changes.reduce(function (prev, change) {
    return prev && change[0] === '-';
  }, true);
}

function skipRemoveSuperset(state, removeChanges, delta) {
  for (var i = 0; i < delta; i++) {
    var changeContent = removeChanges[removeChanges.length - delta + i].substr(1);

    if (state.lines[state.index + i] !== ' ' + changeContent) {
      return false;
    }
  }

  state.index += delta;
  return true;
}

function calcOldNewLineCount(lines) {
  var oldLines = 0;
  var newLines = 0;
  lines.forEach(function (line) {
    if (typeof line !== 'string') {
      var myCount = calcOldNewLineCount(line.mine);
      var theirCount = calcOldNewLineCount(line.theirs);

      if (oldLines !== undefined) {
        if (myCount.oldLines === theirCount.oldLines) {
          oldLines += myCount.oldLines;
        } else {
          oldLines = undefined;
        }
      }

      if (newLines !== undefined) {
        if (myCount.newLines === theirCount.newLines) {
          newLines += myCount.newLines;
        } else {
          newLines = undefined;
        }
      }
    } else {
      if (newLines !== undefined && (line[0] === '+' || line[0] === ' ')) {
        newLines++;
      }

      if (oldLines !== undefined && (line[0] === '-' || line[0] === ' ')) {
        oldLines++;
      }
    }
  });
  return {
    oldLines: oldLines,
    newLines: newLines
  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9tZXJnZS5qcyJdLCJuYW1lcyI6WyJjYWxjTGluZUNvdW50IiwiaHVuayIsImNhbGNPbGROZXdMaW5lQ291bnQiLCJsaW5lcyIsIm9sZExpbmVzIiwibmV3TGluZXMiLCJ1bmRlZmluZWQiLCJtZXJnZSIsIm1pbmUiLCJ0aGVpcnMiLCJiYXNlIiwibG9hZFBhdGNoIiwicmV0IiwiaW5kZXgiLCJuZXdGaWxlTmFtZSIsImZpbGVOYW1lQ2hhbmdlZCIsIm9sZEZpbGVOYW1lIiwib2xkSGVhZGVyIiwibmV3SGVhZGVyIiwic2VsZWN0RmllbGQiLCJodW5rcyIsIm1pbmVJbmRleCIsInRoZWlyc0luZGV4IiwibWluZU9mZnNldCIsInRoZWlyc09mZnNldCIsImxlbmd0aCIsIm1pbmVDdXJyZW50Iiwib2xkU3RhcnQiLCJJbmZpbml0eSIsInRoZWlyc0N1cnJlbnQiLCJodW5rQmVmb3JlIiwicHVzaCIsImNsb25lSHVuayIsIm1lcmdlZEh1bmsiLCJNYXRoIiwibWluIiwibmV3U3RhcnQiLCJtZXJnZUxpbmVzIiwicGFyYW0iLCJ0ZXN0IiwicGFyc2VQYXRjaCIsIkVycm9yIiwic3RydWN0dXJlZFBhdGNoIiwicGF0Y2giLCJjb25mbGljdCIsImNoZWNrIiwib2Zmc2V0IiwibWluZUxpbmVzIiwidGhlaXJPZmZzZXQiLCJ0aGVpckxpbmVzIiwidGhlaXIiLCJpbnNlcnRMZWFkaW5nIiwidGhlaXJDdXJyZW50IiwibXV0dWFsQ2hhbmdlIiwiY29sbGVjdENoYW5nZSIsInJlbW92YWwiLCJpbnNlcnRUcmFpbGluZyIsIm15Q2hhbmdlcyIsInRoZWlyQ2hhbmdlcyIsImFsbFJlbW92ZXMiLCJhcnJheVN0YXJ0c1dpdGgiLCJza2lwUmVtb3ZlU3VwZXJzZXQiLCJhcnJheUVxdWFsIiwic3dhcCIsImNvbGxlY3RDb250ZXh0IiwibWVyZ2VkIiwiaW5zZXJ0IiwibGluZSIsInN0YXRlIiwib3BlcmF0aW9uIiwibWF0Y2hDaGFuZ2VzIiwiY2hhbmdlcyIsIm1hdGNoSW5kZXgiLCJjb250ZXh0Q2hhbmdlcyIsImNvbmZsaWN0ZWQiLCJjaGFuZ2UiLCJtYXRjaCIsInN1YnN0ciIsInJlZHVjZSIsInByZXYiLCJyZW1vdmVDaGFuZ2VzIiwiZGVsdGEiLCJpIiwiY2hhbmdlQ29udGVudCIsImZvckVhY2giLCJteUNvdW50IiwidGhlaXJDb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFFTyxTQUFTQSxhQUFULENBQXVCQyxJQUF2QixFQUE2QjtBQUFBO0FBQUE7QUFBQTtBQUNMQyxFQUFBQSxtQkFBbUIsQ0FBQ0QsSUFBSSxDQUFDRSxLQUFOLENBRGQ7QUFBQSxNQUMzQkMsUUFEMkIsd0JBQzNCQSxRQUQyQjtBQUFBLE1BQ2pCQyxRQURpQix3QkFDakJBLFFBRGlCOztBQUdsQyxNQUFJRCxRQUFRLEtBQUtFLFNBQWpCLEVBQTRCO0FBQzFCTCxJQUFBQSxJQUFJLENBQUNHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0QsR0FGRCxNQUVPO0FBQ0wsV0FBT0gsSUFBSSxDQUFDRyxRQUFaO0FBQ0Q7O0FBRUQsTUFBSUMsUUFBUSxLQUFLQyxTQUFqQixFQUE0QjtBQUMxQkwsSUFBQUEsSUFBSSxDQUFDSSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNELEdBRkQsTUFFTztBQUNMLFdBQU9KLElBQUksQ0FBQ0ksUUFBWjtBQUNEO0FBQ0Y7O0FBRU0sU0FBU0UsS0FBVCxDQUFlQyxJQUFmLEVBQXFCQyxNQUFyQixFQUE2QkMsSUFBN0IsRUFBbUM7QUFDeENGLEVBQUFBLElBQUksR0FBR0csU0FBUyxDQUFDSCxJQUFELEVBQU9FLElBQVAsQ0FBaEI7QUFDQUQsRUFBQUEsTUFBTSxHQUFHRSxTQUFTLENBQUNGLE1BQUQsRUFBU0MsSUFBVCxDQUFsQjtBQUVBLE1BQUlFLEdBQUcsR0FBRyxFQUFWLENBSndD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QUFKLEVBQW9FO0FBQ2xFL0QsUUFBQUEsUUFBUTtBQUNUO0FBQ0Y7QUFDRixHQTVCRDtBQThCQSxTQUFPO0FBQUNBLElBQUFBLFFBQVEsRUFBUkEsUUFBRDtBQUFXQyxJQUFBQSxRQUFRLEVBQVJBO0FBQVgsR0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtzdHJ1Y3R1cmVkUGF0Y2h9IGZyb20gJy4vY3JlYXRlJztcbmltcG9ydCB7cGFyc2VQYXRjaH0gZnJvbSAnLi9wYXJzZSc7XG5cbmltcG9ydCB7YXJyYXlFcXVhbCwgYXJyYXlTdGFydHNXaXRofSBmcm9tICcuLi91dGlsL2FycmF5JztcblxuZXhwb3J0IGZ1bmN0aW9uIGNhbGNMaW5lQ291bnQoaHVuaykge1xuICBjb25zdCB7b2xkTGluZXMsIG5ld0xpbmVzfSA9IGNhbGNPbGROZXdMaW5lQ291bnQoaHVuay5saW5lcyk7XG5cbiAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBodW5rLm9sZExpbmVzID0gb2xkTGluZXM7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIGh1bmsub2xkTGluZXM7XG4gIH1cblxuICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGh1bmsubmV3TGluZXMgPSBuZXdMaW5lcztcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgaHVuay5uZXdMaW5lcztcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2UobWluZSwgdGhlaXJzLCBiYXNlKSB7XG4gIG1pbmUgPSBsb2FkUGF0Y2gobWluZSwgYmFzZSk7XG4gIHRoZWlycyA9IGxvYWRQYXRjaCh0aGVpcnMsIGJhc2UpO1xuXG4gIGxldCByZXQgPSB7fTtcblxuICAvLyBGb3IgaW5kZXggd2UganVzdCBsZXQgaXQgcGFzcyB0aHJvdWdoIGFzIGl0IGRvZXNuJ3QgaGF2ZSBhbnkgbmVjZXNzYXJ5IG1lYW5pbmcuXG4gIC8vIExlYXZpbmcgc2FuaXR5IGNoZWNrcyBvbiB0aGlzIHRvIHRoZSBBUEkgY29uc3VtZXIgdGhhdCBtYXkga25vdyBtb3JlIGFib3V0IHRoZVxuICAvLyBtZWFuaW5nIGluIHRoZWlyIG93biBjb250ZXh0LlxuICBpZiAobWluZS5pbmRleCB8fCB0aGVpcnMuaW5kZXgpIHtcbiAgICByZXQuaW5kZXggPSBtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleDtcbiAgfVxuXG4gIGlmIChtaW5lLm5ld0ZpbGVOYW1lIHx8IHRoZWlycy5uZXdGaWxlTmFtZSkge1xuICAgIGlmICghZmlsZU5hbWVDaGFuZ2VkKG1pbmUpKSB7XG4gICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIG91cnMsIHVzZSB0aGVpcnMgKGFuZCBvdXJzIGlmIHRoZWlycyBkb2VzIG5vdCBleGlzdClcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IHRoZWlycy5vbGRGaWxlTmFtZSB8fCBtaW5lLm9sZEZpbGVOYW1lO1xuICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gdGhlaXJzLm5ld0ZpbGVOYW1lIHx8IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICByZXQub2xkSGVhZGVyID0gdGhlaXJzLm9sZEhlYWRlciB8fCBtaW5lLm9sZEhlYWRlcjtcbiAgICAgIHJldC5uZXdIZWFkZXIgPSB0aGVpcnMubmV3SGVhZGVyIHx8IG1pbmUubmV3SGVhZGVyO1xuICAgIH0gZWxzZSBpZiAoIWZpbGVOYW1lQ2hhbmdlZCh0aGVpcnMpKSB7XG4gICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIHRoZWlycywgdXNlIG91cnNcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSBtaW5lLm5ld0ZpbGVOYW1lO1xuICAgICAgcmV0Lm9sZEhlYWRlciA9IG1pbmUub2xkSGVhZGVyO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IG1pbmUubmV3SGVhZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCb3RoIGNoYW5nZWQuLi4gZmlndXJlIGl0IG91dFxuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEZpbGVOYW1lLCB0aGVpcnMub2xkRmlsZU5hbWUpO1xuICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0ZpbGVOYW1lLCB0aGVpcnMubmV3RmlsZU5hbWUpO1xuICAgICAgcmV0Lm9sZEhlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5vbGRIZWFkZXIsIHRoZWlycy5vbGRIZWFkZXIpO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5uZXdIZWFkZXIsIHRoZWlycy5uZXdIZWFkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldC5odW5rcyA9IFtdO1xuXG4gIGxldCBtaW5lSW5kZXggPSAwLFxuICAgICAgdGhlaXJzSW5kZXggPSAwLFxuICAgICAgbWluZU9mZnNldCA9IDAsXG4gICAgICB0aGVpcnNPZmZzZXQgPSAwO1xuXG4gIHdoaWxlIChtaW5lSW5kZXggPCBtaW5lLmh1bmtzLmxlbmd0aCB8fCB0aGVpcnNJbmRleCA8IHRoZWlycy5odW5rcy5sZW5ndGgpIHtcbiAgICBsZXQgbWluZUN1cnJlbnQgPSBtaW5lLmh1bmtzW21pbmVJbmRleF0gfHwge29sZFN0YXJ0OiBJbmZpbml0eX0sXG4gICAgICAgIHRoZWlyc0N1cnJlbnQgPSB0aGVpcnMuaHVua3NbdGhlaXJzSW5kZXhdIHx8IHtvbGRTdGFydDogSW5maW5pdHl9O1xuXG4gICAgaWYgKGh1bmtCZWZvcmUobWluZUN1cnJlbnQsIHRoZWlyc0N1cnJlbnQpKSB7XG4gICAgICAvLyBUaGlzIHBhdGNoIGRvZXMgbm90IG92ZXJsYXAgd2l0aCBhbnkgb2YgdGhlIG90aGVycywgeWF5LlxuICAgICAgcmV0Lmh1bmtzLnB1c2goY2xvbmVIdW5rKG1pbmVDdXJyZW50LCBtaW5lT2Zmc2V0KSk7XG4gICAgICBtaW5lSW5kZXgrKztcbiAgICAgIHRoZWlyc09mZnNldCArPSBtaW5lQ3VycmVudC5uZXdMaW5lcyAtIG1pbmVDdXJyZW50Lm9sZExpbmVzO1xuICAgIH0gZWxzZSBpZiAoaHVua0JlZm9yZSh0aGVpcnNDdXJyZW50LCBtaW5lQ3VycmVudCkpIHtcbiAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsodGhlaXJzQ3VycmVudCwgdGhlaXJzT2Zmc2V0KSk7XG4gICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgbWluZU9mZnNldCArPSB0aGVpcnNDdXJyZW50Lm5ld0xpbmVzIC0gdGhlaXJzQ3VycmVudC5vbGRMaW5lcztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gT3ZlcmxhcCwgbWVyZ2UgYXMgYmVzdCB3ZSBjYW5cbiAgICAgIGxldCBtZXJnZWRIdW5rID0ge1xuICAgICAgICBvbGRTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQub2xkU3RhcnQsIHRoZWlyc0N1cnJlbnQub2xkU3RhcnQpLFxuICAgICAgICBvbGRMaW5lczogMCxcbiAgICAgICAgbmV3U3RhcnQ6IE1hdGgubWluKG1pbmVDdXJyZW50Lm5ld1N0YXJ0ICsgbWluZU9mZnNldCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCArIHRoZWlyc09mZnNldCksXG4gICAgICAgIG5ld0xpbmVzOiAwLFxuICAgICAgICBsaW5lczogW11cbiAgICAgIH07XG4gICAgICBtZXJnZUxpbmVzKG1lcmdlZEh1bmssIG1pbmVDdXJyZW50Lm9sZFN0YXJ0LCBtaW5lQ3VycmVudC5saW5lcywgdGhlaXJzQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5saW5lcyk7XG4gICAgICB0aGVpcnNJbmRleCsrO1xuICAgICAgbWluZUluZGV4Kys7XG5cbiAgICAgIHJldC5odW5rcy5wdXNoKG1lcmdlZEh1bmspO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYXRjaChwYXJhbSwgYmFzZSkge1xuICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgIGlmICgoL15AQC9tKS50ZXN0KHBhcmFtKSB8fCAoKC9eSW5kZXg6L20pLnRlc3QocGFyYW0pKSkge1xuICAgICAgcmV0dXJuIHBhcnNlUGF0Y2gocGFyYW0pWzBdO1xuICAgIH1cblxuICAgIGlmICghYmFzZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHByb3ZpZGUgYSBiYXNlIHJlZmVyZW5jZSBvciBwYXNzIGluIGEgcGF0Y2gnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0cnVjdHVyZWRQYXRjaCh1bmRlZmluZWQsIHVuZGVmaW5lZCwgYmFzZSwgcGFyYW0pO1xuICB9XG5cbiAgcmV0dXJuIHBhcmFtO1xufVxuXG5mdW5jdGlvbiBmaWxlTmFtZUNoYW5nZWQocGF0Y2gpIHtcbiAgcmV0dXJuIHBhdGNoLm5ld0ZpbGVOYW1lICYmIHBhdGNoLm5ld0ZpbGVOYW1lICE9PSBwYXRjaC5vbGRGaWxlTmFtZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0RmllbGQoaW5kZXgsIG1pbmUsIHRoZWlycykge1xuICBpZiAobWluZSA9PT0gdGhlaXJzKSB7XG4gICAgcmV0dXJuIG1pbmU7XG4gIH0gZWxzZSB7XG4gICAgaW5kZXguY29uZmxpY3QgPSB0cnVlO1xuICAgIHJldHVybiB7bWluZSwgdGhlaXJzfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBodW5rQmVmb3JlKHRlc3QsIGNoZWNrKSB7XG4gIHJldHVybiB0ZXN0Lm9sZFN0YXJ0IDwgY2hlY2sub2xkU3RhcnRcbiAgICAmJiAodGVzdC5vbGRTdGFydCArIHRlc3Qub2xkTGluZXMpIDwgY2hlY2sub2xkU3RhcnQ7XG59XG5cbmZ1bmN0aW9uIGNsb25lSHVuayhodW5rLCBvZmZzZXQpIHtcbiAgcmV0dXJuIHtcbiAgICBvbGRTdGFydDogaHVuay5vbGRTdGFydCwgb2xkTGluZXM6IGh1bmsub2xkTGluZXMsXG4gICAgbmV3U3RhcnQ6IGh1bmsubmV3U3RhcnQgKyBvZmZzZXQsIG5ld0xpbmVzOiBodW5rLm5ld0xpbmVzLFxuICAgIGxpbmVzOiBodW5rLmxpbmVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lcmdlTGluZXMoaHVuaywgbWluZU9mZnNldCwgbWluZUxpbmVzLCB0aGVpck9mZnNldCwgdGhlaXJMaW5lcykge1xuICAvLyBUaGlzIHdpbGwgZ2VuZXJhbGx5IHJlc3VsdCBpbiBhIGNvbmZsaWN0ZWQgaHVuaywgYnV0IHRoZXJlIGFyZSBjYXNlcyB3aGVyZSB0aGUgY29udGV4dFxuICAvLyBpcyB0aGUgb25seSBvdmVybGFwIHdoZXJlIHdlIGNhbiBzdWNjZXNzZnVsbHkgbWVyZ2UgdGhlIGNvbnRlbnQgaGVyZS5cbiAgbGV0IG1pbmUgPSB7b2Zmc2V0OiBtaW5lT2Zmc2V0LCBsaW5lczogbWluZUxpbmVzLCBpbmRleDogMH0sXG4gICAgICB0aGVpciA9IHtvZmZzZXQ6IHRoZWlyT2Zmc2V0LCBsaW5lczogdGhlaXJMaW5lcywgaW5kZXg6IDB9O1xuXG4gIC8vIEhhbmRsZSBhbnkgbGVhZGluZyBjb250ZW50XG4gIGluc2VydExlYWRpbmcoaHVuaywgbWluZSwgdGhlaXIpO1xuICBpbnNlcnRMZWFkaW5nKGh1bmssIHRoZWlyLCBtaW5lKTtcblxuICAvLyBOb3cgaW4gdGhlIG92ZXJsYXAgY29udGVudC4gU2NhbiB0aHJvdWdoIGFuZCBzZWxlY3QgdGhlIGJlc3QgY2hhbmdlcyBmcm9tIGVhY2guXG4gIHdoaWxlIChtaW5lLmluZGV4IDwgbWluZS5saW5lcy5sZW5ndGggJiYgdGhlaXIuaW5kZXggPCB0aGVpci5saW5lcy5sZW5ndGgpIHtcbiAgICBsZXQgbWluZUN1cnJlbnQgPSBtaW5lLmxpbmVzW21pbmUuaW5kZXhdLFxuICAgICAgICB0aGVpckN1cnJlbnQgPSB0aGVpci5saW5lc1t0aGVpci5pbmRleF07XG5cbiAgICBpZiAoKG1pbmVDdXJyZW50WzBdID09PSAnLScgfHwgbWluZUN1cnJlbnRbMF0gPT09ICcrJylcbiAgICAgICAgJiYgKHRoZWlyQ3VycmVudFswXSA9PT0gJy0nIHx8IHRoZWlyQ3VycmVudFswXSA9PT0gJysnKSkge1xuICAgICAgLy8gQm90aCBtb2RpZmllZCAuLi5cbiAgICAgIG11dHVhbENoYW5nZShodW5rLCBtaW5lLCB0aGVpcik7XG4gICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudFswXSA9PT0gJysnICYmIHRoZWlyQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAvLyBNaW5lIGluc2VydGVkXG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIGNvbGxlY3RDaGFuZ2UobWluZSkpO1xuICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnKycgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gVGhlaXJzIGluc2VydGVkXG4gICAgICBodW5rLmxpbmVzLnB1c2goLi4uIGNvbGxlY3RDaGFuZ2UodGhlaXIpKTtcbiAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50WzBdID09PSAnLScgJiYgdGhlaXJDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8vIE1pbmUgcmVtb3ZlZCBvciBlZGl0ZWRcbiAgICAgIHJlbW92YWwoaHVuaywgbWluZSwgdGhlaXIpO1xuICAgIH0gZWxzZSBpZiAodGhlaXJDdXJyZW50WzBdID09PSAnLScgJiYgbWluZUN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gVGhlaXIgcmVtb3ZlZCBvciBlZGl0ZWRcbiAgICAgIHJlbW92YWwoaHVuaywgdGhlaXIsIG1pbmUsIHRydWUpO1xuICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnQgPT09IHRoZWlyQ3VycmVudCkge1xuICAgICAgLy8gQ29udGV4dCBpZGVudGl0eVxuICAgICAgaHVuay5saW5lcy5wdXNoKG1pbmVDdXJyZW50KTtcbiAgICAgIG1pbmUuaW5kZXgrKztcbiAgICAgIHRoZWlyLmluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIENvbnRleHQgbWlzbWF0Y2hcbiAgICAgIGNvbmZsaWN0KGh1bmssIGNvbGxlY3RDaGFuZ2UobWluZSksIGNvbGxlY3RDaGFuZ2UodGhlaXIpKTtcbiAgICB9XG4gIH1cblxuICAvLyBOb3cgcHVzaCBhbnl0aGluZyB0aGF0IG1heSBiZSByZW1haW5pbmdcbiAgaW5zZXJ0VHJhaWxpbmcoaHVuaywgbWluZSk7XG4gIGluc2VydFRyYWlsaW5nKGh1bmssIHRoZWlyKTtcblxuICBjYWxjTGluZUNvdW50KGh1bmspO1xufVxuXG5mdW5jdGlvbiBtdXR1YWxDaGFuZ2UoaHVuaywgbWluZSwgdGhlaXIpIHtcbiAgbGV0IG15Q2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UobWluZSksXG4gICAgICB0aGVpckNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKHRoZWlyKTtcblxuICBpZiAoYWxsUmVtb3ZlcyhteUNoYW5nZXMpICYmIGFsbFJlbW92ZXModGhlaXJDaGFuZ2VzKSkge1xuICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgcmVtb3ZlIGNoYW5nZXMgdGhhdCBhcmUgc3VwZXJzZXRzIG9mIG9uZSBhbm90aGVyXG4gICAgaWYgKGFycmF5U3RhcnRzV2l0aChteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcylcbiAgICAgICAgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KHRoZWlyLCBteUNoYW5nZXMsIG15Q2hhbmdlcy5sZW5ndGggLSB0aGVpckNoYW5nZXMubGVuZ3RoKSkge1xuICAgICAgaHVuay5saW5lcy5wdXNoKC4uLiBteUNoYW5nZXMpO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAoYXJyYXlTdGFydHNXaXRoKHRoZWlyQ2hhbmdlcywgbXlDaGFuZ2VzKVxuICAgICAgICAmJiBza2lwUmVtb3ZlU3VwZXJzZXQobWluZSwgdGhlaXJDaGFuZ2VzLCB0aGVpckNoYW5nZXMubGVuZ3RoIC0gbXlDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgIGh1bmsubGluZXMucHVzaCguLi4gdGhlaXJDaGFuZ2VzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYXJyYXlFcXVhbChteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcykpIHtcbiAgICBodW5rLmxpbmVzLnB1c2goLi4uIG15Q2hhbmdlcyk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uZmxpY3QoaHVuaywgbXlDaGFuZ2VzLCB0aGVpckNoYW5nZXMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmFsKGh1bmssIG1pbmUsIHRoZWlyLCBzd2FwKSB7XG4gIGxldCBteUNoYW5nZXMgPSBjb2xsZWN0Q2hhbmdlKG1pbmUpLFxuICAgICAgdGhlaXJDaGFuZ2VzID0gY29sbGVjdENvbnRleHQodGhlaXIsIG15Q2hhbmdlcyk7XG4gIGlmICh0aGVpckNoYW5nZXMubWVyZ2VkKSB7XG4gICAgaHVuay5saW5lcy5wdXNoKC4uLiB0aGVpckNoYW5nZXMubWVyZ2VkKTtcbiAgfSBlbHNlIHtcbiAgICBjb25mbGljdChodW5rLCBzd2FwID8gdGhlaXJDaGFuZ2VzIDogbXlDaGFuZ2VzLCBzd2FwID8gbXlDaGFuZ2VzIDogdGhlaXJDaGFuZ2VzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25mbGljdChodW5rLCBtaW5lLCB0aGVpcikge1xuICBodW5rLmNvbmZsaWN0ID0gdHJ1ZTtcbiAgaHVuay5saW5lcy5wdXNoKHtcbiAgICBjb25mbGljdDogdHJ1ZSxcbiAgICBtaW5lOiBtaW5lLFxuICAgIHRoZWlyczogdGhlaXJcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydExlYWRpbmcoaHVuaywgaW5zZXJ0LCB0aGVpcikge1xuICB3aGlsZSAoaW5zZXJ0Lm9mZnNldCA8IHRoZWlyLm9mZnNldCAmJiBpbnNlcnQuaW5kZXggPCBpbnNlcnQubGluZXMubGVuZ3RoKSB7XG4gICAgbGV0IGxpbmUgPSBpbnNlcnQubGluZXNbaW5zZXJ0LmluZGV4KytdO1xuICAgIGh1bmsubGluZXMucHVzaChsaW5lKTtcbiAgICBpbnNlcnQub2Zmc2V0Kys7XG4gIH1cbn1cbmZ1bmN0aW9uIGluc2VydFRyYWlsaW5nKGh1bmssIGluc2VydCkge1xuICB3aGlsZSAoaW5zZXJ0LmluZGV4IDwgaW5zZXJ0LmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBsaW5lID0gaW5zZXJ0LmxpbmVzW2luc2VydC5pbmRleCsrXTtcbiAgICBodW5rLmxpbmVzLnB1c2gobGluZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29sbGVjdENoYW5nZShzdGF0ZSkge1xuICBsZXQgcmV0ID0gW10sXG4gICAgICBvcGVyYXRpb24gPSBzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleF1bMF07XG4gIHdoaWxlIChzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgIGxldCBsaW5lID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdO1xuXG4gICAgLy8gR3JvdXAgYWRkaXRpb25zIHRoYXQgYXJlIGltbWVkaWF0ZWx5IGFmdGVyIHN1YnRyYWN0aW9ucyBhbmQgdHJlYXQgdGhlbSBhcyBvbmUgXCJhdG9taWNcIiBtb2RpZnkgY2hhbmdlLlxuICAgIGlmIChvcGVyYXRpb24gPT09ICctJyAmJiBsaW5lWzBdID09PSAnKycpIHtcbiAgICAgIG9wZXJhdGlvbiA9ICcrJztcbiAgICB9XG5cbiAgICBpZiAob3BlcmF0aW9uID09PSBsaW5lWzBdKSB7XG4gICAgICByZXQucHVzaChsaW5lKTtcbiAgICAgIHN0YXRlLmluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5mdW5jdGlvbiBjb2xsZWN0Q29udGV4dChzdGF0ZSwgbWF0Y2hDaGFuZ2VzKSB7XG4gIGxldCBjaGFuZ2VzID0gW10sXG4gICAgICBtZXJnZWQgPSBbXSxcbiAgICAgIG1hdGNoSW5kZXggPSAwLFxuICAgICAgY29udGV4dENoYW5nZXMgPSBmYWxzZSxcbiAgICAgIGNvbmZsaWN0ZWQgPSBmYWxzZTtcbiAgd2hpbGUgKG1hdGNoSW5kZXggPCBtYXRjaENoYW5nZXMubGVuZ3RoXG4gICAgICAgICYmIHN0YXRlLmluZGV4IDwgc3RhdGUubGluZXMubGVuZ3RoKSB7XG4gICAgbGV0IGNoYW5nZSA9IHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4XSxcbiAgICAgICAgbWF0Y2ggPSBtYXRjaENoYW5nZXNbbWF0Y2hJbmRleF07XG5cbiAgICAvLyBPbmNlIHdlJ3ZlIGhpdCBvdXIgYWRkLCB0aGVuIHdlIGFyZSBkb25lXG4gICAgaWYgKG1hdGNoWzBdID09PSAnKycpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnRleHRDaGFuZ2VzID0gY29udGV4dENoYW5nZXMgfHwgY2hhbmdlWzBdICE9PSAnICc7XG5cbiAgICBtZXJnZWQucHVzaChtYXRjaCk7XG4gICAgbWF0Y2hJbmRleCsrO1xuXG4gICAgLy8gQ29uc3VtZSBhbnkgYWRkaXRpb25zIGluIHRoZSBvdGhlciBibG9jayBhcyBhIGNvbmZsaWN0IHRvIGF0dGVtcHRcbiAgICAvLyB0byBwdWxsIGluIHRoZSByZW1haW5pbmcgY29udGV4dCBhZnRlciB0aGlzXG4gICAgaWYgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICBjb25mbGljdGVkID0gdHJ1ZTtcblxuICAgICAgd2hpbGUgKGNoYW5nZVswXSA9PT0gJysnKSB7XG4gICAgICAgIGNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgICBjaGFuZ2UgPSBzdGF0ZS5saW5lc1srK3N0YXRlLmluZGV4XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWF0Y2guc3Vic3RyKDEpID09PSBjaGFuZ2Uuc3Vic3RyKDEpKSB7XG4gICAgICBjaGFuZ2VzLnB1c2goY2hhbmdlKTtcbiAgICAgIHN0YXRlLmluZGV4Kys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICgobWF0Y2hDaGFuZ2VzW21hdGNoSW5kZXhdIHx8ICcnKVswXSA9PT0gJysnXG4gICAgICAmJiBjb250ZXh0Q2hhbmdlcykge1xuICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgaWYgKGNvbmZsaWN0ZWQpIHtcbiAgICByZXR1cm4gY2hhbmdlcztcbiAgfVxuXG4gIHdoaWxlIChtYXRjaEluZGV4IDwgbWF0Y2hDaGFuZ2VzLmxlbmd0aCkge1xuICAgIG1lcmdlZC5wdXNoKG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4KytdKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbWVyZ2VkLFxuICAgIGNoYW5nZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWxsUmVtb3ZlcyhjaGFuZ2VzKSB7XG4gIHJldHVybiBjaGFuZ2VzLnJlZHVjZShmdW5jdGlvbihwcmV2LCBjaGFuZ2UpIHtcbiAgICByZXR1cm4gcHJldiAmJiBjaGFuZ2VbMF0gPT09ICctJztcbiAgfSwgdHJ1ZSk7XG59XG5mdW5jdGlvbiBza2lwUmVtb3ZlU3VwZXJzZXQoc3RhdGUsIHJlbW92ZUNoYW5nZXMsIGRlbHRhKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsdGE7IGkrKykge1xuICAgIGxldCBjaGFuZ2VDb250ZW50ID0gcmVtb3ZlQ2hhbmdlc1tyZW1vdmVDaGFuZ2VzLmxlbmd0aCAtIGRlbHRhICsgaV0uc3Vic3RyKDEpO1xuICAgIGlmIChzdGF0ZS5saW5lc1tzdGF0ZS5pbmRleCArIGldICE9PSAnICcgKyBjaGFuZ2VDb250ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgc3RhdGUuaW5kZXggKz0gZGVsdGE7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmVzKSB7XG4gIGxldCBvbGRMaW5lcyA9IDA7XG4gIGxldCBuZXdMaW5lcyA9IDA7XG5cbiAgbGluZXMuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgaWYgKHR5cGVvZiBsaW5lICE9PSAnc3RyaW5nJykge1xuICAgICAgbGV0IG15Q291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUubWluZSk7XG4gICAgICBsZXQgdGhlaXJDb3VudCA9IGNhbGNPbGROZXdMaW5lQ291bnQobGluZS50aGVpcnMpO1xuXG4gICAgICBpZiAob2xkTGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAobXlDb3VudC5vbGRMaW5lcyA9PT0gdGhlaXJDb3VudC5vbGRMaW5lcykge1xuICAgICAgICAgIG9sZExpbmVzICs9IG15Q291bnQub2xkTGluZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2xkTGluZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG5ld0xpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG15Q291bnQubmV3TGluZXMgPT09IHRoZWlyQ291bnQubmV3TGluZXMpIHtcbiAgICAgICAgICBuZXdMaW5lcyArPSBteUNvdW50Lm5ld0xpbmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld0xpbmVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkICYmIChsaW5lWzBdID09PSAnKycgfHwgbGluZVswXSA9PT0gJyAnKSkge1xuICAgICAgICBuZXdMaW5lcysrO1xuICAgICAgfVxuICAgICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQgJiYgKGxpbmVbMF0gPT09ICctJyB8fCBsaW5lWzBdID09PSAnICcpKSB7XG4gICAgICAgIG9sZExpbmVzKys7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4ge29sZExpbmVzLCBuZXdMaW5lc307XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/diff/lib/patch/parse.js":
/*!**********************************************!*\
  !*** ./node_modules/diff/lib/patch/parse.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.parsePatch = parsePatch;

/*istanbul ignore end*/
function parsePatch(uniDiff) {
  /*istanbul ignore start*/
  var
  /*istanbul ignore end*/
  options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var diffstr = uniDiff.split(/\r\n|[\n\v\f\r\x85]/),
      delimiters = uniDiff.match(/\r\n|[\n\v\f\r\x85]/g) || [],
      list = [],
      i = 0;

  function parseIndex() {
    var index = {};
    list.push(index); // Parse diff metadata

    while (i < diffstr.length) {
      var line = diffstr[i]; // File header found, end parsing diff metadata

      if (/^(\-\-\-|\+\+\+|@@)\s/.test(line)) {
        break;
      } // Diff index


      var header = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(line);

      if (header) {
        index.index = header[1];
      }

      i++;
    } // Parse file headers if they are defined. Unified diff requires them, but
    // there's no technical issues to have an isolated hunk without file header


    parseFileHeader(index);
    parseFileHeader(index); // Parse hunks

    index.hunks = [];

    while (i < diffstr.length) {
      var _line = diffstr[i];

      if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(_line)) {
        break;
      } else if (/^@@/.test(_line)) {
        index.hunks.push(parseHunk());
      } else if (_line && options.strict) {
        // Ignore unexpected content unless in strict mode
        throw new Error('Unknown line ' + (i + 1) + ' ' + JSON.stringify(_line));
      } else {
        i++;
      }
    }
  } // Parses the --- and +++ headers, if none are found, no lines
  // are consumed.


  function parseFileHeader(index) {
    var fileHeader = /^(---|\+\+\+)\s+(.*)$/.exec(diffstr[i]);

    if (fileHeader) {
      var keyPrefix = fileHeader[1] === '---' ? 'old' : 'new';
      var data = fileHeader[2].split('\t', 2);
      var fileName = data[0].replace(/\\\\/g, '\\');

      if (/^".*"$/.test(fileName)) {
        fileName = fileName.substr(1, fileName.length - 2);
      }

      index[keyPrefix + 'FileName'] = fileName;
      index[keyPrefix + 'Header'] = (data[1] || '').trim();
      i++;
    }
  } // Parses a hunk
  // This assumes that we are at the start of a hunk.


  function parseHunk() {
    var chunkHeaderIndex = i,
        chunkHeaderLine = diffstr[i++],
        chunkHeader = chunkHeaderLine.split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/);
    var hunk = {
      oldStart: +chunkHeader[1],
      oldLines: typeof chunkHeader[2] === 'undefined' ? 1 : +chunkHeader[2],
      newStart: +chunkHeader[3],
      newLines: typeof chunkHeader[4] === 'undefined' ? 1 : +chunkHeader[4],
      lines: [],
      linedelimiters: []
    }; // Unified Diff Format quirk: If the chunk size is 0,
    // the first number is one lower than one would expect.
    // https://www.artima.com/weblogs/viewpost.jsp?thread=164293

    if (hunk.oldLines === 0) {
      hunk.oldStart += 1;
    }

    if (hunk.newLines === 0) {
      hunk.newStart += 1;
    }

    var addCount = 0,
        removeCount = 0;

    for (; i < diffstr.length; i++) {
      // Lines starting with '---' could be mistaken for the "remove line" operation
      // But they could be the header for the next file. Therefore prune such cases out.
      if (diffstr[i].indexOf('--- ') === 0 && i + 2 < diffstr.length && diffstr[i + 1].indexOf('+++ ') === 0 && diffstr[i + 2].indexOf('@@') === 0) {
        break;
      }

      var operation = diffstr[i].length == 0 && i != diffstr.length - 1 ? ' ' : diffstr[i][0];

      if (operation === '+' || operation === '-' || operation === ' ' || operation === '\\') {
        hunk.lines.push(diffstr[i]);
        hunk.linedelimiters.push(delimiters[i] || '\n');

        if (operation === '+') {
          addCount++;
        } else if (operation === '-') {
          removeCount++;
        } else if (operation === ' ') {
          addCount++;
          removeCount++;
        }
      } else {
        break;
      }
    } // Handle the empty block count case


    if (!addCount && hunk.newLines === 1) {
      hunk.newLines = 0;
    }

    if (!removeCount && hunk.oldLines === 1) {
      hunk.oldLines = 0;
    } // Perform optional sanity checking


    if (options.strict) {
      if (addCount !== hunk.newLines) {
        throw new Error('Added line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
      }

      if (removeCount !== hunk.oldLines) {
        throw new Error('Removed line count did not match for hunk at line ' + (chunkHeaderIndex + 1));
      }
    }

    return hunk;
  }

  while (i < diffstr.length) {
    parseIndex();
  }

  return list;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9wYXRjaC9wYXJzZS5qcyJdLCJuYW1lcyI6WyJwYXJzZVBhdGNoIiwidW5pRGlmZiIsIm9wdGlvbnMiLCJkaWZmc3RyIiwic3BsaXQiLCJkZWxpbWl0ZXJzIiwibWF0Y2giLCJsaXN0IiwiaSIsInBhcnNlSW5kZXgiLCJpbmRleCIsInB1c2giLCJsZW5ndGgiLCJsaW5lIiwidGVzdCIsImhlYWRlciIsImV4ZWMiLCJwYXJzZUZpbGVIZWFkZXIiLCJodW5rcyIsInBhcnNlSHVuayIsInN0cmljdCIsIkVycm9yIiwiSlNPTiIsInN0cmluZ2lmeSIsImZpbGVIZWFkZXIiLCJrZXlQcmVmaXgiLCJkYXRhIiwiZmlsZU5hbWUiLCJyZXBsYWNlIiwic3Vic3RyIiwidHJpbSIsImNodW5rSGVhZGVySW5kZXgiLCJjaHVua0hlYWRlckxpbmUiLCJjaHVua0hlYWRlciIsImh1bmsiLCJvbGRTdGFydCIsIm9sZExpbmVzIiwibmV3U3RhcnQiLCJuZXdMaW5lcyIsImxpbmVzIiwibGluZWRlbGltaXRlcnMiLCJhZGRDb3VudCIsInJlbW92ZUNvdW50IiwiaW5kZXhPZiIsIm9wZXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sU0FBU0EsVUFBVCxDQUFvQkMsT0FBcEIsRUFBMkM7QUFBQTtBQUFBO0FBQUE7QUFBZEMsRUFBQUEsT0FBYyx1RUFBSixFQUFJO0FBQ2hELE1BQUlDLE9BQU8sR0FBR0YsT0FBTyxDQUFDRyxLQUFSLENBQWMscUJBQWQsQ0FBZDtBQUFBLE1BQ0lDLFVBQVUsR0FBR0osT0FBTyxDQUFDSyxLQUFSLENBQWMsc0JBQWQsS0FBeUMsRUFEMUQ7QUFBQSxNQUVJQyxJQUFJLEdBQUcsRUFGWDtBQUFBLE1BR0lDLENBQUMsR0FBRyxDQUhSOztBQUtBLFdBQVNDLFVBQVQsR0FBc0I7QUFDcEIsUUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFDQUgsSUFBQUEsSUFBSSxDQUFDSSxJQUFMLENBQVVELEtBQVYsRUFGb0IsQ0FJcEI7O0FB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QUwsS0FBa0IsQ0FBbkMsRUFBc0M7QUFDcENKLE1BQUFBLElBQUksQ0FBQ0ksUUFBTCxHQUFnQixDQUFoQjtBQUNEOztBQUNELFFBQUksQ0FBQ0ksV0FBRCxJQUFnQlIsSUFBSSxDQUFDRSxRQUFMLEtBQWtCLENBQXRDLEVBQXlDO0FBQ3ZDRixNQUFBQSxJQUFJLENBQUNFLFFBQUwsR0FBZ0IsQ0FBaEI7QUFDRCxLQTVEa0IsQ0E4RG5COzs7QUFDQSxRQUFJbEMsT0FBTyxDQUFDa0IsTUFBWixFQUFvQjtBQUNsQixVQUFJcUIsUUFBUSxLQUFLUCxJQUFJLENBQUNJLFFBQXRCLEVBQWdDO0FBQzlCLGNBQU0sSUFBSWpCLEtBQUosQ0FBVSxzREFBc0RVLGdCQUFnQixHQUFHLENBQXpFLENBQVYsQ0FBTjtBQUNEOztBQUNELFVBQUlXLFdBQVcsS0FBS1IsSUFBSSxDQUFDRSxRQUF6QixFQUFtQztBQUNqQyxjQUFNLElBQUlmLEtBQUosQ0FBVSx3REFBd0RVLGdCQUFnQixHQUFHLENBQTNFLENBQVYsQ0FBTjtBQUNEO0FBQ0Y7O0FBRUQsV0FBT0csSUFBUDtBQUNEOztBQUVELFNBQU8xQixDQUFDLEdBQUdMLE9BQU8sQ0FBQ1MsTUFBbkIsRUFBMkI7QUFDekJILElBQUFBLFVBQVU7QUFDWDs7QUFFRCxTQUFPRixJQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gcGFyc2VQYXRjaCh1bmlEaWZmLCBvcHRpb25zID0ge30pIHtcbiAgbGV0IGRpZmZzdHIgPSB1bmlEaWZmLnNwbGl0KC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS8pLFxuICAgICAgZGVsaW1pdGVycyA9IHVuaURpZmYubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgbGlzdCA9IFtdLFxuICAgICAgaSA9IDA7XG5cbiAgZnVuY3Rpb24gcGFyc2VJbmRleCgpIHtcbiAgICBsZXQgaW5kZXggPSB7fTtcbiAgICBsaXN0LnB1c2goaW5kZXgpO1xuXG4gICAgLy8gUGFyc2UgZGlmZiBtZXRhZGF0YVxuICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgIGxldCBsaW5lID0gZGlmZnN0cltpXTtcblxuICAgICAgLy8gRmlsZSBoZWFkZXIgZm91bmQsIGVuZCBwYXJzaW5nIGRpZmYgbWV0YWRhdGFcbiAgICAgIGlmICgoL14oXFwtXFwtXFwtfFxcK1xcK1xcK3xAQClcXHMvKS50ZXN0KGxpbmUpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAvLyBEaWZmIGluZGV4XG4gICAgICBsZXQgaGVhZGVyID0gKC9eKD86SW5kZXg6fGRpZmYoPzogLXIgXFx3KykrKVxccysoLis/KVxccyokLykuZXhlYyhsaW5lKTtcbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgaW5kZXguaW5kZXggPSBoZWFkZXJbMV07XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICB9XG5cbiAgICAvLyBQYXJzZSBmaWxlIGhlYWRlcnMgaWYgdGhleSBhcmUgZGVmaW5lZC4gVW5pZmllZCBkaWZmIHJlcXVpcmVzIHRoZW0sIGJ1dFxuICAgIC8vIHRoZXJlJ3Mgbm8gdGVjaG5pY2FsIGlzc3VlcyB0byBoYXZlIGFuIGlzb2xhdGVkIGh1bmsgd2l0aG91dCBmaWxlIGhlYWRlclxuICAgIHBhcnNlRmlsZUhlYWRlcihpbmRleCk7XG4gICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTtcblxuICAgIC8vIFBhcnNlIGh1bmtzXG4gICAgaW5kZXguaHVua3MgPSBbXTtcblxuICAgIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICAgIGxldCBsaW5lID0gZGlmZnN0cltpXTtcblxuICAgICAgaWYgKCgvXihJbmRleDp8ZGlmZnxcXC1cXC1cXC18XFwrXFwrXFwrKVxccy8pLnRlc3QobGluZSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2UgaWYgKCgvXkBALykudGVzdChsaW5lKSkge1xuICAgICAgICBpbmRleC5odW5rcy5wdXNoKHBhcnNlSHVuaygpKTtcbiAgICAgIH0gZWxzZSBpZiAobGluZSAmJiBvcHRpb25zLnN0cmljdCkge1xuICAgICAgICAvLyBJZ25vcmUgdW5leHBlY3RlZCBjb250ZW50IHVubGVzcyBpbiBzdHJpY3QgbW9kZVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Vua25vd24gbGluZSAnICsgKGkgKyAxKSArICcgJyArIEpTT04uc3RyaW5naWZ5KGxpbmUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGkrKztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQYXJzZXMgdGhlIC0tLSBhbmQgKysrIGhlYWRlcnMsIGlmIG5vbmUgYXJlIGZvdW5kLCBubyBsaW5lc1xuICAvLyBhcmUgY29uc3VtZWQuXG4gIGZ1bmN0aW9uIHBhcnNlRmlsZUhlYWRlcihpbmRleCkge1xuICAgIGNvbnN0IGZpbGVIZWFkZXIgPSAoL14oLS0tfFxcK1xcK1xcKylcXHMrKC4qKSQvKS5leGVjKGRpZmZzdHJbaV0pO1xuICAgIGlmIChmaWxlSGVhZGVyKSB7XG4gICAgICBsZXQga2V5UHJlZml4ID0gZmlsZUhlYWRlclsxXSA9PT0gJy0tLScgPyAnb2xkJyA6ICduZXcnO1xuICAgICAgY29uc3QgZGF0YSA9IGZpbGVIZWFkZXJbMl0uc3BsaXQoJ1xcdCcsIDIpO1xuICAgICAgbGV0IGZpbGVOYW1lID0gZGF0YVswXS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpO1xuICAgICAgaWYgKCgvXlwiLipcIiQvKS50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICBmaWxlTmFtZSA9IGZpbGVOYW1lLnN1YnN0cigxLCBmaWxlTmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIH1cbiAgICAgIGluZGV4W2tleVByZWZpeCArICdGaWxlTmFtZSddID0gZmlsZU5hbWU7XG4gICAgICBpbmRleFtrZXlQcmVmaXggKyAnSGVhZGVyJ10gPSAoZGF0YVsxXSB8fCAnJykudHJpbSgpO1xuXG4gICAgICBpKys7XG4gICAgfVxuICB9XG5cbiAgLy8gUGFyc2VzIGEgaHVua1xuICAvLyBUaGlzIGFzc3VtZXMgdGhhdCB3ZSBhcmUgYXQgdGhlIHN0YXJ0IG9mIGEgaHVuay5cbiAgZnVuY3Rpb24gcGFyc2VIdW5rKCkge1xuICAgIGxldCBjaHVua0hlYWRlckluZGV4ID0gaSxcbiAgICAgICAgY2h1bmtIZWFkZXJMaW5lID0gZGlmZnN0cltpKytdLFxuICAgICAgICBjaHVua0hlYWRlciA9IGNodW5rSGVhZGVyTGluZS5zcGxpdCgvQEAgLShcXGQrKSg/OiwoXFxkKykpPyBcXCsoXFxkKykoPzosKFxcZCspKT8gQEAvKTtcblxuICAgIGxldCBodW5rID0ge1xuICAgICAgb2xkU3RhcnQ6ICtjaHVua0hlYWRlclsxXSxcbiAgICAgIG9sZExpbmVzOiB0eXBlb2YgY2h1bmtIZWFkZXJbMl0gPT09ICd1bmRlZmluZWQnID8gMSA6ICtjaHVua0hlYWRlclsyXSxcbiAgICAgIG5ld1N0YXJ0OiArY2h1bmtIZWFkZXJbM10sXG4gICAgICBuZXdMaW5lczogdHlwZW9mIGNodW5rSGVhZGVyWzRdID09PSAndW5kZWZpbmVkJyA/IDEgOiArY2h1bmtIZWFkZXJbNF0sXG4gICAgICBsaW5lczogW10sXG4gICAgICBsaW5lZGVsaW1pdGVyczogW11cbiAgICB9O1xuXG4gICAgLy8gVW5pZmllZCBEaWZmIEZvcm1hdCBxdWlyazogSWYgdGhlIGNodW5rIHNpemUgaXMgMCxcbiAgICAvLyB0aGUgZmlyc3QgbnVtYmVyIGlzIG9uZSBsb3dlciB0aGFuIG9uZSB3b3VsZCBleHBlY3QuXG4gICAgLy8gaHR0cHM6Ly93d3cuYXJ0aW1hLmNvbS93ZWJsb2dzL3ZpZXdwb3N0LmpzcD90aHJlYWQ9MTY0MjkzXG4gICAgaWYgKGh1bmsub2xkTGluZXMgPT09IDApIHtcbiAgICAgIGh1bmsub2xkU3RhcnQgKz0gMTtcbiAgICB9XG4gICAgaWYgKGh1bmsubmV3TGluZXMgPT09IDApIHtcbiAgICAgIGh1bmsubmV3U3RhcnQgKz0gMTtcbiAgICB9XG5cbiAgICBsZXQgYWRkQ291bnQgPSAwLFxuICAgICAgICByZW1vdmVDb3VudCA9IDA7XG4gICAgZm9yICg7IGkgPCBkaWZmc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBMaW5lcyBzdGFydGluZyB3aXRoICctLS0nIGNvdWxkIGJlIG1pc3Rha2VuIGZvciB0aGUgXCJyZW1vdmUgbGluZVwiIG9wZXJhdGlvblxuICAgICAgLy8gQnV0IHRoZXkgY291bGQgYmUgdGhlIGhlYWRlciBmb3IgdGhlIG5leHQgZmlsZS4gVGhlcmVmb3JlIHBydW5lIHN1Y2ggY2FzZXMgb3V0LlxuICAgICAgaWYgKGRpZmZzdHJbaV0uaW5kZXhPZignLS0tICcpID09PSAwXG4gICAgICAgICAgICAmJiAoaSArIDIgPCBkaWZmc3RyLmxlbmd0aClcbiAgICAgICAgICAgICYmIGRpZmZzdHJbaSArIDFdLmluZGV4T2YoJysrKyAnKSA9PT0gMFxuICAgICAgICAgICAgJiYgZGlmZnN0cltpICsgMl0uaW5kZXhPZignQEAnKSA9PT0gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgbGV0IG9wZXJhdGlvbiA9IChkaWZmc3RyW2ldLmxlbmd0aCA9PSAwICYmIGkgIT0gKGRpZmZzdHIubGVuZ3RoIC0gMSkpID8gJyAnIDogZGlmZnN0cltpXVswXTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJysnIHx8IG9wZXJhdGlvbiA9PT0gJy0nIHx8IG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJ1xcXFwnKSB7XG4gICAgICAgIGh1bmsubGluZXMucHVzaChkaWZmc3RyW2ldKTtcbiAgICAgICAgaHVuay5saW5lZGVsaW1pdGVycy5wdXNoKGRlbGltaXRlcnNbaV0gfHwgJ1xcbicpO1xuXG4gICAgICAgIGlmIChvcGVyYXRpb24gPT09ICcrJykge1xuICAgICAgICAgIGFkZENvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJyAnKSB7XG4gICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgICByZW1vdmVDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBIYW5kbGUgdGhlIGVtcHR5IGJsb2NrIGNvdW50IGNhc2VcbiAgICBpZiAoIWFkZENvdW50ICYmIGh1bmsubmV3TGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsubmV3TGluZXMgPSAwO1xuICAgIH1cbiAgICBpZiAoIXJlbW92ZUNvdW50ICYmIGh1bmsub2xkTGluZXMgPT09IDEpIHtcbiAgICAgIGh1bmsub2xkTGluZXMgPSAwO1xuICAgIH1cblxuICAgIC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXG4gICAgaWYgKG9wdGlvbnMuc3RyaWN0KSB7XG4gICAgICBpZiAoYWRkQ291bnQgIT09IGh1bmsubmV3TGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBZGRlZCBsaW5lIGNvdW50IGRpZCBub3QgbWF0Y2ggZm9yIGh1bmsgYXQgbGluZSAnICsgKGNodW5rSGVhZGVySW5kZXggKyAxKSk7XG4gICAgICB9XG4gICAgICBpZiAocmVtb3ZlQ291bnQgIT09IGh1bmsub2xkTGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHVuaztcbiAgfVxuXG4gIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICBwYXJzZUluZGV4KCk7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cbiJdfQ==


/***/ }),

/***/ "./node_modules/diff/lib/util/array.js":
/*!*********************************************!*\
  !*** ./node_modules/diff/lib/util/array.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.arrayEqual = arrayEqual;
exports.arrayStartsWith = arrayStartsWith;

/*istanbul ignore end*/
function arrayEqual(a, b) {
  if (a.length !== b.length) {
    return false;
  }

  return arrayStartsWith(a, b);
}

function arrayStartsWith(array, start) {
  if (start.length > array.length) {
    return false;
  }

  for (var i = 0; i < start.length; i++) {
    if (start[i] !== array[i]) {
      return false;
    }
  }

  return true;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2FycmF5LmpzIl0sIm5hbWVzIjpbImFycmF5RXF1YWwiLCJhIiwiYiIsImxlbmd0aCIsImFycmF5U3RhcnRzV2l0aCIsImFycmF5Iiwic3RhcnQiLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQU8sU0FBU0EsVUFBVCxDQUFvQkMsQ0FBcEIsRUFBdUJDLENBQXZCLEVBQTBCO0FBQy9CLE1BQUlELENBQUMsQ0FBQ0UsTUFBRixLQUFhRCxDQUFDLENBQUNDLE1BQW5CLEVBQTJCO0FBQ3pCLFdBQU8sS0FBUDtBQUNEOztBQUVELFNBQU9DLGVBQWUsQ0FBQ0gsQ0FBRCxFQUFJQyxDQUFKLENBQXRCO0FBQ0Q7O0FBRU0sU0FBU0UsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0NDLEtBQWhDLEVBQXVDO0FBQzVDLE1BQUlBLEtBQUssQ0FBQ0gsTUFBTixHQUFlRSxLQUFLLENBQUNGLE1BQXpCLEVBQWlDO0FBQy9CLFdBQU8sS0FBUDtBQUNEOztBQUVELE9BQUssSUFBSUksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsS0FBSyxDQUFDSCxNQUExQixFQUFrQ0ksQ0FBQyxFQUFuQyxFQUF1QztBQUNyQyxRQUFJRCxLQUFLLENBQUNDLENBQUQsQ0FBTCxLQUFhRixLQUFLLENBQUNFLENBQUQsQ0FBdEIsRUFBMkI7QUFDekIsYUFBTyxLQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPLElBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBhcnJheUVxdWFsKGEsIGIpIHtcbiAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheVN0YXJ0c1dpdGgoYSwgYik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcnJheVN0YXJ0c1dpdGgoYXJyYXksIHN0YXJ0KSB7XG4gIGlmIChzdGFydC5sZW5ndGggPiBhcnJheS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXJ0Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0YXJ0W2ldICE9PSBhcnJheVtpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuIl19


/***/ }),

/***/ "./node_modules/diff/lib/util/distance-iterator.js":
/*!*********************************************************!*\
  !*** ./node_modules/diff/lib/util/distance-iterator.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = _default;

/*istanbul ignore end*/
// Iterator that traverses in the range of [min, max], stepping
// by distance from a given start position. I.e. for [0, 4], with
// start of 2, this will iterate 2, 3, 1, 4, 0.
function
/*istanbul ignore start*/
_default
/*istanbul ignore end*/
(start, minLine, maxLine) {
  var wantForward = true,
      backwardExhausted = false,
      forwardExhausted = false,
      localOffset = 1;
  return function iterator() {
    if (wantForward && !forwardExhausted) {
      if (backwardExhausted) {
        localOffset++;
      } else {
        wantForward = false;
      } // Check if trying to fit beyond text length, and if not, check it fits
      // after offset location (or desired location on first iteration)


      if (start + localOffset <= maxLine) {
        return localOffset;
      }

      forwardExhausted = true;
    }

    if (!backwardExhausted) {
      if (!forwardExhausted) {
        wantForward = true;
      } // Check if trying to fit before text beginning, and if not, check it fits
      // before offset location


      if (minLine <= start - localOffset) {
        return -localOffset++;
      }

      backwardExhausted = true;
      return iterator();
    } // We tried to fit hunk before text beginning and beyond text length, then
    // hunk can't fit on the text. Return undefined

  };
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yLmpzIl0sIm5hbWVzIjpbInN0YXJ0IiwibWluTGluZSIsIm1heExpbmUiLCJ3YW50Rm9yd2FyZCIsImJhY2t3YXJkRXhoYXVzdGVkIiwiZm9yd2FyZEV4aGF1c3RlZCIsImxvY2FsT2Zmc2V0IiwiaXRlcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNlO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBU0EsS0FBVCxFQUFnQkMsT0FBaEIsRUFBeUJDLE9BQXpCLEVBQWtDO0FBQy9DLE1BQUlDLFdBQVcsR0FBRyxJQUFsQjtBQUFBLE1BQ0lDLGlCQUFpQixHQUFHLEtBRHhCO0FBQUEsTUFFSUMsZ0JBQWdCLEdBQUcsS0FGdkI7QUFBQSxNQUdJQyxXQUFXLEdBQUcsQ0FIbEI7QUFLQSxTQUFPLFNBQVNDLFFBQVQsR0FBb0I7QUFDekIsUUFBSUosV0FBVyxJQUFJLENBQUNFLGdCQUFwQixFQUFzQztBQUNwQyxVQUFJRCxpQkFBSixFQUF1QjtBQUNyQkUsUUFBQUEsV0FBVztBQUNaLE9BRkQsTUFFTztBQUNMSCxRQUFBQSxXQUFXLEdBQUcsS0FBZDtBQUNELE9BTG1DLENBT3BDO0FBQ0E7OztBQUNBLFVBQUlILEtBQUssR0FBR00sV0FBUixJQUF1QkosT0FBM0IsRUFBb0M7QUFDbEMsZUFBT0ksV0FBUDtBQUNEOztBQUVERCxNQUFBQSxnQkFBZ0IsR0FBRyxJQUFuQjtBQUNEOztBQUVELFFBQUksQ0FBQ0QsaUJBQUwsRUFBd0I7QUFDdEIsVUFBSSxDQUFDQyxnQkFBTCxFQUF1QjtBQUNyQkYsUUFBQUEsV0FBVyxHQUFHLElBQWQ7QUFDRCxPQUhxQixDQUt0QjtBQUNBOzs7QUFDQSxVQUFJRixPQUFPLElBQUlELEtBQUssR0FBR00sV0FBdkIsRUFBb0M7QUFDbEMsZUFBTyxDQUFDQSxXQUFXLEVBQW5CO0FBQ0Q7O0FBRURGLE1BQUFBLGlCQUFpQixHQUFHLElBQXBCO0FBQ0EsYUFBT0csUUFBUSxFQUFmO0FBQ0QsS0E5QndCLENBZ0N6QjtBQUNBOztBQUNELEdBbENEO0FBbUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSXRlcmF0b3IgdGhhdCB0cmF2ZXJzZXMgaW4gdGhlIHJhbmdlIG9mIFttaW4sIG1heF0sIHN0ZXBwaW5nXG4vLyBieSBkaXN0YW5jZSBmcm9tIGEgZ2l2ZW4gc3RhcnQgcG9zaXRpb24uIEkuZS4gZm9yIFswLCA0XSwgd2l0aFxuLy8gc3RhcnQgb2YgMiwgdGhpcyB3aWxsIGl0ZXJhdGUgMiwgMywgMSwgNCwgMC5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKHN0YXJ0LCBtaW5MaW5lLCBtYXhMaW5lKSB7XG4gIGxldCB3YW50Rm9yd2FyZCA9IHRydWUsXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IGZhbHNlLFxuICAgICAgbG9jYWxPZmZzZXQgPSAxO1xuXG4gIHJldHVybiBmdW5jdGlvbiBpdGVyYXRvcigpIHtcbiAgICBpZiAod2FudEZvcndhcmQgJiYgIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgIGlmIChiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICBsb2NhbE9mZnNldCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FudEZvcndhcmQgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZXlvbmQgdGV4dCBsZW5ndGgsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgIC8vIGFmdGVyIG9mZnNldCBsb2NhdGlvbiAob3IgZGVzaXJlZCBsb2NhdGlvbiBvbiBmaXJzdCBpdGVyYXRpb24pXG4gICAgICBpZiAoc3RhcnQgKyBsb2NhbE9mZnNldCA8PSBtYXhMaW5lKSB7XG4gICAgICAgIHJldHVybiBsb2NhbE9mZnNldDtcbiAgICAgIH1cblxuICAgICAgZm9yd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgaWYgKCFmb3J3YXJkRXhoYXVzdGVkKSB7XG4gICAgICAgIHdhbnRGb3J3YXJkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZWZvcmUgdGV4dCBiZWdpbm5pbmcsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgIC8vIGJlZm9yZSBvZmZzZXQgbG9jYXRpb25cbiAgICAgIGlmIChtaW5MaW5lIDw9IHN0YXJ0IC0gbG9jYWxPZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIC1sb2NhbE9mZnNldCsrO1xuICAgICAgfVxuXG4gICAgICBiYWNrd2FyZEV4aGF1c3RlZCA9IHRydWU7XG4gICAgICByZXR1cm4gaXRlcmF0b3IoKTtcbiAgICB9XG5cbiAgICAvLyBXZSB0cmllZCB0byBmaXQgaHVuayBiZWZvcmUgdGV4dCBiZWdpbm5pbmcgYW5kIGJleW9uZCB0ZXh0IGxlbmd0aCwgdGhlblxuICAgIC8vIGh1bmsgY2FuJ3QgZml0IG9uIHRoZSB0ZXh0LiBSZXR1cm4gdW5kZWZpbmVkXG4gIH07XG59XG4iXX0=


/***/ }),

/***/ "./node_modules/diff/lib/util/params.js":
/*!**********************************************!*\
  !*** ./node_modules/diff/lib/util/params.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

/*istanbul ignore start*/


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.generateOptions = generateOptions;

/*istanbul ignore end*/
function generateOptions(options, defaults) {
  if (typeof options === 'function') {
    defaults.callback = options;
  } else if (options) {
    for (var name in options) {
      /* istanbul ignore else */
      if (options.hasOwnProperty(name)) {
        defaults[name] = options[name];
      }
    }
  }

  return defaults;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL3BhcmFtcy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZU9wdGlvbnMiLCJvcHRpb25zIiwiZGVmYXVsdHMiLCJjYWxsYmFjayIsIm5hbWUiLCJoYXNPd25Qcm9wZXJ0eSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQU8sU0FBU0EsZUFBVCxDQUF5QkMsT0FBekIsRUFBa0NDLFFBQWxDLEVBQTRDO0FBQ2pELE1BQUksT0FBT0QsT0FBUCxLQUFtQixVQUF2QixFQUFtQztBQUNqQ0MsSUFBQUEsUUFBUSxDQUFDQyxRQUFULEdBQW9CRixPQUFwQjtBQUNELEdBRkQsTUFFTyxJQUFJQSxPQUFKLEVBQWE7QUFDbEIsU0FBSyxJQUFJRyxJQUFULElBQWlCSCxPQUFqQixFQUEwQjtBQUN4QjtBQUNBLFVBQUlBLE9BQU8sQ0FBQ0ksY0FBUixDQUF1QkQsSUFBdkIsQ0FBSixFQUFrQztBQUNoQ0YsUUFBQUEsUUFBUSxDQUFDRSxJQUFELENBQVIsR0FBaUJILE9BQU8sQ0FBQ0csSUFBRCxDQUF4QjtBQUNEO0FBQ0Y7QUFDRjs7QUFDRCxTQUFPRixRQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVPcHRpb25zKG9wdGlvbnMsIGRlZmF1bHRzKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGRlZmF1bHRzLmNhbGxiYWNrID0gb3B0aW9ucztcbiAgfSBlbHNlIGlmIChvcHRpb25zKSB7XG4gICAgZm9yIChsZXQgbmFtZSBpbiBvcHRpb25zKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKG9wdGlvbnMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgZGVmYXVsdHNbbmFtZV0gPSBvcHRpb25zW25hbWVdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gZGVmYXVsdHM7XG59XG4iXX0=


/***/ }),

/***/ "./src/scripts/views/blank.ractive.html":
/*!**********************************************!*\
  !*** ./src/scripts/views/blank.ractive.html ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<span id=\"container{{id}}\" class=\"blank {{#blank.hasPendingFeedback}}has-pending-feedback{{/if}} {{#blank.hasHint}}has-tip{{/if}} {{#blank.isCorrect}}correct{{/if}} {{#blank.isError}}error{{/if}} {{#blank.isRetry}}retry{{/if}} {{#blank.isShowingSolution}}showing-solution{{/if}}\">\n  {{#unless isSelectCloze}}\n    <span class=\"h5p-input-wrapper\">\n      <input id=\"{{blank.id}}\" type=\"text\" value=\"{{blank.enteredText}}\" \n             size=\"{{blank.minTextLength}}\" on-escape=\"@this.fire('closeMessage', {}, blank)\" \n             on-enter=\"@this.fire('checkBlank', {}, blank, 'enter')\" \n             on-blur=\"@this.fire('checkBlank', {}, blank, 'blur')\" \n             on-focus=\"@this.fire('focus', {}, blank)\"\n             on-anykey=\"@this.fire('textTyped', {}, blank)\"\n             on-change=\"@this.fire('textChanged', {}, blank)\"\n             {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}}\n             class=\"h5p-text-input\"\n             autocomplete=\"off\"\n             autocapitalize=\"off\"/>\n      {{#blank.hasHint}}\n        <span class=\"h5p-tip-container\">\n          <button on-click=\"@this.fire('showHint', {}, blank)\" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\" {{/if}}>\n            <span class=\"joubel-tip-container\" title=\"Tip\" aria-label=\"Tip\" aria-expanded=\"true\" role=\"button\" tabindex=\"0\"><span class=\"joubel-icon-tip-normal \"><span class=\"h5p-icon-shadow\"></span><span class=\"h5p-icon-speech-bubble\"></span><span class=\"h5p-icon-info\"></span></span></span>\n          </button>\n        </span>\n        {{/if}}\n    </span>    \n  {{/unless}}\n  {{#if isSelectCloze}}\n      <button class=\"h5p-notification\" on-click=\"@this.fire('displayFeedback', {}, blank)\">\n        &#xf05a;\n      </button>\n      <span class=\"h5p-input-wrapper\">      \n      <select id=\"{{blank.id}}\" type=\"text\" value=\"{{blank.enteredText}}\"\n              on-enter=\"@this.fire('checkBlank', {}, blank, 'enter')\" \n              on-change=\"@this.fire('checkBlank', {}, blank, 'change')\"\n              on-focus=\"@this.fire('focus', {}, blank)\"\n              {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}} \n              size=\"1\"\n              class=\"h5p-text-input\">\n        {{#each blank.choices}}\n          <option>{{this}}</option>\n        {{/each}}\n      </select>\n      {{#blank.hasHint}}\n        <span class=\"h5p-tip-container\">\n          <button on-click=\"@this.fire('showHint', {}, blank)\" {{#(blank.isCorrect || blank.isShowingSolution)}}disabled=\"disabled\"{{/if}}>\n            <span class=\"joubel-tip-container\" title=\"Tip\" aria-label=\"Tip\" aria-expanded=\"true\" role=\"button\" tabindex=\"0\"><span class=\"joubel-icon-tip-normal \"><span class=\"h5p-icon-shadow\"></span><span class=\"h5p-icon-speech-bubble\"></span><span class=\"h5p-icon-info\"></span></span></span>\n          </button>\n        </span>\n      {{/if}}\n    </span>\n  {{/if}}\n</span>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/scripts/views/highlight.ractive.html":
/*!**************************************************!*\
  !*** ./src/scripts/views/highlight.ractive.html ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Module
var code = "<span {{#object.isHighlighted}}class=\"highlighted\"{{/if}} id=\"{{object.id}}\">{{{object.text}}}</span>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/lib/helpers.ts":
/*!****************************!*\
  !*** ./src/lib/helpers.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.shuffleArray = exports.getLongestString = void 0;
function getLongestString(strings) {
    return strings.reduce(function (prev, current) { return current.length > prev.length ? current : prev; }, "");
}
exports.getLongestString = getLongestString;
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
exports.shuffleArray = shuffleArray;


/***/ }),

/***/ "./src/lib/ractive-events-keys.ts":
/*!****************************************!*\
  !*** ./src/lib/ractive-events-keys.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.anykey = exports.uparrow = exports.downarrow = exports.rightarrow = exports.leftarrow = exports.space = exports.escape = exports.tab = exports.enter = void 0;
// TODO can we just declare the keydownHandler once? using `this`?
function makeKeyDefinition(code) {
    return function (node, fire) {
        function keydownHandler(event) {
            var which = event.which || event.keyCode;
            if (code && which === code) {
                event.preventDefault();
                fire({
                    node: node,
                    original: event
                });
            }
            else if (!code && [16, 17, 18, 35, 36, 13, 9, 27, 32, 37, 39, 40, 38].filter(function (c) { return c === which; }).length === 0) {
                fire({
                    node: node,
                    original: event
                });
            }
        }
        node.addEventListener('keydown', keydownHandler, false);
        return {
            teardown: function () {
                node.removeEventListener('keydown', keydownHandler, false);
            }
        };
    };
}
exports.enter = makeKeyDefinition(13);
exports.tab = makeKeyDefinition(9);
exports.escape = makeKeyDefinition(27);
exports.space = makeKeyDefinition(32);
exports.leftarrow = makeKeyDefinition(37);
exports.rightarrow = makeKeyDefinition(39);
exports.downarrow = makeKeyDefinition(40);
exports.uparrow = makeKeyDefinition(38);
exports.anykey = makeKeyDefinition();


/***/ }),

/***/ "./src/scripts/app.ts":
/*!****************************!*\
  !*** ./src/scripts/app.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var blank_loader_1 = __webpack_require__(/*! ./content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var data_repository_1 = __webpack_require__(/*! ./services/data-repository */ "./src/scripts/services/data-repository.ts");
var cloze_controller_1 = __webpack_require__(/*! ./controllers/cloze-controller */ "./src/scripts/controllers/cloze-controller.ts");
var localization_1 = __webpack_require__(/*! ./services/localization */ "./src/scripts/services/localization.ts");
var settings_1 = __webpack_require__(/*! ./services/settings */ "./src/scripts/services/settings.ts");
var message_service_1 = __webpack_require__(/*! ./services/message-service */ "./src/scripts/services/message-service.ts");
var unwrapper_1 = __webpack_require__(/*! ./helpers/unwrapper */ "./src/scripts/helpers/unwrapper.ts");
var xapi_1 = __webpack_require__(/*! ./models/xapi */ "./src/scripts/models/xapi.ts");
var extend_1 = __webpack_require__(/*! ./helpers/extend */ "./src/scripts/helpers/extend.ts");
var States;
(function (States) {
    States["ongoing"] = "ongoing";
    States["checking"] = "checking";
    States["showingSolutions"] = "showing-solution";
    States["finished"] = "finished";
    States["showingSolutionsEmbedded"] = "showing-solution-embedded";
})(States || (States = {}));
var XAPI_ALTERNATIVE_EXTENSION = 'https://h5p.org/x-api/alternatives';
var XAPI_CASE_SENSITIVITY = 'https://h5p.org/x-api/case-sensitivity';
var XAPI_REPORTING_VERSION_EXTENSION = 'https://h5p.org/x-api/h5p-reporting-version';
var AdvancedBlanks = /** @class */ (function (_super) {
    __extends(AdvancedBlanks, _super);
    /**
     * @constructor
     *
     * @param {object} config
     * @param {string} contentId
     * @param {object} contentData
     */
    function AdvancedBlanks(config, contentId, contentData) {
        if (contentData === void 0) { contentData = {}; }
        var _this = _super.call(this, 'advanced-blanks', { theme: true }) || this;
        /**
         * Indicates if user has entered any answer so far.
         */
        _this.answered = false;
        /**
         * Called from outside when the score of the cloze has changed.
         */
        _this.onScoreChanged = function (score, maxScore) {
            if (_this.clozeController.isFullyFilledOut) {
                _this.transitionState();
                if (_this.state !== States.finished)
                    _this.state = States.checking;
                _this.showFeedback();
            }
            else {
                _this.setFeedback("", score, maxScore);
            }
            _this.transitionState();
            _this.toggleButtonVisibility(_this.state);
        };
        _this.onTyped = function () {
            if (_this.state === States.checking) {
                _this.state = States.ongoing;
                _this.toggleButtonVisibility(_this.state);
            }
            _this.answered = true;
        };
        _this.onAutoChecked = function () {
            _this.triggerXAPI('interacted');
            if (_this.clozeController.isFullyFilledOut) {
                _this.triggerXAPIAnswered();
            }
        };
        /**
         * Called by H5P.Question.attach(). Creates all content elements and registers them
         * with H5P.Question.
         */
        _this.registerDomElements = function () {
            this.registerMedia();
            this.setIntroduction(this.repository.getTaskDescription());
            this.container = this.jQuery("<div/>", { "class": "h5p-advanced-blanks" });
            this.setContent(this.container);
            this.registerButtons();
            this.moveToState(States.ongoing);
        };
        _this.onCheckAnswer = function () {
            if (_this.a11yHeader) {
                _this.a11yHeader.innerHTML = _this.localization.getTextFromLabel(localization_1.LocalizationLabels.a11yCheckingModeHeader);
                _this.a11yHeader.focus();
            }
            _this.clozeController.checkAll();
            _this.triggerXAPI('interacted');
            _this.triggerXAPIAnswered();
            _this.transitionState();
            if (_this.state !== States.finished)
                _this.state = States.checking;
            _this.showFeedback();
            _this.toggleButtonVisibility(_this.state);
        };
        _this.transitionState = function () {
            if (_this.clozeController.isSolved) {
                _this.moveToState(States.finished);
            }
        };
        _this.onShowSolution = function () {
            _this.moveToState(States.showingSolutions);
            _this.clozeController.showSolutions();
            _this.showFeedback();
        };
        _this.onRetry = function () {
            if (_this.a11yHeader) {
                _this.a11yHeader.innerHTML = '';
            }
            _this.removeFeedback();
            _this.clozeController.reset();
            _this.answered = false;
            _this.moveToState(States.ongoing);
            // Reset timer
            _this.setActivityStarted(true);
        };
        _this.getCurrentState = function () {
            return _this.clozeController.serializeCloze();
        };
        /****************************************
         * Implementation of Question contract  *
         ****************************************/
        _this.getAnswerGiven = function () {
            return _this.answered || _this.clozeController.maxScore === 0;
        };
        _this.getScore = function () {
            return _this.clozeController.currentScore;
        };
        _this.getMaxScore = function () {
            return _this.clozeController.maxScore;
        };
        _this.showSolutions = function () {
            _this.onShowSolution();
            _this.moveToState(States.showingSolutionsEmbedded);
        };
        _this.resetTask = function () {
            _this.onRetry();
        };
        /***
         * XApi implementation
         */
        /**
         * Trigger xAPI answered event
         */
        _this.triggerXAPIAnswered = function () {
            _this.answered = true;
            var xAPIEvent = _this.createXAPIEventTemplate('answered');
            _this.addQuestionToXAPI(xAPIEvent);
            _this.addResponseToXAPI(xAPIEvent);
            _this.trigger(xAPIEvent);
        };
        /**
         * Get xAPI data.
         * Contract used by report rendering engine.
         *
         * @see contract at {@link https://h5p.org/documentation/developers/contracts#guides-header-6}
         */
        _this.getXAPIData = function () {
            var xAPIEvent = _this.createXAPIEventTemplate('answered');
            _this.addQuestionToXAPI(xAPIEvent);
            _this.addResponseToXAPI(xAPIEvent);
            return {
                statement: xAPIEvent.data.statement
            };
        };
        /**
         * Generate xAPI object definition used in xAPI statements.
         * @return {Object}
         */
        _this.getxAPIDefinition = function () {
            var definition = new xapi_1.XAPIActivityDefinition();
            definition.description = {
                'en-US': '<p>' + _this.repository.getTaskDescription() + '</p>' + _this.repository.getClozeText().replace(/__(_)+/g, '__________').replace(/!!/g, '')
            };
            definition.type = 'http://adlnet.gov/expapi/activities/cmi.interaction';
            definition.interactionType = 'fill-in'; // We use the 'fill-in' type even in select mode, as the xAPI format for selections doesn't really cater for sequences.
            var correctResponsesPatternPrefix = '{case_matters=' + _this.settings.caseSensitive + '}';
            var correctAnswerList = _this.clozeController.getCorrectAnswerList();
            // H5P uses extension instead of full correct responses pattern to counter complexity
            var firstAlternatives = correctAnswerList.reduce(function (result, list) {
                result.push(list[0]);
                return result;
            }, []).join('[,]');
            definition.correctResponsesPattern = ["".concat(correctResponsesPatternPrefix).concat(firstAlternatives)];
            // Add the H5P Alternative extension which provides all the combinations of different answers
            // Reporting software will need to support this extension for alternatives to work.
            definition.extensions = definition.extensions || {};
            definition.extensions[XAPI_CASE_SENSITIVITY] = _this.settings.caseSensitive;
            definition.extensions[XAPI_ALTERNATIVE_EXTENSION] = correctAnswerList;
            return definition;
        };
        /**
         * Add the question itself to the definition part of an xAPIEvent
         */
        _this.addQuestionToXAPI = function (xAPIEvent) {
            var definition = xAPIEvent.getVerifiedStatementValue(['object', 'definition']);
            _this.jQuery.extend(true, definition, _this.getxAPIDefinition());
            // Set reporting module version if alternative extension is used
            if (_this.clozeController.hasAlternatives) {
                var context = xAPIEvent.getVerifiedStatementValue(['context']);
                context.extensions = context.extensions || {};
                context.extensions[XAPI_REPORTING_VERSION_EXTENSION] = '1.0.0';
            }
        };
        /**
         * Add the response part to an xAPI event
         *
         * @param {H5P.XAPIEvent} xAPIEvent
         *  The xAPI event we will add a response to
         */
        _this.addResponseToXAPI = function (xAPIEvent) {
            xAPIEvent.setScoredResult(_this.clozeController.currentScore, _this.clozeController.maxScore, _this);
            xAPIEvent.data.statement.result.response = _this.getxAPIResponse();
        };
        /**
         * Generate xAPI user response, used in xAPI statements.
         * @return {string} User answers separated by the "[,]" pattern
         */
        _this.getxAPIResponse = function () {
            var usersAnswers = _this.getCurrentState();
            return usersAnswers.join('[,]');
        };
        // Set mandatory default values for editor widgets that create content type instances
        config = (0, extend_1.extend)({
            content: {
                blanksText: ''
            },
            behaviour: {
                mode: 'typing',
                selectAlternatives: 'alternatives'
            },
            submitAnswer: 'Submit',
            a11yCheck: 'Check the answers. The responses will be marked as correct, incorrect, or unanswered.',
            a11yShowSolution: 'Show the solution. The task will be marked with its correct solution.',
            a11yRetry: 'Retry the task. Reset all responses and start the task over again.',
            a11yCheckingModeHeader: 'Checking mode',
        }, config);
        _this.jQuery = H5P.jQuery;
        _this.contentId = contentId;
        _this.contentData = contentData;
        var unwrapper = new unwrapper_1.Unrwapper(_this.jQuery);
        _this.settings = new settings_1.H5PSettings(config);
        _this.localization = new localization_1.H5PLocalization(config);
        _this.repository = new data_repository_1.H5PDataRepository(config, _this.settings, _this.localization, _this.jQuery, unwrapper);
        _this.messageService = new message_service_1.MessageService(_this.jQuery);
        blank_loader_1.BlankLoader.initialize(_this.settings, _this.localization, _this.jQuery, _this.messageService);
        _this.clozeController = new cloze_controller_1.ClozeController(_this.repository, _this.settings, _this.localization, _this.messageService);
        _this.clozeController.onScoreChanged = _this.onScoreChanged;
        _this.clozeController.onSolved = _this.onSolved;
        _this.clozeController.onAutoChecked = _this.onAutoChecked;
        _this.clozeController.onTyped = _this.onTyped;
        _this.clozeController.onTextChanged = function () { return _this.triggerXAPI('interacted'); };
        if (contentData && contentData.previousState)
            _this.previousState = contentData.previousState;
        /**
        * Overrides the attach method of the superclass (H5P.Question) and calls it
        * at the same time. (equivalent to super.attach($container)).
        * This is necessary, as Ractive needs to be initialized with an existing DOM
        * element. DOM elements are created in H5P.Question.attach, so initializing
        * Ractive in registerDomElements doesn't work.
        */
        _this.attach = (function (original) {
            return function ($container) {
                original($container);
                _this.clozeController.initialize(_this.container.get(0), $container);
                _this.setupA11yHeader();
                if (_this.clozeController.deserializeCloze(_this.previousState)) {
                    _this.answered = _this.clozeController.isFilledOut;
                    if (_this.settings.autoCheck)
                        _this.onCheckAnswer();
                    _this.toggleButtonVisibility(_this.state);
                }
            };
        })(_this.attach);
        return _this;
    }
    AdvancedBlanks.prototype.onSolved = function () {
    };
    AdvancedBlanks.prototype.setupA11yHeader = function () {
        this.a11yHeader = document.createElement('div');
        this.a11yHeader.classList.add('hidden-but-read');
        this.a11yHeader.tabIndex = -1;
        this.container.get(0).insertBefore(this.a11yHeader, this.container.get(0).firstChild);
    };
    /**
     * @returns JQuery - The outer h5p container. The library can add dialogues to this
     * element.
     */
    AdvancedBlanks.prototype.getH5pContainer = function () {
        var $content = this.jQuery('[data-content-id="' + this.contentId + '"].h5p-content');
        var $containerParents = $content.parents('.h5p-container');
        // select find container to attach dialogs to
        var $container;
        if ($containerParents.length !== 0) {
            // use parent highest up if any
            $container = $containerParents.last();
        }
        else if ($content.length !== 0) {
            $container = $content;
        }
        else {
            $container = this.jQuery(document.body);
        }
        return $container;
    };
    AdvancedBlanks.prototype.registerMedia = function () {
        var media = this.repository.getMedia();
        if (!media || !media.library)
            return;
        var type = media.library.split(' ')[0];
        if (type === 'H5P.Image') {
            if (media.params.file) {
                this.setImage(media.params.file.path, {
                    disableImageZooming: this.settings.disableImageZooming,
                    alt: media.params.alt,
                    expandImage: media.params.expandImage,
                    minimizeImage: media.params.minimizeImage
                });
            }
        }
        else if (type === 'H5P.Video') {
            if (media.params.sources) {
                this.setVideo(media);
            }
        }
    };
    AdvancedBlanks.prototype.registerButtons = function () {
        var $container = this.getH5pContainer();
        if (!this.settings.autoCheck) {
            // Check answer button
            this.addButton('check-answer', this.localization.getTextFromLabel(localization_1.LocalizationLabels.checkAllButton), this.onCheckAnswer, true, {
                'aria-label': this.localization.getTextFromLabel(localization_1.LocalizationLabels.a11yCheck),
            }, {
                confirmationDialog: {
                    enable: this.settings.confirmCheckDialog,
                    l10n: this.localization.getObjectForStructure(localization_1.LocalizationStructures.confirmCheck),
                    instance: this,
                    $parentElement: $container,
                },
                contentData: this.contentData,
                textIfSubmitting: this.localization.getTextFromLabel(localization_1.LocalizationLabels.submitAllButton),
                icon: 'check',
            });
        }
        // Show solution button
        this.addButton('show-solution', this.localization.getTextFromLabel(localization_1.LocalizationLabels.showSolutionButton), this.onShowSolution, this.settings.enableSolutionsButton, {
            'aria-label': this.localization.getTextFromLabel(localization_1.LocalizationLabels.a11yShowSolution),
        }, {
            styleType: 'secondary',
            icon: 'show-solutions',
        });
        // Try again button
        if (this.settings.enableRetry === true) {
            this.addButton('try-again', this.localization.getTextFromLabel(localization_1.LocalizationLabels.retryButton), this.onRetry, true, {
                'aria-label': this.localization.getTextFromLabel(localization_1.LocalizationLabels.a11yRetry),
            }, {
                confirmationDialog: {
                    enable: this.settings.confirmRetryDialog,
                    l10n: this.localization.getObjectForStructure(localization_1.LocalizationStructures.confirmRetry),
                    instance: this,
                    $parentElement: $container
                },
                styleType: 'secondary',
                icon: 'retry',
            });
        }
    };
    AdvancedBlanks.prototype.showFeedback = function () {
        var scoreText = H5P.Question.determineOverallFeedback(this.localization.getObjectForStructure(localization_1.LocalizationStructures.overallFeedback), this.clozeController.currentScore / this.clozeController.maxScore).replace('@score', this.clozeController.currentScore).replace('@total', this.clozeController.maxScore);
        this.setFeedback(scoreText, this.clozeController.currentScore, this.clozeController.maxScore, this.localization.getTextFromLabel(localization_1.LocalizationLabels.scoreBarLabel));
    };
    /**
     * Shows are hides buttons depending on the current state and settings made
     * by the content creator.
     * @param  {States} state
     */
    AdvancedBlanks.prototype.moveToState = function (state) {
        this.state = state;
        this.toggleButtonVisibility(state);
    };
    AdvancedBlanks.prototype.toggleButtonVisibility = function (state) {
        if (this.settings.enableSolutionsButton) {
            if (((state === States.checking)
                || (this.settings.autoCheck && state === States.ongoing))
                && (!this.settings.showSolutionsRequiresInput || this.clozeController.allBlanksEntered)) {
                this.showButton('show-solution');
            }
            else {
                this.hideButton('show-solution');
            }
        }
        if (this.settings.enableRetry && (state === States.checking || state === States.finished || state === States.showingSolutions)) {
            this.showButton('try-again');
        }
        else {
            this.hideButton('try-again');
        }
        if (state === States.ongoing && this.settings.enableCheckButton) {
            this.showButton('check-answer');
        }
        else {
            this.hideButton('check-answer');
        }
        if (state === States.showingSolutionsEmbedded) {
            this.hideButton('check-answer');
            this.hideButton('try-again');
            this.hideButton('show-solution');
        }
        this.trigger('resize');
    };
    return AdvancedBlanks;
}(H5P.Question));
exports["default"] = AdvancedBlanks;


/***/ }),

/***/ "./src/scripts/content-loaders/blank-loader.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/content-loaders/blank-loader.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BlankLoader = void 0;
var answer_1 = __webpack_require__(/*! ../models/answer */ "./src/scripts/models/answer.ts");
var blank_1 = __webpack_require__(/*! ../models/blank */ "./src/scripts/models/blank.ts");
var message_1 = __webpack_require__(/*! ../models/message */ "./src/scripts/models/message.ts");
var BlankLoader = /** @class */ (function () {
    function BlankLoader(settings, localization, jquery, messageService) {
        this.settings = settings;
        this.localization = localization;
        this.jquery = jquery;
        this.messageService = messageService;
    }
    BlankLoader.initialize = function (settings, localization, jquery, messageService) {
        this._instance = new BlankLoader(settings, localization, jquery, messageService);
        return this._instance;
    };
    Object.defineProperty(BlankLoader, "instance", {
        get: function () {
            if (this._instance)
                return this._instance;
            throw "BlankLoader must be initialized before use.";
        },
        enumerable: false,
        configurable: true
    });
    BlankLoader.prototype.decodeHtml = function (html) {
        var elem = document.createElement('textarea');
        elem.innerHTML = html;
        return elem.value;
    };
    BlankLoader.prototype.createBlank = function (id, correctText, hintText, incorrectAnswers) {
        var blank = new blank_1.Blank(this.settings, this.localization, this.jquery, this.messageService, id);
        if (correctText) {
            correctText = this.decodeHtml(correctText);
            blank.addCorrectAnswer(new answer_1.Answer(correctText, "", false, 0, this.settings));
        }
        blank.setHint(new message_1.Message(hintText ? hintText : "", false, 0));
        if (incorrectAnswers) {
            for (var _i = 0, incorrectAnswers_1 = incorrectAnswers; _i < incorrectAnswers_1.length; _i++) {
                var h5pIncorrectAnswer = incorrectAnswers_1[_i];
                blank.addIncorrectAnswer(this.decodeHtml(h5pIncorrectAnswer.incorrectAnswerText), h5pIncorrectAnswer.incorrectAnswerFeedback, h5pIncorrectAnswer.showHighlight, h5pIncorrectAnswer.highlight);
            }
        }
        return blank;
    };
    BlankLoader.prototype.replaceSnippets = function (blank, snippets) {
        var _this = this;
        blank.correctAnswers.concat(blank.incorrectAnswers)
            .forEach(function (answer) { return answer.message.text = _this.getStringWithSnippets(answer.message.text, snippets); });
        blank.hint.text = this.getStringWithSnippets(blank.hint.text, snippets);
    };
    BlankLoader.prototype.getStringWithSnippets = function (text, snippets) {
        if (!text || text === undefined)
            return "";
        if (!snippets)
            return text;
        for (var _i = 0, snippets_1 = snippets; _i < snippets_1.length; _i++) {
            var snippet = snippets_1[_i];
            if (snippet.name === undefined || snippet.name === "" || snippet.text === undefined || snippet.text === "")
                continue;
            text = text.replace("@" + snippet.name, snippet.text);
        }
        return text;
    };
    /**
     * Adds the highlight objects to the answers in the correct and incorrect answer list.
     * @param  {Highlight[]} highlightsBefore - All highlights coming before the blank.
     * @param  {Highlight[]} highlightsAfter - All highlights coming after the blank.
     */
    BlankLoader.prototype.linkHighlightIdToObject = function (blank, highlightsBefore, highlightsAfter) {
        for (var _i = 0, _a = blank.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            answer.linkHighlightIdToObject(highlightsBefore, highlightsAfter);
        }
        for (var _b = 0, _c = blank.incorrectAnswers; _b < _c.length; _b++) {
            var answer = _c[_b];
            answer.linkHighlightIdToObject(highlightsBefore, highlightsAfter);
        }
        blank.hint.linkHighlight(highlightsBefore, highlightsAfter);
    };
    return BlankLoader;
}());
exports.BlankLoader = BlankLoader;


/***/ }),

/***/ "./src/scripts/content-loaders/cloze-loader.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/content-loaders/cloze-loader.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClozeLoader = void 0;
var blank_loader_1 = __webpack_require__(/*! ./blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var cloze_element_1 = __webpack_require__(/*! ../models/cloze-element */ "./src/scripts/models/cloze-element.ts");
var highlight_1 = __webpack_require__(/*! ../models/highlight */ "./src/scripts/models/highlight.ts");
var cloze_1 = __webpack_require__(/*! ../models/cloze */ "./src/scripts/models/cloze.ts");
/**
 * Loads a cloze object.
 */
var ClozeLoader = exports.ClozeLoader = /** @class */ (function () {
    function ClozeLoader() {
    }
    /**
     * @param  {string} html - The html string that contains the cloze with blanks marking and highlight markings.
     * @param  {Blank[]} blanks - All blanks as entered by the content author.
     * @returns Cloze
     */
    ClozeLoader.createCloze = function (html, blanks) {
        var orderedAllElementsList = new Array();
        var highlightInstances = new Array();
        var blanksInstances = new Array();
        html = ClozeLoader.normalizeBlankMarkings(html);
        var conversionResult = ClozeLoader.convertMarkupToSpans(html, blanks);
        html = conversionResult.html;
        orderedAllElementsList = conversionResult.orderedAllElementsList;
        highlightInstances = conversionResult.highlightInstances;
        blanksInstances = conversionResult.blanksInstances;
        ClozeLoader.linkHighlightsObjects(orderedAllElementsList, highlightInstances, blanksInstances);
        var cloze = new cloze_1.Cloze();
        cloze.html = html;
        cloze.blanks = blanksInstances;
        cloze.highlights = highlightInstances;
        return cloze;
    };
    /**
    * Converts !!signal!! highlight markup and ___  blank markup into <span>...</span>.
    * Returns the resulting html string and three lists of all active elements used in the cloze:
    *    orderedAllElements: highlights and blanks in the order of appearance in the html.
    *    highlightInstances: only highlights in the order of appearance
    *    blanksInstances: only blanks in the order of appearance
    * @param  {string} html
    * @param  {Blank[]} blanks
    * @returns Lists of active elements (see description).
    */
    ClozeLoader.convertMarkupToSpans = function (html, blanks) {
        var orderedAllElementsList = new Array();
        var highlightInstances = new Array();
        var blanksInstances = new Array();
        var exclamationMarkRegExp = /!!(.{1,40}?)!!/i;
        var highlightCounter = 0;
        var blankCounter = 0;
        // Searches the html string for highlights and blanks and inserts spans. 
        do {
            var nextHighlightMatch = html.match(exclamationMarkRegExp);
            var nextBlankIndex = html.indexOf(ClozeLoader.normalizedBlankMarker);
            if (nextHighlightMatch && ((nextHighlightMatch.index < nextBlankIndex) || (nextBlankIndex < 0))) {
                // next active element is a highlight
                var highlight = new highlight_1.Highlight(nextHighlightMatch[1], "highlight_".concat(highlightCounter));
                highlightInstances.push(highlight);
                orderedAllElementsList.push(highlight);
                html = html.replace(exclamationMarkRegExp, "<span id='container_highlight_".concat(highlightCounter, "'></span>"));
                highlightCounter++;
            }
            else if (nextBlankIndex >= 0) {
                // next active element is a blank
                if (blankCounter >= blanks.length) {
                    // if the blank is not in the repository (The content author has marked too many blanks in the text, but not entered correct answers.)
                    html = html.replace(ClozeLoader.normalizedBlankMarker, "<span></span>");
                }
                else {
                    var blank = blanks[blankCounter];
                    blanksInstances.push(blank);
                    orderedAllElementsList.push(blank);
                    html = html.replace(ClozeLoader.normalizedBlankMarker, "<span id='container_".concat(blank.id, "'></span>"));
                    blankCounter++;
                }
            }
        } while (nextHighlightMatch || (nextBlankIndex >= 0));
        return {
            html: html,
            orderedAllElementsList: orderedAllElementsList,
            highlightInstances: highlightInstances,
            blanksInstances: blanksInstances
        };
    };
    /**
     * Looks for all instances of marked blanks and replaces them with ___.
     * @param  {string} html
     * @returns string
     */
    ClozeLoader.normalizeBlankMarkings = function (html) {
        var underlineBlankRegEx = /_{3,}/g;
        html = html.replace(underlineBlankRegEx, ClozeLoader.normalizedBlankMarker);
        return html;
    };
    /**
    * Iterates through all blanks and calls their linkHighlightIdsToObjects(...).
    * @param orderedAllElementsList
    * @param highlightInstances
    * @param blanksInstances
    */
    ClozeLoader.linkHighlightsObjects = function (orderedAllElementsList, highlightInstances, blanksInstances) {
        for (var _i = 0, blanksInstances_1 = blanksInstances; _i < blanksInstances_1.length; _i++) {
            var blank = blanksInstances_1[_i];
            var nextBlankIndexInArray = orderedAllElementsList.indexOf(blank);
            var highlightsBeforeBlank = orderedAllElementsList
                .slice(0, nextBlankIndexInArray)
                .filter(function (e) { return e.type === cloze_element_1.ClozeElementType.Highlight; })
                .map(function (e) { return e; })
                .reverse();
            var highlightsAfterBlank = orderedAllElementsList
                .slice(nextBlankIndexInArray + 1)
                .filter(function (e) { return e.type === cloze_element_1.ClozeElementType.Highlight; })
                .map(function (e) { return e; });
            blank_loader_1.BlankLoader.instance.linkHighlightIdToObject(blank, highlightsBeforeBlank, highlightsAfterBlank);
        }
    };
    ClozeLoader.normalizedBlankMarker = '___';
    return ClozeLoader;
}());


/***/ }),

/***/ "./src/scripts/controllers/cloze-controller.ts":
/*!*****************************************************!*\
  !*** ./src/scripts/controllers/cloze-controller.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClozeController = void 0;
var blank_loader_1 = __webpack_require__(/*! ../content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var cloze_loader_1 = __webpack_require__(/*! ../content-loaders/cloze-loader */ "./src/scripts/content-loaders/cloze-loader.ts");
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var answer_1 = __webpack_require__(/*! ../models/answer */ "./src/scripts/models/answer.ts");
var highlight_ractive_html_1 = __webpack_require__(/*! ../views/highlight.ractive.html */ "./src/scripts/views/highlight.ractive.html");
var blank_ractive_html_1 = __webpack_require__(/*! ../views/blank.ractive.html */ "./src/scripts/views/blank.ractive.html");
var RactiveEventsKeys = __webpack_require__(/*! ../../lib/ractive-events-keys */ "./src/lib/ractive-events-keys.ts");
var ClozeController = /** @class */ (function () {
    function ClozeController(repository, settings, localization, MessageService) {
        var _this = this;
        this.repository = repository;
        this.settings = settings;
        this.localization = localization;
        this.MessageService = MessageService;
        // Storage of the ractive objects that link models and views
        this.highlightRactives = {};
        this.blankRactives = {};
        this.checkAll = function () {
            _this.cloze.hideAllHighlights();
            for (var _i = 0, _a = _this.cloze.blanks; _i < _a.length; _i++) {
                var blank = _a[_i];
                if ((!blank.isCorrect) && blank.enteredText !== "")
                    blank.evaluateAttempt(true, true);
            }
            _this.refreshCloze();
            _this.checkAndNotifyCompleteness();
        };
        this.textTyped = function (event, blank) {
            blank.onTyped();
            if (_this.onTyped)
                _this.onTyped();
            _this.refreshCloze();
        };
        this.focus = function (event, blank) {
            blank.onFocused();
            _this.refreshCloze();
        };
        this.displayFeedback = function (event, blank) {
            blank.onDisplayFeedback();
            _this.refreshCloze();
        };
        this.showHint = function (event, blank) {
            _this.cloze.hideAllHighlights();
            blank.showHint();
            _this.refreshCloze();
        };
        this.requestCloseTooltip = function (event, blank) {
            blank.removeTooltip();
            _this.refreshCloze();
            _this.jquery.find("#" + blank.id).focus();
        };
        this.checkBlank = function (event, blank, cause) {
            if ((cause === 'blur' || cause === 'change')) {
                blank.lostFocus();
            }
            if (cause === 'change' && _this.onTyped) {
                _this.onTyped();
            }
            if (_this.settings.autoCheck) {
                if (!blank.enteredText || blank.enteredText === "")
                    return;
                _this.cloze.hideAllHighlights();
                blank.evaluateAttempt(false);
                _this.checkAndNotifyCompleteness();
                _this.refreshCloze();
                _this.onAutoChecked();
            }
            if ((cause === 'enter')
                && ((_this.settings.autoCheck && blank.isCorrect && !_this.isSolved)
                    || !_this.settings.autoCheck)) {
                // move to next blank
                var index = _this.cloze.blanks.indexOf(blank);
                var nextId;
                while (index < _this.cloze.blanks.length - 1 && !nextId) {
                    index++;
                    if (!_this.cloze.blanks[index].isCorrect)
                        nextId = _this.cloze.blanks[index].id;
                }
                if (nextId)
                    _this.jquery.find("#" + nextId).focus();
            }
        };
        this.reset = function () {
            _this.cloze.reset();
            _this.refreshCloze();
        };
        this.showSolutions = function () {
            _this.cloze.showSolutions();
            _this.refreshCloze();
        };
        this.checkAndNotifyCompleteness = function () {
            if (_this.onScoreChanged)
                _this.onScoreChanged(_this.currentScore, _this.maxScore);
            if (_this.cloze.isSolved) {
                if (_this.onSolved)
                    _this.onSolved();
                return true;
            }
            return false;
        };
    }
    Object.defineProperty(ClozeController.prototype, "maxScore", {
        get: function () {
            return this.cloze.blanks.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "hasAlternatives", {
        /**
         * Detect whether there are blanks with more than one solution.
         * @return {boolean} True if there is at least one blank with more than one solution.
         */
        get: function () {
            return this.cloze.blanks.some(function (b) { return b.correctAnswers[0].alternatives.length > 1; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "currentScore", {
        get: function () {
            var _this = this;
            var score = this.cloze.blanks.reduce(function (score, b) {
                var notShowingSolution = !b.isShowingSolution;
                var correctAnswerGiven = b.correctAnswers[0].alternatives.indexOf(b.enteredText || '') !== -1;
                // Detect small mistakes
                var closeCorrectMatches = b.correctAnswers
                    .map(function (answer) { return answer.evaluateAttempt(b.enteredText); })
                    .filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.CloseMatch; });
                var similarAnswerGiven = _this.settings.acceptSpellingErrors && closeCorrectMatches.length > 0;
                return score += (notShowingSolution && (correctAnswerGiven || similarAnswerGiven)) ? 1 : 0;
            }, 0);
            return Math.max(0, score);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "allBlanksEntered", {
        get: function () {
            if (this.cloze)
                return this.cloze.blanks.every(function (blank) { return blank.isError || blank.isCorrect || blank.isRetry; });
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isSolved", {
        get: function () {
            return this.cloze.isSolved;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isFilledOut", {
        get: function () {
            if (!this.cloze || this.cloze.blanks.length === 0)
                return true;
            return this.cloze.blanks.some(function (b) { return b.enteredText !== ''; });
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ClozeController.prototype, "isFullyFilledOut", {
        get: function () {
            if (!this.cloze || this.cloze.blanks.length === 0)
                return true;
            return this.cloze.blanks.every(function (b) { return b.enteredText !== ''; });
        },
        enumerable: false,
        configurable: true
    });
    /**
     * Sets up all blanks, the cloze itself and the ractive bindings.
     * @param  {HTMLElement} root
     */
    ClozeController.prototype.initialize = function (root, jquery) {
        this.jquery = jquery;
        this.isSelectCloze = this.settings.clozeType === enums_1.ClozeType.Select ? true : false;
        var blanks = this.repository.getBlanks();
        // Stop ractive debug mode
        Ractive.DEBUG = false;
        if (this.isSelectCloze && this.settings.selectAlternatives === enums_1.SelectAlternatives.All) {
            for (var _i = 0, blanks_1 = blanks; _i < blanks_1.length; _i++) {
                var blank = blanks_1[_i];
                var otherBlanks = blanks.filter(function (v) { return v !== blank; });
                blank.loadChoicesFromOtherBlanks(otherBlanks);
            }
        }
        var snippets = this.repository.getSnippets();
        blanks.forEach(function (blank) { return blank_loader_1.BlankLoader.instance.replaceSnippets(blank, snippets); });
        this.cloze = cloze_loader_1.ClozeLoader.createCloze(this.repository.getClozeText(), blanks);
        var containers = this.createAndAddContainers(root);
        containers.cloze.innerHTML = this.cloze.html;
        this.createRactiveBindings();
    };
    ClozeController.prototype.createAndAddContainers = function (addTo) {
        var clozeContainerElement = document.createElement('div');
        clozeContainerElement.id = 'h5p-cloze-container';
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            clozeContainerElement.className = 'h5p-advanced-blanks-select-mode';
        }
        else {
            clozeContainerElement.className = 'h5p-advanced-blanks-type-mode';
        }
        addTo.appendChild(clozeContainerElement);
        return {
            cloze: clozeContainerElement
        };
    };
    ClozeController.prototype.createHighlightBinding = function (highlight) {
        this.highlightRactives[highlight.id] = new Ractive({
            el: '#container_' + highlight.id,
            template: highlight_ractive_html_1.default,
            data: {
                object: highlight
            }
        });
    };
    ClozeController.prototype.createBlankBinding = function (blank) {
        var ractive = new Ractive({
            el: '#container_' + blank.id,
            template: blank_ractive_html_1.default,
            data: {
                isSelectCloze: this.isSelectCloze,
                blank: blank
            },
            events: {
                enter: RactiveEventsKeys.enter,
                escape: RactiveEventsKeys.escape,
                anykey: RactiveEventsKeys.anykey
            }
        });
        ractive.on("checkBlank", this.checkBlank);
        ractive.on("showHint", this.showHint);
        ractive.on("textTyped", this.textTyped);
        ractive.on("textChanged", this.onTextChanged);
        ractive.on("closeMessage", this.requestCloseTooltip);
        ractive.on("focus", this.focus);
        ractive.on("displayFeedback", this.displayFeedback);
        this.blankRactives[blank.id] = ractive;
    };
    ClozeController.prototype.createRactiveBindings = function () {
        for (var _i = 0, _a = this.cloze.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            this.createHighlightBinding(highlight);
        }
        for (var _b = 0, _c = this.cloze.blanks; _b < _c.length; _b++) {
            var blank = _c[_b];
            this.createBlankBinding(blank);
        }
    };
    /**
     * Updates all views of highlights and blanks. Can be called when a model
     * was changed
     */
    ClozeController.prototype.refreshCloze = function () {
        for (var _i = 0, _a = this.cloze.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            var highlightRactive = this.highlightRactives[highlight.id];
            highlightRactive.set("object", highlight);
        }
        for (var _b = 0, _c = this.cloze.blanks; _b < _c.length; _b++) {
            var blank = _c[_b];
            var blankRactive = this.blankRactives[blank.id];
            blankRactive.set("blank", blank);
        }
    };
    ClozeController.prototype.serializeCloze = function () {
        return this.cloze.serialize();
    };
    ClozeController.prototype.deserializeCloze = function (data) {
        if (!this.cloze || !data)
            return false;
        this.cloze.deserialize(data);
        this.refreshCloze();
        return true;
    };
    ClozeController.prototype.getCorrectAnswerList = function () {
        if (!this.cloze || this.cloze.blanks.length === 0)
            return [[]];
        var result = [];
        for (var _i = 0, _a = this.cloze.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            result.push(blank.getCorrectAnswers());
        }
        return result;
    };
    return ClozeController;
}());
exports.ClozeController = ClozeController;


/***/ }),

/***/ "./src/scripts/helpers/extend.ts":
/*!***************************************!*\
  !*** ./src/scripts/helpers/extend.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.extend = void 0;
/**
 * Extend an array just like JQuery's extend.
 * @param {object} arguments Objects to be merged.
 * @return {object} Merged objects.
 */
function extend() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 1; i < args.length; i++) {
        for (var key in args[i]) {
            if (args[i].hasOwnProperty(key)) {
                if (typeof args[0][key] === 'object' && typeof args[i][key] === 'object') {
                    extend(args[0][key], args[i][key]);
                }
                else {
                    args[0][key] = args[i][key];
                }
            }
        }
    }
    return args[0];
}
exports.extend = extend;


/***/ }),

/***/ "./src/scripts/helpers/unwrapper.ts":
/*!******************************************!*\
  !*** ./src/scripts/helpers/unwrapper.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Unrwapper = void 0;
/**
 * This class cleans html strings.
 */
var Unrwapper = /** @class */ (function () {
    function Unrwapper(jquery) {
        this.jquery = jquery;
    }
    /**
     * Cleans html strings by removing the outmost html tag of the string if there is only one tag.
     * Examples:  "<p>my text</p>"" becomes "my text"
     *            "<p>text 1</p><p>text 2</p2>" stays
     * @param html The html string
     * @returns the cleaned html string
     */
    Unrwapper.prototype.unwrap = function (html) {
        var parsed = this.jquery(html);
        if (parsed.length !== 1) {
            return html;
        }
        var unwrapped = parsed.unwrap().html();
        return unwrapped;
    };
    return Unrwapper;
}());
exports.Unrwapper = Unrwapper;


/***/ }),

/***/ "./src/scripts/models/answer.ts":
/*!**************************************!*\
  !*** ./src/scripts/models/answer.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Answer = exports.Evaluation = exports.Correctness = void 0;
var message_1 = __webpack_require__(/*! ./message */ "./src/scripts/models/message.ts");
var jsdiff = __webpack_require__(/*! diff */ "./node_modules/diff/lib/index.js");
var Correctness;
(function (Correctness) {
    Correctness[Correctness["ExactMatch"] = 0] = "ExactMatch";
    Correctness[Correctness["CloseMatch"] = 1] = "CloseMatch";
    Correctness[Correctness["NoMatch"] = 2] = "NoMatch";
})(Correctness = exports.Correctness || (exports.Correctness = {}));
var Evaluation = /** @class */ (function () {
    function Evaluation(usedAnswer) {
        this.usedAnswer = usedAnswer;
        this.correctness = Correctness.NoMatch;
        this.characterDifferenceCount = 0;
        this.usedAlternative = "";
    }
    return Evaluation;
}());
exports.Evaluation = Evaluation;
/**
 * Represents a possible answer the content author enters for a blank, e.g. the correct or an incorrect answer.
 */
var Answer = /** @class */ (function () {
    /**
     * @param  {string} answerText - The expected answer. Alternatives are separated by | or ; . (e.g. "Alternative 1|Alternative 2|Alternative 3|..."  -or- "Alternative 1;Alternative 2;Alternative 3")
     * @param  {string} reaction - The tooltip that should be displayed. Format: Tooltip Text;!!-1!! !!+1!!
     */
    function Answer(answerText, reaction, showHighlight, highlight, settings) {
        this.settings = settings;
        this.alternatives = answerText.split(/\//).map(function (s) { return s.trim(); });
        this.message = new message_1.Message(reaction, showHighlight, highlight);
        if (answerText.trim() === "") {
            this.appliesAlways = true;
        }
        else {
            this.appliesAlways = false;
        }
    }
    /**
     * Looks through the object's message ids and stores the references to the highlight object for these ids.
     * @param  {Highlight[]} highlightsBefore
     * @param  {Highlight[]} highlightsAfter
     */
    Answer.prototype.linkHighlightIdToObject = function (highlightsBefore, highlightsAfter) {
        this.message.linkHighlight(highlightsBefore, highlightsAfter);
    };
    /**
     * Turns on the highlights set by the content author for this answer.
     */
    Answer.prototype.activateHighlight = function () {
        if (this.message.highlightedElement)
            this.message.highlightedElement.isHighlighted = true;
    };
    Answer.prototype.cleanString = function (text) {
        text = text.trim();
        return text.replace(/\s{2,}/g, " ");
    };
    /**
     * Looks through the diff and checks how many character change operations are needed to turn one string into the other. Should return the same results as the Levensthein distance.
     * @param  {[{added?:boolean, boolean: removed?, string: value}]} diff - as returned by jsdiff
     * @returns number - the count of changes (replace, add, delete) needed to change the text from one string to the other
     */
    Answer.prototype.getChangesCountFromDiff = function (diff) {
        var totalChangesCount = 0;
        var lastType = "";
        var lastCount = 0;
        for (var _i = 0, diff_1 = diff; _i < diff_1.length; _i++) {
            var element = diff_1[_i];
            if (element.removed) {
                totalChangesCount += element.value.length;
                lastType = "removed";
            }
            else if (element.added) {
                if (lastType === "removed") {
                    if (lastCount < element.value.length) {
                        totalChangesCount += element.value.length - lastCount;
                    }
                }
                else {
                    totalChangesCount += element.value.length;
                }
                lastType = "added";
            }
            else {
                lastType = "same";
            }
            lastCount = element.value.length;
        }
        return totalChangesCount;
    };
    /**
     * Returns how many characters can be wrong to still be counted as a spelling mistake.
     * If spelling mistakes are turned off through the settings, it will return 0.
     * @param  {string} text
     * @returns number
     */
    Answer.prototype.getAcceptableSpellingMistakes = function (text) {
        var acceptableTypoCount;
        if (this.settings.warnSpellingErrors || this.settings.acceptSpellingErrors) // TODO: consider removal
            acceptableTypoCount = Math.floor(text.length / 10) + 1;
        else
            acceptableTypoCount = 0;
        return acceptableTypoCount;
    };
    /**
     * Checks if the text entered by the user in an ettempt is matched by the answer,
     * @param  {string} attempt The text entered by the user.
     * @returns Evaluation indicates if the entered text is matched by the answer.
     */
    Answer.prototype.evaluateAttempt = function (attempt) {
        var cleanedAttempt = this.cleanString(attempt);
        var evaluation = new Evaluation(this);
        for (var _i = 0, _a = this.alternatives; _i < _a.length; _i++) {
            var alternative = _a[_i];
            var cleanedAlternative = this.cleanString(alternative);
            var diff = jsdiff.diffChars(cleanedAlternative, cleanedAttempt, { ignoreCase: !this.settings.caseSensitive });
            var changeCount = this.getChangesCountFromDiff(diff);
            if (changeCount === 0) {
                evaluation.usedAlternative = cleanedAlternative;
                evaluation.correctness = Correctness.ExactMatch;
                return evaluation;
            }
            if (changeCount <= this.getAcceptableSpellingMistakes(alternative)
                && (evaluation.characterDifferenceCount === 0 || changeCount < evaluation.characterDifferenceCount)) {
                evaluation.usedAlternative = cleanedAlternative;
                evaluation.correctness = Correctness.CloseMatch;
                evaluation.characterDifferenceCount = changeCount;
            }
        }
        return evaluation;
    };
    return Answer;
}());
exports.Answer = Answer;


/***/ }),

/***/ "./src/scripts/models/blank.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/blank.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Blank = void 0;
var cloze_element_1 = __webpack_require__(/*! ./cloze-element */ "./src/scripts/models/cloze-element.ts");
var answer_1 = __webpack_require__(/*! ./answer */ "./src/scripts/models/answer.ts");
var enums_1 = __webpack_require__(/*! ./enums */ "./src/scripts/models/enums.ts");
var localization_1 = __webpack_require__(/*! ../services/localization */ "./src/scripts/services/localization.ts");
var helpers_1 = __webpack_require__(/*! ../../lib/helpers */ "./src/lib/helpers.ts");
var jsdiff = __webpack_require__(/*! diff */ "./node_modules/diff/lib/index.js");
var Blank = /** @class */ (function (_super) {
    __extends(Blank, _super);
    /**
     * Add incorrect answers after initializing the object. Call finishInitialization()
     * when done.
     * @param  {ISettings} settings
     * @param  {string} id
     * @param  {string} correctText?
     * @param  {string} hintText?
     */
    function Blank(settings, localization, jquery, messageService, id) {
        var _this = _super.call(this) || this;
        _this.settings = settings;
        _this.localization = localization;
        _this.jquery = jquery;
        _this.messageService = messageService;
        _this.enteredText = "";
        _this.correctAnswers = new Array();
        _this.incorrectAnswers = new Array();
        _this.choices = new Array();
        _this.type = cloze_element_1.ClozeElementType.Blank;
        _this.id = id;
        return _this;
    }
    /**
    * Call this method when all incorrect answers have been added.
    */
    Blank.prototype.finishInitialization = function () {
        if (this.settings.clozeType === enums_1.ClozeType.Select && this.settings.selectAlternatives === enums_1.SelectAlternatives.Alternatives) {
            this.loadChoicesFromOwnAlternatives();
        }
        this.calculateMinTextLength();
    };
    Blank.prototype.addCorrectAnswer = function (answer) {
        this.correctAnswers.push(answer);
    };
    Blank.prototype.getCorrectAnswers = function () {
        var result = [];
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            result = result.concat(answer.alternatives);
        }
        return result;
    };
    Blank.prototype.setHint = function (message) {
        this.hint = message;
        this.hasHint = this.hint.text !== "";
    };
    /**
     * Adds the incorrect answer to the list.
     * @param text - What the user must enter.
     * @param reaction  - What the user gets displayed when he enteres the text.
     */
    Blank.prototype.addIncorrectAnswer = function (text, reaction, showHighlight, highlight) {
        this.incorrectAnswers.push(new answer_1.Answer(text, reaction, showHighlight, highlight, this.settings));
    };
    /**
     * Returns how many characters the input box must have be to allow for all correct answers.
     */
    // TODO: refactor
    Blank.prototype.calculateMinTextLength = function () {
        var answers = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var correctAnswer = _a[_i];
            answers.push((0, helpers_1.getLongestString)(correctAnswer.alternatives));
        }
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            for (var _b = 0, _c = this.incorrectAnswers; _b < _c.length; _b++) {
                var incorrectAnswer = _c[_b];
                answers.push((0, helpers_1.getLongestString)(incorrectAnswer.alternatives));
            }
        }
        var longestAnswer = (0, helpers_1.getLongestString)(answers);
        var l = longestAnswer.length;
        this.minTextLength = Math.max(10, l - (l % 10) + 10);
    };
    /**
     * Creates a list of choices from all alternatives provided by
     * the correct and incorrect answers.
     */
    Blank.prototype.loadChoicesFromOwnAlternatives = function () {
        this.choices = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            for (var _b = 0, _c = answer.alternatives; _b < _c.length; _b++) {
                var alternative = _c[_b];
                this.choices.push(alternative);
            }
        }
        for (var _d = 0, _e = this.incorrectAnswers; _d < _e.length; _d++) {
            var answer = _e[_d];
            for (var _f = 0, _g = answer.alternatives; _f < _g.length; _f++) {
                var alternative = _g[_f];
                this.choices.push(alternative);
            }
        }
        this.choices = (0, helpers_1.shuffleArray)(this.choices);
        this.choices.unshift("");
        return this.choices;
    };
    /**
     * Creates a list of choices from all correct answers of the cloze.
     * @param otherBlanks All OTHER blanks in the cloze. (excludes the current one!)
     */
    Blank.prototype.loadChoicesFromOtherBlanks = function (otherBlanks) {
        var ownChoices = new Array();
        for (var _i = 0, _a = this.correctAnswers; _i < _a.length; _i++) {
            var answer = _a[_i];
            for (var _b = 0, _c = answer.alternatives; _b < _c.length; _b++) {
                var alternative = _c[_b];
                ownChoices.push(alternative);
            }
        }
        var otherChoices = new Array();
        for (var _d = 0, otherBlanks_1 = otherBlanks; _d < otherBlanks_1.length; _d++) {
            var otherBlank = otherBlanks_1[_d];
            for (var _e = 0, _f = otherBlank.correctAnswers; _e < _f.length; _e++) {
                var answer = _f[_e];
                for (var _g = 0, _h = answer.alternatives; _g < _h.length; _g++) {
                    var alternative = _h[_g];
                    otherChoices.push(alternative);
                }
            }
        }
        otherChoices = (0, helpers_1.shuffleArray)(otherChoices);
        var maxChoices = this.settings.selectAlternativeRestriction;
        if (maxChoices === undefined || maxChoices === 0)
            maxChoices = ownChoices.length + otherChoices.length;
        var leftOverChoices = maxChoices - ownChoices.length;
        for (var x = 0; x < leftOverChoices && x < otherChoices.length; x++) {
            if (ownChoices.indexOf(otherChoices[x]) >= 0) {
                leftOverChoices++;
            }
            else {
                ownChoices.push(otherChoices[x]);
            }
        }
        this.choices = (0, helpers_1.shuffleArray)(ownChoices);
        this.choices.unshift("");
        return this.choices;
    };
    /**
    * Clears the blank from all entered text and hides popups.
    */
    Blank.prototype.reset = function () {
        this.enteredText = "";
        this.lastCheckedText = "";
        this.removeTooltip();
        this.setAnswerState(enums_1.MessageType.None);
        this.hasPendingFeedback = false;
    };
    /**
     * Sets the blank to a state in which the correct solution if shown if the user
     * hasn't entered a correct one so far.
     */
    Blank.prototype.showSolution = function () {
        this.evaluateAttempt(true);
        this.removeTooltip();
        if (this.isCorrect)
            return;
        this.enteredText = this.correctAnswers[0].alternatives[0];
        this.setAnswerState(enums_1.MessageType.ShowSolution);
    };
    Blank.prototype.onFocused = function () {
        if (this.hasPendingFeedback) {
            this.evaluateAttempt(false);
        }
        if (this.settings.clozeType === enums_1.ClozeType.Select) {
            this.setAnswerState(enums_1.MessageType.None);
            this.lastCheckedText = "";
        }
    };
    Blank.prototype.onDisplayFeedback = function () {
        if (this.hasPendingFeedback) {
            this.evaluateAttempt(false);
        }
    };
    Blank.prototype.displayTooltip = function (message, type, surpressTooltip, id) {
        if (!surpressTooltip)
            this.messageService.show(id ? id : this.id, message, this, type);
        else {
            this.hasPendingFeedback = true;
        }
    };
    Blank.prototype.removeTooltip = function () {
        this.messageService.hide();
    };
    Blank.prototype.setTooltipErrorText = function (message, surpressTooltip) {
        if (message.highlightedElement) {
            this.displayTooltip(message.text, enums_1.MessageType.Error, surpressTooltip, message.highlightedElement.id);
        }
        else {
            this.displayTooltip(message.text, enums_1.MessageType.Error, surpressTooltip);
        }
    };
    Blank.prototype.getSpellingMistakeMessage = function (expectedText, enteredText) {
        var message = this.localization.getTextFromLabel(localization_1.LocalizationLabels.typoMessage);
        var diff = jsdiff.diffChars(expectedText, enteredText, { ignoreCase: !this.settings.caseSensitive });
        var mistakeSpan = this.jquery("<span/>", { "class": "spelling-mistake" });
        for (var index = 0; index < diff.length; index++) {
            var part = diff[index];
            var spanClass = '';
            if (part.removed) {
                if (index === diff.length - 1 || !diff[index + 1].added) {
                    part.value = part.value.replace(/./g, "_");
                    spanClass = 'missing-character';
                }
                else {
                    continue;
                }
            }
            if (part.added) {
                spanClass = 'mistaken-character';
            }
            var span = this.jquery("<span/>", { "class": spanClass, "html": part.value.replace(" ", "&nbsp;") });
            mistakeSpan.append(span);
        }
        message = message.replace("@mistake", this.jquery("<span/>").append(mistakeSpan).html());
        return message;
    };
    /**
     * Checks if the entered text is the correct answer or one of the
     * incorrect ones and gives the user feedback accordingly.
     */
    Blank.prototype.evaluateAttempt = function (surpressTooltips, forceCheck) {
        var _this = this;
        if (!this.hasPendingFeedback && this.lastCheckedText === this.enteredText && !forceCheck)
            return;
        this.lastCheckedText = this.enteredText.toString();
        this.hasPendingFeedback = false;
        this.removeTooltip();
        var exactCorrectMatches = this.correctAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.ExactMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var closeCorrectMatches = this.correctAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.CloseMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var exactIncorrectMatches = this.incorrectAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.ExactMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        var closeIncorrectMatches = this.incorrectAnswers.map(function (answer) { return answer.evaluateAttempt(_this.enteredText); }).filter(function (evaluation) { return evaluation.correctness === answer_1.Correctness.CloseMatch; }).sort(function (evaluation) { return evaluation.characterDifferenceCount; });
        if (exactCorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Correct);
            if (!this.settings.caseSensitive) {
                this.enteredText = exactCorrectMatches[0].usedAlternative;
            }
            return;
        }
        if (exactIncorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Error);
            this.showErrorTooltip(exactIncorrectMatches[0].usedAnswer, surpressTooltips);
            return;
        }
        if (closeCorrectMatches.length > 0) {
            if (this.settings.warnSpellingErrors) {
                this.displayTooltip(this.getSpellingMistakeMessage(closeCorrectMatches[0].usedAlternative, this.enteredText), enums_1.MessageType.Retry, surpressTooltips);
                this.setAnswerState(enums_1.MessageType.Retry);
                return;
            }
            if (this.settings.acceptSpellingErrors) {
                this.setAnswerState(enums_1.MessageType.Correct);
                this.enteredText = closeCorrectMatches[0].usedAlternative;
                return;
            }
        }
        if (closeIncorrectMatches.length > 0) {
            this.setAnswerState(enums_1.MessageType.Error);
            this.showErrorTooltip(closeIncorrectMatches[0].usedAnswer, surpressTooltips);
            return;
        }
        var alwaysApplyingAnswers = this.incorrectAnswers.filter(function (a) { return a.appliesAlways; });
        if (alwaysApplyingAnswers && alwaysApplyingAnswers.length > 0) {
            this.showErrorTooltip(alwaysApplyingAnswers[0], surpressTooltips);
        }
        this.setAnswerState(enums_1.MessageType.Error);
    };
    Blank.prototype.onTyped = function () {
        this.setAnswerState(enums_1.MessageType.None);
        this.lastCheckedText = "";
        this.removeTooltip();
    };
    Blank.prototype.lostFocus = function () {
        if (this.messageService.isActive(this)) {
            this.messageService.hide();
        }
    };
    /**
     * Sets the boolean properties isCorrect, is Error and isRetry according to thepassed  messageType.
     * @param messageType
     */
    Blank.prototype.setAnswerState = function (messageType) {
        this.isCorrect = false;
        this.isError = false;
        this.isRetry = false;
        this.isShowingSolution = false;
        switch (messageType) {
            case enums_1.MessageType.Correct:
                this.isCorrect = true;
                break;
            case enums_1.MessageType.Error:
                this.isError = true;
                break;
            case enums_1.MessageType.Retry:
                this.isRetry = true;
                break;
            case enums_1.MessageType.ShowSolution:
                this.isShowingSolution = true;
                break;
        }
    };
    Blank.prototype.showErrorTooltip = function (answer, surpressTooltip) {
        if (answer.message && answer.message.text) {
            this.setTooltipErrorText(answer.message, surpressTooltip);
        }
        if (!surpressTooltip) {
            answer.activateHighlight();
        }
    };
    /**
     * Displays the hint in the tooltip.
     */
    Blank.prototype.showHint = function () {
        if (this.isShowingSolution || this.isCorrect)
            return;
        this.removeTooltip();
        if (this.hint && this.hint.text !== "") {
            this.displayTooltip(this.hint.text, enums_1.MessageType.Retry, false);
            if (this.hint.highlightedElement) {
                this.hint.highlightedElement.isHighlighted = true;
            }
        }
    };
    Blank.prototype.serialize = function () {
        return this.enteredText;
    };
    Blank.prototype.deserialize = function (data) {
        this.enteredText = data;
    };
    return Blank;
}(cloze_element_1.ClozeElement));
exports.Blank = Blank;


/***/ }),

/***/ "./src/scripts/models/cloze-element.ts":
/*!*********************************************!*\
  !*** ./src/scripts/models/cloze-element.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClozeElement = exports.ClozeElementType = void 0;
var ClozeElementType;
(function (ClozeElementType) {
    ClozeElementType[ClozeElementType["Blank"] = 0] = "Blank";
    ClozeElementType[ClozeElementType["Highlight"] = 1] = "Highlight";
})(ClozeElementType = exports.ClozeElementType || (exports.ClozeElementType = {}));
var ClozeElement = /** @class */ (function () {
    function ClozeElement() {
    }
    return ClozeElement;
}());
exports.ClozeElement = ClozeElement;


/***/ }),

/***/ "./src/scripts/models/cloze.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/cloze.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Cloze = void 0;
/**
 * Represents the cloze. Instantiate with static createCloze().
 */
var Cloze = /** @class */ (function () {
    function Cloze() {
    }
    Object.defineProperty(Cloze.prototype, "isSolved", {
        /**
         * Returns true if all blanks were entered correctly.
         * @returns boolean
         */
        get: function () {
            return this.blanks.every(function (b) { return b.isCorrect === true; });
        },
        enumerable: false,
        configurable: true
    });
    Cloze.prototype.hideAllHighlights = function () {
        for (var _i = 0, _a = this.highlights; _i < _a.length; _i++) {
            var highlight = _a[_i];
            highlight.isHighlighted = false;
        }
    };
    Cloze.prototype.reset = function () {
        this.hideAllHighlights();
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            blank.reset();
        }
    };
    Cloze.prototype.showSolutions = function () {
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            blank.showSolution();
        }
        this.hideAllHighlights();
    };
    Cloze.prototype.serialize = function () {
        var cloze = [];
        for (var _i = 0, _a = this.blanks; _i < _a.length; _i++) {
            var blank = _a[_i];
            cloze.push(blank.serialize());
        }
        return cloze;
    };
    Cloze.prototype.deserialize = function (data) {
        for (var index = 0; index < data.length; index++) {
            if (index >= this.blanks.length)
                return;
            var blank = this.blanks[index];
            blank.deserialize(data[index]);
        }
    };
    return Cloze;
}());
exports.Cloze = Cloze;


/***/ }),

/***/ "./src/scripts/models/enums.ts":
/*!*************************************!*\
  !*** ./src/scripts/models/enums.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectAlternatives = exports.ClozeType = exports.MessageType = void 0;
var MessageType;
(function (MessageType) {
    MessageType[MessageType["Error"] = 0] = "Error";
    MessageType[MessageType["Correct"] = 1] = "Correct";
    MessageType[MessageType["Retry"] = 2] = "Retry";
    MessageType[MessageType["ShowSolution"] = 3] = "ShowSolution";
    MessageType[MessageType["None"] = 4] = "None";
})(MessageType = exports.MessageType || (exports.MessageType = {}));
var ClozeType;
(function (ClozeType) {
    ClozeType[ClozeType["Type"] = 0] = "Type";
    ClozeType[ClozeType["Select"] = 1] = "Select";
})(ClozeType = exports.ClozeType || (exports.ClozeType = {}));
var SelectAlternatives;
(function (SelectAlternatives) {
    SelectAlternatives[SelectAlternatives["Alternatives"] = 0] = "Alternatives";
    SelectAlternatives[SelectAlternatives["All"] = 1] = "All";
})(SelectAlternatives = exports.SelectAlternatives || (exports.SelectAlternatives = {}));


/***/ }),

/***/ "./src/scripts/models/highlight.ts":
/*!*****************************************!*\
  !*** ./src/scripts/models/highlight.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Highlight = void 0;
var cloze_element_1 = __webpack_require__(/*! ./cloze-element */ "./src/scripts/models/cloze-element.ts");
/**
 * Represents a highlight in the cloze.
 */
var Highlight = /** @class */ (function (_super) {
    __extends(Highlight, _super);
    function Highlight(text, id) {
        var _this = _super.call(this) || this;
        _this.type = cloze_element_1.ClozeElementType.Highlight;
        _this.text = text;
        _this.id = id;
        _this.isHighlighted = false;
        return _this;
    }
    return Highlight;
}(cloze_element_1.ClozeElement));
exports.Highlight = Highlight;


/***/ }),

/***/ "./src/scripts/models/message.ts":
/*!***************************************!*\
  !*** ./src/scripts/models/message.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = void 0;
/**
 * Represents a message that the content author has specified to be a reaction
 * to an user's answer.
 */
var Message = /** @class */ (function () {
    function Message(text, showHighlight, relativeHighlightPosition) {
        var _this = this;
        this.text = text;
        this.relativeHighlightPosition = relativeHighlightPosition;
        this.linkHighlight = function (highlightsBefore, highlightsAfter) {
            if (!_this.relativeHighlightPosition)
                return;
            if (_this.relativeHighlightPosition < 0 && (0 - _this.relativeHighlightPosition - 1) < highlightsBefore.length) {
                _this.highlightedElement = highlightsBefore[0 - _this.relativeHighlightPosition - 1];
            }
            else if (_this.relativeHighlightPosition > 0 && (_this.relativeHighlightPosition - 1 < highlightsAfter.length)) {
                _this.highlightedElement = highlightsAfter[_this.relativeHighlightPosition - 1];
            }
        };
        if (!showHighlight)
            this.relativeHighlightPosition = undefined;
    }
    return Message;
}());
exports.Message = Message;


/***/ }),

/***/ "./src/scripts/models/snippet.ts":
/*!***************************************!*\
  !*** ./src/scripts/models/snippet.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Snippet = void 0;
/**
 * A snippet is a text block that is put into placed marked in feedback texts or hints.
 */
var Snippet = /** @class */ (function () {
    /**
     * Constructs the snippet.
     * @param name The name of the snippet that is used when it is referenced in a feedbacktext (without the snippet marker @)
     * @param text The snippet itself (html)
     */
    function Snippet(name, text) {
        this.name = name;
        this.text = text;
    }
    return Snippet;
}());
exports.Snippet = Snippet;


/***/ }),

/***/ "./src/scripts/models/xapi.ts":
/*!************************************!*\
  !*** ./src/scripts/models/xapi.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.XAPIActivityDefinition = void 0;
var XAPIActivityDefinition = /** @class */ (function () {
    function XAPIActivityDefinition() {
    }
    return XAPIActivityDefinition;
}());
exports.XAPIActivityDefinition = XAPIActivityDefinition;


/***/ }),

/***/ "./src/scripts/services/data-repository.ts":
/*!*************************************************!*\
  !*** ./src/scripts/services/data-repository.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.H5PDataRepository = void 0;
var blank_loader_1 = __webpack_require__(/*! ../content-loaders/blank-loader */ "./src/scripts/content-loaders/blank-loader.ts");
var snippet_1 = __webpack_require__(/*! ../models/snippet */ "./src/scripts/models/snippet.ts");
/**
 * Wraps around the h5p config object and provides access to the content.
 */
var H5PDataRepository = /** @class */ (function () {
    function H5PDataRepository(h5pConfigData, settings, localization, jquery, unwrapper) {
        this.h5pConfigData = h5pConfigData;
        this.settings = settings;
        this.localization = localization;
        this.jquery = jquery;
        this.unwrapper = unwrapper;
    }
    /**
     * Returns the blank text of the cloze (as HTML markup).
     */
    H5PDataRepository.prototype.getClozeText = function () {
        return this.h5pConfigData.content.blanksText;
    };
    // TODO: remove or implement
    H5PDataRepository.prototype.getFeedbackText = function () {
        return "";
    };
    H5PDataRepository.prototype.getMedia = function () {
        return this.h5pConfigData.media.type;
    };
    H5PDataRepository.prototype.getTaskDescription = function () {
        return this.h5pConfigData.content.task;
    };
    H5PDataRepository.prototype.getBlanks = function () {
        var blanks = new Array();
        if (!this.h5pConfigData.content.blanksList)
            return blanks;
        for (var i = 0; i < this.h5pConfigData.content.blanksList.length; i++) {
            var h5pBlank = this.h5pConfigData.content.blanksList[i];
            var correctText = h5pBlank.correctAnswerText;
            if (correctText === "" || correctText === undefined)
                continue;
            var blank = blank_loader_1.BlankLoader.instance.createBlank("cloze" + i, correctText, h5pBlank.hint, h5pBlank.incorrectAnswersList);
            blank.finishInitialization();
            blanks.push(blank);
        }
        return blanks;
    };
    H5PDataRepository.prototype.getSnippets = function () {
        var snippets = new Array();
        if (!this.h5pConfigData.snippets)
            return snippets;
        for (var i = 0; i < this.h5pConfigData.snippets.length; i++) {
            var raw_snippet = this.h5pConfigData.snippets[i];
            var snippet = new snippet_1.Snippet(raw_snippet.snippetName, this.unwrapper.unwrap(raw_snippet.snippetText));
            snippets.push(snippet);
        }
        return snippets;
    };
    return H5PDataRepository;
}());
exports.H5PDataRepository = H5PDataRepository;


/***/ }),

/***/ "./src/scripts/services/localization.ts":
/*!**********************************************!*\
  !*** ./src/scripts/services/localization.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.H5PLocalization = exports.LocalizationStructures = exports.LocalizationLabels = void 0;
var LocalizationLabels;
(function (LocalizationLabels) {
    LocalizationLabels["showSolutionButton"] = "showSolutions";
    LocalizationLabels["retryButton"] = "tryAgain";
    LocalizationLabels["checkAllButton"] = "checkAnswer";
    LocalizationLabels["submitAllButton"] = "submitAnswer";
    LocalizationLabels["notFilledOutWarning"] = "notFilledOut";
    LocalizationLabels["tipButton"] = "tipLabel";
    LocalizationLabels["typoMessage"] = "spellingMistakeWarning";
    LocalizationLabels["scoreBarLabel"] = "scoreBarLabel";
    LocalizationLabels["a11yCheck"] = "a11yCheck";
    LocalizationLabels["a11yShowSolution"] = "a11yShowSolution";
    LocalizationLabels["a11yRetry"] = "a11yRetry";
    LocalizationLabels["a11yCheckingModeHeader"] = "a11yCheckingModeHeader";
})(LocalizationLabels = exports.LocalizationLabels || (exports.LocalizationLabels = {}));
var LocalizationStructures;
(function (LocalizationStructures) {
    LocalizationStructures["confirmCheck"] = "confirmCheck";
    LocalizationStructures["confirmRetry"] = "confirmRetry";
    LocalizationStructures["overallFeedback"] = "overallFeedback";
})(LocalizationStructures = exports.LocalizationStructures || (exports.LocalizationStructures = {}));
/**
 * Provides localization services.
 */
var H5PLocalization = /** @class */ (function () {
    function H5PLocalization(h5pConfiguration) {
        this.h5pConfiguration = h5pConfiguration;
    }
    /**
     * Returns the localized string that is represented by the identifier.
     * @param  {string} localizableStringIdentifier
     * @returns string
     */
    H5PLocalization.prototype.getText = function (localizableStringIdentifier) {
        return this.h5pConfiguration[localizableStringIdentifier];
    };
    H5PLocalization.prototype.labelToString = function (label) {
        return label.toString();
    };
    /**
     * Returns the localized string for the label.
     * @param  {LocalizationLabels} label
     * @returns string
     */
    H5PLocalization.prototype.getTextFromLabel = function (label) {
        return this.getText(this.labelToString(label));
    };
    H5PLocalization.prototype.getObjectForStructure = function (structure) {
        return this.h5pConfiguration[structure.toString()];
    };
    return H5PLocalization;
}());
exports.H5PLocalization = H5PLocalization;


/***/ }),

/***/ "./src/scripts/services/message-service.ts":
/*!*************************************************!*\
  !*** ./src/scripts/services/message-service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageService = void 0;
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var MessageService = /** @class */ (function () {
    function MessageService(jQuery) {
        this.jQuery = jQuery;
    }
    MessageService.prototype.show = function (elementId, message, blank, type) {
        if (!type)
            type = enums_1.MessageType.None;
        var elements = this.jQuery("#" + elementId);
        if (elements.length > 0) {
            this.speechBubble = new H5P.JoubelSpeechBubble(elements, message);
            this.associatedBlank = blank;
        }
    };
    MessageService.prototype.hide = function () {
        if (this.speechBubble) {
            try {
                this.speechBubble.remove();
            }
            catch (exception) {
            }
        }
        this.speechBubble = undefined;
        this.associatedBlank = undefined;
    };
    MessageService.prototype.isActive = function (blank) {
        return this.associatedBlank === blank;
    };
    return MessageService;
}());
exports.MessageService = MessageService;


/***/ }),

/***/ "./src/scripts/services/settings.ts":
/*!******************************************!*\
  !*** ./src/scripts/services/settings.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.H5PSettings = void 0;
var enums_1 = __webpack_require__(/*! ../models/enums */ "./src/scripts/models/enums.ts");
var H5PSettings = /** @class */ (function () {
    function H5PSettings(h5pConfigData) {
        this.clozeType = enums_1.ClozeType.Type;
        this.selectAlternatives = enums_1.SelectAlternatives.Alternatives;
        this.selectAlternativeRestriction = 5;
        this.enableRetry = true;
        this.enableSolutionsButton = true;
        this.enableCheckButton = true;
        this.autoCheck = false;
        this.caseSensitive = false;
        this.warnSpellingErrors = true;
        this.acceptSpellingErrors = false;
        this.showSolutionsRequiresInput = true;
        this.confirmCheckDialog = false;
        this.confirmRetryDialog = false;
        this.disableImageZooming = false;
        if (h5pConfigData.behaviour.mode === 'selection') {
            this.clozeType = enums_1.ClozeType.Select;
        }
        else {
            this.clozeType = enums_1.ClozeType.Type;
        }
        if (h5pConfigData.behaviour.selectAlternatives === 'all') {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
        }
        else if (h5pConfigData.behaviour.selectAlternatives === 'alternatives') {
            this.selectAlternatives = enums_1.SelectAlternatives.Alternatives;
        }
        else {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
        }
        this.selectAlternativeRestriction = h5pConfigData.behaviour.selectAlternativeRestriction;
        this.enableRetry = h5pConfigData.behaviour.enableRetry;
        this.enableSolutionsButton = h5pConfigData.behaviour.enableSolutionsButton;
        this.enableCheckButton = h5pConfigData.behaviour.enableCheckButton;
        this.autoCheck = h5pConfigData.behaviour.autoCheck;
        this.caseSensitive = h5pConfigData.behaviour.caseSensitive;
        this.warnSpellingErrors = h5pConfigData.behaviour.spellingErrorBehaviour === "warn";
        this.acceptSpellingErrors = h5pConfigData.behaviour.spellingErrorBehaviour === "accept";
        this.showSolutionsRequiresInput = h5pConfigData.behaviour.showSolutionsRequiresInput;
        this.confirmCheckDialog = h5pConfigData.behaviour.confirmCheckDialog;
        this.confirmRetryDialog = h5pConfigData.behaviour.confirmRetryDialog;
        this.disableImageZooming = h5pConfigData.media.disableImageZooming;
        this.enforceLogic();
    }
    /**
     * This method sets sensible default values for settings hidden with showWhen
     */
    H5PSettings.prototype.enforceLogic = function () {
        if (this.clozeType === enums_1.ClozeType.Type) {
            this.selectAlternatives = enums_1.SelectAlternatives.All;
            this.selectAlternativeRestriction = 0;
        }
        else {
            if (this.selectAlternativeRestriction === enums_1.SelectAlternatives.Alternatives) {
                this.selectAlternativeRestriction = 0;
            }
            this.warnSpellingErrors = false;
            this.acceptSpellingErrors = false;
            this.caseSensitive = false;
        }
    };
    return H5PSettings;
}());
exports.H5PSettings = H5PSettings;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!*****************************!*\
  !*** ./src/entries/dist.ts ***!
  \*****************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! ../styles/style.css */ "./src/styles/style.css");
var app_1 = __webpack_require__(/*! ../scripts/app */ "./src/scripts/app.ts");
// Load library
H5P = H5P || {};
H5P.AdvancedBlanks = app_1.default;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxZQUFZLFFBQVEsYUFBYSxNQUFNLFVBQVUsWUFBWSxhQUFhLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsUUFBUSxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFFBQVEsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsUUFBUSxXQUFXLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxRQUFRLGFBQWEsT0FBTyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksUUFBUSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sT0FBTyxXQUFXLEtBQUssWUFBWSxRQUFRLFdBQVcsS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxVQUFVLE1BQU0sYUFBYSxNQUFNLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLEtBQUssTUFBTSxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sT0FBTyxZQUFZLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxnREFBZ0QseUJBQXlC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QWtDOztBQUVsQyxtQ0FBbUM7O0FBRW5DLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRzs7QUFFTjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxLQUFLOzs7QUFHWjtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUVBQXVFO0FBQ3ZFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQix1QkFBdUI7QUFDekMsOEJBQThCO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLGNBQWM7Ozs7Ozs7Ozs7O0FDL1F6RDtBQUNhOztBQUViLDhDQUE2QztBQUM3QztBQUNBLENBQUMsRUFBQztBQUNGLHFCQUFxQjtBQUNyQixhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyx5REFBVTtBQUM1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTLG1CQUFPLENBQUMsdURBQVM7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUyxtQkFBTyxDQUFDLDREQUFlO0FBQ2hDO0FBQ0E7O0FBRUEsNkRBQTZEOztBQUU3RCxnQ0FBZ0M7O0FBRWhDLGtEQUFrRCxnQkFBZ0IsZ0VBQWdFLHdEQUF3RCw2REFBNkQsc0RBQXNEOztBQUU3UyxrQ0FBa0M7O0FBRWxDLG1DQUFtQzs7QUFFbkMsdUNBQXVDLHVEQUF1RCx1Q0FBdUMsU0FBUyxPQUFPLG9CQUFvQjs7QUFFeks7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSxvQ0FBb0M7O0FBRXBDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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ekUsSUFBSSxDQUFDLDRCQUE0QixHQUFHLENBQUMsQ0FBQzthQUN2QztZQUNELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztZQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM1QjtJQUNILENBQUM7SUFDSCxrQkFBQztBQUFELENBQUM7QUFqRVksa0NBQVc7Ozs7Ozs7VUNuQnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7O0FDQUEseUVBQTZCO0FBQzdCLDhFQUE0QztBQUU1QyxlQUFlO0FBQ2YsR0FBRyxHQUFHLEdBQUcsSUFBSSxFQUFFLENBQUM7QUFDaEIsR0FBRyxDQUFDLGNBQWMsR0FBRyxhQUFjLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvY29udmVydC9kbXAuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi9jb252ZXJ0L3htbC5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYvYXJyYXkuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi9kaWZmL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi9kaWZmL2NoYXJhY3Rlci5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYvY3NzLmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvZGlmZi9qc29uLmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvZGlmZi9saW5lLmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvZGlmZi9zZW50ZW5jZS5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2RpZmYvd29yZC5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL2luZGV4LmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvcGF0Y2gvYXBwbHkuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi9wYXRjaC9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi9wYXRjaC9tZXJnZS5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL3BhdGNoL3BhcnNlLmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvZGlmZi9saWIvdXRpbC9hcnJheS5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL2RpZmYvbGliL3V0aWwvZGlzdGFuY2UtaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9kaWZmL2xpYi91dGlsL3BhcmFtcy5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3NjcmlwdHMvdmlld3MvYmxhbmsucmFjdGl2ZS5odG1sIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy92aWV3cy9oaWdobGlnaHQucmFjdGl2ZS5odG1sIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcz80MDQ5Iiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9saWIvaGVscGVycy50cyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL2xpYi9yYWN0aXZlLWV2ZW50cy1rZXlzLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy9hcHAudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL2NvbnRlbnQtbG9hZGVycy9ibGFuay1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL2NvbnRlbnQtbG9hZGVycy9jbG96ZS1sb2FkZXIudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL2NvbnRyb2xsZXJzL2Nsb3plLWNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL2hlbHBlcnMvZXh0ZW5kLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy9oZWxwZXJzL3Vud3JhcHBlci50cyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Fuc3dlci50cyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2JsYW5rLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy9tb2RlbHMvY2xvemUtZWxlbWVudC50cyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3NjcmlwdHMvbW9kZWxzL2Nsb3plLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy9tb2RlbHMvZW51bXMudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL21vZGVscy9oaWdobGlnaHQudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL21vZGVscy9tZXNzYWdlLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy9tb2RlbHMvc25pcHBldC50cyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3NjcmlwdHMvbW9kZWxzL3hhcGkudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeS50cyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzLy4vc3JjL3NjcmlwdHMvc2VydmljZXMvbG9jYWxpemF0aW9uLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvc2NyaXB0cy9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy8uL3NyYy9zY3JpcHRzL3NlcnZpY2VzL3NldHRpbmdzLnRzIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3Mvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9oNXAtYWR2YW5jZWQtYmxhbmtzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaDVwLWFkdmFuY2VkLWJsYW5rcy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3Mvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2g1cC1hZHZhbmNlZC1ibGFua3MvLi9zcmMvZW50cmllcy9kaXN0LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmg1cC1hZHZhbmNlZC1ibGFua3Mge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi8qIFRleHQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBwLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIGRpdiB7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gICAgbWFyZ2luOiAwIDAgMWVtO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIHAsXFxuICAgIC5oNXAtYWR2YW5jZWQtYmxhbmtzICNoNXAtY2xvemUtY29udGFpbmVyIGRpdiB7XFxuICAgICAgICB0ZXh0LWFsaWduOiB1bnNldDtcXG4gICAgfVxcbn1cXG5cXG5cXG4vKiBJbnB1dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtaW5wdXQtd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLWg1cC10aGVtZS1mb250LW5hbWUsIEg1UERyb2lkU2Fucywgc2Fucy1zZXJpZik7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0taDVwLXRoZW1lLWZvbnQtc2l6ZS1tLCAxZW0pO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oNXAtdGhlbWUtYm9yZGVyLXJhZGl1cy1tZWRpdW0sIDAuMjVlbSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWg1cC10aGVtZS11aS1iYXNlLCAjZmZmZmZmKTtcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0taDVwLXRoZW1lLWFsdGVybmF0aXZlLWRhcmtlciwgI2EwYTBhMCk7XFxuICAgIHBhZGRpbmc6IGNhbGModmFyKC0taDVwLXRoZW1lLXNwYWNpbmcteHMsIDAuMzc1ZW0pIC8gMikgMS41ZW0gY2FsYyh2YXIoLS1oNXAtdGhlbWUtc3BhY2luZy14cywgMC4zNzVlbSkgLyAyKSB2YXIoLS1oNXAtdGhlbWUtc3BhY2luZy14eHMsIDAuNWVtKTtcXG4gICAgY29sb3I6IHZhcigtLWg1cC10aGVtZS10ZXh0LXByaW1hcnksIGluaGVyaXQpO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIGlucHV0Lmg1cC10ZXh0LWlucHV0IHtcXG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDY0cHgpO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgc2VsZWN0Lmg1cC10ZXh0LWlucHV0IHtcXG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDM2cHgpO1xcbn1cXG5cXG4vKiBJRSArIENocm9tZSBzcGVjaWZpYyBmaXhlcyAqL1xcblxcbi5oNXAtdGV4dC1pbnB1dDo6LW1zLWNsZWFyIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuOm5vdCguY29ycmVjdCkuYmxhbmsuaGFzLXRpcCBidXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi8qIFNlbGVjdCBtb2RlICovXFxuXFxuc2VsZWN0Lmg1cC10ZXh0LWlucHV0IHtcXG4gICAgYXBwZWFyYW5jZTogYnV0dG9uO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG5cXG4vKiBTaG93aW5nIHNvbHV0aW9uIGlucHV0ICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnNob3dpbmctc29sdXRpb24gLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgYm9yZGVyOiAxcHggZGFzaGVkICM5ZGQ4YmI7XFxuICAgIGNvbG9yOiAjMjU1YzQxO1xcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xcbn1cXG5cXG5cXG4vKiBGb2N1c3NlZCBpbnB1dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayAuaDVwLXRleHQtaW5wdXQ6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3gtc2hhZG93OiAwIDAgMC41ZW0gMCB2YXIoLS1oNXAtdGhlbWUtY29udHJhc3QtY3RhLXdoaXRlLCAjN2ZiOGZmKTtcXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1oNXAtdGhlbWUtY29udHJhc3QtY3RhLXdoaXRlLCAjN2ZiOGZmKTtcXG59XFxuXFxuXFxuLyogQ29ycmVjdGx5IGFuc3dlcmVkIGlucHV0ICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmNvcnJlY3QgLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgYmFja2dyb3VuZDogIzlkZDhiYjtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzlkZDhiYjtcXG4gICAgY29sb3I6ICMyNTVjNDE7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5jb3JyZWN0IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAuNWVtOyAgICBcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMGNcXFwiO1xcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxuICAgIGNvbG9yOiAjMjU1YzQxO1xcbn1cXG5cXG5cXG4vKiBJbmNvcnJlY3QgYW5zd2VycyAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5lcnJvciAuaDVwLXRleHQtaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdkMGQwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjdkMGQwO1xcbiAgICBjb2xvcjogI2I3MWMxYztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5lcnJvciAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwLjVlbTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjAwZFxcXCI7XFxuICAgIGNvbG9yOiAjYjcxYzFjO1xcbn1cXG5cXG5cXG4vKiBTcGVsbGluZyBlcnJvcnMgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsucmV0cnkgLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmY5OTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmY5OTtcXG4gICAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsucmV0cnkgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMC41ZW07XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnSDVQRm9udEF3ZXNvbWU0JztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbiAgICBjb2xvcjogI2I3MWMxYztcXG59XFxuXFxuXFxuLyogQnV0dG9ucyAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayBidXR0b24ge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxufVxcblxcblxcbi8qIEhpZ2hsaWdodCBpbiBzcGVsbGluZyBtaXN0YWtlIG1hcmtlciAqL1xcblxcbi5zcGVsbGluZy1taXN0YWtlIC5taXNzaW5nLWNoYXJhY3RlcixcXG4uc3BlbGxpbmctbWlzdGFrZSAubWlzdGFrZW4tY2hhcmFjdGVyIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNTAwbXM7XFxuICAgIGFuaW1hdGlvbi1uYW1lOiBibGluay1jb2xvcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMTM7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluay1jb2xvciB7XFxuICAgIGZyb20ge1xcbiAgICAgICAgY29sb3I6IGluaXRpYWw7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgY29sb3I6IHJlZDtcXG4gICAgfVxcbn1cXG5cXG4uc3BlbGxpbmctbWlzdGFrZSAubWlzdGFrZW4tY2hhcmFjdGVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcblxcbi8qIEhpZ2hsaWdodHMgaW4gdGV4dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oaWdobGlnaHRlZCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xcbiAgICBwYWRkaW5nOiAwLjRlbTtcXG4gICAgbWFyZ2luOiAtMC40ZW07XFxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTAwMG1zO1xcbiAgICBhbmltYXRpb24tbmFtZTogYmxpbmstYmFja2dyb3VuZC1jb2xvcjtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMztcXG4gICAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rLWJhY2tncm91bmQtY29sb3Ige1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XFxuICAgIH1cXG4gICAgdG8ge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMik7XFxuICAgIH1cXG59XFxuXFxuXFxuLyogT3RoZXJzICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmludmlzaWJsZSB7XFxuICAgIHZpc2liaWxpdHk6IGNvbGxhcHNlO1xcbn1cXG5cXG5cXG4vKiBUaXBzICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC10aXAtY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgcmlnaHQ6IDAuNGVtO1xcbiAgZm9udC1zaXplOiAxZW07XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwOm5vdCguY29ycmVjdCk6bm90KC5lcnJvcik6bm90KC5yZXRyeSkgLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgcGFkZGluZy1yaWdodDogMi4yNWVtO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcC5jb3JyZWN0IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlcixcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcC5lcnJvciAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIsXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXAucmV0cnkgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXG4gICAgcmlnaHQ6IDIuMjVlbTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmNvcnJlY3QuaGFzLXRpcCAuaDVwLXRleHQtaW5wdXQsXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmVycm9yLmhhcy10aXAgLmg1cC10ZXh0LWlucHV0LFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5yZXRyeS5oYXMtdGlwIC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDMuNWVtO1xcbn1cXG5cXG4vKiBpbXByb3ZlcyBhcHBlYXJhbmNlIG9mIGg1cCB0aXAgc2hhZG93cyAqL1xcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5qb3ViZWwtaWNvbi10aXAtbm9ybWFsIC5oNXAtaWNvbi1zaGFkb3c6YmVmb3JlIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIG9wYWNpdHk6IDAuMTM7XFxufVxcblxcbi8qIHBlbmRpbmcgZmVlZGJhY2sgbWFya2VyICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rOm5vdCguaGFzLXBlbmRpbmctZmVlZGJhY2spIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uIHtcXG4gICAgZm9udC1zaXplOiBsYXJnZTsgICAgXFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbixcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgYW5pbWF0aW9uOiBzaGFrZSAzcyBjdWJpYy1iZXppZXIoLjM2LCAuMDcsIC4xOSwgLjk3KSByZXZlcnNlO1xcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAyO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIHBlcnNwZWN0aXZlOiAxMDAwcHg7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTAuNGVtO1xcbiAgICB0b3A6IC0wLjdlbTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDVhXFxcIjtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLmVycm9yLmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsuZXJyb3IuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjYjcxYzFjO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbmsucmV0cnkuaGFzLXBlbmRpbmctZmVlZGJhY2sgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24sXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlIC5ibGFuay5yZXRyeS5oYXMtcGVuZGluZy1mZWVkYmFjayAuaDVwLWlucHV0LXdyYXBwZXI6YmVmb3JlIHtcXG4gICAgY29sb3I6ICNmZmZmMDA7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDAuNWVtIGJsYWNrO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcXG4gICAgMiUsXFxuICAgIDIwJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0wLjVweCwgMCwgMCk7XFxuICAgIH1cXG4gICAgNCUsXFxuICAgIDE3JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDFweCwgMCwgMCk7XFxuICAgIH1cXG4gICAgNiUsXFxuICAgIDEwJSxcXG4gICAgMTUlIHtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTJweCwgMCwgMCk7XFxuICAgIH1cXG4gICAgOSUsXFxuICAgIDEzJSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDJweCwgMCwgMCk7XFxuICAgIH1cXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmhpZGRlbi1idXQtcmVhZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgd2lkdGg6IDFweDtcXG4gICAgaGVpZ2h0OiAxcHg7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGNsaXA6IHJlY3QoMXB4LCAxcHgsIDFweCwgMXB4KTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBLFNBQVM7O0FBRVQ7O0lBRUksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSTs7UUFFSSxpQkFBaUI7SUFDckI7QUFDSjs7O0FBR0EsVUFBVTs7QUFFVjtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpRUFBaUU7SUFDakUsNENBQTRDO0lBQzVDLDREQUE0RDtJQUM1RCxtREFBbUQ7SUFDbkQsOERBQThEO0lBQzlELGdKQUFnSjtJQUNoSiw2Q0FBNkM7SUFDN0MsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNw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ckM7SUFDQTs7O1FBR0ksa0NBQWtDO0lBQ3RDO0lBQ0E7O1FBRUksaUNBQWlDO0lBQ3JDO0FBQ0o7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsOEJBQThCO0FBQ2xDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5oNXAtYWR2YW5jZWQtYmxhbmtzIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4vKiBUZXh0ICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgI2g1cC1jbG96ZS1jb250YWluZXIgcCxcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBkaXYge1xcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XFxuICAgIG1hcmdpbjogMCAwIDFlbTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xcbiAgICAuaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBwLFxcbiAgICAuaDVwLWFkdmFuY2VkLWJsYW5rcyAjaDVwLWNsb3plLWNvbnRhaW5lciBkaXYge1xcbiAgICAgICAgdGV4dC1hbGlnbjogdW5zZXQ7XFxuICAgIH1cXG59XFxuXFxuXFxuLyogSW5wdXQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWlucHV0LXdyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1oNXAtdGhlbWUtZm9udC1uYW1lLCBINVBEcm9pZFNhbnMsIHNhbnMtc2VyaWYpO1xcbiAgICBmb250LXNpemU6IHZhcigtLWg1cC10aGVtZS1mb250LXNpemUtbSwgMWVtKTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taDVwLXRoZW1lLWJvcmRlci1yYWRpdXMtbWVkaXVtLCAwLjI1ZW0pO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oNXAtdGhlbWUtdWktYmFzZSwgI2ZmZmZmZik7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLWg1cC10aGVtZS1hbHRlcm5hdGl2ZS1kYXJrZXIsICNhMGEwYTApO1xcbiAgICBwYWRkaW5nOiBjYWxjKHZhcigtLWg1cC10aGVtZS1zcGFjaW5nLXhzLCAwLjM3NWVtKSAvIDIpIDEuNWVtIGNhbGModmFyKC0taDVwLXRoZW1lLXNwYWNpbmcteHMsIDAuMzc1ZW0pIC8gMikgdmFyKC0taDVwLXRoZW1lLXNwYWNpbmcteHhzLCAwLjVlbSk7XFxuICAgIGNvbG9yOiB2YXIoLS1oNXAtdGhlbWUtdGV4dC1wcmltYXJ5LCBpbmhlcml0KTtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuayBpbnB1dC5oNXAtdGV4dC1pbnB1dCB7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSA2NHB4KTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rIHNlbGVjdC5oNXAtdGV4dC1pbnB1dCB7XFxuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzNnB4KTtcXG59XFxuXFxuLyogSUUgKyBDaHJvbWUgc3BlY2lmaWMgZml4ZXMgKi9cXG5cXG4uaDVwLXRleHQtaW5wdXQ6Oi1tcy1jbGVhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbjpub3QoLmNvcnJlY3QpLmJsYW5rLmhhcy10aXAgYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4vKiBTZWxlY3QgbW9kZSAqL1xcblxcbnNlbGVjdC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGFwcGVhcmFuY2U6IGJ1dHRvbjtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuXFxuLyogU2hvd2luZyBzb2x1dGlvbiBpbnB1dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5zaG93aW5nLXNvbHV0aW9uIC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjOWRkOGJiO1xcbiAgICBjb2xvcjogIzI1NWM0MTtcXG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcXG59XFxuXFxuXFxuLyogRm9jdXNzZWQgaW5wdXQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgLmg1cC10ZXh0LWlucHV0OmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDAuNWVtIDAgdmFyKC0taDVwLXRoZW1lLWNvbnRyYXN0LWN0YS13aGl0ZSwgIzdmYjhmZik7XFxuICAgIGJvcmRlci1jb2xvcjogdmFyKC0taDVwLXRoZW1lLWNvbnRyYXN0LWN0YS13aGl0ZSwgIzdmYjhmZik7XFxufVxcblxcblxcbi8qIENvcnJlY3RseSBhbnN3ZXJlZCBpbnB1dCAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5jb3JyZWN0IC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQ6ICM5ZGQ4YmI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM5ZGQ4YmI7XFxuICAgIGNvbG9yOiAjMjU1YzQxO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuY29ycmVjdCAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAwLjVlbTsgICAgXFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDBjXFxcIjtcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcbiAgICBjb2xvcjogIzI1NWM0MTtcXG59XFxuXFxuXFxuLyogSW5jb3JyZWN0IGFuc3dlcnMgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuZXJyb3IgLmg1cC10ZXh0LWlucHV0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZDBkMDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Y3ZDBkMDtcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuZXJyb3IgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMC41ZW07XFxuICAgIHRvcDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XFxuICAgIGZvbnQtZmFtaWx5OiAnSDVQRm9udEF3ZXNvbWU0JztcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb250ZW50OiBcXFwiXFxcXGYwMGRcXFwiO1xcbiAgICBjb2xvcjogI2I3MWMxYztcXG59XFxuXFxuXFxuLyogU3BlbGxpbmcgZXJyb3JzICovXFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnJldHJ5IC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmOTk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmOTk7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLnJldHJ5IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDAuNWVtO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xcbiAgICBmb250LWZhbWlseTogJ0g1UEZvbnRBd2Vzb21lNCc7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgY29udGVudDogXFxcIlxcXFxmMDBkXFxcIjtcXG4gICAgY29sb3I6ICNiNzFjMWM7XFxufVxcblxcblxcbi8qIEJ1dHRvbnMgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsgYnV0dG9uIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbn1cXG5cXG5cXG4vKiBIaWdobGlnaHQgaW4gc3BlbGxpbmcgbWlzdGFrZSBtYXJrZXIgKi9cXG5cXG4uc3BlbGxpbmctbWlzdGFrZSAubWlzc2luZy1jaGFyYWN0ZXIsXFxuLnNwZWxsaW5nLW1pc3Rha2UgLm1pc3Rha2VuLWNoYXJhY3RlciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDUwMG1zO1xcbiAgICBhbmltYXRpb24tbmFtZTogYmxpbmstY29sb3I7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDEzO1xcbiAgICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7XFxufVxcblxcbkBrZXlmcmFtZXMgYmxpbmstY29sb3Ige1xcbiAgICBmcm9tIHtcXG4gICAgICAgIGNvbG9yOiBpbml0aWFsO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGNvbG9yOiByZWQ7XFxuICAgIH1cXG59XFxuXFxuLnNwZWxsaW5nLW1pc3Rha2UgLm1pc3Rha2VuLWNoYXJhY3RlciB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbn1cXG5cXG5cXG4vKiBIaWdobGlnaHRzIGluIHRleHQgKi9cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaGlnaGxpZ2h0ZWQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4yKTtcXG4gICAgcGFkZGluZzogMC40ZW07XFxuICAgIG1hcmdpbjogLTAuNGVtO1xcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDEwMDBtcztcXG4gICAgYW5pbWF0aW9uLW5hbWU6IGJsaW5rLWJhY2tncm91bmQtY29sb3I7XFxuICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDM7XFxuICAgIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluay1iYWNrZ3JvdW5kLWNvbG9yIHtcXG4gICAgZnJvbSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbml0aWFsO1xcbiAgICB9XFxuICAgIHRvIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjIpO1xcbiAgICB9XFxufVxcblxcblxcbi8qIE90aGVycyAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5pbnZpc2libGUge1xcbiAgICB2aXNpYmlsaXR5OiBjb2xsYXBzZTtcXG59XFxuXFxuXFxuLyogVGlwcyAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtdGlwLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcXG4gIHJpZ2h0OiAwLjRlbTtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsuaGFzLXRpcDpub3QoLmNvcnJlY3QpOm5vdCguZXJyb3IpOm5vdCgucmV0cnkpIC5oNXAtdGV4dC1pbnB1dCB7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIuMjVlbTtcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXAuY29ycmVjdCAuaDVwLWlucHV0LXdyYXBwZXI6YWZ0ZXIsXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmJsYW5rLmhhcy10aXAuZXJyb3IgLmg1cC1pbnB1dC13cmFwcGVyOmFmdGVyLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5oYXMtdGlwLnJldHJ5IC5oNXAtaW5wdXQtd3JhcHBlcjphZnRlciB7XFxuICAgIHJpZ2h0OiAyLjI1ZW07XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5jb3JyZWN0Lmhhcy10aXAgLmg1cC10ZXh0LWlucHV0LFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5ibGFuay5lcnJvci5oYXMtdGlwIC5oNXAtdGV4dC1pbnB1dCxcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuYmxhbmsucmV0cnkuaGFzLXRpcCAuaDVwLXRleHQtaW5wdXQge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzLjVlbTtcXG59XFxuXFxuLyogaW1wcm92ZXMgYXBwZWFyYW5jZSBvZiBoNXAgdGlwIHNoYWRvd3MgKi9cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuam91YmVsLWljb24tdGlwLW5vcm1hbCAuaDVwLWljb24tc2hhZG93OmJlZm9yZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBvcGFjaXR5OiAwLjEzO1xcbn1cXG5cXG4vKiBwZW5kaW5nIGZlZWRiYWNrIG1hcmtlciAqL1xcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuazpub3QoLmhhcy1wZW5kaW5nLWZlZWRiYWNrKSBidXR0b24uaDVwLW5vdGlmaWNhdGlvbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbiB7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7ICAgIFxcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy1zZWxlY3QtbW9kZSAuYmxhbmsuaGFzLXBlbmRpbmctZmVlZGJhY2sgYnV0dG9uLmg1cC1ub3RpZmljYXRpb24sXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlIC5ibGFuay5oYXMtcGVuZGluZy1mZWVkYmFjayAuaDVwLWlucHV0LXdyYXBwZXI6YmVmb3JlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdINVBGb250QXdlc29tZTQnO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGFuaW1hdGlvbjogc2hha2UgM3MgY3ViaWMtYmV6aWVyKC4zNiwgLjA3LCAuMTksIC45NykgcmV2ZXJzZTtcXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogMjtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xcbn1cXG5cXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0wLjRlbTtcXG4gICAgdG9wOiAtMC43ZW07XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFxcZjA1YVxcXCI7XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXNlbGVjdC1tb2RlIC5ibGFuay5lcnJvci5oYXMtcGVuZGluZy1mZWVkYmFjayBidXR0b24uaDVwLW5vdGlmaWNhdGlvbixcXG4uaDVwLWFkdmFuY2VkLWJsYW5rcyAuaDVwLWFkdmFuY2VkLWJsYW5rcy10eXBlLW1vZGUgLmJsYW5rLmVycm9yLmhhcy1wZW5kaW5nLWZlZWRiYWNrIC5oNXAtaW5wdXQtd3JhcHBlcjpiZWZvcmUge1xcbiAgICBjb2xvcjogI2I3MWMxYztcXG59XFxuXFxuLmg1cC1hZHZhbmNlZC1ibGFua3MgLmg1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUgLmJsYW5rLnJldHJ5Lmhhcy1wZW5kaW5nLWZlZWRiYWNrIGJ1dHRvbi5oNXAtbm90aWZpY2F0aW9uLFxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oNXAtYWR2YW5jZWQtYmxhbmtzLXR5cGUtbW9kZSAuYmxhbmsucmV0cnkuaGFzLXBlbmRpbmctZmVlZGJhY2sgLmg1cC1pbnB1dC13cmFwcGVyOmJlZm9yZSB7XFxuICAgIGNvbG9yOiAjZmZmZjAwO1xcbiAgICB0ZXh0LXNoYWRvdzogMHB4IDBweCAwLjVlbSBibGFjaztcXG59XFxuXFxuQGtleWZyYW1lcyBzaGFrZSB7XFxuICAgIDIlLFxcbiAgICAyMCUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMC41cHgsIDAsIDApO1xcbiAgICB9XFxuICAgIDQlLFxcbiAgICAxNyUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxcHgsIDAsIDApO1xcbiAgICB9XFxuICAgIDYlLFxcbiAgICAxMCUsXFxuICAgIDE1JSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0ycHgsIDAsIDApO1xcbiAgICB9XFxuICAgIDklLFxcbiAgICAxMyUge1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgycHgsIDAsIDApO1xcbiAgICB9XFxufVxcblxcbi5oNXAtYWR2YW5jZWQtYmxhbmtzIC5oaWRkZW4tYnV0LXJlYWQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHdpZHRoOiAxcHg7XFxuICAgIGhlaWdodDogMXB4O1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICBjbGlwOiByZWN0KDFweCwgMXB4LCAxcHgsIDFweCk7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmNvbnZlcnRDaGFuZ2VzVG9ETVAgPSBjb252ZXJ0Q2hhbmdlc1RvRE1QO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuLy8gU2VlOiBodHRwOi8vY29kZS5nb29nbGUuY29tL3AvZ29vZ2xlLWRpZmYtbWF0Y2gtcGF0Y2gvd2lraS9BUElcbmZ1bmN0aW9uIGNvbnZlcnRDaGFuZ2VzVG9ETVAoY2hhbmdlcykge1xuICB2YXIgcmV0ID0gW10sXG4gICAgICBjaGFuZ2UsXG4gICAgICBvcGVyYXRpb247XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGFuZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgY2hhbmdlID0gY2hhbmdlc1tpXTtcblxuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIG9wZXJhdGlvbiA9IDE7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgb3BlcmF0aW9uID0gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZXJhdGlvbiA9IDA7XG4gICAgfVxuXG4gICAgcmV0LnB1c2goW29wZXJhdGlvbiwgY2hhbmdlLnZhbHVlXSk7XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5amIyNTJaWEowTDJSdGNDNXFjeUpkTENKdVlXMWxjeUk2V3lKamIyNTJaWEowUTJoaGJtZGxjMVJ2UkUxUUlpd2lZMmhoYm1kbGN5SXNJbkpsZENJc0ltTm9ZVzVuWlNJc0ltOXdaWEpoZEdsdmJpSXNJbWtpTENKc1pXNW5kR2dpTENKaFpHUmxaQ0lzSW5KbGJXOTJaV1FpTENKd2RYTm9JaXdpZG1Gc2RXVWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3p0QlFVRkJPMEZCUTA4c1UwRkJVMEVzYlVKQlFWUXNRMEZCTmtKRExFOUJRVGRDTEVWQlFYTkRPMEZCUXpORExFMUJRVWxETEVkQlFVY3NSMEZCUnl4RlFVRldPMEZCUVVFc1RVRkRTVU1zVFVGRVNqdEJRVUZCTEUxQlJVbERMRk5CUmtvN08wRkJSMEVzVDBGQlN5eEpRVUZKUXl4RFFVRkRMRWRCUVVjc1EwRkJZaXhGUVVGblFrRXNRMEZCUXl4SFFVRkhTaXhQUVVGUExFTkJRVU5MTEUxQlFUVkNMRVZCUVc5RFJDeERRVUZETEVWQlFYSkRMRVZCUVhsRE8wRkJRM1pEUml4SlFVRkJRU3hOUVVGTkxFZEJRVWRHTEU5QlFVOHNRMEZCUTBrc1EwRkJSQ3hEUVVGb1FqczdRVUZEUVN4UlFVRkpSaXhOUVVGTkxFTkJRVU5KTEV0QlFWZ3NSVUZCYTBJN1FVRkRhRUpJTEUxQlFVRkJMRk5CUVZNc1IwRkJSeXhEUVVGYU8wRkJRMFFzUzBGR1JDeE5RVVZQTEVsQlFVbEVMRTFCUVUwc1EwRkJRMHNzVDBGQldDeEZRVUZ2UWp0QlFVTjZRa29zVFVGQlFVRXNVMEZCVXl4SFFVRkhMRU5CUVVNc1EwRkJZanRCUVVORUxFdEJSazBzVFVGRlFUdEJRVU5NUVN4TlFVRkJRU3hUUVVGVExFZEJRVWNzUTBGQldqdEJRVU5FT3p0QlFVVkVSaXhKUVVGQlFTeEhRVUZITEVOQlFVTlBMRWxCUVVvc1EwRkJVeXhEUVVGRFRDeFRRVUZFTEVWQlFWbEVMRTFCUVUwc1EwRkJRMDhzUzBGQmJrSXNRMEZCVkR0QlFVTkVPenRCUVVORUxGTkJRVTlTTEVkQlFWQTdRVUZEUkNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpOHZJRk5sWlRvZ2FIUjBjRG92TDJOdlpHVXVaMjl2WjJ4bExtTnZiUzl3TDJkdmIyZHNaUzFrYVdabUxXMWhkR05vTFhCaGRHTm9MM2RwYTJrdlFWQkpYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdZMjl1ZG1WeWRFTm9ZVzVuWlhOVWIwUk5VQ2hqYUdGdVoyVnpLU0I3WEc0Z0lHeGxkQ0J5WlhRZ1BTQmJYU3hjYmlBZ0lDQWdJR05vWVc1blpTeGNiaUFnSUNBZ0lHOXdaWEpoZEdsdmJqdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCamFHRnVaMlZ6TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ1kyaGhibWRsSUQwZ1kyaGhibWRsYzF0cFhUdGNiaUFnSUNCcFppQW9ZMmhoYm1kbExtRmtaR1ZrS1NCN1hHNGdJQ0FnSUNCdmNHVnlZWFJwYjI0Z1BTQXhPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9ZMmhoYm1kbExuSmxiVzkyWldRcElIdGNiaUFnSUNBZ0lHOXdaWEpoZEdsdmJpQTlJQzB4TzF4dUlDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQnZjR1Z5WVhScGIyNGdQU0F3TzF4dUlDQWdJSDFjYmx4dUlDQWdJSEpsZEM1d2RYTm9LRnR2Y0dWeVlYUnBiMjRzSUdOb1lXNW5aUzUyWVd4MVpWMHBPMXh1SUNCOVhHNGdJSEpsZEhWeWJpQnlaWFE3WEc1OVhHNGlYWDA9XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29udmVydENoYW5nZXNUb1hNTCA9IGNvbnZlcnRDaGFuZ2VzVG9YTUw7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5mdW5jdGlvbiBjb252ZXJ0Q2hhbmdlc1RvWE1MKGNoYW5nZXMpIHtcbiAgdmFyIHJldCA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY2hhbmdlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjaGFuZ2UgPSBjaGFuZ2VzW2ldO1xuXG4gICAgaWYgKGNoYW5nZS5hZGRlZCkge1xuICAgICAgcmV0LnB1c2goJzxpbnM+Jyk7XG4gICAgfSBlbHNlIGlmIChjaGFuZ2UucmVtb3ZlZCkge1xuICAgICAgcmV0LnB1c2goJzxkZWw+Jyk7XG4gICAgfVxuXG4gICAgcmV0LnB1c2goZXNjYXBlSFRNTChjaGFuZ2UudmFsdWUpKTtcblxuICAgIGlmIChjaGFuZ2UuYWRkZWQpIHtcbiAgICAgIHJldC5wdXNoKCc8L2lucz4nKTtcbiAgICB9IGVsc2UgaWYgKGNoYW5nZS5yZW1vdmVkKSB7XG4gICAgICByZXQucHVzaCgnPC9kZWw+Jyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldC5qb2luKCcnKTtcbn1cblxuZnVuY3Rpb24gZXNjYXBlSFRNTChzKSB7XG4gIHZhciBuID0gcztcbiAgbiA9IG4ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKTtcbiAgbiA9IG4ucmVwbGFjZSgvPC9nLCAnJmx0OycpO1xuICBuID0gbi5yZXBsYWNlKC8+L2csICcmZ3Q7Jyk7XG4gIG4gPSBuLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKTtcbiAgcmV0dXJuIG47XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlqYjI1MlpYSjBMM2h0YkM1cWN5SmRMQ0p1WVcxbGN5STZXeUpqYjI1MlpYSjBRMmhoYm1kbGMxUnZXRTFNSWl3aVkyaGhibWRsY3lJc0luSmxkQ0lzSW1raUxDSnNaVzVuZEdnaUxDSmphR0Z1WjJVaUxDSmhaR1JsWkNJc0luQjFjMmdpTENKeVpXMXZkbVZrSWl3aVpYTmpZWEJsU0ZSTlRDSXNJblpoYkhWbElpd2lhbTlwYmlJc0luTWlMQ0p1SWl3aWNtVndiR0ZqWlNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPMEZCUVU4c1UwRkJVMEVzYlVKQlFWUXNRMEZCTmtKRExFOUJRVGRDTEVWQlFYTkRPMEZCUXpORExFMUJRVWxETEVkQlFVY3NSMEZCUnl4RlFVRldPenRCUVVOQkxFOUJRVXNzU1VGQlNVTXNRMEZCUXl4SFFVRkhMRU5CUVdJc1JVRkJaMEpCTEVOQlFVTXNSMEZCUjBZc1QwRkJUeXhEUVVGRFJ5eE5RVUUxUWl4RlFVRnZRMFFzUTBGQlF5eEZRVUZ5UXl4RlFVRjVRenRCUVVOMlF5eFJRVUZKUlN4TlFVRk5MRWRCUVVkS0xFOUJRVThzUTBGQlEwVXNRMEZCUkN4RFFVRndRanM3UVVGRFFTeFJRVUZKUlN4TlFVRk5MRU5CUVVORExFdEJRVmdzUlVGQmEwSTdRVUZEYUVKS0xFMUJRVUZCTEVkQlFVY3NRMEZCUTBzc1NVRkJTaXhEUVVGVExFOUJRVlE3UVVGRFJDeExRVVpFTEUxQlJVOHNTVUZCU1VZc1RVRkJUU3hEUVVGRFJ5eFBRVUZZTEVWQlFXOUNPMEZCUTNwQ1RpeE5RVUZCUVN4SFFVRkhMRU5CUVVOTExFbEJRVW9zUTBGQlV5eFBRVUZVTzBGQlEwUTdPMEZCUlVSTUxFbEJRVUZCTEVkQlFVY3NRMEZCUTBzc1NVRkJTaXhEUVVGVFJTeFZRVUZWTEVOQlFVTktMRTFCUVUwc1EwRkJRMHNzUzBGQlVpeERRVUZ1UWpzN1FVRkZRU3hSUVVGSlRDeE5RVUZOTEVOQlFVTkRMRXRCUVZnc1JVRkJhMEk3UVVGRGFFSktMRTFCUVVGQkxFZEJRVWNzUTBGQlEwc3NTVUZCU2l4RFFVRlRMRkZCUVZRN1FVRkRSQ3hMUVVaRUxFMUJSVThzU1VGQlNVWXNUVUZCVFN4RFFVRkRSeXhQUVVGWUxFVkJRVzlDTzBGQlEzcENUaXhOUVVGQlFTeEhRVUZITEVOQlFVTkxMRWxCUVVvc1EwRkJVeXhSUVVGVU8wRkJRMFE3UVVGRFJqczdRVUZEUkN4VFFVRlBUQ3hIUVVGSExFTkJRVU5UTEVsQlFVb3NRMEZCVXl4RlFVRlVMRU5CUVZBN1FVRkRSRHM3UVVGRlJDeFRRVUZUUml4VlFVRlVMRU5CUVc5Q1J5eERRVUZ3UWl4RlFVRjFRanRCUVVOeVFpeE5RVUZKUXl4RFFVRkRMRWRCUVVkRUxFTkJRVkk3UVVGRFFVTXNSVUZCUVVFc1EwRkJReXhIUVVGSFFTeERRVUZETEVOQlFVTkRMRTlCUVVZc1EwRkJWU3hKUVVGV0xFVkJRV2RDTEU5QlFXaENMRU5CUVVvN1FVRkRRVVFzUlVGQlFVRXNRMEZCUXl4SFFVRkhRU3hEUVVGRExFTkJRVU5ETEU5QlFVWXNRMEZCVlN4SlFVRldMRVZCUVdkQ0xFMUJRV2hDTEVOQlFVbzdRVUZEUVVRc1JVRkJRVUVzUTBGQlF5eEhRVUZIUVN4RFFVRkRMRU5CUVVORExFOUJRVVlzUTBGQlZTeEpRVUZXTEVWQlFXZENMRTFCUVdoQ0xFTkJRVW83UVVGRFFVUXNSVUZCUVVFc1EwRkJReXhIUVVGSFFTeERRVUZETEVOQlFVTkRMRTlCUVVZc1EwRkJWU3hKUVVGV0xFVkJRV2RDTEZGQlFXaENMRU5CUVVvN1FVRkZRU3hUUVVGUFJDeERRVUZRTzBGQlEwUWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdablZ1WTNScGIyNGdZMjl1ZG1WeWRFTm9ZVzVuWlhOVWIxaE5UQ2hqYUdGdVoyVnpLU0I3WEc0Z0lHeGxkQ0J5WlhRZ1BTQmJYVHRjYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmphR0Z1WjJWekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdiR1YwSUdOb1lXNW5aU0E5SUdOb1lXNW5aWE5iYVYwN1hHNGdJQ0FnYVdZZ0tHTm9ZVzVuWlM1aFpHUmxaQ2tnZTF4dUlDQWdJQ0FnY21WMExuQjFjMmdvSnp4cGJuTStKeWs3WEc0Z0lDQWdmU0JsYkhObElHbG1JQ2hqYUdGdVoyVXVjbVZ0YjNabFpDa2dlMXh1SUNBZ0lDQWdjbVYwTG5CMWMyZ29KenhrWld3K0p5azdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2NtVjBMbkIxYzJnb1pYTmpZWEJsU0ZSTlRDaGphR0Z1WjJVdWRtRnNkV1VwS1R0Y2JseHVJQ0FnSUdsbUlDaGphR0Z1WjJVdVlXUmtaV1FwSUh0Y2JpQWdJQ0FnSUhKbGRDNXdkWE5vS0NjOEwybHVjejRuS1R0Y2JpQWdJQ0I5SUdWc2MyVWdhV1lnS0dOb1lXNW5aUzV5WlcxdmRtVmtLU0I3WEc0Z0lDQWdJQ0J5WlhRdWNIVnphQ2duUEM5a1pXdytKeWs3WEc0Z0lDQWdmVnh1SUNCOVhHNGdJSEpsZEhWeWJpQnlaWFF1YW05cGJpZ25KeWs3WEc1OVhHNWNibVoxYm1OMGFXOXVJR1Z6WTJGd1pVaFVUVXdvY3lrZ2UxeHVJQ0JzWlhRZ2JpQTlJSE03WEc0Z0lHNGdQU0J1TG5KbGNHeGhZMlVvTHlZdlp5d2dKeVpoYlhBN0p5azdYRzRnSUc0Z1BTQnVMbkpsY0d4aFkyVW9Mend2Wnl3Z0p5WnNkRHNuS1R0Y2JpQWdiaUE5SUc0dWNtVndiR0ZqWlNndlBpOW5MQ0FuSm1kME95Y3BPMXh1SUNCdUlEMGdiaTV5WlhCc1lXTmxLQzljSWk5bkxDQW5KbkYxYjNRN0p5azdYRzVjYmlBZ2NtVjBkWEp1SUc0N1hHNTlYRzRpWFgwPVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRpZmZBcnJheXMgPSBkaWZmQXJyYXlzO1xuZXhwb3J0cy5hcnJheURpZmYgPSB2b2lkIDA7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlXCIpKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqLyBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhciBhcnJheURpZmYgPSBuZXdcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuW1xuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJkZWZhdWx0XCJcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5dKCk7XG5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbmV4cG9ydHMuYXJyYXlEaWZmID0gYXJyYXlEaWZmO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuYXJyYXlEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zbGljZSgpO1xufTtcblxuYXJyYXlEaWZmLmpvaW4gPSBhcnJheURpZmYucmVtb3ZlRW1wdHkgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufTtcblxuZnVuY3Rpb24gZGlmZkFycmF5cyhvbGRBcnIsIG5ld0FyciwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIGFycmF5RGlmZi5kaWZmKG9sZEFyciwgbmV3QXJyLCBjYWxsYmFjayk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdabUwyRnljbUY1TG1weklsMHNJbTVoYldWeklqcGJJbUZ5Y21GNVJHbG1aaUlzSWtScFptWWlMQ0owYjJ0bGJtbDZaU0lzSW5aaGJIVmxJaXdpYzJ4cFkyVWlMQ0pxYjJsdUlpd2ljbVZ0YjNabFJXMXdkSGtpTENKa2FXWm1RWEp5WVhseklpd2liMnhrUVhKeUlpd2libVYzUVhKeUlpd2lZMkZzYkdKaFkyc2lMQ0prYVdabUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3T3pzN1FVRkZUeXhKUVVGTlFTeFRRVUZUTEVkQlFVYzdRVUZCU1VNN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUVzUTBGQlNpeEZRVUZzUWpzN096czdPMEZCUTFCRUxGTkJRVk1zUTBGQlEwVXNVVUZCVml4SFFVRnhRaXhWUVVGVFF5eExRVUZVTEVWQlFXZENPMEZCUTI1RExGTkJRVTlCTEV0QlFVc3NRMEZCUTBNc1MwRkJUaXhGUVVGUU8wRkJRMFFzUTBGR1JEczdRVUZIUVVvc1UwRkJVeXhEUVVGRFN5eEpRVUZXTEVkQlFXbENUQ3hUUVVGVExFTkJRVU5OTEZkQlFWWXNSMEZCZDBJc1ZVRkJVMGdzUzBGQlZDeEZRVUZuUWp0QlFVTjJSQ3hUUVVGUFFTeExRVUZRTzBGQlEwUXNRMEZHUkRzN1FVRkpUeXhUUVVGVFNTeFZRVUZVTEVOQlFXOUNReXhOUVVGd1FpeEZRVUUwUWtNc1RVRkJOVUlzUlVGQmIwTkRMRkZCUVhCRExFVkJRVGhETzBGQlFVVXNVMEZCVDFZc1UwRkJVeXhEUVVGRFZ5eEpRVUZXTEVOQlFXVklMRTFCUVdZc1JVRkJkVUpETEUxQlFYWkNMRVZCUVN0Q1F5eFJRVUV2UWl4RFFVRlFPMEZCUVd0RUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFUnBabVlnWm5KdmJTQW5MaTlpWVhObEp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHRnljbUY1UkdsbVppQTlJRzVsZHlCRWFXWm1LQ2s3WEc1aGNuSmhlVVJwWm1ZdWRHOXJaVzVwZW1VZ1BTQm1kVzVqZEdsdmJpaDJZV3gxWlNrZ2UxeHVJQ0J5WlhSMWNtNGdkbUZzZFdVdWMyeHBZMlVvS1R0Y2JuMDdYRzVoY25KaGVVUnBabVl1YW05cGJpQTlJR0Z5Y21GNVJHbG1aaTV5WlcxdmRtVkZiWEIwZVNBOUlHWjFibU4wYVc5dUtIWmhiSFZsS1NCN1hHNGdJSEpsZEhWeWJpQjJZV3gxWlR0Y2JuMDdYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJrYVdabVFYSnlZWGx6S0c5c1pFRnljaXdnYm1WM1FYSnlMQ0JqWVd4c1ltRmpheWtnZXlCeVpYUjFjbTRnWVhKeVlYbEVhV1ptTG1ScFptWW9iMnhrUVhKeUxDQnVaWGRCY25Jc0lHTmhiR3hpWVdOcktUc2dmVnh1SWwxOVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IERpZmY7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5mdW5jdGlvbiBEaWZmKCkge31cblxuRGlmZi5wcm90b3R5cGUgPSB7XG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICBkaWZmOiBmdW5jdGlvbiBkaWZmKG9sZFN0cmluZywgbmV3U3RyaW5nKSB7XG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIHZhclxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAyICYmIGFyZ3VtZW50c1syXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzJdIDoge307XG4gICAgdmFyIGNhbGxiYWNrID0gb3B0aW9ucy5jYWxsYmFjaztcblxuICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2FsbGJhY2sgPSBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IHt9O1xuICAgIH1cblxuICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgZnVuY3Rpb24gZG9uZSh2YWx1ZSkge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgdmFsdWUpO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICB9XG4gICAgfSAvLyBBbGxvdyBzdWJjbGFzc2VzIHRvIG1hc3NhZ2UgdGhlIGlucHV0IHByaW9yIHRvIHJ1bm5pbmdcblxuXG4gICAgb2xkU3RyaW5nID0gdGhpcy5jYXN0SW5wdXQob2xkU3RyaW5nKTtcbiAgICBuZXdTdHJpbmcgPSB0aGlzLmNhc3RJbnB1dChuZXdTdHJpbmcpO1xuICAgIG9sZFN0cmluZyA9IHRoaXMucmVtb3ZlRW1wdHkodGhpcy50b2tlbml6ZShvbGRTdHJpbmcpKTtcbiAgICBuZXdTdHJpbmcgPSB0aGlzLnJlbW92ZUVtcHR5KHRoaXMudG9rZW5pemUobmV3U3RyaW5nKSk7XG4gICAgdmFyIG5ld0xlbiA9IG5ld1N0cmluZy5sZW5ndGgsXG4gICAgICAgIG9sZExlbiA9IG9sZFN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGVkaXRMZW5ndGggPSAxO1xuICAgIHZhciBtYXhFZGl0TGVuZ3RoID0gbmV3TGVuICsgb2xkTGVuO1xuXG4gICAgaWYgKG9wdGlvbnMubWF4RWRpdExlbmd0aCkge1xuICAgICAgbWF4RWRpdExlbmd0aCA9IE1hdGgubWluKG1heEVkaXRMZW5ndGgsIG9wdGlvbnMubWF4RWRpdExlbmd0aCk7XG4gICAgfVxuXG4gICAgdmFyIGJlc3RQYXRoID0gW3tcbiAgICAgIG5ld1BvczogLTEsXG4gICAgICBjb21wb25lbnRzOiBbXVxuICAgIH1dOyAvLyBTZWVkIGVkaXRMZW5ndGggPSAwLCBpLmUuIHRoZSBjb250ZW50IHN0YXJ0cyB3aXRoIHRoZSBzYW1lIHZhbHVlc1xuXG4gICAgdmFyIG9sZFBvcyA9IHRoaXMuZXh0cmFjdENvbW1vbihiZXN0UGF0aFswXSwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIDApO1xuXG4gICAgaWYgKGJlc3RQYXRoWzBdLm5ld1BvcyArIDEgPj0gbmV3TGVuICYmIG9sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAvLyBJZGVudGl0eSBwZXIgdGhlIGVxdWFsaXR5IGFuZCB0b2tlbml6ZXJcbiAgICAgIHJldHVybiBkb25lKFt7XG4gICAgICAgIHZhbHVlOiB0aGlzLmpvaW4obmV3U3RyaW5nKSxcbiAgICAgICAgY291bnQ6IG5ld1N0cmluZy5sZW5ndGhcbiAgICAgIH1dKTtcbiAgICB9IC8vIE1haW4gd29ya2VyIG1ldGhvZC4gY2hlY2tzIGFsbCBwZXJtdXRhdGlvbnMgb2YgYSBnaXZlbiBlZGl0IGxlbmd0aCBmb3IgYWNjZXB0YW5jZS5cblxuXG4gICAgZnVuY3Rpb24gZXhlY0VkaXRMZW5ndGgoKSB7XG4gICAgICBmb3IgKHZhciBkaWFnb25hbFBhdGggPSAtMSAqIGVkaXRMZW5ndGg7IGRpYWdvbmFsUGF0aCA8PSBlZGl0TGVuZ3RoOyBkaWFnb25hbFBhdGggKz0gMikge1xuICAgICAgICB2YXIgYmFzZVBhdGggPVxuICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICAgIHZvaWQgMFxuICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgICA7XG5cbiAgICAgICAgdmFyIGFkZFBhdGggPSBiZXN0UGF0aFtkaWFnb25hbFBhdGggLSAxXSxcbiAgICAgICAgICAgIHJlbW92ZVBhdGggPSBiZXN0UGF0aFtkaWFnb25hbFBhdGggKyAxXSxcbiAgICAgICAgICAgIF9vbGRQb3MgPSAocmVtb3ZlUGF0aCA/IHJlbW92ZVBhdGgubmV3UG9zIDogMCkgLSBkaWFnb25hbFBhdGg7XG5cbiAgICAgICAgaWYgKGFkZFBhdGgpIHtcbiAgICAgICAgICAvLyBObyBvbmUgZWxzZSBpcyBnb2luZyB0byBhdHRlbXB0IHRvIHVzZSB0aGlzIHZhbHVlLCBjbGVhciBpdFxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aCAtIDFdID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhbkFkZCA9IGFkZFBhdGggJiYgYWRkUGF0aC5uZXdQb3MgKyAxIDwgbmV3TGVuLFxuICAgICAgICAgICAgY2FuUmVtb3ZlID0gcmVtb3ZlUGF0aCAmJiAwIDw9IF9vbGRQb3MgJiYgX29sZFBvcyA8IG9sZExlbjtcblxuICAgICAgICBpZiAoIWNhbkFkZCAmJiAhY2FuUmVtb3ZlKSB7XG4gICAgICAgICAgLy8gSWYgdGhpcyBwYXRoIGlzIGEgdGVybWluYWwgdGhlbiBwcnVuZVxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gLy8gU2VsZWN0IHRoZSBkaWFnb25hbCB0aGF0IHdlIHdhbnQgdG8gYnJhbmNoIGZyb20uIFdlIHNlbGVjdCB0aGUgcHJpb3JcbiAgICAgICAgLy8gcGF0aCB3aG9zZSBwb3NpdGlvbiBpbiB0aGUgbmV3IHN0cmluZyBpcyB0aGUgZmFydGhlc3QgZnJvbSB0aGUgb3JpZ2luXG4gICAgICAgIC8vIGFuZCBkb2VzIG5vdCBwYXNzIHRoZSBib3VuZHMgb2YgdGhlIGRpZmYgZ3JhcGhcblxuXG4gICAgICAgIGlmICghY2FuQWRkIHx8IGNhblJlbW92ZSAmJiBhZGRQYXRoLm5ld1BvcyA8IHJlbW92ZVBhdGgubmV3UG9zKSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBjbG9uZVBhdGgocmVtb3ZlUGF0aCk7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHVuZGVmaW5lZCwgdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYmFzZVBhdGggPSBhZGRQYXRoOyAvLyBObyBuZWVkIHRvIGNsb25lLCB3ZSd2ZSBwdWxsZWQgaXQgZnJvbSB0aGUgbGlzdFxuXG4gICAgICAgICAgYmFzZVBhdGgubmV3UG9zKys7XG4gICAgICAgICAgc2VsZi5wdXNoQ29tcG9uZW50KGJhc2VQYXRoLmNvbXBvbmVudHMsIHRydWUsIHVuZGVmaW5lZCk7XG4gICAgICAgIH1cblxuICAgICAgICBfb2xkUG9zID0gc2VsZi5leHRyYWN0Q29tbW9uKGJhc2VQYXRoLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgZGlhZ29uYWxQYXRoKTsgLy8gSWYgd2UgaGF2ZSBoaXQgdGhlIGVuZCBvZiBib3RoIHN0cmluZ3MsIHRoZW4gd2UgYXJlIGRvbmVcblxuICAgICAgICBpZiAoYmFzZVBhdGgubmV3UG9zICsgMSA+PSBuZXdMZW4gJiYgX29sZFBvcyArIDEgPj0gb2xkTGVuKSB7XG4gICAgICAgICAgcmV0dXJuIGRvbmUoYnVpbGRWYWx1ZXMoc2VsZiwgYmFzZVBhdGguY29tcG9uZW50cywgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIHNlbGYudXNlTG9uZ2VzdFRva2VuKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gT3RoZXJ3aXNlIHRyYWNrIHRoaXMgcGF0aCBhcyBhIHBvdGVudGlhbCBjYW5kaWRhdGUgYW5kIGNvbnRpbnVlLlxuICAgICAgICAgIGJlc3RQYXRoW2RpYWdvbmFsUGF0aF0gPSBiYXNlUGF0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBlZGl0TGVuZ3RoKys7XG4gICAgfSAvLyBQZXJmb3JtcyB0aGUgbGVuZ3RoIG9mIGVkaXQgaXRlcmF0aW9uLiBJcyBhIGJpdCBmdWdseSBhcyB0aGlzIGhhcyB0byBzdXBwb3J0IHRoZVxuICAgIC8vIHN5bmMgYW5kIGFzeW5jIG1vZGUgd2hpY2ggaXMgbmV2ZXIgZnVuLiBMb29wcyBvdmVyIGV4ZWNFZGl0TGVuZ3RoIHVudGlsIGEgdmFsdWVcbiAgICAvLyBpcyBwcm9kdWNlZCwgb3IgdW50aWwgdGhlIGVkaXQgbGVuZ3RoIGV4Y2VlZHMgb3B0aW9ucy5tYXhFZGl0TGVuZ3RoIChpZiBnaXZlbiksXG4gICAgLy8gaW4gd2hpY2ggY2FzZSBpdCB3aWxsIHJldHVybiB1bmRlZmluZWQuXG5cblxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgKGZ1bmN0aW9uIGV4ZWMoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIGlmIChlZGl0TGVuZ3RoID4gbWF4RWRpdExlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFleGVjRWRpdExlbmd0aCgpKSB7XG4gICAgICAgICAgICBleGVjKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwKTtcbiAgICAgIH0pKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdoaWxlIChlZGl0TGVuZ3RoIDw9IG1heEVkaXRMZW5ndGgpIHtcbiAgICAgICAgdmFyIHJldCA9IGV4ZWNFZGl0TGVuZ3RoKCk7XG5cbiAgICAgICAgaWYgKHJldCkge1xuICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIHB1c2hDb21wb25lbnQ6IGZ1bmN0aW9uIHB1c2hDb21wb25lbnQoY29tcG9uZW50cywgYWRkZWQsIHJlbW92ZWQpIHtcbiAgICB2YXIgbGFzdCA9IGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXTtcblxuICAgIGlmIChsYXN0ICYmIGxhc3QuYWRkZWQgPT09IGFkZGVkICYmIGxhc3QucmVtb3ZlZCA9PT0gcmVtb3ZlZCkge1xuICAgICAgLy8gV2UgbmVlZCB0byBjbG9uZSBoZXJlIGFzIHRoZSBjb21wb25lbnQgY2xvbmUgb3BlcmF0aW9uIGlzIGp1c3RcbiAgICAgIC8vIGFzIHNoYWxsb3cgYXJyYXkgY2xvbmVcbiAgICAgIGNvbXBvbmVudHNbY29tcG9uZW50cy5sZW5ndGggLSAxXSA9IHtcbiAgICAgICAgY291bnQ6IGxhc3QuY291bnQgKyAxLFxuICAgICAgICBhZGRlZDogYWRkZWQsXG4gICAgICAgIHJlbW92ZWQ6IHJlbW92ZWRcbiAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudHMucHVzaCh7XG4gICAgICAgIGNvdW50OiAxLFxuICAgICAgICBhZGRlZDogYWRkZWQsXG4gICAgICAgIHJlbW92ZWQ6IHJlbW92ZWRcbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcblxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgZXh0cmFjdENvbW1vbjogZnVuY3Rpb24gZXh0cmFjdENvbW1vbihiYXNlUGF0aCwgbmV3U3RyaW5nLCBvbGRTdHJpbmcsIGRpYWdvbmFsUGF0aCkge1xuICAgIHZhciBuZXdMZW4gPSBuZXdTdHJpbmcubGVuZ3RoLFxuICAgICAgICBvbGRMZW4gPSBvbGRTdHJpbmcubGVuZ3RoLFxuICAgICAgICBuZXdQb3MgPSBiYXNlUGF0aC5uZXdQb3MsXG4gICAgICAgIG9sZFBvcyA9IG5ld1BvcyAtIGRpYWdvbmFsUGF0aCxcbiAgICAgICAgY29tbW9uQ291bnQgPSAwO1xuXG4gICAgd2hpbGUgKG5ld1BvcyArIDEgPCBuZXdMZW4gJiYgb2xkUG9zICsgMSA8IG9sZExlbiAmJiB0aGlzLmVxdWFscyhuZXdTdHJpbmdbbmV3UG9zICsgMV0sIG9sZFN0cmluZ1tvbGRQb3MgKyAxXSkpIHtcbiAgICAgIG5ld1BvcysrO1xuICAgICAgb2xkUG9zKys7XG4gICAgICBjb21tb25Db3VudCsrO1xuICAgIH1cblxuICAgIGlmIChjb21tb25Db3VudCkge1xuICAgICAgYmFzZVBhdGguY29tcG9uZW50cy5wdXNoKHtcbiAgICAgICAgY291bnQ6IGNvbW1vbkNvdW50XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBiYXNlUGF0aC5uZXdQb3MgPSBuZXdQb3M7XG4gICAgcmV0dXJuIG9sZFBvcztcbiAgfSxcblxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgZXF1YWxzOiBmdW5jdGlvbiBlcXVhbHMobGVmdCwgcmlnaHQpIHtcbiAgICBpZiAodGhpcy5vcHRpb25zLmNvbXBhcmF0b3IpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuY29tcGFyYXRvcihsZWZ0LCByaWdodCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsZWZ0ID09PSByaWdodCB8fCB0aGlzLm9wdGlvbnMuaWdub3JlQ2FzZSAmJiBsZWZ0LnRvTG93ZXJDYXNlKCkgPT09IHJpZ2h0LnRvTG93ZXJDYXNlKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICByZW1vdmVFbXB0eTogZnVuY3Rpb24gcmVtb3ZlRW1wdHkoYXJyYXkpIHtcbiAgICB2YXIgcmV0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYXJyYXlbaV0pIHtcbiAgICAgICAgcmV0LnB1c2goYXJyYXlbaV0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH0sXG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIGNhc3RJbnB1dDogZnVuY3Rpb24gY2FzdElucHV0KHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9LFxuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICB0b2tlbml6ZTogZnVuY3Rpb24gdG9rZW5pemUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUuc3BsaXQoJycpO1xuICB9LFxuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICBqb2luOiBmdW5jdGlvbiBqb2luKGNoYXJzKSB7XG4gICAgcmV0dXJuIGNoYXJzLmpvaW4oJycpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBidWlsZFZhbHVlcyhkaWZmLCBjb21wb25lbnRzLCBuZXdTdHJpbmcsIG9sZFN0cmluZywgdXNlTG9uZ2VzdFRva2VuKSB7XG4gIHZhciBjb21wb25lbnRQb3MgPSAwLFxuICAgICAgY29tcG9uZW50TGVuID0gY29tcG9uZW50cy5sZW5ndGgsXG4gICAgICBuZXdQb3MgPSAwLFxuICAgICAgb2xkUG9zID0gMDtcblxuICBmb3IgKDsgY29tcG9uZW50UG9zIDwgY29tcG9uZW50TGVuOyBjb21wb25lbnRQb3MrKykge1xuICAgIHZhciBjb21wb25lbnQgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvc107XG5cbiAgICBpZiAoIWNvbXBvbmVudC5yZW1vdmVkKSB7XG4gICAgICBpZiAoIWNvbXBvbmVudC5hZGRlZCAmJiB1c2VMb25nZXN0VG9rZW4pIHtcbiAgICAgICAgdmFyIHZhbHVlID0gbmV3U3RyaW5nLnNsaWNlKG5ld1BvcywgbmV3UG9zICsgY29tcG9uZW50LmNvdW50KTtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZS5tYXAoZnVuY3Rpb24gKHZhbHVlLCBpKSB7XG4gICAgICAgICAgdmFyIG9sZFZhbHVlID0gb2xkU3RyaW5nW29sZFBvcyArIGldO1xuICAgICAgICAgIHJldHVybiBvbGRWYWx1ZS5sZW5ndGggPiB2YWx1ZS5sZW5ndGggPyBvbGRWYWx1ZSA6IHZhbHVlO1xuICAgICAgICB9KTtcbiAgICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC52YWx1ZSA9IGRpZmYuam9pbihuZXdTdHJpbmcuc2xpY2UobmV3UG9zLCBuZXdQb3MgKyBjb21wb25lbnQuY291bnQpKTtcbiAgICAgIH1cblxuICAgICAgbmV3UG9zICs9IGNvbXBvbmVudC5jb3VudDsgLy8gQ29tbW9uIGNhc2VcblxuICAgICAgaWYgKCFjb21wb25lbnQuYWRkZWQpIHtcbiAgICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50LnZhbHVlID0gZGlmZi5qb2luKG9sZFN0cmluZy5zbGljZShvbGRQb3MsIG9sZFBvcyArIGNvbXBvbmVudC5jb3VudCkpO1xuICAgICAgb2xkUG9zICs9IGNvbXBvbmVudC5jb3VudDsgLy8gUmV2ZXJzZSBhZGQgYW5kIHJlbW92ZSBzbyByZW1vdmVzIGFyZSBvdXRwdXQgZmlyc3QgdG8gbWF0Y2ggY29tbW9uIGNvbnZlbnRpb25cbiAgICAgIC8vIFRoZSBkaWZmaW5nIGFsZ29yaXRobSBpcyB0aWVkIHRvIGFkZCB0aGVuIHJlbW92ZSBvdXRwdXQgYW5kIHRoaXMgaXMgdGhlIHNpbXBsZXN0XG4gICAgICAvLyByb3V0ZSB0byBnZXQgdGhlIGRlc2lyZWQgb3V0cHV0IHdpdGggbWluaW1hbCBvdmVyaGVhZC5cblxuICAgICAgaWYgKGNvbXBvbmVudFBvcyAmJiBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdLmFkZGVkKSB7XG4gICAgICAgIHZhciB0bXAgPSBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdO1xuICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudFBvcyAtIDFdID0gY29tcG9uZW50c1tjb21wb25lbnRQb3NdO1xuICAgICAgICBjb21wb25lbnRzW2NvbXBvbmVudFBvc10gPSB0bXA7XG4gICAgICB9XG4gICAgfVxuICB9IC8vIFNwZWNpYWwgY2FzZSBoYW5kbGUgZm9yIHdoZW4gb25lIHRlcm1pbmFsIGlzIGlnbm9yZWQgKGkuZS4gd2hpdGVzcGFjZSkuXG4gIC8vIEZvciB0aGlzIGNhc2Ugd2UgbWVyZ2UgdGhlIHRlcm1pbmFsIGludG8gdGhlIHByaW9yIHN0cmluZyBhbmQgZHJvcCB0aGUgY2hhbmdlLlxuICAvLyBUaGlzIGlzIG9ubHkgYXZhaWxhYmxlIGZvciBzdHJpbmcgbW9kZS5cblxuXG4gIHZhciBsYXN0Q29tcG9uZW50ID0gY29tcG9uZW50c1tjb21wb25lbnRMZW4gLSAxXTtcblxuICBpZiAoY29tcG9uZW50TGVuID4gMSAmJiB0eXBlb2YgbGFzdENvbXBvbmVudC52YWx1ZSA9PT0gJ3N0cmluZycgJiYgKGxhc3RDb21wb25lbnQuYWRkZWQgfHwgbGFzdENvbXBvbmVudC5yZW1vdmVkKSAmJiBkaWZmLmVxdWFscygnJywgbGFzdENvbXBvbmVudC52YWx1ZSkpIHtcbiAgICBjb21wb25lbnRzW2NvbXBvbmVudExlbiAtIDJdLnZhbHVlICs9IGxhc3RDb21wb25lbnQudmFsdWU7XG4gICAgY29tcG9uZW50cy5wb3AoKTtcbiAgfVxuXG4gIHJldHVybiBjb21wb25lbnRzO1xufVxuXG5mdW5jdGlvbiBjbG9uZVBhdGgocGF0aCkge1xuICByZXR1cm4ge1xuICAgIG5ld1BvczogcGF0aC5uZXdQb3MsXG4gICAgY29tcG9uZW50czogcGF0aC5jb21wb25lbnRzLnNsaWNlKDApXG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdabUwySmhjMlV1YW5NaVhTd2libUZ0WlhNaU9sc2lSR2xtWmlJc0luQnliM1J2ZEhsd1pTSXNJbVJwWm1ZaUxDSnZiR1JUZEhKcGJtY2lMQ0p1WlhkVGRISnBibWNpTENKdmNIUnBiMjV6SWl3aVkyRnNiR0poWTJzaUxDSnpaV3htSWl3aVpHOXVaU0lzSW5aaGJIVmxJaXdpYzJWMFZHbHRaVzkxZENJc0luVnVaR1ZtYVc1bFpDSXNJbU5oYzNSSmJuQjFkQ0lzSW5KbGJXOTJaVVZ0Y0hSNUlpd2lkRzlyWlc1cGVtVWlMQ0p1WlhkTVpXNGlMQ0pzWlc1bmRHZ2lMQ0p2YkdSTVpXNGlMQ0psWkdsMFRHVnVaM1JvSWl3aWJXRjRSV1JwZEV4bGJtZDBhQ0lzSWsxaGRHZ2lMQ0p0YVc0aUxDSmlaWE4wVUdGMGFDSXNJbTVsZDFCdmN5SXNJbU52YlhCdmJtVnVkSE1pTENKdmJHUlFiM01pTENKbGVIUnlZV04wUTI5dGJXOXVJaXdpYW05cGJpSXNJbU52ZFc1MElpd2laWGhsWTBWa2FYUk1aVzVuZEdnaUxDSmthV0ZuYjI1aGJGQmhkR2dpTENKaVlYTmxVR0YwYUNJc0ltRmtaRkJoZEdnaUxDSnlaVzF2ZG1WUVlYUm9JaXdpWTJGdVFXUmtJaXdpWTJGdVVtVnRiM1psSWl3aVkyeHZibVZRWVhSb0lpd2ljSFZ6YUVOdmJYQnZibVZ1ZENJc0ltSjFhV3hrVm1Gc2RXVnpJaXdpZFhObFRHOXVaMlZ6ZEZSdmEyVnVJaXdpWlhobFl5SXNJbkpsZENJc0ltRmtaR1ZrSWl3aWNtVnRiM1psWkNJc0lteGhjM1FpTENKd2RYTm9JaXdpWTI5dGJXOXVRMjkxYm5RaUxDSmxjWFZoYkhNaUxDSnNaV1owSWl3aWNtbG5hSFFpTENKamIyMXdZWEpoZEc5eUlpd2lhV2R1YjNKbFEyRnpaU0lzSW5SdlRHOTNaWEpEWVhObElpd2lZWEp5WVhraUxDSnBJaXdpYzNCc2FYUWlMQ0pqYUdGeWN5SXNJbU52YlhCdmJtVnVkRkJ2Y3lJc0ltTnZiWEJ2Ym1WdWRFeGxiaUlzSW1OdmJYQnZibVZ1ZENJc0luTnNhV05sSWl3aWJXRndJaXdpYjJ4a1ZtRnNkV1VpTENKMGJYQWlMQ0pzWVhOMFEyOXRjRzl1Wlc1MElpd2ljRzl3SWl3aWNHRjBhQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN08wRkJRV1VzVTBGQlUwRXNTVUZCVkN4SFFVRm5RaXhEUVVGRk96dEJRVVZxUTBFc1NVRkJTU3hEUVVGRFF5eFRRVUZNTEVkQlFXbENPMEZCUVVFN08wRkJRVUU3UVVGRFprTXNSVUZCUVVFc1NVRkVaU3huUWtGRFZrTXNVMEZFVlN4RlFVTkRReXhUUVVSRUxFVkJRekJDTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVdSRExFbEJRVUZCTEU5QlFXTXNkVVZCUVVvc1JVRkJTVHRCUVVOMlF5eFJRVUZKUXl4UlFVRlJMRWRCUVVkRUxFOUJRVThzUTBGQlEwTXNVVUZCZGtJN08wRkJRMEVzVVVGQlNTeFBRVUZQUkN4UFFVRlFMRXRCUVcxQ0xGVkJRWFpDTEVWQlFXMURPMEZCUTJwRFF5eE5RVUZCUVN4UlFVRlJMRWRCUVVkRUxFOUJRVmc3UVVGRFFVRXNUVUZCUVVFc1QwRkJUeXhIUVVGSExFVkJRVlk3UVVGRFJEczdRVUZEUkN4VFFVRkxRU3hQUVVGTUxFZEJRV1ZCTEU5QlFXWTdRVUZGUVN4UlFVRkpSU3hKUVVGSkxFZEJRVWNzU1VGQldEczdRVUZGUVN4aFFVRlRReXhKUVVGVUxFTkJRV05ETEV0QlFXUXNSVUZCY1VJN1FVRkRia0lzVlVGQlNVZ3NVVUZCU2l4RlFVRmpPMEZCUTFwSkxGRkJRVUZCTEZWQlFWVXNRMEZCUXl4WlFVRlhPMEZCUVVWS0xGVkJRVUZCTEZGQlFWRXNRMEZCUTBzc1UwRkJSQ3hGUVVGWlJpeExRVUZhTEVOQlFWSTdRVUZCTmtJc1UwRkJNME1zUlVGQk5rTXNRMEZCTjBNc1EwRkJWanRCUVVOQkxHVkJRVThzU1VGQlVEdEJRVU5FTEU5QlNFUXNUVUZIVHp0QlFVTk1MR1ZCUVU5QkxFdEJRVkE3UVVGRFJEdEJRVU5HTEV0QmFrSnpReXhEUVcxQ2RrTTdPenRCUVVOQlRpeEpRVUZCUVN4VFFVRlRMRWRCUVVjc1MwRkJTMU1zVTBGQlRDeERRVUZsVkN4VFFVRm1MRU5CUVZvN1FVRkRRVU1zU1VGQlFVRXNVMEZCVXl4SFFVRkhMRXRCUVV0UkxGTkJRVXdzUTBGQlpWSXNVMEZCWml4RFFVRmFPMEZCUlVGRUxFbEJRVUZCTEZOQlFWTXNSMEZCUnl4TFFVRkxWU3hYUVVGTUxFTkJRV2xDTEV0QlFVdERMRkZCUVV3c1EwRkJZMWdzVTBGQlpDeERRVUZxUWl4RFFVRmFPMEZCUTBGRExFbEJRVUZCTEZOQlFWTXNSMEZCUnl4TFFVRkxVeXhYUVVGTUxFTkJRV2xDTEV0QlFVdERMRkZCUVV3c1EwRkJZMVlzVTBGQlpDeERRVUZxUWl4RFFVRmFPMEZCUlVFc1VVRkJTVmNzVFVGQlRTeEhRVUZIV0N4VFFVRlRMRU5CUVVOWkxFMUJRWFpDTzBGQlFVRXNVVUZCSzBKRExFMUJRVTBzUjBGQlIyUXNVMEZCVXl4RFFVRkRZU3hOUVVGc1JEdEJRVU5CTEZGQlFVbEZMRlZCUVZVc1IwRkJSeXhEUVVGcVFqdEJRVU5CTEZGQlFVbERMR0ZCUVdFc1IwRkJSMG9zVFVGQlRTeEhRVUZIUlN4TlFVRTNRanM3UVVGRFFTeFJRVUZIV2l4UFFVRlBMRU5CUVVOakxHRkJRVmdzUlVGQk1FSTdRVUZEZUVKQkxFMUJRVUZCTEdGQlFXRXNSMEZCUjBNc1NVRkJTU3hEUVVGRFF5eEhRVUZNTEVOQlFWTkdMR0ZCUVZRc1JVRkJkMEprTEU5QlFVOHNRMEZCUTJNc1lVRkJhRU1zUTBGQmFFSTdRVUZEUkRzN1FVRkZSQ3hSUVVGSlJ5eFJRVUZSTEVkQlFVY3NRMEZCUXp0QlFVRkZReXhOUVVGQlFTeE5RVUZOTEVWQlFVVXNRMEZCUXl4RFFVRllPMEZCUVdORExFMUJRVUZCTEZWQlFWVXNSVUZCUlR0QlFVRXhRaXhMUVVGRUxFTkJRV1lzUTBGcVEzVkRMRU5CYlVOMlF6czdRVUZEUVN4UlFVRkpReXhOUVVGTkxFZEJRVWNzUzBGQlMwTXNZVUZCVEN4RFFVRnRRa29zVVVGQlVTeERRVUZETEVOQlFVUXNRMEZCTTBJc1JVRkJaME5zUWl4VFFVRm9ReXhGUVVFeVEwUXNVMEZCTTBNc1JVRkJjMFFzUTBGQmRFUXNRMEZCWWpzN1FVRkRRU3hSUVVGSmJVSXNVVUZCVVN4RFFVRkRMRU5CUVVRc1EwRkJVaXhEUVVGWlF5eE5RVUZhTEVkQlFYRkNMRU5CUVhKQ0xFbEJRVEJDVWl4TlFVRXhRaXhKUVVGdlExVXNUVUZCVFN4SFFVRkhMRU5CUVZRc1NVRkJZMUlzVFVGQmRFUXNSVUZCT0VRN1FVRkROVVE3UVVGRFFTeGhRVUZQVkN4SlFVRkpMRU5CUVVNc1EwRkJRenRCUVVGRFF5eFJRVUZCUVN4TFFVRkxMRVZCUVVVc1MwRkJTMnRDTEVsQlFVd3NRMEZCVlhaQ0xGTkJRVllzUTBGQlVqdEJRVUU0UW5kQ0xGRkJRVUZCTEV0QlFVc3NSVUZCUlhoQ0xGTkJRVk1zUTBGQlExazdRVUZCTDBNc1QwRkJSQ3hEUVVGRUxFTkJRVmc3UVVGRFJDeExRWGhEYzBNc1EwRXdRM1pET3pzN1FVRkRRU3hoUVVGVFlTeGpRVUZVTEVkQlFUQkNPMEZCUTNoQ0xGZEJRVXNzU1VGQlNVTXNXVUZCV1N4SFFVRkhMRU5CUVVNc1EwRkJSQ3hIUVVGTFdpeFZRVUUzUWl4RlFVRjVRMWtzV1VGQldTeEpRVUZKV2l4VlFVRjZSQ3hGUVVGeFJWa3NXVUZCV1N4SlFVRkpMRU5CUVhKR0xFVkJRWGRHTzBGQlEzUkdMRmxCUVVsRExGRkJRVkU3UVVGQlFUdEJRVUZCTzBGQlFWbzdRVUZCUVRzN1FVRkRRU3haUVVGSlF5eFBRVUZQTEVkQlFVZFdMRkZCUVZFc1EwRkJRMUVzV1VGQldTeEhRVUZITEVOQlFXaENMRU5CUVhSQ08wRkJRVUVzV1VGRFNVY3NWVUZCVlN4SFFVRkhXQ3hSUVVGUkxFTkJRVU5STEZsQlFWa3NSMEZCUnl4RFFVRm9RaXhEUVVSNlFqdEJRVUZCTEZsQlJVbE1MRTlCUVUwc1IwRkJSeXhEUVVGRFVTeFZRVUZWTEVkQlFVZEJMRlZCUVZVc1EwRkJRMVlzVFVGQlpDeEhRVUYxUWl4RFFVRnNReXhKUVVGMVEwOHNXVUZHY0VRN08wRkJSMEVzV1VGQlNVVXNUMEZCU2l4RlFVRmhPMEZCUTFnN1FVRkRRVllzVlVGQlFVRXNVVUZCVVN4RFFVRkRVU3haUVVGWkxFZEJRVWNzUTBGQmFFSXNRMEZCVWl4SFFVRTJRbTVDTEZOQlFUZENPMEZCUTBRN08wRkJSVVFzV1VGQlNYVkNMRTFCUVUwc1IwRkJSMFlzVDBGQlR5eEpRVUZKUVN4UFFVRlBMRU5CUVVOVUxFMUJRVklzUjBGQmFVSXNRMEZCYWtJc1IwRkJjVUpTTEUxQlFUZERPMEZCUVVFc1dVRkRTVzlDTEZOQlFWTXNSMEZCUjBZc1ZVRkJWU3hKUVVGSkxFdEJRVXRTTEU5QlFXNUNMRWxCUVRaQ1FTeFBRVUZOTEVkQlFVZFNMRTFCUkhSRU96dEJRVVZCTEZsQlFVa3NRMEZCUTJsQ0xFMUJRVVFzU1VGQlZ5eERRVUZEUXl4VFFVRm9RaXhGUVVFeVFqdEJRVU42UWp0QlFVTkJZaXhWUVVGQlFTeFJRVUZSTEVOQlFVTlJMRmxCUVVRc1EwRkJVaXhIUVVGNVFtNUNMRk5CUVhwQ08wRkJRMEU3UVVGRFJDeFRRV2hDY1VZc1EwRnJRblJHTzBGQlEwRTdRVUZEUVRzN08wRkJRMEVzV1VGQlNTeERRVUZEZFVJc1RVRkJSQ3hKUVVGWlF5eFRRVUZUTEVsQlFVbElMRTlCUVU4c1EwRkJRMVFzVFVGQlVpeEhRVUZwUWxVc1ZVRkJWU3hEUVVGRFZpeE5RVUY2UkN4RlFVRnJSVHRCUVVOb1JWRXNWVUZCUVVFc1VVRkJVU3hIUVVGSFN5eFRRVUZUTEVOQlFVTklMRlZCUVVRc1EwRkJjRUk3UVVGRFFURkNMRlZCUVVGQkxFbEJRVWtzUTBGQlF6aENMR0ZCUVV3c1EwRkJiVUpPTEZGQlFWRXNRMEZCUTFBc1ZVRkJOVUlzUlVGQmQwTmlMRk5CUVhoRExFVkJRVzFFTEVsQlFXNUVPMEZCUTBRc1UwRklSQ3hOUVVkUE8wRkJRMHh2UWl4VlFVRkJRU3hSUVVGUkxFZEJRVWRETEU5QlFWZ3NRMEZFU3l4RFFVTmxPenRCUVVOd1FrUXNWVUZCUVVFc1VVRkJVU3hEUVVGRFVpeE5RVUZVTzBGQlEwRm9RaXhWUVVGQlFTeEpRVUZKTEVOQlFVTTRRaXhoUVVGTUxFTkJRVzFDVGl4UlFVRlJMRU5CUVVOUUxGVkJRVFZDTEVWQlFYZERMRWxCUVhoRExFVkJRVGhEWWl4VFFVRTVRenRCUVVORU96dEJRVVZFWXl4UlFVRkJRU3hQUVVGTkxFZEJRVWRzUWl4SlFVRkpMRU5CUVVOdFFpeGhRVUZNTEVOQlFXMUNTeXhSUVVGdVFpeEZRVUUyUWpOQ0xGTkJRVGRDTEVWQlFYZERSQ3hUUVVGNFF5eEZRVUZ0UkRKQ0xGbEJRVzVFTEVOQlFWUXNRMEU1UW5OR0xFTkJaME4wUmpzN1FVRkRRU3haUVVGSlF5eFJRVUZSTEVOQlFVTlNMRTFCUVZRc1IwRkJhMElzUTBGQmJFSXNTVUZCZFVKU0xFMUJRWFpDTEVsQlFXbERWU3hQUVVGTkxFZEJRVWNzUTBGQlZDeEpRVUZqVWl4TlFVRnVSQ3hGUVVFeVJEdEJRVU42UkN4cFFrRkJUMVFzU1VGQlNTeERRVUZET0VJc1YwRkJWeXhEUVVGREwwSXNTVUZCUkN4RlFVRlBkMElzVVVGQlVTeERRVUZEVUN4VlFVRm9RaXhGUVVFMFFuQkNMRk5CUVRWQ0xFVkJRWFZEUkN4VFFVRjJReXhGUVVGclJFa3NTVUZCU1N4RFFVRkRaME1zWlVGQmRrUXNRMEZCV2l4RFFVRllPMEZCUTBRc1UwRkdSQ3hOUVVWUE8wRkJRMHc3UVVGRFFXcENMRlZCUVVGQkxGRkJRVkVzUTBGQlExRXNXVUZCUkN4RFFVRlNMRWRCUVhsQ1F5eFJRVUY2UWp0QlFVTkVPMEZCUTBZN08wRkJSVVJpTEUxQlFVRkJMRlZCUVZVN1FVRkRXQ3hMUVhSR2MwTXNRMEYzUm5aRE8wRkJRMEU3UVVGRFFUdEJRVU5CT3pzN1FVRkRRU3hSUVVGSldpeFJRVUZLTEVWQlFXTTdRVUZEV0N4blFrRkJVMnRETEVsQlFWUXNSMEZCWjBJN1FVRkRaamxDTEZGQlFVRkJMRlZCUVZVc1EwRkJReXhaUVVGWE8wRkJRM0JDTEdOQlFVbFJMRlZCUVZVc1IwRkJSME1zWVVGQmFrSXNSVUZCWjBNN1FVRkRPVUlzYlVKQlFVOWlMRkZCUVZFc1JVRkJaanRCUVVORU96dEJRVVZFTEdOQlFVa3NRMEZCUTNWQ0xHTkJRV01zUlVGQmJrSXNSVUZCZFVJN1FVRkRja0pYTEZsQlFVRkJMRWxCUVVrN1FVRkRURHRCUVVOR0xGTkJVbE1zUlVGUlVDeERRVkpQTEVOQlFWWTdRVUZUUkN4UFFWWkJMRWRCUVVRN1FVRlhSQ3hMUVZwRUxFMUJXVTg3UVVGRFRDeGhRVUZQZEVJc1ZVRkJWU3hKUVVGSlF5eGhRVUZ5UWl4RlFVRnZRenRCUVVOc1F5eFpRVUZKYzBJc1IwRkJSeXhIUVVGSFdpeGpRVUZqTEVWQlFYaENPenRCUVVOQkxGbEJRVWxaTEVkQlFVb3NSVUZCVXp0QlFVTlFMR2xDUVVGUFFTeEhRVUZRTzBGQlEwUTdRVUZEUmp0QlFVTkdPMEZCUTBZc1IwRnFTR003TzBGQlFVRTdPMEZCUVVFN1FVRnRTR1pLTEVWQlFVRkJMR0ZCYmtobExIbENRVzFJUkdJc1ZVRnVTRU1zUlVGdFNGZHJRaXhMUVc1SVdDeEZRVzFJYTBKRExFOUJia2hzUWl4RlFXMUlNa0k3UVVGRGVFTXNVVUZCU1VNc1NVRkJTU3hIUVVGSGNFSXNWVUZCVlN4RFFVRkRRU3hWUVVGVkxFTkJRVU5TTEUxQlFWZ3NSMEZCYjBJc1EwRkJja0lzUTBGQmNrSTdPMEZCUTBFc1VVRkJTVFJDTEVsQlFVa3NTVUZCU1VFc1NVRkJTU3hEUVVGRFJpeExRVUZNTEV0QlFXVkJMRXRCUVhaQ0xFbEJRV2REUlN4SlFVRkpMRU5CUVVORUxFOUJRVXdzUzBGQmFVSkJMRTlCUVhKRUxFVkJRVGhFTzBGQlF6VkVPMEZCUTBFN1FVRkRRVzVDTEUxQlFVRkJMRlZCUVZVc1EwRkJRMEVzVlVGQlZTeERRVUZEVWl4TlFVRllMRWRCUVc5Q0xFTkJRWEpDTEVOQlFWWXNSMEZCYjBNN1FVRkJRMWtzVVVGQlFVRXNTMEZCU3l4RlFVRkZaMElzU1VGQlNTeERRVUZEYUVJc1MwRkJUQ3hIUVVGaExFTkJRWEpDTzBGQlFYZENZeXhSUVVGQlFTeExRVUZMTEVWQlFVVkJMRXRCUVM5Q08wRkJRWE5EUXl4UlFVRkJRU3hQUVVGUExFVkJRVVZCTzBGQlFTOURMRTlCUVhCRE8wRkJRMFFzUzBGS1JDeE5RVWxQTzBGQlEweHVRaXhOUVVGQlFTeFZRVUZWTEVOQlFVTnhRaXhKUVVGWUxFTkJRV2RDTzBGQlFVTnFRaXhSUVVGQlFTeExRVUZMTEVWQlFVVXNRMEZCVWp0QlFVRlhZeXhSUVVGQlFTeExRVUZMTEVWQlFVVkJMRXRCUVd4Q08wRkJRWGxDUXl4UlFVRkJRU3hQUVVGUExFVkJRVVZCTzBGQlFXeERMRTlCUVdoQ08wRkJRMFE3UVVGRFJpeEhRVFZJWXpzN1FVRkJRVHM3UVVGQlFUdEJRVFpJWm1wQ0xFVkJRVUZCTEdGQk4waGxMSGxDUVRaSVJFc3NVVUUzU0VNc1JVRTJTRk16UWl4VFFUZElWQ3hGUVRaSWIwSkVMRk5CTjBod1FpeEZRVFpJSzBJeVFpeFpRVGRJTDBJc1JVRTJTRFpETzBGQlF6RkVMRkZCUVVsbUxFMUJRVTBzUjBGQlIxZ3NVMEZCVXl4RFFVRkRXU3hOUVVGMlFqdEJRVUZCTEZGQlEwbERMRTFCUVUwc1IwRkJSMlFzVTBGQlV5eERRVUZEWVN4TlFVUjJRanRCUVVGQkxGRkJSVWxQTEUxQlFVMHNSMEZCUjFFc1VVRkJVU3hEUVVGRFVpeE5RVVowUWp0QlFVRkJMRkZCUjBsRkxFMUJRVTBzUjBGQlIwWXNUVUZCVFN4SFFVRkhUeXhaUVVoMFFqdEJRVUZCTEZGQlMwbG5RaXhYUVVGWExFZEJRVWNzUTBGTWJFSTdPMEZCVFVFc1YwRkJUM1pDTEUxQlFVMHNSMEZCUnl4RFFVRlVMRWRCUVdGU0xFMUJRV0lzU1VGQmRVSlZMRTFCUVUwc1IwRkJSeXhEUVVGVUxFZEJRV0ZTTEUxQlFYQkRMRWxCUVRoRExFdEJRVXM0UWl4TlFVRk1MRU5CUVZrelF5eFRRVUZUTEVOQlFVTnRRaXhOUVVGTkxFZEJRVWNzUTBGQlZpeERRVUZ5UWl4RlFVRnRRM0JDTEZOQlFWTXNRMEZCUTNOQ0xFMUJRVTBzUjBGQlJ5eERRVUZXTEVOQlFUVkRMRU5CUVhKRUxFVkJRV2RJTzBGQlF6bEhSaXhOUVVGQlFTeE5RVUZOTzBGQlEwNUZMRTFCUVVGQkxFMUJRVTA3UVVGRFRuRkNMRTFCUVVGQkxGZEJRVmM3UVVGRFdqczdRVUZGUkN4UlFVRkpRU3hYUVVGS0xFVkJRV2xDTzBGQlEyWm1MRTFCUVVGQkxGRkJRVkVzUTBGQlExQXNWVUZCVkN4RFFVRnZRbkZDTEVsQlFYQkNMRU5CUVhsQ08wRkJRVU5xUWl4UlFVRkJRU3hMUVVGTExFVkJRVVZyUWp0QlFVRlNMRTlCUVhwQ08wRkJRMFE3TzBGQlJVUm1MRWxCUVVGQkxGRkJRVkVzUTBGQlExSXNUVUZCVkN4SFFVRnJRa0VzVFVGQmJFSTdRVUZEUVN4WFFVRlBSU3hOUVVGUU8wRkJRMFFzUjBGb1NtTTdPMEZCUVVFN08wRkJRVUU3UVVGclNtWnpRaXhGUVVGQlFTeE5RV3hLWlN4clFrRnJTbEpETEVsQmJFcFJMRVZCYTBwR1F5eExRV3hLUlN4RlFXdEtTenRCUVVOc1FpeFJRVUZKTEV0QlFVczFReXhQUVVGTUxFTkJRV0UyUXl4VlFVRnFRaXhGUVVFMlFqdEJRVU16UWl4aFFVRlBMRXRCUVVzM1F5eFBRVUZNTEVOQlFXRTJReXhWUVVGaUxFTkJRWGRDUml4SlFVRjRRaXhGUVVFNFFrTXNTMEZCT1VJc1EwRkJVRHRCUVVORUxFdEJSa1FzVFVGRlR6dEJRVU5NTEdGQlFVOUVMRWxCUVVrc1MwRkJTME1zUzBGQlZDeEpRVU5FTEV0QlFVczFReXhQUVVGTUxFTkJRV0U0UXl4VlFVRmlMRWxCUVRKQ1NDeEpRVUZKTEVOQlFVTkpMRmRCUVV3c1QwRkJkVUpJTEV0QlFVc3NRMEZCUTBjc1YwRkJUaXhGUVVSNFJEdEJRVVZFTzBGQlEwWXNSMEY2U21NN08wRkJRVUU3TzBGQlFVRTdRVUV3U21aMlF5eEZRVUZCUVN4WFFURktaU3gxUWtFd1NraDNReXhMUVRGS1J5eEZRVEJLU1R0QlFVTnFRaXhSUVVGSldpeEhRVUZITEVkQlFVY3NSVUZCVmpzN1FVRkRRU3hUUVVGTExFbEJRVWxoTEVOQlFVTXNSMEZCUnl4RFFVRmlMRVZCUVdkQ1FTeERRVUZETEVkQlFVZEVMRXRCUVVzc1EwRkJRM0pETEUxQlFURkNMRVZCUVd0RGMwTXNRMEZCUXl4RlFVRnVReXhGUVVGMVF6dEJRVU55UXl4VlFVRkpSQ3hMUVVGTExFTkJRVU5ETEVOQlFVUXNRMEZCVkN4RlFVRmpPMEZCUTFwaUxGRkJRVUZCTEVkQlFVY3NRMEZCUTBrc1NVRkJTaXhEUVVGVFVTeExRVUZMTEVOQlFVTkRMRU5CUVVRc1EwRkJaRHRCUVVORU8wRkJRMFk3TzBGQlEwUXNWMEZCVDJJc1IwRkJVRHRCUVVORUxFZEJiRXRqT3p0QlFVRkJPenRCUVVGQk8wRkJiVXRtTjBJc1JVRkJRVUVzVTBGdVMyVXNjVUpCYlV0TVNDeExRVzVMU3l4RlFXMUxSVHRCUVVObUxGZEJRVTlCTEV0QlFWQTdRVUZEUkN4SFFYSkxZenM3UVVGQlFUczdRVUZCUVR0QlFYTkxaa3NzUlVGQlFVRXNVVUYwUzJVc2IwSkJjMHRPVEN4TFFYUkxUU3hGUVhOTFF6dEJRVU5rTEZkQlFVOUJMRXRCUVVzc1EwRkJRemhETEV0QlFVNHNRMEZCV1N4RlFVRmFMRU5CUVZBN1FVRkRSQ3hIUVhoTFl6czdRVUZCUVRzN1FVRkJRVHRCUVhsTFpqVkNMRVZCUVVGQkxFbEJla3RsTEdkQ1FYbExWalpDTEV0QmVrdFZMRVZCZVV0SU8wRkJRMVlzVjBGQlQwRXNTMEZCU3l4RFFVRkROMElzU1VGQlRpeERRVUZYTEVWQlFWZ3NRMEZCVUR0QlFVTkVPMEZCTTB0akxFTkJRV3BDT3p0QlFUaExRU3hUUVVGVFZ5eFhRVUZVTEVOQlFYRkNjRU1zU1VGQmNrSXNSVUZCTWtKelFpeFZRVUV6UWl4RlFVRjFRM0JDTEZOQlFYWkRMRVZCUVd0RVJDeFRRVUZzUkN4RlFVRTJSRzlETEdWQlFUZEVMRVZCUVRoRk8wRkJRelZGTEUxQlFVbHJRaXhaUVVGWkxFZEJRVWNzUTBGQmJrSTdRVUZCUVN4TlFVTkpReXhaUVVGWkxFZEJRVWRzUXl4VlFVRlZMRU5CUVVOU0xFMUJSRGxDTzBGQlFVRXNUVUZGU1U4c1RVRkJUU3hIUVVGSExFTkJSbUk3UVVGQlFTeE5RVWRKUlN4TlFVRk5MRWRCUVVjc1EwRklZanM3UVVGTFFTeFRRVUZQWjBNc1dVRkJXU3hIUVVGSFF5eFpRVUYwUWl4RlFVRnZRMFFzV1VGQldTeEZRVUZvUkN4RlFVRnZSRHRCUVVOc1JDeFJRVUZKUlN4VFFVRlRMRWRCUVVkdVF5eFZRVUZWTEVOQlFVTnBReXhaUVVGRUxFTkJRVEZDT3p0QlFVTkJMRkZCUVVrc1EwRkJRMFVzVTBGQlV5eERRVUZEYUVJc1QwRkJaaXhGUVVGM1FqdEJRVU4wUWl4VlFVRkpMRU5CUVVOblFpeFRRVUZUTEVOQlFVTnFRaXhMUVVGWUxFbEJRVzlDU0N4bFFVRjRRaXhGUVVGNVF6dEJRVU4yUXl4WlFVRkpPVUlzUzBGQlN5eEhRVUZIVEN4VFFVRlRMRU5CUVVOM1JDeExRVUZXTEVOQlFXZENja01zVFVGQmFFSXNSVUZCZDBKQkxFMUJRVTBzUjBGQlIyOURMRk5CUVZNc1EwRkJReTlDTEV0QlFUTkRMRU5CUVZvN1FVRkRRVzVDTEZGQlFVRkJMRXRCUVVzc1IwRkJSMEVzUzBGQlN5eERRVUZEYjBRc1IwRkJUaXhEUVVGVkxGVkJRVk53UkN4TFFVRlVMRVZCUVdkQ05rTXNRMEZCYUVJc1JVRkJiVUk3UVVGRGJrTXNZMEZCU1ZFc1VVRkJVU3hIUVVGSE0wUXNVMEZCVXl4RFFVRkRjMElzVFVGQlRTeEhRVUZITmtJc1EwRkJWaXhEUVVGNFFqdEJRVU5CTEdsQ1FVRlBVU3hSUVVGUkxFTkJRVU01UXl4TlFVRlVMRWRCUVd0Q1VDeExRVUZMTEVOQlFVTlBMRTFCUVhoQ0xFZEJRV2xET0VNc1VVRkJha01zUjBGQk5FTnlSQ3hMUVVGdVJEdEJRVU5FTEZOQlNFOHNRMEZCVWp0QlFVdEJhMFFzVVVGQlFVRXNVMEZCVXl4RFFVRkRiRVFzUzBGQlZpeEhRVUZyUWxBc1NVRkJTU3hEUVVGRGVVSXNTVUZCVEN4RFFVRlZiRUlzUzBGQlZpeERRVUZzUWp0QlFVTkVMRTlCVWtRc1RVRlJUenRCUVVOTWEwUXNVVUZCUVVFc1UwRkJVeXhEUVVGRGJFUXNTMEZCVml4SFFVRnJRbEFzU1VGQlNTeERRVUZEZVVJc1NVRkJUQ3hEUVVGVmRrSXNVMEZCVXl4RFFVRkRkMFFzUzBGQlZpeERRVUZuUW5KRExFMUJRV2hDTEVWQlFYZENRU3hOUVVGTkxFZEJRVWR2UXl4VFFVRlRMRU5CUVVNdlFpeExRVUV6UXl4RFFVRldMRU5CUVd4Q08wRkJRMFE3TzBGQlEwUk1MRTFCUVVGQkxFMUJRVTBzU1VGQlNXOURMRk5CUVZNc1EwRkJReTlDTEV0QlFYQkNMRU5CV25OQ0xFTkJZM1JDT3p0QlFVTkJMRlZCUVVrc1EwRkJReXRDTEZOQlFWTXNRMEZCUTJwQ0xFdEJRV1lzUlVGQmMwSTdRVUZEY0VKcVFpeFJRVUZCUVN4TlFVRk5MRWxCUVVsclF5eFRRVUZUTEVOQlFVTXZRaXhMUVVGd1FqdEJRVU5FTzBGQlEwWXNTMEZzUWtRc1RVRnJRazg3UVVGRFRDdENMRTFCUVVGQkxGTkJRVk1zUTBGQlEyeEVMRXRCUVZZc1IwRkJhMEpRTEVsQlFVa3NRMEZCUTNsQ0xFbEJRVXdzUTBGQlZYaENMRk5CUVZNc1EwRkJRM2xFTEV0QlFWWXNRMEZCWjBKdVF5eE5RVUZvUWl4RlFVRjNRa0VzVFVGQlRTeEhRVUZIYTBNc1UwRkJVeXhEUVVGREwwSXNTMEZCTTBNc1EwRkJWaXhEUVVGc1FqdEJRVU5CU0N4TlFVRkJRU3hOUVVGTkxFbEJRVWxyUXl4VFFVRlRMRU5CUVVNdlFpeExRVUZ3UWl4RFFVWkxMRU5CU1V3N1FVRkRRVHRCUVVOQk96dEJRVU5CTEZWQlFVazJRaXhaUVVGWkxFbEJRVWxxUXl4VlFVRlZMRU5CUVVOcFF5eFpRVUZaTEVkQlFVY3NRMEZCYUVJc1EwRkJWaXhEUVVFMlFtWXNTMEZCYWtRc1JVRkJkMFE3UVVGRGRFUXNXVUZCU1hGQ0xFZEJRVWNzUjBGQlIzWkRMRlZCUVZVc1EwRkJRMmxETEZsQlFWa3NSMEZCUnl4RFFVRm9RaXhEUVVGd1FqdEJRVU5CYWtNc1VVRkJRVUVzVlVGQlZTeERRVUZEYVVNc1dVRkJXU3hIUVVGSExFTkJRV2hDTEVOQlFWWXNSMEZCSzBKcVF5eFZRVUZWTEVOQlFVTnBReXhaUVVGRUxFTkJRWHBETzBGQlEwRnFReXhSUVVGQlFTeFZRVUZWTEVOQlFVTnBReXhaUVVGRUxFTkJRVllzUjBGQk1rSk5MRWRCUVROQ08wRkJRMFE3UVVGRFJqdEJRVU5HTEVkQmRrTXlSU3hEUVhsRE5VVTdRVUZEUVR0QlFVTkJPenM3UVVGRFFTeE5RVUZKUXl4aFFVRmhMRWRCUVVkNFF5eFZRVUZWTEVOQlFVTnJReXhaUVVGWkxFZEJRVWNzUTBGQmFFSXNRMEZCT1VJN08wRkJRMEVzVFVGQlNVRXNXVUZCV1N4SFFVRkhMRU5CUVdZc1NVRkRSeXhQUVVGUFRTeGhRVUZoTEVOQlFVTjJSQ3hMUVVGeVFpeExRVUVyUWl4UlFVUnNReXhMUVVWSmRVUXNZVUZCWVN4RFFVRkRkRUlzUzBGQlpDeEpRVUYxUW5OQ0xHRkJRV0VzUTBGQlEzSkNMRTlCUm5wRExFdEJSMGQ2UXl4SlFVRkpMRU5CUVVNMlF5eE5RVUZNTEVOQlFWa3NSVUZCV2l4RlFVRm5RbWxDTEdGQlFXRXNRMEZCUTNaRUxFdEJRVGxDTEVOQlNGQXNSVUZITmtNN1FVRkRNME5sTEVsQlFVRkJMRlZCUVZVc1EwRkJRMnRETEZsQlFWa3NSMEZCUnl4RFFVRm9RaXhEUVVGV0xFTkJRVFpDYWtRc1MwRkJOMElzU1VGQmMwTjFSQ3hoUVVGaExFTkJRVU4yUkN4TFFVRndSRHRCUVVOQlpTeEpRVUZCUVN4VlFVRlZMRU5CUVVONVF5eEhRVUZZTzBGQlEwUTdPMEZCUlVRc1UwRkJUM3BETEZWQlFWQTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFdTeFRRVUZVTEVOQlFXMUNPRUlzU1VGQmJrSXNSVUZCZVVJN1FVRkRka0lzVTBGQlR6dEJRVUZGTTBNc1NVRkJRVUVzVFVGQlRTeEZRVUZGTWtNc1NVRkJTU3hEUVVGRE0wTXNUVUZCWmp0QlFVRjFRa01zU1VGQlFVRXNWVUZCVlN4RlFVRkZNRU1zU1VGQlNTeERRVUZETVVNc1ZVRkJUQ3hEUVVGblFtOURMRXRCUVdoQ0xFTkJRWE5DTEVOQlFYUkNPMEZCUVc1RExFZEJRVkE3UVVGRFJDSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUlFUnBabVlvS1NCN2ZWeHVYRzVFYVdabUxuQnliM1J2ZEhsd1pTQTlJSHRjYmlBZ1pHbG1aaWh2YkdSVGRISnBibWNzSUc1bGQxTjBjbWx1Wnl3Z2IzQjBhVzl1Y3lBOUlIdDlLU0I3WEc0Z0lDQWdiR1YwSUdOaGJHeGlZV05ySUQwZ2IzQjBhVzl1Y3k1allXeHNZbUZqYXp0Y2JpQWdJQ0JwWmlBb2RIbHdaVzltSUc5d2RHbHZibk1nUFQwOUlDZG1kVzVqZEdsdmJpY3BJSHRjYmlBZ0lDQWdJR05oYkd4aVlXTnJJRDBnYjNCMGFXOXVjenRjYmlBZ0lDQWdJRzl3ZEdsdmJuTWdQU0I3ZlR0Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1dmNIUnBiMjV6SUQwZ2IzQjBhVzl1Y3p0Y2JseHVJQ0FnSUd4bGRDQnpaV3htSUQwZ2RHaHBjenRjYmx4dUlDQWdJR1oxYm1OMGFXOXVJR1J2Ym1Vb2RtRnNkV1VwSUh0Y2JpQWdJQ0FnSUdsbUlDaGpZV3hzWW1GamF5a2dlMXh1SUNBZ0lDQWdJQ0J6WlhSVWFXMWxiM1YwS0daMWJtTjBhVzl1S0NrZ2V5QmpZV3hzWW1GamF5aDFibVJsWm1sdVpXUXNJSFpoYkhWbEtUc2dmU3dnTUNrN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNBZ0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDQWdjbVYwZFhKdUlIWmhiSFZsTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUVGc2JHOTNJSE4xWW1Oc1lYTnpaWE1nZEc4Z2JXRnpjMkZuWlNCMGFHVWdhVzV3ZFhRZ2NISnBiM0lnZEc4Z2NuVnVibWx1WjF4dUlDQWdJRzlzWkZOMGNtbHVaeUE5SUhSb2FYTXVZMkZ6ZEVsdWNIVjBLRzlzWkZOMGNtbHVaeWs3WEc0Z0lDQWdibVYzVTNSeWFXNW5JRDBnZEdocGN5NWpZWE4wU1c1d2RYUW9ibVYzVTNSeWFXNW5LVHRjYmx4dUlDQWdJRzlzWkZOMGNtbHVaeUE5SUhSb2FYTXVjbVZ0YjNabFJXMXdkSGtvZEdocGN5NTBiMnRsYm1sNlpTaHZiR1JUZEhKcGJtY3BLVHRjYmlBZ0lDQnVaWGRUZEhKcGJtY2dQU0IwYUdsekxuSmxiVzkyWlVWdGNIUjVLSFJvYVhNdWRHOXJaVzVwZW1Vb2JtVjNVM1J5YVc1bktTazdYRzVjYmlBZ0lDQnNaWFFnYm1WM1RHVnVJRDBnYm1WM1UzUnlhVzVuTG14bGJtZDBhQ3dnYjJ4a1RHVnVJRDBnYjJ4a1UzUnlhVzVuTG14bGJtZDBhRHRjYmlBZ0lDQnNaWFFnWldScGRFeGxibWQwYUNBOUlERTdYRzRnSUNBZ2JHVjBJRzFoZUVWa2FYUk1aVzVuZEdnZ1BTQnVaWGRNWlc0Z0t5QnZiR1JNWlc0N1hHNGdJQ0FnYVdZb2IzQjBhVzl1Y3k1dFlYaEZaR2wwVEdWdVozUm9LU0I3WEc0Z0lDQWdJQ0J0WVhoRlpHbDBUR1Z1WjNSb0lEMGdUV0YwYUM1dGFXNG9iV0Y0UldScGRFeGxibWQwYUN3Z2IzQjBhVzl1Y3k1dFlYaEZaR2wwVEdWdVozUm9LVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnNaWFFnWW1WemRGQmhkR2dnUFNCYmV5QnVaWGRRYjNNNklDMHhMQ0JqYjIxd2IyNWxiblJ6T2lCYlhTQjlYVHRjYmx4dUlDQWdJQzh2SUZObFpXUWdaV1JwZEV4bGJtZDBhQ0E5SURBc0lHa3VaUzRnZEdobElHTnZiblJsYm5RZ2MzUmhjblJ6SUhkcGRHZ2dkR2hsSUhOaGJXVWdkbUZzZFdWelhHNGdJQ0FnYkdWMElHOXNaRkJ2Y3lBOUlIUm9hWE11WlhoMGNtRmpkRU52YlcxdmJpaGlaWE4wVUdGMGFGc3dYU3dnYm1WM1UzUnlhVzVuTENCdmJHUlRkSEpwYm1jc0lEQXBPMXh1SUNBZ0lHbG1JQ2hpWlhOMFVHRjBhRnN3WFM1dVpYZFFiM01nS3lBeElENDlJRzVsZDB4bGJpQW1KaUJ2YkdSUWIzTWdLeUF4SUQ0OUlHOXNaRXhsYmlrZ2UxeHVJQ0FnSUNBZ0x5OGdTV1JsYm5ScGRIa2djR1Z5SUhSb1pTQmxjWFZoYkdsMGVTQmhibVFnZEc5clpXNXBlbVZ5WEc0Z0lDQWdJQ0J5WlhSMWNtNGdaRzl1WlNoYmUzWmhiSFZsT2lCMGFHbHpMbXB2YVc0b2JtVjNVM1J5YVc1bktTd2dZMjkxYm5RNklHNWxkMU4wY21sdVp5NXNaVzVuZEdoOVhTazdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdUV0ZwYmlCM2IzSnJaWElnYldWMGFHOWtMaUJqYUdWamEzTWdZV3hzSUhCbGNtMTFkR0YwYVc5dWN5QnZaaUJoSUdkcGRtVnVJR1ZrYVhRZ2JHVnVaM1JvSUdadmNpQmhZMk5sY0hSaGJtTmxMbHh1SUNBZ0lHWjFibU4wYVc5dUlHVjRaV05GWkdsMFRHVnVaM1JvS0NrZ2UxeHVJQ0FnSUNBZ1ptOXlJQ2hzWlhRZ1pHbGhaMjl1WVd4UVlYUm9JRDBnTFRFZ0tpQmxaR2wwVEdWdVozUm9PeUJrYVdGbmIyNWhiRkJoZEdnZ1BEMGdaV1JwZEV4bGJtZDBhRHNnWkdsaFoyOXVZV3hRWVhSb0lDczlJRElwSUh0Y2JpQWdJQ0FnSUNBZ2JHVjBJR0poYzJWUVlYUm9PMXh1SUNBZ0lDQWdJQ0JzWlhRZ1lXUmtVR0YwYUNBOUlHSmxjM1JRWVhSb1cyUnBZV2R2Ym1Gc1VHRjBhQ0F0SURGZExGeHVJQ0FnSUNBZ0lDQWdJQ0FnY21WdGIzWmxVR0YwYUNBOUlHSmxjM1JRWVhSb1cyUnBZV2R2Ym1Gc1VHRjBhQ0FySURGZExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjJ4a1VHOXpJRDBnS0hKbGJXOTJaVkJoZEdnZ1B5QnlaVzF2ZG1WUVlYUm9MbTVsZDFCdmN5QTZJREFwSUMwZ1pHbGhaMjl1WVd4UVlYUm9PMXh1SUNBZ0lDQWdJQ0JwWmlBb1lXUmtVR0YwYUNrZ2UxeHVJQ0FnSUNBZ0lDQWdJQzh2SUU1dklHOXVaU0JsYkhObElHbHpJR2R2YVc1bklIUnZJR0YwZEdWdGNIUWdkRzhnZFhObElIUm9hWE1nZG1Gc2RXVXNJR05zWldGeUlHbDBYRzRnSUNBZ0lDQWdJQ0FnWW1WemRGQmhkR2hiWkdsaFoyOXVZV3hRWVhSb0lDMGdNVjBnUFNCMWJtUmxabWx1WldRN1hHNGdJQ0FnSUNBZ0lIMWNibHh1SUNBZ0lDQWdJQ0JzWlhRZ1kyRnVRV1JrSUQwZ1lXUmtVR0YwYUNBbUppQmhaR1JRWVhSb0xtNWxkMUJ2Y3lBcklERWdQQ0J1WlhkTVpXNHNYRzRnSUNBZ0lDQWdJQ0FnSUNCallXNVNaVzF2ZG1VZ1BTQnlaVzF2ZG1WUVlYUm9JQ1ltSURBZ1BEMGdiMnhrVUc5eklDWW1JRzlzWkZCdmN5QThJRzlzWkV4bGJqdGNiaUFnSUNBZ0lDQWdhV1lnS0NGallXNUJaR1FnSmlZZ0lXTmhibEpsYlc5MlpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUM4dklFbG1JSFJvYVhNZ2NHRjBhQ0JwY3lCaElIUmxjbTFwYm1Gc0lIUm9aVzRnY0hKMWJtVmNiaUFnSUNBZ0lDQWdJQ0JpWlhOMFVHRjBhRnRrYVdGbmIyNWhiRkJoZEdoZElEMGdkVzVrWldacGJtVmtPMXh1SUNBZ0lDQWdJQ0FnSUdOdmJuUnBiblZsTzF4dUlDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdMeThnVTJWc1pXTjBJSFJvWlNCa2FXRm5iMjVoYkNCMGFHRjBJSGRsSUhkaGJuUWdkRzhnWW5KaGJtTm9JR1p5YjIwdUlGZGxJSE5sYkdWamRDQjBhR1VnY0hKcGIzSmNiaUFnSUNBZ0lDQWdMeThnY0dGMGFDQjNhRzl6WlNCd2IzTnBkR2x2YmlCcGJpQjBhR1VnYm1WM0lITjBjbWx1WnlCcGN5QjBhR1VnWm1GeWRHaGxjM1FnWm5KdmJTQjBhR1VnYjNKcFoybHVYRzRnSUNBZ0lDQWdJQzh2SUdGdVpDQmtiMlZ6SUc1dmRDQndZWE56SUhSb1pTQmliM1Z1WkhNZ2IyWWdkR2hsSUdScFptWWdaM0poY0doY2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZqWVc1QlpHUWdmSHdnS0dOaGJsSmxiVzkyWlNBbUppQmhaR1JRWVhSb0xtNWxkMUJ2Y3lBOElISmxiVzkyWlZCaGRHZ3VibVYzVUc5ektTa2dlMXh1SUNBZ0lDQWdJQ0FnSUdKaGMyVlFZWFJvSUQwZ1kyeHZibVZRWVhSb0tISmxiVzkyWlZCaGRHZ3BPMXh1SUNBZ0lDQWdJQ0FnSUhObGJHWXVjSFZ6YUVOdmJYQnZibVZ1ZENoaVlYTmxVR0YwYUM1amIyMXdiMjVsYm5SekxDQjFibVJsWm1sdVpXUXNJSFJ5ZFdVcE8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJR0poYzJWUVlYUm9JRDBnWVdSa1VHRjBhRHNnTHk4Z1RtOGdibVZsWkNCMGJ5QmpiRzl1WlN3Z2QyVW5kbVVnY0hWc2JHVmtJR2wwSUdaeWIyMGdkR2hsSUd4cGMzUmNiaUFnSUNBZ0lDQWdJQ0JpWVhObFVHRjBhQzV1WlhkUWIzTXJLenRjYmlBZ0lDQWdJQ0FnSUNCelpXeG1MbkIxYzJoRGIyMXdiMjVsYm5Rb1ltRnpaVkJoZEdndVkyOXRjRzl1Wlc1MGN5d2dkSEoxWlN3Z2RXNWtaV1pwYm1Wa0tUdGNiaUFnSUNBZ0lDQWdmVnh1WEc0Z0lDQWdJQ0FnSUc5c1pGQnZjeUE5SUhObGJHWXVaWGgwY21GamRFTnZiVzF2YmloaVlYTmxVR0YwYUN3Z2JtVjNVM1J5YVc1bkxDQnZiR1JUZEhKcGJtY3NJR1JwWVdkdmJtRnNVR0YwYUNrN1hHNWNiaUFnSUNBZ0lDQWdMeThnU1dZZ2QyVWdhR0YyWlNCb2FYUWdkR2hsSUdWdVpDQnZaaUJpYjNSb0lITjBjbWx1WjNNc0lIUm9aVzRnZDJVZ1lYSmxJR1J2Ym1WY2JpQWdJQ0FnSUNBZ2FXWWdLR0poYzJWUVlYUm9MbTVsZDFCdmN5QXJJREVnUGowZ2JtVjNUR1Z1SUNZbUlHOXNaRkJ2Y3lBcklERWdQajBnYjJ4a1RHVnVLU0I3WEc0Z0lDQWdJQ0FnSUNBZ2NtVjBkWEp1SUdSdmJtVW9ZblZwYkdSV1lXeDFaWE1vYzJWc1ppd2dZbUZ6WlZCaGRHZ3VZMjl0Y0c5dVpXNTBjeXdnYm1WM1UzUnlhVzVuTENCdmJHUlRkSEpwYm1jc0lITmxiR1l1ZFhObFRHOXVaMlZ6ZEZSdmEyVnVLU2s3WEc0Z0lDQWdJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0FnSUNBZ0x5OGdUM1JvWlhKM2FYTmxJSFJ5WVdOcklIUm9hWE1nY0dGMGFDQmhjeUJoSUhCdmRHVnVkR2xoYkNCallXNWthV1JoZEdVZ1lXNWtJR052Ym5ScGJuVmxMbHh1SUNBZ0lDQWdJQ0FnSUdKbGMzUlFZWFJvVzJScFlXZHZibUZzVUdGMGFGMGdQU0JpWVhObFVHRjBhRHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNCbFpHbDBUR1Z1WjNSb0t5czdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ0x5OGdVR1Z5Wm05eWJYTWdkR2hsSUd4bGJtZDBhQ0J2WmlCbFpHbDBJR2wwWlhKaGRHbHZiaTRnU1hNZ1lTQmlhWFFnWm5WbmJIa2dZWE1nZEdocGN5Qm9ZWE1nZEc4Z2MzVndjRzl5ZENCMGFHVmNiaUFnSUNBdkx5QnplVzVqSUdGdVpDQmhjM2x1WXlCdGIyUmxJSGRvYVdOb0lHbHpJRzVsZG1WeUlHWjFiaTRnVEc5dmNITWdiM1psY2lCbGVHVmpSV1JwZEV4bGJtZDBhQ0IxYm5ScGJDQmhJSFpoYkhWbFhHNGdJQ0FnTHk4Z2FYTWdjSEp2WkhWalpXUXNJRzl5SUhWdWRHbHNJSFJvWlNCbFpHbDBJR3hsYm1kMGFDQmxlR05sWldSeklHOXdkR2x2Ym5NdWJXRjRSV1JwZEV4bGJtZDBhQ0FvYVdZZ1oybDJaVzRwTEZ4dUlDQWdJQzh2SUdsdUlIZG9hV05vSUdOaGMyVWdhWFFnZDJsc2JDQnlaWFIxY200Z2RXNWtaV1pwYm1Wa0xseHVJQ0FnSUdsbUlDaGpZV3hzWW1GamF5a2dlMXh1SUNBZ0lDQWdLR1oxYm1OMGFXOXVJR1Y0WldNb0tTQjdYRzRnSUNBZ0lDQWdJSE5sZEZScGJXVnZkWFFvWm5WdVkzUnBiMjRvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdhV1lnS0dWa2FYUk1aVzVuZEdnZ1BpQnRZWGhGWkdsMFRHVnVaM1JvS1NCN1hHNGdJQ0FnSUNBZ0lDQWdJQ0J5WlhSMWNtNGdZMkZzYkdKaFkyc29LVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNWNiaUFnSUNBZ0lDQWdJQ0JwWmlBb0lXVjRaV05GWkdsMFRHVnVaM1JvS0NrcElIdGNiaUFnSUNBZ0lDQWdJQ0FnSUdWNFpXTW9LVHRjYmlBZ0lDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNBZ0lIMHNJREFwTzF4dUlDQWdJQ0FnZlNncEtUdGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnZDJocGJHVWdLR1ZrYVhSTVpXNW5kR2dnUEQwZ2JXRjRSV1JwZEV4bGJtZDBhQ2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdjbVYwSUQwZ1pYaGxZMFZrYVhSTVpXNW5kR2dvS1R0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEpsZENrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnlaWFE3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMHNYRzVjYmlBZ2NIVnphRU52YlhCdmJtVnVkQ2hqYjIxd2IyNWxiblJ6TENCaFpHUmxaQ3dnY21WdGIzWmxaQ2tnZTF4dUlDQWdJR3hsZENCc1lYTjBJRDBnWTI5dGNHOXVaVzUwYzF0amIyMXdiMjVsYm5SekxteGxibWQwYUNBdElERmRPMXh1SUNBZ0lHbG1JQ2hzWVhOMElDWW1JR3hoYzNRdVlXUmtaV1FnUFQwOUlHRmtaR1ZrSUNZbUlHeGhjM1F1Y21WdGIzWmxaQ0E5UFQwZ2NtVnRiM1psWkNrZ2UxeHVJQ0FnSUNBZ0x5OGdWMlVnYm1WbFpDQjBieUJqYkc5dVpTQm9aWEpsSUdGeklIUm9aU0JqYjIxd2IyNWxiblFnWTJ4dmJtVWdiM0JsY21GMGFXOXVJR2x6SUdwMWMzUmNiaUFnSUNBZ0lDOHZJR0Z6SUhOb1lXeHNiM2NnWVhKeVlYa2dZMnh2Ym1WY2JpQWdJQ0FnSUdOdmJYQnZibVZ1ZEhOYlkyOXRjRzl1Wlc1MGN5NXNaVzVuZEdnZ0xTQXhYU0E5SUh0amIzVnVkRG9nYkdGemRDNWpiM1Z1ZENBcklERXNJR0ZrWkdWa09pQmhaR1JsWkN3Z2NtVnRiM1psWkRvZ2NtVnRiM1psWkNCOU8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0JqYjIxd2IyNWxiblJ6TG5CMWMyZ29lMk52ZFc1ME9pQXhMQ0JoWkdSbFpEb2dZV1JrWldRc0lISmxiVzkyWldRNklISmxiVzkyWldRZ2ZTazdYRzRnSUNBZ2ZWeHVJQ0I5TEZ4dUlDQmxlSFJ5WVdOMFEyOXRiVzl1S0dKaGMyVlFZWFJvTENCdVpYZFRkSEpwYm1jc0lHOXNaRk4wY21sdVp5d2daR2xoWjI5dVlXeFFZWFJvS1NCN1hHNGdJQ0FnYkdWMElHNWxkMHhsYmlBOUlHNWxkMU4wY21sdVp5NXNaVzVuZEdnc1hHNGdJQ0FnSUNBZ0lHOXNaRXhsYmlBOUlHOXNaRk4wY21sdVp5NXNaVzVuZEdnc1hHNGdJQ0FnSUNBZ0lHNWxkMUJ2Y3lBOUlHSmhjMlZRWVhSb0xtNWxkMUJ2Y3l4Y2JpQWdJQ0FnSUNBZ2IyeGtVRzl6SUQwZ2JtVjNVRzl6SUMwZ1pHbGhaMjl1WVd4UVlYUm9MRnh1WEc0Z0lDQWdJQ0FnSUdOdmJXMXZia052ZFc1MElEMGdNRHRjYmlBZ0lDQjNhR2xzWlNBb2JtVjNVRzl6SUNzZ01TQThJRzVsZDB4bGJpQW1KaUJ2YkdSUWIzTWdLeUF4SUR3Z2IyeGtUR1Z1SUNZbUlIUm9hWE11WlhGMVlXeHpLRzVsZDFOMGNtbHVaMXR1WlhkUWIzTWdLeUF4WFN3Z2IyeGtVM1J5YVc1blcyOXNaRkJ2Y3lBcklERmRLU2tnZTF4dUlDQWdJQ0FnYm1WM1VHOXpLeXM3WEc0Z0lDQWdJQ0J2YkdSUWIzTXJLenRjYmlBZ0lDQWdJR052YlcxdmJrTnZkVzUwS3lzN1hHNGdJQ0FnZlZ4dVhHNGdJQ0FnYVdZZ0tHTnZiVzF2YmtOdmRXNTBLU0I3WEc0Z0lDQWdJQ0JpWVhObFVHRjBhQzVqYjIxd2IyNWxiblJ6TG5CMWMyZ29lMk52ZFc1ME9pQmpiMjF0YjI1RGIzVnVkSDBwTzF4dUlDQWdJSDFjYmx4dUlDQWdJR0poYzJWUVlYUm9MbTVsZDFCdmN5QTlJRzVsZDFCdmN6dGNiaUFnSUNCeVpYUjFjbTRnYjJ4a1VHOXpPMXh1SUNCOUxGeHVYRzRnSUdWeGRXRnNjeWhzWldaMExDQnlhV2RvZENrZ2UxeHVJQ0FnSUdsbUlDaDBhR2x6TG05d2RHbHZibk11WTI5dGNHRnlZWFJ2Y2lrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUhSb2FYTXViM0IwYVc5dWN5NWpiMjF3WVhKaGRHOXlLR3hsWm5Rc0lISnBaMmgwS1R0Y2JpQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdjbVYwZFhKdUlHeGxablFnUFQwOUlISnBaMmgwWEc0Z0lDQWdJQ0FnSUh4OElDaDBhR2x6TG05d2RHbHZibk11YVdkdWIzSmxRMkZ6WlNBbUppQnNaV1owTG5SdlRHOTNaWEpEWVhObEtDa2dQVDA5SUhKcFoyaDBMblJ2VEc5M1pYSkRZWE5sS0NrcE8xeHVJQ0FnSUgxY2JpQWdmU3hjYmlBZ2NtVnRiM1psUlcxd2RIa29ZWEp5WVhrcElIdGNiaUFnSUNCc1pYUWdjbVYwSUQwZ1cxMDdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQmhjbkpoZVM1c1pXNW5kR2c3SUdrckt5a2dlMXh1SUNBZ0lDQWdhV1lnS0dGeWNtRjVXMmxkS1NCN1hHNGdJQ0FnSUNBZ0lISmxkQzV3ZFhOb0tHRnljbUY1VzJsZEtUdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNGdJQ0FnY21WMGRYSnVJSEpsZER0Y2JpQWdmU3hjYmlBZ1kyRnpkRWx1Y0hWMEtIWmhiSFZsS1NCN1hHNGdJQ0FnY21WMGRYSnVJSFpoYkhWbE8xeHVJQ0I5TEZ4dUlDQjBiMnRsYm1sNlpTaDJZV3gxWlNrZ2UxeHVJQ0FnSUhKbGRIVnliaUIyWVd4MVpTNXpjR3hwZENnbkp5azdYRzRnSUgwc1hHNGdJR3B2YVc0b1kyaGhjbk1wSUh0Y2JpQWdJQ0J5WlhSMWNtNGdZMmhoY25NdWFtOXBiaWduSnlrN1hHNGdJSDFjYm4wN1hHNWNibVoxYm1OMGFXOXVJR0oxYVd4a1ZtRnNkV1Z6S0dScFptWXNJR052YlhCdmJtVnVkSE1zSUc1bGQxTjBjbWx1Wnl3Z2IyeGtVM1J5YVc1bkxDQjFjMlZNYjI1blpYTjBWRzlyWlc0cElIdGNiaUFnYkdWMElHTnZiWEJ2Ym1WdWRGQnZjeUE5SURBc1hHNGdJQ0FnSUNCamIyMXdiMjVsYm5STVpXNGdQU0JqYjIxd2IyNWxiblJ6TG14bGJtZDBhQ3hjYmlBZ0lDQWdJRzVsZDFCdmN5QTlJREFzWEc0Z0lDQWdJQ0J2YkdSUWIzTWdQU0F3TzF4dVhHNGdJR1p2Y2lBb095QmpiMjF3YjI1bGJuUlFiM01nUENCamIyMXdiMjVsYm5STVpXNDdJR052YlhCdmJtVnVkRkJ2Y3lzcktTQjdYRzRnSUNBZ2JHVjBJR052YlhCdmJtVnVkQ0E5SUdOdmJYQnZibVZ1ZEhOYlkyOXRjRzl1Wlc1MFVHOXpYVHRjYmlBZ0lDQnBaaUFvSVdOdmJYQnZibVZ1ZEM1eVpXMXZkbVZrS1NCN1hHNGdJQ0FnSUNCcFppQW9JV052YlhCdmJtVnVkQzVoWkdSbFpDQW1KaUIxYzJWTWIyNW5aWE4wVkc5clpXNHBJSHRjYmlBZ0lDQWdJQ0FnYkdWMElIWmhiSFZsSUQwZ2JtVjNVM1J5YVc1bkxuTnNhV05sS0c1bGQxQnZjeXdnYm1WM1VHOXpJQ3NnWTI5dGNHOXVaVzUwTG1OdmRXNTBLVHRjYmlBZ0lDQWdJQ0FnZG1Gc2RXVWdQU0IyWVd4MVpTNXRZWEFvWm5WdVkzUnBiMjRvZG1Gc2RXVXNJR2twSUh0Y2JpQWdJQ0FnSUNBZ0lDQnNaWFFnYjJ4a1ZtRnNkV1VnUFNCdmJHUlRkSEpwYm1kYmIyeGtVRzl6SUNzZ2FWMDdYRzRnSUNBZ0lDQWdJQ0FnY21WMGRYSnVJRzlzWkZaaGJIVmxMbXhsYm1kMGFDQStJSFpoYkhWbExteGxibWQwYUNBL0lHOXNaRlpoYkhWbElEb2dkbUZzZFdVN1hHNGdJQ0FnSUNBZ0lIMHBPMXh1WEc0Z0lDQWdJQ0FnSUdOdmJYQnZibVZ1ZEM1MllXeDFaU0E5SUdScFptWXVhbTlwYmloMllXeDFaU2s3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JqYjIxd2IyNWxiblF1ZG1Gc2RXVWdQU0JrYVdabUxtcHZhVzRvYm1WM1UzUnlhVzVuTG5Oc2FXTmxLRzVsZDFCdmN5d2dibVYzVUc5eklDc2dZMjl0Y0c5dVpXNTBMbU52ZFc1MEtTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnVaWGRRYjNNZ0t6MGdZMjl0Y0c5dVpXNTBMbU52ZFc1ME8xeHVYRzRnSUNBZ0lDQXZMeUJEYjIxdGIyNGdZMkZ6WlZ4dUlDQWdJQ0FnYVdZZ0tDRmpiMjF3YjI1bGJuUXVZV1JrWldRcElIdGNiaUFnSUNBZ0lDQWdiMnhrVUc5eklDczlJR052YlhCdmJtVnVkQzVqYjNWdWREdGNiaUFnSUNBZ0lIMWNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnWTI5dGNHOXVaVzUwTG5aaGJIVmxJRDBnWkdsbVppNXFiMmx1S0c5c1pGTjBjbWx1Wnk1emJHbGpaU2h2YkdSUWIzTXNJRzlzWkZCdmN5QXJJR052YlhCdmJtVnVkQzVqYjNWdWRDa3BPMXh1SUNBZ0lDQWdiMnhrVUc5eklDczlJR052YlhCdmJtVnVkQzVqYjNWdWREdGNibHh1SUNBZ0lDQWdMeThnVW1WMlpYSnpaU0JoWkdRZ1lXNWtJSEpsYlc5MlpTQnpieUJ5WlcxdmRtVnpJR0Z5WlNCdmRYUndkWFFnWm1seWMzUWdkRzhnYldGMFkyZ2dZMjl0Ylc5dUlHTnZiblpsYm5ScGIyNWNiaUFnSUNBZ0lDOHZJRlJvWlNCa2FXWm1hVzVuSUdGc1oyOXlhWFJvYlNCcGN5QjBhV1ZrSUhSdklHRmtaQ0IwYUdWdUlISmxiVzkyWlNCdmRYUndkWFFnWVc1a0lIUm9hWE1nYVhNZ2RHaGxJSE5wYlhCc1pYTjBYRzRnSUNBZ0lDQXZMeUJ5YjNWMFpTQjBieUJuWlhRZ2RHaGxJR1JsYzJseVpXUWdiM1YwY0hWMElIZHBkR2dnYldsdWFXMWhiQ0J2ZG1WeWFHVmhaQzVjYmlBZ0lDQWdJR2xtSUNoamIyMXdiMjVsYm5SUWIzTWdKaVlnWTI5dGNHOXVaVzUwYzF0amIyMXdiMjVsYm5SUWIzTWdMU0F4WFM1aFpHUmxaQ2tnZTF4dUlDQWdJQ0FnSUNCc1pYUWdkRzF3SUQwZ1kyOXRjRzl1Wlc1MGMxdGpiMjF3YjI1bGJuUlFiM01nTFNBeFhUdGNiaUFnSUNBZ0lDQWdZMjl0Y0c5dVpXNTBjMXRqYjIxd2IyNWxiblJRYjNNZ0xTQXhYU0E5SUdOdmJYQnZibVZ1ZEhOYlkyOXRjRzl1Wlc1MFVHOXpYVHRjYmlBZ0lDQWdJQ0FnWTI5dGNHOXVaVzUwYzF0amIyMXdiMjVsYm5SUWIzTmRJRDBnZEcxd08xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lDOHZJRk53WldOcFlXd2dZMkZ6WlNCb1lXNWtiR1VnWm05eUlIZG9aVzRnYjI1bElIUmxjbTFwYm1Gc0lHbHpJR2xuYm05eVpXUWdLR2t1WlM0Z2QyaHBkR1Z6Y0dGalpTa3VYRzRnSUM4dklFWnZjaUIwYUdseklHTmhjMlVnZDJVZ2JXVnlaMlVnZEdobElIUmxjbTFwYm1Gc0lHbHVkRzhnZEdobElIQnlhVzl5SUhOMGNtbHVaeUJoYm1RZ1pISnZjQ0IwYUdVZ1kyaGhibWRsTGx4dUlDQXZMeUJVYUdseklHbHpJRzl1YkhrZ1lYWmhhV3hoWW14bElHWnZjaUJ6ZEhKcGJtY2diVzlrWlM1Y2JpQWdiR1YwSUd4aGMzUkRiMjF3YjI1bGJuUWdQU0JqYjIxd2IyNWxiblJ6VzJOdmJYQnZibVZ1ZEV4bGJpQXRJREZkTzF4dUlDQnBaaUFvWTI5dGNHOXVaVzUwVEdWdUlENGdNVnh1SUNBZ0lDQWdKaVlnZEhsd1pXOW1JR3hoYzNSRGIyMXdiMjVsYm5RdWRtRnNkV1VnUFQwOUlDZHpkSEpwYm1jblhHNGdJQ0FnSUNBbUppQW9iR0Z6ZEVOdmJYQnZibVZ1ZEM1aFpHUmxaQ0I4ZkNCc1lYTjBRMjl0Y0c5dVpXNTBMbkpsYlc5MlpXUXBYRzRnSUNBZ0lDQW1KaUJrYVdabUxtVnhkV0ZzY3lnbkp5d2diR0Z6ZEVOdmJYQnZibVZ1ZEM1MllXeDFaU2twSUh0Y2JpQWdJQ0JqYjIxd2IyNWxiblJ6VzJOdmJYQnZibVZ1ZEV4bGJpQXRJREpkTG5aaGJIVmxJQ3M5SUd4aGMzUkRiMjF3YjI1bGJuUXVkbUZzZFdVN1hHNGdJQ0FnWTI5dGNHOXVaVzUwY3k1d2IzQW9LVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJqYjIxd2IyNWxiblJ6TzF4dWZWeHVYRzVtZFc1amRHbHZiaUJqYkc5dVpWQmhkR2dvY0dGMGFDa2dlMXh1SUNCeVpYUjFjbTRnZXlCdVpYZFFiM002SUhCaGRHZ3VibVYzVUc5ekxDQmpiMjF3YjI1bGJuUnpPaUJ3WVhSb0xtTnZiWEJ2Ym1WdWRITXVjMnhwWTJVb01Da2dmVHRjYm4xY2JpSmRmUT09XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGlmZkNoYXJzID0gZGlmZkNoYXJzO1xuZXhwb3J0cy5jaGFyYWN0ZXJEaWZmID0gdm9pZCAwO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fYmFzZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vYmFzZVwiKSlcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki8gZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXIgY2hhcmFjdGVyRGlmZiA9IG5ld1xuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2Jhc2Vcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5bXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cImRlZmF1bHRcIlxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbl0oKTtcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuZXhwb3J0cy5jaGFyYWN0ZXJEaWZmID0gY2hhcmFjdGVyRGlmZjtcblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbmZ1bmN0aW9uIGRpZmZDaGFycyhvbGRTdHIsIG5ld1N0ciwgb3B0aW9ucykge1xuICByZXR1cm4gY2hhcmFjdGVyRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWthV1ptTDJOb1lYSmhZM1JsY2k1cWN5SmRMQ0p1WVcxbGN5STZXeUpqYUdGeVlXTjBaWEpFYVdabUlpd2lSR2xtWmlJc0ltUnBabVpEYUdGeWN5SXNJbTlzWkZOMGNpSXNJbTVsZDFOMGNpSXNJbTl3ZEdsdmJuTWlMQ0prYVdabUlsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3TzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3T3pzN1FVRkZUeXhKUVVGTlFTeGhRVUZoTEVkQlFVYzdRVUZCU1VNN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUVzUTBGQlNpeEZRVUYwUWpzN096czdPMEZCUTBFc1UwRkJVME1zVTBGQlZDeERRVUZ0UWtNc1RVRkJia0lzUlVGQk1rSkRMRTFCUVROQ0xFVkJRVzFEUXl4UFFVRnVReXhGUVVFMFF6dEJRVUZGTEZOQlFVOU1MR0ZCUVdFc1EwRkJRMDBzU1VGQlpDeERRVUZ0UWtnc1RVRkJia0lzUlVGQk1rSkRMRTFCUVROQ0xFVkJRVzFEUXl4UFFVRnVReXhEUVVGUU8wRkJRWEZFSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUVScFptWWdabkp2YlNBbkxpOWlZWE5sSnp0Y2JseHVaWGh3YjNKMElHTnZibk4wSUdOb1lYSmhZM1JsY2tScFptWWdQU0J1WlhjZ1JHbG1aaWdwTzF4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdScFptWkRhR0Z5Y3lodmJHUlRkSElzSUc1bGQxTjBjaXdnYjNCMGFXOXVjeWtnZXlCeVpYUjFjbTRnWTJoaGNtRmpkR1Z5UkdsbVppNWthV1ptS0c5c1pGTjBjaXdnYm1WM1UzUnlMQ0J2Y0hScGIyNXpLVHNnZlZ4dUlsMTlcbiIsIi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kaWZmQ3NzID0gZGlmZkNzcztcbmV4cG9ydHMuY3NzRGlmZiA9IHZvaWQgMDtcblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2VcIikpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xudmFyIGNzc0RpZmYgPSBuZXdcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuW1xuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJkZWZhdWx0XCJcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5dKCk7XG5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbmV4cG9ydHMuY3NzRGlmZiA9IGNzc0RpZmY7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5jc3NEaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZS5zcGxpdCgvKFt7fTo7LF18XFxzKykvKTtcbn07XG5cbmZ1bmN0aW9uIGRpZmZDc3Mob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKSB7XG4gIHJldHVybiBjc3NEaWZmLmRpZmYob2xkU3RyLCBuZXdTdHIsIGNhbGxiYWNrKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWthV1ptTDJOemN5NXFjeUpkTENKdVlXMWxjeUk2V3lKamMzTkVhV1ptSWl3aVJHbG1aaUlzSW5SdmEyVnVhWHBsSWl3aWRtRnNkV1VpTENKemNHeHBkQ0lzSW1ScFptWkRjM01pTENKdmJHUlRkSElpTENKdVpYZFRkSElpTENKallXeHNZbUZqYXlJc0ltUnBabVlpWFN3aWJXRndjR2x1WjNNaU9pSTdPenM3T3pzN096czdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk96czdPenRCUVVWUExFbEJRVTFCTEU5QlFVOHNSMEZCUnp0QlFVRkpRenRCUVVGQlFUdEJRVUZCUVR0QlFVRkJRVHRCUVVGQlFUdEJRVUZCUVR0QlFVRkJRVHRCUVVGQlFTeERRVUZLTEVWQlFXaENPenM3T3pzN1FVRkRVRVFzVDBGQlR5eERRVUZEUlN4UlFVRlNMRWRCUVcxQ0xGVkJRVk5ETEV0QlFWUXNSVUZCWjBJN1FVRkRha01zVTBGQlQwRXNTMEZCU3l4RFFVRkRReXhMUVVGT0xFTkJRVmtzWlVGQldpeERRVUZRTzBGQlEwUXNRMEZHUkRzN1FVRkpUeXhUUVVGVFF5eFBRVUZVTEVOQlFXbENReXhOUVVGcVFpeEZRVUY1UWtNc1RVRkJla0lzUlVGQmFVTkRMRkZCUVdwRExFVkJRVEpETzBGQlFVVXNVMEZCVDFJc1QwRkJUeXhEUVVGRFV5eEpRVUZTTEVOQlFXRklMRTFCUVdJc1JVRkJjVUpETEUxQlFYSkNMRVZCUVRaQ1F5eFJRVUUzUWl4RFFVRlFPMEZCUVdkRUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFUnBabVlnWm5KdmJTQW5MaTlpWVhObEp6dGNibHh1Wlhod2IzSjBJR052Ym5OMElHTnpjMFJwWm1ZZ1BTQnVaWGNnUkdsbVppZ3BPMXh1WTNOelJHbG1aaTUwYjJ0bGJtbDZaU0E5SUdaMWJtTjBhVzl1S0haaGJIVmxLU0I3WEc0Z0lISmxkSFZ5YmlCMllXeDFaUzV6Y0d4cGRDZ3ZLRnQ3ZlRvN0xGMThYRnh6S3lrdktUdGNibjA3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCa2FXWm1RM056S0c5c1pGTjBjaXdnYm1WM1UzUnlMQ0JqWVd4c1ltRmpheWtnZXlCeVpYUjFjbTRnWTNOelJHbG1aaTVrYVdabUtHOXNaRk4wY2l3Z2JtVjNVM1J5TENCallXeHNZbUZqYXlrN0lIMWNiaUpkZlE9PVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRpZmZKc29uID0gZGlmZkpzb247XG5leHBvcnRzLmNhbm9uaWNhbGl6ZSA9IGNhbm9uaWNhbGl6ZTtcbmV4cG9ydHMuanNvbkRpZmYgPSB2b2lkIDA7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlXCIpKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fbGluZSA9IHJlcXVpcmUoXCIuL2xpbmVcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki8gZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhciBvYmplY3RQcm90b3R5cGVUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG52YXIganNvbkRpZmYgPSBuZXdcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuW1xuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJkZWZhdWx0XCJcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5dKCk7IC8vIERpc2NyaW1pbmF0ZSBiZXR3ZWVuIHR3byBsaW5lcyBvZiBwcmV0dHktcHJpbnRlZCwgc2VyaWFsaXplZCBKU09OIHdoZXJlIG9uZSBvZiB0aGVtIGhhcyBhXG4vLyBkYW5nbGluZyBjb21tYSBhbmQgdGhlIG90aGVyIGRvZXNuJ3QuIFR1cm5zIG91dCBpbmNsdWRpbmcgdGhlIGRhbmdsaW5nIGNvbW1hIHlpZWxkcyB0aGUgbmljZXN0IG91dHB1dDpcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuZXhwb3J0cy5qc29uRGlmZiA9IGpzb25EaWZmO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuanNvbkRpZmYudXNlTG9uZ2VzdFRva2VuID0gdHJ1ZTtcbmpzb25EaWZmLnRva2VuaXplID1cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9saW5lXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuLlxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xubGluZURpZmZcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4udG9rZW5pemU7XG5cbmpzb25EaWZmLmNhc3RJbnB1dCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gIHZhciBfdGhpcyRvcHRpb25zID1cbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgdGhpcy5vcHRpb25zLFxuICAgICAgdW5kZWZpbmVkUmVwbGFjZW1lbnQgPSBfdGhpcyRvcHRpb25zLnVuZGVmaW5lZFJlcGxhY2VtZW50LFxuICAgICAgX3RoaXMkb3B0aW9ucyRzdHJpbmdpID0gX3RoaXMkb3B0aW9ucy5zdHJpbmdpZnlSZXBsYWNlcixcbiAgICAgIHN0cmluZ2lmeVJlcGxhY2VyID0gX3RoaXMkb3B0aW9ucyRzdHJpbmdpID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoaywgdilcbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICB0eXBlb2YgdiA9PT0gJ3VuZGVmaW5lZCcgPyB1bmRlZmluZWRSZXBsYWNlbWVudCA6IHZcbiAgICApO1xuICB9IDogX3RoaXMkb3B0aW9ucyRzdHJpbmdpO1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IHZhbHVlIDogSlNPTi5zdHJpbmdpZnkoY2Fub25pY2FsaXplKHZhbHVlLCBudWxsLCBudWxsLCBzdHJpbmdpZnlSZXBsYWNlciksIHN0cmluZ2lmeVJlcGxhY2VyLCAnICAnKTtcbn07XG5cbmpzb25EaWZmLmVxdWFscyA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICByZXR1cm4gKFxuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICBfYmFzZVxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgW1xuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICBcImRlZmF1bHRcIlxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgXS5wcm90b3R5cGUuZXF1YWxzLmNhbGwoanNvbkRpZmYsIGxlZnQucmVwbGFjZSgvLChbXFxyXFxuXSkvZywgJyQxJyksIHJpZ2h0LnJlcGxhY2UoLywoW1xcclxcbl0pL2csICckMScpKVxuICApO1xufTtcblxuZnVuY3Rpb24gZGlmZkpzb24ob2xkT2JqLCBuZXdPYmosIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGpzb25EaWZmLmRpZmYob2xkT2JqLCBuZXdPYmosIG9wdGlvbnMpO1xufSAvLyBUaGlzIGZ1bmN0aW9uIGhhbmRsZXMgdGhlIHByZXNlbmNlIG9mIGNpcmN1bGFyIHJlZmVyZW5jZXMgYnkgYmFpbGluZyBvdXQgd2hlbiBlbmNvdW50ZXJpbmcgYW5cbi8vIG9iamVjdCB0aGF0IGlzIGFscmVhZHkgb24gdGhlIFwic3RhY2tcIiBvZiBpdGVtcyBiZWluZyBwcm9jZXNzZWQuIEFjY2VwdHMgYW4gb3B0aW9uYWwgcmVwbGFjZXJcblxuXG5mdW5jdGlvbiBjYW5vbmljYWxpemUob2JqLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjaywgcmVwbGFjZXIsIGtleSkge1xuICBzdGFjayA9IHN0YWNrIHx8IFtdO1xuICByZXBsYWNlbWVudFN0YWNrID0gcmVwbGFjZW1lbnRTdGFjayB8fCBbXTtcblxuICBpZiAocmVwbGFjZXIpIHtcbiAgICBvYmogPSByZXBsYWNlcihrZXksIG9iaik7XG4gIH1cblxuICB2YXIgaTtcblxuICBmb3IgKGkgPSAwOyBpIDwgc3RhY2subGVuZ3RoOyBpICs9IDEpIHtcbiAgICBpZiAoc3RhY2tbaV0gPT09IG9iaikge1xuICAgICAgcmV0dXJuIHJlcGxhY2VtZW50U3RhY2tbaV07XG4gICAgfVxuICB9XG5cbiAgdmFyIGNhbm9uaWNhbGl6ZWRPYmo7XG5cbiAgaWYgKCdbb2JqZWN0IEFycmF5XScgPT09IG9iamVjdFByb3RvdHlwZVRvU3RyaW5nLmNhbGwob2JqKSkge1xuICAgIHN0YWNrLnB1c2gob2JqKTtcbiAgICBjYW5vbmljYWxpemVkT2JqID0gbmV3IEFycmF5KG9iai5sZW5ndGgpO1xuICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBvYmoubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNhbm9uaWNhbGl6ZWRPYmpbaV0gPSBjYW5vbmljYWxpemUob2JqW2ldLCBzdGFjaywgcmVwbGFjZW1lbnRTdGFjaywgcmVwbGFjZXIsIGtleSk7XG4gICAgfVxuXG4gICAgc3RhY2sucG9wKCk7XG4gICAgcmVwbGFjZW1lbnRTdGFjay5wb3AoKTtcbiAgICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbiAgfVxuXG4gIGlmIChvYmogJiYgb2JqLnRvSlNPTikge1xuICAgIG9iaiA9IG9iai50b0pTT04oKTtcbiAgfVxuXG4gIGlmIChcbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICBfdHlwZW9mKFxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICBvYmopID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHtcbiAgICBzdGFjay5wdXNoKG9iaik7XG4gICAgY2Fub25pY2FsaXplZE9iaiA9IHt9O1xuICAgIHJlcGxhY2VtZW50U3RhY2sucHVzaChjYW5vbmljYWxpemVkT2JqKTtcblxuICAgIHZhciBzb3J0ZWRLZXlzID0gW10sXG4gICAgICAgIF9rZXk7XG5cbiAgICBmb3IgKF9rZXkgaW4gb2JqKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShfa2V5KSkge1xuICAgICAgICBzb3J0ZWRLZXlzLnB1c2goX2tleSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc29ydGVkS2V5cy5zb3J0KCk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc29ydGVkS2V5cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgX2tleSA9IHNvcnRlZEtleXNbaV07XG4gICAgICBjYW5vbmljYWxpemVkT2JqW19rZXldID0gY2Fub25pY2FsaXplKG9ialtfa2V5XSwgc3RhY2ssIHJlcGxhY2VtZW50U3RhY2ssIHJlcGxhY2VyLCBfa2V5KTtcbiAgICB9XG5cbiAgICBzdGFjay5wb3AoKTtcbiAgICByZXBsYWNlbWVudFN0YWNrLnBvcCgpO1xuICB9IGVsc2Uge1xuICAgIGNhbm9uaWNhbGl6ZWRPYmogPSBvYmo7XG4gIH1cblxuICByZXR1cm4gY2Fub25pY2FsaXplZE9iajtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWthV1ptTDJwemIyNHVhbk1pWFN3aWJtRnRaWE1pT2xzaWIySnFaV04wVUhKdmRHOTBlWEJsVkc5VGRISnBibWNpTENKUFltcGxZM1FpTENKd2NtOTBiM1I1Y0dVaUxDSjBiMU4wY21sdVp5SXNJbXB6YjI1RWFXWm1JaXdpUkdsbVppSXNJblZ6WlV4dmJtZGxjM1JVYjJ0bGJpSXNJblJ2YTJWdWFYcGxJaXdpYkdsdVpVUnBabVlpTENKallYTjBTVzV3ZFhRaUxDSjJZV3gxWlNJc0ltOXdkR2x2Ym5NaUxDSjFibVJsWm1sdVpXUlNaWEJzWVdObGJXVnVkQ0lzSW5OMGNtbHVaMmxtZVZKbGNHeGhZMlZ5SWl3aWF5SXNJbllpTENKS1UwOU9JaXdpYzNSeWFXNW5hV1o1SWl3aVkyRnViMjVwWTJGc2FYcGxJaXdpWlhGMVlXeHpJaXdpYkdWbWRDSXNJbkpwWjJoMElpd2lZMkZzYkNJc0luSmxjR3hoWTJVaUxDSmthV1ptU25OdmJpSXNJbTlzWkU5aWFpSXNJbTVsZDA5aWFpSXNJbVJwWm1ZaUxDSnZZbW9pTENKemRHRmpheUlzSW5KbGNHeGhZMlZ0Wlc1MFUzUmhZMnNpTENKeVpYQnNZV05sY2lJc0ltdGxlU0lzSW1raUxDSnNaVzVuZEdnaUxDSmpZVzV2Ym1sallXeHBlbVZrVDJKcUlpd2ljSFZ6YUNJc0lrRnljbUY1SWl3aWNHOXdJaXdpZEc5S1UwOU9JaXdpYzI5eWRHVmtTMlY1Y3lJc0ltaGhjMDkzYmxCeWIzQmxjblI1SWl3aWMyOXlkQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096czdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVU5CTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN096czdPenM3UVVGRlFTeEpRVUZOUVN4MVFrRkJkVUlzUjBGQlIwTXNUVUZCVFN4RFFVRkRReXhUUVVGUUxFTkJRV2xDUXl4UlFVRnFSRHRCUVVkUExFbEJRVTFETEZGQlFWRXNSMEZCUnp0QlFVRkpRenRCUVVGQlFUdEJRVUZCUVR0QlFVRkJRVHRCUVVGQlFUdEJRVUZCUVR0QlFVRkJRVHRCUVVGQlFTeERRVUZLTEVWQlFXcENMRU1zUTBGRFVEdEJRVU5CT3pzN096czdRVUZEUVVRc1VVRkJVU3hEUVVGRFJTeGxRVUZVTEVkQlFUSkNMRWxCUVROQ08wRkJSVUZHTEZGQlFWRXNRMEZCUTBjc1VVRkJWRHRCUVVGdlFrTTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFUdEJRVUZCTEVOQlFWTkVMRkZCUVRkQ096dEJRVU5CU0N4UlFVRlJMRU5CUVVOTExGTkJRVlFzUjBGQmNVSXNWVUZCVTBNc1MwRkJWQ3hGUVVGblFqdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVTXJSU3hQUVVGTFF5eFBRVVJ3Ump0QlFVRkJMRTFCUXpWQ1F5eHZRa0ZFTkVJc2FVSkJRelZDUVN4dlFrRkVORUk3UVVGQlFTdzBRMEZEVGtNc2FVSkJSRTA3UVVGQlFTeE5RVU5PUVN4cFFrRkVUU3h6UTBGRFl5eFZRVUZEUXl4RFFVRkVMRVZCUVVsRExFTkJRVW83UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRlZMR0ZCUVU5QkxFTkJRVkFzUzBGQllTeFhRVUZpTEVkQlFUSkNTQ3h2UWtGQk0wSXNSMEZCYTBSSE8wRkJRVFZFTzBGQlFVRXNSMEZFWkR0QlFVZHVReXhUUVVGUExFOUJRVTlNTEV0QlFWQXNTMEZCYVVJc1VVRkJha0lzUjBGQk5FSkJMRXRCUVRWQ0xFZEJRVzlEVFN4SlFVRkpMRU5CUVVORExGTkJRVXdzUTBGQlpVTXNXVUZCV1N4RFFVRkRVaXhMUVVGRUxFVkJRVkVzU1VGQlVpeEZRVUZqTEVsQlFXUXNSVUZCYjBKSExHbENRVUZ3UWl4RFFVRXpRaXhGUVVGdFJVRXNhVUpCUVc1RkxFVkJRWE5HTEVsQlFYUkdMRU5CUVRORE8wRkJRMFFzUTBGS1JEczdRVUZMUVZRc1VVRkJVU3hEUVVGRFpTeE5RVUZVTEVkQlFXdENMRlZCUVZORExFbEJRVlFzUlVGQlpVTXNTMEZCWml4RlFVRnpRanRCUVVOMFF5eFRRVUZQYUVJN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRXNUVUZCUzBnc1UwRkJUQ3hEUVVGbGFVSXNUVUZCWml4RFFVRnpRa2NzU1VGQmRFSXNRMEZCTWtKc1FpeFJRVUV6UWl4RlFVRnhRMmRDTEVsQlFVa3NRMEZCUTBjc1QwRkJUQ3hEUVVGaExGbEJRV0lzUlVGQk1rSXNTVUZCTTBJc1EwRkJja01zUlVGQmRVVkdMRXRCUVVzc1EwRkJRMFVzVDBGQlRpeERRVUZqTEZsQlFXUXNSVUZCTkVJc1NVRkJOVUlzUTBGQmRrVTdRVUZCVUR0QlFVTkVMRU5CUmtRN08wRkJTVThzVTBGQlUwTXNVVUZCVkN4RFFVRnJRa01zVFVGQmJFSXNSVUZCTUVKRExFMUJRVEZDTEVWQlFXdERaaXhQUVVGc1F5eEZRVUV5UXp0QlFVRkZMRk5CUVU5UUxGRkJRVkVzUTBGQlEzVkNMRWxCUVZRc1EwRkJZMFlzVFVGQlpDeEZRVUZ6UWtNc1RVRkJkRUlzUlVGQk9FSm1MRTlCUVRsQ0xFTkJRVkE3UVVGQlowUXNReXhEUVVWd1J6dEJRVU5CT3pzN1FVRkRUeXhUUVVGVFR5eFpRVUZVTEVOQlFYTkNWU3hIUVVGMFFpeEZRVUV5UWtNc1MwRkJNMElzUlVGQmEwTkRMR2RDUVVGc1F5eEZRVUZ2UkVNc1VVRkJjRVFzUlVGQk9FUkRMRWRCUVRsRUxFVkJRVzFGTzBGQlEzaEZTQ3hGUVVGQlFTeExRVUZMTEVkQlFVZEJMRXRCUVVzc1NVRkJTU3hGUVVGcVFqdEJRVU5CUXl4RlFVRkJRU3huUWtGQlowSXNSMEZCUjBFc1owSkJRV2RDTEVsQlFVa3NSVUZCZGtNN08wRkJSVUVzVFVGQlNVTXNVVUZCU2l4RlFVRmpPMEZCUTFwSUxFbEJRVUZCTEVkQlFVY3NSMEZCUjBjc1VVRkJVU3hEUVVGRFF5eEhRVUZFTEVWQlFVMUtMRWRCUVU0c1EwRkJaRHRCUVVORU96dEJRVVZFTEUxQlFVbExMRU5CUVVvN08wRkJSVUVzVDBGQlMwRXNRMEZCUXl4SFFVRkhMRU5CUVZRc1JVRkJXVUVzUTBGQlF5eEhRVUZIU2l4TFFVRkxMRU5CUVVOTExFMUJRWFJDTEVWQlFUaENSQ3hEUVVGRExFbEJRVWtzUTBGQmJrTXNSVUZCYzBNN1FVRkRjRU1zVVVGQlNVb3NTMEZCU3l4RFFVRkRTU3hEUVVGRUxFTkJRVXdzUzBGQllVd3NSMEZCYWtJc1JVRkJjMEk3UVVGRGNFSXNZVUZCVDBVc1owSkJRV2RDTEVOQlFVTkhMRU5CUVVRc1EwRkJka0k3UVVGRFJEdEJRVU5HT3p0QlFVVkVMRTFCUVVsRkxHZENRVUZLT3p0QlFVVkJMRTFCUVVrc2NVSkJRWEZDYmtNc2RVSkJRWFZDTEVOQlFVTnpRaXhKUVVGNFFpeERRVUUyUWswc1IwRkJOMElzUTBGQmVrSXNSVUZCTkVRN1FVRkRNVVJETEVsQlFVRkJMRXRCUVVzc1EwRkJRMDhzU1VGQlRpeERRVUZYVWl4SFFVRllPMEZCUTBGUExFbEJRVUZCTEdkQ1FVRm5RaXhIUVVGSExFbEJRVWxGTEV0QlFVb3NRMEZCVlZRc1IwRkJSeXhEUVVGRFRTeE5RVUZrTEVOQlFXNUNPMEZCUTBGS0xFbEJRVUZCTEdkQ1FVRm5RaXhEUVVGRFRTeEpRVUZxUWl4RFFVRnpRa1FzWjBKQlFYUkNPenRCUVVOQkxGTkJRVXRHTEVOQlFVTXNSMEZCUnl4RFFVRlVMRVZCUVZsQkxFTkJRVU1zUjBGQlIwd3NSMEZCUnl4RFFVRkRUU3hOUVVGd1FpeEZRVUUwUWtRc1EwRkJReXhKUVVGSkxFTkJRV3BETEVWQlFXOURPMEZCUTJ4RFJTeE5RVUZCUVN4blFrRkJaMElzUTBGQlEwWXNRMEZCUkN4RFFVRm9RaXhIUVVGelFtWXNXVUZCV1N4RFFVRkRWU3hIUVVGSExFTkJRVU5MTEVOQlFVUXNRMEZCU2l4RlFVRlRTaXhMUVVGVUxFVkJRV2RDUXl4blFrRkJhRUlzUlVGQmEwTkRMRkZCUVd4RExFVkJRVFJEUXl4SFFVRTFReXhEUVVGc1F6dEJRVU5FT3p0QlFVTkVTQ3hKUVVGQlFTeExRVUZMTEVOQlFVTlRMRWRCUVU0N1FVRkRRVklzU1VGQlFVRXNaMEpCUVdkQ0xFTkJRVU5STEVkQlFXcENPMEZCUTBFc1YwRkJUMGdzWjBKQlFWQTdRVUZEUkRzN1FVRkZSQ3hOUVVGSlVDeEhRVUZITEVsQlFVbEJMRWRCUVVjc1EwRkJRMWNzVFVGQlppeEZRVUYxUWp0QlFVTnlRbGdzU1VGQlFVRXNSMEZCUnl4SFFVRkhRU3hIUVVGSExFTkJRVU5YTEUxQlFVb3NSVUZCVGp0QlFVTkVPenRCUVVWRU8wRkJRVWs3UVVGQlFUdEJRVUZCTzBGQlFVOVlMRVZCUVVGQkxFZEJRVkFzVFVGQlpTeFJRVUZtTEVsQlFUSkNRU3hIUVVGSExFdEJRVXNzU1VGQmRrTXNSVUZCTmtNN1FVRkRNME5ETEVsQlFVRkJMRXRCUVVzc1EwRkJRMDhzU1VGQlRpeERRVUZYVWl4SFFVRllPMEZCUTBGUExFbEJRVUZCTEdkQ1FVRm5RaXhIUVVGSExFVkJRVzVDTzBGQlEwRk1MRWxCUVVGQkxHZENRVUZuUWl4RFFVRkRUU3hKUVVGcVFpeERRVUZ6UWtRc1owSkJRWFJDT3p0QlFVTkJMRkZCUVVsTExGVkJRVlVzUjBGQlJ5eEZRVUZxUWp0QlFVRkJMRkZCUTBsU0xFbEJSRW83TzBGQlJVRXNVMEZCUzBFc1NVRkJUQ3hKUVVGWlNpeEhRVUZhTEVWQlFXbENPMEZCUTJZN1FVRkRRU3hWUVVGSlFTeEhRVUZITEVOQlFVTmhMR05CUVVvc1EwRkJiVUpVTEVsQlFXNUNMRU5CUVVvc1JVRkJOa0k3UVVGRE0wSlJMRkZCUVVGQkxGVkJRVlVzUTBGQlEwb3NTVUZCV0N4RFFVRm5Ra29zU1VGQmFFSTdRVUZEUkR0QlFVTkdPenRCUVVORVVTeEpRVUZCUVN4VlFVRlZMRU5CUVVORkxFbEJRVmc3TzBGQlEwRXNVMEZCUzFRc1EwRkJReXhIUVVGSExFTkJRVlFzUlVGQldVRXNRMEZCUXl4SFFVRkhUeXhWUVVGVkxFTkJRVU5PTEUxQlFUTkNMRVZCUVcxRFJDeERRVUZETEVsQlFVa3NRMEZCZUVNc1JVRkJNa003UVVGRGVrTkVMRTFCUVVGQkxFbEJRVWNzUjBGQlIxRXNWVUZCVlN4RFFVRkRVQ3hEUVVGRUxFTkJRV2hDTzBGQlEwRkZMRTFCUVVGQkxHZENRVUZuUWl4RFFVRkRTQ3hKUVVGRUxFTkJRV2hDTEVkQlFYZENaQ3haUVVGWkxFTkJRVU5WTEVkQlFVY3NRMEZCUTBrc1NVRkJSQ3hEUVVGS0xFVkJRVmRJTEV0QlFWZ3NSVUZCYTBKRExHZENRVUZzUWl4RlFVRnZRME1zVVVGQmNFTXNSVUZCT0VORExFbEJRVGxETEVOQlFYQkRPMEZCUTBRN08wRkJRMFJJTEVsQlFVRkJMRXRCUVVzc1EwRkJRMU1zUjBGQlRqdEJRVU5CVWl4SlFVRkJRU3huUWtGQlowSXNRMEZCUTFFc1IwRkJha0k3UVVGRFJDeEhRVzVDUkN4TlFXMUNUenRCUVVOTVNDeEpRVUZCUVN4blFrRkJaMElzUjBGQlIxQXNSMEZCYmtJN1FVRkRSRHM3UVVGRFJDeFRRVUZQVHl4blFrRkJVRHRCUVVORUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFUnBabVlnWm5KdmJTQW5MaTlpWVhObEp6dGNibWx0Y0c5eWRDQjdiR2x1WlVScFptWjlJR1p5YjIwZ0p5NHZiR2x1WlNjN1hHNWNibU52Ym5OMElHOWlhbVZqZEZCeWIzUnZkSGx3WlZSdlUzUnlhVzVuSUQwZ1QySnFaV04wTG5CeWIzUnZkSGx3WlM1MGIxTjBjbWx1Wnp0Y2JseHVYRzVsZUhCdmNuUWdZMjl1YzNRZ2FuTnZia1JwWm1ZZ1BTQnVaWGNnUkdsbVppZ3BPMXh1THk4Z1JHbHpZM0pwYldsdVlYUmxJR0psZEhkbFpXNGdkSGR2SUd4cGJtVnpJRzltSUhCeVpYUjBlUzF3Y21sdWRHVmtMQ0J6WlhKcFlXeHBlbVZrSUVwVFQwNGdkMmhsY21VZ2IyNWxJRzltSUhSb1pXMGdhR0Z6SUdGY2JpOHZJR1JoYm1kc2FXNW5JR052YlcxaElHRnVaQ0IwYUdVZ2IzUm9aWElnWkc5bGMyNG5kQzRnVkhWeWJuTWdiM1YwSUdsdVkyeDFaR2x1WnlCMGFHVWdaR0Z1WjJ4cGJtY2dZMjl0YldFZ2VXbGxiR1J6SUhSb1pTQnVhV05sYzNRZ2IzVjBjSFYwT2x4dWFuTnZia1JwWm1ZdWRYTmxURzl1WjJWemRGUnZhMlZ1SUQwZ2RISjFaVHRjYmx4dWFuTnZia1JwWm1ZdWRHOXJaVzVwZW1VZ1BTQnNhVzVsUkdsbVppNTBiMnRsYm1sNlpUdGNibXB6YjI1RWFXWm1MbU5oYzNSSmJuQjFkQ0E5SUdaMWJtTjBhVzl1S0haaGJIVmxLU0I3WEc0Z0lHTnZibk4wSUh0MWJtUmxabWx1WldSU1pYQnNZV05sYldWdWRDd2djM1J5YVc1bmFXWjVVbVZ3YkdGalpYSWdQU0FvYXl3Z2Rpa2dQVDRnZEhsd1pXOW1JSFlnUFQwOUlDZDFibVJsWm1sdVpXUW5JRDhnZFc1a1pXWnBibVZrVW1Wd2JHRmpaVzFsYm5RZ09pQjJmU0E5SUhSb2FYTXViM0IwYVc5dWN6dGNibHh1SUNCeVpYUjFjbTRnZEhsd1pXOW1JSFpoYkhWbElEMDlQU0FuYzNSeWFXNW5KeUEvSUhaaGJIVmxJRG9nU2xOUFRpNXpkSEpwYm1kcFpua29ZMkZ1YjI1cFkyRnNhWHBsS0haaGJIVmxMQ0J1ZFd4c0xDQnVkV3hzTENCemRISnBibWRwWm5sU1pYQnNZV05sY2lrc0lITjBjbWx1WjJsbWVWSmxjR3hoWTJWeUxDQW5JQ0FuS1R0Y2JuMDdYRzVxYzI5dVJHbG1aaTVsY1hWaGJITWdQU0JtZFc1amRHbHZiaWhzWldaMExDQnlhV2RvZENrZ2UxeHVJQ0J5WlhSMWNtNGdSR2xtWmk1d2NtOTBiM1I1Y0dVdVpYRjFZV3h6TG1OaGJHd29hbk52YmtScFptWXNJR3hsWm5RdWNtVndiR0ZqWlNndkxDaGJYRnh5WEZ4dVhTa3ZaeXdnSnlReEp5a3NJSEpwWjJoMExuSmxjR3hoWTJVb0x5d29XMXhjY2x4Y2JsMHBMMmNzSUNja01TY3BLVHRjYm4wN1hHNWNibVY0Y0c5eWRDQm1kVzVqZEdsdmJpQmthV1ptU25OdmJpaHZiR1JQWW1vc0lHNWxkMDlpYWl3Z2IzQjBhVzl1Y3lrZ2V5QnlaWFIxY200Z2FuTnZia1JwWm1ZdVpHbG1aaWh2YkdSUFltb3NJRzVsZDA5aWFpd2diM0IwYVc5dWN5azdJSDFjYmx4dUx5OGdWR2hwY3lCbWRXNWpkR2x2YmlCb1lXNWtiR1Z6SUhSb1pTQndjbVZ6Wlc1alpTQnZaaUJqYVhKamRXeGhjaUJ5WldabGNtVnVZMlZ6SUdKNUlHSmhhV3hwYm1jZ2IzVjBJSGRvWlc0Z1pXNWpiM1Z1ZEdWeWFXNW5JR0Z1WEc0dkx5QnZZbXBsWTNRZ2RHaGhkQ0JwY3lCaGJISmxZV1I1SUc5dUlIUm9aU0JjSW5OMFlXTnJYQ0lnYjJZZ2FYUmxiWE1nWW1WcGJtY2djSEp2WTJWemMyVmtMaUJCWTJObGNIUnpJR0Z1SUc5d2RHbHZibUZzSUhKbGNHeGhZMlZ5WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWTJGdWIyNXBZMkZzYVhwbEtHOWlhaXdnYzNSaFkyc3NJSEpsY0d4aFkyVnRaVzUwVTNSaFkyc3NJSEpsY0d4aFkyVnlMQ0JyWlhrcElIdGNiaUFnYzNSaFkyc2dQU0J6ZEdGamF5QjhmQ0JiWFR0Y2JpQWdjbVZ3YkdGalpXMWxiblJUZEdGamF5QTlJSEpsY0d4aFkyVnRaVzUwVTNSaFkyc2dmSHdnVzEwN1hHNWNiaUFnYVdZZ0tISmxjR3hoWTJWeUtTQjdYRzRnSUNBZ2IySnFJRDBnY21Wd2JHRmpaWElvYTJWNUxDQnZZbW9wTzF4dUlDQjlYRzVjYmlBZ2JHVjBJR2s3WEc1Y2JpQWdabTl5SUNocElEMGdNRHNnYVNBOElITjBZV05yTG14bGJtZDBhRHNnYVNBclBTQXhLU0I3WEc0Z0lDQWdhV1lnS0hOMFlXTnJXMmxkSUQwOVBTQnZZbW9wSUh0Y2JpQWdJQ0FnSUhKbGRIVnliaUJ5WlhCc1lXTmxiV1Z1ZEZOMFlXTnJXMmxkTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUd4bGRDQmpZVzV2Ym1sallXeHBlbVZrVDJKcU8xeHVYRzRnSUdsbUlDZ25XMjlpYW1WamRDQkJjbkpoZVYwbklEMDlQU0J2WW1wbFkzUlFjbTkwYjNSNWNHVlViMU4wY21sdVp5NWpZV3hzS0c5aWFpa3BJSHRjYmlBZ0lDQnpkR0ZqYXk1d2RYTm9LRzlpYWlrN1hHNGdJQ0FnWTJGdWIyNXBZMkZzYVhwbFpFOWlhaUE5SUc1bGR5QkJjbkpoZVNodlltb3ViR1Z1WjNSb0tUdGNiaUFnSUNCeVpYQnNZV05sYldWdWRGTjBZV05yTG5CMWMyZ29ZMkZ1YjI1cFkyRnNhWHBsWkU5aWFpazdYRzRnSUNBZ1ptOXlJQ2hwSUQwZ01Ec2dhU0E4SUc5aWFpNXNaVzVuZEdnN0lHa2dLejBnTVNrZ2UxeHVJQ0FnSUNBZ1kyRnViMjVwWTJGc2FYcGxaRTlpYWx0cFhTQTlJR05oYm05dWFXTmhiR2w2WlNodlltcGJhVjBzSUhOMFlXTnJMQ0J5WlhCc1lXTmxiV1Z1ZEZOMFlXTnJMQ0J5WlhCc1lXTmxjaXdnYTJWNUtUdGNiaUFnSUNCOVhHNGdJQ0FnYzNSaFkyc3VjRzl3S0NrN1hHNGdJQ0FnY21Wd2JHRmpaVzFsYm5SVGRHRmpheTV3YjNBb0tUdGNiaUFnSUNCeVpYUjFjbTRnWTJGdWIyNXBZMkZzYVhwbFpFOWlhanRjYmlBZ2ZWeHVYRzRnSUdsbUlDaHZZbW9nSmlZZ2IySnFMblJ2U2xOUFRpa2dlMXh1SUNBZ0lHOWlhaUE5SUc5aWFpNTBiMHBUVDA0b0tUdGNiaUFnZlZ4dVhHNGdJR2xtSUNoMGVYQmxiMllnYjJKcUlEMDlQU0FuYjJKcVpXTjBKeUFtSmlCdlltb2dJVDA5SUc1MWJHd3BJSHRjYmlBZ0lDQnpkR0ZqYXk1d2RYTm9LRzlpYWlrN1hHNGdJQ0FnWTJGdWIyNXBZMkZzYVhwbFpFOWlhaUE5SUh0OU8xeHVJQ0FnSUhKbGNHeGhZMlZ0Wlc1MFUzUmhZMnN1Y0hWemFDaGpZVzV2Ym1sallXeHBlbVZrVDJKcUtUdGNiaUFnSUNCc1pYUWdjMjl5ZEdWa1MyVjVjeUE5SUZ0ZExGeHVJQ0FnSUNBZ0lDQnJaWGs3WEc0Z0lDQWdabTl5SUNoclpYa2dhVzRnYjJKcUtTQjdYRzRnSUNBZ0lDQXZLaUJwYzNSaGJtSjFiQ0JwWjI1dmNtVWdaV3h6WlNBcUwxeHVJQ0FnSUNBZ2FXWWdLRzlpYWk1b1lYTlBkMjVRY205d1pYSjBlU2hyWlhrcEtTQjdYRzRnSUNBZ0lDQWdJSE52Y25SbFpFdGxlWE11Y0hWemFDaHJaWGtwTzF4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ0lDQnpiM0owWldSTFpYbHpMbk52Y25Rb0tUdGNiaUFnSUNCbWIzSWdLR2tnUFNBd095QnBJRHdnYzI5eWRHVmtTMlY1Y3k1c1pXNW5kR2c3SUdrZ0t6MGdNU2tnZTF4dUlDQWdJQ0FnYTJWNUlEMGdjMjl5ZEdWa1MyVjVjMXRwWFR0Y2JpQWdJQ0FnSUdOaGJtOXVhV05oYkdsNlpXUlBZbXBiYTJWNVhTQTlJR05oYm05dWFXTmhiR2w2WlNodlltcGJhMlY1WFN3Z2MzUmhZMnNzSUhKbGNHeGhZMlZ0Wlc1MFUzUmhZMnNzSUhKbGNHeGhZMlZ5TENCclpYa3BPMXh1SUNBZ0lIMWNiaUFnSUNCemRHRmpheTV3YjNBb0tUdGNiaUFnSUNCeVpYQnNZV05sYldWdWRGTjBZV05yTG5CdmNDZ3BPMXh1SUNCOUlHVnNjMlVnZTF4dUlDQWdJR05oYm05dWFXTmhiR2w2WldSUFltb2dQU0J2WW1vN1hHNGdJSDFjYmlBZ2NtVjBkWEp1SUdOaGJtOXVhV05oYkdsNlpXUlBZbW83WEc1OVhHNGlYWDA9XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGlmZkxpbmVzID0gZGlmZkxpbmVzO1xuZXhwb3J0cy5kaWZmVHJpbW1lZExpbmVzID0gZGlmZlRyaW1tZWRMaW5lcztcbmV4cG9ydHMubGluZURpZmYgPSB2b2lkIDA7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi9iYXNlXCIpKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fcGFyYW1zID0gcmVxdWlyZShcIi4uL3V0aWwvcGFyYW1zXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xudmFyIGxpbmVEaWZmID0gbmV3XG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fYmFzZVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbltcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblwiZGVmYXVsdFwiXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXSgpO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5leHBvcnRzLmxpbmVEaWZmID0gbGluZURpZmY7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5saW5lRGlmZi50b2tlbml6ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcmV0TGluZXMgPSBbXSxcbiAgICAgIGxpbmVzQW5kTmV3bGluZXMgPSB2YWx1ZS5zcGxpdCgvKFxcbnxcXHJcXG4pLyk7IC8vIElnbm9yZSB0aGUgZmluYWwgZW1wdHkgdG9rZW4gdGhhdCBvY2N1cnMgaWYgdGhlIHN0cmluZyBlbmRzIHdpdGggYSBuZXcgbGluZVxuXG4gIGlmICghbGluZXNBbmROZXdsaW5lc1tsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgbGluZXNBbmROZXdsaW5lcy5wb3AoKTtcbiAgfSAvLyBNZXJnZSB0aGUgY29udGVudCBhbmQgbGluZSBzZXBhcmF0b3JzIGludG8gc2luZ2xlIHRva2Vuc1xuXG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaW5lc0FuZE5ld2xpbmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGxpbmUgPSBsaW5lc0FuZE5ld2xpbmVzW2ldO1xuXG4gICAgaWYgKGkgJSAyICYmICF0aGlzLm9wdGlvbnMubmV3bGluZUlzVG9rZW4pIHtcbiAgICAgIHJldExpbmVzW3JldExpbmVzLmxlbmd0aCAtIDFdICs9IGxpbmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSkge1xuICAgICAgICBsaW5lID0gbGluZS50cmltKCk7XG4gICAgICB9XG5cbiAgICAgIHJldExpbmVzLnB1c2gobGluZSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJldExpbmVzO1xufTtcblxuZnVuY3Rpb24gZGlmZkxpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICByZXR1cm4gbGluZURpZmYuZGlmZihvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spO1xufVxuXG5mdW5jdGlvbiBkaWZmVHJpbW1lZExpbmVzKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjaykge1xuICB2YXIgb3B0aW9ucyA9XG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgKDAsXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICBfcGFyYW1zXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIC5cbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICBnZW5lcmF0ZU9wdGlvbnMpXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIChjYWxsYmFjaywge1xuICAgIGlnbm9yZVdoaXRlc3BhY2U6IHRydWVcbiAgfSk7XG4gIHJldHVybiBsaW5lRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWthV1ptTDJ4cGJtVXVhbk1pWFN3aWJtRnRaWE1pT2xzaWJHbHVaVVJwWm1ZaUxDSkVhV1ptSWl3aWRHOXJaVzVwZW1VaUxDSjJZV3gxWlNJc0luSmxkRXhwYm1Weklpd2liR2x1WlhOQmJtUk9aWGRzYVc1bGN5SXNJbk53YkdsMElpd2liR1Z1WjNSb0lpd2ljRzl3SWl3aWFTSXNJbXhwYm1VaUxDSnZjSFJwYjI1eklpd2libVYzYkdsdVpVbHpWRzlyWlc0aUxDSnBaMjV2Y21WWGFHbDBaWE53WVdObElpd2lkSEpwYlNJc0luQjFjMmdpTENKa2FXWm1UR2x1WlhNaUxDSnZiR1JUZEhJaUxDSnVaWGRUZEhJaUxDSmpZV3hzWW1GamF5SXNJbVJwWm1ZaUxDSmthV1ptVkhKcGJXMWxaRXhwYm1Weklpd2laMlZ1WlhKaGRHVlBjSFJwYjI1eklsMHNJbTFoY0hCcGJtZHpJam9pT3pzN096czdPenM3T3p0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlEwRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3T3pzN1FVRkZUeXhKUVVGTlFTeFJRVUZSTEVkQlFVYzdRVUZCU1VNN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUVzUTBGQlNpeEZRVUZxUWpzN096czdPMEZCUTFCRUxGRkJRVkVzUTBGQlEwVXNVVUZCVkN4SFFVRnZRaXhWUVVGVFF5eExRVUZVTEVWQlFXZENPMEZCUTJ4RExFMUJRVWxETEZGQlFWRXNSMEZCUnl4RlFVRm1PMEZCUVVFc1RVRkRTVU1zWjBKQlFXZENMRWRCUVVkR0xFdEJRVXNzUTBGQlEwY3NTMEZCVGl4RFFVRlpMRmRCUVZvc1EwRkVka0lzUTBGRWEwTXNRMEZKYkVNN08wRkJRMEVzVFVGQlNTeERRVUZEUkN4blFrRkJaMElzUTBGQlEwRXNaMEpCUVdkQ0xFTkJRVU5GTEUxQlFXcENMRWRCUVRCQ0xFTkJRVE5DTEVOQlFYSkNMRVZCUVc5RU8wRkJRMnhFUml4SlFVRkJRU3huUWtGQlowSXNRMEZCUTBjc1IwRkJha0k3UVVGRFJDeEhRVkJwUXl4RFFWTnNRenM3TzBGQlEwRXNUMEZCU3l4SlFVRkpReXhEUVVGRExFZEJRVWNzUTBGQllpeEZRVUZuUWtFc1EwRkJReXhIUVVGSFNpeG5Ra0ZCWjBJc1EwRkJRMFVzVFVGQmNrTXNSVUZCTmtORkxFTkJRVU1zUlVGQk9VTXNSVUZCYTBRN1FVRkRhRVFzVVVGQlNVTXNTVUZCU1N4SFFVRkhUQ3huUWtGQlowSXNRMEZCUTBrc1EwRkJSQ3hEUVVFelFqczdRVUZGUVN4UlFVRkpRU3hEUVVGRExFZEJRVWNzUTBGQlNpeEpRVUZUTEVOQlFVTXNTMEZCUzBVc1QwRkJUQ3hEUVVGaFF5eGpRVUV6UWl4RlFVRXlRenRCUVVONlExSXNUVUZCUVVFc1VVRkJVU3hEUVVGRFFTeFJRVUZSTEVOQlFVTkhMRTFCUVZRc1IwRkJhMElzUTBGQmJrSXNRMEZCVWl4SlFVRnBRMGNzU1VGQmFrTTdRVUZEUkN4TFFVWkVMRTFCUlU4N1FVRkRUQ3hWUVVGSkxFdEJRVXRETEU5QlFVd3NRMEZCWVVVc1owSkJRV3BDTEVWQlFXMURPMEZCUTJwRFNDeFJRVUZCUVN4SlFVRkpMRWRCUVVkQkxFbEJRVWtzUTBGQlEwa3NTVUZCVEN4RlFVRlFPMEZCUTBRN08wRkJRMFJXTEUxQlFVRkJMRkZCUVZFc1EwRkJRMWNzU1VGQlZDeERRVUZqVEN4SlFVRmtPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFRRVUZQVGl4UlFVRlFPMEZCUTBRc1EwRjRRa1E3TzBGQk1FSlBMRk5CUVZOWkxGTkJRVlFzUTBGQmJVSkRMRTFCUVc1Q0xFVkJRVEpDUXl4TlFVRXpRaXhGUVVGdFEwTXNVVUZCYmtNc1JVRkJOa003UVVGQlJTeFRRVUZQYmtJc1VVRkJVU3hEUVVGRGIwSXNTVUZCVkN4RFFVRmpTQ3hOUVVGa0xFVkJRWE5DUXl4TlFVRjBRaXhGUVVFNFFrTXNVVUZCT1VJc1EwRkJVRHRCUVVGcFJEczdRVUZEYUVjc1UwRkJVMFVzWjBKQlFWUXNRMEZCTUVKS0xFMUJRVEZDTEVWQlFXdERReXhOUVVGc1F5eEZRVUV3UTBNc1VVRkJNVU1zUlVGQmIwUTdRVUZEZWtRc1RVRkJTVklzVDBGQlR6dEJRVUZITzBGQlFVRTdRVUZCUVRzN1FVRkJRVmM3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVHRCUVVGQkxFZEJRV2RDU0N4UlFVRm9RaXhGUVVFd1FqdEJRVUZEVGl4SlFVRkJRU3huUWtGQlowSXNSVUZCUlR0QlFVRnVRaXhIUVVFeFFpeERRVUZrTzBGQlEwRXNVMEZCVDJJc1VVRkJVU3hEUVVGRGIwSXNTVUZCVkN4RFFVRmpTQ3hOUVVGa0xFVkJRWE5DUXl4TlFVRjBRaXhGUVVFNFFsQXNUMEZCT1VJc1EwRkJVRHRCUVVORUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFUnBabVlnWm5KdmJTQW5MaTlpWVhObEp6dGNibWx0Y0c5eWRDQjdaMlZ1WlhKaGRHVlBjSFJwYjI1emZTQm1jbTl0SUNjdUxpOTFkR2xzTDNCaGNtRnRjeWM3WEc1Y2JtVjRjRzl5ZENCamIyNXpkQ0JzYVc1bFJHbG1aaUE5SUc1bGR5QkVhV1ptS0NrN1hHNXNhVzVsUkdsbVppNTBiMnRsYm1sNlpTQTlJR1oxYm1OMGFXOXVLSFpoYkhWbEtTQjdYRzRnSUd4bGRDQnlaWFJNYVc1bGN5QTlJRnRkTEZ4dUlDQWdJQ0FnYkdsdVpYTkJibVJPWlhkc2FXNWxjeUE5SUhaaGJIVmxMbk53YkdsMEtDOG9YRnh1ZkZ4Y2NseGNiaWt2S1R0Y2JseHVJQ0F2THlCSloyNXZjbVVnZEdobElHWnBibUZzSUdWdGNIUjVJSFJ2YTJWdUlIUm9ZWFFnYjJOamRYSnpJR2xtSUhSb1pTQnpkSEpwYm1jZ1pXNWtjeUIzYVhSb0lHRWdibVYzSUd4cGJtVmNiaUFnYVdZZ0tDRnNhVzVsYzBGdVpFNWxkMnhwYm1WelcyeHBibVZ6UVc1a1RtVjNiR2x1WlhNdWJHVnVaM1JvSUMwZ01WMHBJSHRjYmlBZ0lDQnNhVzVsYzBGdVpFNWxkMnhwYm1WekxuQnZjQ2dwTzF4dUlDQjlYRzVjYmlBZ0x5OGdUV1Z5WjJVZ2RHaGxJR052Ym5SbGJuUWdZVzVrSUd4cGJtVWdjMlZ3WVhKaGRHOXljeUJwYm5SdklITnBibWRzWlNCMGIydGxibk5jYmlBZ1ptOXlJQ2hzWlhRZ2FTQTlJREE3SUdrZ1BDQnNhVzVsYzBGdVpFNWxkMnhwYm1WekxteGxibWQwYURzZ2FTc3JLU0I3WEc0Z0lDQWdiR1YwSUd4cGJtVWdQU0JzYVc1bGMwRnVaRTVsZDJ4cGJtVnpXMmxkTzF4dVhHNGdJQ0FnYVdZZ0tHa2dKU0F5SUNZbUlDRjBhR2x6TG05d2RHbHZibk11Ym1WM2JHbHVaVWx6Vkc5clpXNHBJSHRjYmlBZ0lDQWdJSEpsZEV4cGJtVnpXM0psZEV4cGJtVnpMbXhsYm1kMGFDQXRJREZkSUNzOUlHeHBibVU3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWFXZHViM0psVjJocGRHVnpjR0ZqWlNrZ2UxeHVJQ0FnSUNBZ0lDQnNhVzVsSUQwZ2JHbHVaUzUwY21sdEtDazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnlaWFJNYVc1bGN5NXdkWE5vS0d4cGJtVXBPMXh1SUNBZ0lIMWNiaUFnZlZ4dVhHNGdJSEpsZEhWeWJpQnlaWFJNYVc1bGN6dGNibjA3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCa2FXWm1UR2x1WlhNb2IyeGtVM1J5TENCdVpYZFRkSElzSUdOaGJHeGlZV05yS1NCN0lISmxkSFZ5YmlCc2FXNWxSR2xtWmk1a2FXWm1LRzlzWkZOMGNpd2dibVYzVTNSeUxDQmpZV3hzWW1GamF5azdJSDFjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJrYVdabVZISnBiVzFsWkV4cGJtVnpLRzlzWkZOMGNpd2dibVYzVTNSeUxDQmpZV3hzWW1GamF5a2dlMXh1SUNCc1pYUWdiM0IwYVc5dWN5QTlJR2RsYm1WeVlYUmxUM0IwYVc5dWN5aGpZV3hzWW1GamF5d2dlMmxuYm05eVpWZG9hWFJsYzNCaFkyVTZJSFJ5ZFdWOUtUdGNiaUFnY21WMGRYSnVJR3hwYm1WRWFXWm1MbVJwWm1Zb2IyeGtVM1J5TENCdVpYZFRkSElzSUc5d2RHbHZibk1wTzF4dWZWeHVJbDE5XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGlmZlNlbnRlbmNlcyA9IGRpZmZTZW50ZW5jZXM7XG5leHBvcnRzLnNlbnRlbmNlRGlmZiA9IHZvaWQgMDtcblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2VcIikpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xudmFyIHNlbnRlbmNlRGlmZiA9IG5ld1xuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2Jhc2Vcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5bXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cImRlZmF1bHRcIlxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbl0oKTtcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuZXhwb3J0cy5zZW50ZW5jZURpZmYgPSBzZW50ZW5jZURpZmY7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5zZW50ZW5jZURpZmYudG9rZW5pemUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlLnNwbGl0KC8oXFxTLis/Wy4hP10pKD89XFxzK3wkKS8pO1xufTtcblxuZnVuY3Rpb24gZGlmZlNlbnRlbmNlcyhvbGRTdHIsIG5ld1N0ciwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIHNlbnRlbmNlRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBjYWxsYmFjayk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTlrYVdabUwzTmxiblJsYm1ObExtcHpJbDBzSW01aGJXVnpJanBiSW5ObGJuUmxibU5sUkdsbVppSXNJa1JwWm1ZaUxDSjBiMnRsYm1sNlpTSXNJblpoYkhWbElpd2ljM0JzYVhRaUxDSmthV1ptVTJWdWRHVnVZMlZ6SWl3aWIyeGtVM1J5SWl3aWJtVjNVM1J5SWl3aVkyRnNiR0poWTJzaUxDSmthV1ptSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUczdPenM3UVVGSFR5eEpRVUZOUVN4WlFVRlpMRWRCUVVjN1FVRkJTVU03UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRXNRMEZCU2l4RlFVRnlRanM3T3pzN08wRkJRMUJFTEZsQlFWa3NRMEZCUTBVc1VVRkJZaXhIUVVGM1FpeFZRVUZUUXl4TFFVRlVMRVZCUVdkQ08wRkJRM1JETEZOQlFVOUJMRXRCUVVzc1EwRkJRME1zUzBGQlRpeERRVUZaTEhWQ1FVRmFMRU5CUVZBN1FVRkRSQ3hEUVVaRU96dEJRVWxQTEZOQlFWTkRMR0ZCUVZRc1EwRkJkVUpETEUxQlFYWkNMRVZCUVN0Q1F5eE5RVUV2UWl4RlFVRjFRME1zVVVGQmRrTXNSVUZCYVVRN1FVRkJSU3hUUVVGUFVpeFpRVUZaTEVOQlFVTlRMRWxCUVdJc1EwRkJhMEpJTEUxQlFXeENMRVZCUVRCQ1F5eE5RVUV4UWl4RlFVRnJRME1zVVVGQmJFTXNRMEZCVUR0QlFVRnhSQ0lzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0JFYVdabUlHWnliMjBnSnk0dlltRnpaU2M3WEc1Y2JseHVaWGh3YjNKMElHTnZibk4wSUhObGJuUmxibU5sUkdsbVppQTlJRzVsZHlCRWFXWm1LQ2s3WEc1elpXNTBaVzVqWlVScFptWXVkRzlyWlc1cGVtVWdQU0JtZFc1amRHbHZiaWgyWVd4MVpTa2dlMXh1SUNCeVpYUjFjbTRnZG1Gc2RXVXVjM0JzYVhRb0x5aGNYRk11S3o5YkxpRS9YU2tvUHoxY1hITXJmQ1FwTHlrN1hHNTlPMXh1WEc1bGVIQnZjblFnWm5WdVkzUnBiMjRnWkdsbVpsTmxiblJsYm1ObGN5aHZiR1JUZEhJc0lHNWxkMU4wY2l3Z1kyRnNiR0poWTJzcElIc2djbVYwZFhKdUlITmxiblJsYm1ObFJHbG1aaTVrYVdabUtHOXNaRk4wY2l3Z2JtVjNVM1J5TENCallXeHNZbUZqYXlrN0lIMWNiaUpkZlE9PVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRpZmZXb3JkcyA9IGRpZmZXb3JkcztcbmV4cG9ydHMuZGlmZldvcmRzV2l0aFNwYWNlID0gZGlmZldvcmRzV2l0aFNwYWNlO1xuZXhwb3J0cy53b3JkRGlmZiA9IHZvaWQgMDtcblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2Jhc2VcIikpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9wYXJhbXMgPSByZXF1aXJlKFwiLi4vdXRpbC9wYXJhbXNcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki8gZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4vLyBCYXNlZCBvbiBodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9MYXRpbl9zY3JpcHRfaW5fVW5pY29kZVxuLy9cbi8vIFJhbmdlcyBhbmQgZXhjZXB0aW9uczpcbi8vIExhdGluLTEgU3VwcGxlbWVudCwgMDA4MOKAkzAwRkZcbi8vICAtIFUrMDBENyAgw5cgTXVsdGlwbGljYXRpb24gc2lnblxuLy8gIC0gVSswMEY3ICDDtyBEaXZpc2lvbiBzaWduXG4vLyBMYXRpbiBFeHRlbmRlZC1BLCAwMTAw4oCTMDE3RlxuLy8gTGF0aW4gRXh0ZW5kZWQtQiwgMDE4MOKAkzAyNEZcbi8vIElQQSBFeHRlbnNpb25zLCAwMjUw4oCTMDJBRlxuLy8gU3BhY2luZyBNb2RpZmllciBMZXR0ZXJzLCAwMkIw4oCTMDJGRlxuLy8gIC0gVSswMkM3ICDLhyAmIzcxMTsgIENhcm9uXG4vLyAgLSBVKzAyRDggIMuYICYjNzI4OyAgQnJldmVcbi8vICAtIFUrMDJEOSAgy5kgJiM3Mjk7ICBEb3QgQWJvdmVcbi8vICAtIFUrMDJEQSAgy5ogJiM3MzA7ICBSaW5nIEFib3ZlXG4vLyAgLSBVKzAyREIgIMubICYjNzMxOyAgT2dvbmVrXG4vLyAgLSBVKzAyREMgIMucICYjNzMyOyAgU21hbGwgVGlsZGVcbi8vICAtIFUrMDJERCAgy50gJiM3MzM7ICBEb3VibGUgQWN1dGUgQWNjZW50XG4vLyBMYXRpbiBFeHRlbmRlZCBBZGRpdGlvbmFsLCAxRTAw4oCTMUVGRlxudmFyIGV4dGVuZGVkV29yZENoYXJzID0gL15bQS1aYS16XFx4QzAtXFx1MDJDNlxcdTAyQzgtXFx1MDJEN1xcdTAyREUtXFx1MDJGRlxcdTFFMDAtXFx1MUVGRl0rJC87XG52YXIgcmVXaGl0ZXNwYWNlID0gL1xcUy87XG52YXIgd29yZERpZmYgPSBuZXdcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9iYXNlXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuW1xuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJkZWZhdWx0XCJcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5dKCk7XG5cbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbmV4cG9ydHMud29yZERpZmYgPSB3b3JkRGlmZjtcblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbndvcmREaWZmLmVxdWFscyA9IGZ1bmN0aW9uIChsZWZ0LCByaWdodCkge1xuICBpZiAodGhpcy5vcHRpb25zLmlnbm9yZUNhc2UpIHtcbiAgICBsZWZ0ID0gbGVmdC50b0xvd2VyQ2FzZSgpO1xuICAgIHJpZ2h0ID0gcmlnaHQudG9Mb3dlckNhc2UoKTtcbiAgfVxuXG4gIHJldHVybiBsZWZ0ID09PSByaWdodCB8fCB0aGlzLm9wdGlvbnMuaWdub3JlV2hpdGVzcGFjZSAmJiAhcmVXaGl0ZXNwYWNlLnRlc3QobGVmdCkgJiYgIXJlV2hpdGVzcGFjZS50ZXN0KHJpZ2h0KTtcbn07XG5cbndvcmREaWZmLnRva2VuaXplID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIC8vIEFsbCB3aGl0ZXNwYWNlIHN5bWJvbHMgZXhjZXB0IG5ld2xpbmUgZ3JvdXAgaW50byBvbmUgdG9rZW4sIGVhY2ggbmV3bGluZSAtIGluIHNlcGFyYXRlIHRva2VuXG4gIHZhciB0b2tlbnMgPSB2YWx1ZS5zcGxpdCgvKFteXFxTXFxyXFxuXSt8WygpW1xcXXt9J1wiXFxyXFxuXXxcXGIpLyk7IC8vIEpvaW4gdGhlIGJvdW5kYXJ5IHNwbGl0cyB0aGF0IHdlIGRvIG5vdCBjb25zaWRlciB0byBiZSBib3VuZGFyaWVzLiBUaGlzIGlzIHByaW1hcmlseSB0aGUgZXh0ZW5kZWQgTGF0aW4gY2hhcmFjdGVyIHNldC5cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAvLyBJZiB3ZSBoYXZlIGFuIGVtcHR5IHN0cmluZyBpbiB0aGUgbmV4dCBmaWVsZCBhbmQgd2UgaGF2ZSBvbmx5IHdvcmQgY2hhcnMgYmVmb3JlIGFuZCBhZnRlciwgbWVyZ2VcbiAgICBpZiAoIXRva2Vuc1tpICsgMV0gJiYgdG9rZW5zW2kgKyAyXSAmJiBleHRlbmRlZFdvcmRDaGFycy50ZXN0KHRva2Vuc1tpXSkgJiYgZXh0ZW5kZWRXb3JkQ2hhcnMudGVzdCh0b2tlbnNbaSArIDJdKSkge1xuICAgICAgdG9rZW5zW2ldICs9IHRva2Vuc1tpICsgMl07XG4gICAgICB0b2tlbnMuc3BsaWNlKGkgKyAxLCAyKTtcbiAgICAgIGktLTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdG9rZW5zO1xufTtcblxuZnVuY3Rpb24gZGlmZldvcmRzKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPVxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICgwLFxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgX3BhcmFtc1xuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgZ2VuZXJhdGVPcHRpb25zKVxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAob3B0aW9ucywge1xuICAgIGlnbm9yZVdoaXRlc3BhY2U6IHRydWVcbiAgfSk7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gZGlmZldvcmRzV2l0aFNwYWNlKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKSB7XG4gIHJldHVybiB3b3JkRGlmZi5kaWZmKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OWthV1ptTDNkdmNtUXVhbk1pWFN3aWJtRnRaWE1pT2xzaVpYaDBaVzVrWldSWGIzSmtRMmhoY25NaUxDSnlaVmRvYVhSbGMzQmhZMlVpTENKM2IzSmtSR2xtWmlJc0lrUnBabVlpTENKbGNYVmhiSE1pTENKc1pXWjBJaXdpY21sbmFIUWlMQ0p2Y0hScGIyNXpJaXdpYVdkdWIzSmxRMkZ6WlNJc0luUnZURzkzWlhKRFlYTmxJaXdpYVdkdWIzSmxWMmhwZEdWemNHRmpaU0lzSW5SbGMzUWlMQ0owYjJ0bGJtbDZaU0lzSW5aaGJIVmxJaXdpZEc5clpXNXpJaXdpYzNCc2FYUWlMQ0pwSWl3aWJHVnVaM1JvSWl3aWMzQnNhV05sSWl3aVpHbG1abGR2Y21Seklpd2liMnhrVTNSeUlpd2libVYzVTNSeUlpd2laMlZ1WlhKaGRHVlBjSFJwYjI1eklpd2laR2xtWmlJc0ltUnBabVpYYjNKa2MxZHBkR2hUY0dGalpTSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3pzN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVTkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3T3pzN08wRkJSVUU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEVzU1VGQlRVRXNhVUpCUVdsQ0xFZEJRVWNzSzBSQlFURkNPMEZCUlVFc1NVRkJUVU1zV1VGQldTeEhRVUZITEVsQlFYSkNPMEZCUlU4c1NVRkJUVU1zVVVGQlVTeEhRVUZITzBGQlFVbERPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQkxFTkJRVW9zUlVGQmFrSTdPenM3T3p0QlFVTlFSQ3hSUVVGUkxFTkJRVU5GTEUxQlFWUXNSMEZCYTBJc1ZVRkJVME1zU1VGQlZDeEZRVUZsUXl4TFFVRm1MRVZCUVhOQ08wRkJRM1JETEUxQlFVa3NTMEZCUzBNc1QwRkJUQ3hEUVVGaFF5eFZRVUZxUWl4RlFVRTJRanRCUVVNelFrZ3NTVUZCUVVFc1NVRkJTU3hIUVVGSFFTeEpRVUZKTEVOQlFVTkpMRmRCUVV3c1JVRkJVRHRCUVVOQlNDeEpRVUZCUVN4TFFVRkxMRWRCUVVkQkxFdEJRVXNzUTBGQlEwY3NWMEZCVGl4RlFVRlNPMEZCUTBRN08wRkJRMFFzVTBGQlQwb3NTVUZCU1N4TFFVRkxReXhMUVVGVUxFbEJRVzFDTEV0QlFVdERMRTlCUVV3c1EwRkJZVWNzWjBKQlFXSXNTVUZCYVVNc1EwRkJRMVFzV1VGQldTeERRVUZEVlN4SlFVRmlMRU5CUVd0Q1RpeEpRVUZzUWl4RFFVRnNReXhKUVVFMlJDeERRVUZEU2l4WlFVRlpMRU5CUVVOVkxFbEJRV0lzUTBGQmEwSk1MRXRCUVd4Q0xFTkJRWGhHTzBGQlEwUXNRMEZPUkRzN1FVRlBRVW9zVVVGQlVTeERRVUZEVlN4UlFVRlVMRWRCUVc5Q0xGVkJRVk5ETEV0QlFWUXNSVUZCWjBJN1FVRkRiRU03UVVGRFFTeE5RVUZKUXl4TlFVRk5MRWRCUVVkRUxFdEJRVXNzUTBGQlEwVXNTMEZCVGl4RFFVRlpMR2xEUVVGYUxFTkJRV0lzUTBGR2EwTXNRMEZKYkVNN08wRkJRMEVzVDBGQlN5eEpRVUZKUXl4RFFVRkRMRWRCUVVjc1EwRkJZaXhGUVVGblFrRXNRMEZCUXl4SFFVRkhSaXhOUVVGTkxFTkJRVU5ITEUxQlFWQXNSMEZCWjBJc1EwRkJjRU1zUlVGQmRVTkVMRU5CUVVNc1JVRkJlRU1zUlVGQk5FTTdRVUZETVVNN1FVRkRRU3hSUVVGSkxFTkJRVU5HTEUxQlFVMHNRMEZCUTBVc1EwRkJReXhIUVVGSExFTkJRVXdzUTBGQlVDeEpRVUZyUWtZc1RVRkJUU3hEUVVGRFJTeERRVUZETEVkQlFVY3NRMEZCVEN4RFFVRjRRaXhKUVVOTGFFSXNhVUpCUVdsQ0xFTkJRVU5YTEVsQlFXeENMRU5CUVhWQ1J5eE5RVUZOTEVOQlFVTkZMRU5CUVVRc1EwRkJOMElzUTBGRVRDeEpRVVZMYUVJc2FVSkJRV2xDTEVOQlFVTlhMRWxCUVd4Q0xFTkJRWFZDUnl4TlFVRk5MRU5CUVVORkxFTkJRVU1zUjBGQlJ5eERRVUZNTEVOQlFUZENMRU5CUmxRc1JVRkZaMFE3UVVGRE9VTkdMRTFCUVVGQkxFMUJRVTBzUTBGQlEwVXNRMEZCUkN4RFFVRk9MRWxCUVdGR0xFMUJRVTBzUTBGQlEwVXNRMEZCUXl4SFFVRkhMRU5CUVV3c1EwRkJia0k3UVVGRFFVWXNUVUZCUVVFc1RVRkJUU3hEUVVGRFNTeE5RVUZRTEVOQlFXTkdMRU5CUVVNc1IwRkJSeXhEUVVGc1FpeEZRVUZ4UWl4RFFVRnlRanRCUVVOQlFTeE5RVUZCUVN4RFFVRkRPMEZCUTBZN1FVRkRSanM3UVVGRlJDeFRRVUZQUml4TlFVRlFPMEZCUTBRc1EwRnFRa1E3TzBGQmJVSlBMRk5CUVZOTExGTkJRVlFzUTBGQmJVSkRMRTFCUVc1Q0xFVkJRVEpDUXl4TlFVRXpRaXhGUVVGdFEyUXNUMEZCYmtNc1JVRkJORU03UVVGRGFrUkJMRVZCUVVGQkxFOUJRVTg3UVVGQlJ6dEJRVUZCTzBGQlFVRTdPMEZCUVVGbE8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVFN1FVRkJRU3hIUVVGblFtWXNUMEZCYUVJc1JVRkJlVUk3UVVGQlEwY3NTVUZCUVVFc1owSkJRV2RDTEVWQlFVVTdRVUZCYmtJc1IwRkJla0lzUTBGQlZqdEJRVU5CTEZOQlFVOVNMRkZCUVZFc1EwRkJRM0ZDTEVsQlFWUXNRMEZCWTBnc1RVRkJaQ3hGUVVGelFrTXNUVUZCZEVJc1JVRkJPRUprTEU5QlFUbENMRU5CUVZBN1FVRkRSRHM3UVVGRlRTeFRRVUZUYVVJc2EwSkJRVlFzUTBGQk5FSktMRTFCUVRWQ0xFVkJRVzlEUXl4TlFVRndReXhGUVVFMFEyUXNUMEZCTlVNc1JVRkJjVVE3UVVGRE1VUXNVMEZCVDB3c1VVRkJVU3hEUVVGRGNVSXNTVUZCVkN4RFFVRmpTQ3hOUVVGa0xFVkJRWE5DUXl4TlFVRjBRaXhGUVVFNFFtUXNUMEZCT1VJc1EwRkJVRHRCUVVORUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElFUnBabVlnWm5KdmJTQW5MaTlpWVhObEp6dGNibWx0Y0c5eWRDQjdaMlZ1WlhKaGRHVlBjSFJwYjI1emZTQm1jbTl0SUNjdUxpOTFkR2xzTDNCaGNtRnRjeWM3WEc1Y2JpOHZJRUpoYzJWa0lHOXVJR2gwZEhCek9pOHZaVzR1ZDJscmFYQmxaR2xoTG05eVp5OTNhV3RwTDB4aGRHbHVYM05qY21sd2RGOXBibDlWYm1samIyUmxYRzR2TDF4dUx5OGdVbUZ1WjJWeklHRnVaQ0JsZUdObGNIUnBiMjV6T2x4dUx5OGdUR0YwYVc0dE1TQlRkWEJ3YkdWdFpXNTBMQ0F3TURndzRvQ1RNREJHUmx4dUx5OGdJQzBnVlNzd01FUTNJQ0REbHlCTmRXeDBhWEJzYVdOaGRHbHZiaUJ6YVdkdVhHNHZMeUFnTFNCVkt6QXdSamNnSU1PM0lFUnBkbWx6YVc5dUlITnBaMjVjYmk4dklFeGhkR2x1SUVWNGRHVnVaR1ZrTFVFc0lEQXhNRERpZ0pNd01UZEdYRzR2THlCTVlYUnBiaUJGZUhSbGJtUmxaQzFDTENBd01UZ3c0b0NUTURJMFJseHVMeThnU1ZCQklFVjRkR1Z1YzJsdmJuTXNJREF5TlREaWdKTXdNa0ZHWEc0dkx5QlRjR0ZqYVc1bklFMXZaR2xtYVdWeUlFeGxkSFJsY25Nc0lEQXlRakRpZ0pNd01rWkdYRzR2THlBZ0xTQlZLekF5UXpjZ0lNdUhJQ1lqTnpFeE95QWdRMkZ5YjI1Y2JpOHZJQ0F0SUZVck1ESkVPQ0FneTVnZ0ppTTNNamc3SUNCQ2NtVjJaVnh1THk4Z0lDMGdWU3N3TWtRNUlDRExtU0FtSXpjeU9Uc2dJRVJ2ZENCQlltOTJaVnh1THk4Z0lDMGdWU3N3TWtSQklDRExtaUFtSXpjek1Ec2dJRkpwYm1jZ1FXSnZkbVZjYmk4dklDQXRJRlVyTURKRVFpQWd5NXNnSmlNM016RTdJQ0JQWjI5dVpXdGNiaTh2SUNBdElGVXJNREpFUXlBZ3k1d2dKaU0zTXpJN0lDQlRiV0ZzYkNCVWFXeGtaVnh1THk4Z0lDMGdWU3N3TWtSRUlDRExuU0FtSXpjek16c2dJRVJ2ZFdKc1pTQkJZM1YwWlNCQlkyTmxiblJjYmk4dklFeGhkR2x1SUVWNGRHVnVaR1ZrSUVGa1pHbDBhVzl1WVd3c0lERkZNRERpZ0pNeFJVWkdYRzVqYjI1emRDQmxlSFJsYm1SbFpGZHZjbVJEYUdGeWN5QTlJQzllVzJFdGVrRXRXbHhjZFh0RE1IMHRYRngxZTBaR2ZWeGNkWHRFT0gwdFhGeDFlMFkyZlZ4Y2RYdEdPSDB0WEZ4MWV6SkRObjFjWEhWN01rTTRmUzFjWEhWN01rUTNmVnhjZFhzeVJFVjlMVnhjZFhzeVJrWjlYRngxZXpGRk1EQjlMVnhjZFhzeFJVWkdmVjBySkM5MU8xeHVYRzVqYjI1emRDQnlaVmRvYVhSbGMzQmhZMlVnUFNBdlhGeFRMenRjYmx4dVpYaHdiM0owSUdOdmJuTjBJSGR2Y21SRWFXWm1JRDBnYm1WM0lFUnBabVlvS1R0Y2JuZHZjbVJFYVdabUxtVnhkV0ZzY3lBOUlHWjFibU4wYVc5dUtHeGxablFzSUhKcFoyaDBLU0I3WEc0Z0lHbG1JQ2gwYUdsekxtOXdkR2x2Ym5NdWFXZHViM0psUTJGelpTa2dlMXh1SUNBZ0lHeGxablFnUFNCc1pXWjBMblJ2VEc5M1pYSkRZWE5sS0NrN1hHNGdJQ0FnY21sbmFIUWdQU0J5YVdkb2RDNTBiMHh2ZDJWeVEyRnpaU2dwTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJzWldaMElEMDlQU0J5YVdkb2RDQjhmQ0FvZEdocGN5NXZjSFJwYjI1ekxtbG5ibTl5WlZkb2FYUmxjM0JoWTJVZ0ppWWdJWEpsVjJocGRHVnpjR0ZqWlM1MFpYTjBLR3hsWm5RcElDWW1JQ0Z5WlZkb2FYUmxjM0JoWTJVdWRHVnpkQ2h5YVdkb2RDa3BPMXh1ZlR0Y2JuZHZjbVJFYVdabUxuUnZhMlZ1YVhwbElEMGdablZ1WTNScGIyNG9kbUZzZFdVcElIdGNiaUFnTHk4Z1FXeHNJSGRvYVhSbGMzQmhZMlVnYzNsdFltOXNjeUJsZUdObGNIUWdibVYzYkdsdVpTQm5jbTkxY0NCcGJuUnZJRzl1WlNCMGIydGxiaXdnWldGamFDQnVaWGRzYVc1bElDMGdhVzRnYzJWd1lYSmhkR1VnZEc5clpXNWNiaUFnYkdWMElIUnZhMlZ1Y3lBOUlIWmhiSFZsTG5Od2JHbDBLQzhvVzE1Y1hGTmNYSEpjWEc1ZEszeGJLQ2xiWEZ4ZGUzMG5YQ0pjWEhKY1hHNWRmRnhjWWlrdktUdGNibHh1SUNBdkx5QktiMmx1SUhSb1pTQmliM1Z1WkdGeWVTQnpjR3hwZEhNZ2RHaGhkQ0IzWlNCa2J5QnViM1FnWTI5dWMybGtaWElnZEc4Z1ltVWdZbTkxYm1SaGNtbGxjeTRnVkdocGN5QnBjeUJ3Y21sdFlYSnBiSGtnZEdobElHVjRkR1Z1WkdWa0lFeGhkR2x1SUdOb1lYSmhZM1JsY2lCelpYUXVYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z2RHOXJaVzV6TG14bGJtZDBhQ0F0SURFN0lHa3JLeWtnZTF4dUlDQWdJQzh2SUVsbUlIZGxJR2hoZG1VZ1lXNGdaVzF3ZEhrZ2MzUnlhVzVuSUdsdUlIUm9aU0J1WlhoMElHWnBaV3hrSUdGdVpDQjNaU0JvWVhabElHOXViSGtnZDI5eVpDQmphR0Z5Y3lCaVpXWnZjbVVnWVc1a0lHRm1kR1Z5TENCdFpYSm5aVnh1SUNBZ0lHbG1JQ2doZEc5clpXNXpXMmtnS3lBeFhTQW1KaUIwYjJ0bGJuTmJhU0FySURKZFhHNGdJQ0FnSUNBZ0lDQWdKaVlnWlhoMFpXNWtaV1JYYjNKa1EyaGhjbk11ZEdWemRDaDBiMnRsYm5OYmFWMHBYRzRnSUNBZ0lDQWdJQ0FnSmlZZ1pYaDBaVzVrWldSWGIzSmtRMmhoY25NdWRHVnpkQ2gwYjJ0bGJuTmJhU0FySURKZEtTa2dlMXh1SUNBZ0lDQWdkRzlyWlc1elcybGRJQ3M5SUhSdmEyVnVjMXRwSUNzZ01sMDdYRzRnSUNBZ0lDQjBiMnRsYm5NdWMzQnNhV05sS0drZ0t5QXhMQ0F5S1R0Y2JpQWdJQ0FnSUdrdExUdGNiaUFnSUNCOVhHNGdJSDFjYmx4dUlDQnlaWFIxY200Z2RHOXJaVzV6TzF4dWZUdGNibHh1Wlhod2IzSjBJR1oxYm1OMGFXOXVJR1JwWm1aWGIzSmtjeWh2YkdSVGRISXNJRzVsZDFOMGNpd2diM0IwYVc5dWN5a2dlMXh1SUNCdmNIUnBiMjV6SUQwZ1oyVnVaWEpoZEdWUGNIUnBiMjV6S0c5d2RHbHZibk1zSUh0cFoyNXZjbVZYYUdsMFpYTndZV05sT2lCMGNuVmxmU2s3WEc0Z0lISmxkSFZ5YmlCM2IzSmtSR2xtWmk1a2FXWm1LRzlzWkZOMGNpd2dibVYzVTNSeUxDQnZjSFJwYjI1ektUdGNibjFjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdScFptWlhiM0prYzFkcGRHaFRjR0ZqWlNodmJHUlRkSElzSUc1bGQxTjBjaXdnYjNCMGFXOXVjeWtnZTF4dUlDQnlaWFIxY200Z2QyOXlaRVJwWm1ZdVpHbG1aaWh2YkdSVGRISXNJRzVsZDFOMGNpd2diM0IwYVc5dWN5azdYRzU5WEc0aVhYMD1cbiIsIi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiRGlmZlwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYmFzZVtcImRlZmF1bHRcIl07XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGlmZkNoYXJzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jaGFyYWN0ZXIuZGlmZkNoYXJzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRpZmZXb3Jkc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfd29yZC5kaWZmV29yZHM7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGlmZldvcmRzV2l0aFNwYWNlXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF93b3JkLmRpZmZXb3Jkc1dpdGhTcGFjZTtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkaWZmTGluZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2xpbmUuZGlmZkxpbmVzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRpZmZUcmltbWVkTGluZXNcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2xpbmUuZGlmZlRyaW1tZWRMaW5lcztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJkaWZmU2VudGVuY2VzXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9zZW50ZW5jZS5kaWZmU2VudGVuY2VzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRpZmZDc3NcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2Nzcy5kaWZmQ3NzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImRpZmZKc29uXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9qc29uLmRpZmZKc29uO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNhbm9uaWNhbGl6ZVwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfanNvbi5jYW5vbmljYWxpemU7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiZGlmZkFycmF5c1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYXJyYXkuZGlmZkFycmF5cztcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJhcHBseVBhdGNoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9hcHBseS5hcHBseVBhdGNoO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImFwcGx5UGF0Y2hlc1wiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfYXBwbHkuYXBwbHlQYXRjaGVzO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInBhcnNlUGF0Y2hcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3BhcnNlLnBhcnNlUGF0Y2g7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwibWVyZ2VcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX21lcmdlLm1lcmdlO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInN0cnVjdHVyZWRQYXRjaFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY3JlYXRlLnN0cnVjdHVyZWRQYXRjaDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjcmVhdGVUd29GaWxlc1BhdGNoXCIsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgcmV0dXJuIF9jcmVhdGUuY3JlYXRlVHdvRmlsZXNQYXRjaDtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJjcmVhdGVQYXRjaFwiLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgIHJldHVybiBfY3JlYXRlLmNyZWF0ZVBhdGNoO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNvbnZlcnRDaGFuZ2VzVG9ETVBcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX2RtcC5jb252ZXJ0Q2hhbmdlc1RvRE1QO1xuICB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcImNvbnZlcnRDaGFuZ2VzVG9YTUxcIiwge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICByZXR1cm4gX3htbC5jb252ZXJ0Q2hhbmdlc1RvWE1MO1xuICB9XG59KTtcblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2Jhc2UgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2RpZmYvYmFzZVwiKSlcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2NoYXJhY3RlciA9IHJlcXVpcmUoXCIuL2RpZmYvY2hhcmFjdGVyXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl93b3JkID0gcmVxdWlyZShcIi4vZGlmZi93b3JkXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9saW5lID0gcmVxdWlyZShcIi4vZGlmZi9saW5lXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9zZW50ZW5jZSA9IHJlcXVpcmUoXCIuL2RpZmYvc2VudGVuY2VcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2NzcyA9IHJlcXVpcmUoXCIuL2RpZmYvY3NzXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9qc29uID0gcmVxdWlyZShcIi4vZGlmZi9qc29uXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG52YXJcbi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbl9hcnJheSA9IHJlcXVpcmUoXCIuL2RpZmYvYXJyYXlcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2FwcGx5ID0gcmVxdWlyZShcIi4vcGF0Y2gvYXBwbHlcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX3BhcnNlID0gcmVxdWlyZShcIi4vcGF0Y2gvcGFyc2VcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX21lcmdlID0gcmVxdWlyZShcIi4vcGF0Y2gvbWVyZ2VcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2NyZWF0ZSA9IHJlcXVpcmUoXCIuL3BhdGNoL2NyZWF0ZVwiKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fZG1wID0gcmVxdWlyZShcIi4vY29udmVydC9kbXBcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX3htbCA9IHJlcXVpcmUoXCIuL2NvbnZlcnQveG1sXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovIGZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUwzTnlZeTlwYm1SbGVDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenM3T3pzN096czdPenRCUVdkQ1FUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVOQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUTBFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUczdRVUZEUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVU5CTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJSVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVRzN1FVRkRRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCT3p0QlFVVkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlJVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3UVVGRFFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPenRCUVVOQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUTBFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUczdRVUZGUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk96dEJRVU5CTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SXZLaUJUWldVZ1RFbERSVTVUUlNCbWFXeGxJR1p2Y2lCMFpYSnRjeUJ2WmlCMWMyVWdLaTljYmx4dUx5cGNiaUFxSUZSbGVIUWdaR2xtWmlCcGJYQnNaVzFsYm5SaGRHbHZiaTVjYmlBcVhHNGdLaUJVYUdseklHeHBZbkpoY25rZ2MzVndjRzl5ZEhNZ2RHaGxJR1p2Ykd4dmQybHVaeUJCVUVsVE9seHVJQ29nU25ORWFXWm1MbVJwWm1aRGFHRnljem9nUTJoaGNtRmpkR1Z5SUdKNUlHTm9ZWEpoWTNSbGNpQmthV1ptWEc0Z0tpQktjMFJwWm1ZdVpHbG1abGR2Y21Sek9pQlhiM0prSUNoaGN5QmtaV1pwYm1Wa0lHSjVJRnhjWWlCeVpXZGxlQ2tnWkdsbVppQjNhR2xqYUNCcFoyNXZjbVZ6SUhkb2FYUmxjM0JoWTJWY2JpQXFJRXB6UkdsbVppNWthV1ptVEdsdVpYTTZJRXhwYm1VZ1ltRnpaV1FnWkdsbVpseHVJQ3BjYmlBcUlFcHpSR2xtWmk1a2FXWm1RM056T2lCRWFXWm1JSFJoY21kbGRHVmtJR0YwSUVOVFV5QmpiMjUwWlc1MFhHNGdLbHh1SUNvZ1ZHaGxjMlVnYldWMGFHOWtjeUJoY21VZ1ltRnpaV1FnYjI0Z2RHaGxJR2x0Y0d4bGJXVnVkR0YwYVc5dUlIQnliM0J2YzJWa0lHbHVYRzRnS2lCY0lrRnVJRThvVGtRcElFUnBabVpsY21WdVkyVWdRV3huYjNKcGRHaHRJR0Z1WkNCcGRITWdWbUZ5YVdGMGFXOXVjMXdpSUNoTmVXVnljeXdnTVRrNE5pa3VYRzRnS2lCb2RIUndPaTh2WTJsMFpYTmxaWEo0TG1semRDNXdjM1V1WldSMUwzWnBaWGRrYjJNdmMzVnRiV0Z5ZVQ5a2IyazlNVEF1TVM0eExqUXVOamt5TjF4dUlDb3ZYRzVwYlhCdmNuUWdSR2xtWmlCbWNtOXRJQ2N1TDJScFptWXZZbUZ6WlNjN1hHNXBiWEJ2Y25RZ2UyUnBabVpEYUdGeWMzMGdabkp2YlNBbkxpOWthV1ptTDJOb1lYSmhZM1JsY2ljN1hHNXBiWEJ2Y25RZ2UyUnBabVpYYjNKa2N5d2daR2xtWmxkdmNtUnpWMmwwYUZOd1lXTmxmU0JtY205dElDY3VMMlJwWm1ZdmQyOXlaQ2M3WEc1cGJYQnZjblFnZTJScFptWk1hVzVsY3l3Z1pHbG1abFJ5YVcxdFpXUk1hVzVsYzMwZ1puSnZiU0FuTGk5a2FXWm1MMnhwYm1Vbk8xeHVhVzF3YjNKMElIdGthV1ptVTJWdWRHVnVZMlZ6ZlNCbWNtOXRJQ2N1TDJScFptWXZjMlZ1ZEdWdVkyVW5PMXh1WEc1cGJYQnZjblFnZTJScFptWkRjM045SUdaeWIyMGdKeTR2WkdsbVppOWpjM01uTzF4dWFXMXdiM0owSUh0a2FXWm1Tbk52Yml3Z1kyRnViMjVwWTJGc2FYcGxmU0JtY205dElDY3VMMlJwWm1ZdmFuTnZiaWM3WEc1Y2JtbHRjRzl5ZENCN1pHbG1aa0Z5Y21GNWMzMGdabkp2YlNBbkxpOWthV1ptTDJGeWNtRjVKenRjYmx4dWFXMXdiM0owSUh0aGNIQnNlVkJoZEdOb0xDQmhjSEJzZVZCaGRHTm9aWE45SUdaeWIyMGdKeTR2Y0dGMFkyZ3ZZWEJ3Ykhrbk8xeHVhVzF3YjNKMElIdHdZWEp6WlZCaGRHTm9mU0JtY205dElDY3VMM0JoZEdOb0wzQmhjbk5sSnp0Y2JtbHRjRzl5ZENCN2JXVnlaMlY5SUdaeWIyMGdKeTR2Y0dGMFkyZ3ZiV1Z5WjJVbk8xeHVhVzF3YjNKMElIdHpkSEoxWTNSMWNtVmtVR0YwWTJnc0lHTnlaV0YwWlZSM2IwWnBiR1Z6VUdGMFkyZ3NJR055WldGMFpWQmhkR05vZlNCbWNtOXRJQ2N1TDNCaGRHTm9MMk55WldGMFpTYzdYRzVjYm1sdGNHOXlkQ0I3WTI5dWRtVnlkRU5vWVc1blpYTlViMFJOVUgwZ1puSnZiU0FuTGk5amIyNTJaWEowTDJSdGNDYzdYRzVwYlhCdmNuUWdlMk52Ym5abGNuUkRhR0Z1WjJWelZHOVlUVXg5SUdaeWIyMGdKeTR2WTI5dWRtVnlkQzk0Yld3bk8xeHVYRzVsZUhCdmNuUWdlMXh1SUNCRWFXWm1MRnh1WEc0Z0lHUnBabVpEYUdGeWN5eGNiaUFnWkdsbVpsZHZjbVJ6TEZ4dUlDQmthV1ptVjI5eVpITlhhWFJvVTNCaFkyVXNYRzRnSUdScFptWk1hVzVsY3l4Y2JpQWdaR2xtWmxSeWFXMXRaV1JNYVc1bGN5eGNiaUFnWkdsbVpsTmxiblJsYm1ObGN5eGNibHh1SUNCa2FXWm1RM056TEZ4dUlDQmthV1ptU25OdmJpeGNibHh1SUNCa2FXWm1RWEp5WVhsekxGeHVYRzRnSUhOMGNuVmpkSFZ5WldSUVlYUmphQ3hjYmlBZ1kzSmxZWFJsVkhkdlJtbHNaWE5RWVhSamFDeGNiaUFnWTNKbFlYUmxVR0YwWTJnc1hHNGdJR0Z3Y0d4NVVHRjBZMmdzWEc0Z0lHRndjR3g1VUdGMFkyaGxjeXhjYmlBZ2NHRnljMlZRWVhSamFDeGNiaUFnYldWeVoyVXNYRzRnSUdOdmJuWmxjblJEYUdGdVoyVnpWRzlFVFZBc1hHNGdJR052Ym5abGNuUkRhR0Z1WjJWelZHOVlUVXdzWEc0Z0lHTmhibTl1YVdOaGJHbDZaVnh1ZlR0Y2JpSmRmUT09XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuYXBwbHlQYXRjaCA9IGFwcGx5UGF0Y2g7XG5leHBvcnRzLmFwcGx5UGF0Y2hlcyA9IGFwcGx5UGF0Y2hlcztcblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX3BhcnNlID0gcmVxdWlyZShcIi4vcGFyc2VcIilcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG47XG5cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2Rpc3RhbmNlSXRlcmF0b3IgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi91dGlsL2Rpc3RhbmNlLWl0ZXJhdG9yXCIpKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqLyBmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbmZ1bmN0aW9uIGFwcGx5UGF0Y2goc291cmNlLCB1bmlEaWZmKSB7XG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgdmFyXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMiAmJiBhcmd1bWVudHNbMl0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1syXSA6IHt9O1xuXG4gIGlmICh0eXBlb2YgdW5pRGlmZiA9PT0gJ3N0cmluZycpIHtcbiAgICB1bmlEaWZmID1cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgKDAsXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICBfcGFyc2VcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgIC5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgcGFyc2VQYXRjaClcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICh1bmlEaWZmKTtcbiAgfVxuXG4gIGlmIChBcnJheS5pc0FycmF5KHVuaURpZmYpKSB7XG4gICAgaWYgKHVuaURpZmYubGVuZ3RoID4gMSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdhcHBseVBhdGNoIG9ubHkgd29ya3Mgd2l0aCBhIHNpbmdsZSBpbnB1dC4nKTtcbiAgICB9XG5cbiAgICB1bmlEaWZmID0gdW5pRGlmZlswXTtcbiAgfSAvLyBBcHBseSB0aGUgZGlmZiB0byB0aGUgaW5wdXRcblxuXG4gIHZhciBsaW5lcyA9IHNvdXJjZS5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgIGRlbGltaXRlcnMgPSBzb3VyY2UubWF0Y2goL1xcclxcbnxbXFxuXFx2XFxmXFxyXFx4ODVdL2cpIHx8IFtdLFxuICAgICAgaHVua3MgPSB1bmlEaWZmLmh1bmtzLFxuICAgICAgY29tcGFyZUxpbmUgPSBvcHRpb25zLmNvbXBhcmVMaW5lIHx8IGZ1bmN0aW9uIChsaW5lTnVtYmVyLCBsaW5lLCBvcGVyYXRpb24sIHBhdGNoQ29udGVudClcbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICB7XG4gICAgcmV0dXJuIChcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICBsaW5lID09PSBwYXRjaENvbnRlbnRcbiAgICApO1xuICB9LFxuICAgICAgZXJyb3JDb3VudCA9IDAsXG4gICAgICBmdXp6RmFjdG9yID0gb3B0aW9ucy5mdXp6RmFjdG9yIHx8IDAsXG4gICAgICBtaW5MaW5lID0gMCxcbiAgICAgIG9mZnNldCA9IDAsXG4gICAgICByZW1vdmVFT0ZOTCxcbiAgICAgIGFkZEVPRk5MO1xuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSBodW5rIGV4YWN0bHkgZml0cyBvbiB0aGUgcHJvdmlkZWQgbG9jYXRpb25cbiAgICovXG5cblxuICBmdW5jdGlvbiBodW5rRml0cyhodW5rLCB0b1Bvcykge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgaHVuay5saW5lcy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIGxpbmUgPSBodW5rLmxpbmVzW2pdLFxuICAgICAgICAgIG9wZXJhdGlvbiA9IGxpbmUubGVuZ3RoID4gMCA/IGxpbmVbMF0gOiAnICcsXG4gICAgICAgICAgY29udGVudCA9IGxpbmUubGVuZ3RoID4gMCA/IGxpbmUuc3Vic3RyKDEpIDogbGluZTtcblxuICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJyAnIHx8IG9wZXJhdGlvbiA9PT0gJy0nKSB7XG4gICAgICAgIC8vIENvbnRleHQgc2FuaXR5IGNoZWNrXG4gICAgICAgIGlmICghY29tcGFyZUxpbmUodG9Qb3MgKyAxLCBsaW5lc1t0b1Bvc10sIG9wZXJhdGlvbiwgY29udGVudCkpIHtcbiAgICAgICAgICBlcnJvckNvdW50Kys7XG5cbiAgICAgICAgICBpZiAoZXJyb3JDb3VudCA+IGZ1enpGYWN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0b1BvcysrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIFNlYXJjaCBiZXN0IGZpdCBvZmZzZXRzIGZvciBlYWNoIGh1bmsgYmFzZWQgb24gdGhlIHByZXZpb3VzIG9uZXNcblxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaHVua3MubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaHVuayA9IGh1bmtzW2ldLFxuICAgICAgICBtYXhMaW5lID0gbGluZXMubGVuZ3RoIC0gaHVuay5vbGRMaW5lcyxcbiAgICAgICAgbG9jYWxPZmZzZXQgPSAwLFxuICAgICAgICB0b1BvcyA9IG9mZnNldCArIGh1bmsub2xkU3RhcnQgLSAxO1xuICAgIHZhciBpdGVyYXRvciA9XG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICgwLFxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgX2Rpc3RhbmNlSXRlcmF0b3JcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgIFtcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgXCJkZWZhdWx0XCJcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgIF0pKHRvUG9zLCBtaW5MaW5lLCBtYXhMaW5lKTtcblxuICAgIGZvciAoOyBsb2NhbE9mZnNldCAhPT0gdW5kZWZpbmVkOyBsb2NhbE9mZnNldCA9IGl0ZXJhdG9yKCkpIHtcbiAgICAgIGlmIChodW5rRml0cyhodW5rLCB0b1BvcyArIGxvY2FsT2Zmc2V0KSkge1xuICAgICAgICBodW5rLm9mZnNldCA9IG9mZnNldCArPSBsb2NhbE9mZnNldDtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGxvY2FsT2Zmc2V0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IC8vIFNldCBsb3dlciB0ZXh0IGxpbWl0IHRvIGVuZCBvZiB0aGUgY3VycmVudCBodW5rLCBzbyBuZXh0IG9uZXMgZG9uJ3QgdHJ5XG4gICAgLy8gdG8gZml0IG92ZXIgYWxyZWFkeSBwYXRjaGVkIHRleHRcblxuXG4gICAgbWluTGluZSA9IGh1bmsub2Zmc2V0ICsgaHVuay5vbGRTdGFydCArIGh1bmsub2xkTGluZXM7XG4gIH0gLy8gQXBwbHkgcGF0Y2ggaHVua3NcblxuXG4gIHZhciBkaWZmT2Zmc2V0ID0gMDtcblxuICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgaHVua3MubGVuZ3RoOyBfaSsrKSB7XG4gICAgdmFyIF9odW5rID0gaHVua3NbX2ldLFxuICAgICAgICBfdG9Qb3MgPSBfaHVuay5vbGRTdGFydCArIF9odW5rLm9mZnNldCArIGRpZmZPZmZzZXQgLSAxO1xuXG4gICAgZGlmZk9mZnNldCArPSBfaHVuay5uZXdMaW5lcyAtIF9odW5rLm9sZExpbmVzO1xuXG4gICAgZm9yICh2YXIgaiA9IDA7IGogPCBfaHVuay5saW5lcy5sZW5ndGg7IGorKykge1xuICAgICAgdmFyIGxpbmUgPSBfaHVuay5saW5lc1tqXSxcbiAgICAgICAgICBvcGVyYXRpb24gPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lWzBdIDogJyAnLFxuICAgICAgICAgIGNvbnRlbnQgPSBsaW5lLmxlbmd0aCA+IDAgPyBsaW5lLnN1YnN0cigxKSA6IGxpbmUsXG4gICAgICAgICAgZGVsaW1pdGVyID0gX2h1bmsubGluZWRlbGltaXRlcnNbal07XG5cbiAgICAgIGlmIChvcGVyYXRpb24gPT09ICcgJykge1xuICAgICAgICBfdG9Qb3MrKztcbiAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgbGluZXMuc3BsaWNlKF90b1BvcywgMSk7XG4gICAgICAgIGRlbGltaXRlcnMuc3BsaWNlKF90b1BvcywgMSk7XG4gICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICB9IGVsc2UgaWYgKG9wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgIGxpbmVzLnNwbGljZShfdG9Qb3MsIDAsIGNvbnRlbnQpO1xuICAgICAgICBkZWxpbWl0ZXJzLnNwbGljZShfdG9Qb3MsIDAsIGRlbGltaXRlcik7XG4gICAgICAgIF90b1BvcysrO1xuICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICdcXFxcJykge1xuICAgICAgICB2YXIgcHJldmlvdXNPcGVyYXRpb24gPSBfaHVuay5saW5lc1tqIC0gMV0gPyBfaHVuay5saW5lc1tqIC0gMV1bMF0gOiBudWxsO1xuXG4gICAgICAgIGlmIChwcmV2aW91c09wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgcmVtb3ZlRU9GTkwgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKHByZXZpb3VzT3BlcmF0aW9uID09PSAnLScpIHtcbiAgICAgICAgICBhZGRFT0ZOTCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gLy8gSGFuZGxlIEVPRk5MIGluc2VydGlvbi9yZW1vdmFsXG5cblxuICBpZiAocmVtb3ZlRU9GTkwpIHtcbiAgICB3aGlsZSAoIWxpbmVzW2xpbmVzLmxlbmd0aCAtIDFdKSB7XG4gICAgICBsaW5lcy5wb3AoKTtcbiAgICAgIGRlbGltaXRlcnMucG9wKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGFkZEVPRk5MKSB7XG4gICAgbGluZXMucHVzaCgnJyk7XG4gICAgZGVsaW1pdGVycy5wdXNoKCdcXG4nKTtcbiAgfVxuXG4gIGZvciAodmFyIF9rID0gMDsgX2sgPCBsaW5lcy5sZW5ndGggLSAxOyBfaysrKSB7XG4gICAgbGluZXNbX2tdID0gbGluZXNbX2tdICsgZGVsaW1pdGVyc1tfa107XG4gIH1cblxuICByZXR1cm4gbGluZXMuam9pbignJyk7XG59IC8vIFdyYXBwZXIgdGhhdCBzdXBwb3J0cyBtdWx0aXBsZSBmaWxlIHBhdGNoZXMgdmlhIGNhbGxiYWNrcy5cblxuXG5mdW5jdGlvbiBhcHBseVBhdGNoZXModW5pRGlmZiwgb3B0aW9ucykge1xuICBpZiAodHlwZW9mIHVuaURpZmYgPT09ICdzdHJpbmcnKSB7XG4gICAgdW5pRGlmZiA9XG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICgwLFxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgX3BhcnNlXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAuXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIHBhcnNlUGF0Y2gpXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAodW5pRGlmZik7XG4gIH1cblxuICB2YXIgY3VycmVudEluZGV4ID0gMDtcblxuICBmdW5jdGlvbiBwcm9jZXNzSW5kZXgoKSB7XG4gICAgdmFyIGluZGV4ID0gdW5pRGlmZltjdXJyZW50SW5kZXgrK107XG5cbiAgICBpZiAoIWluZGV4KSB7XG4gICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZSgpO1xuICAgIH1cblxuICAgIG9wdGlvbnMubG9hZEZpbGUoaW5kZXgsIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnMuY29tcGxldGUoZXJyKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHVwZGF0ZWRDb250ZW50ID0gYXBwbHlQYXRjaChkYXRhLCBpbmRleCwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLnBhdGNoZWQoaW5kZXgsIHVwZGF0ZWRDb250ZW50LCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4gb3B0aW9ucy5jb21wbGV0ZShlcnIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvY2Vzc0luZGV4KCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIHByb2Nlc3NJbmRleCgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d1lYUmphQzloY0hCc2VTNXFjeUpkTENKdVlXMWxjeUk2V3lKaGNIQnNlVkJoZEdOb0lpd2ljMjkxY21ObElpd2lkVzVwUkdsbVppSXNJbTl3ZEdsdmJuTWlMQ0p3WVhKelpWQmhkR05vSWl3aVFYSnlZWGtpTENKcGMwRnljbUY1SWl3aWJHVnVaM1JvSWl3aVJYSnliM0lpTENKc2FXNWxjeUlzSW5Od2JHbDBJaXdpWkdWc2FXMXBkR1Z5Y3lJc0ltMWhkR05vSWl3aWFIVnVhM01pTENKamIyMXdZWEpsVEdsdVpTSXNJbXhwYm1WT2RXMWlaWElpTENKc2FXNWxJaXdpYjNCbGNtRjBhVzl1SWl3aWNHRjBZMmhEYjI1MFpXNTBJaXdpWlhKeWIzSkRiM1Z1ZENJc0ltWjFlbnBHWVdOMGIzSWlMQ0p0YVc1TWFXNWxJaXdpYjJabWMyVjBJaXdpY21WdGIzWmxSVTlHVGt3aUxDSmhaR1JGVDBaT1RDSXNJbWgxYm10R2FYUnpJaXdpYUhWdWF5SXNJblJ2VUc5eklpd2lhaUlzSW1OdmJuUmxiblFpTENKemRXSnpkSElpTENKcElpd2liV0Y0VEdsdVpTSXNJbTlzWkV4cGJtVnpJaXdpYkc5allXeFBabVp6WlhRaUxDSnZiR1JUZEdGeWRDSXNJbWwwWlhKaGRHOXlJaXdpWkdsemRHRnVZMlZKZEdWeVlYUnZjaUlzSW5WdVpHVm1hVzVsWkNJc0ltUnBabVpQWm1aelpYUWlMQ0p1WlhkTWFXNWxjeUlzSW1SbGJHbHRhWFJsY2lJc0lteHBibVZrWld4cGJXbDBaWEp6SWl3aWMzQnNhV05sSWl3aWNISmxkbWx2ZFhOUGNHVnlZWFJwYjI0aUxDSndiM0FpTENKd2RYTm9JaXdpWDJzaUxDSnFiMmx1SWl3aVlYQndiSGxRWVhSamFHVnpJaXdpWTNWeWNtVnVkRWx1WkdWNElpd2ljSEp2WTJWemMwbHVaR1Y0SWl3aWFXNWtaWGdpTENKamIyMXdiR1YwWlNJc0lteHZZV1JHYVd4bElpd2laWEp5SWl3aVpHRjBZU0lzSW5Wd1pHRjBaV1JEYjI1MFpXNTBJaXdpY0dGMFkyaGxaQ0pkTENKdFlYQndhVzVuY3lJNklqczdPenM3T3pzN096dEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN08wRkJRMEU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVRzN096czdRVUZGVHl4VFFVRlRRU3hWUVVGVUxFTkJRVzlDUXl4TlFVRndRaXhGUVVFMFFrTXNUMEZCTlVJc1JVRkJiVVE3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCWkVNc1JVRkJRVUVzVDBGQll5eDFSVUZCU2l4RlFVRkpPenRCUVVONFJDeE5RVUZKTEU5QlFVOUVMRTlCUVZBc1MwRkJiVUlzVVVGQmRrSXNSVUZCYVVNN1FVRkRMMEpCTEVsQlFVRkJMRTlCUVU4N1FVRkJSenRCUVVGQk8wRkJRVUU3TzBGQlFVRkZPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRTdRVUZCUVN4TFFVRlhSaXhQUVVGWUxFTkJRVlk3UVVGRFJEczdRVUZGUkN4TlFVRkpSeXhMUVVGTExFTkJRVU5ETEU5QlFVNHNRMEZCWTBvc1QwRkJaQ3hEUVVGS0xFVkJRVFJDTzBGQlF6RkNMRkZCUVVsQkxFOUJRVThzUTBGQlEwc3NUVUZCVWl4SFFVRnBRaXhEUVVGeVFpeEZRVUYzUWp0QlFVTjBRaXhaUVVGTkxFbEJRVWxETEV0QlFVb3NRMEZCVlN3MFEwRkJWaXhEUVVGT08wRkJRMFE3TzBGQlJVUk9MRWxCUVVGQkxFOUJRVThzUjBGQlIwRXNUMEZCVHl4RFFVRkRMRU5CUVVRc1EwRkJha0k3UVVGRFJDeEhRVmgxUkN4RFFXRjRSRHM3TzBGQlEwRXNUVUZCU1U4c1MwRkJTeXhIUVVGSFVpeE5RVUZOTEVOQlFVTlRMRXRCUVZBc1EwRkJZU3h4UWtGQllpeERRVUZhTzBGQlFVRXNUVUZEU1VNc1ZVRkJWU3hIUVVGSFZpeE5RVUZOTEVOQlFVTlhMRXRCUVZBc1EwRkJZU3h6UWtGQllpeExRVUYzUXl4RlFVUjZSRHRCUVVGQkxFMUJSVWxETEV0QlFVc3NSMEZCUjFnc1QwRkJUeXhEUVVGRFZ5eExRVVp3UWp0QlFVRkJMRTFCU1VsRExGZEJRVmNzUjBGQlIxZ3NUMEZCVHl4RFFVRkRWeXhYUVVGU0xFbEJRWGRDTEZWQlFVTkRMRlZCUVVRc1JVRkJZVU1zU1VGQllpeEZRVUZ0UWtNc1UwRkJia0lzUlVGQk9FSkRMRmxCUVRsQ08wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCSzBOR0xFMUJRVUZCTEVsQlFVa3NTMEZCUzBVN1FVRkJlRVE3UVVGQlFTeEhRVW94UXp0QlFVRkJMRTFCUzBsRExGVkJRVlVzUjBGQlJ5eERRVXhxUWp0QlFVRkJMRTFCVFVsRExGVkJRVlVzUjBGQlIycENMRTlCUVU4c1EwRkJRMmxDTEZWQlFWSXNTVUZCYzBJc1EwRk9ka003UVVGQlFTeE5RVTlKUXl4UFFVRlBMRWRCUVVjc1EwRlFaRHRCUVVGQkxFMUJVVWxETEUxQlFVMHNSMEZCUnl4RFFWSmlPMEZCUVVFc1RVRlZTVU1zVjBGV1NqdEJRVUZCTEUxQlYwbERMRkZCV0VvN1FVRmhRVHM3T3pzN1FVRkhRU3hYUVVGVFF5eFJRVUZVTEVOQlFXdENReXhKUVVGc1FpeEZRVUYzUWtNc1MwRkJlRUlzUlVGQkswSTdRVUZETjBJc1UwRkJTeXhKUVVGSlF5eERRVUZETEVkQlFVY3NRMEZCWWl4RlFVRm5Ra0VzUTBGQlF5eEhRVUZIUml4SlFVRkpMRU5CUVVOcVFpeExRVUZNTEVOQlFWZEdMRTFCUVM5Q0xFVkJRWFZEY1VJc1EwRkJReXhGUVVGNFF5eEZRVUUwUXp0QlFVTXhReXhWUVVGSldpeEpRVUZKTEVkQlFVZFZMRWxCUVVrc1EwRkJRMnBDTEV0QlFVd3NRMEZCVjIxQ0xFTkJRVmdzUTBGQldEdEJRVUZCTEZWQlEwbFlMRk5CUVZNc1IwRkJTVVFzU1VGQlNTeERRVUZEVkN4TlFVRk1MRWRCUVdNc1EwRkJaQ3hIUVVGclFsTXNTVUZCU1N4RFFVRkRMRU5CUVVRc1EwRkJkRUlzUjBGQk5FSXNSMEZFTjBNN1FVRkJRU3hWUVVWSllTeFBRVUZQTEVkQlFVbGlMRWxCUVVrc1EwRkJRMVFzVFVGQlRDeEhRVUZqTEVOQlFXUXNSMEZCYTBKVExFbEJRVWtzUTBGQlEyTXNUVUZCVEN4RFFVRlpMRU5CUVZvc1EwRkJiRUlzUjBGQmJVTmtMRWxCUm14RU96dEJRVWxCTEZWQlFVbERMRk5CUVZNc1MwRkJTeXhIUVVGa0xFbEJRWEZDUVN4VFFVRlRMRXRCUVVzc1IwRkJka01zUlVGQk5FTTdRVUZETVVNN1FVRkRRU3haUVVGSkxFTkJRVU5JTEZkQlFWY3NRMEZCUTJFc1MwRkJTeXhIUVVGSExFTkJRVlFzUlVGQldXeENMRXRCUVVzc1EwRkJRMnRDTEV0QlFVUXNRMEZCYWtJc1JVRkJNRUpXTEZOQlFURkNMRVZCUVhGRFdTeFBRVUZ5UXl4RFFVRm9RaXhGUVVFclJEdEJRVU0zUkZZc1ZVRkJRVUVzVlVGQlZUczdRVUZGVml4alFVRkpRU3hWUVVGVkxFZEJRVWRETEZWQlFXcENMRVZCUVRaQ08wRkJRek5DTEcxQ1FVRlBMRXRCUVZBN1FVRkRSRHRCUVVOR096dEJRVU5FVHl4UlFVRkJRU3hMUVVGTE8wRkJRMDQ3UVVGRFJqczdRVUZGUkN4WFFVRlBMRWxCUVZBN1FVRkRSQ3hIUVd4RWRVUXNRMEZ2UkhoRU96czdRVUZEUVN4UFFVRkxMRWxCUVVsSkxFTkJRVU1zUjBGQlJ5eERRVUZpTEVWQlFXZENRU3hEUVVGRExFZEJRVWRzUWl4TFFVRkxMRU5CUVVOT0xFMUJRVEZDTEVWQlFXdERkMElzUTBGQlF5eEZRVUZ1UXl4RlFVRjFRenRCUVVOeVF5eFJRVUZKVEN4SlFVRkpMRWRCUVVkaUxFdEJRVXNzUTBGQlEydENMRU5CUVVRc1EwRkJhRUk3UVVGQlFTeFJRVU5KUXl4UFFVRlBMRWRCUVVkMlFpeExRVUZMTEVOQlFVTkdMRTFCUVU0c1IwRkJaVzFDTEVsQlFVa3NRMEZCUTA4c1VVRkViRU03UVVGQlFTeFJRVVZKUXl4WFFVRlhMRWRCUVVjc1EwRkdiRUk3UVVGQlFTeFJRVWRKVUN4TFFVRkxMRWRCUVVkTUxFMUJRVTBzUjBGQlIwa3NTVUZCU1N4RFFVRkRVeXhSUVVGa0xFZEJRWGxDTEVOQlNISkRPMEZCUzBFc1VVRkJTVU1zVVVGQlVUdEJRVUZITzBGQlFVRTdRVUZCUVRzN1FVRkJRVU03UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRXNUMEZCYVVKV0xFdEJRV3BDTEVWQlFYZENUaXhQUVVGNFFpeEZRVUZwUTFjc1QwRkJha01zUTBGQlpqczdRVUZGUVN4WFFVRlBSU3hYUVVGWExFdEJRVXRKTEZOQlFYWkNMRVZCUVd0RFNpeFhRVUZYTEVkQlFVZEZMRkZCUVZFc1JVRkJlRVFzUlVGQk5FUTdRVUZETVVRc1ZVRkJTVmdzVVVGQlVTeERRVUZEUXl4SlFVRkVMRVZCUVU5RExFdEJRVXNzUjBGQlIwOHNWMEZCWml4RFFVRmFMRVZCUVhsRE8wRkJRM1pEVWl4UlFVRkJRU3hKUVVGSkxFTkJRVU5LTEUxQlFVd3NSMEZCWTBFc1RVRkJUU3hKUVVGSldTeFhRVUY0UWp0QlFVTkJPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFJRVUZKUVN4WFFVRlhMRXRCUVV0SkxGTkJRWEJDTEVWQlFTdENPMEZCUXpkQ0xHRkJRVThzUzBGQlVEdEJRVU5FTEV0QmFrSnZReXhEUVcxQ2NrTTdRVUZEUVRzN08wRkJRMEZxUWl4SlFVRkJRU3hQUVVGUExFZEJRVWRMTEVsQlFVa3NRMEZCUTBvc1RVRkJUQ3hIUVVGalNTeEpRVUZKTEVOQlFVTlRMRkZCUVc1Q0xFZEJRVGhDVkN4SlFVRkpMRU5CUVVOUExGRkJRVGRETzBGQlEwUXNSMEV6UlhWRUxFTkJOa1Y0UkRzN08wRkJRMEVzVFVGQlNVMHNWVUZCVlN4SFFVRkhMRU5CUVdwQ096dEJRVU5CTEU5QlFVc3NTVUZCU1ZJc1JVRkJReXhIUVVGSExFTkJRV0lzUlVGQlowSkJMRVZCUVVNc1IwRkJSMnhDTEV0QlFVc3NRMEZCUTA0c1RVRkJNVUlzUlVGQmEwTjNRaXhGUVVGRExFVkJRVzVETEVWQlFYVkRPMEZCUTNKRExGRkJRVWxNTEV0QlFVa3NSMEZCUjJJc1MwRkJTeXhEUVVGRGEwSXNSVUZCUkN4RFFVRm9RanRCUVVGQkxGRkJRMGxLTEUxQlFVc3NSMEZCUjBRc1MwRkJTU3hEUVVGRFV5eFJRVUZNTEVkQlFXZENWQ3hMUVVGSkxFTkJRVU5LTEUxQlFYSkNMRWRCUVRoQ2FVSXNWVUZCT1VJc1IwRkJNa01zUTBGRWRrUTdPMEZCUlVGQkxFbEJRVUZCTEZWQlFWVXNTVUZCU1dJc1MwRkJTU3hEUVVGRFl5eFJRVUZNTEVkQlFXZENaQ3hMUVVGSkxFTkJRVU5QTEZGQlFXNURPenRCUVVWQkxGTkJRVXNzU1VGQlNVd3NRMEZCUXl4SFFVRkhMRU5CUVdJc1JVRkJaMEpCTEVOQlFVTXNSMEZCUjBZc1MwRkJTU3hEUVVGRGFrSXNTMEZCVEN4RFFVRlhSaXhOUVVFdlFpeEZRVUYxUTNGQ0xFTkJRVU1zUlVGQmVFTXNSVUZCTkVNN1FVRkRNVU1zVlVGQlNWb3NTVUZCU1N4SFFVRkhWU3hMUVVGSkxFTkJRVU5xUWl4TFFVRk1MRU5CUVZkdFFpeERRVUZZTEVOQlFWZzdRVUZCUVN4VlFVTkpXQ3hUUVVGVExFZEJRVWxFTEVsQlFVa3NRMEZCUTFRc1RVRkJUQ3hIUVVGakxFTkJRV1FzUjBGQmEwSlRMRWxCUVVrc1EwRkJReXhEUVVGRUxFTkJRWFJDTEVkQlFUUkNMRWRCUkRkRE8wRkJRVUVzVlVGRlNXRXNUMEZCVHl4SFFVRkpZaXhKUVVGSkxFTkJRVU5VTEUxQlFVd3NSMEZCWXl4RFFVRmtMRWRCUVd0Q1V5eEpRVUZKTEVOQlFVTmpMRTFCUVV3c1EwRkJXU3hEUVVGYUxFTkJRV3hDTEVkQlFXMURaQ3hKUVVac1JEdEJRVUZCTEZWQlIwbDVRaXhUUVVGVExFZEJRVWRtTEV0QlFVa3NRMEZCUTJkQ0xHTkJRVXdzUTBGQmIwSmtMRU5CUVhCQ0xFTkJTR2hDT3p0QlFVdEJMRlZCUVVsWUxGTkJRVk1zUzBGQlN5eEhRVUZzUWl4RlFVRjFRanRCUVVOeVFsVXNVVUZCUVVFc1RVRkJTenRCUVVOT0xFOUJSa1FzVFVGRlR5eEpRVUZKVml4VFFVRlRMRXRCUVVzc1IwRkJiRUlzUlVGQmRVSTdRVUZETlVKU0xGRkJRVUZCTEV0QlFVc3NRMEZCUTJ0RExFMUJRVTRzUTBGQllXaENMRTFCUVdJc1JVRkJiMElzUTBGQmNFSTdRVUZEUVdoQ0xGRkJRVUZCTEZWQlFWVXNRMEZCUTJkRExFMUJRVmdzUTBGQmEwSm9RaXhOUVVGc1FpeEZRVUY1UWl4RFFVRjZRanRCUVVOR08wRkJRME1zVDBGS1RTeE5RVWxCTEVsQlFVbFdMRk5CUVZNc1MwRkJTeXhIUVVGc1FpeEZRVUYxUWp0QlFVTTFRbElzVVVGQlFVRXNTMEZCU3l4RFFVRkRhME1zVFVGQlRpeERRVUZoYUVJc1RVRkJZaXhGUVVGdlFpeERRVUZ3UWl4RlFVRjFRa1VzVDBGQmRrSTdRVUZEUVd4Q0xGRkJRVUZCTEZWQlFWVXNRMEZCUTJkRExFMUJRVmdzUTBGQmEwSm9RaXhOUVVGc1FpeEZRVUY1UWl4RFFVRjZRaXhGUVVFMFFtTXNVMEZCTlVJN1FVRkRRV1FzVVVGQlFVRXNUVUZCU3p0QlFVTk9MRTlCU2swc1RVRkpRU3hKUVVGSlZpeFRRVUZUTEV0QlFVc3NTVUZCYkVJc1JVRkJkMEk3UVVGRE4wSXNXVUZCU1RKQ0xHbENRVUZwUWl4SFFVRkhiRUlzUzBGQlNTeERRVUZEYWtJc1MwRkJUQ3hEUVVGWGJVSXNRMEZCUXl4SFFVRkhMRU5CUVdZc1NVRkJiMEpHTEV0QlFVa3NRMEZCUTJwQ0xFdEJRVXdzUTBGQlYyMUNMRU5CUVVNc1IwRkJSeXhEUVVGbUxFVkJRV3RDTEVOQlFXeENMRU5CUVhCQ0xFZEJRVEpETEVsQlFXNUZPenRCUVVOQkxGbEJRVWxuUWl4cFFrRkJhVUlzUzBGQlN5eEhRVUV4UWl4RlFVRXJRanRCUVVNM1FuSkNMRlZCUVVGQkxGZEJRVmNzUjBGQlJ5eEpRVUZrTzBGQlEwUXNVMEZHUkN4TlFVVlBMRWxCUVVseFFpeHBRa0ZCYVVJc1MwRkJTeXhIUVVFeFFpeEZRVUVyUWp0QlFVTndRM0JDTEZWQlFVRkJMRkZCUVZFc1IwRkJSeXhKUVVGWU8wRkJRMFE3UVVGRFJqdEJRVU5HTzBGQlEwWXNSMEUzUjNWRUxFTkJLMGQ0UkRzN08wRkJRMEVzVFVGQlNVUXNWMEZCU2l4RlFVRnBRanRCUVVObUxGZEJRVThzUTBGQlEyUXNTMEZCU3l4RFFVRkRRU3hMUVVGTExFTkJRVU5HTEUxQlFVNHNSMEZCWlN4RFFVRm9RaXhEUVVGaUxFVkJRV2xETzBGQlF5OUNSU3hOUVVGQlFTeExRVUZMTEVOQlFVTnZReXhIUVVGT08wRkJRMEZzUXl4TlFVRkJRU3hWUVVGVkxFTkJRVU5yUXl4SFFVRllPMEZCUTBRN1FVRkRSaXhIUVV4RUxFMUJTMDhzU1VGQlNYSkNMRkZCUVVvc1JVRkJZenRCUVVOdVFtWXNTVUZCUVVFc1MwRkJTeXhEUVVGRGNVTXNTVUZCVGl4RFFVRlhMRVZCUVZnN1FVRkRRVzVETEVsQlFVRkJMRlZCUVZVc1EwRkJRMjFETEVsQlFWZ3NRMEZCWjBJc1NVRkJhRUk3UVVGRFJEczdRVUZEUkN4UFFVRkxMRWxCUVVsRExFVkJRVVVzUjBGQlJ5eERRVUZrTEVWQlFXbENRU3hGUVVGRkxFZEJRVWQwUXl4TFFVRkxMRU5CUVVOR0xFMUJRVTRzUjBGQlpTeERRVUZ5UXl4RlFVRjNRM2RETEVWQlFVVXNSVUZCTVVNc1JVRkJPRU03UVVGRE5VTjBReXhKUVVGQlFTeExRVUZMTEVOQlFVTnpReXhGUVVGRUxFTkJRVXdzUjBGQldYUkRMRXRCUVVzc1EwRkJRM05ETEVWQlFVUXNRMEZCVEN4SFFVRlpjRU1zVlVGQlZTeERRVUZEYjBNc1JVRkJSQ3hEUVVGc1F6dEJRVU5FT3p0QlFVTkVMRk5CUVU5MFF5eExRVUZMTEVOQlFVTjFReXhKUVVGT0xFTkJRVmNzUlVGQldDeERRVUZRTzBGQlEwUXNReXhEUVVWRU96czdRVUZEVHl4VFFVRlRReXhaUVVGVUxFTkJRWE5DTDBNc1QwRkJkRUlzUlVGQkswSkRMRTlCUVM5Q0xFVkJRWGRETzBGQlF6ZERMRTFCUVVrc1QwRkJUMFFzVDBGQlVDeExRVUZ0UWl4UlFVRjJRaXhGUVVGcFF6dEJRVU12UWtFc1NVRkJRVUVzVDBGQlR6dEJRVUZITzBGQlFVRTdRVUZCUVRzN1FVRkJRVVU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVUU3UVVGQlFVRTdRVUZCUVVFN1FVRkJRVHRCUVVGQkxFdEJRVmRHTEU5QlFWZ3NRMEZCVmp0QlFVTkVPenRCUVVWRUxFMUJRVWxuUkN4WlFVRlpMRWRCUVVjc1EwRkJia0k3TzBGQlEwRXNWMEZCVTBNc1dVRkJWQ3hIUVVGM1FqdEJRVU4wUWl4UlFVRkpReXhMUVVGTExFZEJRVWRzUkN4UFFVRlBMRU5CUVVOblJDeFpRVUZaTEVWQlFXSXNRMEZCYmtJN08wRkJRMEVzVVVGQlNTeERRVUZEUlN4TFFVRk1MRVZCUVZrN1FVRkRWaXhoUVVGUGFrUXNUMEZCVHl4RFFVRkRhMFFzVVVGQlVpeEZRVUZRTzBGQlEwUTdPMEZCUlVSc1JDeEpRVUZCUVN4UFFVRlBMRU5CUVVOdFJDeFJRVUZTTEVOQlFXbENSaXhMUVVGcVFpeEZRVUYzUWl4VlFVRlRSeXhIUVVGVUxFVkJRV05ETEVsQlFXUXNSVUZCYjBJN1FVRkRNVU1zVlVGQlNVUXNSMEZCU2l4RlFVRlRPMEZCUTFBc1pVRkJUM0JFTEU5QlFVOHNRMEZCUTJ0RUxGRkJRVklzUTBGQmFVSkZMRWRCUVdwQ0xFTkJRVkE3UVVGRFJEczdRVUZGUkN4VlFVRkpSU3hqUVVGakxFZEJRVWQ2UkN4VlFVRlZMRU5CUVVOM1JDeEpRVUZFTEVWQlFVOUtMRXRCUVZBc1JVRkJZMnBFTEU5QlFXUXNRMEZCTDBJN1FVRkRRVUVzVFVGQlFVRXNUMEZCVHl4RFFVRkRkVVFzVDBGQlVpeERRVUZuUWs0c1MwRkJhRUlzUlVGQmRVSkxMR05CUVhaQ0xFVkJRWFZETEZWQlFWTkdMRWRCUVZRc1JVRkJZenRCUVVOdVJDeFpRVUZKUVN4SFFVRktMRVZCUVZNN1FVRkRVQ3hwUWtGQlQzQkVMRTlCUVU4c1EwRkJRMnRFTEZGQlFWSXNRMEZCYVVKRkxFZEJRV3BDTEVOQlFWQTdRVUZEUkRzN1FVRkZSRW9zVVVGQlFVRXNXVUZCV1R0QlFVTmlMRTlCVGtRN1FVRlBSQ3hMUVdKRU8wRkJZMFE3TzBGQlEwUkJMRVZCUVVGQkxGbEJRVms3UVVGRFlpSXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQjdjR0Z5YzJWUVlYUmphSDBnWm5KdmJTQW5MaTl3WVhKelpTYzdYRzVwYlhCdmNuUWdaR2x6ZEdGdVkyVkpkR1Z5WVhSdmNpQm1jbTl0SUNjdUxpOTFkR2xzTDJScGMzUmhibU5sTFdsMFpYSmhkRzl5Snp0Y2JseHVaWGh3YjNKMElHWjFibU4wYVc5dUlHRndjR3g1VUdGMFkyZ29jMjkxY21ObExDQjFibWxFYVdabUxDQnZjSFJwYjI1eklEMGdlMzBwSUh0Y2JpQWdhV1lnS0hSNWNHVnZaaUIxYm1sRWFXWm1JRDA5UFNBbmMzUnlhVzVuSnlrZ2UxeHVJQ0FnSUhWdWFVUnBabVlnUFNCd1lYSnpaVkJoZEdOb0tIVnVhVVJwWm1ZcE8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0VGeWNtRjVMbWx6UVhKeVlYa29kVzVwUkdsbVppa3BJSHRjYmlBZ0lDQnBaaUFvZFc1cFJHbG1aaTVzWlc1bmRHZ2dQaUF4S1NCN1hHNGdJQ0FnSUNCMGFISnZkeUJ1WlhjZ1JYSnliM0lvSjJGd2NHeDVVR0YwWTJnZ2IyNXNlU0IzYjNKcmN5QjNhWFJvSUdFZ2MybHVaMnhsSUdsdWNIVjBMaWNwTzF4dUlDQWdJSDFjYmx4dUlDQWdJSFZ1YVVScFptWWdQU0IxYm1sRWFXWm1XekJkTzF4dUlDQjlYRzVjYmlBZ0x5OGdRWEJ3YkhrZ2RHaGxJR1JwWm1ZZ2RHOGdkR2hsSUdsdWNIVjBYRzRnSUd4bGRDQnNhVzVsY3lBOUlITnZkWEpqWlM1emNHeHBkQ2d2WEZ4eVhGeHVmRnRjWEc1Y1hIWmNYR1pjWEhKY1hIZzROVjB2S1N4Y2JpQWdJQ0FnSUdSbGJHbHRhWFJsY25NZ1BTQnpiM1Z5WTJVdWJXRjBZMmdvTDF4Y2NseGNibnhiWEZ4dVhGeDJYRnhtWEZ4eVhGeDRPRFZkTDJjcElIeDhJRnRkTEZ4dUlDQWdJQ0FnYUhWdWEzTWdQU0IxYm1sRWFXWm1MbWgxYm10ekxGeHVYRzRnSUNBZ0lDQmpiMjF3WVhKbFRHbHVaU0E5SUc5d2RHbHZibk11WTI5dGNHRnlaVXhwYm1VZ2ZId2dLQ2hzYVc1bFRuVnRZbVZ5TENCc2FXNWxMQ0J2Y0dWeVlYUnBiMjRzSUhCaGRHTm9RMjl1ZEdWdWRDa2dQVDRnYkdsdVpTQTlQVDBnY0dGMFkyaERiMjUwWlc1MEtTeGNiaUFnSUNBZ0lHVnljbTl5UTI5MWJuUWdQU0F3TEZ4dUlDQWdJQ0FnWm5WNmVrWmhZM1J2Y2lBOUlHOXdkR2x2Ym5NdVpuVjZla1poWTNSdmNpQjhmQ0F3TEZ4dUlDQWdJQ0FnYldsdVRHbHVaU0E5SURBc1hHNGdJQ0FnSUNCdlptWnpaWFFnUFNBd0xGeHVYRzRnSUNBZ0lDQnlaVzF2ZG1WRlQwWk9UQ3hjYmlBZ0lDQWdJR0ZrWkVWUFJrNU1PMXh1WEc0Z0lDOHFLbHh1SUNBZ0tpQkRhR1ZqYTNNZ2FXWWdkR2hsSUdoMWJtc2daWGhoWTNSc2VTQm1hWFJ6SUc5dUlIUm9aU0J3Y205MmFXUmxaQ0JzYjJOaGRHbHZibHh1SUNBZ0tpOWNiaUFnWm5WdVkzUnBiMjRnYUhWdWEwWnBkSE1vYUhWdWF5d2dkRzlRYjNNcElIdGNiaUFnSUNCbWIzSWdLR3hsZENCcUlEMGdNRHNnYWlBOElHaDFibXN1YkdsdVpYTXViR1Z1WjNSb095QnFLeXNwSUh0Y2JpQWdJQ0FnSUd4bGRDQnNhVzVsSUQwZ2FIVnVheTVzYVc1bGMxdHFYU3hjYmlBZ0lDQWdJQ0FnSUNCdmNHVnlZWFJwYjI0Z1BTQW9iR2x1WlM1c1pXNW5kR2dnUGlBd0lEOGdiR2x1WlZzd1hTQTZJQ2NnSnlrc1hHNGdJQ0FnSUNBZ0lDQWdZMjl1ZEdWdWRDQTlJQ2hzYVc1bExteGxibWQwYUNBK0lEQWdQeUJzYVc1bExuTjFZbk4wY2lneEtTQTZJR3hwYm1VcE8xeHVYRzRnSUNBZ0lDQnBaaUFvYjNCbGNtRjBhVzl1SUQwOVBTQW5JQ2NnZkh3Z2IzQmxjbUYwYVc5dUlEMDlQU0FuTFNjcElIdGNiaUFnSUNBZ0lDQWdMeThnUTI5dWRHVjRkQ0J6WVc1cGRIa2dZMmhsWTJ0Y2JpQWdJQ0FnSUNBZ2FXWWdLQ0ZqYjIxd1lYSmxUR2x1WlNoMGIxQnZjeUFySURFc0lHeHBibVZ6VzNSdlVHOXpYU3dnYjNCbGNtRjBhVzl1TENCamIyNTBaVzUwS1NrZ2UxeHVJQ0FnSUNBZ0lDQWdJR1Z5Y205eVEyOTFiblFyS3p0Y2JseHVJQ0FnSUNBZ0lDQWdJR2xtSUNobGNuSnZja052ZFc1MElENGdablY2ZWtaaFkzUnZjaWtnZTF4dUlDQWdJQ0FnSUNBZ0lDQWdjbVYwZFhKdUlHWmhiSE5sTzF4dUlDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdmVnh1SUNBZ0lDQWdJQ0IwYjFCdmN5c3JPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lIMWNibHh1SUNBZ0lISmxkSFZ5YmlCMGNuVmxPMXh1SUNCOVhHNWNiaUFnTHk4Z1UyVmhjbU5vSUdKbGMzUWdabWwwSUc5bVpuTmxkSE1nWm05eUlHVmhZMmdnYUhWdWF5QmlZWE5sWkNCdmJpQjBhR1VnY0hKbGRtbHZkWE1nYjI1bGMxeHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUdoMWJtdHpMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnYkdWMElHaDFibXNnUFNCb2RXNXJjMXRwWFN4Y2JpQWdJQ0FnSUNBZ2JXRjRUR2x1WlNBOUlHeHBibVZ6TG14bGJtZDBhQ0F0SUdoMWJtc3ViMnhrVEdsdVpYTXNYRzRnSUNBZ0lDQWdJR3h2WTJGc1QyWm1jMlYwSUQwZ01DeGNiaUFnSUNBZ0lDQWdkRzlRYjNNZ1BTQnZabVp6WlhRZ0t5Qm9kVzVyTG05c1pGTjBZWEowSUMwZ01UdGNibHh1SUNBZ0lHeGxkQ0JwZEdWeVlYUnZjaUE5SUdScGMzUmhibU5sU1hSbGNtRjBiM0lvZEc5UWIzTXNJRzFwYmt4cGJtVXNJRzFoZUV4cGJtVXBPMXh1WEc0Z0lDQWdabTl5SUNnN0lHeHZZMkZzVDJabWMyVjBJQ0U5UFNCMWJtUmxabWx1WldRN0lHeHZZMkZzVDJabWMyVjBJRDBnYVhSbGNtRjBiM0lvS1NrZ2UxeHVJQ0FnSUNBZ2FXWWdLR2gxYm10R2FYUnpLR2gxYm1zc0lIUnZVRzl6SUNzZ2JHOWpZV3hQWm1aelpYUXBLU0I3WEc0Z0lDQWdJQ0FnSUdoMWJtc3ViMlptYzJWMElEMGdiMlptYzJWMElDczlJR3h2WTJGc1QyWm1jMlYwTzF4dUlDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYkc5allXeFBabVp6WlhRZ1BUMDlJSFZ1WkdWbWFXNWxaQ2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgxY2JseHVJQ0FnSUM4dklGTmxkQ0JzYjNkbGNpQjBaWGgwSUd4cGJXbDBJSFJ2SUdWdVpDQnZaaUIwYUdVZ1kzVnljbVZ1ZENCb2RXNXJMQ0J6YnlCdVpYaDBJRzl1WlhNZ1pHOXVKM1FnZEhKNVhHNGdJQ0FnTHk4Z2RHOGdabWwwSUc5MlpYSWdZV3h5WldGa2VTQndZWFJqYUdWa0lIUmxlSFJjYmlBZ0lDQnRhVzVNYVc1bElEMGdhSFZ1YXk1dlptWnpaWFFnS3lCb2RXNXJMbTlzWkZOMFlYSjBJQ3NnYUhWdWF5NXZiR1JNYVc1bGN6dGNiaUFnZlZ4dVhHNGdJQzh2SUVGd2NHeDVJSEJoZEdOb0lHaDFibXR6WEc0Z0lHeGxkQ0JrYVdabVQyWm1jMlYwSUQwZ01EdGNiaUFnWm05eUlDaHNaWFFnYVNBOUlEQTdJR2tnUENCb2RXNXJjeTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUd4bGRDQm9kVzVySUQwZ2FIVnVhM05iYVYwc1hHNGdJQ0FnSUNBZ0lIUnZVRzl6SUQwZ2FIVnVheTV2YkdSVGRHRnlkQ0FySUdoMWJtc3ViMlptYzJWMElDc2daR2xtWms5bVpuTmxkQ0F0SURFN1hHNGdJQ0FnWkdsbVprOW1abk5sZENBclBTQm9kVzVyTG01bGQweHBibVZ6SUMwZ2FIVnVheTV2YkdSTWFXNWxjenRjYmx4dUlDQWdJR1p2Y2lBb2JHVjBJR29nUFNBd095QnFJRHdnYUhWdWF5NXNhVzVsY3k1c1pXNW5kR2c3SUdvckt5a2dlMXh1SUNBZ0lDQWdiR1YwSUd4cGJtVWdQU0JvZFc1ckxteHBibVZ6VzJwZExGeHVJQ0FnSUNBZ0lDQWdJRzl3WlhKaGRHbHZiaUE5SUNoc2FXNWxMbXhsYm1kMGFDQStJREFnUHlCc2FXNWxXekJkSURvZ0p5QW5LU3hjYmlBZ0lDQWdJQ0FnSUNCamIyNTBaVzUwSUQwZ0tHeHBibVV1YkdWdVozUm9JRDRnTUNBL0lHeHBibVV1YzNWaWMzUnlLREVwSURvZ2JHbHVaU2tzWEc0Z0lDQWdJQ0FnSUNBZ1pHVnNhVzFwZEdWeUlEMGdhSFZ1YXk1c2FXNWxaR1ZzYVcxcGRHVnljMXRxWFR0Y2JseHVJQ0FnSUNBZ2FXWWdLRzl3WlhKaGRHbHZiaUE5UFQwZ0p5QW5LU0I3WEc0Z0lDQWdJQ0FnSUhSdlVHOXpLeXM3WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0c5d1pYSmhkR2x2YmlBOVBUMGdKeTBuS1NCN1hHNGdJQ0FnSUNBZ0lHeHBibVZ6TG5Od2JHbGpaU2gwYjFCdmN5d2dNU2s3WEc0Z0lDQWdJQ0FnSUdSbGJHbHRhWFJsY25NdWMzQnNhV05sS0hSdlVHOXpMQ0F4S1R0Y2JpQWdJQ0FnSUM4cUlHbHpkR0Z1WW5Wc0lHbG5ibTl5WlNCbGJITmxJQ292WEc0Z0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0c5d1pYSmhkR2x2YmlBOVBUMGdKeXNuS1NCN1hHNGdJQ0FnSUNBZ0lHeHBibVZ6TG5Od2JHbGpaU2gwYjFCdmN5d2dNQ3dnWTI5dWRHVnVkQ2s3WEc0Z0lDQWdJQ0FnSUdSbGJHbHRhWFJsY25NdWMzQnNhV05sS0hSdlVHOXpMQ0F3TENCa1pXeHBiV2wwWlhJcE8xeHVJQ0FnSUNBZ0lDQjBiMUJ2Y3lzck8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUdsbUlDaHZjR1Z5WVhScGIyNGdQVDA5SUNkY1hGeGNKeWtnZTF4dUlDQWdJQ0FnSUNCc1pYUWdjSEpsZG1sdmRYTlBjR1Z5WVhScGIyNGdQU0JvZFc1ckxteHBibVZ6VzJvZ0xTQXhYU0EvSUdoMWJtc3ViR2x1WlhOYmFpQXRJREZkV3pCZElEb2diblZzYkR0Y2JpQWdJQ0FnSUNBZ2FXWWdLSEJ5WlhacGIzVnpUM0JsY21GMGFXOXVJRDA5UFNBbkt5Y3BJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpXMXZkbVZGVDBaT1RDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9jSEpsZG1sdmRYTlBjR1Z5WVhScGIyNGdQVDA5SUNjdEp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUdGa1pFVlBSazVNSUQwZ2RISjFaVHRjYmlBZ0lDQWdJQ0FnZlZ4dUlDQWdJQ0FnZlZ4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUM4dklFaGhibVJzWlNCRlQwWk9UQ0JwYm5ObGNuUnBiMjR2Y21WdGIzWmhiRnh1SUNCcFppQW9jbVZ0YjNabFJVOUdUa3dwSUh0Y2JpQWdJQ0IzYUdsc1pTQW9JV3hwYm1WelcyeHBibVZ6TG14bGJtZDBhQ0F0SURGZEtTQjdYRzRnSUNBZ0lDQnNhVzVsY3k1d2IzQW9LVHRjYmlBZ0lDQWdJR1JsYkdsdGFYUmxjbk11Y0c5d0tDazdYRzRnSUNBZ2ZWeHVJQ0I5SUdWc2MyVWdhV1lnS0dGa1pFVlBSazVNS1NCN1hHNGdJQ0FnYkdsdVpYTXVjSFZ6YUNnbkp5azdYRzRnSUNBZ1pHVnNhVzFwZEdWeWN5NXdkWE5vS0NkY1hHNG5LVHRjYmlBZ2ZWeHVJQ0JtYjNJZ0tHeGxkQ0JmYXlBOUlEQTdJRjlySUR3Z2JHbHVaWE11YkdWdVozUm9JQzBnTVRzZ1gyc3JLeWtnZTF4dUlDQWdJR3hwYm1WelcxOXJYU0E5SUd4cGJtVnpXMTlyWFNBcklHUmxiR2x0YVhSbGNuTmJYMnRkTzF4dUlDQjlYRzRnSUhKbGRIVnliaUJzYVc1bGN5NXFiMmx1S0NjbktUdGNibjFjYmx4dUx5OGdWM0poY0hCbGNpQjBhR0YwSUhOMWNIQnZjblJ6SUcxMWJIUnBjR3hsSUdacGJHVWdjR0YwWTJobGN5QjJhV0VnWTJGc2JHSmhZMnR6TGx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdGd2NHeDVVR0YwWTJobGN5aDFibWxFYVdabUxDQnZjSFJwYjI1ektTQjdYRzRnSUdsbUlDaDBlWEJsYjJZZ2RXNXBSR2xtWmlBOVBUMGdKM04wY21sdVp5Y3BJSHRjYmlBZ0lDQjFibWxFYVdabUlEMGdjR0Z5YzJWUVlYUmphQ2gxYm1sRWFXWm1LVHRjYmlBZ2ZWeHVYRzRnSUd4bGRDQmpkWEp5Wlc1MFNXNWtaWGdnUFNBd08xeHVJQ0JtZFc1amRHbHZiaUJ3Y205alpYTnpTVzVrWlhnb0tTQjdYRzRnSUNBZ2JHVjBJR2x1WkdWNElEMGdkVzVwUkdsbVpsdGpkWEp5Wlc1MFNXNWtaWGdySzEwN1hHNGdJQ0FnYVdZZ0tDRnBibVJsZUNrZ2UxeHVJQ0FnSUNBZ2NtVjBkWEp1SUc5d2RHbHZibk11WTI5dGNHeGxkR1VvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0J2Y0hScGIyNXpMbXh2WVdSR2FXeGxLR2x1WkdWNExDQm1kVzVqZEdsdmJpaGxjbklzSUdSaGRHRXBJSHRjYmlBZ0lDQWdJR2xtSUNobGNuSXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJRzl3ZEdsdmJuTXVZMjl0Y0d4bGRHVW9aWEp5S1R0Y2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2JHVjBJSFZ3WkdGMFpXUkRiMjUwWlc1MElEMGdZWEJ3YkhsUVlYUmphQ2hrWVhSaExDQnBibVJsZUN3Z2IzQjBhVzl1Y3lrN1hHNGdJQ0FnSUNCdmNIUnBiMjV6TG5CaGRHTm9aV1FvYVc1a1pYZ3NJSFZ3WkdGMFpXUkRiMjUwWlc1MExDQm1kVzVqZEdsdmJpaGxjbklwSUh0Y2JpQWdJQ0FnSUNBZ2FXWWdLR1Z5Y2lrZ2UxeHVJQ0FnSUNBZ0lDQWdJSEpsZEhWeWJpQnZjSFJwYjI1ekxtTnZiWEJzWlhSbEtHVnljaWs3WEc0Z0lDQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ0lDQndjbTlqWlhOelNXNWtaWGdvS1R0Y2JpQWdJQ0FnSUgwcE8xeHVJQ0FnSUgwcE8xeHVJQ0I5WEc0Z0lIQnliMk5sYzNOSmJtUmxlQ2dwTzF4dWZWeHVJbDE5XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuc3RydWN0dXJlZFBhdGNoID0gc3RydWN0dXJlZFBhdGNoO1xuZXhwb3J0cy5mb3JtYXRQYXRjaCA9IGZvcm1hdFBhdGNoO1xuZXhwb3J0cy5jcmVhdGVUd29GaWxlc1BhdGNoID0gY3JlYXRlVHdvRmlsZXNQYXRjaDtcbmV4cG9ydHMuY3JlYXRlUGF0Y2ggPSBjcmVhdGVQYXRjaDtcblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2xpbmUgPSByZXF1aXJlKFwiLi4vZGlmZi9saW5lXCIpXG4vKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuO1xuXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovIGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHsgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkoYXJyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbmZ1bmN0aW9uIHN0cnVjdHVyZWRQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAodHlwZW9mIG9wdGlvbnMuY29udGV4dCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBvcHRpb25zLmNvbnRleHQgPSA0O1xuICB9XG5cbiAgdmFyIGRpZmYgPVxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICgwLFxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgX2xpbmVcbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgLlxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gIGRpZmZMaW5lcylcbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgKG9sZFN0ciwgbmV3U3RyLCBvcHRpb25zKTtcblxuICBpZiAoIWRpZmYpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBkaWZmLnB1c2goe1xuICAgIHZhbHVlOiAnJyxcbiAgICBsaW5lczogW11cbiAgfSk7IC8vIEFwcGVuZCBhbiBlbXB0eSB2YWx1ZSB0byBtYWtlIGNsZWFudXAgZWFzaWVyXG5cbiAgZnVuY3Rpb24gY29udGV4dExpbmVzKGxpbmVzKSB7XG4gICAgcmV0dXJuIGxpbmVzLm1hcChmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgIHJldHVybiAnICcgKyBlbnRyeTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBodW5rcyA9IFtdO1xuICB2YXIgb2xkUmFuZ2VTdGFydCA9IDAsXG4gICAgICBuZXdSYW5nZVN0YXJ0ID0gMCxcbiAgICAgIGN1clJhbmdlID0gW10sXG4gICAgICBvbGRMaW5lID0gMSxcbiAgICAgIG5ld0xpbmUgPSAxO1xuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgdmFyIF9sb29wID0gZnVuY3Rpb24gX2xvb3AoXG4gIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gIGkpIHtcbiAgICB2YXIgY3VycmVudCA9IGRpZmZbaV0sXG4gICAgICAgIGxpbmVzID0gY3VycmVudC5saW5lcyB8fCBjdXJyZW50LnZhbHVlLnJlcGxhY2UoL1xcbiQvLCAnJykuc3BsaXQoJ1xcbicpO1xuICAgIGN1cnJlbnQubGluZXMgPSBsaW5lcztcblxuICAgIGlmIChjdXJyZW50LmFkZGVkIHx8IGN1cnJlbnQucmVtb3ZlZCkge1xuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgdmFyIF9jdXJSYW5nZTtcblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgIC8vIElmIHdlIGhhdmUgcHJldmlvdXMgY29udGV4dCwgc3RhcnQgd2l0aCB0aGF0XG4gICAgICBpZiAoIW9sZFJhbmdlU3RhcnQpIHtcbiAgICAgICAgdmFyIHByZXYgPSBkaWZmW2kgLSAxXTtcbiAgICAgICAgb2xkUmFuZ2VTdGFydCA9IG9sZExpbmU7XG4gICAgICAgIG5ld1JhbmdlU3RhcnQgPSBuZXdMaW5lO1xuXG4gICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgY3VyUmFuZ2UgPSBvcHRpb25zLmNvbnRleHQgPiAwID8gY29udGV4dExpbmVzKHByZXYubGluZXMuc2xpY2UoLW9wdGlvbnMuY29udGV4dCkpIDogW107XG4gICAgICAgICAgb2xkUmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgICAgbmV3UmFuZ2VTdGFydCAtPSBjdXJSYW5nZS5sZW5ndGg7XG4gICAgICAgIH1cbiAgICAgIH0gLy8gT3V0cHV0IG91ciBjaGFuZ2VzXG5cblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICAoX2N1clJhbmdlID1cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICBjdXJSYW5nZSkucHVzaC5hcHBseShcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIF9jdXJSYW5nZVxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICxcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIF90b0NvbnN1bWFibGVBcnJheShcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICBsaW5lcy5tYXAoZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgIHJldHVybiAoY3VycmVudC5hZGRlZCA/ICcrJyA6ICctJykgKyBlbnRyeTtcbiAgICAgIH0pKSk7IC8vIFRyYWNrIHRoZSB1cGRhdGVkIGZpbGUgcG9zaXRpb25cblxuXG4gICAgICBpZiAoY3VycmVudC5hZGRlZCkge1xuICAgICAgICBuZXdMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9sZExpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZGVudGljYWwgY29udGV4dCBsaW5lcy4gVHJhY2sgbGluZSBjaGFuZ2VzXG4gICAgICBpZiAob2xkUmFuZ2VTdGFydCkge1xuICAgICAgICAvLyBDbG9zZSBvdXQgYW55IGNoYW5nZXMgdGhhdCBoYXZlIGJlZW4gb3V0cHV0IChvciBqb2luIG92ZXJsYXBwaW5nKVxuICAgICAgICBpZiAobGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCAqIDIgJiYgaSA8IGRpZmYubGVuZ3RoIC0gMikge1xuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgICAgICB2YXIgX2N1clJhbmdlMjtcblxuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAgICAgLy8gT3ZlcmxhcHBpbmdcblxuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICAgICAgKF9jdXJSYW5nZTIgPVxuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAgICAgY3VyUmFuZ2UpLnB1c2guYXBwbHkoXG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgICAgIF9jdXJSYW5nZTJcbiAgICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgICAgICxcbiAgICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICAgICAgX3RvQ29uc3VtYWJsZUFycmF5KFxuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAgICAgY29udGV4dExpbmVzKGxpbmVzKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgICAgICB2YXIgX2N1clJhbmdlMztcblxuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAgICAgLy8gZW5kIHRoZSByYW5nZSBhbmQgb3V0cHV0XG4gICAgICAgICAgdmFyIGNvbnRleHRTaXplID0gTWF0aC5taW4obGluZXMubGVuZ3RoLCBvcHRpb25zLmNvbnRleHQpO1xuXG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgICAgICAoX2N1clJhbmdlMyA9XG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICAgICBjdXJSYW5nZSkucHVzaC5hcHBseShcbiAgICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICAgICAgX2N1clJhbmdlM1xuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAgICAgLFxuICAgICAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgICAgICBfdG9Db25zdW1hYmxlQXJyYXkoXG4gICAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICAgICBjb250ZXh0TGluZXMobGluZXMuc2xpY2UoMCwgY29udGV4dFNpemUpKSkpO1xuXG4gICAgICAgICAgdmFyIGh1bmsgPSB7XG4gICAgICAgICAgICBvbGRTdGFydDogb2xkUmFuZ2VTdGFydCxcbiAgICAgICAgICAgIG9sZExpbmVzOiBvbGRMaW5lIC0gb2xkUmFuZ2VTdGFydCArIGNvbnRleHRTaXplLFxuICAgICAgICAgICAgbmV3U3RhcnQ6IG5ld1JhbmdlU3RhcnQsXG4gICAgICAgICAgICBuZXdMaW5lczogbmV3TGluZSAtIG5ld1JhbmdlU3RhcnQgKyBjb250ZXh0U2l6ZSxcbiAgICAgICAgICAgIGxpbmVzOiBjdXJSYW5nZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAoaSA+PSBkaWZmLmxlbmd0aCAtIDIgJiYgbGluZXMubGVuZ3RoIDw9IG9wdGlvbnMuY29udGV4dCkge1xuICAgICAgICAgICAgLy8gRU9GIGlzIGluc2lkZSB0aGlzIGh1bmtcbiAgICAgICAgICAgIHZhciBvbGRFT0ZOZXdsaW5lID0gL1xcbiQvLnRlc3Qob2xkU3RyKTtcbiAgICAgICAgICAgIHZhciBuZXdFT0ZOZXdsaW5lID0gL1xcbiQvLnRlc3QobmV3U3RyKTtcbiAgICAgICAgICAgIHZhciBub05sQmVmb3JlQWRkcyA9IGxpbmVzLmxlbmd0aCA9PSAwICYmIGN1clJhbmdlLmxlbmd0aCA+IGh1bmsub2xkTGluZXM7XG5cbiAgICAgICAgICAgIGlmICghb2xkRU9GTmV3bGluZSAmJiBub05sQmVmb3JlQWRkcyAmJiBvbGRTdHIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAvLyBzcGVjaWFsIGNhc2U6IG9sZCBoYXMgbm8gZW9sIGFuZCBubyB0cmFpbGluZyBjb250ZXh0OyBuby1ubCBjYW4gZW5kIHVwIGJlZm9yZSBhZGRzXG4gICAgICAgICAgICAgIC8vIGhvd2V2ZXIsIGlmIHRoZSBvbGQgZmlsZSBpcyBlbXB0eSwgZG8gbm90IG91dHB1dCB0aGUgbm8tbmwgbGluZVxuICAgICAgICAgICAgICBjdXJSYW5nZS5zcGxpY2UoaHVuay5vbGRMaW5lcywgMCwgJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIW9sZEVPRk5ld2xpbmUgJiYgIW5vTmxCZWZvcmVBZGRzIHx8ICFuZXdFT0ZOZXdsaW5lKSB7XG4gICAgICAgICAgICAgIGN1clJhbmdlLnB1c2goJ1xcXFwgTm8gbmV3bGluZSBhdCBlbmQgb2YgZmlsZScpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGh1bmtzLnB1c2goaHVuayk7XG4gICAgICAgICAgb2xkUmFuZ2VTdGFydCA9IDA7XG4gICAgICAgICAgbmV3UmFuZ2VTdGFydCA9IDA7XG4gICAgICAgICAgY3VyUmFuZ2UgPSBbXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBvbGRMaW5lICs9IGxpbmVzLmxlbmd0aDtcbiAgICAgIG5ld0xpbmUgKz0gbGluZXMubGVuZ3RoO1xuICAgIH1cbiAgfTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGRpZmYubGVuZ3RoOyBpKyspIHtcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgX2xvb3AoXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICBpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgb2xkRmlsZU5hbWU6IG9sZEZpbGVOYW1lLFxuICAgIG5ld0ZpbGVOYW1lOiBuZXdGaWxlTmFtZSxcbiAgICBvbGRIZWFkZXI6IG9sZEhlYWRlcixcbiAgICBuZXdIZWFkZXI6IG5ld0hlYWRlcixcbiAgICBodW5rczogaHVua3NcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0UGF0Y2goZGlmZikge1xuICB2YXIgcmV0ID0gW107XG5cbiAgaWYgKGRpZmYub2xkRmlsZU5hbWUgPT0gZGlmZi5uZXdGaWxlTmFtZSkge1xuICAgIHJldC5wdXNoKCdJbmRleDogJyArIGRpZmYub2xkRmlsZU5hbWUpO1xuICB9XG5cbiAgcmV0LnB1c2goJz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0nKTtcbiAgcmV0LnB1c2goJy0tLSAnICsgZGlmZi5vbGRGaWxlTmFtZSArICh0eXBlb2YgZGlmZi5vbGRIZWFkZXIgPT09ICd1bmRlZmluZWQnID8gJycgOiAnXFx0JyArIGRpZmYub2xkSGVhZGVyKSk7XG4gIHJldC5wdXNoKCcrKysgJyArIGRpZmYubmV3RmlsZU5hbWUgKyAodHlwZW9mIGRpZmYubmV3SGVhZGVyID09PSAndW5kZWZpbmVkJyA/ICcnIDogJ1xcdCcgKyBkaWZmLm5ld0hlYWRlcikpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGlmZi5odW5rcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBodW5rID0gZGlmZi5odW5rc1tpXTsgLy8gVW5pZmllZCBEaWZmIEZvcm1hdCBxdWlyazogSWYgdGhlIGNodW5rIHNpemUgaXMgMCxcbiAgICAvLyB0aGUgZmlyc3QgbnVtYmVyIGlzIG9uZSBsb3dlciB0aGFuIG9uZSB3b3VsZCBleHBlY3QuXG4gICAgLy8gaHR0cHM6Ly93d3cuYXJ0aW1hLmNvbS93ZWJsb2dzL3ZpZXdwb3N0LmpzcD90aHJlYWQ9MTY0MjkzXG5cbiAgICBpZiAoaHVuay5vbGRMaW5lcyA9PT0gMCkge1xuICAgICAgaHVuay5vbGRTdGFydCAtPSAxO1xuICAgIH1cblxuICAgIGlmIChodW5rLm5ld0xpbmVzID09PSAwKSB7XG4gICAgICBodW5rLm5ld1N0YXJ0IC09IDE7XG4gICAgfVxuXG4gICAgcmV0LnB1c2goJ0BAIC0nICsgaHVuay5vbGRTdGFydCArICcsJyArIGh1bmsub2xkTGluZXMgKyAnICsnICsgaHVuay5uZXdTdGFydCArICcsJyArIGh1bmsubmV3TGluZXMgKyAnIEBAJyk7XG4gICAgcmV0LnB1c2guYXBwbHkocmV0LCBodW5rLmxpbmVzKTtcbiAgfVxuXG4gIHJldHVybiByZXQuam9pbignXFxuJykgKyAnXFxuJztcbn1cblxuZnVuY3Rpb24gY3JlYXRlVHdvRmlsZXNQYXRjaChvbGRGaWxlTmFtZSwgbmV3RmlsZU5hbWUsIG9sZFN0ciwgbmV3U3RyLCBvbGRIZWFkZXIsIG5ld0hlYWRlciwgb3B0aW9ucykge1xuICByZXR1cm4gZm9ybWF0UGF0Y2goc3RydWN0dXJlZFBhdGNoKG9sZEZpbGVOYW1lLCBuZXdGaWxlTmFtZSwgb2xkU3RyLCBuZXdTdHIsIG9sZEhlYWRlciwgbmV3SGVhZGVyLCBvcHRpb25zKSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBhdGNoKGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIGNyZWF0ZVR3b0ZpbGVzUGF0Y2goZmlsZU5hbWUsIGZpbGVOYW1lLCBvbGRTdHIsIG5ld1N0ciwgb2xkSGVhZGVyLCBuZXdIZWFkZXIsIG9wdGlvbnMpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5d1lYUmphQzlqY21WaGRHVXVhbk1pWFN3aWJtRnRaWE1pT2xzaWMzUnlkV04wZFhKbFpGQmhkR05vSWl3aWIyeGtSbWxzWlU1aGJXVWlMQ0p1WlhkR2FXeGxUbUZ0WlNJc0ltOXNaRk4wY2lJc0ltNWxkMU4wY2lJc0ltOXNaRWhsWVdSbGNpSXNJbTVsZDBobFlXUmxjaUlzSW05d2RHbHZibk1pTENKamIyNTBaWGgwSWl3aVpHbG1aaUlzSW1ScFptWk1hVzVsY3lJc0luQjFjMmdpTENKMllXeDFaU0lzSW14cGJtVnpJaXdpWTI5dWRHVjRkRXhwYm1Weklpd2liV0Z3SWl3aVpXNTBjbmtpTENKb2RXNXJjeUlzSW05c1pGSmhibWRsVTNSaGNuUWlMQ0p1WlhkU1lXNW5aVk4wWVhKMElpd2lZM1Z5VW1GdVoyVWlMQ0p2YkdSTWFXNWxJaXdpYm1WM1RHbHVaU0lzSW1raUxDSmpkWEp5Wlc1MElpd2ljbVZ3YkdGalpTSXNJbk53YkdsMElpd2lZV1JrWldRaUxDSnlaVzF2ZG1Wa0lpd2ljSEpsZGlJc0luTnNhV05sSWl3aWJHVnVaM1JvSWl3aVkyOXVkR1Y0ZEZOcGVtVWlMQ0pOWVhSb0lpd2liV2x1SWl3aWFIVnVheUlzSW05c1pGTjBZWEowSWl3aWIyeGtUR2x1WlhNaUxDSnVaWGRUZEdGeWRDSXNJbTVsZDB4cGJtVnpJaXdpYjJ4a1JVOUdUbVYzYkdsdVpTSXNJblJsYzNRaUxDSnVaWGRGVDBaT1pYZHNhVzVsSWl3aWJtOU9iRUpsWm05eVpVRmtaSE1pTENKemNHeHBZMlVpTENKbWIzSnRZWFJRWVhSamFDSXNJbkpsZENJc0ltRndjR3g1SWl3aWFtOXBiaUlzSW1OeVpXRjBaVlIzYjBacGJHVnpVR0YwWTJnaUxDSmpjbVZoZEdWUVlYUmphQ0lzSW1acGJHVk9ZVzFsSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPenM3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPenM3T3pzN096czdPenM3T3pzN1FVRkZUeXhUUVVGVFFTeGxRVUZVTEVOQlFYbENReXhYUVVGNlFpeEZRVUZ6UTBNc1YwRkJkRU1zUlVGQmJVUkRMRTFCUVc1RUxFVkJRVEpFUXl4TlFVRXpSQ3hGUVVGdFJVTXNVMEZCYmtVc1JVRkJPRVZETEZOQlFUbEZMRVZCUVhsR1F5eFBRVUY2Uml4RlFVRnJSenRCUVVOMlJ5eE5RVUZKTEVOQlFVTkJMRTlCUVV3c1JVRkJZenRCUVVOYVFTeEpRVUZCUVN4UFFVRlBMRWRCUVVjc1JVRkJWanRCUVVORU96dEJRVU5FTEUxQlFVa3NUMEZCVDBFc1QwRkJUeXhEUVVGRFF5eFBRVUZtTEV0QlFUSkNMRmRCUVM5Q0xFVkJRVFJETzBGQlF6RkRSQ3hKUVVGQlFTeFBRVUZQTEVOQlFVTkRMRTlCUVZJc1IwRkJhMElzUTBGQmJFSTdRVUZEUkRzN1FVRkZSQ3hOUVVGTlF5eEpRVUZKTzBGQlFVYzdRVUZCUVR0QlFVRkJPenRCUVVGQlF6dEJRVUZCUVR0QlFVRkJRVHRCUVVGQlFUdEJRVUZCUVR0QlFVRkJRVHRCUVVGQk8wRkJRVUVzUjBGQlZWQXNUVUZCVml4RlFVRnJRa01zVFVGQmJFSXNSVUZCTUVKSExFOUJRVEZDTEVOQlFXSTdPMEZCUTBFc1RVRkJSeXhEUVVGRFJTeEpRVUZLTEVWQlFWVTdRVUZEVWp0QlFVTkVPenRCUVVWRVFTeEZRVUZCUVN4SlFVRkpMRU5CUVVORkxFbEJRVXdzUTBGQlZUdEJRVUZEUXl4SlFVRkJRU3hMUVVGTExFVkJRVVVzUlVGQlVqdEJRVUZaUXl4SlFVRkJRU3hMUVVGTExFVkJRVVU3UVVGQmJrSXNSMEZCVml4RlFXSjFSeXhEUVdGd1JUczdRVUZGYmtNc1YwRkJVME1zV1VGQlZDeERRVUZ6UWtRc1MwRkJkRUlzUlVGQk5rSTdRVUZETTBJc1YwRkJUMEVzUzBGQlN5eERRVUZEUlN4SFFVRk9MRU5CUVZVc1ZVRkJVME1zUzBGQlZDeEZRVUZuUWp0QlFVRkZMR0ZCUVU4c1RVRkJUVUVzUzBGQllqdEJRVUZ4UWl4TFFVRnFSQ3hEUVVGUU8wRkJRMFE3TzBGQlJVUXNUVUZCU1VNc1MwRkJTeXhIUVVGSExFVkJRVm83UVVGRFFTeE5RVUZKUXl4aFFVRmhMRWRCUVVjc1EwRkJjRUk3UVVGQlFTeE5RVUYxUWtNc1lVRkJZU3hIUVVGSExFTkJRWFpETzBGQlFVRXNUVUZCTUVORExGRkJRVkVzUjBGQlJ5eEZRVUZ5UkR0QlFVRkJMRTFCUTBsRExFOUJRVThzUjBGQlJ5eERRVVJrTzBGQlFVRXNUVUZEYVVKRExFOUJRVThzUjBGQlJ5eERRVVF6UWpzN1FVRndRblZITzBGQlFVRTdRVUZCUVR0QlFYTkNPVVpETEVWQlFVRkJMRU5CZEVJNFJqdEJRWFZDY2tjc1VVRkJUVU1zVDBGQlR5eEhRVUZIWml4SlFVRkpMRU5CUVVOakxFTkJRVVFzUTBGQmNFSTdRVUZCUVN4UlFVTk5WaXhMUVVGTExFZEJRVWRYTEU5QlFVOHNRMEZCUTFnc1MwRkJVaXhKUVVGcFFsY3NUMEZCVHl4RFFVRkRXaXhMUVVGU0xFTkJRV05oTEU5QlFXUXNRMEZCYzBJc1MwRkJkRUlzUlVGQk5rSXNSVUZCTjBJc1JVRkJhVU5ETEV0QlFXcERMRU5CUVhWRExFbEJRWFpETEVOQlJDOUNPMEZCUlVGR0xFbEJRVUZCTEU5QlFVOHNRMEZCUTFnc1MwRkJVaXhIUVVGblFrRXNTMEZCYUVJN08wRkJSVUVzVVVGQlNWY3NUMEZCVHl4RFFVRkRSeXhMUVVGU0xFbEJRV2xDU0N4UFFVRlBMRU5CUVVOSkxFOUJRVGRDTEVWQlFYTkRPMEZCUVVFN1FVRkJRVHM3UVVGQlFUdEJRVU53UXp0QlFVTkJMRlZCUVVrc1EwRkJRMVlzWVVGQlRDeEZRVUZ2UWp0QlFVTnNRaXhaUVVGTlZ5eEpRVUZKTEVkQlFVZHdRaXhKUVVGSkxFTkJRVU5qTEVOQlFVTXNSMEZCUnl4RFFVRk1MRU5CUVdwQ08wRkJRMEZNTEZGQlFVRkJMR0ZCUVdFc1IwRkJSMGNzVDBGQmFFSTdRVUZEUVVZc1VVRkJRVUVzWVVGQllTeEhRVUZIUnl4UFFVRm9RanM3UVVGRlFTeFpRVUZKVHl4SlFVRktMRVZCUVZVN1FVRkRVbFFzVlVGQlFVRXNVVUZCVVN4SFFVRkhZaXhQUVVGUExFTkJRVU5ETEU5QlFWSXNSMEZCYTBJc1EwRkJiRUlzUjBGQmMwSk5MRmxCUVZrc1EwRkJRMlVzU1VGQlNTeERRVUZEYUVJc1MwRkJUQ3hEUVVGWGFVSXNTMEZCV0N4RFFVRnBRaXhEUVVGRGRrSXNUMEZCVHl4RFFVRkRReXhQUVVFeFFpeERRVUZFTEVOQlFXeERMRWRCUVhsRkxFVkJRWEJHTzBGQlEwRlZMRlZCUVVGQkxHRkJRV0VzU1VGQlNVVXNVVUZCVVN4RFFVRkRWeXhOUVVFeFFqdEJRVU5CV2l4VlFVRkJRU3hoUVVGaExFbEJRVWxETEZGQlFWRXNRMEZCUTFjc1RVRkJNVUk3UVVGRFJEdEJRVU5HTEU5QldtMURMRU5CWTNCRE96czdRVUZEUVRzN1FVRkJRVHM3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVZnc1RVRkJRVUVzVVVGQlVTeEZRVUZEVkN4SlFVRlVPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCYTBKRkxFMUJRVUZCTEV0QlFVc3NRMEZCUTBVc1IwRkJUaXhEUVVGVkxGVkJRVk5ETEV0QlFWUXNSVUZCWjBJN1FVRkRNVU1zWlVGQlR5eERRVUZEVVN4UFFVRlBMRU5CUVVOSExFdEJRVklzUjBGQlowSXNSMEZCYUVJc1IwRkJjMElzUjBGQmRrSXNTVUZCT0VKWUxFdEJRWEpETzBGQlEwUXNUMEZHYVVJc1EwRkJiRUlzUjBGbWIwTXNRMEZ0UW5CRE96czdRVUZEUVN4VlFVRkpVU3hQUVVGUExFTkJRVU5ITEV0QlFWb3NSVUZCYlVJN1FVRkRha0pNTEZGQlFVRkJMRTlCUVU4c1NVRkJTVlFzUzBGQlN5eERRVUZEYTBJc1RVRkJha0k3UVVGRFJDeFBRVVpFTEUxQlJVODdRVUZEVEZZc1VVRkJRVUVzVDBGQlR5eEpRVUZKVWl4TFFVRkxMRU5CUVVOclFpeE5RVUZxUWp0QlFVTkVPMEZCUTBZc1MwRjZRa1FzVFVGNVFrODdRVUZEVER0QlFVTkJMRlZCUVVsaUxHRkJRVW9zUlVGQmJVSTdRVUZEYWtJN1FVRkRRU3haUVVGSlRDeExRVUZMTEVOQlFVTnJRaXhOUVVGT0xFbEJRV2RDZUVJc1QwRkJUeXhEUVVGRFF5eFBRVUZTTEVkQlFXdENMRU5CUVd4RExFbEJRWFZEWlN4RFFVRkRMRWRCUVVka0xFbEJRVWtzUTBGQlEzTkNMRTFCUVV3c1IwRkJZeXhEUVVFM1JDeEZRVUZuUlR0QlFVRkJPMEZCUVVFN08wRkJRVUU3UVVGRE9VUTdPMEZCUTBFN08wRkJRVUU3TzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVGWUxGVkJRVUZCTEZGQlFWRXNSVUZCUTFRc1NVRkJWRHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVd0Q1J5eFZRVUZCUVN4WlFVRlpMRU5CUVVORUxFdEJRVVFzUTBGQk9VSTdRVUZEUkN4VFFVaEVMRTFCUjA4N1FVRkJRVHRCUVVGQk96dEJRVUZCTzBGQlEwdzdRVUZEUVN4alFVRkpiVUlzVjBGQlZ5eEhRVUZIUXl4SlFVRkpMRU5CUVVORExFZEJRVXdzUTBGQlUzSkNMRXRCUVVzc1EwRkJRMnRDTEUxQlFXWXNSVUZCZFVKNFFpeFBRVUZQTEVOQlFVTkRMRTlCUVM5Q0xFTkJRV3hDT3p0QlFVTkJPenRCUVVGQk96dEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJXU3hWUVVGQlFTeFJRVUZSTEVWQlFVTlVMRWxCUVZRN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRnJRa2NzVlVGQlFVRXNXVUZCV1N4RFFVRkRSQ3hMUVVGTExFTkJRVU5wUWl4TFFVRk9MRU5CUVZrc1EwRkJXaXhGUVVGbFJTeFhRVUZtTEVOQlFVUXNRMEZCT1VJN08wRkJSVUVzWTBGQlNVY3NTVUZCU1N4SFFVRkhPMEZCUTFSRExGbEJRVUZCTEZGQlFWRXNSVUZCUld4Q0xHRkJSRVE3UVVGRlZHMUNMRmxCUVVGQkxGRkJRVkVzUlVGQlIyaENMRTlCUVU4c1IwRkJSMGdzWVVGQlZpeEhRVUV3UW1Nc1YwRkdOVUk3UVVGSFZFMHNXVUZCUVVFc1VVRkJVU3hGUVVGRmJrSXNZVUZJUkR0QlFVbFViMElzV1VGQlFVRXNVVUZCVVN4RlFVRkhha0lzVDBGQlR5eEhRVUZIU0N4aFFVRldMRWRCUVRCQ1lTeFhRVW8xUWp0QlFVdFVia0lzV1VGQlFVRXNTMEZCU3l4RlFVRkZUenRCUVV4RkxGZEJRVmc3TzBGQlQwRXNZMEZCU1Vjc1EwRkJReXhKUVVGSlpDeEpRVUZKTEVOQlFVTnpRaXhOUVVGTUxFZEJRV01zUTBGQmJrSXNTVUZCZDBKc1FpeExRVUZMTEVOQlFVTnJRaXhOUVVGT0xFbEJRV2RDZUVJc1QwRkJUeXhEUVVGRFF5eFBRVUZ3UkN4RlFVRTJSRHRCUVVNelJEdEJRVU5CTEdkQ1FVRkpaME1zWVVGQllTeEhRVUZMTEV0QlFVUXNRMEZCVVVNc1NVRkJVaXhEUVVGaGRFTXNUVUZCWWl4RFFVRnlRanRCUVVOQkxHZENRVUZKZFVNc1lVRkJZU3hIUVVGTExFdEJRVVFzUTBGQlVVUXNTVUZCVWl4RFFVRmhja01zVFVGQllpeERRVUZ5UWp0QlFVTkJMR2RDUVVGSmRVTXNZMEZCWXl4SFFVRkhPVUlzUzBGQlN5eERRVUZEYTBJc1RVRkJUaXhKUVVGblFpeERRVUZvUWl4SlFVRnhRbGdzVVVGQlVTeERRVUZEVnl4TlFVRlVMRWRCUVd0Q1NTeEpRVUZKTEVOQlFVTkZMRkZCUVdwRk96dEJRVU5CTEdkQ1FVRkpMRU5CUVVOSExHRkJRVVFzU1VGQmEwSkhMR05CUVd4Q0xFbEJRVzlEZUVNc1RVRkJUU3hEUVVGRE5FSXNUVUZCVUN4SFFVRm5RaXhEUVVGNFJDeEZRVUV5UkR0QlFVTjZSRHRCUVVOQk8wRkJRMEZZTEdOQlFVRkJMRkZCUVZFc1EwRkJRM2RDTEUxQlFWUXNRMEZCWjBKVUxFbEJRVWtzUTBGQlEwVXNVVUZCY2tJc1JVRkJLMElzUTBGQkwwSXNSVUZCYTBNc09FSkJRV3hETzBGQlEwUTdPMEZCUTBRc1owSkJRVXNzUTBGQlEwY3NZVUZCUkN4SlFVRnJRaXhEUVVGRFJ5eGpRVUZ3UWl4SlFVRjFReXhEUVVGRFJDeGhRVUUxUXl4RlFVRXlSRHRCUVVONlJIUkNMR05CUVVGQkxGRkJRVkVzUTBGQlExUXNTVUZCVkN4RFFVRmpMRGhDUVVGa08wRkJRMFE3UVVGRFJqczdRVUZEUkUwc1ZVRkJRVUVzUzBGQlN5eERRVUZEVGl4SlFVRk9MRU5CUVZkM1FpeEpRVUZZTzBGQlJVRnFRaXhWUVVGQlFTeGhRVUZoTEVkQlFVY3NRMEZCYUVJN1FVRkRRVU1zVlVGQlFVRXNZVUZCWVN4SFFVRkhMRU5CUVdoQ08wRkJRMEZETEZWQlFVRkJMRkZCUVZFc1IwRkJSeXhGUVVGWU8wRkJRMFE3UVVGRFJqczdRVUZEUkVNc1RVRkJRVUVzVDBGQlR5eEpRVUZKVWl4TFFVRkxMRU5CUVVOclFpeE5RVUZxUWp0QlFVTkJWQ3hOUVVGQlFTeFBRVUZQTEVsQlFVbFVMRXRCUVVzc1EwRkJRMnRDTEUxQlFXcENPMEZCUTBRN1FVRTVSbTlIT3p0QlFYTkNka2NzVDBGQlN5eEpRVUZKVWl4RFFVRkRMRWRCUVVjc1EwRkJZaXhGUVVGblFrRXNRMEZCUXl4SFFVRkhaQ3hKUVVGSkxFTkJRVU56UWl4TlFVRjZRaXhGUVVGcFExSXNRMEZCUXl4RlFVRnNReXhGUVVGelF6dEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRTNRa0VzU1VGQlFVRXNRMEZCTmtJN1FVRjVSWEpET3p0QlFVVkVMRk5CUVU4N1FVRkRUSFJDTEVsQlFVRkJMRmRCUVZjc1JVRkJSVUVzVjBGRVVqdEJRVU54UWtNc1NVRkJRVUVzVjBGQlZ5eEZRVUZGUVN4WFFVUnNRenRCUVVWTVJ5eEpRVUZCUVN4VFFVRlRMRVZCUVVWQkxGTkJSazQ3UVVGRmFVSkRMRWxCUVVGQkxGTkJRVk1zUlVGQlJVRXNVMEZHTlVJN1FVRkhURmNzU1VGQlFVRXNTMEZCU3l4RlFVRkZRVHRCUVVoR0xFZEJRVkE3UVVGTFJEczdRVUZGVFN4VFFVRlRORUlzVjBGQlZDeERRVUZ4UW5CRExFbEJRWEpDTEVWQlFUSkNPMEZCUTJoRExFMUJRVTF4UXl4SFFVRkhMRWRCUVVjc1JVRkJXanM3UVVGRFFTeE5RVUZKY2tNc1NVRkJTU3hEUVVGRFVpeFhRVUZNTEVsQlFXOUNVU3hKUVVGSkxFTkJRVU5RTEZkQlFUZENMRVZCUVRCRE8wRkJRM2hETkVNc1NVRkJRVUVzUjBGQlJ5eERRVUZEYmtNc1NVRkJTaXhEUVVGVExGbEJRVmxHTEVsQlFVa3NRMEZCUTFJc1YwRkJNVUk3UVVGRFJEczdRVUZEUkRaRExFVkJRVUZCTEVkQlFVY3NRMEZCUTI1RExFbEJRVW9zUTBGQlV5eHhSVUZCVkR0QlFVTkJiVU1zUlVGQlFVRXNSMEZCUnl4RFFVRkRia01zU1VGQlNpeERRVUZUTEZOQlFWTkdMRWxCUVVrc1EwRkJRMUlzVjBGQlpDeEpRVUUyUWl4UFFVRlBVU3hKUVVGSkxFTkJRVU5LTEZOQlFWb3NTMEZCTUVJc1YwRkJNVUlzUjBGQmQwTXNSVUZCZUVNc1IwRkJOa01zVDBGQlQwa3NTVUZCU1N4RFFVRkRTaXhUUVVGMFJpeERRVUZVTzBGQlEwRjVReXhGUVVGQlFTeEhRVUZITEVOQlFVTnVReXhKUVVGS0xFTkJRVk1zVTBGQlUwWXNTVUZCU1N4RFFVRkRVQ3hYUVVGa0xFbEJRVFpDTEU5QlFVOVBMRWxCUVVrc1EwRkJRMGdzVTBGQldpeExRVUV3UWl4WFFVRXhRaXhIUVVGM1F5eEZRVUY0UXl4SFFVRTJReXhQUVVGUFJ5eEpRVUZKTEVOQlFVTklMRk5CUVhSR0xFTkJRVlE3TzBGQlJVRXNUMEZCU3l4SlFVRkphVUlzUTBGQlF5eEhRVUZITEVOQlFXSXNSVUZCWjBKQkxFTkJRVU1zUjBGQlIyUXNTVUZCU1N4RFFVRkRVU3hMUVVGTUxFTkJRVmRqTEUxQlFTOUNMRVZCUVhWRFVpeERRVUZETEVWQlFYaERMRVZCUVRSRE8wRkJRekZETEZGQlFVMVpMRWxCUVVrc1IwRkJSekZDTEVsQlFVa3NRMEZCUTFFc1MwRkJUQ3hEUVVGWFRTeERRVUZZTEVOQlFXSXNRMEZFTUVNc1EwRkZNVU03UVVGRFFUdEJRVU5CT3p0QlFVTkJMRkZCUVVsWkxFbEJRVWtzUTBGQlEwVXNVVUZCVEN4TFFVRnJRaXhEUVVGMFFpeEZRVUY1UWp0QlFVTjJRa1lzVFVGQlFVRXNTVUZCU1N4RFFVRkRReXhSUVVGTUxFbEJRV2xDTEVOQlFXcENPMEZCUTBRN08wRkJRMFFzVVVGQlNVUXNTVUZCU1N4RFFVRkRTU3hSUVVGTUxFdEJRV3RDTEVOQlFYUkNMRVZCUVhsQ08wRkJRM1pDU2l4TlFVRkJRU3hKUVVGSkxFTkJRVU5ITEZGQlFVd3NTVUZCYVVJc1EwRkJha0k3UVVGRFJEczdRVUZEUkZFc1NVRkJRVUVzUjBGQlJ5eERRVUZEYmtNc1NVRkJTaXhEUVVORkxGTkJRVk4zUWl4SlFVRkpMRU5CUVVORExGRkJRV1FzUjBGQmVVSXNSMEZCZWtJc1IwRkJLMEpFTEVsQlFVa3NRMEZCUTBVc1VVRkJjRU1zUjBGRFJTeEpRVVJHTEVkQlExTkdMRWxCUVVrc1EwRkJRMGNzVVVGRVpDeEhRVU41UWl4SFFVUjZRaXhIUVVNclFrZ3NTVUZCU1N4RFFVRkRTU3hSUVVSd1F5eEhRVVZGTEV0QlNFbzdRVUZMUVU4c1NVRkJRVUVzUjBGQlJ5eERRVUZEYmtNc1NVRkJTaXhEUVVGVGIwTXNTMEZCVkN4RFFVRmxSQ3hIUVVGbUxFVkJRVzlDV0N4SlFVRkpMRU5CUVVOMFFpeExRVUY2UWp0QlFVTkVPenRCUVVWRUxGTkJRVTlwUXl4SFFVRkhMRU5CUVVORkxFbEJRVW9zUTBGQlV5eEpRVUZVTEVsQlFXbENMRWxCUVhoQ08wRkJRMFE3TzBGQlJVMHNVMEZCVTBNc2JVSkJRVlFzUTBGQk5rSm9SQ3hYUVVFM1FpeEZRVUV3UTBNc1YwRkJNVU1zUlVGQmRVUkRMRTFCUVhaRUxFVkJRU3RFUXl4TlFVRXZSQ3hGUVVGMVJVTXNVMEZCZGtVc1JVRkJhMFpETEZOQlFXeEdMRVZCUVRaR1F5eFBRVUUzUml4RlFVRnpSenRCUVVNelJ5eFRRVUZQYzBNc1YwRkJWeXhEUVVGRE4wTXNaVUZCWlN4RFFVRkRReXhYUVVGRUxFVkJRV05ETEZkQlFXUXNSVUZCTWtKRExFMUJRVE5DTEVWQlFXMURReXhOUVVGdVF5eEZRVUV5UTBNc1UwRkJNME1zUlVGQmMwUkRMRk5CUVhSRUxFVkJRV2xGUXl4UFFVRnFSU3hEUVVGb1FpeERRVUZzUWp0QlFVTkVPenRCUVVWTkxGTkJRVk15UXl4WFFVRlVMRU5CUVhGQ1F5eFJRVUZ5UWl4RlFVRXJRbWhFTEUxQlFTOUNMRVZCUVhWRFF5eE5RVUYyUXl4RlFVRXJRME1zVTBGQkwwTXNSVUZCTUVSRExGTkJRVEZFTEVWQlFYRkZReXhQUVVGeVJTeEZRVUU0UlR0QlFVTnVSaXhUUVVGUE1FTXNiVUpCUVcxQ0xFTkJRVU5GTEZGQlFVUXNSVUZCVjBFc1VVRkJXQ3hGUVVGeFFtaEVMRTFCUVhKQ0xFVkJRVFpDUXl4TlFVRTNRaXhGUVVGeFEwTXNVMEZCY2tNc1JVRkJaMFJETEZOQlFXaEVMRVZCUVRKRVF5eFBRVUV6UkN4RFFVRXhRanRCUVVORUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lhVzF3YjNKMElIdGthV1ptVEdsdVpYTjlJR1p5YjIwZ0p5NHVMMlJwWm1ZdmJHbHVaU2M3WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCemRISjFZM1IxY21Wa1VHRjBZMmdvYjJ4a1JtbHNaVTVoYldVc0lHNWxkMFpwYkdWT1lXMWxMQ0J2YkdSVGRISXNJRzVsZDFOMGNpd2diMnhrU0dWaFpHVnlMQ0J1WlhkSVpXRmtaWElzSUc5d2RHbHZibk1wSUh0Y2JpQWdhV1lnS0NGdmNIUnBiMjV6S1NCN1hHNGdJQ0FnYjNCMGFXOXVjeUE5SUh0OU8xeHVJQ0I5WEc0Z0lHbG1JQ2gwZVhCbGIyWWdiM0IwYVc5dWN5NWpiMjUwWlhoMElEMDlQU0FuZFc1a1pXWnBibVZrSnlrZ2UxeHVJQ0FnSUc5d2RHbHZibk11WTI5dWRHVjRkQ0E5SURRN1hHNGdJSDFjYmx4dUlDQmpiMjV6ZENCa2FXWm1JRDBnWkdsbVpreHBibVZ6S0c5c1pGTjBjaXdnYm1WM1UzUnlMQ0J2Y0hScGIyNXpLVHRjYmlBZ2FXWW9JV1JwWm1ZcElIdGNiaUFnSUNCeVpYUjFjbTQ3WEc0Z0lIMWNibHh1SUNCa2FXWm1MbkIxYzJnb2UzWmhiSFZsT2lBbkp5d2diR2x1WlhNNklGdGRmU2s3SUM4dklFRndjR1Z1WkNCaGJpQmxiWEIwZVNCMllXeDFaU0IwYnlCdFlXdGxJR05zWldGdWRYQWdaV0Z6YVdWeVhHNWNiaUFnWm5WdVkzUnBiMjRnWTI5dWRHVjRkRXhwYm1WektHeHBibVZ6S1NCN1hHNGdJQ0FnY21WMGRYSnVJR3hwYm1WekxtMWhjQ2htZFc1amRHbHZiaWhsYm5SeWVTa2dleUJ5WlhSMWNtNGdKeUFuSUNzZ1pXNTBjbms3SUgwcE8xeHVJQ0I5WEc1Y2JpQWdiR1YwSUdoMWJtdHpJRDBnVzEwN1hHNGdJR3hsZENCdmJHUlNZVzVuWlZOMFlYSjBJRDBnTUN3Z2JtVjNVbUZ1WjJWVGRHRnlkQ0E5SURBc0lHTjFjbEpoYm1kbElEMGdXMTBzWEc0Z0lDQWdJQ0J2YkdSTWFXNWxJRDBnTVN3Z2JtVjNUR2x1WlNBOUlERTdYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1pHbG1aaTVzWlc1bmRHZzdJR2tyS3lrZ2UxeHVJQ0FnSUdOdmJuTjBJR04xY25KbGJuUWdQU0JrYVdabVcybGRMRnh1SUNBZ0lDQWdJQ0FnSUd4cGJtVnpJRDBnWTNWeWNtVnVkQzVzYVc1bGN5QjhmQ0JqZFhKeVpXNTBMblpoYkhWbExuSmxjR3hoWTJVb0wxeGNiaVF2TENBbkp5a3VjM0JzYVhRb0oxeGNiaWNwTzF4dUlDQWdJR04xY25KbGJuUXViR2x1WlhNZ1BTQnNhVzVsY3p0Y2JseHVJQ0FnSUdsbUlDaGpkWEp5Wlc1MExtRmtaR1ZrSUh4OElHTjFjbkpsYm5RdWNtVnRiM1psWkNrZ2UxeHVJQ0FnSUNBZ0x5OGdTV1lnZDJVZ2FHRjJaU0J3Y21WMmFXOTFjeUJqYjI1MFpYaDBMQ0J6ZEdGeWRDQjNhWFJvSUhSb1lYUmNiaUFnSUNBZ0lHbG1JQ2doYjJ4a1VtRnVaMlZUZEdGeWRDa2dlMXh1SUNBZ0lDQWdJQ0JqYjI1emRDQndjbVYySUQwZ1pHbG1abHRwSUMwZ01WMDdYRzRnSUNBZ0lDQWdJRzlzWkZKaGJtZGxVM1JoY25RZ1BTQnZiR1JNYVc1bE8xeHVJQ0FnSUNBZ0lDQnVaWGRTWVc1blpWTjBZWEowSUQwZ2JtVjNUR2x1WlR0Y2JseHVJQ0FnSUNBZ0lDQnBaaUFvY0hKbGRpa2dlMXh1SUNBZ0lDQWdJQ0FnSUdOMWNsSmhibWRsSUQwZ2IzQjBhVzl1Y3k1amIyNTBaWGgwSUQ0Z01DQS9JR052Ym5SbGVIUk1hVzVsY3lod2NtVjJMbXhwYm1WekxuTnNhV05sS0MxdmNIUnBiMjV6TG1OdmJuUmxlSFFwS1NBNklGdGRPMXh1SUNBZ0lDQWdJQ0FnSUc5c1pGSmhibWRsVTNSaGNuUWdMVDBnWTNWeVVtRnVaMlV1YkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0FnSUc1bGQxSmhibWRsVTNSaGNuUWdMVDBnWTNWeVVtRnVaMlV1YkdWdVozUm9PMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUM4dklFOTFkSEIxZENCdmRYSWdZMmhoYm1kbGMxeHVJQ0FnSUNBZ1kzVnlVbUZ1WjJVdWNIVnphQ2d1TGk0Z2JHbHVaWE11YldGd0tHWjFibU4wYVc5dUtHVnVkSEo1S1NCN1hHNGdJQ0FnSUNBZ0lISmxkSFZ5YmlBb1kzVnljbVZ1ZEM1aFpHUmxaQ0EvSUNjckp5QTZJQ2N0SnlrZ0t5QmxiblJ5ZVR0Y2JpQWdJQ0FnSUgwcEtUdGNibHh1SUNBZ0lDQWdMeThnVkhKaFkyc2dkR2hsSUhWd1pHRjBaV1FnWm1sc1pTQndiM05wZEdsdmJseHVJQ0FnSUNBZ2FXWWdLR04xY25KbGJuUXVZV1JrWldRcElIdGNiaUFnSUNBZ0lDQWdibVYzVEdsdVpTQXJQU0JzYVc1bGN5NXNaVzVuZEdnN1hHNGdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNCdmJHUk1hVzVsSUNzOUlHeHBibVZ6TG14bGJtZDBhRHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0x5OGdTV1JsYm5ScFkyRnNJR052Ym5SbGVIUWdiR2x1WlhNdUlGUnlZV05ySUd4cGJtVWdZMmhoYm1kbGMxeHVJQ0FnSUNBZ2FXWWdLRzlzWkZKaGJtZGxVM1JoY25RcElIdGNiaUFnSUNBZ0lDQWdMeThnUTJ4dmMyVWdiM1YwSUdGdWVTQmphR0Z1WjJWeklIUm9ZWFFnYUdGMlpTQmlaV1Z1SUc5MWRIQjFkQ0FvYjNJZ2FtOXBiaUJ2ZG1WeWJHRndjR2x1WnlsY2JpQWdJQ0FnSUNBZ2FXWWdLR3hwYm1WekxteGxibWQwYUNBOFBTQnZjSFJwYjI1ekxtTnZiblJsZUhRZ0tpQXlJQ1ltSUdrZ1BDQmthV1ptTG14bGJtZDBhQ0F0SURJcElIdGNiaUFnSUNBZ0lDQWdJQ0F2THlCUGRtVnliR0Z3Y0dsdVoxeHVJQ0FnSUNBZ0lDQWdJR04xY2xKaGJtZGxMbkIxYzJnb0xpNHVJR052Ym5SbGVIUk1hVzVsY3loc2FXNWxjeWtwTzF4dUlDQWdJQ0FnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnSUNBZ0lDOHZJR1Z1WkNCMGFHVWdjbUZ1WjJVZ1lXNWtJRzkxZEhCMWRGeHVJQ0FnSUNBZ0lDQWdJR3hsZENCamIyNTBaWGgwVTJsNlpTQTlJRTFoZEdndWJXbHVLR3hwYm1WekxteGxibWQwYUN3Z2IzQjBhVzl1Y3k1amIyNTBaWGgwS1R0Y2JpQWdJQ0FnSUNBZ0lDQmpkWEpTWVc1blpTNXdkWE5vS0M0dUxpQmpiMjUwWlhoMFRHbHVaWE1vYkdsdVpYTXVjMnhwWTJVb01Dd2dZMjl1ZEdWNGRGTnBlbVVwS1NrN1hHNWNiaUFnSUNBZ0lDQWdJQ0JzWlhRZ2FIVnVheUE5SUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJRzlzWkZOMFlYSjBPaUJ2YkdSU1lXNW5aVk4wWVhKMExGeHVJQ0FnSUNBZ0lDQWdJQ0FnYjJ4a1RHbHVaWE02SUNodmJHUk1hVzVsSUMwZ2IyeGtVbUZ1WjJWVGRHRnlkQ0FySUdOdmJuUmxlSFJUYVhwbEtTeGNiaUFnSUNBZ0lDQWdJQ0FnSUc1bGQxTjBZWEowT2lCdVpYZFNZVzVuWlZOMFlYSjBMRnh1SUNBZ0lDQWdJQ0FnSUNBZ2JtVjNUR2x1WlhNNklDaHVaWGRNYVc1bElDMGdibVYzVW1GdVoyVlRkR0Z5ZENBcklHTnZiblJsZUhSVGFYcGxLU3hjYmlBZ0lDQWdJQ0FnSUNBZ0lHeHBibVZ6T2lCamRYSlNZVzVuWlZ4dUlDQWdJQ0FnSUNBZ0lIMDdYRzRnSUNBZ0lDQWdJQ0FnYVdZZ0tHa2dQajBnWkdsbVppNXNaVzVuZEdnZ0xTQXlJQ1ltSUd4cGJtVnpMbXhsYm1kMGFDQThQU0J2Y0hScGIyNXpMbU52Ym5SbGVIUXBJSHRjYmlBZ0lDQWdJQ0FnSUNBZ0lDOHZJRVZQUmlCcGN5QnBibk5wWkdVZ2RHaHBjeUJvZFc1clhHNGdJQ0FnSUNBZ0lDQWdJQ0JzWlhRZ2IyeGtSVTlHVG1WM2JHbHVaU0E5SUNnb0wxeGNiaVF2S1M1MFpYTjBLRzlzWkZOMGNpa3BPMXh1SUNBZ0lDQWdJQ0FnSUNBZ2JHVjBJRzVsZDBWUFJrNWxkMnhwYm1VZ1BTQW9LQzljWEc0a0x5a3VkR1Z6ZENodVpYZFRkSElwS1R0Y2JpQWdJQ0FnSUNBZ0lDQWdJR3hsZENCdWIwNXNRbVZtYjNKbFFXUmtjeUE5SUd4cGJtVnpMbXhsYm1kMGFDQTlQU0F3SUNZbUlHTjFjbEpoYm1kbExteGxibWQwYUNBK0lHaDFibXN1YjJ4a1RHbHVaWE03WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBaaUFvSVc5c1pFVlBSazVsZDJ4cGJtVWdKaVlnYm05T2JFSmxabTl5WlVGa1pITWdKaVlnYjJ4a1UzUnlMbXhsYm1kMGFDQStJREFwSUh0Y2JpQWdJQ0FnSUNBZ0lDQWdJQ0FnTHk4Z2MzQmxZMmxoYkNCallYTmxPaUJ2YkdRZ2FHRnpJRzV2SUdWdmJDQmhibVFnYm04Z2RISmhhV3hwYm1jZ1kyOXVkR1Y0ZERzZ2JtOHRibXdnWTJGdUlHVnVaQ0IxY0NCaVpXWnZjbVVnWVdSa2MxeHVJQ0FnSUNBZ0lDQWdJQ0FnSUNBdkx5Qm9iM2RsZG1WeUxDQnBaaUIwYUdVZ2IyeGtJR1pwYkdVZ2FYTWdaVzF3ZEhrc0lHUnZJRzV2ZENCdmRYUndkWFFnZEdobElHNXZMVzVzSUd4cGJtVmNiaUFnSUNBZ0lDQWdJQ0FnSUNBZ1kzVnlVbUZ1WjJVdWMzQnNhV05sS0doMWJtc3ViMnhrVEdsdVpYTXNJREFzSUNkY1hGeGNJRTV2SUc1bGQyeHBibVVnWVhRZ1pXNWtJRzltSUdacGJHVW5LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0FnSUdsbUlDZ29JVzlzWkVWUFJrNWxkMnhwYm1VZ0ppWWdJVzV2VG14Q1pXWnZjbVZCWkdSektTQjhmQ0FoYm1WM1JVOUdUbVYzYkdsdVpTa2dlMXh1SUNBZ0lDQWdJQ0FnSUNBZ0lDQmpkWEpTWVc1blpTNXdkWE5vS0NkY1hGeGNJRTV2SUc1bGQyeHBibVVnWVhRZ1pXNWtJRzltSUdacGJHVW5LVHRjYmlBZ0lDQWdJQ0FnSUNBZ0lIMWNiaUFnSUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0FnSUNBZ2FIVnVhM011Y0hWemFDaG9kVzVyS1R0Y2JseHVJQ0FnSUNBZ0lDQWdJRzlzWkZKaGJtZGxVM1JoY25RZ1BTQXdPMXh1SUNBZ0lDQWdJQ0FnSUc1bGQxSmhibWRsVTNSaGNuUWdQU0F3TzF4dUlDQWdJQ0FnSUNBZ0lHTjFjbEpoYm1kbElEMGdXMTA3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JpQWdJQ0FnSUc5c1pFeHBibVVnS3owZ2JHbHVaWE11YkdWdVozUm9PMXh1SUNBZ0lDQWdibVYzVEdsdVpTQXJQU0JzYVc1bGN5NXNaVzVuZEdnN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0J2YkdSR2FXeGxUbUZ0WlRvZ2IyeGtSbWxzWlU1aGJXVXNJRzVsZDBacGJHVk9ZVzFsT2lCdVpYZEdhV3hsVG1GdFpTeGNiaUFnSUNCdmJHUklaV0ZrWlhJNklHOXNaRWhsWVdSbGNpd2dibVYzU0dWaFpHVnlPaUJ1WlhkSVpXRmtaWElzWEc0Z0lDQWdhSFZ1YTNNNklHaDFibXR6WEc0Z0lIMDdYRzU5WEc1Y2JtVjRjRzl5ZENCbWRXNWpkR2x2YmlCbWIzSnRZWFJRWVhSamFDaGthV1ptS1NCN1hHNGdJR052Ym5OMElISmxkQ0E5SUZ0ZE8xeHVJQ0JwWmlBb1pHbG1aaTV2YkdSR2FXeGxUbUZ0WlNBOVBTQmthV1ptTG01bGQwWnBiR1ZPWVcxbEtTQjdYRzRnSUNBZ2NtVjBMbkIxYzJnb0owbHVaR1Y0T2lBbklDc2daR2xtWmk1dmJHUkdhV3hsVG1GdFpTazdYRzRnSUgxY2JpQWdjbVYwTG5CMWMyZ29KejA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwOVBUMDlQVDA5UFQwbktUdGNiaUFnY21WMExuQjFjMmdvSnkwdExTQW5JQ3NnWkdsbVppNXZiR1JHYVd4bFRtRnRaU0FySUNoMGVYQmxiMllnWkdsbVppNXZiR1JJWldGa1pYSWdQVDA5SUNkMWJtUmxabWx1WldRbklEOGdKeWNnT2lBblhGeDBKeUFySUdScFptWXViMnhrU0dWaFpHVnlLU2s3WEc0Z0lISmxkQzV3ZFhOb0tDY3JLeXNnSnlBcklHUnBabVl1Ym1WM1JtbHNaVTVoYldVZ0t5QW9kSGx3Wlc5bUlHUnBabVl1Ym1WM1NHVmhaR1Z5SUQwOVBTQW5kVzVrWldacGJtVmtKeUEvSUNjbklEb2dKMXhjZENjZ0t5QmthV1ptTG01bGQwaGxZV1JsY2lrcE8xeHVYRzRnSUdadmNpQW9iR1YwSUdrZ1BTQXdPeUJwSUR3Z1pHbG1aaTVvZFc1cmN5NXNaVzVuZEdnN0lHa3JLeWtnZTF4dUlDQWdJR052Ym5OMElHaDFibXNnUFNCa2FXWm1MbWgxYm10elcybGRPMXh1SUNBZ0lDOHZJRlZ1YVdacFpXUWdSR2xtWmlCR2IzSnRZWFFnY1hWcGNtczZJRWxtSUhSb1pTQmphSFZ1YXlCemFYcGxJR2x6SURBc1hHNGdJQ0FnTHk4Z2RHaGxJR1pwY25OMElHNTFiV0psY2lCcGN5QnZibVVnYkc5M1pYSWdkR2hoYmlCdmJtVWdkMjkxYkdRZ1pYaHdaV04wTGx4dUlDQWdJQzh2SUdoMGRIQnpPaTh2ZDNkM0xtRnlkR2x0WVM1amIyMHZkMlZpYkc5bmN5OTJhV1YzY0c5emRDNXFjM0EvZEdoeVpXRmtQVEUyTkRJNU0xeHVJQ0FnSUdsbUlDaG9kVzVyTG05c1pFeHBibVZ6SUQwOVBTQXdLU0I3WEc0Z0lDQWdJQ0JvZFc1ckxtOXNaRk4wWVhKMElDMDlJREU3WEc0Z0lDQWdmVnh1SUNBZ0lHbG1JQ2hvZFc1ckxtNWxkMHhwYm1WeklEMDlQU0F3S1NCN1hHNGdJQ0FnSUNCb2RXNXJMbTVsZDFOMFlYSjBJQzA5SURFN1hHNGdJQ0FnZlZ4dUlDQWdJSEpsZEM1d2RYTm9LRnh1SUNBZ0lDQWdKMEJBSUMwbklDc2dhSFZ1YXk1dmJHUlRkR0Z5ZENBcklDY3NKeUFySUdoMWJtc3ViMnhrVEdsdVpYTmNiaUFnSUNBZ0lDc2dKeUFySnlBcklHaDFibXN1Ym1WM1UzUmhjblFnS3lBbkxDY2dLeUJvZFc1ckxtNWxkMHhwYm1WelhHNGdJQ0FnSUNBcklDY2dRRUFuWEc0Z0lDQWdLVHRjYmlBZ0lDQnlaWFF1Y0hWemFDNWhjSEJzZVNoeVpYUXNJR2gxYm1zdWJHbHVaWE1wTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhKbGRDNXFiMmx1S0NkY1hHNG5LU0FySUNkY1hHNG5PMXh1ZlZ4dVhHNWxlSEJ2Y25RZ1puVnVZM1JwYjI0Z1kzSmxZWFJsVkhkdlJtbHNaWE5RWVhSamFDaHZiR1JHYVd4bFRtRnRaU3dnYm1WM1JtbHNaVTVoYldVc0lHOXNaRk4wY2l3Z2JtVjNVM1J5TENCdmJHUklaV0ZrWlhJc0lHNWxkMGhsWVdSbGNpd2diM0IwYVc5dWN5a2dlMXh1SUNCeVpYUjFjbTRnWm05eWJXRjBVR0YwWTJnb2MzUnlkV04wZFhKbFpGQmhkR05vS0c5c1pFWnBiR1ZPWVcxbExDQnVaWGRHYVd4bFRtRnRaU3dnYjJ4a1UzUnlMQ0J1WlhkVGRISXNJRzlzWkVobFlXUmxjaXdnYm1WM1NHVmhaR1Z5TENCdmNIUnBiMjV6S1NrN1hHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJqY21WaGRHVlFZWFJqYUNobWFXeGxUbUZ0WlN3Z2IyeGtVM1J5TENCdVpYZFRkSElzSUc5c1pFaGxZV1JsY2l3Z2JtVjNTR1ZoWkdWeUxDQnZjSFJwYjI1ektTQjdYRzRnSUhKbGRIVnliaUJqY21WaGRHVlVkMjlHYVd4bGMxQmhkR05vS0dacGJHVk9ZVzFsTENCbWFXeGxUbUZ0WlN3Z2IyeGtVM1J5TENCdVpYZFRkSElzSUc5c1pFaGxZV1JsY2l3Z2JtVjNTR1ZoWkdWeUxDQnZjSFJwYjI1ektUdGNibjFjYmlKZGZRPT1cbiIsIi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5jYWxjTGluZUNvdW50ID0gY2FsY0xpbmVDb3VudDtcbmV4cG9ydHMubWVyZ2UgPSBtZXJnZTtcblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbnZhclxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2NyZWF0ZSA9IHJlcXVpcmUoXCIuL2NyZWF0ZVwiKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fcGFyc2UgPSByZXF1aXJlKFwiLi9wYXJzZVwiKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxudmFyXG4vKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5fYXJyYXkgPSByZXF1aXJlKFwiLi4vdXRpbC9hcnJheVwiKVxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbjtcblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqLyBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7IHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5KGFycikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShpdGVyKSB7IGlmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoaXRlcikpIHJldHVybiBBcnJheS5mcm9tKGl0ZXIpOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KGFycik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5mdW5jdGlvbiBjYWxjTGluZUNvdW50KGh1bmspIHtcbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICB2YXIgX2NhbGNPbGROZXdMaW5lQ291bnQgPVxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICBjYWxjT2xkTmV3TGluZUNvdW50KGh1bmsubGluZXMpLFxuICAgICAgb2xkTGluZXMgPSBfY2FsY09sZE5ld0xpbmVDb3VudC5vbGRMaW5lcyxcbiAgICAgIG5ld0xpbmVzID0gX2NhbGNPbGROZXdMaW5lQ291bnQubmV3TGluZXM7XG5cbiAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICBodW5rLm9sZExpbmVzID0gb2xkTGluZXM7XG4gIH0gZWxzZSB7XG4gICAgZGVsZXRlIGh1bmsub2xkTGluZXM7XG4gIH1cblxuICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCkge1xuICAgIGh1bmsubmV3TGluZXMgPSBuZXdMaW5lcztcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgaHVuay5uZXdMaW5lcztcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZShtaW5lLCB0aGVpcnMsIGJhc2UpIHtcbiAgbWluZSA9IGxvYWRQYXRjaChtaW5lLCBiYXNlKTtcbiAgdGhlaXJzID0gbG9hZFBhdGNoKHRoZWlycywgYmFzZSk7XG4gIHZhciByZXQgPSB7fTsgLy8gRm9yIGluZGV4IHdlIGp1c3QgbGV0IGl0IHBhc3MgdGhyb3VnaCBhcyBpdCBkb2Vzbid0IGhhdmUgYW55IG5lY2Vzc2FyeSBtZWFuaW5nLlxuICAvLyBMZWF2aW5nIHNhbml0eSBjaGVja3Mgb24gdGhpcyB0byB0aGUgQVBJIGNvbnN1bWVyIHRoYXQgbWF5IGtub3cgbW9yZSBhYm91dCB0aGVcbiAgLy8gbWVhbmluZyBpbiB0aGVpciBvd24gY29udGV4dC5cblxuICBpZiAobWluZS5pbmRleCB8fCB0aGVpcnMuaW5kZXgpIHtcbiAgICByZXQuaW5kZXggPSBtaW5lLmluZGV4IHx8IHRoZWlycy5pbmRleDtcbiAgfVxuXG4gIGlmIChtaW5lLm5ld0ZpbGVOYW1lIHx8IHRoZWlycy5uZXdGaWxlTmFtZSkge1xuICAgIGlmICghZmlsZU5hbWVDaGFuZ2VkKG1pbmUpKSB7XG4gICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIG91cnMsIHVzZSB0aGVpcnMgKGFuZCBvdXJzIGlmIHRoZWlycyBkb2VzIG5vdCBleGlzdClcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IHRoZWlycy5vbGRGaWxlTmFtZSB8fCBtaW5lLm9sZEZpbGVOYW1lO1xuICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gdGhlaXJzLm5ld0ZpbGVOYW1lIHx8IG1pbmUubmV3RmlsZU5hbWU7XG4gICAgICByZXQub2xkSGVhZGVyID0gdGhlaXJzLm9sZEhlYWRlciB8fCBtaW5lLm9sZEhlYWRlcjtcbiAgICAgIHJldC5uZXdIZWFkZXIgPSB0aGVpcnMubmV3SGVhZGVyIHx8IG1pbmUubmV3SGVhZGVyO1xuICAgIH0gZWxzZSBpZiAoIWZpbGVOYW1lQ2hhbmdlZCh0aGVpcnMpKSB7XG4gICAgICAvLyBObyBoZWFkZXIgb3Igbm8gY2hhbmdlIGluIHRoZWlycywgdXNlIG91cnNcbiAgICAgIHJldC5vbGRGaWxlTmFtZSA9IG1pbmUub2xkRmlsZU5hbWU7XG4gICAgICByZXQubmV3RmlsZU5hbWUgPSBtaW5lLm5ld0ZpbGVOYW1lO1xuICAgICAgcmV0Lm9sZEhlYWRlciA9IG1pbmUub2xkSGVhZGVyO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IG1pbmUubmV3SGVhZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCb3RoIGNoYW5nZWQuLi4gZmlndXJlIGl0IG91dFxuICAgICAgcmV0Lm9sZEZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm9sZEZpbGVOYW1lLCB0aGVpcnMub2xkRmlsZU5hbWUpO1xuICAgICAgcmV0Lm5ld0ZpbGVOYW1lID0gc2VsZWN0RmllbGQocmV0LCBtaW5lLm5ld0ZpbGVOYW1lLCB0aGVpcnMubmV3RmlsZU5hbWUpO1xuICAgICAgcmV0Lm9sZEhlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5vbGRIZWFkZXIsIHRoZWlycy5vbGRIZWFkZXIpO1xuICAgICAgcmV0Lm5ld0hlYWRlciA9IHNlbGVjdEZpZWxkKHJldCwgbWluZS5uZXdIZWFkZXIsIHRoZWlycy5uZXdIZWFkZXIpO1xuICAgIH1cbiAgfVxuXG4gIHJldC5odW5rcyA9IFtdO1xuICB2YXIgbWluZUluZGV4ID0gMCxcbiAgICAgIHRoZWlyc0luZGV4ID0gMCxcbiAgICAgIG1pbmVPZmZzZXQgPSAwLFxuICAgICAgdGhlaXJzT2Zmc2V0ID0gMDtcblxuICB3aGlsZSAobWluZUluZGV4IDwgbWluZS5odW5rcy5sZW5ndGggfHwgdGhlaXJzSW5kZXggPCB0aGVpcnMuaHVua3MubGVuZ3RoKSB7XG4gICAgdmFyIG1pbmVDdXJyZW50ID0gbWluZS5odW5rc1ttaW5lSW5kZXhdIHx8IHtcbiAgICAgIG9sZFN0YXJ0OiBJbmZpbml0eVxuICAgIH0sXG4gICAgICAgIHRoZWlyc0N1cnJlbnQgPSB0aGVpcnMuaHVua3NbdGhlaXJzSW5kZXhdIHx8IHtcbiAgICAgIG9sZFN0YXJ0OiBJbmZpbml0eVxuICAgIH07XG5cbiAgICBpZiAoaHVua0JlZm9yZShtaW5lQ3VycmVudCwgdGhlaXJzQ3VycmVudCkpIHtcbiAgICAgIC8vIFRoaXMgcGF0Y2ggZG9lcyBub3Qgb3ZlcmxhcCB3aXRoIGFueSBvZiB0aGUgb3RoZXJzLCB5YXkuXG4gICAgICByZXQuaHVua3MucHVzaChjbG9uZUh1bmsobWluZUN1cnJlbnQsIG1pbmVPZmZzZXQpKTtcbiAgICAgIG1pbmVJbmRleCsrO1xuICAgICAgdGhlaXJzT2Zmc2V0ICs9IG1pbmVDdXJyZW50Lm5ld0xpbmVzIC0gbWluZUN1cnJlbnQub2xkTGluZXM7XG4gICAgfSBlbHNlIGlmIChodW5rQmVmb3JlKHRoZWlyc0N1cnJlbnQsIG1pbmVDdXJyZW50KSkge1xuICAgICAgLy8gVGhpcyBwYXRjaCBkb2VzIG5vdCBvdmVybGFwIHdpdGggYW55IG9mIHRoZSBvdGhlcnMsIHlheS5cbiAgICAgIHJldC5odW5rcy5wdXNoKGNsb25lSHVuayh0aGVpcnNDdXJyZW50LCB0aGVpcnNPZmZzZXQpKTtcbiAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICBtaW5lT2Zmc2V0ICs9IHRoZWlyc0N1cnJlbnQubmV3TGluZXMgLSB0aGVpcnNDdXJyZW50Lm9sZExpbmVzO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBPdmVybGFwLCBtZXJnZSBhcyBiZXN0IHdlIGNhblxuICAgICAgdmFyIG1lcmdlZEh1bmsgPSB7XG4gICAgICAgIG9sZFN0YXJ0OiBNYXRoLm1pbihtaW5lQ3VycmVudC5vbGRTdGFydCwgdGhlaXJzQ3VycmVudC5vbGRTdGFydCksXG4gICAgICAgIG9sZExpbmVzOiAwLFxuICAgICAgICBuZXdTdGFydDogTWF0aC5taW4obWluZUN1cnJlbnQubmV3U3RhcnQgKyBtaW5lT2Zmc2V0LCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0ICsgdGhlaXJzT2Zmc2V0KSxcbiAgICAgICAgbmV3TGluZXM6IDAsXG4gICAgICAgIGxpbmVzOiBbXVxuICAgICAgfTtcbiAgICAgIG1lcmdlTGluZXMobWVyZ2VkSHVuaywgbWluZUN1cnJlbnQub2xkU3RhcnQsIG1pbmVDdXJyZW50LmxpbmVzLCB0aGVpcnNDdXJyZW50Lm9sZFN0YXJ0LCB0aGVpcnNDdXJyZW50LmxpbmVzKTtcbiAgICAgIHRoZWlyc0luZGV4Kys7XG4gICAgICBtaW5lSW5kZXgrKztcbiAgICAgIHJldC5odW5rcy5wdXNoKG1lcmdlZEh1bmspO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGxvYWRQYXRjaChwYXJhbSwgYmFzZSkge1xuICBpZiAodHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJykge1xuICAgIGlmICgvXkBAL20udGVzdChwYXJhbSkgfHwgL15JbmRleDovbS50ZXN0KHBhcmFtKSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgICAoMCxcbiAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICAgIF9wYXJzZVxuICAgICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgICAuXG4gICAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgICAgcGFyc2VQYXRjaClcbiAgICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICAgKHBhcmFtKVswXVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWJhc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignTXVzdCBwcm92aWRlIGEgYmFzZSByZWZlcmVuY2Ugb3IgcGFzcyBpbiBhIHBhdGNoJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgICgwLFxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgX2NyZWF0ZVxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgIC5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIHN0cnVjdHVyZWRQYXRjaClcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICAodW5kZWZpbmVkLCB1bmRlZmluZWQsIGJhc2UsIHBhcmFtKVxuICAgICk7XG4gIH1cblxuICByZXR1cm4gcGFyYW07XG59XG5cbmZ1bmN0aW9uIGZpbGVOYW1lQ2hhbmdlZChwYXRjaCkge1xuICByZXR1cm4gcGF0Y2gubmV3RmlsZU5hbWUgJiYgcGF0Y2gubmV3RmlsZU5hbWUgIT09IHBhdGNoLm9sZEZpbGVOYW1lO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RGaWVsZChpbmRleCwgbWluZSwgdGhlaXJzKSB7XG4gIGlmIChtaW5lID09PSB0aGVpcnMpIHtcbiAgICByZXR1cm4gbWluZTtcbiAgfSBlbHNlIHtcbiAgICBpbmRleC5jb25mbGljdCA9IHRydWU7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1pbmU6IG1pbmUsXG4gICAgICB0aGVpcnM6IHRoZWlyc1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gaHVua0JlZm9yZSh0ZXN0LCBjaGVjaykge1xuICByZXR1cm4gdGVzdC5vbGRTdGFydCA8IGNoZWNrLm9sZFN0YXJ0ICYmIHRlc3Qub2xkU3RhcnQgKyB0ZXN0Lm9sZExpbmVzIDwgY2hlY2sub2xkU3RhcnQ7XG59XG5cbmZ1bmN0aW9uIGNsb25lSHVuayhodW5rLCBvZmZzZXQpIHtcbiAgcmV0dXJuIHtcbiAgICBvbGRTdGFydDogaHVuay5vbGRTdGFydCxcbiAgICBvbGRMaW5lczogaHVuay5vbGRMaW5lcyxcbiAgICBuZXdTdGFydDogaHVuay5uZXdTdGFydCArIG9mZnNldCxcbiAgICBuZXdMaW5lczogaHVuay5uZXdMaW5lcyxcbiAgICBsaW5lczogaHVuay5saW5lc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXJnZUxpbmVzKGh1bmssIG1pbmVPZmZzZXQsIG1pbmVMaW5lcywgdGhlaXJPZmZzZXQsIHRoZWlyTGluZXMpIHtcbiAgLy8gVGhpcyB3aWxsIGdlbmVyYWxseSByZXN1bHQgaW4gYSBjb25mbGljdGVkIGh1bmssIGJ1dCB0aGVyZSBhcmUgY2FzZXMgd2hlcmUgdGhlIGNvbnRleHRcbiAgLy8gaXMgdGhlIG9ubHkgb3ZlcmxhcCB3aGVyZSB3ZSBjYW4gc3VjY2Vzc2Z1bGx5IG1lcmdlIHRoZSBjb250ZW50IGhlcmUuXG4gIHZhciBtaW5lID0ge1xuICAgIG9mZnNldDogbWluZU9mZnNldCxcbiAgICBsaW5lczogbWluZUxpbmVzLFxuICAgIGluZGV4OiAwXG4gIH0sXG4gICAgICB0aGVpciA9IHtcbiAgICBvZmZzZXQ6IHRoZWlyT2Zmc2V0LFxuICAgIGxpbmVzOiB0aGVpckxpbmVzLFxuICAgIGluZGV4OiAwXG4gIH07IC8vIEhhbmRsZSBhbnkgbGVhZGluZyBjb250ZW50XG5cbiAgaW5zZXJ0TGVhZGluZyhodW5rLCBtaW5lLCB0aGVpcik7XG4gIGluc2VydExlYWRpbmcoaHVuaywgdGhlaXIsIG1pbmUpOyAvLyBOb3cgaW4gdGhlIG92ZXJsYXAgY29udGVudC4gU2NhbiB0aHJvdWdoIGFuZCBzZWxlY3QgdGhlIGJlc3QgY2hhbmdlcyBmcm9tIGVhY2guXG5cbiAgd2hpbGUgKG1pbmUuaW5kZXggPCBtaW5lLmxpbmVzLmxlbmd0aCAmJiB0aGVpci5pbmRleCA8IHRoZWlyLmxpbmVzLmxlbmd0aCkge1xuICAgIHZhciBtaW5lQ3VycmVudCA9IG1pbmUubGluZXNbbWluZS5pbmRleF0sXG4gICAgICAgIHRoZWlyQ3VycmVudCA9IHRoZWlyLmxpbmVzW3RoZWlyLmluZGV4XTtcblxuICAgIGlmICgobWluZUN1cnJlbnRbMF0gPT09ICctJyB8fCBtaW5lQ3VycmVudFswXSA9PT0gJysnKSAmJiAodGhlaXJDdXJyZW50WzBdID09PSAnLScgfHwgdGhlaXJDdXJyZW50WzBdID09PSAnKycpKSB7XG4gICAgICAvLyBCb3RoIG1vZGlmaWVkIC4uLlxuICAgICAgbXV0dWFsQ2hhbmdlKGh1bmssIG1pbmUsIHRoZWlyKTtcbiAgICB9IGVsc2UgaWYgKG1pbmVDdXJyZW50WzBdID09PSAnKycgJiYgdGhlaXJDdXJyZW50WzBdID09PSAnICcpIHtcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIHZhciBfaHVuayRsaW5lcztcblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgIC8vIE1pbmUgaW5zZXJ0ZWRcblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICAoX2h1bmskbGluZXMgPVxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgIGh1bmsubGluZXMpLnB1c2guYXBwbHkoXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICBfaHVuayRsaW5lc1xuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICxcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIF90b0NvbnN1bWFibGVBcnJheShcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICBjb2xsZWN0Q2hhbmdlKG1pbmUpKSk7XG4gICAgfSBlbHNlIGlmICh0aGVpckN1cnJlbnRbMF0gPT09ICcrJyAmJiBtaW5lQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICB2YXIgX2h1bmskbGluZXMyO1xuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgLy8gVGhlaXJzIGluc2VydGVkXG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgKF9odW5rJGxpbmVzMiA9XG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgaHVuay5saW5lcykucHVzaC5hcHBseShcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIF9odW5rJGxpbmVzMlxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICxcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIF90b0NvbnN1bWFibGVBcnJheShcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICBjb2xsZWN0Q2hhbmdlKHRoZWlyKSkpO1xuICAgIH0gZWxzZSBpZiAobWluZUN1cnJlbnRbMF0gPT09ICctJyAmJiB0aGVpckN1cnJlbnRbMF0gPT09ICcgJykge1xuICAgICAgLy8gTWluZSByZW1vdmVkIG9yIGVkaXRlZFxuICAgICAgcmVtb3ZhbChodW5rLCBtaW5lLCB0aGVpcik7XG4gICAgfSBlbHNlIGlmICh0aGVpckN1cnJlbnRbMF0gPT09ICctJyAmJiBtaW5lQ3VycmVudFswXSA9PT0gJyAnKSB7XG4gICAgICAvLyBUaGVpciByZW1vdmVkIG9yIGVkaXRlZFxuICAgICAgcmVtb3ZhbChodW5rLCB0aGVpciwgbWluZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIGlmIChtaW5lQ3VycmVudCA9PT0gdGhlaXJDdXJyZW50KSB7XG4gICAgICAvLyBDb250ZXh0IGlkZW50aXR5XG4gICAgICBodW5rLmxpbmVzLnB1c2gobWluZUN1cnJlbnQpO1xuICAgICAgbWluZS5pbmRleCsrO1xuICAgICAgdGhlaXIuaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ29udGV4dCBtaXNtYXRjaFxuICAgICAgY29uZmxpY3QoaHVuaywgY29sbGVjdENoYW5nZShtaW5lKSwgY29sbGVjdENoYW5nZSh0aGVpcikpO1xuICAgIH1cbiAgfSAvLyBOb3cgcHVzaCBhbnl0aGluZyB0aGF0IG1heSBiZSByZW1haW5pbmdcblxuXG4gIGluc2VydFRyYWlsaW5nKGh1bmssIG1pbmUpO1xuICBpbnNlcnRUcmFpbGluZyhodW5rLCB0aGVpcik7XG4gIGNhbGNMaW5lQ291bnQoaHVuayk7XG59XG5cbmZ1bmN0aW9uIG11dHVhbENoYW5nZShodW5rLCBtaW5lLCB0aGVpcikge1xuICB2YXIgbXlDaGFuZ2VzID0gY29sbGVjdENoYW5nZShtaW5lKSxcbiAgICAgIHRoZWlyQ2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UodGhlaXIpO1xuXG4gIGlmIChhbGxSZW1vdmVzKG15Q2hhbmdlcykgJiYgYWxsUmVtb3Zlcyh0aGVpckNoYW5nZXMpKSB7XG4gICAgLy8gU3BlY2lhbCBjYXNlIGZvciByZW1vdmUgY2hhbmdlcyB0aGF0IGFyZSBzdXBlcnNldHMgb2Ygb25lIGFub3RoZXJcbiAgICBpZiAoXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICgwLFxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgX2FycmF5XG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAuXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgIGFycmF5U3RhcnRzV2l0aClcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgIChteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcykgJiYgc2tpcFJlbW92ZVN1cGVyc2V0KHRoZWlyLCBteUNoYW5nZXMsIG15Q2hhbmdlcy5sZW5ndGggLSB0aGVpckNoYW5nZXMubGVuZ3RoKSkge1xuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgdmFyIF9odW5rJGxpbmVzMztcblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgICAoX2h1bmskbGluZXMzID1cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KFxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgX2h1bmskbGluZXMzXG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgLFxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgX3RvQ29uc3VtYWJsZUFycmF5KFxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgIG15Q2hhbmdlcykpO1xuXG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgKDAsXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICBfYXJyYXlcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgIC5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgYXJyYXlTdGFydHNXaXRoKVxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgKHRoZWlyQ2hhbmdlcywgbXlDaGFuZ2VzKSAmJiBza2lwUmVtb3ZlU3VwZXJzZXQobWluZSwgdGhlaXJDaGFuZ2VzLCB0aGVpckNoYW5nZXMubGVuZ3RoIC0gbXlDaGFuZ2VzLmxlbmd0aCkpIHtcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIHZhciBfaHVuayRsaW5lczQ7XG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAgICAgKF9odW5rJGxpbmVzNCA9XG4gICAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICAgaHVuay5saW5lcykucHVzaC5hcHBseShcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIF9odW5rJGxpbmVzNFxuICAgICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICAgICxcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICAgIF90b0NvbnN1bWFibGVBcnJheShcbiAgICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgICB0aGVpckNoYW5nZXMpKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfSBlbHNlIGlmIChcbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICAoMCxcbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gIF9hcnJheVxuICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAuXG4gIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgYXJyYXlFcXVhbClcbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgKG15Q2hhbmdlcywgdGhlaXJDaGFuZ2VzKSkge1xuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICB2YXIgX2h1bmskbGluZXM1O1xuXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgKF9odW5rJGxpbmVzNSA9XG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KFxuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICBfaHVuayRsaW5lczVcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICxcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgX3RvQ29uc3VtYWJsZUFycmF5KFxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgbXlDaGFuZ2VzKSk7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICBjb25mbGljdChodW5rLCBteUNoYW5nZXMsIHRoZWlyQ2hhbmdlcyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92YWwoaHVuaywgbWluZSwgdGhlaXIsIHN3YXApIHtcbiAgdmFyIG15Q2hhbmdlcyA9IGNvbGxlY3RDaGFuZ2UobWluZSksXG4gICAgICB0aGVpckNoYW5nZXMgPSBjb2xsZWN0Q29udGV4dCh0aGVpciwgbXlDaGFuZ2VzKTtcblxuICBpZiAodGhlaXJDaGFuZ2VzLm1lcmdlZCkge1xuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICB2YXIgX2h1bmskbGluZXM2O1xuXG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cblxuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5cbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgKF9odW5rJGxpbmVzNiA9XG4gICAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgICBodW5rLmxpbmVzKS5wdXNoLmFwcGx5KFxuICAgIC8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cbiAgICBfaHVuayRsaW5lczZcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBlbmQqL1xuICAgICxcbiAgICAvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG4gICAgX3RvQ29uc3VtYWJsZUFycmF5KFxuICAgIC8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4gICAgdGhlaXJDaGFuZ2VzLm1lcmdlZCkpO1xuICB9IGVsc2Uge1xuICAgIGNvbmZsaWN0KGh1bmssIHN3YXAgPyB0aGVpckNoYW5nZXMgOiBteUNoYW5nZXMsIHN3YXAgPyBteUNoYW5nZXMgOiB0aGVpckNoYW5nZXMpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbmZsaWN0KGh1bmssIG1pbmUsIHRoZWlyKSB7XG4gIGh1bmsuY29uZmxpY3QgPSB0cnVlO1xuICBodW5rLmxpbmVzLnB1c2goe1xuICAgIGNvbmZsaWN0OiB0cnVlLFxuICAgIG1pbmU6IG1pbmUsXG4gICAgdGhlaXJzOiB0aGVpclxuICB9KTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0TGVhZGluZyhodW5rLCBpbnNlcnQsIHRoZWlyKSB7XG4gIHdoaWxlIChpbnNlcnQub2Zmc2V0IDwgdGhlaXIub2Zmc2V0ICYmIGluc2VydC5pbmRleCA8IGluc2VydC5saW5lcy5sZW5ndGgpIHtcbiAgICB2YXIgbGluZSA9IGluc2VydC5saW5lc1tpbnNlcnQuaW5kZXgrK107XG4gICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xuICAgIGluc2VydC5vZmZzZXQrKztcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRUcmFpbGluZyhodW5rLCBpbnNlcnQpIHtcbiAgd2hpbGUgKGluc2VydC5pbmRleCA8IGluc2VydC5saW5lcy5sZW5ndGgpIHtcbiAgICB2YXIgbGluZSA9IGluc2VydC5saW5lc1tpbnNlcnQuaW5kZXgrK107XG4gICAgaHVuay5saW5lcy5wdXNoKGxpbmUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbGxlY3RDaGFuZ2Uoc3RhdGUpIHtcbiAgdmFyIHJldCA9IFtdLFxuICAgICAgb3BlcmF0aW9uID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdWzBdO1xuXG4gIHdoaWxlIChzdGF0ZS5pbmRleCA8IHN0YXRlLmxpbmVzLmxlbmd0aCkge1xuICAgIHZhciBsaW5lID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdOyAvLyBHcm91cCBhZGRpdGlvbnMgdGhhdCBhcmUgaW1tZWRpYXRlbHkgYWZ0ZXIgc3VidHJhY3Rpb25zIGFuZCB0cmVhdCB0aGVtIGFzIG9uZSBcImF0b21pY1wiIG1vZGlmeSBjaGFuZ2UuXG5cbiAgICBpZiAob3BlcmF0aW9uID09PSAnLScgJiYgbGluZVswXSA9PT0gJysnKSB7XG4gICAgICBvcGVyYXRpb24gPSAnKyc7XG4gICAgfVxuXG4gICAgaWYgKG9wZXJhdGlvbiA9PT0gbGluZVswXSkge1xuICAgICAgcmV0LnB1c2gobGluZSk7XG4gICAgICBzdGF0ZS5pbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBjb2xsZWN0Q29udGV4dChzdGF0ZSwgbWF0Y2hDaGFuZ2VzKSB7XG4gIHZhciBjaGFuZ2VzID0gW10sXG4gICAgICBtZXJnZWQgPSBbXSxcbiAgICAgIG1hdGNoSW5kZXggPSAwLFxuICAgICAgY29udGV4dENoYW5nZXMgPSBmYWxzZSxcbiAgICAgIGNvbmZsaWN0ZWQgPSBmYWxzZTtcblxuICB3aGlsZSAobWF0Y2hJbmRleCA8IG1hdGNoQ2hhbmdlcy5sZW5ndGggJiYgc3RhdGUuaW5kZXggPCBzdGF0ZS5saW5lcy5sZW5ndGgpIHtcbiAgICB2YXIgY2hhbmdlID0gc3RhdGUubGluZXNbc3RhdGUuaW5kZXhdLFxuICAgICAgICBtYXRjaCA9IG1hdGNoQ2hhbmdlc1ttYXRjaEluZGV4XTsgLy8gT25jZSB3ZSd2ZSBoaXQgb3VyIGFkZCwgdGhlbiB3ZSBhcmUgZG9uZVxuXG4gICAgaWYgKG1hdGNoWzBdID09PSAnKycpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIGNvbnRleHRDaGFuZ2VzID0gY29udGV4dENoYW5nZXMgfHwgY2hhbmdlWzBdICE9PSAnICc7XG4gICAgbWVyZ2VkLnB1c2gobWF0Y2gpO1xuICAgIG1hdGNoSW5kZXgrKzsgLy8gQ29uc3VtZSBhbnkgYWRkaXRpb25zIGluIHRoZSBvdGhlciBibG9jayBhcyBhIGNvbmZsaWN0IHRvIGF0dGVtcHRcbiAgICAvLyB0byBwdWxsIGluIHRoZSByZW1haW5pbmcgY29udGV4dCBhZnRlciB0aGlzXG5cbiAgICBpZiAoY2hhbmdlWzBdID09PSAnKycpIHtcbiAgICAgIGNvbmZsaWN0ZWQgPSB0cnVlO1xuXG4gICAgICB3aGlsZSAoY2hhbmdlWzBdID09PSAnKycpIHtcbiAgICAgICAgY2hhbmdlcy5wdXNoKGNoYW5nZSk7XG4gICAgICAgIGNoYW5nZSA9IHN0YXRlLmxpbmVzWysrc3RhdGUuaW5kZXhdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtYXRjaC5zdWJzdHIoMSkgPT09IGNoYW5nZS5zdWJzdHIoMSkpIHtcbiAgICAgIGNoYW5nZXMucHVzaChjaGFuZ2UpO1xuICAgICAgc3RhdGUuaW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgY29uZmxpY3RlZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgaWYgKChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleF0gfHwgJycpWzBdID09PSAnKycgJiYgY29udGV4dENoYW5nZXMpIHtcbiAgICBjb25mbGljdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIGlmIChjb25mbGljdGVkKSB7XG4gICAgcmV0dXJuIGNoYW5nZXM7XG4gIH1cblxuICB3aGlsZSAobWF0Y2hJbmRleCA8IG1hdGNoQ2hhbmdlcy5sZW5ndGgpIHtcbiAgICBtZXJnZWQucHVzaChtYXRjaENoYW5nZXNbbWF0Y2hJbmRleCsrXSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIG1lcmdlZDogbWVyZ2VkLFxuICAgIGNoYW5nZXM6IGNoYW5nZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWxsUmVtb3ZlcyhjaGFuZ2VzKSB7XG4gIHJldHVybiBjaGFuZ2VzLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY2hhbmdlKSB7XG4gICAgcmV0dXJuIHByZXYgJiYgY2hhbmdlWzBdID09PSAnLSc7XG4gIH0sIHRydWUpO1xufVxuXG5mdW5jdGlvbiBza2lwUmVtb3ZlU3VwZXJzZXQoc3RhdGUsIHJlbW92ZUNoYW5nZXMsIGRlbHRhKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZGVsdGE7IGkrKykge1xuICAgIHZhciBjaGFuZ2VDb250ZW50ID0gcmVtb3ZlQ2hhbmdlc1tyZW1vdmVDaGFuZ2VzLmxlbmd0aCAtIGRlbHRhICsgaV0uc3Vic3RyKDEpO1xuXG4gICAgaWYgKHN0YXRlLmxpbmVzW3N0YXRlLmluZGV4ICsgaV0gIT09ICcgJyArIGNoYW5nZUNvbnRlbnQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBzdGF0ZS5pbmRleCArPSBkZWx0YTtcbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGNhbGNPbGROZXdMaW5lQ291bnQobGluZXMpIHtcbiAgdmFyIG9sZExpbmVzID0gMDtcbiAgdmFyIG5ld0xpbmVzID0gMDtcbiAgbGluZXMuZm9yRWFjaChmdW5jdGlvbiAobGluZSkge1xuICAgIGlmICh0eXBlb2YgbGluZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHZhciBteUNvdW50ID0gY2FsY09sZE5ld0xpbmVDb3VudChsaW5lLm1pbmUpO1xuICAgICAgdmFyIHRoZWlyQ291bnQgPSBjYWxjT2xkTmV3TGluZUNvdW50KGxpbmUudGhlaXJzKTtcblxuICAgICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKG15Q291bnQub2xkTGluZXMgPT09IHRoZWlyQ291bnQub2xkTGluZXMpIHtcbiAgICAgICAgICBvbGRMaW5lcyArPSBteUNvdW50Lm9sZExpbmVzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9sZExpbmVzID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChuZXdMaW5lcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChteUNvdW50Lm5ld0xpbmVzID09PSB0aGVpckNvdW50Lm5ld0xpbmVzKSB7XG4gICAgICAgICAgbmV3TGluZXMgKz0gbXlDb3VudC5uZXdMaW5lcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdMaW5lcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAobmV3TGluZXMgIT09IHVuZGVmaW5lZCAmJiAobGluZVswXSA9PT0gJysnIHx8IGxpbmVbMF0gPT09ICcgJykpIHtcbiAgICAgICAgbmV3TGluZXMrKztcbiAgICAgIH1cblxuICAgICAgaWYgKG9sZExpbmVzICE9PSB1bmRlZmluZWQgJiYgKGxpbmVbMF0gPT09ICctJyB8fCBsaW5lWzBdID09PSAnICcpKSB7XG4gICAgICAgIG9sZExpbmVzKys7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBvbGRMaW5lczogb2xkTGluZXMsXG4gICAgbmV3TGluZXM6IG5ld0xpbmVzXG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTl3WVhSamFDOXRaWEpuWlM1cWN5SmRMQ0p1WVcxbGN5STZXeUpqWVd4alRHbHVaVU52ZFc1MElpd2lhSFZ1YXlJc0ltTmhiR05QYkdST1pYZE1hVzVsUTI5MWJuUWlMQ0pzYVc1bGN5SXNJbTlzWkV4cGJtVnpJaXdpYm1WM1RHbHVaWE1pTENKMWJtUmxabWx1WldRaUxDSnRaWEpuWlNJc0ltMXBibVVpTENKMGFHVnBjbk1pTENKaVlYTmxJaXdpYkc5aFpGQmhkR05vSWl3aWNtVjBJaXdpYVc1a1pYZ2lMQ0p1WlhkR2FXeGxUbUZ0WlNJc0ltWnBiR1ZPWVcxbFEyaGhibWRsWkNJc0ltOXNaRVpwYkdWT1lXMWxJaXdpYjJ4a1NHVmhaR1Z5SWl3aWJtVjNTR1ZoWkdWeUlpd2ljMlZzWldOMFJtbGxiR1FpTENKb2RXNXJjeUlzSW0xcGJtVkpibVJsZUNJc0luUm9aV2x5YzBsdVpHVjRJaXdpYldsdVpVOW1abk5sZENJc0luUm9aV2x5YzA5bVpuTmxkQ0lzSW14bGJtZDBhQ0lzSW0xcGJtVkRkWEp5Wlc1MElpd2liMnhrVTNSaGNuUWlMQ0pKYm1acGJtbDBlU0lzSW5Sb1pXbHljME4xY25KbGJuUWlMQ0pvZFc1clFtVm1iM0psSWl3aWNIVnphQ0lzSW1Oc2IyNWxTSFZ1YXlJc0ltMWxjbWRsWkVoMWJtc2lMQ0pOWVhSb0lpd2liV2x1SWl3aWJtVjNVM1JoY25RaUxDSnRaWEpuWlV4cGJtVnpJaXdpY0dGeVlXMGlMQ0owWlhOMElpd2ljR0Z5YzJWUVlYUmphQ0lzSWtWeWNtOXlJaXdpYzNSeWRXTjBkWEpsWkZCaGRHTm9JaXdpY0dGMFkyZ2lMQ0pqYjI1bWJHbGpkQ0lzSW1Ob1pXTnJJaXdpYjJabWMyVjBJaXdpYldsdVpVeHBibVZ6SWl3aWRHaGxhWEpQWm1aelpYUWlMQ0owYUdWcGNreHBibVZ6SWl3aWRHaGxhWElpTENKcGJuTmxjblJNWldGa2FXNW5JaXdpZEdobGFYSkRkWEp5Wlc1MElpd2liWFYwZFdGc1EyaGhibWRsSWl3aVkyOXNiR1ZqZEVOb1lXNW5aU0lzSW5KbGJXOTJZV3dpTENKcGJuTmxjblJVY21GcGJHbHVaeUlzSW0xNVEyaGhibWRsY3lJc0luUm9aV2x5UTJoaGJtZGxjeUlzSW1Gc2JGSmxiVzkyWlhNaUxDSmhjbkpoZVZOMFlYSjBjMWRwZEdnaUxDSnphMmx3VW1WdGIzWmxVM1Z3WlhKelpYUWlMQ0poY25KaGVVVnhkV0ZzSWl3aWMzZGhjQ0lzSW1OdmJHeGxZM1JEYjI1MFpYaDBJaXdpYldWeVoyVmtJaXdpYVc1elpYSjBJaXdpYkdsdVpTSXNJbk4wWVhSbElpd2liM0JsY21GMGFXOXVJaXdpYldGMFkyaERhR0Z1WjJWeklpd2lZMmhoYm1kbGN5SXNJbTFoZEdOb1NXNWtaWGdpTENKamIyNTBaWGgwUTJoaGJtZGxjeUlzSW1OdmJtWnNhV04wWldRaUxDSmphR0Z1WjJVaUxDSnRZWFJqYUNJc0luTjFZbk4wY2lJc0luSmxaSFZqWlNJc0luQnlaWFlpTENKeVpXMXZkbVZEYUdGdVoyVnpJaXdpWkdWc2RHRWlMQ0pwSWl3aVkyaGhibWRsUTI5dWRHVnVkQ0lzSW1admNrVmhZMmdpTENKdGVVTnZkVzUwSWl3aWRHaGxhWEpEYjNWdWRDSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN096czdPenM3T3p0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlEwRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHM3UVVGRlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPenM3T3pzN096czdPenM3T3pzN1FVRkZUeXhUUVVGVFFTeGhRVUZVTEVOQlFYVkNReXhKUVVGMlFpeEZRVUUyUWp0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVOTVF5eEZRVUZCUVN4dFFrRkJiVUlzUTBGQlEwUXNTVUZCU1N4RFFVRkRSU3hMUVVGT0xFTkJSR1E3UVVGQlFTeE5RVU16UWtNc1VVRkVNa0lzZDBKQlF6TkNRU3hSUVVReVFqdEJRVUZCTEUxQlEycENReXhSUVVScFFpeDNRa0ZEYWtKQkxGRkJSR2xDT3p0QlFVZHNReXhOUVVGSlJDeFJRVUZSTEV0QlFVdEZMRk5CUVdwQ0xFVkJRVFJDTzBGQlF6RkNUQ3hKUVVGQlFTeEpRVUZKTEVOQlFVTkhMRkZCUVV3c1IwRkJaMEpCTEZGQlFXaENPMEZCUTBRc1IwRkdSQ3hOUVVWUE8wRkJRMHdzVjBGQlQwZ3NTVUZCU1N4RFFVRkRSeXhSUVVGYU8wRkJRMFE3TzBGQlJVUXNUVUZCU1VNc1VVRkJVU3hMUVVGTFF5eFRRVUZxUWl4RlFVRTBRanRCUVVNeFFrd3NTVUZCUVVFc1NVRkJTU3hEUVVGRFNTeFJRVUZNTEVkQlFXZENRU3hSUVVGb1FqdEJRVU5FTEVkQlJrUXNUVUZGVHp0QlFVTk1MRmRCUVU5S0xFbEJRVWtzUTBGQlEwa3NVVUZCV2p0QlFVTkVPMEZCUTBZN08wRkJSVTBzVTBGQlUwVXNTMEZCVkN4RFFVRmxReXhKUVVGbUxFVkJRWEZDUXl4TlFVRnlRaXhGUVVFMlFrTXNTVUZCTjBJc1JVRkJiVU03UVVGRGVFTkdMRVZCUVVGQkxFbEJRVWtzUjBGQlIwY3NVMEZCVXl4RFFVRkRTQ3hKUVVGRUxFVkJRVTlGTEVsQlFWQXNRMEZCYUVJN1FVRkRRVVFzUlVGQlFVRXNUVUZCVFN4SFFVRkhSU3hUUVVGVExFTkJRVU5HTEUxQlFVUXNSVUZCVTBNc1NVRkJWQ3hEUVVGc1FqdEJRVVZCTEUxQlFVbEZMRWRCUVVjc1IwRkJSeXhGUVVGV0xFTkJTbmRETEVOQlRYaERPMEZCUTBFN1FVRkRRVHM3UVVGRFFTeE5RVUZKU2l4SlFVRkpMRU5CUVVOTExFdEJRVXdzU1VGQlkwb3NUVUZCVFN4RFFVRkRTU3hMUVVGNlFpeEZRVUZuUXp0QlFVTTVRa1FzU1VGQlFVRXNSMEZCUnl4RFFVRkRReXhMUVVGS0xFZEJRVmxNTEVsQlFVa3NRMEZCUTBzc1MwRkJUQ3hKUVVGalNpeE5RVUZOTEVOQlFVTkpMRXRCUVdwRE8wRkJRMFE3TzBGQlJVUXNUVUZCU1V3c1NVRkJTU3hEUVVGRFRTeFhRVUZNTEVsQlFXOUNUQ3hOUVVGTkxFTkJRVU5MTEZkQlFTOUNMRVZCUVRSRE8wRkJRekZETEZGQlFVa3NRMEZCUTBNc1pVRkJaU3hEUVVGRFVDeEpRVUZFTEVOQlFYQkNMRVZCUVRSQ08wRkJRekZDTzBGQlEwRkpMRTFCUVVGQkxFZEJRVWNzUTBGQlEwa3NWMEZCU2l4SFFVRnJRbEFzVFVGQlRTeERRVUZEVHl4WFFVRlFMRWxCUVhOQ1VpeEpRVUZKTEVOQlFVTlJMRmRCUVRkRE8wRkJRMEZLTEUxQlFVRkJMRWRCUVVjc1EwRkJRMFVzVjBGQlNpeEhRVUZyUWt3c1RVRkJUU3hEUVVGRFN5eFhRVUZRTEVsQlFYTkNUaXhKUVVGSkxFTkJRVU5OTEZkQlFUZERPMEZCUTBGR0xFMUJRVUZCTEVkQlFVY3NRMEZCUTBzc1UwRkJTaXhIUVVGblFsSXNUVUZCVFN4RFFVRkRVU3hUUVVGUUxFbEJRVzlDVkN4SlFVRkpMRU5CUVVOVExGTkJRWHBETzBGQlEwRk1MRTFCUVVGQkxFZEJRVWNzUTBGQlEwMHNVMEZCU2l4SFFVRm5RbFFzVFVGQlRTeERRVUZEVXl4VFFVRlFMRWxCUVc5Q1ZpeEpRVUZKTEVOQlFVTlZMRk5CUVhwRE8wRkJRMFFzUzBGT1JDeE5RVTFQTEVsQlFVa3NRMEZCUTBnc1pVRkJaU3hEUVVGRFRpeE5RVUZFTEVOQlFYQkNMRVZCUVRoQ08wRkJRMjVETzBGQlEwRkhMRTFCUVVGQkxFZEJRVWNzUTBGQlEwa3NWMEZCU2l4SFFVRnJRbElzU1VGQlNTeERRVUZEVVN4WFFVRjJRanRCUVVOQlNpeE5RVUZCUVN4SFFVRkhMRU5CUVVORkxGZEJRVW9zUjBGQmEwSk9MRWxCUVVrc1EwRkJRMDBzVjBGQmRrSTdRVUZEUVVZc1RVRkJRVUVzUjBGQlJ5eERRVUZEU3l4VFFVRktMRWRCUVdkQ1ZDeEpRVUZKTEVOQlFVTlRMRk5CUVhKQ08wRkJRMEZNTEUxQlFVRkJMRWRCUVVjc1EwRkJRMDBzVTBGQlNpeEhRVUZuUWxZc1NVRkJTU3hEUVVGRFZTeFRRVUZ5UWp0QlFVTkVMRXRCVGswc1RVRk5RVHRCUVVOTU8wRkJRMEZPTEUxQlFVRkJMRWRCUVVjc1EwRkJRMGtzVjBGQlNpeEhRVUZyUWtjc1YwRkJWeXhEUVVGRFVDeEhRVUZFTEVWQlFVMUtMRWxCUVVrc1EwRkJRMUVzVjBGQldDeEZRVUYzUWxBc1RVRkJUU3hEUVVGRFR5eFhRVUV2UWl4RFFVRTNRanRCUVVOQlNpeE5RVUZCUVN4SFFVRkhMRU5CUVVORkxGZEJRVW9zUjBGQmEwSkxMRmRCUVZjc1EwRkJRMUFzUjBGQlJDeEZRVUZOU2l4SlFVRkpMRU5CUVVOTkxGZEJRVmdzUlVGQmQwSk1MRTFCUVUwc1EwRkJRMHNzVjBGQkwwSXNRMEZCTjBJN1FVRkRRVVlzVFVGQlFVRXNSMEZCUnl4RFFVRkRTeXhUUVVGS0xFZEJRV2RDUlN4WFFVRlhMRU5CUVVOUUxFZEJRVVFzUlVGQlRVb3NTVUZCU1N4RFFVRkRVeXhUUVVGWUxFVkJRWE5DVWl4TlFVRk5MRU5CUVVOUkxGTkJRVGRDTEVOQlFUTkNPMEZCUTBGTUxFMUJRVUZCTEVkQlFVY3NRMEZCUTAwc1UwRkJTaXhIUVVGblFrTXNWMEZCVnl4RFFVRkRVQ3hIUVVGRUxFVkJRVTFLTEVsQlFVa3NRMEZCUTFVc1UwRkJXQ3hGUVVGelFsUXNUVUZCVFN4RFFVRkRVeXhUUVVFM1FpeERRVUV6UWp0QlFVTkVPMEZCUTBZN08wRkJSVVJPTEVWQlFVRkJMRWRCUVVjc1EwRkJRMUVzUzBGQlNpeEhRVUZaTEVWQlFWbzdRVUZGUVN4TlFVRkpReXhUUVVGVExFZEJRVWNzUTBGQmFFSTdRVUZCUVN4TlFVTkpReXhYUVVGWExFZEJRVWNzUTBGRWJFSTdRVUZCUVN4TlFVVkpReXhWUVVGVkxFZEJRVWNzUTBGR2FrSTdRVUZCUVN4TlFVZEpReXhaUVVGWkxFZEJRVWNzUTBGSWJrSTdPMEZCUzBFc1UwRkJUMGdzVTBGQlV5eEhRVUZIWWl4SlFVRkpMRU5CUVVOWkxFdEJRVXdzUTBGQlYwc3NUVUZCZGtJc1NVRkJhVU5JTEZkQlFWY3NSMEZCUjJJc1RVRkJUU3hEUVVGRFZ5eExRVUZRTEVOQlFXRkxMRTFCUVc1RkxFVkJRVEpGTzBGQlEzcEZMRkZCUVVsRExGZEJRVmNzUjBGQlIyeENMRWxCUVVrc1EwRkJRMWtzUzBGQlRDeERRVUZYUXl4VFFVRllMRXRCUVhsQ08wRkJRVU5OTEUxQlFVRkJMRkZCUVZFc1JVRkJSVU03UVVGQldDeExRVUV6UXp0QlFVRkJMRkZCUTBsRExHRkJRV0VzUjBGQlIzQkNMRTFCUVUwc1EwRkJRMWNzUzBGQlVDeERRVUZoUlN4WFFVRmlMRXRCUVRaQ08wRkJRVU5MTEUxQlFVRkJMRkZCUVZFc1JVRkJSVU03UVVGQldDeExRVVJxUkRzN1FVRkhRU3hSUVVGSlJTeFZRVUZWTEVOQlFVTktMRmRCUVVRc1JVRkJZMGNzWVVGQlpDeERRVUZrTEVWQlFUUkRPMEZCUXpGRE8wRkJRMEZxUWl4TlFVRkJRU3hIUVVGSExFTkJRVU5STEV0QlFVb3NRMEZCVlZjc1NVRkJWaXhEUVVGbFF5eFRRVUZUTEVOQlFVTk9MRmRCUVVRc1JVRkJZMGdzVlVGQlpDeERRVUY0UWp0QlFVTkJSaXhOUVVGQlFTeFRRVUZUTzBGQlExUkhMRTFCUVVGQkxGbEJRVmtzU1VGQlNVVXNWMEZCVnl4RFFVRkRja0lzVVVGQldpeEhRVUYxUW5GQ0xGZEJRVmNzUTBGQlEzUkNMRkZCUVc1RU8wRkJRMFFzUzBGTVJDeE5RVXRQTEVsQlFVa3dRaXhWUVVGVkxFTkJRVU5FTEdGQlFVUXNSVUZCWjBKSUxGZEJRV2hDTEVOQlFXUXNSVUZCTkVNN1FVRkRha1E3UVVGRFFXUXNUVUZCUVVFc1IwRkJSeXhEUVVGRFVTeExRVUZLTEVOQlFWVlhMRWxCUVZZc1EwRkJaVU1zVTBGQlV5eERRVUZEU0N4aFFVRkVMRVZCUVdkQ1RDeFpRVUZvUWl4RFFVRjRRanRCUVVOQlJpeE5RVUZCUVN4WFFVRlhPMEZCUTFoRExFMUJRVUZCTEZWQlFWVXNTVUZCU1Uwc1lVRkJZU3hEUVVGRGVFSXNVVUZCWkN4SFFVRjVRbmRDTEdGQlFXRXNRMEZCUTNwQ0xGRkJRWEpFTzBGQlEwUXNTMEZNVFN4TlFVdEJPMEZCUTB3N1FVRkRRU3hWUVVGSk5rSXNWVUZCVlN4SFFVRkhPMEZCUTJaT0xGRkJRVUZCTEZGQlFWRXNSVUZCUlU4c1NVRkJTU3hEUVVGRFF5eEhRVUZNTEVOQlFWTlVMRmRCUVZjc1EwRkJRME1zVVVGQmNrSXNSVUZCSzBKRkxHRkJRV0VzUTBGQlEwWXNVVUZCTjBNc1EwRkVTenRCUVVWbWRrSXNVVUZCUVVFc1VVRkJVU3hGUVVGRkxFTkJSa3M3UVVGSFptZERMRkZCUVVGQkxGRkJRVkVzUlVGQlJVWXNTVUZCU1N4RFFVRkRReXhIUVVGTUxFTkJRVk5VTEZkQlFWY3NRMEZCUTFVc1VVRkJXaXhIUVVGMVFtSXNWVUZCYUVNc1JVRkJORU5OTEdGQlFXRXNRMEZCUTBZc1VVRkJaQ3hIUVVGNVFrZ3NXVUZCY2tVc1EwRklTenRCUVVsbWJrSXNVVUZCUVVFc1VVRkJVU3hGUVVGRkxFTkJTa3M3UVVGTFprWXNVVUZCUVVFc1MwRkJTeXhGUVVGRk8wRkJURkVzVDBGQmFrSTdRVUZQUVd0RExFMUJRVUZCTEZWQlFWVXNRMEZCUTBvc1ZVRkJSQ3hGUVVGaFVDeFhRVUZYTEVOQlFVTkRMRkZCUVhwQ0xFVkJRVzFEUkN4WFFVRlhMRU5CUVVOMlFpeExRVUV2UXl4RlFVRnpSREJDTEdGQlFXRXNRMEZCUTBZc1VVRkJjRVVzUlVGQk9FVkZMR0ZCUVdFc1EwRkJRekZDTEV0QlFUVkdMRU5CUVZZN1FVRkRRVzFDTEUxQlFVRkJMRmRCUVZjN1FVRkRXRVFzVFVGQlFVRXNVMEZCVXp0QlFVVlVWQ3hOUVVGQlFTeEhRVUZITEVOQlFVTlJMRXRCUVVvc1EwRkJWVmNzU1VGQlZpeERRVUZsUlN4VlFVRm1PMEZCUTBRN1FVRkRSanM3UVVGRlJDeFRRVUZQY2tJc1IwRkJVRHRCUVVORU96dEJRVVZFTEZOQlFWTkVMRk5CUVZRc1EwRkJiVUl5UWl4TFFVRnVRaXhGUVVFd1FqVkNMRWxCUVRGQ0xFVkJRV2RETzBGQlF6bENMRTFCUVVrc1QwRkJUelJDTEV0QlFWQXNTMEZCYVVJc1VVRkJja0lzUlVGQkswSTdRVUZETjBJc1VVRkJTeXhOUVVGRUxFTkJRVk5ETEVsQlFWUXNRMEZCWTBRc1MwRkJaQ3hMUVVFd1FpeFZRVUZFTEVOQlFXRkRMRWxCUVdJc1EwRkJhMEpFTEV0QlFXeENMRU5CUVRkQ0xFVkJRWGRFTzBGQlEzUkVMR0ZCUVU4N1FVRkJRVHRCUVVGQk8wRkJRVUU3TzBGQlFVRkZPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRTdRVUZCUVN4VFFVRlhSaXhMUVVGWUxFVkJRV3RDTEVOQlFXeENPMEZCUVZBN1FVRkRSRHM3UVVGRlJDeFJRVUZKTEVOQlFVTTFRaXhKUVVGTUxFVkJRVmM3UVVGRFZDeFpRVUZOTEVsQlFVa3JRaXhMUVVGS0xFTkJRVlVzYTBSQlFWWXNRMEZCVGp0QlFVTkVPenRCUVVORUxGZEJRVTg3UVVGQlFUdEJRVUZCTzBGQlFVRTdPMEZCUVVGRE8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVFN1FVRkJRU3hQUVVGblFuQkRMRk5CUVdoQ0xFVkJRVEpDUVN4VFFVRXpRaXhGUVVGelEwa3NTVUZCZEVNc1JVRkJORU0wUWl4TFFVRTFRenRCUVVGUU8wRkJRMFE3TzBGQlJVUXNVMEZCVDBFc1MwRkJVRHRCUVVORU96dEJRVVZFTEZOQlFWTjJRaXhsUVVGVUxFTkJRWGxDTkVJc1MwRkJla0lzUlVGQlowTTdRVUZET1VJc1UwRkJUMEVzUzBGQlN5eERRVUZETjBJc1YwRkJUaXhKUVVGeFFqWkNMRXRCUVVzc1EwRkJRemRDTEZkQlFVNHNTMEZCYzBJMlFpeExRVUZMTEVOQlFVTXpRaXhYUVVGNFJEdEJRVU5FT3p0QlFVVkVMRk5CUVZOSExGZEJRVlFzUTBGQmNVSk9MRXRCUVhKQ0xFVkJRVFJDVEN4SlFVRTFRaXhGUVVGclEwTXNUVUZCYkVNc1JVRkJNRU03UVVGRGVFTXNUVUZCU1VRc1NVRkJTU3hMUVVGTFF5eE5RVUZpTEVWQlFYRkNPMEZCUTI1Q0xGZEJRVTlFTEVsQlFWQTdRVUZEUkN4SFFVWkVMRTFCUlU4N1FVRkRURXNzU1VGQlFVRXNTMEZCU3l4RFFVRkRLMElzVVVGQlRpeEhRVUZwUWl4SlFVRnFRanRCUVVOQkxGZEJRVTg3UVVGQlEzQkRMRTFCUVVGQkxFbEJRVWtzUlVGQlNrRXNTVUZCUkR0QlFVRlBReXhOUVVGQlFTeE5RVUZOTEVWQlFVNUJPMEZCUVZBc1MwRkJVRHRCUVVORU8wRkJRMFk3TzBGQlJVUXNVMEZCVTNGQ0xGVkJRVlFzUTBGQmIwSlRMRWxCUVhCQ0xFVkJRVEJDVFN4TFFVRXhRaXhGUVVGcFF6dEJRVU12UWl4VFFVRlBUaXhKUVVGSkxFTkJRVU5hTEZGQlFVd3NSMEZCWjBKclFpeExRVUZMTEVOQlFVTnNRaXhSUVVGMFFpeEpRVU5FV1N4SlFVRkpMRU5CUVVOYUxGRkJRVXdzUjBGQlowSlpMRWxCUVVrc1EwRkJRMjVETEZGQlFYUkNMRWRCUVd0RGVVTXNTMEZCU3l4RFFVRkRiRUlzVVVGRU4wTTdRVUZGUkRzN1FVRkZSQ3hUUVVGVFN5eFRRVUZVTEVOQlFXMUNMMElzU1VGQmJrSXNSVUZCZVVJMlF5eE5RVUY2UWl4RlFVRnBRenRCUVVNdlFpeFRRVUZQTzBGQlEweHVRaXhKUVVGQlFTeFJRVUZSTEVWQlFVVXhRaXhKUVVGSkxFTkJRVU13UWl4UlFVUldPMEZCUTI5Q2RrSXNTVUZCUVVFc1VVRkJVU3hGUVVGRlNDeEpRVUZKTEVOQlFVTkhMRkZCUkc1RE8wRkJSVXhuUXl4SlFVRkJRU3hSUVVGUkxFVkJRVVZ1UXl4SlFVRkpMRU5CUVVOdFF5eFJRVUZNTEVkQlFXZENWU3hOUVVaeVFqdEJRVVUyUW5wRExFbEJRVUZCTEZGQlFWRXNSVUZCUlVvc1NVRkJTU3hEUVVGRFNTeFJRVVkxUXp0QlFVZE1SaXhKUVVGQlFTeExRVUZMTEVWQlFVVkdMRWxCUVVrc1EwRkJRMFU3UVVGSVVDeEhRVUZRTzBGQlMwUTdPMEZCUlVRc1UwRkJVMnRETEZWQlFWUXNRMEZCYjBKd1F5eEpRVUZ3UWl4RlFVRXdRbk5DTEZWQlFURkNMRVZCUVhORGQwSXNVMEZCZEVNc1JVRkJhVVJETEZkQlFXcEVMRVZCUVRoRVF5eFZRVUU1UkN4RlFVRXdSVHRCUVVONFJUdEJRVU5CTzBGQlEwRXNUVUZCU1hwRExFbEJRVWtzUjBGQlJ6dEJRVUZEYzBNc1NVRkJRVUVzVFVGQlRTeEZRVUZGZGtJc1ZVRkJWRHRCUVVGeFFuQkNMRWxCUVVGQkxFdEJRVXNzUlVGQlJUUkRMRk5CUVRWQ08wRkJRWFZEYkVNc1NVRkJRVUVzUzBGQlN5eEZRVUZGTzBGQlFUbERMRWRCUVZnN1FVRkJRU3hOUVVOSmNVTXNTMEZCU3l4SFFVRkhPMEZCUVVOS0xFbEJRVUZCTEUxQlFVMHNSVUZCUlVVc1YwRkJWRHRCUVVGelFqZERMRWxCUVVGQkxFdEJRVXNzUlVGQlJUaERMRlZCUVRkQ08wRkJRWGxEY0VNc1NVRkJRVUVzUzBGQlN5eEZRVUZGTzBGQlFXaEVMRWRCUkZvc1EwRklkMFVzUTBGTmVFVTdPMEZCUTBGelF5eEZRVUZCUVN4aFFVRmhMRU5CUVVOc1JDeEpRVUZFTEVWQlFVOVBMRWxCUVZBc1JVRkJZVEJETEV0QlFXSXNRMEZCWWp0QlFVTkJReXhGUVVGQlFTeGhRVUZoTEVOQlFVTnNSQ3hKUVVGRUxFVkJRVTlwUkN4TFFVRlFMRVZCUVdNeFF5eEpRVUZrTEVOQlFXSXNRMEZTZDBVc1EwRlZlRVU3TzBGQlEwRXNVMEZCVDBFc1NVRkJTU3hEUVVGRFN5eExRVUZNTEVkQlFXRk1MRWxCUVVrc1EwRkJRMHdzUzBGQlRDeERRVUZYYzBJc1RVRkJlRUlzU1VGQmEwTjVRaXhMUVVGTExFTkJRVU55UXl4TFFVRk9MRWRCUVdOeFF5eExRVUZMTEVOQlFVTXZReXhMUVVGT0xFTkJRVmx6UWl4TlFVRnVSU3hGUVVFeVJUdEJRVU42UlN4UlFVRkpReXhYUVVGWExFZEJRVWRzUWl4SlFVRkpMRU5CUVVOTUxFdEJRVXdzUTBGQlYwc3NTVUZCU1N4RFFVRkRTeXhMUVVGb1FpeERRVUZzUWp0QlFVRkJMRkZCUTBsMVF5eFpRVUZaTEVkQlFVZEdMRXRCUVVzc1EwRkJReTlETEV0QlFVNHNRMEZCV1N0RExFdEJRVXNzUTBGQlEzSkRMRXRCUVd4Q0xFTkJSRzVDT3p0QlFVZEJMRkZCUVVrc1EwRkJRMkVzVjBGQlZ5eERRVUZETEVOQlFVUXNRMEZCV0N4TFFVRnRRaXhIUVVGdVFpeEpRVUV3UWtFc1YwRkJWeXhEUVVGRExFTkJRVVFzUTBGQldDeExRVUZ0UWl4SFFVRTVReXhOUVVOSk1FSXNXVUZCV1N4RFFVRkRMRU5CUVVRc1EwRkJXaXhMUVVGdlFpeEhRVUZ3UWl4SlFVRXlRa0VzV1VGQldTeERRVUZETEVOQlFVUXNRMEZCV2l4TFFVRnZRaXhIUVVSdVJDeERRVUZLTEVWQlF6WkVPMEZCUXpORU8wRkJRMEZETEUxQlFVRkJMRmxCUVZrc1EwRkJRM0JFTEVsQlFVUXNSVUZCVDA4c1NVRkJVQ3hGUVVGaE1FTXNTMEZCWWl4RFFVRmFPMEZCUTBRc1MwRktSQ3hOUVVsUExFbEJRVWw0UWl4WFFVRlhMRU5CUVVNc1EwRkJSQ3hEUVVGWUxFdEJRVzFDTEVkQlFXNUNMRWxCUVRCQ01FSXNXVUZCV1N4RFFVRkRMRU5CUVVRc1EwRkJXaXhMUVVGdlFpeEhRVUZzUkN4RlFVRjFSRHRCUVVGQk8wRkJRVUU3TzBGQlFVRTdRVUZETlVRN08wRkJRMEU3TzBGQlFVRTdPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUZ1UkN4TlFVRkJRU3hKUVVGSkxFTkJRVU5GTEV0QlFVd3NSVUZCVnpSQ0xFbEJRVmc3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGdlFuVkNMRTFCUVVGQkxHRkJRV0VzUTBGQlF6bERMRWxCUVVRc1EwRkJha003UVVGRFJDeExRVWhOTEUxQlIwRXNTVUZCU1RSRExGbEJRVmtzUTBGQlF5eERRVUZFTEVOQlFWb3NTMEZCYjBJc1IwRkJjRUlzU1VGQk1rSXhRaXhYUVVGWExFTkJRVU1zUTBGQlJDeERRVUZZTEV0QlFXMUNMRWRCUVd4RUxFVkJRWFZFTzBGQlFVRTdRVUZCUVRzN1FVRkJRVHRCUVVNMVJEczdRVUZEUVRzN1FVRkJRVHM3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVhwQ0xFMUJRVUZCTEVsQlFVa3NRMEZCUTBVc1MwRkJUQ3hGUVVGWE5FSXNTVUZCV0R0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFXOUNkVUlzVFVGQlFVRXNZVUZCWVN4RFFVRkRTaXhMUVVGRUxFTkJRV3BETzBGQlEwUXNTMEZJVFN4TlFVZEJMRWxCUVVsNFFpeFhRVUZYTEVOQlFVTXNRMEZCUkN4RFFVRllMRXRCUVcxQ0xFZEJRVzVDTEVsQlFUQkNNRUlzV1VGQldTeERRVUZETEVOQlFVUXNRMEZCV2l4TFFVRnZRaXhIUVVGc1JDeEZRVUYxUkR0QlFVTTFSRHRCUVVOQlJ5eE5RVUZCUVN4UFFVRlBMRU5CUVVOMFJDeEpRVUZFTEVWQlFVOVBMRWxCUVZBc1JVRkJZVEJETEV0QlFXSXNRMEZCVUR0QlFVTkVMRXRCU0Uwc1RVRkhRU3hKUVVGSlJTeFpRVUZaTEVOQlFVTXNRMEZCUkN4RFFVRmFMRXRCUVc5Q0xFZEJRWEJDTEVsQlFUSkNNVUlzVjBGQlZ5eERRVUZETEVOQlFVUXNRMEZCV0N4TFFVRnRRaXhIUVVGc1JDeEZRVUYxUkR0QlFVTTFSRHRCUVVOQk5rSXNUVUZCUVVFc1QwRkJUeXhEUVVGRGRFUXNTVUZCUkN4RlFVRlBhVVFzUzBGQlVDeEZRVUZqTVVNc1NVRkJaQ3hGUVVGdlFpeEpRVUZ3UWl4RFFVRlFPMEZCUTBRc1MwRklUU3hOUVVkQkxFbEJRVWxyUWl4WFFVRlhMRXRCUVVzd1FpeFpRVUZ3UWl4RlFVRnJRenRCUVVOMlF6dEJRVU5CYmtRc1RVRkJRVUVzU1VGQlNTeERRVUZEUlN4TFFVRk1MRU5CUVZjMFFpeEpRVUZZTEVOQlFXZENUQ3hYUVVGb1FqdEJRVU5CYkVJc1RVRkJRVUVzU1VGQlNTeERRVUZEU3l4TFFVRk1PMEZCUTBGeFF5eE5RVUZCUVN4TFFVRkxMRU5CUVVOeVF5eExRVUZPTzBGQlEwUXNTMEZNVFN4TlFVdEJPMEZCUTB3N1FVRkRRU3RDTEUxQlFVRkJMRkZCUVZFc1EwRkJRek5ETEVsQlFVUXNSVUZCVDNGRUxHRkJRV0VzUTBGQlF6bERMRWxCUVVRc1EwRkJjRUlzUlVGQk5FSTRReXhoUVVGaExFTkJRVU5LTEV0QlFVUXNRMEZCZWtNc1EwRkJVanRCUVVORU8wRkJRMFlzUjBGNFEzVkZMRU5CTUVONFJUczdPMEZCUTBGTkxFVkJRVUZCTEdOQlFXTXNRMEZCUTNaRUxFbEJRVVFzUlVGQlQwOHNTVUZCVUN4RFFVRmtPMEZCUTBGblJDeEZRVUZCUVN4alFVRmpMRU5CUVVOMlJDeEpRVUZFTEVWQlFVOXBSQ3hMUVVGUUxFTkJRV1E3UVVGRlFXeEVMRVZCUVVGQkxHRkJRV0VzUTBGQlEwTXNTVUZCUkN4RFFVRmlPMEZCUTBRN08wRkJSVVFzVTBGQlUyOUVMRmxCUVZRc1EwRkJjMEp3UkN4SlFVRjBRaXhGUVVFMFFrOHNTVUZCTlVJc1JVRkJhME13UXl4TFFVRnNReXhGUVVGNVF6dEJRVU4yUXl4TlFVRkpUeXhUUVVGVExFZEJRVWRJTEdGQlFXRXNRMEZCUXpsRExFbEJRVVFzUTBGQk4wSTdRVUZCUVN4TlFVTkphMFFzV1VGQldTeEhRVUZIU2l4aFFVRmhMRU5CUVVOS0xFdEJRVVFzUTBGRWFFTTdPMEZCUjBFc1RVRkJTVk1zVlVGQlZTeERRVUZEUml4VFFVRkVMRU5CUVZZc1NVRkJlVUpGTEZWQlFWVXNRMEZCUTBRc1dVRkJSQ3hEUVVGMlF5eEZRVUYxUkR0QlFVTnlSRHRCUVVOQk8wRkJRVWs3UVVGQlFUdEJRVUZCT3p0QlFVRkJSVHRCUVVGQlFUdEJRVUZCUVR0QlFVRkJRVHRCUVVGQlFUdEJRVUZCUVR0QlFVRkJPMEZCUVVFc1MwRkJaMEpJTEZOQlFXaENMRVZCUVRKQ1F5eFpRVUV6UWl4TFFVTkhSeXhyUWtGQmEwSXNRMEZCUTFnc1MwRkJSQ3hGUVVGUlR5eFRRVUZTTEVWQlFXMUNRU3hUUVVGVExFTkJRVU5vUXl4TlFVRldMRWRCUVcxQ2FVTXNXVUZCV1N4RFFVRkRha01zVFVGQmJrUXNRMEZFZWtJc1JVRkRjVVk3UVVGQlFUdEJRVUZCT3p0QlFVRkJPenRCUVVOdVJqczdRVUZCUVRzN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFYaENMRTFCUVVGQkxFbEJRVWtzUTBGQlEwVXNTMEZCVEN4RlFVRlhORUlzU1VGQldEdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVzlDTUVJc1RVRkJRVUVzVTBGQmNFSTdPMEZCUTBFN1FVRkRSQ3hMUVVwRUxFMUJTVTg3UVVGQlNUdEJRVUZCTzBGQlFVRTdPMEZCUVVGSE8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVFN1FVRkJRU3hMUVVGblFrWXNXVUZCYUVJc1JVRkJPRUpFTEZOQlFUbENMRXRCUTBwSkxHdENRVUZyUWl4RFFVRkRja1FzU1VGQlJDeEZRVUZQYTBRc1dVRkJVQ3hGUVVGeFFrRXNXVUZCV1N4RFFVRkRha01zVFVGQllpeEhRVUZ6UW1kRExGTkJRVk1zUTBGQlEyaERMRTFCUVhKRUxFTkJSR3hDTEVWQlEyZEdPMEZCUVVFN1FVRkJRVHM3UVVGQlFUczdRVUZEY2tZN08wRkJRVUU3TzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVGNFFpeE5RVUZCUVN4SlFVRkpMRU5CUVVORkxFdEJRVXdzUlVGQlZ6UkNMRWxCUVZnN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRnZRakpDTEUxQlFVRkJMRmxCUVhCQ096dEJRVU5CTzBGQlEwUTdRVUZEUml4SFFWaEVMRTFCVjA4N1FVRkJTVHRCUVVGQk8wRkJRVUU3TzBGQlFVRkpPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRkJPMEZCUVVGQk8wRkJRVUZCTzBGQlFVRTdRVUZCUVN4SFFVRlhUQ3hUUVVGWUxFVkJRWE5DUXl4WlFVRjBRaXhEUVVGS0xFVkJRWGxETzBGQlFVRTdRVUZCUVRzN1FVRkJRVHM3UVVGRE9VTTdPMEZCUVVFN08wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRjZSQ3hKUVVGQlFTeEpRVUZKTEVOQlFVTkZMRXRCUVV3c1JVRkJWelJDTEVsQlFWZzdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFUdEJRVUZ2UWpCQ0xFbEJRVUZCTEZOQlFYQkNPenRCUVVOQk8wRkJRMFE3TzBGQlJVUmlMRVZCUVVGQkxGRkJRVkVzUTBGQlF6TkRMRWxCUVVRc1JVRkJUM2RFTEZOQlFWQXNSVUZCYTBKRExGbEJRV3hDTEVOQlFWSTdRVUZEUkRzN1FVRkZSQ3hUUVVGVFNDeFBRVUZVTEVOQlFXbENkRVFzU1VGQmFrSXNSVUZCZFVKUExFbEJRWFpDTEVWQlFUWkNNRU1zUzBGQk4wSXNSVUZCYjBOaExFbEJRWEJETEVWQlFUQkRPMEZCUTNoRExFMUJRVWxPTEZOQlFWTXNSMEZCUjBnc1lVRkJZU3hEUVVGRE9VTXNTVUZCUkN4RFFVRTNRanRCUVVGQkxFMUJRMGxyUkN4WlFVRlpMRWRCUVVkTkxHTkJRV01zUTBGQlEyUXNTMEZCUkN4RlFVRlJUeXhUUVVGU0xFTkJSR3BET3p0QlFVVkJMRTFCUVVsRExGbEJRVmtzUTBGQlEwOHNUVUZCYWtJc1JVRkJlVUk3UVVGQlFUdEJRVUZCT3p0QlFVRkJPenRCUVVOMlFqczdRVUZCUVRzN1FVRkJRVHRCUVVGQk8wRkJRVUU3UVVGQlFXaEZMRWxCUVVGQkxFbEJRVWtzUTBGQlEwVXNTMEZCVEN4RlFVRlhORUlzU1VGQldEdEJRVUZCTzBGQlFVRTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJRVHRCUVVGQk8wRkJRVzlDTWtJc1NVRkJRVUVzV1VGQldTeERRVUZEVHl4TlFVRnFRenRCUVVORUxFZEJSa1FzVFVGRlR6dEJRVU5NY2tJc1NVRkJRVUVzVVVGQlVTeERRVUZETTBNc1NVRkJSQ3hGUVVGUE9FUXNTVUZCU1N4SFFVRkhUQ3haUVVGSUxFZEJRV3RDUkN4VFFVRTNRaXhGUVVGM1EwMHNTVUZCU1N4SFFVRkhUaXhUUVVGSUxFZEJRV1ZETEZsQlFUTkVMRU5CUVZJN1FVRkRSRHRCUVVOR096dEJRVVZFTEZOQlFWTmtMRkZCUVZRc1EwRkJhMEl6UXl4SlFVRnNRaXhGUVVGM1FrOHNTVUZCZUVJc1JVRkJPRUl3UXl4TFFVRTVRaXhGUVVGeFF6dEJRVU51UTJwRUxFVkJRVUZCTEVsQlFVa3NRMEZCUXpKRExGRkJRVXdzUjBGQlowSXNTVUZCYUVJN1FVRkRRVE5ETEVWQlFVRkJMRWxCUVVrc1EwRkJRMFVzUzBGQlRDeERRVUZYTkVJc1NVRkJXQ3hEUVVGblFqdEJRVU5rWVN4SlFVRkJRU3hSUVVGUkxFVkJRVVVzU1VGRVNUdEJRVVZrY0VNc1NVRkJRVUVzU1VGQlNTeEZRVUZGUVN4SlFVWlJPMEZCUjJSRExFbEJRVUZCTEUxQlFVMHNSVUZCUlhsRE8wRkJTRTBzUjBGQmFFSTdRVUZMUkRzN1FVRkZSQ3hUUVVGVFF5eGhRVUZVTEVOQlFYVkNiRVFzU1VGQmRrSXNSVUZCTmtKcFJTeE5RVUUzUWl4RlFVRnhRMmhDTEV0QlFYSkRMRVZCUVRSRE8wRkJRekZETEZOQlFVOW5RaXhOUVVGTkxFTkJRVU53UWl4TlFVRlFMRWRCUVdkQ1NTeExRVUZMTEVOQlFVTktMRTFCUVhSQ0xFbEJRV2REYjBJc1RVRkJUU3hEUVVGRGNrUXNTMEZCVUN4SFFVRmxjVVFzVFVGQlRTeERRVUZETDBRc1MwRkJVQ3hEUVVGaGMwSXNUVUZCYmtVc1JVRkJNa1U3UVVGRGVrVXNVVUZCU1RCRExFbEJRVWtzUjBGQlIwUXNUVUZCVFN4RFFVRkRMMFFzUzBGQlVDeERRVUZoSzBRc1RVRkJUU3hEUVVGRGNrUXNTMEZCVUN4RlFVRmlMRU5CUVZnN1FVRkRRVm9zU1VGQlFVRXNTVUZCU1N4RFFVRkRSU3hMUVVGTUxFTkJRVmMwUWl4SlFVRllMRU5CUVdkQ2IwTXNTVUZCYUVJN1FVRkRRVVFzU1VGQlFVRXNUVUZCVFN4RFFVRkRjRUlzVFVGQlVEdEJRVU5FTzBGQlEwWTdPMEZCUTBRc1UwRkJVMVVzWTBGQlZDeERRVUYzUW5aRUxFbEJRWGhDTEVWQlFUaENhVVVzVFVGQk9VSXNSVUZCYzBNN1FVRkRjRU1zVTBGQlQwRXNUVUZCVFN4RFFVRkRja1FzUzBGQlVDeEhRVUZsY1VRc1RVRkJUU3hEUVVGREwwUXNTMEZCVUN4RFFVRmhjMElzVFVGQmJrTXNSVUZCTWtNN1FVRkRla01zVVVGQlNUQkRMRWxCUVVrc1IwRkJSMFFzVFVGQlRTeERRVUZETDBRc1MwRkJVQ3hEUVVGaEswUXNUVUZCVFN4RFFVRkRja1FzUzBGQlVDeEZRVUZpTEVOQlFWZzdRVUZEUVZvc1NVRkJRVUVzU1VGQlNTeERRVUZEUlN4TFFVRk1MRU5CUVZjMFFpeEpRVUZZTEVOQlFXZENiME1zU1VGQmFFSTdRVUZEUkR0QlFVTkdPenRCUVVWRUxGTkJRVk5pTEdGQlFWUXNRMEZCZFVKakxFdEJRWFpDTEVWQlFUaENPMEZCUXpWQ0xFMUJRVWw0UkN4SFFVRkhMRWRCUVVjc1JVRkJWanRCUVVGQkxFMUJRMGw1UkN4VFFVRlRMRWRCUVVkRUxFdEJRVXNzUTBGQlEycEZMRXRCUVU0c1EwRkJXV2xGTEV0QlFVc3NRMEZCUTNaRUxFdEJRV3hDTEVWQlFYbENMRU5CUVhwQ0xFTkJSR2hDT3p0QlFVVkJMRk5CUVU5MVJDeExRVUZMTEVOQlFVTjJSQ3hMUVVGT0xFZEJRV04xUkN4TFFVRkxMRU5CUVVOcVJTeExRVUZPTEVOQlFWbHpRaXhOUVVGcVF5eEZRVUY1UXp0QlFVTjJReXhSUVVGSk1FTXNTVUZCU1N4SFFVRkhReXhMUVVGTExFTkJRVU5xUlN4TFFVRk9MRU5CUVZscFJTeExRVUZMTEVOQlFVTjJSQ3hMUVVGc1FpeERRVUZZTEVOQlJIVkRMRU5CUjNaRE96dEJRVU5CTEZGQlFVbDNSQ3hUUVVGVExFdEJRVXNzUjBGQlpDeEpRVUZ4UWtZc1NVRkJTU3hEUVVGRExFTkJRVVFzUTBGQlNpeExRVUZaTEVkQlFYSkRMRVZCUVRCRE8wRkJRM2hEUlN4TlFVRkJRU3hUUVVGVExFZEJRVWNzUjBGQldqdEJRVU5FT3p0QlFVVkVMRkZCUVVsQkxGTkJRVk1zUzBGQlMwWXNTVUZCU1N4RFFVRkRMRU5CUVVRc1EwRkJkRUlzUlVGQk1rSTdRVUZEZWtKMlJDeE5RVUZCUVN4SFFVRkhMRU5CUVVOdFFpeEpRVUZLTEVOQlFWTnZReXhKUVVGVU8wRkJRMEZETEUxQlFVRkJMRXRCUVVzc1EwRkJRM1pFTEV0QlFVNDdRVUZEUkN4TFFVaEVMRTFCUjA4N1FVRkRURHRCUVVORU8wRkJRMFk3TzBGQlJVUXNVMEZCVDBRc1IwRkJVRHRCUVVORU96dEJRVU5FTEZOQlFWTnZSQ3hqUVVGVUxFTkJRWGRDU1N4TFFVRjRRaXhGUVVFclFrVXNXVUZCTDBJc1JVRkJOa003UVVGRE0wTXNUVUZCU1VNc1QwRkJUeXhIUVVGSExFVkJRV1E3UVVGQlFTeE5RVU5KVGl4TlFVRk5MRWRCUVVjc1JVRkVZanRCUVVGQkxFMUJSVWxQTEZWQlFWVXNSMEZCUnl4RFFVWnFRanRCUVVGQkxFMUJSMGxETEdOQlFXTXNSMEZCUnl4TFFVaHlRanRCUVVGQkxFMUJTVWxETEZWQlFWVXNSMEZCUnl4TFFVcHFRanM3UVVGTFFTeFRRVUZQUml4VlFVRlZMRWRCUVVkR0xGbEJRVmtzUTBGQlF6ZERMRTFCUVRGQ0xFbEJRMFV5UXl4TFFVRkxMRU5CUVVOMlJDeExRVUZPTEVkQlFXTjFSQ3hMUVVGTExFTkJRVU5xUlN4TFFVRk9MRU5CUVZselFpeE5RVVJ1UXl4RlFVTXlRenRCUVVONlF5eFJRVUZKYTBRc1RVRkJUU3hIUVVGSFVDeExRVUZMTEVOQlFVTnFSU3hMUVVGT0xFTkJRVmxwUlN4TFFVRkxMRU5CUVVOMlJDeExRVUZzUWl4RFFVRmlPMEZCUVVFc1VVRkRTU3RFTEV0QlFVc3NSMEZCUjA0c1dVRkJXU3hEUVVGRFJTeFZRVUZFTEVOQlJIaENMRU5CUkhsRExFTkJTWHBET3p0QlFVTkJMRkZCUVVsSkxFdEJRVXNzUTBGQlF5eERRVUZFTEVOQlFVd3NTMEZCWVN4SFFVRnFRaXhGUVVGelFqdEJRVU53UWp0QlFVTkVPenRCUVVWRVNDeEpRVUZCUVN4alFVRmpMRWRCUVVkQkxHTkJRV01zU1VGQlNVVXNUVUZCVFN4RFFVRkRMRU5CUVVRc1EwRkJUaXhMUVVGakxFZEJRV3BFTzBGQlJVRldMRWxCUVVGQkxFMUJRVTBzUTBGQlEyeERMRWxCUVZBc1EwRkJXVFpETEV0QlFWbzdRVUZEUVVvc1NVRkJRVUVzVlVGQlZTeEhRVm9yUWl4RFFXTjZRenRCUVVOQk96dEJRVU5CTEZGQlFVbEhMRTFCUVUwc1EwRkJReXhEUVVGRUxFTkJRVTRzUzBGQll5eEhRVUZzUWl4RlFVRjFRanRCUVVOeVFrUXNUVUZCUVVFc1ZVRkJWU3hIUVVGSExFbEJRV0k3TzBGQlJVRXNZVUZCVDBNc1RVRkJUU3hEUVVGRExFTkJRVVFzUTBGQlRpeExRVUZqTEVkQlFYSkNMRVZCUVRCQ08wRkJRM2hDU2l4UlFVRkJRU3hQUVVGUExFTkJRVU40UXl4SlFVRlNMRU5CUVdFMFF5eE5RVUZpTzBGQlEwRkJMRkZCUVVGQkxFMUJRVTBzUjBGQlIxQXNTMEZCU3l4RFFVRkRha1VzUzBGQlRpeERRVUZaTEVWQlFVVnBSU3hMUVVGTExFTkJRVU4yUkN4TFFVRndRaXhEUVVGVU8wRkJRMFE3UVVGRFJqczdRVUZGUkN4UlFVRkpLMFFzUzBGQlN5eERRVUZEUXl4TlFVRk9MRU5CUVdFc1EwRkJZaXhOUVVGdlFrWXNUVUZCVFN4RFFVRkRSU3hOUVVGUUxFTkJRV01zUTBGQlpDeERRVUY0UWl4RlFVRXdRenRCUVVONFEwNHNUVUZCUVVFc1QwRkJUeXhEUVVGRGVFTXNTVUZCVWl4RFFVRmhORU1zVFVGQllqdEJRVU5CVUN4TlFVRkJRU3hMUVVGTExFTkJRVU4yUkN4TFFVRk9PMEZCUTBRc1MwRklSQ3hOUVVkUE8wRkJRMHcyUkN4TlFVRkJRU3hWUVVGVkxFZEJRVWNzU1VGQllqdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1RVRkJTU3hEUVVGRFNpeFpRVUZaTEVOQlFVTkZMRlZCUVVRc1EwRkJXaXhKUVVFMFFpeEZRVUUzUWl4RlFVRnBReXhEUVVGcVF5eE5RVUYzUXl4SFFVRjRReXhKUVVOSFF5eGpRVVJRTEVWQlEzVkNPMEZCUTNKQ1F5eEpRVUZCUVN4VlFVRlZMRWRCUVVjc1NVRkJZanRCUVVORU96dEJRVVZFTEUxQlFVbEJMRlZCUVVvc1JVRkJaMEk3UVVGRFpDeFhRVUZQU0N4UFFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlQwTXNWVUZCVlN4SFFVRkhSaXhaUVVGWkxFTkJRVU0zUXl4TlFVRnFReXhGUVVGNVF6dEJRVU4yUTNkRExFbEJRVUZCTEUxQlFVMHNRMEZCUTJ4RExFbEJRVkFzUTBGQldYVkRMRmxCUVZrc1EwRkJRMFVzVlVGQlZTeEZRVUZZTEVOQlFYaENPMEZCUTBRN08wRkJSVVFzVTBGQlR6dEJRVU5NVUN4SlFVRkJRU3hOUVVGTkxFVkJRVTVCTEUxQlJFczdRVUZGVEUwc1NVRkJRVUVzVDBGQlR5eEZRVUZRUVR0QlFVWkxMRWRCUVZBN1FVRkpSRHM3UVVGRlJDeFRRVUZUV2l4VlFVRlVMRU5CUVc5Q1dTeFBRVUZ3UWl4RlFVRTJRanRCUVVNelFpeFRRVUZQUVN4UFFVRlBMRU5CUVVOUExFMUJRVklzUTBGQlpTeFZRVUZUUXl4SlFVRlVMRVZCUVdWS0xFMUJRV1lzUlVGQmRVSTdRVUZETTBNc1YwRkJUMGtzU1VGQlNTeEpRVUZKU2l4TlFVRk5MRU5CUVVNc1EwRkJSQ3hEUVVGT0xFdEJRV01zUjBGQk4wSTdRVUZEUkN4SFFVWk5MRVZCUlVvc1NVRkdTU3hEUVVGUU8wRkJSMFE3TzBGQlEwUXNVMEZCVTJRc2EwSkJRVlFzUTBGQk5FSlBMRXRCUVRWQ0xFVkJRVzFEV1N4aFFVRnVReXhGUVVGclJFTXNTMEZCYkVRc1JVRkJlVVE3UVVGRGRrUXNUMEZCU3l4SlFVRkpReXhEUVVGRExFZEJRVWNzUTBGQllpeEZRVUZuUWtFc1EwRkJReXhIUVVGSFJDeExRVUZ3UWl4RlFVRXlRa01zUTBGQlF5eEZRVUUxUWl4RlFVRm5RenRCUVVNNVFpeFJRVUZKUXl4aFFVRmhMRWRCUVVkSUxHRkJRV0VzUTBGQlEwRXNZVUZCWVN4RFFVRkRka1FzVFVGQlpDeEhRVUYxUW5kRUxFdEJRWFpDTEVkQlFTdENReXhEUVVGb1F5eERRVUZpTEVOQlFXZEVUQ3hOUVVGb1JDeERRVUYxUkN4RFFVRjJSQ3hEUVVGd1FqczdRVUZEUVN4UlFVRkpWQ3hMUVVGTExFTkJRVU5xUlN4TFFVRk9MRU5CUVZscFJTeExRVUZMTEVOQlFVTjJSQ3hMUVVGT0xFZEJRV054UlN4RFFVRXhRaXhOUVVGcFF5eE5RVUZOUXl4aFFVRXpReXhGUVVFd1JEdEJRVU40UkN4aFFVRlBMRXRCUVZBN1FVRkRSRHRCUVVOR096dEJRVVZFWml4RlFVRkJRU3hMUVVGTExFTkJRVU4yUkN4TFFVRk9MRWxCUVdWdlJTeExRVUZtTzBGQlEwRXNVMEZCVHl4SlFVRlFPMEZCUTBRN08wRkJSVVFzVTBGQlV5OUZMRzFDUVVGVUxFTkJRVFpDUXl4TFFVRTNRaXhGUVVGdlF6dEJRVU5zUXl4TlFVRkpReXhSUVVGUkxFZEJRVWNzUTBGQlpqdEJRVU5CTEUxQlFVbERMRkZCUVZFc1IwRkJSeXhEUVVGbU8wRkJSVUZHTEVWQlFVRkJMRXRCUVVzc1EwRkJRMmxHTEU5QlFVNHNRMEZCWXl4VlFVRlRha0lzU1VGQlZDeEZRVUZsTzBGQlF6TkNMRkZCUVVrc1QwRkJUMEVzU1VGQlVDeExRVUZuUWl4UlFVRndRaXhGUVVFNFFqdEJRVU0xUWl4VlFVRkphMElzVDBGQlR5eEhRVUZIYmtZc2JVSkJRVzFDTEVOQlFVTnBSU3hKUVVGSkxFTkJRVU16UkN4SlFVRk9MRU5CUVdwRE8wRkJRMEVzVlVGQlNUaEZMRlZCUVZVc1IwRkJSM0JHTEcxQ1FVRnRRaXhEUVVGRGFVVXNTVUZCU1N4RFFVRkRNVVFzVFVGQlRpeERRVUZ3UXpzN1FVRkZRU3hWUVVGSlRDeFJRVUZSTEV0QlFVdEZMRk5CUVdwQ0xFVkJRVFJDTzBGQlF6RkNMRmxCUVVrclJTeFBRVUZQTEVOQlFVTnFSaXhSUVVGU0xFdEJRWEZDYTBZc1ZVRkJWU3hEUVVGRGJFWXNVVUZCY0VNc1JVRkJPRU03UVVGRE5VTkJMRlZCUVVGQkxGRkJRVkVzU1VGQlNXbEdMRTlCUVU4c1EwRkJRMnBHTEZGQlFYQkNPMEZCUTBRc1UwRkdSQ3hOUVVWUE8wRkJRMHhCTEZWQlFVRkJMRkZCUVZFc1IwRkJSMFVzVTBGQldEdEJRVU5FTzBGQlEwWTdPMEZCUlVRc1ZVRkJTVVFzVVVGQlVTeExRVUZMUXl4VFFVRnFRaXhGUVVFMFFqdEJRVU14UWl4WlFVRkpLMFVzVDBGQlR5eERRVUZEYUVZc1VVRkJVaXhMUVVGeFFtbEdMRlZCUVZVc1EwRkJRMnBHTEZGQlFYQkRMRVZCUVRoRE8wRkJRelZEUVN4VlFVRkJRU3hSUVVGUkxFbEJRVWxuUml4UFFVRlBMRU5CUVVOb1JpeFJRVUZ3UWp0QlFVTkVMRk5CUmtRc1RVRkZUenRCUVVOTVFTeFZRVUZCUVN4UlFVRlJMRWRCUVVkRExGTkJRVmc3UVVGRFJEdEJRVU5HTzBGQlEwWXNTMEZ1UWtRc1RVRnRRazg3UVVGRFRDeFZRVUZKUkN4UlFVRlJMRXRCUVV0RExGTkJRV0lzUzBGQk1rSTJSQ3hKUVVGSkxFTkJRVU1zUTBGQlJDeERRVUZLTEV0QlFWa3NSMEZCV2l4SlFVRnRRa0VzU1VGQlNTeERRVUZETEVOQlFVUXNRMEZCU2l4TFFVRlpMRWRCUVRGRUxFTkJRVW9zUlVGQmIwVTdRVUZEYkVVNVJDeFJRVUZCUVN4UlFVRlJPMEZCUTFRN08wRkJRMFFzVlVGQlNVUXNVVUZCVVN4TFFVRkxSU3hUUVVGaUxFdEJRVEpDTmtRc1NVRkJTU3hEUVVGRExFTkJRVVFzUTBGQlNpeExRVUZaTEVkQlFWb3NTVUZCYlVKQkxFbEJRVWtzUTBGQlF5eERRVUZFTEVOQlFVb3NTMEZCV1N4SFFVRXhSQ3hEUVVGS0xFVkJRVzlGTzBGQlEyeEZMMFFzVVVGQlFVRXNVVUZCVVR0QlFVTlVPMEZCUTBZN1FVRkRSaXhIUVRWQ1JEdEJRVGhDUVN4VFFVRlBPMEZCUVVOQkxFbEJRVUZCTEZGQlFWRXNSVUZCVWtFc1VVRkJSRHRCUVVGWFF5eEpRVUZCUVN4UlFVRlJMRVZCUVZKQk8wRkJRVmdzUjBGQlVEdEJRVU5FSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUh0emRISjFZM1IxY21Wa1VHRjBZMmg5SUdaeWIyMGdKeTR2WTNKbFlYUmxKenRjYm1sdGNHOXlkQ0I3Y0dGeWMyVlFZWFJqYUgwZ1puSnZiU0FuTGk5d1lYSnpaU2M3WEc1Y2JtbHRjRzl5ZENCN1lYSnlZWGxGY1hWaGJDd2dZWEp5WVhsVGRHRnlkSE5YYVhSb2ZTQm1jbTl0SUNjdUxpOTFkR2xzTDJGeWNtRjVKenRjYmx4dVpYaHdiM0owSUdaMWJtTjBhVzl1SUdOaGJHTk1hVzVsUTI5MWJuUW9hSFZ1YXlrZ2UxeHVJQ0JqYjI1emRDQjdiMnhrVEdsdVpYTXNJRzVsZDB4cGJtVnpmU0E5SUdOaGJHTlBiR1JPWlhkTWFXNWxRMjkxYm5Rb2FIVnVheTVzYVc1bGN5azdYRzVjYmlBZ2FXWWdLRzlzWkV4cGJtVnpJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNCb2RXNXJMbTlzWkV4cGJtVnpJRDBnYjJ4a1RHbHVaWE03WEc0Z0lIMGdaV3h6WlNCN1hHNGdJQ0FnWkdWc1pYUmxJR2gxYm1zdWIyeGtUR2x1WlhNN1hHNGdJSDFjYmx4dUlDQnBaaUFvYm1WM1RHbHVaWE1nSVQwOUlIVnVaR1ZtYVc1bFpDa2dlMXh1SUNBZ0lHaDFibXN1Ym1WM1RHbHVaWE1nUFNCdVpYZE1hVzVsY3p0Y2JpQWdmU0JsYkhObElIdGNiaUFnSUNCa1pXeGxkR1VnYUhWdWF5NXVaWGRNYVc1bGN6dGNiaUFnZlZ4dWZWeHVYRzVsZUhCdmNuUWdablZ1WTNScGIyNGdiV1Z5WjJVb2JXbHVaU3dnZEdobGFYSnpMQ0JpWVhObEtTQjdYRzRnSUcxcGJtVWdQU0JzYjJGa1VHRjBZMmdvYldsdVpTd2dZbUZ6WlNrN1hHNGdJSFJvWldseWN5QTlJR3h2WVdSUVlYUmphQ2gwYUdWcGNuTXNJR0poYzJVcE8xeHVYRzRnSUd4bGRDQnlaWFFnUFNCN2ZUdGNibHh1SUNBdkx5QkdiM0lnYVc1a1pYZ2dkMlVnYW5WemRDQnNaWFFnYVhRZ2NHRnpjeUIwYUhKdmRXZG9JR0Z6SUdsMElHUnZaWE51SjNRZ2FHRjJaU0JoYm5rZ2JtVmpaWE56WVhKNUlHMWxZVzVwYm1jdVhHNGdJQzh2SUV4bFlYWnBibWNnYzJGdWFYUjVJR05vWldOcmN5QnZiaUIwYUdseklIUnZJSFJvWlNCQlVFa2dZMjl1YzNWdFpYSWdkR2hoZENCdFlYa2dhMjV2ZHlCdGIzSmxJR0ZpYjNWMElIUm9aVnh1SUNBdkx5QnRaV0Z1YVc1bklHbHVJSFJvWldseUlHOTNiaUJqYjI1MFpYaDBMbHh1SUNCcFppQW9iV2x1WlM1cGJtUmxlQ0I4ZkNCMGFHVnBjbk11YVc1a1pYZ3BJSHRjYmlBZ0lDQnlaWFF1YVc1a1pYZ2dQU0J0YVc1bExtbHVaR1Y0SUh4OElIUm9aV2x5Y3k1cGJtUmxlRHRjYmlBZ2ZWeHVYRzRnSUdsbUlDaHRhVzVsTG01bGQwWnBiR1ZPWVcxbElIeDhJSFJvWldseWN5NXVaWGRHYVd4bFRtRnRaU2tnZTF4dUlDQWdJR2xtSUNnaFptbHNaVTVoYldWRGFHRnVaMlZrS0cxcGJtVXBLU0I3WEc0Z0lDQWdJQ0F2THlCT2J5Qm9aV0ZrWlhJZ2IzSWdibThnWTJoaGJtZGxJR2x1SUc5MWNuTXNJSFZ6WlNCMGFHVnBjbk1nS0dGdVpDQnZkWEp6SUdsbUlIUm9aV2x5Y3lCa2IyVnpJRzV2ZENCbGVHbHpkQ2xjYmlBZ0lDQWdJSEpsZEM1dmJHUkdhV3hsVG1GdFpTQTlJSFJvWldseWN5NXZiR1JHYVd4bFRtRnRaU0I4ZkNCdGFXNWxMbTlzWkVacGJHVk9ZVzFsTzF4dUlDQWdJQ0FnY21WMExtNWxkMFpwYkdWT1lXMWxJRDBnZEdobGFYSnpMbTVsZDBacGJHVk9ZVzFsSUh4OElHMXBibVV1Ym1WM1JtbHNaVTVoYldVN1hHNGdJQ0FnSUNCeVpYUXViMnhrU0dWaFpHVnlJRDBnZEdobGFYSnpMbTlzWkVobFlXUmxjaUI4ZkNCdGFXNWxMbTlzWkVobFlXUmxjanRjYmlBZ0lDQWdJSEpsZEM1dVpYZElaV0ZrWlhJZ1BTQjBhR1ZwY25NdWJtVjNTR1ZoWkdWeUlIeDhJRzFwYm1VdWJtVjNTR1ZoWkdWeU8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb0lXWnBiR1ZPWVcxbFEyaGhibWRsWkNoMGFHVnBjbk1wS1NCN1hHNGdJQ0FnSUNBdkx5Qk9ieUJvWldGa1pYSWdiM0lnYm04Z1kyaGhibWRsSUdsdUlIUm9aV2x5Y3l3Z2RYTmxJRzkxY25OY2JpQWdJQ0FnSUhKbGRDNXZiR1JHYVd4bFRtRnRaU0E5SUcxcGJtVXViMnhrUm1sc1pVNWhiV1U3WEc0Z0lDQWdJQ0J5WlhRdWJtVjNSbWxzWlU1aGJXVWdQU0J0YVc1bExtNWxkMFpwYkdWT1lXMWxPMXh1SUNBZ0lDQWdjbVYwTG05c1pFaGxZV1JsY2lBOUlHMXBibVV1YjJ4a1NHVmhaR1Z5TzF4dUlDQWdJQ0FnY21WMExtNWxkMGhsWVdSbGNpQTlJRzFwYm1VdWJtVjNTR1ZoWkdWeU8xeHVJQ0FnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdJQ0F2THlCQ2IzUm9JR05vWVc1blpXUXVMaTRnWm1sbmRYSmxJR2wwSUc5MWRGeHVJQ0FnSUNBZ2NtVjBMbTlzWkVacGJHVk9ZVzFsSUQwZ2MyVnNaV04wUm1sbGJHUW9jbVYwTENCdGFXNWxMbTlzWkVacGJHVk9ZVzFsTENCMGFHVnBjbk11YjJ4a1JtbHNaVTVoYldVcE8xeHVJQ0FnSUNBZ2NtVjBMbTVsZDBacGJHVk9ZVzFsSUQwZ2MyVnNaV04wUm1sbGJHUW9jbVYwTENCdGFXNWxMbTVsZDBacGJHVk9ZVzFsTENCMGFHVnBjbk11Ym1WM1JtbHNaVTVoYldVcE8xeHVJQ0FnSUNBZ2NtVjBMbTlzWkVobFlXUmxjaUE5SUhObGJHVmpkRVpwWld4a0tISmxkQ3dnYldsdVpTNXZiR1JJWldGa1pYSXNJSFJvWldseWN5NXZiR1JJWldGa1pYSXBPMXh1SUNBZ0lDQWdjbVYwTG01bGQwaGxZV1JsY2lBOUlITmxiR1ZqZEVacFpXeGtLSEpsZEN3Z2JXbHVaUzV1WlhkSVpXRmtaWElzSUhSb1pXbHljeTV1WlhkSVpXRmtaWElwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRDNW9kVzVyY3lBOUlGdGRPMXh1WEc0Z0lHeGxkQ0J0YVc1bFNXNWtaWGdnUFNBd0xGeHVJQ0FnSUNBZ2RHaGxhWEp6U1c1a1pYZ2dQU0F3TEZ4dUlDQWdJQ0FnYldsdVpVOW1abk5sZENBOUlEQXNYRzRnSUNBZ0lDQjBhR1ZwY25OUFptWnpaWFFnUFNBd08xeHVYRzRnSUhkb2FXeGxJQ2h0YVc1bFNXNWtaWGdnUENCdGFXNWxMbWgxYm10ekxteGxibWQwYUNCOGZDQjBhR1ZwY25OSmJtUmxlQ0E4SUhSb1pXbHljeTVvZFc1cmN5NXNaVzVuZEdncElIdGNiaUFnSUNCc1pYUWdiV2x1WlVOMWNuSmxiblFnUFNCdGFXNWxMbWgxYm10elcyMXBibVZKYm1SbGVGMGdmSHdnZTI5c1pGTjBZWEowT2lCSmJtWnBibWwwZVgwc1hHNGdJQ0FnSUNBZ0lIUm9aV2x5YzBOMWNuSmxiblFnUFNCMGFHVnBjbk11YUhWdWEzTmJkR2hsYVhKelNXNWtaWGhkSUh4OElIdHZiR1JUZEdGeWREb2dTVzVtYVc1cGRIbDlPMXh1WEc0Z0lDQWdhV1lnS0doMWJtdENaV1p2Y21Vb2JXbHVaVU4xY25KbGJuUXNJSFJvWldseWMwTjFjbkpsYm5RcEtTQjdYRzRnSUNBZ0lDQXZMeUJVYUdseklIQmhkR05vSUdSdlpYTWdibTkwSUc5MlpYSnNZWEFnZDJsMGFDQmhibmtnYjJZZ2RHaGxJRzkwYUdWeWN5d2dlV0Y1TGx4dUlDQWdJQ0FnY21WMExtaDFibXR6TG5CMWMyZ29ZMnh2Ym1WSWRXNXJLRzFwYm1WRGRYSnlaVzUwTENCdGFXNWxUMlptYzJWMEtTazdYRzRnSUNBZ0lDQnRhVzVsU1c1a1pYZ3JLenRjYmlBZ0lDQWdJSFJvWldseWMwOW1abk5sZENBclBTQnRhVzVsUTNWeWNtVnVkQzV1WlhkTWFXNWxjeUF0SUcxcGJtVkRkWEp5Wlc1MExtOXNaRXhwYm1Wek8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2FIVnVhMEpsWm05eVpTaDBhR1ZwY25ORGRYSnlaVzUwTENCdGFXNWxRM1Z5Y21WdWRDa3BJSHRjYmlBZ0lDQWdJQzh2SUZSb2FYTWdjR0YwWTJnZ1pHOWxjeUJ1YjNRZ2IzWmxjbXhoY0NCM2FYUm9JR0Z1ZVNCdlppQjBhR1VnYjNSb1pYSnpMQ0I1WVhrdVhHNGdJQ0FnSUNCeVpYUXVhSFZ1YTNNdWNIVnphQ2hqYkc5dVpVaDFibXNvZEdobGFYSnpRM1Z5Y21WdWRDd2dkR2hsYVhKelQyWm1jMlYwS1NrN1hHNGdJQ0FnSUNCMGFHVnBjbk5KYm1SbGVDc3JPMXh1SUNBZ0lDQWdiV2x1WlU5bVpuTmxkQ0FyUFNCMGFHVnBjbk5EZFhKeVpXNTBMbTVsZDB4cGJtVnpJQzBnZEdobGFYSnpRM1Z5Y21WdWRDNXZiR1JNYVc1bGN6dGNiaUFnSUNCOUlHVnNjMlVnZTF4dUlDQWdJQ0FnTHk4Z1QzWmxjbXhoY0N3Z2JXVnlaMlVnWVhNZ1ltVnpkQ0IzWlNCallXNWNiaUFnSUNBZ0lHeGxkQ0J0WlhKblpXUklkVzVySUQwZ2UxeHVJQ0FnSUNBZ0lDQnZiR1JUZEdGeWREb2dUV0YwYUM1dGFXNG9iV2x1WlVOMWNuSmxiblF1YjJ4a1UzUmhjblFzSUhSb1pXbHljME4xY25KbGJuUXViMnhrVTNSaGNuUXBMRnh1SUNBZ0lDQWdJQ0J2YkdSTWFXNWxjem9nTUN4Y2JpQWdJQ0FnSUNBZ2JtVjNVM1JoY25RNklFMWhkR2d1YldsdUtHMXBibVZEZFhKeVpXNTBMbTVsZDFOMFlYSjBJQ3NnYldsdVpVOW1abk5sZEN3Z2RHaGxhWEp6UTNWeWNtVnVkQzV2YkdSVGRHRnlkQ0FySUhSb1pXbHljMDltWm5ObGRDa3NYRzRnSUNBZ0lDQWdJRzVsZDB4cGJtVnpPaUF3TEZ4dUlDQWdJQ0FnSUNCc2FXNWxjem9nVzExY2JpQWdJQ0FnSUgwN1hHNGdJQ0FnSUNCdFpYSm5aVXhwYm1WektHMWxjbWRsWkVoMWJtc3NJRzFwYm1WRGRYSnlaVzUwTG05c1pGTjBZWEowTENCdGFXNWxRM1Z5Y21WdWRDNXNhVzVsY3l3Z2RHaGxhWEp6UTNWeWNtVnVkQzV2YkdSVGRHRnlkQ3dnZEdobGFYSnpRM1Z5Y21WdWRDNXNhVzVsY3lrN1hHNGdJQ0FnSUNCMGFHVnBjbk5KYm1SbGVDc3JPMXh1SUNBZ0lDQWdiV2x1WlVsdVpHVjRLeXM3WEc1Y2JpQWdJQ0FnSUhKbGRDNW9kVzVyY3k1d2RYTm9LRzFsY21kbFpFaDFibXNwTzF4dUlDQWdJSDFjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJ5WlhRN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUd4dllXUlFZWFJqYUNod1lYSmhiU3dnWW1GelpTa2dlMXh1SUNCcFppQW9kSGx3Wlc5bUlIQmhjbUZ0SUQwOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lHbG1JQ2dvTDE1QVFDOXRLUzUwWlhOMEtIQmhjbUZ0S1NCOGZDQW9LQzllU1c1a1pYZzZMMjBwTG5SbGMzUW9jR0Z5WVcwcEtTa2dlMXh1SUNBZ0lDQWdjbVYwZFhKdUlIQmhjbk5sVUdGMFkyZ29jR0Z5WVcwcFd6QmRPMXh1SUNBZ0lIMWNibHh1SUNBZ0lHbG1JQ2doWW1GelpTa2dlMXh1SUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZE5kWE4wSUhCeWIzWnBaR1VnWVNCaVlYTmxJSEpsWm1WeVpXNWpaU0J2Y2lCd1lYTnpJR2x1SUdFZ2NHRjBZMmduS1R0Y2JpQWdJQ0I5WEc0Z0lDQWdjbVYwZFhKdUlITjBjblZqZEhWeVpXUlFZWFJqYUNoMWJtUmxabWx1WldRc0lIVnVaR1ZtYVc1bFpDd2dZbUZ6WlN3Z2NHRnlZVzBwTzF4dUlDQjlYRzVjYmlBZ2NtVjBkWEp1SUhCaGNtRnRPMXh1ZlZ4dVhHNW1kVzVqZEdsdmJpQm1hV3hsVG1GdFpVTm9ZVzVuWldRb2NHRjBZMmdwSUh0Y2JpQWdjbVYwZFhKdUlIQmhkR05vTG01bGQwWnBiR1ZPWVcxbElDWW1JSEJoZEdOb0xtNWxkMFpwYkdWT1lXMWxJQ0U5UFNCd1lYUmphQzV2YkdSR2FXeGxUbUZ0WlR0Y2JuMWNibHh1Wm5WdVkzUnBiMjRnYzJWc1pXTjBSbWxsYkdRb2FXNWtaWGdzSUcxcGJtVXNJSFJvWldseWN5a2dlMXh1SUNCcFppQW9iV2x1WlNBOVBUMGdkR2hsYVhKektTQjdYRzRnSUNBZ2NtVjBkWEp1SUcxcGJtVTdYRzRnSUgwZ1pXeHpaU0I3WEc0Z0lDQWdhVzVrWlhndVkyOXVabXhwWTNRZ1BTQjBjblZsTzF4dUlDQWdJSEpsZEhWeWJpQjdiV2x1WlN3Z2RHaGxhWEp6ZlR0Y2JpQWdmVnh1ZlZ4dVhHNW1kVzVqZEdsdmJpQm9kVzVyUW1WbWIzSmxLSFJsYzNRc0lHTm9aV05yS1NCN1hHNGdJSEpsZEhWeWJpQjBaWE4wTG05c1pGTjBZWEowSUR3Z1kyaGxZMnN1YjJ4a1UzUmhjblJjYmlBZ0lDQW1KaUFvZEdWemRDNXZiR1JUZEdGeWRDQXJJSFJsYzNRdWIyeGtUR2x1WlhNcElEd2dZMmhsWTJzdWIyeGtVM1JoY25RN1hHNTlYRzVjYm1aMWJtTjBhVzl1SUdOc2IyNWxTSFZ1YXlob2RXNXJMQ0J2Wm1aelpYUXBJSHRjYmlBZ2NtVjBkWEp1SUh0Y2JpQWdJQ0J2YkdSVGRHRnlkRG9nYUhWdWF5NXZiR1JUZEdGeWRDd2diMnhrVEdsdVpYTTZJR2gxYm1zdWIyeGtUR2x1WlhNc1hHNGdJQ0FnYm1WM1UzUmhjblE2SUdoMWJtc3VibVYzVTNSaGNuUWdLeUJ2Wm1aelpYUXNJRzVsZDB4cGJtVnpPaUJvZFc1ckxtNWxkMHhwYm1WekxGeHVJQ0FnSUd4cGJtVnpPaUJvZFc1ckxteHBibVZ6WEc0Z0lIMDdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHMWxjbWRsVEdsdVpYTW9hSFZ1YXl3Z2JXbHVaVTltWm5ObGRDd2diV2x1WlV4cGJtVnpMQ0IwYUdWcGNrOW1abk5sZEN3Z2RHaGxhWEpNYVc1bGN5a2dlMXh1SUNBdkx5QlVhR2x6SUhkcGJHd2daMlZ1WlhKaGJHeDVJSEpsYzNWc2RDQnBiaUJoSUdOdmJtWnNhV04wWldRZ2FIVnVheXdnWW5WMElIUm9aWEpsSUdGeVpTQmpZWE5sY3lCM2FHVnlaU0IwYUdVZ1kyOXVkR1Y0ZEZ4dUlDQXZMeUJwY3lCMGFHVWdiMjVzZVNCdmRtVnliR0Z3SUhkb1pYSmxJSGRsSUdOaGJpQnpkV05qWlhOelpuVnNiSGtnYldWeVoyVWdkR2hsSUdOdmJuUmxiblFnYUdWeVpTNWNiaUFnYkdWMElHMXBibVVnUFNCN2IyWm1jMlYwT2lCdGFXNWxUMlptYzJWMExDQnNhVzVsY3pvZ2JXbHVaVXhwYm1WekxDQnBibVJsZURvZ01IMHNYRzRnSUNBZ0lDQjBhR1ZwY2lBOUlIdHZabVp6WlhRNklIUm9aV2x5VDJabWMyVjBMQ0JzYVc1bGN6b2dkR2hsYVhKTWFXNWxjeXdnYVc1a1pYZzZJREI5TzF4dVhHNGdJQzh2SUVoaGJtUnNaU0JoYm5rZ2JHVmhaR2x1WnlCamIyNTBaVzUwWEc0Z0lHbHVjMlZ5ZEV4bFlXUnBibWNvYUhWdWF5d2diV2x1WlN3Z2RHaGxhWElwTzF4dUlDQnBibk5sY25STVpXRmthVzVuS0doMWJtc3NJSFJvWldseUxDQnRhVzVsS1R0Y2JseHVJQ0F2THlCT2IzY2dhVzRnZEdobElHOTJaWEpzWVhBZ1kyOXVkR1Z1ZEM0Z1UyTmhiaUIwYUhKdmRXZG9JR0Z1WkNCelpXeGxZM1FnZEdobElHSmxjM1FnWTJoaGJtZGxjeUJtY205dElHVmhZMmd1WEc0Z0lIZG9hV3hsSUNodGFXNWxMbWx1WkdWNElEd2diV2x1WlM1c2FXNWxjeTVzWlc1bmRHZ2dKaVlnZEdobGFYSXVhVzVrWlhnZ1BDQjBhR1ZwY2k1c2FXNWxjeTVzWlc1bmRHZ3BJSHRjYmlBZ0lDQnNaWFFnYldsdVpVTjFjbkpsYm5RZ1BTQnRhVzVsTG14cGJtVnpXMjFwYm1VdWFXNWtaWGhkTEZ4dUlDQWdJQ0FnSUNCMGFHVnBja04xY25KbGJuUWdQU0IwYUdWcGNpNXNhVzVsYzF0MGFHVnBjaTVwYm1SbGVGMDdYRzVjYmlBZ0lDQnBaaUFvS0cxcGJtVkRkWEp5Wlc1MFd6QmRJRDA5UFNBbkxTY2dmSHdnYldsdVpVTjFjbkpsYm5SYk1GMGdQVDA5SUNjckp5bGNiaUFnSUNBZ0lDQWdKaVlnS0hSb1pXbHlRM1Z5Y21WdWRGc3dYU0E5UFQwZ0p5MG5JSHg4SUhSb1pXbHlRM1Z5Y21WdWRGc3dYU0E5UFQwZ0p5c25LU2tnZTF4dUlDQWdJQ0FnTHk4Z1FtOTBhQ0J0YjJScFptbGxaQ0F1TGk1Y2JpQWdJQ0FnSUcxMWRIVmhiRU5vWVc1blpTaG9kVzVyTENCdGFXNWxMQ0IwYUdWcGNpazdYRzRnSUNBZ2ZTQmxiSE5sSUdsbUlDaHRhVzVsUTNWeWNtVnVkRnN3WFNBOVBUMGdKeXNuSUNZbUlIUm9aV2x5UTNWeWNtVnVkRnN3WFNBOVBUMGdKeUFuS1NCN1hHNGdJQ0FnSUNBdkx5Qk5hVzVsSUdsdWMyVnlkR1ZrWEc0Z0lDQWdJQ0JvZFc1ckxteHBibVZ6TG5CMWMyZ29MaTR1SUdOdmJHeGxZM1JEYUdGdVoyVW9iV2x1WlNrcE8xeHVJQ0FnSUgwZ1pXeHpaU0JwWmlBb2RHaGxhWEpEZFhKeVpXNTBXekJkSUQwOVBTQW5LeWNnSmlZZ2JXbHVaVU4xY25KbGJuUmJNRjBnUFQwOUlDY2dKeWtnZTF4dUlDQWdJQ0FnTHk4Z1ZHaGxhWEp6SUdsdWMyVnlkR1ZrWEc0Z0lDQWdJQ0JvZFc1ckxteHBibVZ6TG5CMWMyZ29MaTR1SUdOdmJHeGxZM1JEYUdGdVoyVW9kR2hsYVhJcEtUdGNiaUFnSUNCOUlHVnNjMlVnYVdZZ0tHMXBibVZEZFhKeVpXNTBXekJkSUQwOVBTQW5MU2NnSmlZZ2RHaGxhWEpEZFhKeVpXNTBXekJkSUQwOVBTQW5JQ2NwSUh0Y2JpQWdJQ0FnSUM4dklFMXBibVVnY21WdGIzWmxaQ0J2Y2lCbFpHbDBaV1JjYmlBZ0lDQWdJSEpsYlc5MllXd29hSFZ1YXl3Z2JXbHVaU3dnZEdobGFYSXBPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9kR2hsYVhKRGRYSnlaVzUwV3pCZElEMDlQU0FuTFNjZ0ppWWdiV2x1WlVOMWNuSmxiblJiTUYwZ1BUMDlJQ2NnSnlrZ2UxeHVJQ0FnSUNBZ0x5OGdWR2hsYVhJZ2NtVnRiM1psWkNCdmNpQmxaR2wwWldSY2JpQWdJQ0FnSUhKbGJXOTJZV3dvYUhWdWF5d2dkR2hsYVhJc0lHMXBibVVzSUhSeWRXVXBPMXh1SUNBZ0lIMGdaV3h6WlNCcFppQW9iV2x1WlVOMWNuSmxiblFnUFQwOUlIUm9aV2x5UTNWeWNtVnVkQ2tnZTF4dUlDQWdJQ0FnTHk4Z1EyOXVkR1Y0ZENCcFpHVnVkR2wwZVZ4dUlDQWdJQ0FnYUhWdWF5NXNhVzVsY3k1d2RYTm9LRzFwYm1WRGRYSnlaVzUwS1R0Y2JpQWdJQ0FnSUcxcGJtVXVhVzVrWlhnckt6dGNiaUFnSUNBZ0lIUm9aV2x5TG1sdVpHVjRLeXM3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lDOHZJRU52Ym5SbGVIUWdiV2x6YldGMFkyaGNiaUFnSUNBZ0lHTnZibVpzYVdOMEtHaDFibXNzSUdOdmJHeGxZM1JEYUdGdVoyVW9iV2x1WlNrc0lHTnZiR3hsWTNSRGFHRnVaMlVvZEdobGFYSXBLVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0F2THlCT2IzY2djSFZ6YUNCaGJubDBhR2x1WnlCMGFHRjBJRzFoZVNCaVpTQnlaVzFoYVc1cGJtZGNiaUFnYVc1elpYSjBWSEpoYVd4cGJtY29hSFZ1YXl3Z2JXbHVaU2s3WEc0Z0lHbHVjMlZ5ZEZSeVlXbHNhVzVuS0doMWJtc3NJSFJvWldseUtUdGNibHh1SUNCallXeGpUR2x1WlVOdmRXNTBLR2gxYm1zcE8xeHVmVnh1WEc1bWRXNWpkR2x2YmlCdGRYUjFZV3hEYUdGdVoyVW9hSFZ1YXl3Z2JXbHVaU3dnZEdobGFYSXBJSHRjYmlBZ2JHVjBJRzE1UTJoaGJtZGxjeUE5SUdOdmJHeGxZM1JEYUdGdVoyVW9iV2x1WlNrc1hHNGdJQ0FnSUNCMGFHVnBja05vWVc1blpYTWdQU0JqYjJ4c1pXTjBRMmhoYm1kbEtIUm9aV2x5S1R0Y2JseHVJQ0JwWmlBb1lXeHNVbVZ0YjNabGN5aHRlVU5vWVc1blpYTXBJQ1ltSUdGc2JGSmxiVzkyWlhNb2RHaGxhWEpEYUdGdVoyVnpLU2tnZTF4dUlDQWdJQzh2SUZOd1pXTnBZV3dnWTJGelpTQm1iM0lnY21WdGIzWmxJR05vWVc1blpYTWdkR2hoZENCaGNtVWdjM1Z3WlhKelpYUnpJRzltSUc5dVpTQmhibTkwYUdWeVhHNGdJQ0FnYVdZZ0tHRnljbUY1VTNSaGNuUnpWMmwwYUNodGVVTm9ZVzVuWlhNc0lIUm9aV2x5UTJoaGJtZGxjeWxjYmlBZ0lDQWdJQ0FnSmlZZ2MydHBjRkpsYlc5MlpWTjFjR1Z5YzJWMEtIUm9aV2x5TENCdGVVTm9ZVzVuWlhNc0lHMTVRMmhoYm1kbGN5NXNaVzVuZEdnZ0xTQjBhR1ZwY2tOb1lXNW5aWE11YkdWdVozUm9LU2tnZTF4dUlDQWdJQ0FnYUhWdWF5NXNhVzVsY3k1d2RYTm9LQzR1TGlCdGVVTm9ZVzVuWlhNcE8xeHVJQ0FnSUNBZ2NtVjBkWEp1TzF4dUlDQWdJSDBnWld4elpTQnBaaUFvWVhKeVlYbFRkR0Z5ZEhOWGFYUm9LSFJvWldseVEyaGhibWRsY3l3Z2JYbERhR0Z1WjJWektWeHVJQ0FnSUNBZ0lDQW1KaUJ6YTJsd1VtVnRiM1psVTNWd1pYSnpaWFFvYldsdVpTd2dkR2hsYVhKRGFHRnVaMlZ6TENCMGFHVnBja05vWVc1blpYTXViR1Z1WjNSb0lDMGdiWGxEYUdGdVoyVnpMbXhsYm1kMGFDa3BJSHRjYmlBZ0lDQWdJR2gxYm1zdWJHbHVaWE11Y0hWemFDZ3VMaTRnZEdobGFYSkRhR0Z1WjJWektUdGNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc0Z0lIMGdaV3h6WlNCcFppQW9ZWEp5WVhsRmNYVmhiQ2h0ZVVOb1lXNW5aWE1zSUhSb1pXbHlRMmhoYm1kbGN5a3BJSHRjYmlBZ0lDQm9kVzVyTG14cGJtVnpMbkIxYzJnb0xpNHVJRzE1UTJoaGJtZGxjeWs3WEc0Z0lDQWdjbVYwZFhKdU8xeHVJQ0I5WEc1Y2JpQWdZMjl1Wm14cFkzUW9hSFZ1YXl3Z2JYbERhR0Z1WjJWekxDQjBhR1ZwY2tOb1lXNW5aWE1wTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJ5WlcxdmRtRnNLR2gxYm1zc0lHMXBibVVzSUhSb1pXbHlMQ0J6ZDJGd0tTQjdYRzRnSUd4bGRDQnRlVU5vWVc1blpYTWdQU0JqYjJ4c1pXTjBRMmhoYm1kbEtHMXBibVVwTEZ4dUlDQWdJQ0FnZEdobGFYSkRhR0Z1WjJWeklEMGdZMjlzYkdWamRFTnZiblJsZUhRb2RHaGxhWElzSUcxNVEyaGhibWRsY3lrN1hHNGdJR2xtSUNoMGFHVnBja05vWVc1blpYTXViV1Z5WjJWa0tTQjdYRzRnSUNBZ2FIVnVheTVzYVc1bGN5NXdkWE5vS0M0dUxpQjBhR1ZwY2tOb1lXNW5aWE11YldWeVoyVmtLVHRjYmlBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0JqYjI1bWJHbGpkQ2hvZFc1ckxDQnpkMkZ3SUQ4Z2RHaGxhWEpEYUdGdVoyVnpJRG9nYlhsRGFHRnVaMlZ6TENCemQyRndJRDhnYlhsRGFHRnVaMlZ6SURvZ2RHaGxhWEpEYUdGdVoyVnpLVHRjYmlBZ2ZWeHVmVnh1WEc1bWRXNWpkR2x2YmlCamIyNW1iR2xqZENob2RXNXJMQ0J0YVc1bExDQjBhR1ZwY2lrZ2UxeHVJQ0JvZFc1ckxtTnZibVpzYVdOMElEMGdkSEoxWlR0Y2JpQWdhSFZ1YXk1c2FXNWxjeTV3ZFhOb0tIdGNiaUFnSUNCamIyNW1iR2xqZERvZ2RISjFaU3hjYmlBZ0lDQnRhVzVsT2lCdGFXNWxMRnh1SUNBZ0lIUm9aV2x5Y3pvZ2RHaGxhWEpjYmlBZ2ZTazdYRzU5WEc1Y2JtWjFibU4wYVc5dUlHbHVjMlZ5ZEV4bFlXUnBibWNvYUhWdWF5d2dhVzV6WlhKMExDQjBhR1ZwY2lrZ2UxeHVJQ0IzYUdsc1pTQW9hVzV6WlhKMExtOW1abk5sZENBOElIUm9aV2x5TG05bVpuTmxkQ0FtSmlCcGJuTmxjblF1YVc1a1pYZ2dQQ0JwYm5ObGNuUXViR2x1WlhNdWJHVnVaM1JvS1NCN1hHNGdJQ0FnYkdWMElHeHBibVVnUFNCcGJuTmxjblF1YkdsdVpYTmJhVzV6WlhKMExtbHVaR1Y0S3l0ZE8xeHVJQ0FnSUdoMWJtc3ViR2x1WlhNdWNIVnphQ2hzYVc1bEtUdGNiaUFnSUNCcGJuTmxjblF1YjJabWMyVjBLeXM3WEc0Z0lIMWNibjFjYm1aMWJtTjBhVzl1SUdsdWMyVnlkRlJ5WVdsc2FXNW5LR2gxYm1zc0lHbHVjMlZ5ZENrZ2UxeHVJQ0IzYUdsc1pTQW9hVzV6WlhKMExtbHVaR1Y0SUR3Z2FXNXpaWEowTG14cGJtVnpMbXhsYm1kMGFDa2dlMXh1SUNBZ0lHeGxkQ0JzYVc1bElEMGdhVzV6WlhKMExteHBibVZ6VzJsdWMyVnlkQzVwYm1SbGVDc3JYVHRjYmlBZ0lDQm9kVzVyTG14cGJtVnpMbkIxYzJnb2JHbHVaU2s3WEc0Z0lIMWNibjFjYmx4dVpuVnVZM1JwYjI0Z1kyOXNiR1ZqZEVOb1lXNW5aU2h6ZEdGMFpTa2dlMXh1SUNCc1pYUWdjbVYwSUQwZ1cxMHNYRzRnSUNBZ0lDQnZjR1Z5WVhScGIyNGdQU0J6ZEdGMFpTNXNhVzVsYzF0emRHRjBaUzVwYm1SbGVGMWJNRjA3WEc0Z0lIZG9hV3hsSUNoemRHRjBaUzVwYm1SbGVDQThJSE4wWVhSbExteHBibVZ6TG14bGJtZDBhQ2tnZTF4dUlDQWdJR3hsZENCc2FXNWxJRDBnYzNSaGRHVXViR2x1WlhOYmMzUmhkR1V1YVc1a1pYaGRPMXh1WEc0Z0lDQWdMeThnUjNKdmRYQWdZV1JrYVhScGIyNXpJSFJvWVhRZ1lYSmxJR2x0YldWa2FXRjBaV3g1SUdGbWRHVnlJSE4xWW5SeVlXTjBhVzl1Y3lCaGJtUWdkSEpsWVhRZ2RHaGxiU0JoY3lCdmJtVWdYQ0poZEc5dGFXTmNJaUJ0YjJScFpua2dZMmhoYm1kbExseHVJQ0FnSUdsbUlDaHZjR1Z5WVhScGIyNGdQVDA5SUNjdEp5QW1KaUJzYVc1bFd6QmRJRDA5UFNBbkt5Y3BJSHRjYmlBZ0lDQWdJRzl3WlhKaGRHbHZiaUE5SUNjckp6dGNiaUFnSUNCOVhHNWNiaUFnSUNCcFppQW9iM0JsY21GMGFXOXVJRDA5UFNCc2FXNWxXekJkS1NCN1hHNGdJQ0FnSUNCeVpYUXVjSFZ6YUNoc2FXNWxLVHRjYmlBZ0lDQWdJSE4wWVhSbExtbHVaR1Y0S3lzN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR0p5WldGck8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCeVpYUTdYRzU5WEc1bWRXNWpkR2x2YmlCamIyeHNaV04wUTI5dWRHVjRkQ2h6ZEdGMFpTd2diV0YwWTJoRGFHRnVaMlZ6S1NCN1hHNGdJR3hsZENCamFHRnVaMlZ6SUQwZ1cxMHNYRzRnSUNBZ0lDQnRaWEpuWldRZ1BTQmJYU3hjYmlBZ0lDQWdJRzFoZEdOb1NXNWtaWGdnUFNBd0xGeHVJQ0FnSUNBZ1kyOXVkR1Y0ZEVOb1lXNW5aWE1nUFNCbVlXeHpaU3hjYmlBZ0lDQWdJR052Ym1ac2FXTjBaV1FnUFNCbVlXeHpaVHRjYmlBZ2QyaHBiR1VnS0cxaGRHTm9TVzVrWlhnZ1BDQnRZWFJqYUVOb1lXNW5aWE11YkdWdVozUm9YRzRnSUNBZ0lDQWdJQ1ltSUhOMFlYUmxMbWx1WkdWNElEd2djM1JoZEdVdWJHbHVaWE11YkdWdVozUm9LU0I3WEc0Z0lDQWdiR1YwSUdOb1lXNW5aU0E5SUhOMFlYUmxMbXhwYm1WelczTjBZWFJsTG1sdVpHVjRYU3hjYmlBZ0lDQWdJQ0FnYldGMFkyZ2dQU0J0WVhSamFFTm9ZVzVuWlhOYmJXRjBZMmhKYm1SbGVGMDdYRzVjYmlBZ0lDQXZMeUJQYm1ObElIZGxKM1psSUdocGRDQnZkWElnWVdSa0xDQjBhR1Z1SUhkbElHRnlaU0JrYjI1bFhHNGdJQ0FnYVdZZ0tHMWhkR05vV3pCZElEMDlQU0FuS3ljcElIdGNiaUFnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJSDFjYmx4dUlDQWdJR052Ym5SbGVIUkRhR0Z1WjJWeklEMGdZMjl1ZEdWNGRFTm9ZVzVuWlhNZ2ZId2dZMmhoYm1kbFd6QmRJQ0U5UFNBbklDYzdYRzVjYmlBZ0lDQnRaWEpuWldRdWNIVnphQ2h0WVhSamFDazdYRzRnSUNBZ2JXRjBZMmhKYm1SbGVDc3JPMXh1WEc0Z0lDQWdMeThnUTI5dWMzVnRaU0JoYm5rZ1lXUmthWFJwYjI1eklHbHVJSFJvWlNCdmRHaGxjaUJpYkc5amF5QmhjeUJoSUdOdmJtWnNhV04wSUhSdklHRjBkR1Z0Y0hSY2JpQWdJQ0F2THlCMGJ5QndkV3hzSUdsdUlIUm9aU0J5WlcxaGFXNXBibWNnWTI5dWRHVjRkQ0JoWm5SbGNpQjBhR2x6WEc0Z0lDQWdhV1lnS0dOb1lXNW5aVnN3WFNBOVBUMGdKeXNuS1NCN1hHNGdJQ0FnSUNCamIyNW1iR2xqZEdWa0lEMGdkSEoxWlR0Y2JseHVJQ0FnSUNBZ2QyaHBiR1VnS0dOb1lXNW5aVnN3WFNBOVBUMGdKeXNuS1NCN1hHNGdJQ0FnSUNBZ0lHTm9ZVzVuWlhNdWNIVnphQ2hqYUdGdVoyVXBPMXh1SUNBZ0lDQWdJQ0JqYUdGdVoyVWdQU0J6ZEdGMFpTNXNhVzVsYzFzckszTjBZWFJsTG1sdVpHVjRYVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQjlYRzVjYmlBZ0lDQnBaaUFvYldGMFkyZ3VjM1ZpYzNSeUtERXBJRDA5UFNCamFHRnVaMlV1YzNWaWMzUnlLREVwS1NCN1hHNGdJQ0FnSUNCamFHRnVaMlZ6TG5CMWMyZ29ZMmhoYm1kbEtUdGNiaUFnSUNBZ0lITjBZWFJsTG1sdVpHVjRLeXM3WEc0Z0lDQWdmU0JsYkhObElIdGNiaUFnSUNBZ0lHTnZibVpzYVdOMFpXUWdQU0IwY25WbE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lHbG1JQ2dvYldGMFkyaERhR0Z1WjJWelcyMWhkR05vU1c1a1pYaGRJSHg4SUNjbktWc3dYU0E5UFQwZ0p5c25YRzRnSUNBZ0lDQW1KaUJqYjI1MFpYaDBRMmhoYm1kbGN5a2dlMXh1SUNBZ0lHTnZibVpzYVdOMFpXUWdQU0IwY25WbE8xeHVJQ0I5WEc1Y2JpQWdhV1lnS0dOdmJtWnNhV04wWldRcElIdGNiaUFnSUNCeVpYUjFjbTRnWTJoaGJtZGxjenRjYmlBZ2ZWeHVYRzRnSUhkb2FXeGxJQ2h0WVhSamFFbHVaR1Y0SUR3Z2JXRjBZMmhEYUdGdVoyVnpMbXhsYm1kMGFDa2dlMXh1SUNBZ0lHMWxjbWRsWkM1d2RYTm9LRzFoZEdOb1EyaGhibWRsYzF0dFlYUmphRWx1WkdWNEt5dGRLVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUI3WEc0Z0lDQWdiV1Z5WjJWa0xGeHVJQ0FnSUdOb1lXNW5aWE5jYmlBZ2ZUdGNibjFjYmx4dVpuVnVZM1JwYjI0Z1lXeHNVbVZ0YjNabGN5aGphR0Z1WjJWektTQjdYRzRnSUhKbGRIVnliaUJqYUdGdVoyVnpMbkpsWkhWalpTaG1kVzVqZEdsdmJpaHdjbVYyTENCamFHRnVaMlVwSUh0Y2JpQWdJQ0J5WlhSMWNtNGdjSEpsZGlBbUppQmphR0Z1WjJWYk1GMGdQVDA5SUNjdEp6dGNiaUFnZlN3Z2RISjFaU2s3WEc1OVhHNW1kVzVqZEdsdmJpQnphMmx3VW1WdGIzWmxVM1Z3WlhKelpYUW9jM1JoZEdVc0lISmxiVzkyWlVOb1lXNW5aWE1zSUdSbGJIUmhLU0I3WEc0Z0lHWnZjaUFvYkdWMElHa2dQU0F3T3lCcElEd2daR1ZzZEdFN0lHa3JLeWtnZTF4dUlDQWdJR3hsZENCamFHRnVaMlZEYjI1MFpXNTBJRDBnY21WdGIzWmxRMmhoYm1kbGMxdHlaVzF2ZG1WRGFHRnVaMlZ6TG14bGJtZDBhQ0F0SUdSbGJIUmhJQ3NnYVYwdWMzVmljM1J5S0RFcE8xeHVJQ0FnSUdsbUlDaHpkR0YwWlM1c2FXNWxjMXR6ZEdGMFpTNXBibVJsZUNBcklHbGRJQ0U5UFNBbklDY2dLeUJqYUdGdVoyVkRiMjUwWlc1MEtTQjdYRzRnSUNBZ0lDQnlaWFIxY200Z1ptRnNjMlU3WEc0Z0lDQWdmVnh1SUNCOVhHNWNiaUFnYzNSaGRHVXVhVzVrWlhnZ0t6MGdaR1ZzZEdFN1hHNGdJSEpsZEhWeWJpQjBjblZsTzF4dWZWeHVYRzVtZFc1amRHbHZiaUJqWVd4alQyeGtUbVYzVEdsdVpVTnZkVzUwS0d4cGJtVnpLU0I3WEc0Z0lHeGxkQ0J2YkdSTWFXNWxjeUE5SURBN1hHNGdJR3hsZENCdVpYZE1hVzVsY3lBOUlEQTdYRzVjYmlBZ2JHbHVaWE11Wm05eVJXRmphQ2htZFc1amRHbHZiaWhzYVc1bEtTQjdYRzRnSUNBZ2FXWWdLSFI1Y0dWdlppQnNhVzVsSUNFOVBTQW5jM1J5YVc1bkp5a2dlMXh1SUNBZ0lDQWdiR1YwSUcxNVEyOTFiblFnUFNCallXeGpUMnhrVG1WM1RHbHVaVU52ZFc1MEtHeHBibVV1YldsdVpTazdYRzRnSUNBZ0lDQnNaWFFnZEdobGFYSkRiM1Z1ZENBOUlHTmhiR05QYkdST1pYZE1hVzVsUTI5MWJuUW9iR2x1WlM1MGFHVnBjbk1wTzF4dVhHNGdJQ0FnSUNCcFppQW9iMnhrVEdsdVpYTWdJVDA5SUhWdVpHVm1hVzVsWkNrZ2UxeHVJQ0FnSUNBZ0lDQnBaaUFvYlhsRGIzVnVkQzV2YkdSTWFXNWxjeUE5UFQwZ2RHaGxhWEpEYjNWdWRDNXZiR1JNYVc1bGN5a2dlMXh1SUNBZ0lDQWdJQ0FnSUc5c1pFeHBibVZ6SUNzOUlHMTVRMjkxYm5RdWIyeGtUR2x1WlhNN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCN1hHNGdJQ0FnSUNBZ0lDQWdiMnhrVEdsdVpYTWdQU0IxYm1SbFptbHVaV1E3WEc0Z0lDQWdJQ0FnSUgxY2JpQWdJQ0FnSUgxY2JseHVJQ0FnSUNBZ2FXWWdLRzVsZDB4cGJtVnpJQ0U5UFNCMWJtUmxabWx1WldRcElIdGNiaUFnSUNBZ0lDQWdhV1lnS0cxNVEyOTFiblF1Ym1WM1RHbHVaWE1nUFQwOUlIUm9aV2x5UTI5MWJuUXVibVYzVEdsdVpYTXBJSHRjYmlBZ0lDQWdJQ0FnSUNCdVpYZE1hVzVsY3lBclBTQnRlVU52ZFc1MExtNWxkMHhwYm1Wek8xeHVJQ0FnSUNBZ0lDQjlJR1ZzYzJVZ2UxeHVJQ0FnSUNBZ0lDQWdJRzVsZDB4cGJtVnpJRDBnZFc1a1pXWnBibVZrTzF4dUlDQWdJQ0FnSUNCOVhHNGdJQ0FnSUNCOVhHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJR2xtSUNodVpYZE1hVzVsY3lBaFBUMGdkVzVrWldacGJtVmtJQ1ltSUNoc2FXNWxXekJkSUQwOVBTQW5LeWNnZkh3Z2JHbHVaVnN3WFNBOVBUMGdKeUFuS1NrZ2UxeHVJQ0FnSUNBZ0lDQnVaWGRNYVc1bGN5c3JPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdhV1lnS0c5c1pFeHBibVZ6SUNFOVBTQjFibVJsWm1sdVpXUWdKaVlnS0d4cGJtVmJNRjBnUFQwOUlDY3RKeUI4ZkNCc2FXNWxXekJkSUQwOVBTQW5JQ2NwS1NCN1hHNGdJQ0FnSUNBZ0lHOXNaRXhwYm1Wekt5czdYRzRnSUNBZ0lDQjlYRzRnSUNBZ2ZWeHVJQ0I5S1R0Y2JseHVJQ0J5WlhSMWNtNGdlMjlzWkV4cGJtVnpMQ0J1WlhkTWFXNWxjMzA3WEc1OVhHNGlYWDA9XG4iLCIvKmlzdGFuYnVsIGlnbm9yZSBzdGFydCovXG5cInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucGFyc2VQYXRjaCA9IHBhcnNlUGF0Y2g7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5mdW5jdGlvbiBwYXJzZVBhdGNoKHVuaURpZmYpIHtcbiAgLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuICB2YXJcbiAgLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbiAgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gIHZhciBkaWZmc3RyID0gdW5pRGlmZi5zcGxpdCgvXFxyXFxufFtcXG5cXHZcXGZcXHJcXHg4NV0vKSxcbiAgICAgIGRlbGltaXRlcnMgPSB1bmlEaWZmLm1hdGNoKC9cXHJcXG58W1xcblxcdlxcZlxcclxceDg1XS9nKSB8fCBbXSxcbiAgICAgIGxpc3QgPSBbXSxcbiAgICAgIGkgPSAwO1xuXG4gIGZ1bmN0aW9uIHBhcnNlSW5kZXgoKSB7XG4gICAgdmFyIGluZGV4ID0ge307XG4gICAgbGlzdC5wdXNoKGluZGV4KTsgLy8gUGFyc2UgZGlmZiBtZXRhZGF0YVxuXG4gICAgd2hpbGUgKGkgPCBkaWZmc3RyLmxlbmd0aCkge1xuICAgICAgdmFyIGxpbmUgPSBkaWZmc3RyW2ldOyAvLyBGaWxlIGhlYWRlciBmb3VuZCwgZW5kIHBhcnNpbmcgZGlmZiBtZXRhZGF0YVxuXG4gICAgICBpZiAoL14oXFwtXFwtXFwtfFxcK1xcK1xcK3xAQClcXHMvLnRlc3QobGluZSkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IC8vIERpZmYgaW5kZXhcblxuXG4gICAgICB2YXIgaGVhZGVyID0gL14oPzpJbmRleDp8ZGlmZig/OiAtciBcXHcrKSspXFxzKyguKz8pXFxzKiQvLmV4ZWMobGluZSk7XG5cbiAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgaW5kZXguaW5kZXggPSBoZWFkZXJbMV07XG4gICAgICB9XG5cbiAgICAgIGkrKztcbiAgICB9IC8vIFBhcnNlIGZpbGUgaGVhZGVycyBpZiB0aGV5IGFyZSBkZWZpbmVkLiBVbmlmaWVkIGRpZmYgcmVxdWlyZXMgdGhlbSwgYnV0XG4gICAgLy8gdGhlcmUncyBubyB0ZWNobmljYWwgaXNzdWVzIHRvIGhhdmUgYW4gaXNvbGF0ZWQgaHVuayB3aXRob3V0IGZpbGUgaGVhZGVyXG5cblxuICAgIHBhcnNlRmlsZUhlYWRlcihpbmRleCk7XG4gICAgcGFyc2VGaWxlSGVhZGVyKGluZGV4KTsgLy8gUGFyc2UgaHVua3NcblxuICAgIGluZGV4Lmh1bmtzID0gW107XG5cbiAgICB3aGlsZSAoaSA8IGRpZmZzdHIubGVuZ3RoKSB7XG4gICAgICB2YXIgX2xpbmUgPSBkaWZmc3RyW2ldO1xuXG4gICAgICBpZiAoL14oSW5kZXg6fGRpZmZ8XFwtXFwtXFwtfFxcK1xcK1xcKylcXHMvLnRlc3QoX2xpbmUpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIGlmICgvXkBALy50ZXN0KF9saW5lKSkge1xuICAgICAgICBpbmRleC5odW5rcy5wdXNoKHBhcnNlSHVuaygpKTtcbiAgICAgIH0gZWxzZSBpZiAoX2xpbmUgJiYgb3B0aW9ucy5zdHJpY3QpIHtcbiAgICAgICAgLy8gSWdub3JlIHVuZXhwZWN0ZWQgY29udGVudCB1bmxlc3MgaW4gc3RyaWN0IG1vZGVcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGxpbmUgJyArIChpICsgMSkgKyAnICcgKyBKU09OLnN0cmluZ2lmeShfbGluZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaSsrO1xuICAgICAgfVxuICAgIH1cbiAgfSAvLyBQYXJzZXMgdGhlIC0tLSBhbmQgKysrIGhlYWRlcnMsIGlmIG5vbmUgYXJlIGZvdW5kLCBubyBsaW5lc1xuICAvLyBhcmUgY29uc3VtZWQuXG5cblxuICBmdW5jdGlvbiBwYXJzZUZpbGVIZWFkZXIoaW5kZXgpIHtcbiAgICB2YXIgZmlsZUhlYWRlciA9IC9eKC0tLXxcXCtcXCtcXCspXFxzKyguKikkLy5leGVjKGRpZmZzdHJbaV0pO1xuXG4gICAgaWYgKGZpbGVIZWFkZXIpIHtcbiAgICAgIHZhciBrZXlQcmVmaXggPSBmaWxlSGVhZGVyWzFdID09PSAnLS0tJyA/ICdvbGQnIDogJ25ldyc7XG4gICAgICB2YXIgZGF0YSA9IGZpbGVIZWFkZXJbMl0uc3BsaXQoJ1xcdCcsIDIpO1xuICAgICAgdmFyIGZpbGVOYW1lID0gZGF0YVswXS5yZXBsYWNlKC9cXFxcXFxcXC9nLCAnXFxcXCcpO1xuXG4gICAgICBpZiAoL15cIi4qXCIkLy50ZXN0KGZpbGVOYW1lKSkge1xuICAgICAgICBmaWxlTmFtZSA9IGZpbGVOYW1lLnN1YnN0cigxLCBmaWxlTmFtZS5sZW5ndGggLSAyKTtcbiAgICAgIH1cblxuICAgICAgaW5kZXhba2V5UHJlZml4ICsgJ0ZpbGVOYW1lJ10gPSBmaWxlTmFtZTtcbiAgICAgIGluZGV4W2tleVByZWZpeCArICdIZWFkZXInXSA9IChkYXRhWzFdIHx8ICcnKS50cmltKCk7XG4gICAgICBpKys7XG4gICAgfVxuICB9IC8vIFBhcnNlcyBhIGh1bmtcbiAgLy8gVGhpcyBhc3N1bWVzIHRoYXQgd2UgYXJlIGF0IHRoZSBzdGFydCBvZiBhIGh1bmsuXG5cblxuICBmdW5jdGlvbiBwYXJzZUh1bmsoKSB7XG4gICAgdmFyIGNodW5rSGVhZGVySW5kZXggPSBpLFxuICAgICAgICBjaHVua0hlYWRlckxpbmUgPSBkaWZmc3RyW2krK10sXG4gICAgICAgIGNodW5rSGVhZGVyID0gY2h1bmtIZWFkZXJMaW5lLnNwbGl0KC9AQCAtKFxcZCspKD86LChcXGQrKSk/IFxcKyhcXGQrKSg/OiwoXFxkKykpPyBAQC8pO1xuICAgIHZhciBodW5rID0ge1xuICAgICAgb2xkU3RhcnQ6ICtjaHVua0hlYWRlclsxXSxcbiAgICAgIG9sZExpbmVzOiB0eXBlb2YgY2h1bmtIZWFkZXJbMl0gPT09ICd1bmRlZmluZWQnID8gMSA6ICtjaHVua0hlYWRlclsyXSxcbiAgICAgIG5ld1N0YXJ0OiArY2h1bmtIZWFkZXJbM10sXG4gICAgICBuZXdMaW5lczogdHlwZW9mIGNodW5rSGVhZGVyWzRdID09PSAndW5kZWZpbmVkJyA/IDEgOiArY2h1bmtIZWFkZXJbNF0sXG4gICAgICBsaW5lczogW10sXG4gICAgICBsaW5lZGVsaW1pdGVyczogW11cbiAgICB9OyAvLyBVbmlmaWVkIERpZmYgRm9ybWF0IHF1aXJrOiBJZiB0aGUgY2h1bmsgc2l6ZSBpcyAwLFxuICAgIC8vIHRoZSBmaXJzdCBudW1iZXIgaXMgb25lIGxvd2VyIHRoYW4gb25lIHdvdWxkIGV4cGVjdC5cbiAgICAvLyBodHRwczovL3d3dy5hcnRpbWEuY29tL3dlYmxvZ3Mvdmlld3Bvc3QuanNwP3RocmVhZD0xNjQyOTNcblxuICAgIGlmIChodW5rLm9sZExpbmVzID09PSAwKSB7XG4gICAgICBodW5rLm9sZFN0YXJ0ICs9IDE7XG4gICAgfVxuXG4gICAgaWYgKGh1bmsubmV3TGluZXMgPT09IDApIHtcbiAgICAgIGh1bmsubmV3U3RhcnQgKz0gMTtcbiAgICB9XG5cbiAgICB2YXIgYWRkQ291bnQgPSAwLFxuICAgICAgICByZW1vdmVDb3VudCA9IDA7XG5cbiAgICBmb3IgKDsgaSA8IGRpZmZzdHIubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIExpbmVzIHN0YXJ0aW5nIHdpdGggJy0tLScgY291bGQgYmUgbWlzdGFrZW4gZm9yIHRoZSBcInJlbW92ZSBsaW5lXCIgb3BlcmF0aW9uXG4gICAgICAvLyBCdXQgdGhleSBjb3VsZCBiZSB0aGUgaGVhZGVyIGZvciB0aGUgbmV4dCBmaWxlLiBUaGVyZWZvcmUgcHJ1bmUgc3VjaCBjYXNlcyBvdXQuXG4gICAgICBpZiAoZGlmZnN0cltpXS5pbmRleE9mKCctLS0gJykgPT09IDAgJiYgaSArIDIgPCBkaWZmc3RyLmxlbmd0aCAmJiBkaWZmc3RyW2kgKyAxXS5pbmRleE9mKCcrKysgJykgPT09IDAgJiYgZGlmZnN0cltpICsgMl0uaW5kZXhPZignQEAnKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgdmFyIG9wZXJhdGlvbiA9IGRpZmZzdHJbaV0ubGVuZ3RoID09IDAgJiYgaSAhPSBkaWZmc3RyLmxlbmd0aCAtIDEgPyAnICcgOiBkaWZmc3RyW2ldWzBdO1xuXG4gICAgICBpZiAob3BlcmF0aW9uID09PSAnKycgfHwgb3BlcmF0aW9uID09PSAnLScgfHwgb3BlcmF0aW9uID09PSAnICcgfHwgb3BlcmF0aW9uID09PSAnXFxcXCcpIHtcbiAgICAgICAgaHVuay5saW5lcy5wdXNoKGRpZmZzdHJbaV0pO1xuICAgICAgICBodW5rLmxpbmVkZWxpbWl0ZXJzLnB1c2goZGVsaW1pdGVyc1tpXSB8fCAnXFxuJyk7XG5cbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgYWRkQ291bnQrKztcbiAgICAgICAgfSBlbHNlIGlmIChvcGVyYXRpb24gPT09ICctJykge1xuICAgICAgICAgIHJlbW92ZUNvdW50Kys7XG4gICAgICAgIH0gZWxzZSBpZiAob3BlcmF0aW9uID09PSAnICcpIHtcbiAgICAgICAgICBhZGRDb3VudCsrO1xuICAgICAgICAgIHJlbW92ZUNvdW50Kys7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0gLy8gSGFuZGxlIHRoZSBlbXB0eSBibG9jayBjb3VudCBjYXNlXG5cblxuICAgIGlmICghYWRkQ291bnQgJiYgaHVuay5uZXdMaW5lcyA9PT0gMSkge1xuICAgICAgaHVuay5uZXdMaW5lcyA9IDA7XG4gICAgfVxuXG4gICAgaWYgKCFyZW1vdmVDb3VudCAmJiBodW5rLm9sZExpbmVzID09PSAxKSB7XG4gICAgICBodW5rLm9sZExpbmVzID0gMDtcbiAgICB9IC8vIFBlcmZvcm0gb3B0aW9uYWwgc2FuaXR5IGNoZWNraW5nXG5cblxuICAgIGlmIChvcHRpb25zLnN0cmljdCkge1xuICAgICAgaWYgKGFkZENvdW50ICE9PSBodW5rLm5ld0xpbmVzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQWRkZWQgbGluZSBjb3VudCBkaWQgbm90IG1hdGNoIGZvciBodW5rIGF0IGxpbmUgJyArIChjaHVua0hlYWRlckluZGV4ICsgMSkpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVtb3ZlQ291bnQgIT09IGh1bmsub2xkTGluZXMpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZW1vdmVkIGxpbmUgY291bnQgZGlkIG5vdCBtYXRjaCBmb3IgaHVuayBhdCBsaW5lICcgKyAoY2h1bmtIZWFkZXJJbmRleCArIDEpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaHVuaztcbiAgfVxuXG4gIHdoaWxlIChpIDwgZGlmZnN0ci5sZW5ndGgpIHtcbiAgICBwYXJzZUluZGV4KCk7XG4gIH1cblxuICByZXR1cm4gbGlzdDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYklpNHVMeTR1TDNOeVl5OXdZWFJqYUM5d1lYSnpaUzVxY3lKZExDSnVZVzFsY3lJNld5SndZWEp6WlZCaGRHTm9JaXdpZFc1cFJHbG1aaUlzSW05d2RHbHZibk1pTENKa2FXWm1jM1J5SWl3aWMzQnNhWFFpTENKa1pXeHBiV2wwWlhKeklpd2liV0YwWTJnaUxDSnNhWE4wSWl3aWFTSXNJbkJoY25ObFNXNWtaWGdpTENKcGJtUmxlQ0lzSW5CMWMyZ2lMQ0pzWlc1bmRHZ2lMQ0pzYVc1bElpd2lkR1Z6ZENJc0ltaGxZV1JsY2lJc0ltVjRaV01pTENKd1lYSnpaVVpwYkdWSVpXRmtaWElpTENKb2RXNXJjeUlzSW5CaGNuTmxTSFZ1YXlJc0luTjBjbWxqZENJc0lrVnljbTl5SWl3aVNsTlBUaUlzSW5OMGNtbHVaMmxtZVNJc0ltWnBiR1ZJWldGa1pYSWlMQ0pyWlhsUWNtVm1hWGdpTENKa1lYUmhJaXdpWm1sc1pVNWhiV1VpTENKeVpYQnNZV05sSWl3aWMzVmljM1J5SWl3aWRISnBiU0lzSW1Ob2RXNXJTR1ZoWkdWeVNXNWtaWGdpTENKamFIVnVhMGhsWVdSbGNreHBibVVpTENKamFIVnVhMGhsWVdSbGNpSXNJbWgxYm1zaUxDSnZiR1JUZEdGeWRDSXNJbTlzWkV4cGJtVnpJaXdpYm1WM1UzUmhjblFpTENKdVpYZE1hVzVsY3lJc0lteHBibVZ6SWl3aWJHbHVaV1JsYkdsdGFYUmxjbk1pTENKaFpHUkRiM1Z1ZENJc0luSmxiVzkyWlVOdmRXNTBJaXdpYVc1a1pYaFBaaUlzSW05d1pYSmhkR2x2YmlKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPMEZCUVU4c1UwRkJVMEVzVlVGQlZDeERRVUZ2UWtNc1QwRkJjRUlzUlVGQk1rTTdRVUZCUVR0QlFVRkJPMEZCUVVFN1FVRkJaRU1zUlVGQlFVRXNUMEZCWXl4MVJVRkJTaXhGUVVGSk8wRkJRMmhFTEUxQlFVbERMRTlCUVU4c1IwRkJSMFlzVDBGQlR5eERRVUZEUnl4TFFVRlNMRU5CUVdNc2NVSkJRV1FzUTBGQlpEdEJRVUZCTEUxQlEwbERMRlZCUVZVc1IwRkJSMG9zVDBGQlR5eERRVUZEU3l4TFFVRlNMRU5CUVdNc2MwSkJRV1FzUzBGQmVVTXNSVUZFTVVRN1FVRkJRU3hOUVVWSlF5eEpRVUZKTEVkQlFVY3NSVUZHV0R0QlFVRkJMRTFCUjBsRExFTkJRVU1zUjBGQlJ5eERRVWhTT3p0QlFVdEJMRmRCUVZORExGVkJRVlFzUjBGQmMwSTdRVUZEY0VJc1VVRkJTVU1zUzBGQlN5eEhRVUZITEVWQlFWbzdRVUZEUVVnc1NVRkJRVUVzU1VGQlNTeERRVUZEU1N4SlFVRk1MRU5CUVZWRUxFdEJRVllzUlVGR2IwSXNRMEZKY0VJN08wRkJRMEVzVjBGQlQwWXNRMEZCUXl4SFFVRkhUQ3hQUVVGUExFTkJRVU5UTEUxQlFXNUNMRVZCUVRKQ08wRkJRM3BDTEZWQlFVbERMRWxCUVVrc1IwRkJSMVlzVDBGQlR5eERRVUZEU3l4RFFVRkVMRU5CUVd4Q0xFTkJSSGxDTEVOQlIzcENPenRCUVVOQkxGVkJRVXNzZFVKQlFVUXNRMEZCTUVKTkxFbEJRVEZDTEVOQlFTdENSQ3hKUVVFdlFpeERRVUZLTEVWQlFUQkRPMEZCUTNoRE8wRkJRMFFzVDBGT2QwSXNRMEZSZWtJN096dEJRVU5CTEZWQlFVbEZMRTFCUVUwc1IwRkJTU3d3UTBGQlJDeERRVUUyUTBNc1NVRkJOME1zUTBGQmEwUklMRWxCUVd4RUxFTkJRV0k3TzBGQlEwRXNWVUZCU1VVc1RVRkJTaXhGUVVGWk8wRkJRMVpNTEZGQlFVRkJMRXRCUVVzc1EwRkJRMEVzUzBGQlRpeEhRVUZqU3l4TlFVRk5MRU5CUVVNc1EwRkJSQ3hEUVVGd1FqdEJRVU5FT3p0QlFVVkVVQ3hOUVVGQlFTeERRVUZETzBGQlEwWXNTMEZ3UW0xQ0xFTkJjMEp3UWp0QlFVTkJPenM3UVVGRFFWTXNTVUZCUVVFc1pVRkJaU3hEUVVGRFVDeExRVUZFTEVOQlFXWTdRVUZEUVU4c1NVRkJRVUVzWlVGQlpTeERRVUZEVUN4TFFVRkVMRU5CUVdZc1EwRjZRbTlDTEVOQk1rSndRanM3UVVGRFFVRXNTVUZCUVVFc1MwRkJTeXhEUVVGRFVTeExRVUZPTEVkQlFXTXNSVUZCWkRzN1FVRkZRU3hYUVVGUFZpeERRVUZETEVkQlFVZE1MRTlCUVU4c1EwRkJRMU1zVFVGQmJrSXNSVUZCTWtJN1FVRkRla0lzVlVGQlNVTXNTMEZCU1N4SFFVRkhWaXhQUVVGUExFTkJRVU5MTEVOQlFVUXNRMEZCYkVJN08wRkJSVUVzVlVGQlN5eG5RMEZCUkN4RFFVRnRRMDBzU1VGQmJrTXNRMEZCZDBORUxFdEJRWGhETEVOQlFVb3NSVUZCYlVRN1FVRkRha1E3UVVGRFJDeFBRVVpFTEUxQlJVOHNTVUZCU3l4TFFVRkVMRU5CUVZGRExFbEJRVklzUTBGQllVUXNTMEZCWWl4RFFVRktMRVZCUVhkQ08wRkJRemRDU0N4UlFVRkJRU3hMUVVGTExFTkJRVU5STEV0QlFVNHNRMEZCV1ZBc1NVRkJXaXhEUVVGcFFsRXNVMEZCVXl4RlFVRXhRanRCUVVORUxFOUJSazBzVFVGRlFTeEpRVUZKVGl4TFFVRkpMRWxCUVVsWUxFOUJRVThzUTBGQlEydENMRTFCUVhCQ0xFVkJRVFJDTzBGQlEycERPMEZCUTBFc1kwRkJUU3hKUVVGSlF5eExRVUZLTEVOQlFWVXNiVUpCUVcxQ1lpeERRVUZETEVkQlFVY3NRMEZCZGtJc1NVRkJORUlzUjBGQk5VSXNSMEZCYTBOakxFbEJRVWtzUTBGQlEwTXNVMEZCVEN4RFFVRmxWaXhMUVVGbUxFTkJRVFZETEVOQlFVNDdRVUZEUkN4UFFVaE5MRTFCUjBFN1FVRkRURXdzVVVGQlFVRXNRMEZCUXp0QlFVTkdPMEZCUTBZN1FVRkRSaXhIUVd4RUswTXNRMEZ2UkdoRU8wRkJRMEU3T3p0QlFVTkJMRmRCUVZOVExHVkJRVlFzUTBGQmVVSlFMRXRCUVhwQ0xFVkJRV2RETzBGQlF6bENMRkZCUVUxakxGVkJRVlVzUjBGQlNTeDFRa0ZCUkN4RFFVRXdRbElzU1VGQk1VSXNRMEZCSzBKaUxFOUJRVThzUTBGQlEwc3NRMEZCUkN4RFFVRjBReXhEUVVGdVFqczdRVUZEUVN4UlFVRkpaMElzVlVGQlNpeEZRVUZuUWp0QlFVTmtMRlZCUVVsRExGTkJRVk1zUjBGQlIwUXNWVUZCVlN4RFFVRkRMRU5CUVVRc1EwRkJWaXhMUVVGclFpeExRVUZzUWl4SFFVRXdRaXhMUVVFeFFpeEhRVUZyUXl4TFFVRnNSRHRCUVVOQkxGVkJRVTFGTEVsQlFVa3NSMEZCUjBZc1ZVRkJWU3hEUVVGRExFTkJRVVFzUTBGQlZpeERRVUZqY0VJc1MwRkJaQ3hEUVVGdlFpeEpRVUZ3UWl4RlFVRXdRaXhEUVVFeFFpeERRVUZpTzBGQlEwRXNWVUZCU1hWQ0xGRkJRVkVzUjBGQlIwUXNTVUZCU1N4RFFVRkRMRU5CUVVRc1EwRkJTaXhEUVVGUlJTeFBRVUZTTEVOQlFXZENMRTlCUVdoQ0xFVkJRWGxDTEVsQlFYcENMRU5CUVdZN08wRkJRMEVzVlVGQlN5eFJRVUZFTEVOQlFWZGtMRWxCUVZnc1EwRkJaMEpoTEZGQlFXaENMRU5CUVVvc1JVRkJLMEk3UVVGRE4wSkJMRkZCUVVGQkxGRkJRVkVzUjBGQlIwRXNVVUZCVVN4RFFVRkRSU3hOUVVGVUxFTkJRV2RDTEVOQlFXaENMRVZCUVcxQ1JpeFJRVUZSTEVOQlFVTm1MRTFCUVZRc1IwRkJhMElzUTBGQmNrTXNRMEZCV0R0QlFVTkVPenRCUVVORVJpeE5RVUZCUVN4TFFVRkxMRU5CUVVObExGTkJRVk1zUjBGQlJ5eFZRVUZpTEVOQlFVd3NSMEZCWjBORkxGRkJRV2hETzBGQlEwRnFRaXhOUVVGQlFTeExRVUZMTEVOQlFVTmxMRk5CUVZNc1IwRkJSeXhSUVVGaUxFTkJRVXdzUjBGQk9FSXNRMEZCUTBNc1NVRkJTU3hEUVVGRExFTkJRVVFzUTBGQlNpeEpRVUZYTEVWQlFWb3NSVUZCWjBKSkxFbEJRV2hDTEVWQlFUbENPMEZCUlVGMFFpeE5RVUZCUVN4RFFVRkRPMEZCUTBZN1FVRkRSaXhIUVhCRkswTXNRMEZ6UldoRU8wRkJRMEU3T3p0QlFVTkJMRmRCUVZOWExGTkJRVlFzUjBGQmNVSTdRVUZEYmtJc1VVRkJTVmtzWjBKQlFXZENMRWRCUVVkMlFpeERRVUYyUWp0QlFVRkJMRkZCUTBsM1FpeGxRVUZsTEVkQlFVYzNRaXhQUVVGUExFTkJRVU5MTEVOQlFVTXNSVUZCUml4RFFVUTNRanRCUVVGQkxGRkJSVWw1UWl4WFFVRlhMRWRCUVVkRUxHVkJRV1VzUTBGQlF6VkNMRXRCUVdoQ0xFTkJRWE5DTERSRFFVRjBRaXhEUVVac1FqdEJRVWxCTEZGQlFVazRRaXhKUVVGSkxFZEJRVWM3UVVGRFZFTXNUVUZCUVVFc1VVRkJVU3hGUVVGRkxFTkJRVU5HTEZkQlFWY3NRMEZCUXl4RFFVRkVMRU5CUkdJN1FVRkZWRWNzVFVGQlFVRXNVVUZCVVN4RlFVRkZMRTlCUVU5SUxGZEJRVmNzUTBGQlF5eERRVUZFTEVOQlFXeENMRXRCUVRCQ0xGZEJRVEZDTEVkQlFYZERMRU5CUVhoRExFZEJRVFJETEVOQlFVTkJMRmRCUVZjc1EwRkJReXhEUVVGRUxFTkJSbnBFTzBGQlIxUkpMRTFCUVVGQkxGRkJRVkVzUlVGQlJTeERRVUZEU2l4WFFVRlhMRU5CUVVNc1EwRkJSQ3hEUVVoaU8wRkJTVlJMTEUxQlFVRkJMRkZCUVZFc1JVRkJSU3hQUVVGUFRDeFhRVUZYTEVOQlFVTXNRMEZCUkN4RFFVRnNRaXhMUVVFd1FpeFhRVUV4UWl4SFFVRjNReXhEUVVGNFF5eEhRVUUwUXl4RFFVRkRRU3hYUVVGWExFTkJRVU1zUTBGQlJDeERRVXA2UkR0QlFVdFVUU3hOUVVGQlFTeExRVUZMTEVWQlFVVXNSVUZNUlR0QlFVMVVReXhOUVVGQlFTeGpRVUZqTEVWQlFVVTdRVUZPVUN4TFFVRllMRU5CVEcxQ0xFTkJZMjVDTzBGQlEwRTdRVUZEUVRzN1FVRkRRU3hSUVVGSlRpeEpRVUZKTEVOQlFVTkZMRkZCUVV3c1MwRkJhMElzUTBGQmRFSXNSVUZCZVVJN1FVRkRka0pHTEUxQlFVRkJMRWxCUVVrc1EwRkJRME1zVVVGQlRDeEpRVUZwUWl4RFFVRnFRanRCUVVORU96dEJRVU5FTEZGQlFVbEVMRWxCUVVrc1EwRkJRMGtzVVVGQlRDeExRVUZyUWl4RFFVRjBRaXhGUVVGNVFqdEJRVU4yUWtvc1RVRkJRVUVzU1VGQlNTeERRVUZEUnl4UlFVRk1MRWxCUVdsQ0xFTkJRV3BDTzBGQlEwUTdPMEZCUlVRc1VVRkJTVWtzVVVGQlVTeEhRVUZITEVOQlFXWTdRVUZCUVN4UlFVTkpReXhYUVVGWExFZEJRVWNzUTBGRWJFSTdPMEZCUlVFc1YwRkJUMnhETEVOQlFVTXNSMEZCUjB3c1QwRkJUeXhEUVVGRFV5eE5RVUZ1UWl4RlFVRXlRa29zUTBGQlF5eEZRVUUxUWl4RlFVRm5RenRCUVVNNVFqdEJRVU5CTzBGQlEwRXNWVUZCU1V3c1QwRkJUeXhEUVVGRFN5eERRVUZFTEVOQlFWQXNRMEZCVjIxRExFOUJRVmdzUTBGQmJVSXNUVUZCYmtJc1RVRkJLMElzUTBGQkwwSXNTVUZEVFc1RExFTkJRVU1zUjBGQlJ5eERRVUZLTEVkQlFWRk1MRTlCUVU4c1EwRkJRMU1zVFVGRWRFSXNTVUZGUzFRc1QwRkJUeXhEUVVGRFN5eERRVUZETEVkQlFVY3NRMEZCVEN4RFFVRlFMRU5CUVdWdFF5eFBRVUZtTEVOQlFYVkNMRTFCUVhaQ0xFMUJRVzFETEVOQlJuaERMRWxCUjB0NFF5eFBRVUZQTEVOQlFVTkxMRU5CUVVNc1IwRkJSeXhEUVVGTUxFTkJRVkFzUTBGQlpXMURMRTlCUVdZc1EwRkJkVUlzU1VGQmRrSXNUVUZCYVVNc1EwRklNVU1zUlVGSE5rTTdRVUZEZWtNN1FVRkRTRHM3UVVGRFJDeFZRVUZKUXl4VFFVRlRMRWRCUVVsNlF5eFBRVUZQTEVOQlFVTkxMRU5CUVVRc1EwRkJVQ3hEUVVGWFNTeE5RVUZZTEVsQlFYRkNMRU5CUVhKQ0xFbEJRVEJDU2l4RFFVRkRMRWxCUVV0TUxFOUJRVThzUTBGQlExTXNUVUZCVWl4SFFVRnBRaXhEUVVGc1JDeEhRVUYzUkN4SFFVRjRSQ3hIUVVFNFJGUXNUMEZCVHl4RFFVRkRTeXhEUVVGRUxFTkJRVkFzUTBGQlZ5eERRVUZZTEVOQlFUbEZPenRCUVVWQkxGVkJRVWx2UXl4VFFVRlRMRXRCUVVzc1IwRkJaQ3hKUVVGeFFrRXNVMEZCVXl4TFFVRkxMRWRCUVc1RExFbEJRVEJEUVN4VFFVRlRMRXRCUVVzc1IwRkJlRVFzU1VGQkswUkJMRk5CUVZNc1MwRkJTeXhKUVVGcVJpeEZRVUYxUmp0QlFVTnlSbFlzVVVGQlFVRXNTVUZCU1N4RFFVRkRTeXhMUVVGTUxFTkJRVmMxUWl4SlFVRllMRU5CUVdkQ1VpeFBRVUZQTEVOQlFVTkxMRU5CUVVRc1EwRkJka0k3UVVGRFFUQkNMRkZCUVVGQkxFbEJRVWtzUTBGQlEwMHNZMEZCVEN4RFFVRnZRamRDTEVsQlFYQkNMRU5CUVhsQ1RpeFZRVUZWTEVOQlFVTkhMRU5CUVVRc1EwRkJWaXhKUVVGcFFpeEpRVUV4UXpzN1FVRkZRU3haUVVGSmIwTXNVMEZCVXl4TFFVRkxMRWRCUVd4Q0xFVkJRWFZDTzBGQlEzSkNTQ3hWUVVGQlFTeFJRVUZSTzBGQlExUXNVMEZHUkN4TlFVVlBMRWxCUVVsSExGTkJRVk1zUzBGQlN5eEhRVUZzUWl4RlFVRjFRanRCUVVNMVFrWXNWVUZCUVVFc1YwRkJWenRCUVVOYUxGTkJSazBzVFVGRlFTeEpRVUZKUlN4VFFVRlRMRXRCUVVzc1IwRkJiRUlzUlVGQmRVSTdRVUZETlVKSUxGVkJRVUZCTEZGQlFWRTdRVUZEVWtNc1ZVRkJRVUVzVjBGQlZ6dEJRVU5hTzBGQlEwWXNUMEZhUkN4TlFWbFBPMEZCUTB3N1FVRkRSRHRCUVVOR0xFdEJjRVJyUWl4RFFYTkVia0k3T3p0QlFVTkJMRkZCUVVrc1EwRkJRMFFzVVVGQlJDeEpRVUZoVUN4SlFVRkpMRU5CUVVOSkxGRkJRVXdzUzBGQmEwSXNRMEZCYmtNc1JVRkJjME03UVVGRGNFTktMRTFCUVVGQkxFbEJRVWtzUTBGQlEwa3NVVUZCVEN4SFFVRm5RaXhEUVVGb1FqdEJRVU5FT3p0QlFVTkVMRkZCUVVrc1EwRkJRMGtzVjBGQlJDeEpRVUZuUWxJc1NVRkJTU3hEUVVGRFJTeFJRVUZNTEV0QlFXdENMRU5CUVhSRExFVkJRWGxETzBGQlEzWkRSaXhOUVVGQlFTeEpRVUZKTEVOQlFVTkZMRkZCUVV3c1IwRkJaMElzUTBGQmFFSTdRVUZEUkN4TFFUVkVhMElzUTBFNFJHNUNPenM3UVVGRFFTeFJRVUZKYkVNc1QwRkJUeXhEUVVGRGEwSXNUVUZCV2l4RlFVRnZRanRCUVVOc1FpeFZRVUZKY1VJc1VVRkJVU3hMUVVGTFVDeEpRVUZKTEVOQlFVTkpMRkZCUVhSQ0xFVkJRV2RETzBGQlF6bENMR05CUVUwc1NVRkJTV3BDTEV0QlFVb3NRMEZCVlN4elJFRkJjMFJWTEdkQ1FVRm5RaXhIUVVGSExFTkJRWHBGTEVOQlFWWXNRMEZCVGp0QlFVTkVPenRCUVVORUxGVkJRVWxYTEZkQlFWY3NTMEZCUzFJc1NVRkJTU3hEUVVGRFJTeFJRVUY2UWl4RlFVRnRRenRCUVVOcVF5eGpRVUZOTEVsQlFVbG1MRXRCUVVvc1EwRkJWU3gzUkVGQmQwUlZMR2RDUVVGblFpeEhRVUZITEVOQlFUTkZMRU5CUVZZc1EwRkJUanRCUVVORU8wRkJRMFk3TzBGQlJVUXNWMEZCVDBjc1NVRkJVRHRCUVVORU96dEJRVVZFTEZOQlFVOHhRaXhEUVVGRExFZEJRVWRNTEU5QlFVOHNRMEZCUTFNc1RVRkJia0lzUlVGQk1rSTdRVUZEZWtKSUxFbEJRVUZCTEZWQlFWVTdRVUZEV0RzN1FVRkZSQ3hUUVVGUFJpeEpRVUZRTzBGQlEwUWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdablZ1WTNScGIyNGdjR0Z5YzJWUVlYUmphQ2gxYm1sRWFXWm1MQ0J2Y0hScGIyNXpJRDBnZTMwcElIdGNiaUFnYkdWMElHUnBabVp6ZEhJZ1BTQjFibWxFYVdabUxuTndiR2wwS0M5Y1hISmNYRzU4VzF4Y2JseGNkbHhjWmx4Y2NseGNlRGcxWFM4cExGeHVJQ0FnSUNBZ1pHVnNhVzFwZEdWeWN5QTlJSFZ1YVVScFptWXViV0YwWTJnb0wxeGNjbHhjYm54YlhGeHVYRngyWEZ4bVhGeHlYRng0T0RWZEwyY3BJSHg4SUZ0ZExGeHVJQ0FnSUNBZ2JHbHpkQ0E5SUZ0ZExGeHVJQ0FnSUNBZ2FTQTlJREE3WEc1Y2JpQWdablZ1WTNScGIyNGdjR0Z5YzJWSmJtUmxlQ2dwSUh0Y2JpQWdJQ0JzWlhRZ2FXNWtaWGdnUFNCN2ZUdGNiaUFnSUNCc2FYTjBMbkIxYzJnb2FXNWtaWGdwTzF4dVhHNGdJQ0FnTHk4Z1VHRnljMlVnWkdsbVppQnRaWFJoWkdGMFlWeHVJQ0FnSUhkb2FXeGxJQ2hwSUR3Z1pHbG1abk4wY2k1c1pXNW5kR2dwSUh0Y2JpQWdJQ0FnSUd4bGRDQnNhVzVsSUQwZ1pHbG1abk4wY2x0cFhUdGNibHh1SUNBZ0lDQWdMeThnUm1sc1pTQm9aV0ZrWlhJZ1ptOTFibVFzSUdWdVpDQndZWEp6YVc1bklHUnBabVlnYldWMFlXUmhkR0ZjYmlBZ0lDQWdJR2xtSUNnb0wxNG9YRnd0WEZ3dFhGd3RmRnhjSzF4Y0sxeGNLM3hBUUNsY1hITXZLUzUwWlhOMEtHeHBibVVwS1NCN1hHNGdJQ0FnSUNBZ0lHSnlaV0ZyTzF4dUlDQWdJQ0FnZlZ4dVhHNGdJQ0FnSUNBdkx5QkVhV1ptSUdsdVpHVjRYRzRnSUNBZ0lDQnNaWFFnYUdWaFpHVnlJRDBnS0M5ZUtEODZTVzVrWlhnNmZHUnBabVlvUHpvZ0xYSWdYRngzS3lrcktWeGNjeXNvTGlzL0tWeGNjeW9rTHlrdVpYaGxZeWhzYVc1bEtUdGNiaUFnSUNBZ0lHbG1JQ2hvWldGa1pYSXBJSHRjYmlBZ0lDQWdJQ0FnYVc1a1pYZ3VhVzVrWlhnZ1BTQm9aV0ZrWlhKYk1WMDdYRzRnSUNBZ0lDQjlYRzVjYmlBZ0lDQWdJR2tyS3p0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCUVlYSnpaU0JtYVd4bElHaGxZV1JsY25NZ2FXWWdkR2hsZVNCaGNtVWdaR1ZtYVc1bFpDNGdWVzVwWm1sbFpDQmthV1ptSUhKbGNYVnBjbVZ6SUhSb1pXMHNJR0oxZEZ4dUlDQWdJQzh2SUhSb1pYSmxKM01nYm04Z2RHVmphRzVwWTJGc0lHbHpjM1ZsY3lCMGJ5Qm9ZWFpsSUdGdUlHbHpiMnhoZEdWa0lHaDFibXNnZDJsMGFHOTFkQ0JtYVd4bElHaGxZV1JsY2x4dUlDQWdJSEJoY25ObFJtbHNaVWhsWVdSbGNpaHBibVJsZUNrN1hHNGdJQ0FnY0dGeWMyVkdhV3hsU0dWaFpHVnlLR2x1WkdWNEtUdGNibHh1SUNBZ0lDOHZJRkJoY25ObElHaDFibXR6WEc0Z0lDQWdhVzVrWlhndWFIVnVhM01nUFNCYlhUdGNibHh1SUNBZ0lIZG9hV3hsSUNocElEd2daR2xtWm5OMGNpNXNaVzVuZEdncElIdGNiaUFnSUNBZ0lHeGxkQ0JzYVc1bElEMGdaR2xtWm5OMGNsdHBYVHRjYmx4dUlDQWdJQ0FnYVdZZ0tDZ3ZYaWhKYm1SbGVEcDhaR2xtWm54Y1hDMWNYQzFjWEMxOFhGd3JYRndyWEZ3cktWeGNjeThwTG5SbGMzUW9iR2x1WlNrcElIdGNiaUFnSUNBZ0lDQWdZbkpsWVdzN1hHNGdJQ0FnSUNCOUlHVnNjMlVnYVdZZ0tDZ3ZYa0JBTHlrdWRHVnpkQ2hzYVc1bEtTa2dlMXh1SUNBZ0lDQWdJQ0JwYm1SbGVDNW9kVzVyY3k1d2RYTm9LSEJoY25ObFNIVnVheWdwS1R0Y2JpQWdJQ0FnSUgwZ1pXeHpaU0JwWmlBb2JHbHVaU0FtSmlCdmNIUnBiMjV6TG5OMGNtbGpkQ2tnZTF4dUlDQWdJQ0FnSUNBdkx5QkpaMjV2Y21VZ2RXNWxlSEJsWTNSbFpDQmpiMjUwWlc1MElIVnViR1Z6Y3lCcGJpQnpkSEpwWTNRZ2JXOWtaVnh1SUNBZ0lDQWdJQ0IwYUhKdmR5QnVaWGNnUlhKeWIzSW9KMVZ1YTI1dmQyNGdiR2x1WlNBbklDc2dLR2tnS3lBeEtTQXJJQ2NnSnlBcklFcFRUMDR1YzNSeWFXNW5hV1o1S0d4cGJtVXBLVHRjYmlBZ0lDQWdJSDBnWld4elpTQjdYRzRnSUNBZ0lDQWdJR2tyS3p0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc0Z0lIMWNibHh1SUNBdkx5QlFZWEp6WlhNZ2RHaGxJQzB0TFNCaGJtUWdLeXNySUdobFlXUmxjbk1zSUdsbUlHNXZibVVnWVhKbElHWnZkVzVrTENCdWJ5QnNhVzVsYzF4dUlDQXZMeUJoY21VZ1kyOXVjM1Z0WldRdVhHNGdJR1oxYm1OMGFXOXVJSEJoY25ObFJtbHNaVWhsWVdSbGNpaHBibVJsZUNrZ2UxeHVJQ0FnSUdOdmJuTjBJR1pwYkdWSVpXRmtaWElnUFNBb0wxNG9MUzB0ZkZ4Y0sxeGNLMXhjS3lsY1hITXJLQzRxS1NRdktTNWxlR1ZqS0dScFptWnpkSEpiYVYwcE8xeHVJQ0FnSUdsbUlDaG1hV3hsU0dWaFpHVnlLU0I3WEc0Z0lDQWdJQ0JzWlhRZ2EyVjVVSEpsWm1sNElEMGdabWxzWlVobFlXUmxjbHN4WFNBOVBUMGdKeTB0TFNjZ1B5QW5iMnhrSnlBNklDZHVaWGNuTzF4dUlDQWdJQ0FnWTI5dWMzUWdaR0YwWVNBOUlHWnBiR1ZJWldGa1pYSmJNbDB1YzNCc2FYUW9KMXhjZENjc0lESXBPMXh1SUNBZ0lDQWdiR1YwSUdacGJHVk9ZVzFsSUQwZ1pHRjBZVnN3WFM1eVpYQnNZV05sS0M5Y1hGeGNYRnhjWEM5bkxDQW5YRnhjWENjcE8xeHVJQ0FnSUNBZ2FXWWdLQ2d2WGx3aUxpcGNJaVF2S1M1MFpYTjBLR1pwYkdWT1lXMWxLU2tnZTF4dUlDQWdJQ0FnSUNCbWFXeGxUbUZ0WlNBOUlHWnBiR1ZPWVcxbExuTjFZbk4wY2lneExDQm1hV3hsVG1GdFpTNXNaVzVuZEdnZ0xTQXlLVHRjYmlBZ0lDQWdJSDFjYmlBZ0lDQWdJR2x1WkdWNFcydGxlVkJ5WldacGVDQXJJQ2RHYVd4bFRtRnRaU2RkSUQwZ1ptbHNaVTVoYldVN1hHNGdJQ0FnSUNCcGJtUmxlRnRyWlhsUWNtVm1hWGdnS3lBblNHVmhaR1Z5SjEwZ1BTQW9aR0YwWVZzeFhTQjhmQ0FuSnlrdWRISnBiU2dwTzF4dVhHNGdJQ0FnSUNCcEt5czdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdMeThnVUdGeWMyVnpJR0VnYUhWdWExeHVJQ0F2THlCVWFHbHpJR0Z6YzNWdFpYTWdkR2hoZENCM1pTQmhjbVVnWVhRZ2RHaGxJSE4wWVhKMElHOW1JR0VnYUhWdWF5NWNiaUFnWm5WdVkzUnBiMjRnY0dGeWMyVklkVzVyS0NrZ2UxeHVJQ0FnSUd4bGRDQmphSFZ1YTBobFlXUmxja2x1WkdWNElEMGdhU3hjYmlBZ0lDQWdJQ0FnWTJoMWJtdElaV0ZrWlhKTWFXNWxJRDBnWkdsbVpuTjBjbHRwS3l0ZExGeHVJQ0FnSUNBZ0lDQmphSFZ1YTBobFlXUmxjaUE5SUdOb2RXNXJTR1ZoWkdWeVRHbHVaUzV6Y0d4cGRDZ3ZRRUFnTFNoY1hHUXJLU2cvT2l3b1hGeGtLeWtwUHlCY1hDc29YRnhrS3lrb1B6b3NLRnhjWkNzcEtUOGdRRUF2S1R0Y2JseHVJQ0FnSUd4bGRDQm9kVzVySUQwZ2UxeHVJQ0FnSUNBZ2IyeGtVM1JoY25RNklDdGphSFZ1YTBobFlXUmxjbHN4WFN4Y2JpQWdJQ0FnSUc5c1pFeHBibVZ6T2lCMGVYQmxiMllnWTJoMWJtdElaV0ZrWlhKYk1sMGdQVDA5SUNkMWJtUmxabWx1WldRbklEOGdNU0E2SUN0amFIVnVhMGhsWVdSbGNsc3lYU3hjYmlBZ0lDQWdJRzVsZDFOMFlYSjBPaUFyWTJoMWJtdElaV0ZrWlhKYk0xMHNYRzRnSUNBZ0lDQnVaWGRNYVc1bGN6b2dkSGx3Wlc5bUlHTm9kVzVyU0dWaFpHVnlXelJkSUQwOVBTQW5kVzVrWldacGJtVmtKeUEvSURFZ09pQXJZMmgxYm10SVpXRmtaWEpiTkYwc1hHNGdJQ0FnSUNCc2FXNWxjem9nVzEwc1hHNGdJQ0FnSUNCc2FXNWxaR1ZzYVcxcGRHVnljem9nVzExY2JpQWdJQ0I5TzF4dVhHNGdJQ0FnTHk4Z1ZXNXBabWxsWkNCRWFXWm1JRVp2Y20xaGRDQnhkV2x5YXpvZ1NXWWdkR2hsSUdOb2RXNXJJSE5wZW1VZ2FYTWdNQ3hjYmlBZ0lDQXZMeUIwYUdVZ1ptbHljM1FnYm5WdFltVnlJR2x6SUc5dVpTQnNiM2RsY2lCMGFHRnVJRzl1WlNCM2IzVnNaQ0JsZUhCbFkzUXVYRzRnSUNBZ0x5OGdhSFIwY0hNNkx5OTNkM2N1WVhKMGFXMWhMbU52YlM5M1pXSnNiMmR6TDNacFpYZHdiM04wTG1wemNEOTBhSEpsWVdROU1UWTBNamt6WEc0Z0lDQWdhV1lnS0doMWJtc3ViMnhrVEdsdVpYTWdQVDA5SURBcElIdGNiaUFnSUNBZ0lHaDFibXN1YjJ4a1UzUmhjblFnS3owZ01UdGNiaUFnSUNCOVhHNGdJQ0FnYVdZZ0tHaDFibXN1Ym1WM1RHbHVaWE1nUFQwOUlEQXBJSHRjYmlBZ0lDQWdJR2gxYm1zdWJtVjNVM1JoY25RZ0t6MGdNVHRjYmlBZ0lDQjlYRzVjYmlBZ0lDQnNaWFFnWVdSa1EyOTFiblFnUFNBd0xGeHVJQ0FnSUNBZ0lDQnlaVzF2ZG1WRGIzVnVkQ0E5SURBN1hHNGdJQ0FnWm05eUlDZzdJR2tnUENCa2FXWm1jM1J5TG14bGJtZDBhRHNnYVNzcktTQjdYRzRnSUNBZ0lDQXZMeUJNYVc1bGN5QnpkR0Z5ZEdsdVp5QjNhWFJvSUNjdExTMG5JR052ZFd4a0lHSmxJRzFwYzNSaGEyVnVJR1p2Y2lCMGFHVWdYQ0p5WlcxdmRtVWdiR2x1WlZ3aUlHOXdaWEpoZEdsdmJseHVJQ0FnSUNBZ0x5OGdRblYwSUhSb1pYa2dZMjkxYkdRZ1ltVWdkR2hsSUdobFlXUmxjaUJtYjNJZ2RHaGxJRzVsZUhRZ1ptbHNaUzRnVkdobGNtVm1iM0psSUhCeWRXNWxJSE4xWTJnZ1kyRnpaWE1nYjNWMExseHVJQ0FnSUNBZ2FXWWdLR1JwWm1aemRISmJhVjB1YVc1a1pYaFBaaWduTFMwdElDY3BJRDA5UFNBd1hHNGdJQ0FnSUNBZ0lDQWdJQ0FtSmlBb2FTQXJJRElnUENCa2FXWm1jM1J5TG14bGJtZDBhQ2xjYmlBZ0lDQWdJQ0FnSUNBZ0lDWW1JR1JwWm1aemRISmJhU0FySURGZExtbHVaR1Y0VDJZb0p5c3JLeUFuS1NBOVBUMGdNRnh1SUNBZ0lDQWdJQ0FnSUNBZ0ppWWdaR2xtWm5OMGNsdHBJQ3NnTWwwdWFXNWtaWGhQWmlnblFFQW5LU0E5UFQwZ01Da2dlMXh1SUNBZ0lDQWdJQ0FnSUdKeVpXRnJPMXh1SUNBZ0lDQWdmVnh1SUNBZ0lDQWdiR1YwSUc5d1pYSmhkR2x2YmlBOUlDaGthV1ptYzNSeVcybGRMbXhsYm1kMGFDQTlQU0F3SUNZbUlHa2dJVDBnS0dScFptWnpkSEl1YkdWdVozUm9JQzBnTVNrcElEOGdKeUFuSURvZ1pHbG1abk4wY2x0cFhWc3dYVHRjYmx4dUlDQWdJQ0FnYVdZZ0tHOXdaWEpoZEdsdmJpQTlQVDBnSnlzbklIeDhJRzl3WlhKaGRHbHZiaUE5UFQwZ0p5MG5JSHg4SUc5d1pYSmhkR2x2YmlBOVBUMGdKeUFuSUh4OElHOXdaWEpoZEdsdmJpQTlQVDBnSjF4Y1hGd25LU0I3WEc0Z0lDQWdJQ0FnSUdoMWJtc3ViR2x1WlhNdWNIVnphQ2hrYVdabWMzUnlXMmxkS1R0Y2JpQWdJQ0FnSUNBZ2FIVnVheTVzYVc1bFpHVnNhVzFwZEdWeWN5NXdkWE5vS0dSbGJHbHRhWFJsY25OYmFWMGdmSHdnSjF4Y2JpY3BPMXh1WEc0Z0lDQWdJQ0FnSUdsbUlDaHZjR1Z5WVhScGIyNGdQVDA5SUNjckp5a2dlMXh1SUNBZ0lDQWdJQ0FnSUdGa1pFTnZkVzUwS3lzN1hHNGdJQ0FnSUNBZ0lIMGdaV3h6WlNCcFppQW9iM0JsY21GMGFXOXVJRDA5UFNBbkxTY3BJSHRjYmlBZ0lDQWdJQ0FnSUNCeVpXMXZkbVZEYjNWdWRDc3JPMXh1SUNBZ0lDQWdJQ0I5SUdWc2MyVWdhV1lnS0c5d1pYSmhkR2x2YmlBOVBUMGdKeUFuS1NCN1hHNGdJQ0FnSUNBZ0lDQWdZV1JrUTI5MWJuUXJLenRjYmlBZ0lDQWdJQ0FnSUNCeVpXMXZkbVZEYjNWdWRDc3JPMXh1SUNBZ0lDQWdJQ0I5WEc0Z0lDQWdJQ0I5SUdWc2MyVWdlMXh1SUNBZ0lDQWdJQ0JpY21WaGF6dGNiaUFnSUNBZ0lIMWNiaUFnSUNCOVhHNWNiaUFnSUNBdkx5QklZVzVrYkdVZ2RHaGxJR1Z0Y0hSNUlHSnNiMk5ySUdOdmRXNTBJR05oYzJWY2JpQWdJQ0JwWmlBb0lXRmtaRU52ZFc1MElDWW1JR2gxYm1zdWJtVjNUR2x1WlhNZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUdoMWJtc3VibVYzVEdsdVpYTWdQU0F3TzF4dUlDQWdJSDFjYmlBZ0lDQnBaaUFvSVhKbGJXOTJaVU52ZFc1MElDWW1JR2gxYm1zdWIyeGtUR2x1WlhNZ1BUMDlJREVwSUh0Y2JpQWdJQ0FnSUdoMWJtc3ViMnhrVEdsdVpYTWdQU0F3TzF4dUlDQWdJSDFjYmx4dUlDQWdJQzh2SUZCbGNtWnZjbTBnYjNCMGFXOXVZV3dnYzJGdWFYUjVJR05vWldOcmFXNW5YRzRnSUNBZ2FXWWdLRzl3ZEdsdmJuTXVjM1J5YVdOMEtTQjdYRzRnSUNBZ0lDQnBaaUFvWVdSa1EyOTFiblFnSVQwOUlHaDFibXN1Ym1WM1RHbHVaWE1wSUh0Y2JpQWdJQ0FnSUNBZ2RHaHliM2NnYm1WM0lFVnljbTl5S0NkQlpHUmxaQ0JzYVc1bElHTnZkVzUwSUdScFpDQnViM1FnYldGMFkyZ2dabTl5SUdoMWJtc2dZWFFnYkdsdVpTQW5JQ3NnS0dOb2RXNXJTR1ZoWkdWeVNXNWtaWGdnS3lBeEtTazdYRzRnSUNBZ0lDQjlYRzRnSUNBZ0lDQnBaaUFvY21WdGIzWmxRMjkxYm5RZ0lUMDlJR2gxYm1zdWIyeGtUR2x1WlhNcElIdGNiaUFnSUNBZ0lDQWdkR2h5YjNjZ2JtVjNJRVZ5Y205eUtDZFNaVzF2ZG1Wa0lHeHBibVVnWTI5MWJuUWdaR2xrSUc1dmRDQnRZWFJqYUNCbWIzSWdhSFZ1YXlCaGRDQnNhVzVsSUNjZ0t5QW9ZMmgxYm10SVpXRmtaWEpKYm1SbGVDQXJJREVwS1R0Y2JpQWdJQ0FnSUgxY2JpQWdJQ0I5WEc1Y2JpQWdJQ0J5WlhSMWNtNGdhSFZ1YXp0Y2JpQWdmVnh1WEc0Z0lIZG9hV3hsSUNocElEd2daR2xtWm5OMGNpNXNaVzVuZEdncElIdGNiaUFnSUNCd1lYSnpaVWx1WkdWNEtDazdYRzRnSUgxY2JseHVJQ0J5WlhSMWNtNGdiR2x6ZER0Y2JuMWNiaUpkZlE9PVxuIiwiLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmFycmF5RXF1YWwgPSBhcnJheUVxdWFsO1xuZXhwb3J0cy5hcnJheVN0YXJ0c1dpdGggPSBhcnJheVN0YXJ0c1dpdGg7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5mdW5jdGlvbiBhcnJheUVxdWFsKGEsIGIpIHtcbiAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheVN0YXJ0c1dpdGgoYSwgYik7XG59XG5cbmZ1bmN0aW9uIGFycmF5U3RhcnRzV2l0aChhcnJheSwgc3RhcnQpIHtcbiAgaWYgKHN0YXJ0Lmxlbmd0aCA+IGFycmF5Lmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RhcnQubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3RhcnRbaV0gIT09IGFycmF5W2ldKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTkxZEdsc0wyRnljbUY1TG1weklsMHNJbTVoYldWeklqcGJJbUZ5Y21GNVJYRjFZV3dpTENKaElpd2lZaUlzSW14bGJtZDBhQ0lzSW1GeWNtRjVVM1JoY25SelYybDBhQ0lzSW1GeWNtRjVJaXdpYzNSaGNuUWlMQ0pwSWwwc0ltMWhjSEJwYm1keklqb2lPenM3T3pzN096czdPMEZCUVU4c1UwRkJVMEVzVlVGQlZDeERRVUZ2UWtNc1EwRkJjRUlzUlVGQmRVSkRMRU5CUVhaQ0xFVkJRVEJDTzBGQlF5OUNMRTFCUVVsRUxFTkJRVU1zUTBGQlEwVXNUVUZCUml4TFFVRmhSQ3hEUVVGRExFTkJRVU5ETEUxQlFXNUNMRVZCUVRKQ08wRkJRM3BDTEZkQlFVOHNTMEZCVUR0QlFVTkVPenRCUVVWRUxGTkJRVTlETEdWQlFXVXNRMEZCUTBnc1EwRkJSQ3hGUVVGSlF5eERRVUZLTEVOQlFYUkNPMEZCUTBRN08wRkJSVTBzVTBGQlUwVXNaVUZCVkN4RFFVRjVRa01zUzBGQmVrSXNSVUZCWjBORExFdEJRV2hETEVWQlFYVkRPMEZCUXpWRExFMUJRVWxCTEV0QlFVc3NRMEZCUTBnc1RVRkJUaXhIUVVGbFJTeExRVUZMTEVOQlFVTkdMRTFCUVhwQ0xFVkJRV2xETzBGQlF5OUNMRmRCUVU4c1MwRkJVRHRCUVVORU96dEJRVVZFTEU5QlFVc3NTVUZCU1Vrc1EwRkJReXhIUVVGSExFTkJRV0lzUlVGQlowSkJMRU5CUVVNc1IwRkJSMFFzUzBGQlN5eERRVUZEU0N4TlFVRXhRaXhGUVVGclEwa3NRMEZCUXl4RlFVRnVReXhGUVVGMVF6dEJRVU55UXl4UlFVRkpSQ3hMUVVGTExFTkJRVU5ETEVOQlFVUXNRMEZCVEN4TFFVRmhSaXhMUVVGTExFTkJRVU5GTEVOQlFVUXNRMEZCZEVJc1JVRkJNa0k3UVVGRGVrSXNZVUZCVHl4TFFVRlFPMEZCUTBRN1FVRkRSanM3UVVGRlJDeFRRVUZQTEVsQlFWQTdRVUZEUkNJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYkltVjRjRzl5ZENCbWRXNWpkR2x2YmlCaGNuSmhlVVZ4ZFdGc0tHRXNJR0lwSUh0Y2JpQWdhV1lnS0dFdWJHVnVaM1JvSUNFOVBTQmlMbXhsYm1kMGFDa2dlMXh1SUNBZ0lISmxkSFZ5YmlCbVlXeHpaVHRjYmlBZ2ZWeHVYRzRnSUhKbGRIVnliaUJoY25KaGVWTjBZWEowYzFkcGRHZ29ZU3dnWWlrN1hHNTlYRzVjYm1WNGNHOXlkQ0JtZFc1amRHbHZiaUJoY25KaGVWTjBZWEowYzFkcGRHZ29ZWEp5WVhrc0lITjBZWEowS1NCN1hHNGdJR2xtSUNoemRHRnlkQzVzWlc1bmRHZ2dQaUJoY25KaGVTNXNaVzVuZEdncElIdGNiaUFnSUNCeVpYUjFjbTRnWm1Gc2MyVTdYRzRnSUgxY2JseHVJQ0JtYjNJZ0tHeGxkQ0JwSUQwZ01Ec2dhU0E4SUhOMFlYSjBMbXhsYm1kMGFEc2dhU3NyS1NCN1hHNGdJQ0FnYVdZZ0tITjBZWEowVzJsZElDRTlQU0JoY25KaGVWdHBYU2tnZTF4dUlDQWdJQ0FnY21WMGRYSnVJR1poYkhObE8xeHVJQ0FnSUgxY2JpQWdmVnh1WEc0Z0lISmxkSFZ5YmlCMGNuVmxPMXh1ZlZ4dUlsMTlcbiIsIi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcblxuLyppc3RhbmJ1bCBpZ25vcmUgZW5kKi9cbi8vIEl0ZXJhdG9yIHRoYXQgdHJhdmVyc2VzIGluIHRoZSByYW5nZSBvZiBbbWluLCBtYXhdLCBzdGVwcGluZ1xuLy8gYnkgZGlzdGFuY2UgZnJvbSBhIGdpdmVuIHN0YXJ0IHBvc2l0aW9uLiBJLmUuIGZvciBbMCwgNF0sIHdpdGhcbi8vIHN0YXJ0IG9mIDIsIHRoaXMgd2lsbCBpdGVyYXRlIDIsIDMsIDEsIDQsIDAuXG5mdW5jdGlvblxuLyppc3RhbmJ1bCBpZ25vcmUgc3RhcnQqL1xuX2RlZmF1bHRcbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG4oc3RhcnQsIG1pbkxpbmUsIG1heExpbmUpIHtcbiAgdmFyIHdhbnRGb3J3YXJkID0gdHJ1ZSxcbiAgICAgIGJhY2t3YXJkRXhoYXVzdGVkID0gZmFsc2UsXG4gICAgICBmb3J3YXJkRXhoYXVzdGVkID0gZmFsc2UsXG4gICAgICBsb2NhbE9mZnNldCA9IDE7XG4gIHJldHVybiBmdW5jdGlvbiBpdGVyYXRvcigpIHtcbiAgICBpZiAod2FudEZvcndhcmQgJiYgIWZvcndhcmRFeGhhdXN0ZWQpIHtcbiAgICAgIGlmIChiYWNrd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICBsb2NhbE9mZnNldCsrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2FudEZvcndhcmQgPSBmYWxzZTtcbiAgICAgIH0gLy8gQ2hlY2sgaWYgdHJ5aW5nIHRvIGZpdCBiZXlvbmQgdGV4dCBsZW5ndGgsIGFuZCBpZiBub3QsIGNoZWNrIGl0IGZpdHNcbiAgICAgIC8vIGFmdGVyIG9mZnNldCBsb2NhdGlvbiAob3IgZGVzaXJlZCBsb2NhdGlvbiBvbiBmaXJzdCBpdGVyYXRpb24pXG5cblxuICAgICAgaWYgKHN0YXJ0ICsgbG9jYWxPZmZzZXQgPD0gbWF4TGluZSkge1xuICAgICAgICByZXR1cm4gbG9jYWxPZmZzZXQ7XG4gICAgICB9XG5cbiAgICAgIGZvcndhcmRFeGhhdXN0ZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmICghYmFja3dhcmRFeGhhdXN0ZWQpIHtcbiAgICAgIGlmICghZm9yd2FyZEV4aGF1c3RlZCkge1xuICAgICAgICB3YW50Rm9yd2FyZCA9IHRydWU7XG4gICAgICB9IC8vIENoZWNrIGlmIHRyeWluZyB0byBmaXQgYmVmb3JlIHRleHQgYmVnaW5uaW5nLCBhbmQgaWYgbm90LCBjaGVjayBpdCBmaXRzXG4gICAgICAvLyBiZWZvcmUgb2Zmc2V0IGxvY2F0aW9uXG5cblxuICAgICAgaWYgKG1pbkxpbmUgPD0gc3RhcnQgLSBsb2NhbE9mZnNldCkge1xuICAgICAgICByZXR1cm4gLWxvY2FsT2Zmc2V0Kys7XG4gICAgICB9XG5cbiAgICAgIGJhY2t3YXJkRXhoYXVzdGVkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBpdGVyYXRvcigpO1xuICAgIH0gLy8gV2UgdHJpZWQgdG8gZml0IGh1bmsgYmVmb3JlIHRleHQgYmVnaW5uaW5nIGFuZCBiZXlvbmQgdGV4dCBsZW5ndGgsIHRoZW5cbiAgICAvLyBodW5rIGNhbid0IGZpdCBvbiB0aGUgdGV4dC4gUmV0dXJuIHVuZGVmaW5lZFxuXG4gIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJaTR1THk0dUwzTnlZeTkxZEdsc0wyUnBjM1JoYm1ObExXbDBaWEpoZEc5eUxtcHpJbDBzSW01aGJXVnpJanBiSW5OMFlYSjBJaXdpYldsdVRHbHVaU0lzSW0xaGVFeHBibVVpTENKM1lXNTBSbTl5ZDJGeVpDSXNJbUpoWTJ0M1lYSmtSWGhvWVhWemRHVmtJaXdpWm05eWQyRnlaRVY0YUdGMWMzUmxaQ0lzSW14dlkyRnNUMlptYzJWMElpd2lhWFJsY21GMGIzSWlYU3dpYldGd2NHbHVaM01pT2lJN096czdPenM3T3p0QlFVRkJPMEZCUTBFN1FVRkRRVHRCUVVObE8wRkJRVUU3UVVGQlFUdEJRVUZCTzBGQlFVRXNRMEZCVTBFc1MwRkJWQ3hGUVVGblFrTXNUMEZCYUVJc1JVRkJlVUpETEU5QlFYcENMRVZCUVd0RE8wRkJReTlETEUxQlFVbERMRmRCUVZjc1IwRkJSeXhKUVVGc1FqdEJRVUZCTEUxQlEwbERMR2xDUVVGcFFpeEhRVUZITEV0QlJIaENPMEZCUVVFc1RVRkZTVU1zWjBKQlFXZENMRWRCUVVjc1MwRkdka0k3UVVGQlFTeE5RVWRKUXl4WFFVRlhMRWRCUVVjc1EwRkliRUk3UVVGTFFTeFRRVUZQTEZOQlFWTkRMRkZCUVZRc1IwRkJiMEk3UVVGRGVrSXNVVUZCU1Vvc1YwRkJWeXhKUVVGSkxFTkJRVU5GTEdkQ1FVRndRaXhGUVVGelF6dEJRVU53UXl4VlFVRkpSQ3hwUWtGQlNpeEZRVUYxUWp0QlFVTnlRa1VzVVVGQlFVRXNWMEZCVnp0QlFVTmFMRTlCUmtRc1RVRkZUenRCUVVOTVNDeFJRVUZCUVN4WFFVRlhMRWRCUVVjc1MwRkJaRHRCUVVORUxFOUJURzFETEVOQlQzQkRPMEZCUTBFN096dEJRVU5CTEZWQlFVbElMRXRCUVVzc1IwRkJSMDBzVjBGQlVpeEpRVUYxUWtvc1QwRkJNMElzUlVGQmIwTTdRVUZEYkVNc1pVRkJUMGtzVjBGQlVEdEJRVU5FT3p0QlFVVkVSQ3hOUVVGQlFTeG5Ra0ZCWjBJc1IwRkJSeXhKUVVGdVFqdEJRVU5FT3p0QlFVVkVMRkZCUVVrc1EwRkJRMFFzYVVKQlFVd3NSVUZCZDBJN1FVRkRkRUlzVlVGQlNTeERRVUZEUXl4blFrRkJUQ3hGUVVGMVFqdEJRVU55UWtZc1VVRkJRVUVzVjBGQlZ5eEhRVUZITEVsQlFXUTdRVUZEUkN4UFFVaHhRaXhEUVV0MFFqdEJRVU5CT3pzN1FVRkRRU3hWUVVGSlJpeFBRVUZQTEVsQlFVbEVMRXRCUVVzc1IwRkJSMDBzVjBGQmRrSXNSVUZCYjBNN1FVRkRiRU1zWlVGQlR5eERRVUZEUVN4WFFVRlhMRVZCUVc1Q08wRkJRMFE3TzBGQlJVUkdMRTFCUVVGQkxHbENRVUZwUWl4SFFVRkhMRWxCUVhCQ08wRkJRMEVzWVVGQlQwY3NVVUZCVVN4RlFVRm1PMEZCUTBRc1MwRTVRbmRDTEVOQlowTjZRanRCUVVOQk96dEJRVU5FTEVkQmJFTkVPMEZCYlVORUlpd2ljMjkxY21ObGMwTnZiblJsYm5RaU9sc2lMeThnU1hSbGNtRjBiM0lnZEdoaGRDQjBjbUYyWlhKelpYTWdhVzRnZEdobElISmhibWRsSUc5bUlGdHRhVzRzSUcxaGVGMHNJSE4wWlhCd2FXNW5YRzR2THlCaWVTQmthWE4wWVc1alpTQm1jbTl0SUdFZ1oybDJaVzRnYzNSaGNuUWdjRzl6YVhScGIyNHVJRWt1WlM0Z1ptOXlJRnN3TENBMFhTd2dkMmwwYUZ4dUx5OGdjM1JoY25RZ2IyWWdNaXdnZEdocGN5QjNhV3hzSUdsMFpYSmhkR1VnTWl3Z015d2dNU3dnTkN3Z01DNWNibVY0Y0c5eWRDQmtaV1poZFd4MElHWjFibU4wYVc5dUtITjBZWEowTENCdGFXNU1hVzVsTENCdFlYaE1hVzVsS1NCN1hHNGdJR3hsZENCM1lXNTBSbTl5ZDJGeVpDQTlJSFJ5ZFdVc1hHNGdJQ0FnSUNCaVlXTnJkMkZ5WkVWNGFHRjFjM1JsWkNBOUlHWmhiSE5sTEZ4dUlDQWdJQ0FnWm05eWQyRnlaRVY0YUdGMWMzUmxaQ0E5SUdaaGJITmxMRnh1SUNBZ0lDQWdiRzlqWVd4UFptWnpaWFFnUFNBeE8xeHVYRzRnSUhKbGRIVnliaUJtZFc1amRHbHZiaUJwZEdWeVlYUnZjaWdwSUh0Y2JpQWdJQ0JwWmlBb2QyRnVkRVp2Y25kaGNtUWdKaVlnSVdadmNuZGhjbVJGZUdoaGRYTjBaV1FwSUh0Y2JpQWdJQ0FnSUdsbUlDaGlZV05yZDJGeVpFVjRhR0YxYzNSbFpDa2dlMXh1SUNBZ0lDQWdJQ0JzYjJOaGJFOW1abk5sZENzck8xeHVJQ0FnSUNBZ2ZTQmxiSE5sSUh0Y2JpQWdJQ0FnSUNBZ2QyRnVkRVp2Y25kaGNtUWdQU0JtWVd4elpUdGNiaUFnSUNBZ0lIMWNibHh1SUNBZ0lDQWdMeThnUTJobFkyc2dhV1lnZEhKNWFXNW5JSFJ2SUdacGRDQmlaWGx2Ym1RZ2RHVjRkQ0JzWlc1bmRHZ3NJR0Z1WkNCcFppQnViM1FzSUdOb1pXTnJJR2wwSUdacGRITmNiaUFnSUNBZ0lDOHZJR0ZtZEdWeUlHOW1abk5sZENCc2IyTmhkR2x2YmlBb2IzSWdaR1Z6YVhKbFpDQnNiMk5oZEdsdmJpQnZiaUJtYVhKemRDQnBkR1Z5WVhScGIyNHBYRzRnSUNBZ0lDQnBaaUFvYzNSaGNuUWdLeUJzYjJOaGJFOW1abk5sZENBOFBTQnRZWGhNYVc1bEtTQjdYRzRnSUNBZ0lDQWdJSEpsZEhWeWJpQnNiMk5oYkU5bVpuTmxkRHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnWm05eWQyRnlaRVY0YUdGMWMzUmxaQ0E5SUhSeWRXVTdYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2FXWWdLQ0ZpWVdOcmQyRnlaRVY0YUdGMWMzUmxaQ2tnZTF4dUlDQWdJQ0FnYVdZZ0tDRm1iM0ozWVhKa1JYaG9ZWFZ6ZEdWa0tTQjdYRzRnSUNBZ0lDQWdJSGRoYm5SR2IzSjNZWEprSUQwZ2RISjFaVHRjYmlBZ0lDQWdJSDFjYmx4dUlDQWdJQ0FnTHk4Z1EyaGxZMnNnYVdZZ2RISjVhVzVuSUhSdklHWnBkQ0JpWldadmNtVWdkR1Y0ZENCaVpXZHBibTVwYm1jc0lHRnVaQ0JwWmlCdWIzUXNJR05vWldOcklHbDBJR1pwZEhOY2JpQWdJQ0FnSUM4dklHSmxabTl5WlNCdlptWnpaWFFnYkc5allYUnBiMjVjYmlBZ0lDQWdJR2xtSUNodGFXNU1hVzVsSUR3OUlITjBZWEowSUMwZ2JHOWpZV3hQWm1aelpYUXBJSHRjYmlBZ0lDQWdJQ0FnY21WMGRYSnVJQzFzYjJOaGJFOW1abk5sZENzck8xeHVJQ0FnSUNBZ2ZWeHVYRzRnSUNBZ0lDQmlZV05yZDJGeVpFVjRhR0YxYzNSbFpDQTlJSFJ5ZFdVN1hHNGdJQ0FnSUNCeVpYUjFjbTRnYVhSbGNtRjBiM0lvS1R0Y2JpQWdJQ0I5WEc1Y2JpQWdJQ0F2THlCWFpTQjBjbWxsWkNCMGJ5Qm1hWFFnYUhWdWF5QmlaV1p2Y21VZ2RHVjRkQ0JpWldkcGJtNXBibWNnWVc1a0lHSmxlVzl1WkNCMFpYaDBJR3hsYm1kMGFDd2dkR2hsYmx4dUlDQWdJQzh2SUdoMWJtc2dZMkZ1SjNRZ1ptbDBJRzl1SUhSb1pTQjBaWGgwTGlCU1pYUjFjbTRnZFc1a1pXWnBibVZrWEc0Z0lIMDdYRzU5WEc0aVhYMD1cbiIsIi8qaXN0YW5idWwgaWdub3JlIHN0YXJ0Ki9cblwidXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5nZW5lcmF0ZU9wdGlvbnMgPSBnZW5lcmF0ZU9wdGlvbnM7XG5cbi8qaXN0YW5idWwgaWdub3JlIGVuZCovXG5mdW5jdGlvbiBnZW5lcmF0ZU9wdGlvbnMob3B0aW9ucywgZGVmYXVsdHMpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZGVmYXVsdHMuY2FsbGJhY2sgPSBvcHRpb25zO1xuICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIG9wdGlvbnMpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgICBpZiAob3B0aW9ucy5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgICAgICBkZWZhdWx0c1tuYW1lXSA9IG9wdGlvbnNbbmFtZV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlZmF1bHRzO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSWk0dUx5NHVMM055WXk5MWRHbHNMM0JoY21GdGN5NXFjeUpkTENKdVlXMWxjeUk2V3lKblpXNWxjbUYwWlU5d2RHbHZibk1pTENKdmNIUnBiMjV6SWl3aVpHVm1ZWFZzZEhNaUxDSmpZV3hzWW1GamF5SXNJbTVoYldVaUxDSm9ZWE5QZDI1UWNtOXdaWEowZVNKZExDSnRZWEJ3YVc1bmN5STZJanM3T3pzN096czdPMEZCUVU4c1UwRkJVMEVzWlVGQlZDeERRVUY1UWtNc1QwRkJla0lzUlVGQmEwTkRMRkZCUVd4RExFVkJRVFJETzBGQlEycEVMRTFCUVVrc1QwRkJUMFFzVDBGQlVDeExRVUZ0UWl4VlFVRjJRaXhGUVVGdFF6dEJRVU5xUTBNc1NVRkJRVUVzVVVGQlVTeERRVUZEUXl4UlFVRlVMRWRCUVc5Q1JpeFBRVUZ3UWp0QlFVTkVMRWRCUmtRc1RVRkZUeXhKUVVGSlFTeFBRVUZLTEVWQlFXRTdRVUZEYkVJc1UwRkJTeXhKUVVGSlJ5eEpRVUZVTEVsQlFXbENTQ3hQUVVGcVFpeEZRVUV3UWp0QlFVTjRRanRCUVVOQkxGVkJRVWxCTEU5QlFVOHNRMEZCUTBrc1kwRkJVaXhEUVVGMVFrUXNTVUZCZGtJc1EwRkJTaXhGUVVGclF6dEJRVU5vUTBZc1VVRkJRVUVzVVVGQlVTeERRVUZEUlN4SlFVRkVMRU5CUVZJc1IwRkJhVUpJTEU5QlFVOHNRMEZCUTBjc1NVRkJSQ3hEUVVGNFFqdEJRVU5FTzBGQlEwWTdRVUZEUmpzN1FVRkRSQ3hUUVVGUFJpeFJRVUZRTzBGQlEwUWlMQ0p6YjNWeVkyVnpRMjl1ZEdWdWRDSTZXeUpsZUhCdmNuUWdablZ1WTNScGIyNGdaMlZ1WlhKaGRHVlBjSFJwYjI1ektHOXdkR2x2Ym5Nc0lHUmxabUYxYkhSektTQjdYRzRnSUdsbUlDaDBlWEJsYjJZZ2IzQjBhVzl1Y3lBOVBUMGdKMloxYm1OMGFXOXVKeWtnZTF4dUlDQWdJR1JsWm1GMWJIUnpMbU5oYkd4aVlXTnJJRDBnYjNCMGFXOXVjenRjYmlBZ2ZTQmxiSE5sSUdsbUlDaHZjSFJwYjI1ektTQjdYRzRnSUNBZ1ptOXlJQ2hzWlhRZ2JtRnRaU0JwYmlCdmNIUnBiMjV6S1NCN1hHNGdJQ0FnSUNBdktpQnBjM1JoYm1KMWJDQnBaMjV2Y21VZ1pXeHpaU0FxTDF4dUlDQWdJQ0FnYVdZZ0tHOXdkR2x2Ym5NdWFHRnpUM2R1VUhKdmNHVnlkSGtvYm1GdFpTa3BJSHRjYmlBZ0lDQWdJQ0FnWkdWbVlYVnNkSE5iYm1GdFpWMGdQU0J2Y0hScGIyNXpXMjVoYldWZE8xeHVJQ0FnSUNBZ2ZWeHVJQ0FnSUgxY2JpQWdmVnh1SUNCeVpYUjFjbTRnWkdWbVlYVnNkSE03WEc1OVhHNGlYWDA9XG4iLCIvLyBNb2R1bGVcbnZhciBjb2RlID0gXCI8c3BhbiBpZD1cXFwiY29udGFpbmVye3tpZH19XFxcIiBjbGFzcz1cXFwiYmxhbmsge3sjYmxhbmsuaGFzUGVuZGluZ0ZlZWRiYWNrfX1oYXMtcGVuZGluZy1mZWVkYmFja3t7L2lmfX0ge3sjYmxhbmsuaGFzSGludH19aGFzLXRpcHt7L2lmfX0ge3sjYmxhbmsuaXNDb3JyZWN0fX1jb3JyZWN0e3svaWZ9fSB7eyNibGFuay5pc0Vycm9yfX1lcnJvcnt7L2lmfX0ge3sjYmxhbmsuaXNSZXRyeX19cmV0cnl7ey9pZn19IHt7I2JsYW5rLmlzU2hvd2luZ1NvbHV0aW9ufX1zaG93aW5nLXNvbHV0aW9ue3svaWZ9fVxcXCI+XFxuICB7eyN1bmxlc3MgaXNTZWxlY3RDbG96ZX19XFxuICAgIDxzcGFuIGNsYXNzPVxcXCJoNXAtaW5wdXQtd3JhcHBlclxcXCI+XFxuICAgICAgPGlucHV0IGlkPVxcXCJ7e2JsYW5rLmlkfX1cXFwiIHR5cGU9XFxcInRleHRcXFwiIHZhbHVlPVxcXCJ7e2JsYW5rLmVudGVyZWRUZXh0fX1cXFwiIFxcbiAgICAgICAgICAgICBzaXplPVxcXCJ7e2JsYW5rLm1pblRleHRMZW5ndGh9fVxcXCIgb24tZXNjYXBlPVxcXCJAdGhpcy5maXJlKCdjbG9zZU1lc3NhZ2UnLCB7fSwgYmxhbmspXFxcIiBcXG4gICAgICAgICAgICAgb24tZW50ZXI9XFxcIkB0aGlzLmZpcmUoJ2NoZWNrQmxhbmsnLCB7fSwgYmxhbmssICdlbnRlcicpXFxcIiBcXG4gICAgICAgICAgICAgb24tYmx1cj1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIHt9LCBibGFuaywgJ2JsdXInKVxcXCIgXFxuICAgICAgICAgICAgIG9uLWZvY3VzPVxcXCJAdGhpcy5maXJlKCdmb2N1cycsIHt9LCBibGFuaylcXFwiXFxuICAgICAgICAgICAgIG9uLWFueWtleT1cXFwiQHRoaXMuZmlyZSgndGV4dFR5cGVkJywge30sIGJsYW5rKVxcXCJcXG4gICAgICAgICAgICAgb24tY2hhbmdlPVxcXCJAdGhpcy5maXJlKCd0ZXh0Q2hhbmdlZCcsIHt9LCBibGFuaylcXFwiXFxuICAgICAgICAgICAgIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fVxcbiAgICAgICAgICAgICBjbGFzcz1cXFwiaDVwLXRleHQtaW5wdXRcXFwiXFxuICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cXFwib2ZmXFxcIlxcbiAgICAgICAgICAgICBhdXRvY2FwaXRhbGl6ZT1cXFwib2ZmXFxcIi8+XFxuICAgICAge3sjYmxhbmsuaGFzSGludH19XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLXRpcC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdzaG93SGludCcsIHt9LCBibGFuaylcXFwiIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiIHt7L2lmfX0+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImpvdWJlbC10aXAtY29udGFpbmVyXFxcIiB0aXRsZT1cXFwiVGlwXFxcIiBhcmlhLWxhYmVsPVxcXCJUaXBcXFwiIGFyaWEtZXhwYW5kZWQ9XFxcInRydWVcXFwiIHJvbGU9XFxcImJ1dHRvblxcXCIgdGFiaW5kZXg9XFxcIjBcXFwiPjxzcGFuIGNsYXNzPVxcXCJqb3ViZWwtaWNvbi10aXAtbm9ybWFsIFxcXCI+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLXNoYWRvd1xcXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVxcXCJoNXAtaWNvbi1zcGVlY2gtYnViYmxlXFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLWluZm9cXFwiPjwvc3Bhbj48L3NwYW4+PC9zcGFuPlxcbiAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIHt7L2lmfX1cXG4gICAgPC9zcGFuPiAgICBcXG4gIHt7L3VubGVzc319XFxuICB7eyNpZiBpc1NlbGVjdENsb3plfX1cXG4gICAgICA8YnV0dG9uIGNsYXNzPVxcXCJoNXAtbm90aWZpY2F0aW9uXFxcIiBvbi1jbGljaz1cXFwiQHRoaXMuZmlyZSgnZGlzcGxheUZlZWRiYWNrJywge30sIGJsYW5rKVxcXCI+XFxuICAgICAgICAmI3hmMDVhO1xcbiAgICAgIDwvYnV0dG9uPlxcbiAgICAgIDxzcGFuIGNsYXNzPVxcXCJoNXAtaW5wdXQtd3JhcHBlclxcXCI+ICAgICAgXFxuICAgICAgPHNlbGVjdCBpZD1cXFwie3tibGFuay5pZH19XFxcIiB0eXBlPVxcXCJ0ZXh0XFxcIiB2YWx1ZT1cXFwie3tibGFuay5lbnRlcmVkVGV4dH19XFxcIlxcbiAgICAgICAgICAgICAgb24tZW50ZXI9XFxcIkB0aGlzLmZpcmUoJ2NoZWNrQmxhbmsnLCB7fSwgYmxhbmssICdlbnRlcicpXFxcIiBcXG4gICAgICAgICAgICAgIG9uLWNoYW5nZT1cXFwiQHRoaXMuZmlyZSgnY2hlY2tCbGFuaycsIHt9LCBibGFuaywgJ2NoYW5nZScpXFxcIlxcbiAgICAgICAgICAgICAgb24tZm9jdXM9XFxcIkB0aGlzLmZpcmUoJ2ZvY3VzJywge30sIGJsYW5rKVxcXCJcXG4gICAgICAgICAgICAgIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fSBcXG4gICAgICAgICAgICAgIHNpemU9XFxcIjFcXFwiXFxuICAgICAgICAgICAgICBjbGFzcz1cXFwiaDVwLXRleHQtaW5wdXRcXFwiPlxcbiAgICAgICAge3sjZWFjaCBibGFuay5jaG9pY2VzfX1cXG4gICAgICAgICAgPG9wdGlvbj57e3RoaXN9fTwvb3B0aW9uPlxcbiAgICAgICAge3svZWFjaH19XFxuICAgICAgPC9zZWxlY3Q+XFxuICAgICAge3sjYmxhbmsuaGFzSGludH19XFxuICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaDVwLXRpcC1jb250YWluZXJcXFwiPlxcbiAgICAgICAgICA8YnV0dG9uIG9uLWNsaWNrPVxcXCJAdGhpcy5maXJlKCdzaG93SGludCcsIHt9LCBibGFuaylcXFwiIHt7IyhibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNTaG93aW5nU29sdXRpb24pfX1kaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwie3svaWZ9fT5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiam91YmVsLXRpcC1jb250YWluZXJcXFwiIHRpdGxlPVxcXCJUaXBcXFwiIGFyaWEtbGFiZWw9XFxcIlRpcFxcXCIgYXJpYS1leHBhbmRlZD1cXFwidHJ1ZVxcXCIgcm9sZT1cXFwiYnV0dG9uXFxcIiB0YWJpbmRleD1cXFwiMFxcXCI+PHNwYW4gY2xhc3M9XFxcImpvdWJlbC1pY29uLXRpcC1ub3JtYWwgXFxcIj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24tc2hhZG93XFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcImg1cC1pY29uLXNwZWVjaC1idWJibGVcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwiaDVwLWljb24taW5mb1xcXCI+PC9zcGFuPjwvc3Bhbj48L3NwYW4+XFxuICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9zcGFuPlxcbiAgICAgIHt7L2lmfX1cXG4gICAgPC9zcGFuPlxcbiAge3svaWZ9fVxcbjwvc3Bhbj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiLy8gTW9kdWxlXG52YXIgY29kZSA9IFwiPHNwYW4ge3sjb2JqZWN0LmlzSGlnaGxpZ2h0ZWR9fWNsYXNzPVxcXCJoaWdobGlnaHRlZFxcXCJ7ey9pZn19IGlkPVxcXCJ7e29iamVjdC5pZH19XFxcIj57e3tvYmplY3QudGV4dH19fTwvc3Bhbj5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBmdW5jdGlvbiBnZXRMb25nZXN0U3RyaW5nKHN0cmluZ3M6IHN0cmluZ1tdKTogc3RyaW5nIHtcbiAgcmV0dXJuIHN0cmluZ3MucmVkdWNlKChwcmV2LCBjdXJyZW50KSA9PiBjdXJyZW50Lmxlbmd0aCA+IHByZXYubGVuZ3RoID8gY3VycmVudCA6IHByZXYsIFwiXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2h1ZmZsZUFycmF5KGFycmF5OiBhbnlbXSkge1xuICBmb3IgKHZhciBpID0gYXJyYXkubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xuICAgIHZhciBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgdmFyIHRlbXAgPSBhcnJheVtpXTtcbiAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgIGFycmF5W2pdID0gdGVtcDtcbiAgfVxuICByZXR1cm4gYXJyYXk7XG59IiwiLy8gVE9ETyBjYW4gd2UganVzdCBkZWNsYXJlIHRoZSBrZXlkb3duSGFuZGxlciBvbmNlPyB1c2luZyBgdGhpc2A/XG5mdW5jdGlvbiBtYWtlS2V5RGVmaW5pdGlvbihjb2RlPzogbnVtYmVyKSB7XG4gIHJldHVybiAobm9kZSwgZmlyZSkgPT4ge1xuICAgIGZ1bmN0aW9uIGtleWRvd25IYW5kbGVyKGV2ZW50KSB7XG4gICAgICB2YXIgd2hpY2ggPSBldmVudC53aGljaCB8fCBldmVudC5rZXlDb2RlO1xuXG4gICAgICBpZiAoY29kZSAmJiB3aGljaCA9PT0gY29kZSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGZpcmUoe1xuICAgICAgICAgIG5vZGUsXG4gICAgICAgICAgb3JpZ2luYWw6IGV2ZW50XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoIWNvZGUgJiYgWzE2LCAxNywgMTgsIDM1LCAzNiwgMTMsIDksIDI3LCAzMiwgMzcsIDM5LCA0MCwgMzhdLmZpbHRlcihjID0+IGMgPT09IHdoaWNoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgZmlyZSh7XG4gICAgICAgICAgbm9kZSxcbiAgICAgICAgICBvcmlnaW5hbDogZXZlbnRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcblxuICAgIHJldHVybiB7XG4gICAgICB0ZWFyZG93bigpIHtcbiAgICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywga2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xufVxuXG5leHBvcnQgY29uc3QgZW50ZXIgPSBtYWtlS2V5RGVmaW5pdGlvbigxMyk7XG5leHBvcnQgY29uc3QgdGFiID0gbWFrZUtleURlZmluaXRpb24oOSk7XG5leHBvcnQgY29uc3QgZXNjYXBlID0gbWFrZUtleURlZmluaXRpb24oMjcpO1xuZXhwb3J0IGNvbnN0IHNwYWNlID0gbWFrZUtleURlZmluaXRpb24oMzIpO1xuXG5leHBvcnQgY29uc3QgbGVmdGFycm93ID0gbWFrZUtleURlZmluaXRpb24oMzcpO1xuZXhwb3J0IGNvbnN0IHJpZ2h0YXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbigzOSk7XG5leHBvcnQgY29uc3QgZG93bmFycm93ID0gbWFrZUtleURlZmluaXRpb24oNDApO1xuZXhwb3J0IGNvbnN0IHVwYXJyb3cgPSBtYWtlS2V5RGVmaW5pdGlvbigzOCk7XG5cbmV4cG9ydCBjb25zdCBhbnlrZXkgPSBtYWtlS2V5RGVmaW5pdGlvbigpOyIsImltcG9ydCB7IEJsYW5rTG9hZGVyIH0gZnJvbSAnLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcbmltcG9ydCB7IEg1UERhdGFSZXBvc2l0b3J5LCBJRGF0YVJlcG9zaXRvcnkgfSBmcm9tICcuL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeSc7XG5pbXBvcnQgeyBDbG96ZUNvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL2Nsb3plLWNvbnRyb2xsZXInO1xuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uLCBMb2NhbGl6YXRpb25MYWJlbHMsIExvY2FsaXphdGlvblN0cnVjdHVyZXMgfSBmcm9tIFwiLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7IElTZXR0aW5ncywgSDVQU2V0dGluZ3MgfSBmcm9tIFwiLi9zZXJ2aWNlcy9zZXR0aW5nc1wiO1xuaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBVbnJ3YXBwZXIgfSBmcm9tICcuL2hlbHBlcnMvdW53cmFwcGVyJztcbmltcG9ydCB7IFhBUElBY3Rpdml0eURlZmluaXRpb24gfSBmcm9tICcuL21vZGVscy94YXBpJztcbmltcG9ydCB7IGV4dGVuZCB9IGZyb20gJy4vaGVscGVycy9leHRlbmQnO1xuXG5lbnVtIFN0YXRlcyB7XG4gIG9uZ29pbmcgPSAnb25nb2luZycsXG4gIGNoZWNraW5nID0gJ2NoZWNraW5nJyxcbiAgc2hvd2luZ1NvbHV0aW9ucyA9ICdzaG93aW5nLXNvbHV0aW9uJyxcbiAgZmluaXNoZWQgPSAnZmluaXNoZWQnLFxuICBzaG93aW5nU29sdXRpb25zRW1iZWRkZWQgPSAnc2hvd2luZy1zb2x1dGlvbi1lbWJlZGRlZCdcbn1cblxuY29uc3QgWEFQSV9BTFRFUk5BVElWRV9FWFRFTlNJT04gPSAnaHR0cHM6Ly9oNXAub3JnL3gtYXBpL2FsdGVybmF0aXZlcyc7XG5jb25zdCBYQVBJX0NBU0VfU0VOU0lUSVZJVFkgPSAnaHR0cHM6Ly9oNXAub3JnL3gtYXBpL2Nhc2Utc2Vuc2l0aXZpdHknO1xuY29uc3QgWEFQSV9SRVBPUlRJTkdfVkVSU0lPTl9FWFRFTlNJT04gPSAnaHR0cHM6Ly9oNXAub3JnL3gtYXBpL2g1cC1yZXBvcnRpbmctdmVyc2lvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkdmFuY2VkQmxhbmtzIGV4dGVuZHMgKEg1UC5RdWVzdGlvbiBhcyB7IG5ldyh0eXBlPzogc3RyaW5nLCBvcHRpb25zPzogeyB0aGVtZT86IGJvb2xlYW4gfSk6IGFueTsgfSkge1xuXG4gIHByaXZhdGUgY2xvemVDb250cm9sbGVyOiBDbG96ZUNvbnRyb2xsZXI7XG4gIHByaXZhdGUgcmVwb3NpdG9yeTogSURhdGFSZXBvc2l0b3J5O1xuICBwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3M7XG4gIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb247XG4gIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlO1xuXG4gIHByaXZhdGUgalF1ZXJ5O1xuXG4gIHByaXZhdGUgY29udGVudElkOiBzdHJpbmc7XG4gIHByaXZhdGUgcHJldmlvdXNTdGF0ZTogYW55O1xuICBwcml2YXRlIHN0YXRlOiBTdGF0ZXM7XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiB1c2VyIGhhcyBlbnRlcmVkIGFueSBhbnN3ZXIgc28gZmFyLlxuICAgKi9cbiAgcHJpdmF0ZSBhbnN3ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIGExMXlIZWFkZXI6IEhUTUxEaXZFbGVtZW50O1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICpcbiAgICogQHBhcmFtIHtvYmplY3R9IGNvbmZpZ1xuICAgKiBAcGFyYW0ge3N0cmluZ30gY29udGVudElkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBjb250ZW50RGF0YVxuICAgKi9cbiAgY29uc3RydWN0b3IoY29uZmlnOiBhbnksIGNvbnRlbnRJZDogc3RyaW5nLCBjb250ZW50RGF0YTogYW55ID0ge30pIHtcbiAgICBzdXBlcignYWR2YW5jZWQtYmxhbmtzJywgeyB0aGVtZTogdHJ1ZSB9KTtcblxuICAgIC8vIFNldCBtYW5kYXRvcnkgZGVmYXVsdCB2YWx1ZXMgZm9yIGVkaXRvciB3aWRnZXRzIHRoYXQgY3JlYXRlIGNvbnRlbnQgdHlwZSBpbnN0YW5jZXNcbiAgICBjb25maWcgPSBleHRlbmQoe1xuICAgICAgY29udGVudDoge1xuICAgICAgICBibGFua3NUZXh0OiAnJ1xuICAgICAgfSxcbiAgICAgIGJlaGF2aW91cjoge1xuICAgICAgICBtb2RlOiAndHlwaW5nJyxcbiAgICAgICAgc2VsZWN0QWx0ZXJuYXRpdmVzOiAnYWx0ZXJuYXRpdmVzJ1xuICAgICAgfSxcbiAgICAgIHN1Ym1pdEFuc3dlcjogJ1N1Ym1pdCcsXG4gICAgICBhMTF5Q2hlY2s6ICdDaGVjayB0aGUgYW5zd2Vycy4gVGhlIHJlc3BvbnNlcyB3aWxsIGJlIG1hcmtlZCBhcyBjb3JyZWN0LCBpbmNvcnJlY3QsIG9yIHVuYW5zd2VyZWQuJyxcbiAgICAgIGExMXlTaG93U29sdXRpb246ICdTaG93IHRoZSBzb2x1dGlvbi4gVGhlIHRhc2sgd2lsbCBiZSBtYXJrZWQgd2l0aCBpdHMgY29ycmVjdCBzb2x1dGlvbi4nLFxuICAgICAgYTExeVJldHJ5OiAnUmV0cnkgdGhlIHRhc2suIFJlc2V0IGFsbCByZXNwb25zZXMgYW5kIHN0YXJ0IHRoZSB0YXNrIG92ZXIgYWdhaW4uJyxcbiAgICAgIGExMXlDaGVja2luZ01vZGVIZWFkZXI6ICdDaGVja2luZyBtb2RlJyxcbiAgICB9LCBjb25maWcpO1xuXG4gICAgdGhpcy5qUXVlcnkgPSBINVAualF1ZXJ5O1xuICAgIHRoaXMuY29udGVudElkID0gY29udGVudElkO1xuICAgIHRoaXMuY29udGVudERhdGEgPSBjb250ZW50RGF0YTtcblxuICAgIGxldCB1bndyYXBwZXIgPSBuZXcgVW5yd2FwcGVyKHRoaXMualF1ZXJ5KTtcblxuICAgIHRoaXMuc2V0dGluZ3MgPSBuZXcgSDVQU2V0dGluZ3MoY29uZmlnKTtcbiAgICB0aGlzLmxvY2FsaXphdGlvbiA9IG5ldyBINVBMb2NhbGl6YXRpb24oY29uZmlnKTtcbiAgICB0aGlzLnJlcG9zaXRvcnkgPSBuZXcgSDVQRGF0YVJlcG9zaXRvcnkoY29uZmlnLCB0aGlzLnNldHRpbmdzLCB0aGlzLmxvY2FsaXphdGlvbiwgPEpRdWVyeVN0YXRpYz50aGlzLmpRdWVyeSwgdW53cmFwcGVyKTtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlID0gbmV3IE1lc3NhZ2VTZXJ2aWNlKHRoaXMualF1ZXJ5KTtcbiAgICBCbGFua0xvYWRlci5pbml0aWFsaXplKHRoaXMuc2V0dGluZ3MsIHRoaXMubG9jYWxpemF0aW9uLCB0aGlzLmpRdWVyeSwgdGhpcy5tZXNzYWdlU2VydmljZSk7XG5cbiAgICB0aGlzLmNsb3plQ29udHJvbGxlciA9IG5ldyBDbG96ZUNvbnRyb2xsZXIodGhpcy5yZXBvc2l0b3J5LCB0aGlzLnNldHRpbmdzLCB0aGlzLmxvY2FsaXphdGlvbiwgdGhpcy5tZXNzYWdlU2VydmljZSk7XG5cbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5vblNjb3JlQ2hhbmdlZCA9IHRoaXMub25TY29yZUNoYW5nZWQ7XG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25Tb2x2ZWQgPSB0aGlzLm9uU29sdmVkO1xuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLm9uQXV0b0NoZWNrZWQgPSB0aGlzLm9uQXV0b0NoZWNrZWQ7XG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIub25UeXBlZCA9IHRoaXMub25UeXBlZDtcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5vblRleHRDaGFuZ2VkID0gKCkgPT4gdGhpcy50cmlnZ2VyWEFQSSgnaW50ZXJhY3RlZCcpO1xuXG4gICAgaWYgKGNvbnRlbnREYXRhICYmIGNvbnRlbnREYXRhLnByZXZpb3VzU3RhdGUpXG4gICAgICB0aGlzLnByZXZpb3VzU3RhdGUgPSBjb250ZW50RGF0YS5wcmV2aW91c1N0YXRlO1xuXG4gICAgLyoqXG4gICAgKiBPdmVycmlkZXMgdGhlIGF0dGFjaCBtZXRob2Qgb2YgdGhlIHN1cGVyY2xhc3MgKEg1UC5RdWVzdGlvbikgYW5kIGNhbGxzIGl0XG4gICAgKiBhdCB0aGUgc2FtZSB0aW1lLiAoZXF1aXZhbGVudCB0byBzdXBlci5hdHRhY2goJGNvbnRhaW5lcikpLlxuICAgICogVGhpcyBpcyBuZWNlc3NhcnksIGFzIFJhY3RpdmUgbmVlZHMgdG8gYmUgaW5pdGlhbGl6ZWQgd2l0aCBhbiBleGlzdGluZyBET01cbiAgICAqIGVsZW1lbnQuIERPTSBlbGVtZW50cyBhcmUgY3JlYXRlZCBpbiBINVAuUXVlc3Rpb24uYXR0YWNoLCBzbyBpbml0aWFsaXppbmdcbiAgICAqIFJhY3RpdmUgaW4gcmVnaXN0ZXJEb21FbGVtZW50cyBkb2Vzbid0IHdvcmsuXG4gICAgKi9cbiAgICB0aGlzLmF0dGFjaCA9ICgob3JpZ2luYWwpID0+IHtcbiAgICAgIHJldHVybiAoJGNvbnRhaW5lcikgPT4ge1xuICAgICAgICBvcmlnaW5hbCgkY29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIuaW5pdGlhbGl6ZSh0aGlzLmNvbnRhaW5lci5nZXQoMCksICRjb250YWluZXIpO1xuICAgICAgICB0aGlzLnNldHVwQTExeUhlYWRlcigpO1xuICAgICAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuZGVzZXJpYWxpemVDbG96ZSh0aGlzLnByZXZpb3VzU3RhdGUpKSB7XG4gICAgICAgICAgdGhpcy5hbnN3ZXJlZCA9IHRoaXMuY2xvemVDb250cm9sbGVyLmlzRmlsbGVkT3V0O1xuICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9DaGVjaylcbiAgICAgICAgICAgIHRoaXMub25DaGVja0Fuc3dlcigpO1xuICAgICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pKHRoaXMuYXR0YWNoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsZWQgZnJvbSBvdXRzaWRlIHdoZW4gdGhlIHNjb3JlIG9mIHRoZSBjbG96ZSBoYXMgY2hhbmdlZC5cbiAgICovXG4gIHByaXZhdGUgb25TY29yZUNoYW5nZWQgPSAoc2NvcmU6IG51bWJlciwgbWF4U2NvcmU6IG51bWJlcikgPT4ge1xuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5pc0Z1bGx5RmlsbGVkT3V0KSB7XG4gICAgICB0aGlzLnRyYW5zaXRpb25TdGF0ZSgpO1xuICAgICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlcy5maW5pc2hlZClcbiAgICAgICAgdGhpcy5zdGF0ZSA9IFN0YXRlcy5jaGVja2luZztcbiAgICAgIHRoaXMuc2hvd0ZlZWRiYWNrKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZXRGZWVkYmFjayhcIlwiLCBzY29yZSwgbWF4U2NvcmUpO1xuICAgIH1cbiAgICB0aGlzLnRyYW5zaXRpb25TdGF0ZSgpO1xuICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eSh0aGlzLnN0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25Tb2x2ZWQoKSB7XG5cbiAgfVxuXG4gIHByaXZhdGUgb25UeXBlZCA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5zdGF0ZSA9PT0gU3RhdGVzLmNoZWNraW5nKSB7XG4gICAgICB0aGlzLnN0YXRlID0gU3RhdGVzLm9uZ29pbmc7XG4gICAgICB0aGlzLnRvZ2dsZUJ1dHRvblZpc2liaWxpdHkodGhpcy5zdGF0ZSk7XG4gICAgfVxuICAgIHRoaXMuYW5zd2VyZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkF1dG9DaGVja2VkID0gKCkgPT4ge1xuICAgIHRoaXMudHJpZ2dlclhBUEkoJ2ludGVyYWN0ZWQnKTtcbiAgICBpZiAodGhpcy5jbG96ZUNvbnRyb2xsZXIuaXNGdWxseUZpbGxlZE91dCkge1xuICAgICAgdGhpcy50cmlnZ2VyWEFQSUFuc3dlcmVkKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCBieSBINVAuUXVlc3Rpb24uYXR0YWNoKCkuIENyZWF0ZXMgYWxsIGNvbnRlbnQgZWxlbWVudHMgYW5kIHJlZ2lzdGVycyB0aGVtXG4gICAqIHdpdGggSDVQLlF1ZXN0aW9uLlxuICAgKi9cbiAgcmVnaXN0ZXJEb21FbGVtZW50cyA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLnJlZ2lzdGVyTWVkaWEoKTtcbiAgICB0aGlzLnNldEludHJvZHVjdGlvbih0aGlzLnJlcG9zaXRvcnkuZ2V0VGFza0Rlc2NyaXB0aW9uKCkpO1xuXG4gICAgdGhpcy5jb250YWluZXIgPSB0aGlzLmpRdWVyeShcIjxkaXYvPlwiLCB7IFwiY2xhc3NcIjogXCJoNXAtYWR2YW5jZWQtYmxhbmtzXCIgfSk7XG4gICAgdGhpcy5zZXRDb250ZW50KHRoaXMuY29udGFpbmVyKTtcbiAgICB0aGlzLnJlZ2lzdGVyQnV0dG9ucygpO1xuXG4gICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMub25nb2luZyk7XG4gIH1cblxuICBwcml2YXRlIHNldHVwQTExeUhlYWRlcigpIHtcbiAgICB0aGlzLmExMXlIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLmExMXlIZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuLWJ1dC1yZWFkJyk7XG4gICAgdGhpcy5hMTF5SGVhZGVyLnRhYkluZGV4ID0gLTE7XG4gICAgdGhpcy5jb250YWluZXIuZ2V0KDApLmluc2VydEJlZm9yZSh0aGlzLmExMXlIZWFkZXIsIHRoaXMuY29udGFpbmVyLmdldCgwKS5maXJzdENoaWxkKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcmV0dXJucyBKUXVlcnkgLSBUaGUgb3V0ZXIgaDVwIGNvbnRhaW5lci4gVGhlIGxpYnJhcnkgY2FuIGFkZCBkaWFsb2d1ZXMgdG8gdGhpc1xuICAgKiBlbGVtZW50LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRINXBDb250YWluZXIoKTogSlF1ZXJ5IHtcbiAgICB2YXIgJGNvbnRlbnQgPSB0aGlzLmpRdWVyeSgnW2RhdGEtY29udGVudC1pZD1cIicgKyB0aGlzLmNvbnRlbnRJZCArICdcIl0uaDVwLWNvbnRlbnQnKTtcbiAgICB2YXIgJGNvbnRhaW5lclBhcmVudHMgPSAkY29udGVudC5wYXJlbnRzKCcuaDVwLWNvbnRhaW5lcicpO1xuXG4gICAgLy8gc2VsZWN0IGZpbmQgY29udGFpbmVyIHRvIGF0dGFjaCBkaWFsb2dzIHRvXG4gICAgdmFyICRjb250YWluZXI7XG4gICAgaWYgKCRjb250YWluZXJQYXJlbnRzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgLy8gdXNlIHBhcmVudCBoaWdoZXN0IHVwIGlmIGFueVxuICAgICAgJGNvbnRhaW5lciA9ICRjb250YWluZXJQYXJlbnRzLmxhc3QoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoJGNvbnRlbnQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAkY29udGFpbmVyID0gJGNvbnRlbnQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJGNvbnRhaW5lciA9IHRoaXMualF1ZXJ5KGRvY3VtZW50LmJvZHkpO1xuICAgIH1cblxuICAgIHJldHVybiAkY29udGFpbmVyO1xuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3Rlck1lZGlhKCkge1xuICAgIHZhciBtZWRpYSA9IHRoaXMucmVwb3NpdG9yeS5nZXRNZWRpYSgpO1xuICAgIGlmICghbWVkaWEgfHwgIW1lZGlhLmxpYnJhcnkpXG4gICAgICByZXR1cm47XG5cbiAgICB2YXIgdHlwZSA9IG1lZGlhLmxpYnJhcnkuc3BsaXQoJyAnKVswXTtcbiAgICBpZiAodHlwZSA9PT0gJ0g1UC5JbWFnZScpIHtcbiAgICAgIGlmIChtZWRpYS5wYXJhbXMuZmlsZSkge1xuICAgICAgICB0aGlzLnNldEltYWdlKG1lZGlhLnBhcmFtcy5maWxlLnBhdGgsIHtcbiAgICAgICAgICBkaXNhYmxlSW1hZ2Vab29taW5nOiB0aGlzLnNldHRpbmdzLmRpc2FibGVJbWFnZVpvb21pbmcsXG4gICAgICAgICAgYWx0OiBtZWRpYS5wYXJhbXMuYWx0LFxuICAgICAgICAgIGV4cGFuZEltYWdlOiBtZWRpYS5wYXJhbXMuZXhwYW5kSW1hZ2UsXG4gICAgICAgICAgbWluaW1pemVJbWFnZTogbWVkaWEucGFyYW1zLm1pbmltaXplSW1hZ2VcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdINVAuVmlkZW8nKSB7XG4gICAgICBpZiAobWVkaWEucGFyYW1zLnNvdXJjZXMpIHtcbiAgICAgICAgdGhpcy5zZXRWaWRlbyhtZWRpYSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWdpc3RlckJ1dHRvbnMoKSB7XG4gICAgdmFyICRjb250YWluZXIgPSB0aGlzLmdldEg1cENvbnRhaW5lcigpO1xuXG5cbiAgICBpZiAoIXRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrKSB7XG4gICAgICAvLyBDaGVjayBhbnN3ZXIgYnV0dG9uXG4gICAgICB0aGlzLmFkZEJ1dHRvbignY2hlY2stYW5zd2VyJywgdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMuY2hlY2tBbGxCdXR0b24pLFxuICAgICAgICB0aGlzLm9uQ2hlY2tBbnN3ZXIsIHRydWUsIHtcbiAgICAgICAgJ2FyaWEtbGFiZWwnOiB0aGlzLmxvY2FsaXphdGlvbi5nZXRUZXh0RnJvbUxhYmVsKExvY2FsaXphdGlvbkxhYmVscy5hMTF5Q2hlY2spLFxuICAgICAgfSwge1xuICAgICAgICBjb25maXJtYXRpb25EaWFsb2c6IHtcbiAgICAgICAgICBlbmFibGU6IHRoaXMuc2V0dGluZ3MuY29uZmlybUNoZWNrRGlhbG9nLFxuICAgICAgICAgIGwxMG46IHRoaXMubG9jYWxpemF0aW9uLmdldE9iamVjdEZvclN0cnVjdHVyZShMb2NhbGl6YXRpb25TdHJ1Y3R1cmVzLmNvbmZpcm1DaGVjayksXG4gICAgICAgICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgJHBhcmVudEVsZW1lbnQ6ICRjb250YWluZXIsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnREYXRhOiB0aGlzLmNvbnRlbnREYXRhLFxuICAgICAgICB0ZXh0SWZTdWJtaXR0aW5nOiB0aGlzLmxvY2FsaXphdGlvbi5nZXRUZXh0RnJvbUxhYmVsKExvY2FsaXphdGlvbkxhYmVscy5zdWJtaXRBbGxCdXR0b24pLFxuICAgICAgICBpY29uOiAnY2hlY2snLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gU2hvdyBzb2x1dGlvbiBidXR0b25cbiAgICB0aGlzLmFkZEJ1dHRvbignc2hvdy1zb2x1dGlvbicsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnNob3dTb2x1dGlvbkJ1dHRvbiksXG4gICAgICB0aGlzLm9uU2hvd1NvbHV0aW9uLCB0aGlzLnNldHRpbmdzLmVuYWJsZVNvbHV0aW9uc0J1dHRvbiwge1xuICAgICAgJ2FyaWEtbGFiZWwnOiB0aGlzLmxvY2FsaXphdGlvbi5nZXRUZXh0RnJvbUxhYmVsKExvY2FsaXphdGlvbkxhYmVscy5hMTF5U2hvd1NvbHV0aW9uKSxcbiAgICB9LCB7XG4gICAgICBzdHlsZVR5cGU6ICdzZWNvbmRhcnknLFxuICAgICAgaWNvbjogJ3Nob3ctc29sdXRpb25zJyxcbiAgICB9KTtcblxuICAgIC8vIFRyeSBhZ2FpbiBidXR0b25cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVSZXRyeSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRCdXR0b24oJ3RyeS1hZ2FpbicsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnJldHJ5QnV0dG9uKSxcbiAgICAgICAgdGhpcy5vblJldHJ5LCB0cnVlLCB7XG4gICAgICAgICdhcmlhLWxhYmVsJzogdGhpcy5sb2NhbGl6YXRpb24uZ2V0VGV4dEZyb21MYWJlbChMb2NhbGl6YXRpb25MYWJlbHMuYTExeVJldHJ5KSxcbiAgICAgIH0sIHtcbiAgICAgICAgY29uZmlybWF0aW9uRGlhbG9nOiB7XG4gICAgICAgICAgZW5hYmxlOiB0aGlzLnNldHRpbmdzLmNvbmZpcm1SZXRyeURpYWxvZyxcbiAgICAgICAgICBsMTBuOiB0aGlzLmxvY2FsaXphdGlvbi5nZXRPYmplY3RGb3JTdHJ1Y3R1cmUoTG9jYWxpemF0aW9uU3RydWN0dXJlcy5jb25maXJtUmV0cnkpLFxuICAgICAgICAgIGluc3RhbmNlOiB0aGlzLFxuICAgICAgICAgICRwYXJlbnRFbGVtZW50OiAkY29udGFpbmVyXG4gICAgICAgIH0sXG4gICAgICAgIHN0eWxlVHlwZTogJ3NlY29uZGFyeScsXG4gICAgICAgIGljb246ICdyZXRyeScsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uQ2hlY2tBbnN3ZXIgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuYTExeUhlYWRlcikge1xuICAgICAgdGhpcy5hMTF5SGVhZGVyLmlubmVySFRNTCA9IHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLmExMXlDaGVja2luZ01vZGVIZWFkZXIpO1xuICAgICAgdGhpcy5hMTF5SGVhZGVyLmZvY3VzKCk7XG4gICAgfVxuXG4gICAgdGhpcy5jbG96ZUNvbnRyb2xsZXIuY2hlY2tBbGwoKTtcblxuICAgIHRoaXMudHJpZ2dlclhBUEkoJ2ludGVyYWN0ZWQnKTtcbiAgICB0aGlzLnRyaWdnZXJYQVBJQW5zd2VyZWQoKTtcblxuICAgIHRoaXMudHJhbnNpdGlvblN0YXRlKCk7XG4gICAgaWYgKHRoaXMuc3RhdGUgIT09IFN0YXRlcy5maW5pc2hlZClcbiAgICAgIHRoaXMuc3RhdGUgPSBTdGF0ZXMuY2hlY2tpbmc7XG5cbiAgICB0aGlzLnNob3dGZWVkYmFjaygpO1xuXG4gICAgdGhpcy50b2dnbGVCdXR0b25WaXNpYmlsaXR5KHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSB0cmFuc2l0aW9uU3RhdGUgPSAoKSA9PiB7XG4gICAgaWYgKHRoaXMuY2xvemVDb250cm9sbGVyLmlzU29sdmVkKSB7XG4gICAgICB0aGlzLm1vdmVUb1N0YXRlKFN0YXRlcy5maW5pc2hlZCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvblNob3dTb2x1dGlvbiA9ICgpID0+IHtcbiAgICB0aGlzLm1vdmVUb1N0YXRlKFN0YXRlcy5zaG93aW5nU29sdXRpb25zKTtcbiAgICB0aGlzLmNsb3plQ29udHJvbGxlci5zaG93U29sdXRpb25zKCk7XG4gICAgdGhpcy5zaG93RmVlZGJhY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgb25SZXRyeSA9ICgpID0+IHtcbiAgICBpZiAodGhpcy5hMTF5SGVhZGVyKSB7XG4gICAgICB0aGlzLmExMXlIZWFkZXIuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5yZW1vdmVGZWVkYmFjaygpO1xuICAgIHRoaXMuY2xvemVDb250cm9sbGVyLnJlc2V0KCk7XG4gICAgdGhpcy5hbnN3ZXJlZCA9IGZhbHNlO1xuICAgIHRoaXMubW92ZVRvU3RhdGUoU3RhdGVzLm9uZ29pbmcpO1xuICAgIC8vIFJlc2V0IHRpbWVyXG4gICAgdGhpcy5zZXRBY3Rpdml0eVN0YXJ0ZWQodHJ1ZSk7XG4gIH1cblxuICBwcml2YXRlIHNob3dGZWVkYmFjaygpIHtcbiAgICB2YXIgc2NvcmVUZXh0ID0gSDVQLlF1ZXN0aW9uLmRldGVybWluZU92ZXJhbGxGZWVkYmFjayh0aGlzLmxvY2FsaXphdGlvbi5nZXRPYmplY3RGb3JTdHJ1Y3R1cmUoTG9jYWxpemF0aW9uU3RydWN0dXJlcy5vdmVyYWxsRmVlZGJhY2spLCB0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUgLyB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSkucmVwbGFjZSgnQHNjb3JlJywgdGhpcy5jbG96ZUNvbnRyb2xsZXIuY3VycmVudFNjb3JlKS5yZXBsYWNlKCdAdG90YWwnLCB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSk7XG4gICAgdGhpcy5zZXRGZWVkYmFjayhzY29yZVRleHQsIHRoaXMuY2xvemVDb250cm9sbGVyLmN1cnJlbnRTY29yZSwgdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmUsIHRoaXMubG9jYWxpemF0aW9uLmdldFRleHRGcm9tTGFiZWwoTG9jYWxpemF0aW9uTGFiZWxzLnNjb3JlQmFyTGFiZWwpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93cyBhcmUgaGlkZXMgYnV0dG9ucyBkZXBlbmRpbmcgb24gdGhlIGN1cnJlbnQgc3RhdGUgYW5kIHNldHRpbmdzIG1hZGVcbiAgICogYnkgdGhlIGNvbnRlbnQgY3JlYXRvci5cbiAgICogQHBhcmFtICB7U3RhdGVzfSBzdGF0ZVxuICAgKi9cbiAgcHJpdmF0ZSBtb3ZlVG9TdGF0ZShzdGF0ZTogU3RhdGVzKSB7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMudG9nZ2xlQnV0dG9uVmlzaWJpbGl0eShzdGF0ZSk7XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZUJ1dHRvblZpc2liaWxpdHkoc3RhdGU6IFN0YXRlcykge1xuICAgIGlmICh0aGlzLnNldHRpbmdzLmVuYWJsZVNvbHV0aW9uc0J1dHRvbikge1xuICAgICAgaWYgKCgoc3RhdGUgPT09IFN0YXRlcy5jaGVja2luZylcbiAgICAgICAgfHwgKHRoaXMuc2V0dGluZ3MuYXV0b0NoZWNrICYmIHN0YXRlID09PSBTdGF0ZXMub25nb2luZykpXG4gICAgICAgICYmICghdGhpcy5zZXR0aW5ncy5zaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dCB8fCB0aGlzLmNsb3plQ29udHJvbGxlci5hbGxCbGFua3NFbnRlcmVkKSkge1xuICAgICAgICB0aGlzLnNob3dCdXR0b24oJ3Nob3ctc29sdXRpb24nKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmhpZGVCdXR0b24oJ3Nob3ctc29sdXRpb24nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5lbmFibGVSZXRyeSAmJiAoc3RhdGUgPT09IFN0YXRlcy5jaGVja2luZyB8fCBzdGF0ZSA9PT0gU3RhdGVzLmZpbmlzaGVkIHx8IHN0YXRlID09PSBTdGF0ZXMuc2hvd2luZ1NvbHV0aW9ucykpIHtcbiAgICAgIHRoaXMuc2hvd0J1dHRvbigndHJ5LWFnYWluJyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5oaWRlQnV0dG9uKCd0cnktYWdhaW4nKTtcbiAgICB9XG5cblxuICAgIGlmIChzdGF0ZSA9PT0gU3RhdGVzLm9uZ29pbmcgJiYgdGhpcy5zZXR0aW5ncy5lbmFibGVDaGVja0J1dHRvbikge1xuICAgICAgdGhpcy5zaG93QnV0dG9uKCdjaGVjay1hbnN3ZXInKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmhpZGVCdXR0b24oJ2NoZWNrLWFuc3dlcicpO1xuICAgIH1cblxuICAgIGlmIChzdGF0ZSA9PT0gU3RhdGVzLnNob3dpbmdTb2x1dGlvbnNFbWJlZGRlZCkge1xuICAgICAgdGhpcy5oaWRlQnV0dG9uKCdjaGVjay1hbnN3ZXInKTtcbiAgICAgIHRoaXMuaGlkZUJ1dHRvbigndHJ5LWFnYWluJyk7XG4gICAgICB0aGlzLmhpZGVCdXR0b24oJ3Nob3ctc29sdXRpb24nKTtcbiAgICB9XG5cbiAgICB0aGlzLnRyaWdnZXIoJ3Jlc2l6ZScpO1xuICB9XG5cbiAgcHVibGljIGdldEN1cnJlbnRTdGF0ZSA9ICgpOiBzdHJpbmdbXSA9PiB7XG4gICAgcmV0dXJuIHRoaXMuY2xvemVDb250cm9sbGVyLnNlcmlhbGl6ZUNsb3plKCk7XG4gIH07XG5cbiAgLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICogSW1wbGVtZW50YXRpb24gb2YgUXVlc3Rpb24gY29udHJhY3QgICpcbiAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIHB1YmxpYyBnZXRBbnN3ZXJHaXZlbiA9ICgpOiBib29sZWFuID0+IHtcbiAgICByZXR1cm4gdGhpcy5hbnN3ZXJlZCB8fCB0aGlzLmNsb3plQ29udHJvbGxlci5tYXhTY29yZSA9PT0gMDtcbiAgfVxuXG4gIHB1YmxpYyBnZXRTY29yZSA9ICgpOiBudW1iZXIgPT4ge1xuICAgIHJldHVybiB0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmU7XG4gIH1cblxuICBwdWJsaWMgZ2V0TWF4U2NvcmUgPSAoKTogbnVtYmVyID0+IHtcbiAgICByZXR1cm4gdGhpcy5jbG96ZUNvbnRyb2xsZXIubWF4U2NvcmU7XG4gIH1cblxuICBwdWJsaWMgc2hvd1NvbHV0aW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLm9uU2hvd1NvbHV0aW9uKCk7XG4gICAgdGhpcy5tb3ZlVG9TdGF0ZShTdGF0ZXMuc2hvd2luZ1NvbHV0aW9uc0VtYmVkZGVkKTtcbiAgfVxuXG4gIHB1YmxpYyByZXNldFRhc2sgPSAoKSA9PiB7XG4gICAgdGhpcy5vblJldHJ5KCk7XG4gIH1cblxuICAvKioqXG4gICAqIFhBcGkgaW1wbGVtZW50YXRpb25cbiAgICovXG5cblxuICAvKipcbiAgICogVHJpZ2dlciB4QVBJIGFuc3dlcmVkIGV2ZW50XG4gICAqL1xuICBwdWJsaWMgdHJpZ2dlclhBUElBbnN3ZXJlZCA9ICgpOiB2b2lkID0+IHtcbiAgICB0aGlzLmFuc3dlcmVkID0gdHJ1ZTtcbiAgICB2YXIgeEFQSUV2ZW50ID0gdGhpcy5jcmVhdGVYQVBJRXZlbnRUZW1wbGF0ZSgnYW5zd2VyZWQnKTtcbiAgICB0aGlzLmFkZFF1ZXN0aW9uVG9YQVBJKHhBUElFdmVudCk7XG4gICAgdGhpcy5hZGRSZXNwb25zZVRvWEFQSSh4QVBJRXZlbnQpO1xuICAgIHRoaXMudHJpZ2dlcih4QVBJRXZlbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZXQgeEFQSSBkYXRhLlxuICAgKiBDb250cmFjdCB1c2VkIGJ5IHJlcG9ydCByZW5kZXJpbmcgZW5naW5lLlxuICAgKlxuICAgKiBAc2VlIGNvbnRyYWN0IGF0IHtAbGluayBodHRwczovL2g1cC5vcmcvZG9jdW1lbnRhdGlvbi9kZXZlbG9wZXJzL2NvbnRyYWN0cyNndWlkZXMtaGVhZGVyLTZ9XG4gICAqL1xuICBwdWJsaWMgZ2V0WEFQSURhdGEgPSAoKSA9PiB7XG4gICAgdmFyIHhBUElFdmVudCA9IHRoaXMuY3JlYXRlWEFQSUV2ZW50VGVtcGxhdGUoJ2Fuc3dlcmVkJyk7XG4gICAgdGhpcy5hZGRRdWVzdGlvblRvWEFQSSh4QVBJRXZlbnQpO1xuICAgIHRoaXMuYWRkUmVzcG9uc2VUb1hBUEkoeEFQSUV2ZW50KTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGVtZW50OiB4QVBJRXZlbnQuZGF0YS5zdGF0ZW1lbnRcbiAgICB9O1xuICB9O1xuXG4gIC8qKlxuICAgKiBHZW5lcmF0ZSB4QVBJIG9iamVjdCBkZWZpbml0aW9uIHVzZWQgaW4geEFQSSBzdGF0ZW1lbnRzLlxuICAgKiBAcmV0dXJuIHtPYmplY3R9XG4gICAqL1xuICBwdWJsaWMgZ2V0eEFQSURlZmluaXRpb24gPSAoKTogWEFQSUFjdGl2aXR5RGVmaW5pdGlvbiA9PiB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IG5ldyBYQVBJQWN0aXZpdHlEZWZpbml0aW9uKCk7XG5cbiAgICBkZWZpbml0aW9uLmRlc2NyaXB0aW9uID0ge1xuICAgICAgJ2VuLVVTJzogJzxwPicgKyB0aGlzLnJlcG9zaXRvcnkuZ2V0VGFza0Rlc2NyaXB0aW9uKCkgKyAnPC9wPicgKyB0aGlzLnJlcG9zaXRvcnkuZ2V0Q2xvemVUZXh0KCkucmVwbGFjZSgvX18oXykrL2csICdfX19fX19fX19fJykucmVwbGFjZSgvISEvZywgJycpXG4gICAgfTtcblxuICAgIGRlZmluaXRpb24udHlwZSA9ICdodHRwOi8vYWRsbmV0Lmdvdi9leHBhcGkvYWN0aXZpdGllcy9jbWkuaW50ZXJhY3Rpb24nO1xuICAgIGRlZmluaXRpb24uaW50ZXJhY3Rpb25UeXBlID0gJ2ZpbGwtaW4nOyAvLyBXZSB1c2UgdGhlICdmaWxsLWluJyB0eXBlIGV2ZW4gaW4gc2VsZWN0IG1vZGUsIGFzIHRoZSB4QVBJIGZvcm1hdCBmb3Igc2VsZWN0aW9ucyBkb2Vzbid0IHJlYWxseSBjYXRlciBmb3Igc2VxdWVuY2VzLlxuXG4gICAgY29uc3QgY29ycmVjdFJlc3BvbnNlc1BhdHRlcm5QcmVmaXggPSAne2Nhc2VfbWF0dGVycz0nICsgdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlICsgJ30nO1xuXG4gICAgY29uc3QgY29ycmVjdEFuc3dlckxpc3QgPSB0aGlzLmNsb3plQ29udHJvbGxlci5nZXRDb3JyZWN0QW5zd2VyTGlzdCgpO1xuXG4gICAgLy8gSDVQIHVzZXMgZXh0ZW5zaW9uIGluc3RlYWQgb2YgZnVsbCBjb3JyZWN0IHJlc3BvbnNlcyBwYXR0ZXJuIHRvIGNvdW50ZXIgY29tcGxleGl0eVxuICAgIGNvbnN0IGZpcnN0QWx0ZXJuYXRpdmVzID0gY29ycmVjdEFuc3dlckxpc3QucmVkdWNlKChyZXN1bHQsIGxpc3QpID0+IHtcbiAgICAgIHJlc3VsdC5wdXNoKGxpc3RbMF0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBbXSkuam9pbignWyxdJyk7XG4gICAgZGVmaW5pdGlvbi5jb3JyZWN0UmVzcG9uc2VzUGF0dGVybiA9IFtgJHtjb3JyZWN0UmVzcG9uc2VzUGF0dGVyblByZWZpeH0ke2ZpcnN0QWx0ZXJuYXRpdmVzfWBdO1xuXG4gICAgLy8gQWRkIHRoZSBINVAgQWx0ZXJuYXRpdmUgZXh0ZW5zaW9uIHdoaWNoIHByb3ZpZGVzIGFsbCB0aGUgY29tYmluYXRpb25zIG9mIGRpZmZlcmVudCBhbnN3ZXJzXG4gICAgLy8gUmVwb3J0aW5nIHNvZnR3YXJlIHdpbGwgbmVlZCB0byBzdXBwb3J0IHRoaXMgZXh0ZW5zaW9uIGZvciBhbHRlcm5hdGl2ZXMgdG8gd29yay5cbiAgICBkZWZpbml0aW9uLmV4dGVuc2lvbnMgPSBkZWZpbml0aW9uLmV4dGVuc2lvbnMgfHwge307XG4gICAgZGVmaW5pdGlvbi5leHRlbnNpb25zW1hBUElfQ0FTRV9TRU5TSVRJVklUWV0gPSB0aGlzLnNldHRpbmdzLmNhc2VTZW5zaXRpdmU7XG4gICAgZGVmaW5pdGlvbi5leHRlbnNpb25zW1hBUElfQUxURVJOQVRJVkVfRVhURU5TSU9OXSA9IGNvcnJlY3RBbnN3ZXJMaXN0O1xuXG4gICAgcmV0dXJuIGRlZmluaXRpb247XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgcXVlc3Rpb24gaXRzZWxmIHRvIHRoZSBkZWZpbml0aW9uIHBhcnQgb2YgYW4geEFQSUV2ZW50XG4gICAqL1xuICBwdWJsaWMgYWRkUXVlc3Rpb25Ub1hBUEkgPSAoeEFQSUV2ZW50KSA9PiB7XG4gICAgdmFyIGRlZmluaXRpb24gPSB4QVBJRXZlbnQuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ29iamVjdCcsICdkZWZpbml0aW9uJ10pO1xuICAgIHRoaXMualF1ZXJ5LmV4dGVuZCh0cnVlLCBkZWZpbml0aW9uLCB0aGlzLmdldHhBUElEZWZpbml0aW9uKCkpO1xuXG4gICAgLy8gU2V0IHJlcG9ydGluZyBtb2R1bGUgdmVyc2lvbiBpZiBhbHRlcm5hdGl2ZSBleHRlbnNpb24gaXMgdXNlZFxuICAgIGlmICh0aGlzLmNsb3plQ29udHJvbGxlci5oYXNBbHRlcm5hdGl2ZXMpIHtcbiAgICAgIGNvbnN0IGNvbnRleHQgPSB4QVBJRXZlbnQuZ2V0VmVyaWZpZWRTdGF0ZW1lbnRWYWx1ZShbJ2NvbnRleHQnXSk7XG4gICAgICBjb250ZXh0LmV4dGVuc2lvbnMgPSBjb250ZXh0LmV4dGVuc2lvbnMgfHwge307XG4gICAgICBjb250ZXh0LmV4dGVuc2lvbnNbWEFQSV9SRVBPUlRJTkdfVkVSU0lPTl9FWFRFTlNJT05dID0gJzEuMC4wJztcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFkZCB0aGUgcmVzcG9uc2UgcGFydCB0byBhbiB4QVBJIGV2ZW50XG4gICAqXG4gICAqIEBwYXJhbSB7SDVQLlhBUElFdmVudH0geEFQSUV2ZW50XG4gICAqICBUaGUgeEFQSSBldmVudCB3ZSB3aWxsIGFkZCBhIHJlc3BvbnNlIHRvXG4gICAqL1xuICBwdWJsaWMgYWRkUmVzcG9uc2VUb1hBUEkgPSAoeEFQSUV2ZW50KSA9PiB7XG4gICAgeEFQSUV2ZW50LnNldFNjb3JlZFJlc3VsdCh0aGlzLmNsb3plQ29udHJvbGxlci5jdXJyZW50U2NvcmUsIHRoaXMuY2xvemVDb250cm9sbGVyLm1heFNjb3JlLCB0aGlzKTtcbiAgICB4QVBJRXZlbnQuZGF0YS5zdGF0ZW1lbnQucmVzdWx0LnJlc3BvbnNlID0gdGhpcy5nZXR4QVBJUmVzcG9uc2UoKTtcbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJhdGUgeEFQSSB1c2VyIHJlc3BvbnNlLCB1c2VkIGluIHhBUEkgc3RhdGVtZW50cy5cbiAgICogQHJldHVybiB7c3RyaW5nfSBVc2VyIGFuc3dlcnMgc2VwYXJhdGVkIGJ5IHRoZSBcIlssXVwiIHBhdHRlcm5cbiAgICovXG4gIHB1YmxpYyBnZXR4QVBJUmVzcG9uc2UgPSAoKTogc3RyaW5nID0+IHtcbiAgICB2YXIgdXNlcnNBbnN3ZXJzID0gdGhpcy5nZXRDdXJyZW50U3RhdGUoKTtcbiAgICByZXR1cm4gdXNlcnNBbnN3ZXJzLmpvaW4oJ1ssXScpO1xuICB9O1xufVxuIiwiaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSAnLi4vbW9kZWxzL2hpZ2hsaWdodCc7XG5pbXBvcnQgeyBBbnN3ZXIgfSBmcm9tICcuLi9tb2RlbHMvYW5zd2VyJztcbmltcG9ydCB7IEJsYW5rIH0gZnJvbSAnLi4vbW9kZWxzL2JsYW5rJztcbmltcG9ydCB7IEg1UExvY2FsaXphdGlvbiB9IGZyb20gJy4uL3NlcnZpY2VzL2xvY2FsaXphdGlvbic7XG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5ncyc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSBcIi4uL21vZGVscy9tZXNzYWdlXCI7XG5pbXBvcnQgeyBTbmlwcGV0IH0gZnJvbSAnLi4vbW9kZWxzL3NuaXBwZXQnO1xuXG5leHBvcnQgY2xhc3MgQmxhbmtMb2FkZXIge1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IocHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzLCBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljLCBwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkgeyB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgX2luc3RhbmNlOiBCbGFua0xvYWRlcjtcbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXplKHNldHRpbmdzOiBJU2V0dGluZ3MsIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBqcXVlcnk6IEpRdWVyeVN0YXRpYywgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlKTogQmxhbmtMb2FkZXIge1xuICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IEJsYW5rTG9hZGVyKHNldHRpbmdzLCBsb2NhbGl6YXRpb24sIGpxdWVyeSwgbWVzc2FnZVNlcnZpY2UpO1xuICAgIHJldHVybiB0aGlzLl9pbnN0YW5jZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgZ2V0IGluc3RhbmNlKCk6IEJsYW5rTG9hZGVyIHtcbiAgICBpZiAodGhpcy5faW5zdGFuY2UpXG4gICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2U7XG5cbiAgICB0aHJvdyBcIkJsYW5rTG9hZGVyIG11c3QgYmUgaW5pdGlhbGl6ZWQgYmVmb3JlIHVzZS5cIjtcbiAgfVxuXG4gIHByaXZhdGUgZGVjb2RlSHRtbChodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHZhciBlbGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBlbGVtLmlubmVySFRNTCA9IGh0bWw7XG4gICAgcmV0dXJuIGVsZW0udmFsdWU7XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlQmxhbmsoaWQ6IHN0cmluZywgY29ycmVjdFRleHQ6IHN0cmluZywgaGludFRleHQ6IHN0cmluZywgaW5jb3JyZWN0QW5zd2VyczogYW55W10pOiBCbGFuayB7XG4gICAgdmFyIGJsYW5rID0gbmV3IEJsYW5rKHRoaXMuc2V0dGluZ3MsIHRoaXMubG9jYWxpemF0aW9uLCB0aGlzLmpxdWVyeSwgdGhpcy5tZXNzYWdlU2VydmljZSwgaWQpXG4gICAgaWYgKGNvcnJlY3RUZXh0KSB7XG4gICAgICBjb3JyZWN0VGV4dCA9IHRoaXMuZGVjb2RlSHRtbChjb3JyZWN0VGV4dCk7XG4gICAgICBibGFuay5hZGRDb3JyZWN0QW5zd2VyKG5ldyBBbnN3ZXIoY29ycmVjdFRleHQsIFwiXCIsIGZhbHNlLCAwLCB0aGlzLnNldHRpbmdzKSk7XG4gICAgfVxuICAgIGJsYW5rLnNldEhpbnQobmV3IE1lc3NhZ2UoaGludFRleHQgPyBoaW50VGV4dCA6IFwiXCIsIGZhbHNlLCAwKSk7XG5cbiAgICBpZiAoaW5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgZm9yICh2YXIgaDVwSW5jb3JyZWN0QW5zd2VyIG9mIGluY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgICAgYmxhbmsuYWRkSW5jb3JyZWN0QW5zd2VyKHRoaXMuZGVjb2RlSHRtbChoNXBJbmNvcnJlY3RBbnN3ZXIuaW5jb3JyZWN0QW5zd2VyVGV4dCksIGg1cEluY29ycmVjdEFuc3dlci5pbmNvcnJlY3RBbnN3ZXJGZWVkYmFjaywgaDVwSW5jb3JyZWN0QW5zd2VyLnNob3dIaWdobGlnaHQsIGg1cEluY29ycmVjdEFuc3dlci5oaWdobGlnaHQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBibGFuaztcbiAgfVxuXG4gIHB1YmxpYyByZXBsYWNlU25pcHBldHMoYmxhbms6IEJsYW5rLCBzbmlwcGV0czogU25pcHBldFtdKSB7XG4gICAgYmxhbmsuY29ycmVjdEFuc3dlcnMuY29uY2F0KGJsYW5rLmluY29ycmVjdEFuc3dlcnMpXG4gICAgICAuZm9yRWFjaChhbnN3ZXIgPT4gYW5zd2VyLm1lc3NhZ2UudGV4dCA9IHRoaXMuZ2V0U3RyaW5nV2l0aFNuaXBwZXRzKGFuc3dlci5tZXNzYWdlLnRleHQsIHNuaXBwZXRzKSk7XG4gICAgYmxhbmsuaGludC50ZXh0ID0gdGhpcy5nZXRTdHJpbmdXaXRoU25pcHBldHMoYmxhbmsuaGludC50ZXh0LCBzbmlwcGV0cyk7XG4gIH1cblxuICBwcml2YXRlIGdldFN0cmluZ1dpdGhTbmlwcGV0cyh0ZXh0OiBzdHJpbmcsIHNuaXBwZXRzOiBTbmlwcGV0W10pOiBzdHJpbmcge1xuICAgIGlmICghdGV4dCB8fCB0ZXh0ID09PSB1bmRlZmluZWQpXG4gICAgICByZXR1cm4gXCJcIjtcblxuICAgIGlmKCFzbmlwcGV0cylcbiAgICAgIHJldHVybiB0ZXh0OyAgICBcblxuICAgIGZvciAodmFyIHNuaXBwZXQgb2Ygc25pcHBldHMpIHtcbiAgICAgIGlmIChzbmlwcGV0Lm5hbWUgPT09IHVuZGVmaW5lZCB8fCBzbmlwcGV0Lm5hbWUgPT09IFwiXCIgfHwgc25pcHBldC50ZXh0ID09PSB1bmRlZmluZWQgfHwgc25pcHBldC50ZXh0ID09PSBcIlwiKVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIHRleHQgPSB0ZXh0LnJlcGxhY2UoXCJAXCIgKyBzbmlwcGV0Lm5hbWUsIHNuaXBwZXQudGV4dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgaGlnaGxpZ2h0IG9iamVjdHMgdG8gdGhlIGFuc3dlcnMgaW4gdGhlIGNvcnJlY3QgYW5kIGluY29ycmVjdCBhbnN3ZXIgbGlzdC5cbiAgICogQHBhcmFtICB7SGlnaGxpZ2h0W119IGhpZ2hsaWdodHNCZWZvcmUgLSBBbGwgaGlnaGxpZ2h0cyBjb21pbmcgYmVmb3JlIHRoZSBibGFuay5cbiAgICogQHBhcmFtICB7SGlnaGxpZ2h0W119IGhpZ2hsaWdodHNBZnRlciAtIEFsbCBoaWdobGlnaHRzIGNvbWluZyBhZnRlciB0aGUgYmxhbmsuXG4gICAqL1xuICBwdWJsaWMgbGlua0hpZ2hsaWdodElkVG9PYmplY3QoYmxhbms6IEJsYW5rLCBoaWdobGlnaHRzQmVmb3JlOiBIaWdobGlnaHRbXSwgaGlnaGxpZ2h0c0FmdGVyOiBIaWdobGlnaHRbXSkge1xuICAgIGZvciAobGV0IGFuc3dlciBvZiBibGFuay5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgYW5zd2VyLmxpbmtIaWdobGlnaHRJZFRvT2JqZWN0KGhpZ2hsaWdodHNCZWZvcmUsIGhpZ2hsaWdodHNBZnRlcik7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIGJsYW5rLmluY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgIGFuc3dlci5saW5rSGlnaGxpZ2h0SWRUb09iamVjdChoaWdobGlnaHRzQmVmb3JlLCBoaWdobGlnaHRzQWZ0ZXIpO1xuICAgIH1cblxuICAgIGJsYW5rLmhpbnQubGlua0hpZ2hsaWdodChoaWdobGlnaHRzQmVmb3JlLCBoaWdobGlnaHRzQWZ0ZXIpO1xuICB9XG5cbn0iLCJpbXBvcnQgeyBCbGFua0xvYWRlciB9IGZyb20gJy4vYmxhbmstbG9hZGVyJztcbmltcG9ydCB7IENsb3plRWxlbWVudCwgQ2xvemVFbGVtZW50VHlwZSB9IGZyb20gJy4uL21vZGVscy9jbG96ZS1lbGVtZW50JztcbmltcG9ydCB7IEJsYW5rIH0gZnJvbSAnLi4vbW9kZWxzL2JsYW5rJztcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gJy4uL21vZGVscy9oaWdobGlnaHQnO1xuaW1wb3J0IHsgQ2xvemUgfSBmcm9tIFwiLi4vbW9kZWxzL2Nsb3plXCI7XG5cbi8qKlxuICogTG9hZHMgYSBjbG96ZSBvYmplY3QuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbG96ZUxvYWRlciB7XG4gIHByaXZhdGUgc3RhdGljIG5vcm1hbGl6ZWRCbGFua01hcmtlciA9ICdfX18nO1xuICBcbiAgLyoqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gaHRtbCAtIFRoZSBodG1sIHN0cmluZyB0aGF0IGNvbnRhaW5zIHRoZSBjbG96ZSB3aXRoIGJsYW5rcyBtYXJraW5nIGFuZCBoaWdobGlnaHQgbWFya2luZ3MuXG4gICAqIEBwYXJhbSAge0JsYW5rW119IGJsYW5rcyAtIEFsbCBibGFua3MgYXMgZW50ZXJlZCBieSB0aGUgY29udGVudCBhdXRob3IuXG4gICAqIEByZXR1cm5zIENsb3plXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGNyZWF0ZUNsb3plKGh0bWw6IHN0cmluZywgYmxhbmtzOiBCbGFua1tdKTogQ2xvemUge1xuICAgIHZhciBvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSA9IG5ldyBBcnJheSgpO1xuICAgIHZhciBoaWdobGlnaHRJbnN0YW5jZXM6IEhpZ2hsaWdodFtdID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIGJsYW5rc0luc3RhbmNlczogQmxhbmtbXSA9IG5ldyBBcnJheSgpO1xuXG4gICAgaHRtbCA9IENsb3plTG9hZGVyLm5vcm1hbGl6ZUJsYW5rTWFya2luZ3MoaHRtbCk7XG5cbiAgICB2YXIgY29udmVyc2lvblJlc3VsdCA9IENsb3plTG9hZGVyLmNvbnZlcnRNYXJrdXBUb1NwYW5zKGh0bWwsIGJsYW5rcyk7XG4gICAgaHRtbCA9IGNvbnZlcnNpb25SZXN1bHQuaHRtbDtcbiAgICBvcmRlcmVkQWxsRWxlbWVudHNMaXN0ID0gY29udmVyc2lvblJlc3VsdC5vcmRlcmVkQWxsRWxlbWVudHNMaXN0O1xuICAgIGhpZ2hsaWdodEluc3RhbmNlcyA9IGNvbnZlcnNpb25SZXN1bHQuaGlnaGxpZ2h0SW5zdGFuY2VzO1xuICAgIGJsYW5rc0luc3RhbmNlcyA9IGNvbnZlcnNpb25SZXN1bHQuYmxhbmtzSW5zdGFuY2VzO1xuXG4gICAgQ2xvemVMb2FkZXIubGlua0hpZ2hsaWdodHNPYmplY3RzKG9yZGVyZWRBbGxFbGVtZW50c0xpc3QsIGhpZ2hsaWdodEluc3RhbmNlcywgYmxhbmtzSW5zdGFuY2VzKTtcblxuICAgIHZhciBjbG96ZSA9IG5ldyBDbG96ZSgpO1xuICAgIGNsb3plLmh0bWwgPSBodG1sO1xuICAgIGNsb3plLmJsYW5rcyA9IGJsYW5rc0luc3RhbmNlcztcbiAgICBjbG96ZS5oaWdobGlnaHRzID0gaGlnaGxpZ2h0SW5zdGFuY2VzO1xuXG4gICAgcmV0dXJuIGNsb3plO1xuICB9XG5cbiAgIC8qKlxuICAgKiBDb252ZXJ0cyAhIXNpZ25hbCEhIGhpZ2hsaWdodCBtYXJrdXAgYW5kIF9fXyAgYmxhbmsgbWFya3VwIGludG8gPHNwYW4+Li4uPC9zcGFuPi5cbiAgICogUmV0dXJucyB0aGUgcmVzdWx0aW5nIGh0bWwgc3RyaW5nIGFuZCB0aHJlZSBsaXN0cyBvZiBhbGwgYWN0aXZlIGVsZW1lbnRzIHVzZWQgaW4gdGhlIGNsb3plOlxuICAgKiAgICBvcmRlcmVkQWxsRWxlbWVudHM6IGhpZ2hsaWdodHMgYW5kIGJsYW5rcyBpbiB0aGUgb3JkZXIgb2YgYXBwZWFyYW5jZSBpbiB0aGUgaHRtbC5cbiAgICogICAgaGlnaGxpZ2h0SW5zdGFuY2VzOiBvbmx5IGhpZ2hsaWdodHMgaW4gdGhlIG9yZGVyIG9mIGFwcGVhcmFuY2VcbiAgICogICAgYmxhbmtzSW5zdGFuY2VzOiBvbmx5IGJsYW5rcyBpbiB0aGUgb3JkZXIgb2YgYXBwZWFyYW5jZVxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWxcbiAgICogQHBhcmFtICB7QmxhbmtbXX0gYmxhbmtzXG4gICAqIEByZXR1cm5zIExpc3RzIG9mIGFjdGl2ZSBlbGVtZW50cyAoc2VlIGRlc2NyaXB0aW9uKS5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGNvbnZlcnRNYXJrdXBUb1NwYW5zKGh0bWw6IHN0cmluZywgYmxhbmtzOiBCbGFua1tdKTogeyBodG1sOiBzdHJpbmcsIG9yZGVyZWRBbGxFbGVtZW50c0xpc3Q6IENsb3plRWxlbWVudFtdLCBoaWdobGlnaHRJbnN0YW5jZXM6IEhpZ2hsaWdodFtdLCBibGFua3NJbnN0YW5jZXM6IEJsYW5rW10gfSB7XG4gICAgdmFyIG9yZGVyZWRBbGxFbGVtZW50c0xpc3Q6IENsb3plRWxlbWVudFtdID0gbmV3IEFycmF5KCk7XG4gICAgdmFyIGhpZ2hsaWdodEluc3RhbmNlczogSGlnaGxpZ2h0W10gPSBuZXcgQXJyYXkoKTtcbiAgICB2YXIgYmxhbmtzSW5zdGFuY2VzOiBCbGFua1tdID0gbmV3IEFycmF5KCk7XG5cbiAgICB2YXIgZXhjbGFtYXRpb25NYXJrUmVnRXhwID0gLyEhKC57MSw0MH0/KSEhL2k7XG4gICAgdmFyIGhpZ2hsaWdodENvdW50ZXIgPSAwO1xuICAgIGxldCBibGFua0NvdW50ZXIgPSAwO1xuXG4gICAgLy8gU2VhcmNoZXMgdGhlIGh0bWwgc3RyaW5nIGZvciBoaWdobGlnaHRzIGFuZCBibGFua3MgYW5kIGluc2VydHMgc3BhbnMuIFxuICAgIGRvIHtcbiAgICAgIHZhciBuZXh0SGlnaGxpZ2h0TWF0Y2ggPSBodG1sLm1hdGNoKGV4Y2xhbWF0aW9uTWFya1JlZ0V4cCk7XG4gICAgICB2YXIgbmV4dEJsYW5rSW5kZXggPSBodG1sLmluZGV4T2YoQ2xvemVMb2FkZXIubm9ybWFsaXplZEJsYW5rTWFya2VyKTtcblxuICAgICAgaWYgKG5leHRIaWdobGlnaHRNYXRjaCAmJiAoKG5leHRIaWdobGlnaHRNYXRjaC5pbmRleCA8IG5leHRCbGFua0luZGV4KSB8fCAobmV4dEJsYW5rSW5kZXggPCAwKSkpIHtcbiAgICAgICAgLy8gbmV4dCBhY3RpdmUgZWxlbWVudCBpcyBhIGhpZ2hsaWdodFxuICAgICAgICB2YXIgaGlnaGxpZ2h0ID0gbmV3IEhpZ2hsaWdodChuZXh0SGlnaGxpZ2h0TWF0Y2hbMV0sIGBoaWdobGlnaHRfJHtoaWdobGlnaHRDb3VudGVyfWApO1xuICAgICAgICBoaWdobGlnaHRJbnN0YW5jZXMucHVzaChoaWdobGlnaHQpO1xuICAgICAgICBvcmRlcmVkQWxsRWxlbWVudHNMaXN0LnB1c2goaGlnaGxpZ2h0KTtcbiAgICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZShleGNsYW1hdGlvbk1hcmtSZWdFeHAsIGA8c3BhbiBpZD0nY29udGFpbmVyX2hpZ2hsaWdodF8ke2hpZ2hsaWdodENvdW50ZXJ9Jz48L3NwYW4+YCk7XG4gICAgICAgIGhpZ2hsaWdodENvdW50ZXIrKztcbiAgICAgIH0gZWxzZSBpZiAobmV4dEJsYW5rSW5kZXggPj0gMCkge1xuICAgICAgICAvLyBuZXh0IGFjdGl2ZSBlbGVtZW50IGlzIGEgYmxhbmtcbiAgICAgICAgaWYgKGJsYW5rQ291bnRlciA+PSBibGFua3MubGVuZ3RoKSB7XG4gICAgICAgICAgLy8gaWYgdGhlIGJsYW5rIGlzIG5vdCBpbiB0aGUgcmVwb3NpdG9yeSAoVGhlIGNvbnRlbnQgYXV0aG9yIGhhcyBtYXJrZWQgdG9vIG1hbnkgYmxhbmtzIGluIHRoZSB0ZXh0LCBidXQgbm90IGVudGVyZWQgY29ycmVjdCBhbnN3ZXJzLilcbiAgICAgICAgICBodG1sID0gaHRtbC5yZXBsYWNlKENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlciwgXCI8c3Bhbj48L3NwYW4+XCIpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHZhciBibGFuayA9IGJsYW5rc1tibGFua0NvdW50ZXJdO1xuICAgICAgICAgIGJsYW5rc0luc3RhbmNlcy5wdXNoKGJsYW5rKTtcbiAgICAgICAgICBvcmRlcmVkQWxsRWxlbWVudHNMaXN0LnB1c2goYmxhbmspO1xuICAgICAgICAgIGh0bWwgPSBodG1sLnJlcGxhY2UoQ2xvemVMb2FkZXIubm9ybWFsaXplZEJsYW5rTWFya2VyLCBgPHNwYW4gaWQ9J2NvbnRhaW5lcl8ke2JsYW5rLmlkfSc+PC9zcGFuPmApO1xuICAgICAgICAgIGJsYW5rQ291bnRlcisrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHdoaWxlIChuZXh0SGlnaGxpZ2h0TWF0Y2ggfHwgKG5leHRCbGFua0luZGV4ID49IDApKTtcblxuICAgIHJldHVybiB7XG4gICAgICBodG1sOiBodG1sLFxuICAgICAgb3JkZXJlZEFsbEVsZW1lbnRzTGlzdDogb3JkZXJlZEFsbEVsZW1lbnRzTGlzdCxcbiAgICAgIGhpZ2hsaWdodEluc3RhbmNlczogaGlnaGxpZ2h0SW5zdGFuY2VzLFxuICAgICAgYmxhbmtzSW5zdGFuY2VzOiBibGFua3NJbnN0YW5jZXNcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIExvb2tzIGZvciBhbGwgaW5zdGFuY2VzIG9mIG1hcmtlZCBibGFua3MgYW5kIHJlcGxhY2VzIHRoZW0gd2l0aCBfX18uIFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGh0bWxcbiAgICogQHJldHVybnMgc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIHN0YXRpYyBub3JtYWxpemVCbGFua01hcmtpbmdzKGh0bWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdmFyIHVuZGVybGluZUJsYW5rUmVnRXggPSAvX3szLH0vZztcbiAgICBodG1sID0gaHRtbC5yZXBsYWNlKHVuZGVybGluZUJsYW5rUmVnRXgsIENsb3plTG9hZGVyLm5vcm1hbGl6ZWRCbGFua01hcmtlcik7XG4gICAgcmV0dXJuIGh0bWw7XG4gIH1cblxuICAgLyoqXG4gICAqIEl0ZXJhdGVzIHRocm91Z2ggYWxsIGJsYW5rcyBhbmQgY2FsbHMgdGhlaXIgbGlua0hpZ2hsaWdodElkc1RvT2JqZWN0cyguLi4pLlxuICAgKiBAcGFyYW0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdCBcbiAgICogQHBhcmFtIGhpZ2hsaWdodEluc3RhbmNlcyBcbiAgICogQHBhcmFtIGJsYW5rc0luc3RhbmNlcyBcbiAgICovXG4gIHByaXZhdGUgc3RhdGljIGxpbmtIaWdobGlnaHRzT2JqZWN0cyhvcmRlcmVkQWxsRWxlbWVudHNMaXN0OiBDbG96ZUVsZW1lbnRbXSwgaGlnaGxpZ2h0SW5zdGFuY2VzOiBIaWdobGlnaHRbXSwgYmxhbmtzSW5zdGFuY2VzOiBCbGFua1tdKTogdm9pZCB7XG4gICAgZm9yICh2YXIgYmxhbmsgb2YgYmxhbmtzSW5zdGFuY2VzKSB7XG4gICAgICB2YXIgbmV4dEJsYW5rSW5kZXhJbkFycmF5ID0gb3JkZXJlZEFsbEVsZW1lbnRzTGlzdC5pbmRleE9mKGJsYW5rKTtcbiAgICAgIHZhciBoaWdobGlnaHRzQmVmb3JlQmxhbmsgPSBvcmRlcmVkQWxsRWxlbWVudHNMaXN0XG4gICAgICAgIC5zbGljZSgwLCBuZXh0QmxhbmtJbmRleEluQXJyYXkpXG4gICAgICAgIC5maWx0ZXIoZSA9PiBlLnR5cGUgPT09IENsb3plRWxlbWVudFR5cGUuSGlnaGxpZ2h0KVxuICAgICAgICAubWFwKGUgPT4gZSBhcyBIaWdobGlnaHQpXG4gICAgICAgIC5yZXZlcnNlKCk7XG4gICAgICB2YXIgaGlnaGxpZ2h0c0FmdGVyQmxhbmsgPSBvcmRlcmVkQWxsRWxlbWVudHNMaXN0XG4gICAgICAgIC5zbGljZShuZXh0QmxhbmtJbmRleEluQXJyYXkgKyAxKVxuICAgICAgICAuZmlsdGVyKGUgPT4gZS50eXBlID09PSBDbG96ZUVsZW1lbnRUeXBlLkhpZ2hsaWdodClcbiAgICAgICAgLm1hcChlID0+IGUgYXMgSGlnaGxpZ2h0KTtcbiAgICAgIEJsYW5rTG9hZGVyLmluc3RhbmNlLmxpbmtIaWdobGlnaHRJZFRvT2JqZWN0KGJsYW5rLCBoaWdobGlnaHRzQmVmb3JlQmxhbmssIGhpZ2hsaWdodHNBZnRlckJsYW5rKTtcbiAgICB9XG4gIH1cbn0iLCJpbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL21lc3NhZ2Utc2VydmljZSc7XG5pbXBvcnQgeyBCbGFua0xvYWRlciB9IGZyb20gJy4uL2NvbnRlbnQtbG9hZGVycy9ibGFuay1sb2FkZXInO1xuaW1wb3J0IHsgQ2xvemVMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvY2xvemUtbG9hZGVyJztcbmltcG9ydCB7IENsb3plIH0gZnJvbSBcIi4uL21vZGVscy9jbG96ZVwiO1xuaW1wb3J0IHsgSURhdGFSZXBvc2l0b3J5IH0gZnJvbSBcIi4uL3NlcnZpY2VzL2RhdGEtcmVwb3NpdG9yeVwiO1xuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NldHRpbmdzXCI7XG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24gfSBmcm9tIFwiLi4vc2VydmljZXMvbG9jYWxpemF0aW9uXCI7XG5pbXBvcnQgeyBDbG96ZVR5cGUsIFNlbGVjdEFsdGVybmF0aXZlcyB9IGZyb20gXCIuLi9tb2RlbHMvZW51bXNcIjtcbmltcG9ydCB7IEhpZ2hsaWdodCB9IGZyb20gXCIuLi9tb2RlbHMvaGlnaGxpZ2h0XCI7XG5pbXBvcnQgeyBCbGFuayB9IGZyb20gXCIuLi9tb2RlbHMvYmxhbmtcIjtcbmltcG9ydCB7IENvcnJlY3RuZXNzIH0gZnJvbSAnLi4vbW9kZWxzL2Fuc3dlcic7XG5cbmltcG9ydCBoaWdobGlnaHRUZW1wbGF0ZSBmcm9tICcuLi92aWV3cy9oaWdobGlnaHQucmFjdGl2ZS5odG1sJztcbmltcG9ydCBibGFua1RlbXBsYXRlIGZyb20gJy4uL3ZpZXdzL2JsYW5rLnJhY3RpdmUuaHRtbCc7XG5cbmltcG9ydCAqIGFzIFJhY3RpdmVFdmVudHNLZXlzIGZyb20gJy4uLy4uL2xpYi9yYWN0aXZlLWV2ZW50cy1rZXlzJztcblxuaW50ZXJmYWNlIFNjb3JlQ2hhbmdlZCB7XG4gIChzY29yZTogbnVtYmVyLCBtYXhTY29yZTogbnVtYmVyKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIEF1dG9DaGVja2VkIHtcbiAgKCk6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBTb2x2ZWQge1xuICAoKTogdm9pZDtcbn1cblxuaW50ZXJmYWNlIFR5cGVkIHtcbiAgKCk6IHZvaWQ7XG59XG5cbmludGVyZmFjZSBUZXh0Q2hhbmdlZCB7XG4gICgpIDogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIENsb3plQ29udHJvbGxlciB7XG4gIHByaXZhdGUganF1ZXJ5OiBKUXVlcnk7XG5cbiAgcHJpdmF0ZSBjbG96ZTogQ2xvemU7XG4gIHByaXZhdGUgaXNTZWxlY3RDbG96ZTogYm9vbGVhbjtcblxuICBwdWJsaWMgb25TY29yZUNoYW5nZWQ6IFNjb3JlQ2hhbmdlZDtcbiAgcHVibGljIG9uQXV0b0NoZWNrZWQ6IEF1dG9DaGVja2VkO1xuICBwdWJsaWMgb25Tb2x2ZWQ6IFNvbHZlZDtcbiAgcHVibGljIG9uVHlwZWQ6IFR5cGVkO1xuICBwdWJsaWMgb25UZXh0Q2hhbmdlZDogVGV4dENoYW5nZWQ7XG5cbiAgLy8gU3RvcmFnZSBvZiB0aGUgcmFjdGl2ZSBvYmplY3RzIHRoYXQgbGluayBtb2RlbHMgYW5kIHZpZXdzXG4gIHByaXZhdGUgaGlnaGxpZ2h0UmFjdGl2ZXM6IHsgW2lkOiBzdHJpbmddOiBSYWN0aXZlLlJhY3RpdmUgfSA9IHt9O1xuICBwcml2YXRlIGJsYW5rUmFjdGl2ZXM6IHsgW2lkOiBzdHJpbmddOiBSYWN0aXZlLlJhY3RpdmUgfSA9IHt9O1xuXG4gIHB1YmxpYyBnZXQgbWF4U2NvcmUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVjdCB3aGV0aGVyIHRoZXJlIGFyZSBibGFua3Mgd2l0aCBtb3JlIHRoYW4gb25lIHNvbHV0aW9uLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBibGFuayB3aXRoIG1vcmUgdGhhbiBvbmUgc29sdXRpb24uXG4gICAqL1xuICBwdWJsaWMgZ2V0IGhhc0FsdGVybmF0aXZlcygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3Muc29tZShiID0+IGIuY29ycmVjdEFuc3dlcnNbMF0uYWx0ZXJuYXRpdmVzLmxlbmd0aCA+IDEpO1xuICB9XG5cbiAgcHVibGljIGdldCBjdXJyZW50U2NvcmUoKTogbnVtYmVyIHtcbiAgICBjb25zdCBzY29yZSA9IHRoaXMuY2xvemUuYmxhbmtzLnJlZHVjZSgoc2NvcmUsIGIpID0+IHtcbiAgICAgIGNvbnN0IG5vdFNob3dpbmdTb2x1dGlvbiA9ICFiLmlzU2hvd2luZ1NvbHV0aW9uO1xuICAgICAgY29uc3QgY29ycmVjdEFuc3dlckdpdmVuID0gYi5jb3JyZWN0QW5zd2Vyc1swXS5hbHRlcm5hdGl2ZXMuaW5kZXhPZihiLmVudGVyZWRUZXh0IHx8ICcnKSAhPT0gLTE7XG5cbiAgICAgIC8vIERldGVjdCBzbWFsbCBtaXN0YWtlc1xuICAgICAgY29uc3QgY2xvc2VDb3JyZWN0TWF0Y2hlcyA9IGIuY29ycmVjdEFuc3dlcnNcbiAgICAgICAgLm1hcChhbnN3ZXIgPT4gYW5zd2VyLmV2YWx1YXRlQXR0ZW1wdChiLmVudGVyZWRUZXh0KSlcbiAgICAgICAgLmZpbHRlcihldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPT09IENvcnJlY3RuZXNzLkNsb3NlTWF0Y2gpO1xuICAgICAgY29uc3Qgc2ltaWxhckFuc3dlckdpdmVuID0gdGhpcy5zZXR0aW5ncy5hY2NlcHRTcGVsbGluZ0Vycm9ycyAmJiBjbG9zZUNvcnJlY3RNYXRjaGVzLmxlbmd0aCA+IDA7XG5cbiAgICAgIHJldHVybiBzY29yZSArPSAobm90U2hvd2luZ1NvbHV0aW9uICYmIChjb3JyZWN0QW5zd2VyR2l2ZW4gfHwgc2ltaWxhckFuc3dlckdpdmVuKSkgPyAxIDogMDtcbiAgICB9LCAwKTtcblxuICAgIHJldHVybiBNYXRoLm1heCgwLCBzY29yZSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGFsbEJsYW5rc0VudGVyZWQoKSB7XG4gICAgaWYgKHRoaXMuY2xvemUpXG4gICAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3MuZXZlcnkoYmxhbmsgPT4gYmxhbmsuaXNFcnJvciB8fCBibGFuay5pc0NvcnJlY3QgfHwgYmxhbmsuaXNSZXRyeSk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHVibGljIGdldCBpc1NvbHZlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5pc1NvbHZlZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNGaWxsZWRPdXQoKSB7XG4gICAgaWYgKCF0aGlzLmNsb3plIHx8IHRoaXMuY2xvemUuYmxhbmtzLmxlbmd0aCA9PT0gMClcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIHJldHVybiB0aGlzLmNsb3plLmJsYW5rcy5zb21lKGIgPT4gYi5lbnRlcmVkVGV4dCAhPT0gJycpO1xuICB9XG5cbiAgcHVibGljIGdldCBpc0Z1bGx5RmlsbGVkT3V0KCkge1xuICAgIGlmICghdGhpcy5jbG96ZSB8fCB0aGlzLmNsb3plLmJsYW5rcy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5jbG96ZS5ibGFua3MuZXZlcnkoYiA9PiBiLmVudGVyZWRUZXh0ICE9PSAnJyk7XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlcG9zaXRvcnk6IElEYXRhUmVwb3NpdG9yeSwgcHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzLCBwcml2YXRlIGxvY2FsaXphdGlvbjogSDVQTG9jYWxpemF0aW9uLCBwcml2YXRlIE1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdXAgYWxsIGJsYW5rcywgdGhlIGNsb3plIGl0c2VsZiBhbmQgdGhlIHJhY3RpdmUgYmluZGluZ3MuXG4gICAqIEBwYXJhbSAge0hUTUxFbGVtZW50fSByb290XG4gICAqL1xuICBpbml0aWFsaXplKHJvb3Q6IEhUTUxFbGVtZW50LCBqcXVlcnk6IEpRdWVyeSkge1xuICAgIHRoaXMuanF1ZXJ5ID0ganF1ZXJ5O1xuICAgIHRoaXMuaXNTZWxlY3RDbG96ZSA9IHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0ID8gdHJ1ZSA6IGZhbHNlO1xuXG4gICAgdmFyIGJsYW5rcyA9IHRoaXMucmVwb3NpdG9yeS5nZXRCbGFua3MoKTtcblxuICAgIC8vIFN0b3AgcmFjdGl2ZSBkZWJ1ZyBtb2RlXG4gICAgUmFjdGl2ZS5ERUJVRyA9IGZhbHNlO1xuXG4gICAgaWYgKHRoaXMuaXNTZWxlY3RDbG96ZSAmJiB0aGlzLnNldHRpbmdzLnNlbGVjdEFsdGVybmF0aXZlcyA9PT0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbCkge1xuICAgICAgZm9yICh2YXIgYmxhbmsgb2YgYmxhbmtzKSB7XG4gICAgICAgIGxldCBvdGhlckJsYW5rcyA9IGJsYW5rcy5maWx0ZXIodiA9PiB2ICE9PSBibGFuayk7XG4gICAgICAgIGJsYW5rLmxvYWRDaG9pY2VzRnJvbU90aGVyQmxhbmtzKG90aGVyQmxhbmtzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgc25pcHBldHMgPSB0aGlzLnJlcG9zaXRvcnkuZ2V0U25pcHBldHMoKTtcbiAgICBibGFua3MuZm9yRWFjaChibGFuayA9PiBCbGFua0xvYWRlci5pbnN0YW5jZS5yZXBsYWNlU25pcHBldHMoYmxhbmssIHNuaXBwZXRzKSk7XG5cbiAgICB0aGlzLmNsb3plID0gQ2xvemVMb2FkZXIuY3JlYXRlQ2xvemUodGhpcy5yZXBvc2l0b3J5LmdldENsb3plVGV4dCgpLCBibGFua3MpO1xuXG4gICAgdmFyIGNvbnRhaW5lcnMgPSB0aGlzLmNyZWF0ZUFuZEFkZENvbnRhaW5lcnMocm9vdCk7XG4gICAgY29udGFpbmVycy5jbG96ZS5pbm5lckhUTUwgPSB0aGlzLmNsb3plLmh0bWw7XG4gICAgdGhpcy5jcmVhdGVSYWN0aXZlQmluZGluZ3MoKTtcbiAgfVxuXG4gIGNoZWNrQWxsID0gKCkgPT4ge1xuICAgIHRoaXMuY2xvemUuaGlkZUFsbEhpZ2hsaWdodHMoKTtcbiAgICBmb3IgKHZhciBibGFuayBvZiB0aGlzLmNsb3plLmJsYW5rcykge1xuICAgICAgaWYgKCghYmxhbmsuaXNDb3JyZWN0KSAmJiBibGFuay5lbnRlcmVkVGV4dCAhPT0gXCJcIilcbiAgICAgICAgYmxhbmsuZXZhbHVhdGVBdHRlbXB0KHRydWUsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICAgIHRoaXMuY2hlY2tBbmROb3RpZnlDb21wbGV0ZW5lc3MoKTtcbiAgfVxuXG4gIHRleHRUeXBlZCA9IChldmVudCwgYmxhbms6IEJsYW5rKSA9PiB7XG4gICAgYmxhbmsub25UeXBlZCgpO1xuICAgIGlmICh0aGlzLm9uVHlwZWQpXG4gICAgICB0aGlzLm9uVHlwZWQoKTtcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICB9XG5cbiAgZm9jdXMgPSAoZXZlbnQsIGJsYW5rOiBCbGFuaykgPT4ge1xuICAgIGJsYW5rLm9uRm9jdXNlZCgpO1xuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XG4gIH1cblxuICBkaXNwbGF5RmVlZGJhY2sgPSAoZXZlbnQsIGJsYW5rOiBCbGFuaykgPT4ge1xuICAgIGJsYW5rLm9uRGlzcGxheUZlZWRiYWNrKCk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgfVxuXG4gIHNob3dIaW50ID0gKGV2ZW50LCBibGFuazogQmxhbmspID0+IHtcbiAgICB0aGlzLmNsb3plLmhpZGVBbGxIaWdobGlnaHRzKCk7XG4gICAgYmxhbmsuc2hvd0hpbnQoKTtcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICB9XG5cbiAgcmVxdWVzdENsb3NlVG9vbHRpcCA9IChldmVudCwgYmxhbms6IEJsYW5rKSA9PiB7XG4gICAgYmxhbmsucmVtb3ZlVG9vbHRpcCgpO1xuICAgIHRoaXMucmVmcmVzaENsb3plKCk7XG4gICAgdGhpcy5qcXVlcnkuZmluZChcIiNcIiArIGJsYW5rLmlkKS5mb2N1cygpO1xuICB9XG5cbiAgY2hlY2tCbGFuayA9IChldmVudCwgYmxhbms6IEJsYW5rLCBjYXVzZTogc3RyaW5nKSA9PiB7XG4gICAgaWYgKChjYXVzZSA9PT0gJ2JsdXInIHx8IGNhdXNlID09PSAnY2hhbmdlJykpIHtcbiAgICAgIGJsYW5rLmxvc3RGb2N1cygpO1xuICAgIH1cblxuICAgIGlmIChjYXVzZSA9PT0gJ2NoYW5nZScgJiYgdGhpcy5vblR5cGVkKSB7XG4gICAgICB0aGlzLm9uVHlwZWQoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvQ2hlY2spIHtcbiAgICAgIGlmICghYmxhbmsuZW50ZXJlZFRleHQgfHwgYmxhbmsuZW50ZXJlZFRleHQgPT09IFwiXCIpXG4gICAgICAgIHJldHVybjtcblxuICAgICAgdGhpcy5jbG96ZS5oaWRlQWxsSGlnaGxpZ2h0cygpO1xuICAgICAgYmxhbmsuZXZhbHVhdGVBdHRlbXB0KGZhbHNlKTtcbiAgICAgIHRoaXMuY2hlY2tBbmROb3RpZnlDb21wbGV0ZW5lc3MoKTtcbiAgICAgIHRoaXMucmVmcmVzaENsb3plKCk7XG4gICAgICB0aGlzLm9uQXV0b0NoZWNrZWQoKTtcbiAgICB9XG4gICAgaWYgKChjYXVzZSA9PT0gJ2VudGVyJylcbiAgICAgICYmICgodGhpcy5zZXR0aW5ncy5hdXRvQ2hlY2sgJiYgYmxhbmsuaXNDb3JyZWN0ICYmICF0aGlzLmlzU29sdmVkKVxuICAgICAgICB8fCAhdGhpcy5zZXR0aW5ncy5hdXRvQ2hlY2spKSB7XG4gICAgICAvLyBtb3ZlIHRvIG5leHQgYmxhbmtcbiAgICAgIHZhciBpbmRleCA9IHRoaXMuY2xvemUuYmxhbmtzLmluZGV4T2YoYmxhbmspO1xuICAgICAgdmFyIG5leHRJZDtcbiAgICAgIHdoaWxlIChpbmRleCA8IHRoaXMuY2xvemUuYmxhbmtzLmxlbmd0aCAtIDEgJiYgIW5leHRJZCkge1xuICAgICAgICBpbmRleCsrO1xuICAgICAgICBpZiAoIXRoaXMuY2xvemUuYmxhbmtzW2luZGV4XS5pc0NvcnJlY3QpXG4gICAgICAgICAgbmV4dElkID0gdGhpcy5jbG96ZS5ibGFua3NbaW5kZXhdLmlkO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dElkKVxuICAgICAgICB0aGlzLmpxdWVyeS5maW5kKFwiI1wiICsgbmV4dElkKS5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0ID0gKCkgPT4ge1xuICAgIHRoaXMuY2xvemUucmVzZXQoKTtcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICB9XG5cbiAgc2hvd1NvbHV0aW9ucyA9ICgpID0+IHtcbiAgICB0aGlzLmNsb3plLnNob3dTb2x1dGlvbnMoKTtcbiAgICB0aGlzLnJlZnJlc2hDbG96ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVBbmRBZGRDb250YWluZXJzKGFkZFRvOiBIVE1MRWxlbWVudCk6IHsgY2xvemU6IEhUTUxEaXZFbGVtZW50IH0ge1xuICAgIHZhciBjbG96ZUNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjbG96ZUNvbnRhaW5lckVsZW1lbnQuaWQgPSAnaDVwLWNsb3plLWNvbnRhaW5lcic7XG4gICAgaWYgKHRoaXMuc2V0dGluZ3MuY2xvemVUeXBlID09PSBDbG96ZVR5cGUuU2VsZWN0KSB7XG4gICAgICBjbG96ZUNvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2g1cC1hZHZhbmNlZC1ibGFua3Mtc2VsZWN0LW1vZGUnO1xuICAgIH0gZWxzZSB7XG4gICAgICBjbG96ZUNvbnRhaW5lckVsZW1lbnQuY2xhc3NOYW1lID0gJ2g1cC1hZHZhbmNlZC1ibGFua3MtdHlwZS1tb2RlJztcbiAgICB9XG4gICAgYWRkVG8uYXBwZW5kQ2hpbGQoY2xvemVDb250YWluZXJFbGVtZW50KTtcblxuICAgIHJldHVybiB7XG4gICAgICBjbG96ZTogY2xvemVDb250YWluZXJFbGVtZW50XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlSGlnaGxpZ2h0QmluZGluZyhoaWdobGlnaHQ6IEhpZ2hsaWdodCkge1xuICAgIHRoaXMuaGlnaGxpZ2h0UmFjdGl2ZXNbaGlnaGxpZ2h0LmlkXSA9IG5ldyBSYWN0aXZlKHtcbiAgICAgIGVsOiAnI2NvbnRhaW5lcl8nICsgaGlnaGxpZ2h0LmlkLFxuICAgICAgdGVtcGxhdGU6IGhpZ2hsaWdodFRlbXBsYXRlLFxuICAgICAgZGF0YToge1xuICAgICAgICBvYmplY3Q6IGhpZ2hsaWdodFxuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVCbGFua0JpbmRpbmcoYmxhbms6IEJsYW5rKSB7XG4gICAgdmFyIHJhY3RpdmUgPSBuZXcgUmFjdGl2ZSh7XG4gICAgICBlbDogJyNjb250YWluZXJfJyArIGJsYW5rLmlkLFxuICAgICAgdGVtcGxhdGU6IGJsYW5rVGVtcGxhdGUsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGlzU2VsZWN0Q2xvemU6IHRoaXMuaXNTZWxlY3RDbG96ZSxcbiAgICAgICAgYmxhbms6IGJsYW5rXG4gICAgICB9LFxuICAgICAgZXZlbnRzOiB7XG4gICAgICAgIGVudGVyOiBSYWN0aXZlRXZlbnRzS2V5cy5lbnRlcixcbiAgICAgICAgZXNjYXBlOiBSYWN0aXZlRXZlbnRzS2V5cy5lc2NhcGUsXG4gICAgICAgIGFueWtleTogUmFjdGl2ZUV2ZW50c0tleXMuYW55a2V5XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmFjdGl2ZS5vbihcImNoZWNrQmxhbmtcIiwgdGhpcy5jaGVja0JsYW5rKTtcbiAgICByYWN0aXZlLm9uKFwic2hvd0hpbnRcIiwgdGhpcy5zaG93SGludCk7XG4gICAgcmFjdGl2ZS5vbihcInRleHRUeXBlZFwiLCB0aGlzLnRleHRUeXBlZCk7XG4gICAgcmFjdGl2ZS5vbihcInRleHRDaGFuZ2VkXCIsIHRoaXMub25UZXh0Q2hhbmdlZCk7XG4gICAgcmFjdGl2ZS5vbihcImNsb3NlTWVzc2FnZVwiLCB0aGlzLnJlcXVlc3RDbG9zZVRvb2x0aXApO1xuICAgIHJhY3RpdmUub24oXCJmb2N1c1wiLCB0aGlzLmZvY3VzKTtcbiAgICByYWN0aXZlLm9uKFwiZGlzcGxheUZlZWRiYWNrXCIsIHRoaXMuZGlzcGxheUZlZWRiYWNrKTtcblxuICAgIHRoaXMuYmxhbmtSYWN0aXZlc1tibGFuay5pZF0gPSByYWN0aXZlO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVSYWN0aXZlQmluZGluZ3MoKSB7XG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuY2xvemUuaGlnaGxpZ2h0cykge1xuICAgICAgdGhpcy5jcmVhdGVIaWdobGlnaHRCaW5kaW5nKGhpZ2hsaWdodCk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgYmxhbmsgb2YgdGhpcy5jbG96ZS5ibGFua3MpIHtcbiAgICAgIHRoaXMuY3JlYXRlQmxhbmtCaW5kaW5nKGJsYW5rKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyBhbGwgdmlld3Mgb2YgaGlnaGxpZ2h0cyBhbmQgYmxhbmtzLiBDYW4gYmUgY2FsbGVkIHdoZW4gYSBtb2RlbFxuICAgKiB3YXMgY2hhbmdlZFxuICAgKi9cbiAgcHJpdmF0ZSByZWZyZXNoQ2xvemUoKSB7XG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuY2xvemUuaGlnaGxpZ2h0cykge1xuICAgICAgdmFyIGhpZ2hsaWdodFJhY3RpdmUgPSB0aGlzLmhpZ2hsaWdodFJhY3RpdmVzW2hpZ2hsaWdodC5pZF07XG4gICAgICBoaWdobGlnaHRSYWN0aXZlLnNldChcIm9iamVjdFwiLCBoaWdobGlnaHQpO1xuICAgIH1cblxuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuY2xvemUuYmxhbmtzKSB7XG4gICAgICB2YXIgYmxhbmtSYWN0aXZlID0gdGhpcy5ibGFua1JhY3RpdmVzW2JsYW5rLmlkXTtcbiAgICAgIGJsYW5rUmFjdGl2ZS5zZXQoXCJibGFua1wiLCBibGFuayk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjaGVja0FuZE5vdGlmeUNvbXBsZXRlbmVzcyA9ICgpOiBib29sZWFuID0+IHtcbiAgICBpZiAodGhpcy5vblNjb3JlQ2hhbmdlZClcbiAgICAgIHRoaXMub25TY29yZUNoYW5nZWQodGhpcy5jdXJyZW50U2NvcmUsIHRoaXMubWF4U2NvcmUpO1xuXG4gICAgaWYgKHRoaXMuY2xvemUuaXNTb2x2ZWQpIHtcbiAgICAgIGlmICh0aGlzLm9uU29sdmVkKVxuICAgICAgICB0aGlzLm9uU29sdmVkKCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBwdWJsaWMgc2VyaWFsaXplQ2xvemUoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiB0aGlzLmNsb3plLnNlcmlhbGl6ZSgpO1xuICB9XG5cbiAgcHVibGljIGRlc2VyaWFsaXplQ2xvemUoZGF0YTogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmNsb3plIHx8ICFkYXRhKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIHRoaXMuY2xvemUuZGVzZXJpYWxpemUoZGF0YSk7XG4gICAgdGhpcy5yZWZyZXNoQ2xvemUoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb3JyZWN0QW5zd2VyTGlzdCgpOiBzdHJpbmdbXVtdIHtcbiAgICBpZiAoIXRoaXMuY2xvemUgfHwgdGhpcy5jbG96ZS5ibGFua3MubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIFtbXV07XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuY2xvemUuYmxhbmtzKSB7XG4gICAgICByZXN1bHQucHVzaChibGFuay5nZXRDb3JyZWN0QW5zd2VycygpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG4iLCIvKipcbiAqIEV4dGVuZCBhbiBhcnJheSBqdXN0IGxpa2UgSlF1ZXJ5J3MgZXh0ZW5kLlxuICogQHBhcmFtIHtvYmplY3R9IGFyZ3VtZW50cyBPYmplY3RzIHRvIGJlIG1lcmdlZC5cbiAqIEByZXR1cm4ge29iamVjdH0gTWVyZ2VkIG9iamVjdHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQoLi4uYXJnczogYW55W10pIHtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQga2V5IGluIGFyZ3NbaV0pIHtcbiAgICAgIGlmIChhcmdzW2ldLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBhcmdzWzBdW2tleV0gPT09ICdvYmplY3QnICYmIHR5cGVvZiBhcmdzW2ldW2tleV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgZXh0ZW5kKGFyZ3NbMF1ba2V5XSwgYXJnc1tpXVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBhcmdzWzBdW2tleV0gPSBhcmdzW2ldW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFyZ3NbMF07XG59XG4iLCIvKipcbiAqIFRoaXMgY2xhc3MgY2xlYW5zIGh0bWwgc3RyaW5ncy5cbiAqL1xuZXhwb3J0IGNsYXNzIFVucndhcHBlciB7XG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIGpxdWVyeTogSlF1ZXJ5U3RhdGljKSB7XG5cbiAgfVxuXG4gIFxuICAvKipcbiAgICogQ2xlYW5zIGh0bWwgc3RyaW5ncyBieSByZW1vdmluZyB0aGUgb3V0bW9zdCBodG1sIHRhZyBvZiB0aGUgc3RyaW5nIGlmIHRoZXJlIGlzIG9ubHkgb25lIHRhZy5cbiAgICogRXhhbXBsZXM6ICBcIjxwPm15IHRleHQ8L3A+XCJcIiBiZWNvbWVzIFwibXkgdGV4dFwiXG4gICAqICAgICAgICAgICAgXCI8cD50ZXh0IDE8L3A+PHA+dGV4dCAyPC9wMj5cIiBzdGF5c1xuICAgKiBAcGFyYW0gaHRtbCBUaGUgaHRtbCBzdHJpbmdcbiAgICogQHJldHVybnMgdGhlIGNsZWFuZWQgaHRtbCBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyB1bndyYXAoaHRtbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICB2YXIgcGFyc2VkID0gdGhpcy5qcXVlcnkoaHRtbCk7XG4gICAgaWYgKHBhcnNlZC5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVybiBodG1sO1xuICAgIH1cbiAgICBsZXQgdW53cmFwcGVkID0gcGFyc2VkLnVud3JhcCgpLmh0bWwoKTtcbiAgICByZXR1cm4gdW53cmFwcGVkO1xuICB9XG59IiwiaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vbWVzc2FnZSc7XG5pbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tICcuL2hpZ2hsaWdodCc7XG5pbXBvcnQgeyBJU2V0dGluZ3MgfSBmcm9tICcuLi9zZXJ2aWNlcy9zZXR0aW5ncyc7XG5pbXBvcnQgKiBhcyBqc2RpZmYgZnJvbSAnZGlmZic7XG5cbmV4cG9ydCBlbnVtIENvcnJlY3RuZXNzIHtcbiAgRXhhY3RNYXRjaCxcbiAgQ2xvc2VNYXRjaCxcbiAgTm9NYXRjaFxufVxuXG5leHBvcnQgY2xhc3MgRXZhbHVhdGlvbiB7XG4gIHB1YmxpYyBjb3JyZWN0bmVzczogQ29ycmVjdG5lc3M7XG4gIHB1YmxpYyBjaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQ6IG51bWJlcjtcbiAgcHVibGljIHVzZWRBbHRlcm5hdGl2ZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB1c2VkQW5zd2VyOiBBbnN3ZXIpIHtcbiAgICB0aGlzLmNvcnJlY3RuZXNzID0gQ29ycmVjdG5lc3MuTm9NYXRjaDtcbiAgICB0aGlzLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCA9IDA7XG4gICAgdGhpcy51c2VkQWx0ZXJuYXRpdmUgPSBcIlwiO1xuICB9XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhIHBvc3NpYmxlIGFuc3dlciB0aGUgY29udGVudCBhdXRob3IgZW50ZXJzIGZvciBhIGJsYW5rLCBlLmcuIHRoZSBjb3JyZWN0IG9yIGFuIGluY29ycmVjdCBhbnN3ZXIuXG4gKi9cbmV4cG9ydCBjbGFzcyBBbnN3ZXIge1xuICAvKipcbiAgICogVGhlIGFsdGVybmF0aXZlcyBhcmUgZXF1aXZhbGVudCBzdHJpbmdzIHRoYXQgdGhlIGxpYnJhcnkgc2hvdWxkIHRyZWF0IHRoZSBzYW1lIHdheSwgZS5nLiBzaG93IHRoZSBzYW1lIGZlZWRiYWNrLiBcbiAgICovXG4gIGFsdGVybmF0aXZlczogc3RyaW5nW107XG5cbiAgLyoqXG4gICAqIFRoaXMgaXMgdGhlIG1lc3NhZ2UgdGhhdCBpcyBkaXNwbGF5ZWQgd2hlbiB0aGUgYW5zd2VyIHdhcyBlbnRlcmVkIGJ5IHRoZSB1c2VyLlxuICAgKi9cbiAgbWVzc2FnZTogTWVzc2FnZTtcblxuICAvKipcbiAgICogSXMgdHJ1ZSBpZiB0aGUgZXhwZWN0ZWQgdGV4dCBmb3IgdGhpcyBhbnN3ZXIgaXMgZW1wdHkuXG4gICAqL1xuICBhcHBsaWVzQWx3YXlzOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGFuc3dlclRleHQgLSBUaGUgZXhwZWN0ZWQgYW5zd2VyLiBBbHRlcm5hdGl2ZXMgYXJlIHNlcGFyYXRlZCBieSB8IG9yIDsgLiAoZS5nLiBcIkFsdGVybmF0aXZlIDF8QWx0ZXJuYXRpdmUgMnxBbHRlcm5hdGl2ZSAzfC4uLlwiICAtb3ItIFwiQWx0ZXJuYXRpdmUgMTtBbHRlcm5hdGl2ZSAyO0FsdGVybmF0aXZlIDNcIilcbiAgICogQHBhcmFtICB7c3RyaW5nfSByZWFjdGlvbiAtIFRoZSB0b29sdGlwIHRoYXQgc2hvdWxkIGJlIGRpc3BsYXllZC4gRm9ybWF0OiBUb29sdGlwIFRleHQ7ISEtMSEhICEhKzEhIVxuICAgKi9cbiAgY29uc3RydWN0b3IoYW5zd2VyVGV4dDogc3RyaW5nLCByZWFjdGlvbjogc3RyaW5nLCBzaG93SGlnaGxpZ2h0OiBib29sZWFuLCBoaWdobGlnaHQ6IG51bWJlciwgcHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzKSB7XG4gICAgdGhpcy5hbHRlcm5hdGl2ZXMgPSBhbnN3ZXJUZXh0LnNwbGl0KC9cXC8vKS5tYXAocyA9PiBzLnRyaW0oKSk7XG4gICAgdGhpcy5tZXNzYWdlID0gbmV3IE1lc3NhZ2UocmVhY3Rpb24sIHNob3dIaWdobGlnaHQsIGhpZ2hsaWdodCk7XG4gICAgaWYgKGFuc3dlclRleHQudHJpbSgpID09PSBcIlwiKSB7XG4gICAgICB0aGlzLmFwcGxpZXNBbHdheXMgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFwcGxpZXNBbHdheXMgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTG9va3MgdGhyb3VnaCB0aGUgb2JqZWN0J3MgbWVzc2FnZSBpZHMgYW5kIHN0b3JlcyB0aGUgcmVmZXJlbmNlcyB0byB0aGUgaGlnaGxpZ2h0IG9iamVjdCBmb3IgdGhlc2UgaWRzLlxuICAgKiBAcGFyYW0gIHtIaWdobGlnaHRbXX0gaGlnaGxpZ2h0c0JlZm9yZVxuICAgKiBAcGFyYW0gIHtIaWdobGlnaHRbXX0gaGlnaGxpZ2h0c0FmdGVyXG4gICAqL1xuICBwdWJsaWMgbGlua0hpZ2hsaWdodElkVG9PYmplY3QoaGlnaGxpZ2h0c0JlZm9yZTogSGlnaGxpZ2h0W10sIGhpZ2hsaWdodHNBZnRlcjogSGlnaGxpZ2h0W10pIHtcbiAgICB0aGlzLm1lc3NhZ2UubGlua0hpZ2hsaWdodChoaWdobGlnaHRzQmVmb3JlLCBoaWdobGlnaHRzQWZ0ZXIpO1xuICB9XG4gIC8qKlxuICAgKiBUdXJucyBvbiB0aGUgaGlnaGxpZ2h0cyBzZXQgYnkgdGhlIGNvbnRlbnQgYXV0aG9yIGZvciB0aGlzIGFuc3dlci5cbiAgICovXG4gIHB1YmxpYyBhY3RpdmF0ZUhpZ2hsaWdodCgpIHtcbiAgICBpZiAodGhpcy5tZXNzYWdlLmhpZ2hsaWdodGVkRWxlbWVudClcbiAgICAgIHRoaXMubWVzc2FnZS5oaWdobGlnaHRlZEVsZW1lbnQuaXNIaWdobGlnaHRlZCA9IHRydWU7XG4gIH1cblxuICBwcml2YXRlIGNsZWFuU3RyaW5nKHRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdGV4dCA9IHRleHQudHJpbSgpO1xuICAgIHJldHVybiB0ZXh0LnJlcGxhY2UoL1xcc3syLH0vZywgXCIgXCIpO1xuICB9XG4gIC8qKlxuICAgKiBMb29rcyB0aHJvdWdoIHRoZSBkaWZmIGFuZCBjaGVja3MgaG93IG1hbnkgY2hhcmFjdGVyIGNoYW5nZSBvcGVyYXRpb25zIGFyZSBuZWVkZWQgdG8gdHVybiBvbmUgc3RyaW5nIGludG8gdGhlIG90aGVyLiBTaG91bGQgcmV0dXJuIHRoZSBzYW1lIHJlc3VsdHMgYXMgdGhlIExldmVuc3RoZWluIGRpc3RhbmNlLiBcbiAgICogQHBhcmFtICB7W3thZGRlZD86Ym9vbGVhbiwgYm9vbGVhbjogcmVtb3ZlZD8sIHN0cmluZzogdmFsdWV9XX0gZGlmZiAtIGFzIHJldHVybmVkIGJ5IGpzZGlmZlxuICAgKiBAcmV0dXJucyBudW1iZXIgLSB0aGUgY291bnQgb2YgY2hhbmdlcyAocmVwbGFjZSwgYWRkLCBkZWxldGUpIG5lZWRlZCB0byBjaGFuZ2UgdGhlIHRleHQgZnJvbSBvbmUgc3RyaW5nIHRvIHRoZSBvdGhlciBcbiAgICovXG4gIHByaXZhdGUgZ2V0Q2hhbmdlc0NvdW50RnJvbURpZmYoZGlmZjoganNkaWZmLkNoYW5nZVtdKTogbnVtYmVyIHtcbiAgICB2YXIgdG90YWxDaGFuZ2VzQ291bnQgPSAwO1xuICAgIHZhciBsYXN0VHlwZSA9IFwiXCI7XG4gICAgdmFyIGxhc3RDb3VudCA9IDA7XG5cbiAgICBmb3IgKHZhciBlbGVtZW50IG9mIGRpZmYpIHtcbiAgICAgIGlmIChlbGVtZW50LnJlbW92ZWQpIHtcbiAgICAgICAgdG90YWxDaGFuZ2VzQ291bnQgKz0gZWxlbWVudC52YWx1ZS5sZW5ndGg7XG4gICAgICAgIGxhc3RUeXBlID0gXCJyZW1vdmVkXCI7XG4gICAgICB9XG4gICAgICBlbHNlIGlmIChlbGVtZW50LmFkZGVkKSB7XG4gICAgICAgIGlmIChsYXN0VHlwZSA9PT0gXCJyZW1vdmVkXCIpIHtcbiAgICAgICAgICBpZiAobGFzdENvdW50IDwgZWxlbWVudC52YWx1ZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRvdGFsQ2hhbmdlc0NvdW50ICs9IGVsZW1lbnQudmFsdWUubGVuZ3RoIC0gbGFzdENvdW50O1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0b3RhbENoYW5nZXNDb3VudCArPSBlbGVtZW50LnZhbHVlLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBsYXN0VHlwZSA9IFwiYWRkZWRcIjtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsYXN0VHlwZSA9IFwic2FtZVwiO1xuICAgICAgfVxuICAgICAgbGFzdENvdW50ID0gZWxlbWVudC52YWx1ZS5sZW5ndGg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRvdGFsQ2hhbmdlc0NvdW50O1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGhvdyBtYW55IGNoYXJhY3RlcnMgY2FuIGJlIHdyb25nIHRvIHN0aWxsIGJlIGNvdW50ZWQgYXMgYSBzcGVsbGluZyBtaXN0YWtlLlxuICAgKiBJZiBzcGVsbGluZyBtaXN0YWtlcyBhcmUgdHVybmVkIG9mZiB0aHJvdWdoIHRoZSBzZXR0aW5ncywgaXQgd2lsbCByZXR1cm4gMC5cbiAgICogQHBhcmFtICB7c3RyaW5nfSB0ZXh0XG4gICAqIEByZXR1cm5zIG51bWJlclxuICAgKi9cblxuICBwcml2YXRlIGdldEFjY2VwdGFibGVTcGVsbGluZ01pc3Rha2VzKHRleHQ6IHN0cmluZyk6IG51bWJlciB7XG4gICAgdmFyIGFjY2VwdGFibGVUeXBvQ291bnQ6IG51bWJlcjtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy53YXJuU3BlbGxpbmdFcnJvcnMgfHwgdGhpcy5zZXR0aW5ncy5hY2NlcHRTcGVsbGluZ0Vycm9ycykgLy8gVE9ETzogY29uc2lkZXIgcmVtb3ZhbFxuICAgICAgYWNjZXB0YWJsZVR5cG9Db3VudCA9IE1hdGguZmxvb3IodGV4dC5sZW5ndGggLyAxMCkgKyAxO1xuICAgIGVsc2VcbiAgICAgIGFjY2VwdGFibGVUeXBvQ291bnQgPSAwO1xuXG4gICAgcmV0dXJuIGFjY2VwdGFibGVUeXBvQ291bnQ7XG4gIH1cbiAgLyoqXG4gICAqIENoZWNrcyBpZiB0aGUgdGV4dCBlbnRlcmVkIGJ5IHRoZSB1c2VyIGluIGFuIGV0dGVtcHQgaXMgbWF0Y2hlZCBieSB0aGUgYW5zd2VyLFxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGF0dGVtcHQgVGhlIHRleHQgZW50ZXJlZCBieSB0aGUgdXNlci5cbiAgICogQHJldHVybnMgRXZhbHVhdGlvbiBpbmRpY2F0ZXMgaWYgdGhlIGVudGVyZWQgdGV4dCBpcyBtYXRjaGVkIGJ5IHRoZSBhbnN3ZXIuXG4gICAqL1xuICBwdWJsaWMgZXZhbHVhdGVBdHRlbXB0KGF0dGVtcHQ6IHN0cmluZyk6IEV2YWx1YXRpb24ge1xuICAgIHZhciBjbGVhbmVkQXR0ZW1wdCA9IHRoaXMuY2xlYW5TdHJpbmcoYXR0ZW1wdCk7XG4gICAgdmFyIGV2YWx1YXRpb24gPSBuZXcgRXZhbHVhdGlvbih0aGlzKTtcblxuICAgIGZvciAodmFyIGFsdGVybmF0aXZlIG9mIHRoaXMuYWx0ZXJuYXRpdmVzKSB7XG4gICAgICB2YXIgY2xlYW5lZEFsdGVybmF0aXZlID0gdGhpcy5jbGVhblN0cmluZyhhbHRlcm5hdGl2ZSk7XG5cbiAgICAgIHZhciBkaWZmID0ganNkaWZmLmRpZmZDaGFycyhjbGVhbmVkQWx0ZXJuYXRpdmUsIGNsZWFuZWRBdHRlbXB0LFxuICAgICAgICB7IGlnbm9yZUNhc2U6ICF0aGlzLnNldHRpbmdzLmNhc2VTZW5zaXRpdmUgfSk7XG4gICAgICB2YXIgY2hhbmdlQ291bnQgPSB0aGlzLmdldENoYW5nZXNDb3VudEZyb21EaWZmKGRpZmYpO1xuXG4gICAgICBpZiAoY2hhbmdlQ291bnQgPT09IDApIHtcbiAgICAgICAgZXZhbHVhdGlvbi51c2VkQWx0ZXJuYXRpdmUgPSBjbGVhbmVkQWx0ZXJuYXRpdmU7XG4gICAgICAgIGV2YWx1YXRpb24uY29ycmVjdG5lc3MgPSBDb3JyZWN0bmVzcy5FeGFjdE1hdGNoO1xuICAgICAgICByZXR1cm4gZXZhbHVhdGlvbjtcbiAgICAgIH1cblxuICAgICAgaWYgKGNoYW5nZUNvdW50IDw9IHRoaXMuZ2V0QWNjZXB0YWJsZVNwZWxsaW5nTWlzdGFrZXMoYWx0ZXJuYXRpdmUpXG4gICAgICAgICYmIChldmFsdWF0aW9uLmNoYXJhY3RlckRpZmZlcmVuY2VDb3VudCA9PT0gMCB8fCBjaGFuZ2VDb3VudCA8IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KSkge1xuICAgICAgICBldmFsdWF0aW9uLnVzZWRBbHRlcm5hdGl2ZSA9IGNsZWFuZWRBbHRlcm5hdGl2ZTtcbiAgICAgICAgZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9IENvcnJlY3RuZXNzLkNsb3NlTWF0Y2g7XG4gICAgICAgIGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50ID0gY2hhbmdlQ291bnQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBldmFsdWF0aW9uO1xuICB9XG59IiwiaW1wb3J0IHsgTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9tZXNzYWdlLXNlcnZpY2UnO1xuaW1wb3J0IHsgQ2xvemVFbGVtZW50LCBDbG96ZUVsZW1lbnRUeXBlIH0gZnJvbSAnLi9jbG96ZS1lbGVtZW50JztcbmltcG9ydCB7IEFuc3dlciwgQ29ycmVjdG5lc3MgfSBmcm9tICcuL2Fuc3dlcic7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9tZXNzYWdlJztcbmltcG9ydCB7IE1lc3NhZ2VUeXBlLCBDbG96ZVR5cGUsIFNlbGVjdEFsdGVybmF0aXZlcyB9IGZyb20gJy4vZW51bXMnO1xuaW1wb3J0IHsgSDVQTG9jYWxpemF0aW9uLCBMb2NhbGl6YXRpb25MYWJlbHMgfSBmcm9tICcuLi9zZXJ2aWNlcy9sb2NhbGl6YXRpb24nO1xuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NldHRpbmdzXCI7XG5pbXBvcnQgeyBnZXRMb25nZXN0U3RyaW5nLCBzaHVmZmxlQXJyYXkgfSBmcm9tIFwiLi4vLi4vbGliL2hlbHBlcnNcIjtcbmltcG9ydCAqIGFzIGpzZGlmZiBmcm9tICdkaWZmJztcblxuZXhwb3J0IGNsYXNzIEJsYW5rIGV4dGVuZHMgQ2xvemVFbGVtZW50IHtcbiAgLy8gY29udGVudFxuICBjb3JyZWN0QW5zd2VyczogQW5zd2VyW107XG4gIGluY29ycmVjdEFuc3dlcnM6IEFuc3dlcltdO1xuICBoaW50OiBNZXNzYWdlO1xuICBpZDogc3RyaW5nO1xuICBjaG9pY2VzOiBzdHJpbmdbXTtcbiAgaGFzSGludDogYm9vbGVhbjtcblxuICAvLyB2aWV3bW9kZWwgc3R1ZmZcblxuICBsYXN0Q2hlY2tlZFRleHQ6IHN0cmluZztcbiAgZW50ZXJlZFRleHQ6IHN0cmluZztcbiAgaXNDb3JyZWN0OiBib29sZWFuO1xuICBpc0Vycm9yOiBib29sZWFuO1xuICBpc1JldHJ5OiBib29sZWFuO1xuICBoYXNQZW5kaW5nRmVlZGJhY2s6IGJvb2xlYW47XG4gIGlzU2hvd2luZ1NvbHV0aW9uOiBib29sZWFuO1xuICBtZXNzYWdlOiBzdHJpbmc7XG4gIG1pblRleHRMZW5ndGg6IG51bWJlcjtcbiAgc3BlZWNoQnViYmxlOiBhbnk7XG5cbiAgLyoqXG4gICAqIEFkZCBpbmNvcnJlY3QgYW5zd2VycyBhZnRlciBpbml0aWFsaXppbmcgdGhlIG9iamVjdC4gQ2FsbCBmaW5pc2hJbml0aWFsaXphdGlvbigpXG4gICAqIHdoZW4gZG9uZS5cbiAgICogQHBhcmFtICB7SVNldHRpbmdzfSBzZXR0aW5nc1xuICAgKiBAcGFyYW0gIHtzdHJpbmd9IGlkXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY29ycmVjdFRleHQ/XG4gICAqIEBwYXJhbSAge3N0cmluZ30gaGludFRleHQ/XG4gICAqL1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNldHRpbmdzOiBJU2V0dGluZ3MsIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlLCBpZDogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuZW50ZXJlZFRleHQgPSBcIlwiO1xuICAgIHRoaXMuY29ycmVjdEFuc3dlcnMgPSBuZXcgQXJyYXkoKTtcbiAgICB0aGlzLmluY29ycmVjdEFuc3dlcnMgPSBuZXcgQXJyYXkoKTtcbiAgICB0aGlzLmNob2ljZXMgPSBuZXcgQXJyYXkoKTtcbiAgICB0aGlzLnR5cGUgPSBDbG96ZUVsZW1lbnRUeXBlLkJsYW5rO1xuXG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgLyoqXG4gICogQ2FsbCB0aGlzIG1ldGhvZCB3aGVuIGFsbCBpbmNvcnJlY3QgYW5zd2VycyBoYXZlIGJlZW4gYWRkZWQuXG4gICovXG4gIHB1YmxpYyBmaW5pc2hJbml0aWFsaXphdGlvbigpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QgJiYgdGhpcy5zZXR0aW5ncy5zZWxlY3RBbHRlcm5hdGl2ZXMgPT09IFNlbGVjdEFsdGVybmF0aXZlcy5BbHRlcm5hdGl2ZXMpIHtcbiAgICAgIHRoaXMubG9hZENob2ljZXNGcm9tT3duQWx0ZXJuYXRpdmVzKCk7XG4gICAgfVxuICAgIHRoaXMuY2FsY3VsYXRlTWluVGV4dExlbmd0aCgpO1xuICB9XG5cbiAgcHVibGljIGFkZENvcnJlY3RBbnN3ZXIoYW5zd2VyOiBBbnN3ZXIpIHtcbiAgICB0aGlzLmNvcnJlY3RBbnN3ZXJzLnB1c2goYW5zd2VyKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRDb3JyZWN0QW5zd2VycygpOiBzdHJpbmdbXSB7XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgIGZvciAobGV0IGFuc3dlciBvZiB0aGlzLmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGFuc3dlci5hbHRlcm5hdGl2ZXMpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgcHVibGljIHNldEhpbnQobWVzc2FnZTogTWVzc2FnZSkge1xuICAgIHRoaXMuaGludCA9IG1lc3NhZ2U7XG4gICAgdGhpcy5oYXNIaW50ID0gdGhpcy5oaW50LnRleHQgIT09IFwiXCI7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgaW5jb3JyZWN0IGFuc3dlciB0byB0aGUgbGlzdC5cbiAgICogQHBhcmFtIHRleHQgLSBXaGF0IHRoZSB1c2VyIG11c3QgZW50ZXIuXG4gICAqIEBwYXJhbSByZWFjdGlvbiAgLSBXaGF0IHRoZSB1c2VyIGdldHMgZGlzcGxheWVkIHdoZW4gaGUgZW50ZXJlcyB0aGUgdGV4dC5cbiAgICovXG4gIHB1YmxpYyBhZGRJbmNvcnJlY3RBbnN3ZXIodGV4dDogc3RyaW5nLCByZWFjdGlvbjogc3RyaW5nLCBzaG93SGlnaGxpZ2h0OiBib29sZWFuLCBoaWdobGlnaHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuaW5jb3JyZWN0QW5zd2Vycy5wdXNoKFxuICAgICAgbmV3IEFuc3dlcih0ZXh0LCByZWFjdGlvbiwgc2hvd0hpZ2hsaWdodCwgaGlnaGxpZ2h0LCB0aGlzLnNldHRpbmdzKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBob3cgbWFueSBjaGFyYWN0ZXJzIHRoZSBpbnB1dCBib3ggbXVzdCBoYXZlIGJlIHRvIGFsbG93IGZvciBhbGwgY29ycmVjdCBhbnN3ZXJzLlxuICAgKi9cbiAgLy8gVE9ETzogcmVmYWN0b3JcbiAgcHJpdmF0ZSBjYWxjdWxhdGVNaW5UZXh0TGVuZ3RoKCk6IHZvaWQge1xuICAgIHZhciBhbnN3ZXJzOiBzdHJpbmdbXSA9IG5ldyBBcnJheSgpO1xuICAgIGZvciAobGV0IGNvcnJlY3RBbnN3ZXIgb2YgdGhpcy5jb3JyZWN0QW5zd2Vycykge1xuICAgICAgYW5zd2Vycy5wdXNoKGdldExvbmdlc3RTdHJpbmcoY29ycmVjdEFuc3dlci5hbHRlcm5hdGl2ZXMpKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QpIHtcbiAgICAgIGZvciAobGV0IGluY29ycmVjdEFuc3dlciBvZiB0aGlzLmluY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgICAgYW5zd2Vycy5wdXNoKGdldExvbmdlc3RTdHJpbmcoaW5jb3JyZWN0QW5zd2VyLmFsdGVybmF0aXZlcykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBsb25nZXN0QW5zd2VyID0gZ2V0TG9uZ2VzdFN0cmluZyhhbnN3ZXJzKTtcbiAgICB2YXIgbCA9IGxvbmdlc3RBbnN3ZXIubGVuZ3RoO1xuICAgIHRoaXMubWluVGV4dExlbmd0aCA9IE1hdGgubWF4KDEwLCBsIC0gKGwgJSAxMCkgKyAxMCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxpc3Qgb2YgY2hvaWNlcyBmcm9tIGFsbCBhbHRlcm5hdGl2ZXMgcHJvdmlkZWQgYnlcbiAgICogdGhlIGNvcnJlY3QgYW5kIGluY29ycmVjdCBhbnN3ZXJzLlxuICAgKi9cbiAgcHJpdmF0ZSBsb2FkQ2hvaWNlc0Zyb21Pd25BbHRlcm5hdGl2ZXMoKTogc3RyaW5nW10ge1xuICAgIHRoaXMuY2hvaWNlcyA9IG5ldyBBcnJheSgpO1xuICAgIGZvciAobGV0IGFuc3dlciBvZiB0aGlzLmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICBmb3IgKGxldCBhbHRlcm5hdGl2ZSBvZiBhbnN3ZXIuYWx0ZXJuYXRpdmVzKSB7XG4gICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBhbnN3ZXIgb2YgdGhpcy5pbmNvcnJlY3RBbnN3ZXJzKSB7XG4gICAgICBmb3IgKGxldCBhbHRlcm5hdGl2ZSBvZiBhbnN3ZXIuYWx0ZXJuYXRpdmVzKSB7XG4gICAgICAgIHRoaXMuY2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNob2ljZXMgPSBzaHVmZmxlQXJyYXkodGhpcy5jaG9pY2VzKTtcbiAgICB0aGlzLmNob2ljZXMudW5zaGlmdChcIlwiKTtcblxuICAgIHJldHVybiB0aGlzLmNob2ljZXM7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIGxpc3Qgb2YgY2hvaWNlcyBmcm9tIGFsbCBjb3JyZWN0IGFuc3dlcnMgb2YgdGhlIGNsb3plLlxuICAgKiBAcGFyYW0gb3RoZXJCbGFua3MgQWxsIE9USEVSIGJsYW5rcyBpbiB0aGUgY2xvemUuIChleGNsdWRlcyB0aGUgY3VycmVudCBvbmUhKVxuICAgKi9cbiAgcHVibGljIGxvYWRDaG9pY2VzRnJvbU90aGVyQmxhbmtzKG90aGVyQmxhbmtzOiBCbGFua1tdKTogc3RyaW5nW10ge1xuICAgIGxldCBvd25DaG9pY2VzID0gbmV3IEFycmF5KCk7XG4gICAgZm9yIChsZXQgYW5zd2VyIG9mIHRoaXMuY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgIGZvciAobGV0IGFsdGVybmF0aXZlIG9mIGFuc3dlci5hbHRlcm5hdGl2ZXMpIHtcbiAgICAgICAgb3duQ2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgb3RoZXJDaG9pY2VzID0gbmV3IEFycmF5KCk7XG4gICAgZm9yIChsZXQgb3RoZXJCbGFuayBvZiBvdGhlckJsYW5rcykge1xuICAgICAgZm9yIChsZXQgYW5zd2VyIG9mIG90aGVyQmxhbmsuY29ycmVjdEFuc3dlcnMpIHtcbiAgICAgICAgZm9yIChsZXQgYWx0ZXJuYXRpdmUgb2YgYW5zd2VyLmFsdGVybmF0aXZlcykge1xuICAgICAgICAgIG90aGVyQ2hvaWNlcy5wdXNoKGFsdGVybmF0aXZlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG90aGVyQ2hvaWNlcyA9IHNodWZmbGVBcnJheShvdGhlckNob2ljZXMpO1xuXG4gICAgbGV0IG1heENob2ljZXMgPSB0aGlzLnNldHRpbmdzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb247XG4gICAgaWYgKG1heENob2ljZXMgPT09IHVuZGVmaW5lZCB8fCBtYXhDaG9pY2VzID09PSAwKVxuICAgICAgbWF4Q2hvaWNlcyA9IG93bkNob2ljZXMubGVuZ3RoICsgb3RoZXJDaG9pY2VzLmxlbmd0aDtcblxuICAgIGxldCBsZWZ0T3ZlckNob2ljZXMgPSBtYXhDaG9pY2VzIC0gb3duQ2hvaWNlcy5sZW5ndGg7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBsZWZ0T3ZlckNob2ljZXMgJiYgeCA8IG90aGVyQ2hvaWNlcy5sZW5ndGg7IHgrKykge1xuICAgICAgaWYgKG93bkNob2ljZXMuaW5kZXhPZihvdGhlckNob2ljZXNbeF0pID49IDApIHtcbiAgICAgICAgbGVmdE92ZXJDaG9pY2VzKys7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvd25DaG9pY2VzLnB1c2gob3RoZXJDaG9pY2VzW3hdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNob2ljZXMgPSBzaHVmZmxlQXJyYXkob3duQ2hvaWNlcyk7XG4gICAgdGhpcy5jaG9pY2VzLnVuc2hpZnQoXCJcIik7XG5cbiAgICByZXR1cm4gdGhpcy5jaG9pY2VzO1xuICB9XG5cbiAgLyoqXG4gICogQ2xlYXJzIHRoZSBibGFuayBmcm9tIGFsbCBlbnRlcmVkIHRleHQgYW5kIGhpZGVzIHBvcHVwcy5cbiAgKi9cbiAgcHVibGljIHJlc2V0KCkge1xuICAgIHRoaXMuZW50ZXJlZFRleHQgPSBcIlwiO1xuICAgIHRoaXMubGFzdENoZWNrZWRUZXh0ID0gXCJcIjtcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcbiAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLk5vbmUpO1xuICAgIHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgYmxhbmsgdG8gYSBzdGF0ZSBpbiB3aGljaCB0aGUgY29ycmVjdCBzb2x1dGlvbiBpZiBzaG93biBpZiB0aGUgdXNlclxuICAgKiBoYXNuJ3QgZW50ZXJlZCBhIGNvcnJlY3Qgb25lIHNvIGZhci5cbiAgICovXG4gIHB1YmxpYyBzaG93U29sdXRpb24oKSB7XG4gICAgdGhpcy5ldmFsdWF0ZUF0dGVtcHQodHJ1ZSk7XG4gICAgdGhpcy5yZW1vdmVUb29sdGlwKCk7XG4gICAgaWYgKHRoaXMuaXNDb3JyZWN0KVxuICAgICAgcmV0dXJuO1xuICAgIHRoaXMuZW50ZXJlZFRleHQgPSB0aGlzLmNvcnJlY3RBbnN3ZXJzWzBdLmFsdGVybmF0aXZlc1swXTtcbiAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLlNob3dTb2x1dGlvbik7XG4gIH1cblxuICBwdWJsaWMgb25Gb2N1c2VkKCkge1xuICAgIGlmICh0aGlzLmhhc1BlbmRpbmdGZWVkYmFjaykge1xuICAgICAgdGhpcy5ldmFsdWF0ZUF0dGVtcHQoZmFsc2UpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXR0aW5ncy5jbG96ZVR5cGUgPT09IENsb3plVHlwZS5TZWxlY3QpIHtcbiAgICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuTm9uZSk7XG4gICAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIG9uRGlzcGxheUZlZWRiYWNrKCkge1xuICAgIGlmICh0aGlzLmhhc1BlbmRpbmdGZWVkYmFjaykge1xuICAgICAgdGhpcy5ldmFsdWF0ZUF0dGVtcHQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZGlzcGxheVRvb2x0aXAobWVzc2FnZTogc3RyaW5nLCB0eXBlOiBNZXNzYWdlVHlwZSwgc3VycHJlc3NUb29sdGlwOiBib29sZWFuLCBpZD86IHN0cmluZykge1xuICAgIGlmICghc3VycHJlc3NUb29sdGlwKVxuICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zaG93KGlkID8gaWQgOiB0aGlzLmlkLCBtZXNzYWdlLCB0aGlzLCB0eXBlKTtcbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuaGFzUGVuZGluZ0ZlZWRiYWNrID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVtb3ZlVG9vbHRpcCgpIHtcbiAgICB0aGlzLm1lc3NhZ2VTZXJ2aWNlLmhpZGUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0VG9vbHRpcEVycm9yVGV4dChtZXNzYWdlOiBNZXNzYWdlLCBzdXJwcmVzc1Rvb2x0aXA6IGJvb2xlYW4pIHtcbiAgICBpZiAobWVzc2FnZS5oaWdobGlnaHRlZEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuZGlzcGxheVRvb2x0aXAobWVzc2FnZS50ZXh0LCBNZXNzYWdlVHlwZS5FcnJvciwgc3VycHJlc3NUb29sdGlwLCBtZXNzYWdlLmhpZ2hsaWdodGVkRWxlbWVudC5pZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcChtZXNzYWdlLnRleHQsIE1lc3NhZ2VUeXBlLkVycm9yLCBzdXJwcmVzc1Rvb2x0aXApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0U3BlbGxpbmdNaXN0YWtlTWVzc2FnZShleHBlY3RlZFRleHQ6IHN0cmluZywgZW50ZXJlZFRleHQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgdmFyIG1lc3NhZ2UgPSB0aGlzLmxvY2FsaXphdGlvbi5nZXRUZXh0RnJvbUxhYmVsKExvY2FsaXphdGlvbkxhYmVscy50eXBvTWVzc2FnZSlcblxuICAgIHZhciBkaWZmID0ganNkaWZmLmRpZmZDaGFycyhleHBlY3RlZFRleHQsIGVudGVyZWRUZXh0LCB7IGlnbm9yZUNhc2U6ICF0aGlzLnNldHRpbmdzLmNhc2VTZW5zaXRpdmUgfSk7XG5cbiAgICB2YXIgbWlzdGFrZVNwYW4gPSB0aGlzLmpxdWVyeShcIjxzcGFuLz5cIiwgeyBcImNsYXNzXCI6IFwic3BlbGxpbmctbWlzdGFrZVwiIH0pO1xuICAgIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBkaWZmLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgdmFyIHBhcnQgPSBkaWZmW2luZGV4XTtcbiAgICAgIHZhciBzcGFuQ2xhc3MgPSAnJztcbiAgICAgIGlmIChwYXJ0LnJlbW92ZWQpIHtcbiAgICAgICAgaWYgKGluZGV4ID09PSBkaWZmLmxlbmd0aCAtIDEgfHwgIWRpZmZbaW5kZXggKyAxXS5hZGRlZCkge1xuICAgICAgICAgIHBhcnQudmFsdWUgPSBwYXJ0LnZhbHVlLnJlcGxhY2UoLy4vZywgXCJfXCIpO1xuICAgICAgICAgIHNwYW5DbGFzcyA9ICdtaXNzaW5nLWNoYXJhY3Rlcic7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChwYXJ0LmFkZGVkKSB7XG4gICAgICAgIHNwYW5DbGFzcyA9ICdtaXN0YWtlbi1jaGFyYWN0ZXInO1xuICAgICAgfVxuXG4gICAgICB2YXIgc3BhbiA9IHRoaXMuanF1ZXJ5KFwiPHNwYW4vPlwiLCB7IFwiY2xhc3NcIjogc3BhbkNsYXNzLCBcImh0bWxcIjogcGFydC52YWx1ZS5yZXBsYWNlKFwiIFwiLCBcIiZuYnNwO1wiKSB9KTtcbiAgICAgIG1pc3Rha2VTcGFuLmFwcGVuZChzcGFuKTtcbiAgICB9XG5cbiAgICBtZXNzYWdlID0gbWVzc2FnZS5yZXBsYWNlKFwiQG1pc3Rha2VcIiwgdGhpcy5qcXVlcnkoXCI8c3Bhbi8+XCIpLmFwcGVuZChtaXN0YWtlU3BhbikuaHRtbCgpKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGVudGVyZWQgdGV4dCBpcyB0aGUgY29ycmVjdCBhbnN3ZXIgb3Igb25lIG9mIHRoZSBcbiAgICogaW5jb3JyZWN0IG9uZXMgYW5kIGdpdmVzIHRoZSB1c2VyIGZlZWRiYWNrIGFjY29yZGluZ2x5LlxuICAgKi9cbiAgcHVibGljIGV2YWx1YXRlQXR0ZW1wdChzdXJwcmVzc1Rvb2x0aXBzOiBib29sZWFuLCBmb3JjZUNoZWNrPzogYm9vbGVhbikge1xuICAgIGlmICghdGhpcy5oYXNQZW5kaW5nRmVlZGJhY2sgJiYgdGhpcy5sYXN0Q2hlY2tlZFRleHQgPT09IHRoaXMuZW50ZXJlZFRleHQgJiYgIWZvcmNlQ2hlY2spXG4gICAgICByZXR1cm47XG5cbiAgICB0aGlzLmxhc3RDaGVja2VkVGV4dCA9IHRoaXMuZW50ZXJlZFRleHQudG9TdHJpbmcoKTtcbiAgICB0aGlzLmhhc1BlbmRpbmdGZWVkYmFjayA9IGZhbHNlO1xuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xuXG4gICAgdmFyIGV4YWN0Q29ycmVjdE1hdGNoZXMgPSB0aGlzLmNvcnJlY3RBbnN3ZXJzLm1hcChhbnN3ZXIgPT4gYW5zd2VyLmV2YWx1YXRlQXR0ZW1wdCh0aGlzLmVudGVyZWRUZXh0KSkuZmlsdGVyKGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jb3JyZWN0bmVzcyA9PT0gQ29ycmVjdG5lc3MuRXhhY3RNYXRjaCkuc29ydChldmFsdWF0aW9uID0+IGV2YWx1YXRpb24uY2hhcmFjdGVyRGlmZmVyZW5jZUNvdW50KTtcbiAgICB2YXIgY2xvc2VDb3JyZWN0TWF0Y2hlcyA9IHRoaXMuY29ycmVjdEFuc3dlcnMubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KHRoaXMuZW50ZXJlZFRleHQpKS5maWx0ZXIoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID09PSBDb3JyZWN0bmVzcy5DbG9zZU1hdGNoKS5zb3J0KGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpO1xuICAgIHZhciBleGFjdEluY29ycmVjdE1hdGNoZXMgPSB0aGlzLmluY29ycmVjdEFuc3dlcnMubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KHRoaXMuZW50ZXJlZFRleHQpKS5maWx0ZXIoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID09PSBDb3JyZWN0bmVzcy5FeGFjdE1hdGNoKS5zb3J0KGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpO1xuICAgIHZhciBjbG9zZUluY29ycmVjdE1hdGNoZXMgPSB0aGlzLmluY29ycmVjdEFuc3dlcnMubWFwKGFuc3dlciA9PiBhbnN3ZXIuZXZhbHVhdGVBdHRlbXB0KHRoaXMuZW50ZXJlZFRleHQpKS5maWx0ZXIoZXZhbHVhdGlvbiA9PiBldmFsdWF0aW9uLmNvcnJlY3RuZXNzID09PSBDb3JyZWN0bmVzcy5DbG9zZU1hdGNoKS5zb3J0KGV2YWx1YXRpb24gPT4gZXZhbHVhdGlvbi5jaGFyYWN0ZXJEaWZmZXJlbmNlQ291bnQpO1xuXG4gICAgaWYgKGV4YWN0Q29ycmVjdE1hdGNoZXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5Db3JyZWN0KTtcbiAgICAgIGlmICghdGhpcy5zZXR0aW5ncy5jYXNlU2Vuc2l0aXZlKSB7XG4gICAgICAgIHRoaXMuZW50ZXJlZFRleHQgPSBleGFjdENvcnJlY3RNYXRjaGVzWzBdLnVzZWRBbHRlcm5hdGl2ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXhhY3RJbmNvcnJlY3RNYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuRXJyb3IpO1xuICAgICAgdGhpcy5zaG93RXJyb3JUb29sdGlwKGV4YWN0SW5jb3JyZWN0TWF0Y2hlc1swXS51c2VkQW5zd2VyLCBzdXJwcmVzc1Rvb2x0aXBzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoY2xvc2VDb3JyZWN0TWF0Y2hlcy5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy53YXJuU3BlbGxpbmdFcnJvcnMpIHtcbiAgICAgICAgdGhpcy5kaXNwbGF5VG9vbHRpcCh0aGlzLmdldFNwZWxsaW5nTWlzdGFrZU1lc3NhZ2UoY2xvc2VDb3JyZWN0TWF0Y2hlc1swXS51c2VkQWx0ZXJuYXRpdmUsIHRoaXMuZW50ZXJlZFRleHQpLCBNZXNzYWdlVHlwZS5SZXRyeSwgc3VycHJlc3NUb29sdGlwcyk7XG4gICAgICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuUmV0cnkpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5zZXR0aW5ncy5hY2NlcHRTcGVsbGluZ0Vycm9ycykge1xuICAgICAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLkNvcnJlY3QpO1xuICAgICAgICB0aGlzLmVudGVyZWRUZXh0ID0gY2xvc2VDb3JyZWN0TWF0Y2hlc1swXS51c2VkQWx0ZXJuYXRpdmU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoY2xvc2VJbmNvcnJlY3RNYXRjaGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuc2V0QW5zd2VyU3RhdGUoTWVzc2FnZVR5cGUuRXJyb3IpO1xuICAgICAgdGhpcy5zaG93RXJyb3JUb29sdGlwKGNsb3NlSW5jb3JyZWN0TWF0Y2hlc1swXS51c2VkQW5zd2VyLCBzdXJwcmVzc1Rvb2x0aXBzKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgYWx3YXlzQXBwbHlpbmdBbnN3ZXJzID0gdGhpcy5pbmNvcnJlY3RBbnN3ZXJzLmZpbHRlcihhID0+IGEuYXBwbGllc0Fsd2F5cyk7XG4gICAgaWYgKGFsd2F5c0FwcGx5aW5nQW5zd2VycyAmJiBhbHdheXNBcHBseWluZ0Fuc3dlcnMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zaG93RXJyb3JUb29sdGlwKGFsd2F5c0FwcGx5aW5nQW5zd2Vyc1swXSwgc3VycHJlc3NUb29sdGlwcyk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRBbnN3ZXJTdGF0ZShNZXNzYWdlVHlwZS5FcnJvcik7XG4gIH1cblxuICBwdWJsaWMgb25UeXBlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnNldEFuc3dlclN0YXRlKE1lc3NhZ2VUeXBlLk5vbmUpO1xuICAgIHRoaXMubGFzdENoZWNrZWRUZXh0ID0gXCJcIjtcbiAgICB0aGlzLnJlbW92ZVRvb2x0aXAoKTtcbiAgfVxuXG4gIHB1YmxpYyBsb3N0Rm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWVzc2FnZVNlcnZpY2UuaXNBY3RpdmUodGhpcykpIHtcbiAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UuaGlkZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSBib29sZWFuIHByb3BlcnRpZXMgaXNDb3JyZWN0LCBpcyBFcnJvciBhbmQgaXNSZXRyeSBhY2NvcmRpbmcgdG8gdGhlcGFzc2VkICBtZXNzYWdlVHlwZS5cbiAgICogQHBhcmFtIG1lc3NhZ2VUeXBlIFxuICAgKi9cbiAgcHJpdmF0ZSBzZXRBbnN3ZXJTdGF0ZShtZXNzYWdlVHlwZTogTWVzc2FnZVR5cGUpIHtcbiAgICB0aGlzLmlzQ29ycmVjdCA9IGZhbHNlO1xuICAgIHRoaXMuaXNFcnJvciA9IGZhbHNlO1xuICAgIHRoaXMuaXNSZXRyeSA9IGZhbHNlO1xuICAgIHRoaXMuaXNTaG93aW5nU29sdXRpb24gPSBmYWxzZTtcblxuICAgIHN3aXRjaCAobWVzc2FnZVR5cGUpIHtcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuQ29ycmVjdDpcbiAgICAgICAgdGhpcy5pc0NvcnJlY3QgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTWVzc2FnZVR5cGUuRXJyb3I6XG4gICAgICAgIHRoaXMuaXNFcnJvciA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBNZXNzYWdlVHlwZS5SZXRyeTpcbiAgICAgICAgdGhpcy5pc1JldHJ5ID0gdHJ1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIE1lc3NhZ2VUeXBlLlNob3dTb2x1dGlvbjpcbiAgICAgICAgdGhpcy5pc1Nob3dpbmdTb2x1dGlvbiA9IHRydWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2hvd0Vycm9yVG9vbHRpcChhbnN3ZXI6IEFuc3dlciwgc3VycHJlc3NUb29sdGlwOiBib29sZWFuKSB7XG4gICAgaWYgKGFuc3dlci5tZXNzYWdlICYmIGFuc3dlci5tZXNzYWdlLnRleHQpIHtcbiAgICAgIHRoaXMuc2V0VG9vbHRpcEVycm9yVGV4dChhbnN3ZXIubWVzc2FnZSwgc3VycHJlc3NUb29sdGlwKTtcbiAgICB9XG4gICAgaWYgKCFzdXJwcmVzc1Rvb2x0aXApIHtcbiAgICAgIGFuc3dlci5hY3RpdmF0ZUhpZ2hsaWdodCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBEaXNwbGF5cyB0aGUgaGludCBpbiB0aGUgdG9vbHRpcC5cbiAgICovXG4gIHB1YmxpYyBzaG93SGludCgpIHtcbiAgICBpZiAodGhpcy5pc1Nob3dpbmdTb2x1dGlvbiB8fCB0aGlzLmlzQ29ycmVjdClcbiAgICAgIHJldHVybjtcblxuICAgIHRoaXMucmVtb3ZlVG9vbHRpcCgpO1xuICAgIGlmICh0aGlzLmhpbnQgJiYgdGhpcy5oaW50LnRleHQgIT09IFwiXCIpIHtcbiAgICAgIHRoaXMuZGlzcGxheVRvb2x0aXAodGhpcy5oaW50LnRleHQsIE1lc3NhZ2VUeXBlLlJldHJ5LCBmYWxzZSk7XG4gICAgICBpZiAodGhpcy5oaW50LmhpZ2hsaWdodGVkRWxlbWVudCkge1xuICAgICAgICB0aGlzLmhpbnQuaGlnaGxpZ2h0ZWRFbGVtZW50LmlzSGlnaGxpZ2h0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzZXJpYWxpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuZW50ZXJlZFRleHQ7XG4gIH1cblxuICBwdWJsaWMgZGVzZXJpYWxpemUoZGF0YTogYW55KSB7XG4gICAgdGhpcy5lbnRlcmVkVGV4dCA9IGRhdGE7XG4gIH1cbn0iLCJleHBvcnQgZW51bSBDbG96ZUVsZW1lbnRUeXBlIHtcbiAgQmxhbmssXG4gIEhpZ2hsaWdodFxufVxuXG5leHBvcnQgY2xhc3MgQ2xvemVFbGVtZW50IHtcbiAgcHVibGljIHR5cGU6IENsb3plRWxlbWVudFR5cGU7XG59IiwiaW1wb3J0IHsgSGlnaGxpZ2h0IH0gZnJvbSBcIi4vaGlnaGxpZ2h0XCI7XG5pbXBvcnQgeyBCbGFuayB9IGZyb20gXCIuL2JsYW5rXCI7XG5cbi8qKlxuICogUmVwcmVzZW50cyB0aGUgY2xvemUuIEluc3RhbnRpYXRlIHdpdGggc3RhdGljIGNyZWF0ZUNsb3plKCkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDbG96ZSB7XG4gIHB1YmxpYyBodG1sOiBzdHJpbmc7XG4gIHB1YmxpYyBoaWdobGlnaHRzOiBIaWdobGlnaHRbXTtcbiAgcHVibGljIGJsYW5rczogQmxhbmtbXTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7IH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGFsbCBibGFua3Mgd2VyZSBlbnRlcmVkIGNvcnJlY3RseS4gXG4gICAqIEByZXR1cm5zIGJvb2xlYW5cbiAgICovXG4gIHB1YmxpYyBnZXQgaXNTb2x2ZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYmxhbmtzLmV2ZXJ5KGIgPT4gYi5pc0NvcnJlY3QgPT09IHRydWUpO1xuICB9XG5cblxuICBwdWJsaWMgaGlkZUFsbEhpZ2hsaWdodHMoKTogdm9pZCB7XG4gICAgZm9yICh2YXIgaGlnaGxpZ2h0IG9mIHRoaXMuaGlnaGxpZ2h0cykge1xuICAgICAgaGlnaGxpZ2h0LmlzSGlnaGxpZ2h0ZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgdGhpcy5oaWRlQWxsSGlnaGxpZ2h0cygpO1xuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuYmxhbmtzKSB7XG4gICAgICBibGFuay5yZXNldCgpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBzaG93U29sdXRpb25zKCkge1xuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuYmxhbmtzKSB7XG4gICAgICBibGFuay5zaG93U29sdXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5oaWRlQWxsSGlnaGxpZ2h0cygpO1xuICB9XG5cbiAgcHVibGljIHNlcmlhbGl6ZSgpIDogc3RyaW5nW10ge1xuICAgIHZhciBjbG96ZSA9IFtdO1xuICAgIGZvciAodmFyIGJsYW5rIG9mIHRoaXMuYmxhbmtzKSB7XG4gICAgICBjbG96ZS5wdXNoKGJsYW5rLnNlcmlhbGl6ZSgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gY2xvemU7XG4gIH1cblxuICBwdWJsaWMgZGVzZXJpYWxpemUoZGF0YTogYW55KSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoaW5kZXggPj0gdGhpcy5ibGFua3MubGVuZ3RoKVxuICAgICAgICByZXR1cm47XG4gICAgICB2YXIgYmxhbmsgPSB0aGlzLmJsYW5rc1tpbmRleF07XG4gICAgICBibGFuay5kZXNlcmlhbGl6ZShkYXRhW2luZGV4XSk7XG4gICAgfVxuICB9XG59IiwiZXhwb3J0IGVudW0gTWVzc2FnZVR5cGUge1xuICBFcnJvcixcbiAgQ29ycmVjdCxcbiAgUmV0cnksXG4gIFNob3dTb2x1dGlvbixcbiAgTm9uZVxufVxuXG5leHBvcnQgZW51bSBDbG96ZVR5cGUge1xuICBUeXBlLFxuICBTZWxlY3Rcbn1cblxuZXhwb3J0IGVudW0gU2VsZWN0QWx0ZXJuYXRpdmVzIHtcbiAgQWx0ZXJuYXRpdmVzLFxuICBBbGxcbn0iLCJpbXBvcnQgeyBDbG96ZUVsZW1lbnQsIENsb3plRWxlbWVudFR5cGUgfSBmcm9tICcuL2Nsb3plLWVsZW1lbnQnO1xuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBoaWdobGlnaHQgaW4gdGhlIGNsb3plLlxuICovXG5leHBvcnQgY2xhc3MgSGlnaGxpZ2h0IGV4dGVuZHMgQ2xvemVFbGVtZW50IHtcblx0dGV4dDogc3RyaW5nO1xuXHRpc0hpZ2hsaWdodGVkOiBib29sZWFuO1xuXHRpZDogc3RyaW5nO1xuXG5cdGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgaWQ6IHN0cmluZykge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy50eXBlID0gQ2xvemVFbGVtZW50VHlwZS5IaWdobGlnaHQ7XG5cdFx0dGhpcy50ZXh0ID0gdGV4dDtcblx0XHR0aGlzLmlkID0gaWQ7XG5cdFx0dGhpcy5pc0hpZ2hsaWdodGVkID0gZmFsc2U7XG5cdH1cbn0iLCJpbXBvcnQgeyBIaWdobGlnaHQgfSBmcm9tIFwiLi9oaWdobGlnaHRcIjtcblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgbWVzc2FnZSB0aGF0IHRoZSBjb250ZW50IGF1dGhvciBoYXMgc3BlY2lmaWVkIHRvIGJlIGEgcmVhY3Rpb25cbiAqIHRvIGFuIHVzZXIncyBhbnN3ZXIuIFxuICovXG5leHBvcnQgY2xhc3MgTWVzc2FnZSB7XG4gIGhpZ2hsaWdodGVkRWxlbWVudDogSGlnaGxpZ2h0O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB0ZXh0OiBzdHJpbmcsIHNob3dIaWdobGlnaHQ6IGJvb2xlYW4sIHByaXZhdGUgcmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgaWYoIXNob3dIaWdobGlnaHQpXG4gICAgICB0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gIH1cblxuICBsaW5rSGlnaGxpZ2h0ID0gKGhpZ2hsaWdodHNCZWZvcmU6IEhpZ2hsaWdodFtdLCBoaWdobGlnaHRzQWZ0ZXI6IEhpZ2hsaWdodFtdKSA9PiB7XG4gICAgaWYgKCF0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24pXG4gICAgICByZXR1cm47XG5cbiAgICAgIGlmICh0aGlzLnJlbGF0aXZlSGlnaGxpZ2h0UG9zaXRpb24gPCAwICYmICgwIC0gdGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMSkgPCBoaWdobGlnaHRzQmVmb3JlLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmhpZ2hsaWdodGVkRWxlbWVudCA9IGhpZ2hsaWdodHNCZWZvcmVbMCAtIHRoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiAtIDFdO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAodGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uID4gMCAmJiAodGhpcy5yZWxhdGl2ZUhpZ2hsaWdodFBvc2l0aW9uIC0gMSA8IGhpZ2hsaWdodHNBZnRlci5sZW5ndGgpKSB7XG4gICAgICAgIHRoaXMuaGlnaGxpZ2h0ZWRFbGVtZW50ID0gaGlnaGxpZ2h0c0FmdGVyW3RoaXMucmVsYXRpdmVIaWdobGlnaHRQb3NpdGlvbiAtIDFdO1xuICAgICAgfVxuICB9XG59IiwiLyoqXG4gKiBBIHNuaXBwZXQgaXMgYSB0ZXh0IGJsb2NrIHRoYXQgaXMgcHV0IGludG8gcGxhY2VkIG1hcmtlZCBpbiBmZWVkYmFjayB0ZXh0cyBvciBoaW50cy5cbiAqL1xuZXhwb3J0IGNsYXNzIFNuaXBwZXQge1xuICAvKipcbiAgICogQ29uc3RydWN0cyB0aGUgc25pcHBldC5cbiAgICogQHBhcmFtIG5hbWUgVGhlIG5hbWUgb2YgdGhlIHNuaXBwZXQgdGhhdCBpcyB1c2VkIHdoZW4gaXQgaXMgcmVmZXJlbmNlZCBpbiBhIGZlZWRiYWNrdGV4dCAod2l0aG91dCB0aGUgc25pcHBldCBtYXJrZXIgQClcbiAgICogQHBhcmFtIHRleHQgVGhlIHNuaXBwZXQgaXRzZWxmIChodG1sKVxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZywgcHVibGljIHRleHQ6IHN0cmluZykge1xuICAgIFxuICB9XG59IiwiZXhwb3J0IGNsYXNzIFhBUElBY3Rpdml0eURlZmluaXRpb24ge1xuICBuYW1lOiBhbnk7XG4gIGRlc2NyaXB0aW9uOiBhbnk7XG4gIHR5cGU6IHN0cmluZztcbiAgaW50ZXJhY3Rpb25UeXBlOiBcInRydWUtZmFsc2VcIiB8IFwiY2hvaWNlXCIgfCBcImZpbGwtaW5cIiB8IFwibG9uZy1maWxsLWluXCIgfCBcIm1hdGNoaW5nXCIgfCBcInBlcmZvcm1hbmNlXCIgfCBcInNlcXVlbmNpbmdcIiB8IFwibGlrZXJ0XCIgfCBcIm51bWVyaWNcIiB8IFwib3RoZXJcIjtcbiAgY29ycmVjdFJlc3BvbnNlc1BhdHRlcm4/OiBzdHJpbmdbXTtcbiAgZXh0ZW5zaW9uczogYW55O1xufVxuIiwiaW1wb3J0IHsgQmxhbmtMb2FkZXIgfSBmcm9tICcuLi9jb250ZW50LWxvYWRlcnMvYmxhbmstbG9hZGVyJztcbmltcG9ydCB7IEJsYW5rIH0gZnJvbSBcIi4uL21vZGVscy9ibGFua1wiO1xuaW1wb3J0IHsgU25pcHBldCB9IGZyb20gXCIuLi9tb2RlbHMvc25pcHBldFwiO1xuaW1wb3J0IHsgSVNldHRpbmdzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3NldHRpbmdzXCI7XG5pbXBvcnQgeyBINVBMb2NhbGl6YXRpb24gfSBmcm9tIFwiLi9sb2NhbGl6YXRpb25cIjtcbmltcG9ydCB7IFVucndhcHBlciB9IGZyb20gJy4uL2hlbHBlcnMvdW53cmFwcGVyJztcblxuZXhwb3J0IGludGVyZmFjZSBJRGF0YVJlcG9zaXRvcnkge1xuICBnZXRCbGFua3MoKTogQmxhbmtbXTtcbiAgZ2V0Q2xvemVUZXh0KCk6IHN0cmluZztcbiAgZ2V0RmVlZGJhY2tUZXh0KCk6IHN0cmluZztcbiAgZ2V0TWVkaWEoKTogYW55O1xuICBnZXRUYXNrRGVzY3JpcHRpb24oKTogc3RyaW5nO1xuICBnZXRTbmlwcGV0cygpOiBTbmlwcGV0W107XG59XG5cbi8qKlxuICogV3JhcHMgYXJvdW5kIHRoZSBoNXAgY29uZmlnIG9iamVjdCBhbmQgcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBjb250ZW50LlxuICovXG5leHBvcnQgY2xhc3MgSDVQRGF0YVJlcG9zaXRvcnkgaW1wbGVtZW50cyBJRGF0YVJlcG9zaXRvcnkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGg1cENvbmZpZ0RhdGE6IGFueSwgcHJpdmF0ZSBzZXR0aW5nczogSVNldHRpbmdzLFxuICAgIHByaXZhdGUgbG9jYWxpemF0aW9uOiBINVBMb2NhbGl6YXRpb24sIHByaXZhdGUganF1ZXJ5OiBKUXVlcnlTdGF0aWMsIFxuICAgIHByaXZhdGUgdW53cmFwcGVyOiBVbnJ3YXBwZXIpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGJsYW5rIHRleHQgb2YgdGhlIGNsb3plIChhcyBIVE1MIG1hcmt1cCkuXG4gICAqL1xuICBnZXRDbG96ZVRleHQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzVGV4dDtcbiAgfVxuXG4gIC8vIFRPRE86IHJlbW92ZSBvciBpbXBsZW1lbnRcbiAgZ2V0RmVlZGJhY2tUZXh0KCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBnZXRNZWRpYSgpOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ0RhdGEubWVkaWEudHlwZTtcbiAgfVxuXG4gIGdldFRhc2tEZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ0RhdGEuY29udGVudC50YXNrO1xuICB9XG5cbiAgZ2V0QmxhbmtzKCk6IEJsYW5rW10ge1xuICAgIHZhciBibGFua3M6IEJsYW5rW10gPSBuZXcgQXJyYXkoKTtcblxuICAgIGlmICghdGhpcy5oNXBDb25maWdEYXRhLmNvbnRlbnQuYmxhbmtzTGlzdClcbiAgICAgIHJldHVybiBibGFua3M7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuaDVwQ29uZmlnRGF0YS5jb250ZW50LmJsYW5rc0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBoNXBCbGFuayA9IHRoaXMuaDVwQ29uZmlnRGF0YS5jb250ZW50LmJsYW5rc0xpc3RbaV07XG5cbiAgICAgIHZhciBjb3JyZWN0VGV4dCA9IGg1cEJsYW5rLmNvcnJlY3RBbnN3ZXJUZXh0O1xuICAgICAgaWYgKGNvcnJlY3RUZXh0ID09PSBcIlwiIHx8IGNvcnJlY3RUZXh0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICB2YXIgYmxhbmsgPSBCbGFua0xvYWRlci5pbnN0YW5jZS5jcmVhdGVCbGFuayhcImNsb3plXCIgKyBpLCBjb3JyZWN0VGV4dCxcbiAgICAgICAgaDVwQmxhbmsuaGludCwgaDVwQmxhbmsuaW5jb3JyZWN0QW5zd2Vyc0xpc3QpO1xuXG4gICAgICBibGFuay5maW5pc2hJbml0aWFsaXphdGlvbigpO1xuICAgICAgYmxhbmtzLnB1c2goYmxhbmspO1xuICAgIH1cblxuICAgIHJldHVybiBibGFua3M7XG4gIH1cblxuICBnZXRTbmlwcGV0cygpOiBTbmlwcGV0W10ge1xuICAgIHZhciBzbmlwcGV0czogU25pcHBldFtdID0gbmV3IEFycmF5KCk7XG5cbiAgICBpZiAoIXRoaXMuaDVwQ29uZmlnRGF0YS5zbmlwcGV0cylcbiAgICAgIHJldHVybiBzbmlwcGV0cztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5oNXBDb25maWdEYXRhLnNuaXBwZXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgcmF3X3NuaXBwZXQgPSB0aGlzLmg1cENvbmZpZ0RhdGEuc25pcHBldHNbaV07XG4gICAgICB2YXIgc25pcHBldCA9IG5ldyBTbmlwcGV0KHJhd19zbmlwcGV0LnNuaXBwZXROYW1lLCB0aGlzLnVud3JhcHBlci51bndyYXAocmF3X3NuaXBwZXQuc25pcHBldFRleHQpKTtcbiAgICAgIHNuaXBwZXRzLnB1c2goc25pcHBldCk7XG4gICAgfVxuICAgIHJldHVybiBzbmlwcGV0cztcbiAgfVxufSIsImV4cG9ydCBlbnVtIExvY2FsaXphdGlvbkxhYmVscyB7XG4gIHNob3dTb2x1dGlvbkJ1dHRvbiA9IFwic2hvd1NvbHV0aW9uc1wiLFxuICByZXRyeUJ1dHRvbiA9IFwidHJ5QWdhaW5cIixcbiAgY2hlY2tBbGxCdXR0b24gPSBcImNoZWNrQW5zd2VyXCIsXG4gIHN1Ym1pdEFsbEJ1dHRvbiA9IFwic3VibWl0QW5zd2VyXCIsXG4gIG5vdEZpbGxlZE91dFdhcm5pbmcgPSBcIm5vdEZpbGxlZE91dFwiLFxuICB0aXBCdXR0b24gPVwidGlwTGFiZWxcIixcbiAgdHlwb01lc3NhZ2UgPSBcInNwZWxsaW5nTWlzdGFrZVdhcm5pbmdcIixcbiAgc2NvcmVCYXJMYWJlbCA9IFwic2NvcmVCYXJMYWJlbFwiLFxuICBhMTF5Q2hlY2sgPSBcImExMXlDaGVja1wiLFxuICBhMTF5U2hvd1NvbHV0aW9uID0gXCJhMTF5U2hvd1NvbHV0aW9uXCIsXG4gIGExMXlSZXRyeSA9IFwiYTExeVJldHJ5XCIsXG4gIGExMXlDaGVja2luZ01vZGVIZWFkZXIgPSBcImExMXlDaGVja2luZ01vZGVIZWFkZXJcIlxufVxuXG5leHBvcnQgZW51bSBMb2NhbGl6YXRpb25TdHJ1Y3R1cmVzIHtcbiAgY29uZmlybUNoZWNrID0gXCJjb25maXJtQ2hlY2tcIixcbiAgY29uZmlybVJldHJ5ID0gXCJjb25maXJtUmV0cnlcIixcbiAgb3ZlcmFsbEZlZWRiYWNrID0gXCJvdmVyYWxsRmVlZGJhY2tcIlxufVxuXG4vKipcbiAqIFByb3ZpZGVzIGxvY2FsaXphdGlvbiBzZXJ2aWNlcy5cbiAqL1xuXG5leHBvcnQgY2xhc3MgSDVQTG9jYWxpemF0aW9uIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBoNXBDb25maWd1cmF0aW9uOiBhbnkpIHtcblxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxvY2FsaXplZCBzdHJpbmcgdGhhdCBpcyByZXByZXNlbnRlZCBieSB0aGUgaWRlbnRpZmllci5cbiAgICogQHBhcmFtICB7c3RyaW5nfSBsb2NhbGl6YWJsZVN0cmluZ0lkZW50aWZpZXJcbiAgICogQHJldHVybnMgc3RyaW5nXG4gICAqL1xuICBwcml2YXRlIGdldFRleHQobG9jYWxpemFibGVTdHJpbmdJZGVudGlmaWVyOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmg1cENvbmZpZ3VyYXRpb25bbG9jYWxpemFibGVTdHJpbmdJZGVudGlmaWVyXTtcbiAgfVxuXG4gIHByaXZhdGUgbGFiZWxUb1N0cmluZyhsYWJlbDogTG9jYWxpemF0aW9uTGFiZWxzKSB7XG4gICAgcmV0dXJuIGxhYmVsLnRvU3RyaW5nKCk7XG4gIH1cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGxvY2FsaXplZCBzdHJpbmcgZm9yIHRoZSBsYWJlbC5cbiAgICogQHBhcmFtICB7TG9jYWxpemF0aW9uTGFiZWxzfSBsYWJlbFxuICAgKiBAcmV0dXJucyBzdHJpbmdcbiAgICovXG4gIGdldFRleHRGcm9tTGFiZWwobGFiZWw6IExvY2FsaXphdGlvbkxhYmVscyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VGV4dCh0aGlzLmxhYmVsVG9TdHJpbmcobGFiZWwpKTtcbiAgfVxuXG4gIGdldE9iamVjdEZvclN0cnVjdHVyZShzdHJ1Y3R1cmU6IExvY2FsaXphdGlvblN0cnVjdHVyZXMpIDogYW55IHtcbiAgICByZXR1cm4gdGhpcy5oNXBDb25maWd1cmF0aW9uW3N0cnVjdHVyZS50b1N0cmluZygpXTtcbiAgfVxufSIsImltcG9ydCB7IEJsYW5rIH0gZnJvbSAnLi4vbW9kZWxzL2JsYW5rJztcbmltcG9ydCB7IE1lc3NhZ2VUeXBlIH0gZnJvbSAnLi4vbW9kZWxzL2VudW1zJztcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VTZXJ2aWNlIHtcbiAgcHJpdmF0ZSBzcGVlY2hCdWJibGU6IGFueTtcbiAgcHJpdmF0ZSBhc3NvY2lhdGVkQmxhbms6IEJsYW5rO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgalF1ZXJ5OiBKUXVlcnlTdGF0aWMpIHtcblxuICB9XG5cbiAgcHVibGljIHNob3coZWxlbWVudElkOiBzdHJpbmcsIG1lc3NhZ2U6IHN0cmluZywgYmxhbms6IEJsYW5rLCB0eXBlPzogTWVzc2FnZVR5cGUpIHtcbiAgICBpZiAoIXR5cGUpXG4gICAgICB0eXBlID0gTWVzc2FnZVR5cGUuTm9uZTtcblxuICAgIHZhciBlbGVtZW50cyA9IHRoaXMualF1ZXJ5KFwiI1wiICsgZWxlbWVudElkKTtcblxuICAgIGlmIChlbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLnNwZWVjaEJ1YmJsZSA9IG5ldyBINVAuSm91YmVsU3BlZWNoQnViYmxlKGVsZW1lbnRzLCBtZXNzYWdlKTtcbiAgICAgIHRoaXMuYXNzb2NpYXRlZEJsYW5rID0gYmxhbms7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGhpZGUoKSB7XG4gICAgaWYgKHRoaXMuc3BlZWNoQnViYmxlKSB7XG4gICAgICB0cnkge1xuICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zcGVlY2hCdWJibGUgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5hc3NvY2lhdGVkQmxhbmsgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgaXNBY3RpdmUoYmxhbms6IEJsYW5rKSB7XG4gICAgcmV0dXJuIHRoaXMuYXNzb2NpYXRlZEJsYW5rID09PSBibGFuaztcbiAgfVxufSIsImltcG9ydCB7IENsb3plVHlwZSwgU2VsZWN0QWx0ZXJuYXRpdmVzIH0gZnJvbSBcIi4uL21vZGVscy9lbnVtc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElTZXR0aW5ncyB7XG4gIGNsb3plVHlwZTogQ2xvemVUeXBlO1xuICBzZWxlY3RBbHRlcm5hdGl2ZXM6IFNlbGVjdEFsdGVybmF0aXZlcztcbiAgc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbjogbnVtYmVyO1xuICBlbmFibGVSZXRyeTogYm9vbGVhbjtcbiAgZW5hYmxlU29sdXRpb25zQnV0dG9uOiBib29sZWFuO1xuICBlbmFibGVDaGVja0J1dHRvbjogYm9vbGVhbjtcbiAgYXV0b0NoZWNrOiBib29sZWFuO1xuICBjYXNlU2Vuc2l0aXZlOiBib29sZWFuO1xuICB3YXJuU3BlbGxpbmdFcnJvcnM6IGJvb2xlYW47XG4gIGFjY2VwdFNwZWxsaW5nRXJyb3JzOiBib29sZWFuO1xuICBzaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dDogYm9vbGVhbjtcbiAgY29uZmlybUNoZWNrRGlhbG9nOiBib29sZWFuO1xuICBjb25maXJtUmV0cnlEaWFsb2c6IGJvb2xlYW47XG4gIGRpc2FibGVJbWFnZVpvb21pbmc6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjbGFzcyBINVBTZXR0aW5ncyBpbXBsZW1lbnRzIElTZXR0aW5ncyB7XG4gIHB1YmxpYyBjbG96ZVR5cGU6IENsb3plVHlwZSA9IENsb3plVHlwZS5UeXBlO1xuICBwdWJsaWMgc2VsZWN0QWx0ZXJuYXRpdmVzOiBTZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWx0ZXJuYXRpdmVzO1xuICBwdWJsaWMgc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbjogbnVtYmVyID0gNTtcbiAgcHVibGljIGVuYWJsZVJldHJ5OiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGVuYWJsZVNvbHV0aW9uc0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBlbmFibGVDaGVja0J1dHRvbjogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBhdXRvQ2hlY2s6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGNhc2VTZW5zaXRpdmU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHdhcm5TcGVsbGluZ0Vycm9yczogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBhY2NlcHRTcGVsbGluZ0Vycm9yczogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2hvd1NvbHV0aW9uc1JlcXVpcmVzSW5wdXQ6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgY29uZmlybUNoZWNrRGlhbG9nOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBjb25maXJtUmV0cnlEaWFsb2c6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGRpc2FibGVJbWFnZVpvb21pbmc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihoNXBDb25maWdEYXRhOiBhbnkpIHtcbiAgICBpZiAoaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIubW9kZSA9PT0gJ3NlbGVjdGlvbicpIHtcbiAgICAgIHRoaXMuY2xvemVUeXBlID0gQ2xvemVUeXBlLlNlbGVjdDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLmNsb3plVHlwZSA9IENsb3plVHlwZS5UeXBlO1xuICAgIH1cblxuICAgIGlmIChoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zZWxlY3RBbHRlcm5hdGl2ZXMgPT09ICdhbGwnKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlcyA9IFNlbGVjdEFsdGVybmF0aXZlcy5BbGw7XG4gICAgfSBlbHNlIGlmIChoNXBDb25maWdEYXRhLmJlaGF2aW91ci5zZWxlY3RBbHRlcm5hdGl2ZXMgPT09ICdhbHRlcm5hdGl2ZXMnKSB7XG4gICAgICB0aGlzLnNlbGVjdEFsdGVybmF0aXZlcyA9IFNlbGVjdEFsdGVybmF0aXZlcy5BbHRlcm5hdGl2ZXM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZXMgPSBTZWxlY3RBbHRlcm5hdGl2ZXMuQWxsO1xuICAgIH1cblxuICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbiA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb247XG4gICAgdGhpcy5lbmFibGVSZXRyeSA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmVuYWJsZVJldHJ5O1xuICAgIHRoaXMuZW5hYmxlU29sdXRpb25zQnV0dG9uID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuZW5hYmxlU29sdXRpb25zQnV0dG9uO1xuICAgIHRoaXMuZW5hYmxlQ2hlY2tCdXR0b24gPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5lbmFibGVDaGVja0J1dHRvbjtcbiAgICB0aGlzLmF1dG9DaGVjayA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLmF1dG9DaGVjaztcbiAgICB0aGlzLmNhc2VTZW5zaXRpdmUgPSBoNXBDb25maWdEYXRhLmJlaGF2aW91ci5jYXNlU2Vuc2l0aXZlO1xuICAgIHRoaXMud2FyblNwZWxsaW5nRXJyb3JzID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuc3BlbGxpbmdFcnJvckJlaGF2aW91ciA9PT0gXCJ3YXJuXCI7XG4gICAgdGhpcy5hY2NlcHRTcGVsbGluZ0Vycm9ycyA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNwZWxsaW5nRXJyb3JCZWhhdmlvdXIgPT09IFwiYWNjZXB0XCI7XG4gICAgdGhpcy5zaG93U29sdXRpb25zUmVxdWlyZXNJbnB1dCA9IGg1cENvbmZpZ0RhdGEuYmVoYXZpb3VyLnNob3dTb2x1dGlvbnNSZXF1aXJlc0lucHV0O1xuICAgIHRoaXMuY29uZmlybUNoZWNrRGlhbG9nID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuY29uZmlybUNoZWNrRGlhbG9nO1xuICAgIHRoaXMuY29uZmlybVJldHJ5RGlhbG9nID0gaDVwQ29uZmlnRGF0YS5iZWhhdmlvdXIuY29uZmlybVJldHJ5RGlhbG9nO1xuICAgIHRoaXMuZGlzYWJsZUltYWdlWm9vbWluZyA9IGg1cENvbmZpZ0RhdGEubWVkaWEuZGlzYWJsZUltYWdlWm9vbWluZztcblxuICAgIHRoaXMuZW5mb3JjZUxvZ2ljKCk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBtZXRob2Qgc2V0cyBzZW5zaWJsZSBkZWZhdWx0IHZhbHVlcyBmb3Igc2V0dGluZ3MgaGlkZGVuIHdpdGggc2hvd1doZW5cbiAgICovXG4gIHByaXZhdGUgZW5mb3JjZUxvZ2ljKCkge1xuICAgIGlmICh0aGlzLmNsb3plVHlwZSA9PT0gQ2xvemVUeXBlLlR5cGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVzID0gU2VsZWN0QWx0ZXJuYXRpdmVzLkFsbDtcbiAgICAgIHRoaXMuc2VsZWN0QWx0ZXJuYXRpdmVSZXN0cmljdGlvbiA9IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLnNlbGVjdEFsdGVybmF0aXZlUmVzdHJpY3Rpb24gPT09IFNlbGVjdEFsdGVybmF0aXZlcy5BbHRlcm5hdGl2ZXMpIHtcbiAgICAgICAgdGhpcy5zZWxlY3RBbHRlcm5hdGl2ZVJlc3RyaWN0aW9uID0gMDtcbiAgICAgIH1cbiAgICAgIHRoaXMud2FyblNwZWxsaW5nRXJyb3JzID0gZmFsc2U7XG4gICAgICB0aGlzLmFjY2VwdFNwZWxsaW5nRXJyb3JzID0gZmFsc2U7XG4gICAgICB0aGlzLmNhc2VTZW5zaXRpdmUgPSBmYWxzZTtcbiAgICB9XG4gIH1cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9zdHlsZXMvc3R5bGUuY3NzXCI7XG5pbXBvcnQgQWR2YW5jZWRCbGFua3MgZnJvbSAnLi4vc2NyaXB0cy9hcHAnO1xuXG4vLyBMb2FkIGxpYnJhcnlcbkg1UCA9IEg1UCB8fCB7fTtcbkg1UC5BZHZhbmNlZEJsYW5rcyA9IEFkdmFuY2VkQmxhbmtzOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==