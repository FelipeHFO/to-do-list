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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TaskComponent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useList */ \"(app-client)/./src/hooks/useList.tsx\");\n/* harmony import */ var _Task_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Task.module.css */ \"(app-client)/./src/components/Task/Task.module.css\");\n/* harmony import */ var _Task_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Task_module_css__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction TaskComponent(param) {\n    let { id , name , status , editable  } = param;\n    _s();\n    const { handleChangeTask , handleEditButtonTask  } = (0,_hooks_useList__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [selectedTask, setSelectedask] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        id,\n        name,\n        editable,\n        status\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: editable && !status ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    autoFocus: true,\n                    value: selectedTask.name,\n                    onChange: (event)=>setSelectedask({\n                            ...selectedTask,\n                            name: event.target.value\n                        }),\n                    className: (_Task_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputTask)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\Task\\\\Task.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: ()=>handleChangeTask(selectedTask),\n                    className: \"\".concat((_Task_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn), \" \").concat((_Task_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnSave)),\n                    children: \"save\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\Task\\\\Task.tsx\",\n                    lineNumber: 30,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: ()=>handleEditButtonTask(selectedTask.id),\n                    className: \"\".concat((_Task_module_css__WEBPACK_IMPORTED_MODULE_3___default().btn), \" \").concat((_Task_module_css__WEBPACK_IMPORTED_MODULE_3___default().btnCancel)),\n                    children: \"cancel\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\Task\\\\Task.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\Task\\\\Task.tsx\",\n            lineNumber: 20,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n            children: name\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\Task\\\\Task.tsx\",\n            lineNumber: 46,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\Task\\\\Task.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(TaskComponent, \"KsI1BA+hJIHpa/t3Flg3I1M4qYU=\", false, function() {\n    return [\n        _hooks_useList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = TaskComponent;\nvar _c;\n$RefreshReg$(_c, \"TaskComponent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvVGFzay9UYXNrLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFFaUM7QUFDSztBQUNDO0FBR3hCLFNBQVNHLGNBQWMsS0FBb0MsRUFBRTtRQUF0QyxFQUFFQyxHQUFFLEVBQUVDLEtBQUksRUFBRUMsT0FBTSxFQUFFQyxTQUFRLEVBQVEsR0FBcEM7O0lBQ3BDLE1BQU0sRUFBRUMsaUJBQWdCLEVBQUVDLHFCQUFvQixFQUFFLEdBQUdSLDBEQUFPQTtJQUMxRCxNQUFNLENBQUNTLGNBQWNDLGVBQWUsR0FBR1gsK0NBQVFBLENBQU87UUFDcERJO1FBQ0FDO1FBQ0FFO1FBQ0FEO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ007a0JBQ0VMLFlBQVksQ0FBQ0QsdUJBQ1osOERBQUNNOzs4QkFDQyw4REFBQ0M7b0JBQ0NDLE1BQUs7b0JBQ0xDLFNBQVM7b0JBQ1RDLE9BQU9OLGFBQWFMLElBQUk7b0JBQ3hCWSxVQUFVLENBQUNDLFFBQ1RQLGVBQWU7NEJBQUUsR0FBR0QsWUFBWTs0QkFBRUwsTUFBTWEsTUFBTUMsTUFBTSxDQUFDSCxLQUFLO3dCQUFDO29CQUU3REksV0FBV2xCLG1FQUFnQjs7Ozs7OzhCQUU3Qiw4REFBQ29CO29CQUNDUixNQUFLO29CQUNMUyxTQUFTLElBQU1mLGlCQUFpQkU7b0JBQ2hDVSxXQUFXLEdBQWlCbEIsT0FBZEEsNkRBQVUsRUFBQyxLQUFrQixPQUFmQSxpRUFBYzs4QkFDM0M7Ozs7Ozs4QkFHRCw4REFBQ29CO29CQUNDUixNQUFLO29CQUNMUyxTQUFTLElBQU1kLHFCQUFxQkMsYUFBYU4sRUFBRTtvQkFDbkRnQixXQUFXLEdBQWlCbEIsT0FBZEEsNkRBQVUsRUFBQyxLQUFvQixPQUFqQkEsbUVBQWdCOzhCQUM3Qzs7Ozs7Ozs7Ozs7aUNBS0gsOERBQUN5QjtzQkFBT3RCOzs7OztnQkFDVDs7Ozs7O0FBR1AsQ0FBQztHQTFDdUJGOztRQUM2QkYsc0RBQU9BOzs7S0FEcENFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Rhc2svVGFzay50c3g/YjRiZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB1c2VMaXN0IGZyb20gXCJAL2hvb2tzL3VzZUxpc3RcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9UYXNrLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgVGFzayB9IGZyb20gXCJAL2NvbnRleHRzL0xpc3RDb250ZXh0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUYXNrQ29tcG9uZW50KHsgaWQsIG5hbWUsIHN0YXR1cywgZWRpdGFibGUgfTogVGFzaykge1xyXG4gIGNvbnN0IHsgaGFuZGxlQ2hhbmdlVGFzaywgaGFuZGxlRWRpdEJ1dHRvblRhc2sgfSA9IHVzZUxpc3QoKTtcclxuICBjb25zdCBbc2VsZWN0ZWRUYXNrLCBzZXRTZWxlY3RlZGFza10gPSB1c2VTdGF0ZTxUYXNrPih7XHJcbiAgICBpZCxcclxuICAgIG5hbWUsXHJcbiAgICBlZGl0YWJsZSxcclxuICAgIHN0YXR1cyxcclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIHtlZGl0YWJsZSAmJiAhc3RhdHVzID8gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkVGFzay5uYW1lfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PlxyXG4gICAgICAgICAgICAgIHNldFNlbGVjdGVkYXNrKHsgLi4uc2VsZWN0ZWRUYXNrLCBuYW1lOiBldmVudC50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFRhc2t9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hhbmdlVGFzayhzZWxlY3RlZFRhc2spfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5idG59ICR7c3R5bGVzLmJ0blNhdmV9YH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgc2F2ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0QnV0dG9uVGFzayhzZWxlY3RlZFRhc2suaWQpfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5idG59ICR7c3R5bGVzLmJ0bkNhbmNlbH1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICBjYW5jZWxcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxsYWJlbD57bmFtZX08L2xhYmVsPlxyXG4gICAgICApfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VMaXN0Iiwic3R5bGVzIiwiVGFza0NvbXBvbmVudCIsImlkIiwibmFtZSIsInN0YXR1cyIsImVkaXRhYmxlIiwiaGFuZGxlQ2hhbmdlVGFzayIsImhhbmRsZUVkaXRCdXR0b25UYXNrIiwic2VsZWN0ZWRUYXNrIiwic2V0U2VsZWN0ZWRhc2siLCJkaXYiLCJpbnB1dCIsInR5cGUiLCJhdXRvRm9jdXMiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJjbGFzc05hbWUiLCJpbnB1dFRhc2siLCJidXR0b24iLCJvbkNsaWNrIiwiYnRuIiwiYnRuU2F2ZSIsImJ0bkNhbmNlbCIsImxhYmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Task/Task.tsx\n"));

/***/ })

});