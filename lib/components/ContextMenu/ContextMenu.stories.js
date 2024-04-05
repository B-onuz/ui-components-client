'use strict'

exports.__esModule = true
exports.ContextMenuExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _ContextMenu = _interopRequireDefault(require('./ContextMenu'))

var _styledComponents = require('reflexbox/styled-components')

var _addonActions = require('@storybook/addon-actions')

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/ContextMenu/ContextMenu.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'ContextMenu',
  component: _ContextMenu['default'],
}
exports['default'] = _default
var functionA = (0, _addonActions.action)('Função A')
var functionB = (0, _addonActions.action)('Função B')
var functionC = (0, _addonActions.action)('Função C')
var exampleObj = [
  {
    text: 'editar',
    buttonFunction: functionA,
  },
  {
    text: 'adicionar',
    buttonFunction: functionB,
  },
  {
    text: 'excluir',
    buttonFunction: functionC,
  },
]
var singleObj = [
  {
    text: 'editar',
    buttonFunction: functionA,
  },
]
var contextOptions = [
  {
    text: 'editar',
    buttonFunction: functionA,
  },
  {
    text: 'adicionar',
    buttonFunction: functionB,
  },
  {
    text: 'excluir',
    buttonFunction: functionC,
  },
]

var ContextMenuExample = function ContextMenuExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _styledComponents.Flex,
      {
        style: {
          height: '100px',
          border: '1px solid #f0f',
          marginTop: '40px',
          overflow: 'hidden',
        },
        width: [1],
        justifyContent: 'space-evenly',
        alignItems: 'center',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _styledComponents.Box,
        {
          p: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
          contextMenuActions: singleObj,
          direction: 'right',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 9,
          },
        })
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _styledComponents.Box,
        {
          p: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
          contextMenuActions: singleObj,
          direction: 'top',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 9,
          },
        })
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _styledComponents.Box,
        {
          p: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
          contextMenuActions: singleObj,
          direction: 'left',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 9,
          },
        })
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _styledComponents.Box,
        {
          p: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
          contextMenuActions: singleObj,
          direction: 'bottom',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 9,
          },
        })
      )
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _styledComponents.Flex,
      {
        style: {
          height: '100px',
          border: '1px solid #f0f',
          marginTop: '40px',
          overflow: 'hidden',
        },
        width: [1],
        justifyContent: 'space-evenly',
        alignItems: 'center',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _styledComponents.Box,
        {
          p: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
          contextMenuActions: exampleObj,
          direction: 'right',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 9,
          },
        })
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _styledComponents.Box,
        {
          p: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 85,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
          contextMenuActions: exampleObj,
          direction: 'top',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 86,
            columnNumber: 9,
          },
        })
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _styledComponents.Box,
        {
          p: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
          contextMenuActions: exampleObj,
          direction: 'left',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 9,
          },
        })
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _styledComponents.Box,
        {
          p: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 91,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
          contextMenuActions: exampleObj,
          direction: 'bottom',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 9,
          },
        })
      )
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _styledComponents.Flex,
      {
        style: {
          height: '100px',
          border: '1px solid #f0f',
          marginTop: '40px',
          overflow: 'hidden',
        },
        width: [1],
        justifyContent: 'space-evenly',
        alignItems: 'center',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _styledComponents.Box,
        {
          p: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
          contextMenuActions: contextOptions,
          contextFunctions: true,
          buttonIcon: _freeSolidSvgIcons.faPlus,
          direction: 'right',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 9,
          },
        })
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _styledComponents.Box,
        {
          p: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 104,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
          contextMenuActions: contextOptions,
          contextFunctions: true,
          buttonIcon: _freeSolidSvgIcons.faPlus,
          direction: 'left',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 9,
          },
        })
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _styledComponents.Box,
        {
          p: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 107,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
          contextMenuActions: contextOptions,
          contextFunctions: true,
          buttonIcon: _freeSolidSvgIcons.faPlus,
          direction: 'top',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 9,
          },
        })
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _styledComponents.Box,
        {
          p: 4,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
          contextMenuActions: contextOptions,
          contextFunctions: true,
          buttonIcon: _freeSolidSvgIcons.faPlus,
          direction: 'bottom',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 9,
          },
        })
      )
    )
  )
}

exports.ContextMenuExample = ContextMenuExample
