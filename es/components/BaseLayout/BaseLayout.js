"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents2 = require("reflexbox/styled-components");

var _HamburguerButton = _interopRequireDefault(require("../HamburguerButton"));

var _NavBar = _interopRequireDefault(require("../NavBar"));

var _Header = _interopRequireDefault(require("../Header"));

var _ProfileBox = _interopRequireDefault(require("../ProfileBox"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/BaseLayout/BaseLayout.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  width: 90%;\n  align-self: flex-end;\n  white-space: nowrap;\n  @media only screen and (max-width: 768px) {\n    width: auto;\n    align-self: center;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  transition: margin-left 0.2s linear;\n  ", "\n  @media only screen and (max-width: 768px) {\n    overflow-x: hidden;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  flex: 1;\n  padding: 42px;\n  overflow: auto;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column;\n  @media only screen and (min-width: 1640px) {\n    max-width: 1400px;\n  }\n  @media only screen and (max-width: 700px) {\n    padding: 24px 24px 42px;\n    overflow: unset;\n    margin-top: 10vh;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  height: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledBaseLayout = (0, _styledComponents["default"])(_styledComponents2.Flex)(_templateObject(), _styledSystem.color);

var ChildrenWrapper = _styledComponents["default"].div(_templateObject2());

var LayoutContainer = (0, _styledComponents["default"])(_styledComponents2.Box)(_templateObject3(), function (_ref) {
  var menuIsOpen = _ref.menuIsOpen,
      menuWidth = _ref.menuWidth;
  return !menuIsOpen ? "\n    margin-left: 0;\n  " : "\n    @media only screen and (min-width: 1024px) {\n      margin-left: " + menuWidth + "px;\n    }\n  ";
});

var CornerContentWrapper = _styledComponents["default"].div(_templateObject4());

var BaseLayout = function BaseLayout(_ref2) {
  var children = _ref2.children,
      _ref2$menuIsOpen = _ref2.menuIsOpen,
      menuIsOpen = _ref2$menuIsOpen === void 0 ? false : _ref2$menuIsOpen,
      _ref2$sidebar = _ref2.sidebar,
      sidebar = _ref2$sidebar === void 0 ? null : _ref2$sidebar,
      _ref2$cornerContent = _ref2.cornerContent,
      cornerContent = _ref2$cornerContent === void 0 ? null : _ref2$cornerContent,
      _ref2$userInfo = _ref2.userInfo,
      userInfo = _ref2$userInfo === void 0 ? null : _ref2$userInfo,
      _ref2$menuWidth = _ref2.menuWidth,
      menuWidth = _ref2$menuWidth === void 0 ? 248 : _ref2$menuWidth,
      handleChangeMenuIsOpen = _ref2.handleChangeMenuIsOpen,
      title = _ref2.title,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children", "menuIsOpen", "sidebar", "cornerContent", "userInfo", "menuWidth", "handleChangeMenuIsOpen", "title"]);

  return /*#__PURE__*/_react["default"].createElement(StyledBaseLayout, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 5
    }
  }), sidebar, /*#__PURE__*/_react["default"].createElement(LayoutContainer, {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    menuWidth: menuWidth,
    menuIsOpen: menuIsOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(_NavBar["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, !!sidebar && /*#__PURE__*/_react["default"].createElement(_HamburguerButton["default"], {
    backgroundColor: '#f4f4f4',
    isOpen: !!sidebar ? menuIsOpen : false,
    onClick: handleChangeMenuIsOpen,
    color: 'primary',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 13
    }
  }, !open ? 'Abrir menu' : 'Fechar menu'), /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    title: title || '',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }), !!cornerContent && /*#__PURE__*/_react["default"].createElement(CornerContentWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 31
    }
  }, cornerContent)), /*#__PURE__*/_react["default"].createElement(ChildrenWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 9
    }
  }, children)));
};

BaseLayout.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes["default"].element.isRequired
} : {};
BaseLayout.defaultProps = {
  /*todo: defaultProps*/
};
var _default = BaseLayout;
exports["default"] = _default;