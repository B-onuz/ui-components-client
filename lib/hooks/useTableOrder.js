"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Example
 * const { sort, order, handleChangeOrder } = useTableOrder('name', 'asc')
 */
var useTableOrder = function useTableOrder(defaultSort, defaultOrder) {
  if (defaultSort === void 0) {
    defaultSort = '';
  }

  if (defaultOrder === void 0) {
    defaultOrder = 'asc';
  }

  var _useState = (0, _react.useState)(defaultSort),
      sort = _useState[0],
      setSort = _useState[1];

  var _useState2 = (0, _react.useState)(defaultOrder),
      order = _useState2[0],
      setOrder = _useState2[1];

  var handleChangeOrder = function handleChangeOrder(item) {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc');
    } else {
      setSort(item.key);
      setOrder('asc');
    }
  };

  return {
    sort: sort,
    order: order,
    handleChangeOrder: handleChangeOrder
  };
};

var _default = useTableOrder;
exports["default"] = _default;
module.exports = exports.default;