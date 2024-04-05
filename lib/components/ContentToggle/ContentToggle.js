"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/ContentToggle/ContentToggle.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  max-height: 0;\n  overflow: hidden;\n  transition: max-height 0.1s ease-out;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px solid #dadada;\n  > h2 {\n    margin: 0;\n  }\n  :hover {\n    cursor: pointer;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledContentToggle = _styledComponents["default"].div(_templateObject(), _styledSystem.color, _styledSystem.space);

var StyledTitle = _styledComponents["default"].div(_templateObject2());

var ContentBox = _styledComponents["default"].div(_templateObject3());

var ContentToggle = function ContentToggle(_ref) {
  var startVisible = _ref.startVisible,
      contentTitle = _ref.contentTitle,
      children = _ref.children,
      rest = _objectWithoutPropertiesLoose(_ref, ["startVisible", "contentTitle", "children"]);

  var _useState = (0, _react.useState)(startVisible),
      visibility = _useState[0],
      setVisibility = _useState[1];

  var contentRef = (0, _react.useRef)();

  var displayContent = function displayContent() {
    if (!visibility) {
      return contentRef.current.style.maxHeight = null;
    } else {
      return contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px';
    }
  };

  (0, _react.useEffect)(function () {
    displayContent();
  }, [visibility]);
  return /*#__PURE__*/_react["default"].createElement(StyledContentToggle, _extends({}, rest, {
    my: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement(StyledTitle, {
    onClick: function onClick() {
      return setVisibility(!visibility);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement("h2", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, contentTitle), /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: visibility ? _freeSolidSvgIcons.faEye : _freeSolidSvgIcons.faEyeSlash,
    size: "lg",
    color: "#838383",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  })), /*#__PURE__*/_react["default"].createElement(ContentBox, {
    ref: contentRef,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }
  }, children));
};

ContentToggle.defaultProps = {
  startVisible: false
};
var _default = ContentToggle;
exports["default"] = _default;
module.exports = exports.default;