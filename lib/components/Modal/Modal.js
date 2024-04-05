"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var _reactSpring = require("react-spring");

var _styledSystem = require("styled-system");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Modal/Modal.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  z-index: -1;\n  background: rgba(0, 0, 0, 0.3);\n  width: 100%;\n  height: 100%;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  cursor: pointer;\n  border: none;\n  outline: none;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 9999999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  overflow: auto;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  box-sizing: border-box;\n  max-height: 90vh;\n  display: flex;\n  flex-direction: column;\n  padding: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  width: auto;\n  max-width: 90%;\n  margin: auto;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var ContentModal = (0, _styledComponents["default"])(_reactSpring.animated.div)(_templateObject(), (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout));
var BoxModal = (0, _styledComponents["default"])(_Box["default"])(_templateObject2(), function (_ref) {
  var spacing = _ref.spacing;
  return spacing ? spacing : '20px';
});

var BoxModalContent = _styledComponents["default"].div(_templateObject3());

var BoxModalHeader = _styledComponents["default"].div(_templateObject4());

var BoxModalFooter = _styledComponents["default"].div(_templateObject5());

var Wrapper = _styledComponents["default"].div(_templateObject6());

var Shadow = _styledComponents["default"].button(_templateObject7());

var useRootModal = function useRootModal() {
  var _useState = (0, _react.useState)(),
      $rootModal = _useState[0],
      setRootModal = _useState[1];

  (0, _react.useEffect)(function () {
    var rootModal = document.getElementById('modal-root');

    if (rootModal) {
      setRootModal(rootModal);
    } else {
      var rootEl = document.createElement('div');
      rootEl.id = 'modal-root';
      setRootModal(rootEl);
      document.body.appendChild(rootEl);
    }
  });
  return {
    $rootModal: $rootModal
  };
};

var Modal = function Modal(_ref2) {
  var children = _ref2.children,
      open = _ref2.open,
      onClose = _ref2.onClose,
      boxProps = _ref2.boxProps,
      header = _ref2.header,
      footer = _ref2.footer,
      contentModalProps = _ref2.contentModalProps,
      spacing = _ref2.spacing,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children", "open", "onClose", "boxProps", "header", "footer", "contentModalProps", "spacing"]);

  var _useRootModal = useRootModal(),
      $rootModal = _useRootModal.$rootModal;

  var transitions = (0, _reactSpring.useTransition)(open, null, {
    from: {
      transform: 'translate3d(0,-80px,0)',
      opacity: 0
    },
    enter: {
      transform: 'translate3d(0,0px,0)',
      opacity: 1
    },
    leave: {
      transform: 'translate3d(0,-80px,0)',
      opacity: 0
    }
  });
  var opacityTransitions = (0, _reactSpring.useTransition)(open, null, {
    from: {
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    leave: {
      opacity: 0
    }
  });
  if (!$rootModal) return null;
  return _reactDom["default"].createPortal(opacityTransitions.map(function (_ref3) {
    var item = _ref3.item,
        key = _ref3.key;
    return item && /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({}, rest, {
      key: key,
      role: "dialog",
      "aria-modal": "true",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 11
      }
    }), transitions.map(function (_ref4) {
      var item = _ref4.item,
          key = _ref4.key,
          props = _ref4.props;
      return item && /*#__PURE__*/_react["default"].createElement(ContentModal, _extends({
        key: key,
        style: props
      }, contentModalProps, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 19
        }
      }), /*#__PURE__*/_react["default"].createElement(BoxModal, _extends({}, boxProps, {
        spacing: spacing,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 21
        }
      }), /*#__PURE__*/_react["default"].createElement(BoxModalHeader, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 23
        }
      }, header), /*#__PURE__*/_react["default"].createElement(BoxModalContent, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 23
        }
      }, children), /*#__PURE__*/_react["default"].createElement(BoxModalFooter, {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 23
        }
      }, footer)));
    }), opacityTransitions.map(function (_ref5) {
      var item = _ref5.item,
          key = _ref5.key,
          props = _ref5.props;
      return item && /*#__PURE__*/_react["default"].createElement(Shadow, {
        key: key,
        style: props,
        onClick: onClose,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 71
        }
      });
    }));
  }), $rootModal);
};

var _default = Modal;
exports["default"] = _default;
module.exports = exports.default;