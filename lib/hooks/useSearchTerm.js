"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * @example
 * const [searchTerm, lazySearchTerm, { handleChangeSearchTerm }] = useSearchTerm('defaultValue', 400)
 */
var useSearchTerm = function useSearchTerm(value, delay) {
  if (value === void 0) {
    value = '';
  }

  if (delay === void 0) {
    delay = 500;
  }

  var _useState = (0, _react.useState)(value),
      searchTerm = _useState[0],
      setSearchTerm = _useState[1];

  var _useState2 = (0, _react.useState)(),
      lazyKey = _useState2[0],
      setLazyKey = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      lazySearchTerm = _useState3[0],
      setLazySearchTerm = _useState3[1];

  var handleChangeSearchTerm = function handleChangeSearchTerm(value) {
    clearTimeout(lazyKey);
    setSearchTerm(value);
    setLazyKey(setTimeout(function () {
      setLazySearchTerm(value);
    }, delay));
  };

  return [searchTerm, lazySearchTerm, {
    handleChangeSearchTerm: handleChangeSearchTerm
  }];
};

var _default = useSearchTerm;
exports["default"] = _default;
module.exports = exports.default;