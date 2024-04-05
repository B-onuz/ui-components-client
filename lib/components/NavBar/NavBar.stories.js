'use strict'

exports.__esModule = true
exports.NavBarExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _NavBar = _interopRequireDefault(require('./NavBar'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/NavBar/NavBar.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'NavBar',
  component: _NavBar['default'],
}
exports['default'] = _default

var NavBarExample = function NavBarExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _NavBar['default'],
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 36,
      },
    },
    'lorem'
  )
}

exports.NavBarExample = NavBarExample
