"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/*
 * Example
 * const { isOpen, openModal, closeModal, toggleModal } = useModal(false)
 */
var useModal = function useModal(defaultIsOpen) {
  if (defaultIsOpen === void 0) {
    defaultIsOpen = false;
  }

  var _useState = (0, _react.useState)(defaultIsOpen),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var _useState2 = (0, _react.useState)(null),
      params = _useState2[0],
      setParams = _useState2[1];

  var openModal = (0, _react.useCallback)(function (params) {
    setParams(params);
    setIsOpen(true);
  }, []);
  var closeModal = (0, _react.useCallback)(function () {
    setIsOpen(false);
    setParams(null);
  }, []);
  var toggleModal = (0, _react.useCallback)(function () {
    if (!isOpen === false) {
      setParams(null);
    }

    setIsOpen(!isOpen);
  }, [isOpen]);
  return {
    isOpen: isOpen,
    openModal: openModal,
    closeModal: closeModal,
    toggleModal: toggleModal,
    params: params
  };
};

var _default = useModal;
exports["default"] = _default;