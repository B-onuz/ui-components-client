"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _this = void 0,
    _jsxFileName = "/Users/master/projects/bonuz/ui-components/src/components/ContextMenu/ContextMenuDialog.js";

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _templateObject2() {
  var data = _taggedTemplateLiteralLoose(["\n  z-index: 99999999999;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(["\n  position: absolute;\n  border-radius: 12px;\n  opacity: ", ";\n  z-index: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 10px 16px;\n  bottom: ", ";\n  top: ", ";\n  left: ", ";\n  background: #fff 0% 0% no-repeat padding-box;\n  box-shadow: 0px 2px 6px #2c28281c;\n  transform: ", ";\n  &::after {\n    content: '';\n    width: 1em;\n    height: 1em;\n    position: absolute;\n    box-shadow: 1px 2px 2px -1px #2c28281c;\n    background: #fff 0% 0%;\n    top: ", ";\n    bottom: ", ";\n    ", "\n  }\n\n  @media only screen and (max-width: 500px) {\n    position: fixed;\n    margin: 0;\n    top: 50%;\n    left: 50%;\n    margin-right: -50%;\n    transform: translate(-50%, -50%);\n    padding: 20px 30px;\n\n    &::after {\n      display: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteralLoose(strings, raw) { if (!raw) { raw = strings.slice(0); } strings.raw = raw; return strings; }

var Dialog = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 1 : 0;
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? 1 : -100;
}, function (_ref3) {
  var bottom = _ref3.bottom;
  return bottom;
}, function (_ref4) {
  var top = _ref4.top;
  return top;
}, function (_ref5) {
  var left = _ref5.left;
  return left;
}, function (_ref6) {
  var direction = _ref6.direction,
      bottom = _ref6.bottom;

  if (direction === 'left') {
    return "\n        translateX(calc(-100% - 32px * 2  - 5px))\n      ";
  }

  if (direction === 'right') {
    return "\n        none\n      ";
  }

  if (direction === 'top') {
    return "\n        translateX(calc(-50% - 32px / 2)) translateY(calc(-100% - 24px));\n      ";
  }

  if (direction === 'bottom' && bottom === 'auto') {
    return "\n      translateX(calc(-50% - 32px / 2)) translateY(calc(-100% - 24px));\n      ";
  } else {
    return "\n        translateX(calc(-50% - 32px / 2));\n      ";
  }
}, function (_ref7) {
  var top = _ref7.top;
  return top !== 'unset' ? '1.6em' : 'unset';
}, function (_ref8) {
  var bottom = _ref8.bottom;
  return bottom !== 'unset' ? '1.6em' : 'unset';
}, function (_ref9) {
  var direction = _ref9.direction,
      bottom = _ref9.bottom;

  if (direction === 'left') {
    return "\n      right: -0.5em;\n      transform: rotateZ(-45deg);\n    ";
  }

  if (direction === 'right') {
    return "\n      left: -0.5em;\n      transform: rotateZ(135deg);\n    ";
  }

  if (direction === 'top') {
    return "\n      top: calc(100% - 0.5em);\n      transform: rotateZ(45deg);\n      left: 0;\n      right: 0;\n      margin: auto;\n    ";
  }

  if (direction === 'bottom' && bottom === 'auto') {
    return "\n          top: calc(100% + 1.5em);\n          transform: rotateZ(45deg);\n          left: 0;\n          right: 0;\n          margin: auto;\n        ";
  } else {
    return "\n          bottom: calc(100% + 1.5em);\n          transform: rotateZ(-135deg);\n          left: 0;\n          right: 0;\n          margin: auto;\n        ";
  }
});

var useRootDialog = function useRootDialog() {
  var _useState = (0, _react.useState)(),
      $rootDialog = _useState[0],
      setRootDialog = _useState[1];

  var IdName = 'contextMenu-root';
  (0, _react.useEffect)(function () {
    var rootModal = document.getElementById(IdName);

    if (rootModal) {
      setRootDialog(rootModal);
    } else {
      var rootEl = document.createElement('div');
      rootEl.id = IdName;
      setRootDialog(rootEl);
      document.body.appendChild(rootEl);
    }
  });
  return {
    $rootDialog: $rootDialog
  };
};

var Wrapper = _styledComponents["default"].div(_templateObject2());

var ContextMenuDialog = function ContextMenuDialog(_ref10) {
  var isOpen = _ref10.isOpen,
      buttonRef = _ref10.buttonRef,
      onClose = _ref10.onClose,
      direction = _ref10.direction,
      contextFunctions = _ref10.contextFunctions,
      rest = _objectWithoutPropertiesLoose(_ref10, ["isOpen", "buttonRef", "onClose", "direction", "contextFunctions"]);

  var _useRootDialog = useRootDialog(),
      $rootDialog = _useRootDialog.$rootDialog;

  var screenHeight = window.innerHeight;
  var $currentButtonRef = (buttonRef || {}).current;

  var _useState2 = (0, _react.useState)(0),
      top = _useState2[0],
      setTop = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      left = _useState3[0],
      setLeft = _useState3[1];

  var _useState4 = (0, _react.useState)(0),
      bottom = _useState4[0],
      setBottom = _useState4[1];

  var updatePositions = function updatePositions() {
    if (!$currentButtonRef) return null;
    var offset = $currentButtonRef.getBoundingClientRect();

    if (direction === 'top') {
      setLeft(offset.left + offset.width + "px");
      setTop(offset.top + offset.height - 24 + "px");
      setBottom('unset');
    }

    if (offset.top < screenHeight / 2) {
      if (direction === 'right') {
        setLeft(offset.left + offset.width + 20 + "px");
        setTop(offset.top - offset.height / 2 + "px");
        setBottom('unset');
      }

      if (direction === 'left') {
        setTop(offset.top - offset.height / 2 + "px");
        setLeft(offset.left + offset.width + 20 + "px");
        setBottom('unset');
      }

      if (direction === 'bottom') {
        setTop(offset.top + offset.height + 24 + "px");
        setLeft(offset.left + offset.width + "px");
        setBottom('unset');
      }
    } else {
      if (direction === 'right') {
        setBottom(screenHeight - offset.bottom - 16 + "px");
        setLeft(offset.left + offset.width + 20 + "px");
        setTop('unset');
      }

      if (direction === 'left') {
        setBottom(screenHeight - offset.bottom - 16 + "px");
        setLeft(offset.left + offset.width + 20 + "px");
        setTop('unset');
      }

      if (direction === 'bottom') {
        setLeft(offset.left + offset.width + "px");
        setTop(offset.top + offset.height - 24 + "px");
        setBottom('auto');
      }
    }
  };

  (0, _react.useEffect)(function () {
    updatePositions();
    window.addEventListener('resize', updatePositions);
    return function () {
      window.removeEventListener('resize', updatePositions);
    };
  });
  if (!$rootDialog) return null;

  if (!isOpen) {
    return null;
  }

  return _reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(Wrapper, {
    onClick: onClose,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 5
    }
  }, /*#__PURE__*/_react["default"].createElement(Dialog, _extends({
    direction: direction,
    isOpen: isOpen,
    top: top,
    left: left,
    bottom: bottom
  }, rest, {
    contextFunctions: contextFunctions,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 7
    }
  }))), $rootDialog);
};

var _default = ContextMenuDialog;
exports["default"] = _default;