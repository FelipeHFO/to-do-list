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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/hooks/useList */ \"(app-client)/./src/hooks/useList.tsx\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/project/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MenuItem/MenuItem */ \"(app-client)/./src/components/MenuItem/MenuItem.tsx\");\n/* harmony import */ var _components_Task_Task__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Task/Task */ \"(app-client)/./src/components/Task/Task.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Project() {\n    _s();\n    const { list , setList , handleCheckTask  } = (0,_hooks_useList__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    const [taskName, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const addTask = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((event)=>{\n        event.preventDefault();\n        let newTask = {\n            id: list.length + 1,\n            name: taskName,\n            status: false,\n            editable: false\n        };\n        setList([\n            ...list,\n            newTask\n        ]);\n        setTaskName(\"\");\n    }, [\n        list,\n        setList,\n        taskName\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: addTask,\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().taskForm),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"task\",\n                        type: \"text\",\n                        name: \"task\",\n                        required: true,\n                        placeholder: \"Add a new task\",\n                        value: taskName,\n                        onChange: (event)=>setTaskName(event.target.value),\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().inputTask)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().addTaskButton),\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().taskListContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"My Tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    list.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().taskList),\n                        children: list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().taskItem), \" \").concat(item.status ? (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().taskCompleted) : \"\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        onClick: ()=>handleCheckTask(item.id),\n                                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().checkButton)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Task_Task__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        id: item.id,\n                                        name: item.name,\n                                        status: item.status,\n                                        editable: item.editable\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_MenuItem_MenuItem__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                        taskId: item.id\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                lineNumber: 56,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_5___default().listEmpty),\n                        children: \"Empty list...\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"PKBrIOIxyo0EYq9orEXn1dufudA=\", false, function() {\n    return [\n        _hooks_useList__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n    ];\n});\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9qZWN0L3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVU1BO0FBUndDO0FBQ1I7QUFDQztBQUdlO0FBQ0g7QUFJcEMsU0FBU08sVUFBVTs7SUFDaEMsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRUMsZ0JBQWUsRUFBRSxHQUFHUCwwREFBT0E7SUFDbEQsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1XLFVBQVVaLGtEQUFXQSxDQUN6QixDQUFDYSxRQUE0QztRQUMzQ0EsTUFBTUMsY0FBYztRQUNwQixJQUFJQyxVQUFnQjtZQUNsQkMsSUFBSVQsS0FBS1UsTUFBTSxHQUFHO1lBQ2xCQyxNQUFNUjtZQUNOUyxRQUFRLEtBQUs7WUFDYkMsVUFBVSxLQUFLO1FBQ2pCO1FBRUFaLFFBQVE7ZUFBSUQ7WUFBTVE7U0FBUTtRQUMxQkosWUFBWTtJQUNkLEdBQ0E7UUFBQ0o7UUFBTUM7UUFBU0U7S0FBUztJQUczQixxQkFDRSw4REFBQ1c7UUFBS0MsV0FBV25CLDhEQUFXOzswQkFDMUIsOERBQUNvQjtnQkFBS0MsVUFBVVo7Z0JBQVNVLFdBQVduQixrRUFBZTs7a0NBQ2pELDhEQUFDdUI7d0JBQ0NWLElBQUc7d0JBQ0hXLE1BQUs7d0JBQ0xULE1BQUs7d0JBQ0xVLFFBQVE7d0JBQ1JDLGFBQVk7d0JBQ1pDLE9BQU9wQjt3QkFDUHFCLFVBQVUsQ0FBQ2xCLFFBQVVGLFlBQVlFLE1BQU1tQixNQUFNLENBQUNGLEtBQUs7d0JBQ25EUixXQUFXbkIsbUVBQWdCOzs7Ozs7a0NBRTdCLDhEQUFDK0I7d0JBQU9QLE1BQUs7d0JBQVNMLFdBQVduQix1RUFBb0I7a0NBQUU7Ozs7Ozs7Ozs7OzswQkFLekQsOERBQUNpQztnQkFBSWQsV0FBV25CLDJFQUF3Qjs7a0NBQ3RDLDhEQUFDbUM7a0NBQUc7Ozs7OztvQkFDSC9CLEtBQUtVLE1BQU0sR0FBRyxrQkFDYiw4REFBQ3NCO3dCQUFHakIsV0FBV25CLGtFQUFlO2tDQUMzQkksS0FBS2tDLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ0M7Z0NBRUNyQixXQUFXLEdBQ1RvQixPQURZdkMsa0VBQWUsRUFBQyxLQUU3QixPQURDdUMsS0FBS3ZCLE1BQU0sR0FBR2hCLHVFQUFvQixHQUFHLEVBQUU7O2tEQUd6Qyw4REFBQ3VCO3dDQUNDQyxNQUFLO3dDQUNMbUIsU0FBUyxJQUFNckMsZ0JBQWdCaUMsS0FBSzFCLEVBQUU7d0NBQ3RDTSxXQUFXbkIscUVBQWtCOzs7Ozs7a0RBRS9CLDhEQUFDRSw2REFBYUE7d0NBQ1pXLElBQUkwQixLQUFLMUIsRUFBRTt3Q0FDWEUsTUFBTXdCLEtBQUt4QixJQUFJO3dDQUNmQyxRQUFRdUIsS0FBS3ZCLE1BQU07d0NBQ25CQyxVQUFVc0IsS0FBS3RCLFFBQVE7Ozs7OztrREFFekIsOERBQUNoQixxRUFBUUE7d0NBQUM0QyxRQUFRTixLQUFLMUIsRUFBRTs7Ozs7OzsrQkFoQnBCMEIsS0FBSzFCLEVBQUU7Ozs7Ozs7Ozs2Q0FxQmxCLDhEQUFDaUM7d0JBQUUzQixXQUFXbkIsbUVBQWdCO2tDQUFFOzs7Ozs0QkFDakM7Ozs7Ozs7Ozs7Ozs7QUFJVCxDQUFDO0dBdEV1Qkc7O1FBQ3FCSixzREFBT0E7OztLQUQ1QkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9qZWN0L3BhZ2UudHN4Pzc1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUxpc3QgZnJvbSBcIkAvaG9va3MvdXNlTGlzdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJAbmV4dC9mb250L2dvb2dsZVwiO1xyXG5pbXBvcnQgeyBUYXNrIH0gZnJvbSBcIkAvY29udGV4dHMvTGlzdENvbnRleHRcIjtcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gXCJAL2NvbXBvbmVudHMvTWVudUl0ZW0vTWVudUl0ZW1cIjtcclxuaW1wb3J0IFRhc2tDb21wb25lbnQgZnJvbSBcIkAvY29tcG9uZW50cy9UYXNrL1Rhc2tcIjtcclxuXHJcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoKSB7XHJcbiAgY29uc3QgeyBsaXN0LCBzZXRMaXN0LCBoYW5kbGVDaGVja1Rhc2sgfSA9IHVzZUxpc3QoKTtcclxuICBjb25zdCBbdGFza05hbWUsIHNldFRhc2tOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBhZGRUYXNrID0gdXNlQ2FsbGJhY2soXHJcbiAgICAoZXZlbnQ6IFJlYWN0LkZvcm1FdmVudDxIVE1MRm9ybUVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIGxldCBuZXdUYXNrOiBUYXNrID0ge1xyXG4gICAgICAgIGlkOiBsaXN0Lmxlbmd0aCArIDEsXHJcbiAgICAgICAgbmFtZTogdGFza05hbWUsXHJcbiAgICAgICAgc3RhdHVzOiBmYWxzZSxcclxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgIH07XHJcblxyXG4gICAgICBzZXRMaXN0KFsuLi5saXN0LCBuZXdUYXNrXSk7XHJcbiAgICAgIHNldFRhc2tOYW1lKFwiXCIpO1xyXG4gICAgfSxcclxuICAgIFtsaXN0LCBzZXRMaXN0LCB0YXNrTmFtZV0sXHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17YWRkVGFza30gY2xhc3NOYW1lPXtzdHlsZXMudGFza0Zvcm19PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJ0YXNrXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJ0YXNrXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIG5ldyB0YXNrXCJcclxuICAgICAgICAgIHZhbHVlPXt0YXNrTmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRhc2tOYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFRhc2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYXNrQnV0dG9ufT5cclxuICAgICAgICAgIEFkZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhc2tMaXN0Q29udGFpbmVyfT5cclxuICAgICAgICA8aDE+TXkgVGFza3M8L2gxPlxyXG4gICAgICAgIHtsaXN0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudGFza0xpc3R9PlxyXG4gICAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhc2tJdGVtfSAke1xyXG4gICAgICAgICAgICAgICAgICBpdGVtLnN0YXR1cyA/IHN0eWxlcy50YXNrQ29tcGxldGVkIDogXCJcIlxyXG4gICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJjaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoZWNrVGFzayhpdGVtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY2hlY2tCdXR0b259XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPFRhc2tDb21wb25lbnRcclxuICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9e2l0ZW0ubmFtZX1cclxuICAgICAgICAgICAgICAgICAgc3RhdHVzPXtpdGVtLnN0YXR1c31cclxuICAgICAgICAgICAgICAgICAgZWRpdGFibGU9e2l0ZW0uZWRpdGFibGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPE1lbnVJdGVtIHRhc2tJZD17aXRlbS5pZH0gLz5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLmxpc3RFbXB0eX0+RW1wdHkgbGlzdC4uLjwvcD5cclxuICAgICAgICApfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJpbnRlciIsInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJ1c2VMaXN0Iiwic3R5bGVzIiwiTWVudUl0ZW0iLCJUYXNrQ29tcG9uZW50IiwiUHJvamVjdCIsImxpc3QiLCJzZXRMaXN0IiwiaGFuZGxlQ2hlY2tUYXNrIiwidGFza05hbWUiLCJzZXRUYXNrTmFtZSIsImFkZFRhc2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV3VGFzayIsImlkIiwibGVuZ3RoIiwibmFtZSIsInN0YXR1cyIsImVkaXRhYmxlIiwibWFpbiIsImNsYXNzTmFtZSIsImZvcm0iLCJvblN1Ym1pdCIsInRhc2tGb3JtIiwiaW5wdXQiLCJ0eXBlIiwicmVxdWlyZWQiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJpbnB1dFRhc2siLCJidXR0b24iLCJhZGRUYXNrQnV0dG9uIiwiZGl2IiwidGFza0xpc3RDb250YWluZXIiLCJoMSIsInVsIiwidGFza0xpc3QiLCJtYXAiLCJpdGVtIiwibGkiLCJ0YXNrSXRlbSIsInRhc2tDb21wbGV0ZWQiLCJvbkNsaWNrIiwiY2hlY2tCdXR0b24iLCJ0YXNrSWQiLCJwIiwibGlzdEVtcHR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/project/page.tsx\n"));

/***/ })

});