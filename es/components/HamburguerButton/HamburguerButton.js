"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/HamburguerButton/HamburguerButton.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  right: -5px;\n  transition: 0.15s linear;\n  transition-delay: 0.35s;\n  transform: rotate(135deg) scale(0);\n  opacity: 0.3;\n  transform-origin: center center;\n  z-index: 10;\n  width: 15px;\n  height: 15px;\n  ", "\n  &::after, &::before {\n    content: '';\n    border: solid;\n    border-width: 0 5px 5px 0;\n    display: inline-block;\n    padding: 5px;\n    transform: rotate(135deg);\n    -webkit-transform: rotate(135deg);\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n  }\n  &::before {\n    z-index: 1;\n    border-width: 8px 8px 8px 8px;\n    border-color: ", ";\n    background: ", ";\n    margin-top: -5px;\n    margin-left: -2px;\n    border-radius: 4px;\n    margin-right: -8px;\n  }\n  &::after {\n    z-index: 2;\n    border-color: #333333de;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 35px;\n  height: 26px;\n  border: none;\n  position: relative;\n  background: linear-gradient(to bottom, #333333de, #333333de);\n  background-size: 100% 20%;\n  background-repeat: no-repeat;\n  background-position: center center;\n  transition: background-size 0.2s 0.25s ease;\n  outline: none;\n  cursor: pointer;\n  transform: scale(0.6);\n  transition: background-size 0.3s 0.2s ease;\n  &:before,\n  &:after {\n    height: 20%;\n    width: 100%;\n    position: absolute;\n    left: 0;\n    background-color: #333333de;\n    content: '';\n    transition: transform 0.3s ease;\n  }\n  &:before {\n    top: 0;\n  }\n  &:after {\n    bottom: 0;\n  }\n  &:before,\n  &:after {\n    transition: 0.3s ease;\n  }\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledHamburguerButton = _styledComponents["default"].button(_templateObject(), function (props) {
  return props.isOpen && "\n      // background-size: 0 0;\n      &:before,\n      &:after {\n        transition-delay: 0.3s;\n      }\n      // &:before {\n      //   transform: translateY(200%) rotate(45deg);\n      // }\n      // &:after {\n      //   transform: translateY(-200%) rotate(-45deg);\n      // }\n    ";
});

var Arrow = _styledComponents["default"].i(_templateObject2(), function (props) {
  return props.isOpen && " opacity: 1;\n      transform: rotate(0) scale(1);\n    ";
}, function (props) {
  return props.backgroundColor;
}, function (props) {
  return props.backgroundColor;
});

var HamburguerButton = function HamburguerButton(_ref) {
  var _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      children = _ref.children,
      _ref$backgroundColor = _ref.backgroundColor,
      backgroundColor = _ref$backgroundColor === void 0 ? '#fff' : _ref$backgroundColor,
      rest = _objectWithoutPropertiesLoose(_ref, ["isOpen", "children", "backgroundColor"]);

  return /*#__PURE__*/_react["default"].createElement(StyledHamburguerButton, _extends({
    isOpen: isOpen
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement(Arrow, {
    className: "arrow left",
    isOpen: isOpen,
    backgroundColor: backgroundColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }
  }));
};

var _default = HamburguerButton;
exports["default"] = _default;