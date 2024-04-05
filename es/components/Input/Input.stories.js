'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.InputExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _Input = _interopRequireDefault(require('./Input'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Input/Input.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'Input',
  component: _Input['default'],
}
exports['default'] = _default

var InputExample = function InputExample() {
  return /*#__PURE__*/ _react['default'].createElement(_Input['default'], {
    placeholder: 'Nome inteiro',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 35,
    },
  })
}

exports.InputExample = InputExample
