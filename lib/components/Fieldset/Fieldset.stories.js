'use strict'

exports.__esModule = true
exports.FieldsetExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _Fieldset = _interopRequireDefault(require('./Fieldset'))

var _TextField = _interopRequireDefault(require('../TextField'))

var _reflexbox = require('reflexbox')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Fieldset/Fieldset.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'Fieldset',
  component: _Fieldset['default'],
}
exports['default'] = _default

var FieldsetExample = function FieldsetExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _Fieldset['default'],
      {
        m: 4,
        legend: 'Informações pessoais',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _reflexbox.Flex,
        {
          flexWrap: 'wrap',
          m: -2,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          _reflexbox.Box,
          {
            width: [1, 1 / 2, 1 / 3],
            m: 2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15,
              columnNumber: 9,
            },
          },
          /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
            id: 'name',
            name: 'name',
            required: true,
            label: 'Nome',
            placeholder: 'Nome',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 16,
              columnNumber: 11,
            },
          })
        ),
        /*#__PURE__*/ _react['default'].createElement(
          _reflexbox.Box,
          {
            width: [1, 1 / 2, 1 / 3],
            m: 2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 9,
            },
          },
          /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
            id: 'lastname',
            name: 'lastname',
            label: 'Sobrenome',
            placeholder: 'Sobrenome',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 11,
            },
          })
        ),
        /*#__PURE__*/ _react['default'].createElement(
          _reflexbox.Box,
          {
            width: [1, 1 / 2, 1 / 3],
            m: 2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 9,
            },
          },
          /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
            id: 'fullname',
            name: 'fullname',
            label: 'Exibir Como:',
            placeholder: 'Nome + Sobrenome',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 11,
            },
          })
        )
      )
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Fieldset['default'],
      {
        m: 4,
        bordered: true,
        p: '1em',
        legend: 'Dados de contato (bordered)',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _reflexbox.Flex,
        {
          flexWrap: 'wrap',
          m: -2,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          _reflexbox.Box,
          {
            width: [1, 1 / 2, 1 / 3],
            m: 2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 28,
              columnNumber: 9,
            },
          },
          /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
            id: 'email',
            type: 'email',
            name: 'email',
            label: 'Email',
            placeholder: 'Email',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 29,
              columnNumber: 11,
            },
          })
        ),
        /*#__PURE__*/ _react['default'].createElement(
          _reflexbox.Box,
          {
            width: [1, 1 / 2, 1 / 3],
            m: 2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 9,
            },
          },
          /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
            id: 'telefone',
            type: 'phone',
            name: 'fullname',
            label: 'Telefone',
            placeholder: 'Telefone',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 32,
              columnNumber: 11,
            },
          })
        )
      )
    )
  )
}

exports.FieldsetExample = FieldsetExample
