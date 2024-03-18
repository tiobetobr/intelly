"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "src_components_sections_Hero_jsx";
exports.ids = ["src_components_sections_Hero_jsx"];
exports.modules = {

/***/ "./src/components/sections/Hero.jsx":
/*!******************************************!*\
  !*** ./src/components/sections/Hero.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _data_sections_hero_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @data/sections/hero.json */ \"./src/data/sections/hero.json\");\n/* harmony import */ var splitting_dist_splitting_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! splitting/dist/splitting.css */ \"./node_modules/splitting/dist/splitting.css\");\n/* harmony import */ var splitting_dist_splitting_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(splitting_dist_splitting_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var splitting_dist_splitting_cells_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! splitting/dist/splitting-cells.css */ \"./node_modules/splitting/dist/splitting-cells.css\");\n/* harmony import */ var splitting_dist_splitting_cells_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(splitting_dist_splitting_cells_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! splitting */ \"splitting\");\n/* harmony import */ var splitting__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(splitting__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! scroll-out */ \"scroll-out\");\n/* harmony import */ var scroll_out__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(scroll_out__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst HeroSection = ()=>{\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        splitting__WEBPACK_IMPORTED_MODULE_5___default()({\n            by: \"lines\"\n        });\n        scroll_out__WEBPACK_IMPORTED_MODULE_6___default()({\n            targets: \"[data-onovo-scroll]\",\n            once: true\n        });\n        const allWrap = document.querySelectorAll(\".word\");\n        allWrap.forEach((item)=>{\n            if (!item.parentNode.classList.contains(\"span\")) {\n                let wrapper = document.createElement(\"span\");\n                wrapper.classList.add(\"span\");\n                item.parentNode.insertBefore(wrapper, item);\n                wrapper.appendChild(item);\n            }\n        });\n        const allOverlays = document.querySelectorAll(\"[data-onovo-overlay]\");\n        allOverlays.forEach((item)=>{\n            let overlay = document.createElement(\"div\");\n            overlay.classList.add(\"onovo-overlay\");\n            item.appendChild(overlay);\n        });\n    }, []);\n    const [mute, setMute] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const clickedMuteHeroVideo = (e)=>{\n        e.preventDefault();\n        setMute(!mute);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            className: \"onovo-section onovo-hero\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"image\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                            autoPlay: true,\n                            muted: !mute,\n                            loop: true,\n                            playsInline: true,\n                            id: \"heroVideo\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                                src: _data_sections_hero_json__WEBPACK_IMPORTED_MODULE_2__.video,\n                                type: \"video/mp4\"\n                            }, void 0, false, {\n                                fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                lineNumber: 46,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"ovrl\",\n                            style: {\n                                \"opacity\": \"0.25\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                    lineNumber: 44,\n                    columnNumber: 5\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"container\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"title onovo-text-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                \"data-splitting\": true,\n                                \"data-onovo-scroll\": true,\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        dangerouslySetInnerHTML: {\n                                            __html: _data_sections_hero_json__WEBPACK_IMPORTED_MODULE_2__.title.text\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 29\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"onovo-sep word\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            className: \"sep-img\",\n                                            style: {\n                                                \"backgroundImage\": \"url(\" + _data_sections_hero_json__WEBPACK_IMPORTED_MODULE_2__.title.icon + \")\"\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 29\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                lineNumber: 52,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"subtitle onovo-text-white\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    \"data-splitting\": true,\n                                    \"data-onovo-scroll\": true,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        dangerouslySetInnerHTML: {\n                                            __html: _data_sections_hero_json__WEBPACK_IMPORTED_MODULE_2__.subtitle\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 33\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                    lineNumber: 61,\n                                    columnNumber: 8\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                lineNumber: 60,\n                                columnNumber: 7\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                            lineNumber: 59,\n                            columnNumber: 6\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: \"#\",\n                            className: mute ? \"onovo-play-btn active\" : \"onovo-play-btn\",\n                            onClick: (e)=>clickedMuteHeroVideo(e),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"play-circles\"\n                                }, void 0, false, {\n                                    fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                    lineNumber: 67,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"play-lines\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                            lineNumber: 69,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 8\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {}, void 0, false, {\n                                            fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                            lineNumber: 72,\n                                            columnNumber: 8\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                                    lineNumber: 68,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                            lineNumber: 66,\n                            columnNumber: 6\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n                    lineNumber: 50,\n                    columnNumber: 5\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Volumes/DADOS/PROJETO SITE SIMPLOW/PROJETO 02/projeto_02/corrigido/src/components/sections/Hero.jsx\",\n            lineNumber: 43,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroSection);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dXJjZXMiOlsid2VicGFjazovL29ub3ZvLW5leHRqcy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb25zL0hlcm8uanN4PzU3YzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgRGF0YSBmcm9tIFwiQGRhdGEvc2VjdGlvbnMvaGVyby5qc29uXCI7XG5cbmltcG9ydCAnc3BsaXR0aW5nL2Rpc3Qvc3BsaXR0aW5nLmNzcydcbmltcG9ydCAnc3BsaXR0aW5nL2Rpc3Qvc3BsaXR0aW5nLWNlbGxzLmNzcydcbmltcG9ydCBTcGxpdHRpbmcgZnJvbSAnc3BsaXR0aW5nJ1xuaW1wb3J0IFNjcm9sbE91dCBmcm9tICdzY3JvbGwtb3V0J1xuXG5jb25zdCBIZXJvU2VjdGlvbiA9ICgpID0+IHtcblx0dXNlRWZmZWN0KCgpID0+IHtcblx0XHRTcGxpdHRpbmcoeyBieTogJ2xpbmVzJyB9KTtcblx0XHRTY3JvbGxPdXQoe3RhcmdldHM6ICdbZGF0YS1vbm92by1zY3JvbGxdJywgb25jZTogdHJ1ZX0pO1xuXHRcblx0XHRjb25zdCBhbGxXcmFwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi53b3JkXCIpO1xuXHRcdGFsbFdyYXAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuXHRcdCAgaWYgKCAhaXRlbS5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnc3BhbicpICkge1xuXHRcdFx0bGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5cdFx0XHR3cmFwcGVyLmNsYXNzTGlzdC5hZGQoJ3NwYW4nKTtcblx0XHRcdGl0ZW0ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUod3JhcHBlciwgaXRlbSk7XG5cdFx0XHR3cmFwcGVyLmFwcGVuZENoaWxkKGl0ZW0pO1xuXHRcdCAgfVxuXHRcdH0pO1xuXHRcblx0XHRjb25zdCBhbGxPdmVybGF5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1vbm92by1vdmVybGF5XVwiKTtcblx0XHRhbGxPdmVybGF5cy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0ICBsZXQgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cdFx0ICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ29ub3ZvLW92ZXJsYXknKTtcblx0XHQgIGl0ZW0uYXBwZW5kQ2hpbGQob3ZlcmxheSk7XG5cdFx0fSk7XG5cdH0sIFtdKTtcblxuXHRjb25zdCBbbXV0ZSwgc2V0TXV0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cblx0Y29uc3QgY2xpY2tlZE11dGVIZXJvVmlkZW8gPSAoZSkgPT4ge1xuXHRcdGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcdHNldE11dGUoIW11dGUpO1xuXHR9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIHsvKiBPbm92byBIZXJvICovfVxuXHRcdFx0PHNlY3Rpb24gY2xhc3NOYW1lPVwib25vdm8tc2VjdGlvbiBvbm92by1oZXJvXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VcIj5cblx0XHRcdFx0XHQ8dmlkZW8gYXV0b1BsYXkgbXV0ZWQ9eyFtdXRlfSBsb29wIHBsYXlzSW5saW5lIGlkPVwiaGVyb1ZpZGVvXCI+XG5cdFx0XHRcdFx0XHQ8c291cmNlIHNyYz17RGF0YS52aWRlb30gdHlwZT1cInZpZGVvL21wNFwiIC8+XG5cdFx0XHRcdFx0PC92aWRlbz5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm92cmxcIiBzdHlsZT17e1wib3BhY2l0eVwiOiBcIjAuMjVcIn19IC8+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuXHRcdFx0XHRcdDxoMSBjbGFzc05hbWU9XCJ0aXRsZSBvbm92by10ZXh0LXdoaXRlXCI+XG5cdFx0XHRcdFx0XHQ8c3BhbiBkYXRhLXNwbGl0dGluZyBkYXRhLW9ub3ZvLXNjcm9sbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogRGF0YS50aXRsZS50ZXh0fX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJvbm92by1zZXAgd29yZFwiPlxuXHRcdFx0XHRcdFx0XHRcdDxpIGNsYXNzTmFtZT1cInNlcC1pbWdcIiBzdHlsZT17e1wiYmFja2dyb3VuZEltYWdlXCI6IFwidXJsKFwiK0RhdGEudGl0bGUuaWNvbitcIilcIn19IC8+XG5cdFx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHRcdDwvc3Bhbj5cblx0XHRcdFx0XHQ8L2gxPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwidGV4dFwiPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZSBvbm92by10ZXh0LXdoaXRlXCI+XG5cdFx0XHRcdFx0XHRcdDxkaXYgZGF0YS1zcGxpdHRpbmcgZGF0YS1vbm92by1zY3JvbGw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tfX2h0bWw6IERhdGEuc3VidGl0bGV9fSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdFx0PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9e211dGUgPyBcIm9ub3ZvLXBsYXktYnRuIGFjdGl2ZVwiIDogXCJvbm92by1wbGF5LWJ0blwifSBvbkNsaWNrPXsoZSkgPT4gY2xpY2tlZE11dGVIZXJvVmlkZW8oZSkgfT5cblx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzTmFtZT1cInBsYXktY2lyY2xlc1wiIC8+XG5cdFx0XHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9XCJwbGF5LWxpbmVzXCI+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIC8+XG5cdFx0XHRcdFx0XHRcdDxzcGFuIC8+XG5cdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdDwvc2VjdGlvbj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlcm9TZWN0aW9uOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkRhdGEiLCJTcGxpdHRpbmciLCJTY3JvbGxPdXQiLCJIZXJvU2VjdGlvbiIsImJ5IiwidGFyZ2V0cyIsIm9uY2UiLCJhbGxXcmFwIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsIml0ZW0iLCJwYXJlbnROb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJ3cmFwcGVyIiwiY3JlYXRlRWxlbWVudCIsImFkZCIsImluc2VydEJlZm9yZSIsImFwcGVuZENoaWxkIiwiYWxsT3ZlcmxheXMiLCJvdmVybGF5IiwibXV0ZSIsInNldE11dGUiLCJjbGlja2VkTXV0ZUhlcm9WaWRlbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJ2aWRlbyIsImF1dG9QbGF5IiwibXV0ZWQiLCJsb29wIiwicGxheXNJbmxpbmUiLCJpZCIsInNvdXJjZSIsInNyYyIsInR5cGUiLCJzdHlsZSIsImgxIiwic3BhbiIsImRhdGEtc3BsaXR0aW5nIiwiZGF0YS1vbm92by1zY3JvbGwiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsInRpdGxlIiwidGV4dCIsImkiLCJpY29uIiwic3VidGl0bGUiLCJhIiwiaHJlZiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/sections/Hero.jsx\n");

/***/ }),

/***/ "./src/data/sections/hero.json":
/*!*************************************!*\
  !*** ./src/data/sections/hero.json ***!
  \*************************************/
/***/ ((module) => {

module.exports = JSON.parse('{"video":"/video/stvideo.mp4","title":{"text":"Soluções <br/>Inteligentes","icon":"/images/title_icon.svg"},"subtitle":"Transformando desafios <br/> em eficiência digital <br/> única e exemplar."}');

/***/ })

};
;