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

/***/ "(app-client)/./src/components/Task/Task.tsx":
/*!**************************************!*\
  !*** ./src/components/Task/Task.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TaskComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/hooks/useList */ \"(app-client)/./src/hooks/useList.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Task_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task.module.css */ \"(app-client)/./src/components/Task/Task.module.css\");\n/* harmony import */ var _Task_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Task_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction TaskComponent(param) {\n    let { taskId  } = param;\n    _s();\n    const { list , setList , handleChangeTask  } = (0,_hooks_useList__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    let selectedTask;\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useLayoutEffect)(()=>{\n        selectedTask = list.filter((task)=>task.id === taskId)[0];\n    }, [\n        list\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: selectedTask.editable && !status ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    autoFocus: true,\n                    value: selectedTask.name,\n                    onChange: (event)=>handleChangeTask(event.target.value),\n                    className: (_Task_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputTask)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\Task\\\\Task.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"\".concat((_Task_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn), \" \").concat((_Task_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnSave)),\n                    children: \"save\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\Task\\\\Task.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    className: \"\".concat((_Task_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn), \" \").concat((_Task_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnCancel)),\n                    children: \"cancel\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\Task\\\\Task.tsx\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\Task\\\\Task.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: name\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\Task\\\\Task.tsx\",\n            lineNumber: 36,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\Task\\\\Task.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(TaskComponent, \"6mrq21Uewq1eml4iUAflabAd9cY=\", false, function() {\n    return [\n        _hooks_useList__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = TaskComponent;\nvar _c;\n$RefreshReg$(_c, \"TaskComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvVGFzay9UYXNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBc0M7QUFDRTtBQUNEO0FBTXhCLFNBQVNHLGNBQWMsS0FBOEIsRUFBRTtRQUFoQyxFQUFFQyxPQUFNLEVBQXNCLEdBQTlCOztJQUNwQyxNQUFNLEVBQUVDLEtBQUksRUFBRUMsUUFBTyxFQUFFQyxpQkFBZ0IsRUFBRSxHQUFHUCwwREFBT0E7SUFDbkQsSUFBSVE7SUFFSlAsc0RBQWVBLENBQUMsSUFBTTtRQUNwQk8sZUFBZUgsS0FBS0ksTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS1AsT0FBTyxDQUFDLEVBQUU7SUFDN0QsR0FBRztRQUFDQztLQUFLO0lBRVQscUJBQ0UsOERBQUNPO2tCQUNFSixhQUFhSyxRQUFRLElBQUksQ0FBQ0MsdUJBQ3pCLDhEQUFDRjs7OEJBQ0MsOERBQUNHO29CQUNDQyxNQUFLO29CQUNMQyxTQUFTO29CQUNUQyxPQUFPVixhQUFhVyxJQUFJO29CQUN4QkMsVUFBVSxDQUFDQyxRQUFVZCxpQkFBaUJjLE1BQU1DLE1BQU0sQ0FBQ0osS0FBSztvQkFDeERLLFdBQVdyQixtRUFBZ0I7Ozs7Ozs4QkFFN0IsOERBQUN1QjtvQkFBT1QsTUFBSztvQkFBU08sV0FBVyxHQUFpQnJCLE9BQWRBLDZEQUFVLEVBQUMsS0FBa0IsT0FBZkEsaUVBQWM7OEJBQUk7Ozs7Ozs4QkFHcEUsOERBQUN1QjtvQkFBT1QsTUFBSztvQkFBU08sV0FBVyxHQUFpQnJCLE9BQWRBLDZEQUFVLEVBQUMsS0FBb0IsT0FBakJBLG1FQUFnQjs4QkFBSTs7Ozs7Ozs7Ozs7aUNBS3hFLDhEQUFDMkI7c0JBQU9WOzs7OztnQkFDVDs7Ozs7O0FBR1AsQ0FBQztHQS9CdUJoQjs7UUFDc0JILHNEQUFPQTs7O0tBRDdCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9UYXNrL1Rhc2sudHN4P2I0YmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZUxpc3QgZnJvbSBcIkAvaG9va3MvdXNlTGlzdFwiO1xyXG5pbXBvcnQgeyB1c2VMYXlvdXRFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UYXNrLm1vZHVsZS5jc3NcIjtcclxuXHJcbmludGVyZmFjZSBUYXNrQ29tcG9uZW50UHJvcHMge1xyXG4gIHRhc2tJZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrQ29tcG9uZW50KHsgdGFza0lkIH06IFRhc2tDb21wb25lbnRQcm9wcykge1xyXG4gIGNvbnN0IHsgbGlzdCwgc2V0TGlzdCwgaGFuZGxlQ2hhbmdlVGFzayB9ID0gdXNlTGlzdCgpO1xyXG4gIGxldCBzZWxlY3RlZFRhc2s7XHJcblxyXG4gIHVzZUxheW91dEVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZWxlY3RlZFRhc2sgPSBsaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKVswXTtcclxuICB9LCBbbGlzdF0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAge3NlbGVjdGVkVGFzay5lZGl0YWJsZSAmJiAhc3RhdHVzID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGFzay5uYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBoYW5kbGVDaGFuZ2VUYXNrKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0VGFza31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9e2Ake3N0eWxlcy5idG59ICR7c3R5bGVzLmJ0blNhdmV9YH0+XHJcbiAgICAgICAgICAgIHNhdmVcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuYnRufSAke3N0eWxlcy5idG5DYW5jZWx9YH0+XHJcbiAgICAgICAgICAgIGNhbmNlbFxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPGxhYmVsPntuYW1lfTwvbGFiZWw+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VMaXN0IiwidXNlTGF5b3V0RWZmZWN0Iiwic3R5bGVzIiwiVGFza0NvbXBvbmVudCIsInRhc2tJZCIsImxpc3QiLCJzZXRMaXN0IiwiaGFuZGxlQ2hhbmdlVGFzayIsInNlbGVjdGVkVGFzayIsImZpbHRlciIsInRhc2siLCJpZCIsImRpdiIsImVkaXRhYmxlIiwic3RhdHVzIiwiaW5wdXQiLCJ0eXBlIiwiYXV0b0ZvY3VzIiwidmFsdWUiLCJuYW1lIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsImNsYXNzTmFtZSIsImlucHV0VGFzayIsImJ1dHRvbiIsImJ0biIsImJ0blNhdmUiLCJidG5DYW5jZWwiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Task/Task.tsx\n"));

/***/ })

});