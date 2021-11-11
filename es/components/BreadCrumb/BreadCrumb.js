"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Button = _interopRequireDefault(require("../Button"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");

var _color = _interopRequireDefault(require("color"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/BreadCrumb/BreadCrumb.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  padding: 8px 16px;\n  font-size: 14px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  color: ", ";\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledBreadCrumb = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return "" + theme.colors[color];
}, _styledSystem.space);

var ActiveRoute = _styledComponents["default"].span(_templateObject2(), function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return "" + theme.colors[color];
});

var IconColor = function IconColor(_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color;
  var newColor = theme.colors[color];
  var darkColor = new _color["default"](newColor);
  var navIconColor = darkColor.darken(0.5).toString();
  return "\n    color: " + navIconColor + "\n  ";
};

var Icon = (0, _styledComponents["default"])(_reactFontawesome.FontAwesomeIcon)(_templateObject3(), IconColor);

var BreadCrumb = function BreadCrumb(_ref4) {
  var children = _ref4.children,
      navigationLinks = _ref4.navigationLinks,
      color = _ref4.color,
      rest = _objectWithoutPropertiesLoose(_ref4, ["children", "navigationLinks", "color"]);

  return /*#__PURE__*/_react["default"].createElement(StyledBreadCrumb, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }), (navigationLinks || []).map(function (item, index) {
    var label = item.label,
        key = item.key,
        itemProps = _objectWithoutPropertiesLoose(item, ["label", "key"]);

    return index !== navigationLinks.length - 1 ? /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 11
      }
    }, /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({
      key: key || index,
      linkButton: true,
      size: "small",
      color: color
    }, itemProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }), label), /*#__PURE__*/_react["default"].createElement(Icon, {
      icon: _freeSolidSvgIcons.faAngleRight,
      color: color,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 13
      }
    })) : /*#__PURE__*/_react["default"].createElement(ActiveRoute, _extends({
      key: key || index,
      color: 'black'
    }, itemProps, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 11
      }
    }), item.label);
  }));
};

BreadCrumb.defaultProps = {
  color: 'primary'
};
var _default = BreadCrumb;
exports["default"] = _default;