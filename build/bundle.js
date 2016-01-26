/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _observer = __webpack_require__(1);

	var _observer2 = _interopRequireDefault(_observer);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.defineReactive = defineReactive;
	exports.observe = observe;

	var _util = __webpack_require__(2);

	var _dep = __webpack_require__(4);

	var _dep2 = _interopRequireDefault(_dep);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var Observer = function () {
	  function Observer(value) {
	    _classCallCheck(this, Observer);

	    this.value = value;
	    this.dep = new _dep2.default();
	    (0, _util.def)(value, '__ob__', this);
	    this.walk(value);
	  }
	  //递归。。让每个字属性可以observe

	  _createClass(Observer, [{
	    key: "walk",
	    value: function walk(value) {
	      var _this = this;

	      Object.keys(value).forEach(function (key) {
	        return _this.convert(key, value[key]);
	      });
	    }
	  }, {
	    key: "convert",
	    value: function convert(key, val) {
	      defineReactive(this.value, key, val);
	    }
	  }]);

	  return Observer;
	}();

	exports.default = Observer;
	function defineReactive(obj, key, val) {
	  var dep = new _dep2.default();
	  var childOb = observe(val);

	  Object.defineProperty(obj, key, {
	    enumerable: true,
	    configurable: true,
	    get: function get() {
	      dep.depend();
	      if (childOb) {
	        childOb.dep.depend();
	      }
	    },
	    set: function set(newVal) {
	      var value = val;
	      if (newVal === value) {
	        return;
	      }
	      val = newVal;
	      childOb = observe(newVal);
	      dep.notify();
	    }
	  });
	}

	function observe(value, vm) {
	  if (!value || (typeof value === "undefined" ? "undefined" : _typeof(value)) !== 'object') {
	    return;
	  }
	  return new Observer(value);
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.mixin = mixin;
	exports.isObject = isObject;
	exports.isArray = isArray;
	exports.augment = augment;
	exports.define = __webpack_require__(3);
	exports.def = def;
	/**
	 * Mix properties into target object.
	 *
	 * @param {Object} target
	 * @param {Object} mixin
	 */

	function mixin(target, mixin) {
	  for (var key in mixin) {
	    if (target[key] !== mixin[key]) {
	      target[key] = mixin[key];
	    }
	  }
	}

	/**
	 * Object type check. Only returns true
	 * for plain JavaScript objects.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isObject(obj) {
	  return Object.prototype.toString.call(obj) === '[object Object]';
	}

	/**
	 * Array type check.
	 *
	 * @param {*} obj
	 * @return {Boolean}
	 */

	function isArray(obj) {
	  return Array.isArray(obj);
	}
	function augment(target, proto) {
	  target.__proto__ = proto;
	}
	//使 属性不能枚举，不能 Object.keys() 找到
	function define(obj, key, val) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: false,
	    writable: true,
	    configurable: true
	  });
	}

	function def(obj, key, val, enumerable) {
	  Object.defineProperty(obj, key, {
	    value: val,
	    enumerable: !!enumerable,
	    writable: true,
	    configurable: true
	  });
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function() { throw new Error("define cannot be used indirect"); };


/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var uid = 0;

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 *
	 * @constructor
	 */

	var Dep = function () {
	  function Dep() {
	    _classCallCheck(this, Dep);

	    this.id = uid++;
	    this.subs = [];
	  }

	  _createClass(Dep, [{
	    key: "addSub",
	    value: function addSub(sub) {
	      this.subs.push(sub);
	    }
	  }, {
	    key: "notify",
	    value: function notify() {
	      this.subs.forEach(function (sub) {
	        return sub.update();
	      });
	    }
	  }, {
	    key: "depend",
	    value: function depend() {
	      Dep.target.addDep(this);
	    }
	  }]);

	  return Dep;
	}();

	//Dep.target  的是watcher

	exports.default = Dep;
	Dep.target = null;

/***/ }
/******/ ]);