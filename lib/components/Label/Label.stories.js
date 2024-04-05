'use strict'

exports.__esModule = true
exports.LabelExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _Label = _interopRequireDefault(require('./Label'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Label/Label.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'Label',
  component: _Label['default'],
}
exports['default'] = _default

var LabelExample = function LabelExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _Label['default'],
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 35,
      },
    },
    'Label'
  )
}

exports.LabelExample = LabelExample
