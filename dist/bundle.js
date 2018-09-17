/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/doneboardcontroller.js":
/*!************************************!*\
  !*** ./src/doneboardcontroller.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoneBoardController);\n\nfunction DoneBoardController(model, view) {\n  var that = this;\n  that.model = model;\n  that.view = view;\n  that.view.bind('newTask', function (title, description) {\n    that.addItem(title, description);\n  }); // that.view.bind('itemEdit', function(item) {\n  //   that.editItem(item.id)\n  // })\n  // that.view.bind('itemEditDone', function(item) {\n  //   that.editItemSave(item.id, item.title)\n  // })\n\n  that.view.bind('itemRemove', function (item) {\n    console.log(item); // that.removeItem(item.id)\n  });\n  that.view.bind('sortBy', function (sortBy) {\n    that.sort(sortBy);\n  });\n  that.view.bind('priority', function (priority) {\n    that.priority(priority);\n  });\n  that.view.bind('loadTask', function () {\n    that.loadTask();\n  });\n}\n\nDoneBoardController.prototype.loadTask = function () {\n  var that = this;\n  that.model.loadTask(function () {\n    that.view.render('showEntries');\n  });\n};\n\nDoneBoardController.prototype.sort = function (sortBy) {\n  var that = this;\n  that.model.sort(sortBy, function () {\n    that.view.render('showEntries');\n  });\n};\n\nDoneBoardController.prototype.priority = function (priority) {\n  var that = this;\n  that.model.priority(priority, function () {\n    that.view.render('showEntries');\n  });\n};\n\nDoneBoardController.prototype.addItem = function (title, description) {\n  var that = this;\n\n  if (title.trim() === '') {\n    return;\n  }\n\n  if (description.trim() === '') {\n    return;\n  }\n\n  that.model.create(title, description, function () {\n    that.view.render('clearNewTask');\n    that.view.render('showEntries'); // that._filter(true)\n  });\n};\n\n//# sourceURL=webpack:///./src/doneboardcontroller.js?");

/***/ }),

/***/ "./src/doneboardmodel.js":
/*!*******************************!*\
  !*** ./src/doneboardmodel.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (DoneBoardModel);\n\nfunction DoneBoardModel(storage) {\n  this.storage = storage;\n}\n\nDoneBoardModel.prototype.create = function (title, description, callback) {\n  title = title || '';\n  description = description || '';\n\n  callback = callback || function () {};\n\n  var newItem = {\n    title: title.trim(),\n    description: description.trim(),\n    time: new Date().toDateString(),\n    timePass: new Date().getTime(),\n    priority: Math.floor(Math.random() * 5) + 0\n  };\n  this.storage.save(newItem, callback);\n};\n\nDoneBoardModel.prototype.loadTask = function (callback) {\n  callback = callback || function () {};\n\n  this.storage.loadTask(callback);\n};\n\nDoneBoardModel.prototype.sort = function (sortBy, callback) {\n  callback = callback || function () {};\n\n  this.storage.sort(sortBy, callback);\n};\n\nDoneBoardModel.prototype.priority = function (priority, callback) {\n  callback = callback || function () {};\n\n  this.storage.filter(priority, callback);\n};\n\nDoneBoardModel.prototype.update = function (id, data, callback) {\n  this.storage.save(data, callback, id);\n};\n\nDoneBoardModel.prototype.remove = function (id, callback) {\n  this.storage.remove(id, callback);\n};\n\n//# sourceURL=webpack:///./src/doneboardmodel.js?");

/***/ }),

/***/ "./src/doneboardview.js":
/*!******************************!*\
  !*** ./src/doneboardview.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return DoneBoardView; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar DoneBoardView =\n/*#__PURE__*/\nfunction () {\n  function DoneBoardView(storage) {\n    _classCallCheck(this, DoneBoardView);\n\n    var pendingConst = this;\n    this.storage = storage;\n    this.pedingTask = JSON.parse(localStorage['pending']);\n    this.$taskList = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.done-body');\n    this.$newTask = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.doneInputCard');\n    this.$newTaskButton = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.doneInputCardButton');\n    this.$sortby = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('#done-sortby');\n    this.$prior = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('#done-priority');\n\n    window.removeDone = function (e) {\n      pendingConst.storage.remove(window.removeDonebuttonId, function () {\n        pendingConst.render('showEntries');\n        window.buttonId = null;\n      });\n    };\n\n    window.moveDone = function (e) {\n      pendingConst.storage.move(window.moveDoneButtonId, 'pending', function () {\n        pendingConst.render('showEntries');\n        window.buttonId = null;\n      });\n    };\n  }\n\n  _createClass(DoneBoardView, [{\n    key: \"render\",\n    value: function render(viewCmd, parameter) {\n      var that = this;\n      var viewCommands = {\n        showEntries: function showEntries() {\n          that.$taskList.innerHTML = JSON.parse(localStorage['done']).cards.map(function (card) {\n            return \"<li>\\n            <div>Title: \".concat(card.title, \"</div>\\n            <div>Description: \").concat(card.description, \"</div>\\n            <div>Time: \").concat(card.time, \"</div>\\n            <div>Priority: \").concat(card.priority, \"</div>\\n            <button class=\\\"removeDone\\\" id=\\\"\").concat(card.id, \"\\\" onclick=\\\"window.removeDonebuttonId = \").concat(card.id, \"; removeDone(this)\\\">Remove</button>\\n            <button class=\\\"moveDone\\\" id=\\\"\").concat(card.id, \"\\\" onclick=\\\"window.moveDoneButtonId = \").concat(card.id, \"; moveDone(this)\\\">Move to Pending</button>\\n          </li>\");\n          }).join(\"\");\n        },\n        removeItem: function removeItem() {\n          that._removeItem(parameter);\n        },\n        setFilter: function setFilter() {\n          _setFilter(parameter);\n        },\n        clearNewTask: function clearNewTask() {\n          that.$newTask.value = '';\n        }\n      };\n      viewCommands[viewCmd]();\n    }\n  }, {\n    key: \"bind\",\n    value: function bind(event, handler) {\n      var that = this;\n\n      if (event === 'loadTask') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(document, 'click', function () {\n          handler();\n        });\n      } else if (event === 'newTask') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$newTaskButton, 'click', function () {\n          handler(that.$newTask.value, that.$newTask.value);\n        });\n      } else if (event === 'removeCompleted') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$clearCompleted, 'click', function () {\n          handler();\n        });\n      } else if (event === 'itemEdit') {} else if (event === 'sortBy') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$sortby, 'change', function () {\n          handler(that.$prior.options[that.$prior.selectedIndex].value);\n        });\n      } else if (event === 'priority') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$prior, 'change', function (e) {\n          handler(that.$prior.options[that.$prior.selectedIndex].value);\n        });\n      }\n    }\n  }]);\n\n  return DoneBoardView;\n}();\n\n\n\n//# sourceURL=webpack:///./src/doneboardview.js?");

/***/ }),

/***/ "./src/helpers.js":
/*!************************!*\
  !*** ./src/helpers.js ***!
  \************************/
/*! exports provided: qs, qsa, removeClass, $on, $parent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"qs\", function() { return qs; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"qsa\", function() { return qsa; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeClass\", function() { return removeClass; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$on\", function() { return $on; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$parent\", function() { return $parent; });\n // Get element(s) by CSS selector:\n\nfunction qs(selector, scope) {\n  return (scope || document).querySelector(selector);\n} //qsa('.hide')\n\n\nfunction qsa(selector, scope) {\n  return (scope || document).querySelectorAll(selector);\n} //removeClass(qsa('.hide'), 'hide')\n\n\nfunction removeClass(el, className) {\n  if (el.length) {\n    for (var i = 0; i < el.length; i++) {\n      removeClass(el[i], className);\n    }\n\n    return;\n  }\n\n  if (el.classList) {\n    el.classList.remove(className);\n  } else {\n    el.className = el.className.replace(new RegExp('(^|\\\\b)' + className.split(' ').join('|') + '(\\\\b|$)', 'gi'), ' ');\n  }\n} // addEventListener wrapper:\n\n\nfunction $on(target, type, callback, useCapture) {\n  target.addEventListener(type, callback, !!useCapture);\n} // Find the element's parent with the given tag name:\n// $parent(qs('a'), 'div');\n\n\nfunction $parent(element, tagName) {\n  if (!element.parentNode) {\n    return undefined;\n  }\n\n  if (element.parentNode.tagName.toLowerCase() === tagName.toLowerCase()) {\n    return element.parentNode;\n  }\n\n  return $parent(element.parentNode, tagName);\n} // Allow for looping on nodes by chaining:\n// qsa('.foo').forEach(function () {})\n\n\nNodeList.prototype.forEach = Array.prototype.forEach;\n\n//# sourceURL=webpack:///./src/helpers.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n/* harmony import */ var _pendingboardmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pendingboardmodel */ \"./src/pendingboardmodel.js\");\n/* harmony import */ var _pendingboardcontroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pendingboardcontroller */ \"./src/pendingboardcontroller.js\");\n/* harmony import */ var _pendingboardview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pendingboardview */ \"./src/pendingboardview.js\");\n/* harmony import */ var _doneboardmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./doneboardmodel */ \"./src/doneboardmodel.js\");\n/* harmony import */ var _doneboardcontroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./doneboardcontroller */ \"./src/doneboardcontroller.js\");\n/* harmony import */ var _doneboardview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./doneboardview */ \"./src/doneboardview.js\");\n\n\n\n\n\n\n\n\nvar pending, done;\n\nfunction PendingBoard(boardName) {\n  this.storage = new _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](boardName);\n  this.model = new _pendingboardmodel__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.storage);\n  this.view = new _pendingboardview__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.storage);\n  this.controller = new _pendingboardcontroller__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.model, this.view);\n}\n\n;\n\nfunction DoneBoard(boardName) {\n  this.storage = new _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](boardName);\n  this.model = new _doneboardmodel__WEBPACK_IMPORTED_MODULE_5__[\"default\"](this.storage);\n  this.view = new _doneboardview__WEBPACK_IMPORTED_MODULE_7__[\"default\"](this.storage);\n  this.controller = new _doneboardcontroller__WEBPACK_IMPORTED_MODULE_6__[\"default\"](this.model, this.view);\n}\n\n;\nObject(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(window, 'load', function () {\n  pending = new PendingBoard('pending');\n  done = new DoneBoard('done');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pendingboardcontroller.js":
/*!***************************************!*\
  !*** ./src/pendingboardcontroller.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PendingBoardController);\n\nfunction PendingBoardController(model, view) {\n  var that = this;\n  that.model = model;\n  that.view = view;\n  that.view.bind('newTask', function (title, description) {\n    that.addItem(title, description);\n  }); // that.view.bind('itemEdit', function(item) {\n  //   that.editItem(item.id)\n  // })\n  // that.view.bind('itemEditDone', function(item) {\n  //   that.editItemSave(item.id, item.title)\n  // })\n\n  that.view.bind('itemRemove', function (item) {\n    console.log(item); // that.removeItem(item.id)\n  });\n  that.view.bind('sortBy', function (sortBy) {\n    that.sort(sortBy);\n  });\n  that.view.bind('priority', function (priority) {\n    that.priority(priority);\n  });\n  that.view.bind('loadTask', function () {\n    that.loadTask();\n  });\n}\n\nPendingBoardController.prototype.loadTask = function () {\n  var that = this;\n  that.model.loadTask(function () {\n    that.view.render('showEntries');\n  });\n};\n\nPendingBoardController.prototype.sort = function (sortBy) {\n  var that = this;\n  that.model.sort(sortBy, function () {\n    that.view.render('showEntries');\n  });\n};\n\nPendingBoardController.prototype.priority = function (priority) {\n  var that = this;\n  that.model.priority(priority, function () {\n    that.view.render('showEntries');\n  });\n};\n\nPendingBoardController.prototype.addItem = function (title, description) {\n  var that = this;\n\n  if (title.trim() === '') {\n    return;\n  }\n\n  if (description.trim() === '') {\n    return;\n  }\n\n  that.model.create(title, description, function () {\n    that.view.render('clearNewTask');\n    that.view.render('showEntries'); // that._filter(true)\n  });\n};\n\nPendingBoardController.prototype.removeItem = function (id) {\n  var that = this;\n  that.model.remove(id, function () {\n    that.view.render('removeItem', id);\n  });\n\n  that._filter();\n};\n\n//# sourceURL=webpack:///./src/pendingboardcontroller.js?");

/***/ }),

/***/ "./src/pendingboardmodel.js":
/*!**********************************!*\
  !*** ./src/pendingboardmodel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PendingBoardModel);\n\nfunction PendingBoardModel(storage) {\n  this.storage = storage;\n}\n\nPendingBoardModel.prototype.create = function (title, description, callback) {\n  title = title || '';\n  description = description || '';\n\n  callback = callback || function () {};\n\n  var newItem = {\n    title: title.trim(),\n    description: description.trim(),\n    time: new Date().toDateString(),\n    timePass: new Date().getTime(),\n    priority: Math.floor(Math.random() * 5) + 0\n  };\n  this.storage.save(newItem, callback);\n};\n\nPendingBoardModel.prototype.loadTask = function (callback) {\n  callback = callback || function () {};\n\n  this.storage.loadTask(callback);\n};\n\nPendingBoardModel.prototype.sort = function (sortBy, callback) {\n  callback = callback || function () {};\n\n  this.storage.sort(sortBy, callback);\n};\n\nPendingBoardModel.prototype.priority = function (priority, callback) {\n  callback = callback || function () {};\n\n  this.storage.filter(priority, callback);\n};\n\nPendingBoardModel.prototype.update = function (id, data, callback) {\n  this.storage.save(data, callback, id);\n};\n\nPendingBoardModel.prototype.remove = function (id, callback) {\n  this.storage.remove(id, callback);\n};\n\n//# sourceURL=webpack:///./src/pendingboardmodel.js?");

/***/ }),

/***/ "./src/pendingboardview.js":
/*!*********************************!*\
  !*** ./src/pendingboardview.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PendingBoardView; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar PendingBoardView =\n/*#__PURE__*/\nfunction () {\n  function PendingBoardView(storage) {\n    _classCallCheck(this, PendingBoardView);\n\n    var pendingConst = this;\n    this.storage = storage;\n    this.pedingTask = JSON.parse(localStorage['pending']);\n    this.$taskList = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.pending-body');\n    this.$newTask = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.pendingInputCard');\n    this.$newTaskButton = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.pendingInputCardButton');\n    this.$sortby = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('#sortby');\n    this.$prior = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('#priority');\n\n    window.removePending = function (e) {\n      pendingConst.storage.remove(window.removePendingButtonId, function () {\n        pendingConst.render('showEntries');\n        window.buttonId = null;\n      });\n    };\n\n    window.movePending = function (e) {\n      pendingConst.storage.move(window.movePendingbuttonId, 'done', function () {\n        pendingConst.render('showEntries');\n        window.buttonId = null;\n      });\n    };\n  }\n\n  _createClass(PendingBoardView, [{\n    key: \"render\",\n    value: function render(viewCmd, parameter) {\n      var that = this;\n      var viewCommands = {\n        showEntries: function showEntries() {\n          that.$taskList.innerHTML = JSON.parse(localStorage['pending']).cards.map(function (card) {\n            return \"<li>\\n            <div>Title: \".concat(card.title, \"</div>\\n            <div>Description: \").concat(card.description, \"</div>\\n            <div>Time: \").concat(card.time, \"</div>\\n            <div>Priority: \").concat(card.priority, \"</div>\\n            <button class=\\\"removePending\\\" id=\\\"\").concat(card.id, \"\\\" onclick=\\\"window.removePendingButtonId = \").concat(card.id, \"; removePending(this)\\\">Remove</button>\\n            <button class=\\\"movePending\\\" id=\\\"\").concat(card.id, \"\\\" onclick=\\\"window.movePendingbuttonId = \").concat(card.id, \"; movePending(this)\\\">Move to Done</button>\\n          </li>\");\n          }).join(\"\");\n        },\n        removeItem: function removeItem() {\n          that._removeItem(parameter);\n        },\n        setFilter: function setFilter() {\n          _setFilter(parameter);\n        },\n        clearNewTask: function clearNewTask() {\n          that.$newTask.value = '';\n        }\n      };\n      viewCommands[viewCmd]();\n    }\n  }, {\n    key: \"bind\",\n    value: function bind(event, handler) {\n      var that = this;\n\n      if (event === 'loadTask') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(document, 'click', function () {\n          handler();\n        });\n      } else if (event === 'newTask') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$newTaskButton, 'click', function () {\n          handler(that.$newTask.value, that.$newTask.value);\n        });\n      } else if (event === 'removeCompleted') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$clearCompleted, 'click', function () {\n          handler();\n        });\n      } else if (event === 'itemEdit') {} else if (event === 'sortBy') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$sortby, 'change', function () {\n          handler(that.$prior.options[that.$prior.selectedIndex].value);\n        });\n      } else if (event === 'priority') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$prior, 'change', function (e) {\n          handler(that.$prior.options[that.$prior.selectedIndex].value);\n        });\n      }\n    }\n  }]);\n\n  return PendingBoardView;\n}();\n\n\n\n//# sourceURL=webpack:///./src/pendingboardview.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);\n\nfunction Store(name, callback) {\n  callback = callback || function () {};\n\n  this._dbName = name;\n\n  if (!localStorage[name]) {\n    var data = {\n      cards: []\n    };\n    localStorage[name] = JSON.stringify(data);\n  }\n\n  callback.call(this, JSON.parse(localStorage[name]));\n}\n\nStore.prototype.find = function (query, callback) {\n  if (!callback) {\n    return;\n  }\n\n  var todos = JSON.parse(localStorage[this._dbName]).todos;\n  callback.call(this, todos.filter(function (todo) {\n    for (var q in query) {\n      if (query[q] !== todo[q]) {\n        return false;\n      }\n    }\n\n    return true;\n  }));\n};\n\nStore.prototype.save = function (updateData, callback, id) {\n  var data = JSON.parse(localStorage[this._dbName]);\n  var cards = data.cards;\n\n  callback = callback || function () {}; // If an ID was actually given, find the item and update each property\n\n\n  if (id) {\n    for (var i = 0; i < cards.length; i++) {\n      if (cards[i].id === id) {\n        for (var key in updateData) {\n          // eslint-disable-line guard-for-in\n          cards[i][key] = updateData[key];\n        }\n\n        break;\n      }\n    }\n\n    localStorage[this._dbName] = JSON.stringify(data);\n    callback.call(this, JSON.parse(localStorage[this._dbName]).cards);\n  } else {\n    // Generate an ID\n    updateData.id = new Date().getTime();\n    cards.push(updateData);\n    localStorage[this._dbName] = JSON.stringify(data);\n    callback.call(this, [updateData]);\n  }\n};\n\nStore.prototype.remove = function (id, callback) {\n  var data = JSON.parse(localStorage[this._dbName]);\n  var cards = data.cards;\n\n  for (var i = 0; i < cards.length; i++) {\n    if (cards[i].id === id) {\n      cards.splice(i, 1);\n      break;\n    }\n  }\n\n  localStorage[this._dbName] = JSON.stringify(data);\n  callback.call(this, JSON.parse(localStorage[this._dbName]).cards);\n};\n\nStore.prototype.move = function (id, moveTo, callback) {\n  var that = this;\n  var data = JSON.parse(localStorage[this._dbName]);\n  var cards = data.cards;\n  var removedCard;\n\n  for (var i = 0; i < cards.length; i++) {\n    if (cards[i].id === id) {\n      removedCard = cards.splice(i, 1);\n      localStorage[this._dbName] = JSON.stringify(data);\n      break;\n    }\n  }\n\n  if (moveTo == 'done') {\n    var data = JSON.parse(localStorage['done']);\n    data.cards = data.cards.concat(removedCard);\n    localStorage['done'] = JSON.stringify(data);\n    callback.call(this, JSON.parse(localStorage['done']).cards);\n  } else {\n    var data = JSON.parse(localStorage['pending']);\n    data.cards = data.cards.concat(removedCard);\n    localStorage['pending'] = JSON.stringify(data);\n    callback.call(this, JSON.parse(localStorage['pending']).cards);\n  } // that.remove(removedCard.id, callback);\n\n};\n\nStore.prototype.sort = function (sortBy, callback) {\n  var data = JSON.parse(localStorage[this._dbName]);\n  var card = data.cards;\n\n  if (sortBy == 'date') {\n    data.cards = card.sort(function (a, b) {\n      return b.timePass - a.timePass;\n    });\n  } else {\n    data.cards = card.sort(function (a, b) {\n      return b.priority - a.priority;\n    });\n  }\n\n  localStorage[this._dbName] = JSON.stringify(data);\n  callback.call(this, JSON.parse(localStorage[this._dbName]).cards);\n};\n\nStore.prototype.loadTask = function (callback) {\n  callback.call(this, JSON.parse(localStorage[this._dbName]).cards);\n};\n\nStore.prototype.filter = function (priority, callback) {\n  var data = JSON.parse(localStorage[this._dbName]);\n  var card = data.cards;\n  data.cards = card.filter(function (card) {\n    return card.priority == priority;\n  });\n  localStorage[this._dbName] = JSON.stringify(data);\n  callback.call(this, JSON.parse(localStorage[this._dbName]).cards);\n};\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ })

/******/ });