"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Input = _interopRequireDefault(require("../Input"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _theme = _interopRequireDefault(require("../../theme/"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/SearchField/SearchField.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  right: 12px;\n  color: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  display: flex;\n  background-color: #fff;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  border-radius: 6px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  background-color: transparent;\n  padding-right: 32px;\n  &:focus {\n    background-color: #fff;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledSearchField = (0, _styledComponents["default"])(_Input["default"])(_templateObject());

var Wrapper = _styledComponents["default"].div(_templateObject2(), (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout));

var Icon = (0, _styledComponents["default"])(_reactFontawesome.FontAwesomeIcon)(_templateObject3(), function (_ref) {
  var theme = _ref.theme;
  return theme.colors.darkGrey;
});

var SearchField = function SearchField(_ref2) {
  var children = _ref2.children,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children"]);

  return /*#__PURE__*/_react["default"].createElement(Wrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledSearchField, _extends({
    placeholder: "Pesquisar"
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  })), /*#__PURE__*/_react["default"].createElement(Icon, {
    icon: _freeSolidSvgIcons.faSearch,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }));
};

var _default = SearchField;
exports["default"] = _default;
module.exports = exports.default;