webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.es.js");
var _jsxFileName = "C:\\Users\\Drig\\ietv\\pages\\index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  body{\n    width: 100wh;\n\theight: 90vh;\n\tbackground: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);\n\tbackground-size: 400% 400%;\n\tanimation: Gradient 15s ease infinite;\n  }"]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    color: hotpink;\n"]);



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["injectGlobal"])(_templateObject);

var Container = function Container(_ref) {
  var className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, "T.E.S.T");
};

var Index = Object(__WEBPACK_IMPORTED_MODULE_1_react_emotion__["a" /* default */])(Container)(_templateObject2);
var _default = Index;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = __webpack_require__("./node_modules/react-hot-loader/index.js").default;

  var leaveModule = __webpack_require__("./node_modules/react-hot-loader/index.js").leaveModule;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Container, "Container", "C:\\Users\\Drig\\ietv\\pages\\index.js");
  reactHotLoader.register(Index, "Index", "C:\\Users\\Drig\\ietv\\pages\\index.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Drig\\ietv\\pages\\index.js");
  leaveModule(module);
})();

;
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.7ce5159b8a57de8872ba.hot-update.js.map