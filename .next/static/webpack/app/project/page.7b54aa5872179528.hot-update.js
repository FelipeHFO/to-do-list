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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListContext\": function() { return /* binding */ ListContext; },\n/* harmony export */   \"default\": function() { return /* binding */ ListProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ListContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ListProvider(param) {\n    let { children  } = param;\n    _s();\n    const [toDoList, setToDoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleCheckTask = (taskId)=>{\n        let cloneList = structuredClone(toDoList);\n        let [selectedTask] = cloneList.filter((task)=>task.id === taskId);\n        selectedTask.status = !selectedTask.status;\n        setToDoList(cloneList);\n    };\n    const handleRemoveItem = (taskId)=>{\n        setToDoList(toDoList.filter((task)=>task.id !== taskId));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListContext.Provider, {\n        value: {\n            list: toDoList,\n            setList: setToDoList,\n            handleCheckTask\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\contexts\\\\ListContext.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(ListProvider, \"XlMFCjdSHTHkBZ3zooEjK8vrs28=\");\n_c = ListProvider;\nvar _c;\n$RefreshReg$(_c, \"ListProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbnRleHRzL0xpc3RDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBU2U7QUFlUixNQUFNRSw0QkFBY0Ysb0RBQWFBLENBQUMsQ0FBQyxHQUF1QjtBQUVsRCxTQUFTRyxhQUFhLEtBRWlDLEVBQUU7UUFGbkMsRUFDbkNDLFNBQVEsRUFDNEQsR0FGakM7O0lBR25DLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBYyxFQUFFO0lBRXhELE1BQU1NLGtCQUFrQixDQUFDQyxTQUFtQjtRQUMxQyxJQUFJQyxZQUFZQyxnQkFBZ0JMO1FBQ2hDLElBQUksQ0FBQ00sYUFBYSxHQUFHRixVQUFVRyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsRUFBRSxLQUFLTjtRQUM1REcsYUFBYUksTUFBTSxHQUFHLENBQUNKLGFBQWFJLE1BQU07UUFDMUNULFlBQVlHO0lBQ2Q7SUFFQSxNQUFNTyxtQkFBbUIsQ0FBQ1IsU0FBbUI7UUFDM0NGLFlBQVlELFNBQVNPLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxFQUFFLEtBQUtOO0lBQ3BEO0lBRUEscUJBQ0UsOERBQUNOLFlBQVllLFFBQVE7UUFDbkJDLE9BQU87WUFBRUMsTUFBTWQ7WUFBVWUsU0FBU2Q7WUFBYUM7UUFBZ0I7a0JBRTlESDs7Ozs7O0FBR1AsQ0FBQztHQXZCdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9MaXN0Q29udGV4dC50c3g/NTBmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgY3JlYXRlQ29udGV4dCxcclxuICBEZXRhaWxlZEhUTUxQcm9wcyxcclxuICBEaXNwYXRjaCxcclxuICBIVE1MQXR0cmlidXRlcyxcclxuICBTZXRTdGF0ZUFjdGlvbixcclxuICB1c2VTdGF0ZSxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFzayB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBib29sZWFuO1xyXG4gIGVkaXRhYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTGlzdENvbnRleHRQcm9wcyB7XHJcbiAgbGlzdDogQXJyYXk8VGFzaz47XHJcbiAgc2V0TGlzdDogRGlzcGF0Y2g8U2V0U3RhdGVBY3Rpb248VGFza1tdPj47XHJcbiAgaGFuZGxlQ2hlY2tUYXNrOiAoaXRlbUlkOiBudW1iZXIpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBMaXN0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgTGlzdENvbnRleHRQcm9wcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMaXN0UHJvdmlkZXIoe1xyXG4gIGNoaWxkcmVuLFxyXG59OiBEZXRhaWxlZEhUTUxQcm9wczxIVE1MQXR0cmlidXRlczxIVE1MQm9keUVsZW1lbnQ+LCBIVE1MQm9keUVsZW1lbnQ+KSB7XHJcbiAgY29uc3QgW3RvRG9MaXN0LCBzZXRUb0RvTGlzdF0gPSB1c2VTdGF0ZTxBcnJheTxUYXNrPj4oW10pO1xyXG5cclxuICBjb25zdCBoYW5kbGVDaGVja1Rhc2sgPSAodGFza0lkOiBudW1iZXIpID0+IHtcclxuICAgIGxldCBjbG9uZUxpc3QgPSBzdHJ1Y3R1cmVkQ2xvbmUodG9Eb0xpc3QpO1xyXG4gICAgbGV0IFtzZWxlY3RlZFRhc2tdID0gY2xvbmVMaXN0LmZpbHRlcigodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcclxuICAgIHNlbGVjdGVkVGFzay5zdGF0dXMgPSAhc2VsZWN0ZWRUYXNrLnN0YXR1cztcclxuICAgIHNldFRvRG9MaXN0KGNsb25lTGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlSXRlbSA9ICh0YXNrSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0VG9Eb0xpc3QodG9Eb0xpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB0YXNrSWQpKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPExpc3RDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgIHZhbHVlPXt7IGxpc3Q6IHRvRG9MaXN0LCBzZXRMaXN0OiBzZXRUb0RvTGlzdCwgaGFuZGxlQ2hlY2tUYXNrIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGlzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiTGlzdENvbnRleHQiLCJMaXN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInRvRG9MaXN0Iiwic2V0VG9Eb0xpc3QiLCJoYW5kbGVDaGVja1Rhc2siLCJ0YXNrSWQiLCJjbG9uZUxpc3QiLCJzdHJ1Y3R1cmVkQ2xvbmUiLCJzZWxlY3RlZFRhc2siLCJmaWx0ZXIiLCJ0YXNrIiwiaWQiLCJzdGF0dXMiLCJoYW5kbGVSZW1vdmVJdGVtIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImxpc3QiLCJzZXRMaXN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/contexts/ListContext.tsx\n"));

/***/ })

});