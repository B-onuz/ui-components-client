"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _PaceLoading = _interopRequireDefault(require("./PaceLoading"));

var _shortid = _interopRequireDefault(require("shortid"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Table/Table.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject10() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  display: table-row-group;\n  & > ", " {\n    background-color: #f8fafc;\n    &:nth-child(odd) {\n      background-color: #fff;\n    }\n  }\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  border: 1px solid #efefef;\n  display: flex;\n  flex-direction: column;\n  flex: ", ";\n  ", "\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteralLoose(["\n  overflow-x: auto;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  flex: 1;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  padding: 10px 20px;\n  @media only screen and (max-width: 500px) {\n    padding: 12px 8px;\n    text-align: center;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-flex;\n  align-items: center;\n  flex-direction: inherit;\n  justify-content: flex-start;\n  ", "\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  /* padding: 13px 40px; */\n  @media only screen and (max-width: 500px) {\n    min-width: 150px;\n    font-size: 14px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  width: 20px;\n  height: 20px;\n  margin-left: 4px;\n  @media only screen and (max-width: 500px) {\n    transform: rotateZ(90deg);\n  }\n  ", "\n\n  ", "\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  text-transform: uppercase;\n  font-size: 0.8em;\n  color: #838383;\n  font-weight: 400;\n  padding: 1em;\n  position: relative;\n  position: sticky;\n  z-index: 2;\n  top: 0;\n  background: #f1f3f8;\n  ", "\n  ", "\n  /* padding: 13px 40px; */\n  padding: 10px 20px;\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  background: #f1f3f8;\n  display: table-header-group;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  border-spacing: 0;\n  position: relative;\n  border-collapse: collapse;\n  width: 100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledTable = _styledComponents["default"].table(_templateObject());

var TableHead = _styledComponents["default"].thead(_templateObject2());

var TableHeader = _styledComponents["default"].th(_templateObject3(), function (_ref) {
  var width = _ref.width;
  return !!width && "\n    width: " + width + ";\n  ";
}, function (_ref2) {
  var minWidth = _ref2.minWidth;
  return minWidth && "\n    min-width: " + minWidth + "px;\n  ";
}, function (_ref3) {
  var order = _ref3.order;
  return order && "\n    cursor: pointer;\n  ";
}, function (_ref4) {
  var align = _ref4.align;
  return align && "\n    text-align: " + align + ";\n  ";
});

var OrderArrow = _styledComponents["default"].span(_templateObject4(), function (_ref5) {
  var isCurrent = _ref5.isCurrent;
  return !!isCurrent ? "\n  &::before,\n  &::after {\n    content: '';\n    display: block;\n    position: absolute;\n    width: 1px;\n    height: 8px;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    margin: auto;\n    background-color: #000;\n    transition: transform 0.25s ease-in-out 0s;\n  }" : "\n    &::before,\n    &::after {\n      content: '';\n      display: block;\n      border: solid #838383;\n      border-width: 0 1px 1px 0;\n      display: inline-block;\n      padding: 3px;\n      position: absolute;\n      left: 0;\n      right: 0;\n      margin: auto;\n      width: 0px;\n      height: 0px;\n    }\n    &::after {\n      top: 4px;\n      transform: rotate(-135deg);\n    }\n\n    &::before {\n      bottom: 4px;\n      transform: rotate(45deg);\n    }\n  ";
}, function (_ref6) {
  var order = _ref6.order,
      isCurrent = _ref6.isCurrent;

  if (!!isCurrent) {
    return order === 'asc' ? "\n      &::before {\n        transform: translate3d(-2px, 0px, 0px) rotate(45deg);\n      }\n      &::after {\n        transform: translate3d(3px, 0px, 0px) rotate(-45deg);\n      }\n    " : "\n      &::before {\n        transform: translate3d(3px, 0px, 0px) rotate(45deg);\n      }\n      &::after {\n        transform: translate3d(-2px, 0px, 0px) rotate(-45deg);\n      }\n    ";
  } else {
    return '';
  }
});

var TableRow = _styledComponents["default"].tr(_templateObject5());

var TableHeaderSpan = _styledComponents["default"].span(_templateObject6(), function (_ref7) {
  var width = _ref7.width;
  return !!width && "\n    width: " + width + ";\n  ";
}, function (_ref8) {
  var minWidth = _ref8.minWidth;
  return minWidth && "\n    min-width: " + minWidth + "px;\n  ";
});

var TableData = _styledComponents["default"].td(_templateObject7(), function (_ref9) {
  var align = _ref9.align;
  return align && "\n    text-align: " + align + ";\n  ";
});

var WrapperTable = _styledComponents["default"].div(_templateObject8());

var Wrapper = _styledComponents["default"].div(_templateObject9(), function (_ref10) {
  var flex = _ref10.flex;
  return flex;
}, (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout));

var TableBody = _styledComponents["default"].tbody(_templateObject10(), TableRow);

var Table = function Table(_ref11) {
  var children = _ref11.children,
      headers = _ref11.headers,
      pagination = _ref11.pagination,
      onChangeOrder = _ref11.onChangeOrder,
      data = _ref11.data,
      flex = _ref11.flex,
      loading = _ref11.loading,
      rest = _objectWithoutPropertiesLoose(_ref11, ["children", "headers", "pagination", "onChangeOrder", "data", "flex", "loading"]);

  var handleChangeOrder = function handleChangeOrder(item) {
    if (onChangeOrder) {
      onChangeOrder(item);
    }
  };

  var getDataByKey = function getDataByKey(_ref12) {
    var item = _ref12.item,
        key = _ref12.key;
    var keys = key.split('.');
    return keys.reduce(function (acc, item) {
      return acc[item] || '';
    }, item);
  };

  return /*#__PURE__*/_react["default"].createElement(Wrapper, _extends({
    flex: flex
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 5
    }
  }), !!loading && /*#__PURE__*/_react["default"].createElement(_PaceLoading["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 215,
      columnNumber: 21
    }
  }), /*#__PURE__*/_react["default"].createElement(WrapperTable, {
    loading: loading,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(StyledTable, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 9
    }
  }, /*#__PURE__*/_react["default"].createElement(TableHead, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 218,
      columnNumber: 11
    }
  }, /*#__PURE__*/_react["default"].createElement(TableRow, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 219,
      columnNumber: 13
    }
  }, (headers || []).map(function (item) {
    return /*#__PURE__*/_react["default"].createElement(TableHeader, {
      width: item.width,
      minWidth: item.minWidth,
      key: "" + _shortid["default"].generate(),
      order: item.sort,
      align: item.align,
      onClick: function onClick() {
        return item.sort && handleChangeOrder(item);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }
    }, /*#__PURE__*/_react["default"].createElement(TableHeaderSpan, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 19
      }
    }, item.title, " ", item.sort && /*#__PURE__*/_react["default"].createElement(OrderArrow, {
      isCurrent: !!(pagination.sort === item.key),
      order: pagination.order,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 48
      }
    })));
  }))), /*#__PURE__*/_react["default"].createElement(TableBody, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 236,
      columnNumber: 11
    }
  }, !(data || []).length && /*#__PURE__*/_react["default"].createElement(TableRow, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 15
    }
  }, /*#__PURE__*/_react["default"].createElement(TableData, {
    style: {
      textAlign: 'center'
    },
    colSpan: (headers || []).length,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 17
    }
  }, !!loading ? 'Carregando...' : 'Nenhum registro encontrado')), (data || []).map(function (row) {
    return /*#__PURE__*/_react["default"].createElement(TableRow, {
      key: "" + _shortid["default"].generate(),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 15
      }
    }, headers.map(function (header) {
      return header.cellComponent ? /*#__PURE__*/_react["default"].createElement(TableData, {
        width: header.width,
        align: header.align,
        key: "" + _shortid["default"].generate(),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248,
          columnNumber: 21
        }
      }, /*#__PURE__*/_react["default"].createElement(header.cellComponent, {
        row: row,
        header: header,
        value: getDataByKey({
          key: header.key,
          item: row
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249,
          columnNumber: 23
        }
      })) : /*#__PURE__*/_react["default"].createElement(TableData, {
        align: header.align,
        key: "" + _shortid["default"].generate(),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 252,
          columnNumber: 21
        }
      }, getDataByKey({
        key: header.key,
        item: row
      }));
    }));
  })))));
};

Table.defaultProps = {};
Table.propTypes = process.env.NODE_ENV !== "production" ? {
  headers: _propTypes["default"].arrayOf(_propTypes["default"].object)
} : {};
var _default = Table;
exports["default"] = _default;
module.exports = exports.default;