"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _Legend = _interopRequireDefault(require("../Legend"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Fieldset/Fieldset.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  padding: 0;\n  margin: 0;\n  ", "\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledFieldset = _styledComponents["default"].fieldset(_templateObject(), function (_ref) {
  var bordered = _ref.bordered;
  return !bordered ? "\n    border: none;\n  " : "\n    border-radius: 4px;\n    border: 1px solid #DEDEDF;\n    legend {\n      margin: 1em;\n      padding: .3em;\n    }\n  ";
}, (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout));

var Fieldset = function Fieldset(_ref2) {
  var children = _ref2.children,
      legend = _ref2.legend,
      rest = _objectWithoutPropertiesLoose(_ref2, ["children", "legend"]);

  return /*#__PURE__*/_react["default"].createElement(StyledFieldset, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }), !!legend && /*#__PURE__*/_react["default"].createElement(_Legend["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 20
    }
  }, legend), children);
};

var _default = Fieldset;
exports["default"] = _default;