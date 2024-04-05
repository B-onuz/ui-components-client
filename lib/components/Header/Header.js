"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Title = _interopRequireDefault(require("./Title"));

var _SubTitle = _interopRequireDefault(require("./SubTitle"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Header/Header.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  flex: 1;\n  font-family: inherit;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledHeader = _styledComponents["default"].header(_templateObject(), _styledSystem.typography);

var Header = function Header(_ref) {
  var children = _ref.children,
      title = _ref.title,
      subTitle = _ref.subTitle,
      _ref$textAlign = _ref.textAlign,
      textAlign = _ref$textAlign === void 0 ? 'left' : _ref$textAlign,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "title", "subTitle", "textAlign"]);

  return /*#__PURE__*/_react["default"].createElement(StyledHeader, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }), !!title && /*#__PURE__*/_react["default"].createElement(_Title["default"], {
    textAlign: textAlign,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 19
    }
  }, title), !!subTitle && /*#__PURE__*/_react["default"].createElement(_SubTitle["default"], {
    textAlign: textAlign,
    mt: 1,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, subTitle));
};

Header.defaultProps = {
  fontSize: [2, 3, 4]
};
var _default = Header;
exports["default"] = _default;
module.exports = exports.default;