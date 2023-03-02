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

/***/ "(app-client)/./src/app/project/page.tsx":
/*!**********************************!*\
  !*** ./src/app/project/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useList */ \"(app-client)/./src/hooks/useList.tsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/project/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MenuItem/MenuItem */ \"(app-client)/./src/components/MenuItem/MenuItem.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Project() {\n    _s();\n    const { list , setList , handleCheckTask  } = (0,_hooks_useList__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [taskName, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const addTask = (event)=>{\n        event.preventDefault();\n        let newTask = {\n            id: list.length + 1,\n            name: taskName,\n            status: false,\n            editable: false\n        };\n        setList([\n            ...list,\n            newTask\n        ]);\n        setTaskName(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: addTask,\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().taskForm),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"task\",\n                        type: \"text\",\n                        name: \"task\",\n                        required: true,\n                        placeholder: \"Add a new task\",\n                        value: taskName,\n                        onChange: (event)=>setTaskName(event.target.value),\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputTask)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().addTaskButton),\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().taskListContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"My Tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    list.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().taskList),\n                        children: list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().taskItem), \" \").concat(item.status ? (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().taskCompleted) : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        onClick: ()=>handleCheckTask(item.id),\n                                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().checkButton)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        taskId: item.id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().listEmpty),\n                        children: \"Empty list...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"sitX4d5G+HFk1yLOsZ5KPfi76os=\", false, function() {\n    return [\n        _hooks_useList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9qZWN0L3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFTTUE7QUFQMkI7QUFDSztBQUNDO0FBR2U7QUFJdkMsU0FBU0ssVUFBVTs7SUFDaEMsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRUMsZ0JBQWUsRUFBRSxHQUFHTiwwREFBT0E7SUFDbEQsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1VLFVBQVUsQ0FBQ0MsUUFBNEM7UUFDM0RBLE1BQU1DLGNBQWM7UUFDcEIsSUFBSUMsVUFBZ0I7WUFDbEJDLElBQUlULEtBQUtVLE1BQU0sR0FBRztZQUNsQkMsTUFBTVI7WUFDTlMsUUFBUSxLQUFLO1lBQ2JDLFVBQVUsS0FBSztRQUNqQjtRQUVBWixRQUFRO2VBQUlEO1lBQU1RO1NBQVE7UUFDMUJKLFlBQVk7SUFDZDtJQUVBLHFCQUNFLDhEQUFDVTtRQUFLQyxXQUFXbEIsOERBQVc7OzBCQUMxQiw4REFBQ21CO2dCQUFLQyxVQUFVWjtnQkFBU1UsV0FBV2xCLGtFQUFlOztrQ0FDakQsOERBQUNzQjt3QkFDQ1YsSUFBRzt3QkFDSFcsTUFBSzt3QkFDTFQsTUFBSzt3QkFDTFUsUUFBUTt3QkFDUkMsYUFBWTt3QkFDWkMsT0FBT3BCO3dCQUNQcUIsVUFBVSxDQUFDbEIsUUFBVUYsWUFBWUUsTUFBTW1CLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDbkRSLFdBQVdsQixtRUFBZ0I7Ozs7OztrQ0FFN0IsOERBQUM4Qjt3QkFBT1AsTUFBSzt3QkFBU0wsV0FBV2xCLHVFQUFvQjtrQ0FBRTs7Ozs7Ozs7Ozs7OzBCQUt6RCw4REFBQ2dDO2dCQUFJZCxXQUFXbEIsMkVBQXdCOztrQ0FDdEMsOERBQUNrQztrQ0FBRzs7Ozs7O29CQUNIL0IsS0FBS1UsTUFBTSxHQUFHLGtCQUNiLDhEQUFDc0I7d0JBQUdqQixXQUFXbEIsa0VBQWU7a0NBQzNCRyxLQUFLa0MsR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDQztnQ0FFQ3JCLFdBQVcsR0FDVG9CLE9BRFl0QyxrRUFBZSxFQUFDLEtBRTdCLE9BRENzQyxLQUFLdkIsTUFBTSxHQUFHZix1RUFBb0IsR0FBRyxFQUFFOztrREFHekMsOERBQUNzQjt3Q0FDQ0MsTUFBSzt3Q0FDTG1CLFNBQVMsSUFBTXJDLGdCQUFnQmlDLEtBQUsxQixFQUFFO3dDQUN0Q00sV0FBV2xCLHFFQUFrQjs7Ozs7O2tEQUUvQiw4REFBQzRDO2tEQUFNTixLQUFLeEIsSUFBSTs7Ozs7O2tEQUNoQiw4REFBQ2IscUVBQVFBO3dDQUFDNEMsUUFBUVAsS0FBSzFCLEVBQUU7Ozs7Ozs7K0JBWHBCMEIsS0FBSzFCLEVBQUU7Ozs7Ozs7Ozs2Q0FnQmxCLDhEQUFDa0M7d0JBQUU1QixXQUFXbEIsbUVBQWdCO2tDQUFFOzs7Ozs0QkFDakM7Ozs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0dBOUR1QkU7O1FBQ3FCSCxzREFBT0E7OztLQUQ1QkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9qZWN0L3BhZ2UudHN4Pzc1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlTGlzdCBmcm9tIFwiQC9ob29rcy91c2VMaXN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiQC9jb250ZXh0cy9MaXN0Q29udGV4dFwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy9NZW51SXRlbS9NZW51SXRlbVwiO1xyXG5cclxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCgpIHtcclxuICBjb25zdCB7IGxpc3QsIHNldExpc3QsIGhhbmRsZUNoZWNrVGFzayB9ID0gdXNlTGlzdCgpO1xyXG4gIGNvbnN0IFt0YXNrTmFtZSwgc2V0VGFza05hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGFkZFRhc2sgPSAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IG5ld1Rhc2s6IFRhc2sgPSB7XHJcbiAgICAgIGlkOiBsaXN0Lmxlbmd0aCArIDEsXHJcbiAgICAgIG5hbWU6IHRhc2tOYW1lLFxyXG4gICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIHNldExpc3QoWy4uLmxpc3QsIG5ld1Rhc2tdKTtcclxuICAgIHNldFRhc2tOYW1lKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2FkZFRhc2t9IGNsYXNzTmFtZT17c3R5bGVzLnRhc2tGb3JtfT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwidGFza1wiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwidGFza1wiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBuZXcgdGFza1wiXHJcbiAgICAgICAgICB2YWx1ZT17dGFza05hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRUYXNrTmFtZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRUYXNrfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFza0J1dHRvbn0+XHJcbiAgICAgICAgICBBZGRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50YXNrTGlzdENvbnRhaW5lcn0+XHJcbiAgICAgICAgPGgxPk15IFRhc2tzPC9oMT5cclxuICAgICAgICB7bGlzdC5sZW5ndGggPiAwID8gKFxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnRhc2tMaXN0fT5cclxuICAgICAgICAgICAge2xpc3QubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy50YXNrSXRlbX0gJHtcclxuICAgICAgICAgICAgICAgICAgaXRlbS5zdGF0dXMgPyBzdHlsZXMudGFza0NvbXBsZXRlZCA6IFwiXCJcclxuICAgICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDaGVja1Rhc2soaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmNoZWNrQnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLm5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHRhc2tJZD17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RFbXB0eX0+RW1wdHkgbGlzdC4uLjwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJpbnRlciIsInVzZVN0YXRlIiwidXNlTGlzdCIsInN0eWxlcyIsIk1lbnVJdGVtIiwiUHJvamVjdCIsImxpc3QiLCJzZXRMaXN0IiwiaGFuZGxlQ2hlY2tUYXNrIiwidGFza05hbWUiLCJzZXRUYXNrTmFtZSIsImFkZFRhc2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV3VGFzayIsImlkIiwibGVuZ3RoIiwibmFtZSIsInN0YXR1cyIsImVkaXRhYmxlIiwibWFpbiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsInRhc2tGb3JtIiwiaW5wdXQiLCJ0eXBlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJpbnB1dFRhc2siLCJidXR0b24iLCJhZGRUYXNrQnV0dG9uIiwiZGl2IiwidGFza0xpc3RDb250YWluZXIiLCJoMSIsInVsIiwidGFza0xpc3QiLCJtYXAiLCJpdGVtIiwibGkiLCJ0YXNrSXRlbSIsInRhc2tDb21wbGV0ZWQiLCJvbkNsaWNrIiwiY2hlY2tCdXR0b24iLCJzcGFuIiwidGFza0lkIiwicCIsImxpc3RFbXB0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/project/page.tsx\n"));

/***/ })

});