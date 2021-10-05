"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/singleItem/[id]";
exports.ids = ["pages/singleItem/[id]"];
exports.modules = {

/***/ "./lib/apollo-client.ts":
/*!******************************!*\
  !*** ./lib/apollo-client.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.ApolloClient({\n  uri: `/api/graphql`,\n  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__.InMemoryCache()\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (client);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvYXBvbGxvLWNsaWVudC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBLE1BQU1FLE1BQU0sR0FBRyxJQUFJRix3REFBSixDQUFpQjtBQUM5QkcsRUFBQUEsR0FBRyxFQUFHLGNBRHdCO0FBRTlCQyxFQUFBQSxLQUFLLEVBQUUsSUFBSUgseURBQUo7QUFGdUIsQ0FBakIsQ0FBZjtBQUtBLGlFQUFlQyxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS1ncmFwaHFsLy4vbGliL2Fwb2xsby1jbGllbnQudHM/Zjg2NiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcblxuY29uc3QgY2xpZW50ID0gbmV3IEFwb2xsb0NsaWVudCh7XG4gIHVyaTogYC9hcGkvZ3JhcGhxbGAsXG4gIGNhY2hlOiBuZXcgSW5NZW1vcnlDYWNoZSgpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudDtcbiJdLCJuYW1lcyI6WyJBcG9sbG9DbGllbnQiLCJJbk1lbW9yeUNhY2hlIiwiY2xpZW50IiwidXJpIiwiY2FjaGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/apollo-client.ts\n");

/***/ }),

/***/ "./pages/singleItem/[id].tsx":
/*!***********************************!*\
  !*** ./pages/singleItem/[id].tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ \"@apollo/client\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_apollo_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/apollo-client */ \"./lib/apollo-client.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"/Users/atheer/Desktop/nextjs-prisma-graphql/pages/singleItem/[id].tsx\";\n\n\n\n\n\n\nconst SingleItem = () => {\n  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  const {\n    0: data,\n    1: setData\n  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {\n    getData();\n  }, [router]);\n\n  const getData = async () => {\n    try {\n      const data = await _lib_apollo_client__WEBPACK_IMPORTED_MODULE_3__.default.query({\n        query: _apollo_client__WEBPACK_IMPORTED_MODULE_0__.gql`\n            query {\n              product(id: ${router.query.id}) {\n                image\n                name\n                id\n              }\n            }\n          `\n      });\n      if (data.data) setData(data.data.product);\n    } catch (error) {\n      console.log(error);\n    }\n  };\n\n  return data ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    className: \"mx-auto max-w-6xl  grid grid-cols-4\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"img\", {\n      src: data.image,\n      alt: \"\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, undefined) : null;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zaW5nbGVJdGVtL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLE1BQU1LLFVBQVUsR0FBRyxNQUFNO0FBQ3ZCLFFBQU1DLE1BQU0sR0FBR0wsc0RBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ00sSUFBRDtBQUFBLE9BQU9DO0FBQVAsTUFBa0JMLCtDQUFRLENBQUMsSUFBRCxDQUFoQztBQUVBRCxFQUFBQSxnREFBUyxDQUFDLE1BQU07QUFDZE8sSUFBQUEsT0FBTztBQUNSLEdBRlEsRUFFTixDQUFDSCxNQUFELENBRk0sQ0FBVDs7QUFJQSxRQUFNRyxPQUFPLEdBQUcsWUFBWTtBQUMxQixRQUFJO0FBQ0YsWUFBTUYsSUFBSSxHQUFHLE1BQU1ILDZEQUFBLENBQWE7QUFDOUJNLFFBQUFBLEtBQUssRUFBRVYsK0NBQUk7QUFDbkI7QUFDQSw0QkFBNEJNLE1BQU0sQ0FBQ0ksS0FBUCxDQUFhQyxFQUFHO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRzQyxPQUFiLENBQW5CO0FBWUEsVUFBSUosSUFBSSxDQUFDQSxJQUFULEVBQWVDLE9BQU8sQ0FBQ0QsSUFBSSxDQUFDQSxJQUFMLENBQVVLLE9BQVgsQ0FBUDtBQUNoQixLQWRELENBY0UsT0FBT0MsS0FBUCxFQUFjO0FBQ2RDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaO0FBQ0Q7QUFDRixHQWxCRDs7QUFtQkEsU0FBT04sSUFBSSxnQkFDVDtBQUFLLGFBQVMsRUFBQyxxQ0FBZjtBQUFBLDJCQUNFO0FBQUssU0FBRyxFQUFFQSxJQUFJLENBQUNTLEtBQWY7QUFBc0IsU0FBRyxFQUFDO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFMsR0FJUCxJQUpKO0FBS0QsQ0FoQ0Q7O0FBa0NBLGlFQUFlWCxVQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS1ncmFwaHFsLy4vcGFnZXMvc2luZ2xlSXRlbS9baWRdLnRzeD8wODk1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xpZW50IGZyb20gXCIuLi8uLi9saWIvYXBvbGxvLWNsaWVudFwiO1xuXG5jb25zdCBTaW5nbGVJdGVtID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2RhdGEsIHNldERhdGFdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXREYXRhKCk7XG4gIH0sIFtyb3V0ZXJdKTtcblxuICBjb25zdCBnZXREYXRhID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IGdxbGBcbiAgICAgICAgICAgIHF1ZXJ5IHtcbiAgICAgICAgICAgICAgcHJvZHVjdChpZDogJHtyb3V0ZXIucXVlcnkuaWR9KSB7XG4gICAgICAgICAgICAgICAgaW1hZ2VcbiAgICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICAgICAgaWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIGAsXG4gICAgICB9KTtcblxuICAgICAgaWYgKGRhdGEuZGF0YSkgc2V0RGF0YShkYXRhLmRhdGEucHJvZHVjdCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBkYXRhID8gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy02eGwgIGdyaWQgZ3JpZC1jb2xzLTRcIj5cbiAgICAgIDxpbWcgc3JjPXtkYXRhLmltYWdlfSBhbHQ9XCJcIiAvPlxuICAgIDwvZGl2PlxuICApIDogbnVsbDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNpbmdsZUl0ZW07XG4iXSwibmFtZXMiOlsiZ3FsIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJjbGllbnQiLCJTaW5nbGVJdGVtIiwicm91dGVyIiwiZGF0YSIsInNldERhdGEiLCJnZXREYXRhIiwicXVlcnkiLCJpZCIsInByb2R1Y3QiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/singleItem/[id].tsx\n");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@apollo/client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/singleItem/[id].tsx"));
module.exports = __webpack_exports__;

})();