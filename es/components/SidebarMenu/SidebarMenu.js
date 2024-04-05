"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _reflexbox = require("reflexbox");

var _MenuList = _interopRequireDefault(require("./MenuList"));

var _Button = _interopRequireDefault(require("../Button"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/SidebarMenu/SidebarMenu.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  color: #ffffff;\n  text-decoration: none;\n  text-align: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  bottom: 30px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  @media only screen and (max-height: 800px) {\n    position: unset;\n    padding-bottom: 4vh;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  height: 100%;\n  background: #550e33 linear-gradient(89deg, #550e33 0%, #ff4f5d 100%) 0% 0% no-repeat padding-box;\n  transition: 0.2s linear;\n  z-index: 1002;\n  overflow: auto;\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  z-index: 9999;\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  visibility: hidden;\n  background: rgba(0, 0, 0, 0);\n  transition: 0.2s;\n  cursor: pointer;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Backdrop = _styledComponents["default"].div(_templateObject());

var styleOnlyMobile = function styleOnlyMobile(onlyMobile, styleCSS) {
  return onlyMobile ? styleCSS : "\n    @media only screen and (max-width: 1024px) {\n      " + styleCSS + "\n    }\n  ";
};

var WrapperSidebarMenu = _styledComponents["default"].nav(_templateObject2(), function (_ref) {
  var open = _ref.open,
      onlyMobile = _ref.onlyMobile;
  return !!open && styleOnlyMobile(onlyMobile, "\n      position: fixed;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n\n      " + Backdrop + " {\n        visibility: visible;\n        background: rgba(0, 0, 0, 0.3);\n        position: fixed;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 1001;\n      }\n  ");
});

var StyledSidebarMenu = (0, _styledComponents["default"])(_reflexbox.Box)(_templateObject3(), _styledSystem.layout, function (_ref2) {
  var open = _ref2.open;
  return open ? "\n    transform: translateX(0);\n  " : "\n    transform: translateX(-100%);\n  ";
});
var ContactButton = (0, _styledComponents["default"])(_reflexbox.Box)(_templateObject4());

var LogoutLink = _styledComponents["default"].a(_templateObject5());

var useRootSidebar = function useRootSidebar() {
  var _useState = (0, _react.useState)(),
      $rootModal = _useState[0],
      setRootModal = _useState[1];

  (0, _react.useEffect)(function () {
    var rootModal = document.getElementById('root-sidebar');

    if (rootModal) {
      setRootModal(rootModal);
    } else {
      var rootEl = document.createElement('div');
      rootEl.id = 'root-sidebar';
      setRootModal(rootEl);
      document.body.appendChild(rootEl);
    }
  });
  return {
    $rootModal: $rootModal
  };
};

var SidebarMenuRoot = function SidebarMenuRoot(_ref3) {
  var children = _ref3.children,
      _ref3$open = _ref3.open,
      open = _ref3$open === void 0 ? false : _ref3$open,
      _ref3$onlyMobile = _ref3.onlyMobile,
      onlyMobile = _ref3$onlyMobile === void 0 ? false : _ref3$onlyMobile,
      onClose = _ref3.onClose,
      _ref3$logo = _ref3.logo,
      logo = _ref3$logo === void 0 ? 'Logo' : _ref3$logo,
      _ref3$items = _ref3.items,
      items = _ref3$items === void 0 ? [] : _ref3$items,
      contactButton = _ref3.contactButton,
      logoutHref = _ref3.logoutHref,
      rest = _objectWithoutPropertiesLoose(_ref3, ["children", "open", "onlyMobile", "onClose", "logo", "items", "contactButton", "logoutHref"]);

  return /*#__PURE__*/_react["default"].createElement(WrapperSidebarMenu, {
    onlyMobile: onlyMobile,
    open: !!open,
    role: "menubar",
    "aria-label": "menu",
    "aria-expanded": !!open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 3
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledSidebarMenu, _extends({
    role: "none",
    open: !!open
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 5
    }
  }), logo, /*#__PURE__*/_react["default"].createElement(_MenuList["default"], {
    role: "menu",
    isOpen: !!open,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, children), /*#__PURE__*/_react["default"].createElement(ContactButton, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 7
    }
  }, contactButton, !!logoutHref && /*#__PURE__*/_react["default"].createElement(LogoutLink, {
    href: logoutHref,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 26
    }
  }, "Sair"))), /*#__PURE__*/_react["default"].createElement(Backdrop, {
    onClick: onClose,
    role: "button",
    "aria-label": "Fechar menu",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 5
    }
  }));
};

var SidebarMenuMobile = function SidebarMenuMobile(props) {
  var _useRootSidebar = useRootSidebar(),
      $rootModal = _useRootSidebar.$rootModal;

  if (!$rootModal) return null;
  return _reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(SidebarMenuRoot, _extends({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 32
    }
  })), $rootModal);
};

var SidebarMenu = function SidebarMenu(props) {
  var SidebarComponent = props.onlyMobile ? SidebarMenuMobile : SidebarMenuRoot;
  return /*#__PURE__*/_react["default"].createElement(SidebarComponent, _extends({}, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 10
    }
  }));
};

SidebarMenu.defaultProps = {
  width: '248px'
};
var _default = SidebarMenu;
exports["default"] = _default;