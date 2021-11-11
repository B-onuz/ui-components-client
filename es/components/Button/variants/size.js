"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styledSystem = require("styled-system");

var _default = function _default(props) {
  return (0, _styledSystem.variant)({
    prop: 'size',
    variants: {
      huge: {
        fontSize: 4
      },
      big: {
        fontSize: 3
      },
      medium: {
        fontSize: 2
      },
      small: {
        fontSize: 1
      }
    }
  });
};

exports["default"] = _default;