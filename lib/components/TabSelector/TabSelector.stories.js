'use strict'

function _typeof(obj) {
  '@babel/helpers - typeof'
  if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
    _typeof = function _typeof(obj) {
      return typeof obj
    }
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === 'function' && obj.constructor === Symbol && obj !== Symbol.prototype ? 'symbol' : typeof obj
    }
  }
  return _typeof(obj)
}

exports.__esModule = true
exports.TabSelectorExample = exports['default'] = void 0

var _react = _interopRequireWildcard(require('react'))

var _TabSelector = _interopRequireDefault(require('./TabSelector'))

var _Fieldset = _interopRequireDefault(require('../Fieldset'))

var _TextField = _interopRequireDefault(require('../TextField'))

var _reflexbox = require('reflexbox')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/TabSelector/TabSelector.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== 'function') return null
  var cache = new WeakMap()
  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache
  }
  return cache
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj
  }
  if (obj === null || (_typeof(obj) !== 'object' && typeof obj !== 'function')) {
    return { default: obj }
  }
  var cache = _getRequireWildcardCache()
  if (cache && cache.has(obj)) {
    return cache.get(obj)
  }
  var newObj = {}
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc)
      } else {
        newObj[key] = obj[key]
      }
    }
  }
  newObj['default'] = obj
  if (cache) {
    cache.set(obj, newObj)
  }
  return newObj
}

var _default = {
  title: 'TabSelector',
  component: _TabSelector['default'],
}
exports['default'] = _default

var TabSelectorExample = function TabSelectorExample() {
  var _useState = (0, _react.useState)(true),
    contentA = _useState[0],
    setContentA = _useState[1]

  var _useState2 = (0, _react.useState)(false),
    contentB = _useState2[0],
    setContentB = _useState2[1]

  var handleTab = function handleTab() {
    setContentA(!contentA)
    setContentB(!contentB)
  }

  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      flexDirection: 'column',
      alignItems: 'center',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 5,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(_TabSelector['default'], {
      color: 'primary',
      optionA: 'Pessoa física',
      optionB: 'Pessoa jurídica',
      activeA: contentA,
      activeB: contentB,
      handleClick: handleTab,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7,
      },
    }),
    contentA &&
      /*#__PURE__*/ _react['default'].createElement(
        _Fieldset['default'],
        {
          m: 4,
          legend: 'Informações pessoais',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 9,
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
              lineNumber: 33,
              columnNumber: 11,
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
                lineNumber: 34,
                columnNumber: 13,
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
                lineNumber: 35,
                columnNumber: 15,
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
                lineNumber: 37,
                columnNumber: 13,
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
                lineNumber: 38,
                columnNumber: 15,
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
                lineNumber: 40,
                columnNumber: 13,
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
                lineNumber: 41,
                columnNumber: 15,
              },
            })
          )
        )
      ),
    contentB &&
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
            lineNumber: 47,
            columnNumber: 9,
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
              lineNumber: 48,
              columnNumber: 11,
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
                lineNumber: 49,
                columnNumber: 13,
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
                lineNumber: 50,
                columnNumber: 15,
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
                lineNumber: 52,
                columnNumber: 13,
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
                lineNumber: 53,
                columnNumber: 15,
              },
            })
          )
        )
      )
  )
}

exports.TabSelectorExample = TabSelectorExample
