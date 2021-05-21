module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/auth/[...nextauth].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api/auth.js":
/*!*********************!*\
  !*** ./api/auth.js ***!
  \*********************/
/*! exports provided: registerService, loginService, getMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerService", function() { return registerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginService", function() { return loginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMe", function() { return getMe; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _constants_authConstant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/authConstant */ "./constants/authConstant.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/request */ "./utils/request.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);





const registerService = (regObj, callback) => async dispatch => {
  dispatch({
    type: _constants_authConstant__WEBPACK_IMPORTED_MODULE_1__["REGISTER_REQUEST"]
  });

  try {
    const body = {
      username: regObj.username,
      password: regObj.password
    };
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].post(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/register`, false, null, body);
    dispatch({
      type: _constants_authConstant__WEBPACK_IMPORTED_MODULE_1__["REGISTER_SUCCESS"],
      payload: data
    });
    callback(data, null);
  } catch (error) {
    dispatch({
      type: _constants_authConstant__WEBPACK_IMPORTED_MODULE_1__["REGISTER_FAIL"],
      payload: error.response
    });
    callback(null, error.response);
  }
};
const loginService = async (service, token) => {
  //console.log("login service", service, token)
  try {
    const body = {
      accessToken: token,
      client_secret: _config__WEBPACK_IMPORTED_MODULE_0__["config"].GAV_CLIENT_SECRET,
      client_id: _config__WEBPACK_IMPORTED_MODULE_0__["config"].GAV_CLIENT_ID //pessoa_cadastro_id:  2,

    };
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].post(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/auth/social/${service}`, false, null, body);
    return data;
  } catch (error) {
    console.log("error = ---");
    console.log(error.response.data.message);
  }
};
const getMe = async () => {
  try {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_3__["getSession"])();

    if (session) {
      const token = session.access_token;
      const {
        data: me
      } = await axios__WEBPACK_IMPORTED_MODULE_4___default.a.get(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/json'
        }
      });
      return me;
    }
  } catch (error) {
    console.log(error);
    return null;
  }
};

/***/ }),

/***/ "./api/cadastro/captasao/createPerson.js":
/*!***********************************************!*\
  !*** ./api/cadastro/captasao/createPerson.js ***!
  \***********************************************/
/*! exports provided: createPerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPerson", function() { return createPerson; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config */ "./config/index.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../utils/request */ "./utils/request.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/common */ "./utils/common.js");

 //import getItem from '../../../utils/localStroageAccess'


const createPerson = async (email, celular, nome, senha, pessoa_cadastro_id, pessoa_tipo_id, cb) => {
  try {
    const body = {
      celular: celular,
      email: email,
      pessoa_tipo_id: pessoa_tipo_id,
      pessoa_cadastro_id: pessoa_cadastro_id,
      pessoa_fisica: {
        nome: nome
      },
      pessoa_juridica: {
        nome: nome
      },
      user: {
        password: senha,
        email: email
      }
    };
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_1__["default"].post(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/captacao/pessoas`, false, "", body); //console.log("data", data)

    Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["notify"])('success', "Successfully Created");
    cb();
    return data;
  } catch (error) {
    cb();
    let err = "";

    if ("user.email" in error.response.data.errors) {
      err += error.response.data.errors["user.email"][0];
    }

    if ("user.password" in error.response.data.errors) {
      err += error.response.data.errors["user.password"][0];
    }

    Object(_utils_common__WEBPACK_IMPORTED_MODULE_2__["notify"])("error", err); // console.log(error.response.data.errors)

    return null;
  }
};

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: config */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
const DEVELOPMENT = {
  nextAuthUrl: "https://gavproject.herokuapp.com",
  baseUrl: "https://teste-api.gavclub.com.br",
  grantType: "password",
  basicAuthToken: "YWRtaW5AZ2F2Y2x1Yi5jb20uYnI6RUc4QlpTUjVIOFZZN1ZD",
  GAV_CLIENT_SECRET: "Ydx95WYGrfQ35bby1am60lMGKnuqZsaLTs82R7f8",
  GAV_CLIENT_ID: 10,
  GOOGLE_CLIENT_ID: "1015036690558-07rme60ttao7cuadmc2mnh8luiuqh3lv.apps.googleusercontent.com",
  GOOGLE_CLIENT_SECRET: "xApEWP1AEtjZG-xHI6TNPupu",
  // GOOGLE_CLIENT_ID: '31651057818-h820onhd3h42kpgf5hih2kptc3m2mues.apps.googleusercontent.com',
  // GOOGLE_CLIENT_SECRET: 'VAnfQLrzpQvKFSSzMhfABbhX'
  FACEBOOK_CLIENT_ID: "268359331651972",
  FACEBOOK_CLIENT_SECRET: "5c24107ddfab20892c27c50224f8cd19"
};
const config = DEVELOPMENT;

/***/ }),

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

/***/ "./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ "next-auth");
/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers */ "next-auth/providers");
/* harmony import */ var next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config */ "./config/index.js");
/* harmony import */ var _utils_providers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/providers */ "./utils/providers.js");
/* harmony import */ var _api_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../api/auth */ "./api/auth.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const options = {
  providers: [next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Google({
    clientId: _config__WEBPACK_IMPORTED_MODULE_2__["config"].GOOGLE_CLIENT_ID,
    clientSecret: _config__WEBPACK_IMPORTED_MODULE_2__["config"].GOOGLE_CLIENT_SECRET,
    authorizationUrl: 'https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code',
    scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/youtube.readonly',
    profileUrl: "https://www.googleapis.com/oauth2/v1/userinfo?alt=json",
    accessTokenUrl: "https://accounts.google.com/o/oauth2/token",
    requestTokenUrl: "https://accounts.google.com/o/oauth2/auth"
  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Facebook({
    clientId: _config__WEBPACK_IMPORTED_MODULE_2__["config"].FACEBOOK_CLIENT_ID,
    clientSecret: _config__WEBPACK_IMPORTED_MODULE_2__["config"].FACEBOOK_CLIENT_SECRET
  }), next_auth_providers__WEBPACK_IMPORTED_MODULE_1___default.a.Credentials({
    name: "GAV",

    async authorize(credentials) {
      const tokens = await Object(_utils_providers__WEBPACK_IMPORTED_MODULE_3__["getToken"])(credentials);

      if (!tokens) {
        return null;
      }

      const me = await Object(_utils_providers__WEBPACK_IMPORTED_MODULE_3__["getMe"])(tokens.access_token); //console.log("me===>>", me)

      const user = _objectSpread(_objectSpread({}, tokens), {}, {
        name: me.nome,
        email: me.email,
        userId: me.id,
        photo: me.foto_perfil_arquivo ? me.foto_perfil_arquivo.link : ""
      });

      return user;
    }

  })],
  site: "https://gavproject.herokuapp.com",
  pages: {
    signIn: "/login",
    error: '/login'
  },
  session: {
    jwt: true
  },
  callbacks: {
    // async signIn(user, account, profile) {
    //     return true
    // },
    // async redirect(url, baseUrl) {
    //     // console.log('url', url);
    //     // console.log('baseUrl', baseUrl);
    //     return url
    // },
    async redirect(url, baseUrl) {
      return baseUrl;
    },

    async jwt(token, user, account, profile, isNewUser) {
      // console.log("token ===> ", token)
      // console.log("user ===> ", user)
      // console.log("account ===> ", account)
      // console.log("profile ===> ", profile)
      // console.log("isNewUser ===> ", isNewUser)
      if (user) {
        token = _objectSpread(_objectSpread(_objectSpread({}, token), user), account && account);
      }

      return token;
    },

    async session(session, token) {
      if (token && token.type === 'oauth') {
        const data = await Object(_api_auth__WEBPACK_IMPORTED_MODULE_4__["loginService"])(token.provider, token.accessToken); //console.log("data = ", data)

        const me = await Object(_utils_providers__WEBPACK_IMPORTED_MODULE_3__["getMe"])(data.access_token); //console.log("me===>>", me)

        session = _objectSpread(_objectSpread({}, data), {}, {
          name: me.nome,
          email: me.email,
          userId: me.id,
          photo: me.foto_perfil_arquivo ? me.foto_perfil_arquivo.link : token.image ? token.image : ""
        });
      } else {
        session = _objectSpread(_objectSpread({}, session), token);
      }

      console.log("token ==", token);
      console.log("session == ", session);
      return session;
    }

  }
};
/* harmony default export */ __webpack_exports__["default"] = ((req, res) => next_auth__WEBPACK_IMPORTED_MODULE_0___default()(req, res, options));

/***/ }),

/***/ "./utils/common.js":
/*!*************************!*\
  !*** ./utils/common.js ***!
  \*************************/
/*! exports provided: notify, useInput, ratingDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notify", function() { return notify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInput", function() { return useInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ratingDate", function() { return ratingDate; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);


 // convert object to FormData

const notify = (type, message) => {
  if (type === 'success') {
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].success(message, {
      style: {
        fontSize: 16
      }
    });
  } else if (type === 'error') {
    // if (!message) message = 'Something Went Wrong. Try Again!'
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].error(message, {
      style: {
        fontSize: 16
      }
    });
  } else if (type === 'warning') {
    react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"].warning(message);
  } else {
    Object(react_toastify__WEBPACK_IMPORTED_MODULE_1__["toast"])(message);
  }
}; // custom helper to take input field

const useInput = (initialValue = '') => {
  const {
    0: value,
    1: setValue
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initialValue);

  const handleChange = e => setValue(e.target.value);

  return [value, handleChange, setValue];
};
const ratingDate = date => {
  return moment__WEBPACK_IMPORTED_MODULE_2___default.a.utc(date).local().format('DD/MMM/YYYY');
};

/***/ }),

/***/ "./utils/providers.js":
/*!****************************!*\
  !*** ./utils/providers.js ***!
  \****************************/
/*! exports provided: gavProvider, getToken, getMe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gavProvider", function() { return gavProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getToken", function() { return getToken; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMe", function() { return getMe; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config/index.js");
/* harmony import */ var _api_cadastro_captasao_createPerson__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/cadastro/captasao/createPerson */ "./api/cadastro/captasao/createPerson.js");



const domain = _config__WEBPACK_IMPORTED_MODULE_1__["config"].baseUrl;
const gavProvider = {
  clientId: _config__WEBPACK_IMPORTED_MODULE_1__["config"].GAV_CLIENT_ID,
  clientSecret: _config__WEBPACK_IMPORTED_MODULE_1__["config"].GAV_CLIENT_SECRET,
  grant_type: _config__WEBPACK_IMPORTED_MODULE_1__["config"].grantType
};
const getToken = async credentials => {
  credentials.scope = '';
  credentials.grant_type = gavProvider.grant_type;
  credentials.client_id = gavProvider.clientId;
  credentials.client_secret = gavProvider.clientSecret; //console.log("creadiantials  = ", credentials)

  try {
    const {
      data: tokens
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${domain}/oauth/token`, credentials); // console.log(tokens)

    return tokens;
  } catch (error) {
    console.log(error);
    return null;
  }
};
const getMe = async access_token => {
  try {
    const {
      data: me
    } = await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${domain}/api/me`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: 'application/json'
      }
    });
    return me;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/***/ }),

/***/ "./utils/request.js":
/*!**************************!*\
  !*** ./utils/request.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


let defaultOptions;

const client = (token = null) => {
  return {
    get: (url, tokenNeed, token, options = {}) => {
      defaultOptions = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': 'en'
        }
      };

      if (tokenNeed) {
        Object.assign(defaultOptions.headers, {
          Authorization: token
        });
      }

      console.log('defaultOptions', defaultOptions);
      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, _objectSpread(_objectSpread({}, defaultOptions), options));
    },
    post: (url, tokenNeed, token, data, options = {}) => {
      defaultOptions = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': 'en'
        }
      };

      if (tokenNeed) {
        Object.assign(defaultOptions.headers, {
          Authorization: token
        });
      }

      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, data, _objectSpread(_objectSpread({}, defaultOptions), options));
    },
    put: (url, tokenNeed, token, data, options = {}) => {
      defaultOptions = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': 'en'
        }
      };

      if (tokenNeed) {
        Object.assign(defaultOptions.headers, {
          Authorization: token
        });
      }

      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(url, data, _objectSpread(_objectSpread({}, defaultOptions), options));
    },
    patch: (url, tokenNeed, token, data, options = {}) => {
      defaultOptions = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': 'en'
        }
      };

      if (tokenNeed) {
        Object.assign(defaultOptions.headers, {
          Authorization: token
        });
      }

      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.patch(url, data, _objectSpread(_objectSpread({}, defaultOptions), options));
    },
    delete: (url, tokenNeed, token, options = {}) => {
      defaultOptions = {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Accept-Language': 'en'
        }
      };

      if (tokenNeed) {
        Object.assign(defaultOptions.headers, {
          Authorization: token
        });
      }

      return axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(url, _objectSpread(_objectSpread({}, defaultOptions), options));
    }
  };
};

const httpRequest = client(null);
/* harmony default export */ __webpack_exports__["default"] = (httpRequest);

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "next-auth/providers":
/*!**************************************!*\
  !*** external "next-auth/providers" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/providers");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpL2F1dGguanMiLCJ3ZWJwYWNrOi8vLy4vYXBpL2NhZGFzdHJvL2NhcHRhc2FvL2NyZWF0ZVBlcnNvbi5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL2F1dGhDb25zdGFudC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wcm92aWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC10b2FzdGlmeVwiIl0sIm5hbWVzIjpbInJlZ2lzdGVyU2VydmljZSIsInJlZ09iaiIsImNhbGxiYWNrIiwiZGlzcGF0Y2giLCJ0eXBlIiwiUkVHSVNURVJfUkVRVUVTVCIsImJvZHkiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZGF0YSIsImh0dHBSZXF1ZXN0IiwicG9zdCIsImNvbmZpZyIsImJhc2VVcmwiLCJSRUdJU1RFUl9TVUNDRVNTIiwicGF5bG9hZCIsImVycm9yIiwiUkVHSVNURVJfRkFJTCIsInJlc3BvbnNlIiwibG9naW5TZXJ2aWNlIiwic2VydmljZSIsInRva2VuIiwiYWNjZXNzVG9rZW4iLCJjbGllbnRfc2VjcmV0IiwiR0FWX0NMSUVOVF9TRUNSRVQiLCJjbGllbnRfaWQiLCJHQVZfQ0xJRU5UX0lEIiwiY29uc29sZSIsImxvZyIsIm1lc3NhZ2UiLCJnZXRNZSIsInNlc3Npb24iLCJnZXRTZXNzaW9uIiwiYWNjZXNzX3Rva2VuIiwibWUiLCJheGlvcyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwiQWNjZXB0IiwiY3JlYXRlUGVyc29uIiwiZW1haWwiLCJjZWx1bGFyIiwibm9tZSIsInNlbmhhIiwicGVzc29hX2NhZGFzdHJvX2lkIiwicGVzc29hX3RpcG9faWQiLCJjYiIsInBlc3NvYV9maXNpY2EiLCJwZXNzb2FfanVyaWRpY2EiLCJ1c2VyIiwibm90aWZ5IiwiZXJyIiwiZXJyb3JzIiwiREVWRUxPUE1FTlQiLCJuZXh0QXV0aFVybCIsInByb2Nlc3MiLCJncmFudFR5cGUiLCJiYXNpY0F1dGhUb2tlbiIsIkdPT0dMRV9DTElFTlRfSUQiLCJHT09HTEVfQ0xJRU5UX1NFQ1JFVCIsIkZBQ0VCT09LX0NMSUVOVF9JRCIsIkZBQ0VCT09LX0NMSUVOVF9TRUNSRVQiLCJMT0dJTl9SRVFVRVNUIiwiTE9HSU5fU1VDQ0VTUyIsIkxPR0lOX0ZBSUwiLCJVU0VSX0xPR09VVCIsIm9wdGlvbnMiLCJwcm92aWRlcnMiLCJQcm92aWRlcnMiLCJHb29nbGUiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImF1dGhvcml6YXRpb25VcmwiLCJzY29wZSIsInByb2ZpbGVVcmwiLCJhY2Nlc3NUb2tlblVybCIsInJlcXVlc3RUb2tlblVybCIsIkZhY2Vib29rIiwiQ3JlZGVudGlhbHMiLCJuYW1lIiwiYXV0aG9yaXplIiwiY3JlZGVudGlhbHMiLCJ0b2tlbnMiLCJnZXRUb2tlbiIsInVzZXJJZCIsImlkIiwicGhvdG8iLCJmb3RvX3BlcmZpbF9hcnF1aXZvIiwibGluayIsInNpdGUiLCJwYWdlcyIsInNpZ25JbiIsImp3dCIsImNhbGxiYWNrcyIsInJlZGlyZWN0IiwidXJsIiwiYWNjb3VudCIsInByb2ZpbGUiLCJpc05ld1VzZXIiLCJwcm92aWRlciIsImltYWdlIiwicmVxIiwicmVzIiwiTmV4dEF1dGgiLCJ0b2FzdCIsInN1Y2Nlc3MiLCJzdHlsZSIsImZvbnRTaXplIiwid2FybmluZyIsInVzZUlucHV0IiwiaW5pdGlhbFZhbHVlIiwidmFsdWUiLCJzZXRWYWx1ZSIsInVzZVN0YXRlIiwiaGFuZGxlQ2hhbmdlIiwiZSIsInRhcmdldCIsInJhdGluZ0RhdGUiLCJkYXRlIiwibW9tZW50IiwidXRjIiwibG9jYWwiLCJmb3JtYXQiLCJkb21haW4iLCJnYXZQcm92aWRlciIsImdyYW50X3R5cGUiLCJkZWZhdWx0T3B0aW9ucyIsImNsaWVudCIsInRva2VuTmVlZCIsIk9iamVjdCIsImFzc2lnbiIsInB1dCIsInBhdGNoIiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR08sTUFBTUEsZUFBZSxHQUFHLENBQUNDLE1BQUQsRUFBU0MsUUFBVCxLQUFzQixNQUFPQyxRQUFQLElBQW9CO0FBQ3ZFQSxVQUFRLENBQUM7QUFBRUMsUUFBSSxFQUFFQyx3RUFBZ0JBO0FBQXhCLEdBQUQsQ0FBUjs7QUFFQSxNQUFJO0FBQ0YsVUFBTUMsSUFBSSxHQUFHO0FBQ1hDLGNBQVEsRUFBRU4sTUFBTSxDQUFDTSxRQUROO0FBRVhDLGNBQVEsRUFBRVAsTUFBTSxDQUFDTztBQUZOLEtBQWI7QUFLQSxVQUFNO0FBQUVDO0FBQUYsUUFBVyxNQUFNQyxzREFBVyxDQUFDQyxJQUFaLENBQ3BCLEdBQUVDLDhDQUFNLENBQUNDLE9BQVEsV0FERyxFQUVyQixLQUZxQixFQUdyQixJQUhxQixFQUlyQlAsSUFKcUIsQ0FBdkI7QUFPQUgsWUFBUSxDQUFDO0FBQ1BDLFVBQUksRUFBRVUsd0VBREM7QUFFUEMsYUFBTyxFQUFFTjtBQUZGLEtBQUQsQ0FBUjtBQUtBUCxZQUFRLENBQUNPLElBQUQsRUFBTyxJQUFQLENBQVI7QUFDRCxHQW5CRCxDQW1CRSxPQUFPTyxLQUFQLEVBQWM7QUFDZGIsWUFBUSxDQUFDO0FBQ1BDLFVBQUksRUFBRWEscUVBREM7QUFFUEYsYUFBTyxFQUFFQyxLQUFLLENBQUNFO0FBRlIsS0FBRCxDQUFSO0FBS0FoQixZQUFRLENBQUMsSUFBRCxFQUFPYyxLQUFLLENBQUNFLFFBQWIsQ0FBUjtBQUNEO0FBQ0YsQ0E5Qk07QUFnQ0EsTUFBTUMsWUFBWSxHQUFHLE9BQU9DLE9BQVAsRUFBZ0JDLEtBQWhCLEtBQTBCO0FBQ3BEO0FBQ0EsTUFBSTtBQUVGLFVBQU1mLElBQUksR0FBRztBQUNYZ0IsaUJBQVcsRUFBRUQsS0FERjtBQUVYRSxtQkFBYSxFQUFFWCw4Q0FBTSxDQUFDWSxpQkFGWDtBQUdYQyxlQUFTLEVBQUViLDhDQUFNLENBQUNjLGFBSFAsQ0FJWDs7QUFKVyxLQUFiO0FBU0EsVUFBTTtBQUFFakI7QUFBRixRQUFXLE1BQU1DLHNEQUFXLENBQUNDLElBQVosQ0FDcEIsR0FBRUMsOENBQU0sQ0FBQ0MsT0FBUSxvQkFBbUJPLE9BQVEsRUFEeEIsRUFFckIsS0FGcUIsRUFHckIsSUFIcUIsRUFJckJkLElBSnFCLENBQXZCO0FBTUEsV0FBT0csSUFBUDtBQUVELEdBbkJELENBbUJFLE9BQU9PLEtBQVAsRUFBYztBQUNkVyxXQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaO0FBQ0FELFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixLQUFLLENBQUNFLFFBQU4sQ0FBZVQsSUFBZixDQUFvQm9CLE9BQWhDO0FBQ0Q7QUFDRixDQXpCTTtBQTJCQSxNQUFNQyxLQUFLLEdBQUcsWUFBWTtBQUMvQixNQUFJO0FBQ0YsVUFBTUMsT0FBTyxHQUFHLE1BQU1DLG1FQUFVLEVBQWhDOztBQUNBLFFBQUlELE9BQUosRUFBYTtBQUNYLFlBQU1WLEtBQUssR0FBR1UsT0FBTyxDQUFDRSxZQUF0QjtBQUNBLFlBQU07QUFBRXhCLFlBQUksRUFBRXlCO0FBQVIsVUFBZSxNQUFNQyw0Q0FBSyxDQUFDQyxHQUFOLENBQ3hCLEdBQUV4Qiw4Q0FBTSxDQUFDQyxPQUFRLFNBRE8sRUFFekI7QUFDRXdCLGVBQU8sRUFBRTtBQUNQQyx1QkFBYSxFQUFHLFVBQVNqQixLQUFNLEVBRHhCO0FBRVBrQixnQkFBTSxFQUFFO0FBRkQ7QUFEWCxPQUZ5QixDQUEzQjtBQVNBLGFBQU9MLEVBQVA7QUFDRDtBQUNGLEdBZkQsQ0FlRSxPQUFPbEIsS0FBUCxFQUFjO0FBQ2RXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixLQUFaO0FBQ0EsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQXBCTSxDOzs7Ozs7Ozs7Ozs7QUNsRVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ0E7QUFJTyxNQUFNd0IsWUFBWSxHQUFHLE9BQU9DLEtBQVAsRUFBY0MsT0FBZCxFQUF1QkMsSUFBdkIsRUFBNkJDLEtBQTdCLEVBQW9DQyxrQkFBcEMsRUFBd0RDLGNBQXhELEVBQXdFQyxFQUF4RSxLQUErRTtBQUN2RyxNQUFJO0FBQ0EsVUFBTXpDLElBQUksR0FBRztBQUNUb0MsYUFBTyxFQUFFQSxPQURBO0FBRVRELFdBQUssRUFBRUEsS0FGRTtBQUdUSyxvQkFBYyxFQUFFQSxjQUhQO0FBSVRELHdCQUFrQixFQUFFQSxrQkFKWDtBQUtURyxtQkFBYSxFQUFFO0FBQ1hMLFlBQUksRUFBRUE7QUFESyxPQUxOO0FBUVRNLHFCQUFlLEVBQUU7QUFDYk4sWUFBSSxFQUFFQTtBQURPLE9BUlI7QUFXVE8sVUFBSSxFQUFFO0FBQ0YxQyxnQkFBUSxFQUFFb0MsS0FEUjtBQUVGSCxhQUFLLEVBQUVBO0FBRkw7QUFYRyxLQUFiO0FBa0JBLFVBQU07QUFBRWhDO0FBQUYsUUFBVyxNQUFNQyxzREFBVyxDQUFDQyxJQUFaLENBQ2xCLEdBQUVDLDhDQUFNLENBQUNDLE9BQVEsdUJBREMsRUFFbkIsS0FGbUIsRUFHbkIsRUFIbUIsRUFJbkJQLElBSm1CLENBQXZCLENBbkJBLENBeUJBOztBQUNBNkMsZ0VBQU0sQ0FBQyxTQUFELEVBQVksc0JBQVosQ0FBTjtBQUNBSixNQUFFO0FBQ0YsV0FBT3RDLElBQVA7QUFDSCxHQTdCRCxDQTZCRSxPQUFPTyxLQUFQLEVBQWM7QUFDWitCLE1BQUU7QUFDRixRQUFJSyxHQUFHLEdBQUcsRUFBVjs7QUFDQSxRQUFHLGdCQUFnQnBDLEtBQUssQ0FBQ0UsUUFBTixDQUFlVCxJQUFmLENBQW9CNEMsTUFBdkMsRUFBK0M7QUFDM0NELFNBQUcsSUFBSXBDLEtBQUssQ0FBQ0UsUUFBTixDQUFlVCxJQUFmLENBQW9CNEMsTUFBcEIsQ0FBMkIsWUFBM0IsRUFBeUMsQ0FBekMsQ0FBUDtBQUNIOztBQUVELFFBQUcsbUJBQW1CckMsS0FBSyxDQUFDRSxRQUFOLENBQWVULElBQWYsQ0FBb0I0QyxNQUExQyxFQUFrRDtBQUM5Q0QsU0FBRyxJQUFJcEMsS0FBSyxDQUFDRSxRQUFOLENBQWVULElBQWYsQ0FBb0I0QyxNQUFwQixDQUEyQixlQUEzQixFQUE0QyxDQUE1QyxDQUFQO0FBQ0g7O0FBQ0RGLGdFQUFNLENBQUMsT0FBRCxFQUFVQyxHQUFWLENBQU4sQ0FWWSxDQVdiOztBQUNDLFdBQU8sSUFBUDtBQUNIO0FBQ0osQ0E1Q00sQzs7Ozs7Ozs7Ozs7O0FDUFA7QUFBQTtBQUFBLE1BQU1FLFdBQVcsR0FBRztBQUNoQkMsYUFBVyxFQUFFQyxrQ0FERztBQUVoQjNDLFNBQU8sRUFBRTJDLGtDQUZPO0FBR2hCQyxXQUFTLEVBQUVELFVBSEs7QUFJaEJFLGdCQUFjLEVBQUVGLGtEQUpBO0FBS2hCaEMsbUJBQWlCLEVBQUVnQywwQ0FMSDtBQU1oQjlCLGVBQWEsRUFBRThCLEVBTkM7QUFPaEJHLGtCQUFnQixFQUFFSCwyRUFQRjtBQVFoQkksc0JBQW9CLEVBQUVKLDBCQVJOO0FBVWhCO0FBQ0E7QUFDQUssb0JBQWtCLEVBQUVMLGlCQVpKO0FBYWhCTSx3QkFBc0IsRUFBR04sa0NBQWtDTTtBQWIzQyxDQUFwQjtBQWdCTyxNQUFNbEQsTUFBTSxHQUFHMEMsV0FBZixDOzs7Ozs7Ozs7Ozs7QUNoQlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1TLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLGFBQWEsR0FBRyxlQUF0QjtBQUNBLE1BQU1DLFVBQVUsR0FBRyxZQUFuQjtBQUVBLE1BQU1DLFdBQVcsR0FBRyxhQUFwQjtBQUVBLE1BQU03RCxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNUyxnQkFBZ0IsR0FBRyxrQkFBekI7QUFDQSxNQUFNRyxhQUFhLEdBQUcsZUFBdEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBLE1BQU1rRCxPQUFPLEdBQUc7QUFDWkMsV0FBUyxFQUFFLENBQ1BDLDBEQUFTLENBQUNDLE1BQVYsQ0FBaUI7QUFDYkMsWUFBUSxFQUFFM0QsOENBQU0sQ0FBQytDLGdCQURKO0FBRWJhLGdCQUFZLEVBQUU1RCw4Q0FBTSxDQUFDZ0Qsb0JBRlI7QUFHYmEsb0JBQWdCLEVBQUMsb0dBSEo7QUFJYkMsU0FBSyxFQUFDLGtKQUpPO0FBS2JDLGNBQVUsRUFBRSx3REFMQztBQU1iQyxrQkFBYyxFQUFFLDRDQU5IO0FBT2JDLG1CQUFlLEVBQUU7QUFQSixHQUFqQixDQURPLEVBVVBSLDBEQUFTLENBQUNTLFFBQVYsQ0FBbUI7QUFDZlAsWUFBUSxFQUFFM0QsOENBQU0sQ0FBQ2lELGtCQURGO0FBRWZXLGdCQUFZLEVBQUU1RCw4Q0FBTSxDQUFDa0Q7QUFGTixHQUFuQixDQVZPLEVBY1BPLDBEQUFTLENBQUNVLFdBQVYsQ0FBc0I7QUFDbEJDLFFBQUksRUFBRSxLQURZOztBQUVsQixVQUFNQyxTQUFOLENBQWdCQyxXQUFoQixFQUE2QjtBQUd6QixZQUFNQyxNQUFNLEdBQUcsTUFBTUMsaUVBQVEsQ0FBQ0YsV0FBRCxDQUE3Qjs7QUFDQSxVQUFJLENBQUNDLE1BQUwsRUFBYTtBQUNULGVBQU8sSUFBUDtBQUNIOztBQUNELFlBQU1qRCxFQUFFLEdBQUcsTUFBTUosOERBQUssQ0FBQ3FELE1BQU0sQ0FBQ2xELFlBQVIsQ0FBdEIsQ0FQeUIsQ0FRekI7O0FBQ0EsWUFBTWlCLElBQUksbUNBQ0hpQyxNQURHO0FBRU5ILFlBQUksRUFBRTlDLEVBQUUsQ0FBQ1MsSUFGSDtBQUdORixhQUFLLEVBQUVQLEVBQUUsQ0FBQ08sS0FISjtBQUlONEMsY0FBTSxFQUFFbkQsRUFBRSxDQUFDb0QsRUFKTDtBQUtOQyxhQUFLLEVBQUVyRCxFQUFFLENBQUNzRCxtQkFBSCxHQUF5QnRELEVBQUUsQ0FBQ3NELG1CQUFILENBQXVCQyxJQUFoRCxHQUF1RDtBQUx4RCxRQUFWOztBQVNBLGFBQU92QyxJQUFQO0FBRUg7O0FBdEJpQixHQUF0QixDQWRPLENBREM7QUF5Q1p3QyxNQUFJLEVBQUVsQyxrQ0F6Q007QUEwQ1ptQyxPQUFLLEVBQUU7QUFDSEMsVUFBTSxFQUFFLFFBREw7QUFFSDVFLFNBQUssRUFBRTtBQUZKLEdBMUNLO0FBOENaZSxTQUFPLEVBQUU7QUFDTDhELE9BQUcsRUFBRTtBQURBLEdBOUNHO0FBaURaQyxXQUFTLEVBQUU7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EsVUFBTUMsUUFBTixDQUFlQyxHQUFmLEVBQW9CbkYsT0FBcEIsRUFBNkI7QUFDekIsYUFBT0EsT0FBUDtBQUNILEtBWk07O0FBY1AsVUFBTWdGLEdBQU4sQ0FBVXhFLEtBQVYsRUFBaUI2QixJQUFqQixFQUF1QitDLE9BQXZCLEVBQWdDQyxPQUFoQyxFQUF5Q0MsU0FBekMsRUFBb0Q7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLFVBQUlqRCxJQUFKLEVBQVU7QUFFTjdCLGFBQUssaURBQ0VBLEtBREYsR0FFRTZCLElBRkYsR0FHRytDLE9BQU8sSUFBSUEsT0FIZCxDQUFMO0FBTUg7O0FBRUQsYUFBTzVFLEtBQVA7QUFDSCxLQWhDTTs7QUFpQ1AsVUFBTVUsT0FBTixDQUFjQSxPQUFkLEVBQXVCVixLQUF2QixFQUE4QjtBQUcxQixVQUFJQSxLQUFLLElBQUtBLEtBQUssQ0FBQ2pCLElBQU4sS0FBZSxPQUE3QixFQUF1QztBQUVuQyxjQUFNSyxJQUFJLEdBQUcsTUFBTVUsOERBQVksQ0FBQ0UsS0FBSyxDQUFDK0UsUUFBUCxFQUFpQi9FLEtBQUssQ0FBQ0MsV0FBdkIsQ0FBL0IsQ0FGbUMsQ0FHbkM7O0FBQ0EsY0FBTVksRUFBRSxHQUFHLE1BQU1KLDhEQUFLLENBQUNyQixJQUFJLENBQUN3QixZQUFOLENBQXRCLENBSm1DLENBS25DOztBQUNBRixlQUFPLG1DQUNBdEIsSUFEQTtBQUVIdUUsY0FBSSxFQUFFOUMsRUFBRSxDQUFDUyxJQUZOO0FBR0hGLGVBQUssRUFBRVAsRUFBRSxDQUFDTyxLQUhQO0FBSUg0QyxnQkFBTSxFQUFFbkQsRUFBRSxDQUFDb0QsRUFKUjtBQUtIQyxlQUFLLEVBQUVyRCxFQUFFLENBQUNzRCxtQkFBSCxHQUF5QnRELEVBQUUsQ0FBQ3NELG1CQUFILENBQXVCQyxJQUFoRCxHQUF1RHBFLEtBQUssQ0FBQ2dGLEtBQU4sR0FBY2hGLEtBQUssQ0FBQ2dGLEtBQXBCLEdBQTRCO0FBTHZGLFVBQVA7QUFTSCxPQWZELE1BZU87QUFDSHRFLGVBQU8sbUNBQ0FBLE9BREEsR0FDWVYsS0FEWixDQUFQO0FBR0g7O0FBQ0RNLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFVBQVosRUFBd0JQLEtBQXhCO0FBQ0FNLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVosRUFBMkJHLE9BQTNCO0FBQ0EsYUFBT0EsT0FBUDtBQUNIOztBQTNETTtBQWpEQyxDQUFoQjtBQXFIZSxnRUFBQ3VFLEdBQUQsRUFBTUMsR0FBTixLQUFjQyxnREFBUSxDQUFDRixHQUFELEVBQU1DLEdBQU4sRUFBV3BDLE9BQVgsQ0FBckMsRTs7Ozs7Ozs7Ozs7O0FDN0hBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtDQUdBOztBQUNPLE1BQU1oQixNQUFNLEdBQUcsQ0FBQy9DLElBQUQsRUFBT3lCLE9BQVAsS0FBbUI7QUFDdkMsTUFBSXpCLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQ3RCcUcsd0RBQUssQ0FBQ0MsT0FBTixDQUFjN0UsT0FBZCxFQUF1QjtBQUNyQjhFLFdBQUssRUFBRTtBQUFFQyxnQkFBUSxFQUFFO0FBQVo7QUFEYyxLQUF2QjtBQUdELEdBSkQsTUFJTyxJQUFJeEcsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDM0I7QUFDQXFHLHdEQUFLLENBQUN6RixLQUFOLENBQVlhLE9BQVosRUFBcUI7QUFDbkI4RSxXQUFLLEVBQUU7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaO0FBRFksS0FBckI7QUFHRCxHQUxNLE1BS0EsSUFBSXhHLElBQUksS0FBSyxTQUFiLEVBQXdCO0FBQzdCcUcsd0RBQUssQ0FBQ0ksT0FBTixDQUFjaEYsT0FBZDtBQUNELEdBRk0sTUFFQTtBQUNMNEUsZ0VBQUssQ0FBQzVFLE9BQUQsQ0FBTDtBQUNEO0FBQ0YsQ0FmTSxDLENBaUJQOztBQUNPLE1BQU1pRixRQUFRLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHLEVBQWhCLEtBQXVCO0FBQzdDLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkMsc0RBQVEsQ0FBQ0gsWUFBRCxDQUFsQzs7QUFDQSxRQUFNSSxZQUFZLEdBQUlDLENBQUQsSUFBT0gsUUFBUSxDQUFDRyxDQUFDLENBQUNDLE1BQUYsQ0FBU0wsS0FBVixDQUFwQzs7QUFDQSxTQUFPLENBQUNBLEtBQUQsRUFBUUcsWUFBUixFQUFzQkYsUUFBdEIsQ0FBUDtBQUNELENBSk07QUFNQSxNQUFNSyxVQUFVLEdBQUlDLElBQUQsSUFBVTtBQUNsQyxTQUFRQyw2Q0FBTSxDQUFDQyxHQUFQLENBQVdGLElBQVgsRUFBa0JHLEtBQWxCLEdBQTBCQyxNQUExQixDQUFpQyxhQUFqQyxDQUFSO0FBQ0QsQ0FGTSxDOzs7Ozs7Ozs7Ozs7QUM3QlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1DLE1BQU0sR0FBR2hILDhDQUFNLENBQUNDLE9BQXRCO0FBRU8sTUFBTWdILFdBQVcsR0FBRztBQUN2QnRELFVBQVEsRUFBRTNELDhDQUFNLENBQUNjLGFBRE07QUFFdkI4QyxjQUFZLEVBQUU1RCw4Q0FBTSxDQUFDWSxpQkFGRTtBQUd2QnNHLFlBQVUsRUFBRWxILDhDQUFNLENBQUM2QztBQUhJLENBQXBCO0FBTUEsTUFBTTJCLFFBQVEsR0FBRyxNQUFPRixXQUFQLElBQXVCO0FBQzNDQSxhQUFXLENBQUNSLEtBQVosR0FBb0IsRUFBcEI7QUFDQVEsYUFBVyxDQUFDNEMsVUFBWixHQUF5QkQsV0FBVyxDQUFDQyxVQUFyQztBQUNBNUMsYUFBVyxDQUFDekQsU0FBWixHQUF3Qm9HLFdBQVcsQ0FBQ3RELFFBQXBDO0FBQ0FXLGFBQVcsQ0FBQzNELGFBQVosR0FBNEJzRyxXQUFXLENBQUNyRCxZQUF4QyxDQUoyQyxDQUszQzs7QUFDQSxNQUFJO0FBQ0EsVUFBTTtBQUFFL0QsVUFBSSxFQUFFMEU7QUFBUixRQUFtQixNQUFNaEQsNENBQUssQ0FBQ3hCLElBQU4sQ0FDMUIsR0FBRWlILE1BQU8sY0FEaUIsRUFFM0IxQyxXQUYyQixDQUEvQixDQURBLENBS0Q7O0FBQ0MsV0FBT0MsTUFBUDtBQUNILEdBUEQsQ0FPRSxPQUFPbkUsS0FBUCxFQUFjO0FBQ2JXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixLQUFaO0FBQ0MsV0FBTyxJQUFQO0FBQ0g7QUFDSixDQWpCTTtBQW1CQSxNQUFNYyxLQUFLLEdBQUcsTUFBT0csWUFBUCxJQUF3QjtBQUN6QyxNQUFJO0FBQ0EsVUFBTTtBQUFFeEIsVUFBSSxFQUFFeUI7QUFBUixRQUFlLE1BQU1DLDRDQUFLLENBQUNDLEdBQU4sQ0FDdEIsR0FBRXdGLE1BQU8sU0FEYSxFQUV2QjtBQUNJdkYsYUFBTyxFQUFFO0FBQ0xDLHFCQUFhLEVBQUcsVUFBU0wsWUFBYSxFQURqQztBQUVMTSxjQUFNLEVBQUU7QUFGSDtBQURiLEtBRnVCLENBQTNCO0FBU0EsV0FBT0wsRUFBUDtBQUNILEdBWEQsQ0FXRSxPQUFPbEIsS0FBUCxFQUFjO0FBQ1pXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZWixLQUFaO0FBQ0EsV0FBTyxJQUFQO0FBQ0g7QUFDSixDQWhCTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQlA7QUFFQSxJQUFJK0csY0FBSjs7QUFDQSxNQUFNQyxNQUFNLEdBQUcsQ0FBQzNHLEtBQUssR0FBRyxJQUFULEtBQWtCO0FBQzdCLFNBQU87QUFDSGUsT0FBRyxFQUFFLENBQUM0RCxHQUFELEVBQU1pQyxTQUFOLEVBQWlCNUcsS0FBakIsRUFBd0I4QyxPQUFPLEdBQUcsRUFBbEMsS0FBeUM7QUFDMUM0RCxvQkFBYyxHQUFHO0FBQ2IxRixlQUFPLEVBQUU7QUFDTCxvQkFBVSxrQkFETDtBQUVMLDBCQUFnQixrQkFGWDtBQUdMLDZCQUFtQjtBQUhkO0FBREksT0FBakI7O0FBUUEsVUFBSTRGLFNBQUosRUFBZTtBQUNYQyxjQUFNLENBQUNDLE1BQVAsQ0FBY0osY0FBYyxDQUFDMUYsT0FBN0IsRUFBc0M7QUFDbENDLHVCQUFhLEVBQUVqQjtBQURtQixTQUF0QztBQUdIOztBQUVETSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixFQUE4Qm1HLGNBQTlCO0FBRUEsYUFBTzVGLDRDQUFLLENBQUNDLEdBQU4sQ0FBVTRELEdBQVYsa0NBQW9CK0IsY0FBcEIsR0FBdUM1RCxPQUF2QyxFQUFQO0FBQ0gsS0FuQkU7QUFxQkh4RCxRQUFJLEVBQUUsQ0FBQ3FGLEdBQUQsRUFBTWlDLFNBQU4sRUFBaUI1RyxLQUFqQixFQUF3QlosSUFBeEIsRUFBOEIwRCxPQUFPLEdBQUcsRUFBeEMsS0FBK0M7QUFDakQ0RCxvQkFBYyxHQUFHO0FBQ2IxRixlQUFPLEVBQUU7QUFDTCxvQkFBVSxrQkFETDtBQUVMLDBCQUFnQixrQkFGWDtBQUdMLDZCQUFtQjtBQUhkO0FBREksT0FBakI7O0FBUUEsVUFBSTRGLFNBQUosRUFBZTtBQUNYQyxjQUFNLENBQUNDLE1BQVAsQ0FBY0osY0FBYyxDQUFDMUYsT0FBN0IsRUFBc0M7QUFDbENDLHVCQUFhLEVBQUVqQjtBQURtQixTQUF0QztBQUdIOztBQUVELGFBQU9jLDRDQUFLLENBQUN4QixJQUFOLENBQVdxRixHQUFYLEVBQWdCdkYsSUFBaEIsa0NBQTJCc0gsY0FBM0IsR0FBOEM1RCxPQUE5QyxFQUFQO0FBQ0gsS0FyQ0U7QUF1Q0hpRSxPQUFHLEVBQUUsQ0FBQ3BDLEdBQUQsRUFBTWlDLFNBQU4sRUFBaUI1RyxLQUFqQixFQUF3QlosSUFBeEIsRUFBOEIwRCxPQUFPLEdBQUcsRUFBeEMsS0FBK0M7QUFDaEQ0RCxvQkFBYyxHQUFHO0FBQ2IxRixlQUFPLEVBQUU7QUFDTCxvQkFBVSxrQkFETDtBQUVMLDBCQUFnQixrQkFGWDtBQUdMLDZCQUFtQjtBQUhkO0FBREksT0FBakI7O0FBUUEsVUFBSTRGLFNBQUosRUFBZTtBQUNYQyxjQUFNLENBQUNDLE1BQVAsQ0FBY0osY0FBYyxDQUFDMUYsT0FBN0IsRUFBc0M7QUFDbENDLHVCQUFhLEVBQUVqQjtBQURtQixTQUF0QztBQUdIOztBQUVELGFBQU9jLDRDQUFLLENBQUNpRyxHQUFOLENBQVVwQyxHQUFWLEVBQWV2RixJQUFmLGtDQUEwQnNILGNBQTFCLEdBQTZDNUQsT0FBN0MsRUFBUDtBQUNILEtBdkRFO0FBeURIa0UsU0FBSyxFQUFFLENBQUNyQyxHQUFELEVBQU1pQyxTQUFOLEVBQWlCNUcsS0FBakIsRUFBd0JaLElBQXhCLEVBQThCMEQsT0FBTyxHQUFHLEVBQXhDLEtBQStDO0FBQ2xENEQsb0JBQWMsR0FBRztBQUNiMUYsZUFBTyxFQUFFO0FBQ0wsb0JBQVUsa0JBREw7QUFFTCwwQkFBZ0Isa0JBRlg7QUFHTCw2QkFBbUI7QUFIZDtBQURJLE9BQWpCOztBQVFBLFVBQUk0RixTQUFKLEVBQWU7QUFDWEMsY0FBTSxDQUFDQyxNQUFQLENBQWNKLGNBQWMsQ0FBQzFGLE9BQTdCLEVBQXNDO0FBQ2xDQyx1QkFBYSxFQUFFakI7QUFEbUIsU0FBdEM7QUFHSDs7QUFFRCxhQUFPYyw0Q0FBSyxDQUFDa0csS0FBTixDQUFZckMsR0FBWixFQUFpQnZGLElBQWpCLGtDQUE0QnNILGNBQTVCLEdBQStDNUQsT0FBL0MsRUFBUDtBQUNILEtBekVFO0FBMkVIbUUsVUFBTSxFQUFFLENBQUN0QyxHQUFELEVBQU1pQyxTQUFOLEVBQWlCNUcsS0FBakIsRUFBd0I4QyxPQUFPLEdBQUcsRUFBbEMsS0FBeUM7QUFDN0M0RCxvQkFBYyxHQUFHO0FBQ2IxRixlQUFPLEVBQUU7QUFDTCxvQkFBVSxrQkFETDtBQUVMLDBCQUFnQixrQkFGWDtBQUdMLDZCQUFtQjtBQUhkO0FBREksT0FBakI7O0FBUUEsVUFBSTRGLFNBQUosRUFBZTtBQUNYQyxjQUFNLENBQUNDLE1BQVAsQ0FBY0osY0FBYyxDQUFDMUYsT0FBN0IsRUFBc0M7QUFDbENDLHVCQUFhLEVBQUVqQjtBQURtQixTQUF0QztBQUdIOztBQUVELGFBQU9jLDRDQUFLLENBQUNtRyxNQUFOLENBQWF0QyxHQUFiLGtDQUF1QitCLGNBQXZCLEdBQTBDNUQsT0FBMUMsRUFBUDtBQUNIO0FBM0ZFLEdBQVA7QUE2RkgsQ0E5RkQ7O0FBK0ZBLE1BQU16RCxXQUFXLEdBQUdzSCxNQUFNLENBQUMsSUFBRCxDQUExQjtBQUNldEgsMEVBQWYsRTs7Ozs7Ozs7Ozs7QUNuR0Esa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsZ0Q7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkMiLCJmaWxlIjoicGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qc1wiKTtcbiIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIlxuaW1wb3J0IHsgUkVHSVNURVJfRkFJTCwgUkVHSVNURVJfUkVRVUVTVCwgUkVHSVNURVJfU1VDQ0VTUyB9IGZyb20gXCIuLi9jb25zdGFudHMvYXV0aENvbnN0YW50XCJcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi4vdXRpbHMvcmVxdWVzdFwiXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuXG5leHBvcnQgY29uc3QgcmVnaXN0ZXJTZXJ2aWNlID0gKHJlZ09iaiwgY2FsbGJhY2spID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7IHR5cGU6IFJFR0lTVEVSX1JFUVVFU1QgfSlcblxuICB0cnkge1xuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICB1c2VybmFtZTogcmVnT2JqLnVzZXJuYW1lLFxuICAgICAgcGFzc3dvcmQ6IHJlZ09iai5wYXNzd29yZCxcbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHBSZXF1ZXN0LnBvc3QoXG4gICAgICBgJHtjb25maWcuYmFzZVVybH0vcmVnaXN0ZXJgLFxuICAgICAgZmFsc2UsXG4gICAgICBudWxsLFxuICAgICAgYm9keVxuICAgIClcblxuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFR0lTVEVSX1NVQ0NFU1MsXG4gICAgICBwYXlsb2FkOiBkYXRhLFxuICAgIH0pXG5cbiAgICBjYWxsYmFjayhkYXRhLCBudWxsKVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGRpc3BhdGNoKHtcbiAgICAgIHR5cGU6IFJFR0lTVEVSX0ZBSUwsXG4gICAgICBwYXlsb2FkOiBlcnJvci5yZXNwb25zZSxcbiAgICB9KVxuXG4gICAgY2FsbGJhY2sobnVsbCwgZXJyb3IucmVzcG9uc2UpXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luU2VydmljZSA9IGFzeW5jIChzZXJ2aWNlLCB0b2tlbikgPT4ge1xuICAvL2NvbnNvbGUubG9nKFwibG9naW4gc2VydmljZVwiLCBzZXJ2aWNlLCB0b2tlbilcbiAgdHJ5IHtcblxuICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICBhY2Nlc3NUb2tlbjogdG9rZW4sXG4gICAgICBjbGllbnRfc2VjcmV0OiBjb25maWcuR0FWX0NMSUVOVF9TRUNSRVQsXG4gICAgICBjbGllbnRfaWQ6IGNvbmZpZy5HQVZfQ0xJRU5UX0lELFxuICAgICAgLy9wZXNzb2FfY2FkYXN0cm9faWQ6ICAyLFxuXG5cbiAgICB9XG5cbiAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHBSZXF1ZXN0LnBvc3QoXG4gICAgICBgJHtjb25maWcuYmFzZVVybH0vYXBpL2F1dGgvc29jaWFsLyR7c2VydmljZX1gLFxuICAgICAgZmFsc2UsXG4gICAgICBudWxsLFxuICAgICAgYm9keVxuICAgIClcbiAgICByZXR1cm4gZGF0YVxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coXCJlcnJvciA9IC0tLVwiKVxuICAgIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEubWVzc2FnZSlcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgZ2V0TWUgPSBhc3luYyAoKSA9PiB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgIGlmIChzZXNzaW9uKSB7XG4gICAgICBjb25zdCB0b2tlbiA9IHNlc3Npb24uYWNjZXNzX3Rva2VuXG4gICAgICBjb25zdCB7IGRhdGE6IG1lIH0gPSBhd2FpdCBheGlvcy5nZXQoXG4gICAgICAgIGAke2NvbmZpZy5iYXNlVXJsfS9hcGkvbWVgLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9XG4gICAgICApXG4gICAgICByZXR1cm4gbWVcbiAgICB9XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgcmV0dXJuIG51bGxcbiAgfVxufSIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9jb25maWdcIlxuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi8uLi8uLi91dGlscy9yZXF1ZXN0XCJcbi8vaW1wb3J0IGdldEl0ZW0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvbG9jYWxTdHJvYWdlQWNjZXNzJ1xuaW1wb3J0IHsgbm90aWZ5LCB1c2VJbnB1dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb21tb25cIlxuXG5cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVBlcnNvbiA9IGFzeW5jIChlbWFpbCwgY2VsdWxhciwgbm9tZSwgc2VuaGEsIHBlc3NvYV9jYWRhc3Ryb19pZCwgcGVzc29hX3RpcG9faWQsIGNiKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGNlbHVsYXI6IGNlbHVsYXIsXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICBwZXNzb2FfdGlwb19pZDogcGVzc29hX3RpcG9faWQsXG4gICAgICAgICAgICBwZXNzb2FfY2FkYXN0cm9faWQ6IHBlc3NvYV9jYWRhc3Ryb19pZCxcbiAgICAgICAgICAgIHBlc3NvYV9maXNpY2E6IHtcbiAgICAgICAgICAgICAgICBub21lOiBub21lXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGVzc29hX2p1cmlkaWNhOiB7XG4gICAgICAgICAgICAgICAgbm9tZTogbm9tZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogc2VuaGEsXG4gICAgICAgICAgICAgICAgZW1haWw6IGVtYWlsXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cFJlcXVlc3QucG9zdChcbiAgICAgICAgICAgIGAke2NvbmZpZy5iYXNlVXJsfS9hcGkvY2FwdGFjYW8vcGVzc29hc2AsXG4gICAgICAgICAgICBmYWxzZSxcbiAgICAgICAgICAgIFwiXCIsXG4gICAgICAgICAgICBib2R5XG4gICAgICAgIClcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSlcbiAgICAgICAgbm90aWZ5KCdzdWNjZXNzJywgXCJTdWNjZXNzZnVsbHkgQ3JlYXRlZFwiKVxuICAgICAgICBjYigpXG4gICAgICAgIHJldHVybiBkYXRhXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY2IoKVxuICAgICAgICBsZXQgZXJyID0gXCJcIlxuICAgICAgICBpZihcInVzZXIuZW1haWxcIiBpbiBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9ycyApe1xuICAgICAgICAgICAgZXJyICs9IGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzW1widXNlci5lbWFpbFwiXVswXVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoXCJ1c2VyLnBhc3N3b3JkXCIgaW4gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMgKXtcbiAgICAgICAgICAgIGVyciArPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yc1tcInVzZXIucGFzc3dvcmRcIl1bMF1cbiAgICAgICAgfVxuICAgICAgICBub3RpZnkoXCJlcnJvclwiLCBlcnIpXG4gICAgICAgLy8gY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufSIsImNvbnN0IERFVkVMT1BNRU5UID0ge1xuICAgIG5leHRBdXRoVXJsOiBwcm9jZXNzLmVudi5ORVhUQVVUSF9VUkwsXG4gICAgYmFzZVVybDogcHJvY2Vzcy5lbnYuQVBJX1VSTCxcbiAgICBncmFudFR5cGU6IHByb2Nlc3MuZW52LkdSQU5UX1RZUEUsXG4gICAgYmFzaWNBdXRoVG9rZW46IHByb2Nlc3MuZW52LkJBU0lDX0FVVEhfVE9LRU4sXG4gICAgR0FWX0NMSUVOVF9TRUNSRVQ6IHByb2Nlc3MuZW52LkdBVl9DTElFTlRfU0VDUkVULFxuICAgIEdBVl9DTElFTlRfSUQ6IHByb2Nlc3MuZW52LkdBVl9DTElFTlRfSUQsXG4gICAgR09PR0xFX0NMSUVOVF9JRDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICBHT09HTEVfQ0xJRU5UX1NFQ1JFVDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG5cbiAgICAvLyBHT09HTEVfQ0xJRU5UX0lEOiAnMzE2NTEwNTc4MTgtaDgyMG9uaGQzaDQya3BnZjVoaWgya3B0YzNtMm11ZXMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20nLFxuICAgIC8vIEdPT0dMRV9DTElFTlRfU0VDUkVUOiAnVkFuZlFMcnpwUXZLRlNTek1oZkFCYmhYJ1xuICAgIEZBQ0VCT09LX0NMSUVOVF9JRDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfQ0xJRU5UX0lELFxuICAgIEZBQ0VCT09LX0NMSUVOVF9TRUNSRVQ6ICBwcm9jZXNzLmVudi5GQUNFQk9PS19DTElFTlRfU0VDUkVUXG59XG5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBERVZFTE9QTUVOVFxuIiwiZXhwb3J0IGNvbnN0IExPR0lOX1JFUVVFU1QgPSAnTE9HSU5fUkVRVUVTVCdcbmV4cG9ydCBjb25zdCBMT0dJTl9TVUNDRVNTID0gJ0xPR0lOX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgTE9HSU5fRkFJTCA9ICdMT0dJTl9GQUlMJ1xuXG5leHBvcnQgY29uc3QgVVNFUl9MT0dPVVQgPSAnVVNFUl9MT0dPVVQnXG5cbmV4cG9ydCBjb25zdCBSRUdJU1RFUl9SRVFVRVNUID0gJ1JFR0lTVEVSX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgUkVHSVNURVJfU1VDQ0VTUyA9ICdSRUdJU1RFUl9TVUNDRVNTJ1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSX0ZBSUwgPSAnUkVHSVNURVJfRkFJTCciLCJpbXBvcnQgTmV4dEF1dGggZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgUHJvdmlkZXJzIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzXCJcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9jb25maWdcIlxuaW1wb3J0IHsgZ2F2UHJvdmlkZXIsIGdldE1lLCBnZXRUb2tlbiB9IGZyb20gJy4uLy4uLy4uL3V0aWxzL3Byb3ZpZGVycydcbmltcG9ydCB7IGxvZ2luU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL2FwaS9hdXRoJ1xuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5cblxuY29uc3Qgb3B0aW9ucyA9IHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgUHJvdmlkZXJzLkdvb2dsZSh7XG4gICAgICAgICAgICBjbGllbnRJZDogY29uZmlnLkdPT0dMRV9DTElFTlRfSUQsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IGNvbmZpZy5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgICAgICAgIGF1dGhvcml6YXRpb25Vcmw6J2h0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi92Mi9hdXRoP3Byb21wdD1jb25zZW50JmFjY2Vzc190eXBlPW9mZmxpbmUmcmVzcG9uc2VfdHlwZT1jb2RlJyxcbiAgICAgICAgICAgIHNjb3BlOidodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3VzZXJpbmZvLnByb2ZpbGUgaHR0cHM6Ly93d3cuZ29vZ2xlYXBpcy5jb20vYXV0aC91c2VyaW5mby5lbWFpbCBodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9hdXRoL3lvdXR1YmUucmVhZG9ubHknLFxuICAgICAgICAgICAgcHJvZmlsZVVybDogXCJodHRwczovL3d3dy5nb29nbGVhcGlzLmNvbS9vYXV0aDIvdjEvdXNlcmluZm8/YWx0PWpzb25cIixcbiAgICAgICAgICAgIGFjY2Vzc1Rva2VuVXJsOiBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi90b2tlblwiLFxuICAgICAgICAgICAgcmVxdWVzdFRva2VuVXJsOiBcImh0dHBzOi8vYWNjb3VudHMuZ29vZ2xlLmNvbS9vL29hdXRoMi9hdXRoXCIsXG4gICAgICAgIH0pLFxuICAgICAgICBQcm92aWRlcnMuRmFjZWJvb2soe1xuICAgICAgICAgICAgY2xpZW50SWQ6IGNvbmZpZy5GQUNFQk9PS19DTElFTlRfSUQsXG4gICAgICAgICAgICBjbGllbnRTZWNyZXQ6IGNvbmZpZy5GQUNFQk9PS19DTElFTlRfU0VDUkVUXG4gICAgICAgIH0pLFxuICAgICAgICBQcm92aWRlcnMuQ3JlZGVudGlhbHMoe1xuICAgICAgICAgICAgbmFtZTogXCJHQVZcIixcbiAgICAgICAgICAgIGFzeW5jIGF1dGhvcml6ZShjcmVkZW50aWFscykge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2tlbnMgPSBhd2FpdCBnZXRUb2tlbihjcmVkZW50aWFscylcbiAgICAgICAgICAgICAgICBpZiAoIXRva2Vucykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBtZSA9IGF3YWl0IGdldE1lKHRva2Vucy5hY2Nlc3NfdG9rZW4pXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm1lPT09Pj5cIiwgbWUpXG4gICAgICAgICAgICAgICAgY29uc3QgdXNlciA9IHtcbiAgICAgICAgICAgICAgICAgICAgLi4udG9rZW5zLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBtZS5ub21lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogbWUuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBob3RvOiBtZS5mb3RvX3BlcmZpbF9hcnF1aXZvID8gbWUuZm90b19wZXJmaWxfYXJxdWl2by5saW5rIDogXCJcIlxuXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVzZXJcblxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSksXG5cbiAgICBdLFxuICAgIHNpdGU6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCxcbiAgICBwYWdlczoge1xuICAgICAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gICAgICAgIGVycm9yOiAnL2xvZ2luJ1xuICAgIH0sXG4gICAgc2Vzc2lvbjoge1xuICAgICAgICBqd3Q6IHRydWUsXG4gICAgfSxcbiAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgLy8gYXN5bmMgc2lnbkluKHVzZXIsIGFjY291bnQsIHByb2ZpbGUpIHtcbiAgICAgICAgLy8gICAgIHJldHVybiB0cnVlXG4gICAgICAgIC8vIH0sXG4gICAgICAgIC8vIGFzeW5jIHJlZGlyZWN0KHVybCwgYmFzZVVybCkge1xuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5sb2coJ3VybCcsIHVybCk7XG4gICAgICAgIC8vICAgICAvLyBjb25zb2xlLmxvZygnYmFzZVVybCcsIGJhc2VVcmwpO1xuXG4gICAgICAgIC8vICAgICByZXR1cm4gdXJsXG4gICAgICAgIC8vIH0sXG4gICAgICAgIGFzeW5jIHJlZGlyZWN0KHVybCwgYmFzZVVybCkge1xuICAgICAgICAgICAgcmV0dXJuIGJhc2VVcmxcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIGFzeW5jIGp3dCh0b2tlbiwgdXNlciwgYWNjb3VudCwgcHJvZmlsZSwgaXNOZXdVc2VyKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRva2VuID09PT4gXCIsIHRva2VuKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1c2VyID09PT4gXCIsIHVzZXIpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFjY291bnQgPT09PiBcIiwgYWNjb3VudClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicHJvZmlsZSA9PT0+IFwiLCBwcm9maWxlKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpc05ld1VzZXIgPT09PiBcIiwgaXNOZXdVc2VyKVxuXG4gICAgICAgICAgICBpZiAodXNlcikge1xuXG4gICAgICAgICAgICAgICAgdG9rZW4gPSB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRva2VuLFxuICAgICAgICAgICAgICAgICAgICAuLi51c2VyLFxuICAgICAgICAgICAgICAgICAgICAuLi4oYWNjb3VudCAmJiBhY2NvdW50KVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5cbiAgICAgICAgfSxcbiAgICAgICAgYXN5bmMgc2Vzc2lvbihzZXNzaW9uLCB0b2tlbikge1xuXG5cbiAgICAgICAgICAgIGlmICh0b2tlbiAmJiAodG9rZW4udHlwZSA9PT0gJ29hdXRoJykpIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBsb2dpblNlcnZpY2UodG9rZW4ucHJvdmlkZXIsIHRva2VuLmFjY2Vzc1Rva2VuKVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJkYXRhID0gXCIsIGRhdGEpXG4gICAgICAgICAgICAgICAgY29uc3QgbWUgPSBhd2FpdCBnZXRNZShkYXRhLmFjY2Vzc190b2tlbilcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibWU9PT0+PlwiLCBtZSlcbiAgICAgICAgICAgICAgICBzZXNzaW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBtZS5ub21lLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogbWUuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogbWUuaWQsXG4gICAgICAgICAgICAgICAgICAgIHBob3RvOiBtZS5mb3RvX3BlcmZpbF9hcnF1aXZvID8gbWUuZm90b19wZXJmaWxfYXJxdWl2by5saW5rIDogdG9rZW4uaW1hZ2UgPyB0b2tlbi5pbWFnZSA6IFwiXCJcblxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uID0ge1xuICAgICAgICAgICAgICAgICAgICAuLi5zZXNzaW9uLCAuLi50b2tlblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidG9rZW4gPT1cIiwgdG9rZW4pXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNlc3Npb24gPT0gXCIsIHNlc3Npb24pXG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvblxuICAgICAgICB9XG5cblxuICAgIH0sXG5cblxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IChyZXEsIHJlcykgPT4gTmV4dEF1dGgocmVxLCByZXMsIG9wdGlvbnMpIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuLy8gY29udmVydCBvYmplY3QgdG8gRm9ybURhdGFcbmV4cG9ydCBjb25zdCBub3RpZnkgPSAodHlwZSwgbWVzc2FnZSkgPT4ge1xuICBpZiAodHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgdG9hc3Quc3VjY2VzcyhtZXNzYWdlLCB7XG4gICAgICBzdHlsZTogeyBmb250U2l6ZTogMTYgfSxcbiAgICB9KVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAvLyBpZiAoIW1lc3NhZ2UpIG1lc3NhZ2UgPSAnU29tZXRoaW5nIFdlbnQgV3JvbmcuIFRyeSBBZ2FpbiEnXG4gICAgdG9hc3QuZXJyb3IobWVzc2FnZSwge1xuICAgICAgc3R5bGU6IHsgZm9udFNpemU6IDE2IH0sXG4gICAgfSlcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnd2FybmluZycpIHtcbiAgICB0b2FzdC53YXJuaW5nKG1lc3NhZ2UpXG4gIH0gZWxzZSB7XG4gICAgdG9hc3QobWVzc2FnZSlcbiAgfVxufVxuXG4vLyBjdXN0b20gaGVscGVyIHRvIHRha2UgaW5wdXQgZmllbGRcbmV4cG9ydCBjb25zdCB1c2VJbnB1dCA9IChpbml0aWFsVmFsdWUgPSAnJykgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSlcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVDaGFuZ2UsIHNldFZhbHVlXVxufVxuXG5leHBvcnQgY29uc3QgcmF0aW5nRGF0ZSA9IChkYXRlKSA9PiB7XG4gIHJldHVybiAgbW9tZW50LnV0YyhkYXRlICkubG9jYWwoKS5mb3JtYXQoJ0REL01NTS9ZWVlZJyk7XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IGNyZWF0ZVBlcnNvbiB9IGZyb20gJy4uL2FwaS9jYWRhc3Ryby9jYXB0YXNhby9jcmVhdGVQZXJzb24nXG5cbmNvbnN0IGRvbWFpbiA9IGNvbmZpZy5iYXNlVXJsXG5cbmV4cG9ydCBjb25zdCBnYXZQcm92aWRlciA9IHtcbiAgICBjbGllbnRJZDogY29uZmlnLkdBVl9DTElFTlRfSUQsXG4gICAgY2xpZW50U2VjcmV0OiBjb25maWcuR0FWX0NMSUVOVF9TRUNSRVQsXG4gICAgZ3JhbnRfdHlwZTogY29uZmlnLmdyYW50VHlwZVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcbiAgICBjcmVkZW50aWFscy5zY29wZSA9ICcnXG4gICAgY3JlZGVudGlhbHMuZ3JhbnRfdHlwZSA9IGdhdlByb3ZpZGVyLmdyYW50X3R5cGVcbiAgICBjcmVkZW50aWFscy5jbGllbnRfaWQgPSBnYXZQcm92aWRlci5jbGllbnRJZFxuICAgIGNyZWRlbnRpYWxzLmNsaWVudF9zZWNyZXQgPSBnYXZQcm92aWRlci5jbGllbnRTZWNyZXRcbiAgICAvL2NvbnNvbGUubG9nKFwiY3JlYWRpYW50aWFscyAgPSBcIiwgY3JlZGVudGlhbHMpXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBkYXRhOiB0b2tlbnMgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgICBgJHtkb21haW59L29hdXRoL3Rva2VuYCxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzXG4gICAgICAgIClcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0b2tlbnMpXG4gICAgICAgIHJldHVybiB0b2tlbnNcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldE1lID0gYXN5bmMgKGFjY2Vzc190b2tlbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogbWUgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICAgIGAke2RvbWFpbn0vYXBpL21lYCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gbWVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5sZXQgZGVmYXVsdE9wdGlvbnNcbmNvbnN0IGNsaWVudCA9ICh0b2tlbiA9IG51bGwpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6ICh1cmwsIHRva2VuTmVlZCwgdG9rZW4sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogJ2VuJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9rZW5OZWVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucy5oZWFkZXJzLCB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0T3B0aW9ucycsIGRlZmF1bHRPcHRpb25zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmdldCh1cmwsIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBwb3N0OiAodXJsLCB0b2tlbk5lZWQsIHRva2VuLCBkYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICdlbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRva2VuTmVlZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMuaGVhZGVycywge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucG9zdCh1cmwsIGRhdGEsIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBwdXQ6ICh1cmwsIHRva2VuTmVlZCwgdG9rZW4sIGRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogJ2VuJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9rZW5OZWVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucy5oZWFkZXJzLCB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wdXQodXJsLCBkYXRhLCB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgcGF0Y2g6ICh1cmwsIHRva2VuTmVlZCwgdG9rZW4sIGRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogJ2VuJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9rZW5OZWVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucy5oZWFkZXJzLCB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wYXRjaCh1cmwsIGRhdGEsIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxldGU6ICh1cmwsIHRva2VuTmVlZCwgdG9rZW4sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogJ2VuJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9rZW5OZWVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucy5oZWFkZXJzLCB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBheGlvcy5kZWxldGUodXJsLCB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH0pXG4gICAgICAgIH0sXG4gICAgfVxufVxuY29uc3QgaHR0cFJlcXVlc3QgPSBjbGllbnQobnVsbClcbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9tZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtYXV0aC9wcm92aWRlcnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtdG9hc3RpZnlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==