'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.LongListItems = exports.BreadCrumbColors = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _BreadCrumb = _interopRequireDefault(require('./BreadCrumb'))

var _reflexbox = require('reflexbox')

var _addonActions = require('@storybook/addon-actions')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/BreadCrumb/BreadCrumb.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'BreadCrumb',
  component: _BreadCrumb['default'],
}
exports['default'] = _default
var longExampleObj = [
  {
    label: 'Gestão da rota do Link 1',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 2',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 3',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 4',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 5',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 6',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 7',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 8',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 9',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 10',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 11',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 12',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
]
var exampleObj = [
  {
    label: 'Gestão da rota do Link 1',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 2',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 3',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
  {
    label: 'Gestão da rota do Link 4',
    onClick: (0, _addonActions.action)('Ação do Link'),
  },
]

var BreadCrumbColors = function BreadCrumbColors() {
  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      flexDirection: 'column',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_BreadCrumb['default'], {
        navigationLinks: exampleObj,
        color: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_BreadCrumb['default'], {
        navigationLinks: exampleObj,
        color: 'violet',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_BreadCrumb['default'], {
        navigationLinks: exampleObj,
        color: 'info',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_BreadCrumb['default'], {
        navigationLinks: exampleObj,
        color: 'olive',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 7,
        },
      })
    )
  )
}

exports.BreadCrumbColors = BreadCrumbColors

var LongListItems = function LongListItems() {
  return /*#__PURE__*/ _react['default'].createElement(_BreadCrumb['default'], {
    navigationLinks: longExampleObj,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 36,
    },
  })
}

exports.LongListItems = LongListItems
