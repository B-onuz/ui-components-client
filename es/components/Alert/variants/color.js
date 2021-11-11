"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(props) {
  var color = props.theme.colors[props.color];
  var objColor = new _color["default"](color);
  var bgColor = objColor.saturate(1.5).lighten(1).fade(0.9).toString();
  var shadowColor = objColor.saturate(1.5).lighten(1).fade(0.4).opaquer(0.7).toString();
  var textColor = objColor.fade(0.15).toString();
  return "\n        color: " + color + ";\n        background-color: " + bgColor + ";\n        box-shadow: 0 0 3px " + shadowColor + ";\n        & > p {\n          color: " + textColor + ";\n        }\n    ";
};

exports["default"] = _default;