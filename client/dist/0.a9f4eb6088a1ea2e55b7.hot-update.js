webpackHotUpdate(0,{

/***/ 252:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _react = __webpack_require__(77);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(253);

	var _App = __webpack_require__(310);

	var _App2 = _interopRequireDefault(_App);

	var _PlaylistContainer = __webpack_require__(358);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createElement(
		_reactRouter.Router,
		{ history: _reactRouter.hashHistory },
		_react2.default.createElement(
			_reactRouter.Route,
			{ component: _App2.default },
			_react2.default.createElement(_reactRouter.Route, { path: '/', component: _PlaylistContainer.PlaylistContainer })
		)
	);

/***/ },

/***/ 358:
/***/ function(module, exports) {

	"use strict";

/***/ }

})