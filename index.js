/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(__dirname) {'use strict';
	
	__webpack_require__(1);
	__webpack_require__(2).install();
	
	var express = __webpack_require__(3),
	    cfenv = __webpack_require__(4),
	    path = __webpack_require__(5),
	    bodyParser = __webpack_require__(6),
	    hello_world = __webpack_require__(7),
	    //for demonstration purposes only
	fs;
	
	var app = express(),
	    appEnv = cfenv.getAppEnv();
	
	app.use(express.static(path.join(__dirname, 'public')));
	//app.set(path.join('views', __dirname, '/apps'));
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json());
	
	app.get('/', function (req, res) {
	    res.send('index.html');
	});
	
	app.listen(3000, function () {
	    console.info('Server listening on port ' + this.address().port);
	});
	/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-core/register");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("source-map-support");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("cfenv");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(1);
	var _exports = module.exports = {};
	
	_exports.hello = function () {
		return "Hello World";
	};
	
	_exports.es6 = function () {
		var a, b;
		a = 1;
		b = 2;
		//take a look at the es5 this transpiles to in /modules/final
		var _ref = [b, a];
		a = _ref[0];
		b = _ref[1];
	};

/***/ }
/******/ ]);
//# sourceMappingURL=index.js.map