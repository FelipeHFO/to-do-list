"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/project/page",{

/***/ "(app-client)/./src/components/MenuItem/MenuItem.tsx":
/*!**********************************************!*\
  !*** ./src/components/MenuItem/MenuItem.tsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MenuItem_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem.module.css */ \"(app-client)/./src/components/MenuItem/MenuItem.module.css\");\n/* harmony import */ var _MenuItem_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_MenuItem_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MenuItem(param) {\n    let { taskId , list , setList  } = param;\n    _s();\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const handleRemoveItem = ()=>{\n        setList(list.filter((item)=>item.id !== taskId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: ()=>setVisible((prevState)=>!prevState),\n        className: (_MenuItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().menuItem),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/ellipsis-solid.svg\",\n                alt: \"\\xcdcone de 3 pontos, menu de op\\xe7\\xf5es\",\n                width: 20,\n                height: 20\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            visible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_MenuItem_module_css__WEBPACK_IMPORTED_MODULE_3___default().optionsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: handleRemoveItem,\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n                lineNumber: 34,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n_s(MenuItem, \"OGsIWlGlwYpVUqIrDReJ1GWx7rw=\");\n_c = MenuItem;\nvar _c;\n$RefreshReg$(_c, \"MenuItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTWVudUl0ZW0vTWVudUl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFK0I7QUFDWTtBQUNnQjtBQVM1QyxTQUFTRyxTQUFTLEtBQXdDLEVBQUU7UUFBMUMsRUFBRUMsT0FBTSxFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBaUIsR0FBeEM7O0lBQy9CLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHTiwrQ0FBUUEsQ0FBQyxLQUFLO0lBRTVDLE1BQU1PLG1CQUFtQixJQUFNO1FBQzdCSCxRQUFRRCxLQUFLSyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsRUFBRSxLQUFLUjtJQUM1QztJQUVBLHFCQUNFLDhEQUFDUztRQUNDQyxNQUFLO1FBQ0xDLFNBQVMsSUFBTVAsV0FBVyxDQUFDUSxZQUFjLENBQUNBO1FBQzFDQyxXQUFXaEIsc0VBQWU7OzBCQUUxQiw4REFBQ0QsbURBQUtBO2dCQUNKbUIsS0FBSztnQkFDTEMsS0FBSTtnQkFDSkMsT0FBTztnQkFDUEMsUUFBUTs7Ozs7O1lBRVRmLHdCQUNDLDhEQUFDZ0I7Z0JBQUlOLFdBQVdoQiw4RUFBdUI7O2tDQUNyQyw4REFBQ1k7d0JBQU9DLE1BQUs7a0NBQVM7Ozs7OztrQ0FDdEIsOERBQUNEO3dCQUFPQyxNQUFLO3dCQUFTQyxTQUFTTjtrQ0FBa0I7Ozs7Ozs7Ozs7O3VCQUlqRCxJQUFJOzs7Ozs7O0FBR2QsQ0FBQztHQTdCdUJOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01lbnVJdGVtL01lbnVJdGVtLnRzeD8zZmRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vTWVudUl0ZW0ubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBEaXNwYXRjaCwgU2V0U3RhdGVBY3Rpb24sIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiQC9jb250ZXh0cy9MaXN0Q29udGV4dFwiO1xyXG5cclxuaW50ZXJmYWNlIE1lbnVJdGVtUHJvcHMge1xyXG4gIHRhc2tJZDogbnVtYmVyO1xyXG4gIGxpc3Q6IEFycmF5PFRhc2s+O1xyXG4gIHNldExpc3Q6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFRhc2tbXT4+O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51SXRlbSh7IHRhc2tJZCwgbGlzdCwgc2V0TGlzdCB9OiBNZW51SXRlbVByb3BzKSB7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVJdGVtID0gKCkgPT4ge1xyXG4gICAgc2V0TGlzdChsaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gdGFza0lkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldFZpc2libGUoKHByZXZTdGF0ZSkgPT4gIXByZXZTdGF0ZSl9XHJcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1lbnVJdGVtfVxyXG4gICAgPlxyXG4gICAgICA8SW1hZ2VcclxuICAgICAgICBzcmM9e1wiL2VsbGlwc2lzLXNvbGlkLnN2Z1wifVxyXG4gICAgICAgIGFsdD1cIsONY29uZSBkZSAzIHBvbnRvcywgbWVudSBkZSBvcMOnw7Vlc1wiXHJcbiAgICAgICAgd2lkdGg9ezIwfVxyXG4gICAgICAgIGhlaWdodD17MjB9XHJcbiAgICAgIC8+XHJcbiAgICAgIHt2aXNpYmxlID8gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3B0aW9uc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIj5FZGl0PC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtoYW5kbGVSZW1vdmVJdGVtfT5cclxuICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInN0eWxlcyIsInVzZVN0YXRlIiwiTWVudUl0ZW0iLCJ0YXNrSWQiLCJsaXN0Iiwic2V0TGlzdCIsInZpc2libGUiLCJzZXRWaXNpYmxlIiwiaGFuZGxlUmVtb3ZlSXRlbSIsImZpbHRlciIsIml0ZW0iLCJpZCIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwicHJldlN0YXRlIiwiY2xhc3NOYW1lIiwibWVudUl0ZW0iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsIm9wdGlvbnNDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/MenuItem/MenuItem.tsx\n"));

/***/ })

});