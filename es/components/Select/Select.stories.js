'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.SelectExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _Select = _interopRequireDefault(require('./Select'))

var _reflexbox = require('reflexbox')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Select/Select.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'Select',
  component: _Select['default'],
}
exports['default'] = _default

var SelectExample = function SelectExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      m: 20,
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
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _Select['default'],
        {
          placeholder: 'Nome inteiro',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor4',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 9,
            },
          },
          'Valor 1 exemplo teste com texto extenso no campo de op\xE7\xE3o '
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor2',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 9,
            },
          },
          'Valor 2'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor3',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 9,
            },
          },
          'Valor 3'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor1',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17,
              columnNumber: 9,
            },
          },
          'Valor 4'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor5',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 9,
            },
          },
          'Valor 5'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor6',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 9,
            },
          },
          'Valor 6'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor7',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 9,
            },
          },
          'Valor 7'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor8',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 9,
            },
          },
          'Valor 8'
        )
      )
    )
  )
}

exports.SelectExample = SelectExample
