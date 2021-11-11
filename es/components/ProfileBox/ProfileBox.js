"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Button = _interopRequireDefault(require("../Button"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/ProfileBox/ProfileBox.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  :hover {\n    color: ", ";\n    cursor: pointer;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  height: ", ";\n  margin-right: 7px;\n  @media only screen and (max-width: 500px) {\n    max-height: 20px;\n    margin-right: 8px;\n    /* margin-bottom: 7px; */\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  font-weight: bold;\n  font-size: 20px;\n  color: #000;\n  text-decoration: none !important;\n  :hover {\n    color: #ef4d5a;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  @media only screen and (max-width: 500px) {\n    /* flex-direction: column; */\n    align-items: center;\n    /* justify-content: space-between; */\n    margin: 0 8px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  height: 100%;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  @media only screen and (max-width: 500px) {\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    margin: 0 8px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledProfileBox = _styledComponents["default"].div(_templateObject(), _styledSystem.color);

var BnzBox = _styledComponents["default"].div(_templateObject2());

var StyledButton = (0, _styledComponents["default"])(_Button["default"])(_templateObject3());

var ProfileIcon = _styledComponents["default"].img(_templateObject4(), function (_ref) {
  var iconHeight = _ref.iconHeight;
  return iconHeight ? iconHeight : '100%';
});

var TextBox = _styledComponents["default"].div(_templateObject5());

var UserNameText = (0, _styledComponents["default"])(_Typography["default"])(_templateObject6(), function (_ref2) {
  var theme = _ref2.theme;
  return "" + theme.colors['gray'];
});

var ProfileBox = function ProfileBox(_ref3) {
  var children = _ref3.children,
      userName = _ref3.userName,
      balanceValue = _ref3.balanceValue,
      src = _ref3.src,
      iconHeight = _ref3.iconHeight,
      bnzOnClick = _ref3.bnzOnClick,
      userOnClick = _ref3.userOnClick,
      rest = _objectWithoutPropertiesLoose(_ref3, ["children", "userName", "balanceValue", "src", "iconHeight", "bnzOnClick", "userOnClick"]);

  return /*#__PURE__*/_react["default"].createElement(StyledProfileBox, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 5
    }
  }), !!userName && /*#__PURE__*/_react["default"].createElement(UserNameText, {
    color: "gray",
    m: 0,
    mr: 2,
    onClick: userOnClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 9
    }
  }, userName, " |"), (src || balanceValue) && /*#__PURE__*/_react["default"].createElement(BnzBox, {
    onClick: bnzOnClick,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 9
    }
  }, src && /*#__PURE__*/_react["default"].createElement(ProfileIcon, {
    alt: "bnz_icon",
    iconHeight: iconHeight,
    src: src,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }), balanceValue && /*#__PURE__*/_react["default"].createElement(TextBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledButton, {
    linkButton: true,
    p: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, balanceValue + " BNZ"))));
};

var _default = ProfileBox;
exports["default"] = _default;