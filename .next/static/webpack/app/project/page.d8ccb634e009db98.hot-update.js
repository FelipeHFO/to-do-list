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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListContext\": function() { return /* binding */ ListContext; },\n/* harmony export */   \"default\": function() { return /* binding */ ListProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ListContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ListProvider(param) {\n    let { children  } = param;\n    _s();\n    const [toDoList, setToDoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleCheckTask = (taskId)=>{\n        let cloneList = structuredClone(toDoList);\n        let [selectedTask] = cloneList.filter((task)=>task.id === taskId);\n        selectedTask.status = !selectedTask.status;\n        setToDoList(cloneList);\n    };\n    const handleEditTask = (taskId)=>{\n        let cloneList = structuredClone(toDoList);\n        let [selectedTask] = cloneList.filter((task)=>task.id === taskId);\n        selectedTask.editable = !selectedTask.editable;\n        setToDoList(cloneList);\n    };\n    const handleRemoveTask = (taskId)=>{\n        setToDoList(toDoList.filter((task)=>task.id !== taskId));\n    };\n    function handleChangeTask(value) {}\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListContext.Provider, {\n        value: {\n            list: toDoList,\n            handleEditTask,\n            handleCheckTask,\n            handleRemoveTask,\n            setList: setToDoList\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\contexts\\\\ListContext.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(ListProvider, \"XlMFCjdSHTHkBZ3zooEjK8vrs28=\");\n_c = ListProvider;\nvar _c;\n$RefreshReg$(_c, \"ListProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbnRleHRzL0xpc3RDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBU2U7QUFrQlIsTUFBTUUsNEJBQWNELG9EQUFhQSxDQUFDLENBQUMsR0FBdUI7QUFFbEQsU0FBU0UsYUFBYSxLQUVpQyxFQUFFO1FBRm5DLEVBQ25DQyxTQUFRLEVBQzRELEdBRmpDOztJQUduQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQWMsRUFBRTtJQUV4RCxNQUFNTyxrQkFBa0IsQ0FBQ0MsU0FBbUI7UUFDMUMsSUFBSUMsWUFBWUMsZ0JBQWdCTDtRQUNoQyxJQUFJLENBQUNNLGFBQWEsR0FBR0YsVUFBVUcsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS047UUFDNURHLGFBQWFJLE1BQU0sR0FBRyxDQUFDSixhQUFhSSxNQUFNO1FBQzFDVCxZQUFZRztJQUNkO0lBRUEsTUFBTU8saUJBQWlCLENBQUNSLFNBQW1CO1FBQ3pDLElBQUlDLFlBQVlDLGdCQUFnQkw7UUFDaEMsSUFBSSxDQUFDTSxhQUFhLEdBQUdGLFVBQVVHLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxFQUFFLEtBQUtOO1FBQzVERyxhQUFhTSxRQUFRLEdBQUcsQ0FBQ04sYUFBYU0sUUFBUTtRQUM5Q1gsWUFBWUc7SUFDZDtJQUVBLE1BQU1TLG1CQUFtQixDQUFDVixTQUFtQjtRQUMzQ0YsWUFBWUQsU0FBU08sTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS047SUFDcEQ7SUFFQSxTQUFTVyxpQkFBaUJDLEtBQWEsRUFBRSxDQUFDO0lBRTFDLHFCQUNFLDhEQUFDbEIsWUFBWW1CLFFBQVE7UUFDbkJELE9BQU87WUFDTEUsTUFBTWpCO1lBQ05XO1lBQ0FUO1lBQ0FXO1lBQ0FLLFNBQVNqQjtRQUNYO2tCQUVDRjs7Ozs7O0FBR1AsQ0FBQztHQXRDdUJEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb250ZXh0cy9MaXN0Q29udGV4dC50c3g/NTBmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCB7XHJcbiAgRGlzcGF0Y2gsXHJcbiAgdXNlU3RhdGUsXHJcbiAgY3JlYXRlQ29udGV4dCxcclxuICBIVE1MQXR0cmlidXRlcyxcclxuICBTZXRTdGF0ZUFjdGlvbixcclxuICBEZXRhaWxlZEhUTUxQcm9wcyxcclxufSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGFzayB7XHJcbiAgaWQ6IG51bWJlcjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBib29sZWFuO1xyXG4gIGVkaXRhYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTGlzdENvbnRleHRQcm9wcyB7XHJcbiAgbGlzdDogQXJyYXk8VGFzaz47XHJcbiAgaGFuZGxlQ2hhbmdlVGFzayh2YWx1ZTogc3RyaW5nKTogdm9pZDtcclxuICBoYW5kbGVDaGVja1Rhc2s6ICh0YXNrSWQ6IG51bWJlcikgPT4gdm9pZDtcclxuICBoYW5kbGVSZW1vdmVUYXNrOiAodGFza0lkOiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgaGFuZGxlRWRpdEJ1dHRvblRhc2s6ICh0YXNrSWQ6IG51bWJlcikgPT4gdm9pZDtcclxuICBzZXRMaXN0OiBEaXNwYXRjaDxTZXRTdGF0ZUFjdGlvbjxUYXNrW10+PjtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IExpc3RDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBMaXN0Q29udGV4dFByb3BzKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExpc3RQcm92aWRlcih7XHJcbiAgY2hpbGRyZW4sXHJcbn06IERldGFpbGVkSFRNTFByb3BzPEhUTUxBdHRyaWJ1dGVzPEhUTUxCb2R5RWxlbWVudD4sIEhUTUxCb2R5RWxlbWVudD4pIHtcclxuICBjb25zdCBbdG9Eb0xpc3QsIHNldFRvRG9MaXN0XSA9IHVzZVN0YXRlPEFycmF5PFRhc2s+PihbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNoZWNrVGFzayA9ICh0YXNrSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgbGV0IGNsb25lTGlzdCA9IHN0cnVjdHVyZWRDbG9uZSh0b0RvTGlzdCk7XHJcbiAgICBsZXQgW3NlbGVjdGVkVGFza10gPSBjbG9uZUxpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xyXG4gICAgc2VsZWN0ZWRUYXNrLnN0YXR1cyA9ICFzZWxlY3RlZFRhc2suc3RhdHVzO1xyXG4gICAgc2V0VG9Eb0xpc3QoY2xvbmVMaXN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVFZGl0VGFzayA9ICh0YXNrSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgbGV0IGNsb25lTGlzdCA9IHN0cnVjdHVyZWRDbG9uZSh0b0RvTGlzdCk7XHJcbiAgICBsZXQgW3NlbGVjdGVkVGFza10gPSBjbG9uZUxpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xyXG4gICAgc2VsZWN0ZWRUYXNrLmVkaXRhYmxlID0gIXNlbGVjdGVkVGFzay5lZGl0YWJsZTtcclxuICAgIHNldFRvRG9MaXN0KGNsb25lTGlzdCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVtb3ZlVGFzayA9ICh0YXNrSWQ6IG51bWJlcikgPT4ge1xyXG4gICAgc2V0VG9Eb0xpc3QodG9Eb0xpc3QuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmlkICE9PSB0YXNrSWQpKTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2VUYXNrKHZhbHVlOiBzdHJpbmcpIHt9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGlzdENvbnRleHQuUHJvdmlkZXJcclxuICAgICAgdmFsdWU9e3tcclxuICAgICAgICBsaXN0OiB0b0RvTGlzdCxcclxuICAgICAgICBoYW5kbGVFZGl0VGFzayxcclxuICAgICAgICBoYW5kbGVDaGVja1Rhc2ssXHJcbiAgICAgICAgaGFuZGxlUmVtb3ZlVGFzayxcclxuICAgICAgICBzZXRMaXN0OiBzZXRUb0RvTGlzdCxcclxuICAgICAgfX1cclxuICAgID5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9MaXN0Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJMaXN0Q29udGV4dCIsIkxpc3RQcm92aWRlciIsImNoaWxkcmVuIiwidG9Eb0xpc3QiLCJzZXRUb0RvTGlzdCIsImhhbmRsZUNoZWNrVGFzayIsInRhc2tJZCIsImNsb25lTGlzdCIsInN0cnVjdHVyZWRDbG9uZSIsInNlbGVjdGVkVGFzayIsImZpbHRlciIsInRhc2siLCJpZCIsInN0YXR1cyIsImhhbmRsZUVkaXRUYXNrIiwiZWRpdGFibGUiLCJoYW5kbGVSZW1vdmVUYXNrIiwiaGFuZGxlQ2hhbmdlVGFzayIsInZhbHVlIiwiUHJvdmlkZXIiLCJsaXN0Iiwic2V0TGlzdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/contexts/ListContext.tsx\n"));

/***/ })

});