"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Button = _interopRequireDefault(require("../Button"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Pagination/Pagination.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  position: relative;\n  border-radius: 32px;\n  min-width: 32px;\n  height: 32px;\n  padding: 0 0.3em;\n  background: none;\n  overflow: hidden;\n  -webkit-mask-image: -webkit-radial-gradient(white, black);\n  ", ";\n  &::before {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    ", ";\n    transform: translateY(-100%);\n    transition: 0.2s ease-in-out;\n  }\n  &:active {\n    background-color: transparent;\n  }\n  &:hover,\n  &:active {\n    background-color: transparent;\n    &::before {\n      transform: translateY(0);\n      z-index: 1;\n    }\n    color: #fff;\n  }\n  ", ";\n  & > span {\n    position: relative;\n    z-index: 2;\n  }\n  &.ellipsis {\n    &::before {\n      content: none;\n      color: #e0e1e2;\n    }\n    &:hover {\n      cursor: default;\n      color: #e0e1e2;\n      background-color: #f7f8f8;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  flex-wrap: wrap;\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledPagination = _styledComponents["default"].div(_templateObject(), (0, _styledSystem.compose)(_styledSystem.layout, _styledSystem.space));

var PageItem = (0, _styledComponents["default"])(_Button["default"])(_templateObject2(), function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return "color: " + theme.colors[color];
}, function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color;
  return "background-color: " + theme.colors[color];
}, function (_ref3) {
  var theme = _ref3.theme,
      color = _ref3.color,
      active = _ref3.active;
  return !!active && "\n    color: #fff;\n    background-color: " + theme.colors[color] + ";\n  ";
});
var Pagination = (0, _react.memo)(function (_ref4) {
  var children = _ref4.children,
      color = _ref4.color,
      onChangePage = _ref4.onChangePage,
      onNextPage = _ref4.onNextPage,
      onPrevPage = _ref4.onPrevPage,
      total = _ref4.total,
      page = _ref4.page,
      onLazyChangePage = _ref4.onLazyChangePage,
      _ref4$lazyTimeout = _ref4.lazyTimeout,
      lazyTimeout = _ref4$lazyTimeout === void 0 ? 300 : _ref4$lazyTimeout,
      rest = _objectWithoutPropertiesLoose(_ref4, ["children", "color", "onChangePage", "onNextPage", "onPrevPage", "total", "page", "onLazyChangePage", "lazyTimeout"]);

  var _useState = (0, _react.useState)(),
      lazyKey = _useState[0],
      setLazyKey = _useState[1];

  var _useState2 = (0, _react.useState)(true),
      isFirstItem = _useState2[0],
      setIsFirstItem = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      isLastItem = _useState3[0],
      setIsLastItem = _useState3[1];

  var _useState4 = (0, _react.useState)([]),
      pageMarkers = _useState4[0],
      setPageMarkers = _useState4[1];

  var defineMarkers = function defineMarkers(input) {
    var marker = 0;
    var markersArray = [];

    while (marker < input) {
      markersArray[marker] = marker + 1;
      marker += 1;
    }

    setPageMarkers(markersArray);

    if (markersArray.length <= 7) {
      setIsFirstItem(true);
      setIsLastItem(true);
    }
  };

  (0, _react.useEffect)(function () {
    defineMarkers(total);
  }, []);
  (0, _react.useEffect)(function () {
    handleEllipsis();
    if (!onLazyChangePage) return;
    window.clearTimeout(lazyKey);
    setLazyKey(setTimeout(function () {
      onLazyChangePage(page);
    }, lazyTimeout));
  }, [page]);

  var handleEllipsis = function handleEllipsis() {
    if (total >= 8) {
      if (page < 5) {
        setIsFirstItem(true);
        setIsLastItem(false);
      } else if (page > total - 4) {
        setIsFirstItem(false);
        setIsLastItem(true);
      } else {
        setIsFirstItem(false);
        setIsLastItem(false);
      }
    }
  };

  var handleMarkers = function handleMarkers() {
    if (!!isFirstItem || !!isLastItem) {
      if (!!isFirstItem && !!isLastItem) {
        return pageMarkers.map(function (item, index) {
          return /*#__PURE__*/_react["default"].createElement(PageItem, {
            color: color,
            active: page === item,
            m: 1,
            key: index,
            onClick: function onClick() {
              return onChangePage(item);
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 123,
              columnNumber: 11
            }
          }, /*#__PURE__*/_react["default"].createElement("span", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 124,
              columnNumber: 13
            }
          }, item));
        });
      } else if (!!isFirstItem) {
        return pageMarkers.map(function (item, index) {
          while (index <= 4) {
            return /*#__PURE__*/_react["default"].createElement(PageItem, {
              color: color,
              active: page === item,
              m: 1,
              key: index,
              onClick: function onClick() {
                return onChangePage(item);
              },
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 131,
                columnNumber: 15
              }
            }, /*#__PURE__*/_react["default"].createElement("span", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }
            }, item));
          }

          if (index === 7) return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(PageItem, {
            color: 'default',
            disabled: true,
            m: 1,
            className: "ellipsis",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 138,
              columnNumber: 17
            }
          }, /*#__PURE__*/_react["default"].createElement("span", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 139,
              columnNumber: 19
            }
          }, '...')), /*#__PURE__*/_react["default"].createElement(PageItem, {
            color: color,
            m: 1,
            key: total,
            onClick: function onClick() {
              return onChangePage(total);
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 17
            }
          }, /*#__PURE__*/_react["default"].createElement("span", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 19
            }
          }, total)));
        });
      } else if (!!isLastItem) {
        return pageMarkers.map(function (item, index) {
          if (index === 0) return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(PageItem, {
            color: color,
            m: 1,
            key: 1,
            onClick: function onClick() {
              return onChangePage(1);
            },
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 152,
              columnNumber: 17
            }
          }, /*#__PURE__*/_react["default"].createElement("span", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 19
            }
          }, "1")), /*#__PURE__*/_react["default"].createElement(PageItem, {
            color: 'default',
            m: 1,
            className: "ellipsis",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 155,
              columnNumber: 17
            }
          }, /*#__PURE__*/_react["default"].createElement("span", {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 156,
              columnNumber: 19
            }
          }, '...')));

          while (total <= index + 5) {
            return /*#__PURE__*/_react["default"].createElement(PageItem, {
              color: color,
              active: page === item,
              m: 1,
              key: index,
              onClick: function onClick() {
                return onChangePage(item);
              },
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 162,
                columnNumber: 15
              }
            }, /*#__PURE__*/_react["default"].createElement("span", {
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 17
              }
            }, item));
          }
        });
      }
    } else {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(PageItem, {
        color: color,
        m: 1,
        key: 1,
        onClick: function onClick() {
          return onChangePage(1);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 11
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }
      }, "1")), /*#__PURE__*/_react["default"].createElement(PageItem, {
        color: 'default',
        m: 1,
        className: "ellipsis",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 11
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }
      }, '...')), pageMarkers.map(function (item, index) {
        if (item === page - 1 || item === page || item === page + 1) return /*#__PURE__*/_react["default"].createElement(PageItem, {
          color: color,
          active: page === item,
          m: 1,
          key: index,
          onClick: function onClick() {
            return onChangePage(item);
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180,
            columnNumber: 17
          }
        }, /*#__PURE__*/_react["default"].createElement("span", {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 19
          }
        }, item));
      }), /*#__PURE__*/_react["default"].createElement(PageItem, {
        color: 'default',
        disabled: true,
        m: 1,
        className: "ellipsis",
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185,
          columnNumber: 11
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 13
        }
      }, '...')), /*#__PURE__*/_react["default"].createElement(PageItem, {
        color: color,
        m: 1,
        key: total,
        onClick: function onClick() {
          return onChangePage(total);
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188,
          columnNumber: 11
        }
      }, /*#__PURE__*/_react["default"].createElement("span", {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 13
        }
      }, total)));
    }
  };

  return /*#__PURE__*/_react["default"].createElement(StyledPagination, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 10
    }
  }), handleMarkers());
});
var _default = Pagination;
exports["default"] = _default;
module.exports = exports.default;