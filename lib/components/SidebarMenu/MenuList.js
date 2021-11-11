"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  list-style: none;\n  padding: 0;\n  transition: 0.2s linear;\n  transform: translateX(100%);\n  opacity: 0.5;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var MenuList = _styledComponents["default"].ul(_templateObject(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen && "\n        transform: translateX(0);\n        opacity: 1;\n    ";
});

var _default = MenuList;
exports["default"] = _default;
module.exports = exports.default;