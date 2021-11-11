"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _styledSystem = require("styled-system");

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/Box/Box.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  ", "\n  box-shadow: ", ";\n  background: ", ";\n  padding: ", ";\n  border-radius: 10px;\n  display: ", ";\n  flex: ", ";\n  justify-content: ", ";\n  flex-direction: ", ";\n  align-items: ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var StyledBox = _styledComponents["default"].div(_templateObject(), (0, _styledSystem.compose)(_styledSystem.space, _styledSystem.layout), function (_ref) {
  var noBorder = _ref.noBorder;
  return noBorder ? 'none' : '0px 3px 6px #2c282846';
}, function (_ref2) {
  var noBorder = _ref2.noBorder;
  return noBorder ? 'none' : '#ffffff 0% 0% no-repeat padding-box';
}, function (_ref3) {
  var noBorder = _ref3.noBorder;
  return noBorder ? '0' : '10px';
}, function (_ref4) {
  var display = _ref4.display;
  return display;
}, function (_ref5) {
  var flex = _ref5.flex;
  return flex;
}, function (_ref6) {
  var justifyContent = _ref6.justifyContent;
  return justifyContent;
}, function (_ref7) {
  var flexDirection = _ref7.flexDirection;
  return flexDirection;
}, function (_ref8) {
  var alignItems = _ref8.alignItems;
  return alignItems;
});

var Box = function Box(_ref9) {
  var display = _ref9.display,
      justifyContent = _ref9.justifyContent,
      flexDirection = _ref9.flexDirection,
      alignItems = _ref9.alignItems,
      flex = _ref9.flex,
      noBorder = _ref9.noBorder,
      rest = _objectWithoutPropertiesLoose(_ref9, ["display", "justifyContent", "flexDirection", "alignItems", "flex", "noBorder"]);

  return /*#__PURE__*/_react["default"].createElement(StyledBox, _extends({
    noBorder: !!noBorder,
    display: display,
    justifyContent: justifyContent,
    flexDirection: flexDirection,
    alignItems: alignItems,
    flex: flex
  }, rest, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }));
};

var _default = Box;
exports["default"] = _default;
module.exports = exports.default;