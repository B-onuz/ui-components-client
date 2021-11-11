"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  font-size: 16px;\n  color: #00000099;\n  font-weight: 400;\n  margin: 0;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var SubTitle = _styledComponents["default"].h1(_templateObject(), (0, _styledSystem.compose)(_styledSystem.color, _styledSystem.space, _styledSystem.typography));

var _default = SubTitle;
exports["default"] = _default;