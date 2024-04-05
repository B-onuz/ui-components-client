"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _variants = require("./variants");

var _Typography = _interopRequireDefault(require("../Typography"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/UserAvatar/UserAvatar.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  width: 40px;\n  padding: 10px 0;\n  text-align: center;\n  background: ", ";\n  border-radius: 50%;\n  margin-right: 10px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  display: flex;\n  align-items: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledUserAvatar = _styledComponents["default"].div(_templateObject(), _styledSystem.space);

var InitialsWrapper = _styledComponents["default"].div(_templateObject2(), _variants.color, function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return "" + theme.colors[color];
});

var UserAvatar = function UserAvatar(_ref2) {
  var children = _ref2.children,
      userName = _ref2.userName,
      color = _ref2.color,
      displayName = _ref2.displayName,
      nameColor = _ref2.nameColor,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children", "userName", "color", "displayName", "nameColor"]);

  var _useState = (0, _react.useState)(),
      nameInitials = _useState[0],
      setNameInitials = _useState[1];

  (0, _react.useEffect)(function () {
    handleInitials(userName);
  }, []);

  var handleInitials = function handleInitials(name) {
    var initials = name.match(/\b\w/g) || [];
    initials = initials.length > 1 ? ((initials.shift() || '') + (initials.pop() || '')).toUpperCase() : name.substring(0, 2).toUpperCase();
    setNameInitials(initials);
  };

  return /*#__PURE__*/_react["default"].createElement(StyledUserAvatar, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement(InitialsWrapper, {
    color: color,
    m: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, nameInitials), !!displayName && /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
    color: nameColor,
    m: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }, displayName));
};

UserAvatar.defaultProps = {
  color: 'black',
  nameColor: 'black'
};
var _default = UserAvatar;
exports["default"] = _default;