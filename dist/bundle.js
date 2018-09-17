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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ \"./src/store.js\");\n/* harmony import */ var _pendingboardmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pendingboardmodel */ \"./src/pendingboardmodel.js\");\n/* harmony import */ var _pendingboardcontroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pendingboardcontroller */ \"./src/pendingboardcontroller.js\");\n/* harmony import */ var _pendingboardview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pendingboardview */ \"./src/pendingboardview.js\");\n\n\n // import DoneBoardModel from './doneboardmodel'\n\n\n // import DoneController from './donecontroller'\n\nvar pending, done;\n\nfunction PendingBoard(boardName) {\n  this.storage = new _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](boardName);\n  this.model = new _pendingboardmodel__WEBPACK_IMPORTED_MODULE_2__[\"default\"](this.storage);\n  this.view = new _pendingboardview__WEBPACK_IMPORTED_MODULE_4__[\"default\"](this.storage);\n  this.controller = new _pendingboardcontroller__WEBPACK_IMPORTED_MODULE_3__[\"default\"](this.model, this.view);\n}\n\n;\n\nfunction DoneBoard(boardName) {\n  this.storage = new _store__WEBPACK_IMPORTED_MODULE_1__[\"default\"](boardName); // this.model = new DoneBoardModel(boardName);\n  // this.controller = new DoneController(this.model, this.view);\n}\n\n;\nObject(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(window, 'load', function () {\n  pending = new PendingBoard('pending'); // done = new DoneBoard('done');\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pendingboardcontroller.js":
/*!***************************************!*\
  !*** ./src/pendingboardcontroller.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (PendingBoardController);\n\nfunction PendingBoardController(model, view) {\n  var that = this;\n  that.model = model;\n  that.view = view;\n  that.view.bind('newTask', function (title, description) {\n    that.addItem(title, description);\n  }); // that.view.bind('itemEdit', function(item) {\n  //   that.editItem(item.id)\n  // })\n  // that.view.bind('itemEditDone', function(item) {\n  //   that.editItemSave(item.id, item.title)\n  // })\n\n  that.view.bind('itemRemove', function (item) {\n    console.log(item); // that.removeItem(item.id)\n  });\n  that.view.bind('sortBy', function () {\n    that.sort();\n  });\n  that.view.bind('priority', function (priority) {\n    that.priority(priority);\n  });\n}\n\nPendingBoardController.prototype.showAll = function () {\n  var that = this;\n  that.model.read(function (data) {\n    that.view.render('showEntries', data);\n  });\n};\n\nPendingBoardController.prototype.sort = function () {\n  var that = this;\n  that.model.sort(function () {\n    that.view.render('showEntries');\n  });\n};\n\nPendingBoardController.prototype.priority = function (priority) {\n  var that = this;\n  that.model.priority(priority, function () {\n    that.view.render('showEntries');\n  });\n};\n\nPendingBoardController.prototype.addItem = function (title, description) {\n  var that = this;\n\n  if (title.trim() === '') {\n    return;\n  }\n\n  if (description.trim() === '') {\n    return;\n  }\n\n  that.model.create(title, description, function () {\n    that.view.render('clearNewTask');\n    that.view.render('showEntries'); // that._filter(true)\n  });\n};\n\nPendingBoardController.prototype.editItem = function (id) {\n  var that = this;\n  that.model.read(id, function (data) {\n    that.view.render('editItem', {\n      id: id,\n      title: data[0].title\n    });\n  });\n};\n\nPendingBoardController.prototype.editItemSave = function (id, title) {\n  var that = this;\n\n  if (title.trim()) {\n    that.model.update(id, {\n      title: title\n    }, function () {\n      that.view.render('editItemDone', {\n        id: id,\n        title: title\n      });\n    });\n  } else {\n    that.removeItem(id);\n  }\n};\n/*\n* Cancels the item editing mode.\n*/\n\n\nPendingBoardController.prototype.editItemCancel = function (id) {\n  var that = this;\n  that.model.read(id, function (data) {\n    that.view.render('editItemDone', {\n      id: id,\n      title: data[0].title\n    });\n  });\n};\n\nPendingBoardController.prototype.removeItem = function (id) {\n  var that = this;\n  that.model.remove(id, function () {\n    that.view.render('removeItem', id);\n  });\n\n  that._filter();\n};\n\nPendingBoardController.prototype._filter = function (force) {\n  var activeRoute = this._activeRoute.charAt(0).toUpperCase() + this._activeRoute.substr(1); // Update the elements on the page, which change with each completed todo\n\n\n  this._updateCount(); // If the last active route isn't \"All\", or we're switching routes, we\n  // re-create the todo item elements, calling:\n  //   this.show[All|Active|Completed]();\n\n\n  if (force || this._lastActiveRoute !== 'All' || this._lastActiveRoute !== activeRoute) {\n    this['show' + activeRoute]();\n  }\n\n  this._lastActiveRoute = activeRoute;\n};\n\n//# sourceURL=webpack:///./src/pendingboardcontroller.js?");

/***/ }),

/***/ "./src/pendingboardmodel.js":
/*!**********************************!*\
  !*** ./src/pendingboardmodel.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (PendingBoardModel);\n\nfunction PendingBoardModel(storage) {\n  this.storage = storage;\n}\n\nPendingBoardModel.prototype.create = function (title, description, callback) {\n  title = title || '';\n  description = description || '';\n\n  callback = callback || function () {};\n\n  var newItem = {\n    title: title.trim(),\n    description: description.trim(),\n    time: new Date().toDateString(),\n    timePass: new Date().getTime(),\n    priority: Math.floor(Math.random() * 5) + 0\n  };\n  this.storage.save(newItem, callback);\n};\n\nPendingBoardModel.prototype.sort = function (callback) {\n  callback = callback || function () {};\n\n  this.storage.sort(callback);\n};\n\nPendingBoardModel.prototype.priority = function (priority, callback) {\n  callback = callback || function () {};\n\n  this.storage.filter(1, callback);\n};\n\nPendingBoardModel.prototype.read = function (query, callback) {\n  var queryType = _typeof(query);\n\n  callback = callback || function () {};\n\n  if (queryType === 'function') {\n    callback = query;\n    return this.storage.findAll(callback);\n  } else if (queryType === 'string' || queryType === 'number') {\n    query = parseInt(query, 10);\n    this.storage.find({\n      id: query\n    }, callback);\n  } else {\n    this.storage.find(query, callback);\n  }\n\n  return undefined;\n};\n\nPendingBoardModel.prototype.update = function (id, data, callback) {\n  this.storage.save(data, callback, id);\n};\n\nPendingBoardModel.prototype.remove = function (id, callback) {\n  this.storage.remove(id, callback);\n};\n\nPendingBoardModel.prototype.removeAll = function (callback) {\n  this.storage.drop(callback);\n};\n\nPendingBoardModel.prototype.getCount = function (callback) {\n  var todos = {\n    active: 0,\n    completed: 0,\n    total: 0\n  };\n  this.storage.findAll(function (data) {\n    data.forEach(function (todo) {\n      if (todo.completed) {\n        todos.completed++;\n      } else {\n        todos.active++;\n      }\n\n      todos.total++;\n    });\n    callback(todos);\n  });\n};\n\n//# sourceURL=webpack:///./src/pendingboardmodel.js?");

/***/ }),

/***/ "./src/pendingboardview.js":
/*!*********************************!*\
  !*** ./src/pendingboardview.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return PendingBoardView; });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/helpers.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\nvar PendingBoardView =\n/*#__PURE__*/\nfunction () {\n  function PendingBoardView(storage) {\n    _classCallCheck(this, PendingBoardView);\n\n    this.storage = storage;\n    this.pedingTask = JSON.parse(localStorage['pending']);\n    this.$taskList = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.pending-body');\n    this.$newTask = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.pendingInputCard');\n    this.$newTaskButton = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.pendingInputCardButton');\n    this.$sortby = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.sortby');\n    this.$prior = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.prior-1');\n\n    window.remove = function (e) {\n      console.log();\n    };\n  }\n\n  _createClass(PendingBoardView, [{\n    key: \"render\",\n    value: function render(viewCmd, parameter) {\n      var that = this;\n      var viewCommands = {\n        showEntries: function showEntries() {\n          that.$taskList.innerHTML = JSON.parse(localStorage['pending']).cards.map(function (card) {\n            return \"<li>\\n            <div>Title: \".concat(card.title, \"</div>\\n            <div>Description: \").concat(card.description, \"</div>\\n            <div>Time: \").concat(card.time, \"</div>\\n            <button class=\\\"removePending\\\" data-id=\\\"\").concat(card.id, \"\\\" onclick=\\\"remove(this)\\\">Remove</button>\\n          </li>\");\n          }).join(\"\");\n        },\n        removeItem: function removeItem() {\n          that._removeItem(parameter);\n        },\n        setFilter: function setFilter() {\n          _setFilter(parameter);\n        },\n        clearNewTask: function clearNewTask() {\n          that.$newTask.value = '';\n        },\n        editItem: function editItem() {\n          _editItem(parameter.id, parameter.title);\n        },\n        editItemDone: function editItemDone() {\n          that._editItemDone(parameter.id, parameter.title);\n        }\n      };\n      viewCommands[viewCmd]();\n    }\n  }, {\n    key: \"bind\",\n    value: function bind(event, handler) {\n      var that = this;\n\n      if (event === 'newTask') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$newTaskButton, 'click', function () {\n          handler(that.$newTask.value, that.$newTask.value);\n        });\n      } else if (event === 'removeCompleted') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$clearCompleted, 'click', function () {\n          handler();\n        });\n      } else if (event === 'itemEdit') {\n        $delegate(that.$todoList, 'li label', 'dblclick', function () {\n          handler({\n            id: _itemId(this)\n          });\n        });\n      } else if (event === 'sortBy') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$sortby, 'click', function () {\n          handler();\n        });\n      } else if (event === 'priority') {\n        Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$on\"])(that.$prior, 'click', function (prior) {\n          handler(prior);\n        });\n      }\n    }\n  }]);\n\n  return PendingBoardView;\n}();\n\n\n\nfunction _setFilter(currentPage) {\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.filters .selected').className = '';\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('.filters [href=\"#/' + currentPage + '\"]').className = 'selected';\n}\n\nfunction _elementComplete(id, completed) {\n  var listItem = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('[data-id=\"' + id + '\"]');\n\n  if (!listItem) {\n    return;\n  }\n\n  listItem.className = completed ? 'completed' : ''; // In case it was toggled from an event and not by clicking the checkbox\n\n  Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('input', listItem).checked = completed;\n}\n\nfunction _editItem(id, title) {\n  var listItem = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"qs\"])('[data-id=\"' + id + '\"]');\n\n  if (!listItem) {\n    return;\n  }\n\n  listItem.className = listItem.className + ' editing';\n  var input = document.createElement('input');\n  input.className = 'edit';\n  listItem.appendChild(input);\n  input.focus();\n  input.value = title;\n}\n\nfunction _itemId(element) {\n  var li = Object(_helpers__WEBPACK_IMPORTED_MODULE_0__[\"$parent\"])(element, 'li');\n  return parseInt(li.dataset.id, 10);\n}\n\n//# sourceURL=webpack:///./src/pendingboardview.js?");

/***/ }),

/***/ "./src/store.js":
/*!**********************!*\
  !*** ./src/store.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (Store);\n\nfunction Store(name, callback) {\n  callback = callback || function () {};\n\n  this._dbName = name;\n\n  if (!localStorage[name]) {\n    var data = {\n      cards: []\n    };\n    localStorage[name] = JSON.stringify(data);\n  }\n\n  callback.call(this, JSON.parse(localStorage[name]));\n}\n\nStore.prototype.find = function (query, callback) {\n  if (!callback) {\n    return;\n  }\n\n  var todos = JSON.parse(localStorage[this._dbName]).todos;\n  callback.call(this, todos.filter(function (todo) {\n    for (var q in query) {\n      if (query[q] !== todo[q]) {\n        return false;\n      }\n    }\n\n    return true;\n  }));\n};\n\nStore.prototype.findAll = function (callback) {\n  callback = callback || function () {};\n\n  callback.call(this, JSON.parse(localStorage[this._dbName]).todos);\n};\n\nStore.prototype.save = function (updateData, callback, id) {\n  var data = JSON.parse(localStorage[this._dbName]);\n  var cards = data.cards;\n\n  callback = callback || function () {}; // If an ID was actually given, find the item and update each property\n\n\n  if (id) {\n    for (var i = 0; i < cards.length; i++) {\n      if (cards[i].id === id) {\n        for (var key in updateData) {\n          // eslint-disable-line guard-for-in\n          cards[i][key] = updateData[key];\n        }\n\n        break;\n      }\n    }\n\n    localStorage[this._dbName] = JSON.stringify(data);\n    callback.call(this, JSON.parse(localStorage[this._dbName]).cards);\n  } else {\n    // Generate an ID\n    updateData.id = new Date().getTime();\n    cards.push(updateData);\n    localStorage[this._dbName] = JSON.stringify(data);\n    callback.call(this, [updateData]);\n  }\n};\n\nStore.prototype.remove = function (id, callback) {\n  var data = JSON.parse(localStorage[this._dbName]);\n  var cards = data.cards;\n\n  for (var i = 0; i < cards.length; i++) {\n    if (todos[i].id === id) {\n      cards.splice(i, 1);\n      break;\n    }\n  }\n\n  localStorage[this._dbName] = JSON.stringify(data);\n  callback.call(this, JSON.parse(localStorage[this._dbName]).cards);\n};\n\nStore.prototype.sort = function (callback) {\n  var data = JSON.parse(localStorage[this._dbName]);\n  var card = data.cards;\n  data.cards = card.sort(function (a, b) {\n    return b.timePass - a.timePass;\n  });\n  localStorage[this._dbName] = JSON.stringify(data);\n  callback.call(this, JSON.parse(localStorage[this._dbName]).cards);\n};\n\nStore.prototype.filter = function (priority, callback) {\n  var data = JSON.parse(localStorage[this._dbName]);\n  var card = data.cards;\n  data.cards = card.filter(function (card) {\n    return card.priority == priority;\n  });\n  localStorage[this._dbName] = JSON.stringify(data);\n  callback.call(this, JSON.parse(localStorage[this._dbName]).cards);\n};\n\nStore.prototype.drop = function (callback) {\n  localStorage[this._dbName] = JSON.stringify({\n    todos: []\n  });\n  callback.call(this, JSON.parse(localStorage[this._dbName]).todos);\n};\n\n//# sourceURL=webpack:///./src/store.js?");

/***/ })

/******/ });