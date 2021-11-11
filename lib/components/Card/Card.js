"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactFontawesome = require("@fortawesome/react-fontawesome");

var _styledSystem = require("styled-system");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Card/Card.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  width: 100%;\n  display: flex;\n  flex-direction: ", ";\n  justify-content: center;\n  align-items: center;\n  background-color: ", ";\n  border: none;\n  outline: none;\n  &:hover {\n    cursor: pointer;\n  }\n  &:focus {\n    box-shadow: 0px 0px 12px 4px ", ";\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-top: 8px;\n  display: ", ";\n  color: ", ";\n  @media only screen and (max-width: 500px) {\n    margin-top: 8px;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  max-width: 50px;\n  padding: 4px;\n  background-color: ", ";\n  margin-right: ", ";\n  @media only screen and (max-width: 500px) {\n    margin-right: 0;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  color: ", ";\n  font-weight: 600;\n  box-shadow: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  color: ", ";\n  box-shadow: none;\n  font-size: 40px;\n  @media only screen and (max-width: 500px) {\n    font-size: 30px;\n    flex-direction: column;\n    align-items: center;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  margin: 0;\n  text-transform: uppercase;\n  font-size: 13px;\n  font-weight: 400;\n  color: ", ";\n  opacity: ", ";\n  box-shadow: none;\n  margin-bottom: 8px;\n  @media only screen and (max-width: 500px) {\n    font-size: 13px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  color: ", ";\n  width: 192px;\n  height: ", ";\n  min-height: ", ";\n  display: flex;\n  flex-direction: ", ";\n  justify-content: space-around;\n  position: relative;\n  box-shadow: 3px 3px 6px #00000029;\n  border: 3px solid;\n  border-radius: 12px;\n  padding: ", ";\n  overflow: ", ";\n  @media only screen and (max-width: 500px) {\n    width: 100%;\n    height: none !important;\n    min-height: ", ";\n    padding: ", ";\n    justify-content: center;\n    text-align: center;\n  }\n\n  .icon {\n    margin-right: ", ";\n    font-size: 40px;\n    @media only screen and (max-width: 500px) {\n      font-size: 30px;\n      margin: 0;\n      margin-bottom: 6px;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledCard = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return theme.colors[color] ? theme.colors[color] : color;
}, function (_ref2) {
  var clickableCard = _ref2.clickableCard;
  return !!clickableCard ? 'none' : '90px';
}, function (_ref3) {
  var clickableCard = _ref3.clickableCard,
      parentHeight = _ref3.parentHeight;
  return !!clickableCard ? parentHeight || '90px' : 'none';
}, function (_ref4) {
  var clickableCard = _ref4.clickableCard;
  return !!clickableCard ? 'row' : 'column';
}, function (_ref5) {
  var clickableCard = _ref5.clickableCard;
  return !!clickableCard ? 0 : '20px 32px';
}, function (_ref6) {
  var clickableCard = _ref6.clickableCard;
  return !!clickableCard ? 'visible' : 'hidden';
}, function (_ref7) {
  var parentHeight = _ref7.parentHeight;
  return !!parentHeight ? parentHeight : '84px !important';
}, function (_ref8) {
  var clickableCard = _ref8.clickableCard;
  return !!clickableCard ? 0 : '25px 12px';
}, function (_ref9) {
  var clickableCard = _ref9.clickableCard;
  return !!clickableCard ? 0 : '24px';
});

var StyledTitle = _styledComponents["default"].span(_templateObject2(), function (_ref10) {
  var theme = _ref10.theme,
      textColor = _ref10.textColor;
  return theme.colors[textColor] ? theme.colors[textColor] : textColor;
}, function (_ref11) {
  var cancel = _ref11.cancel;
  return cancel ? '60%' : 1;
});

var StyledInfo = _styledComponents["default"].div(_templateObject3(), function (_ref12) {
  var theme = _ref12.theme,
      iconColor = _ref12.iconColor;
  return theme.colors[iconColor] ? theme.colors[iconColor] : iconColor;
});

var Counter = _styledComponents["default"].span(_templateObject4(), function (_ref13) {
  var theme = _ref13.theme,
      counterColor = _ref13.counterColor;
  return theme.colors[counterColor] ? theme.colors[counterColor] : counterColor;
});

var StyledIcon = _styledComponents["default"].img(_templateObject5(), function (_ref14) {
  var theme = _ref14.theme,
      imgBackground = _ref14.imgBackground;
  return theme.colors[imgBackground] ? theme.colors[imgBackground] : imgBackground;
}, function (_ref15) {
  var clickableCard = _ref15.clickableCard;
  return !!clickableCard ? 0 : '24px';
});

var StyledHelper = _styledComponents["default"].small(_templateObject6(), function (_ref16) {
  var disclaimer = _ref16.disclaimer;
  return !!disclaimer ? 'inline-block' : 'none';
}, function (_ref17) {
  var theme = _ref17.theme,
      disclaimerColor = _ref17.disclaimerColor;
  return theme.colors[disclaimerColor] ? theme.colors[disclaimerColor] : disclaimerColor;
});

var ClickableCard = _styledComponents["default"].button(_templateObject7(), function (_ref18) {
  var reverseOrder = _ref18.reverseOrder;
  return !!reverseOrder ? 'column-reverse' : 'column';
}, function (_ref19) {
  var theme = _ref19.theme,
      cardBackground = _ref19.cardBackground;
  return theme.colors[cardBackground] ? theme.colors[cardBackground] : cardBackground;
}, function (_ref20) {
  var theme = _ref20.theme,
      cardBackground = _ref20.cardBackground;
  return theme.colors[cardBackground];
});

var Card = function Card(_ref21) {
  var title = _ref21.title,
      count = _ref21.count,
      icon = _ref21.icon,
      customIcon = _ref21.customIcon,
      customIconAlt = _ref21.customIconAlt,
      imgBackground = _ref21.imgBackground,
      cancel = _ref21.cancel,
      counterColor = _ref21.counterColor,
      iconColor = _ref21.iconColor,
      textColor = _ref21.textColor,
      disclaimer = _ref21.disclaimer,
      disclaimerColor = _ref21.disclaimerColor,
      clickableCard = _ref21.clickableCard,
      cardBackground = _ref21.cardBackground,
      reverseOrder = _ref21.reverseOrder,
      parentHeight = _ref21.parentHeight,
      rest = _objectWithoutPropertiesLoose(_ref21, ["title", "count", "icon", "customIcon", "customIconAlt", "imgBackground", "cancel", "counterColor", "iconColor", "textColor", "disclaimer", "disclaimerColor", "clickableCard", "cardBackground", "reverseOrder", "parentHeight"]);

  return /*#__PURE__*/_react["default"].createElement(StyledCard, _extends({}, rest, {
    clickableCard: clickableCard,
    parentHeight: parentHeight,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 5
    }
  }), !!clickableCard ? /*#__PURE__*/_react["default"].createElement(ClickableCard, {
    cardBackground: cardBackground,
    reverseOrder: reverseOrder,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledTitle, {
    textColor: textColor,
    cancel: cancel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 11
    }
  }, title), icon && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: icon,
    className: "icon",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 20
    }
  }), customIcon && /*#__PURE__*/_react["default"].createElement(StyledIcon, {
    src: customIcon,
    alt: customIconAlt,
    imgBackground: imgBackground,
    clickableCard: clickableCard,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 26
    }
  })) : /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(StyledTitle, {
    textColor: textColor,
    cancel: cancel,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 11
    }
  }, title), /*#__PURE__*/_react["default"].createElement(StyledInfo, {
    iconColor: iconColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 11
    }
  }, icon && /*#__PURE__*/_react["default"].createElement(_reactFontawesome.FontAwesomeIcon, {
    className: "icon",
    icon: icon,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 22
    }
  }), customIcon && /*#__PURE__*/_react["default"].createElement(StyledIcon, {
    src: customIcon,
    alt: customIconAlt,
    imgBackground: imgBackground,
    clickableCard: clickableCard,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 28
    }
  }), /*#__PURE__*/_react["default"].createElement(Counter, {
    counterColor: counterColor,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  }, count)), /*#__PURE__*/_react["default"].createElement(StyledHelper, {
    disclaimerColor: disclaimerColor,
    disclaimer: disclaimer,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, disclaimer)));
};

Card.defaultProps = {
  textColor: 'black',
  disclaimerColor: 'black',
  clickableCard: false,
  reverseOrder: false
};
var _default = Card;
exports["default"] = _default;
module.exports = exports.default;