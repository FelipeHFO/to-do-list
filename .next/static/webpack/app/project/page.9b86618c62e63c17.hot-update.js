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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useList */ \"(app-client)/./src/hooks/useList.tsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/project/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MenuItem/MenuItem */ \"(app-client)/./src/components/MenuItem/MenuItem.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Project() {\n    _s();\n    const { list , setList , handleCheckTask  } = (0,_hooks_useList__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [taskName, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const addTask = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        event.preventDefault();\n        let newTask = {\n            id: list.length + 1,\n            name: taskName,\n            status: false,\n            editable: false\n        };\n        setList([\n            ...list,\n            newTask\n        ]);\n        setTaskName(\"\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: addTask,\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().taskForm),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"task\",\n                        type: \"text\",\n                        name: \"task\",\n                        required: true,\n                        placeholder: \"Add a new task\",\n                        value: taskName,\n                        onChange: (event)=>setTaskName(event.target.value),\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().inputTask)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().addTaskButton),\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().taskListContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"My Tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    list.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().taskList),\n                        children: list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().taskItem), \" \").concat(item.status ? (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().taskCompleted) : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        onClick: ()=>handleCheckTask(item.id),\n                                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().checkButton)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        taskId: item.id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_4___default().listEmpty),\n                        children: \"Empty list...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"PKBrIOIxyo0EYq9orEXn1dufudA=\", false, function() {\n    return [\n        _hooks_useList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9qZWN0L3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFTTUE7QUFQd0M7QUFDUjtBQUNDO0FBR2U7QUFJdkMsU0FBU00sVUFBVTs7SUFDaEMsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRUMsZ0JBQWUsRUFBRSxHQUFHTiwwREFBT0E7SUFDbEQsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1VLFVBQVVYLGtEQUFXQSxDQUFDLENBQUNZLFFBQTRDO1FBQ3ZFQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUlDLFVBQWdCO1lBQ2xCQyxJQUFJVCxLQUFLVSxNQUFNLEdBQUc7WUFDbEJDLE1BQU1SO1lBQ05TLFFBQVEsS0FBSztZQUNiQyxVQUFVLEtBQUs7UUFDakI7UUFFQVosUUFBUTtlQUFJRDtZQUFNUTtTQUFRO1FBQzFCSixZQUFZO0lBQ2QsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNVO1FBQUtDLFdBQVdsQiw4REFBVzs7MEJBQzFCLDhEQUFDbUI7Z0JBQUtDLFVBQVVaO2dCQUFTVSxXQUFXbEIsa0VBQWU7O2tDQUNqRCw4REFBQ3NCO3dCQUNDVixJQUFHO3dCQUNIVyxNQUFLO3dCQUNMVCxNQUFLO3dCQUNMVSxRQUFRO3dCQUNSQyxhQUFZO3dCQUNaQyxPQUFPcEI7d0JBQ1BxQixVQUFVLENBQUNsQixRQUFVRixZQUFZRSxNQUFNbUIsTUFBTSxDQUFDRixLQUFLO3dCQUNuRFIsV0FBV2xCLG1FQUFnQjs7Ozs7O2tDQUU3Qiw4REFBQzhCO3dCQUFPUCxNQUFLO3dCQUFTTCxXQUFXbEIsdUVBQW9CO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBS3pELDhEQUFDZ0M7Z0JBQUlkLFdBQVdsQiwyRUFBd0I7O2tDQUN0Qyw4REFBQ2tDO2tDQUFHOzs7Ozs7b0JBQ0gvQixLQUFLVSxNQUFNLEdBQUcsa0JBQ2IsOERBQUNzQjt3QkFBR2pCLFdBQVdsQixrRUFBZTtrQ0FDM0JHLEtBQUtrQyxHQUFHLENBQUMsQ0FBQ0MscUJBQ1QsOERBQUNDO2dDQUVDckIsV0FBVyxHQUNUb0IsT0FEWXRDLGtFQUFlLEVBQUMsS0FFN0IsT0FEQ3NDLEtBQUt2QixNQUFNLEdBQUdmLHVFQUFvQixHQUFHLEVBQUU7O2tEQUd6Qyw4REFBQ3NCO3dDQUNDQyxNQUFLO3dDQUNMbUIsU0FBUyxJQUFNckMsZ0JBQWdCaUMsS0FBSzFCLEVBQUU7d0NBQ3RDTSxXQUFXbEIscUVBQWtCOzs7Ozs7a0RBRS9CLDhEQUFDNEM7a0RBQU1OLEtBQUt4QixJQUFJOzs7Ozs7a0RBQ2hCLDhEQUFDYixxRUFBUUE7d0NBQUM0QyxRQUFRUCxLQUFLMUIsRUFBRTs7Ozs7OzsrQkFYcEIwQixLQUFLMUIsRUFBRTs7Ozs7Ozs7OzZDQWdCbEIsOERBQUNrQzt3QkFBRTVCLFdBQVdsQixtRUFBZ0I7a0NBQUU7Ozs7OzRCQUNqQzs7Ozs7Ozs7Ozs7OztBQUlULENBQUM7R0E5RHVCRTs7UUFDcUJILHNEQUFPQTs7O0tBRDVCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2plY3QvcGFnZS50c3g/NzU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgdXNlTGlzdCBmcm9tIFwiQC9ob29rcy91c2VMaXN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XHJcbmltcG9ydCB7IFRhc2sgfSBmcm9tIFwiQC9jb250ZXh0cy9MaXN0Q29udGV4dFwiO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSBcIkAvY29tcG9uZW50cy9NZW51SXRlbS9NZW51SXRlbVwiO1xyXG5cclxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdCgpIHtcclxuICBjb25zdCB7IGxpc3QsIHNldExpc3QsIGhhbmRsZUNoZWNrVGFzayB9ID0gdXNlTGlzdCgpO1xyXG4gIGNvbnN0IFt0YXNrTmFtZSwgc2V0VGFza05hbWVdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IGFkZFRhc2sgPSB1c2VDYWxsYmFjaygoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IG5ld1Rhc2s6IFRhc2sgPSB7XHJcbiAgICAgIGlkOiBsaXN0Lmxlbmd0aCArIDEsXHJcbiAgICAgIG5hbWU6IHRhc2tOYW1lLFxyXG4gICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIHNldExpc3QoWy4uLmxpc3QsIG5ld1Rhc2tdKTtcclxuICAgIHNldFRhc2tOYW1lKFwiXCIpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17YWRkVGFza30gY2xhc3NOYW1lPXtzdHlsZXMudGFza0Zvcm19PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJ0YXNrXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJ0YXNrXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIG5ldyB0YXNrXCJcclxuICAgICAgICAgIHZhbHVlPXt0YXNrTmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRhc2tOYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFRhc2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYXNrQnV0dG9ufT5cclxuICAgICAgICAgIEFkZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhc2tMaXN0Q29udGFpbmVyfT5cclxuICAgICAgICA8aDE+TXkgVGFza3M8L2gxPlxyXG4gICAgICAgIHtsaXN0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudGFza0xpc3R9PlxyXG4gICAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhc2tJdGVtfSAke1xyXG4gICAgICAgICAgICAgICAgICBpdGVtLnN0YXR1cyA/IHN0eWxlcy50YXNrQ29tcGxldGVkIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoZWNrVGFzayhpdGVtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tCdXR0b259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdGFza0lkPXtpdGVtLmlkfSAvPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMubGlzdEVtcHR5fT5FbXB0eSBsaXN0Li4uPC9wPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImludGVyIiwidXNlQ2FsbGJhY2siLCJ1c2VTdGF0ZSIsInVzZUxpc3QiLCJzdHlsZXMiLCJNZW51SXRlbSIsIlByb2plY3QiLCJsaXN0Iiwic2V0TGlzdCIsImhhbmRsZUNoZWNrVGFzayIsInRhc2tOYW1lIiwic2V0VGFza05hbWUiLCJhZGRUYXNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm5ld1Rhc2siLCJpZCIsImxlbmd0aCIsIm5hbWUiLCJzdGF0dXMiLCJlZGl0YWJsZSIsIm1haW4iLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJ0YXNrRm9ybSIsImlucHV0IiwidHlwZSIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwiaW5wdXRUYXNrIiwiYnV0dG9uIiwiYWRkVGFza0J1dHRvbiIsImRpdiIsInRhc2tMaXN0Q29udGFpbmVyIiwiaDEiLCJ1bCIsInRhc2tMaXN0IiwibWFwIiwiaXRlbSIsImxpIiwidGFza0l0ZW0iLCJ0YXNrQ29tcGxldGVkIiwib25DbGljayIsImNoZWNrQnV0dG9uIiwic3BhbiIsInRhc2tJZCIsInAiLCJsaXN0RW1wdHkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/project/page.tsx\n"));

/***/ })

});