"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Spinner/Spinner.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  &,\n  &:after {\n    border-radius: 50%;\n    width: 2em;\n    height: 2em;\n  }\n  font-size: 10px;\n  vertical-align: middle;\n  position: relative;\n  text-indent: -9999em;\n  border-top: 2px solid ", ";\n  border-right: 2px solid ", ";\n  border-bottom: 2px solid ", ";\n  border-left: 2px solid #ffffff;\n  -webkit-transform: translateZ(0);\n  -ms-transform: translateZ(0);\n  transform: translateZ(0);\n  -webkit-animation: load8 1.1s infinite linear;\n  animation: load8 0.5s infinite linear;\n  ", "\n  @keyframes load8 {\n    0% {\n      -webkit-transform: rotate(0deg);\n      transform: rotate(0deg);\n    }\n    100% {\n      -webkit-transform: rotate(360deg);\n      transform: rotate(360deg);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledSpinner = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return "" + theme.colors[color];
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return "" + theme.colors[color];
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return "" + theme.colors[color];
}, (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout));

var Spinner = function Spinner(_ref4) {
  var children = _ref4.children,
      rest = _objectWithoutPropertiesLoose(_ref4, ["children"]);

  return /*#__PURE__*/_react["default"].createElement(StyledSpinner, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 10
    }
  }));
};

var _default = Spinner;
exports["default"] = _default;