"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/NavBar/NavBar.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  background-color: #f4f4f4;\n  height: 64px;\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  box-sizing: border-box;\n  flex-shrink: 0;\n  @media only screen and (max-width: 600px) {\n    height: auto;\n    width: 100%;\n    flex-direction: column;\n    justify-content: center;\n    padding: 2vh;\n    position: fixed;\n    width: 100%;\n    z-index: 1000;\n    flex-wrap: wrap;\n    & > header {\n      max-width: 85%;\n      & > h1 {\n        max-width: 100%;\n        margin-bottom: 8px;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n      }\n    }\n    & > button {\n      position: absolute;\n      right: 8px;\n      top: 33.33%;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledNavBar = _styledComponents["default"].div(_templateObject());

var NavBar = function NavBar(_ref) {
  var rest = _extends({}, _ref);

  return /*#__PURE__*/_react["default"].createElement(StyledNavBar, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 10
    }
  }));
};

var _default = NavBar;
exports["default"] = _default;