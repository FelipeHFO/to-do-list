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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MenuItem; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MenuItem_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuItem.module.css */ \"(app-client)/./src/components/MenuItem/MenuItem.module.css\");\n/* harmony import */ var _MenuItem_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_MenuItem_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _hooks_useList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/hooks/useList */ \"(app-client)/./src/hooks/useList.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction MenuItem(param) {\n    let { taskId  } = param;\n    _s();\n    const { handleRemoveTask  } = (0,_hooks_useList__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        type: \"button\",\n        onClick: ()=>setVisible((prevState)=>!prevState),\n        className: (_MenuItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().menuItem),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                src: \"/ellipsis-solid.svg\",\n                alt: \"\\xcdcone de 3 pontos, menu de op\\xe7\\xf5es\",\n                width: 20,\n                height: 20\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            visible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_MenuItem_module_css__WEBPACK_IMPORTED_MODULE_4___default().optionsContainer),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        children: \"Edit\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>handleRemoveTask(taskId),\n                        children: \"Remove\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n                lineNumber: 29,\n                columnNumber: 9\n            }, this) : null\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\components\\\\MenuItem\\\\MenuItem.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(MenuItem, \"4mQLYt6eHVK7jKr2nuAmj/DGTIU=\", false, function() {\n    return [\n        _hooks_useList__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    ];\n});\n_c = MenuItem;\nvar _c;\n$RefreshReg$(_c, \"MenuItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvTWVudUl0ZW0vTWVudUl0ZW0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRStCO0FBQ1k7QUFDVjtBQUNLO0FBTXZCLFNBQVNJLFNBQVMsS0FBeUIsRUFBRTtRQUEzQixFQUFFQyxPQUFNLEVBQWlCLEdBQXpCOztJQUMvQixNQUFNLEVBQUVDLGlCQUFnQixFQUFFLEdBQUdILDBEQUFPQTtJQUNwQyxNQUFNLENBQUNJLFNBQVNDLFdBQVcsR0FBR04sK0NBQVFBLENBQUMsS0FBSztJQUU1QyxxQkFDRSw4REFBQ087UUFDQ0MsTUFBSztRQUNMQyxTQUFTLElBQU1ILFdBQVcsQ0FBQ0ksWUFBYyxDQUFDQTtRQUMxQ0MsV0FBV1osc0VBQWU7OzBCQUUxQiw4REFBQ0QsbURBQUtBO2dCQUNKZSxLQUFLO2dCQUNMQyxLQUFJO2dCQUNKQyxPQUFPO2dCQUNQQyxRQUFROzs7Ozs7WUFFVFgsd0JBQ0MsOERBQUNZO2dCQUFJTixXQUFXWiw4RUFBdUI7O2tDQUNyQyw4REFBQ1E7d0JBQU9DLE1BQUs7a0NBQVM7Ozs7OztrQ0FDdEIsOERBQUNEO3dCQUFPQyxNQUFLO3dCQUFTQyxTQUFTLElBQU1MLGlCQUFpQkQ7a0NBQVM7Ozs7Ozs7Ozs7O3VCQUkvRCxJQUFJOzs7Ozs7O0FBR2QsQ0FBQztHQTFCdUJEOztRQUNPRCxzREFBT0E7OztLQURkQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9NZW51SXRlbS9NZW51SXRlbS50c3g/M2ZkYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL01lbnVJdGVtLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZUxpc3QgZnJvbSBcIkAvaG9va3MvdXNlTGlzdFwiO1xyXG5cclxuaW50ZXJmYWNlIE1lbnVJdGVtUHJvcHMge1xyXG4gIHRhc2tJZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51SXRlbSh7IHRhc2tJZCB9OiBNZW51SXRlbVByb3BzKSB7XHJcbiAgY29uc3QgeyBoYW5kbGVSZW1vdmVUYXNrIH0gPSB1c2VMaXN0KCk7XHJcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgb25DbGljaz17KCkgPT4gc2V0VmlzaWJsZSgocHJldlN0YXRlKSA9PiAhcHJldlN0YXRlKX1cclxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMubWVudUl0ZW19XHJcbiAgICA+XHJcbiAgICAgIDxJbWFnZVxyXG4gICAgICAgIHNyYz17XCIvZWxsaXBzaXMtc29saWQuc3ZnXCJ9XHJcbiAgICAgICAgYWx0PVwiw41jb25lIGRlIDMgcG9udG9zLCBtZW51IGRlIG9ww6fDtWVzXCJcclxuICAgICAgICB3aWR0aD17MjB9XHJcbiAgICAgICAgaGVpZ2h0PXsyMH1cclxuICAgICAgLz5cclxuICAgICAge3Zpc2libGUgPyAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vcHRpb25zQ29udGFpbmVyfT5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiPkVkaXQ8L2J1dHRvbj5cclxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZVJlbW92ZVRhc2sodGFza0lkKX0+XHJcbiAgICAgICAgICAgIFJlbW92ZVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICkgOiBudWxsfVxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJzdHlsZXMiLCJ1c2VTdGF0ZSIsInVzZUxpc3QiLCJNZW51SXRlbSIsInRhc2tJZCIsImhhbmRsZVJlbW92ZVRhc2siLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwicHJldlN0YXRlIiwiY2xhc3NOYW1lIiwibWVudUl0ZW0iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImRpdiIsIm9wdGlvbnNDb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/MenuItem/MenuItem.tsx\n"));

/***/ })

});