'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.SpinnerExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _Spinner = _interopRequireDefault(require('./Spinner'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Spinner/Spinner.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'Spinner',
  component: _Spinner['default'],
}
exports['default'] = _default

var SpinnerExample = function SpinnerExample() {
  return /*#__PURE__*/ _react['default'].createElement(_Spinner['default'], {
    color: 'primary',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 37,
    },
  })
}

exports.SpinnerExample = SpinnerExample
