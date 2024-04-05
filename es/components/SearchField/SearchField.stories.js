'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.SearchFieldExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _SearchField = _interopRequireDefault(require('./SearchField'))

var _reflexbox = require('reflexbox')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/SearchField/SearchField.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'SearchField',
  component: _SearchField['default'],
}
exports['default'] = _default

var SearchFieldExample = function SearchFieldExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1 / 2],
        m: 20,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_SearchField['default'], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 7,
        },
      })
    )
  )
}

exports.SearchFieldExample = SearchFieldExample
