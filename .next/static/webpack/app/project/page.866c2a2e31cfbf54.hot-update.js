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

/***/ "(app-client)/./src/contexts/ListContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/ListContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListContext\": function() { return /* binding */ ListContext; },\n/* harmony export */   \"default\": function() { return /* binding */ ListProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ListContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ListProvider(param) {\n    let { children  } = param;\n    _s();\n    const [toDoList, setToDoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleCheckItem = (itemId)=>{\n        let cloneList = structuredClone(toDoList);\n        let [selectedItem] = cloneList.filter((item)=>item.id === itemId);\n        selectedItem.status = !selectedItem.status;\n        setToDoList(cloneList);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListContext.Provider, {\n        value: {\n            list: toDoList,\n            setList: setToDoList,\n            handleCheckItem\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\contexts\\\\ListContext.tsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this);\n}\n_s(ListProvider, \"XlMFCjdSHTHkBZ3zooEjK8vrs28=\");\n_c = ListProvider;\nvar _c;\n$RefreshReg$(_c, \"ListProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbnRleHRzL0xpc3RDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBU2U7QUFlUixNQUFNRSw0QkFBY0Ysb0RBQWFBLENBQUMsQ0FBQyxHQUF1QjtBQUVsRCxTQUFTRyxhQUFhLEtBRWlDLEVBQUU7UUFGbkMsRUFDbkNDLFNBQVEsRUFDNEQsR0FGakM7O0lBR25DLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBYyxFQUFFO0lBRXhELE1BQU1NLGtCQUFrQixDQUFDQyxTQUFtQjtRQUMxQyxJQUFJQyxZQUFZQyxnQkFBZ0JMO1FBQ2hDLElBQUksQ0FBQ00sYUFBYSxHQUFHRixVQUFVRyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsRUFBRSxLQUFLTjtRQUM1REcsYUFBYUksTUFBTSxHQUFHLENBQUNKLGFBQWFJLE1BQU07UUFDMUNULFlBQVlHO0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ1AsWUFBWWMsUUFBUTtRQUNuQkMsT0FBTztZQUFFQyxNQUFNYjtZQUFVYyxTQUFTYjtZQUFhQztRQUFnQjtrQkFFOURIOzs7Ozs7QUFHUCxDQUFDO0dBbkJ1QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0xpc3RDb250ZXh0LnRzeD81MGY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBjcmVhdGVDb250ZXh0LFxyXG4gIERldGFpbGVkSFRNTFByb3BzLFxyXG4gIERpc3BhdGNoLFxyXG4gIEhUTUxBdHRyaWJ1dGVzLFxyXG4gIFNldFN0YXRlQWN0aW9uLFxyXG4gIHVzZVN0YXRlLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYXNrIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzdGF0dXM6IGJvb2xlYW47XHJcbiAgZWRpdGFibGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBMaXN0Q29udGV4dFByb3BzIHtcclxuICBsaXN0OiBBcnJheTxUYXNrPjtcclxuICBzZXRMaXN0OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxUYXNrW10+PjtcclxuICBoYW5kbGVDaGVja0l0ZW06IChpdGVtSWQ6IG51bWJlcikgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBMaXN0Q29udGV4dFByb3BzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RQcm92aWRlcih7XHJcbiAgY2hpbGRyZW4sXHJcbn06IERldGFpbGVkSFRNTFByb3BzPEhUTUxBdHRyaWJ1dGVzPEhUTUxCb2R5RWxlbWVudD4sIEhUTUxCb2R5RWxlbWVudD4pIHtcclxuICBjb25zdCBbdG9Eb0xpc3QsIHNldFRvRG9MaXN0XSA9IHVzZVN0YXRlPEFycmF5PFRhc2s+PihbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrSXRlbSA9IChpdGVtSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgbGV0IGNsb25lTGlzdCA9IHN0cnVjdHVyZWRDbG9uZSh0b0RvTGlzdCk7XHJcbiAgICBsZXQgW3NlbGVjdGVkSXRlbV0gPSBjbG9uZUxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09PSBpdGVtSWQpO1xyXG4gICAgc2VsZWN0ZWRJdGVtLnN0YXR1cyA9ICFzZWxlY3RlZEl0ZW0uc3RhdHVzO1xyXG4gICAgc2V0VG9Eb0xpc3QoY2xvbmVMaXN0KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpc3RDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IGxpc3Q6IHRvRG9MaXN0LCBzZXRMaXN0OiBzZXRUb0RvTGlzdCwgaGFuZGxlQ2hlY2tJdGVtIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGlzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiTGlzdENvbnRleHQiLCJMaXN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInRvRG9MaXN0Iiwic2V0VG9Eb0xpc3QiLCJoYW5kbGVDaGVja0l0ZW0iLCJpdGVtSWQiLCJjbG9uZUxpc3QiLCJzdHJ1Y3R1cmVkQ2xvbmUiLCJzZWxlY3RlZEl0ZW0iLCJmaWx0ZXIiLCJpdGVtIiwiaWQiLCJzdGF0dXMiLCJQcm92aWRlciIsInZhbHVlIiwibGlzdCIsInNldExpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/contexts/ListContext.tsx\n"));

/***/ })

});