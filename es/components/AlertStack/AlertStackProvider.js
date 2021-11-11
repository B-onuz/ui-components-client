"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AlertStackContext = _interopRequireDefault(require("./AlertStackContext"));

var _uuid = require("uuid");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/AlertStack/AlertStackProvider.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var AlertStackProvider = function AlertStackProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)([]),
      topRightMessages = _useState[0],
      setTopRightMessages = _useState[1];

  var _useState2 = (0, _react.useState)([]),
      topLeftMessages = _useState2[0],
      setTopLeftMessages = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      bottomRightMessages = _useState3[0],
      setBottomRightMessages = _useState3[1];

  var _useState4 = (0, _react.useState)([]),
      bottomLeftMessages = _useState4[0],
      setBottomLeftMessages = _useState4[1];

  var _hideMessage = function _hideMessage(setMessages, _id) {
    setMessages(function (messages) {
      return messages.filter(function (message) {
        return message._id !== _id;
      });
    });
  };

  var _showMessage = function _showMessage(fn, params) {
    fn(function (messages) {
      return [].concat(messages, [params]);
    });

    if (params.time) {
      setTimeout(function () {
        _hideMessage(fn, params._id);
      }, params.time || params.time);
    }
  };

  var showMessage = function showMessage(_ref2) {
    var _ref2$position = _ref2.position,
        position = _ref2$position === void 0 ? 'bottom-left' : _ref2$position,
        title = _ref2.title,
        message = _ref2.message,
        color = _ref2.color,
        time = _ref2.time;
    var messageParam = {
      _id: (0, _uuid.v4)(),
      title: title,
      message: message,
      color: color,
      time: time
    };

    switch (position) {
      case 'top-right':
        return _showMessage(setTopRightMessages, messageParam);

      case 'top-left':
        return _showMessage(setTopLeftMessages, messageParam);

      case 'bottom-right':
        return _showMessage(setBottomRightMessages, messageParam);

      case 'bottom-left':
        return _showMessage(setBottomLeftMessages, messageParam);

      default:
        return _showMessage(setBottomLeftMessages, messageParam);
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_AlertStackContext["default"].Provider, {
    value: {
      showMessage: showMessage,
      topRightMessages: topRightMessages,
      topLeftMessages: topLeftMessages,
      bottomRightMessages: bottomRightMessages,
      bottomLeftMessages: bottomLeftMessages
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 5
    }
  }, children);
};

var _default = AlertStackProvider;
exports["default"] = _default;