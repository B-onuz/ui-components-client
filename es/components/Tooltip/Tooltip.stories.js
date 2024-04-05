'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.TooltipDirectionsExample = exports.TooltipExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _Tooltip = _interopRequireDefault(require('./Tooltip'))

var _styledComponents = require('reflexbox/styled-components')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Tooltip/Tooltip.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'Tooltip',
  component: _Tooltip['default'],
}
exports['default'] = _default
var tooltipLongText =
  'Exemplo de texto longo para ser exibido na ToolTip caso o componente seja utilizado para dar uma descrição maior de uma determinada funcionalidade'
var tooltipShortText = 'Exemplo de Texto curto'

var TooltipExample = function TooltipExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _styledComponents.Flex,
    {
      style: {
        height: '100vh',
      },
      width: [1],
      justifyContent: 'space-evenly',
      alignItems: 'center',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _styledComponents.Box,
      {
        p: 4,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _Tooltip['default'],
        {
          m: 3,
          text: tooltipShortText,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 7,
          },
        },
        'Example'
      )
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _styledComponents.Box,
      {
        p: 4,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _Tooltip['default'],
        {
          m: 3,
          text: tooltipLongText,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 7,
          },
        },
        'Example'
      )
    )
  )
}

exports.TooltipExample = TooltipExample

var TooltipDirectionsExample = function TooltipDirectionsExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _styledComponents.Flex,
    {
      style: {
        height: '100vh',
      },
      width: [1],
      justifyContent: 'space-evenly',
      alignItems: 'center',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _styledComponents.Box,
      {
        p: 4,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _Tooltip['default'],
        {
          m: 3,
          direction: 'bottom',
          color: 'violet',
          text: tooltipShortText,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7,
          },
        },
        'Example'
      )
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _styledComponents.Box,
      {
        p: 4,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _Tooltip['default'],
        {
          m: 3,
          direction: 'top',
          color: 'olive',
          text: tooltipLongText,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 7,
          },
        },
        'Example'
      )
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _styledComponents.Box,
      {
        p: 4,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _Tooltip['default'],
        {
          m: 3,
          direction: 'right',
          text: tooltipShortText,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 7,
          },
        },
        'Example'
      )
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _styledComponents.Box,
      {
        p: 4,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _Tooltip['default'],
        {
          m: 3,
          direction: 'left',
          color: 'secondary',
          text: tooltipShortText,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 7,
          },
        },
        'Example'
      )
    )
  )
}

exports.TooltipDirectionsExample = TooltipDirectionsExample
