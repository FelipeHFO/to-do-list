"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/contexts/ListContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/ListContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ListContext\": function() { return /* binding */ ListContext; },\n/* harmony export */   \"default\": function() { return /* binding */ ListProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst ListContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction ListProvider(param) {\n    let { children  } = param;\n    _s();\n    const [toDoList, setToDoList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const handleCheckTask = (taskId)=>{\n        let cloneList = structuredClone(toDoList);\n        let [selectedTask] = cloneList.filter((task)=>task.id === taskId);\n        selectedTask.status = !selectedTask.status;\n        setToDoList(cloneList);\n    };\n    const handleEditButtonTask = (taskId)=>{\n        let cloneList = structuredClone(toDoList);\n        let [selectedTask] = cloneList.filter((task)=>task.id === taskId);\n        selectedTask.editable = !selectedTask.editable;\n        setToDoList(cloneList);\n    };\n    const handleRemoveTask = (taskId)=>{\n        setToDoList(toDoList.filter((task)=>task.id !== taskId));\n    };\n    function handleChangeTask(value) {\n        console.log(Value);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ListContext.Provider, {\n        value: {\n            list: toDoList,\n            handleCheckTask,\n            handleChangeTask,\n            handleRemoveTask,\n            handleEditButtonTask,\n            setList: setToDoList\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Felipe Oliveira\\\\Documents\\\\GitHub\\\\to-do-list\\\\src\\\\contexts\\\\ListContext.tsx\",\n        lineNumber: 58,\n        columnNumber: 5\n    }, this);\n}\n_s(ListProvider, \"XlMFCjdSHTHkBZ3zooEjK8vrs28=\");\n_c = ListProvider;\nvar _c;\n$RefreshReg$(_c, \"ListProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbnRleHRzL0xpc3RDb250ZXh0LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBU2U7QUFrQlIsTUFBTUUsNEJBQWNELG9EQUFhQSxDQUFDLENBQUMsR0FBdUI7QUFFbEQsU0FBU0UsYUFBYSxLQUVpQyxFQUFFO1FBRm5DLEVBQ25DQyxTQUFRLEVBQzRELEdBRmpDOztJQUduQyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQWMsRUFBRTtJQUV4RCxNQUFNTyxrQkFBa0IsQ0FBQ0MsU0FBbUI7UUFDMUMsSUFBSUMsWUFBWUMsZ0JBQWdCTDtRQUNoQyxJQUFJLENBQUNNLGFBQWEsR0FBR0YsVUFBVUcsTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS047UUFDNURHLGFBQWFJLE1BQU0sR0FBRyxDQUFDSixhQUFhSSxNQUFNO1FBQzFDVCxZQUFZRztJQUNkO0lBRUEsTUFBTU8sdUJBQXVCLENBQUNSLFNBQW1CO1FBQy9DLElBQUlDLFlBQVlDLGdCQUFnQkw7UUFDaEMsSUFBSSxDQUFDTSxhQUFhLEdBQUdGLFVBQVVHLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLQyxFQUFFLEtBQUtOO1FBQzVERyxhQUFhTSxRQUFRLEdBQUcsQ0FBQ04sYUFBYU0sUUFBUTtRQUM5Q1gsWUFBWUc7SUFDZDtJQUVBLE1BQU1TLG1CQUFtQixDQUFDVixTQUFtQjtRQUMzQ0YsWUFBWUQsU0FBU08sTUFBTSxDQUFDLENBQUNDLE9BQVNBLEtBQUtDLEVBQUUsS0FBS047SUFDcEQ7SUFFQSxTQUFTVyxpQkFBaUJDLEtBQWEsRUFBRTtRQUN2Q0MsUUFBUUMsR0FBRyxDQUFDQztJQUNkO0lBRUEscUJBQ0UsOERBQUNyQixZQUFZc0IsUUFBUTtRQUNuQkosT0FBTztZQUNMSyxNQUFNcEI7WUFDTkU7WUFDQVk7WUFDQUQ7WUFDQUY7WUFDQVUsU0FBU3BCO1FBQ1g7a0JBRUNGOzs7Ozs7QUFHUCxDQUFDO0dBekN1QkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0xpc3RDb250ZXh0LnRzeD81MGY1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBEaXNwYXRjaCxcclxuICB1c2VTdGF0ZSxcclxuICBjcmVhdGVDb250ZXh0LFxyXG4gIEhUTUxBdHRyaWJ1dGVzLFxyXG4gIFNldFN0YXRlQWN0aW9uLFxyXG4gIERldGFpbGVkSFRNTFByb3BzLFxyXG59IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUYXNrIHtcclxuICBpZDogbnVtYmVyO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzdGF0dXM6IGJvb2xlYW47XHJcbiAgZWRpdGFibGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmludGVyZmFjZSBMaXN0Q29udGV4dFByb3BzIHtcclxuICBsaXN0OiBBcnJheTxUYXNrPjtcclxuICBoYW5kbGVDaGFuZ2VUYXNrKHZhbHVlOiBzdHJpbmcpOiB2b2lkO1xyXG4gIGhhbmRsZUNoZWNrVGFzazogKHRhc2tJZDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIGhhbmRsZVJlbW92ZVRhc2s6ICh0YXNrSWQ6IG51bWJlcikgPT4gdm9pZDtcclxuICBoYW5kbGVFZGl0QnV0dG9uVGFzazogKHRhc2tJZDogbnVtYmVyKSA9PiB2b2lkO1xyXG4gIHNldExpc3Q6IERpc3BhdGNoPFNldFN0YXRlQWN0aW9uPFRhc2tbXT4+O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTGlzdENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIExpc3RDb250ZXh0UHJvcHMpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGlzdFByb3ZpZGVyKHtcclxuICBjaGlsZHJlbixcclxufTogRGV0YWlsZWRIVE1MUHJvcHM8SFRNTEF0dHJpYnV0ZXM8SFRNTEJvZHlFbGVtZW50PiwgSFRNTEJvZHlFbGVtZW50Pikge1xyXG4gIGNvbnN0IFt0b0RvTGlzdCwgc2V0VG9Eb0xpc3RdID0gdXNlU3RhdGU8QXJyYXk8VGFzaz4+KFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2hlY2tUYXNrID0gKHRhc2tJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBsZXQgY2xvbmVMaXN0ID0gc3RydWN0dXJlZENsb25lKHRvRG9MaXN0KTtcclxuICAgIGxldCBbc2VsZWN0ZWRUYXNrXSA9IGNsb25lTGlzdC5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XHJcbiAgICBzZWxlY3RlZFRhc2suc3RhdHVzID0gIXNlbGVjdGVkVGFzay5zdGF0dXM7XHJcbiAgICBzZXRUb0RvTGlzdChjbG9uZUxpc3QpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXRCdXR0b25UYXNrID0gKHRhc2tJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBsZXQgY2xvbmVMaXN0ID0gc3RydWN0dXJlZENsb25lKHRvRG9MaXN0KTtcclxuICAgIGxldCBbc2VsZWN0ZWRUYXNrXSA9IGNsb25lTGlzdC5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XHJcbiAgICBzZWxlY3RlZFRhc2suZWRpdGFibGUgPSAhc2VsZWN0ZWRUYXNrLmVkaXRhYmxlO1xyXG4gICAgc2V0VG9Eb0xpc3QoY2xvbmVMaXN0KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZW1vdmVUYXNrID0gKHRhc2tJZDogbnVtYmVyKSA9PiB7XHJcbiAgICBzZXRUb0RvTGlzdCh0b0RvTGlzdC5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2tJZCkpO1xyXG4gIH07XHJcblxyXG4gIGZ1bmN0aW9uIGhhbmRsZUNoYW5nZVRhc2sodmFsdWU6IHN0cmluZykge1xyXG4gICAgY29uc29sZS5sb2coVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxMaXN0Q29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIGxpc3Q6IHRvRG9MaXN0LFxyXG4gICAgICAgIGhhbmRsZUNoZWNrVGFzayxcclxuICAgICAgICBoYW5kbGVDaGFuZ2VUYXNrLFxyXG4gICAgICAgIGhhbmRsZVJlbW92ZVRhc2ssXHJcbiAgICAgICAgaGFuZGxlRWRpdEJ1dHRvblRhc2ssXHJcbiAgICAgICAgc2V0TGlzdDogc2V0VG9Eb0xpc3QsXHJcbiAgICAgIH19XHJcbiAgICA+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvTGlzdENvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJjcmVhdGVDb250ZXh0IiwiTGlzdENvbnRleHQiLCJMaXN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInRvRG9MaXN0Iiwic2V0VG9Eb0xpc3QiLCJoYW5kbGVDaGVja1Rhc2siLCJ0YXNrSWQiLCJjbG9uZUxpc3QiLCJzdHJ1Y3R1cmVkQ2xvbmUiLCJzZWxlY3RlZFRhc2siLCJmaWx0ZXIiLCJ0YXNrIiwiaWQiLCJzdGF0dXMiLCJoYW5kbGVFZGl0QnV0dG9uVGFzayIsImVkaXRhYmxlIiwiaGFuZGxlUmVtb3ZlVGFzayIsImhhbmRsZUNoYW5nZVRhc2siLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJWYWx1ZSIsIlByb3ZpZGVyIiwibGlzdCIsInNldExpc3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/contexts/ListContext.tsx\n"));

/***/ })

});