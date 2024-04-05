"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _color = _interopRequireDefault(require("color"));

var _styledSystem = require("styled-system");

var _variants = require("./variants");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _Spinner = _interopRequireDefault(require("../Spinner"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Button/Button.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  width: ", ";\n  height: ", ";\n  margin-right: 6px;\n  border-radius: 50%;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #e8e8e8;\n  background: ", ";\n  background-color: ", ";\n  background-size: cover;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  margin-right: 4px;\n  font-size: ", ";\n  justify-content: center;\n  align-items: center;\n  box-shadow: 0px 3px 6px #00000029;\n  border: 1px solid #e8e8e8;\n  border-radius: 25px;\n  padding: 8px;\n  opacity: 1;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  appearance: none;\n  font-family: inherit;\n  border-radius: 4px;\n  outline: none;\n  cursor: pointer;\n  padding: .5rem 1rem;\n  border-style: solid;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  border-color: ", ";\n  ", "\n  ", "\n  ", "\n  ", "\n  box-sizing: border-box;\n  &:focus {\n    box-shadow: 0 0 8px ", ";\n  }\n\n  &:active:not(:disabled) {\n    box-shadow: inset 0px 0px 5px #c1c1c1;\n  }\n  &:active,\n  &:hover {\n    background-color: ", ";\n  }\n  &:disabled {\n    background-color: ", ";\n  }\n\n  ", "\n\n  ", "\n\n  ", " \n\n  ", "\n\n  ", "\n\n  ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledButton = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var borderColor = _ref.borderColor,
      theme = _ref.theme;
  return !!theme.colors[borderColor] ? theme.colors[borderColor] + " !important" : borderColor + " !important";
}, _variants.color, _variants.size, _styledSystem.space, function (props) {
  return props.fullWidth && 'width: 100%;' || '';
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return theme.colors[color];
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  return new _color["default"](theme.colors[color]).saturate(0.1).darken(0.1).string();
}, function (_ref4) {
  var theme = _ref4.theme,
      color = _ref4.color;
  return new _color["default"](theme.colors[color]).desaturate(0.4).lighten(0.1).opaquer(0.7).string();
}, function (_ref5) {
  var loading = _ref5.loading,
      theme = _ref5.theme;
  !!loading && "\n    cursor: progress;\n    &:hover {\n      background-color: 'inherit'\n      color: 'inherit';\n    }\n  ";
}, function (_ref6) {
  var outline = _ref6.outline,
      theme = _ref6.theme,
      color = _ref6.color;
  return !!outline && "\n    background-color: #fff;\n    color: " + theme.colors[color] + " !important;\n    border-color: " + theme.colors[color] + ";\n    &:hover {\n      background-color: " + theme.colors[color] + ";\n      color: " + (new _color["default"](theme.colors[color]).isDark() ? '#fff' : '#000') + " !important;\n    }\n    ";
}, function (_ref7) {
  var underline = _ref7.underline;
  return !!underline ? "\n      text-decoration: underline;\n      border: none;\n      outline: none;\n    " : "text-decoration: none;";
}, function (_ref8) {
  var linkButton = _ref8.linkButton,
      theme = _ref8.theme,
      color = _ref8.color;
  return !!linkButton ? "\n    color: " + theme.colors[color] + ";\n    border: none;\n    background-color: transparent !important;\n    box-shadow: none !important;\n    outline: none;\n    &:hover {\n      text-decoration: underline;\n      background-color: transparent;\n    }\n    " : "\n     text-decoration: none;";
}, function (_ref9) {
  var icon = _ref9.icon,
      theme = _ref9.theme;
  return !!icon ? "\n    display: flex;\n    align-items: center;\n    padding: 0 4px;\n    background-color: transparent;\n    color:  " + function (_ref10) {
    var color = _ref10.color;
    return theme.colors[color] ? theme.colors[color] : color;
  } + ";\n    overflow: visible;\n    &:hover {\n      text-decoration: underline;\n      background-color: transparent;\n    }\n  " : 'text-decoration: none;';
}, function (_ref11) {
  var customIcon = _ref11.customIcon,
      theme = _ref11.theme;
  return !!customIcon ? "\n    display: flex;\n    align-items: center;\n    overflow: visible;\n    max-width: unset;\n    padding: 8px;\n    " : 'text-decoration: none;';
});

var StyledFaIcon = _styledComponents["default"].div(_templateObject2(), function (_ref12) {
  var iconSize = _ref12.iconSize;
  return iconSize;
});

var StyledIcon = _styledComponents["default"].div(_templateObject3(), function (_ref13) {
  var imgSize = _ref13.imgSize;
  return imgSize;
}, function (_ref14) {
  var imgSize = _ref14.imgSize;
  return imgSize;
}, function (_ref15) {
  var imgBackground = _ref15.imgBackground;
  return "url(" + imgBackground + ") no-repeat center center";
}, function (_ref16) {
  var bgColor = _ref16.bgColor;
  return bgColor;
});

var Button = function Button(_ref17) {
  var children = _ref17.children,
      loading = _ref17.loading,
      disabled = _ref17.disabled,
      icon = _ref17.icon,
      iconSize = _ref17.iconSize,
      customIcon = _ref17.customIcon,
      imgSize = _ref17.imgSize,
      imgBackground = _ref17.imgBackground,
      bgColor = _ref17.bgColor,
      borderColor = _ref17.borderColor,
      rest = _objectWithoutPropertiesLoose(_ref17, ["children", "loading", "disabled", "icon", "iconSize", "customIcon", "imgSize", "imgBackground", "bgColor", "borderColor"]);

  return /*#__PURE__*/_react["default"].createElement(StyledButton, _extends({}, rest, {
    disabled: !!disabled || !!loading,
    loading: loading,
    icon: icon,
    customIcon: imgBackground,
    borderColor: borderColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 3
    }
  }), icon && /*#__PURE__*/_react["default"].createElement(StyledFaIcon, {
    iconSize: iconSize,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 9
    }
  })), imgBackground && /*#__PURE__*/_react["default"].createElement(StyledIcon, {
    imgBackground: imgBackground,
    imgSize: imgSize,
    bgColor: bgColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 23
    }
  }), !!loading ? 'carregando...' : children);
};

Button.displayName = 'Button';
Button.propTypes = process.env.NODE_ENV !== "production" ? _extends({
  size: _propTypes["default"].oneOf(['small', 'medium', 'big', 'huge']),
  color: _propTypes["default"].string
}, _propTypes2["default"].space) : {};
Button.defaultProps = {
  size: 'medium',
  color: 'default',
  type: 'button',
  imgSize: '35px',
  bgColor: 'transparent'
};
var _default = Button;
exports["default"] = _default;
module.exports = exports.default;