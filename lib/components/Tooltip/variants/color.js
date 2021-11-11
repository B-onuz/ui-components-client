"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _styledSystem = require("styled-system");

var _color = _interopRequireDefault(require("color"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var _default = function _default(props) {
  var variants = Object.entries(props.theme.colors).reduce(function (acc, _ref) {
    var _extends2;

    var key = _ref[0],
        value = _ref[1];
    return _extends({}, acc, (_extends2 = {}, _extends2[key] = {
      color: new _color["default"](value).isDark() ? '#fff' : '#000',
      bg: value,
      borderColor: value
    }, _extends2));
  }, {});
  return (0, _styledSystem.variant)({
    prop: 'color',
    variants: variants
  });
};

exports["default"] = _default;
module.exports = exports.default;