'use strict'

exports.__esModule = true
exports.FixedAlertCustomAlert = exports.FixedAlert = exports.AlertLongText = exports.AlertColors = exports.AlertExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _Alert = _interopRequireDefault(require('./Alert'))

var _reactFontawesome = require('@fortawesome/react-fontawesome')

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons')

var _reflexbox = require('reflexbox')

var _Typography = _interopRequireDefault(require('../Typography'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Alert/Alert.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'Alert',
  component: _Alert['default'],
}
exports['default'] = _default

var AlertExample = function AlertExample() {
  return /*#__PURE__*/ _react['default'].createElement(_Alert['default'], {
    m: 10,
    color: 'success',
    title: 'Exemplo de t\xEDtulo',
    message: 'Este texto \xE9 exemplo de uma message',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 35,
    },
  })
}

exports.AlertExample = AlertExample

var AlertColors = function AlertColors() {
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(_Alert['default'], {
      m: 10,
      color: 'warning',
      title: 'Exemplo de t\xEDtulo',
      message: 'Este texto \xE9 exemplo de uma message',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_Alert['default'], {
      m: 10,
      color: 'success',
      title: 'Exemplo de t\xEDtulo',
      message: 'Este texto \xE9 exemplo de uma message',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_Alert['default'], {
      m: 10,
      color: 'info',
      title: 'Exemplo de t\xEDtulo',
      message: 'Este texto \xE9 exemplo de uma message',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_Alert['default'], {
      m: 10,
      color: 'danger',
      title: 'Exemplo de t\xEDtulo',
      message: 'Este texto \xE9 exemplo de uma message',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 5,
      },
    })
  )
}

exports.AlertColors = AlertColors

var AlertLongText = function AlertLongText() {
  return /*#__PURE__*/ _react['default'].createElement(_Alert['default'], {
    m: 10,
    color: 'success',
    title: 'Exemplo de t\xEDtulo',
    message:
      'Laboris consequat consequat voluptate qui nisi nostrud dolor. Velit adipisicing id in elit enim pariatur enim aliquip exercitation exercitation duis in qui. Sint exercitation aute enim deserunt. Non labore aute mollit cillum Lorem incididunt pariatur nostrud ut. Quis exercitation et culpa est. Consectetur consectetur fugiat nostrud in nostrud. Lorem consectetur culpa cillum nostrud adipisicing anim veniam id Lorem Lorem elit ad.\n\nNostrud fugiat exercitation tempor sunt amet nulla. Qui ipsum laborum ut deserunt esse sint pariatur labore ipsum pariatur. Culpa ipsum et cupidatat sit esse aliquip sunt. Sunt adipisicing veniam adipisicing nisi dolor dolor labore id officia Lorem laborum.\n\nUllamco eiusmod ipsum duis ad. Anim commodo sint voluptate fugiat ut ipsum nostrud mollit laboris consectetur laboris sit consectetur. Esse do velit pariatur cillum reprehenderit et elit ullamco cillum excepteur proident laborum pariatur.',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 3,
    },
  })
}

exports.AlertLongText = AlertLongText

var FixedAlert = function FixedAlert() {
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(_Alert['default'], {
      m: 10,
      color: 'success',
      title: 'Exemplo de t\xEDtulo',
      message: 'Este texto \xE9 exemplo de uma message',
      imgBackground: 'https://i.pravatar.cc/300',
      imgSize: '50px',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_Alert['default'], {
      pl: 1,
      m: 10,
      color: 'black',
      noBorder: true,
      title: 'Exemplo de t\xEDtulo',
      noShadow: true,
      message: 'Este texto \xE9 exemplo de uma message',
      icon: _freeSolidSvgIcons.faHandshake,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 5,
      },
    })
  )
}

exports.FixedAlert = FixedAlert

var FixedAlertCustomAlert = function FixedAlertCustomAlert() {
  return /*#__PURE__*/ _react['default'].createElement(
    _Alert['default'],
    {
      m: 10,
      color: 'black',
      noShadow: true,
      shortAlert: true,
      fullWidth: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Flex,
      {
        p: 2,
        justifyContent: 'space-between',
        style: {
          width: '100%',
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _reflexbox.Flex,
        {
          alignItems: 'center',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faCalendarAlt,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 9,
          },
        }),
        /*#__PURE__*/ _react['default'].createElement(
          _Typography['default'],
          {
            m: 0,
            ml: 2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 9,
            },
          },
          '15 dias \xFAteis'
        )
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _reflexbox.Flex,
        {
          alignItems: 'center',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faDollarSign,
          color: 'grey',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 9,
          },
        }),
        /*#__PURE__*/ _react['default'].createElement(
          _Typography['default'],
          {
            m: 0,
            ml: 2,
            color: 'primary',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 71,
              columnNumber: 9,
            },
          },
          '250 BNZs'
        )
      )
    )
  )
}

exports.FixedAlertCustomAlert = FixedAlertCustomAlert
