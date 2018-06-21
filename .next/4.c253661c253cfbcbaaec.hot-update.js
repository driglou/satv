webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/cjs/react.development.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_emotion__ = __webpack_require__("./node_modules/react-emotion/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_emotion__ = __webpack_require__("./node_modules/emotion/dist/index.es.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head__ = __webpack_require__("./node_modules/next/head.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_head__);
var _jsxFileName = "C:\\Users\\Drig\\ietv\\pages\\index.js";

var _templateObject = /*#__PURE__*/ _taggedTemplateLiteral(["\n  body{\n    width: 100wh;\n\theight: 90vh;\n\tbackground: linear-gradient(-45deg, #1f7a25, #5de265, #0a9612, #006006);\n\tbackground-size: 400% 400%;\n    animation: Gradient 15s ease infinite;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n  \n  @-webkit-keyframes Gradient {\n\t0% {\n\t\tbackground-position: 0% 50%\n\t}\n\t50% {\n\t\tbackground-position: 100% 50%\n\t}\n\t100% {\n\t\tbackground-position: 0% 50%\n\t}\n }\n  "]),
    _templateObject2 = /*#__PURE__*/ _taggedTemplateLiteral(["\n    color: white;\n    font-weight: bold;\n    font-size: 75px;\n    font-family: 'Raleway', arial;\n    letter-spacing: 9px;\n"]);



(function () {
  var enterModule = __webpack_require__("./node_modules/react-hot-loader/index.js").enterModule;

  enterModule && enterModule(module);
})();

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




Object(__WEBPACK_IMPORTED_MODULE_2_emotion__["injectGlobal"])(_templateObject);

var Container = function Container(_ref) {
  var className = _ref.className;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, "Islam Expoed TV"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Raleway:600",
    rel: "stylesheet",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, "COMING", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }), "SOON!"));
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
//# sourceMappingURL=4.c253661c253cfbcbaaec.hot-update.js.map