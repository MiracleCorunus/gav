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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/registrar-fornecedor-form/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

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

/***/ "./api/driver/updateDriver.js":
/*!************************************!*\
  !*** ./api/driver/updateDriver.js ***!
  \************************************/
/*! exports provided: updateDriver, getCep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDriver", function() { return updateDriver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCep", function() { return getCep; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const updateDriver = async (newData, obj) => {
  try {
    const pessoa_fisica = _objectSpread(_objectSpread({}, obj.pessoa_fisica), {}, {
      cpf: newData.cpf,
      nome: newData.nome
    });

    const endereco = [{
      "latitude": obj.latitude,
      "longitude": obj.longitude,
      "logradouro": newData.rua,
      "cep": newData.cep,
      "numero": newData.numero,
      "complemento": newData.complemento,
      "bairro": newData.bairro,
      "cidade_id": newData.cidadeId
    }];
    let pessoa_arquivos = [];

    if (obj.pessoa_arquivos) {
      pessoa_arquivos = [...obj.pessoa_arquivos];
    }

    if (newData.cnhId) {
      pessoa_arquivos.push({
        arquivo_id: newData.cnhId,
        pessoa_arquivo_tipo_id: 1
      });
    }

    if (newData.segurandoId) {
      pessoa_arquivos.push({
        arquivo_id: newData.segurandoId,
        pessoa_arquivo_tipo_id: 2
      });
    }

    if (newData.comprovanteId) {
      pessoa_arquivos.push({
        arquivo_id: newData.comprovanteId,
        pessoa_arquivo_tipo_id: 3
      });
    }

    if (newData.rgId) {
      pessoa_arquivos.push({
        arquivo_id: newData.rgId,
        pessoa_arquivo_tipo_id: 5
      });
    }

    const body = _objectSpread(_objectSpread({
      telefone: obj.telefone,
      celular: newData.celular,
      email: newData.email,
      pessoa_tipo_id: obj.pessoa_tipo_id,
      pessoa_cadastro_id: obj.pessoa_cadastro_id,
      pessoa_status_id: obj.pessoa_status_id,
      recebe_via_administrador: obj.recebe_via_administrador,
      pessoa_fisica: pessoa_fisica,
      pessoa_juridica: obj.pessoa_juridica,
      endereco: [endereco],
      carros: obj.carros,
      pessoa_arquivos: obj.pessoa_arquivos,
      conta_bancaria: obj.conta_bancaria
    }, pessoa_arquivos.length && {
      pessoa_arquivos: pessoa_arquivos
    }), newData.prefilId && {
      foto_perfil_arquivo_id: newData.prefilId
    }); //cnhID, rgId, segurandoId, comprovanteId, prefilId
    // debugger


    console.log("body = ", body);
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])();
    const token = 'Bearer ' + session.access_token;
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].patch(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/motorista`, true, token, body);
    console.log("updated data = ", data);
    return data;
  } catch (error) {
    console.log(error);
    Object(_utils_common__WEBPACK_IMPORTED_MODULE_3__["notify"])("error", error.response ? error.response.data.message : '');
    return null;
  }
};
const getCep = async cep => {
  try {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])();
    const token = 'Bearer ' + session.access_token;
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_2__["default"].get(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/cep/${cep}`, true, token);
    return data;
  } catch (error) {
    //console.log(error.response.data)
    return null;
  }
};

/***/ }),

/***/ "./api/files/createFiles.js":
/*!**********************************!*\
  !*** ./api/files/createFiles.js ***!
  \**********************************/
/*! exports provided: createFile */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createFile", function() { return createFile; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const createFile = async formData => {
  try {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["getSession"])();
    const token = 'Bearer ' + session.access_token;
    let defaultOptions = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'multipart/form-data',
        'Accept-Language': 'en'
      }
    };
    Object.assign(defaultOptions.headers, {
      Authorization: token
    });
    const res = await axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/arquivos`, formData, _objectSpread({}, defaultOptions));
    console.log('res', res.data); //debugger

    return res && res.data ? res.data : res;
  } catch (error) {
    console.log(error.response); // notify("error", error.response ? error.response.data : '')

    return null;
  }
};

/***/ }),

/***/ "./api/owner/cars/createCar.js":
/*!*************************************!*\
  !*** ./api/owner/cars/createCar.js ***!
  \*************************************/
/*! exports provided: createCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCar", function() { return createCar; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../utils/request */ "./utils/request.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/common */ "./utils/common.js");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../config */ "./config/index.js");





const createCar = async newData => {
  try {
    const endereco_retirada_principal = {
      "logradouro": newData.ruaCar,
      "cep": newData.cepCar,
      "numero": newData.numeroCar,
      "complemento": newData.complementoCar,
      "bairro": newData.bairroCar,
      "cidade_id": newData.cidadeIdCar
    };
    let arquivos = [];

    if (newData.frontalId) {
      arquivos.push({
        arquivo_id: newData.frontalId,
        carro_arquivo_tipo_id: 1,
        position: 1
      });
    }

    if (newData.lateralDireitaId) {
      arquivos.push({
        arquivo_id: newData.lateralDireitaId,
        carro_arquivo_tipo_id: 1,
        position: 2
      });
    }

    if (newData.lateralEsquerdaId) {
      arquivos.push({
        arquivo_id: newData.lateralEsquerdaId,
        carro_arquivo_tipo_id: 1,
        position: 3
      });
    }

    if (newData.fundoId) {
      arquivos.push({
        arquivo_id: newData.fundoId,
        carro_arquivo_tipo_id: 1,
        position: 4
      });
    }

    if (newData.painelInternoId) {
      arquivos.push({
        arquivo_id: newData.painelInternoId,
        carro_arquivo_tipo_id: 1,
        position: 5
      });
    }

    const model = {
      description: newData.modelo,
      brand: {
        description: newData.marca
      }
    };
    const body = {
      ano: newData.anoCar,
      placa: newData.placaCar,
      endereco_retirada_principal: endereco_retirada_principal,
      model: model,
      arquivos
    };
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])();
    const token = 'Bearer ' + session.access_token;
    console.log("body =", body);
    const res = await _utils_request__WEBPACK_IMPORTED_MODULE_0__["default"].post(`${_config__WEBPACK_IMPORTED_MODULE_4__["config"].baseUrl}/api/proprietario/carros`, true, token, body);
    return res && res.data ? res.data : res;
  } catch (error) {
    console.log('error', error.response); // notify("error", error.response ? error.response.data : '')

    return null;
  }
};

/***/ }),

/***/ "./api/owner/recoverOwner.js":
/*!***********************************!*\
  !*** ./api/owner/recoverOwner.js ***!
  \***********************************/
/*! exports provided: recoverOwner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recoverOwner", function() { return recoverOwner; });
/* harmony import */ var _constants_owner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../constants/owner */ "./constants/owner.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_4__);





const recoverOwner = async (queryParamsObj, callback) => {
  try {
    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_4__["getSession"])(); //console.log(session)

    const token = 'Bearer ' + session.access_token;
    const {
      data
    } = await _utils_request__WEBPACK_IMPORTED_MODULE_3__["default"].get(`${_config__WEBPACK_IMPORTED_MODULE_1__["config"].baseUrl}/api/proprietario`, true, token);
    callback();
    return data;
  } catch (error) {
    callback(); // notify("error",  error.response && error.response.data.message)

    return null;
  }
};

/***/ }),

/***/ "./api/owner/updateOwner.js":
/*!**********************************!*\
  !*** ./api/owner/updateOwner.js ***!
  \**********************************/
/*! exports provided: updateOwner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateOwner", function() { return updateOwner; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../config */ "./config/index.js");
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/request */ "./utils/request.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const updateOwner = async (newData, obj) => {
  try {
    const pessoa_fisica = _objectSpread(_objectSpread({}, obj.pessoa_fisica), {}, {
      cpf: newData.cpf,
      nome: newData.nome
    });

    const endereco = [{
      "latitude": obj.latitude,
      "longitude": obj.longitude,
      "logradouro": newData.rua,
      "cep": newData.cep,
      "numero": newData.numero,
      "complemento": newData.complemento,
      "bairro": newData.bairro,
      "cidade_id": newData.cidadeId
    }];
    let pessoa_arquivos = [];

    if (obj.pessoa_arquivos) {
      pessoa_arquivos = [...obj.pessoa_arquivos];
    }

    if (newData.cnhId) {
      pessoa_arquivos.push({
        arquivo_id: newData.cnhId,
        pessoa_arquivo_tipo_id: 1
      });
    }

    if (newData.comprovanteId) {
      pessoa_arquivos.push({
        arquivo_id: newData.comprovanteId,
        pessoa_arquivo_tipo_id: 2
      });
    }

    const body = _objectSpread(_objectSpread({
      telefone: obj.telefone,
      celular: newData.celular,
      email: newData.email,
      pessoa_tipo_id: obj.pessoa_tipo_id,
      pessoa_cadastro_id: obj.pessoa_cadastro_id,
      pessoa_status_id: obj.pessoa_status_id,
      recebe_via_administrador: obj.recebe_via_administrador,
      pessoa_fisica: pessoa_fisica,
      pessoa_juridica: obj.pessoa_juridica,
      endereco: [endereco],
      carros: obj.carros,
      pessoa_arquivos: obj.pessoa_arquivos,
      conta_bancaria: obj.conta_bancaria
    }, pessoa_arquivos.length && {
      pessoa_arquivos: pessoa_arquivos
    }), newData.prefilId && {
      foto_perfil_arquivo_id: newData.prefilId
    });

    const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_2__["getSession"])();
    const token = 'Bearer ' + session.access_token;
    console.log("body =", body);
    const res = await _utils_request__WEBPACK_IMPORTED_MODULE_1__["default"].patch(`${_config__WEBPACK_IMPORTED_MODULE_0__["config"].baseUrl}/api/proprietario`, true, token, body);
    return res && res.data ? res.data : res;
  } catch (error) {
    console.log(error); // notify("error", error.response ? error.response.data : '')

    return null;
  }
};

/***/ }),

/***/ "./components/Partial/Dashboard/Footer.js":
/*!************************************************!*\
  !*** ./components/Partial/Dashboard/Footer.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\next-gav\\gav\\components\\Partial\\Dashboard\\Footer.js";





const PublicFooter = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "public-footer ",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
        className: "justify-content-center align-items-center",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "4",
          className: "public-footer__left",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "public-footer__title",
            children: "XD"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "public-footer__tag",
            children: "\xA9 2021 GAV - Todos os direitos reservados."
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "2",
          className: "public-footer__middle",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Sobre"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Contato"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            children: "Termo de Uso"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "2",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "public-footer__social",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_2__["FaFacebookF"], {
              className: "public-footer__social-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Facebook"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "public-footer__social",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__["FiInstagram"], {
              className: "public-footer__social-icon"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Instagram"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "public-footer__social",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineTwitter"], {
              className: "public-footer__social-icon mr-2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Twitter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
          lg: "4",
          className: "public-footer__right",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Subscribe to our newsletter"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
              type: "text",
              className: "form-control",
              placeholder: "Email Address",
              "aria-label": "Recipient's username",
              "aria-describedby": "basic-addon2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: "ok"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PublicFooter);

/***/ }),

/***/ "./components/Partial/Dashboard/Header.js":
/*!************************************************!*\
  !*** ./components/Partial/Dashboard/Header.js ***!
  \************************************************/
/*! exports provided: default, getServerSideProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return getServerSideProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/hi */ "react-icons/hi");
/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ "react-icons/ri");
/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_9__);


var _jsxFileName = "E:\\next-gav\\gav\\components\\Partial\\Dashboard\\Header.js";










const DashboardHeader = () => {
  const dispatch = Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["useDispatch"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__["useRouter"])();
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"], {
      collapseOnSelect: true,
      expand: "lg",
      className: "w-100 border-bottom mb-3 px-md-3 px-0 py-2 dashboard-header",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Navbar"].Collapse, {
        id: "responsive-navbar-nav",
        className: "d-flex flex-row justify-content-between",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          className: "align-items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__["HiMenuAlt2"], {
            size: "70",
            onClick: openMenu,
            className: "cursor-pointer",
            color: "#0044c8"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          className: "ml-lg-auto align-items-center",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: "cursor-pointer",
              src: "/images/logo.png"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
          className: "ml-lg-auto align-items-center custom-dropdown",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"], {
            drop: "down",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Toggle, {
              id: "dropdown-basic",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "header-logo",
                src: "/images/icon/user-icon.png"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Menu, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
                href: "/perfil-fornecedor/1124",
                children: "Ver perfil"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Dropdown"].Item, {
                onSelect: () => Object(next_auth_client__WEBPACK_IMPORTED_MODULE_9__["signOut"])(),
                children: "Sair"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: `floating-wrapper ${isOpen ? 'floating-wrapper-open' : ''}`,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "d-flex align-items-center flex-column",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mt-3 mb-5",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_hi__WEBPACK_IMPORTED_MODULE_3__["HiMenuAlt2"], {
            onClick: closeMenu,
            size: "70",
            color: "#fff",
            className: "cursor-pointer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/meus-veiculos",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex align-items-center justify-content-between single-floating-item mb-5 cursor-pointer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "p-0 text-white h2",
              children: "Meus alugu\xE9is"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__["RiCarLine"], {
              size: "40",
              color: "#fff",
              className: "ml-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/listar-carros-disponiveis-fornecedor",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex align-items-center justify-content-between single-floating-item mb-5 cursor-pointer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "p-0 text-white h2",
              children: "Conversas"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_5__["FaRegCommentDots"], {
              size: "40",
              color: "#fff",
              className: "ml-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
          href: "/registrar-fornecedor-form",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "d-flex align-items-center justify-content-between single-floating-item mb-5 cursor-pointer",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              className: "p-0 text-white h2",
              children: "Meus dados"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__["RiContactsBookLine"], {
              size: "40",
              color: "#fff",
              className: "ml-5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }, undefined), isOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      onClick: closeMenu,
      className: "back-shed"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 23
    }, undefined) : null]
  }, void 0, true);
};

/* harmony default export */ __webpack_exports__["default"] = (DashboardHeader);
async function getServerSideProps(ctx) {
  const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_9__["getSession"])(ctx);
  console.log(session);

  if (!session) {
    ctx.res.writeHead(302, {
      Location: '/login'
    });
    ctx.res.end();
    return {};
  }
}

/***/ }),

/***/ "./components/SupplierRegistration/PersonalInfo.js":
/*!*********************************************************!*\
  !*** ./components/SupplierRegistration/PersonalInfo.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button/index.js");
/* harmony import */ var _UI_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/TextInput */ "./components/UI/TextInput/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "E:\\next-gav\\gav\\components\\SupplierRegistration\\PersonalInfo.js";





const PersonalInfo = ({
  activeStep,
  personalNextClick,
  owner,
  handleOwner,
  processing
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mr-lg-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Nome:",
              name: "nome",
              value: owner.nome,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Email:",
              name: "email",
              value: owner.email,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Celular:",
              name: "celular",
              value: owner.celular,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "CPF/CNPJ:",
              name: "cpf",
              value: owner.cpf,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "CEP:",
              name: "cep",
              value: owner.cep,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Estado:",
              name: "estado",
              value: owner.estado,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Cidade:",
              name: "cidade",
              value: owner.cidade,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Bairro:",
              name: "bairro",
              value: owner.bairro,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 41,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Rua:",
              name: "rua",
              value: owner.rua,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ml-lg-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "N\xFAmero:",
              name: "numero",
              value: owner.numero,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Complemento:",
              name: "complemento",
              value: owner.complemento,
              handleOwner: handleOwner
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mx-lg-5 d-sm-flex d-lg-block ",
            children: [activeStep === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
              title: "Cancelar",
              variant: "secondary",
              className: "w-100 mb-lg-4 mb-sm-0 mr-sm-3 mr-lg-0 next-btn personal-info-r-btn",
              onClick: () => router.push("/")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 17
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
              title: "Voltar",
              variant: "secondary",
              className: "w-100 mb-4 next-btn",
              onClick: () => router.push("/")
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
              title: "Pr\xF3ximo",
              className: "w-100 next-btn mt-sm-0 mt-3",
              onClick: personalNextClick,
              loading: processing
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (PersonalInfo);

/***/ }),

/***/ "./components/SupplierRegistration/UploadPhotos.js":
/*!*********************************************************!*\
  !*** ./components/SupplierRegistration/UploadPhotos.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _UI_Photo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../UI/Photo */ "./components/UI/Photo/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_files_createFiles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/files/createFiles */ "./api/files/createFiles.js");
/* harmony import */ var _api_owner_updateOwner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/owner/updateOwner */ "./api/owner/updateOwner.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");

var _jsxFileName = "E:\\next-gav\\gav\\components\\SupplierRegistration\\UploadPhotos.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const UploadPhotos = ({
  activeStep,
  uploadBack,
  personalNextClick,
  owner,
  prevOwner
}) => {
  // console.log(owner)
  const {
    0: processing,
    1: setProcessing
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])("");
  const {
    0: cnhId,
    1: setCnhId
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: comprovanteId,
    1: setComprovanteId
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: prefilId,
    1: setPrefilId
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: cnhUrl,
    1: setCnhUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: comprovanteUrl,
    1: setComprovanteUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);
  const {
    0: prefilUrl,
    1: setPrefilUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(null);

  const onCnhChange = async event => {
    // Update the state 
    const value = event.target.files[0];

    if (value) {
      setCnhUrl(URL.createObjectURL(value));
    }

    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_6__["createFile"])(formData);

    if (res) {
      setCnhId(res.id);
    }
  };

  const onComChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setComprovanteUrl(URL.createObjectURL(value));
    }

    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_6__["createFile"])(formData);

    if (res) {
      setComprovanteId(res.id);
    }
  };

  const onPrefilChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setPrefilUrl(URL.createObjectURL(value));
    }

    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_6__["createFile"])(formData);

    if (res) {
      setPrefilId(res.id);
    }
  };

  const uploadAndNext = async () => {
    setProcessing(true); // Create an object of formData 
    //debugger
    //console.log("-------------", cnhId)

    await Object(_api_owner_updateOwner__WEBPACK_IMPORTED_MODULE_7__["updateOwner"])(_objectSpread(_objectSpread({}, owner), {}, {
      cnhId,
      comprovanteId,
      prefilId
    }), prevOwner);
    Object(_utils_common__WEBPACK_IMPORTED_MODULE_8__["notify"])('success', 'User data updated');
    setProcessing(false);
    personalNextClick();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-lg-0 mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mr-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "CNH/RG:",
            name: "cnh",
            src: cnhUrl,
            id: "cnh",
            onFileChange: onCnhChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-lg-0 mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "Comprovante de resid\xEAncia",
            src: comprovanteUrl,
            id: "comprovante",
            name: "comprovante",
            onFileChange: onComChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-lg-0 mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_4__["default"], {
            text: "Foto de perfil",
            name: "prefil",
            src: prefilUrl,
            id: "prefil",
            onFileChange: onPrefilChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 120,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 119,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-lg-0 mb-4 upload-photos-top",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ml-lg-3",
          children: [activeStep === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
            title: "Cancelar",
            variant: "secondary",
            className: "w-100 mb-4 next-btn",
            onClick: () => router.push("/")
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
            title: "Voltar",
            variant: "secondary",
            className: "w-100 mb-4 next-btn",
            onClick: uploadBack
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
            title: "Pr\xF3ximo",
            className: "w-100 next-btn",
            onClick: uploadAndNext
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 141,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 104,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UploadPhotos);

/***/ }),

/***/ "./components/SupplierRegistration/UploadVehiclePhotos.js":
/*!****************************************************************!*\
  !*** ./components/SupplierRegistration/UploadVehiclePhotos.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UI_Photo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UI/Photo */ "./components/UI/Photo/index.js");

var _jsxFileName = "E:\\next-gav\\gav\\components\\SupplierRegistration\\UploadVehiclePhotos.js";






const UploadVehiclePhotos = ({
  loadingFrontal,
  frontalUrl,
  onFrontalChange,
  loadingLateralDireita,
  lateralDireitaUrl,
  onLateralDireitaChange,
  loadingLateralEsquerda,
  lateralEsquerdaUrl,
  onLateralEsquerdaChange,
  loadingFundo,
  fundoUrl,
  onFundoChange,
  loadingPainelInterno,
  painelInternoUrl,
  onPainelInternoChange,
  processing,
  activeStep,
  uploadBack,
  uploadCarDetails
}) => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mr-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: "Frontal",
            name: "frontal",
            id: "frontal",
            loading: loadingFrontal,
            src: frontalUrl,
            onFileChange: onFrontalChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: "Lateral Direita",
            name: "lateralDireita",
            loading: loadingLateralDireita,
            id: "lateralDireita",
            src: lateralDireitaUrl,
            onFileChange: onLateralDireitaChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: "Lateral Esquerda",
            name: "lateralEsquerda",
            loading: loadingLateralEsquerda,
            id: "lateralEsquerda",
            src: lateralEsquerdaUrl,
            onFileChange: onLateralEsquerdaChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: "Fundo",
            name: "fundo",
            id: "fundo",
            loading: loadingFundo,
            src: fundoUrl,
            onFileChange: onFundoChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      className: "justify-content-between",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 3,
        md: 6,
        className: "mb-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Photo__WEBPACK_IMPORTED_MODULE_5__["default"], {
            text: "Painel Interno",
            name: "painelInterno",
            id: "painelInterno",
            loading: loadingPainelInterno,
            src: painelInternoUrl,
            onFileChange: onPainelInternoChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 49,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        className: "mb-5 mt-lg-5 pt-lg-5",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: [activeStep === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["UiButton"], {
            title: "Cancelar",
            variant: "secondary",
            className: "w-100 mb-4 next-btn",
            onClick: () => router.push('/')
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 17
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["UiButton"], {
            title: "Voltar",
            variant: "secondary",
            className: "w-100 mb-4 next-btn",
            onClick: uploadBack
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_3__["UiButton"], {
            title: "Pr\xF3ximo",
            className: "w-100 next-btn",
            loading: processing,
            onClick: uploadCarDetails
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (UploadVehiclePhotos);

/***/ }),

/***/ "./components/SupplierRegistration/VehicleDetails.js":
/*!***********************************************************!*\
  !*** ./components/SupplierRegistration/VehicleDetails.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _UI_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../UI/Button */ "./components/UI/Button/index.js");
/* harmony import */ var _UI_TextInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../UI/TextInput */ "./components/UI/TextInput/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _api_driver_updateDriver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../api/driver/updateDriver */ "./api/driver/updateDriver.js");
/* harmony import */ var _api_owner_cars_createCar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/owner/cars/createCar */ "./api/owner/cars/createCar.js");
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");

var _jsxFileName = "E:\\next-gav\\gav\\components\\SupplierRegistration\\VehicleDetails.js";









const VehicleDetails = ({
  marca,
  modelo,
  ano,
  placa,
  cep,
  estado,
  cidade,
  rua,
  semana,
  caucao,
  diaria,
  numero,
  complemento,
  bairro,
  cidadeId,
  handleCarInput,
  processing,
  activeStep,
  vehicleNextClick,
  vehicleBack
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Row"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 12,
        className: "mb-4",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center h5",
          children: "Onde o motorista vai retirar o ve\xEDculo?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        md: 6,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mr-lg-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Marca:",
              name: "marca",
              value: marca,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Modelo:",
              name: "modelo",
              value: modelo,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Ano:",
              name: "ano",
              value: ano,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 36,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Placa:",
              name: "placa",
              value: placa,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "text-center",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            className: "h3 font-weight-bold",
            children: "Motorista pode comprar ap\xF3s o contrato?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "custom-radios mt-2",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                id: "yes",
                name: "color",
                value: "yes",
                checked: true
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 47,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "yes",
                children: "Sim"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
                type: "radio",
                id: "no",
                name: "color",
                value: "no"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
                for: "no",
                children: "N\xE3o"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 55,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        md: 6,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "mx-lg-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "CEP:",
              name: "cep",
              value: cep,
              handleOwner: handleCarInput,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Estado:",
              name: "estado",
              value: estado,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Cidade:",
              name: "cidade",
              value: cidade,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Rua:",
              name: "rua",
              value: rua,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Complemento:",
              name: "complemento",
              value: complemento,
              handleOwner: handleCarInput,
              required: true
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {
        lg: 4,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "ml-lg-3",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Di\xE1ria:",
              name: "diaria",
              value: diaria,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Semana:",
              name: "semana",
              value: semana,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mb-5",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_TextInput__WEBPACK_IMPORTED_MODULE_3__["WizardInput"], {
              label: "Cau\xE7\xE3o:",
              name: "caucao",
              value: caucao,
              handleOwner: handleCarInput
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mx-lg-5",
            children: [activeStep === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
              title: "Cancelar",
              variant: "secondary",
              className: "w-100 mb-4 next-btn",
              onClick: () => router.push('/')
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 19
            }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
              title: "Voltar",
              variant: "secondary",
              className: "w-100 mb-4 next-btn",
              onClick: vehicleBack
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 100,
              columnNumber: 19
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UI_Button__WEBPACK_IMPORTED_MODULE_2__["UiButton"], {
              title: "Pr\xF3ximo",
              className: "w-100 next-btn",
              onClick: vehicleNextClick,
              loading: processing
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (VehicleDetails);

/***/ }),

/***/ "./components/UI/Button/index.js":
/*!***************************************!*\
  !*** ./components/UI/Button/index.js ***!
  \***************************************/
/*! exports provided: UiButton, SocialButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiButton", function() { return UiButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialButton", function() { return SocialButton; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\next-gav\\gav\\components\\UI\\Button\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const UiButton = (_ref) => {
  let {
    title,
    loading,
    size,
    loaderMsg
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["title", "loading", "size", "loaderMsg"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], _objectSpread(_objectSpread({}, rest), {}, {
    children: [title, loading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      className: "ml-3 mb-1",
      animation: "border",
      role: "status",
      size: size,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "sr-only",
        children: `${loaderMsg}`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 21
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 28
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};
UiButton.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,
  size: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  loaderMsg: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
UiButton.defaultProps = {
  title: 'My Button',
  size: 'sm',
  variant: 'primary',
  loaderMsg: 'Loading...'
};
const SocialButton = (_ref2) => {
  let {
    title,
    icon
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["title", "icon"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Button"], _objectSpread(_objectSpread({
    variant: "outline-primary",
    className: "d-flex align-items-center justify-content-between w-100 social-btn px-3 pb-sm-2 pb-0 pt-sm-1 pt-0"
  }, rest), {}, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "social-btn-icon",
      children: icon
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
      className: "social-btn-title",
      children: title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }, undefined)]
  }), void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 9
  }, undefined);
};
SocialButton.propTypes = {
  title: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
};
SocialButton.defaultProps = {
  title: 'My Social Button'
};

/***/ }),

/***/ "./components/UI/Loader/index.js":
/*!***************************************!*\
  !*** ./components/UI/Loader/index.js ***!
  \***************************************/
/*! exports provided: FullPageLoader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullPageLoader", function() { return FullPageLoader; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "E:\\next-gav\\gav\\components\\UI\\Loader\\index.js";

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const FullPageLoader = (_ref) => {
  let {
    loading,
    animation
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["loading", "animation"]);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "text-center my-5 py-5",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_2__["Spinner"], {
      animation: loading ? animation : '',
      role: "status"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};
FullPageLoader.propTypes = {
  loading: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool.isRequired,
  animation: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
FullPageLoader.defaultProps = {
  animation: 'border'
};

/***/ }),

/***/ "./components/UI/Photo/index.js":
/*!**************************************!*\
  !*** ./components/UI/Photo/index.js ***!
  \**************************************/
/*! exports provided: UploadPhoto, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadPhoto", function() { return UploadPhoto; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Loader */ "./components/UI/Loader/index.js");

var _jsxFileName = "E:\\next-gav\\gav\\components\\UI\\Photo\\index.js";


const UploadPhoto = ({
  text,
  src,
  name,
  loading,
  id,
  onFileChange
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "upload-photo text-md-left text-center",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      className: "h4 mb-3",
      children: text
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "text-center",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Spinner"], {
        animation: "border",
        role: "status"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 25
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 21
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: "cursor-pointer",
      htmlFor: id,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
        src: src ? src : '/images/upload.png',
        className: "img-fluid"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 21
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      type: "file",
      id: id,
      name: name,
      onChange: onFileChange,
      style: {
        position: 'absolute',
        left: -100000
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 9
  }, undefined);
};
/* harmony default export */ __webpack_exports__["default"] = (UploadPhoto);

/***/ }),

/***/ "./components/UI/TextInput/index.js":
/*!******************************************!*\
  !*** ./components/UI/TextInput/index.js ***!
  \******************************************/
/*! exports provided: AuthInput, WizardInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInput", function() { return AuthInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WizardInput", function() { return WizardInput; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "E:\\next-gav\\gav\\components\\UI\\TextInput\\index.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }


const AuthInput = ({
  label,
  type,
  name,
  value,
  onChange
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "auth-input-container",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
      autoComplete: "off",
      name: name,
      type: type,
      required: true,
      value: value,
      onChange: event => onChange(event)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      htmlFor: "text",
      className: "auth-input-label-container",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
        className: "auth-input-label-name",
        children: label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};
AuthInput.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired
};
AuthInput.defaultProps = {
  type: 'text'
};
const WizardInput = (_ref) => {
  let {
    label,
    type,
    value,
    name,
    handleOwner
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["label", "type", "value", "name", "handleOwner"]);

  //console.log("props = ", label, type,value, handleOwner )
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: "reg-form-input d-xl-flex justify-content-between",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
      className: "d-lg-inline-block d-block",
      children: label
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", _objectSpread({
      type: type,
      value: value,
      name: name,
      onChange: e => handleOwner(e)
    }, rest), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined);
};
WizardInput.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
WizardInput.defaultProps = {
  type: 'text'
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

/***/ "./layouts/Dashboard/index.js":
/*!************************************!*\
  !*** ./layouts/Dashboard/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Partial_Dashboard_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Partial/Dashboard/Header */ "./components/Partial/Dashboard/Header.js");
/* harmony import */ var _components_Partial_Dashboard_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Partial/Dashboard/Footer */ "./components/Partial/Dashboard/Footer.js");
/* harmony import */ var _utils_withAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/withAuth */ "./utils/withAuth.js");


var _jsxFileName = "E:\\next-gav\\gav\\layouts\\Dashboard\\index.js";





const DashboardLayout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Partial_Dashboard_Header__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("main", {
        children: children
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_withAuth__WEBPACK_IMPORTED_MODULE_4__["default"])(DashboardLayout));

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "./node_modules/next/dist/client/use-intersection.js");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  }).then(success => {
    if (!success) return;

    if (scroll) {
      // FIXME: proper route announcing at Router level, not Link:
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/request-idle-callback.js":
/*!****************************************************************!*\
  !*** ./node_modules/next/dist/client/request-idle-callback.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "./node_modules/next/dist/client/route-loader.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/client/route-loader.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../next-server/lib/router/utils/get-asset-path-from-route */ "../next-server/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
}

function idleTimeout(ms, err) {
  return new Promise((_resolve, reject) => (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => reject(err), ms)));
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return Promise.race([onBuildManifest, idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')))]);
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute.default)(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route) {
      return withFuture(route, routes, async () => {
        try {
          const {
            scripts,
            css
          } = await getFilesForRoute(assetPrefix, route);
          const [, styles] = await Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
          const entrypoint = await Promise.race([this.whenEntrypoint(route), idleTimeout(MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`)))]);
          const res = Object.assign({
            styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        } catch (err) {
          return {
            error: err
          };
        }
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/use-intersection.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/dist/client/use-intersection.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "./node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "./node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "./node_modules/next/dist/next-server/lib/i18n/normalize-locale-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.pathname, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.pathname, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(parsedHref, pages, applyBasePath = true) {
  const {
    pathname
  } = parsedHref;
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return parsedHref;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
        return true;
      }
    });
  }

  parsedHref.pathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)(parsedHref.pathname);
  return parsedHref;
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    } // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated


    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    }

    parsed = resolveDynamicRoute(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (false) {}

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://err.sh/next.js/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            resolveDynamicRoute(parsedHref, pages, false);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = resolveDynamicRoute(parsed, pages, false);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    let resolvedAs = asPath;

    if (false) {} // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(url).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites-noop.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) != null && _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/registrar-fornecedor-form/index.js":
/*!**************************************************!*\
  !*** ./pages/registrar-fornecedor-form/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layouts/Dashboard */ "./layouts/Dashboard/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_SupplierRegistration_PersonalInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SupplierRegistration/PersonalInfo */ "./components/SupplierRegistration/PersonalInfo.js");
/* harmony import */ var _components_SupplierRegistration_UploadPhotos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SupplierRegistration/UploadPhotos */ "./components/SupplierRegistration/UploadPhotos.js");
/* harmony import */ var _components_SupplierRegistration_VehicleDetails__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/SupplierRegistration/VehicleDetails */ "./components/SupplierRegistration/VehicleDetails.js");
/* harmony import */ var _components_SupplierRegistration_UploadVehiclePhotos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SupplierRegistration/UploadVehiclePhotos */ "./components/SupplierRegistration/UploadVehiclePhotos.js");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/providers */ "./utils/providers.js");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-toastify */ "react-toastify");
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_toastify__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _api_owner_recoverOwner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../api/owner/recoverOwner */ "./api/owner/recoverOwner.js");
/* harmony import */ var _api_driver_updateDriver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../api/driver/updateDriver */ "./api/driver/updateDriver.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _utils_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../utils/common */ "./utils/common.js");
/* harmony import */ var _components_UI_Loader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/UI/Loader */ "./components/UI/Loader/index.js");
/* harmony import */ var _api_files_createFiles__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../api/files/createFiles */ "./api/files/createFiles.js");
/* harmony import */ var _api_owner_cars_createCar__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../api/owner/cars/createCar */ "./api/owner/cars/createCar.js");

var _jsxFileName = "E:\\next-gav\\gav\\pages\\registrar-fornecedor-form\\index.js";

















const SupplierRegistrationForm = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_12__["useRouter"])();
  const {
    0: isLoading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: owner,
    1: setOwner
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({});
  const {
    0: activeStep,
    1: setActiveStep
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  const {
    0: nome,
    1: setnome
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: email,
    1: setemail
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: celular,
    1: setcelular
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: cpf,
    1: setcpf
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: cep,
    1: setcep
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: estado,
    1: setestado
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: bairro,
    1: setbairro
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: rua,
    1: setrua
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: numero,
    1: setnumero
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: cidade,
    1: setcidade
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: complemento,
    1: setcomplemento
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: cidadeId,
    1: setCidadeId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: processing,
    1: setProcessing
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: marcaCar,
    1: setMarcaCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("aa");
  const {
    0: modeloCar,
    1: setModeloCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: anoCar,
    1: setAnoCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("2021");
  const {
    0: placaCar,
    1: setPlacaCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: cepCar,
    1: setCepCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: estadoCar,
    1: setEstadoCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: cidadeCar,
    1: setCidadeCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: ruaCar,
    1: setRuaCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: semanaCar,
    1: setSemanaCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: caucaoCar,
    1: setCaucaoCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: diariaCar,
    1: setDiariaCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: numeroCar,
    1: setNumeroCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: complementoCar,
    1: setComplementoCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: bairroCar,
    1: setBairroCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: cidadeIdCar,
    1: setCidadeIdCar
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("a");
  const {
    0: frontalId,
    1: setFrontalId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: frontalUrl,
    1: setFrontalUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: loadingFrontal,
    1: setLoadingFrontal
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: lateralDireitaId,
    1: setLateralDireitaId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: lateralDireitaUrl,
    1: setLateralDireitaUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: loadingLateralDireita,
    1: setLoadingLateralDireita
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: lateralEsquerdaId,
    1: setLateralEsquerdaId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: lateralEsquerdaUrl,
    1: setLateralEsquerdaUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: loadingLateralEsquerda,
    1: setLoadingLateralEsquerda
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: fundoId,
    1: setFundoId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: fundoUrl,
    1: setFundoUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: loadingFundo,
    1: setLoadingFundo
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: painelInternoId,
    1: setPainelInternoId
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: painelInternoUrl,
    1: setPainelInternoUrl
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  const {
    0: loadingPainelInterno,
    1: setLoadingPainelInterno
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: carProcessing,
    1: setCarProcessing
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(async () => {
    setLoading(true);
    const data = await Object(_api_owner_recoverOwner__WEBPACK_IMPORTED_MODULE_10__["recoverOwner"])({}, () => {
      setLoading(false);
    });

    if (data) {
      console.log(data);
      setOwner(data);
      setnome(data.nome);
      setemail(data.email);
      setcelular(data.celular);

      if (data.pessoa_fisica && data.pessoa_fisica.cpf) {
        setcpf(data.pessoa_fisica.cpf);
      }

      if (data.endereco.length) {
        const addr = data.endereco[0];

        if (addr.cidade && addr.cidade.descricao) {
          setcidade(addr.cidade.descricao);
          setCidadeId(addr.cidade.id);
        }

        if (addr.cidade && addr.cidade.estado && addr.cidade.estado.descricao) {
          setestado(addr.cidade.estado.descricao);
        }

        if (addr.cep) {
          setcep(addr.cep);
        }

        if (addr.bairro) {
          setbairro(addr.bairro);
        }

        if (addr.logradouro) {
          setrua(addr.logradouro);
        }

        if (addr.numero) {
          setnumero(addr.numero);
        }

        if (addr.complemento) {
          setcomplemento(addr.complemento);
        }
      }
    }

    if (router.query && router.query.step) {
      setActiveStep(parseInt(router.query.step));
    } else {
      setActiveStep(2);
    }
  }, []);

  const handleOwner = async e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "nome":
        setnome(value);
        break;

      case "email":
        setemail(value);
        break;

      case "celular":
        setcelular(value);
        break;

      case "cpf":
        setcpf(value);
        break;

      case "cep":
        console.log("value = ", value);
        setcep(value);
        setLoading(true);
        const addr = await Object(_api_driver_updateDriver__WEBPACK_IMPORTED_MODULE_11__["getCep"])(value);

        if (addr) {
          console.log("add = ", addr);
          setbairro(addr.bairro);
          setrua(addr.logradouro);
          setcidade(addr.cidade.descricao);
          setestado(addr.cidade.estado.descricao);
          setCidadeId(addr.cidade.id);
        }

        setLoading(false);
        break;

      case "estado":
        setestado(value);
        break;

      case "bairro":
        setbairro(value);
        break;

      case "rua":
        setrua(value);
        break;

      case "cidade":
        setcidade(value);
        break;

      case "numero":
        setnumero(value);
        break;

      case "complemento":
        setcomplemento(value);
        break;
    }
  };

  const handleCarInput = async e => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "marca":
        setMarcaCar(value);
        break;

      case "modelo":
        setModeloCar(value);
        break;

      case "ano":
        setAnoCar(value);
        break;

      case "placa":
        setPlacaCar(value);
        break;

      case "cep":
        console.log("value = ", value);
        setCepCar(value);
        const addr = await Object(_api_driver_updateDriver__WEBPACK_IMPORTED_MODULE_11__["getCep"])(value);

        if (addr) {
          console.log("add = ", addr);
          setBairroCar(addr.bairro);
          setRuaCar(addr.logradouro);
          setCidadeCar(addr.cidade.descricao);
          setEstadoCar(addr.cidade.estado.descricao);
          setCidadeIdCar(addr.cidade.id);
        }

        break;

      case "estado":
        setEstadoCar(value);
        break;

      case "rua":
        setRuaCar(value);
        break;

      case "numero":
        setNumeroCar(value);
        break;

      case "complemento":
        setComplementoCar(value);
        break;

      case "semana":
        setSemanaCar(value);
        break;

      case "caucao":
        setCaucaoCar(value);
        break;

      case "diaria":
        setDiariaCar(value);
        break;

      case "cidade":
        setCidadeCar(value);
        break;
    }
  };

  const onFrontalChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setFrontalUrl(URL.createObjectURL(value));
    }

    setLoadingFrontal(true);
    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_15__["createFile"])(formData);
    setLoadingFrontal(false);

    if (res) {
      setFrontalId(res.id);
    }
  };

  const onLateralDireitaChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setLateralDireitaUrl(URL.createObjectURL(value));
    }

    setLoadingLateralDireita(true);
    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_15__["createFile"])(formData);
    setLoadingLateralDireita(false);

    if (res) {
      setLateralDireitaId(res.id);
    }
  };

  const onLateralEsquerdaChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setLateralEsquerdaUrl(URL.createObjectURL(value));
    }

    setLoadingLateralEsquerda(true);
    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_15__["createFile"])(formData);
    setLoadingLateralEsquerda(false);

    if (res) {
      setLateralEsquerdaId(res.id);
    }
  };

  const onFundoChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setFundoUrl(URL.createObjectURL(value));
    }

    setLoadingFundo(true);
    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_15__["createFile"])(formData);
    setLoadingFundo(false);

    if (res) {
      setFundoId(res.id);
    }
  };

  const onPainelInternoChange = async event => {
    const value = event.target.files[0];

    if (value) {
      setPainelInternoUrl(URL.createObjectURL(value));
    }

    setLoadingPainelInterno(true);
    let formData = new FormData();
    formData.append("file", value);
    const res = await Object(_api_files_createFiles__WEBPACK_IMPORTED_MODULE_15__["createFile"])(formData);
    setLoadingPainelInterno(false);

    if (res) {
      setPainelInternoId(res.id);
    }
  };

  const vehicleNextClick = () => {
    if (!marcaCar || !modeloCar || !anoCar || !placaCar || !cepCar || !estadoCar || !cidadeCar || !ruaCar || !semanaCar || !caucaoCar) {
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["notify"])('error', 'Please check the input fields');
    } else {
      setActiveStep(prevActiveStep => prevActiveStep + 1);
    }
  };

  const uploadCarDetails = async () => {
    console.log('hi'); //debugger

    setCarProcessing(true);
    const data = await Object(_api_owner_cars_createCar__WEBPACK_IMPORTED_MODULE_16__["createCar"])({
      marcaCar,
      modeloCar,
      anoCar,
      placaCar,
      cepCar,
      estadoCar,
      cidadeCar,
      ruaCar,
      semanaCar,
      caucaoCar,
      diariaCar,
      numeroCar,
      complementoCar,
      bairroCar,
      cidadeIdCar,
      frontalId,
      lateralDireitaId,
      lateralEsquerdaId,
      fundoId,
      painelInternoId
    });

    if (data) {
      console.log("updated data", data);
      Object(_utils_common__WEBPACK_IMPORTED_MODULE_13__["notify"])('success', 'Car added successfully');
    }

    setCarProcessing(false); // setActiveStep(prevActiveStep => prevActiveStep + 1)
  };

  const getStepContent = step => {
    switch (step) {
      case 0:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SupplierRegistration_PersonalInfo__WEBPACK_IMPORTED_MODULE_3__["default"], {
          activeStep: activeStep,
          owner: {
            nome,
            email,
            celular,
            cpf,
            cep,
            estado,
            bairro,
            rua,
            numero,
            cidade,
            complemento,
            cidadeId
          },
          handleOwner: handleOwner,
          personalNextClick: () => setActiveStep(prevActiveStep => prevActiveStep + 1),
          processing: processing
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 386,
          columnNumber: 16
        }, undefined);

      case 1:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SupplierRegistration_UploadPhotos__WEBPACK_IMPORTED_MODULE_4__["default"], {
          activeStep: activeStep,
          owner: {
            nome,
            email,
            celular,
            cpf,
            cep,
            estado,
            bairro,
            rua,
            numero,
            cidade,
            complemento,
            cidadeId
          },
          prevOwner: owner,
          personalNextClick: () => setActiveStep(prevActiveStep => prevActiveStep + 1),
          uploadBack: () => setActiveStep(prevActiveStep => prevActiveStep - 1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 395,
          columnNumber: 16
        }, undefined);

      case 2:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SupplierRegistration_VehicleDetails__WEBPACK_IMPORTED_MODULE_5__["default"], {
          marca: marcaCar,
          modelo: modeloCar,
          ano: anoCar,
          placa: placaCar,
          cep: cepCar,
          estado: estadoCar,
          cidade: cidadeCar,
          rua: ruaCar,
          semana: semanaCar,
          caucao: caucaoCar,
          diaria: diariaCar,
          numero: numeroCar,
          complemento: complementoCar,
          bairro: bairroCar,
          cidadeId: cidadeIdCar,
          activeStep: activeStep,
          handleCarInput: handleCarInput,
          vehicleNextClick: vehicleNextClick,
          vehicleBack: () => setActiveStep(prevActiveStep => prevActiveStep - 1)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 404,
          columnNumber: 16
        }, undefined);

      case 3:
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_SupplierRegistration_UploadVehiclePhotos__WEBPACK_IMPORTED_MODULE_6__["default"], {
          loadingFrontal: loadingFrontal,
          frontalUrl: frontalUrl,
          onFrontalChange: onFrontalChange,
          loadingLateralDireita: loadingLateralDireita,
          lateralDireitaUrl: lateralDireitaUrl,
          onLateralDireitaChange: onLateralDireitaChange,
          loadingLateralEsquerda: loadingLateralEsquerda,
          lateralEsquerdaUrl: lateralEsquerdaUrl,
          onLateralEsquerdaChange: onLateralEsquerdaChange,
          loadingFundo: loadingFundo,
          fundoUrl: fundoUrl,
          onFundoChange: onFundoChange,
          loadingPainelInterno: loadingPainelInterno,
          painelInternoUrl: painelInternoUrl,
          onPainelInternoChange: onPainelInternoChange,
          activeStep: activeStep,
          personalNextClick: () => setActiveStep(prevActiveStep => prevActiveStep + 1),
          uploadBack: () => setActiveStep(prevActiveStep => prevActiveStep - 1),
          processing: carProcessing,
          uploadCarDetails: uploadCarDetails
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 427,
          columnNumber: 16
        }, undefined);

      default:
        return null;
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_layouts_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: isLoading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_UI_Loader__WEBPACK_IMPORTED_MODULE_14__["FullPageLoader"], {
      loading: isLoading
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 463,
      columnNumber: 21
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "supplier-reg-area mb-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_toastify__WEBPACK_IMPORTED_MODULE_9__["ToastContainer"], {
        style: {
          zIndex: 99999
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 465,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
        className: "text-primary mb-3",
        children: activeStep === 0 ? 'Meus dados' : activeStep === 1 ? 'Upload Fotos' : activeStep === 2 ? 'Dados do Veículo' : activeStep === 3 && 'Fotos do Veículo'
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 466,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "-12 d-flex justify-content-between mb-5 pb-3",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: `reg-step-btn ${activeStep === 0 ? 'reg-step-btn-active' : activeStep > 0 ? 'reg-step-btn-done' : ''}`,
          onClick: () => setActiveStep(0),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "reg-step-header"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 477,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Dados Pessoais"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 478,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 474,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          disabled: activeStep === 0 ? true : false,
          className: `reg-step-btn ${activeStep === 1 ? 'reg-step-btn-active' : activeStep > 1 ? 'reg-step-btn-done' : ''}`,
          onClick: () => setActiveStep(1),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "reg-step-header"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 484,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Upload Fotos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 485,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 480,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          className: `reg-step-btn ${activeStep === 2 ? 'reg-step-btn-active' : activeStep > 2 ? 'reg-step-btn-done' : ''}`,
          onClick: () => setActiveStep(2),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "reg-step-header"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 490,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Dados do Ve\xEDculo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 491,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 487,
          columnNumber: 15
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
          disabled: activeStep === 0 || 2 ? true : false,
          className: `reg-step-btn ${activeStep === 3 ? 'reg-step-btn-active' : activeStep > 3 ? 'reg-step-btn-done' : ''}`,
          onClick: () => setActiveStep(3),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            className: "reg-step-header"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 497,
            columnNumber: 17
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
            children: "Fotos do Ve\xEDculo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 498,
            columnNumber: 17
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 493,
          columnNumber: 15
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 473,
        columnNumber: 13
      }, undefined), getStepContent(activeStep)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 464,
      columnNumber: 11
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 461,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (SupplierRegistrationForm);

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

/***/ "./utils/withAuth.js":
/*!***************************!*\
  !*** ./utils/withAuth.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "E:\\next-gav\\gav\\utils\\withAuth.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const withAuth = WrappedComponent => {
  return props => {
    const Router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
    const {
      0: verified,
      1: setVerified
    } = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
    Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(async () => {
      const session = await Object(next_auth_client__WEBPACK_IMPORTED_MODULE_1__["getSession"])();

      if (session) {
        setVerified(true);
      } else {
        Router.replace("/login");
      }
    }, []);

    if (verified) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(WrappedComponent, _objectSpread({}, props), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 20
      }, undefined);
    } else {
      return null;
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

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

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/hi":
/*!*********************************!*\
  !*** external "react-icons/hi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/hi");

/***/ }),

/***/ "react-icons/ri":
/*!*********************************!*\
  !*** external "react-icons/ri" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ri");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "react-toastify":
/*!*********************************!*\
  !*** external "react-toastify" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-toastify");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vLi9hcGkvY2FkYXN0cm8vY2FwdGFzYW8vY3JlYXRlUGVyc29uLmpzIiwid2VicGFjazovLy8uL2FwaS9kcml2ZXIvdXBkYXRlRHJpdmVyLmpzIiwid2VicGFjazovLy8uL2FwaS9maWxlcy9jcmVhdGVGaWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvb3duZXIvY2Fycy9jcmVhdGVDYXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBpL293bmVyL3JlY292ZXJPd25lci5qcyIsIndlYnBhY2s6Ly8vLi9hcGkvb3duZXIvdXBkYXRlT3duZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJ0aWFsL0Rhc2hib2FyZC9Gb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9QYXJ0aWFsL0Rhc2hib2FyZC9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdXBwbGllclJlZ2lzdHJhdGlvbi9QZXJzb25hbEluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdXBwbGllclJlZ2lzdHJhdGlvbi9VcGxvYWRQaG90b3MuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9TdXBwbGllclJlZ2lzdHJhdGlvbi9VcGxvYWRWZWhpY2xlUGhvdG9zLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU3VwcGxpZXJSZWdpc3RyYXRpb24vVmVoaWNsZURldGFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9CdXR0b24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9Mb2FkZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9VSS9QaG90by9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1VJL1RleHRJbnB1dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9jb25maWcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vY29uc3RhbnRzL293bmVyLmpzIiwid2VicGFjazovLy8uL2xheW91dHMvRGFzaGJvYXJkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L2xpbmsudHN4Iiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvdXNlLWludGVyc2VjdGlvbi50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy1ub29wLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9yZWdpc3RyYXItZm9ybmVjZWRvci1mb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL3V0aWxzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy9wcm92aWRlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vdXRpbHMvcmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi91dGlscy93aXRoQXV0aC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQtYXV0aC9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWJvb3RzdHJhcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2hpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvcmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlZHV4XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtdG9hc3RpZnlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJjcmVhdGVQZXJzb24iLCJlbWFpbCIsImNlbHVsYXIiLCJub21lIiwic2VuaGEiLCJwZXNzb2FfY2FkYXN0cm9faWQiLCJwZXNzb2FfdGlwb19pZCIsImNiIiwiYm9keSIsInBlc3NvYV9maXNpY2EiLCJwZXNzb2FfanVyaWRpY2EiLCJ1c2VyIiwicGFzc3dvcmQiLCJkYXRhIiwiaHR0cFJlcXVlc3QiLCJwb3N0IiwiY29uZmlnIiwiYmFzZVVybCIsIm5vdGlmeSIsImVycm9yIiwiZXJyIiwicmVzcG9uc2UiLCJlcnJvcnMiLCJ1cGRhdGVEcml2ZXIiLCJuZXdEYXRhIiwib2JqIiwiY3BmIiwiZW5kZXJlY28iLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInJ1YSIsImNlcCIsIm51bWVybyIsImNvbXBsZW1lbnRvIiwiYmFpcnJvIiwiY2lkYWRlSWQiLCJwZXNzb2FfYXJxdWl2b3MiLCJjbmhJZCIsInB1c2giLCJhcnF1aXZvX2lkIiwicGVzc29hX2FycXVpdm9fdGlwb19pZCIsInNlZ3VyYW5kb0lkIiwiY29tcHJvdmFudGVJZCIsInJnSWQiLCJ0ZWxlZm9uZSIsInBlc3NvYV9zdGF0dXNfaWQiLCJyZWNlYmVfdmlhX2FkbWluaXN0cmFkb3IiLCJjYXJyb3MiLCJjb250YV9iYW5jYXJpYSIsImxlbmd0aCIsInByZWZpbElkIiwiZm90b19wZXJmaWxfYXJxdWl2b19pZCIsImNvbnNvbGUiLCJsb2ciLCJzZXNzaW9uIiwiZ2V0U2Vzc2lvbiIsInRva2VuIiwiYWNjZXNzX3Rva2VuIiwicGF0Y2giLCJtZXNzYWdlIiwiZ2V0Q2VwIiwiZ2V0IiwiY3JlYXRlRmlsZSIsImZvcm1EYXRhIiwiZGVmYXVsdE9wdGlvbnMiLCJoZWFkZXJzIiwiT2JqZWN0IiwiYXNzaWduIiwiQXV0aG9yaXphdGlvbiIsInJlcyIsImF4aW9zIiwiY3JlYXRlQ2FyIiwiZW5kZXJlY29fcmV0aXJhZGFfcHJpbmNpcGFsIiwicnVhQ2FyIiwiY2VwQ2FyIiwibnVtZXJvQ2FyIiwiY29tcGxlbWVudG9DYXIiLCJiYWlycm9DYXIiLCJjaWRhZGVJZENhciIsImFycXVpdm9zIiwiZnJvbnRhbElkIiwiY2Fycm9fYXJxdWl2b190aXBvX2lkIiwicG9zaXRpb24iLCJsYXRlcmFsRGlyZWl0YUlkIiwibGF0ZXJhbEVzcXVlcmRhSWQiLCJmdW5kb0lkIiwicGFpbmVsSW50ZXJub0lkIiwibW9kZWwiLCJkZXNjcmlwdGlvbiIsIm1vZGVsbyIsImJyYW5kIiwibWFyY2EiLCJhbm8iLCJhbm9DYXIiLCJwbGFjYSIsInBsYWNhQ2FyIiwicmVjb3Zlck93bmVyIiwicXVlcnlQYXJhbXNPYmoiLCJjYWxsYmFjayIsInVwZGF0ZU93bmVyIiwiUHVibGljRm9vdGVyIiwiRGFzaGJvYXJkSGVhZGVyIiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInJvdXRlciIsInVzZVJvdXRlciIsImlzT3BlbiIsInNldElzT3BlbiIsInVzZVN0YXRlIiwib3Blbk1lbnUiLCJjbG9zZU1lbnUiLCJzaWduT3V0IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3R4Iiwid3JpdGVIZWFkIiwiTG9jYXRpb24iLCJlbmQiLCJQZXJzb25hbEluZm8iLCJhY3RpdmVTdGVwIiwicGVyc29uYWxOZXh0Q2xpY2siLCJvd25lciIsImhhbmRsZU93bmVyIiwicHJvY2Vzc2luZyIsImVzdGFkbyIsImNpZGFkZSIsIlVwbG9hZFBob3RvcyIsInVwbG9hZEJhY2siLCJwcmV2T3duZXIiLCJzZXRQcm9jZXNzaW5nIiwic2V0Q25oSWQiLCJzZXRDb21wcm92YW50ZUlkIiwic2V0UHJlZmlsSWQiLCJjbmhVcmwiLCJzZXRDbmhVcmwiLCJjb21wcm92YW50ZVVybCIsInNldENvbXByb3ZhbnRlVXJsIiwicHJlZmlsVXJsIiwic2V0UHJlZmlsVXJsIiwib25DbmhDaGFuZ2UiLCJldmVudCIsInZhbHVlIiwidGFyZ2V0IiwiZmlsZXMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJGb3JtRGF0YSIsImFwcGVuZCIsImlkIiwib25Db21DaGFuZ2UiLCJvblByZWZpbENoYW5nZSIsInVwbG9hZEFuZE5leHQiLCJVcGxvYWRWZWhpY2xlUGhvdG9zIiwibG9hZGluZ0Zyb250YWwiLCJmcm9udGFsVXJsIiwib25Gcm9udGFsQ2hhbmdlIiwibG9hZGluZ0xhdGVyYWxEaXJlaXRhIiwibGF0ZXJhbERpcmVpdGFVcmwiLCJvbkxhdGVyYWxEaXJlaXRhQ2hhbmdlIiwibG9hZGluZ0xhdGVyYWxFc3F1ZXJkYSIsImxhdGVyYWxFc3F1ZXJkYVVybCIsIm9uTGF0ZXJhbEVzcXVlcmRhQ2hhbmdlIiwibG9hZGluZ0Z1bmRvIiwiZnVuZG9VcmwiLCJvbkZ1bmRvQ2hhbmdlIiwibG9hZGluZ1BhaW5lbEludGVybm8iLCJwYWluZWxJbnRlcm5vVXJsIiwib25QYWluZWxJbnRlcm5vQ2hhbmdlIiwidXBsb2FkQ2FyRGV0YWlscyIsIlZlaGljbGVEZXRhaWxzIiwic2VtYW5hIiwiY2F1Y2FvIiwiZGlhcmlhIiwiaGFuZGxlQ2FySW5wdXQiLCJ2ZWhpY2xlTmV4dENsaWNrIiwidmVoaWNsZUJhY2siLCJVaUJ1dHRvbiIsInRpdGxlIiwibG9hZGluZyIsInNpemUiLCJsb2FkZXJNc2ciLCJyZXN0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsInZhcmlhbnQiLCJTb2NpYWxCdXR0b24iLCJpY29uIiwibm9kZSIsIkZ1bGxQYWdlTG9hZGVyIiwiYW5pbWF0aW9uIiwiaXNSZXF1aXJlZCIsIlVwbG9hZFBob3RvIiwidGV4dCIsInNyYyIsIm5hbWUiLCJvbkZpbGVDaGFuZ2UiLCJsZWZ0IiwiQXV0aElucHV0IiwibGFiZWwiLCJ0eXBlIiwib25DaGFuZ2UiLCJXaXphcmRJbnB1dCIsImUiLCJERVZFTE9QTUVOVCIsIm5leHRBdXRoVXJsIiwicHJvY2VzcyIsImdyYW50VHlwZSIsImJhc2ljQXV0aFRva2VuIiwiR0FWX0NMSUVOVF9TRUNSRVQiLCJHQVZfQ0xJRU5UX0lEIiwiR09PR0xFX0NMSUVOVF9JRCIsIkdPT0dMRV9DTElFTlRfU0VDUkVUIiwiRkFDRUJPT0tfQ0xJRU5UX0lEIiwiRkFDRUJPT0tfQ0xJRU5UX1NFQ1JFVCIsIk9XTkVSX0xJU1RfT0ZfQ0FSU19SRVFVRVNUIiwiT1dORVJfTElTVF9PRl9DQVJTX1NVQ0NFU1MiLCJPV05FUl9MSVNUX09GX0NBUlNfRkFJTCIsIk9XTkVSX1JFQ09WRVJfT1dORVJfUkVRVUVTVCIsIk9XTkVSX1JFQ09WRVJfT1dORVJfU1VDQ0VTUyIsIk9XTkVSX1JFQ09WRVJfT1dORVJfRkFJTCIsIkRhc2hib2FyZExheW91dCIsImNoaWxkcmVuIiwid2l0aEF1dGgiLCJwcmVmZXRjaGVkIiwiY3VyTG9jYWxlIiwib3B0aW9ucyIsImhyZWYiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwicmVwbGFjZSIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImFyZ3MiLCJrZXkiLCJleHBlY3RlZCIsImFjdHVhbCIsInJlcXVpcmVkUHJvcHNHdWFyZCIsInJlcXVpcmVkUHJvcHMiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicGF0aG5hbWUiLCJyZXNvbHZlZEFzIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUmVmIiwicm9vdE1hcmdpbiIsInNldFJlZiIsImVsIiwic2V0SW50ZXJzZWN0aW9uUmVmIiwic2hvdWxkUHJlZmV0Y2giLCJpc1Zpc2libGUiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJsb2NhbGVEb21haW4iLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInNlbGYiLCJzdGFydCIsIkRhdGUiLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwiY2xlYXJUaW1lb3V0IiwiTVNfTUFYX0lETEVfREVMQVkiLCJlbnRyeSIsIm1hcCIsIlByb21pc2UiLCJwcm9tIiwicmVzb2x2ZSIsInJlc29sdmVyIiwiZnV0dXJlIiwiZ2VuZXJhdG9yIiwibGluayIsIndpbmRvdyIsImNhblByZWZldGNoIiwiaGFzUHJlZmV0Y2giLCJBU1NFVF9MT0FEX0VSUk9SIiwiU3ltYm9sIiwic2NyaXB0IiwicmVqZWN0IiwibWFya0Fzc2V0RXJyb3IiLCJvbkJ1aWxkTWFuaWZlc3QiLCJpZGxlVGltZW91dCIsInNjcmlwdHMiLCJhc3NldFByZWZpeCIsImVuY29kZVVSSSIsImNzcyIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJtYW5pZmVzdCIsInJvdXRlIiwiYWxsRmlsZXMiLCJ2IiwiZW50cnlwb2ludHMiLCJsb2FkZWRTY3JpcHRzIiwic3R5bGVTaGVldHMiLCJyb3V0ZXMiLCJhcHBlbmRTY3JpcHQiLCJmZXRjaCIsImNvbnRlbnQiLCJ3aGVuRW50cnlwb2ludCIsIndpdGhGdXR1cmUiLCJvbkVudHJ5cG9pbnQiLCJmbiIsImV4cG9ydHMiLCJjb21wb25lbnQiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsImdldEZpbGVzRm9yUm91dGUiLCJlbnRyeXBvaW50IiwiY24iLCJuYXZpZ2F0b3IiLCJvdXRwdXQiLCJwcmVmZXRjaFZpYURvbSIsImNyZWF0ZVJvdXRlTG9hZGVyIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiaXNEaXNhYmxlZCIsImRpc2FibGVkIiwidW5vYnNlcnZlIiwib2JzZXJ2ZSIsInNldFZpc2libGUiLCJpZGxlQ2FsbGJhY2siLCJjcmVhdGVPYnNlcnZlciIsImVsZW1lbnRzIiwib2JzZXJ2ZXIiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsInBhdGhuYW1lUGFydHMiLCJsb2NhbGVzIiwiZGV0ZWN0ZWRMb2NhbGUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJwYXRoTm9RdWVyeUhhc2giLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwiYWRkUGF0aFByZWZpeCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwicmVzb2x2ZWQiLCJoYXNCYXNlUGF0aCIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiYXNQYXRobmFtZSIsInBhcmFtcyIsInBhcmFtIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsInNlZ21lbnQiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwicXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJpc0xvY2FsVVJMIiwicmVzb2x2ZUFzIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwib3JpZ2luIiwicmVzb2x2ZUhyZWYiLCJocmVmSGFkT3JpZ2luIiwiYXNIYWRPcmlnaW4iLCJzdHJpcE9yaWdpbiIsInByZXBhcmVkVXJsIiwiYWRkQmFzZVBhdGgiLCJwcmVwYXJlZEFzIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwicGFnZSIsInBhcnNlZEhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORCIsImNyZWRlbnRpYWxzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5Iiwibm90Rm91bmQiLCJpc1NlcnZlclJlbmRlciIsImNvbnN0cnVjdG9yIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwiZGVmYXVsdExvY2FsZSIsImRvbWFpbkxvY2FsZXMiLCJpc1JlYWR5IiwiaXNQcmV2aWV3IiwiaXNMb2NhbGVEb21haW4iLCJfaWR4Iiwic3RhdGUiLCJpbml0aWFsIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJhdXRvRXhwb3J0RHluYW1pYyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJsb2NhbGVDaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicm91dGVQcm9wcyIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsInBhcnNlZCIsIl9fcmV3cml0ZXMiLCJyZXNvbHZlRHluYW1pY1JvdXRlIiwibWV0aG9kIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwibm90Rm91bmRSb3V0ZSIsImFwcENvbXAiLCJpc1ZhbGlkU2hhbGxvd1JvdXRlIiwiZm9yY2VkU2Nyb2xsIiwieCIsInkiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImlkeCIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiYWJvcnRDb21wb25lbnRMb2FkIiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsImdsb2JhbEJhc2UiLCJyZXNvbHZlZEJhc2UiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJTdXBwbGllclJlZ2lzdHJhdGlvbkZvcm0iLCJpc0xvYWRpbmciLCJzZXRMb2FkaW5nIiwic2V0T3duZXIiLCJzZXRBY3RpdmVTdGVwIiwic2V0bm9tZSIsInNldGVtYWlsIiwic2V0Y2VsdWxhciIsInNldGNwZiIsInNldGNlcCIsInNldGVzdGFkbyIsInNldGJhaXJybyIsInNldHJ1YSIsInNldG51bWVybyIsInNldGNpZGFkZSIsInNldGNvbXBsZW1lbnRvIiwic2V0Q2lkYWRlSWQiLCJtYXJjYUNhciIsInNldE1hcmNhQ2FyIiwibW9kZWxvQ2FyIiwic2V0TW9kZWxvQ2FyIiwic2V0QW5vQ2FyIiwic2V0UGxhY2FDYXIiLCJzZXRDZXBDYXIiLCJlc3RhZG9DYXIiLCJzZXRFc3RhZG9DYXIiLCJjaWRhZGVDYXIiLCJzZXRDaWRhZGVDYXIiLCJzZXRSdWFDYXIiLCJzZW1hbmFDYXIiLCJzZXRTZW1hbmFDYXIiLCJjYXVjYW9DYXIiLCJzZXRDYXVjYW9DYXIiLCJkaWFyaWFDYXIiLCJzZXREaWFyaWFDYXIiLCJzZXROdW1lcm9DYXIiLCJzZXRDb21wbGVtZW50b0NhciIsInNldEJhaXJyb0NhciIsInNldENpZGFkZUlkQ2FyIiwic2V0RnJvbnRhbElkIiwic2V0RnJvbnRhbFVybCIsInNldExvYWRpbmdGcm9udGFsIiwic2V0TGF0ZXJhbERpcmVpdGFJZCIsInNldExhdGVyYWxEaXJlaXRhVXJsIiwic2V0TG9hZGluZ0xhdGVyYWxEaXJlaXRhIiwic2V0TGF0ZXJhbEVzcXVlcmRhSWQiLCJzZXRMYXRlcmFsRXNxdWVyZGFVcmwiLCJzZXRMb2FkaW5nTGF0ZXJhbEVzcXVlcmRhIiwic2V0RnVuZG9JZCIsInNldEZ1bmRvVXJsIiwic2V0TG9hZGluZ0Z1bmRvIiwic2V0UGFpbmVsSW50ZXJub0lkIiwic2V0UGFpbmVsSW50ZXJub1VybCIsInNldExvYWRpbmdQYWluZWxJbnRlcm5vIiwiY2FyUHJvY2Vzc2luZyIsInNldENhclByb2Nlc3NpbmciLCJ1c2VFZmZlY3QiLCJhZGRyIiwiZGVzY3JpY2FvIiwibG9ncmFkb3VybyIsInN0ZXAiLCJwcmV2QWN0aXZlU3RlcCIsImdldFN0ZXBDb250ZW50IiwiekluZGV4IiwidG9hc3QiLCJzdHlsZSIsImZvbnRTaXplIiwid2FybmluZyIsInVzZUlucHV0IiwiaW5pdGlhbFZhbHVlIiwic2V0VmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJyYXRpbmdEYXRlIiwiZGF0ZSIsIm1vbWVudCIsInV0YyIsImxvY2FsIiwiZm9ybWF0IiwiZG9tYWluIiwiZ2F2UHJvdmlkZXIiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsImdyYW50X3R5cGUiLCJnZXRUb2tlbiIsInNjb3BlIiwiY2xpZW50X2lkIiwiY2xpZW50X3NlY3JldCIsInRva2VucyIsImdldE1lIiwibWUiLCJBY2NlcHQiLCJjbGllbnQiLCJ0b2tlbk5lZWQiLCJwdXQiLCJkZWxldGUiLCJXcmFwcGVkQ29tcG9uZW50IiwidmVyaWZpZWQiLCJzZXRWZXJpZmllZCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7OztBQ0FBLGdHOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDQTtBQUlPLE1BQU1BLFlBQVksR0FBRyxPQUFPQyxLQUFQLEVBQWNDLE9BQWQsRUFBdUJDLElBQXZCLEVBQTZCQyxLQUE3QixFQUFvQ0Msa0JBQXBD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Q0osS0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxRQUFJaWIsUUFBSixFQUFjO0FBQ1YsMEJBQU8scUVBQUMsZ0JBQUQsb0JBQXNCeGEsS0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNILEtBRkQsTUFFTztBQUNILGFBQU8sSUFBUDtBQUNIO0FBQ0osR0FsQkQ7QUFtQkgsQ0FwQkQ7O0FBcUJlbEIsdUVBQWYsRTs7Ozs7Ozs7Ozs7QUN6QkEsa0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsNEM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvcmVnaXN0cmFyLWZvcm5lY2Vkb3ItZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcmVnaXN0cmFyLWZvcm5lY2Vkb3ItZm9ybS9pbmRleC5qc1wiKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCJcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvcmVxdWVzdFwiXG4vL2ltcG9ydCBnZXRJdGVtIGZyb20gJy4uLy4uLy4uL3V0aWxzL2xvY2FsU3Ryb2FnZUFjY2VzcydcbmltcG9ydCB7IG5vdGlmeSwgdXNlSW5wdXQgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvY29tbW9uXCJcblxuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVQZXJzb24gPSBhc3luYyAoZW1haWwsIGNlbHVsYXIsIG5vbWUsIHNlbmhhLCBwZXNzb2FfY2FkYXN0cm9faWQsIHBlc3NvYV90aXBvX2lkLCBjYikgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICBjZWx1bGFyOiBjZWx1bGFyLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgcGVzc29hX3RpcG9faWQ6IHBlc3NvYV90aXBvX2lkLFxuICAgICAgICAgICAgcGVzc29hX2NhZGFzdHJvX2lkOiBwZXNzb2FfY2FkYXN0cm9faWQsXG4gICAgICAgICAgICBwZXNzb2FfZmlzaWNhOiB7XG4gICAgICAgICAgICAgICAgbm9tZTogbm9tZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBlc3NvYV9qdXJpZGljYToge1xuICAgICAgICAgICAgICAgIG5vbWU6IG5vbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VyOiB7XG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHNlbmhhLFxuICAgICAgICAgICAgICAgIGVtYWlsOiBlbWFpbFxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IGh0dHBSZXF1ZXN0LnBvc3QoXG4gICAgICAgICAgICBgJHtjb25maWcuYmFzZVVybH0vYXBpL2NhcHRhY2FvL3Blc3NvYXNgLFxuICAgICAgICAgICAgZmFsc2UsXG4gICAgICAgICAgICBcIlwiLFxuICAgICAgICAgICAgYm9keVxuICAgICAgICApXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpXG4gICAgICAgIG5vdGlmeSgnc3VjY2VzcycsIFwiU3VjY2Vzc2Z1bGx5IENyZWF0ZWRcIilcbiAgICAgICAgY2IoKVxuICAgICAgICByZXR1cm4gZGF0YVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNiKClcbiAgICAgICAgbGV0IGVyciA9IFwiXCJcbiAgICAgICAgaWYoXCJ1c2VyLmVtYWlsXCIgaW4gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnMgKXtcbiAgICAgICAgICAgIGVyciArPSBlcnJvci5yZXNwb25zZS5kYXRhLmVycm9yc1tcInVzZXIuZW1haWxcIl1bMF1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKFwidXNlci5wYXNzd29yZFwiIGluIGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzICl7XG4gICAgICAgICAgICBlcnIgKz0gZXJyb3IucmVzcG9uc2UuZGF0YS5lcnJvcnNbXCJ1c2VyLnBhc3N3b3JkXCJdWzBdXG4gICAgICAgIH1cbiAgICAgICAgbm90aWZ5KFwiZXJyb3JcIiwgZXJyKVxuICAgICAgIC8vIGNvbnNvbGUubG9nKGVycm9yLnJlc3BvbnNlLmRhdGEuZXJyb3JzKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn0iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi8uLi91dGlscy9yZXF1ZXN0XCJcbmltcG9ydCB7IG5vdGlmeSwgdXNlSW5wdXQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uXCJcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZURyaXZlciA9IGFzeW5jIChuZXdEYXRhLCBvYmopID0+IHtcbiAgICB0cnkge1xuXG4gICAgICAgIGNvbnN0IHBlc3NvYV9maXNpY2EgPSB7IC4uLm9iai5wZXNzb2FfZmlzaWNhLCBjcGY6IG5ld0RhdGEuY3BmLCBub21lOiBuZXdEYXRhLm5vbWUgfVxuICAgICAgICBjb25zdCBlbmRlcmVjbyA9IFt7XG4gICAgICAgICAgICBcImxhdGl0dWRlXCI6IG9iai5sYXRpdHVkZSxcbiAgICAgICAgICAgIFwibG9uZ2l0dWRlXCI6IG9iai5sb25naXR1ZGUsXG4gICAgICAgICAgICBcImxvZ3JhZG91cm9cIjogbmV3RGF0YS5ydWEsXG4gICAgICAgICAgICBcImNlcFwiOiBuZXdEYXRhLmNlcCxcbiAgICAgICAgICAgIFwibnVtZXJvXCI6IG5ld0RhdGEubnVtZXJvLFxuICAgICAgICAgICAgXCJjb21wbGVtZW50b1wiOiBuZXdEYXRhLmNvbXBsZW1lbnRvLFxuICAgICAgICAgICAgXCJiYWlycm9cIjogbmV3RGF0YS5iYWlycm8sXG4gICAgICAgICAgICBcImNpZGFkZV9pZFwiOiBuZXdEYXRhLmNpZGFkZUlkXG4gICAgICAgIH1dXG5cbiAgICAgICAgbGV0IHBlc3NvYV9hcnF1aXZvcyA9IFtdXG5cbiAgICAgICAgaWYgKG9iai5wZXNzb2FfYXJxdWl2b3MpIHtcbiAgICAgICAgICAgIHBlc3NvYV9hcnF1aXZvcyA9IFsuLi5vYmoucGVzc29hX2FycXVpdm9zXVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0RhdGEuY25oSWQpIHtcbiAgICAgICAgICAgIHBlc3NvYV9hcnF1aXZvcy5wdXNoKHsgYXJxdWl2b19pZDogbmV3RGF0YS5jbmhJZCwgcGVzc29hX2FycXVpdm9fdGlwb19pZDogMSB9KVxuICAgICAgICB9XG4gICAgICAgIGlmIChuZXdEYXRhLnNlZ3VyYW5kb0lkKSB7XG4gICAgICAgICAgICBwZXNzb2FfYXJxdWl2b3MucHVzaCh7YXJxdWl2b19pZDogbmV3RGF0YS5zZWd1cmFuZG9JZCwgcGVzc29hX2FycXVpdm9fdGlwb19pZDogMiB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0RhdGEuY29tcHJvdmFudGVJZCkge1xuICAgICAgICAgICAgcGVzc29hX2FycXVpdm9zLnB1c2goeyBhcnF1aXZvX2lkOiBuZXdEYXRhLmNvbXByb3ZhbnRlSWQsIHBlc3NvYV9hcnF1aXZvX3RpcG9faWQ6IDMgfSlcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3RGF0YS5yZ0lkKSB7XG4gICAgICAgICAgICBwZXNzb2FfYXJxdWl2b3MucHVzaCh7IGFycXVpdm9faWQ6IG5ld0RhdGEucmdJZCwgcGVzc29hX2FycXVpdm9fdGlwb19pZDogNSB9KVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIHRlbGVmb25lOiBvYmoudGVsZWZvbmUsXG4gICAgICAgICAgICBjZWx1bGFyOiBuZXdEYXRhLmNlbHVsYXIsXG4gICAgICAgICAgICBlbWFpbDogbmV3RGF0YS5lbWFpbCxcbiAgICAgICAgICAgIHBlc3NvYV90aXBvX2lkOiBvYmoucGVzc29hX3RpcG9faWQsXG4gICAgICAgICAgICBwZXNzb2FfY2FkYXN0cm9faWQ6IG9iai5wZXNzb2FfY2FkYXN0cm9faWQsXG4gICAgICAgICAgICBwZXNzb2Ffc3RhdHVzX2lkOiBvYmoucGVzc29hX3N0YXR1c19pZCxcbiAgICAgICAgICAgIHJlY2ViZV92aWFfYWRtaW5pc3RyYWRvcjogb2JqLnJlY2ViZV92aWFfYWRtaW5pc3RyYWRvcixcbiAgICAgICAgICAgIHBlc3NvYV9maXNpY2E6IHBlc3NvYV9maXNpY2EsXG4gICAgICAgICAgICBwZXNzb2FfanVyaWRpY2E6IG9iai5wZXNzb2FfanVyaWRpY2EsXG4gICAgICAgICAgICBlbmRlcmVjbzogW2VuZGVyZWNvXSxcbiAgICAgICAgICAgIGNhcnJvczogb2JqLmNhcnJvcyxcbiAgICAgICAgICAgIHBlc3NvYV9hcnF1aXZvczogb2JqLnBlc3NvYV9hcnF1aXZvcyxcbiAgICAgICAgICAgIGNvbnRhX2JhbmNhcmlhOiBvYmouY29udGFfYmFuY2FyaWEsXG4gICAgICAgICAgICAuLi4ocGVzc29hX2FycXVpdm9zLmxlbmd0aCAmJiB7cGVzc29hX2FycXVpdm9zOiBwZXNzb2FfYXJxdWl2b3N9KSxcbiAgICAgICAgICAgIC4uLihuZXdEYXRhLnByZWZpbElkICYmIHsgZm90b19wZXJmaWxfYXJxdWl2b19pZDogbmV3RGF0YS5wcmVmaWxJZCB9KVxuICAgICAgICB9XG4gICAgICAgIC8vY25oSUQsIHJnSWQsIHNlZ3VyYW5kb0lkLCBjb21wcm92YW50ZUlkLCBwcmVmaWxJZFxuICAgICAgICAvLyBkZWJ1Z2dlclxuICAgICAgICBjb25zb2xlLmxvZyhcImJvZHkgPSBcIiwgYm9keSlcbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgICAgICBjb25zdCB0b2tlbiA9ICdCZWFyZXIgJyArIHNlc3Npb24uYWNjZXNzX3Rva2VuXG5cbiAgICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBodHRwUmVxdWVzdC5wYXRjaChcbiAgICAgICAgICAgIGAke2NvbmZpZy5iYXNlVXJsfS9hcGkvbW90b3Jpc3RhYCxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICAgIGJvZHlcbiAgICAgICAgKVxuICAgICAgICBjb25zb2xlLmxvZyhcInVwZGF0ZWQgZGF0YSA9IFwiLCBkYXRhKVxuICAgICAgICByZXR1cm4gZGF0YVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgIG5vdGlmeShcImVycm9yXCIsIGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YS5tZXNzYWdlIDogJycpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjb25zdCBnZXRDZXAgPSBhc3luYyAoY2VwKSA9PiB7XG4gICAgdHJ5IHtcblxuXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICAgICAgY29uc3QgdG9rZW4gPSAnQmVhcmVyICcgKyBzZXNzaW9uLmFjY2Vzc190b2tlblxuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cFJlcXVlc3QuZ2V0KFxuICAgICAgICAgICAgYCR7Y29uZmlnLmJhc2VVcmx9L2FwaS9jZXAvJHtjZXB9YCxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB0b2tlbilcbiAgICAgICAgcmV0dXJuIGRhdGFcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coZXJyb3IucmVzcG9uc2UuZGF0YSlcblxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn0iLCJpbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vY29uZmlnXCJcbmltcG9ydCBodHRwUmVxdWVzdCBmcm9tIFwiLi4vLi4vdXRpbHMvcmVxdWVzdFwiXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCB7IG5vdGlmeSwgdXNlSW5wdXQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uXCJcbmltcG9ydCB7IFJpTWFzdGVyY2FyZEZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvcmlcIlxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5cbmV4cG9ydCBjb25zdCBjcmVhdGVGaWxlID0gYXN5bmMgKGZvcm1EYXRhKSA9PiB7XG5cbiAgICB0cnkge1xuXG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICAgICAgY29uc3QgdG9rZW4gPSAnQmVhcmVyICcgKyBzZXNzaW9uLmFjY2Vzc190b2tlblxuXG4gICAgICAgIFxuXG4gICAgICAgIGxldCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnbXVsdGlwYXJ0L2Zvcm0tZGF0YScsXG4gICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICdlbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9XG5cblxuICAgICAgICBPYmplY3QuYXNzaWduKGRlZmF1bHRPcHRpb25zLmhlYWRlcnMsIHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICB9KVxuXG5cbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgYXhpb3MucG9zdChgJHtjb25maWcuYmFzZVVybH0vYXBpL2FycXVpdm9zYCwgZm9ybURhdGEsIHsgLi4uZGVmYXVsdE9wdGlvbnMgfSlcbiAgICAgICAgY29uc29sZS5sb2coJ3JlcycsIHJlcy5kYXRhKTtcbiAgICAgICAgXG4gICAgICAgIC8vZGVidWdnZXJcbiAgICAgICAgcmV0dXJuIHJlcyAmJiByZXMuZGF0YSA/IHJlcy5kYXRhIDogcmVzXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvci5yZXNwb25zZSlcbiAgICAgICAgLy8gbm90aWZ5KFwiZXJyb3JcIiwgZXJyb3IucmVzcG9uc2UgPyBlcnJvci5yZXNwb25zZS5kYXRhIDogJycpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufSIsIlxuaW1wb3J0IGh0dHBSZXF1ZXN0IGZyb20gXCIuLi8uLi8uLi91dGlscy9yZXF1ZXN0XCJcbmltcG9ydCB7IGdldFNlc3Npb24gfSBmcm9tICduZXh0LWF1dGgvY2xpZW50J1xuaW1wb3J0IHsgbm90aWZ5LCB1c2VJbnB1dCB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9jb21tb25cIlxuaW1wb3J0IHsgUmlNYXN0ZXJjYXJkRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9yaVwiXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiLi4vLi4vLi4vY29uZmlnXCJcblxuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2FyID0gYXN5bmMgKG5ld0RhdGEpID0+IHtcbiAgXG4gICAgdHJ5IHtcblxuICAgICAgICBjb25zdCBlbmRlcmVjb19yZXRpcmFkYV9wcmluY2lwYWwgPSB7XG4gICAgICAgICAgICBcImxvZ3JhZG91cm9cIjogbmV3RGF0YS5ydWFDYXIsXG4gICAgICAgICAgICBcImNlcFwiOiBuZXdEYXRhLmNlcENhcixcbiAgICAgICAgICAgIFwibnVtZXJvXCI6IG5ld0RhdGEubnVtZXJvQ2FyLFxuICAgICAgICAgICAgXCJjb21wbGVtZW50b1wiOiBuZXdEYXRhLmNvbXBsZW1lbnRvQ2FyLFxuICAgICAgICAgICAgXCJiYWlycm9cIjogbmV3RGF0YS5iYWlycm9DYXIsXG4gICAgICAgICAgICBcImNpZGFkZV9pZFwiOiBuZXdEYXRhLmNpZGFkZUlkQ2FyXG4gICAgICAgIH1cbiAgICAgICAgbGV0IGFycXVpdm9zID0gW11cbiAgICAgICAgaWYgKG5ld0RhdGEuZnJvbnRhbElkKSB7XG4gICAgICAgICAgICBhcnF1aXZvcy5wdXNoKHsgYXJxdWl2b19pZDogbmV3RGF0YS5mcm9udGFsSWQsIGNhcnJvX2FycXVpdm9fdGlwb19pZDogMSwgcG9zaXRpb246IDEgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdEYXRhLmxhdGVyYWxEaXJlaXRhSWQpIHtcbiAgICAgICAgICAgIGFycXVpdm9zLnB1c2goeyBhcnF1aXZvX2lkOiBuZXdEYXRhLmxhdGVyYWxEaXJlaXRhSWQsIGNhcnJvX2FycXVpdm9fdGlwb19pZDogMSwgcG9zaXRpb246IDIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChuZXdEYXRhLmxhdGVyYWxFc3F1ZXJkYUlkKSB7XG4gICAgICAgICAgICBhcnF1aXZvcy5wdXNoKHsgYXJxdWl2b19pZDogbmV3RGF0YS5sYXRlcmFsRXNxdWVyZGFJZCwgY2Fycm9fYXJxdWl2b190aXBvX2lkOiAxLCBwb3NpdGlvbjogMyB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0RhdGEuZnVuZG9JZCkge1xuICAgICAgICAgICAgYXJxdWl2b3MucHVzaCh7IGFycXVpdm9faWQ6IG5ld0RhdGEuZnVuZG9JZCwgY2Fycm9fYXJxdWl2b190aXBvX2lkOiAxLCBwb3NpdGlvbjogNCB9KVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG5ld0RhdGEucGFpbmVsSW50ZXJub0lkKSB7XG4gICAgICAgICAgICBhcnF1aXZvcy5wdXNoKHsgYXJxdWl2b19pZDogbmV3RGF0YS5wYWluZWxJbnRlcm5vSWQsIGNhcnJvX2FycXVpdm9fdGlwb19pZDogMSwgcG9zaXRpb246IDUgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1vZGVsID0ge1xuICAgICAgICAgICAgZGVzY3JpcHRpb246IG5ld0RhdGEubW9kZWxvLFxuICAgICAgICAgICAgYnJhbmQ6IHtcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogbmV3RGF0YS5tYXJjYVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYm9keSA9IHtcbiAgICAgICAgICAgIGFubzogbmV3RGF0YS5hbm9DYXIsXG4gICAgICAgICAgICBwbGFjYTogbmV3RGF0YS5wbGFjYUNhcixcbiAgICAgICAgICAgIGVuZGVyZWNvX3JldGlyYWRhX3ByaW5jaXBhbDogZW5kZXJlY29fcmV0aXJhZGFfcHJpbmNpcGFsLFxuICAgICAgICAgICAgbW9kZWw6IG1vZGVsLFxuICAgICAgICAgICAgYXJxdWl2b3NcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbigpXG4gICAgICAgIGNvbnN0IHRva2VuID0gJ0JlYXJlciAnICsgc2Vzc2lvbi5hY2Nlc3NfdG9rZW5cblxuICAgICAgIFxuICAgICAgICBjb25zb2xlLmxvZyhcImJvZHkgPVwiLCBib2R5KVxuXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHBSZXF1ZXN0LnBvc3QoXG4gICAgICAgICAgICBgJHtjb25maWcuYmFzZVVybH0vYXBpL3Byb3ByaWV0YXJpby9jYXJyb3NgLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHRva2VuLFxuICAgICAgICAgICAgYm9keSlcblxuXG4gICAgICAgIHJldHVybiByZXMgJiYgcmVzLmRhdGEgPyByZXMuZGF0YSA6IHJlc1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yJywgZXJyb3IucmVzcG9uc2UpO1xuXG4gICAgICAgIC8vIG5vdGlmeShcImVycm9yXCIsIGVycm9yLnJlc3BvbnNlID8gZXJyb3IucmVzcG9uc2UuZGF0YSA6ICcnKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn0iLCJpbXBvcnQge1xuICAgIE9XTkVSX1JFQ09WRVJfT1dORVJfUkVRVUVTVCxcbiAgICBPV05FUl9SRUNPVkVSX09XTkVSX0ZBSUwsXG4gICAgT1dORVJfUkVDT1ZFUl9PV05FUl9TVUNDRVNTXG59IGZyb20gXCIuLi8uLi9jb25zdGFudHMvb3duZXJcIlxuaW1wb3J0IHsgY29uZmlnIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiXG5pbXBvcnQgeyBub3RpZnksIHVzZUlucHV0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vblwiXG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uLy4uL3V0aWxzL3JlcXVlc3RcIlxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5cbmV4cG9ydCBjb25zdCByZWNvdmVyT3duZXIgPSBhc3luYyAocXVlcnlQYXJhbXNPYmosIGNhbGxiYWNrKSA9PiB7XG5cblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXNzaW9uKClcbiAgICAgICAgLy9jb25zb2xlLmxvZyhzZXNzaW9uKVxuICAgICAgICBjb25zdCB0b2tlbiA9ICdCZWFyZXIgJyArIHNlc3Npb24uYWNjZXNzX3Rva2VuXG4gICAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgaHR0cFJlcXVlc3QuZ2V0KFxuICAgICAgICAgICAgYCR7Y29uZmlnLmJhc2VVcmx9L2FwaS9wcm9wcmlldGFyaW9gLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIHRva2VuKVxuICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIHJldHVybiBkYXRhXG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjYWxsYmFjaygpXG4gICAgICAgIC8vIG5vdGlmeShcImVycm9yXCIsICBlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhLm1lc3NhZ2UpXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxufSIsImltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCIuLi8uLi9jb25maWdcIlxuXG5pbXBvcnQgaHR0cFJlcXVlc3QgZnJvbSBcIi4uLy4uL3V0aWxzL3JlcXVlc3RcIlxuaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5pbXBvcnQgeyBub3RpZnksIHVzZUlucHV0IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vblwiXG5cblxuZXhwb3J0IGNvbnN0IHVwZGF0ZU93bmVyID0gYXN5bmMgKG5ld0RhdGEsIG9iaikgPT4ge1xuXG4gICAgdHJ5IHtcblxuICAgICAgICBjb25zdCBwZXNzb2FfZmlzaWNhID0geyAuLi5vYmoucGVzc29hX2Zpc2ljYSwgY3BmOiBuZXdEYXRhLmNwZiwgbm9tZTogbmV3RGF0YS5ub21lIH1cbiAgICAgICAgY29uc3QgZW5kZXJlY28gPSBbe1xuICAgICAgICAgICAgXCJsYXRpdHVkZVwiOiBvYmoubGF0aXR1ZGUsXG4gICAgICAgICAgICBcImxvbmdpdHVkZVwiOiBvYmoubG9uZ2l0dWRlLFxuICAgICAgICAgICAgXCJsb2dyYWRvdXJvXCI6IG5ld0RhdGEucnVhLFxuICAgICAgICAgICAgXCJjZXBcIjogbmV3RGF0YS5jZXAsXG4gICAgICAgICAgICBcIm51bWVyb1wiOiBuZXdEYXRhLm51bWVybyxcbiAgICAgICAgICAgIFwiY29tcGxlbWVudG9cIjogbmV3RGF0YS5jb21wbGVtZW50byxcbiAgICAgICAgICAgIFwiYmFpcnJvXCI6IG5ld0RhdGEuYmFpcnJvLFxuICAgICAgICAgICAgXCJjaWRhZGVfaWRcIjogbmV3RGF0YS5jaWRhZGVJZFxuICAgICAgICB9XVxuICAgICAgICBsZXQgcGVzc29hX2FycXVpdm9zID0gW11cblxuICAgICAgICBpZiAob2JqLnBlc3NvYV9hcnF1aXZvcykge1xuICAgICAgICAgICAgcGVzc29hX2FycXVpdm9zID0gWy4uLm9iai5wZXNzb2FfYXJxdWl2b3NdXG4gICAgICAgIH1cblxuICAgICAgICBpZiAobmV3RGF0YS5jbmhJZCkge1xuICAgICAgICAgICAgcGVzc29hX2FycXVpdm9zLnB1c2goeyBhcnF1aXZvX2lkOiBuZXdEYXRhLmNuaElkLCBwZXNzb2FfYXJxdWl2b190aXBvX2lkOiAxIH0pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0RhdGEuY29tcHJvdmFudGVJZCkge1xuICAgICAgICAgICAgcGVzc29hX2FycXVpdm9zLnB1c2goeyBhcnF1aXZvX2lkOiBuZXdEYXRhLmNvbXByb3ZhbnRlSWQsIHBlc3NvYV9hcnF1aXZvX3RpcG9faWQ6IDIgfSlcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBib2R5ID0ge1xuICAgICAgICAgICAgdGVsZWZvbmU6IG9iai50ZWxlZm9uZSxcbiAgICAgICAgICAgIGNlbHVsYXI6IG5ld0RhdGEuY2VsdWxhcixcbiAgICAgICAgICAgIGVtYWlsOiBuZXdEYXRhLmVtYWlsLFxuICAgICAgICAgICAgcGVzc29hX3RpcG9faWQ6IG9iai5wZXNzb2FfdGlwb19pZCxcbiAgICAgICAgICAgIHBlc3NvYV9jYWRhc3Ryb19pZDogb2JqLnBlc3NvYV9jYWRhc3Ryb19pZCxcbiAgICAgICAgICAgIHBlc3NvYV9zdGF0dXNfaWQ6IG9iai5wZXNzb2Ffc3RhdHVzX2lkLFxuICAgICAgICAgICAgcmVjZWJlX3ZpYV9hZG1pbmlzdHJhZG9yOiBvYmoucmVjZWJlX3ZpYV9hZG1pbmlzdHJhZG9yLFxuICAgICAgICAgICAgcGVzc29hX2Zpc2ljYTogcGVzc29hX2Zpc2ljYSxcbiAgICAgICAgICAgIHBlc3NvYV9qdXJpZGljYTogb2JqLnBlc3NvYV9qdXJpZGljYSxcbiAgICAgICAgICAgIGVuZGVyZWNvOiBbZW5kZXJlY29dLFxuICAgICAgICAgICAgY2Fycm9zOiBvYmouY2Fycm9zLFxuICAgICAgICAgICAgcGVzc29hX2FycXVpdm9zOiBvYmoucGVzc29hX2FycXVpdm9zLFxuICAgICAgICAgICAgY29udGFfYmFuY2FyaWE6IG9iai5jb250YV9iYW5jYXJpYSxcbiAgICAgICAgICAgIC4uLihwZXNzb2FfYXJxdWl2b3MubGVuZ3RoICYmIHtwZXNzb2FfYXJxdWl2b3M6IHBlc3NvYV9hcnF1aXZvc30pLFxuICAgICAgICAgICAgLi4uKG5ld0RhdGEucHJlZmlsSWQgJiYgeyBmb3RvX3BlcmZpbF9hcnF1aXZvX2lkOiBuZXdEYXRhLnByZWZpbElkIH0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgICAgICBjb25zdCB0b2tlbiA9ICdCZWFyZXIgJyArIHNlc3Npb24uYWNjZXNzX3Rva2VuXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJib2R5ID1cIiwgYm9keSlcblxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBodHRwUmVxdWVzdC5wYXRjaChcbiAgICAgICAgICAgIGAke2NvbmZpZy5iYXNlVXJsfS9hcGkvcHJvcHJpZXRhcmlvYCxcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICB0b2tlbixcbiAgICAgICAgICAgIGJvZHkpXG5cblxuICAgICAgICByZXR1cm4gcmVzICYmIHJlcy5kYXRhID8gcmVzLmRhdGEgOiByZXNcblxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAvLyBub3RpZnkoXCJlcnJvclwiLCBlcnJvci5yZXNwb25zZSA/IGVycm9yLnJlc3BvbnNlLmRhdGEgOiAnJylcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59IiwiaW1wb3J0IHsgQ29udGFpbmVyLCBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuaW1wb3J0IHsgRmFGYWNlYm9va0YgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IEZpSW5zdGFncmFtIH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5pbXBvcnQgeyBBaU91dGxpbmVUd2l0dGVyIH0gZnJvbSBcInJlYWN0LWljb25zL2FpXCI7XG5cblxuY29uc3QgUHVibGljRm9vdGVyID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVibGljLWZvb3RlciBcIj5cbiAgICAgICAgICAgIDxDb250YWluZXIgPlxuICAgICAgICAgICAgICAgIDxSb3cgY2xhc3NOYW1lPVwianVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjRcIiBjbGFzc05hbWU9XCJwdWJsaWMtZm9vdGVyX19sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwdWJsaWMtZm9vdGVyX190aXRsZVwiPlhEPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHVibGljLWZvb3Rlcl9fdGFnXCI+wqkgMjAyMSBHQVYgLSBUb2RvcyBvcyBkaXJlaXRvcyByZXNlcnZhZG9zLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgICAgIDxDb2wgbGc9XCIyXCIgY2xhc3NOYW1lPVwicHVibGljLWZvb3Rlcl9fbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5Tb2JyZTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPkNvbnRhdG88L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5UZXJtbyBkZSBVc288L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvQ29sPlxuICAgICAgICAgICAgICAgICAgICA8Q29sIGxnPVwiMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWJsaWMtZm9vdGVyX19zb2NpYWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFGYWNlYm9va0YgY2xhc3NOYW1lPVwicHVibGljLWZvb3Rlcl9fc29jaWFsLWljb25cIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPkZhY2Vib29rPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1YmxpYy1mb290ZXJfX3NvY2lhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGaUluc3RhZ3JhbSBjbGFzc05hbWU9XCJwdWJsaWMtZm9vdGVyX19zb2NpYWwtaWNvblwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+SW5zdGFncmFtPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1YmxpYy1mb290ZXJfX3NvY2lhbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVUd2l0dGVyIGNsYXNzTmFtZT1cInB1YmxpYy1mb290ZXJfX3NvY2lhbC1pY29uIG1yLTJcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlR3aXR0ZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICA8L0NvbD5cbiAgICAgICAgICAgICAgICAgICAgPENvbCBsZz1cIjRcIiBjbGFzc05hbWU9XCJwdWJsaWMtZm9vdGVyX19yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TdWJzY3JpYmUgdG8gb3VyIG5ld3NsZXR0ZXI8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCIgYXJpYS1sYWJlbD1cIlJlY2lwaWVudCdzIHVzZXJuYW1lXCIgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMlwiPjwvaW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+b2s8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9Db2w+XG4gICAgICAgICAgICAgICAgPC9Sb3c+XG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQdWJsaWNGb290ZXJcblxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHsgTmF2LCBOYXZiYXIsIERyb3Bkb3duIH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgeyBIaU1lbnVBbHQyIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCJcbmltcG9ydCB7IFJpQ2FyTGluZSwgUmlDb250YWN0c0Jvb2tMaW5lIH0gZnJvbSBcInJlYWN0LWljb25zL3JpXCJcbmltcG9ydCB7IEZhUmVnQ29tbWVudERvdHMgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIlxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIlxuaW1wb3J0IHsgc2lnbk91dCwgZ2V0U2Vzc2lvbiB9IGZyb20gJ25leHQtYXV0aC9jbGllbnQnXG5cblxuXG5jb25zdCBEYXNoYm9hcmRIZWFkZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBvcGVuTWVudSA9ICgpID0+IHtcbiAgICAgICAgc2V0SXNPcGVuKHRydWUpXG4gICAgfVxuXG4gICAgY29uc3QgY2xvc2VNZW51ID0gKCkgPT4ge1xuICAgICAgICBzZXRJc09wZW4oZmFsc2UpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxOYXZiYXIgY29sbGFwc2VPblNlbGVjdCBleHBhbmQ9XCJsZ1wiIGNsYXNzTmFtZT1cInctMTAwIGJvcmRlci1ib3R0b20gbWItMyBweC1tZC0zIHB4LTAgcHktMiBkYXNoYm9hcmQtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgey8qIDxOYXZiYXIuVG9nZ2xlIGFyaWEtY29udHJvbHM9XCJyZXNwb25zaXZlLW5hdmJhci1uYXZcIiAvPiAqL31cbiAgICAgICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlIGlkPVwicmVzcG9uc2l2ZS1uYXZiYXItbmF2XCIgY2xhc3NOYW1lPVwiZC1mbGV4IGZsZXgtcm93IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwiYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SGlNZW51QWx0MiBzaXplPVwiNzBcIiBvbkNsaWNrPXtvcGVuTWVudX0gY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBjb2xvcj1cIiMwMDQ0YzhcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1sZy1hdXRvIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj0nLyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIHNyYz1cIi9pbWFnZXMvbG9nby5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L05hdj5cbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtbC1sZy1hdXRvIGFsaWduLWl0ZW1zLWNlbnRlciBjdXN0b20tZHJvcGRvd25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93biBkcm9wPVwiZG93blwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5Ub2dnbGUgaWQ9XCJkcm9wZG93bi1iYXNpY1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImhlYWRlci1sb2dvXCIgc3JjPVwiL2ltYWdlcy9pY29uL3VzZXItaWNvbi5wbmdcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd24uVG9nZ2xlPlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duLk1lbnU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIGhyZWY9XCIvcGVyZmlsLWZvcm5lY2Vkb3IvMTEyNFwiPlZlciBwZXJmaWw8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bi5JdGVtIG9uU2VsZWN0PXsoKSA9PiBzaWduT3V0KCl9PlNhaXI8L0Ryb3Bkb3duLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bi5NZW51PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cbiAgICAgICAgICAgICAgICAgICAgPC9OYXY+XG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuQ29sbGFwc2U+XG4gICAgICAgICAgICA8L05hdmJhcj5cblxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZsb2F0aW5nLXdyYXBwZXIgJHtpc09wZW4gPyAnZmxvYXRpbmctd3JhcHBlci1vcGVuJyA6ICcnfWB9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTMgbWItNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPEhpTWVudUFsdDIgb25DbGljaz17Y2xvc2VNZW51fSBzaXplPVwiNzBcIiBjb2xvcj1cIiNmZmZcIiBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlclwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWV1cy12ZWljdWxvc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHNpbmdsZS1mbG9hdGluZy1pdGVtIG1iLTUgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTAgdGV4dC13aGl0ZSBoMlwiPk1ldXMgYWx1Z3XDqWlzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSaUNhckxpbmUgc2l6ZT1cIjQwXCIgY29sb3I9XCIjZmZmXCIgY2xhc3NOYW1lPVwibWwtNVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbGlzdGFyLWNhcnJvcy1kaXNwb25pdmVpcy1mb3JuZWNlZG9yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gc2luZ2xlLWZsb2F0aW5nLWl0ZW0gbWItNSBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInAtMCB0ZXh0LXdoaXRlIGgyXCI+Q29udmVyc2FzPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYVJlZ0NvbW1lbnREb3RzIHNpemU9XCI0MFwiIGNvbG9yPVwiI2ZmZlwiIGNsYXNzTmFtZT1cIm1sLTVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cblxuXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVnaXN0cmFyLWZvcm5lY2Vkb3ItZm9ybVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIHNpbmdsZS1mbG9hdGluZy1pdGVtIG1iLTUgY3Vyc29yLXBvaW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJwLTAgdGV4dC13aGl0ZSBoMlwiPk1ldXMgZGFkb3M8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJpQ29udGFjdHNCb29rTGluZSBzaXplPVwiNDBcIiBjb2xvcj1cIiNmZmZcIiBjbGFzc05hbWU9XCJtbC01XCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAge2lzT3BlbiA/IDxkaXYgb25DbGljaz17Y2xvc2VNZW51fSBjbGFzc05hbWU9XCJiYWNrLXNoZWRcIj48L2Rpdj4gOiBudWxsfVxuICAgICAgICA8Lz5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZEhlYWRlclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjdHgpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgZ2V0U2Vzc2lvbihjdHgpXG4gICAgY29uc29sZS5sb2coc2Vzc2lvbilcbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgICAgY3R4LnJlcy53cml0ZUhlYWQoMzAyLCB7IExvY2F0aW9uOiAnL2xvZ2luJyB9KVxuICAgICAgICBjdHgucmVzLmVuZCgpXG4gICAgICAgIHJldHVybiB7fVxuICAgIH1cbn0iLCJpbXBvcnQgeyBDb2wsIFJvdyB9IGZyb20gXCJyZWFjdC1ib290c3RyYXBcIlxuaW1wb3J0IHsgVWlCdXR0b24gfSBmcm9tIFwiLi4vVUkvQnV0dG9uXCJcbmltcG9ydCB7IFdpemFyZElucHV0IH0gZnJvbSBcIi4uL1VJL1RleHRJbnB1dFwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIlxuXG5cbmNvbnN0IFBlcnNvbmFsSW5mbyA9ICh7IGFjdGl2ZVN0ZXAsIHBlcnNvbmFsTmV4dENsaWNrLCBvd25lciwgaGFuZGxlT3duZXIsIHByb2Nlc3NpbmcgfSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIGxnPXs0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1yLWxnLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJOb21lOlwiIG5hbWU9XCJub21lXCIgdmFsdWU9e293bmVyLm5vbWV9IGhhbmRsZU93bmVyPXtoYW5kbGVPd25lcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIkVtYWlsOlwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtvd25lci5lbWFpbH0gaGFuZGxlT3duZXI9e2hhbmRsZU93bmVyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiQ2VsdWxhcjpcIiBuYW1lPVwiY2VsdWxhclwiIHZhbHVlPXtvd25lci5jZWx1bGFyfSBoYW5kbGVPd25lcj17aGFuZGxlT3duZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJDUEYvQ05QSjpcIiBuYW1lPVwiY3BmXCIgdmFsdWU9e293bmVyLmNwZn0gaGFuZGxlT3duZXI9e2hhbmRsZU93bmVyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgbGc9ezR9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtbGctM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIkNFUDpcIiBuYW1lPVwiY2VwXCIgdmFsdWU9e293bmVyLmNlcH0gaGFuZGxlT3duZXI9e2hhbmRsZU93bmVyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiRXN0YWRvOlwiIG5hbWU9XCJlc3RhZG9cIiB2YWx1ZT17b3duZXIuZXN0YWRvfSBoYW5kbGVPd25lcj17aGFuZGxlT3duZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJDaWRhZGU6XCIgbmFtZT1cImNpZGFkZVwiIHZhbHVlPXtvd25lci5jaWRhZGV9IGhhbmRsZU93bmVyPXtoYW5kbGVPd25lcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIkJhaXJybzpcIiBuYW1lPVwiYmFpcnJvXCIgdmFsdWU9e293bmVyLmJhaXJyb30gaGFuZGxlT3duZXI9e2hhbmRsZU93bmVyfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiUnVhOlwiIG5hbWU9XCJydWFcIiB2YWx1ZT17b3duZXIucnVhfSBoYW5kbGVPd25lcj17aGFuZGxlT3duZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG5cblxuICAgICAgICA8Q29sIGxnPXs0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWxnLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJOw7ptZXJvOlwiIG5hbWU9XCJudW1lcm9cIiB2YWx1ZT17b3duZXIubnVtZXJvfSBoYW5kbGVPd25lcj17aGFuZGxlT3duZXJ9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJDb21wbGVtZW50bzpcIiBuYW1lPVwiY29tcGxlbWVudG9cIiB2YWx1ZT17b3duZXIuY29tcGxlbWVudG99IGhhbmRsZU93bmVyPXtoYW5kbGVPd25lcn0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWxnLTUgZC1zbS1mbGV4IGQtbGctYmxvY2sgXCI+XG4gICAgICAgICAgICAgIHthY3RpdmVTdGVwID09PSAwID8gKFxuICAgICAgICAgICAgICAgIDxVaUJ1dHRvblxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDYW5jZWxhclwiXG4gICAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwIG1iLWxnLTQgbWItc20tMCBtci1zbS0zIG1yLWxnLTAgbmV4dC1idG4gcGVyc29uYWwtaW5mby1yLWJ0blwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxVaUJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIlZvbHRhclwiXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBtYi00IG5leHQtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goXCIvXCIpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8VWlCdXR0b25cbiAgICAgICAgICAgICAgICB0aXRsZT1cIlByw7N4aW1vXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBuZXh0LWJ0biBtdC1zbS0wIG10LTNcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3BlcnNvbmFsTmV4dENsaWNrfVxuICAgICAgICAgICAgICAgIGxvYWRpbmc9e3Byb2Nlc3Npbmd9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQZXJzb25hbEluZm9cbiIsImltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgeyBVaUJ1dHRvbiB9IGZyb20gXCIuLi9VSS9CdXR0b25cIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCBVcGxvYWRQaG90byBmcm9tIFwiLi4vVUkvUGhvdG9cIlxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgY3JlYXRlRmFjdG9yeSB9IGZyb20gXCJyZWFjdFwiXG5pbXBvcnQgeyBjcmVhdGVGaWxlIH0gZnJvbSAnLi4vLi4vYXBpL2ZpbGVzL2NyZWF0ZUZpbGVzJ1xuaW1wb3J0IHsgdXBkYXRlT3duZXIgfSBmcm9tICcuLi8uLi9hcGkvb3duZXIvdXBkYXRlT3duZXInXG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tIFwiLi4vLi4vdXRpbHMvY29tbW9uXCJcblxuXG5jb25zdCBVcGxvYWRQaG90b3MgPSAoeyBhY3RpdmVTdGVwLCB1cGxvYWRCYWNrLCBwZXJzb25hbE5leHRDbGljaywgb3duZXIsIHByZXZPd25lciB9KSA9PiB7XG4gIC8vIGNvbnNvbGUubG9nKG93bmVyKVxuXG4gIGNvbnN0IFtwcm9jZXNzaW5nLCBzZXRQcm9jZXNzaW5nXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjbmhJZCwgc2V0Q25oSWRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW2NvbXByb3ZhbnRlSWQsIHNldENvbXByb3ZhbnRlSWRdID0gdXNlU3RhdGUobnVsbClcbiAgY29uc3QgW3ByZWZpbElkLCBzZXRQcmVmaWxJZF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IFtjbmhVcmwsIHNldENuaFVybF0gPSB1c2VTdGF0ZShudWxsKVxuICBjb25zdCBbY29tcHJvdmFudGVVcmwsIHNldENvbXByb3ZhbnRlVXJsXSA9IHVzZVN0YXRlKG51bGwpXG4gIGNvbnN0IFtwcmVmaWxVcmwsIHNldFByZWZpbFVybF0gPSB1c2VTdGF0ZShudWxsKVxuXG5cblxuICBjb25zdCBvbkNuaENoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIC8vIFVwZGF0ZSB0aGUgc3RhdGUgXG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNldENuaFVybChVUkwuY3JlYXRlT2JqZWN0VVJMKHZhbHVlKSlcbiAgICB9XG5cbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgXCJmaWxlXCIsXG4gICAgICB2YWx1ZVxuICAgIClcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjcmVhdGVGaWxlKGZvcm1EYXRhKVxuXG4gICAgaWYgKHJlcykge1xuICAgICAgc2V0Q25oSWQocmVzLmlkKVxuXG4gICAgfVxuXG4gIH1cblxuICBjb25zdCBvbkNvbUNoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRDb21wcm92YW50ZVVybChVUkwuY3JlYXRlT2JqZWN0VVJMKHZhbHVlKSlcbiAgICB9XG5cbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgXCJmaWxlXCIsXG4gICAgICB2YWx1ZVxuICAgIClcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjcmVhdGVGaWxlKGZvcm1EYXRhKVxuXG4gICAgaWYgKHJlcykge1xuICAgICAgc2V0Q29tcHJvdmFudGVJZChyZXMuaWQpXG5cbiAgICB9XG4gIH1cblxuICBjb25zdCBvblByZWZpbENoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRQcmVmaWxVcmwoVVJMLmNyZWF0ZU9iamVjdFVSTCh2YWx1ZSkpXG4gICAgfVxuXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgIFwiZmlsZVwiLFxuICAgICAgdmFsdWVcbiAgICApXG4gICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlRmlsZShmb3JtRGF0YSlcblxuICAgIGlmIChyZXMpIHtcbiAgICAgIHNldFByZWZpbElkKHJlcy5pZClcblxuICAgIH1cbiAgfVxuXG5cblxuICBjb25zdCB1cGxvYWRBbmROZXh0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFByb2Nlc3NpbmcodHJ1ZSlcbiAgICAvLyBDcmVhdGUgYW4gb2JqZWN0IG9mIGZvcm1EYXRhIFxuXG4gICAgLy9kZWJ1Z2dlclxuICAgIC8vY29uc29sZS5sb2coXCItLS0tLS0tLS0tLS0tXCIsIGNuaElkKVxuICAgIGF3YWl0IHVwZGF0ZU93bmVyKHsgLi4ub3duZXIsIGNuaElkLCBjb21wcm92YW50ZUlkLCBwcmVmaWxJZCB9LCBwcmV2T3duZXIpXG5cbiAgICBub3RpZnkoJ3N1Y2Nlc3MnLCAnVXNlciBkYXRhIHVwZGF0ZWQnKVxuXG4gICAgc2V0UHJvY2Vzc2luZyhmYWxzZSlcbiAgICBwZXJzb25hbE5leHRDbGljaygpXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gY2xhc3NOYW1lPVwibWItbGctMCBtYi00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1sZy0zXCI+XG4gICAgICAgICAgICA8VXBsb2FkUGhvdG8gdGV4dD1cIkNOSC9SRzpcIiBuYW1lPVwiY25oXCIgc3JjPXtjbmhVcmx9IGlkPVwiY25oXCIgb25GaWxlQ2hhbmdlPXtvbkNuaENoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPENvbCBsZz17M30gbWQ9ezZ9IGNsYXNzTmFtZT1cIm1iLWxnLTAgbWItNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtbGctM1wiPlxuICAgICAgICAgICAgPFVwbG9hZFBob3RvIHRleHQ9XCJDb21wcm92YW50ZSBkZSByZXNpZMOqbmNpYVwiIHNyYz17Y29tcHJvdmFudGVVcmx9IGlkPVwiY29tcHJvdmFudGVcIiBuYW1lPVwiY29tcHJvdmFudGVcIiBvbkZpbGVDaGFuZ2U9e29uQ29tQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gY2xhc3NOYW1lPVwibWItbGctMCBtYi00XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1sZy0zXCI+XG4gICAgICAgICAgICA8VXBsb2FkUGhvdG8gdGV4dD1cIkZvdG8gZGUgcGVyZmlsXCIgbmFtZT1cInByZWZpbFwiIHNyYz17cHJlZmlsVXJsfSBpZD1cInByZWZpbFwiIG9uRmlsZUNoYW5nZT17b25QcmVmaWxDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgbGc9ezN9IG1kPXs2fSBjbGFzc05hbWU9XCJtYi1sZy0wIG1iLTQgdXBsb2FkLXBob3Rvcy10b3BcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWxnLTNcIj5cbiAgICAgICAgICAgIHthY3RpdmVTdGVwID09PSAwID8gKFxuICAgICAgICAgICAgICA8VWlCdXR0b25cbiAgICAgICAgICAgICAgICB0aXRsZT1cIkNhbmNlbGFyXCJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBtYi00IG5leHQtYnRuXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaChcIi9cIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgIDxVaUJ1dHRvblxuICAgICAgICAgICAgICAgICAgdGl0bGU9XCJWb2x0YXJcIlxuICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTEwMCBtYi00IG5leHQtYnRuXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3VwbG9hZEJhY2t9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxVaUJ1dHRvblxuICAgICAgICAgICAgICB0aXRsZT1cIlByw7N4aW1vXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgbmV4dC1idG5cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt1cGxvYWRBbmROZXh0fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG4gICAgICA8L1Jvdz5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBVcGxvYWRQaG90b3NcbiIsImltcG9ydCB7IENvbCwgUm93IH0gZnJvbSBcInJlYWN0LWJvb3RzdHJhcFwiXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIi4uL1VJL0J1dHRvblwiXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBVcGxvYWRQaG90byBmcm9tIFwiLi4vVUkvUGhvdG9cIlxuXG5jb25zdCBVcGxvYWRWZWhpY2xlUGhvdG9zID0gKHtcbiAgbG9hZGluZ0Zyb250YWwsIGZyb250YWxVcmwsIG9uRnJvbnRhbENoYW5nZSxcbiAgbG9hZGluZ0xhdGVyYWxEaXJlaXRhLCBsYXRlcmFsRGlyZWl0YVVybCwgb25MYXRlcmFsRGlyZWl0YUNoYW5nZSxcbiAgbG9hZGluZ0xhdGVyYWxFc3F1ZXJkYSwgbGF0ZXJhbEVzcXVlcmRhVXJsLCBvbkxhdGVyYWxFc3F1ZXJkYUNoYW5nZSxcbiAgbG9hZGluZ0Z1bmRvLCBmdW5kb1VybCwgb25GdW5kb0NoYW5nZSxcbiAgbG9hZGluZ1BhaW5lbEludGVybm8sIHBhaW5lbEludGVybm9VcmwsIG9uUGFpbmVsSW50ZXJub0NoYW5nZSxcbiAgcHJvY2Vzc2luZywgYWN0aXZlU3RlcCwgdXBsb2FkQmFjaywgdXBsb2FkQ2FyRGV0YWlsc1xufSkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxSb3c+XG4gICAgICAgIDxDb2wgbGc9ezN9IG1kPXs2fSBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1sZy0zXCI+XG4gICAgICAgICAgICA8VXBsb2FkUGhvdG8gdGV4dD1cIkZyb250YWxcIiBuYW1lPVwiZnJvbnRhbFwiIGlkPVwiZnJvbnRhbFwiIGxvYWRpbmc9e2xvYWRpbmdGcm9udGFsfSBzcmM9e2Zyb250YWxVcmx9IG9uRmlsZUNoYW5nZT17b25Gcm9udGFsQ2hhbmdlfSAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIGxnPXszfSBtZD17Nn0gY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtbGctM1wiPlxuICAgICAgICAgICAgPFVwbG9hZFBob3RvIHRleHQ9XCJMYXRlcmFsIERpcmVpdGFcIiBuYW1lPVwibGF0ZXJhbERpcmVpdGFcIiBsb2FkaW5nPXtsb2FkaW5nTGF0ZXJhbERpcmVpdGF9IGlkPVwibGF0ZXJhbERpcmVpdGFcIiBzcmM9e2xhdGVyYWxEaXJlaXRhVXJsfSBvbkZpbGVDaGFuZ2U9e29uTGF0ZXJhbERpcmVpdGFDaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuXG4gICAgICAgIDxDb2wgbGc9ezN9IG1kPXs2fSBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1sZy0zXCI+XG4gICAgICAgICAgICA8VXBsb2FkUGhvdG8gdGV4dD1cIkxhdGVyYWwgRXNxdWVyZGFcIiBuYW1lPVwibGF0ZXJhbEVzcXVlcmRhXCIgbG9hZGluZz17bG9hZGluZ0xhdGVyYWxFc3F1ZXJkYX0gaWQ9XCJsYXRlcmFsRXNxdWVyZGFcIiBzcmM9e2xhdGVyYWxFc3F1ZXJkYVVybH0gb25GaWxlQ2hhbmdlPXtvbkxhdGVyYWxFc3F1ZXJkYUNoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgPENvbCBsZz17M30gbWQ9ezZ9IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWxnLTNcIj5cbiAgICAgICAgICAgIDxVcGxvYWRQaG90byB0ZXh0PVwiRnVuZG9cIiBuYW1lPVwiZnVuZG9cIiBpZD1cImZ1bmRvXCIgbG9hZGluZz17bG9hZGluZ0Z1bmRvfSBzcmM9e2Z1bmRvVXJsfSBvbkZpbGVDaGFuZ2U9e29uRnVuZG9DaGFuZ2V9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuXG5cbiAgICAgIDwvUm93PlxuXG4gICAgICA8Um93IGNsYXNzTmFtZT1cImp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgIDxDb2wgbGc9ezN9IG1kPXs2fSBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1sZy0zXCI+XG4gICAgICAgICAgICA8VXBsb2FkUGhvdG8gdGV4dD1cIlBhaW5lbCBJbnRlcm5vXCIgbmFtZT1cInBhaW5lbEludGVybm9cIiBpZD1cInBhaW5lbEludGVybm9cIiBsb2FkaW5nPXtsb2FkaW5nUGFpbmVsSW50ZXJub30gc3JjPXtwYWluZWxJbnRlcm5vVXJsfSBvbkZpbGVDaGFuZ2U9e29uUGFpbmVsSW50ZXJub0NoYW5nZX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+XG5cbiAgICAgICAgey8qIDxDb2wgbGc9ezN9IG1kPXs2fSBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1sZy0zXCI+XG4gICAgICAgICAgICA8VXBsb2FkUGhvdG8gdGV4dD1cIkFkaWNpb25hciArIEZvdG9zXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Db2w+ICovfVxuXG4gICAgICAgIDxDb2wgbGc9ezR9IGNsYXNzTmFtZT1cIm1iLTUgbXQtbGctNSBwdC1sZy01XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1sZy0zXCI+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGFjdGl2ZVN0ZXAgPT09IDAgP1xuICAgICAgICAgICAgICAgIDxVaUJ1dHRvbiB0aXRsZT1cIkNhbmNlbGFyXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cInctMTAwIG1iLTQgbmV4dC1idG5cIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfSAvPiA6XG4gICAgICAgICAgICAgICAgPFVpQnV0dG9uIHRpdGxlPVwiVm9sdGFyXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cInctMTAwIG1iLTQgbmV4dC1idG5cIiBvbkNsaWNrPXt1cGxvYWRCYWNrfSAvPlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgPFVpQnV0dG9uIHRpdGxlPVwiUHLDs3hpbW9cIiBjbGFzc05hbWU9XCJ3LTEwMCBuZXh0LWJ0blwiIGxvYWRpbmc9e3Byb2Nlc3Npbmd9IG9uQ2xpY2s9e3VwbG9hZENhckRldGFpbHN9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXBsb2FkVmVoaWNsZVBob3Rvc1xuIiwiaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcbmltcG9ydCB7IFVpQnV0dG9uIH0gZnJvbSBcIi4uL1VJL0J1dHRvblwiXG5pbXBvcnQgeyBXaXphcmRJbnB1dCB9IGZyb20gXCIuLi9VSS9UZXh0SW5wdXRcIlxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCB7IGdldENlcCB9IGZyb20gJy4uLy4uL2FwaS9kcml2ZXIvdXBkYXRlRHJpdmVyJ1xuaW1wb3J0IHsgY3JlYXRlQ2FyIH0gZnJvbSAnLi4vLi4vYXBpL293bmVyL2NhcnMvY3JlYXRlQ2FyJ1xuaW1wb3J0IHsgbm90aWZ5IH0gZnJvbSBcIi4uLy4uL3V0aWxzL2NvbW1vblwiXG5cblxuY29uc3QgVmVoaWNsZURldGFpbHMgPSAoe1xuICBtYXJjYSwgbW9kZWxvLCBhbm8sIHBsYWNhLCBjZXAsIGVzdGFkbywgY2lkYWRlLCBydWEsIHNlbWFuYSxcbiAgY2F1Y2FvLCBkaWFyaWEsIG51bWVybywgY29tcGxlbWVudG8sIGJhaXJybywgY2lkYWRlSWQsXG4gIGhhbmRsZUNhcklucHV0LCAgcHJvY2Vzc2luZyxcbiAgYWN0aXZlU3RlcCwgdmVoaWNsZU5leHRDbGljaywgdmVoaWNsZUJhY2tcbn0pID0+IHtcblxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8Um93PlxuICAgICAgICA8Q29sIGxnPXsxMn0gY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgaDVcIj5PbmRlIG8gbW90b3Jpc3RhIHZhaSByZXRpcmFyIG8gdmXDrWN1bG8/PC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgICA8Q29sIGxnPXs0fSBtZD17Nn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtci1sZy0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiTWFyY2E6XCIgbmFtZT1cIm1hcmNhXCIgdmFsdWU9e21hcmNhfSBoYW5kbGVPd25lcj17aGFuZGxlQ2FySW5wdXR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJNb2RlbG86XCIgbmFtZT1cIm1vZGVsb1wiIHZhbHVlPXttb2RlbG99IGhhbmRsZU93bmVyPXtoYW5kbGVDYXJJbnB1dH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIkFubzpcIiBuYW1lPVwiYW5vXCIgdmFsdWU9e2Fub30gaGFuZGxlT3duZXI9e2hhbmRsZUNhcklucHV0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiUGxhY2E6XCIgbmFtZT1cInBsYWNhXCIgdmFsdWU9e3BsYWNhfSBoYW5kbGVPd25lcj17aGFuZGxlQ2FySW5wdXR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJoMyBmb250LXdlaWdodC1ib2xkXCI+TW90b3Jpc3RhIHBvZGUgY29tcHJhciBhcMOzcyBvIGNvbnRyYXRvPzwvcD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjdXN0b20tcmFkaW9zIG10LTJcIj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ5ZXNcIiBuYW1lPVwiY29sb3JcIiB2YWx1ZT1cInllc1wiIGNoZWNrZWQgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwieWVzXCI+XG4gICAgICAgICAgICAgICAgICBTaW1cbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBpZD1cIm5vXCIgbmFtZT1cImNvbG9yXCIgdmFsdWU9XCJub1wiIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5vXCI+XG4gICAgICAgICAgICAgICAgICBOw6NvXG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIGxnPXs0fSBtZD17Nn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1sZy0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiQ0VQOlwiIG5hbWU9XCJjZXBcIiB2YWx1ZT17Y2VwfSBoYW5kbGVPd25lcj17aGFuZGxlQ2FySW5wdXR9IHJlcXVpcmVkIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJFc3RhZG86XCIgbmFtZT1cImVzdGFkb1wiIHZhbHVlPXtlc3RhZG99IGhhbmRsZU93bmVyPXtoYW5kbGVDYXJJbnB1dH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIkNpZGFkZTpcIiBuYW1lPVwiY2lkYWRlXCIgdmFsdWU9e2NpZGFkZX0gaGFuZGxlT3duZXI9e2hhbmRsZUNhcklucHV0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTVcIj5cbiAgICAgICAgICAgICAgPFdpemFyZElucHV0IGxhYmVsPVwiUnVhOlwiIG5hbWU9XCJydWFcIiB2YWx1ZT17cnVhfSBoYW5kbGVPd25lcj17aGFuZGxlQ2FySW5wdXR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJDb21wbGVtZW50bzpcIiBuYW1lPVwiY29tcGxlbWVudG9cIiB2YWx1ZT17Y29tcGxlbWVudG99IGhhbmRsZU93bmVyPXtoYW5kbGVDYXJJbnB1dH0gcmVxdWlyZWQgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbD5cblxuICAgICAgICA8Q29sIGxnPXs0fT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLWxnLTNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJEacOhcmlhOlwiIG5hbWU9XCJkaWFyaWFcIiB2YWx1ZT17ZGlhcmlhfSBoYW5kbGVPd25lcj17aGFuZGxlQ2FySW5wdXR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNVwiPlxuICAgICAgICAgICAgICA8V2l6YXJkSW5wdXQgbGFiZWw9XCJTZW1hbmE6XCIgbmFtZT1cInNlbWFuYVwiIHZhbHVlPXtzZW1hbmF9IGhhbmRsZU93bmVyPXtoYW5kbGVDYXJJbnB1dH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi01XCI+XG4gICAgICAgICAgICAgIDxXaXphcmRJbnB1dCBsYWJlbD1cIkNhdcOnw6NvOlwiIG5hbWU9XCJjYXVjYW9cIiB2YWx1ZT17Y2F1Y2FvfSBoYW5kbGVPd25lcj17aGFuZGxlQ2FySW5wdXR9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1sZy01XCI+XG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVTdGVwID09PSAwID9cbiAgICAgICAgICAgICAgICAgIDxVaUJ1dHRvbiB0aXRsZT1cIkNhbmNlbGFyXCIgdmFyaWFudD1cInNlY29uZGFyeVwiIGNsYXNzTmFtZT1cInctMTAwIG1iLTQgbmV4dC1idG5cIiBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnLycpfSAvPiA6XG4gICAgICAgICAgICAgICAgICA8VWlCdXR0b24gdGl0bGU9XCJWb2x0YXJcIiB2YXJpYW50PVwic2Vjb25kYXJ5XCIgY2xhc3NOYW1lPVwidy0xMDAgbWItNCBuZXh0LWJ0blwiIG9uQ2xpY2s9e3ZlaGljbGVCYWNrfSAvPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxVaUJ1dHRvbiB0aXRsZT1cIlByw7N4aW1vXCIgY2xhc3NOYW1lPVwidy0xMDAgbmV4dC1idG5cIiBvbkNsaWNrPXt2ZWhpY2xlTmV4dENsaWNrfSBsb2FkaW5nPXtwcm9jZXNzaW5nfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29sPlxuICAgICAgPC9Sb3c+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmVoaWNsZURldGFpbHNcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IEJ1dHRvbiwgU3Bpbm5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCdcblxuZXhwb3J0IGNvbnN0IFVpQnV0dG9uID0gKHsgdGl0bGUsIGxvYWRpbmcsIHNpemUsIGxvYWRlck1zZywgLi4ucmVzdCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvbiB7Li4ucmVzdH0+XG4gICAgICAgICAgICB7dGl0bGV9XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9hZGluZyAmJiA8U3Bpbm5lciBjbGFzc05hbWU9XCJtbC0zIG1iLTFcIiBhbmltYXRpb249XCJib3JkZXJcIiByb2xlPVwic3RhdHVzXCIgc2l6ZT17c2l6ZX0+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57YCR7bG9hZGVyTXNnfWB9PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvU3Bpbm5lcj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9CdXR0b24+XG4gICAgKVxufVxuXG5VaUJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2l6ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsb2FkZXJNc2c6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cblVpQnV0dG9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0aXRsZTogJ015IEJ1dHRvbicsXG4gICAgc2l6ZTogJ3NtJyxcbiAgICB2YXJpYW50OiAncHJpbWFyeScsXG4gICAgbG9hZGVyTXNnOiAnTG9hZGluZy4uLicsXG59XG5cblxuXG5cbmV4cG9ydCBjb25zdCBTb2NpYWxCdXR0b24gPSAoeyB0aXRsZSwgaWNvbiwgLi4ucmVzdCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwib3V0bGluZS1wcmltYXJ5XCIgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiB3LTEwMCBzb2NpYWwtYnRuIHB4LTMgcGItc20tMiBwYi0wIHB0LXNtLTEgcHQtMFwiIHsuLi5yZXN0fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNvY2lhbC1idG4taWNvblwiPntpY29ufTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNvY2lhbC1idG4tdGl0bGVcIj57dGl0bGV9PC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4+PC9zcGFuPlxuICAgICAgICA8L0J1dHRvbj5cbiAgICApXG59XG5cblNvY2lhbEJ1dHRvbi5wcm9wVHlwZXMgPSB7XG4gICAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgaWNvbjogUHJvcFR5cGVzLm5vZGUsXG59XG5cblNvY2lhbEJ1dHRvbi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGl0bGU6ICdNeSBTb2NpYWwgQnV0dG9uJyxcbn1cbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcbmltcG9ydCB7IFNwaW5uZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnXG5cbmV4cG9ydCBjb25zdCBGdWxsUGFnZUxvYWRlciA9ICh7IGxvYWRpbmcsIGFuaW1hdGlvbiwgLi4ucmVzdCB9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciBteS01IHB5LTVcIj5cbiAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj17bG9hZGluZyA/IGFuaW1hdGlvbiA6ICcnfSByb2xlPVwic3RhdHVzXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5GdWxsUGFnZUxvYWRlci5wcm9wVHlwZXMgPSB7XG4gICAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgICBhbmltYXRpb246IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbkZ1bGxQYWdlTG9hZGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgICBhbmltYXRpb246ICdib3JkZXInLFxufSIsImltcG9ydCB7IFNwaW5uZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcbmltcG9ydCB7IEZ1bGxQYWdlTG9hZGVyIH0gZnJvbSBcIi4uL0xvYWRlclwiXG5cbmV4cG9ydCBjb25zdCBVcGxvYWRQaG90byA9ICh7IHRleHQsIHNyYywgbmFtZSwgbG9hZGluZywgaWQsIG9uRmlsZUNoYW5nZSB9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwbG9hZC1waG90byB0ZXh0LW1kLWxlZnQgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImg0IG1iLTNcIj57dGV4dH08L3A+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbG9hZGluZyA/XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxTcGlubmVyIGFuaW1hdGlvbj1cImJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gOlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIiBodG1sRm9yPXtpZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17c3JjID8gc3JjIDogJy9pbWFnZXMvdXBsb2FkLnBuZyd9IGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImZpbGVcIiBpZD17aWR9IG5hbWU9e25hbWV9IG9uQ2hhbmdlPXtvbkZpbGVDaGFuZ2V9IHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgICAgICAgICAgbGVmdDogLTEwMDAwMFxuICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZFBob3RvIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xuXG5leHBvcnQgY29uc3QgQXV0aElucHV0ID0gKHsgbGFiZWwsIHR5cGUsIG5hbWUsIHZhbHVlLCBvbkNoYW5nZSB9KSA9PiB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8aW5wdXQgYXV0b0NvbXBsZXRlPVwib2ZmXCIgbmFtZT17bmFtZX0gdHlwZT17dHlwZX0gcmVxdWlyZWQgdmFsdWU9e3ZhbHVlfSBvbkNoYW5nZT17KGV2ZW50KSA9PiBvbkNoYW5nZShldmVudCl9IC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInRleHRcIiBjbGFzc05hbWU9XCJhdXRoLWlucHV0LWxhYmVsLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImF1dGgtaW5wdXQtbGFiZWwtbmFtZVwiPlxuICAgICAgICAgICAgICAgICAgICB7bGFiZWx9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5cbkF1dGhJbnB1dC5wcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn1cblxuQXV0aElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAndGV4dCcsXG59XG5cblxuZXhwb3J0IGNvbnN0IFdpemFyZElucHV0ID0gKHsgbGFiZWwsIHR5cGUsIHZhbHVlLCBuYW1lLCBoYW5kbGVPd25lciwgLi4ucmVzdCB9KSA9PiB7XG4gICAgLy9jb25zb2xlLmxvZyhcInByb3BzID0gXCIsIGxhYmVsLCB0eXBlLHZhbHVlLCBoYW5kbGVPd25lciApXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWctZm9ybS1pbnB1dCBkLXhsLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJkLWxnLWlubGluZS1ibG9jayBkLWJsb2NrXCI+e2xhYmVsfTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT17dHlwZX0gdmFsdWU9e3ZhbHVlfSBuYW1lPXtuYW1lfSBvbkNoYW5nZT17KGUpPT5oYW5kbGVPd25lcihlKX0gey4uLnJlc3R9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuXG5XaXphcmRJbnB1dC5wcm9wVHlwZXMgPSB7XG4gICAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG59XG5cbldpemFyZElucHV0LmRlZmF1bHRQcm9wcyA9IHtcbiAgICB0eXBlOiAndGV4dCcsXG59IiwiY29uc3QgREVWRUxPUE1FTlQgPSB7XG4gICAgbmV4dEF1dGhVcmw6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1VSTCxcbiAgICBiYXNlVXJsOiBwcm9jZXNzLmVudi5BUElfVVJMLFxuICAgIGdyYW50VHlwZTogcHJvY2Vzcy5lbnYuR1JBTlRfVFlQRSxcbiAgICBiYXNpY0F1dGhUb2tlbjogcHJvY2Vzcy5lbnYuQkFTSUNfQVVUSF9UT0tFTixcbiAgICBHQVZfQ0xJRU5UX1NFQ1JFVDogcHJvY2Vzcy5lbnYuR0FWX0NMSUVOVF9TRUNSRVQsXG4gICAgR0FWX0NMSUVOVF9JRDogcHJvY2Vzcy5lbnYuR0FWX0NMSUVOVF9JRCxcbiAgICBHT09HTEVfQ0xJRU5UX0lEOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgIEdPT0dMRV9DTElFTlRfU0VDUkVUOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcblxuICAgIC8vIEdPT0dMRV9DTElFTlRfSUQ6ICczMTY1MTA1NzgxOC1oODIwb25oZDNoNDJrcGdmNWhpaDJrcHRjM20ybXVlcy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbScsXG4gICAgLy8gR09PR0xFX0NMSUVOVF9TRUNSRVQ6ICdWQW5mUUxyenBRdktGU1N6TWhmQUJiaFgnXG4gICAgRkFDRUJPT0tfQ0xJRU5UX0lEOiBwcm9jZXNzLmVudi5GQUNFQk9PS19DTElFTlRfSUQsXG4gICAgRkFDRUJPT0tfQ0xJRU5UX1NFQ1JFVDogIHByb2Nlc3MuZW52LkZBQ0VCT09LX0NMSUVOVF9TRUNSRVRcbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IERFVkVMT1BNRU5UXG4iLCJleHBvcnQgY29uc3QgT1dORVJfTElTVF9PRl9DQVJTX1JFUVVFU1QgPSAnT1dORVJfTElTVF9PRl9DQVJTX1JFUVVFU1QnXG5leHBvcnQgY29uc3QgT1dORVJfTElTVF9PRl9DQVJTX1NVQ0NFU1MgPSAnT1dORVJfTElTVF9PRl9DQVJTX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgT1dORVJfTElTVF9PRl9DQVJTX0ZBSUwgPSAnT1dORVJfTElTVF9PRl9DQVJTX0ZBSUwnXG5cbmV4cG9ydCBjb25zdCBPV05FUl9SRUNPVkVSX09XTkVSX1JFUVVFU1QgPSAnT1dORVJfUkVDT1ZFUl9PV05FUl9SRVFVRVNUJ1xuZXhwb3J0IGNvbnN0IE9XTkVSX1JFQ09WRVJfT1dORVJfU1VDQ0VTUyA9ICdPV05FUl9SRUNPVkVSX09XTkVSX1NVQ0NFU1MnXG5leHBvcnQgY29uc3QgT1dORVJfUkVDT1ZFUl9PV05FUl9GQUlMID0gJ09XTkVSX1JFQ09WRVJfT1dORVJfRkFJTCciLCJpbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwicmVhY3QtYm9vdHN0cmFwXCJcbmltcG9ydCBEYXNoYm9hcmRIZWFkZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFydGlhbC9EYXNoYm9hcmQvSGVhZGVyXCJcbmltcG9ydCBEYXNoYm9hcmRGb290ZXIgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUGFydGlhbC9EYXNoYm9hcmQvRm9vdGVyXCJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi8uLi91dGlscy93aXRoQXV0aCdcblxuY29uc3QgRGFzaGJvYXJkTGF5b3V0ID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgIDxEYXNoYm9hcmRIZWFkZXIgLz5cblxuICAgICAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9tYWluPlxuXG5cbiAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgey8qIDxEYXNoYm9hcmRGb290ZXIgLz4gKi99XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoRGFzaGJvYXJkTGF5b3V0KVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwiaW1wb3J0IFJlYWN0LCB7IENoaWxkcmVuLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGdldERvbWFpbkxvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbiB9IGZyb20gJy4vdXNlLWludGVyc2VjdGlvbidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8ICFyb3V0ZXIpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICBjb25zdCBjdXJMb2NhbGUgPVxuICAgIG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJ1xuICAgICAgPyBvcHRpb25zLmxvY2FsZVxuICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuXG4gIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCk6IGJvb2xlYW4ge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgc2hhbGxvdyxcbiAgICBsb2NhbGUsXG4gICAgc2Nyb2xsLFxuICB9KS50aGVuKChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAvLyBGSVhNRTogcHJvcGVyIHJvdXRlIGFubm91bmNpbmcgYXQgUm91dGVyIGxldmVsLCBub3QgTGluazpcbiAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gTGluayhwcm9wczogUmVhY3QuUHJvcHNXaXRoQ2hpbGRyZW48TGlua1Byb3BzPikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzOiB7XG4gICAgICBrZXk6IHN0cmluZ1xuICAgICAgZXhwZWN0ZWQ6IHN0cmluZ1xuICAgICAgYWN0dWFsOiBzdHJpbmdcbiAgICB9KSB7XG4gICAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgICBgRmFpbGVkIHByb3AgdHlwZTogVGhlIHByb3AgXFxgJHthcmdzLmtleX1cXGAgZXhwZWN0cyBhICR7YXJncy5leHBlY3RlZH0gaW4gXFxgPExpbms+XFxgLCBidXQgZ290IFxcYCR7YXJncy5hY3R1YWx9XFxgIGluc3RlYWQuYCArXG4gICAgICAgICAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICA/IFwiXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIlxuICAgICAgICAgICAgOiAnJylcbiAgICAgIClcbiAgICB9XG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc1JlcXVpcmVkLCB0cnVlPiA9IHtcbiAgICAgIGhyZWY6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IHJlcXVpcmVkUHJvcHM6IExpbmtQcm9wc1JlcXVpcmVkW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIHJlcXVpcmVkUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzUmVxdWlyZWRbXVxuICAgIHJlcXVpcmVkUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNSZXF1aXJlZCkgPT4ge1xuICAgICAgaWYgKGtleSA9PT0gJ2hyZWYnKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9wc1trZXldID09IG51bGwgfHxcbiAgICAgICAgICAodHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0JylcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV0sXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHNHdWFyZDogUmVjb3JkPExpbmtQcm9wc09wdGlvbmFsLCB0cnVlPiA9IHtcbiAgICAgIGFzOiB0cnVlLFxuICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgIHNjcm9sbDogdHJ1ZSxcbiAgICAgIHNoYWxsb3c6IHRydWUsXG4gICAgICBwYXNzSHJlZjogdHJ1ZSxcbiAgICAgIHByZWZldGNoOiB0cnVlLFxuICAgICAgbG9jYWxlOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCBvcHRpb25hbFByb3BzOiBMaW5rUHJvcHNPcHRpb25hbFtdID0gT2JqZWN0LmtleXMoXG4gICAgICBvcHRpb25hbFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc09wdGlvbmFsW11cbiAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzT3B0aW9uYWwpID0+IHtcbiAgICAgIGNvbnN0IHZhbFR5cGUgPSB0eXBlb2YgcHJvcHNba2V5XVxuXG4gICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnICYmIHZhbFR5cGUgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBrZXkgPT09ICdyZXBsYWNlJyB8fFxuICAgICAgICBrZXkgPT09ICdzY3JvbGwnIHx8XG4gICAgICAgIGtleSA9PT0gJ3NoYWxsb3cnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Bhc3NIcmVmJyB8fFxuICAgICAgICBrZXkgPT09ICdwcmVmZXRjaCdcbiAgICAgICkge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICBjb25zdCBfOiBuZXZlciA9IGtleVxuICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBUaGlzIGhvb2sgaXMgaW4gYSBjb25kaXRpb25hbCBidXQgdGhhdCBpcyBvayBiZWNhdXNlIGBwcm9jZXNzLmVudi5OT0RFX0VOVmAgbmV2ZXIgY2hhbmdlc1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9ydWxlcy1vZi1ob29rc1xuICAgIGNvbnN0IGhhc1dhcm5lZCA9IFJlYWN0LnVzZVJlZihmYWxzZSlcbiAgICBpZiAocHJvcHMucHJlZmV0Y2ggJiYgIWhhc1dhcm5lZC5jdXJyZW50KSB7XG4gICAgICBoYXNXYXJuZWQuY3VycmVudCA9IHRydWVcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgKVxuICAgIH1cbiAgfVxuICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgcGF0aG5hbWUgPSAocm91dGVyICYmIHJvdXRlci5wYXRobmFtZSkgfHwgJy8nXG5cbiAgY29uc3QgeyBocmVmLCBhcyB9ID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgW3Jlc29sdmVkSHJlZiwgcmVzb2x2ZWRBc10gPSByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuaHJlZiwgdHJ1ZSlcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogcmVzb2x2ZWRIcmVmLFxuICAgICAgYXM6IHByb3BzLmFzXG4gICAgICAgID8gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmFzKVxuICAgICAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmLFxuICAgIH1cbiAgfSwgW3BhdGhuYW1lLCBwcm9wcy5ocmVmLCBwcm9wcy5hc10pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuXG4gIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgIGNoaWxkcmVuID0gPGE+e2NoaWxkcmVufTwvYT5cbiAgfVxuXG4gIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICBjb25zdCBjaGlsZDogYW55ID0gQ2hpbGRyZW4ub25seShjaGlsZHJlbilcbiAgY29uc3QgY2hpbGRSZWY6IGFueSA9IGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmXG5cbiAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9IHVzZUludGVyc2VjdGlvbih7XG4gICAgcm9vdE1hcmdpbjogJzIwMHB4JyxcbiAgfSlcbiAgY29uc3Qgc2V0UmVmID0gUmVhY3QudXNlQ2FsbGJhY2soXG4gICAgKGVsOiBFbGVtZW50KSA9PiB7XG4gICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW2NoaWxkUmVmLCBzZXRJbnRlcnNlY3Rpb25SZWZdXG4gIClcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzaG91bGRQcmVmZXRjaCA9IGlzVmlzaWJsZSAmJiBwICYmIGlzTG9jYWxVUkwoaHJlZilcbiAgICBjb25zdCBjdXJMb2NhbGUgPVxuICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZVxuICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9XG4gICAgICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhcyArIChjdXJMb2NhbGUgPyAnJScgKyBjdXJMb2NhbGUgOiAnJyldXG4gICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGUsXG4gICAgICB9KVxuICAgIH1cbiAgfSwgW2FzLCBocmVmLCBpc1Zpc2libGUsIGxvY2FsZSwgcCwgcm91dGVyXSlcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgfVxuICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNvbnN0IGN1ckxvY2FsZSA9XG4gICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlXG5cbiAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgIC8vIHNvIHRoYXQgbG9jYWxlIGxpbmtzIGFyZSBzdGlsbCB2aXNpdGFibGUgaW4gZGV2ZWxvcG1lbnQvcHJldmlldyBlbnZzXG4gICAgY29uc3QgbG9jYWxlRG9tYWluID1cbiAgICAgIHJvdXRlciAmJlxuICAgICAgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmXG4gICAgICBnZXREb21haW5Mb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICBjdXJMb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIubG9jYWxlcyxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kb21haW5Mb2NhbGVzXG4gICAgICApXG5cbiAgICBjaGlsZFByb3BzLmhyZWYgPVxuICAgICAgbG9jYWxlRG9tYWluIHx8XG4gICAgICBhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSlcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwidHlwZSBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlID0gYW55XG50eXBlIFJlcXVlc3RJZGxlQ2FsbGJhY2tPcHRpb25zID0ge1xuICB0aW1lb3V0OiBudW1iZXJcbn1cbnR5cGUgUmVxdWVzdElkbGVDYWxsYmFja0RlYWRsaW5lID0ge1xuICByZWFkb25seSBkaWRUaW1lb3V0OiBib29sZWFuXG4gIHRpbWVSZW1haW5pbmc6ICgpID0+IG51bWJlclxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIHJlcXVlc3RJZGxlQ2FsbGJhY2s6IChcbiAgICAgIGNhbGxiYWNrOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZCxcbiAgICAgIG9wdHM/OiBSZXF1ZXN0SWRsZUNhbGxiYWNrT3B0aW9uc1xuICAgICkgPT4gUmVxdWVzdElkbGVDYWxsYmFja0hhbmRsZVxuICAgIGNhbmNlbElkbGVDYWxsYmFjazogKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSA9PiB2b2lkXG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3RJZGxlQ2FsbGJhY2sgPVxuICAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYucmVxdWVzdElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKFxuICAgIGNiOiAoZGVhZGxpbmU6IFJlcXVlc3RJZGxlQ2FsbGJhY2tEZWFkbGluZSkgPT4gdm9pZFxuICApOiBOb2RlSlMuVGltZW91dCB7XG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKVxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNiKHtcbiAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXG4gICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aC5tYXgoMCwgNTAgLSAoRGF0ZS5ub3coKSAtIHN0YXJ0KSlcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgfSwgMSlcbiAgfVxuXG5leHBvcnQgY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID1cbiAgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLmNhbmNlbElkbGVDYWxsYmFjaykgfHxcbiAgZnVuY3Rpb24gKGlkOiBSZXF1ZXN0SWRsZUNhbGxiYWNrSGFuZGxlKSB7XG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZClcbiAgfVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQ2xpZW50QnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL2J1aWxkL3dlYnBhY2svcGx1Z2lucy9idWlsZC1tYW5pZmVzdC1wbHVnaW4nXG5pbXBvcnQgZ2V0QXNzZXRQYXRoRnJvbVJvdXRlIGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZSdcbmltcG9ydCB7IHJlcXVlc3RJZGxlQ2FsbGJhY2sgfSBmcm9tICcuL3JlcXVlc3QtaWRsZS1jYWxsYmFjaydcblxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMFxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIF9fQlVJTERfTUFOSUZFU1Q/OiBDbGllbnRCdWlsZE1hbmlmZXN0XG4gICAgX19CVUlMRF9NQU5JRkVTVF9DQj86IEZ1bmN0aW9uXG4gIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIGNvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBleHBvcnRzOiBhbnlcbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkRW50cnlwb2ludEZhaWx1cmUge1xuICBlcnJvcjogdW5rbm93blxufVxuZXhwb3J0IHR5cGUgUm91dGVFbnRyeXBvaW50ID0gTG9hZGVkRW50cnlwb2ludFN1Y2Nlc3MgfCBMb2FkZWRFbnRyeXBvaW50RmFpbHVyZVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlU3R5bGVTaGVldCB7XG4gIGhyZWY6IHN0cmluZ1xuICBjb250ZW50OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgZXh0ZW5kcyBMb2FkZWRFbnRyeXBvaW50U3VjY2VzcyB7XG4gIHN0eWxlczogUm91dGVTdHlsZVNoZWV0W11cbn1cbmV4cG9ydCBpbnRlcmZhY2UgTG9hZGVkUm91dGVGYWlsdXJlIHtcbiAgZXJyb3I6IHVua25vd25cbn1cbmV4cG9ydCB0eXBlIFJvdXRlTG9hZGVyRW50cnkgPSBMb2FkZWRSb3V0ZVN1Y2Nlc3MgfCBMb2FkZWRSb3V0ZUZhaWx1cmVcblxuZXhwb3J0IHR5cGUgRnV0dXJlPFY+ID0ge1xuICByZXNvbHZlOiAoZW50cnlwb2ludDogVikgPT4gdm9pZFxuICBmdXR1cmU6IFByb21pc2U8Vj5cbn1cbmZ1bmN0aW9uIHdpdGhGdXR1cmU8VD4oXG4gIGtleTogc3RyaW5nLFxuICBtYXA6IE1hcDxzdHJpbmcsIEZ1dHVyZTxUPiB8IFQ+LFxuICBnZW5lcmF0b3I/OiAoKSA9PiBQcm9taXNlPFQ+XG4pOiBQcm9taXNlPFQ+IHtcbiAgbGV0IGVudHJ5OiBGdXR1cmU8VD4gfCBUIHwgdW5kZWZpbmVkID0gbWFwLmdldChrZXkpXG4gIGlmIChlbnRyeSkge1xuICAgIGlmICgnZnV0dXJlJyBpbiBlbnRyeSkge1xuICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZVxuICAgIH1cbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGVudHJ5KVxuICB9XG4gIGxldCByZXNvbHZlcjogKGVudHJ5cG9pbnQ6IFQpID0+IHZvaWRcbiAgY29uc3QgcHJvbTogUHJvbWlzZTxUPiA9IG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlKSA9PiB7XG4gICAgcmVzb2x2ZXIgPSByZXNvbHZlXG4gIH0pXG4gIG1hcC5zZXQoa2V5LCAoZW50cnkgPSB7IHJlc29sdmU6IHJlc29sdmVyISwgZnV0dXJlOiBwcm9tIH0pKVxuICByZXR1cm4gZ2VuZXJhdG9yXG4gICAgPyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VxdWVuY2VzXG4gICAgICBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSkgPT4gKHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpKVxuICAgIDogcHJvbVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlTG9hZGVyIHtcbiAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8Um91dGVFbnRyeXBvaW50PlxuICBvbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZywgZXhlY3V0ZTogKCkgPT4gdW5rbm93bik6IHZvaWRcbiAgbG9hZFJvdXRlKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlTG9hZGVyRW50cnk+XG4gIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+XG59XG5cbmZ1bmN0aW9uIGhhc1ByZWZldGNoKGxpbms/OiBIVE1MTGlua0VsZW1lbnQpOiBib29sZWFuIHtcbiAgdHJ5IHtcbiAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpXG4gICAgcmV0dXJuIChcbiAgICAgIC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgLy8gd2l0aCByZWxMaXN0LnN1cHBvcnRcbiAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIShkb2N1bWVudCBhcyBhbnkpLmRvY3VtZW50TW9kZSkgfHxcbiAgICAgIGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKVxuICAgIClcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxuY29uc3QgY2FuUHJlZmV0Y2g6IGJvb2xlYW4gPSBoYXNQcmVmZXRjaCgpXG5cbmZ1bmN0aW9uIHByZWZldGNoVmlhRG9tKFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIGxpbms/OiBIVE1MTGlua0VsZW1lbnRcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzLCByZWopID0+IHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgcmV0dXJuIHJlcygpXG4gICAgfVxuXG4gICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcbiAgICBpZiAoYXMpIGxpbmshLmFzID0gYXNcbiAgICBsaW5rIS5yZWwgPSBgcHJlZmV0Y2hgXG4gICAgbGluayEuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOIVxuICAgIGxpbmshLm9ubG9hZCA9IHJlc1xuICAgIGxpbmshLm9uZXJyb3IgPSByZWpcblxuICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XG4gICAgbGluayEuaHJlZiA9IGhyZWZcblxuICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluaylcbiAgfSlcbn1cblxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpXG4vLyBUT0RPOiB1bmV4cG9ydFxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtBc3NldEVycm9yKGVycjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnI/OiBFcnJvcik6IGJvb2xlYW4gfCB1bmRlZmluZWQge1xuICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyXG59XG5cbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChcbiAgc3JjOiBzdHJpbmcsXG4gIHNjcmlwdD86IEhUTUxTY3JpcHRFbGVtZW50XG4pOiBQcm9taXNlPHVua25vd24+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuXG4gICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cbiAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXG4gICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmVcbiAgICBzY3JpcHQub25lcnJvciA9ICgpID0+XG4gICAgICByZWplY3QobWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzY3JpcHQ6ICR7c3JjfWApKSlcblxuICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxuICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU4hXG5cbiAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgIC8vICAgIG11c3QgYmUgYXBwZW5kZWQgZm9yIGZldGNoaW5nIHRvIHN0YXJ0LlxuICAgIHNjcmlwdC5zcmMgPSBzcmNcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcmlwdClcbiAgfSlcbn1cblxuZnVuY3Rpb24gaWRsZVRpbWVvdXQ8VD4obXM6IG51bWJlciwgZXJyOiBFcnJvcik6IFByb21pc2U8VD4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKF9yZXNvbHZlLCByZWplY3QpID0+XG4gICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRUaW1lb3V0KCgpID0+IHJlamVjdChlcnIpLCBtcykpXG4gIClcbn1cblxuLy8gVE9ETzogc3RvcCBleHBvcnRpbmcgb3IgY2FjaGUgdGhlIGZhaWx1cmVcbi8vIEl0J2QgYmUgYmVzdCB0byBzdG9wIGV4cG9ydGluZyB0aGlzLiBJdCdzIGFuIGltcGxlbWVudGF0aW9uIGRldGFpbC4gV2UncmVcbi8vIG9ubHkgZXhwb3J0aW5nIGl0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbHR5IHdpdGggdGhlIGBwYWdlLWxvYWRlcmAuXG4vLyBPbmx5IGNhY2hlIHRoaXMgcmVzcG9uc2UgYXMgYSBsYXN0IHJlc29ydCBpZiB3ZSBjYW5ub3QgZWxpbWluYXRlIGFsbCBvdGhlclxuLy8gY29kZSBicmFuY2hlcyB0aGF0IHVzZSB0aGUgQnVpbGQgTWFuaWZlc3QgQ2FsbGJhY2sgYW5kIHB1c2ggdGhlbSB0aHJvdWdoXG4vLyB0aGUgUm91dGUgTG9hZGVyIGludGVyZmFjZS5cbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCk6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4ge1xuICBpZiAoc2VsZi5fX0JVSUxEX01BTklGRVNUKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpXG4gIH1cblxuICBjb25zdCBvbkJ1aWxkTWFuaWZlc3Q6IFByb21pc2U8Q2xpZW50QnVpbGRNYW5pZmVzdD4gPSBuZXcgUHJvbWlzZTxcbiAgICBDbGllbnRCdWlsZE1hbmlmZXN0XG4gID4oKHJlc29sdmUpID0+IHtcbiAgICAvLyBNYW5kYXRvcnkgYmVjYXVzZSB0aGlzIGlzIG5vdCBjb25jdXJyZW50IHNhZmU6XG4gICAgY29uc3QgY2IgPSBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0JcbiAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKSA9PiB7XG4gICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVClcbiAgICAgIGNiICYmIGNiKClcbiAgICB9XG4gIH0pXG4gIHJldHVybiBQcm9taXNlLnJhY2UoW1xuICAgIG9uQnVpbGRNYW5pZmVzdCxcbiAgICBpZGxlVGltZW91dDxDbGllbnRCdWlsZE1hbmlmZXN0PihcbiAgICAgIE1TX01BWF9JRExFX0RFTEFZLFxuICAgICAgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSlcbiAgICApLFxuICBdKVxufVxuXG5pbnRlcmZhY2UgUm91dGVGaWxlcyB7XG4gIHNjcmlwdHM6IHN0cmluZ1tdXG4gIGNzczogc3RyaW5nW11cbn1cbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoXG4gIGFzc2V0UHJlZml4OiBzdHJpbmcsXG4gIHJvdXRlOiBzdHJpbmdcbik6IFByb21pc2U8Um91dGVGaWxlcz4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcbiAgICAgIHNjcmlwdHM6IFtcbiAgICAgICAgYXNzZXRQcmVmaXggK1xuICAgICAgICAgICcvX25leHQvc3RhdGljL2NodW5rcy9wYWdlcycgK1xuICAgICAgICAgIGVuY29kZVVSSShnZXRBc3NldFBhdGhGcm9tUm91dGUocm91dGUsICcuanMnKSksXG4gICAgICBdLFxuICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxuICAgICAgY3NzOiBbXSxcbiAgICB9KVxuICB9XG4gIHJldHVybiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkudGhlbigobWFuaWZlc3QpID0+IHtcbiAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSlcbiAgICB9XG4gICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKFxuICAgICAgKGVudHJ5KSA9PiBhc3NldFByZWZpeCArICcvX25leHQvJyArIGVuY29kZVVSSShlbnRyeSlcbiAgICApXG4gICAgcmV0dXJuIHtcbiAgICAgIHNjcmlwdHM6IGFsbEZpbGVzLmZpbHRlcigodikgPT4gdi5lbmRzV2l0aCgnLmpzJykpLFxuICAgICAgY3NzOiBhbGxGaWxlcy5maWx0ZXIoKHYpID0+IHYuZW5kc1dpdGgoJy5jc3MnKSksXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBjcmVhdGVSb3V0ZUxvYWRlcihhc3NldFByZWZpeDogc3RyaW5nKTogUm91dGVMb2FkZXIge1xuICBjb25zdCBlbnRyeXBvaW50czogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVFbnRyeXBvaW50PiB8IFJvdXRlRW50cnlwb2ludFxuICA+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IGxvYWRlZFNjcmlwdHM6IE1hcDxzdHJpbmcsIFByb21pc2U8dW5rbm93bj4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHN0eWxlU2hlZXRzOiBNYXA8c3RyaW5nLCBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4+ID0gbmV3IE1hcCgpXG4gIGNvbnN0IHJvdXRlczogTWFwPFxuICAgIHN0cmluZyxcbiAgICBGdXR1cmU8Um91dGVMb2FkZXJFbnRyeT4gfCBSb3V0ZUxvYWRlckVudHJ5XG4gID4gPSBuZXcgTWFwKClcblxuICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjOiBzdHJpbmcpOiBQcm9taXNlPHVua25vd24+IHtcbiAgICBsZXQgcHJvbTogUHJvbWlzZTx1bmtub3duPiB8IHVuZGVmaW5lZCA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYylcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICAvLyBTa2lwIGV4ZWN1dGluZyBzY3JpcHQgaWYgaXQncyBhbHJlYWR5IGluIHRoZSBET006XG4gICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKVxuICAgIH1cblxuICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgKHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSkpXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmOiBzdHJpbmcpOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4ge1xuICAgIGxldCBwcm9tOiBQcm9taXNlPFJvdXRlU3R5bGVTaGVldD4gfCB1bmRlZmluZWQgPSBzdHlsZVNoZWV0cy5nZXQoaHJlZilcbiAgICBpZiAocHJvbSkge1xuICAgICAgcmV0dXJuIHByb21cbiAgICB9XG5cbiAgICBzdHlsZVNoZWV0cy5zZXQoXG4gICAgICBocmVmLFxuICAgICAgKHByb20gPSBmZXRjaChocmVmKVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3R5bGVzaGVldDogJHtocmVmfWApXG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpID0+ICh7IGhyZWY6IGhyZWYsIGNvbnRlbnQ6IHRleHQgfSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgdGhyb3cgbWFya0Fzc2V0RXJyb3IoZXJyKVxuICAgICAgICB9KSlcbiAgICApXG4gICAgcmV0dXJuIHByb21cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgd2hlbkVudHJ5cG9pbnQocm91dGU6IHN0cmluZykge1xuICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKVxuICAgIH0sXG4gICAgb25FbnRyeXBvaW50KHJvdXRlOiBzdHJpbmcsIGV4ZWN1dGU6ICgpID0+IHVua25vd24pIHtcbiAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKVxuICAgICAgICAudGhlbigoZm4pID0+IGZuKCkpXG4gICAgICAgIC50aGVuKFxuICAgICAgICAgIChleHBvcnRzOiBhbnkpID0+ICh7XG4gICAgICAgICAgICBjb21wb25lbnQ6IChleHBvcnRzICYmIGV4cG9ydHMuZGVmYXVsdCkgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgIGV4cG9ydHM6IGV4cG9ydHMsXG4gICAgICAgICAgfSksXG4gICAgICAgICAgKGVycikgPT4gKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICApXG4gICAgICAgIC50aGVuKChpbnB1dDogUm91dGVFbnRyeXBvaW50KSA9PiB7XG4gICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKVxuICAgICAgICAgIGVudHJ5cG9pbnRzLnNldChyb3V0ZSwgaW5wdXQpXG4gICAgICAgICAgaWYgKG9sZCAmJiAncmVzb2x2ZScgaW4gb2xkKSBvbGQucmVzb2x2ZShpbnB1dClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIGxvYWRSb3V0ZShyb3V0ZTogc3RyaW5nKSB7XG4gICAgICByZXR1cm4gd2l0aEZ1dHVyZTxSb3V0ZUxvYWRlckVudHJ5Pihyb3V0ZSwgcm91dGVzLCBhc3luYyAoKSA9PiB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBzY3JpcHRzLCBjc3MgfSA9IGF3YWl0IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKVxuICAgICAgICAgIGNvbnN0IFssIHN0eWxlc10gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpXG4gICAgICAgICAgICAgID8gW11cbiAgICAgICAgICAgICAgOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksXG4gICAgICAgICAgXSBhcyBjb25zdClcblxuICAgICAgICAgIGNvbnN0IGVudHJ5cG9pbnQ6IFJvdXRlRW50cnlwb2ludCA9IGF3YWl0IFByb21pc2UucmFjZShbXG4gICAgICAgICAgICB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKSxcbiAgICAgICAgICAgIGlkbGVUaW1lb3V0PFJvdXRlTG9hZGVyRW50cnk+KFxuICAgICAgICAgICAgICBNU19NQVhfSURMRV9ERUxBWSxcbiAgICAgICAgICAgICAgbWFya0Fzc2V0RXJyb3IoXG4gICAgICAgICAgICAgICAgbmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YClcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKVxuICAgICAgICAgIGNvbnN0IHJlczogUm91dGVMb2FkZXJFbnRyeSA9IE9iamVjdC5hc3NpZ248XG4gICAgICAgICAgICB7IHN0eWxlczogUm91dGVTdHlsZVNoZWV0W10gfSxcbiAgICAgICAgICAgIFJvdXRlRW50cnlwb2ludFxuICAgICAgICAgID4oeyBzdHlsZXMgfSwgZW50cnlwb2ludClcbiAgICAgICAgICByZXR1cm4gJ2Vycm9yJyBpbiBlbnRyeXBvaW50ID8gZW50cnlwb2ludCA6IHJlc1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICByZXR1cm4geyBlcnJvcjogZXJyIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHByZWZldGNoKHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgIGxldCBjblxuICAgICAgaWYgKChjbiA9IChuYXZpZ2F0b3IgYXMgYW55KS5jb25uZWN0aW9uKSkge1xuICAgICAgICAvLyBEb24ndCBwcmVmZXRjaCBpZiB1c2luZyAyRyBvciBpZiBTYXZlLURhdGEgaXMgZW5hYmxlZC5cbiAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpXG4gICAgICAgIC50aGVuKChvdXRwdXQpID0+XG4gICAgICAgICAgUHJvbWlzZS5hbGwoXG4gICAgICAgICAgICBjYW5QcmVmZXRjaFxuICAgICAgICAgICAgICA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KSA9PiBwcmVmZXRjaFZpYURvbShzY3JpcHQsICdzY3JpcHQnKSlcbiAgICAgICAgICAgICAgOiBbXVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiB0aGlzLmxvYWRSb3V0ZShyb3V0ZSkpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChcbiAgICAgICAgICAvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICgpID0+IHt9XG4gICAgICAgIClcbiAgICB9LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZVJvdXRlTG9hZGVyXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuICAnaXNSZWFkeScsXG4gICdpc1ByZXZpZXcnLFxuICAnaXNMb2NhbGVEb21haW4nLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkOiBzdHJpbmcpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IHN0cmluZykgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudDogc3RyaW5nKSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7XG4gIHJlcXVlc3RJZGxlQ2FsbGJhY2ssXG4gIGNhbmNlbElkbGVDYWxsYmFjayxcbn0gZnJvbSAnLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2snXG5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0ID0gUGljazxJbnRlcnNlY3Rpb25PYnNlcnZlckluaXQsICdyb290TWFyZ2luJz5cbnR5cGUgVXNlSW50ZXJzZWN0aW9uID0geyBkaXNhYmxlZD86IGJvb2xlYW4gfSAmIFVzZUludGVyc2VjdGlvbk9ic2VydmVySW5pdFxudHlwZSBPYnNlcnZlQ2FsbGJhY2sgPSAoaXNWaXNpYmxlOiBib29sZWFuKSA9PiB2b2lkXG50eXBlIE9ic2VydmVyID0ge1xuICBpZDogc3RyaW5nXG4gIG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuICBlbGVtZW50czogTWFwPEVsZW1lbnQsIE9ic2VydmVDYWxsYmFjaz5cbn1cblxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb248VCBleHRlbmRzIEVsZW1lbnQ+KHtcbiAgcm9vdE1hcmdpbixcbiAgZGlzYWJsZWQsXG59OiBVc2VJbnRlcnNlY3Rpb24pOiBbKGVsZW1lbnQ6IFQgfCBudWxsKSA9PiB2b2lkLCBib29sZWFuXSB7XG4gIGNvbnN0IGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXJcblxuICBjb25zdCB1bm9ic2VydmUgPSB1c2VSZWY8RnVuY3Rpb24+KClcbiAgY29uc3QgW3Zpc2libGUsIHNldFZpc2libGVdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgY29uc3Qgc2V0UmVmID0gdXNlQ2FsbGJhY2soXG4gICAgKGVsOiBUIHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKHVub2JzZXJ2ZS5jdXJyZW50KSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50KClcbiAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWRcbiAgICAgIH1cblxuICAgICAgaWYgKGlzRGlzYWJsZWQgfHwgdmlzaWJsZSkgcmV0dXJuXG5cbiAgICAgIGlmIChlbCAmJiBlbC50YWdOYW1lKSB7XG4gICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShcbiAgICAgICAgICBlbCxcbiAgICAgICAgICAoaXNWaXNpYmxlKSA9PiBpc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpLFxuICAgICAgICAgIHsgcm9vdE1hcmdpbiB9XG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9LFxuICAgIFtpc0Rpc2FibGVkLCByb290TWFyZ2luLCB2aXNpYmxlXVxuICApXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICBpZiAoIXZpc2libGUpIHtcbiAgICAgICAgY29uc3QgaWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaygoKSA9PiBzZXRWaXNpYmxlKHRydWUpKVxuICAgICAgICByZXR1cm4gKCkgPT4gY2FuY2VsSWRsZUNhbGxiYWNrKGlkbGVDYWxsYmFjaylcbiAgICAgIH1cbiAgICB9XG4gIH0sIFt2aXNpYmxlXSlcblxuICByZXR1cm4gW3NldFJlZiwgdmlzaWJsZV1cbn1cblxuZnVuY3Rpb24gb2JzZXJ2ZShcbiAgZWxlbWVudDogRWxlbWVudCxcbiAgY2FsbGJhY2s6IE9ic2VydmVDYWxsYmFjayxcbiAgb3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0XG4pOiAoKSA9PiB2b2lkIHtcbiAgY29uc3QgeyBpZCwgb2JzZXJ2ZXIsIGVsZW1lbnRzIH0gPSBjcmVhdGVPYnNlcnZlcihvcHRpb25zKVxuICBlbGVtZW50cy5zZXQoZWxlbWVudCwgY2FsbGJhY2spXG5cbiAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KVxuICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCk6IHZvaWQge1xuICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KVxuICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KVxuXG4gICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XG4gICAgICBvYnNlcnZlci5kaXNjb25uZWN0KClcbiAgICAgIG9ic2VydmVycy5kZWxldGUoaWQpXG4gICAgfVxuICB9XG59XG5cbmNvbnN0IG9ic2VydmVycyA9IG5ldyBNYXA8c3RyaW5nLCBPYnNlcnZlcj4oKVxuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9uczogVXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXJJbml0KTogT2JzZXJ2ZXIge1xuICBjb25zdCBpZCA9IG9wdGlvbnMucm9vdE1hcmdpbiB8fCAnJ1xuICBsZXQgaW5zdGFuY2UgPSBvYnNlcnZlcnMuZ2V0KGlkKVxuICBpZiAoaW5zdGFuY2UpIHtcbiAgICByZXR1cm4gaW5zdGFuY2VcbiAgfVxuXG4gIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcDxFbGVtZW50LCBPYnNlcnZlQ2FsbGJhY2s+KClcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICBjb25zdCBjYWxsYmFjayA9IGVsZW1lbnRzLmdldChlbnRyeS50YXJnZXQpXG4gICAgICBjb25zdCBpc1Zpc2libGUgPSBlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDBcbiAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKVxuICAgICAgfVxuICAgIH0pXG4gIH0sIG9wdGlvbnMpXG5cbiAgb2JzZXJ2ZXJzLnNldChcbiAgICBpZCxcbiAgICAoaW5zdGFuY2UgPSB7XG4gICAgICBpZCxcbiAgICAgIG9ic2VydmVyLFxuICAgICAgZWxlbWVudHMsXG4gICAgfSlcbiAgKVxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KTogSlNYLkVsZW1lbnQge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVMb2NhbGVQYXRoKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBsb2NhbGVzPzogc3RyaW5nW11cbik6IHtcbiAgZGV0ZWN0ZWRMb2NhbGU/OiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xufSB7XG4gIGxldCBkZXRlY3RlZExvY2FsZTogc3RyaW5nIHwgdW5kZWZpbmVkXG4gIC8vIGZpcnN0IGl0ZW0gd2lsbCBiZSBlbXB0eSBzdHJpbmcgZnJvbSBzcGxpdHRpbmcgYXQgZmlyc3QgY2hhclxuICBjb25zdCBwYXRobmFtZVBhcnRzID0gcGF0aG5hbWUuc3BsaXQoJy8nKVxuXG4gIDsobG9jYWxlcyB8fCBbXSkuc29tZSgobG9jYWxlKSA9PiB7XG4gICAgaWYgKHBhdGhuYW1lUGFydHNbMV0udG9Mb3dlckNhc2UoKSA9PT0gbG9jYWxlLnRvTG93ZXJDYXNlKCkpIHtcbiAgICAgIGRldGVjdGVkTG9jYWxlID0gbG9jYWxlXG4gICAgICBwYXRobmFtZVBhcnRzLnNwbGljZSgxLCAxKVxuICAgICAgcGF0aG5hbWUgPSBwYXRobmFtZVBhcnRzLmpvaW4oJy8nKSB8fCAnLydcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuICAgIHJldHVybiBmYWxzZVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgZGV0ZWN0ZWRMb2NhbGUsXG4gIH1cbn1cbiIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQge1xuICBnZXRDbGllbnRCdWlsZE1hbmlmZXN0LFxuICBpc0Fzc2V0RXJyb3IsXG4gIG1hcmtBc3NldEVycm9yLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyJ1xuaW1wb3J0IHsgRG9tYWluTG9jYWxlcyB9IGZyb20gJy4uLy4uL3NlcnZlci9jb25maWcnXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCB7IG5vcm1hbGl6ZUxvY2FsZVBhdGggfSBmcm9tICcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbiAgTkVYVF9EQVRBLFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBXaW5kb3cge1xuICAgIC8qIHByb2QgKi9cbiAgICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgfVxufVxuXG5pbnRlcmZhY2UgUm91dGVQcm9wZXJ0aWVzIHtcbiAgc2hhbGxvdzogYm9vbGVhblxufVxuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuICBzY3JvbGw/OiBib29sZWFuXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9XG4gIHwgbnVsbFxuICB8IHsgX19OOiBmYWxzZSB9XG4gIHwgKHsgX19OOiB0cnVlOyBpZHg6IG51bWJlciB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxubGV0IGRldGVjdERvbWFpbkxvY2FsZTogdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9kZXRlY3QtZG9tYWluLWxvY2FsZScpLmRldGVjdERvbWFpbkxvY2FsZVxuXG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJylcbiAgICAuZGV0ZWN0RG9tYWluTG9jYWxlXG59XG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGhOb1F1ZXJ5SGFzaChwYXRoKSA9PT0gJy8nID8gcGF0aC5zdWJzdHJpbmcoMSkgOiBwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgbG9jYWxlcz86IHN0cmluZ1tdLFxuICBkb21haW5Mb2NhbGVzPzogRG9tYWluTG9jYWxlc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgbG9jYWxlID0gbG9jYWxlIHx8IG5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aCwgbG9jYWxlcykuZGV0ZWN0ZWRMb2NhbGVcblxuICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKVxuXG4gICAgaWYgKGRldGVjdGVkRG9tYWluKSB7XG4gICAgICByZXR1cm4gYGh0dHAke2RldGVjdGVkRG9tYWluLmh0dHAgPyAnJyA6ICdzJ306Ly8ke2RldGVjdGVkRG9tYWluLmRvbWFpbn0ke1xuICAgICAgICBiYXNlUGF0aCB8fCAnJ1xuICAgICAgfSR7bG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlID8gJycgOiBgLyR7bG9jYWxlfWB9JHtwYXRofWBcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cblxuICByZXR1cm4gZmFsc2Vcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJlxuICAgICAgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmXG4gICAgICAhcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgJiZcbiAgICAgIHBhdGggIT09ICcvJyArIGxvY2FsZVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICAocGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSArICcvJykgfHwgcGF0aCA9PT0gJy8nICsgbG9jYWxlKVxuICAgICAgPyBwYXRoLnN1YnN0cihsb2NhbGUubGVuZ3RoICsgMSkgfHwgJy8nXG4gICAgICA6IHBhdGhcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aDogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5SW5kZXggPSBwYXRoLmluZGV4T2YoJz8nKVxuICBjb25zdCBoYXNoSW5kZXggPSBwYXRoLmluZGV4T2YoJyMnKVxuXG4gIGlmIChxdWVyeUluZGV4ID4gLTEgfHwgaGFzaEluZGV4ID4gLTEpIHtcbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleClcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aClcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKVxuICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YFxuICByZXR1cm4gcGF0aFxufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHVybC5zdGFydHNXaXRoKCcvJykgfHwgdXJsLnN0YXJ0c1dpdGgoJyMnKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSlcbiAgICAgICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZXNlIHZhbHVlcyBzaG91bGQgYmUgZnVsbHkgZW5jb2RlZCBpbnN0ZWFkIG9mIGp1c3RcbiAgICAgICAgICAgICAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBpbnRvIHRoZSBVUkwgYW5kIHdlIGV4cGVjdCBVUkwgZW5jb2RlZCBzZWdtZW50c1xuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHBhcnNpbmcgZHluYW1pYyByb3V0ZSBwYXJhbXNcbiAgICAgICAgICAgICAgICAgICAgKHNlZ21lbnQpID0+IGVuY29kZVVSSUNvbXBvbmVudChzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICAvLyBSZXR1cm4gYmVjYXVzZSBpdCBjYW5ub3QgYmUgcm91dGVkIGJ5IHRoZSBOZXh0LmpzIHJvdXRlclxuICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgcmV0dXJuIChyZXNvbHZlQXMgPyBbdXJsQXNTdHJpbmddIDogdXJsQXNTdHJpbmcpIGFzIHN0cmluZ1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmw6IHN0cmluZykge1xuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG5cbiAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhcz86IFVybCkge1xuICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgLy8gd2UnbGwgZm9ybWF0IHRoZW0gaW50byB0aGUgc3RyaW5nIHZlcnNpb24gaGVyZS5cbiAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbilcbiAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pXG5cbiAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKVxuICByZXNvbHZlZEFzID0gcmVzb2x2ZWRBcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVkQXMpIDogcmVzb2x2ZWRBc1xuXG4gIGNvbnN0IHByZXBhcmVkVXJsID0gaHJlZkhhZE9yaWdpbiA/IHJlc29sdmVkSHJlZiA6IGFkZEJhc2VQYXRoKHJlc29sdmVkSHJlZilcbiAgY29uc3QgcHJlcGFyZWRBcyA9IGFzXG4gICAgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSlcbiAgICA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmXG5cbiAgcmV0dXJuIHtcbiAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKSxcbiAgfVxufVxuXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKFxuICBwYXJzZWRIcmVmOiBVcmxPYmplY3QsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYXBwbHlCYXNlUGF0aCA9IHRydWVcbikge1xuICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICApXG5cbiAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocGFnZSkgJiYgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgfVxuICAgIH0pXG4gIH1cbiAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhcnNlZEhyZWYucGF0aG5hbWUhKVxuICByZXR1cm4gcGFyc2VkSHJlZlxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICAgIHwgJ2lzUmVhZHknXG4gICAgfCAnaXNQcmV2aWV3J1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPVxuICB8IChPbWl0PENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbywgJ3N0eWxlU2hlZXRzJz4gJiB7IGluaXRpYWw6IHRydWUgfSlcbiAgfCBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm9cblxuZXhwb3J0IHR5cGUgQ29tcGxldGVQcml2YXRlUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogUmVjb3JkPHN0cmluZywgYW55PlxuICBlcnI/OiBFcnJvclxuICBlcnJvcj86IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wcyA9IFBpY2s8Q29tcGxldGVQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChcbiAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyxcbiAgQXBwOiBBcHBDb21wb25lbnQsXG4gIHJlc2V0U2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCBudWxsXG4pID0+IFByb21pc2U8dm9pZD5cblxudHlwZSBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrID0gKHN0YXRlOiBOZXh0SGlzdG9yeVN0YXRlKSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9XG4gIHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiZcbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJlxuICAhIShmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGxldCB2ID0gJ19fbmV4dCdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIHJldHVybiBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHYsIHYpLCBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKHYpLCB0cnVlXG4gICAgfSBjYXRjaCAobikge31cbiAgfSkoKVxuXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgICAgIGlmIChkYXRhLm5vdEZvdW5kKSB7XG4gICAgICAgICAgICByZXR1cm4geyBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgIH1cbiAgICByZXR1cm4gcmVzLmpzb24oKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmOiBzdHJpbmcsIGlzU2VydmVyUmVuZGVyOiBib29sZWFuKSB7XG4gIHJldHVybiBmZXRjaFJldHJ5KGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlciA/IDMgOiAxKS5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgLy8gbG9vcC5cblxuICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgIG1hcmtBc3NldEVycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gIGRvbWFpbkxvY2FsZXM/OiBEb21haW5Mb2NhbGVzXG4gIGlzUmVhZHk6IGJvb2xlYW5cbiAgaXNQcmV2aWV3OiBib29sZWFuXG4gIGlzTG9jYWxlRG9tYWluOiBib29sZWFuXG5cbiAgcHJpdmF0ZSBfaWR4OiBudW1iZXIgPSAwXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgIGlzUHJldmlldyxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgICAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgICAgIGlzUHJldmlldz86IGJvb2xlYW5cbiAgICB9XG4gICkge1xuICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgIHRoaXMucm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgaW5pdGlhbDogdHJ1ZSxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICBDb21wb25lbnQ6IEFwcCBhcyBDb21wb25lbnRUeXBlLFxuICAgICAgc3R5bGVTaGVldHM6IFtcbiAgICAgICAgLyogL19hcHAgZG9lcyBub3QgbmVlZCBpdHMgc3R5bGVzaGVldHMgbWFuYWdlZCAqL1xuICAgICAgXSxcbiAgICB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID1cbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBzZWxmLl9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydFxuXG4gICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIHRoaXMuaXNSZWFkeSA9ICEhKFxuICAgICAgc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHxcbiAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHxcbiAgICAgICghYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoKVxuICAgIClcbiAgICB0aGlzLmlzUHJldmlldyA9ICEhaXNQcmV2aWV3XG4gICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVcbiAgICAgIHRoaXMubG9jYWxlcyA9IGxvY2FsZXNcbiAgICAgIHRoaXMuZGVmYXVsdExvY2FsZSA9IGRlZmF1bHRMb2NhbGVcbiAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXNcbiAgICAgIHRoaXMuaXNMb2NhbGVEb21haW4gPSAhIWRldGVjdERvbWFpbkxvY2FsZShcbiAgICAgICAgZG9tYWluTG9jYWxlcyxcbiAgICAgICAgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZVxuICAgICAgKVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKCksXG4gICAgICAgICAgeyBsb2NhbGUgfVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBsZXQgZm9yY2VkU2Nyb2xsOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyIH0gfCB1bmRlZmluZWRcbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMsIGlkeCB9ID0gc3RhdGVcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7IHg6IHNlbGYucGFnZVhPZmZzZXQsIHk6IHNlbGYucGFnZVlPZmZzZXQgfSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9IGNhdGNoIHt9XG5cbiAgICAgICAgICAvLyBSZXN0b3JlIG9sZCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpXG4gICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYhKVxuICAgICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0geyB4OiAwLCB5OiAwIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5faWR4ID0gaWR4XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbjx7fSwgVHJhbnNpdGlvbk9wdGlvbnMsIFRyYW5zaXRpb25PcHRpb25zPih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KSxcbiAgICAgIGZvcmNlZFNjcm9sbFxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzPzogVXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgIC8vIFRPRE86IHJlbW92ZSBpbiB0aGUgZnV0dXJlIHdoZW4gd2UgdXBkYXRlIGhpc3RvcnkgYmVmb3JlIHJvdXRlIGNoYW5nZVxuICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cbiAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxuICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAnX19uZXh0X3Njcm9sbF8nICsgdGhpcy5faWR4LFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoeyB4OiBzZWxmLnBhZ2VYT2Zmc2V0LCB5OiBzZWxmLnBhZ2VZT2Zmc2V0IH0pXG4gICAgICAgICAgKVxuICAgICAgICB9IGNhdGNoIHt9XG4gICAgICB9XG4gICAgfVxuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdwdXNoU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHJlcGxhY2VTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICByZXBsYWNlKHVybDogVXJsLCBhcz86IFVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjaGFuZ2UoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMsXG4gICAgZm9yY2VkU2Nyb2xsPzogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXG4gICAgaWYgKChvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNSZWFkeSA9IHRydWVcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IHRvIHNjcm9sbCByZXNldCBiZWhhdmlvciB1bmxlc3MgZXhwbGljaXRseSBzcGVjaWZpZWQgdG8gYmVcbiAgICAvLyBgZmFsc2VgISBUaGlzIG1ha2VzIHRoZSBiZWhhdmlvciBiZXR3ZWVuIHVzaW5nIGBSb3V0ZXIjcHVzaGAgYW5kIGFcbiAgICAvLyBgPExpbmsgLz5gIGNvbnNpc3RlbnQuXG4gICAgb3B0aW9ucy5zY3JvbGwgPSAhIShvcHRpb25zLnNjcm9sbCA/PyB0cnVlKVxuXG4gICAgbGV0IGxvY2FsZUNoYW5nZSA9IG9wdGlvbnMubG9jYWxlICE9PSB0aGlzLmxvY2FsZVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID1cbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlXG4gICAgICAgICAgPyB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgICA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKVxuICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9IG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lLFxuICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgIClcblxuICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcbiAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlXG4gICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpXG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgoXG4gICAgICAgICAgICBoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCxcbiAgICAgICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgICAgICkucGF0aG5hbWVcbiAgICAgICAgKVxuICAgICAgfVxuICAgICAgbGV0IGRpZE5hdmlnYXRlID0gZmFsc2VcblxuICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIC8vIGlmIHRoZSBsb2NhbGUgaXNuJ3QgY29uZmlndXJlZCBoYXJkIG5hdmlnYXRlIHRvIHNob3cgNDA0IHBhZ2VcbiAgICAgICAgaWYgKCF0aGlzLmxvY2FsZXM/LmluY2x1ZGVzKHRoaXMubG9jYWxlISkpIHtcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGFkZExvY2FsZShwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcylcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29uc3QgZGV0ZWN0ZWREb21haW4gPSBkZXRlY3REb21haW5Mb2NhbGUoXG4gICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyxcbiAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgKVxuXG4gICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcbiAgICAgIC8vIG1vdmVzIHRoaXMgb24gaXRzIG93biBkdWUgdG8gdGhlIHJldHVyblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgLy8gY29ycmVjdCBkb21haW5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICFkaWROYXZpZ2F0ZSAmJlxuICAgICAgICAgIGRldGVjdGVkRG9tYWluICYmXG4gICAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiAmJlxuICAgICAgICAgIHNlbGYubG9jYXRpb24uaG9zdG5hbWUgIT09IGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICApIHtcbiAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcylcbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtcbiAgICAgICAgICAgIGRldGVjdGVkRG9tYWluLmRvbWFpblxuICAgICAgICAgIH0ke2FkZEJhc2VQYXRoKFxuICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgIHRoaXMubG9jYWxlID09PSBkZXRlY3RlZERvbWFpbi5kZWZhdWx0TG9jYWxlXG4gICAgICAgICAgICAgICAgPyAnJ1xuICAgICAgICAgICAgICAgIDogYC8ke3RoaXMubG9jYWxlfWBcbiAgICAgICAgICAgIH0ke2FzTm9CYXNlUGF0aCA9PT0gJy8nID8gJycgOiBhc05vQmFzZVBhdGh9YCB8fCAnLydcbiAgICAgICAgICApfWBcbiAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIShvcHRpb25zIGFzIGFueSkuX2gpIHtcbiAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgIH1cbiAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgaWYgKFNUKSB7XG4gICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpXG4gICAgfVxuXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcbiAgICBjb25zdCByb3V0ZVByb3BzID0geyBzaGFsbG93IH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKVxuICAgIH1cblxuICAgIGFzID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgICBvcHRpb25zLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICAvLyBUaGUgYnVpbGQgbWFuaWZlc3QgbmVlZHMgdG8gYmUgbG9hZGVkIGJlZm9yZSBhdXRvLXN0YXRpYyBkeW5hbWljIHBhZ2VzXG4gICAgLy8gZ2V0IHRoZWlyIHF1ZXJ5IHBhcmFtZXRlcnMgdG8gYWxsb3cgZW5zdXJpbmcgdGhleSBjYW4gYmUgcGFyc2VkIHByb3Blcmx5XG4gICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICBsZXQgcGFnZXM6IGFueSwgcmV3cml0ZXM6IGFueVxuICAgIHRyeSB7XG4gICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcGFyc2VkID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSAmJiAhbG9jYWxlQ2hhbmdlKSB7XG4gICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgIH1cblxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9IHJlc29sdmVSZXdyaXRlcyhcbiAgICAgICAgYWRkQmFzZVBhdGgoYWRkTG9jYWxlKGRlbEJhc2VQYXRoKGFzKSwgdGhpcy5sb2NhbGUpKSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZSh7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuICAgICAgcmVzb2x2ZWRBcyA9IHJld3JpdGVzUmVzdWx0LmFzUGF0aFxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghaXNMb2NhbFVSTChhcykpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgK1xuICAgICAgICAgICAgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vZXJyLnNoL25leHQuanMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgIHJvdXRlUHJvcHNcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgIGlmICgocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiYgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVCkge1xuICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXG4gICAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgICAgICAgICAgIHJlc29sdmVEeW5hbWljUm91dGUocGFyc2VkSHJlZiwgcGFnZXMsIGZhbHNlKVxuXG4gICAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmw6IG5ld1VybCwgYXM6IG5ld0FzIH0gPSBwcmVwYXJlVXJsQXMoXG4gICAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvbixcbiAgICAgICAgICAgICAgICBkZXN0aW5hdGlvblxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFwcm9wcy5fX05fUFJFVklFV1xuXG4gICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgaWYgKHByb3BzLm5vdEZvdW5kID09PSBTU0dfREFUQV9OT1RfRk9VTkQpIHtcbiAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZVxuXG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKVxuICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0J1xuICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcidcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgICAgIG5vdEZvdW5kUm91dGUsXG4gICAgICAgICAgICBub3RGb3VuZFJvdXRlLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICBhcyxcbiAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICB7IHNoYWxsb3c6IGZhbHNlIH1cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlXG5cbiAgICAgIGlmIChcbiAgICAgICAgKG9wdGlvbnMgYXMgYW55KS5faCAmJlxuICAgICAgICBwYXRobmFtZSA9PT0gJy9fZXJyb3InICYmXG4gICAgICAgIHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcz8ucGFnZVByb3BzPy5zdGF0dXNDb2RlID09PSA1MDAgJiZcbiAgICAgICAgcHJvcHM/LnBhZ2VQcm9wc1xuICAgICAgKSB7XG4gICAgICAgIC8vIGVuc3VyZSBzdGF0dXNDb2RlIGlzIHN0aWxsIGNvcnJlY3QgZm9yIHN0YXRpYyA1MDAgcGFnZVxuICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgIHByb3BzLnBhZ2VQcm9wcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUhLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgY2xlYW5lZEFzLFxuICAgICAgICByb3V0ZUluZm8sXG4gICAgICAgIGZvcmNlZFNjcm9sbCB8fFxuICAgICAgICAgIChpc1ZhbGlkU2hhbGxvd1JvdXRlIHx8ICFvcHRpb25zLnNjcm9sbCA/IG51bGwgOiB7IHg6IDAsIHk6IDAgfSlcbiAgICAgICkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICB9KVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgaWYgKHRoaXMubG9jYWxlKSB7XG4gICAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmxhbmcgPSB0aGlzLmxvY2FsZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICByb3V0ZVByb3BzOiBSb3V0ZVByb3BlcnRpZXMsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChpc0Fzc2V0RXJyb3IoZXJyKSB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnIsXG4gICAgICAgIGVycm9yOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICAgICAgcm91dGVJbmZvRXJyLFxuICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIGFzLFxuICAgICAgICByb3V0ZVByb3BzLFxuICAgICAgICB0cnVlXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgcmVzb2x2ZWRBczogc3RyaW5nLFxuICAgIHJvdXRlUHJvcHM6IFJvdXRlUHJvcGVydGllc1xuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gfCB1bmRlZmluZWQgPSB0aGlzLmNvbXBvbmVudHNbXG4gICAgICAgIHJvdXRlXG4gICAgICBdXG4gICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm86IENvbXBsZXRlUHJpdmF0ZVJvdXRlSW5mbyB8IHVuZGVmaW5lZCA9XG4gICAgICAgIGV4aXN0aW5nUm91dGVJbmZvICYmICdpbml0aWFsJyBpbiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgICAgID8gdW5kZWZpbmVkXG4gICAgICAgICAgOiBleGlzdGluZ1JvdXRlSW5mb1xuICAgICAgY29uc3Qgcm91dGVJbmZvOiBDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxDb21wbGV0ZVByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSwgcmVzZXRTY3JvbGwpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZSBvciBgI3RvcGBcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBpZiAoaGFzaCA9PT0gJycgfHwgaGFzaCA9PT0gJ3RvcCcpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgIHBhdGhuYW1lID0gbm9ybWFsaXplTG9jYWxlUGF0aCEocGF0aG5hbWUsIHRoaXMubG9jYWxlcykucGF0aG5hbWVcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuXG4gICAgICAgIGxldCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKVxuICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aCEoXG4gICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUsXG4gICAgICAgICAgdGhpcy5sb2NhbGVzXG4gICAgICAgIClcbiAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGVcbiAgICAgICAgYXNQYXRoID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpXG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQsIHBhZ2VzLCBmYWxzZSkgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuICAgIGxldCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNQYXRoXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICBsZXQgcmV3cml0ZXM6IGFueVtdXG4gICAgICA7KHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IGdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSlcblxuICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIGFkZEJhc2VQYXRoKGFkZExvY2FsZShkZWxCYXNlUGF0aChhc1BhdGgpLCB0aGlzLmxvY2FsZSkpLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgcmV3cml0ZXMsXG4gICAgICAgIHBhcnNlZC5xdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gcmVzb2x2ZUR5bmFtaWNSb3V0ZSh7IHBhdGhuYW1lOiBwIH0sIHBhZ2VzKS5wYXRobmFtZSEsXG4gICAgICAgIHRoaXMubG9jYWxlc1xuICAgICAgKVxuXG4gICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgcm91dGUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGF0aG5hbWUgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWZcbiAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIuX2lzU3NnKHVybCkudGhlbigoaXNTc2c6IGJvb2xlYW4pID0+IHtcbiAgICAgICAgcmV0dXJuIGlzU3NnXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIHJlc29sdmVkQXMsXG4gICAgICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgICAgICB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IG9wdGlvbnMubG9jYWxlXG4gICAgICAgICAgICAgICAgICA6IHRoaXMubG9jYWxlXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IGZhbHNlXG4gICAgICB9KSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChcbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiZcbiAgICAgICF0aGlzLmlzUHJldmlldyAmJlxuICAgICAgdGhpcy5zZGNbY2FjaGVLZXldXG4gICAgKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZywgcm91dGVQcm9wczogUm91dGVQcm9wZXJ0aWVzKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoXG4gICAgICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAgICAgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLFxuICAgICAgICBhcyxcbiAgICAgICAgcm91dGVQcm9wc1xuICAgICAgKVxuICAgICAgdGhpcy5jbGMoKVxuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuICB9XG5cbiAgbm90aWZ5KFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sXG4gICAgcmVzZXRTY3JvbGw6IHsgeDogbnVtYmVyOyB5OiBudW1iZXIgfSB8IG51bGxcbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKFxuICAgICAgZGF0YSxcbiAgICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50LFxuICAgICAgcmVzZXRTY3JvbGxcbiAgICApXG4gIH1cbn1cbiIsIi8vIEZvcm1hdCBmdW5jdGlvbiBtb2RpZmllZCBmcm9tIG5vZGVqc1xuLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgKiBhcyBxdWVyeXN0cmluZyBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG5jb25zdCBzbGFzaGVkUHJvdG9jb2xzID0gL2h0dHBzP3xmdHB8Z29waGVyfGZpbGUvXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRVcmwodXJsT2JqOiBVcmxPYmplY3QpIHtcbiAgbGV0IHsgYXV0aCwgaG9zdG5hbWUgfSA9IHVybE9ialxuICBsZXQgcHJvdG9jb2wgPSB1cmxPYmoucHJvdG9jb2wgfHwgJydcbiAgbGV0IHBhdGhuYW1lID0gdXJsT2JqLnBhdGhuYW1lIHx8ICcnXG4gIGxldCBoYXNoID0gdXJsT2JqLmhhc2ggfHwgJydcbiAgbGV0IHF1ZXJ5ID0gdXJsT2JqLnF1ZXJ5IHx8ICcnXG4gIGxldCBob3N0OiBzdHJpbmcgfCBmYWxzZSA9IGZhbHNlXG5cbiAgYXV0aCA9IGF1dGggPyBlbmNvZGVVUklDb21wb25lbnQoYXV0aCkucmVwbGFjZSgvJTNBL2ksICc6JykgKyAnQCcgOiAnJ1xuXG4gIGlmICh1cmxPYmouaG9zdCkge1xuICAgIGhvc3QgPSBhdXRoICsgdXJsT2JqLmhvc3RcbiAgfSBlbHNlIGlmIChob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKH5ob3N0bmFtZS5pbmRleE9mKCc6JykgPyBgWyR7aG9zdG5hbWV9XWAgOiBob3N0bmFtZSlcbiAgICBpZiAodXJsT2JqLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gJzonICsgdXJsT2JqLnBvcnRcbiAgICB9XG4gIH1cblxuICBpZiAocXVlcnkgJiYgdHlwZW9mIHF1ZXJ5ID09PSAnb2JqZWN0Jykge1xuICAgIHF1ZXJ5ID0gU3RyaW5nKHF1ZXJ5c3RyaW5nLnVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMocXVlcnkgYXMgUGFyc2VkVXJsUXVlcnkpKVxuICB9XG5cbiAgbGV0IHNlYXJjaCA9IHVybE9iai5zZWFyY2ggfHwgKHF1ZXJ5ICYmIGA/JHtxdWVyeX1gKSB8fCAnJ1xuXG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSAnOicpIHByb3RvY29sICs9ICc6J1xuXG4gIGlmIChcbiAgICB1cmxPYmouc2xhc2hlcyB8fFxuICAgICgoIXByb3RvY29sIHx8IHNsYXNoZWRQcm90b2NvbHMudGVzdChwcm90b2NvbCkpICYmIGhvc3QgIT09IGZhbHNlKVxuICApIHtcbiAgICBob3N0ID0gJy8vJyArIChob3N0IHx8ICcnKVxuICAgIGlmIChwYXRobmFtZSAmJiBwYXRobmFtZVswXSAhPT0gJy8nKSBwYXRobmFtZSA9ICcvJyArIHBhdGhuYW1lXG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gJydcbiAgfVxuXG4gIGlmIChoYXNoICYmIGhhc2hbMF0gIT09ICcjJykgaGFzaCA9ICcjJyArIGhhc2hcbiAgaWYgKHNlYXJjaCAmJiBzZWFyY2hbMF0gIT09ICc/Jykgc2VhcmNoID0gJz8nICsgc2VhcmNoXG5cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csIGVuY29kZVVSSUNvbXBvbmVudClcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoJyMnLCAnJTIzJylcblxuICByZXR1cm4gYCR7cHJvdG9jb2x9JHtob3N0fSR7cGF0aG5hbWV9JHtzZWFyY2h9JHtoYXNofWBcbn1cbiIsIi8vIElkZW50aWZ5IC9bcGFyYW1dLyBpbiByb3V0ZSBzdHJpbmdcbmNvbnN0IFRFU1RfUk9VVEUgPSAvXFwvXFxbW14vXSs/XFxdKD89XFwvfCQpL1xuXG5leHBvcnQgZnVuY3Rpb24gaXNEeW5hbWljUm91dGUocm91dGU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gVEVTVF9ST1VURS50ZXN0KHJvdXRlKVxufVxuIiwiaW1wb3J0IHsgZ2V0TG9jYXRpb25PcmlnaW4gfSBmcm9tICcuLi8uLi91dGlscydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuXG4vKipcbiAqIFBhcnNlcyBwYXRoLXJlbGF0aXZlIHVybHMgKGUuZy4gYC9oZWxsby93b3JsZD9mb289YmFyYCkuIElmIHVybCBpc24ndCBwYXRoLXJlbGF0aXZlXG4gKiAoZS5nLiBgLi9oZWxsb2ApIHRoZW4gYXQgbGVhc3QgYmFzZSBtdXN0IGJlLlxuICogQWJzb2x1dGUgdXJscyBhcmUgcmVqZWN0ZWQgd2l0aCBvbmUgZXhjZXB0aW9uLCBpbiB0aGUgYnJvd3NlciwgYWJzb2x1dGUgdXJscyB0aGF0IGFyZSBvblxuICogdGhlIGN1cnJlbnQgb3JpZ2luIHdpbGwgYmUgcGFyc2VkIGFzIHJlbGF0aXZlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVJlbGF0aXZlVXJsKHVybDogc3RyaW5nLCBiYXNlPzogc3RyaW5nKSB7XG4gIGNvbnN0IGdsb2JhbEJhc2UgPSBuZXcgVVJMKFxuICAgIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbiAgKVxuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBnbG9iYWxCYXNlKSA6IGdsb2JhbEJhc2VcbiAgY29uc3QgeyBwYXRobmFtZSwgc2VhcmNoUGFyYW1zLCBzZWFyY2gsIGhhc2gsIGhyZWYsIG9yaWdpbiB9ID0gbmV3IFVSTChcbiAgICB1cmwsXG4gICAgcmVzb2x2ZWRCYXNlXG4gIClcbiAgaWYgKG9yaWdpbiAhPT0gZ2xvYmFsQmFzZS5vcmlnaW4pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYGludmFyaWFudDogaW52YWxpZCByZWxhdGl2ZSBVUkwsIHJvdXRlciByZWNlaXZlZCAke3VybH1gKVxuICB9XG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWUsXG4gICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmOiBocmVmLnNsaWNlKGdsb2JhbEJhc2Uub3JpZ2luLmxlbmd0aCksXG4gIH1cbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5cbmV4cG9ydCBmdW5jdGlvbiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KFxuICBzZWFyY2hQYXJhbXM6IFVSTFNlYXJjaFBhcmFtc1xuKTogUGFyc2VkVXJsUXVlcnkge1xuICBjb25zdCBxdWVyeTogUGFyc2VkVXJsUXVlcnkgPSB7fVxuICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgIGlmICh0eXBlb2YgcXVlcnlba2V5XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSB2YWx1ZVxuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShxdWVyeVtrZXldKSkge1xuICAgICAgOyhxdWVyeVtrZXldIGFzIHN0cmluZ1tdKS5wdXNoKHZhbHVlKVxuICAgIH0gZWxzZSB7XG4gICAgICBxdWVyeVtrZXldID0gW3F1ZXJ5W2tleV0gYXMgc3RyaW5nLCB2YWx1ZV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBxdWVyeVxufVxuXG5mdW5jdGlvbiBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHBhcmFtOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAoXG4gICAgdHlwZW9mIHBhcmFtID09PSAnc3RyaW5nJyB8fFxuICAgICh0eXBlb2YgcGFyYW0gPT09ICdudW1iZXInICYmICFpc05hTihwYXJhbSkpIHx8XG4gICAgdHlwZW9mIHBhcmFtID09PSAnYm9vbGVhbidcbiAgKSB7XG4gICAgcmV0dXJuIFN0cmluZyhwYXJhbSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gdXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhcbiAgdXJsUXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBjb25zdCByZXN1bHQgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKClcbiAgT2JqZWN0LmVudHJpZXModXJsUXVlcnkpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgdmFsdWUuZm9yRWFjaCgoaXRlbSkgPT4gcmVzdWx0LmFwcGVuZChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0oaXRlbSkpKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQuc2V0KGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbSh2YWx1ZSkpXG4gICAgfVxuICB9KVxuICByZXR1cm4gcmVzdWx0XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ24oXG4gIHRhcmdldDogVVJMU2VhcmNoUGFyYW1zLFxuICAuLi5zZWFyY2hQYXJhbXNMaXN0OiBVUkxTZWFyY2hQYXJhbXNbXVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgc2VhcmNoUGFyYW1zTGlzdC5mb3JFYWNoKChzZWFyY2hQYXJhbXMpID0+IHtcbiAgICBBcnJheS5mcm9tKHNlYXJjaFBhcmFtcy5rZXlzKCkpLmZvckVhY2goKGtleSkgPT4gdGFyZ2V0LmRlbGV0ZShrZXkpKVxuICAgIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB0YXJnZXQuYXBwZW5kKGtleSwgdmFsdWUpKVxuICB9KVxuICByZXR1cm4gdGFyZ2V0XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoKSB7fVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEdyb3VwIHtcbiAgcG9zOiBudW1iZXJcbiAgcmVwZWF0OiBib29sZWFuXG4gIG9wdGlvbmFsOiBib29sZWFuXG59XG5cbi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFyYW1ldGVyKHBhcmFtOiBzdHJpbmcpIHtcbiAgY29uc3Qgb3B0aW9uYWwgPSBwYXJhbS5zdGFydHNXaXRoKCdbJykgJiYgcGFyYW0uZW5kc1dpdGgoJ10nKVxuICBpZiAob3B0aW9uYWwpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDEsIC0xKVxuICB9XG4gIGNvbnN0IHJlcGVhdCA9IHBhcmFtLnN0YXJ0c1dpdGgoJy4uLicpXG4gIGlmIChyZXBlYXQpIHtcbiAgICBwYXJhbSA9IHBhcmFtLnNsaWNlKDMpXG4gIH1cbiAgcmV0dXJuIHsga2V5OiBwYXJhbSwgcmVwZWF0LCBvcHRpb25hbCB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgcm91dGVLZXlzPzogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9XG4gIGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9XG59IHtcbiAgY29uc3Qgc2VnbWVudHMgPSAobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuICAgIC5zbGljZSgxKVxuICAgIC5zcGxpdCgnLycpXG5cbiAgY29uc3QgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH0gPSB7fVxuICBsZXQgZ3JvdXBJbmRleCA9IDFcbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgZ3JvdXBzW2tleV0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQsIG9wdGlvbmFsIH1cbiAgICAgICAgcmV0dXJuIHJlcGVhdCA/IChvcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICB9XG4gICAgfSlcbiAgICAuam9pbignJylcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbGV0IHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgIGxldCByb3V0ZUtleUNoYXJMZW5ndGggPSAxXG5cbiAgICAvLyBidWlsZHMgYSBtaW5pbWFsIHJvdXRlS2V5IHVzaW5nIG9ubHkgYS16IGFuZCBtaW5pbWFsIG51bWJlciBvZiBjaGFyYWN0ZXJzXG4gICAgY29uc3QgZ2V0U2FmZVJvdXRlS2V5ID0gKCkgPT4ge1xuICAgICAgbGV0IHJvdXRlS2V5ID0gJydcblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb3V0ZUtleUNoYXJMZW5ndGg7IGkrKykge1xuICAgICAgICByb3V0ZUtleSArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHJvdXRlS2V5Q2hhckNvZGUpXG4gICAgICAgIHJvdXRlS2V5Q2hhckNvZGUrK1xuXG4gICAgICAgIGlmIChyb3V0ZUtleUNoYXJDb2RlID4gMTIyKSB7XG4gICAgICAgICAgcm91dGVLZXlDaGFyTGVuZ3RoKytcbiAgICAgICAgICByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJvdXRlS2V5XG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGVLZXlzOiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH0gPSB7fVxuXG4gICAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gc2VnbWVudHNcbiAgICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICAgIGNvbnN0IHsga2V5LCBvcHRpb25hbCwgcmVwZWF0IH0gPSBwYXJzZVBhcmFtZXRlcihzZWdtZW50LnNsaWNlKDEsIC0xKSlcbiAgICAgICAgICAvLyByZXBsYWNlIGFueSBub24td29yZCBjaGFyYWN0ZXJzIHNpbmNlIHRoZXkgY2FuIGJyZWFrXG4gICAgICAgICAgLy8gdGhlIG5hbWVkIHJlZ2V4XG4gICAgICAgICAgbGV0IGNsZWFuZWRLZXkgPSBrZXkucmVwbGFjZSgvXFxXL2csICcnKVxuICAgICAgICAgIGxldCBpbnZhbGlkS2V5ID0gZmFsc2VcblxuICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBrZXkgaXMgc3RpbGwgaW52YWxpZCBhbmQgZmFsbGJhY2sgdG8gdXNpbmcgYSBrbm93blxuICAgICAgICAgIC8vIHNhZmUga2V5XG4gICAgICAgICAgaWYgKGNsZWFuZWRLZXkubGVuZ3RoID09PSAwIHx8IGNsZWFuZWRLZXkubGVuZ3RoID4gMzApIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghaXNOYU4ocGFyc2VJbnQoY2xlYW5lZEtleS5zdWJzdHIoMCwgMSkpKSkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaW52YWxpZEtleSkge1xuICAgICAgICAgICAgY2xlYW5lZEtleSA9IGdldFNhZmVSb3V0ZUtleSgpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcm91dGVLZXlzW2NsZWFuZWRLZXldID0ga2V5XG4gICAgICAgICAgcmV0dXJuIHJlcGVhdFxuICAgICAgICAgICAgPyBvcHRpb25hbFxuICAgICAgICAgICAgICA/IGAoPzovKD88JHtjbGVhbmVkS2V5fT4uKz8pKT9gXG4gICAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9Pi4rPylgXG4gICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT5bXi9dKz8pYFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmpvaW4oJycpXG5cbiAgICByZXR1cm4ge1xuICAgICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgICBncm91cHMsXG4gICAgICByb3V0ZUtleXMsXG4gICAgICBuYW1lZFJlZ2V4OiBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGAsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICBncm91cHMsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IGZvcm1hdFVybCB9IGZyb20gJy4vcm91dGVyL3V0aWxzL2Zvcm1hdC11cmwnXG5pbXBvcnQgeyBNYW5pZmVzdEl0ZW0gfSBmcm9tICcuLi9zZXJ2ZXIvbG9hZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciB9IGZyb20gJy4vcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IEVudiB9IGZyb20gJ0BuZXh0L2VudidcbmltcG9ydCB7IEJ1aWxkTWFuaWZlc3QgfSBmcm9tICcuLi9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMnXG5pbXBvcnQgeyBEb21haW5Mb2NhbGVzIH0gZnJvbSAnLi4vc2VydmVyL2NvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbiAgZG9tYWluTG9jYWxlcz86IERvbWFpbkxvY2FsZXNcbiAgc2NyaXB0TG9hZGVyPzogYW55W11cbiAgaXNQcmV2aWV3PzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgdW5zdGFibGVfSnNQcmVsb2FkPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBzY3JpcHRMb2FkZXI6IHsgZGVmZXI/OiBzdHJpbmdbXTsgZWFnZXI/OiBhbnlbXSB9XG4gIGxvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxuXG4gIHByZXZpZXc/OiBib29sZWFuXG4gIC8qKlxuICAgKiBQcmV2aWV3IGRhdGEgc2V0IG9uIHRoZSByZXF1ZXN0LCBpZiBhbnlcbiAgICogKi9cbiAgcHJldmlld0RhdGE/OiBhbnlcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdCh1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuICByZWRpcmVjdChzdGF0dXM6IG51bWJlciwgdXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cblxuICAvKipcbiAgICogU2V0IHByZXZpZXcgZGF0YSBmb3IgTmV4dC5qcycgcHJlcmVuZGVyIG1vZGVcbiAgICovXG4gIHNldFByZXZpZXdEYXRhOiAoXG4gICAgZGF0YTogb2JqZWN0IHwgc3RyaW5nLFxuICAgIG9wdGlvbnM/OiB7XG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGUgbnVtYmVyIChpbiBzZWNvbmRzKSBmb3IgdGhlIHByZXZpZXcgc2Vzc2lvbiB0byBsYXN0IGZvci5cbiAgICAgICAqIFRoZSBnaXZlbiBudW1iZXIgd2lsbCBiZSBjb252ZXJ0ZWQgdG8gYW4gaW50ZWdlciBieSByb3VuZGluZyBkb3duLlxuICAgICAgICogQnkgZGVmYXVsdCwgbm8gbWF4aW11bSBhZ2UgaXMgc2V0IGFuZCB0aGUgcHJldmlldyBzZXNzaW9uIGZpbmlzaGVzXG4gICAgICAgKiB3aGVuIHRoZSBjbGllbnQgc2h1dHMgZG93biAoYnJvd3NlciBpcyBjbG9zZWQpLlxuICAgICAgICovXG4gICAgICBtYXhBZ2U/OiBudW1iZXJcbiAgICB9XG4gICkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIGNsZWFyUHJldmlld0RhdGE6ICgpID0+IE5leHRBcGlSZXNwb25zZTxUPlxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgaGFuZGxlclxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpSGFuZGxlcjxUID0gYW55PiA9IChcbiAgcmVxOiBOZXh0QXBpUmVxdWVzdCxcbiAgcmVzOiBOZXh0QXBpUmVzcG9uc2U8VD5cbikgPT4gdm9pZCB8IFByb21pc2U8dm9pZD5cblxuLyoqXG4gKiBVdGlsc1xuICovXG5leHBvcnQgZnVuY3Rpb24gZXhlY09uY2U8VCBleHRlbmRzICguLi5hcmdzOiBhbnlbXSkgPT4gUmV0dXJuVHlwZTxUPj4oXG4gIGZuOiBUXG4pOiBUIHtcbiAgbGV0IHVzZWQgPSBmYWxzZVxuICBsZXQgcmVzdWx0OiBSZXR1cm5UeXBlPFQ+XG5cbiAgcmV0dXJuICgoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBpZiAoIXVzZWQpIHtcbiAgICAgIHVzZWQgPSB0cnVlXG4gICAgICByZXN1bHQgPSBmbiguLi5hcmdzKVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0XG4gIH0pIGFzIFRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExvY2F0aW9uT3JpZ2luKCkge1xuICBjb25zdCB7IHByb3RvY29sLCBob3N0bmFtZSwgcG9ydCB9ID0gd2luZG93LmxvY2F0aW9uXG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdG5hbWV9JHtwb3J0ID8gJzonICsgcG9ydCA6ICcnfWBcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVSTCgpIHtcbiAgY29uc3QgeyBocmVmIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgY29uc3Qgb3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICByZXR1cm4gaHJlZi5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lPFA+KENvbXBvbmVudDogQ29tcG9uZW50VHlwZTxQPikge1xuICByZXR1cm4gdHlwZW9mIENvbXBvbmVudCA9PT0gJ3N0cmluZydcbiAgICA/IENvbXBvbmVudFxuICAgIDogQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNSZXNTZW50KHJlczogU2VydmVyUmVzcG9uc2UpIHtcbiAgcmV0dXJuIHJlcy5maW5pc2hlZCB8fCByZXMuaGVhZGVyc1NlbnRcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWRHZXRJbml0aWFsUHJvcHM8XG4gIEMgZXh0ZW5kcyBCYXNlQ29udGV4dCxcbiAgSVAgPSB7fSxcbiAgUCA9IHt9XG4+KEFwcDogTmV4dENvbXBvbmVudFR5cGU8QywgSVAsIFA+LCBjdHg6IEMpOiBQcm9taXNlPElQPiB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKEFwcC5wcm90b3R5cGU/LmdldEluaXRpYWxQcm9wcykge1xuICAgICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgIEFwcFxuICAgICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBpcyBkZWZpbmVkIGFzIGFuIGluc3RhbmNlIG1ldGhvZCAtIHZpc2l0IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsOiBVcmxPYmplY3QpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VXJsKHVybClcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMubm9ybWFsaXplUGF0aFNlcD1ub3JtYWxpemVQYXRoU2VwO2V4cG9ydHMuZGVub3JtYWxpemVQYWdlUGF0aD1kZW5vcm1hbGl6ZVBhZ2VQYXRoO2Z1bmN0aW9uIG5vcm1hbGl6ZVBhdGhTZXAocGF0aCl7cmV0dXJuIHBhdGgucmVwbGFjZSgvXFxcXC9nLCcvJyk7fWZ1bmN0aW9uIGRlbm9ybWFsaXplUGFnZVBhdGgocGFnZSl7cGFnZT1ub3JtYWxpemVQYXRoU2VwKHBhZ2UpO2lmKHBhZ2Uuc3RhcnRzV2l0aCgnL2luZGV4LycpKXtwYWdlPXBhZ2Uuc2xpY2UoNik7fWVsc2UgaWYocGFnZT09PScvaW5kZXgnKXtwYWdlPScvJzt9cmV0dXJuIHBhZ2U7fVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBEYXNoYm9hcmRMYXlvdXQgZnJvbSAnLi4vLi4vbGF5b3V0cy9EYXNoYm9hcmQnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCBjcmVhdGVGYWN0b3J5IH0gZnJvbSBcInJlYWN0XCJcbmltcG9ydCBQZXJzb25hbEluZm8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TdXBwbGllclJlZ2lzdHJhdGlvbi9QZXJzb25hbEluZm8nXG5pbXBvcnQgVXBsb2FkUGhvdG9zIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3VwcGxpZXJSZWdpc3RyYXRpb24vVXBsb2FkUGhvdG9zJ1xuaW1wb3J0IFZlaGljbGVEZXRhaWxzIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3VwcGxpZXJSZWdpc3RyYXRpb24vVmVoaWNsZURldGFpbHMnXG5pbXBvcnQgVXBsb2FkVmVoaWNsZVBob3RvcyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1N1cHBsaWVyUmVnaXN0cmF0aW9uL1VwbG9hZFZlaGljbGVQaG90b3MnXG5pbXBvcnQgeyBnZXRTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL2NsaWVudCdcbmltcG9ydCB7IGdldE1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvcHJvdmlkZXJzJ1xuaW1wb3J0IHsgVG9hc3RDb250YWluZXIgfSBmcm9tICdyZWFjdC10b2FzdGlmeSdcbmltcG9ydCB7IHJlY292ZXJPd25lciB9IGZyb20gJy4uLy4uL2FwaS9vd25lci9yZWNvdmVyT3duZXInXG5pbXBvcnQgeyBnZXRDZXAgfSBmcm9tICcuLi8uLi9hcGkvZHJpdmVyL3VwZGF0ZURyaXZlcidcblxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyBub3RpZnkgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb24nXG5pbXBvcnQgeyBGdWxsUGFnZUxvYWRlciB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVUkvTG9hZGVyJ1xuaW1wb3J0IHsgY3JlYXRlRmlsZSB9IGZyb20gJy4uLy4uL2FwaS9maWxlcy9jcmVhdGVGaWxlcydcbmltcG9ydCB7IGNyZWF0ZUNhciB9IGZyb20gJy4uLy4uL2FwaS9vd25lci9jYXJzL2NyZWF0ZUNhcidcblxuXG5cbmNvbnN0IFN1cHBsaWVyUmVnaXN0cmF0aW9uRm9ybSA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcblxuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbb3duZXIsIHNldE93bmVyXSA9IHVzZVN0YXRlKHt9KVxuXG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IHVzZVN0YXRlKDApXG4gIGNvbnN0IFtub21lLCBzZXRub21lXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtlbWFpbCwgc2V0ZW1haWxdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2NlbHVsYXIsIHNldGNlbHVsYXJdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2NwZiwgc2V0Y3BmXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjZXAsIHNldGNlcF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZXN0YWRvLCBzZXRlc3RhZG9dID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2JhaXJybywgc2V0YmFpcnJvXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtydWEsIHNldHJ1YV0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbnVtZXJvLCBzZXRudW1lcm9dID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2NpZGFkZSwgc2V0Y2lkYWRlXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtjb21wbGVtZW50bywgc2V0Y29tcGxlbWVudG9dID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2NpZGFkZUlkLCBzZXRDaWRhZGVJZF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbcHJvY2Vzc2luZywgc2V0UHJvY2Vzc2luZ10gPSB1c2VTdGF0ZShmYWxzZSlcblxuXG5cbiAgY29uc3QgW21hcmNhQ2FyLCBzZXRNYXJjYUNhcl0gPSB1c2VTdGF0ZShcImFhXCIpXG4gIGNvbnN0IFttb2RlbG9DYXIsIHNldE1vZGVsb0Nhcl0gPSB1c2VTdGF0ZShcImFcIilcbiAgY29uc3QgW2Fub0Nhciwgc2V0QW5vQ2FyXSA9IHVzZVN0YXRlKFwiMjAyMVwiKVxuICBjb25zdCBbcGxhY2FDYXIsIHNldFBsYWNhQ2FyXSA9IHVzZVN0YXRlKFwiYVwiKVxuICBjb25zdCBbY2VwQ2FyLCBzZXRDZXBDYXJdID0gdXNlU3RhdGUoXCJhXCIpXG4gIGNvbnN0IFtlc3RhZG9DYXIsIHNldEVzdGFkb0Nhcl0gPSB1c2VTdGF0ZShcImFcIilcbiAgY29uc3QgW2NpZGFkZUNhciwgc2V0Q2lkYWRlQ2FyXSA9IHVzZVN0YXRlKFwiYVwiKVxuICBjb25zdCBbcnVhQ2FyLCBzZXRSdWFDYXJdID0gdXNlU3RhdGUoXCJhXCIpXG4gIGNvbnN0IFtzZW1hbmFDYXIsIHNldFNlbWFuYUNhcl0gPSB1c2VTdGF0ZShcImFcIilcbiAgY29uc3QgW2NhdWNhb0Nhciwgc2V0Q2F1Y2FvQ2FyXSA9IHVzZVN0YXRlKFwiYVwiKVxuICBjb25zdCBbZGlhcmlhQ2FyLCBzZXREaWFyaWFDYXJdID0gdXNlU3RhdGUoXCJhXCIpXG4gIGNvbnN0IFtudW1lcm9DYXIsIHNldE51bWVyb0Nhcl0gPSB1c2VTdGF0ZShcImFcIilcbiAgY29uc3QgW2NvbXBsZW1lbnRvQ2FyLCBzZXRDb21wbGVtZW50b0Nhcl0gPSB1c2VTdGF0ZShcImFcIilcbiAgY29uc3QgW2JhaXJyb0Nhciwgc2V0QmFpcnJvQ2FyXSA9IHVzZVN0YXRlKFwiYVwiKVxuICBjb25zdCBbY2lkYWRlSWRDYXIsIHNldENpZGFkZUlkQ2FyXSA9IHVzZVN0YXRlKFwiYVwiKVxuXG4gIGNvbnN0IFtmcm9udGFsSWQsIHNldEZyb250YWxJZF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbZnJvbnRhbFVybCwgc2V0RnJvbnRhbFVybF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbG9hZGluZ0Zyb250YWwsIHNldExvYWRpbmdGcm9udGFsXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbbGF0ZXJhbERpcmVpdGFJZCwgc2V0TGF0ZXJhbERpcmVpdGFJZF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbGF0ZXJhbERpcmVpdGFVcmwsIHNldExhdGVyYWxEaXJlaXRhVXJsXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtsb2FkaW5nTGF0ZXJhbERpcmVpdGEsIHNldExvYWRpbmdMYXRlcmFsRGlyZWl0YV0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2xhdGVyYWxFc3F1ZXJkYUlkLCBzZXRMYXRlcmFsRXNxdWVyZGFJZF0gPSB1c2VTdGF0ZShcIlwiKVxuICBjb25zdCBbbGF0ZXJhbEVzcXVlcmRhVXJsLCBzZXRMYXRlcmFsRXNxdWVyZGFVcmxdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2xvYWRpbmdMYXRlcmFsRXNxdWVyZGEsIHNldExvYWRpbmdMYXRlcmFsRXNxdWVyZGFdID0gdXNlU3RhdGUoZmFsc2UpXG4gIGNvbnN0IFtmdW5kb0lkLCBzZXRGdW5kb0lkXSA9IHVzZVN0YXRlKFwiXCIpXG4gIGNvbnN0IFtmdW5kb1VybCwgc2V0RnVuZG9VcmxdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2xvYWRpbmdGdW5kbywgc2V0TG9hZGluZ0Z1bmRvXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBbcGFpbmVsSW50ZXJub0lkLCBzZXRQYWluZWxJbnRlcm5vSWRdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW3BhaW5lbEludGVybm9VcmwsIHNldFBhaW5lbEludGVybm9VcmxdID0gdXNlU3RhdGUoXCJcIilcbiAgY29uc3QgW2xvYWRpbmdQYWluZWxJbnRlcm5vLCBzZXRMb2FkaW5nUGFpbmVsSW50ZXJub10gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgW2NhclByb2Nlc3NpbmcsIHNldENhclByb2Nlc3NpbmddID0gdXNlU3RhdGUoZmFsc2UpXG5cblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVjb3Zlck93bmVyKHt9LCAoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0pXG5cbiAgICBpZiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coZGF0YSlcbiAgICAgIHNldE93bmVyKGRhdGEpXG4gICAgICBzZXRub21lKGRhdGEubm9tZSlcbiAgICAgIHNldGVtYWlsKGRhdGEuZW1haWwpXG4gICAgICBzZXRjZWx1bGFyKGRhdGEuY2VsdWxhcilcbiAgICAgIGlmIChkYXRhLnBlc3NvYV9maXNpY2EgJiYgZGF0YS5wZXNzb2FfZmlzaWNhLmNwZikge1xuICAgICAgICBzZXRjcGYoZGF0YS5wZXNzb2FfZmlzaWNhLmNwZilcbiAgICAgIH1cblxuICAgICAgaWYgKGRhdGEuZW5kZXJlY28ubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IGFkZHIgPSBkYXRhLmVuZGVyZWNvWzBdXG4gICAgICAgIGlmIChhZGRyLmNpZGFkZSAmJiBhZGRyLmNpZGFkZS5kZXNjcmljYW8pIHtcbiAgICAgICAgICBzZXRjaWRhZGUoYWRkci5jaWRhZGUuZGVzY3JpY2FvKVxuICAgICAgICAgIHNldENpZGFkZUlkKGFkZHIuY2lkYWRlLmlkKVxuICAgICAgICB9XG4gICAgICAgIGlmIChhZGRyLmNpZGFkZSAmJiBhZGRyLmNpZGFkZS5lc3RhZG8gJiYgYWRkci5jaWRhZGUuZXN0YWRvLmRlc2NyaWNhbykge1xuICAgICAgICAgIHNldGVzdGFkbyhhZGRyLmNpZGFkZS5lc3RhZG8uZGVzY3JpY2FvKVxuICAgICAgICB9XG4gICAgICAgIGlmIChhZGRyLmNlcCkge1xuICAgICAgICAgIHNldGNlcChhZGRyLmNlcClcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWRkci5iYWlycm8pIHtcbiAgICAgICAgICBzZXRiYWlycm8oYWRkci5iYWlycm8pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFkZHIubG9ncmFkb3Vybykge1xuICAgICAgICAgIHNldHJ1YShhZGRyLmxvZ3JhZG91cm8pXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFkZHIubnVtZXJvKSB7XG4gICAgICAgICAgc2V0bnVtZXJvKGFkZHIubnVtZXJvKVxuICAgICAgICB9XG4gICAgICAgIGlmIChhZGRyLmNvbXBsZW1lbnRvKSB7XG4gICAgICAgICAgc2V0Y29tcGxlbWVudG8oYWRkci5jb21wbGVtZW50bylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAocm91dGVyLnF1ZXJ5ICYmIHJvdXRlci5xdWVyeS5zdGVwKSB7XG4gICAgICBzZXRBY3RpdmVTdGVwKHBhcnNlSW50KHJvdXRlci5xdWVyeS5zdGVwKSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QWN0aXZlU3RlcCgyKVxuICAgIH1cbiAgfSwgW10pXG5cblxuICBjb25zdCBoYW5kbGVPd25lciA9IGFzeW5jIChlKSA9PiB7XG5cbiAgICBjb25zdCBuYW1lID0gZS50YXJnZXQubmFtZVxuICAgIGNvbnN0IHZhbHVlID0gZS50YXJnZXQudmFsdWVcblxuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSBcIm5vbWVcIjpcbiAgICAgICAgc2V0bm9tZSh2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJlbWFpbFwiOlxuICAgICAgICBzZXRlbWFpbCh2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJjZWx1bGFyXCI6XG4gICAgICAgIHNldGNlbHVsYXIodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiY3BmXCI6XG4gICAgICAgIHNldGNwZih2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJjZXBcIjpcbiAgICAgICAgY29uc29sZS5sb2coXCJ2YWx1ZSA9IFwiLCB2YWx1ZSlcbiAgICAgICAgc2V0Y2VwKHZhbHVlKVxuICAgICAgICBzZXRMb2FkaW5nKHRydWUpXG4gICAgICAgIGNvbnN0IGFkZHIgPSBhd2FpdCBnZXRDZXAodmFsdWUpXG4gICAgICAgIGlmIChhZGRyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgPSBcIiwgYWRkcilcbiAgICAgICAgICBzZXRiYWlycm8oYWRkci5iYWlycm8pXG4gICAgICAgICAgc2V0cnVhKGFkZHIubG9ncmFkb3VybylcbiAgICAgICAgICBzZXRjaWRhZGUoYWRkci5jaWRhZGUuZGVzY3JpY2FvKVxuICAgICAgICAgIHNldGVzdGFkbyhhZGRyLmNpZGFkZS5lc3RhZG8uZGVzY3JpY2FvKVxuICAgICAgICAgIHNldENpZGFkZUlkKGFkZHIuY2lkYWRlLmlkKVxuICAgICAgICB9XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiZXN0YWRvXCI6XG4gICAgICAgIHNldGVzdGFkbyh2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJiYWlycm9cIjpcbiAgICAgICAgc2V0YmFpcnJvKHZhbHVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcInJ1YVwiOlxuICAgICAgICBzZXRydWEodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiY2lkYWRlXCI6XG4gICAgICAgIHNldGNpZGFkZSh2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJudW1lcm9cIjpcbiAgICAgICAgc2V0bnVtZXJvKHZhbHVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImNvbXBsZW1lbnRvXCI6XG4gICAgICAgIHNldGNvbXBsZW1lbnRvKHZhbHVlKVxuICAgICAgICBicmVha1xuXG4gICAgfVxuXG4gIH1cblxuXG4gIGNvbnN0IGhhbmRsZUNhcklucHV0ID0gYXN5bmMgKGUpID0+IHtcblxuICAgIGNvbnN0IG5hbWUgPSBlLnRhcmdldC5uYW1lXG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZVxuXG4gICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICBjYXNlIFwibWFyY2FcIjpcbiAgICAgICAgc2V0TWFyY2FDYXIodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwibW9kZWxvXCI6XG4gICAgICAgIHNldE1vZGVsb0Nhcih2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJhbm9cIjpcbiAgICAgICAgc2V0QW5vQ2FyKHZhbHVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcInBsYWNhXCI6XG4gICAgICAgIHNldFBsYWNhQ2FyKHZhbHVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImNlcFwiOlxuICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlID0gXCIsIHZhbHVlKVxuICAgICAgICBzZXRDZXBDYXIodmFsdWUpXG4gICAgICAgIGNvbnN0IGFkZHIgPSBhd2FpdCBnZXRDZXAodmFsdWUpXG4gICAgICAgIGlmIChhZGRyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJhZGQgPSBcIiwgYWRkcilcbiAgICAgICAgICBzZXRCYWlycm9DYXIoYWRkci5iYWlycm8pXG4gICAgICAgICAgc2V0UnVhQ2FyKGFkZHIubG9ncmFkb3VybylcbiAgICAgICAgICBzZXRDaWRhZGVDYXIoYWRkci5jaWRhZGUuZGVzY3JpY2FvKVxuICAgICAgICAgIHNldEVzdGFkb0NhcihhZGRyLmNpZGFkZS5lc3RhZG8uZGVzY3JpY2FvKVxuICAgICAgICAgIHNldENpZGFkZUlkQ2FyKGFkZHIuY2lkYWRlLmlkKVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiZXN0YWRvXCI6XG4gICAgICAgIHNldEVzdGFkb0Nhcih2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJydWFcIjpcbiAgICAgICAgc2V0UnVhQ2FyKHZhbHVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcIm51bWVyb1wiOlxuICAgICAgICBzZXROdW1lcm9DYXIodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiY29tcGxlbWVudG9cIjpcbiAgICAgICAgc2V0Q29tcGxlbWVudG9DYXIodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwic2VtYW5hXCI6XG4gICAgICAgIHNldFNlbWFuYUNhcih2YWx1ZSlcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgXCJjYXVjYW9cIjpcbiAgICAgICAgc2V0Q2F1Y2FvQ2FyKHZhbHVlKVxuICAgICAgICBicmVha1xuICAgICAgY2FzZSBcImRpYXJpYVwiOlxuICAgICAgICBzZXREaWFyaWFDYXIodmFsdWUpXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlIFwiY2lkYWRlXCI6XG4gICAgICAgIHNldENpZGFkZUNhcih2YWx1ZSlcbiAgICAgICAgYnJlYWtcblxuICAgIH1cbiAgfVxuXG5cbiAgY29uc3Qgb25Gcm9udGFsQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNldEZyb250YWxVcmwoVVJMLmNyZWF0ZU9iamVjdFVSTCh2YWx1ZSkpXG4gICAgfVxuXG4gICAgc2V0TG9hZGluZ0Zyb250YWwodHJ1ZSlcblxuICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG5cbiAgICBmb3JtRGF0YS5hcHBlbmQoXG4gICAgICBcImZpbGVcIixcbiAgICAgIHZhbHVlXG4gICAgKVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNyZWF0ZUZpbGUoZm9ybURhdGEpXG5cbiAgICBzZXRMb2FkaW5nRnJvbnRhbChmYWxzZSlcblxuICAgIGlmIChyZXMpIHtcbiAgICAgIHNldEZyb250YWxJZChyZXMuaWQpXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25MYXRlcmFsRGlyZWl0YUNoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRMYXRlcmFsRGlyZWl0YVVybChVUkwuY3JlYXRlT2JqZWN0VVJMKHZhbHVlKSlcbiAgICB9XG4gICAgc2V0TG9hZGluZ0xhdGVyYWxEaXJlaXRhKHRydWUpXG5cbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgXCJmaWxlXCIsXG4gICAgICB2YWx1ZVxuICAgIClcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjcmVhdGVGaWxlKGZvcm1EYXRhKVxuICAgIHNldExvYWRpbmdMYXRlcmFsRGlyZWl0YShmYWxzZSlcblxuICAgIGlmIChyZXMpIHtcbiAgICAgIHNldExhdGVyYWxEaXJlaXRhSWQocmVzLmlkKVxuXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25MYXRlcmFsRXNxdWVyZGFDaGFuZ2UgPSBhc3luYyAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC5maWxlc1swXVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgc2V0TGF0ZXJhbEVzcXVlcmRhVXJsKFVSTC5jcmVhdGVPYmplY3RVUkwodmFsdWUpKVxuICAgIH1cbiAgICBzZXRMb2FkaW5nTGF0ZXJhbEVzcXVlcmRhKHRydWUpXG4gICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcblxuICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgIFwiZmlsZVwiLFxuICAgICAgdmFsdWVcbiAgICApXG4gICAgY29uc3QgcmVzID0gYXdhaXQgY3JlYXRlRmlsZShmb3JtRGF0YSlcbiAgICBzZXRMb2FkaW5nTGF0ZXJhbEVzcXVlcmRhKGZhbHNlKVxuXG4gICAgaWYgKHJlcykge1xuICAgICAgc2V0TGF0ZXJhbEVzcXVlcmRhSWQocmVzLmlkKVxuXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25GdW5kb0NoYW5nZSA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LmZpbGVzWzBdXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBzZXRGdW5kb1VybChVUkwuY3JlYXRlT2JqZWN0VVJMKHZhbHVlKSlcbiAgICB9XG4gICAgc2V0TG9hZGluZ0Z1bmRvKHRydWUpXG5cbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgXCJmaWxlXCIsXG4gICAgICB2YWx1ZVxuICAgIClcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjcmVhdGVGaWxlKGZvcm1EYXRhKVxuICAgIHNldExvYWRpbmdGdW5kbyhmYWxzZSlcblxuICAgIGlmIChyZXMpIHtcbiAgICAgIHNldEZ1bmRvSWQocmVzLmlkKVxuXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25QYWluZWxJbnRlcm5vQ2hhbmdlID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBldmVudC50YXJnZXQuZmlsZXNbMF1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHNldFBhaW5lbEludGVybm9VcmwoVVJMLmNyZWF0ZU9iamVjdFVSTCh2YWx1ZSkpXG4gICAgfVxuICAgIHNldExvYWRpbmdQYWluZWxJbnRlcm5vKHRydWUpXG5cbiAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gICAgZm9ybURhdGEuYXBwZW5kKFxuICAgICAgXCJmaWxlXCIsXG4gICAgICB2YWx1ZVxuICAgIClcbiAgICBjb25zdCByZXMgPSBhd2FpdCBjcmVhdGVGaWxlKGZvcm1EYXRhKVxuICAgIHNldExvYWRpbmdQYWluZWxJbnRlcm5vKGZhbHNlKVxuXG4gICAgaWYgKHJlcykge1xuICAgICAgc2V0UGFpbmVsSW50ZXJub0lkKHJlcy5pZClcblxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHZlaGljbGVOZXh0Q2xpY2sgPSAoKSA9PiB7XG4gICAgaWYgKCFtYXJjYUNhciB8fCAhbW9kZWxvQ2FyIHx8ICFhbm9DYXIgfHwgIXBsYWNhQ2FyIHx8ICFjZXBDYXIgfHwgIWVzdGFkb0NhciB8fCAhY2lkYWRlQ2FyIHx8ICFydWFDYXIgfHwgIXNlbWFuYUNhciB8fCAhY2F1Y2FvQ2FyKSB7XG4gICAgICBub3RpZnkoJ2Vycm9yJywgJ1BsZWFzZSBjaGVjayB0aGUgaW5wdXQgZmllbGRzJylcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0QWN0aXZlU3RlcChwcmV2QWN0aXZlU3RlcCA9PiBwcmV2QWN0aXZlU3RlcCArIDEpXG4gICAgfVxuICB9XG5cbiAgY29uc3QgdXBsb2FkQ2FyRGV0YWlscyA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zb2xlLmxvZygnaGknKTtcbiAgICAvL2RlYnVnZ2VyXG4gICBcbiAgICBzZXRDYXJQcm9jZXNzaW5nKHRydWUpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGNyZWF0ZUNhcih7XG4gICAgICBtYXJjYUNhciwgbW9kZWxvQ2FyLCBhbm9DYXIsIHBsYWNhQ2FyLCBjZXBDYXIsIGVzdGFkb0NhciwgY2lkYWRlQ2FyLCBydWFDYXIsIHNlbWFuYUNhcixcbiAgICAgIGNhdWNhb0NhciwgZGlhcmlhQ2FyLCBudW1lcm9DYXIsIGNvbXBsZW1lbnRvQ2FyLCBiYWlycm9DYXIsIGNpZGFkZUlkQ2FyLFxuICAgICAgZnJvbnRhbElkLCBsYXRlcmFsRGlyZWl0YUlkLCBsYXRlcmFsRXNxdWVyZGFJZCwgZnVuZG9JZCwgcGFpbmVsSW50ZXJub0lkXG4gICAgfSlcbiAgICBpZiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVkIGRhdGFcIiwgZGF0YSlcbiAgICAgIG5vdGlmeSgnc3VjY2VzcycsICdDYXIgYWRkZWQgc3VjY2Vzc2Z1bGx5JylcbiAgICB9XG4gICAgc2V0Q2FyUHJvY2Vzc2luZyhmYWxzZSlcblxuICAgIC8vIHNldEFjdGl2ZVN0ZXAocHJldkFjdGl2ZVN0ZXAgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKVxuICB9XG5cblxuICBjb25zdCBnZXRTdGVwQ29udGVudCA9IHN0ZXAgPT4ge1xuICAgIHN3aXRjaCAoc3RlcCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICByZXR1cm4gPFBlcnNvbmFsSW5mb1xuICAgICAgICAgIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XG4gICAgICAgICAgb3duZXI9e3sgbm9tZSwgZW1haWwsIGNlbHVsYXIsIGNwZiwgY2VwLCBlc3RhZG8sIGJhaXJybywgcnVhLCBudW1lcm8sIGNpZGFkZSwgY29tcGxlbWVudG8sIGNpZGFkZUlkIH19XG4gICAgICAgICAgaGFuZGxlT3duZXI9e2hhbmRsZU93bmVyfVxuICAgICAgICAgIHBlcnNvbmFsTmV4dENsaWNrPXsoKSA9PiBzZXRBY3RpdmVTdGVwKHByZXZBY3RpdmVTdGVwID0+IHByZXZBY3RpdmVTdGVwICsgMSl9XG4gICAgICAgICAgcHJvY2Vzc2luZz17cHJvY2Vzc2luZ31cbiAgICAgICAgLz5cblxuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gPFVwbG9hZFBob3Rvc1xuICAgICAgICAgIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XG4gICAgICAgICAgb3duZXI9e3sgbm9tZSwgZW1haWwsIGNlbHVsYXIsIGNwZiwgY2VwLCBlc3RhZG8sIGJhaXJybywgcnVhLCBudW1lcm8sIGNpZGFkZSwgY29tcGxlbWVudG8sIGNpZGFkZUlkIH19XG4gICAgICAgICAgcHJldk93bmVyPXtvd25lcn1cbiAgICAgICAgICBwZXJzb25hbE5leHRDbGljaz17KCkgPT4gc2V0QWN0aXZlU3RlcChwcmV2QWN0aXZlU3RlcCA9PiBwcmV2QWN0aXZlU3RlcCArIDEpfVxuICAgICAgICAgIHVwbG9hZEJhY2s9eygpID0+IHNldEFjdGl2ZVN0ZXAocHJldkFjdGl2ZVN0ZXAgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKX1cbiAgICAgICAgLz5cblxuICAgICAgY2FzZSAyOlxuICAgICAgICByZXR1cm4gPFZlaGljbGVEZXRhaWxzXG4gICAgICAgICAgbWFyY2E9e21hcmNhQ2FyfVxuICAgICAgICAgIG1vZGVsbz17bW9kZWxvQ2FyfVxuICAgICAgICAgIGFubz17YW5vQ2FyfVxuICAgICAgICAgIHBsYWNhPXtwbGFjYUNhcn1cbiAgICAgICAgICBjZXA9e2NlcENhcn1cbiAgICAgICAgICBlc3RhZG89e2VzdGFkb0Nhcn1cbiAgICAgICAgICBjaWRhZGU9e2NpZGFkZUNhcn1cbiAgICAgICAgICBydWE9e3J1YUNhcn1cbiAgICAgICAgICBzZW1hbmE9e3NlbWFuYUNhcn1cbiAgICAgICAgICBjYXVjYW89e2NhdWNhb0Nhcn1cbiAgICAgICAgICBkaWFyaWE9e2RpYXJpYUNhcn1cbiAgICAgICAgICBudW1lcm89e251bWVyb0Nhcn1cbiAgICAgICAgICBjb21wbGVtZW50bz17Y29tcGxlbWVudG9DYXJ9XG4gICAgICAgICAgYmFpcnJvPXtiYWlycm9DYXJ9XG4gICAgICAgICAgY2lkYWRlSWQ9e2NpZGFkZUlkQ2FyfVxuICAgICAgICAgIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XG4gICAgICAgICAgaGFuZGxlQ2FySW5wdXQ9e2hhbmRsZUNhcklucHV0fVxuICAgICAgICAgIHZlaGljbGVOZXh0Q2xpY2s9e3ZlaGljbGVOZXh0Q2xpY2t9XG4gICAgICAgICAgdmVoaWNsZUJhY2s9eygpID0+IHNldEFjdGl2ZVN0ZXAocHJldkFjdGl2ZVN0ZXAgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKX1cbiAgICAgICAgLz5cblxuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gPFVwbG9hZFZlaGljbGVQaG90b3NcbiAgICAgICAgICBsb2FkaW5nRnJvbnRhbD17bG9hZGluZ0Zyb250YWx9XG4gICAgICAgICAgZnJvbnRhbFVybD17ZnJvbnRhbFVybH1cbiAgICAgICAgICBvbkZyb250YWxDaGFuZ2U9e29uRnJvbnRhbENoYW5nZX1cblxuICAgICAgICAgIGxvYWRpbmdMYXRlcmFsRGlyZWl0YT17bG9hZGluZ0xhdGVyYWxEaXJlaXRhfVxuICAgICAgICAgIGxhdGVyYWxEaXJlaXRhVXJsPXtsYXRlcmFsRGlyZWl0YVVybH1cbiAgICAgICAgICBvbkxhdGVyYWxEaXJlaXRhQ2hhbmdlPXtvbkxhdGVyYWxEaXJlaXRhQ2hhbmdlfVxuXG4gICAgICAgICAgbG9hZGluZ0xhdGVyYWxFc3F1ZXJkYT17bG9hZGluZ0xhdGVyYWxFc3F1ZXJkYX1cbiAgICAgICAgICBsYXRlcmFsRXNxdWVyZGFVcmw9e2xhdGVyYWxFc3F1ZXJkYVVybH1cbiAgICAgICAgICBvbkxhdGVyYWxFc3F1ZXJkYUNoYW5nZT17b25MYXRlcmFsRXNxdWVyZGFDaGFuZ2V9XG5cbiAgICAgICAgICBsb2FkaW5nRnVuZG89e2xvYWRpbmdGdW5kb31cbiAgICAgICAgICBmdW5kb1VybD17ZnVuZG9Vcmx9XG4gICAgICAgICAgb25GdW5kb0NoYW5nZT17b25GdW5kb0NoYW5nZX1cblxuICAgICAgICAgIGxvYWRpbmdQYWluZWxJbnRlcm5vPXtsb2FkaW5nUGFpbmVsSW50ZXJub31cbiAgICAgICAgICBwYWluZWxJbnRlcm5vVXJsPXtwYWluZWxJbnRlcm5vVXJsfVxuICAgICAgICAgIG9uUGFpbmVsSW50ZXJub0NoYW5nZT17b25QYWluZWxJbnRlcm5vQ2hhbmdlfVxuXG4gICAgICAgICAgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH1cbiAgICAgICAgICBwZXJzb25hbE5leHRDbGljaz17KCkgPT4gc2V0QWN0aXZlU3RlcChwcmV2QWN0aXZlU3RlcCA9PiBwcmV2QWN0aXZlU3RlcCArIDEpfVxuICAgICAgICAgIHVwbG9hZEJhY2s9eygpID0+IHNldEFjdGl2ZVN0ZXAocHJldkFjdGl2ZVN0ZXAgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKX1cbiAgICAgICAgICBwcm9jZXNzaW5nPXtjYXJQcm9jZXNzaW5nfVxuICAgICAgICAgIHVwbG9hZENhckRldGFpbHM9e3VwbG9hZENhckRldGFpbHN9XG4gICAgICAgIC8+XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8RGFzaGJvYXJkTGF5b3V0PlxuICAgICAge1xuICAgICAgICBpc0xvYWRpbmcgPyA8RnVsbFBhZ2VMb2FkZXIgbG9hZGluZz17aXNMb2FkaW5nfSAvPiA6XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdXBwbGllci1yZWctYXJlYSBtYi01XCI+XG4gICAgICAgICAgICA8VG9hc3RDb250YWluZXIgc3R5bGU9e3sgekluZGV4OiA5OTk5OSB9fSAvPlxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtcHJpbWFyeSBtYi0zXCI+XG4gICAgICAgICAgICAgIHthY3RpdmVTdGVwID09PSAwID8gJ01ldXMgZGFkb3MnIDpcbiAgICAgICAgICAgICAgICBhY3RpdmVTdGVwID09PSAxID8gJ1VwbG9hZCBGb3RvcycgOlxuICAgICAgICAgICAgICAgICAgYWN0aXZlU3RlcCA9PT0gMiA/ICdEYWRvcyBkbyBWZcOtY3VsbycgOlxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTdGVwID09PSAzICYmICdGb3RvcyBkbyBWZcOtY3Vsbyd9XG4gICAgICAgICAgICA8L2gyPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi0xMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItNSBwYi0zXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWctc3RlcC1idG4gJHthY3RpdmVTdGVwID09PSAwID8gJ3JlZy1zdGVwLWJ0bi1hY3RpdmUnIDogYWN0aXZlU3RlcCA+IDAgPyAncmVnLXN0ZXAtYnRuLWRvbmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVTdGVwKDApfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWctc3RlcC1oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+RGFkb3MgUGVzc29haXM8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDAgPyB0cnVlIDogZmFsc2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcmVnLXN0ZXAtYnRuICR7YWN0aXZlU3RlcCA9PT0gMSA/ICdyZWctc3RlcC1idG4tYWN0aXZlJyA6IGFjdGl2ZVN0ZXAgPiAxID8gJ3JlZy1zdGVwLWJ0bi1kb25lJyA6ICcnfWB9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlU3RlcCgxKX0+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVnLXN0ZXAtaGVhZGVyXCI+PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuPlVwbG9hZCBGb3Rvczwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWctc3RlcC1idG4gJHthY3RpdmVTdGVwID09PSAyID8gJ3JlZy1zdGVwLWJ0bi1hY3RpdmUnIDogYWN0aXZlU3RlcCA+IDIgPyAncmVnLXN0ZXAtYnRuLWRvbmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVTdGVwKDIpfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWctc3RlcC1oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+RGFkb3MgZG8gVmXDrWN1bG88L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDAgfHwgMiA/IHRydWUgOiBmYWxzZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2ByZWctc3RlcC1idG4gJHthY3RpdmVTdGVwID09PSAzID8gJ3JlZy1zdGVwLWJ0bi1hY3RpdmUnIDogYWN0aXZlU3RlcCA+IDMgPyAncmVnLXN0ZXAtYnRuLWRvbmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVTdGVwKDMpfT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWctc3RlcC1oZWFkZXJcIj48L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4+Rm90b3MgZG8gVmXDrWN1bG88L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIHtnZXRTdGVwQ29udGVudChhY3RpdmVTdGVwKX1cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvRGFzaGJvYXJkTGF5b3V0PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1cHBsaWVyUmVnaXN0cmF0aW9uRm9ybVxuIiwiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHRvYXN0IH0gZnJvbSAncmVhY3QtdG9hc3RpZnknXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCdcblxuLy8gY29udmVydCBvYmplY3QgdG8gRm9ybURhdGFcbmV4cG9ydCBjb25zdCBub3RpZnkgPSAodHlwZSwgbWVzc2FnZSkgPT4ge1xuICBpZiAodHlwZSA9PT0gJ3N1Y2Nlc3MnKSB7XG4gICAgdG9hc3Quc3VjY2VzcyhtZXNzYWdlLCB7XG4gICAgICBzdHlsZTogeyBmb250U2l6ZTogMTYgfSxcbiAgICB9KVxuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdlcnJvcicpIHtcbiAgICAvLyBpZiAoIW1lc3NhZ2UpIG1lc3NhZ2UgPSAnU29tZXRoaW5nIFdlbnQgV3JvbmcuIFRyeSBBZ2FpbiEnXG4gICAgdG9hc3QuZXJyb3IobWVzc2FnZSwge1xuICAgICAgc3R5bGU6IHsgZm9udFNpemU6IDE2IH0sXG4gICAgfSlcbiAgfSBlbHNlIGlmICh0eXBlID09PSAnd2FybmluZycpIHtcbiAgICB0b2FzdC53YXJuaW5nKG1lc3NhZ2UpXG4gIH0gZWxzZSB7XG4gICAgdG9hc3QobWVzc2FnZSlcbiAgfVxufVxuXG4vLyBjdXN0b20gaGVscGVyIHRvIHRha2UgaW5wdXQgZmllbGRcbmV4cG9ydCBjb25zdCB1c2VJbnB1dCA9IChpbml0aWFsVmFsdWUgPSAnJykgPT4ge1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKGluaXRpYWxWYWx1ZSlcbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGUpID0+IHNldFZhbHVlKGUudGFyZ2V0LnZhbHVlKVxuICByZXR1cm4gW3ZhbHVlLCBoYW5kbGVDaGFuZ2UsIHNldFZhbHVlXVxufVxuXG5leHBvcnQgY29uc3QgcmF0aW5nRGF0ZSA9IChkYXRlKSA9PiB7XG4gIHJldHVybiAgbW9tZW50LnV0YyhkYXRlICkubG9jYWwoKS5mb3JtYXQoJ0REL01NTS9ZWVlZJyk7XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuaW1wb3J0IHtjb25maWd9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCB7IGNyZWF0ZVBlcnNvbiB9IGZyb20gJy4uL2FwaS9jYWRhc3Ryby9jYXB0YXNhby9jcmVhdGVQZXJzb24nXG5cbmNvbnN0IGRvbWFpbiA9IGNvbmZpZy5iYXNlVXJsXG5cbmV4cG9ydCBjb25zdCBnYXZQcm92aWRlciA9IHtcbiAgICBjbGllbnRJZDogY29uZmlnLkdBVl9DTElFTlRfSUQsXG4gICAgY2xpZW50U2VjcmV0OiBjb25maWcuR0FWX0NMSUVOVF9TRUNSRVQsXG4gICAgZ3JhbnRfdHlwZTogY29uZmlnLmdyYW50VHlwZVxufVxuXG5leHBvcnQgY29uc3QgZ2V0VG9rZW4gPSBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcbiAgICBjcmVkZW50aWFscy5zY29wZSA9ICcnXG4gICAgY3JlZGVudGlhbHMuZ3JhbnRfdHlwZSA9IGdhdlByb3ZpZGVyLmdyYW50X3R5cGVcbiAgICBjcmVkZW50aWFscy5jbGllbnRfaWQgPSBnYXZQcm92aWRlci5jbGllbnRJZFxuICAgIGNyZWRlbnRpYWxzLmNsaWVudF9zZWNyZXQgPSBnYXZQcm92aWRlci5jbGllbnRTZWNyZXRcbiAgICAvL2NvbnNvbGUubG9nKFwiY3JlYWRpYW50aWFscyAgPSBcIiwgY3JlZGVudGlhbHMpXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBkYXRhOiB0b2tlbnMgfSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICAgICBgJHtkb21haW59L29hdXRoL3Rva2VuYCxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzXG4gICAgICAgIClcbiAgICAgICAvLyBjb25zb2xlLmxvZyh0b2tlbnMpXG4gICAgICAgIHJldHVybiB0b2tlbnNcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICByZXR1cm4gbnVsbFxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldE1lID0gYXN5bmMgKGFjY2Vzc190b2tlbikgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHsgZGF0YTogbWUgfSA9IGF3YWl0IGF4aW9zLmdldChcbiAgICAgICAgICAgIGAke2RvbWFpbn0vYXBpL21lYCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthY2Nlc3NfdG9rZW59YCxcbiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICByZXR1cm4gbWVcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICB9XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xuXG5sZXQgZGVmYXVsdE9wdGlvbnNcbmNvbnN0IGNsaWVudCA9ICh0b2tlbiA9IG51bGwpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6ICh1cmwsIHRva2VuTmVlZCwgdG9rZW4sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogJ2VuJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9rZW5OZWVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucy5oZWFkZXJzLCB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdkZWZhdWx0T3B0aW9ucycsIGRlZmF1bHRPcHRpb25zKTtcblxuICAgICAgICAgICAgcmV0dXJuIGF4aW9zLmdldCh1cmwsIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBwb3N0OiAodXJsLCB0b2tlbk5lZWQsIHRva2VuLCBkYXRhLCBvcHRpb25zID0ge30pID0+IHtcbiAgICAgICAgICAgIGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgJ0FjY2VwdC1MYW5ndWFnZSc6ICdlbicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRva2VuTmVlZCkge1xuICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGVmYXVsdE9wdGlvbnMuaGVhZGVycywge1xuICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXhpb3MucG9zdCh1cmwsIGRhdGEsIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBwdXQ6ICh1cmwsIHRva2VuTmVlZCwgdG9rZW4sIGRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogJ2VuJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9rZW5OZWVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucy5oZWFkZXJzLCB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wdXQodXJsLCBkYXRhLCB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH0pXG4gICAgICAgIH0sXG5cbiAgICAgICAgcGF0Y2g6ICh1cmwsIHRva2VuTmVlZCwgdG9rZW4sIGRhdGEsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogJ2VuJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9rZW5OZWVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucy5oZWFkZXJzLCB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBheGlvcy5wYXRjaCh1cmwsIGRhdGEsIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfSlcbiAgICAgICAgfSxcblxuICAgICAgICBkZWxldGU6ICh1cmwsIHRva2VuTmVlZCwgdG9rZW4sIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgICAgICAgICAgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICAgICAnQWNjZXB0LUxhbmd1YWdlJzogJ2VuJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodG9rZW5OZWVkKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkZWZhdWx0T3B0aW9ucy5oZWFkZXJzLCB7XG4gICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHRva2VuLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBheGlvcy5kZWxldGUodXJsLCB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH0pXG4gICAgICAgIH0sXG4gICAgfVxufVxuY29uc3QgaHR0cFJlcXVlc3QgPSBjbGllbnQobnVsbClcbmV4cG9ydCBkZWZhdWx0IGh0dHBSZXF1ZXN0IiwiaW1wb3J0IHsgZ2V0U2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvY2xpZW50XCJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcblxuY29uc3Qgd2l0aEF1dGggPSAoV3JhcHBlZENvbXBvbmVudCkgPT4ge1xuICAgIHJldHVybiAocHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgUm91dGVyID0gdXNlUm91dGVyKClcbiAgICAgICAgY29uc3QgW3ZlcmlmaWVkLCBzZXRWZXJpZmllZF0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgICAgICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGdldFNlc3Npb24oKVxuICAgICAgICAgICAgaWYgKHNlc3Npb24pIHtcbiAgICAgICAgICAgICAgICBzZXRWZXJpZmllZCh0cnVlKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBSb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCBbXSlcblxuICAgICAgICBpZiAodmVyaWZpZWQpIHtcbiAgICAgICAgICAgIHJldHVybiA8V3JhcHBlZENvbXBvbmVudCB7Li4ucHJvcHN9IC8+XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGhcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1vbWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LWF1dGgvY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYm9vdHN0cmFwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZhXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2ZpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2hpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL3JpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXRvYXN0aWZ5XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9