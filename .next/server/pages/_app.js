module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./constants/authConstant.js":
/*!***********************************!*\
  !*** ./constants/authConstant.js ***!
  \***********************************/
/*! exports provided: LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAIL, USER_LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_REQUEST", function() { return LOGIN_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_LOGOUT", function() { return USER_LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_REQUEST", function() { return REGISTER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAIL", function() { return REGISTER_FAIL; });
const LOGIN_REQUEST = 'LOGIN_REQUEST';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const USER_LOGOUT = 'USER_LOGOUT';
const REGISTER_REQUEST = 'REGISTER_REQUEST';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_FAIL = 'REGISTER_FAIL';

/***/ }),

/***/ "./constants/owner.js":
/*!****************************!*\
  !*** ./constants/owner.js ***!
  \****************************/
/*! exports provided: OWNER_LIST_OF_CARS_REQUEST, OWNER_LIST_OF_CARS_SUCCESS, OWNER_LIST_OF_CARS_FAIL, OWNER_RECOVER_OWNER_REQUEST, OWNER_RECOVER_OWNER_SUCCESS, OWNER_RECOVER_OWNER_FAIL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER_LIST_OF_CARS_REQUEST", function() { return OWNER_LIST_OF_CARS_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER_LIST_OF_CARS_SUCCESS", function() { return OWNER_LIST_OF_CARS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER_LIST_OF_CARS_FAIL", function() { return OWNER_LIST_OF_CARS_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER_RECOVER_OWNER_REQUEST", function() { return OWNER_RECOVER_OWNER_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER_RECOVER_OWNER_SUCCESS", function() { return OWNER_RECOVER_OWNER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OWNER_RECOVER_OWNER_FAIL", function() { return OWNER_RECOVER_OWNER_FAIL; });
const OWNER_LIST_OF_CARS_REQUEST = 'OWNER_LIST_OF_CARS_REQUEST';
const OWNER_LIST_OF_CARS_SUCCESS = 'OWNER_LIST_OF_CARS_SUCCESS';
const OWNER_LIST_OF_CARS_FAIL = 'OWNER_LIST_OF_CARS_FAIL';
const OWNER_RECOVER_OWNER_REQUEST = 'OWNER_RECOVER_OWNER_REQUEST';
const OWNER_RECOVER_OWNER_SUCCESS = 'OWNER_RECOVER_OWNER_SUCCESS';
const OWNER_RECOVER_OWNER_FAIL = 'OWNER_RECOVER_OWNER_FAIL';

/***/ }),

/***/ "./node_modules/react-toastify/dist/ReactToastify.css":
/*!************************************************************!*\
  !*** ./node_modules/react-toastify/dist/ReactToastify.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ "./redux/store/index.js");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-toastify/dist/ReactToastify.css */ "./node_modules/react-toastify/dist/ReactToastify.css");
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main.scss */ "./styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "E:\\next-gav\\gav\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const MyApp = ({
  Component,
  pageProps
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_auth_client__WEBPACK_IMPORTED_MODULE_5__["Provider"], {
    session: pageProps.session,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
      store: _redux_store__WEBPACK_IMPORTED_MODULE_2__["store"],
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./redux/reducer/index.js":
/*!********************************!*\
  !*** ./redux/reducer/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loginReducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginReducer */ "./redux/reducer/loginReducer.js");
/* harmony import */ var _ownerListOfCarsReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ownerListOfCarsReducer */ "./redux/reducer/ownerListOfCarsReducer.js");



const appReducers = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  userInfo: _loginReducer__WEBPACK_IMPORTED_MODULE_1__["LoginReducer"],
  ownerListOfCarsReducer: _ownerListOfCarsReducer__WEBPACK_IMPORTED_MODULE_2__["OwnerListOfCarsReducer"]
});

const rootReducer = (state, action) => {
  if (action.type === "FLAG") {
    state.flag = action.payload;
  }

  return appReducers(state, action);
};

/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/reducer/loginReducer.js":
/*!***************************************!*\
  !*** ./redux/reducer/loginReducer.js ***!
  \***************************************/
/*! exports provided: LoginReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginReducer", function() { return LoginReducer; });
/* harmony import */ var _constants_authConstant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/authConstant */ "./constants/authConstant.js");

const INITIAL_STATE = {};
const LoginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _constants_authConstant__WEBPACK_IMPORTED_MODULE_0__["LOGIN_REQUEST"]:
      return state;

    case _constants_authConstant__WEBPACK_IMPORTED_MODULE_0__["LOGIN_SUCCESS"]:
      return action.payload;

    case _constants_authConstant__WEBPACK_IMPORTED_MODULE_0__["LOGIN_FAIL"]:
      return {
        error: action.payload
      };

    default:
      return state;
  }
};

/***/ }),

/***/ "./redux/reducer/ownerListOfCarsReducer.js":
/*!*************************************************!*\
  !*** ./redux/reducer/ownerListOfCarsReducer.js ***!
  \*************************************************/
/*! exports provided: OwnerListOfCarsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OwnerListOfCarsReducer", function() { return OwnerListOfCarsReducer; });
/* harmony import */ var _constants_owner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/owner */ "./constants/owner.js");

const INITIAL_STATE = {};
const OwnerListOfCarsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case _constants_owner__WEBPACK_IMPORTED_MODULE_0__["OWNER_LIST_OF_CARS_REQUEST"]:
      return state;

    case _constants_owner__WEBPACK_IMPORTED_MODULE_0__["OWNER_LIST_OF_CARS_SUCCESS"]:
      //localStorage.setItem('ownerListOfCars',JSON.stringify(action.payload))
      return action.payload;

    case _constants_owner__WEBPACK_IMPORTED_MODULE_0__["OWNER_LIST_OF_CARS_FAIL"]:
      return {
        error: action.payload
      };

    default:
      return state;
  }
};

/***/ }),

/***/ "./redux/store/index.js":
/*!******************************!*\
  !*** ./redux/store/index.js ***!
  \******************************/
/*! exports provided: store */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "store", function() { return store; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducer */ "./redux/reducer/index.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "redux-logger");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);




const initialState = {
  userInfo:  false ? undefined : {}
};
console.log('initialState', initialState);
const LoggerMiddleware = Object(redux_logger__WEBPACK_IMPORTED_MODULE_3__["createLogger"])();
let conmposEnhancer;

if (false) {}

const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_reducer__WEBPACK_IMPORTED_MODULE_2__["default"], initialState, // conmposEnhancer(applyMiddleware(thunk, LoggerMiddleware))
Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a, LoggerMiddleware));

/***/ }),

/***/ "./styles/main.scss":
/*!**************************!*\
  !*** ./styles/main.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2F1dGhDb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvb3duZXIuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXIvbG9naW5SZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3JlZHV4L3JlZHVjZXIvb3duZXJMaXN0T2ZDYXJzUmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWxvZ2dlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiTE9HSU5fUkVRVUVTVCIsIkxPR0lOX1NVQ0NFU1MiLCJMT0dJTl9GQUlMIiwiVVNFUl9MT0dPVVQiLCJSRUdJU1RFUl9SRVFVRVNUIiwiUkVHSVNURVJfU1VDQ0VTUyIsIlJFR0lTVEVSX0ZBSUwiLCJPV05FUl9MSVNUX09GX0NBUlNfUkVRVUVTVCIsIk9XTkVSX0xJU1RfT0ZfQ0FSU19TVUNDRVNTIiwiT1dORVJfTElTVF9PRl9DQVJTX0ZBSUwiLCJPV05FUl9SRUNPVkVSX09XTkVSX1JFUVVFU1QiLCJPV05FUl9SRUNPVkVSX09XTkVSX1NVQ0NFU1MiLCJPV05FUl9SRUNPVkVSX09XTkVSX0ZBSUwiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iLCJzdG9yZSIsImFwcFJlZHVjZXJzIiwiY29tYmluZVJlZHVjZXJzIiwidXNlckluZm8iLCJMb2dpblJlZHVjZXIiLCJvd25lckxpc3RPZkNhcnNSZWR1Y2VyIiwiT3duZXJMaXN0T2ZDYXJzUmVkdWNlciIsInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZmxhZyIsInBheWxvYWQiLCJJTklUSUFMX1NUQVRFIiwiZXJyb3IiLCJpbml0aWFsU3RhdGUiLCJKU09OIiwiY29uc29sZSIsImxvZyIsIkxvZ2dlck1pZGRsZXdhcmUiLCJjcmVhdGVMb2dnZXIiLCJjb25tcG9zRW5oYW5jZXIiLCJjcmVhdGVTdG9yZSIsImFwcGx5TWlkZGxld2FyZSIsInRodW5rIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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TSxDQUFDRztBQURYLE9BQVA7O0FBSUo7QUFDSSxhQUFPSixLQUFQO0FBZFI7QUFnQkgsQ0FqQk0sQzs7Ozs7Ozs7Ozs7O0FDUlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNTyxZQUFZLEdBQUc7QUFDakJaLFVBQVEsRUFDSixTQUNNYSxTQUROLEdBRU07QUFKTyxDQUFyQjtBQVFBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCSCxZQUE1QjtBQUVBLE1BQU1JLGdCQUFnQixHQUFHQyxpRUFBWSxFQUFyQztBQUVBLElBQUlDLGVBQUo7O0FBQ0EsV0FBcUIsRUFFcEI7O0FBRU0sTUFBTXJCLEtBQUssR0FBR3NCLHlEQUFXLENBQzVCZixnREFENEIsRUFFNUJRLFlBRjRCLEVBRzVCO0FBQ0FRLDZEQUFlLENBQUNDLGtEQUFELEVBQVFMLGdCQUFSLENBSmEsQ0FBekIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCUCw2Qzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrRDs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx5Qzs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJwYWdlcy9fYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNvbnN0IExPR0lOX1JFUVVFU1QgPSAnTE9HSU5fUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBMT0dJTl9TVUNDRVNTID0gJ0xPR0lOX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgTE9HSU5fRkFJTCA9ICdMT0dJTl9GQUlMJ1xuXG5leHBvcnQgY29uc3QgVVNFUl9MT0dPVVQgPSAnVVNFUl9MT0dPVVQnXG5cbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9SRVFVRVNUID0gJ1JFR0lTVEVSX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgUkVHSVNURVJfU1VDQ0VTUyA9ICdSRUdJU1RFUl9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZBSUwgPSAnUkVHSVNURVJfRkFJTCciLCJleHBvcnQgY29uc3QgT1dORVJfTElTVF9PRl9DQVJTX1JFUVVFU1QgPSAnT1dORVJfTElTVF9PRl9DQVJTX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgT1dORVJfTElTVF9PRl9DQVJTX1NVQ0NFU1MgPSAnT1dORVJfTElTVF9PRl9DQVJTX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgT1dORVJfTElTVF9PRl9DQVJTX0ZBSUwgPSAnT1dORVJfTElTVF9PRl9DQVJTX0ZBSUwnXG5cbmV4cG9ydCBjb25zdCBPV05FUl9SRUNPVkVSX09XTkVSX1JFUVVFU1QgPSAnT1dORVJfUkVDT1ZFUl9PV05FUl9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IE9XTkVSX1JFQ09WRVJfT1dORVJfU1VDQ0VTUyA9ICdPV05FUl9SRUNPVkVSX09XTkVSX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgT1dORVJfUkVDT1ZFUl9PV05FUl9GQUlMID0gJ09XTkVSX1JFQ09WRVJfT1dORVJfRkFJTCciLCJpbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4J1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSdcbmltcG9ydCAncmVhY3QtdG9hc3RpZnkvZGlzdC9SZWFjdFRvYXN0aWZ5LmNzcydcbmltcG9ydCAnLi4vc3R5bGVzL21haW4uc2NzcydcbmltcG9ydCB7IFByb3ZpZGVyIGFzIE5leHRBdXRoUHJvdmlkZXIgfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuXG5jb25zdCBNeUFwcCA9ICh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TmV4dEF1dGhQcm92aWRlciBzZXNzaW9uPXtwYWdlUHJvcHMuc2Vzc2lvbn0+XG4gICAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9Qcm92aWRlcj5cbiAgICA8L05leHRBdXRoUHJvdmlkZXI+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBNeUFwcFxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSBcInJlZHV4XCJcblxuaW1wb3J0IHsgTG9naW5SZWR1Y2VyIH0gZnJvbSBcIi4vbG9naW5SZWR1Y2VyXCJcbmltcG9ydCB7IE93bmVyTGlzdE9mQ2Fyc1JlZHVjZXIgfSBmcm9tICcuL293bmVyTGlzdE9mQ2Fyc1JlZHVjZXInXG5cbmNvbnN0IGFwcFJlZHVjZXJzID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICB1c2VySW5mbzogTG9naW5SZWR1Y2VyLFxuICAgIG93bmVyTGlzdE9mQ2Fyc1JlZHVjZXI6IE93bmVyTGlzdE9mQ2Fyc1JlZHVjZXJcbn0pXG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IFwiRkxBR1wiKSB7XG4gICAgICAgIHN0YXRlLmZsYWcgPSBhY3Rpb24ucGF5bG9hZFxuICAgIH1cbiAgICByZXR1cm4gYXBwUmVkdWNlcnMoc3RhdGUsIGFjdGlvbilcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXIiLCJpbXBvcnQge1xuICAgIExPR0lOX1JFUVVFU1QsXG4gICAgTE9HSU5fU1VDQ0VTUyxcbiAgICBMT0dJTl9GQUlMLFxuICB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hdXRoQ29uc3RhbnQnXG4gIFxuICBjb25zdCBJTklUSUFMX1NUQVRFID0ge31cbiAgXG4gIGV4cG9ydCBjb25zdCBMb2dpblJlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIExPR0lOX1JFUVVFU1Q6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICBcbiAgICAgIGNhc2UgTE9HSU5fU1VDQ0VTUzpcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5wYXlsb2FkXG4gIFxuICAgICAgY2FzZSBMT0dJTl9GQUlMOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGVycm9yOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgICAgfVxuICBcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbiAgfSIsImltcG9ydCB7XG4gICAgT1dORVJfTElTVF9PRl9DQVJTX0ZBSUwsXG4gICAgT1dORVJfTElTVF9PRl9DQVJTX1NVQ0NFU1MsXG4gICAgT1dORVJfTElTVF9PRl9DQVJTX1JFUVVFU1Rcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL293bmVyJ1xuXG5jb25zdCBJTklUSUFMX1NUQVRFID0ge31cblxuZXhwb3J0IGNvbnN0IE93bmVyTGlzdE9mQ2Fyc1JlZHVjZXIgPSAoc3RhdGUgPSBJTklUSUFMX1NUQVRFLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgT1dORVJfTElTVF9PRl9DQVJTX1JFUVVFU1Q6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcblxuICAgICAgICBjYXNlIE9XTkVSX0xJU1RfT0ZfQ0FSU19TVUNDRVNTOlxuICAgICAgICAgICAgLy9sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnb3duZXJMaXN0T2ZDYXJzJyxKU09OLnN0cmluZ2lmeShhY3Rpb24ucGF5bG9hZCkpXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWRcblxuICAgICAgICBjYXNlIE9XTkVSX0xJU1RfT0ZfQ0FSU19GQUlMOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBlcnJvcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZVxuICAgIH1cbn0iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgY29tcG9zZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnXG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnXG5pbXBvcnQgcm9vdFJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcidcbmltcG9ydCB7IGNyZWF0ZUxvZ2dlciB9IGZyb20gJ3JlZHV4LWxvZ2dlcidcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIHVzZXJJbmZvOlxuICAgICAgICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckluZm8nKVxuICAgICAgICAgICAgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5mbycpKVxuICAgICAgICAgICAgOiB7fSxcbiAgICBcbn1cblxuY29uc29sZS5sb2coJ2luaXRpYWxTdGF0ZScsIGluaXRpYWxTdGF0ZSlcblxuY29uc3QgTG9nZ2VyTWlkZGxld2FyZSA9IGNyZWF0ZUxvZ2dlcigpXG5cbmxldCBjb25tcG9zRW5oYW5jZXJcbmlmIChwcm9jZXNzLmJyb3dzZXIpIHtcbiAgICBjb25tcG9zRW5oYW5jZXIgPSB3aW5kb3cuX19SRURVWF9ERVZUT09MU19FWFRFTlNJT05fQ09NUE9TRV9fIHx8IGNvbXBvc2Vcbn1cblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgaW5pdGlhbFN0YXRlLFxuICAgIC8vIGNvbm1wb3NFbmhhbmNlcihhcHBseU1pZGRsZXdhcmUodGh1bmssIExvZ2dlck1pZGRsZXdhcmUpKVxuICAgIGFwcGx5TWlkZGxld2FyZSh0aHVuaywgTG9nZ2VyTWlkZGxld2FyZSlcbikiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC1sb2dnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtdGh1bmtcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==