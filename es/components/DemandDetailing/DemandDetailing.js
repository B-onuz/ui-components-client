"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _reflexbox = require("reflexbox");

var _Fieldset = _interopRequireDefault(require("../Fieldset"));

var _UserAvatar = _interopRequireDefault(require("../UserAvatar"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _Legend = _interopRequireDefault(require("../Legend"));

var _Button = _interopRequireDefault(require("../Button"));

var _utils = require("../../utils");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/DemandDetailing/DemandDetailing.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-direction: column;\n  padding-left: 52px;\n\n  @media only screen and (max-width: 500px) {\n    padding-left: 30px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  margin-bottom: 28px;\n  margin-left: 38px;\n  &.mainTopic {\n    margin-left: -20px;\n  }\n  &.lastTopic {\n    margin-bottom: 0;\n  }\n\n  @media only screen and (max-width: 500px) {\n    margin-left: 10px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  border-bottom: 1px solid #dededf;\n  margin-bottom: 28px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  display: flex;\n  flex-direction: column;\n  border-left: 1px solid #dededf;\n  margin-bottom: 40px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  ", "\n  legend {\n    font-size: 21px;\n  }\n  @media only screen and (max-width: 500px) {\n    margin-left: 20px;\n    padding-left: 0px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledDemandDetailing = _styledComponents["default"].div(_templateObject(), _styledSystem.color, _styledSystem.space);

var ContentWrapper = _styledComponents["default"].div(_templateObject2(), _styledSystem.color);

var ReportBodyTitle = _styledComponents["default"].h3(_templateObject3());

var TopicItemWrapper = _styledComponents["default"].div(_templateObject4());

var TopicItem = _styledComponents["default"].div(_templateObject5());

var getTopicClass = function getTopicClass(value, parameter) {
  if (value === 0) {
    return 'mainTopic';
  } else if (value === parameter - 1) {
    return 'lastTopic';
  } else {
    return null;
  }
};

var DemandDetailing = function DemandDetailing(_ref) {
  var children = _ref.children,
      reportTitle = _ref.reportTitle,
      reportKind = _ref.reportKind,
      detailingData = _ref.detailingData,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "reportTitle", "reportKind", "detailingData"]);

  return /*#__PURE__*/_react["default"].createElement(StyledDemandDetailing, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement(_Fieldset["default"], {
    legend: reportTitle,
    bordered: true,
    pt: 4,
    px: ['30px', '40px', '40px', '40px'],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(ContentWrapper, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 9
    }
  }, (detailingData || []).sort(function (first, last) {
    return last.createdAt - first.createdAt;
  }).map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement(TopicItemWrapper, {
      key: item.createdAt,
      className: getTopicClass(index, (detailingData || {}).length),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }, index === 1 && /*#__PURE__*/_react["default"].createElement(ReportBodyTitle, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 33
      }
    }, reportKind), /*#__PURE__*/_react["default"].createElement(_reflexbox.Flex, {
      alignItems: "center",
      justifyContent: "flex-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }, /*#__PURE__*/_react["default"].createElement(_UserAvatar["default"], {
      userName: item.interactionResponsibleName,
      displayName: item.interactionResponsibleName,
      mr: 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }), /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      fontSize: 1,
      color: "lightGrey",
      m: 0,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 19
      }
    }, (0, _utils.formatDate)(item.createdAt))), /*#__PURE__*/_react["default"].createElement(TopicItem, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 17
      }
    }, /*#__PURE__*/_react["default"].createElement(_reflexbox.Box, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 19
      }
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      fontSize: 1,
      color: "#aaa",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 21
      }
    }, item.comment)), index === 0 && /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children), (item.documents || {}).length > 0 && item.documents.sort(function (first, last) {
      return last.createdAt - first.createdAt;
    }) && /*#__PURE__*/_react["default"].createElement(_reflexbox.Flex, {
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "flex-start",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 21
      }
    }, /*#__PURE__*/_react["default"].createElement(_Typography["default"], {
      fontSize: 1,
      color: "lightGrey",
      fontWeight: 'bold',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 23
      }
    }, "Anexos:"), item.documents.map(function (file) {
      return /*#__PURE__*/_react["default"].createElement(_Button["default"], {
        key: file.fileURL,
        as: "a",
        target: "_blank",
        rel: "noopener noreferrer",
        href: file.fileURL,
        linkbutton: true,
        color: "primary",
        linkButton: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 25
        }
      }, file.name);
    }))));
  }))));
};

var _default = DemandDetailing;
exports["default"] = _default;