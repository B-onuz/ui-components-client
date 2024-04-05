"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Alert = _interopRequireDefault(require("../Alert"));

var _AlertStackContext = _interopRequireDefault(require("./AlertStackContext"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/AlertStack/AlertStack.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: fixed;\n  z-index: 9999999;\n  max-width: 100%;\n  margin: 10px;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Wrapper = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left;

  if (top && right) {
    return "top: " + 0 + "px; right: " + 0 + "px;";
  }

  if (left && top) {
    return "left: " + 0 + "px; top: " + 0 + "px;";
  }

  if (bottom && left) {
    return "bottom: " + 0 + "px; left: " + 0 + "px;";
  }

  if (bottom && right) {
    return "bottom: " + 0 + "px; right: " + 0 + "px;";
  }

  return "bottom: " + 0 + "px; left: " + 0 + "px;";
});

var useRootAlertStack = function useRootAlertStack() {
  var _useState = (0, _react.useState)(),
      $rootAlertStack = _useState[0],
      setRootAlertStack = _useState[1];

  (0, _react.useEffect)(function () {
    var rootAlertStack = document.getElementById('root-alert-stack');

    if (rootAlertStack) {
      setRootAlertStack(rootAlertStack);
    } else {
      var rootEl = document.createElement('div');
      rootEl.id = 'root-alert-stack';
      setRootAlertStack(rootEl);
      document.body.appendChild(rootEl);
    }
  });
  return {
    $rootAlertStack: $rootAlertStack
  };
};

var AlertStack = function AlertStack(_ref2) {
  var rest = _extends({}, _ref2);

  var _useRootAlertStack = useRootAlertStack(),
      $rootAlertStack = _useRootAlertStack.$rootAlertStack;

  var _useContext = (0, _react.useContext)(_AlertStackContext["default"]),
      topRightMessages = _useContext.topRightMessages,
      topLeftMessages = _useContext.topLeftMessages,
      bottomLeftMessages = _useContext.bottomLeftMessages,
      bottomRightMessages = _useContext.bottomRightMessages;

  if (!$rootAlertStack) return null;
  return _reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, !!topRightMessages.length && /*#__PURE__*/_react["default"].createElement(Wrapper, {
    top: true,
    right: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, topRightMessages.map(function (_ref3) {
    var title = _ref3.title,
        message = _ref3.message,
        color = _ref3.color;
    return /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
      mt: 10,
      animate: 'top',
      color: color,
      title: title,
      message: message,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }
    });
  })), !!topLeftMessages.length && /*#__PURE__*/_react["default"].createElement(Wrapper, {
    top: true,
    left: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, topLeftMessages.map(function (_ref4) {
    var title = _ref4.title,
        message = _ref4.message,
        color = _ref4.color;
    return /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
      mt: 10,
      animate: 'top',
      color: color,
      title: title,
      message: message,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    });
  })), !!bottomLeftMessages.length && /*#__PURE__*/_react["default"].createElement(Wrapper, {
    bottom: true,
    left: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 9
    }
  }, bottomLeftMessages.map(function (_ref5) {
    var title = _ref5.title,
        message = _ref5.message,
        color = _ref5.color;
    return /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
      mt: 10,
      animate: 'bottom',
      color: color,
      title: title,
      message: message,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 13
      }
    });
  })), !!bottomRightMessages.length && /*#__PURE__*/_react["default"].createElement(Wrapper, {
    bottom: true,
    right: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  }, bottomRightMessages.map(function (_ref6) {
    var title = _ref6.title,
        message = _ref6.message,
        color = _ref6.color;
    return /*#__PURE__*/_react["default"].createElement(_Alert["default"], {
      mt: 10,
      animate: 'bottom',
      color: color,
      title: title,
      message: message,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    });
  }))), $rootAlertStack);
};

var _default = AlertStack;
exports["default"] = _default;
module.exports = exports.default;