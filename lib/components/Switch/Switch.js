"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Switch/Switch.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  border-color: rgb(223, 223, 223);\n  box-shadow: rgb(223, 223, 223) 1px 1px 3px 0px inset;\n  transition: border 0.4s, box-shadow 0.4s;\n  background-color: #f7f7f7;\n  border: 1px solid #dfdfdf;\n  border-radius: 20px;\n  cursor: pointer;\n  display: inline-block;\n  height: 20px;\n  position: relative;\n  vertical-align: middle;\n  width: 40px;\n  user-select: none;\n  overflow: hidden;\n  box-sizing: content-box;\n  background-clip: content-box;\n  -webkit-mask-image: -webkit-radial-gradient(white, black);\n  ", "\n  ", "\n  input {\n    display: none;\n    & + ", " {\n      transform: translate(0);\n    }\n\n    &:checked + ", " {\n      transform: translate(calc(50% + 10px));\n    }\n\n    &:checked ~ ", " {\n      background: ", ";\n      opacity: 1;\n      transform: translate(0);\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1;\n  transform: translate(calc(-55% - 25px));\n  transition: 0.25s ease-out;\n  opacity: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  background: #fff;\n  position: relative;\n  border-radius: 100%;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);\n  height: 20px;\n  width: 20px;\n  top: 0;\n  display: block;\n  transform: translate(25px);\n  transition: 0.2s;\n  z-index: 2;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var SwitchToggle = _styledComponents["default"].div(_templateObject());

var SwitchBg = _styledComponents["default"].div(_templateObject2());

var Wrapper = _styledComponents["default"].label(_templateObject3(), _styledSystem.space, function (props) {
  if (props.loading) {
    return "\n          opacity: .5;\n      ";
  }
}, SwitchToggle, SwitchToggle, SwitchBg, function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return theme.colors[color];
});

var Switch = function Switch(props) {
  var onChange = props.onChange,
      checked = props.checked,
      id = props.id,
      _props$loading = props.loading,
      loading = _props$loading === void 0 ? false : _props$loading,
      _props$color = props.color,
      color = _props$color === void 0 ? 'primary' : _props$color,
      rest = _objectWithoutPropertiesLoose(props, ["onChange", "checked", "id", "loading", "color"]);

  return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({
    htmlFor: id,
    loading: loading,
    color: color
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement("input", _extends({
    type: "checkbox",
    id: id,
    checked: checked,
    onChange: onChange
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }
  })), /*#__PURE__*/_react["default"].createElement(SwitchToggle, {
    color: color,
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }
  }), /*#__PURE__*/_react["default"].createElement(SwitchBg, {
    color: color,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }
  }));
};

var _default = Switch;
exports["default"] = _default;
module.exports = exports.default;