"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app\\page",{

/***/ "./components/ExploreCard.jsx":
/*!************************************!*\
  !*** ./components/ExploreCard.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst ExploreCard = (param)=>/*#__PURE__*/ {\n    let { id , imgUrl , title , index , active , handleClick  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.fadeIn)(\"right\", \"spring\", index * 0.5, 0.75),\n        className: \"relative \".concat(active === id ? \"lg:flex-[3.5] flex-[10]\" : \"lg:flex-[0.5] flex-[2]\", \" flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer\"),\n        onClick: ()=>handleClick(id),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: imgUrl,\n                alt: \"title\",\n                className: \"absolute w-full h-full object-cover sm:rounded-[24px] rounded-lg\"\n            }, void 0, false, {\n                fileName: \"C:\\\\My WebApps\\\\Metaversus\\\\components\\\\ExploreCard.jsx\",\n                lineNumber: 9,\n                columnNumber: 5\n            }, undefined),\n            active !== id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-24 lg:rotate-[-90deg] lg:origin-[0,0]\",\n                children: title\n            }, void 0, false, {\n                fileName: \"C:\\\\My WebApps\\\\Metaversus\\\\components\\\\ExploreCard.jsx\",\n                lineNumber: 11,\n                columnNumber: 23\n            }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-0 p-8 justify-start w-full flex-col bg-[rgba(0,0,0,0,0.5)] rounded-b-[24px]\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" w-[60px] h-[60px] r rounded-[24px] glassmorphism mb-[16px]\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: \"/headset.svg\",\n                            alt: \"headset\",\n                            className: \"w-1/2 h-1/2 object-contain\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\My WebApps\\\\Metaversus\\\\components\\\\ExploreCard.jsx\",\n                            lineNumber: 14,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\My WebApps\\\\Metaversus\\\\components\\\\ExploreCard.jsx\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-[16px] leading-[20px] text-white uppercast\",\n                        children: \"Enter the Metaverse\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\My WebApps\\\\Metaversus\\\\components\\\\ExploreCard.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white\",\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\My WebApps\\\\Metaversus\\\\components\\\\ExploreCard.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\My WebApps\\\\Metaversus\\\\components\\\\ExploreCard.jsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\My WebApps\\\\Metaversus\\\\components\\\\ExploreCard.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n};\n_c = ExploreCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ExploreCard);\nvar _c;\n$RefreshReg$(_c, \"ExploreCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRXVDO0FBQ1I7QUFDVTtBQUV6QyxNQUFNRyxjQUFjLHVCQUNsQjtRQURtQixFQUFFQyxHQUFFLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFQyxNQUFLLEVBQUVDLE9BQU0sRUFBRUMsWUFBVyxFQUFFO1dBQ3BFLDhEQUFDVCxxREFBVTtRQUFDVyxVQUFVVCxxREFBTUEsQ0FBQyxTQUFTLFVBQVVLLFFBQVEsS0FBSztRQUFPSyxXQUFXLFlBQWlGLE9BQXJFSixXQUFXSixLQUFLLDRCQUE0Qix3QkFBd0IsRUFBQztRQUEySFMsU0FBUyxJQUFNSixZQUFZTDs7MEJBQ3BULDhEQUFDVTtnQkFBSUMsS0FBS1Y7Z0JBQVFXLEtBQUk7Z0JBQVFKLFdBQVU7Ozs7OztZQUV2Q0osV0FBV0osbUJBQU0sOERBQUNhO2dCQUFHTCxXQUFVOzBCQUFvSE47Ozs7OzBDQUNsSiw4REFBQ0k7Z0JBQUlFLFdBQVU7O2tDQUNiLDhEQUFDRjt3QkFBSUUsV0FBVyxHQUFxQixPQUFsQlgsMERBQWlCLEVBQUM7a0NBQ25DLDRFQUFDYTs0QkFBSUMsS0FBSTs0QkFBZUMsS0FBSTs0QkFBVUosV0FBVTs7Ozs7Ozs7Ozs7a0NBRWxELDhEQUFDTzt3QkFBRVAsV0FBVTtrQ0FBOEQ7Ozs7OztrQ0FHM0UsOERBQUNRO3dCQUFHUixXQUFVO2tDQUFpRU47Ozs7Ozs7Ozs7O3lCQUdsRjs7Ozs7OztBQUVTO0tBakJSSDtBQW9CTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0V4cGxvcmVDYXJkLmpzeD8yM2NjIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcyc7XG5pbXBvcnQgeyBmYWRlSW4gfSBmcm9tICcuLi91dGlscy9tb3Rpb24nO1xuXG5jb25zdCBFeHBsb3JlQ2FyZCA9ICh7IGlkLCBpbWdVcmwsIHRpdGxlLCBpbmRleCwgYWN0aXZlLCBoYW5kbGVDbGljayB9KSA9PiAoXG4gIDxtb3Rpb24uZGl2IHZhcmlhbnRzPXtmYWRlSW4oJ3JpZ2h0JywgJ3NwcmluZycsIGluZGV4ICogMC41LCAwLjc1KX0gY2xhc3NOYW1lPXtgcmVsYXRpdmUgJHthY3RpdmUgPT09IGlkID8gJ2xnOmZsZXgtWzMuNV0gZmxleC1bMTBdJyA6ICdsZzpmbGV4LVswLjVdIGZsZXgtWzJdJ30gZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgbWluLXctWzE3MHB4XSBoLVs3MDBweF0gdHJhbnNpdGlvbi1bZmxleF0gZHVyYXRpb24tWzAuN3NdIGVhc2Utb3V0LWZsZXggY3Vyc29yLXBvaW50ZXJgfSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpZCl9PlxuICAgIDxpbWcgc3JjPXtpbWdVcmx9IGFsdD1cInRpdGxlXCIgY2xhc3NOYW1lPVwiYWJzb2x1dGUgdy1mdWxsIGgtZnVsbCBvYmplY3QtY292ZXIgc206cm91bmRlZC1bMjRweF0gcm91bmRlZC1sZ1wiIC8+XG5cbiAgICB7YWN0aXZlICE9PSBpZCA/ICg8aDMgY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZCBzbTp0ZXh0LVsyNnB4XSB0ZXh0LVsxOHB4XSB0ZXh0LXdoaXRlIGFic29sdXRlIHotMCBsZzpib3R0b20tMjQgbGc6cm90YXRlLVstOTBkZWddIGxnOm9yaWdpbi1bMCwwXVwiPnt0aXRsZX08L2gzPikgOiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0wIHAtOCBqdXN0aWZ5LXN0YXJ0IHctZnVsbCBmbGV4LWNvbCBiZy1bcmdiYSgwLDAsMCwwLDAuNSldIHJvdW5kZWQtYi1bMjRweF1cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5mbGV4Q2VudGVyfSB3LVs2MHB4XSBoLVs2MHB4XSByIHJvdW5kZWQtWzI0cHhdIGdsYXNzbW9ycGhpc20gbWItWzE2cHhdYH0+XG4gICAgICAgICAgPGltZyBzcmM9XCIvaGVhZHNldC5zdmdcIiBhbHQ9XCJoZWFkc2V0XCIgY2xhc3NOYW1lPVwidy0xLzIgaC0xLzIgb2JqZWN0LWNvbnRhaW5cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1bMTZweF0gbGVhZGluZy1bMjBweF0gdGV4dC13aGl0ZSB1cHBlcmNhc3RcIj5cbiAgICAgICAgICBFbnRlciB0aGUgTWV0YXZlcnNlXG4gICAgICAgIDwvcD5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT1cIm10LVsyNHB4XSBmb250LXNlbWlib2xkIHNtOnRleHQtWzMycHhdIHRleHQtWzI0cHhdIHRleHQtd2hpdGVcIj57dGl0bGV9PC9oMj5cblxuICAgICAgPC9kaXY+XG4gICAgKX1cblxuICA8L21vdGlvbi5kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBFeHBsb3JlQ2FyZDtcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJzdHlsZXMiLCJmYWRlSW4iLCJFeHBsb3JlQ2FyZCIsImlkIiwiaW1nVXJsIiwidGl0bGUiLCJpbmRleCIsImFjdGl2ZSIsImhhbmRsZUNsaWNrIiwiZGl2IiwidmFyaWFudHMiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiLCJmbGV4Q2VudGVyIiwicCIsImgyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/ExploreCard.jsx\n"));

/***/ })

});