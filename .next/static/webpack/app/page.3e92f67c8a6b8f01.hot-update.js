"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.jsx":
/*!**********************!*\
  !*** ./app/page.jsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_app_page_jsx_import_Monoton_arguments_subsets_latin_weight_400_variable_font_monoton_variableName_Mono___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"app/page.jsx\",\"import\":\"Monoton\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"400\"],\"variable\":\"--font-monoton\"}],\"variableName\":\"Mono\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"app/page.jsx\\\",\\\"import\\\":\\\"Monoton\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"400\\\"],\\\"variable\\\":\\\"--font-monoton\\\"}],\\\"variableName\\\":\\\"Mono\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_app_page_jsx_import_Monoton_arguments_subsets_latin_weight_400_variable_font_monoton_variableName_Mono___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_app_page_jsx_import_Monoton_arguments_subsets_latin_weight_400_variable_font_monoton_variableName_Mono___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var alchemy_sdk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! alchemy-sdk */ \"(app-pages-browser)/./node_modules/alchemy-sdk/dist/esm/index-03ad9998.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/index-dc6125bc.esm.js\");\n/* harmony import */ var _react_three_fiber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-three/fiber */ \"(app-pages-browser)/./node_modules/@react-three/fiber/dist/react-three-fiber.esm.js\");\n/* harmony import */ var _react_three_drei__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-three/drei */ \"(app-pages-browser)/./node_modules/@react-three/drei/core/OrbitControls.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader */ \"(app-pages-browser)/./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n// Setup: npm install alchemy-sdk\n\n\n\n\n\n\nfunction MeshComponent() {\n    _s();\n    const fileUrl = \"model/scene.gltf\";\n    const mesh = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(\"\");\n    const gltf = (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.D)(three_examples_jsm_loaders_GLTFLoader__WEBPACK_IMPORTED_MODULE_4__.GLTFLoader, fileUrl);\n    (0,_react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.A)(()=>{\n        mesh.current.rotation.y += 0.01;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"mesh\", {\n        ref: mesh,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"primitive\", {\n            object: gltf.scene\n        }, void 0, false, {\n            fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(MeshComponent, \"CrcOfBllH+wez1k32Yf7XmNd5WY=\", false, function() {\n    return [\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.D,\n        _react_three_fiber__WEBPACK_IMPORTED_MODULE_3__.A\n    ];\n});\n_c = MeshComponent;\nfunction Home() {\n    _s1();\n    const [nftc, setNfts] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const addressref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(\"\");\n    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D\");\n    const config = {\n        apiKey: \"ZiO0i9U7iaI7bEcm1-wYzMfhK5OxP9sl\",\n        network: alchemy_sdk__WEBPACK_IMPORTED_MODULE_5__.N.ETH_MAINNET\n    };\n    const alchemy = new alchemy_sdk__WEBPACK_IMPORTED_MODULE_5__.m(config);\n    const reload = ()=>{\n        setAddress(addressref.current.value);\n        addressref.current.value = \"\";\n    };\n    const main = async ()=>{\n        // Flag to omit metadata\n        const omitMetadata = false;\n        // Get all NFTs\n        const { nfts } = await alchemy.nft.getNftsForContract(address, {\n            omitMetadata: omitMetadata\n        });\n        // console.log(nfts);\n        let arr = [];\n        for(let i = 0; i < nfts.length; i++){\n            const nft = nfts[i];\n            arr.push([\n                nft.contract.name,\n                nft.rawMetadata.image.replace(\"ipfs://\", \"https://ipfs.io/ipfs/\")\n            ]);\n        }\n        setNfts(arr);\n        console.log(arr);\n    };\n    const runMain = async ()=>{\n        try {\n            await main();\n        } catch (error) {\n            alert(\"Error: \" + error);\n            console.log(error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        runMain();\n    }, [\n        address\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center h-[40vh]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_fiber__WEBPACK_IMPORTED_MODULE_6__.Canvas, {\n                    flat: true,\n                    linear: true,\n                    className: \"h-full w-l\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_react_three_drei__WEBPACK_IMPORTED_MODULE_7__.OrbitControls, {}, void 0, false, {\n                            fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                            lineNumber: 90,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ambientLight\", {}, void 0, false, {\n                            fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                            lineNumber: 91,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pointLight\", {\n                            position: [\n                                10,\n                                10,\n                                10\n                            ]\n                        }, void 0, false, {\n                            fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MeshComponent, {\n                            scale: 2\n                        }, void 0, false, {\n                            fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                            lineNumber: 93,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                    lineNumber: 89,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-4xl font-monoton \".concat((next_font_google_target_css_path_app_page_jsx_import_Monoton_arguments_subsets_latin_weight_400_variable_font_monoton_variableName_Mono___WEBPACK_IMPORTED_MODULE_8___default().variable), \" font-dots text-center\"),\n                children: \"ギャラリー\"\n            }, void 0, false, {\n                fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: \"text-4xl font-monoton \".concat((next_font_google_target_css_path_app_page_jsx_import_Monoton_arguments_subsets_latin_weight_400_variable_font_monoton_variableName_Mono___WEBPACK_IMPORTED_MODULE_8___default().variable), \" font-dots text-center py-[5%]\"),\n                children: \"Gallery\"\n            }, void 0, false, {\n                fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                lineNumber: 101,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"w-[30%] transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 m-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    type: \"text\",\n                    placeholder: \"0xenter-address\",\n                    class: \"w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none\",\n                    ref: addressref\n                }, void 0, false, {\n                    fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                    lineNumber: 107,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"m-auto py-[2%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"w-[40px] h-[40px] rounded-full  bg-indigo-500 hover:bg-red-500 hover:scale-110 hover:cursor-pointer text-white m-auto\",\n                    onClick: ()=>reload()\n                }, void 0, false, {\n                    fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                    lineNumber: 115,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex min-h-screen flex-col items-center justify-between px-24 py-[5%]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    class: \"container px-5 mx-auto\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"flex flex-wrap -m-4 text-center\",\n                        children: nftc && nftc.map((nft, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"p-4 md:w-1/4 sm:w-1/2 w-full\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"border-2 mx-auto border-gray-600 px-4 py-6 rounded-lg transform transition duration-500 hover:scale-110\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            src: nft[1],\n                                            width: 200,\n                                            height: 200,\n                                            className: \"rounded-lg w-[80%] m-auto\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                                            lineNumber: 141,\n                                            columnNumber: 21\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"py-[4%] text-2xl text-ellipsis font-dots \",\n                                            children: [\n                                                nft[0],\n                                                \" \" + index\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                                            lineNumber: 147,\n                                            columnNumber: 21\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                                    lineNumber: 140,\n                                    columnNumber: 19\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                                lineNumber: 139,\n                                columnNumber: 17\n                            }, this))\n                    }, void 0, false, {\n                        fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                        lineNumber: 123,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                    lineNumber: 122,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/abhiraj/git/gallery/app/page.jsx\",\n        lineNumber: 87,\n        columnNumber: 5\n    }, this);\n}\n_s1(Home, \"OaFMZH87zwXb6VMj5ccQ97pS9ZI=\");\n_c1 = Home;\nvar _c, _c1;\n$RefreshReg$(_c, \"MeshComponent\");\n$RefreshReg$(_c1, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WTtvQkFDWkgsT0FBTTtvQkFDTjlDLEtBQUtPOzs7Ozs7Ozs7OzswQkFHVCw4REFBQzZCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFDQ0MsV0FBVTtvQkFFVmEsU0FBUyxJQUFNbkM7Ozs7Ozs7Ozs7OzBCQUduQiw4REFBQ3FCO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSVUsT0FBTTs4QkFDVCw0RUFBQ1Y7d0JBQUlVLE9BQU07a0NBY1J6QyxRQUNDQSxLQUFLOEMsR0FBRyxDQUFDLENBQUMvQixLQUFLZ0Msc0JBQ2IsOERBQUNoQjtnQ0FBSVUsT0FBTTswQ0FDVCw0RUFBQ1Y7b0NBQUlVLE9BQU07O3NEQUNULDhEQUFDakUsbURBQUtBOzRDQUNKd0UsS0FBS2pDLEdBQUcsQ0FBQyxFQUFFOzRDQUNYa0MsT0FBTzs0Q0FDUEMsUUFBUTs0Q0FDUmxCLFdBQVU7Ozs7OztzREFFWiw4REFBQ087NENBQUdQLFdBQVU7O2dEQUNYakIsR0FBRyxDQUFDLEVBQUU7Z0RBQ04sTUFBTWdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFVN0I7SUE3SHdCaEQ7TUFBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UuanN4PzZlNDEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbi8vIFNldHVwOiBucG0gaW5zdGFsbCBhbGNoZW15LXNka1xuaW1wb3J0IHsgQWxjaGVteSwgTmV0d29yayB9IGZyb20gXCJhbGNoZW15LXNka1wiO1xuaW1wb3J0IHsgdXNlUmVmLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBNb25vdG9uIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCB7IENhbnZhcywgdXNlRnJhbWUsIHVzZUxvYWRlciB9IGZyb20gXCJAcmVhY3QtdGhyZWUvZmliZXJcIjtcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tIFwiQHJlYWN0LXRocmVlL2RyZWlcIjtcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlclwiO1xuaW1wb3J0IHsgTWVzaCB9IGZyb20gXCJ0aHJlZVwiO1xuXG5jb25zdCBNb25vID0gTW9ub3Rvbih7XG4gIHN1YnNldHM6IFtcImxhdGluXCJdLFxuICB3ZWlnaHQ6IFtcIjQwMFwiXSxcbiAgdmFyaWFibGU6IFwiLS1mb250LW1vbm90b25cIixcbn0pO1xuXG5mdW5jdGlvbiBNZXNoQ29tcG9uZW50KCkge1xuICBjb25zdCBmaWxlVXJsID0gXCJtb2RlbC9zY2VuZS5nbHRmXCI7XG4gIGNvbnN0IG1lc2ggPSB1c2VSZWYoXCJcIik7XG4gIGNvbnN0IGdsdGYgPSB1c2VMb2FkZXIoR0xURkxvYWRlciwgZmlsZVVybCk7XG5cbiAgdXNlRnJhbWUoKCkgPT4ge1xuICAgIG1lc2guY3VycmVudC5yb3RhdGlvbi55ICs9IDAuMDE7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPG1lc2ggcmVmPXttZXNofT5cbiAgICAgIDxwcmltaXRpdmUgb2JqZWN0PXtnbHRmLnNjZW5lfSAvPlxuICAgIDwvbWVzaD5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW25mdGMsIHNldE5mdHNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBhZGRyZXNzcmVmID0gdXNlUmVmKFwiXCIpO1xuICBjb25zdCBbYWRkcmVzcywgc2V0QWRkcmVzc10gPSB1c2VTdGF0ZShcbiAgICBcIjB4QkM0Q0EwRWRBNzY0N0E4YUI3QzIwNjFjMkUxMThBMThhOTM2ZjEzRFwiXG4gICk7XG4gIGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGlLZXk6IFwiWmlPMGk5VTdpYUk3YkVjbTEtd1l6TWZoSzVPeFA5c2xcIixcbiAgICBuZXR3b3JrOiBOZXR3b3JrLkVUSF9NQUlOTkVULFxuICB9O1xuICBjb25zdCBhbGNoZW15ID0gbmV3IEFsY2hlbXkoY29uZmlnKTtcbiAgY29uc3QgcmVsb2FkID0gKCkgPT4ge1xuICAgIHNldEFkZHJlc3MoYWRkcmVzc3JlZi5jdXJyZW50LnZhbHVlKTtcbiAgICBhZGRyZXNzcmVmLmN1cnJlbnQudmFsdWUgPSBcIlwiO1xuICB9O1xuXG4gIGNvbnN0IG1haW4gPSBhc3luYyAoKSA9PiB7XG4gICAgLy8gRmxhZyB0byBvbWl0IG1ldGFkYXRhXG4gICAgY29uc3Qgb21pdE1ldGFkYXRhID0gZmFsc2U7XG5cbiAgICAvLyBHZXQgYWxsIE5GVHNcbiAgICBjb25zdCB7IG5mdHMgfSA9IGF3YWl0IGFsY2hlbXkubmZ0LmdldE5mdHNGb3JDb250cmFjdChhZGRyZXNzLCB7XG4gICAgICBvbWl0TWV0YWRhdGE6IG9taXRNZXRhZGF0YSxcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKG5mdHMpO1xuXG4gICAgbGV0IGFyciA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmZ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgbmZ0ID0gbmZ0c1tpXTtcbiAgICAgIGFyci5wdXNoKFtcbiAgICAgICAgbmZ0LmNvbnRyYWN0Lm5hbWUsXG4gICAgICAgIG5mdC5yYXdNZXRhZGF0YS5pbWFnZS5yZXBsYWNlKFwiaXBmczovL1wiLCBcImh0dHBzOi8vaXBmcy5pby9pcGZzL1wiKSxcbiAgICAgIF0pO1xuICAgIH1cbiAgICBzZXROZnRzKGFycik7XG4gICAgY29uc29sZS5sb2coYXJyKTtcbiAgfTtcblxuICBjb25zdCBydW5NYWluID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBtYWluKCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGFsZXJ0KFwiRXJyb3I6IFwiICsgZXJyb3IpO1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHJ1bk1haW4oKTtcbiAgfSwgW2FkZHJlc3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciBoLVs0MHZoXVwiPlxuICAgICAgICA8Q2FudmFzIGZsYXQgbGluZWFyIGNsYXNzTmFtZT1cImgtZnVsbCB3LWxcIj5cbiAgICAgICAgICA8T3JiaXRDb250cm9scyAvPlxuICAgICAgICAgIDxhbWJpZW50TGlnaHQgLz5cbiAgICAgICAgICA8cG9pbnRMaWdodCBwb3NpdGlvbj17WzEwLCAxMCwgMTBdfSAvPlxuICAgICAgICAgIDxNZXNoQ29tcG9uZW50IHNjYWxlPXsyfSAvPlxuICAgICAgICA8L0NhbnZhcz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyXG4gICAgICAgIGNsYXNzTmFtZT17YHRleHQtNHhsIGZvbnQtbW9ub3RvbiAke01vbm8udmFyaWFibGV9IGZvbnQtZG90cyB0ZXh0LWNlbnRlcmB9XG4gICAgICA+XG4gICAgICAgIOOCruODo+ODqeODquODvFxuICAgICAgPC9oMj5cbiAgICAgIDxoMlxuICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LTR4bCBmb250LW1vbm90b24gJHtNb25vLnZhcmlhYmxlfSBmb250LWRvdHMgdGV4dC1jZW50ZXIgcHktWzUlXWB9XG4gICAgICA+XG4gICAgICAgIEdhbGxlcnlcbiAgICAgIDwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwidy1bMzAlXSB0cmFuc2Zvcm0gYm9yZGVyLWItMiBiZy10cmFuc3BhcmVudCB0ZXh0LWxnIGR1cmF0aW9uLTMwMCBmb2N1cy13aXRoaW46Ym9yZGVyLWluZGlnby01MDAgbS1hdXRvXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIjB4ZW50ZXItYWRkcmVzc1wiXG4gICAgICAgICAgY2xhc3M9XCJ3LWZ1bGwgYm9yZGVyLW5vbmUgYmctdHJhbnNwYXJlbnQgb3V0bGluZS1ub25lIHBsYWNlaG9sZGVyOml0YWxpYyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgIHJlZj17YWRkcmVzc3JlZn1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtLWF1dG8gcHktWzIlXVwiPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1bNDBweF0gaC1bNDBweF0gcm91bmRlZC1mdWxsIFxuICAgICAgICAgICAgICAgICAgICAgICBiZy1pbmRpZ28tNTAwIGhvdmVyOmJnLXJlZC01MDAgaG92ZXI6c2NhbGUtMTEwIGhvdmVyOmN1cnNvci1wb2ludGVyIHRleHQtd2hpdGUgbS1hdXRvXCJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByZWxvYWQoKX1cbiAgICAgICAgPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHgtMjQgcHktWzUlXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyIHB4LTUgbXgtYXV0b1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGZsZXgtd3JhcCAtbS00IHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzcz1cInAtNCBtZDp3LTEvNCBzbTp3LTEvMiB3LWZ1bGwgaC1bMTAwcHhdXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3JkZXItMiBteC1hdXRvIGJvcmRlci1ncmF5LTYwMCBweC00IHB5LTYgcm91bmRlZC1sZyB0cmFuc2Zvcm0gdHJhbnNpdGlvbiBkdXJhdGlvbi01MDAgaG92ZXI6c2NhbGUtMTEwXCI+XG4gICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICBzcmM9e1xuICAgICAgICAgICAgICAgICAgICBcImh0dHBzOmlwZnMuaW8vaXBmcy9RbVVpQ3FtSFpkNUN4ZUdzYW1pem1TMlk4ZVN1TWtOZ1ZONDRSekxjRlZjdHl3XCJcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsyMDB9XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezIwMH1cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy1bODAlXSBtLWF1dG9cIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInAtMSB0ZXh0LTJ4bCBmb250LWRvdHMgXCI+TkZUPC9oMj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICB7bmZ0YyAmJlxuICAgICAgICAgICAgICBuZnRjLm1hcCgobmZ0LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwLTQgbWQ6dy0xLzQgc206dy0xLzIgdy1mdWxsXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm9yZGVyLTIgbXgtYXV0byBib3JkZXItZ3JheS02MDAgcHgtNCBweS02IHJvdW5kZWQtbGcgdHJhbnNmb3JtIHRyYW5zaXRpb24gZHVyYXRpb24tNTAwIGhvdmVyOnNjYWxlLTExMFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e25mdFsxXX1cbiAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MjAwfVxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjAwfVxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGcgdy1bODAlXSBtLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHktWzQlXSB0ZXh0LTJ4bCB0ZXh0LWVsbGlwc2lzIGZvbnQtZG90cyBcIj5cbiAgICAgICAgICAgICAgICAgICAgICB7bmZ0WzBdfVxuICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIiArIGluZGV4fVxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJNb25vIiwiSW1hZ2UiLCJBbGNoZW15IiwiTmV0d29yayIsInVzZVJlZiIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FudmFzIiwidXNlRnJhbWUiLCJ1c2VMb2FkZXIiLCJPcmJpdENvbnRyb2xzIiwiR0xURkxvYWRlciIsIk1lc2giLCJNZXNoQ29tcG9uZW50IiwiZmlsZVVybCIsIm1lc2giLCJnbHRmIiwiY3VycmVudCIsInJvdGF0aW9uIiwieSIsInJlZiIsInByaW1pdGl2ZSIsIm9iamVjdCIsInNjZW5lIiwiSG9tZSIsIm5mdGMiLCJzZXROZnRzIiwiYWRkcmVzc3JlZiIsImFkZHJlc3MiLCJzZXRBZGRyZXNzIiwiY29uZmlnIiwiYXBpS2V5IiwibmV0d29yayIsIkVUSF9NQUlOTkVUIiwiYWxjaGVteSIsInJlbG9hZCIsInZhbHVlIiwibWFpbiIsIm9taXRNZXRhZGF0YSIsIm5mdHMiLCJuZnQiLCJnZXROZnRzRm9yQ29udHJhY3QiLCJhcnIiLCJpIiwibGVuZ3RoIiwicHVzaCIsImNvbnRyYWN0IiwibmFtZSIsInJhd01ldGFkYXRhIiwiaW1hZ2UiLCJyZXBsYWNlIiwiY29uc29sZSIsImxvZyIsInJ1bk1haW4iLCJlcnJvciIsImFsZXJ0IiwiZGl2IiwiY2xhc3NOYW1lIiwiZmxhdCIsImxpbmVhciIsImFtYmllbnRMaWdodCIsInBvaW50TGlnaHQiLCJwb3NpdGlvbiIsInNjYWxlIiwiaDIiLCJ2YXJpYWJsZSIsImNsYXNzIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJvbkNsaWNrIiwibWFwIiwiaW5kZXgiLCJzcmMiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.jsx\n"));

/***/ })

});