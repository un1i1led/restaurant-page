/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    background-color: #191c19;\n    color: white;\n    margin: 0;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n.content {\n    display: grid;\n    grid-template-rows: 0fr 2fr;\n    height: 100vh;\n}\n\n.nav-bar {\n    display: flex;\n    justify-content: center;\n}\n\nul {\n    list-style-type: none;\n}\n\n.options ul {\n    display: flex;\n    gap: 20px;\n    padding: 0;\n}\n\n.options li {\n    transition: 0.1s;\n    font-size: 18px;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n.options li:hover {\n    cursor: pointer;\n    border-bottom: 3px solid #d5c866;\n}\n\n.active {\n    border-bottom: 3px solid #d5c866;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: 1fr 1.5fr;\n}\n\n.name {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.main {\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n.name h1 {\n    font-size: 70px;\n    margin-top: 0;\n}\n\n.name img {\n    height: 300px;\n    width: 300px;\n}\n\n.main-info h2:first-of-type {\n    margin-top: 50px;\n}\n\n.main-info h2 {\n    font-size: 30px;\n}\n\n\n#info {\n    width: 400px;\n}\n\n.weighted {\n    margin: 5px;\n    font-weight: 200;\n    font-size: 20px;\n}\n\n.hrs p {\n    margin: 5px 0 5px 0;\n}\n\n/* Contact */\n\n.big-contact {\n    font-family: 'Josefin Sans', sans-serif;\n    margin: 0;\n}\n\n.contact-info {\n    display: flex;\n    justify-content: center;\n}\n \n.main-contact {\n    display: grid;\n    grid-template-rows: 0.5fr 3fr;\n} \n\n.div-holder {\n    display: flex;\n    justify-content: space-around;\n}\n\n.three-div {\n    height: 500px;\n    width: 300px;\n    border-radius: 2%;\n    border: 1px solid white;\n    font-family: 'Josefin Sans', sans-serif;\n    transition: 0.2s;\n}\n\n.three-div:hover {\n    border: 1px solid #d5c866;\n}\n\n.form {\n    margin-top: 69.92px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\ninput {\n    background-color: #232523;\n    border: 1px solid #232523;\n    border-radius: 2px;\n    height: 25px;\n    color: white;\n    width: 220px;\n    transition: 0.2s;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\ninput:focus, textarea:focus {\n    outline: 1px solid #d5c866;\n}\n\ninput:hover {\n    border: 1px solid white;\n}\n\n::placeholder {\n    color: white;\n}\n\ntextarea {\n    background-color: #232523;\n    border: 1px solid #232523;\n    resize: none;\n    width: 220px;\n    color: white;\n    height: 50px;\n    transition: 0.2s;\n}\n\ntextarea:hover {\n    border: 1px solid white;\n}\n\n.div-one {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.div-two {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.div-three {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.div-three-separator {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 50px;\n}\n\n.iframe {\n    width: 290px;\n    height: 490px;\n    border-radius: 2%;\n}\n\n.send-btn {\n    height: 40px;\n    width: 80px;\n    border: none;\n    border-radius: 2%;\n    color: white;\n    background-color: #232523;\n    transform: 0.2s;\n}\n\n.send-btn:hover {\n    cursor: pointer;\n    border: 1px solid white;\n}\n\n.form-h2 {\n    margin: 0;\n    margin-top: 19.92px;\n}\n\n/* Menu */\n\n.salad-div, .pasta-div,\n.avocado-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin-bottom: 30px;\n}\n\n.salad-div:hover .salad-info-div,\n.pasta-div:hover .pasta-info-div,\n.avocado-div:hover .avocado-info-div {\n    visibility: visible;\n    opacity: 1;\n}\n\n.salad-img-div {\n    display: flex;\n    position: relative;\n}\n\n\n.first-salad {\n    height: 500px;\n    width: 500px;\n}\n\n.salad-info-div, .pasta-info-div,\n.avocado-info-div {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    /* background: rgba(36, 62, 206, 0.6); */\n    color: #fff;\n    visibility: hidden;\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: opacity .2s, visibility .2s;\n}\n\n.salad-info-div > h2,\n.pasta-info-div > h2 {\n    transition: 0.2s;\n    transform: translateY(-3em) translateX(18.4em);\n}\n\n.avocado-h2 {\n    transition: 0.2s;\n    transform: translateY(-3em) translateX(18.5em);\n}\n\n.salad-info-div > h2 {\n    margin-bottom: 0;\n}\n\n.saladP, .pastaP {\n    transform: translateY(0) translateX(13.5em);\n    width: 200px;\n}\n\n.pasta-clam {\n    height: 500px;\n    width: 500px;\n}\n\n.avocado-img {\n    height: 600px;\n    width: 600px;\n}\n\n.avocadoP {\n    transform: translateY(0) translateX(14.4em);\n    width: 200px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    background-color: #191c19;\n    color: white;\n    margin: 0;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n.content {\n    display: grid;\n    grid-template-rows: 0fr 2fr;\n    height: 100vh;\n}\n\n.nav-bar {\n    display: flex;\n    justify-content: center;\n}\n\nul {\n    list-style-type: none;\n}\n\n.options ul {\n    display: flex;\n    gap: 20px;\n    padding: 0;\n}\n\n.options li {\n    transition: 0.1s;\n    font-size: 18px;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n.options li:hover {\n    cursor: pointer;\n    border-bottom: 3px solid #d5c866;\n}\n\n.active {\n    border-bottom: 3px solid #d5c866;\n}\n\n.main {\n    display: grid;\n    grid-template-columns: 1fr 1.5fr;\n}\n\n.name {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.main {\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n.name h1 {\n    font-size: 70px;\n    margin-top: 0;\n}\n\n.name img {\n    height: 300px;\n    width: 300px;\n}\n\n.main-info h2:first-of-type {\n    margin-top: 50px;\n}\n\n.main-info h2 {\n    font-size: 30px;\n}\n\n\n#info {\n    width: 400px;\n}\n\n.weighted {\n    margin: 5px;\n    font-weight: 200;\n    font-size: 20px;\n}\n\n.hrs p {\n    margin: 5px 0 5px 0;\n}\n\n/* Contact */\n\n.big-contact {\n    font-family: 'Josefin Sans', sans-serif;\n    margin: 0;\n}\n\n.contact-info {\n    display: flex;\n    justify-content: center;\n}\n \n.main-contact {\n    display: grid;\n    grid-template-rows: 0.5fr 3fr;\n} \n\n.div-holder {\n    display: flex;\n    justify-content: space-around;\n}\n\n.three-div {\n    height: 500px;\n    width: 300px;\n    border-radius: 2%;\n    border: 1px solid white;\n    font-family: 'Josefin Sans', sans-serif;\n    transition: 0.2s;\n}\n\n.three-div:hover {\n    border: 1px solid #d5c866;\n}\n\n.form {\n    margin-top: 69.92px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 20px;\n}\n\ninput {\n    background-color: #232523;\n    border: 1px solid #232523;\n    border-radius: 2px;\n    height: 25px;\n    color: white;\n    width: 220px;\n    transition: 0.2s;\n    font-family: 'Josefin Sans', sans-serif;\n}\n\ninput:focus, textarea:focus {\n    outline: 1px solid #d5c866;\n}\n\ninput:hover {\n    border: 1px solid white;\n}\n\n::placeholder {\n    color: white;\n}\n\ntextarea {\n    background-color: #232523;\n    border: 1px solid #232523;\n    resize: none;\n    width: 220px;\n    color: white;\n    height: 50px;\n    transition: 0.2s;\n}\n\ntextarea:hover {\n    border: 1px solid white;\n}\n\n.div-one {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.div-two {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.div-three {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.div-three-separator {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin-top: 50px;\n}\n\n.iframe {\n    width: 290px;\n    height: 490px;\n    border-radius: 2%;\n}\n\n.send-btn {\n    height: 40px;\n    width: 80px;\n    border: none;\n    border-radius: 2%;\n    color: white;\n    background-color: #232523;\n    transform: 0.2s;\n}\n\n.send-btn:hover {\n    cursor: pointer;\n    border: 1px solid white;\n}\n\n.form-h2 {\n    margin: 0;\n    margin-top: 19.92px;\n}\n\n/* Menu */\n\n.salad-div, .pasta-div,\n.avocado-div {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n    margin-bottom: 30px;\n}\n\n.salad-div:hover .salad-info-div,\n.pasta-div:hover .pasta-info-div,\n.avocado-div:hover .avocado-info-div {\n    visibility: visible;\n    opacity: 1;\n}\n\n.salad-img-div {\n    display: flex;\n    position: relative;\n}\n\n\n.first-salad {\n    height: 500px;\n    width: 500px;\n}\n\n.salad-info-div, .pasta-info-div,\n.avocado-info-div {\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    /* background: rgba(36, 62, 206, 0.6); */\n    color: #fff;\n    visibility: hidden;\n    opacity: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transition: opacity .2s, visibility .2s;\n}\n\n.salad-info-div > h2,\n.pasta-info-div > h2 {\n    transition: 0.2s;\n    transform: translateY(-3em) translateX(18.4em);\n}\n\n.avocado-h2 {\n    transition: 0.2s;\n    transform: translateY(-3em) translateX(18.5em);\n}\n\n.salad-info-div > h2 {\n    margin-bottom: 0;\n}\n\n.saladP, .pastaP {\n    transform: translateY(0) translateX(13.5em);\n    width: 200px;\n}\n\n.pasta-clam {\n    height: 500px;\n    width: 500px;\n}\n\n.avocado-img {\n    height: 600px;\n    width: 600px;\n}\n\n.avocadoP {\n    transform: translateY(0) translateX(14.4em);\n    width: 200px;\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/Home.js":
/*!*********************!*\
  !*** ./src/Home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "halfStart": () => (/* binding */ halfStart),
/* harmony export */   "removeHome": () => (/* binding */ removeHome),
/* harmony export */   "start": () => (/* binding */ start)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _img_icon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/icon.png */ "./src/img/icon.png");



const createNavBar = () => {
    const navBar = document.createElement('div');
    navBar.className = 'nav-bar';
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(navBar);

    const options = document.createElement('div');
    options.className = 'options'
    navBar.appendChild(options);

    const ulNavBar = document.createElement('ul');
    options.appendChild(ulNavBar);

    const liMenu = document.createElement('li');
    const liHome = document.createElement('li');
    liHome.className = 'active';
    const liContact = document.createElement('li');

    liMenu.innerHTML = 'Menu';
    liHome.innerHTML = 'Home';
    liContact.innerHTML = 'Contact';

    liMenu.setAttribute('id', 'menu');
    liHome.setAttribute('id','home');
    liContact.setAttribute('id', 'contact');

    ulNavBar.appendChild(liMenu);
    ulNavBar.appendChild(liHome);
    ulNavBar.appendChild(liContact);
}

const main = document.createElement('div');
const mainInfo = document.createElement('div');

const createMain = () => {
    main.className = 'main';
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);

    const name = document.createElement('div');
    name.className = 'name';
    const header = document.createElement('h1');
    header.innerHTML = 'Munchtastic';
    const saladIcon = new Image();
    saladIcon.src = _img_icon_png__WEBPACK_IMPORTED_MODULE_1__;

    
    mainInfo.className = 'main-info';

    main.appendChild(name);
    main.appendChild(mainInfo);
    name.appendChild(header);
    name.appendChild(saladIcon);
}

const hrsPara = () => {
    const monP = document.createElement('p');
    monP.innerHTML = 'Monday: 11:30 - 23:00';

    const tueP = document.createElement('p');
    tueP.innerHTML = 'Tuesday: 11:30 - 23:00';

    const wenP = document.createElement('p');
    wenP.innerHTML = 'Wednesday: 11:30 - 23:00';
    
    const thurP = document.createElement('p');
    thurP.innerHTML = 'Thursday: 11:30 - 23:00';

    const friP = document.createElement('p');
    friP.innerHTML = 'Friday: 11:30 - 23:00';

    const satP = document.createElement('p');
    satP.innerHTML = 'Saturday: 11:30 - 23:00';

    const sunP = document.createElement('p');
    sunP.innerHTML = 'Sunday: 11:30 - 23:00';

    const days = [monP, tueP, wenP, thurP, friP, satP, sunP];

    for (let i = 0; i < days.length; i++){
        days[i].className = 'weighted';
        mainInfo.appendChild(days[i]);
    }

}

const createMainInfo = () => {
    const infoH2 = document.createElement('h2');
    infoH2.innerHTML = 'Why choose us?';
    mainInfo.appendChild(infoH2);

    const infoP = document.createElement('p');
    infoP.innerHTML = 'Here at Munchtastic we have a wide selection of incredible meals that we\'ve come to perfect over our 50 year history!'
    infoP.className = 'weighted';
    infoP.id = 'info';
    mainInfo.appendChild(infoP);

    const hrsH2 = document.createElement('h2');
    hrsH2.innerHTML = 'Hours';
    mainInfo.appendChild(hrsH2);

    hrsPara();

    const locationH2 = document.createElement('h2');
    locationH2.innerHTML = 'Location';
    mainInfo.appendChild(locationH2);

    const locationP = document.createElement('p');
    locationP.innerHTML = '110 Fantastic Lane, Castaic, California';
    locationP.classList = 'weighted';
    mainInfo.appendChild(locationP);
}

const start = () => {
    createNavBar();
    createMain();
    createMainInfo();
}

const halfStart = () => {
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);
    const liHome = document.querySelector('#home');
    liHome.className = 'active';
}

const removeHome = () => {
    const liHome = document.querySelector('#home');
    liHome.className = '';
    _index__WEBPACK_IMPORTED_MODULE_0__.content.removeChild(main);
}



/***/ }),

/***/ "./src/Menu.js":
/*!*********************!*\
  !*** ./src/Menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "halfMenu": () => (/* binding */ halfMenu),
/* harmony export */   "removeMenu": () => (/* binding */ removeMenu),
/* harmony export */   "startMenu": () => (/* binding */ startMenu)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");
/* harmony import */ var _img_firstSalad_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/firstSalad.png */ "./src/img/firstSalad.png");
/* harmony import */ var _img_pastaClam_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/pastaClam.png */ "./src/img/pastaClam.png");
/* harmony import */ var _img_avocadoSalad_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/avocadoSalad.png */ "./src/img/avocadoSalad.png");





const main = document.createElement('div');

const mainMenu = () => {
    main.className = 'main-menu';
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);
}

const makeSalad = () => {
    const saladDiv = document.createElement('div');
    saladDiv.className = 'salad-div';

    const imgDiv = document.createElement('div');
    imgDiv.className = 'salad-img-div';
    const saladImg = new Image();
    saladImg.src = _img_firstSalad_png__WEBPACK_IMPORTED_MODULE_1__;
    saladImg.className = 'first-salad';

    const saladInfoDiv = document.createElement('div');
    saladInfoDiv.className = 'salad-info-div';
    const saladH2 = document.createElement('h2');
    saladH2.innerHTML = 'Amazing salad';
    const saladp = document.createElement('p');
    saladp.className = 'weighted saladP';
    saladp.innerHTML = 'Munchtastic\'s specialty, the amazing salad is a sum of the best vegetables on earth';

    main.appendChild(saladDiv);
    saladDiv.appendChild(saladImg);
    saladInfoDiv.appendChild(saladH2);
    saladInfoDiv.appendChild(saladp);
    saladDiv.appendChild(saladInfoDiv);
}

const makePasta = () => {
    const pastaDiv = document.createElement('div');
    pastaDiv.className = 'pasta-div';

    const pastaImg = new Image();
    pastaImg.src = _img_pastaClam_png__WEBPACK_IMPORTED_MODULE_2__;
    pastaImg.className = 'pasta-clam';

    const pastaInfoDiv = document.createElement('div');
    pastaInfoDiv.className = 'pasta-info-div';
    const pastaH2 = document.createElement('h2');
    pastaH2.innerHTML = 'Amazing pasta';
    const pastaP = document.createElement('p');
    pastaP.innerHTML = 'Duis sodales velit a erat dignissim, eu pellentesque enim sodales. Praesent non convallis nisl.';
    pastaP.className = 'weighted saladP';

    main.appendChild(pastaDiv);
    pastaDiv.appendChild(pastaImg);
    pastaInfoDiv.appendChild(pastaH2);
    pastaInfoDiv.appendChild(pastaP);
    pastaDiv.appendChild(pastaInfoDiv);
}

const makeAvocado = () => {
    const avocadoDiv = document.createElement('div');
    avocadoDiv.className = 'avocado-div';

    const avocadoImg = new Image();
    avocadoImg.src = _img_avocadoSalad_png__WEBPACK_IMPORTED_MODULE_3__;
    avocadoImg.className = 'avocado-img';

    const avocadoInfoDiv = document.createElement('div');
    avocadoInfoDiv.className = 'avocado-info-div';
    const avocadoH2 = document.createElement('h2');
    avocadoH2.innerHTML = 'Avocado Dish';
    avocadoH2.className = 'avocado-h2';
    const avocadoP = document.createElement('p');
    avocadoP.innerHTML = 'Duis sodales velit a erat dignissim, eu pellentesque enim sodales. Praesent non convallis nisl.';
    avocadoP.className = 'weighted avocadoP';

    main.appendChild(avocadoDiv);
    avocadoDiv.appendChild(avocadoImg);
    avocadoInfoDiv.appendChild(avocadoH2);
    avocadoInfoDiv.appendChild(avocadoP);
    avocadoDiv.appendChild(avocadoInfoDiv);
}


const halfMenu = () => {
    const liMenu = document.querySelector('#menu');
    liMenu.className = 'active';
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);
}

const startMenu = () => {
    mainMenu();
    makeSalad();
    makePasta();
    makeAvocado();
}

const removeMenu = () => {
    const liMenu = document.querySelector('#menu');
    liMenu.className = '';
    _index__WEBPACK_IMPORTED_MODULE_0__.content.removeChild(main);
}



/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "halfContact": () => (/* binding */ halfContact),
/* harmony export */   "removeContact": () => (/* binding */ removeContact),
/* harmony export */   "startContact": () => (/* binding */ startContact)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const main = document.createElement('div');
const divHolder = document.createElement('div');
const divOne = document.createElement('div');
const divTwo = document.createElement('div');
const divThree = document.createElement('div');

const mainContact = () => {
    main.className = 'main-contact';
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);
}

const contactInfo = () => {
    const info = document.createElement('div');
    info.className = 'contact-info';
    main.appendChild(info);

    const h1 = document.createElement('h1');
    h1.innerHTML = 'Contact Us';
    h1.className = 'big-contact';

    divHolder.className = 'div-holder';
    
    main.appendChild(divHolder);
    info.appendChild(h1);
    threeDivs();
}

const makeDivOne = () => {
    const iframe = document.createElement('iframe');
    iframe.src = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.308868758972!2d-118.6219082851746!3d34.4950531017128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c27ed0b632f993%3A0x6beb56ec9237915d!2sFantastic%20Ln%2C%20Castaic%2C%20CA%2091384%2C%20USA!5e0!3m2!1sen!2smx!4v1661357300751!5m2!1sen!2smx';
    iframe.className = 'iframe';
    divOne.appendChild(iframe);
}

const form = document.createElement('form');
const name = document.createElement('input');
const lastName = document.createElement('input');
const email = document.createElement('input');
const subject = document.createElement('textarea');
const sendBtn = document.createElement('button');
const inputs = [name, lastName, email, subject];
const formh2 = document.createElement('h2');

for (const input of inputs){
    input.required = true;
}

const makeDivTwo = () => {
    formh2.innerHTML = 'Message Us!';
    formh2.className = 'form-h2';
    divTwo.appendChild(formh2);

    form.className = 'form';
    divTwo.appendChild(form);

    name.setAttribute('type', 'text');
    name.setAttribute('name', 'name');
    name.setAttribute('placeholder', 'Name');
    form.appendChild(name);

    lastName.setAttribute('type', 'text');
    lastName.setAttribute('name', 'lastName');
    lastName.setAttribute('placeholder', 'Last Name');
    form.appendChild(lastName);

    email.setAttribute('type', 'email');
    email.setAttribute('name', 'email');
    email.setAttribute('placeholder', 'Email');
    form.appendChild(email);

    subject.setAttribute('placeholder', 'Message...');
    subject.setAttribute('name', 'subject');
    form.appendChild(subject);

    sendBtn.className = 'send-btn';
    sendBtn.innerHTML = 'Send';
    form.appendChild(sendBtn);
}

const makeDivThree = () => {

    const h2 = document.createElement('h2');
    h2.innerHTML = 'Address';
    h2.className = 'div-three-h2';

    divThree.appendChild(h2);

    const words = ['110', 'Fantastic Lane,', 'Castaic,', 'California'];

    const separator = document.createElement('div');
    separator.className = 'div-three-separator';
    divThree.appendChild(separator);

    for (let i = 0; i < words.length; i++){
        const p = document.createElement('p');
        p.innerHTML = words[i];
        p.className = 'div-three-p';
        separator.appendChild(p);
    }
}

const threeDivs = () => {
    divOne.className = 'three-div div-one';
    divTwo.className = 'three-div div-two';
    divThree.className = 'three-div div-three';

    divHolder.appendChild(divOne);
    divHolder.appendChild(divTwo);
    divHolder.appendChild(divThree);

    makeDivOne();
    makeDivTwo();
    makeDivThree();
}

const startContact = () => {
    mainContact();
    contactInfo();
}

const halfContact = () => {
    const liContact = document.querySelector('#contact');
    liContact.className = 'active';
    _index__WEBPACK_IMPORTED_MODULE_0__.content.appendChild(main);
}

const removeContact = () => {
    const liContact = document.querySelector('#contact');
    liContact.className = '';
    _index__WEBPACK_IMPORTED_MODULE_0__.content.removeChild(main);
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home */ "./src/Home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Menu */ "./src/Menu.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






const body = document.body;
const content = document.createElement('div');
content.className = 'content';
body.appendChild(content);

let contactInitialized = false;
let menuInitialized = false;



(0,_Home__WEBPACK_IMPORTED_MODULE_0__.start)();

const liHome = document.querySelector('#home');
const liContact = document.querySelector('#contact');
const liMenu = document.querySelector('#menu');

liContact.addEventListener('click', function() {
    content.style.height = "100vh";
    if (liHome.className == 'active'){
        (0,_Home__WEBPACK_IMPORTED_MODULE_0__.removeHome)();
    } else if (liMenu.className == 'active'){
        (0,_Menu__WEBPACK_IMPORTED_MODULE_2__.removeMenu)();
    }

    if (contactInitialized == false){
        (0,_contact__WEBPACK_IMPORTED_MODULE_1__.startContact)();
        liContact.className = 'active';
        contactInitialized = true;
    } else {
        (0,_contact__WEBPACK_IMPORTED_MODULE_1__.halfContact)();
    }

    

});


liHome.addEventListener('click', function() {
    content.style.height = "100vh";
    if (liContact.className == 'active') {
        (0,_contact__WEBPACK_IMPORTED_MODULE_1__.removeContact)();
    } else if (liMenu.className == 'active'){
        (0,_Menu__WEBPACK_IMPORTED_MODULE_2__.removeMenu)();
    }

    if (!(liHome.className == 'active')){
        (0,_Home__WEBPACK_IMPORTED_MODULE_0__.halfStart)();
    }


});

liMenu.addEventListener('click', function(){
    content.style.height = "150vh";

    if (home.className == 'active'){
        (0,_Home__WEBPACK_IMPORTED_MODULE_0__.removeHome)();
    } else if (contact.className == 'active'){
        (0,_contact__WEBPACK_IMPORTED_MODULE_1__.removeContact)();
    }

    if (menuInitialized == false){
        (0,_Menu__WEBPACK_IMPORTED_MODULE_2__.startMenu)();
        liMenu.className = 'active';
        menuInitialized = true;
    } else {
        (0,_Menu__WEBPACK_IMPORTED_MODULE_2__.halfMenu)();
    }
})


/***/ }),

/***/ "./src/img/avocadoSalad.png":
/*!**********************************!*\
  !*** ./src/img/avocadoSalad.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "281631fd160da450a74d.png";

/***/ }),

/***/ "./src/img/firstSalad.png":
/*!********************************!*\
  !*** ./src/img/firstSalad.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "72ad317425838ff7aa58.png";

/***/ }),

/***/ "./src/img/icon.png":
/*!**************************!*\
  !*** ./src/img/icon.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6f1fecba740b1d84ef68.png";

/***/ }),

/***/ "./src/img/pastaClam.png":
/*!*******************************!*\
  !*** ./src/img/pastaClam.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c0a9e128c2bd7606c89.png";

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsUUFBUSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLFdBQVcsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFV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USx1REFBYTtBQUNyQjs7QUFFQTtBQUNBLFFBQVEsZ0RBQVM7QUFDakI7QUFDQTtBQUNBLE1BQU07QUFDTixRQUFRLCtDQUFRO0FBQ2hCO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxRUQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7O1VFQUE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL0hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL01lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MWMxOTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDBmciAyZnI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5uYXYtYmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ub3B0aW9ucyB1bCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLm9wdGlvbnMgbGkge1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzO1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLm9wdGlvbnMgbGk6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZDVjODY2O1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkNWM4NjY7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMS41ZnI7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5uYW1lIGgxIHtcXG4gICAgZm9udC1zaXplOiA3MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbn1cXG5cXG4ubmFtZSBpbWcge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxufVxcblxcbi5tYWluLWluZm8gaDI6Zmlyc3Qtb2YtdHlwZSB7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5tYWluLWluZm8gaDIge1xcbiAgICBmb250LXNpemU6IDMwcHg7XFxufVxcblxcblxcbiNpbmZvIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbn1cXG5cXG4ud2VpZ2h0ZWQge1xcbiAgICBtYXJnaW46IDVweDtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4uaHJzIHAge1xcbiAgICBtYXJnaW46IDVweCAwIDVweCAwO1xcbn1cXG5cXG4vKiBDb250YWN0ICovXFxuXFxuLmJpZy1jb250YWN0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbi5jb250YWN0LWluZm8ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuIFxcbi5tYWluLWNvbnRhY3Qge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDAuNWZyIDNmcjtcXG59IFxcblxcbi5kaXYtaG9sZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi50aHJlZS1kaXYge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG4udGhyZWUtZGl2OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q1Yzg2NjtcXG59XFxuXFxuLmZvcm0ge1xcbiAgICBtYXJnaW4tdG9wOiA2OS45MnB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzI1MjM7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMzI1MjM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5pbnB1dDpmb2N1cywgdGV4dGFyZWE6Zm9jdXMge1xcbiAgICBvdXRsaW5lOiAxcHggc29saWQgI2Q1Yzg2NjtcXG59XFxuXFxuaW5wdXQ6aG92ZXIge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxudGV4dGFyZWEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyNTIzO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjMyNTIzO1xcbiAgICByZXNpemU6IG5vbmU7XFxuICAgIHdpZHRoOiAyMjBweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxufVxcblxcbnRleHRhcmVhOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbi5kaXYtb25lIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXYtdHdvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRpdi10aHJlZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXYtdGhyZWUtc2VwYXJhdG9yIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXG59XFxuXFxuLmlmcmFtZSB7XFxuICAgIHdpZHRoOiAyOTBweDtcXG4gICAgaGVpZ2h0OiA0OTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XFxufVxcblxcbi5zZW5kLWJ0biB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogMiU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjUyMztcXG4gICAgdHJhbnNmb3JtOiAwLjJzO1xcbn1cXG5cXG4uc2VuZC1idG46aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uZm9ybS1oMiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgbWFyZ2luLXRvcDogMTkuOTJweDtcXG59XFxuXFxuLyogTWVudSAqL1xcblxcbi5zYWxhZC1kaXYsIC5wYXN0YS1kaXYsXFxuLmF2b2NhZG8tZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuXFxuLnNhbGFkLWRpdjpob3ZlciAuc2FsYWQtaW5mby1kaXYsXFxuLnBhc3RhLWRpdjpob3ZlciAucGFzdGEtaW5mby1kaXYsXFxuLmF2b2NhZG8tZGl2OmhvdmVyIC5hdm9jYWRvLWluZm8tZGl2IHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNhbGFkLWltZy1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcblxcbi5maXJzdC1zYWxhZCB7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIHdpZHRoOiA1MDBweDtcXG59XFxuXFxuLnNhbGFkLWluZm8tZGl2LCAucGFzdGEtaW5mby1kaXYsXFxuLmF2b2NhZG8taW5mby1kaXYge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgLyogYmFja2dyb3VuZDogcmdiYSgzNiwgNjIsIDIwNiwgMC42KTsgKi9cXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjJzLCB2aXNpYmlsaXR5IC4ycztcXG59XFxuXFxuLnNhbGFkLWluZm8tZGl2ID4gaDIsXFxuLnBhc3RhLWluZm8tZGl2ID4gaDIge1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNlbSkgdHJhbnNsYXRlWCgxOC40ZW0pO1xcbn1cXG5cXG4uYXZvY2Fkby1oMiB7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtM2VtKSB0cmFuc2xhdGVYKDE4LjVlbSk7XFxufVxcblxcbi5zYWxhZC1pbmZvLWRpdiA+IGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLnNhbGFkUCwgLnBhc3RhUCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDEzLjVlbSk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XFxuXFxuLnBhc3RhLWNsYW0ge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5hdm9jYWRvLWltZyB7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG59XFxuXFxuLmF2b2NhZG9QIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApIHRyYW5zbGF0ZVgoMTQuNGVtKTtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixTQUFTO0lBQ1QsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksZ0NBQWdD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MkNBQTJDO0lBQzNDLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTFjMTk7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5jb250ZW50IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwZnIgMmZyO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4ubmF2LWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXG59XFxuXFxuLm9wdGlvbnMgdWwge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi5vcHRpb25zIGxpIHtcXG4gICAgdHJhbnNpdGlvbjogMC4xcztcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBmb250LWZhbWlseTogJ0pvc2VmaW4gU2FucycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5vcHRpb25zIGxpOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgI2Q1Yzg2NjtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZDVjODY2O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyO1xcbn1cXG5cXG4ubmFtZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5tYWluIHtcXG4gICAgZm9udC1mYW1pbHk6ICdKb3NlZmluIFNhbnMnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubmFtZSBoMSB7XFxuICAgIGZvbnQtc2l6ZTogNzBweDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG59XFxuXFxuLm5hbWUgaW1nIHtcXG4gICAgaGVpZ2h0OiAzMDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbn1cXG5cXG4ubWFpbi1pbmZvIGgyOmZpcnN0LW9mLXR5cGUge1xcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcbn1cXG5cXG4ubWFpbi1pbmZvIGgyIHtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbn1cXG5cXG5cXG4jaW5mbyB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG59XFxuXFxuLndlaWdodGVkIHtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmhycyBwIHtcXG4gICAgbWFyZ2luOiA1cHggMCA1cHggMDtcXG59XFxuXFxuLyogQ29udGFjdCAqL1xcblxcbi5iaWctY29udGFjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbiBcXG4ubWFpbi1jb250YWN0IHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjVmciAzZnI7XFxufSBcXG5cXG4uZGl2LWhvbGRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4udGhyZWUtZGl2IHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyJTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG59XFxuXFxuLnRocmVlLWRpdjpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNWM4NjY7XFxufVxcblxcbi5mb3JtIHtcXG4gICAgbWFyZ2luLXRvcDogNjkuOTJweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuaW5wdXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjMyNTIzO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjMyNTIzO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGhlaWdodDogMjVweDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIHRyYW5zaXRpb246IDAuMnM7XFxuICAgIGZvbnQtZmFtaWx5OiAnSm9zZWZpbiBTYW5zJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMsIHRleHRhcmVhOmZvY3VzIHtcXG4gICAgb3V0bGluZTogMXB4IHNvbGlkICNkNWM4NjY7XFxufVxcblxcbmlucHV0OmhvdmVyIHtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxufVxcblxcbjo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbnRleHRhcmVhIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMjUyMztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIzMjUyMztcXG4gICAgcmVzaXplOiBub25lO1xcbiAgICB3aWR0aDogMjIwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbn1cXG5cXG50ZXh0YXJlYTpob3ZlciB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbn1cXG5cXG4uZGl2LW9uZSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGl2LXR3byB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kaXYtdGhyZWUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZGl2LXRocmVlLXNlcGFyYXRvciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxufVxcblxcbi5pZnJhbWUge1xcbiAgICB3aWR0aDogMjkwcHg7XFxuICAgIGhlaWdodDogNDkwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbn1cXG5cXG4uc2VuZC1idG4ge1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzI1MjM7XFxuICAgIHRyYW5zZm9ybTogMC4ycztcXG59XFxuXFxuLnNlbmQtYnRuOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuXFxuLmZvcm0taDIge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG1hcmdpbi10b3A6IDE5LjkycHg7XFxufVxcblxcbi8qIE1lbnUgKi9cXG5cXG4uc2FsYWQtZGl2LCAucGFzdGEtZGl2LFxcbi5hdm9jYWRvLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcblxcbi5zYWxhZC1kaXY6aG92ZXIgLnNhbGFkLWluZm8tZGl2LFxcbi5wYXN0YS1kaXY6aG92ZXIgLnBhc3RhLWluZm8tZGl2LFxcbi5hdm9jYWRvLWRpdjpob3ZlciAuYXZvY2Fkby1pbmZvLWRpdiB7XFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zYWxhZC1pbWctZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG5cXG4uZmlyc3Qtc2FsYWQge1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogNTAwcHg7XFxufVxcblxcbi5zYWxhZC1pbmZvLWRpdiwgLnBhc3RhLWluZm8tZGl2LFxcbi5hdm9jYWRvLWluZm8tZGl2IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIC8qIGJhY2tncm91bmQ6IHJnYmEoMzYsIDYyLCAyMDYsIDAuNik7ICovXFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4ycywgdmlzaWJpbGl0eSAuMnM7XFxufVxcblxcbi5zYWxhZC1pbmZvLWRpdiA+IGgyLFxcbi5wYXN0YS1pbmZvLWRpdiA+IGgyIHtcXG4gICAgdHJhbnNpdGlvbjogMC4ycztcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0zZW0pIHRyYW5zbGF0ZVgoMTguNGVtKTtcXG59XFxuXFxuLmF2b2NhZG8taDIge1xcbiAgICB0cmFuc2l0aW9uOiAwLjJzO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTNlbSkgdHJhbnNsYXRlWCgxOC41ZW0pO1xcbn1cXG5cXG4uc2FsYWQtaW5mby1kaXYgPiBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi5zYWxhZFAsIC5wYXN0YVAge1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgdHJhbnNsYXRlWCgxMy41ZW0pO1xcbiAgICB3aWR0aDogMjAwcHg7XFxufVxcblxcbi5wYXN0YS1jbGFtIHtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDUwMHB4O1xcbn1cXG5cXG4uYXZvY2Fkby1pbWcge1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxufVxcblxcbi5hdm9jYWRvUCB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSB0cmFuc2xhdGVYKDE0LjRlbSk7XFxuICAgIHdpZHRoOiAyMDBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge2NvbnRlbnR9IGZyb20gJy4vaW5kZXgnO1xuaW1wb3J0IEljb24gZnJvbSAnLi9pbWcvaWNvbi5wbmcnO1xuXG5jb25zdCBjcmVhdGVOYXZCYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmF2QmFyLmNsYXNzTmFtZSA9ICduYXYtYmFyJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG5hdkJhcik7XG5cbiAgICBjb25zdCBvcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgb3B0aW9ucy5jbGFzc05hbWUgPSAnb3B0aW9ucydcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQob3B0aW9ucyk7XG5cbiAgICBjb25zdCB1bE5hdkJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgb3B0aW9ucy5hcHBlbmRDaGlsZCh1bE5hdkJhcik7XG5cbiAgICBjb25zdCBsaU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IGxpSG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgbGlIb21lLmNsYXNzTmFtZSA9ICdhY3RpdmUnO1xuICAgIGNvbnN0IGxpQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBsaU1lbnUuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIGxpSG9tZS5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgbGlDb250YWN0LmlubmVySFRNTCA9ICdDb250YWN0JztcblxuICAgIGxpTWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcbiAgICBsaUhvbWUuc2V0QXR0cmlidXRlKCdpZCcsJ2hvbWUnKTtcbiAgICBsaUNvbnRhY3Quc2V0QXR0cmlidXRlKCdpZCcsICdjb250YWN0Jyk7XG5cbiAgICB1bE5hdkJhci5hcHBlbmRDaGlsZChsaU1lbnUpO1xuICAgIHVsTmF2QmFyLmFwcGVuZENoaWxkKGxpSG9tZSk7XG4gICAgdWxOYXZCYXIuYXBwZW5kQ2hpbGQobGlDb250YWN0KTtcbn1cblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgbWFpbkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgY3JlYXRlTWFpbiA9ICgpID0+IHtcbiAgICBtYWluLmNsYXNzTmFtZSA9ICdtYWluJztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuXG4gICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5hbWUuY2xhc3NOYW1lID0gJ25hbWUnO1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLmlubmVySFRNTCA9ICdNdW5jaHRhc3RpYyc7XG4gICAgY29uc3Qgc2FsYWRJY29uID0gbmV3IEltYWdlKCk7XG4gICAgc2FsYWRJY29uLnNyYyA9IEljb247XG5cbiAgICBcbiAgICBtYWluSW5mby5jbGFzc05hbWUgPSAnbWFpbi1pbmZvJztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQobmFtZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluSW5mbyk7XG4gICAgbmFtZS5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIG5hbWUuYXBwZW5kQ2hpbGQoc2FsYWRJY29uKTtcbn1cblxuY29uc3QgaHJzUGFyYSA9ICgpID0+IHtcbiAgICBjb25zdCBtb25QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG1vblAuaW5uZXJIVE1MID0gJ01vbmRheTogMTE6MzAgLSAyMzowMCc7XG5cbiAgICBjb25zdCB0dWVQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHR1ZVAuaW5uZXJIVE1MID0gJ1R1ZXNkYXk6IDExOjMwIC0gMjM6MDAnO1xuXG4gICAgY29uc3Qgd2VuUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICB3ZW5QLmlubmVySFRNTCA9ICdXZWRuZXNkYXk6IDExOjMwIC0gMjM6MDAnO1xuICAgIFxuICAgIGNvbnN0IHRodXJQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHRodXJQLmlubmVySFRNTCA9ICdUaHVyc2RheTogMTE6MzAgLSAyMzowMCc7XG5cbiAgICBjb25zdCBmcmlQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGZyaVAuaW5uZXJIVE1MID0gJ0ZyaWRheTogMTE6MzAgLSAyMzowMCc7XG5cbiAgICBjb25zdCBzYXRQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNhdFAuaW5uZXJIVE1MID0gJ1NhdHVyZGF5OiAxMTozMCAtIDIzOjAwJztcblxuICAgIGNvbnN0IHN1blAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3VuUC5pbm5lckhUTUwgPSAnU3VuZGF5OiAxMTozMCAtIDIzOjAwJztcblxuICAgIGNvbnN0IGRheXMgPSBbbW9uUCwgdHVlUCwgd2VuUCwgdGh1clAsIGZyaVAsIHNhdFAsIHN1blBdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXlzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgZGF5c1tpXS5jbGFzc05hbWUgPSAnd2VpZ2h0ZWQnO1xuICAgICAgICBtYWluSW5mby5hcHBlbmRDaGlsZChkYXlzW2ldKTtcbiAgICB9XG5cbn1cblxuY29uc3QgY3JlYXRlTWFpbkluZm8gPSAoKSA9PiB7XG4gICAgY29uc3QgaW5mb0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpbmZvSDIuaW5uZXJIVE1MID0gJ1doeSBjaG9vc2UgdXM/JztcbiAgICBtYWluSW5mby5hcHBlbmRDaGlsZChpbmZvSDIpO1xuXG4gICAgY29uc3QgaW5mb1AgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgaW5mb1AuaW5uZXJIVE1MID0gJ0hlcmUgYXQgTXVuY2h0YXN0aWMgd2UgaGF2ZSBhIHdpZGUgc2VsZWN0aW9uIG9mIGluY3JlZGlibGUgbWVhbHMgdGhhdCB3ZVxcJ3ZlIGNvbWUgdG8gcGVyZmVjdCBvdmVyIG91ciA1MCB5ZWFyIGhpc3RvcnkhJ1xuICAgIGluZm9QLmNsYXNzTmFtZSA9ICd3ZWlnaHRlZCc7XG4gICAgaW5mb1AuaWQgPSAnaW5mbyc7XG4gICAgbWFpbkluZm8uYXBwZW5kQ2hpbGQoaW5mb1ApO1xuXG4gICAgY29uc3QgaHJzSDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGhyc0gyLmlubmVySFRNTCA9ICdIb3Vycyc7XG4gICAgbWFpbkluZm8uYXBwZW5kQ2hpbGQoaHJzSDIpO1xuXG4gICAgaHJzUGFyYSgpO1xuXG4gICAgY29uc3QgbG9jYXRpb25IMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgbG9jYXRpb25IMi5pbm5lckhUTUwgPSAnTG9jYXRpb24nO1xuICAgIG1haW5JbmZvLmFwcGVuZENoaWxkKGxvY2F0aW9uSDIpO1xuXG4gICAgY29uc3QgbG9jYXRpb25QID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxvY2F0aW9uUC5pbm5lckhUTUwgPSAnMTEwIEZhbnRhc3RpYyBMYW5lLCBDYXN0YWljLCBDYWxpZm9ybmlhJztcbiAgICBsb2NhdGlvblAuY2xhc3NMaXN0ID0gJ3dlaWdodGVkJztcbiAgICBtYWluSW5mby5hcHBlbmRDaGlsZChsb2NhdGlvblApO1xufVxuXG5jb25zdCBzdGFydCA9ICgpID0+IHtcbiAgICBjcmVhdGVOYXZCYXIoKTtcbiAgICBjcmVhdGVNYWluKCk7XG4gICAgY3JlYXRlTWFpbkluZm8oKTtcbn1cblxuY29uc3QgaGFsZlN0YXJ0ID0gKCkgPT4ge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgY29uc3QgbGlIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbiAgICBsaUhvbWUuY2xhc3NOYW1lID0gJ2FjdGl2ZSc7XG59XG5cbmNvbnN0IHJlbW92ZUhvbWUgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlIb21lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWUnKTtcbiAgICBsaUhvbWUuY2xhc3NOYW1lID0gJyc7XG4gICAgY29udGVudC5yZW1vdmVDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IHtcbiAgICBzdGFydCxcbiAgICByZW1vdmVIb21lLFxuICAgIGhhbGZTdGFydFxufSIsImltcG9ydCB7Y29udGVudH0gZnJvbSAnLi9pbmRleCc7XG5pbXBvcnQgZmlyc3RTYWxhZCBmcm9tICcuL2ltZy9maXJzdFNhbGFkLnBuZyc7XG5pbXBvcnQgcGFzdGFDbGFtIGZyb20gJy4vaW1nL3Bhc3RhQ2xhbS5wbmcnO1xuaW1wb3J0IGF2b2NhZG8gZnJvbSAnLi9pbWcvYXZvY2Fkb1NhbGFkLnBuZyc7XG5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgbWFpbk1lbnUgPSAoKSA9PiB7XG4gICAgbWFpbi5jbGFzc05hbWUgPSAnbWFpbi1tZW51JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5jb25zdCBtYWtlU2FsYWQgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2FsYWREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYWxhZERpdi5jbGFzc05hbWUgPSAnc2FsYWQtZGl2JztcblxuICAgIGNvbnN0IGltZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGltZ0Rpdi5jbGFzc05hbWUgPSAnc2FsYWQtaW1nLWRpdic7XG4gICAgY29uc3Qgc2FsYWRJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBzYWxhZEltZy5zcmMgPSBmaXJzdFNhbGFkO1xuICAgIHNhbGFkSW1nLmNsYXNzTmFtZSA9ICdmaXJzdC1zYWxhZCc7XG5cbiAgICBjb25zdCBzYWxhZEluZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzYWxhZEluZm9EaXYuY2xhc3NOYW1lID0gJ3NhbGFkLWluZm8tZGl2JztcbiAgICBjb25zdCBzYWxhZEgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBzYWxhZEgyLmlubmVySFRNTCA9ICdBbWF6aW5nIHNhbGFkJztcbiAgICBjb25zdCBzYWxhZHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc2FsYWRwLmNsYXNzTmFtZSA9ICd3ZWlnaHRlZCBzYWxhZFAnO1xuICAgIHNhbGFkcC5pbm5lckhUTUwgPSAnTXVuY2h0YXN0aWNcXCdzIHNwZWNpYWx0eSwgdGhlIGFtYXppbmcgc2FsYWQgaXMgYSBzdW0gb2YgdGhlIGJlc3QgdmVnZXRhYmxlcyBvbiBlYXJ0aCc7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKHNhbGFkRGl2KTtcbiAgICBzYWxhZERpdi5hcHBlbmRDaGlsZChzYWxhZEltZyk7XG4gICAgc2FsYWRJbmZvRGl2LmFwcGVuZENoaWxkKHNhbGFkSDIpO1xuICAgIHNhbGFkSW5mb0Rpdi5hcHBlbmRDaGlsZChzYWxhZHApO1xuICAgIHNhbGFkRGl2LmFwcGVuZENoaWxkKHNhbGFkSW5mb0Rpdik7XG59XG5cbmNvbnN0IG1ha2VQYXN0YSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXN0YURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHBhc3RhRGl2LmNsYXNzTmFtZSA9ICdwYXN0YS1kaXYnO1xuXG4gICAgY29uc3QgcGFzdGFJbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBwYXN0YUltZy5zcmMgPSBwYXN0YUNsYW07XG4gICAgcGFzdGFJbWcuY2xhc3NOYW1lID0gJ3Bhc3RhLWNsYW0nO1xuXG4gICAgY29uc3QgcGFzdGFJbmZvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcGFzdGFJbmZvRGl2LmNsYXNzTmFtZSA9ICdwYXN0YS1pbmZvLWRpdic7XG4gICAgY29uc3QgcGFzdGFIMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgcGFzdGFIMi5pbm5lckhUTUwgPSAnQW1hemluZyBwYXN0YSc7XG4gICAgY29uc3QgcGFzdGFQID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhc3RhUC5pbm5lckhUTUwgPSAnRHVpcyBzb2RhbGVzIHZlbGl0IGEgZXJhdCBkaWduaXNzaW0sIGV1IHBlbGxlbnRlc3F1ZSBlbmltIHNvZGFsZXMuIFByYWVzZW50IG5vbiBjb252YWxsaXMgbmlzbC4nO1xuICAgIHBhc3RhUC5jbGFzc05hbWUgPSAnd2VpZ2h0ZWQgc2FsYWRQJztcblxuICAgIG1haW4uYXBwZW5kQ2hpbGQocGFzdGFEaXYpO1xuICAgIHBhc3RhRGl2LmFwcGVuZENoaWxkKHBhc3RhSW1nKTtcbiAgICBwYXN0YUluZm9EaXYuYXBwZW5kQ2hpbGQocGFzdGFIMik7XG4gICAgcGFzdGFJbmZvRGl2LmFwcGVuZENoaWxkKHBhc3RhUCk7XG4gICAgcGFzdGFEaXYuYXBwZW5kQ2hpbGQocGFzdGFJbmZvRGl2KTtcbn1cblxuY29uc3QgbWFrZUF2b2NhZG8gPSAoKSA9PiB7XG4gICAgY29uc3QgYXZvY2Fkb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGF2b2NhZG9EaXYuY2xhc3NOYW1lID0gJ2F2b2NhZG8tZGl2JztcblxuICAgIGNvbnN0IGF2b2NhZG9JbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBhdm9jYWRvSW1nLnNyYyA9IGF2b2NhZG87XG4gICAgYXZvY2Fkb0ltZy5jbGFzc05hbWUgPSAnYXZvY2Fkby1pbWcnO1xuXG4gICAgY29uc3QgYXZvY2Fkb0luZm9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhdm9jYWRvSW5mb0Rpdi5jbGFzc05hbWUgPSAnYXZvY2Fkby1pbmZvLWRpdic7XG4gICAgY29uc3QgYXZvY2Fkb0gyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBhdm9jYWRvSDIuaW5uZXJIVE1MID0gJ0F2b2NhZG8gRGlzaCc7XG4gICAgYXZvY2Fkb0gyLmNsYXNzTmFtZSA9ICdhdm9jYWRvLWgyJztcbiAgICBjb25zdCBhdm9jYWRvUCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBhdm9jYWRvUC5pbm5lckhUTUwgPSAnRHVpcyBzb2RhbGVzIHZlbGl0IGEgZXJhdCBkaWduaXNzaW0sIGV1IHBlbGxlbnRlc3F1ZSBlbmltIHNvZGFsZXMuIFByYWVzZW50IG5vbiBjb252YWxsaXMgbmlzbC4nO1xuICAgIGF2b2NhZG9QLmNsYXNzTmFtZSA9ICd3ZWlnaHRlZCBhdm9jYWRvUCc7XG5cbiAgICBtYWluLmFwcGVuZENoaWxkKGF2b2NhZG9EaXYpO1xuICAgIGF2b2NhZG9EaXYuYXBwZW5kQ2hpbGQoYXZvY2Fkb0ltZyk7XG4gICAgYXZvY2Fkb0luZm9EaXYuYXBwZW5kQ2hpbGQoYXZvY2Fkb0gyKTtcbiAgICBhdm9jYWRvSW5mb0Rpdi5hcHBlbmRDaGlsZChhdm9jYWRvUCk7XG4gICAgYXZvY2Fkb0Rpdi5hcHBlbmRDaGlsZChhdm9jYWRvSW5mb0Rpdik7XG59XG5cblxuY29uc3QgaGFsZk1lbnUgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbiAgICBsaU1lbnUuY2xhc3NOYW1lID0gJ2FjdGl2ZSc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuY29uc3Qgc3RhcnRNZW51ID0gKCkgPT4ge1xuICAgIG1haW5NZW51KCk7XG4gICAgbWFrZVNhbGFkKCk7XG4gICAgbWFrZVBhc3RhKCk7XG4gICAgbWFrZUF2b2NhZG8oKTtcbn1cblxuY29uc3QgcmVtb3ZlTWVudSA9ICgpID0+IHtcbiAgICBjb25zdCBsaU1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpO1xuICAgIGxpTWVudS5jbGFzc05hbWUgPSAnJztcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKG1haW4pO1xufVxuXG5leHBvcnQge1xuICAgIHN0YXJ0TWVudSxcbiAgICBoYWxmTWVudSxcbiAgICByZW1vdmVNZW51XG59IiwiaW1wb3J0IHtjb250ZW50fSBmcm9tICcuL2luZGV4JztcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgZGl2SG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5jb25zdCBkaXZPbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmNvbnN0IGRpdlR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29uc3QgZGl2VGhyZWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuY29uc3QgbWFpbkNvbnRhY3QgPSAoKSA9PiB7XG4gICAgbWFpbi5jbGFzc05hbWUgPSAnbWFpbi1jb250YWN0JztcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5jb25zdCBjb250YWN0SW5mbyA9ICgpID0+IHtcbiAgICBjb25zdCBpbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaW5mby5jbGFzc05hbWUgPSAnY29udGFjdC1pbmZvJztcbiAgICBtYWluLmFwcGVuZENoaWxkKGluZm8pO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLmlubmVySFRNTCA9ICdDb250YWN0IFVzJztcbiAgICBoMS5jbGFzc05hbWUgPSAnYmlnLWNvbnRhY3QnO1xuXG4gICAgZGl2SG9sZGVyLmNsYXNzTmFtZSA9ICdkaXYtaG9sZGVyJztcbiAgICBcbiAgICBtYWluLmFwcGVuZENoaWxkKGRpdkhvbGRlcik7XG4gICAgaW5mby5hcHBlbmRDaGlsZChoMSk7XG4gICAgdGhyZWVEaXZzKCk7XG59XG5cbmNvbnN0IG1ha2VEaXZPbmUgPSAoKSA9PiB7XG4gICAgY29uc3QgaWZyYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaWZyYW1lJyk7XG4gICAgaWZyYW1lLnNyYyA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzMjg4LjMwODg2ODc1ODk3MiEyZC0xMTguNjIxOTA4Mjg1MTc0NiEzZDM0LjQ5NTA1MzEwMTcxMjghMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDgwYzI3ZWQwYjYzMmY5OTMlM0EweDZiZWI1NmVjOTIzNzkxNWQhMnNGYW50YXN0aWMlMjBMbiUyQyUyMENhc3RhaWMlMkMlMjBDQSUyMDkxMzg0JTJDJTIwVVNBITVlMCEzbTIhMXNlbiEyc214ITR2MTY2MTM1NzMwMDc1MSE1bTIhMXNlbiEyc214JztcbiAgICBpZnJhbWUuY2xhc3NOYW1lID0gJ2lmcmFtZSc7XG4gICAgZGl2T25lLmFwcGVuZENoaWxkKGlmcmFtZSk7XG59XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5jb25zdCBuYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IGxhc3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbmNvbnN0IHN1YmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuY29uc3Qgc2VuZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuY29uc3QgaW5wdXRzID0gW25hbWUsIGxhc3ROYW1lLCBlbWFpbCwgc3ViamVjdF07XG5jb25zdCBmb3JtaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG5mb3IgKGNvbnN0IGlucHV0IG9mIGlucHV0cyl7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xufVxuXG5jb25zdCBtYWtlRGl2VHdvID0gKCkgPT4ge1xuICAgIGZvcm1oMi5pbm5lckhUTUwgPSAnTWVzc2FnZSBVcyEnO1xuICAgIGZvcm1oMi5jbGFzc05hbWUgPSAnZm9ybS1oMic7XG4gICAgZGl2VHdvLmFwcGVuZENoaWxkKGZvcm1oMik7XG5cbiAgICBmb3JtLmNsYXNzTmFtZSA9ICdmb3JtJztcbiAgICBkaXZUd28uYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgICBuYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbmFtZS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmFtZScpO1xuICAgIG5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdOYW1lJyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChuYW1lKTtcblxuICAgIGxhc3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgbGFzdE5hbWUuc2V0QXR0cmlidXRlKCduYW1lJywgJ2xhc3ROYW1lJyk7XG4gICAgbGFzdE5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdMYXN0IE5hbWUnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGxhc3ROYW1lKTtcblxuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgndHlwZScsICdlbWFpbCcpO1xuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgnbmFtZScsICdlbWFpbCcpO1xuICAgIGVtYWlsLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnRW1haWwnKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGVtYWlsKTtcblxuICAgIHN1YmplY3Quc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdNZXNzYWdlLi4uJyk7XG4gICAgc3ViamVjdC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnc3ViamVjdCcpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3ViamVjdCk7XG5cbiAgICBzZW5kQnRuLmNsYXNzTmFtZSA9ICdzZW5kLWJ0bic7XG4gICAgc2VuZEJ0bi5pbm5lckhUTUwgPSAnU2VuZCc7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChzZW5kQnRuKTtcbn1cblxuY29uc3QgbWFrZURpdlRocmVlID0gKCkgPT4ge1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLmlubmVySFRNTCA9ICdBZGRyZXNzJztcbiAgICBoMi5jbGFzc05hbWUgPSAnZGl2LXRocmVlLWgyJztcblxuICAgIGRpdlRocmVlLmFwcGVuZENoaWxkKGgyKTtcblxuICAgIGNvbnN0IHdvcmRzID0gWycxMTAnLCAnRmFudGFzdGljIExhbmUsJywgJ0Nhc3RhaWMsJywgJ0NhbGlmb3JuaWEnXTtcblxuICAgIGNvbnN0IHNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNlcGFyYXRvci5jbGFzc05hbWUgPSAnZGl2LXRocmVlLXNlcGFyYXRvcic7XG4gICAgZGl2VGhyZWUuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBwLmlubmVySFRNTCA9IHdvcmRzW2ldO1xuICAgICAgICBwLmNsYXNzTmFtZSA9ICdkaXYtdGhyZWUtcCc7XG4gICAgICAgIHNlcGFyYXRvci5hcHBlbmRDaGlsZChwKTtcbiAgICB9XG59XG5cbmNvbnN0IHRocmVlRGl2cyA9ICgpID0+IHtcbiAgICBkaXZPbmUuY2xhc3NOYW1lID0gJ3RocmVlLWRpdiBkaXYtb25lJztcbiAgICBkaXZUd28uY2xhc3NOYW1lID0gJ3RocmVlLWRpdiBkaXYtdHdvJztcbiAgICBkaXZUaHJlZS5jbGFzc05hbWUgPSAndGhyZWUtZGl2IGRpdi10aHJlZSc7XG5cbiAgICBkaXZIb2xkZXIuYXBwZW5kQ2hpbGQoZGl2T25lKTtcbiAgICBkaXZIb2xkZXIuYXBwZW5kQ2hpbGQoZGl2VHdvKTtcbiAgICBkaXZIb2xkZXIuYXBwZW5kQ2hpbGQoZGl2VGhyZWUpO1xuXG4gICAgbWFrZURpdk9uZSgpO1xuICAgIG1ha2VEaXZUd28oKTtcbiAgICBtYWtlRGl2VGhyZWUoKTtcbn1cblxuY29uc3Qgc3RhcnRDb250YWN0ID0gKCkgPT4ge1xuICAgIG1haW5Db250YWN0KCk7XG4gICAgY29udGFjdEluZm8oKTtcbn1cblxuY29uc3QgaGFsZkNvbnRhY3QgPSAoKSA9PiB7XG4gICAgY29uc3QgbGlDb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcbiAgICBsaUNvbnRhY3QuY2xhc3NOYW1lID0gJ2FjdGl2ZSc7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuY29uc3QgcmVtb3ZlQ29udGFjdCA9ICgpID0+IHtcbiAgICBjb25zdCBsaUNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFjdCcpO1xuICAgIGxpQ29udGFjdC5jbGFzc05hbWUgPSAnJztcbiAgICBjb250ZW50LnJlbW92ZUNoaWxkKG1haW4pO1xufVxuXG5leHBvcnQge1xuICAgIHN0YXJ0Q29udGFjdCxcbiAgICByZW1vdmVDb250YWN0LFxuICAgIGhhbGZDb250YWN0XG59IiwiaW1wb3J0IHtzdGFydCwgcmVtb3ZlSG9tZSwgaGFsZlN0YXJ0fSBmcm9tICcuL0hvbWUnO1xuaW1wb3J0IHtzdGFydENvbnRhY3QsIHJlbW92ZUNvbnRhY3QsIGhhbGZDb250YWN0fSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHtzdGFydE1lbnUsIGhhbGZNZW51LCByZW1vdmVNZW51fSBmcm9tICcuL01lbnUnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5leHBvcnQgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuY29udGVudC5jbGFzc05hbWUgPSAnY29udGVudCc7XG5ib2R5LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuXG5sZXQgY29udGFjdEluaXRpYWxpemVkID0gZmFsc2U7XG5sZXQgbWVudUluaXRpYWxpemVkID0gZmFsc2U7XG5cblxuXG5zdGFydCgpO1xuXG5jb25zdCBsaUhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZScpO1xuY29uc3QgbGlDb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhY3QnKTtcbmNvbnN0IGxpTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG5cbmxpQ29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gXCIxMDB2aFwiO1xuICAgIGlmIChsaUhvbWUuY2xhc3NOYW1lID09ICdhY3RpdmUnKXtcbiAgICAgICAgcmVtb3ZlSG9tZSgpO1xuICAgIH0gZWxzZSBpZiAobGlNZW51LmNsYXNzTmFtZSA9PSAnYWN0aXZlJyl7XG4gICAgICAgIHJlbW92ZU1lbnUoKTtcbiAgICB9XG5cbiAgICBpZiAoY29udGFjdEluaXRpYWxpemVkID09IGZhbHNlKXtcbiAgICAgICAgc3RhcnRDb250YWN0KCk7XG4gICAgICAgIGxpQ29udGFjdC5jbGFzc05hbWUgPSAnYWN0aXZlJztcbiAgICAgICAgY29udGFjdEluaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBoYWxmQ29udGFjdCgpO1xuICAgIH1cblxuICAgIFxuXG59KTtcblxuXG5saUhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBjb250ZW50LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBpZiAobGlDb250YWN0LmNsYXNzTmFtZSA9PSAnYWN0aXZlJykge1xuICAgICAgICByZW1vdmVDb250YWN0KCk7XG4gICAgfSBlbHNlIGlmIChsaU1lbnUuY2xhc3NOYW1lID09ICdhY3RpdmUnKXtcbiAgICAgICAgcmVtb3ZlTWVudSgpO1xuICAgIH1cblxuICAgIGlmICghKGxpSG9tZS5jbGFzc05hbWUgPT0gJ2FjdGl2ZScpKXtcbiAgICAgICAgaGFsZlN0YXJ0KCk7XG4gICAgfVxuXG5cbn0pO1xuXG5saU1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpe1xuICAgIGNvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gXCIxNTB2aFwiO1xuXG4gICAgaWYgKGhvbWUuY2xhc3NOYW1lID09ICdhY3RpdmUnKXtcbiAgICAgICAgcmVtb3ZlSG9tZSgpO1xuICAgIH0gZWxzZSBpZiAoY29udGFjdC5jbGFzc05hbWUgPT0gJ2FjdGl2ZScpe1xuICAgICAgICByZW1vdmVDb250YWN0KCk7XG4gICAgfVxuXG4gICAgaWYgKG1lbnVJbml0aWFsaXplZCA9PSBmYWxzZSl7XG4gICAgICAgIHN0YXJ0TWVudSgpO1xuICAgICAgICBsaU1lbnUuY2xhc3NOYW1lID0gJ2FjdGl2ZSc7XG4gICAgICAgIG1lbnVJbml0aWFsaXplZCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGFsZk1lbnUoKTtcbiAgICB9XG59KVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9