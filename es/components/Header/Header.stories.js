'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.HeaderExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _Header = _interopRequireDefault(require('./Header'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Header/Header.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'Header',
  component: _Header['default'],
}
exports['default'] = _default

var HeaderExample = function HeaderExample() {
  return /*#__PURE__*/ _react['default'].createElement(_Header['default'], {
    title: 'Texto do título',
    subTitle: 'Subtitulo da página',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 36,
    },
  })
}

exports.HeaderExample = HeaderExample
