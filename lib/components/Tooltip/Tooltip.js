"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _variants = require("./variants");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Tooltip/Tooltip.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  width: max-content;\n  max-width: 200px;\n  position: absolute;\n  border-radius: 12px;\n  opacity: ", ";\n  z-index: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 8px 16px;\n  background: ", " 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #2c28281c;\n  transition: all 300ms;\n  z-index: 1000;\n  ", "\n  &::after {\n    content: '';\n    width: 1em;\n    height: 1em;\n    position: absolute;\n    box-shadow: 1px 2px 2px -1px #2c28281c;\n    background: ", " 0% 0%;\n    ", "\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  position: relative;\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledTooltipWrapper = _styledComponents["default"].div(_templateObject(), _styledSystem.space);

var ChildrenTextWrapper = _styledComponents["default"].div(_templateObject2());

var TooltipTextBox = _styledComponents["default"].div(_templateObject3(), _variants.color, function (_ref) {
  var showTooltip = _ref.showTooltip;
  return showTooltip ? 1 : 0;
}, function (_ref2) {
  var showTooltip = _ref2.showTooltip;
  return showTooltip ? 1 : -100;
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return "" + theme.colors[color];
}, function (_ref4) {
  var direction = _ref4.direction;

  if (direction === 'left') {
    return "\n      right: calc(100% + 24px);\n      top: -50%;\n    ";
  }

  if (direction === 'right') {
    return "\n      left: calc(100% + 24px);\n      top: -50%;\n    ";
  }

  if (direction === 'top') {
    return "\n      left: 50%;\n      transform: translateX(-50%);\n      bottom: calc(100% + 1.5em);\n    ";
  }

  if (direction === 'bottom') {
    return "\n      transform: translateX(-50%);\n      left: 50%;\n      top: calc(100% + 1.5em);\n    ";
  }
}, function (_ref5) {
  var theme = _ref5.theme,
      color = _ref5.color;
  return "" + theme.colors[color];
}, function (_ref6) {
  var direction = _ref6.direction;

  if (direction === 'left') {
    return "\n      right: -0.2em;\n      top: 0.6em;\n      transform: rotateZ(-45deg);\n    ";
  }

  if (direction === 'right') {
    return "\n      left: -0.2em;\n      top: 0.6em;\n      transform: rotateZ(135deg);\n    ";
  }

  if (direction === 'top') {
    return "\n      top: calc(100% - 0.5em);\n      transform: rotateZ(45deg);\n      left: 0;\n      right: 0;\n      margin: auto;\n    ";
  }

  if (direction === 'bottom') {
    return "\n      bottom: calc(100% - 0.5em);\n      transform: rotateZ(-135deg);\n      left: 0;\n      right: 0;\n      margin: auto;\n    ";
  }
});

var Tooltip = function Tooltip(_ref7) {
  var children = _ref7.children,
      direction = _ref7.direction,
      color = _ref7.color,
      text = _ref7.text,
      rest = _objectWithoutPropertiesLoose(_ref7, ["children", "direction", "color", "text"]);

  var _useState = (0, _react.useState)(false),
      showTooltip = _useState[0],
      setShowTooltip = _useState[1];

  return /*#__PURE__*/_react["default"].createElement(StyledTooltipWrapper, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement(ChildrenTextWrapper, {
    onMouseEnter: function onMouseEnter() {
      return setShowTooltip(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setShowTooltip(false);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 7
    }
  }, children), /*#__PURE__*/_react["default"].createElement(TooltipTextBox, {
    color: color,
    direction: direction,
    showTooltip: showTooltip,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 7
    }
  }, text));
};

Tooltip.defaultProps = {
  color: 'primary',
  direction: 'top'
};
var _default = Tooltip;
exports["default"] = _default;
module.exports = exports.default;