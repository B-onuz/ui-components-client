'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.FormHelperTextExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _FormHelperText = _interopRequireDefault(require('./FormHelperText'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/FormHelperText/FormHelperText.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'FormHelperText',
  component: _FormHelperText['default'],
}
exports['default'] = _default

var FormHelperTextExample = function FormHelperTextExample() {
  return /*#__PURE__*/ _react['default'].createElement(_FormHelperText['default'], {
    color: 'danger',
    children: 'lorem ipsum dolor sit amet lorem amet ipsum',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 44,
    },
  })
}

exports.FormHelperTextExample = FormHelperTextExample
