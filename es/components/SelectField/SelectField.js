"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Label = _interopRequireDefault(require("../Label"));

var _Select = _interopRequireDefault(require("../Select"));

var _FormHelperText = _interopRequireDefault(require("../FormHelperText"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledSystem = require("styled-system");

var _propTypes2 = _interopRequireDefault(require("@styled-system/prop-types"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/SelectField/SelectField.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: block;\n  font-family: inherit;\n  ", "\n  label {\n    display: block;\n    margin-bottom: 0.4em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledSelectField = _styledComponents["default"].div(_templateObject(), (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout));

var SelectField = function SelectField(_ref) {
  var children = _ref.children,
      label = _ref.label,
      placeholder = _ref.placeholder,
      name = _ref.name,
      id = _ref.id,
      value = _ref.value,
      onChange = _ref.onChange,
      required = _ref.required,
      error = _ref.error,
      helperText = _ref.helperText,
      _ref$inputProps = _ref.inputProps,
      inputProps = _ref$inputProps === void 0 ? {} : _ref$inputProps,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "label", "placeholder", "name", "id", "value", "onChange", "required", "error", "helperText", "inputProps"]);

  return /*#__PURE__*/_react["default"].createElement(StyledSelectField, _extends({}, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }), /*#__PURE__*/_react["default"].createElement(_Label["default"], {
    htmlFor: id,
    color: !!error && 'danger',
    required: !!required,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, label), /*#__PURE__*/_react["default"].createElement(_Select["default"], _extends({
    id: id,
    name: name,
    placeholder: placeholder
    /* controlled props */
    ,
    value: value,
    onChange: onChange
    /* validation props */
    ,
    required: !!required,
    "aria-required": !!required,
    "aria-invalid": !!error,
    error: error
  }, inputProps, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }), children), !!error && /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], {
    color: 'red',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 19
    }
  }, error), !!helperText && /*#__PURE__*/_react["default"].createElement(_FormHelperText["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 24
    }
  }, helperText));
};

SelectField.propTypes = process.env.NODE_ENV !== "production" ? _extends({}, _propTypes2["default"].space, {}, _propTypes2["default"].layout, {
  multiline: _propTypes["default"].bool
}) : {};
SelectField.defaultProps = {
  required: false,
  error: false,
  multiline: false
};
var _default = SelectField;
exports["default"] = _default;