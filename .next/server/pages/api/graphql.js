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
exports.id = "pages/api/graphql";
exports.ids = ["pages/api/graphql"];
exports.modules = {

/***/ "./node_modules/.prisma/client/index.js":
/*!**********************************************!*\
  !*** ./node_modules/.prisma/client/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/***/ }),

/***/ "./graphql/context.ts":
/*!****************************!*\
  !*** ./graphql/context.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createContext\": () => (/* binding */ createContext)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/prisma */ \"./lib/prisma.ts\");\n\nasync function createContext(req, res) {\n  return {\n    prisma: _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.default\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL2NvbnRleHQudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTtBQU1PLGVBQWVDLGFBQWYsQ0FBNkJDLEdBQTdCLEVBQWtDQyxHQUFsQyxFQUF5RDtBQUM5RCxTQUFPO0FBQ0xILElBQUFBLE1BQU1BLGtEQUFBQTtBQURELEdBQVA7QUFHRCIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtZ3JhcGhxbC8uL2dyYXBocWwvY29udGV4dC50cz8zYWU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCIucHJpc21hL2NsaWVudFwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiLi4vbGliL3ByaXNtYVwiO1xuXG5leHBvcnQgdHlwZSBDb250ZXh0ID0ge1xuICBwcmlzbWE6IFByaXNtYUNsaWVudDtcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb250ZXh0KHJlcSwgcmVzKTogUHJvbWlzZTxDb250ZXh0PiB7XG4gIHJldHVybiB7XG4gICAgcHJpc21hLFxuICB9O1xufVxuIl0sIm5hbWVzIjpbInByaXNtYSIsImNyZWF0ZUNvbnRleHQiLCJyZXEiLCJyZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./graphql/context.ts\n");

/***/ }),

/***/ "./graphql/resolvers.ts":
/*!******************************!*\
  !*** ./graphql/resolvers.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"resolvers\": () => (/* binding */ resolvers)\n/* harmony export */ });\nconst resolvers = {\n  Query: {\n    products: async (_parent, _args, ctx) => await ctx.prisma.product.findMany(),\n    product: async (_parent, args, ctx) => await ctx.prisma.product.findFirst({\n      where: {\n        id: args.id\n      }\n    })\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL3Jlc29sdmVycy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU8sTUFBTUEsU0FBUyxHQUFHO0FBQ3ZCQyxFQUFBQSxLQUFLLEVBQUU7QUFDTEMsSUFBQUEsUUFBUSxFQUFFLE9BQU9DLE9BQVAsRUFBZ0JDLEtBQWhCLEVBQXVCQyxHQUF2QixLQUNSLE1BQU1BLEdBQUcsQ0FBQ0MsTUFBSixDQUFXQyxPQUFYLENBQW1CQyxRQUFuQixFQUZIO0FBSUxELElBQUFBLE9BQU8sRUFBRSxPQUFPSixPQUFQLEVBQWdCTSxJQUFoQixFQUFzQkosR0FBdEIsS0FDUCxNQUFNQSxHQUFHLENBQUNDLE1BQUosQ0FBV0MsT0FBWCxDQUFtQkcsU0FBbkIsQ0FBNkI7QUFBRUMsTUFBQUEsS0FBSyxFQUFFO0FBQUVDLFFBQUFBLEVBQUUsRUFBRUgsSUFBSSxDQUFDRztBQUFYO0FBQVQsS0FBN0I7QUFMSDtBQURnQixDQUFsQiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtZ3JhcGhxbC8uL2dyYXBocWwvcmVzb2x2ZXJzLnRzPzJkMjkiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJlc29sdmVycyA9IHtcbiAgUXVlcnk6IHtcbiAgICBwcm9kdWN0czogYXN5bmMgKF9wYXJlbnQsIF9hcmdzLCBjdHgpID0+XG4gICAgICBhd2FpdCBjdHgucHJpc21hLnByb2R1Y3QuZmluZE1hbnkoKSxcblxuICAgIHByb2R1Y3Q6IGFzeW5jIChfcGFyZW50LCBhcmdzLCBjdHgpID0+XG4gICAgICBhd2FpdCBjdHgucHJpc21hLnByb2R1Y3QuZmluZEZpcnN0KHsgd2hlcmU6IHsgaWQ6IGFyZ3MuaWQgfSB9KSxcbiAgfSxcbn07XG4iXSwibmFtZXMiOlsicmVzb2x2ZXJzIiwiUXVlcnkiLCJwcm9kdWN0cyIsIl9wYXJlbnQiLCJfYXJncyIsImN0eCIsInByaXNtYSIsInByb2R1Y3QiLCJmaW5kTWFueSIsImFyZ3MiLCJmaW5kRmlyc3QiLCJ3aGVyZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/resolvers.ts\n");

/***/ }),

/***/ "./graphql/schema.ts":
/*!***************************!*\
  !*** ./graphql/schema.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"typeDefs\": () => (/* binding */ typeDefs)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n\nconst typeDefs = apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.gql`\n  type Product {\n    id: ID\n    createdAt: String\n    updatedAt: String\n    name: String\n    price: String\n    description: String\n    currency: String\n    editorId: Int\n    active: Boolean\n    adminId: Int\n    image: String\n    rating: String\n  }\n\n  type Query {\n    products: [Product]\n    product(id: Int): Product\n  }\n`;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ncmFwaHFsL3NjaGVtYS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVPLE1BQU1DLFFBQVEsR0FBR0Qsb0RBQUk7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXBCTyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcmlzbWEtZ3JhcGhxbC8uL2dyYXBocWwvc2NoZW1hLnRzPzUzZGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ3FsIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItbWljcm9cIjtcblxuZXhwb3J0IGNvbnN0IHR5cGVEZWZzID0gZ3FsYFxuICB0eXBlIFByb2R1Y3Qge1xuICAgIGlkOiBJRFxuICAgIGNyZWF0ZWRBdDogU3RyaW5nXG4gICAgdXBkYXRlZEF0OiBTdHJpbmdcbiAgICBuYW1lOiBTdHJpbmdcbiAgICBwcmljZTogU3RyaW5nXG4gICAgZGVzY3JpcHRpb246IFN0cmluZ1xuICAgIGN1cnJlbmN5OiBTdHJpbmdcbiAgICBlZGl0b3JJZDogSW50XG4gICAgYWN0aXZlOiBCb29sZWFuXG4gICAgYWRtaW5JZDogSW50XG4gICAgaW1hZ2U6IFN0cmluZ1xuICAgIHJhdGluZzogU3RyaW5nXG4gIH1cblxuICB0eXBlIFF1ZXJ5IHtcbiAgICBwcm9kdWN0czogW1Byb2R1Y3RdXG4gICAgcHJvZHVjdChpZDogSW50KTogUHJvZHVjdFxuICB9XG5gO1xuIl0sIm5hbWVzIjpbImdxbCIsInR5cGVEZWZzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./graphql/schema.ts\n");

/***/ }),

/***/ "./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .prisma/client */ \"./node_modules/.prisma/client/index.js\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\n\nif (false) {} else {\n  if (!global.prisma) {\n    global.prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n  }\n\n  prisma = global.prisma;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUEsSUFBSUMsTUFBSjs7QUFFQSxJQUFJLE9BQXVDLEVBQTNDLE1BRU87QUFDTCxNQUFJLENBQUNDLE1BQU0sQ0FBQ0QsTUFBWixFQUFvQjtBQUNsQkMsSUFBQUEsTUFBTSxDQUFDRCxNQUFQLEdBQWdCLElBQUlELHdEQUFKLEVBQWhCO0FBQ0Q7O0FBQ0RDLEVBQUFBLE1BQU0sR0FBR0MsTUFBTSxDQUFDRCxNQUFoQjtBQUNEOztBQUVELGlFQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLXByaXNtYS1ncmFwaHFsLy4vbGliL3ByaXNtYS50cz9kNzI4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCIucHJpc21hL2NsaWVudFwiO1xuXG5sZXQgcHJpc21hOiBQcmlzbWFDbGllbnQ7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xufSBlbHNlIHtcbiAgaWYgKCFnbG9iYWwucHJpc21hKSB7XG4gICAgZ2xvYmFsLnByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcbiAgfVxuICBwcmlzbWEgPSBnbG9iYWwucHJpc21hO1xufVxuXG5leHBvcnQgZGVmYXVsdCBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/prisma.ts\n");

/***/ }),

/***/ "./pages/api/graphql.ts":
/*!******************************!*\
  !*** ./pages/api/graphql.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler),\n/* harmony export */   \"config\": () => (/* binding */ config)\n/* harmony export */ });\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ \"apollo-server-micro\");\n/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _graphql_resolvers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../graphql/resolvers */ \"./graphql/resolvers.ts\");\n/* harmony import */ var _graphql_schema__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../graphql/schema */ \"./graphql/schema.ts\");\n/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-server-core */ \"apollo-server-core\");\n/* harmony import */ var apollo_server_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(apollo_server_core__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _graphql_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../graphql/context */ \"./graphql/context.ts\");\n\n\n\n\n\nconst apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__.ApolloServer({\n  typeDefs: _graphql_schema__WEBPACK_IMPORTED_MODULE_2__.typeDefs,\n  resolvers: _graphql_resolvers__WEBPACK_IMPORTED_MODULE_1__.resolvers,\n  context: _graphql_context__WEBPACK_IMPORTED_MODULE_4__.createContext,\n  plugins: [(0,apollo_server_core__WEBPACK_IMPORTED_MODULE_3__.ApolloServerPluginLandingPageGraphQLPlayground)()],\n  introspection: true\n});\nconst startServer = apolloServer.start();\nasync function handler(req, res) {\n  if (req.method === \"OPTIONS\") {\n    res.end();\n    return false;\n  }\n\n  await startServer;\n  await apolloServer.createHandler({\n    path: \"https://nextjs-prisma-graphql-apollo.vercel.app/api/graphql\"\n  })(req, res);\n}\nconst config = {\n  api: {\n    bodyParser: false\n  }\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvZ3JhcGhxbC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUssWUFBWSxHQUFHLElBQUlMLDZEQUFKLENBQWlCO0FBQ3BDRSxFQUFBQSxRQURvQztBQUVwQ0QsRUFBQUEsU0FGb0M7QUFHcENLLEVBQUFBLE9BQU8sRUFBRUYsMkRBSDJCO0FBSXBDRyxFQUFBQSxPQUFPLEVBQUUsQ0FBQ0osa0dBQThDLEVBQS9DLENBSjJCO0FBS3BDSyxFQUFBQSxhQUFhLEVBQUU7QUFMcUIsQ0FBakIsQ0FBckI7QUFRQSxNQUFNQyxXQUFXLEdBQUdKLFlBQVksQ0FBQ0ssS0FBYixFQUFwQjtBQUVlLGVBQWVDLE9BQWYsQ0FBdUJDLEdBQXZCLEVBQTRCQyxHQUE1QixFQUFpQztBQUM5QyxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxTQUFuQixFQUE4QjtBQUM1QkQsSUFBQUEsR0FBRyxDQUFDRSxHQUFKO0FBQ0EsV0FBTyxLQUFQO0FBQ0Q7O0FBQ0QsUUFBTU4sV0FBTjtBQUVBLFFBQU1KLFlBQVksQ0FBQ1csYUFBYixDQUEyQjtBQUMvQkMsSUFBQUEsSUFBSSxFQUFFO0FBRHlCLEdBQTNCLEVBRUhMLEdBRkcsRUFFRUMsR0FGRixDQUFOO0FBR0Q7QUFFTSxNQUFNSyxNQUFNLEdBQUc7QUFDcEJDLEVBQUFBLEdBQUcsRUFBRTtBQUNIQyxJQUFBQSxVQUFVLEVBQUU7QUFEVDtBQURlLENBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtcHJpc21hLWdyYXBocWwvLi9wYWdlcy9hcGkvZ3JhcGhxbC50cz8xNjZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwb2xsb1NlcnZlciB9IGZyb20gXCJhcG9sbG8tc2VydmVyLW1pY3JvXCI7XG5pbXBvcnQgeyByZXNvbHZlcnMgfSBmcm9tIFwiLi4vLi4vZ3JhcGhxbC9yZXNvbHZlcnNcIjtcbmltcG9ydCB7IHR5cGVEZWZzIH0gZnJvbSBcIi4uLy4uL2dyYXBocWwvc2NoZW1hXCI7XG5pbXBvcnQgeyBBcG9sbG9TZXJ2ZXJQbHVnaW5MYW5kaW5nUGFnZUdyYXBoUUxQbGF5Z3JvdW5kIH0gZnJvbSBcImFwb2xsby1zZXJ2ZXItY29yZVwiO1xuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCIuLi8uLi9ncmFwaHFsL2NvbnRleHRcIjtcblxuY29uc3QgYXBvbGxvU2VydmVyID0gbmV3IEFwb2xsb1NlcnZlcih7XG4gIHR5cGVEZWZzLFxuICByZXNvbHZlcnMsXG4gIGNvbnRleHQ6IGNyZWF0ZUNvbnRleHQsXG4gIHBsdWdpbnM6IFtBcG9sbG9TZXJ2ZXJQbHVnaW5MYW5kaW5nUGFnZUdyYXBoUUxQbGF5Z3JvdW5kKCldLFxuICBpbnRyb3NwZWN0aW9uOiB0cnVlLFxufSk7XG5cbmNvbnN0IHN0YXJ0U2VydmVyID0gYXBvbGxvU2VydmVyLnN0YXJ0KCk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiT1BUSU9OU1wiKSB7XG4gICAgcmVzLmVuZCgpO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBhd2FpdCBzdGFydFNlcnZlcjtcblxuICBhd2FpdCBhcG9sbG9TZXJ2ZXIuY3JlYXRlSGFuZGxlcih7XG4gICAgcGF0aDogXCJodHRwczovL25leHRqcy1wcmlzbWEtZ3JhcGhxbC1hcG9sbG8udmVyY2VsLmFwcC9hcGkvZ3JhcGhxbFwiLFxuICB9KShyZXEsIHJlcyk7XG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSB7XG4gIGFwaToge1xuICAgIGJvZHlQYXJzZXI6IGZhbHNlLFxuICB9LFxufTtcbiJdLCJuYW1lcyI6WyJBcG9sbG9TZXJ2ZXIiLCJyZXNvbHZlcnMiLCJ0eXBlRGVmcyIsIkFwb2xsb1NlcnZlclBsdWdpbkxhbmRpbmdQYWdlR3JhcGhRTFBsYXlncm91bmQiLCJjcmVhdGVDb250ZXh0IiwiYXBvbGxvU2VydmVyIiwiY29udGV4dCIsInBsdWdpbnMiLCJpbnRyb3NwZWN0aW9uIiwic3RhcnRTZXJ2ZXIiLCJzdGFydCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJlbmQiLCJjcmVhdGVIYW5kbGVyIiwicGF0aCIsImNvbmZpZyIsImFwaSIsImJvZHlQYXJzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/graphql.ts\n");

/***/ }),

/***/ "@prisma/client/runtime":
/*!*****************************************!*\
  !*** external "@prisma/client/runtime" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client/runtime");

/***/ }),

/***/ "apollo-server-core":
/*!*************************************!*\
  !*** external "apollo-server-core" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server-core");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-server-micro");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/graphql.ts"));
module.exports = __webpack_exports__;

})();