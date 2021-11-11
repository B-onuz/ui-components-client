"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  ", "\n  font-size: 1em !important;\n  @media only screen and (min-width: 468px) {\n    white-space: nowrap;\n    margin-left: 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Title = _styledComponents["default"].h1(_templateObject(), (0, _styledSystem.compose)(_styledSystem.color, _styledSystem.typography, _styledSystem.space));

Title.defaultProps = {
  color: 'darkRed'
};
var _default = Title;
exports["default"] = _default;
module.exports = exports.default;