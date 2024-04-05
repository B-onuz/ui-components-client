'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.TextFieldMultiline = exports.TextFieldExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _TextField = _interopRequireDefault(require('./TextField'))

var _reflexbox = require('reflexbox')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/TextField/TextField.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'TextField',
  component: _TextField['default'],
}
exports['default'] = _default

var TextFieldExample = function TextFieldExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      flexWrap: 'wrap',
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
        width: [1, 1 / 2, 1 / 3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
        id: 'name',
        name: 'name',
        required: true,
        label: 'Nome',
        m: 2,
        placeholder: 'Nome',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
        id: 'lastname',
        name: 'lastname',
        required: true,
        label: 'Sobrenome',
        m: 2,
        placeholder: 'Sobrenome',
        error: 'Este campo é obrigatório.',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
        id: 'fullname',
        name: 'fullname',
        label: 'Exibir Como:',
        m: 2,
        placeholder: 'Nome + Sobrenome',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
        id: 'fullname',
        name: 'fullname',
        label: 'Exibir Como:',
        m: 2,
        placeholder: 'Nome + Sobrenome',
        helperText: 'Exemplo: John Doe',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
        id: 'email',
        type: 'email',
        name: 'email',
        label: 'Email',
        m: 2,
        placeholder: 'Email',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
        id: 'telefone',
        type: 'phone',
        name: 'fullname',
        label: 'Telefone',
        m: 2,
        placeholder: 'Telefone',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
        id: 'fullname',
        name: 'fullname',
        label: 'Exibir Como:',
        m: 2,
        placeholder: 'Nome + Sobrenome',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1, 1 / 2, 1 / 8],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
        id: 'number',
        type: 'number',
        name: 'number',
        label: 'Número',
        m: 2,
        placeholder: 'Número',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7,
        },
      })
    )
  )
}

exports.TextFieldExample = TextFieldExample

var TextFieldMultiline = function TextFieldMultiline() {
  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      flexWrap: 'wrap',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
        id: 'comment',
        name: 'comment',
        multiline: true,
        required: true,
        label: 'Comentário',
        m: 2,
        placeholder: 'Comentário',
        inputProps: {
          maxLength: 100,
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
        id: 'comment',
        error: 'Error message here',
        name: 'comment',
        multiline: true,
        required: true,
        label: 'Comentário',
        m: 2,
        placeholder: 'Comentário',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 7,
        },
      })
    )
  )
}

exports.TextFieldMultiline = TextFieldMultiline
