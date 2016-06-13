webpackHotUpdate(0,{

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.PlaylistContainer = exports.Playlist = undefined;

	var _react = __webpack_require__(77);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(234);

	var _function = __webpack_require__(359);

	var _Winner = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Winner\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Winner2 = _interopRequireDefault(_Winner);

	var _Vote = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./Vote\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _Vote2 = _interopRequireDefault(_Vote);

	var _action_creators = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../action_creators\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var actionCreators = _interopRequireWildcard(_action_creators);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var mapStateToProps = function mapStateToProps(state) {
		return {
			playlist: state.get('playlist')
		};
	};

	var Playlist = exports.Playlist = function (_Component) {
		_inherits(Playlist, _Component);

		function Playlist() {
			var _Object$getPrototypeO;

			var _temp, _this, _ret;

			_classCallCheck(this, Playlist);

			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_Object$getPrototypeO = Object.getPrototypeOf(Playlist)).call.apply(_Object$getPrototypeO, [this].concat(args))), _this), _this.shouldComponentUpdate = _function.shouldPureComponentUpdate, _temp), _possibleConstructorReturn(_this, _ret);
		}

		_createClass(Playlist, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					'Playlist.'
				);
			}
		}]);

		return Playlist;
	}(_react.Component);

	Playlist.propTypes = {
		pair: _react.PropTypes.any,
		vote: _react.PropTypes.func,
		hasVoted: _react.PropTypes.string,
		winner: _react.PropTypes.string
	};
	var PlaylistContainer = exports.PlaylistContainer = (0, _reactRedux.connect)(mapStateToProps, actionCreators)(Playlist);

/***/ },

/***/ 359:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shouldPureComponentUpdate;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _shallowEqual = __webpack_require__(360);

	var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

	function shouldPureComponentUpdate(nextProps, nextState) {
	  return !(0, _shallowEqual2['default'])(this.props, nextProps) || !(0, _shallowEqual2['default'])(this.state, nextState);
	}

	module.exports = exports['default'];

/***/ },

/***/ 360:
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	exports['default'] = shallowEqual;

	function shallowEqual(objA, objB) {
	  if (objA === objB) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  var bHasOwnProperty = Object.prototype.hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = exports['default'];

/***/ }

})