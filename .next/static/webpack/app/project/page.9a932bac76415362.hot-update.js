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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useList */ \"(app-client)/./src/hooks/useList.tsx\");\n/* harmony import */ var _MenuItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItem.module.css */ \"(app-client)/./src/components/MenuItem/MenuItem.module.css\");\n/* harmony import */ var _MenuItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MenuItem_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst MenuItem = (param)=>{\n    let { taskId  } = param;\n    _s();\n    const { handleRemoveTask  } = (0,_hooks_useList__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: ()=>setVisible((prevState)=>!prevState),\n        className: (_MenuItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItem),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/ellipsis-solid.svg\",\n                alt: \"\\xcdcone de 3 pontos, menu de op\\xe7\\xf5es\",\n                width: 20,\n                height: 20\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            visible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_MenuItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().optionsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>handleRemoveTask(taskId),\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, undefined) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MenuItem, \"4mQLYt6eHVK7jKr2nuAmj/DGTIU=\", false, function() {\n    return [\n        _hooks_useList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = MenuItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (/*#__PURE__*/_c1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(MenuItem));\nvar _c, _c1;\n$RefreshReg$(_c, \"MenuItem\");\n$RefreshReg$(_c1, \"%default%\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTWVudUl0ZW0vTWVudUl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBRStCO0FBQ1E7QUFDRDtBQUNLO0FBTTNDLE1BQU1LLFdBQVcsU0FBK0I7UUFBOUIsRUFBRUMsT0FBTSxFQUFpQjs7SUFDekMsTUFBTSxFQUFFQyxpQkFBZ0IsRUFBRSxHQUFHSiwwREFBT0E7SUFDcEMsTUFBTSxDQUFDSyxTQUFTQyxXQUFXLEdBQUdSLCtDQUFRQSxDQUFDLEtBQUs7SUFFNUMscUJBQ0UsOERBQUNTO1FBQ0NDLE1BQUs7UUFDTEMsU0FBUyxJQUFNSCxXQUFXLENBQUNJLFlBQWMsQ0FBQ0E7UUFDMUNDLFdBQVdWLHNFQUFlOzswQkFFMUIsOERBQUNKLG1EQUFLQTtnQkFDSmdCLEtBQUs7Z0JBQ0xDLEtBQUk7Z0JBQ0pDLE9BQU87Z0JBQ1BDLFFBQVE7Ozs7OztZQUVUWCx3QkFDQyw4REFBQ1k7Z0JBQUlOLFdBQVdWLDhFQUF1Qjs7a0NBQ3JDLDhEQUFDTTt3QkFBT0MsTUFBSztrQ0FBUzs7Ozs7O2tDQUN0Qiw4REFBQ0Q7d0JBQU9DLE1BQUs7d0JBQVNDLFNBQVMsSUFBTUwsaUJBQWlCRDtrQ0FBUzs7Ozs7Ozs7Ozs7NEJBSS9ELElBQUk7Ozs7Ozs7QUFHZDtHQTFCTUQ7O1FBQ3lCRixzREFBT0E7OztLQURoQ0U7QUE0Qk4sa0ZBQWVILDJDQUFJQSxDQUFDRyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL01lbnVJdGVtL01lbnVJdGVtLnRzeD8zZmRhIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCBtZW1vIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VMaXN0IGZyb20gXCJAL2hvb2tzL3VzZUxpc3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9NZW51SXRlbS5tb2R1bGUuY3NzXCI7XHJcblxyXG5pbnRlcmZhY2UgTWVudUl0ZW1Qcm9wcyB7XHJcbiAgdGFza0lkOiBudW1iZXI7XHJcbn1cclxuXHJcbmNvbnN0IE1lbnVJdGVtID0gKHsgdGFza0lkIH06IE1lbnVJdGVtUHJvcHMpID0+IHtcclxuICBjb25zdCB7IGhhbmRsZVJlbW92ZVRhc2sgfSA9IHVzZUxpc3QoKTtcclxuICBjb25zdCBbdmlzaWJsZSwgc2V0VmlzaWJsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRWaXNpYmxlKChwcmV2U3RhdGUpID0+ICFwcmV2U3RhdGUpfVxyXG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5tZW51SXRlbX1cclxuICAgID5cclxuICAgICAgPEltYWdlXHJcbiAgICAgICAgc3JjPXtcIi9lbGxpcHNpcy1zb2xpZC5zdmdcIn1cclxuICAgICAgICBhbHQ9XCLDjWNvbmUgZGUgMyBwb250b3MsIG1lbnUgZGUgb3DDp8O1ZXNcIlxyXG4gICAgICAgIHdpZHRoPXsyMH1cclxuICAgICAgICBoZWlnaHQ9ezIwfVxyXG4gICAgICAvPlxyXG4gICAgICB7dmlzaWJsZSA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm9wdGlvbnNDb250YWluZXJ9PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCI+RWRpdDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlVGFzayh0YXNrSWQpfT5cclxuICAgICAgICAgICAgUmVtb3ZlXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSA6IG51bGx9XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgbWVtbyhNZW51SXRlbSk7XHJcbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVN0YXRlIiwibWVtbyIsInVzZUxpc3QiLCJzdHlsZXMiLCJNZW51SXRlbSIsInRhc2tJZCIsImhhbmRsZVJlbW92ZVRhc2siLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwicHJldlN0YXRlIiwiY2xhc3NOYW1lIiwibWVudUl0ZW0iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsIm9wdGlvbnNDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/MenuItem/MenuItem.tsx\n"));

/***/ })

});