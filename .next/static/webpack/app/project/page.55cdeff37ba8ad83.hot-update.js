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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Project; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _next_font_google_target_css_path_src_app_project_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @next/font/google/target.css?{\"path\":\"src\\\\app\\\\project\\\\page.tsx\",\"import\":\"Inter\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"inter\"} */ \"(app-client)/./node_modules/@next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\app\\\\\\\\project\\\\\\\\page.tsx\\\",\\\"import\\\":\\\"Inter\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"inter\\\"}\");\n/* harmony import */ var _next_font_google_target_css_path_src_app_project_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_src_app_project_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page.module.css */ \"(app-client)/./src/app/project/page.module.css\");\n/* harmony import */ var _page_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Project() {\n    _s();\n    const [list, setList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Array());\n    const [taskName, setTaskName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const addTask = (event)=>{\n        event.preventDefault();\n        let newTask = {\n            id: list.length + 1,\n            name: taskName\n        };\n        setList([\n            ...list,\n            newTask\n        ]);\n        setTaskName(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_next_font_google_target_css_path_src_app_project_page_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className),\n                children: \"To Do List\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: addTask,\n                className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().taskForm),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"task\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().labelTask),\n                        children: \"Nome da Tarefa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"task\",\n                        type: \"text\",\n                        name: \"task\",\n                        required: true,\n                        placeholder: \"Ex.: Estudar NextJS\",\n                        value: taskName,\n                        onChange: (event)=>setTaskName(event.target.value),\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputTask)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().addTaskButton),\n                        children: \"Adicionar Tarefa\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            list.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().taskList),\n                    children: list.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: (_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().taskItem),\n                            children: item.name\n                        }, item.id, false, {\n                            fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                            lineNumber: 56,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                    lineNumber: 54,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n                lineNumber: 53,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\app\\\\project\\\\page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Project, \"B4M3h1TL0LouK+l0X7G1opbMk5M=\");\n_c = Project;\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9wcm9qZWN0L3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFNTUE7QUFKMkI7QUFDTTtBQVV4QixTQUFTRyxVQUFVOztJQUNoQyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUMsSUFBSUs7SUFDckMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUFDO0lBRXpDLE1BQU1RLFVBQVUsQ0FBQ0MsUUFBNEM7UUFDM0RBLE1BQU1DLGNBQWM7UUFDcEIsSUFBSUMsVUFBb0I7WUFDdEJDLElBQUlULEtBQUtVLE1BQU0sR0FBRztZQUNsQkMsTUFBTVI7UUFDUjtRQUVBRixRQUFRO2VBQUlEO1lBQU1RO1NBQVE7UUFDMUJKLFlBQVk7SUFDZDtJQUVBLHFCQUNFLDhEQUFDUTtRQUFLQyxXQUFXZiw4REFBVzs7MEJBQzFCLDhEQUFDZ0I7Z0JBQUdELFdBQVdqQixzS0FBZTswQkFBRTs7Ozs7OzBCQUVoQyw4REFBQ21CO2dCQUFLQyxVQUFVWDtnQkFBU1EsV0FBV2Ysa0VBQWU7O2tDQUNqRCw4REFBQ29CO3dCQUFNQyxTQUFRO3dCQUFPTixXQUFXZixtRUFBZ0I7a0NBQUU7Ozs7OztrQ0FHbkQsOERBQUN1Qjt3QkFDQ1osSUFBRzt3QkFDSGEsTUFBSzt3QkFDTFgsTUFBSzt3QkFDTFksUUFBUTt3QkFDUkMsYUFBWTt3QkFDWkMsT0FBT3RCO3dCQUNQdUIsVUFBVSxDQUFDcEIsUUFBVUYsWUFBWUUsTUFBTXFCLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDbkRaLFdBQVdmLG1FQUFnQjs7Ozs7O2tDQUU3Qiw4REFBQytCO3dCQUFPUCxNQUFLO3dCQUFTVCxXQUFXZix1RUFBb0I7a0NBQUU7Ozs7Ozs7Ozs7OztZQUt4REUsS0FBS1UsTUFBTSxHQUFHLGtCQUNiLDhEQUFDcUI7MEJBQ0MsNEVBQUNDO29CQUFHbkIsV0FBV2Ysa0VBQWU7OEJBQzNCRSxLQUFLa0MsR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDQzs0QkFBaUJ2QixXQUFXZixrRUFBZTtzQ0FDekNxQyxLQUFLeEIsSUFBSTsyQkFESHdCLEtBQUsxQixFQUFFOzs7Ozs7Ozs7Ozs7Ozt1QkFNcEIsSUFBSTs7Ozs7OztBQUdkLENBQUM7R0FuRHVCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3Byb2plY3QvcGFnZS50c3g/NzU3ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcGFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIkBuZXh0L2ZvbnQvZ29vZ2xlXCI7XHJcblxyXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XHJcblxyXG5pbnRlcmZhY2UgTGlzdEl0ZW0ge1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0KCkge1xyXG4gIGNvbnN0IFtsaXN0LCBzZXRMaXN0XSA9IHVzZVN0YXRlKG5ldyBBcnJheTxMaXN0SXRlbT4oKSk7XHJcbiAgY29uc3QgW3Rhc2tOYW1lLCBzZXRUYXNrTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgYWRkVGFzayA9IChldmVudDogUmVhY3QuRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgbmV3VGFzazogTGlzdEl0ZW0gPSB7XHJcbiAgICAgIGlkOiBsaXN0Lmxlbmd0aCArIDEsXHJcbiAgICAgIG5hbWU6IHRhc2tOYW1lLFxyXG4gICAgfTtcclxuXHJcbiAgICBzZXRMaXN0KFsuLi5saXN0LCBuZXdUYXNrXSk7XHJcbiAgICBzZXRUYXNrTmFtZShcIlwiKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9e2ludGVyLmNsYXNzTmFtZX0+VG8gRG8gTGlzdDwvaDE+XHJcblxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17YWRkVGFza30gY2xhc3NOYW1lPXtzdHlsZXMudGFza0Zvcm19PlxyXG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwidGFza1wiIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsVGFza30+XHJcbiAgICAgICAgICBOb21lIGRhIFRhcmVmYVxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD1cInRhc2tcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInRhc2tcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRXguOiBFc3R1ZGFyIE5leHRKU1wiXHJcbiAgICAgICAgICB2YWx1ZT17dGFza05hbWV9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGV2ZW50KSA9PiBzZXRUYXNrTmFtZShldmVudC50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXRUYXNrfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYWRkVGFza0J1dHRvbn0+XHJcbiAgICAgICAgICBBZGljaW9uYXIgVGFyZWZhXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuXHJcbiAgICAgIHtsaXN0Lmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy50YXNrTGlzdH0+XHJcbiAgICAgICAgICAgIHtsaXN0Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxsaSBrZXk9e2l0ZW0uaWR9IGNsYXNzTmFtZT17c3R5bGVzLnRhc2tJdGVtfT5cclxuICAgICAgICAgICAgICAgIHtpdGVtLm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICApIDogbnVsbH1cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJpbnRlciIsInVzZVN0YXRlIiwic3R5bGVzIiwiUHJvamVjdCIsImxpc3QiLCJzZXRMaXN0IiwiQXJyYXkiLCJ0YXNrTmFtZSIsInNldFRhc2tOYW1lIiwiYWRkVGFzayIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuZXdUYXNrIiwiaWQiLCJsZW5ndGgiLCJuYW1lIiwibWFpbiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwidGFza0Zvcm0iLCJsYWJlbCIsImh0bWxGb3IiLCJsYWJlbFRhc2siLCJpbnB1dCIsInR5cGUiLCJyZXF1aXJlZCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsImlucHV0VGFzayIsImJ1dHRvbiIsImFkZFRhc2tCdXR0b24iLCJkaXYiLCJ1bCIsInRhc2tMaXN0IiwibWFwIiwiaXRlbSIsImxpIiwidGFza0l0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/project/page.tsx\n"));

/***/ })

});