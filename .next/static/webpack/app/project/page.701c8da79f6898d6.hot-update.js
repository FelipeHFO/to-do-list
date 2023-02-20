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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _next_font_google_target_css_path_src_app_project_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"src\\\\app\\\\project\\\\page.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-client)/./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\project\\\\\\\\page.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_src_app_project_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_src_app_project_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/project/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Project() {\n    _s();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array());\n    const [taskName, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const addTask = (event)=>{\n        event.preventDefault();\n        let newTask = {\n            id: list.length + 1,\n            name: taskName,\n            status: false\n        };\n        setList([\n            ...list,\n            newTask\n        ]);\n        setTaskName(\"\");\n    };\n    const handleCheckItem = (itemId)=>{\n        let cloneList = structuredClone(list);\n        let [selectedItem] = cloneList.filter((item)=>item.id === itemId);\n        selectedItem.status = !selectedItem.status;\n        setList(cloneList);\n    };\n    const handleRemoveItem = (itemId)=>{\n        setList(list.filter((item)=>item.id !== itemId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_next_font_google_target_css_path_src_app_project_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_4___default().className),\n                children: \"To Do List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: addTask,\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskForm),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"task\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().labelTask),\n                        children: \"Nome da Tarefa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"task\",\n                        type: \"text\",\n                        name: \"task\",\n                        required: true,\n                        placeholder: \"Ex.: Estudar NextJS\",\n                        value: taskName,\n                        onChange: (event)=>setTaskName(event.target.value),\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().inputTask)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().addTaskButton),\n                        children: \"Adicionar Tarefa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            list.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskListContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Minha Lista\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskList),\n                        children: list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskItem), \" \").concat(item.status ? (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskCompleted) : (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().taskPending)),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: item.name\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().buttonsItemContainer),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                onClick: ()=>handleCheckItem(item.id),\n                                                className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemButton), \" \").concat(item.status ? (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().uncheckButton) : (_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().checkButton)),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: \"\".concat(item.status ? \"/circle-xmark-solid.svg\" : \"/circle-check-solid.svg\"),\n                                                    alt: \"\\xcdcone de checado\",\n                                                    width: 35,\n                                                    height: 35\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                                    lineNumber: 86,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                                lineNumber: 79,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                onClick: ()=>handleRemoveItem(item.id),\n                                                className: \"\".concat((_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().itemButton), \" \").concat((_page_module_css__WEBPACK_IMPORTED_MODULE_3___default().removeButton)),\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                                    src: \"/trash-solid.svg\",\n                                                    alt: \"\\xcdcone de checado\",\n                                                    width: 35,\n                                                    height: 35\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                                    lineNumber: 102,\n                                                    columnNumber: 21\n                                                }, this)\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                                lineNumber: 97,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, item.id, true, {\n                                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 15\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"B4M3h1TL0LouK+l0X7G1opbMk5M=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9qZWN0L3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQU9NQTtBQUwyQjtBQUNNO0FBRVI7QUFVaEIsU0FBU0ksVUFBVTs7SUFDaEMsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDLElBQUlNO0lBQ3JDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUiwrQ0FBUUEsQ0FBQztJQUV6QyxNQUFNUyxVQUFVLENBQUNDLFFBQTRDO1FBQzNEQSxNQUFNQyxjQUFjO1FBQ3BCLElBQUlDLFVBQW9CO1lBQ3RCQyxJQUFJVCxLQUFLVSxNQUFNLEdBQUc7WUFDbEJDLE1BQU1SO1lBQ05TLFFBQVEsS0FBSztRQUNmO1FBRUFYLFFBQVE7ZUFBSUQ7WUFBTVE7U0FBUTtRQUMxQkosWUFBWTtJQUNkO0lBRUEsTUFBTVMsa0JBQWtCLENBQUNDLFNBQW1CO1FBQzFDLElBQUlDLFlBQVlDLGdCQUFnQmhCO1FBQ2hDLElBQUksQ0FBQ2lCLGFBQWEsR0FBR0YsVUFBVUcsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtWLEVBQUUsS0FBS0s7UUFDNURHLGFBQWFMLE1BQU0sR0FBRyxDQUFDSyxhQUFhTCxNQUFNO1FBQzFDWCxRQUFRYztJQUNWO0lBRUEsTUFBTUssbUJBQW1CLENBQUNOLFNBQW1CO1FBQzNDYixRQUFRRCxLQUFLa0IsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtWLEVBQUUsS0FBS0s7SUFDNUM7SUFFQSxxQkFDRSw4REFBQ087UUFBS0MsV0FBV3pCLDhEQUFXOzswQkFDMUIsOERBQUMwQjtnQkFBR0QsV0FBVzNCLHNLQUFlOzBCQUFFOzs7Ozs7MEJBRWhDLDhEQUFDNkI7Z0JBQUtDLFVBQVVwQjtnQkFBU2lCLFdBQVd6QixrRUFBZTs7a0NBQ2pELDhEQUFDOEI7d0JBQU1DLFNBQVE7d0JBQU9OLFdBQVd6QixtRUFBZ0I7a0NBQUU7Ozs7OztrQ0FHbkQsOERBQUNpQzt3QkFDQ3JCLElBQUc7d0JBQ0hzQixNQUFLO3dCQUNMcEIsTUFBSzt3QkFDTHFCLFFBQVE7d0JBQ1JDLGFBQVk7d0JBQ1pDLE9BQU8vQjt3QkFDUGdDLFVBQVUsQ0FBQzdCLFFBQVVGLFlBQVlFLE1BQU04QixNQUFNLENBQUNGLEtBQUs7d0JBQ25EWixXQUFXekIsbUVBQWdCOzs7Ozs7a0NBRTdCLDhEQUFDeUM7d0JBQU9QLE1BQUs7d0JBQVNULFdBQVd6Qix1RUFBb0I7a0NBQUU7Ozs7Ozs7Ozs7OztZQUt4REcsS0FBS1UsTUFBTSxHQUFHLGtCQUNiLDhEQUFDOEI7Z0JBQUlsQixXQUFXekIsMkVBQXdCOztrQ0FDdEMsOERBQUMwQjtrQ0FBRzs7Ozs7O2tDQUNKLDhEQUFDbUI7d0JBQUdwQixXQUFXekIsa0VBQWU7a0NBQzNCRyxLQUFLNEMsR0FBRyxDQUFDLENBQUN6QixxQkFDVCw4REFBQzBCO2dDQUVDdkIsV0FBVyxHQUNUSCxPQURZdEIsa0VBQWUsRUFBQyxLQUU3QixPQURDc0IsS0FBS1AsTUFBTSxHQUFHZix1RUFBb0IsR0FBR0EscUVBQWtCOztrREFHekQsOERBQUNvRDtrREFBTTlCLEtBQUtSLElBQUk7Ozs7OztrREFDaEIsOERBQUM2Qjt3Q0FBSWxCLFdBQVd6Qiw4RUFBMkI7OzBEQUN6Qyw4REFBQ3lDO2dEQUNDUCxNQUFLO2dEQUNMb0IsU0FBUyxJQUFNdEMsZ0JBQWdCTSxLQUFLVixFQUFFO2dEQUN0Q2EsV0FBVyxHQUNUSCxPQURZdEIsb0VBQWlCLEVBQUMsS0FFL0IsT0FEQ3NCLEtBQUtQLE1BQU0sR0FBR2YsdUVBQW9CLEdBQUdBLHFFQUFrQjswREFHekQsNEVBQUNDLG1EQUFLQTtvREFDSnlELEtBQUssR0FJSixPQUhDcEMsS0FBS1AsTUFBTSxHQUNQLDRCQUNBLHlCQUF5QjtvREFFL0I0QyxLQUFJO29EQUNKQyxPQUFPO29EQUNQQyxRQUFROzs7Ozs7Ozs7OzswREFHWiw4REFBQ3BCO2dEQUNDUCxNQUFLO2dEQUNMb0IsU0FBUyxJQUFNL0IsaUJBQWlCRCxLQUFLVixFQUFFO2dEQUN2Q2EsV0FBVyxHQUF3QnpCLE9BQXJCQSxvRUFBaUIsRUFBQyxLQUF1QixPQUFwQkEsc0VBQW1COzBEQUV0RCw0RUFBQ0MsbURBQUtBO29EQUNKeUQsS0FBSztvREFDTEMsS0FBSTtvREFDSkMsT0FBTztvREFDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OytCQWxDVHZDLEtBQUtWLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozt1QkEwQ2xCLElBQUk7Ozs7Ozs7QUFHZCxDQUFDO0dBckd1QlY7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wcm9qZWN0L3BhZ2UudHN4Pzc1N2YiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcblxyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL3BhZ2UubW9kdWxlLmNzc1wiO1xyXG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJAbmV4dC9mb250L2dvb2dsZVwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcclxuXHJcbmludGVyZmFjZSBMaXN0SXRlbSB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KCkge1xyXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKG5ldyBBcnJheTxMaXN0SXRlbT4oKSk7XHJcbiAgY29uc3QgW3Rhc2tOYW1lLCBzZXRUYXNrTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgYWRkVGFzayA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbmV3VGFzazogTGlzdEl0ZW0gPSB7XHJcbiAgICAgIGlkOiBsaXN0Lmxlbmd0aCArIDEsXHJcbiAgICAgIG5hbWU6IHRhc2tOYW1lLFxyXG4gICAgICBzdGF0dXM6IGZhbHNlLFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRMaXN0KFsuLi5saXN0LCBuZXdUYXNrXSk7XHJcbiAgICBzZXRUYXNrTmFtZShcIlwiKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGVja0l0ZW0gPSAoaXRlbUlkOiBudW1iZXIpID0+IHtcclxuICAgIGxldCBjbG9uZUxpc3QgPSBzdHJ1Y3R1cmVkQ2xvbmUobGlzdCk7XHJcbiAgICBsZXQgW3NlbGVjdGVkSXRlbV0gPSBjbG9uZUxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpdGVtSWQpO1xyXG4gICAgc2VsZWN0ZWRJdGVtLnN0YXR1cyA9ICFzZWxlY3RlZEl0ZW0uc3RhdHVzO1xyXG4gICAgc2V0TGlzdChjbG9uZUxpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlbW92ZUl0ZW0gPSAoaXRlbUlkOiBudW1iZXIpID0+IHtcclxuICAgIHNldExpc3QobGlzdC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgIT09IGl0ZW1JZCkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cclxuICAgICAgPGgxIGNsYXNzTmFtZT17aW50ZXIuY2xhc3NOYW1lfT5UbyBEbyBMaXN0PC9oMT5cclxuXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXthZGRUYXNrfSBjbGFzc05hbWU9e3N0eWxlcy50YXNrRm9ybX0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ0YXNrXCIgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWxUYXNrfT5cclxuICAgICAgICAgIE5vbWUgZGEgVGFyZWZhXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwidGFza1wiXHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICBuYW1lPVwidGFza1wiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJFeC46IEVzdHVkYXIgTmV4dEpTXCJcclxuICAgICAgICAgIHZhbHVlPXt0YXNrTmFtZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZXZlbnQpID0+IHNldFRhc2tOYW1lKGV2ZW50LnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dFRhc2t9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5hZGRUYXNrQnV0dG9ufT5cclxuICAgICAgICAgIEFkaWNpb25hciBUYXJlZmFcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG5cclxuICAgICAge2xpc3QubGVuZ3RoID4gMCA/IChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhc2tMaXN0Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxoMT5NaW5oYSBMaXN0YTwvaDE+XHJcbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudGFza0xpc3R9PlxyXG4gICAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRhc2tJdGVtfSAke1xyXG4gICAgICAgICAgICAgICAgICBpdGVtLnN0YXR1cyA/IHN0eWxlcy50YXNrQ29tcGxldGVkIDogc3R5bGVzLnRhc2tQZW5kaW5nXHJcbiAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5uYW1lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uc0l0ZW1Db250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlQ2hlY2tJdGVtKGl0ZW0uaWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLml0ZW1CdXR0b259ICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXR1cyA/IHN0eWxlcy51bmNoZWNrQnV0dG9uIDogc3R5bGVzLmNoZWNrQnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc3RhdHVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIi9jaXJjbGUteG1hcmstc29saWQuc3ZnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiL2NpcmNsZS1jaGVjay1zb2xpZC5zdmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCLDjWNvbmUgZGUgY2hlY2Fkb1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezM1fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlUmVtb3ZlSXRlbShpdGVtLmlkKX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5pdGVtQnV0dG9ufSAke3N0eWxlcy5yZW1vdmVCdXR0b259YH1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3JjPXtcIi90cmFzaC1zb2xpZC5zdmdcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIsONY29uZSBkZSBjaGVjYWRvXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszNX1cclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MzV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9tYWluPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImludGVyIiwidXNlU3RhdGUiLCJzdHlsZXMiLCJJbWFnZSIsIlByb2plY3QiLCJsaXN0Iiwic2V0TGlzdCIsIkFycmF5IiwidGFza05hbWUiLCJzZXRUYXNrTmFtZSIsImFkZFRhc2siLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmV3VGFzayIsImlkIiwibGVuZ3RoIiwibmFtZSIsInN0YXR1cyIsImhhbmRsZUNoZWNrSXRlbSIsIml0ZW1JZCIsImNsb25lTGlzdCIsInN0cnVjdHVyZWRDbG9uZSIsInNlbGVjdGVkSXRlbSIsImZpbHRlciIsIml0ZW0iLCJoYW5kbGVSZW1vdmVJdGVtIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwidGFza0Zvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJsYWJlbFRhc2siLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImlucHV0VGFzayIsImJ1dHRvbiIsImFkZFRhc2tCdXR0b24iLCJkaXYiLCJ0YXNrTGlzdENvbnRhaW5lciIsInVsIiwidGFza0xpc3QiLCJtYXAiLCJsaSIsInRhc2tJdGVtIiwidGFza0NvbXBsZXRlZCIsInRhc2tQZW5kaW5nIiwic3BhbiIsImJ1dHRvbnNJdGVtQ29udGFpbmVyIiwib25DbGljayIsIml0ZW1CdXR0b24iLCJ1bmNoZWNrQnV0dG9uIiwiY2hlY2tCdXR0b24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInJlbW92ZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/project/page.tsx\n"));

/***/ })

});