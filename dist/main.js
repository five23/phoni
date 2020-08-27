/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/base.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/base.scss ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"body {\\n  padding: 20px;\\n}\\n\\npre, code {\\n  width: auto !important;\\n}\\n\\nfooter {\\n  padding: 20px 10px 10px 20px;\\n}\\n\\n.cc-license-icons span {\\n  padding: 8px;\\n}\\n\\n.contact {\\n  float: right;\\n  bottom: 0;\\n  padding: 5px;\\n  margin-top: 300px;\\n}\\n\\n.span--1 {\\n  grid-column: span 1;\\n}\\n\\n.span--2 {\\n  grid-column: span 2;\\n}\\n\\n.span--3 {\\n  grid-column: span 3;\\n}\\n\\n.span--4 {\\n  grid-column: span 4;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/scss/base.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/typography.scss":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/typography.scss ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"@media (max-width: 299px) {\\n  body {\\n    font-size: 12px;\\n    line-height: 19.416px;\\n  }\\n\\n  h1 {\\n    font-size: 50.829612384px;\\n    line-height: 58.248px;\\n    margin-top: 38.832px;\\n    margin-bottom: 9.708px;\\n  }\\n\\n  h2 {\\n    font-size: 31.415088px;\\n    line-height: 38.832px;\\n    margin-top: 19.416px;\\n    margin-bottom: 19.416px;\\n  }\\n\\n  h3 {\\n    font-size: 19.416px;\\n    line-height: 19.416px;\\n    margin-top: 19.416px;\\n    margin-bottom: 19.416px;\\n  }\\n\\n  h4 {\\n    font-size: 12px;\\n    line-height: 19.416px;\\n    margin-top: 19.416px;\\n    margin-bottom: 19.416px;\\n  }\\n\\n  p,\\nul,\\nol,\\npre,\\ntable,\\nblockquote {\\n    margin-top: 19.416px;\\n    margin-bottom: 19.416px;\\n  }\\n}\\n@media (min-width: 300px) {\\n  body {\\n    font-size: 14px;\\n    line-height: 22.652px;\\n  }\\n\\n  h1 {\\n    font-size: 59.301214448px;\\n    line-height: 67.956px;\\n    margin-top: 45.304px;\\n    margin-bottom: 11.326px;\\n  }\\n\\n  h2 {\\n    font-size: 36.650936px;\\n    line-height: 45.304px;\\n    margin-top: 22.652px;\\n    margin-bottom: 22.652px;\\n  }\\n\\n  h3 {\\n    font-size: 22.652px;\\n    line-height: 22.652px;\\n    margin-top: 22.652px;\\n    margin-bottom: 22.652px;\\n  }\\n\\n  h4 {\\n    font-size: 14px;\\n    line-height: 22.652px;\\n    margin-top: 22.652px;\\n    margin-bottom: 22.652px;\\n  }\\n\\n  p,\\nul,\\nol,\\npre,\\ntable,\\nblockquote {\\n    margin-top: 22.652px;\\n    margin-bottom: 22.652px;\\n  }\\n}\\n@media (min-width: 600px) {\\n  body {\\n    font-size: 15px;\\n    line-height: 24.27px;\\n  }\\n\\n  h1 {\\n    font-size: 63.53701548px;\\n    line-height: 72.81px;\\n    margin-top: 48.54px;\\n    margin-bottom: 12.135px;\\n  }\\n\\n  h2 {\\n    font-size: 39.26886px;\\n    line-height: 48.54px;\\n    margin-top: 24.27px;\\n    margin-bottom: 24.27px;\\n  }\\n\\n  h3 {\\n    font-size: 24.27px;\\n    line-height: 24.27px;\\n    margin-top: 24.27px;\\n    margin-bottom: 24.27px;\\n  }\\n\\n  h4 {\\n    font-size: 15px;\\n    line-height: 24.27px;\\n    margin-top: 24.27px;\\n    margin-bottom: 24.27px;\\n  }\\n\\n  p,\\nul,\\nol,\\npre,\\ntable,\\nblockquote {\\n    margin-top: 24.27px;\\n    margin-bottom: 24.27px;\\n  }\\n}\\n@media (min-width: 800px) {\\n  body {\\n    font-size: 16px;\\n    line-height: 25.888px;\\n  }\\n\\n  h1 {\\n    font-size: 67.772816512px;\\n    line-height: 77.664px;\\n    margin-top: 51.776px;\\n    margin-bottom: 12.944px;\\n  }\\n\\n  h2 {\\n    font-size: 41.886784px;\\n    line-height: 51.776px;\\n    margin-top: 25.888px;\\n    margin-bottom: 25.888px;\\n  }\\n\\n  h3 {\\n    font-size: 25.888px;\\n    line-height: 25.888px;\\n    margin-top: 25.888px;\\n    margin-bottom: 25.888px;\\n  }\\n\\n  h4 {\\n    font-size: 16px;\\n    line-height: 25.888px;\\n    margin-top: 25.888px;\\n    margin-bottom: 25.888px;\\n  }\\n\\n  p,\\nul,\\nol,\\npre,\\ntable,\\nblockquote {\\n    margin-top: 25.888px;\\n    margin-bottom: 25.888px;\\n  }\\n}\\n@media (min-width: 1000px) {\\n  body {\\n    font-size: 19px;\\n    line-height: 30.742px;\\n  }\\n\\n  h1 {\\n    font-size: 80.480219608px;\\n    line-height: 92.226px;\\n    margin-top: 61.484px;\\n    margin-bottom: 15.371px;\\n  }\\n\\n  h2 {\\n    font-size: 49.740556px;\\n    line-height: 61.484px;\\n    margin-top: 30.742px;\\n    margin-bottom: 30.742px;\\n  }\\n\\n  h3 {\\n    font-size: 30.742px;\\n    line-height: 30.742px;\\n    margin-top: 30.742px;\\n    margin-bottom: 30.742px;\\n  }\\n\\n  h4 {\\n    font-size: 19px;\\n    line-height: 30.742px;\\n    margin-top: 30.742px;\\n    margin-bottom: 30.742px;\\n  }\\n\\n  p,\\nul,\\nol,\\npre,\\ntable,\\nblockquote {\\n    margin-top: 30.742px;\\n    margin-bottom: 30.742px;\\n  }\\n}\\n@media (min-width: 1200px) {\\n  body {\\n    font-size: 21px;\\n    line-height: 33.978px;\\n  }\\n\\n  h1 {\\n    font-size: 88.951821672px;\\n    line-height: 101.934px;\\n    margin-top: 67.956px;\\n    margin-bottom: 16.989px;\\n  }\\n\\n  h2 {\\n    font-size: 54.976404px;\\n    line-height: 67.956px;\\n    margin-top: 33.978px;\\n    margin-bottom: 33.978px;\\n  }\\n\\n  h3 {\\n    font-size: 33.978px;\\n    line-height: 33.978px;\\n    margin-top: 33.978px;\\n    margin-bottom: 33.978px;\\n  }\\n\\n  h4 {\\n    font-size: 21px;\\n    line-height: 33.978px;\\n    margin-top: 33.978px;\\n    margin-bottom: 33.978px;\\n  }\\n\\n  p,\\nul,\\nol,\\npre,\\ntable,\\nblockquote {\\n    margin-top: 33.978px;\\n    margin-bottom: 33.978px;\\n  }\\n}\\n@media (min-width: 1400px) {\\n  body {\\n    font-size: 23px;\\n    line-height: 37.214px;\\n  }\\n\\n  h1 {\\n    font-size: 97.423423736px;\\n    line-height: 111.642px;\\n    margin-top: 74.428px;\\n    margin-bottom: 18.607px;\\n  }\\n\\n  h2 {\\n    font-size: 60.212252px;\\n    line-height: 74.428px;\\n    margin-top: 37.214px;\\n    margin-bottom: 37.214px;\\n  }\\n\\n  h3 {\\n    font-size: 37.214px;\\n    line-height: 37.214px;\\n    margin-top: 37.214px;\\n    margin-bottom: 37.214px;\\n  }\\n\\n  h4 {\\n    font-size: 23px;\\n    line-height: 37.214px;\\n    margin-top: 37.214px;\\n    margin-bottom: 37.214px;\\n  }\\n\\n  p,\\nul,\\nol,\\npre,\\ntable,\\nblockquote {\\n    margin-top: 37.214px;\\n    margin-bottom: 37.214px;\\n  }\\n}\\n@media (min-width: 1600px) {\\n  body {\\n    font-size: 25px;\\n    line-height: 40.45px;\\n  }\\n\\n  h1 {\\n    font-size: 105.8950258px;\\n    line-height: 121.35px;\\n    margin-top: 80.9px;\\n    margin-bottom: 20.225px;\\n  }\\n\\n  h2 {\\n    font-size: 65.4481px;\\n    line-height: 80.9px;\\n    margin-top: 40.45px;\\n    margin-bottom: 40.45px;\\n  }\\n\\n  h3 {\\n    font-size: 40.45px;\\n    line-height: 40.45px;\\n    margin-top: 40.45px;\\n    margin-bottom: 40.45px;\\n  }\\n\\n  h4 {\\n    font-size: 25px;\\n    line-height: 40.45px;\\n    margin-top: 40.45px;\\n    margin-bottom: 40.45px;\\n  }\\n\\n  p,\\nul,\\nol,\\npre,\\ntable,\\nblockquote {\\n    margin-top: 40.45px;\\n    margin-bottom: 40.45px;\\n  }\\n}\\nbody {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n  color: #121223;\\n}\\n\\ncode {\\n  background: #cccccc;\\n  display: inline-block;\\n  width: 100%;\\n}\\n\\npre {\\n  margin: 1em;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/scss/typography.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./scss/base.scss */ \"./src/scss/base.scss\");\n\n__webpack_require__(/*! ./scss/typography.scss */ \"./src/scss/typography.scss\");\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scss/base.scss":
/*!****************************!*\
  !*** ./src/scss/base.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./base.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/base.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/scss/base.scss?");

/***/ }),

/***/ "./src/scss/typography.scss":
/*!**********************************!*\
  !*** ./src/scss/typography.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./typography.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/typography.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/scss/typography.scss?");

/***/ })

/******/ });