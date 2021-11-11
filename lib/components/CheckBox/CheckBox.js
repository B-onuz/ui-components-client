"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/CheckBox/CheckBox.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject5() {
  var data = _taggedTemplateLiteralLoose(["\n  &:checked {\n    & ~ ", " {\n      border: 1px solid #95c8da;\n      ", " {\n        animation: start 0.4s ease both;\n        animation-play-state: running !important;\n        width: 10px;\n        height: 5px;\n        border: solid 2px #0c0c0c;\n        border-top: none;\n        border-right: none;\n      }\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  margin: auto;\n  left: -2px;\n  right: 0;\n  top: calc(50% + 40);\n  width: 0;\n  height: 0;\n  border: none;\n  transform: rotate(-45deg);\n  transform-origin: top left;\n  margin-top: 10px;\n  @keyframes start {\n    0% {\n      opacity: 0;\n      width: 0;\n      height: 0;\n    }\n\n    50% {\n      opacity: 1;\n      width: 0;\n      height: 5px;\n    }\n    100% {\n      width: 10px;\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  display: inline-block;\n  width: 17px;\n  height: 17px;\n  border: 1px solid #d4d4d5;\n  border-radius: 4px;\n  margin-right: 10px;\n  position: relative;\n  flex-shrink: 0;\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  display: flex;\n  align-items: flex-start;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledCheckBox = _styledComponents["default"].div(_templateObject());

var FakeCheckBox = _styledComponents["default"].label(_templateObject2());

var CheckboxLabel = _styledComponents["default"].label(_templateObject3());

var CheckIcon = _styledComponents["default"].div(_templateObject4());

var RealCheckBox = _styledComponents["default"].input(_templateObject5(), FakeCheckBox, CheckIcon);

var CheckBox = function CheckBox(_ref) {
  var children = _ref.children,
      id = _ref.id,
      label = _ref.label,
      rest = _objectWithoutPropertiesLoose(_ref, ["children", "id", "label"]);

  return /*#__PURE__*/_react["default"].createElement(StyledCheckBox, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(RealCheckBox, _extends({
    id: id,
    type: "checkbox",
    style: {
      display: 'none'
    }
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 7
    }
  })), /*#__PURE__*/_react["default"].createElement(FakeCheckBox, {
    htmlFor: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 7
    }
  }, /*#__PURE__*/_react["default"].createElement(CheckIcon, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }
  })), /*#__PURE__*/_react["default"].createElement(CheckboxLabel, {
    htmlFor: id,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 7
    }
  }, label));
};

var _default = CheckBox;
exports["default"] = _default;
module.exports = exports.default;