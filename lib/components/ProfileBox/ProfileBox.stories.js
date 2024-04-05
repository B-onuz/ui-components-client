'use strict'

exports.__esModule = true
exports.ProfileBoxExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _ProfileBox = _interopRequireDefault(require('./ProfileBox'))

var _Button = _interopRequireDefault(require('../Button'))

var _NavBar = _interopRequireDefault(require('../NavBar'))

var _bnz_icon = _interopRequireDefault(require('../../assets/bnz_icon.png'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/ProfileBox/ProfileBox.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'ProfileBox',
  component: _ProfileBox['default'],
}
exports['default'] = _default

var ProfileBoxExample = function ProfileBoxExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _NavBar['default'],
      {
        style: {
          marginBottom: 30,
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_ProfileBox['default'], {
        src: _bnz_icon['default'],
        userName: 'John Doe',
        balanceValue: '2.300',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _NavBar['default'],
      {
        style: {
          marginBottom: 30,
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_ProfileBox['default'], {
        src: _bnz_icon['default'],
        iconHeight: '34px',
        balanceValue: '2.300',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _NavBar['default'],
      {
        style: {
          marginBottom: 30,
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_ProfileBox['default'], {
        userName: 'John Doe',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _NavBar['default'],
      {
        style: {
          marginBottom: 30,
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_ProfileBox['default'], {
        src: _bnz_icon['default'],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _NavBar['default'],
      {
        style: {
          marginBottom: 30,
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_ProfileBox['default'], {
        balanceValue: '2.300',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _NavBar['default'],
      {
        style: {
          marginBottom: 30,
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_ProfileBox['default'], {
        userName: 'John Doe',
        balanceValue: '2.300',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _NavBar['default'],
      {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_ProfileBox['default'], {
        userName: 'John Doe',
        src: _bnz_icon['default'],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 7,
        },
      })
    )
  )
}

exports.ProfileBoxExample = ProfileBoxExample
