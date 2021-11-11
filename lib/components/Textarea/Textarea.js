"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _color = _interopRequireDefault(require("color"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Textarea/Textarea.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border: 1px solid #dededf;\n  border-radius: 4px;\n  line-height: 2.1em;\n  outline: none;\n  padding-right: 1em;\n  padding-left: 1em;\n  width: 100%;\n  box-sizing: border-box;\n  max-width: 100%;\n  &::placeholder {\n    letter-spacing: 0px;\n    color: #b5b5b5;\n  }\n  &:focus {\n    box-shadow: 0 0 3px\n      ", ";\n    border-color: ", ";\n  }\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledTextarea = _styledComponents["default"].textarea(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color,
      error = _ref.error;
  return error ? new _color["default"](theme.colors['red']).fade(0.5).string() : new _color["default"](theme.colors[color]).fade(0.5).string();
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color,
      error = _ref2.error;
  return error ? new _color["default"](theme.colors['red']).string() : theme.colors[color];
}, function (_ref3) {
  var error = _ref3.error,
      theme = _ref3.theme;
  return !!error && "\n      box-shadow: 0 0 3px " + new _color["default"](theme.colors['red']).fade(0.5).string() + ";\n      border: 1px solid " + theme.colors['red'] + ";\n    ";
}, _styledSystem.size);

var Textarea = function Textarea(_ref4) {
  var children = _ref4.children,
      rest = _objectWithoutPropertiesLoose(_ref4, ["children"]);

  return /*#__PURE__*/_react["default"].createElement(StyledTextarea, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 10
    }
  }));
};

Textarea.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _propTypes2["default"].size) : {};
Textarea.defaultProps = {
  size: 'medium',
  color: 'blue'
};
var _default = Textarea;
exports["default"] = _default;
module.exports = exports.default;