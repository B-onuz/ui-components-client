'use strict'

exports.__esModule = true
exports.LegendExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _Legend = _interopRequireDefault(require('./Legend'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Legend/Legend.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'Legend',
  component: _Legend['default'],
}
exports['default'] = _default

var LegendExample = function LegendExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _Legend['default'],
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 36,
      },
    },
    'Nome completo'
  )
}

exports.LegendExample = LegendExample
