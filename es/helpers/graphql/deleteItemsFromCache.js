"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _escapeStringRegexp = _interopRequireDefault(require("escape-string-regexp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * @example
 * deleteItemsFromCache('ListItem')
 * @returns {Function} Returns a update function
 */
var _default = function _default(typeKey) {
  return function (cache) {
    Object.keys(cache.data.data).forEach(function (key) {
      var rgx = new RegExp("/^" + (0, _escapeStringRegexp["default"])(typeKey) + "/");
      return key.match(rgx) && cache.data["delete"](key);
    });
  };
};

exports["default"] = _default;