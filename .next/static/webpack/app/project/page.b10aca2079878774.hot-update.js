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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/project/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Project() {\n    _s();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array());\n    const [taskName, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const addTask = (event)=>{\n        event.preventDefault();\n        let newTask = {\n            id: list.length + 1,\n            name: taskName,\n            status: false\n        };\n        setList([\n            ...list,\n            newTask\n        ]);\n        setTaskName(\"\");\n    };\n    const handleCheckItem = (itemId)=>{\n        let cloneList = structuredClone(list);\n        let [selectedItem] = cloneList.filter((item)=>item.id === itemId);\n        selectedItem.status = !selectedItem.status;\n        setList(cloneList);\n    };\n    const handleRemoveItem = (itemId)=>{\n        setList(list.filter((item)=>item.id !== itemId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: addTask,\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskForm),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"task\",\n                        type: \"text\",\n                        name: \"task\",\n                        required: true,\n                        placeholder: \"Add a new task\",\n                        value: taskName,\n                        onChange: (event)=>setTaskName(event.target.value),\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputTask)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().addTaskButton),\n                        children: \"Add\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskListContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"My Tasks\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskList),\n                        children: list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskItem), \" \").concat(item.status ? (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskCompleted) : (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskPending)),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"checkbox\",\n                                        onClick: ()=>handleCheckItem(item.id)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonsItemContainer),\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"button\",\n                                            onClick: ()=>handleRemoveItem(item.id),\n                                            className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemButton), \" \").concat((_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().removeButton)),\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                src: \"/trash-solid.svg\",\n                                                alt: \"\\xcdcone de checado\",\n                                                width: 35,\n                                                height: 35\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                            lineNumber: 74,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 13\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"B4M3h1TL0LouK+l0X7G1opbMk5M=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9qZWN0L3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFPTUE7QUFMMkI7QUFDTTtBQUVSO0FBVWhCLFNBQVNJLFVBQVU7O0lBQ2hDLE1BQU0sQ0FBQ0MsTUFBTUMsUUFBUSxHQUFHTCwrQ0FBUUEsQ0FBQyxJQUFJTTtJQUNyQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7SUFFekMsTUFBTVMsVUFBVSxDQUFDQyxRQUE0QztRQUMzREEsTUFBTUMsY0FBYztRQUNwQixJQUFJQyxVQUFvQjtZQUN0QkMsSUFBSVQsS0FBS1UsTUFBTSxHQUFHO1lBQ2xCQyxNQUFNUjtZQUNOUyxRQUFRLEtBQUs7UUFDZjtRQUVBWCxRQUFRO2VBQUlEO1lBQU1RO1NBQVE7UUFDMUJKLFlBQVk7SUFDZDtJQUVBLE1BQU1TLGtCQUFrQixDQUFDQyxTQUFtQjtRQUMxQyxJQUFJQyxZQUFZQyxnQkFBZ0JoQjtRQUNoQyxJQUFJLENBQUNpQixhQUFhLEdBQUdGLFVBQVVHLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLVixFQUFFLEtBQUtLO1FBQzVERyxhQUFhTCxNQUFNLEdBQUcsQ0FBQ0ssYUFBYUwsTUFBTTtRQUMxQ1gsUUFBUWM7SUFDVjtJQUVBLE1BQU1LLG1CQUFtQixDQUFDTixTQUFtQjtRQUMzQ2IsUUFBUUQsS0FBS2tCLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLVixFQUFFLEtBQUtLO0lBQzVDO0lBRUEscUJBQ0UsOERBQUNPO1FBQUtDLFdBQVd6Qiw4REFBVzs7MEJBQzFCLDhEQUFDMEI7Z0JBQUtDLFVBQVVuQjtnQkFBU2lCLFdBQVd6QixrRUFBZTs7a0NBQ2pELDhEQUFDNkI7d0JBQ0NqQixJQUFHO3dCQUNIa0IsTUFBSzt3QkFDTGhCLE1BQUs7d0JBQ0xpQixRQUFRO3dCQUNSQyxhQUFZO3dCQUNaQyxPQUFPM0I7d0JBQ1A0QixVQUFVLENBQUN6QixRQUFVRixZQUFZRSxNQUFNMEIsTUFBTSxDQUFDRixLQUFLO3dCQUNuRFIsV0FBV3pCLG1FQUFnQjs7Ozs7O2tDQUU3Qiw4REFBQ3FDO3dCQUFPUCxNQUFLO3dCQUFTTCxXQUFXekIsdUVBQW9CO2tDQUFFOzs7Ozs7Ozs7Ozs7MEJBS3pELDhEQUFDdUM7Z0JBQUlkLFdBQVd6QiwyRUFBd0I7O2tDQUN0Qyw4REFBQ3lDO2tDQUFHOzs7Ozs7a0NBQ0osOERBQUNDO3dCQUFHakIsV0FBV3pCLGtFQUFlO2tDQUMzQkcsS0FBS3lDLEdBQUcsQ0FBQyxDQUFDdEIscUJBQ1QsOERBQUN1QjtnQ0FFQ3BCLFdBQVcsR0FDVEgsT0FEWXRCLGtFQUFlLEVBQUMsS0FFN0IsT0FEQ3NCLEtBQUtQLE1BQU0sR0FBR2YsdUVBQW9CLEdBQUdBLHFFQUFrQjs7a0RBR3pELDhEQUFDNkI7d0NBQU1DLE1BQUs7d0NBQVdtQixTQUFTLElBQU1qQyxnQkFBZ0JNLEtBQUtWLEVBQUU7Ozs7OztrREFDN0QsOERBQUNzQztrREFBTTVCLEtBQUtSLElBQUk7Ozs7OztrREFDaEIsOERBQUN5Qjt3Q0FBSWQsV0FBV3pCLDhFQUEyQjtrREFDekMsNEVBQUNxQzs0Q0FDQ1AsTUFBSzs0Q0FDTG1CLFNBQVMsSUFBTTFCLGlCQUFpQkQsS0FBS1YsRUFBRTs0Q0FDdkNhLFdBQVcsR0FBd0J6QixPQUFyQkEsb0VBQWlCLEVBQUMsS0FBdUIsT0FBcEJBLHNFQUFtQjtzREFFdEQsNEVBQUNDLG1EQUFLQTtnREFDSnFELEtBQUs7Z0RBQ0xDLEtBQUk7Z0RBQ0pDLE9BQU87Z0RBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQWpCVG5DLEtBQUtWLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQjFCLENBQUM7R0E3RXVCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2plY3QvcGFnZS50c3g/NzU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5cclxuY29uc3QgaW50ZXIgPSBJbnRlcih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xyXG5cclxuaW50ZXJmYWNlIExpc3RJdGVtIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzdGF0dXM6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3QoKSB7XHJcbiAgY29uc3QgW2xpc3QsIHNldExpc3RdID0gdXNlU3RhdGUobmV3IEFycmF5PExpc3RJdGVtPigpKTtcclxuICBjb25zdCBbdGFza05hbWUsIHNldFRhc2tOYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICBjb25zdCBhZGRUYXNrID0gKGV2ZW50OiBSZWFjdC5Gb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGxldCBuZXdUYXNrOiBMaXN0SXRlbSA9IHtcclxuICAgICAgaWQ6IGxpc3QubGVuZ3RoICsgMSxcclxuICAgICAgbmFtZTogdGFza05hbWUsXHJcbiAgICAgIHN0YXR1czogZmFsc2UsXHJcbiAgICB9O1xyXG5cclxuICAgIHNldExpc3QoWy4uLmxpc3QsIG5ld1Rhc2tdKTtcclxuICAgIHNldFRhc2tOYW1lKFwiXCIpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrSXRlbSA9IChpdGVtSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgbGV0IGNsb25lTGlzdCA9IHN0cnVjdHVyZWRDbG9uZShsaXN0KTtcclxuICAgIGxldCBbc2VsZWN0ZWRJdGVtXSA9IGNsb25lTGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGl0ZW1JZCk7XHJcbiAgICBzZWxlY3RlZEl0ZW0uc3RhdHVzID0gIXNlbGVjdGVkSXRlbS5zdGF0dXM7XHJcbiAgICBzZXRMaXN0KGNsb25lTGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9IChpdGVtSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0TGlzdChsaXN0LmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCAhPT0gaXRlbUlkKSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17YWRkVGFza30gY2xhc3NOYW1lPXtzdHlsZXMudGFza0Zvcm19PlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJ0YXNrXCJcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJ0YXNrXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFkZCBhIG5ldyB0YXNrXCJcclxuICAgICAgICAgIHZhbHVlPXt0YXNrTmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRhc2tOYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFRhc2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYXNrQnV0dG9ufT5cclxuICAgICAgICAgIEFkZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhc2tMaXN0Q29udGFpbmVyfT5cclxuICAgICAgICA8aDE+TXkgVGFza3M8L2gxPlxyXG4gICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy50YXNrTGlzdH0+XHJcbiAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhc2tJdGVtfSAke1xyXG4gICAgICAgICAgICAgICAgaXRlbS5zdGF0dXMgPyBzdHlsZXMudGFza0NvbXBsZXRlZCA6IHN0eWxlcy50YXNrUGVuZGluZ1xyXG4gICAgICAgICAgICAgIH1gfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNoZWNrSXRlbShpdGVtLmlkKX0gLz5cclxuICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbnNJdGVtQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZUl0ZW0oaXRlbS5pZCl9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLml0ZW1CdXR0b259ICR7c3R5bGVzLnJlbW92ZUJ1dHRvbn1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e1wiL3RyYXNoLXNvbGlkLnN2Z1wifVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cIsONY29uZSBkZSBjaGVjYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXszNX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiaW50ZXIiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIkltYWdlIiwiUHJvamVjdCIsImxpc3QiLCJzZXRMaXN0IiwiQXJyYXkiLCJ0YXNrTmFtZSIsInNldFRhc2tOYW1lIiwiYWRkVGFzayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdUYXNrIiwiaWQiLCJsZW5ndGgiLCJuYW1lIiwic3RhdHVzIiwiaGFuZGxlQ2hlY2tJdGVtIiwiaXRlbUlkIiwiY2xvbmVMaXN0Iiwic3RydWN0dXJlZENsb25lIiwic2VsZWN0ZWRJdGVtIiwiZmlsdGVyIiwiaXRlbSIsImhhbmRsZVJlbW92ZUl0ZW0iLCJtYWluIiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwidGFza0Zvcm0iLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImlucHV0VGFzayIsImJ1dHRvbiIsImFkZFRhc2tCdXR0b24iLCJkaXYiLCJ0YXNrTGlzdENvbnRhaW5lciIsImgxIiwidWwiLCJ0YXNrTGlzdCIsIm1hcCIsImxpIiwidGFza0l0ZW0iLCJ0YXNrQ29tcGxldGVkIiwidGFza1BlbmRpbmciLCJvbkNsaWNrIiwic3BhbiIsImJ1dHRvbnNJdGVtQ29udGFpbmVyIiwiaXRlbUJ1dHRvbiIsInJlbW92ZUJ1dHRvbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/app/project/page.tsx\n"));

/***/ })

});