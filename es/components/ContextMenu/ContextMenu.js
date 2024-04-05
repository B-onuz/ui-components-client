"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _Button = _interopRequireDefault(require("../Button"));

var _ContextMenuDialog = _interopRequireDefault(require("./ContextMenuDialog"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _useModal2 = _interopRequireDefault(require("../../hooks/useModal"));

var _shortid = _interopRequireDefault(require("shortid"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/ContextMenu/ContextMenu.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  margin: 8px 0;\n  border: 1px solid #f1f1f3;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 2em;\n  height: 2em;\n  border-radius: 50%;\n  background-color: #f5f5f5;\n  box-shadow: 0px 2px 3px #2c282848;\n  border: none;\n  &:hover {\n    cursor: pointer;\n  }\n  &:focus {\n    outline: none;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  position: relative;\n  display: flex;\n  .contextButton {\n    width: 2em;\n    height: 2em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledContextMenu = _styledComponents["default"].div(_templateObject(), _styledSystem.color, _styledSystem.space);

var ModalWrapper = _styledComponents["default"].div(_templateObject2());

var ContextMenuToogleButton = _styledComponents["default"].button(_templateObject3());

var Divider = _styledComponents["default"].hr(_templateObject4());

var Icon = (0, _styledComponents["default"])(_reactFontawesome.FontAwesomeIcon)(_templateObject5(), function (_ref) {
  var theme = _ref.theme,
      buttonIcon = _ref.buttonIcon;
  return !buttonIcon ? theme.colors.darkGrey : '';
});

var ContextMenu = function ContextMenu(_ref2) {
  var children = _ref2.children,
      direction = _ref2.direction,
      contextMenuActions = _ref2.contextMenuActions,
      contextFunctions = _ref2.contextFunctions,
      buttonIcon = _ref2.buttonIcon,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children", "direction", "contextMenuActions", "contextFunctions", "buttonIcon"]);

  var _useState = (0, _react.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  var wrapperRef = (0, _react.useRef)(null);
  var buttonRef = (0, _react.useRef)(null);

  var _useModal = (0, _useModal2["default"])(),
      isOpenResponsiveModal = _useModal.isOpen,
      openResponsiveModal = _useModal.openModal,
      closeResponsiveModal = _useModal.closeModal,
      responsiveModalParams = _useModal.params;

  var onClose = function onClose() {
    setIsOpen(false);
    closeResponsiveModal();
    return true;
  };

  (0, _react.useEffect)(function () {
    if (isOpen) {
      openResponsiveModal();
    }
  });
  var needResponsive = screen.width >= 500 ? false : true;
  return /*#__PURE__*/_react["default"].createElement(StyledContextMenu, _extends({
    ref: wrapperRef,
    key: "" + _shortid["default"].generate()
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 5
    }
  }), contextFunctions ? /*#__PURE__*/_react["default"].createElement("div", {
    ref: buttonRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    p: 0,
    className: "contextButton",
    onClick: function onClick() {
      return setIsOpen(function (last) {
        return !last;
      });
    },
    color: 'primary',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    buttonIcon: true,
    icon: buttonIcon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 13
    }
  }))) : /*#__PURE__*/_react["default"].createElement(ContextMenuToogleButton, {
    ref: buttonRef,
    onClick: function onClick() {
      return setIsOpen(function (last) {
        return !last;
      });
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(Icon, {
    icon: _freeSolidSvgIcons.faEllipsisH,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 11
    }
  })), needResponsive ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Modal["default"], {
    open: isOpenResponsiveModal,
    onClose: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(ModalWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 13
    }
  }, (contextMenuActions || []).map(function (action, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: action.text + "-" + _shortid["default"].generate(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 17
      }
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      key: action.text + "-" + _shortid["default"].generate(),
      linkButton: true,
      color: 'primary',
      onClick: function onClick() {
        return onClose() && action.buttonFunction();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 19
      }
    }, action.text), index + 1 !== contextMenuActions.length ? /*#__PURE__*/_react["default"].createElement(Divider, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 62
      }
    }) : null);
  })))) : /*#__PURE__*/_react["default"].createElement(_ContextMenuDialog["default"], {
    contextFunctions: contextFunctions,
    isOpen: isOpen,
    onClose: onClose,
    buttonRef: buttonRef,
    direction: direction,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 9
    }
  }, (contextMenuActions || []).map(function (action, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: action.text + "-" + _shortid["default"].generate(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 13
      }
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
      key: action.text + "-" + _shortid["default"].generate(),
      linkButton: true,
      color: 'primary',
      onClick: function onClick() {
        return onClose() && action.buttonFunction();
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 15
      }
    }, action.text), index + 1 !== contextMenuActions.length ? /*#__PURE__*/_react["default"].createElement(Divider, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 58
      }
    }) : null);
  })));
};

ContextMenu.defaultProps = {
  direction: 'left'
};
var _default = ContextMenu;
exports["default"] = _default;