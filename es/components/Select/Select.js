"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _variants = require("./variants");

var _color = _interopRequireDefault(require("color"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Select/Select.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border: 1px solid #dededf;\n  appearance: none;\n  line-height: inherit;\n  border-radius: 4px;\n  line-height: 2.1em;\n  outline: none;\n  padding-right: 2em;\n  padding-left: 1em;\n  width: 100%;\n  box-sizing: border-box;\n  background: #fff;\n  background-image: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTc2cHgiIGhlaWdodD0iOTBweCIgdmlld0JveD0iMCAwIDE3NiA5MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5UcmlhbmdsZTwvdGl0bGU+CiAgICA8ZyBpZD0iV2VsY29tZSIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IkFydGJvYXJkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYuMDAwMDAwLCAtNy4wMDAwMDApIiBmaWxsPSIjNEQ0RDREIj4KICAgICAgICAgICAgPHBhdGggZD0iTTEwNS40MTQyMTQsOC40MTQyMTM1NiBMMTkwLjU4NTc4Niw5My41ODU3ODY0IEMxOTEuMzY2ODM1LDk0LjM2NjgzNSAxOTEuMzY2ODM1LDk1LjYzMzE2NSAxOTAuNTg1Nzg2LDk2LjQxNDIxMzYgQzE5MC4yMTA3MTQsOTYuNzg5Mjg2MyAxODkuNzAyMDA2LDk3IDE4OS4xNzE1NzMsOTcgTDE4LjgyODQyNzEsOTcgQzE3LjcyMzg1NzYsOTcgMTYuODI4NDI3MSw5Ni4xMDQ1Njk1IDE2LjgyODQyNzEsOTUgQzE2LjgyODQyNzEsOTQuNDY5NTY3IDE3LjAzOTE0MDgsOTMuOTYwODU5MiAxNy40MTQyMTM2LDkzLjU4NTc4NjQgTDEwMi41ODU3ODYsOC40MTQyMTM1NiBDMTAzLjM2NjgzNSw3LjYzMzE2NDk4IDEwNC42MzMxNjUsNy42MzMxNjQ5OCAxMDUuNDE0MjE0LDguNDE0MjEzNTYgWiIgaWQ9IlRyaWFuZ2xlIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDQuMDAwMDAwLCA1Mi4wMDAwMDApIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMDQuMDAwMDAwLCAtNTIuMDAwMDAwKSAiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==');\n  background-repeat: no-repeat, repeat;\n  cursor: pointer;\n  background-position: right 0.7em top 50%, 0 0;\n  background-size: 0.65em auto, 100%;\n  text-overflow: ellipsis;\n  &::placeholder {\n    letter-spacing: 0px;\n    color: #b5b5b5;\n  }\n  &:focus {\n    box-shadow: 0 0 3px\n      ", ";\n    border-color: ", ";\n  }\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledSelect = _styledComponents["default"].select(_templateObject(), function (_ref) {
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
}, _variants.size);

var Select = function Select(_ref4) {
  var rest = _extends({}, _ref4);

  return /*#__PURE__*/_react["default"].createElement(StyledSelect, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 10
    }
  }));
};

Select.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _propTypes2["default"].size) : {};
Select.defaultProps = {
  size: 'medium',
  color: 'blue'
};
var _default = Select;
exports["default"] = _default;