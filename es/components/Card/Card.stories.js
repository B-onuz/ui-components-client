'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.CardButton = exports.MultiColorsControl = exports.CardColors = exports.CardExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _Card = _interopRequireDefault(require('./Card'))

var _reflexbox = require('reflexbox')

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons')

var _serv_waiting = _interopRequireDefault(require('../../assets/serv_waiting.svg'))

var _Typography = _interopRequireDefault(require('../Typography'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Card/Card.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'Card',
  component: _Card['default'],
}
exports['default'] = _default

var CardExample = function CardExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(_Card['default'], {
      title: 'Demandas Pendentes',
      count: 99,
      color: 'danger',
      icon: _freeSolidSvgIcons.faArchive,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_Card['default'], {
      title: /*#__PURE__*/ _react['default'].createElement(
        _Typography['default'],
        {
          textAlign: 'left',
          m: 0,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 9,
          },
        },
        'REVIS\xC3O DE OUTROS DOCUMENTOS OU CONTRATOS'
      ),
      color: 'purple',
      icon: _freeSolidSvgIcons.faParachuteBox,
      disclaimer: /*#__PURE__*/ _react['default'].createElement(
        _Typography['default'],
        {
          m: 0,
          textAlign: 'left',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 9,
          },
        },
        'Pendente'
      ),
      disclaimerColor: 'lightGrey',
      count: /*#__PURE__*/ _react['default'].createElement(
        _Typography['default'],
        {
          m: 0,
          fontSize: 2,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 9,
          },
        },
        '#58758'
      ),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5,
      },
    })
  )
}

exports.CardExample = CardExample

var CardColors = function CardColors() {
  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      justifyContent: 'flex-start',
      p: 3,
      flexWrap: 'wrap',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(_Card['default'], {
      title: 'Demandas Pendentes',
      count: 99,
      color: 'lightGrey',
      icon: _freeSolidSvgIcons.faBoxes,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_Card['default'], {
      title: 'Demandas Em Aberto',
      count: 99,
      color: 'teal',
      icon: _freeSolidSvgIcons.faBoxOpen,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_Card['default'], {
      title: 'Demandas Concluídas',
      count: 13279,
      color: 'green',
      icon: _freeSolidSvgIcons.faThumbsUp,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_Card['default'], {
      title: 'Demandas Canceladas',
      count: 99,
      cancel: true,
      color: 'red',
      icon: _freeSolidSvgIcons.faBan,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_Card['default'], {
      title: 'Pacotes promocionais',
      count: 99,
      color: 'blue',
      icon: _freeSolidSvgIcons.faParachuteBox,
      disclaimer: 'últimos 7 dias',
      disclaimerColor: '#138204',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 5,
      },
    })
  )
}

exports.CardColors = CardColors

var MultiColorsControl = function MultiColorsControl() {
  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(_Card['default'], {
      color: 'primary',
      textColor: '#DDD',
      iconColor: '#000',
      counterColor: 'warning',
      title: 'Demandas Pendentes',
      count: 99,
      customIcon: _serv_waiting['default'], // imgBackground={'primary'}
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_Card['default'], {
      color: 'primary',
      textColor: '#DDD',
      iconColor: '#DDD',
      title: 'Demandas Pendentes',
      icon: _freeSolidSvgIcons.faParachuteBox,
      cardBackground: 'primary',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 5,
      },
    })
  )
}

exports.MultiColorsControl = MultiColorsControl

var CardButton = function CardButton() {
  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Flex,
      {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_Card['default'], {
        clickableCard: true,
        color: 'primary',
        textColor: '#DDD',
        iconColor: '#DDD',
        title: 'Demandas Pendentes',
        customIcon: _serv_waiting['default'],
        cardBackground: 'primary',
        mr: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 7,
        },
      }),
      /*#__PURE__*/ _react['default'].createElement(_Card['default'], {
        clickableCard: true,
        reverseOrder: true,
        color: 'primary',
        textColor: '#DDD',
        iconColor: '#DDD',
        title: 'Demandas Pendentes',
        customIcon: _serv_waiting['default'],
        cardBackground: 'primary',
        parentHeight: '115px',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        mt: [3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_Card['default'], {
        clickableCard: true,
        reverseOrder: true,
        color: 'primary',
        textColor: '#DDD',
        iconColor: '#DDD',
        title: 'Demandas Pendentes',
        customIcon: _serv_waiting['default'],
        cardBackground: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 7,
        },
      })
    )
  )
}

exports.CardButton = CardButton
