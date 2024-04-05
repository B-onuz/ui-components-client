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

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.HelperText = exports.ErrorMessage = exports.Controlled = exports['default'] = void 0

var _react = _interopRequireWildcard(require('react'))

var _SelectField = _interopRequireDefault(require('./SelectField'))

var _reflexbox = require('reflexbox')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/SelectField/SelectField.stories.js'

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
  title: 'SelectField',
  component: _SelectField['default'],
}
exports['default'] = _default

var Controlled = function Controlled() {
  var _useState = (0, _react.useState)('valor4'),
    selected = _useState[0],
    setSelected = _useState[1]

  var handleChangeSelect = function handleChangeSelect(e) {
    setSelected(e.target.value)
  }

  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      flexWrap: 'wrap',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 7,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _SelectField['default'],
        {
          value: selected,
          onChange: handleChangeSelect,
          id: 'name',
          name: 'name',
          required: true,
          label: 'Nome',
          m: 2,
          placeholder: 'Nome',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 9,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor1',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 11,
            },
          },
          'Valor 1'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor2',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 11,
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
              lineNumber: 21,
              columnNumber: 11,
            },
          },
          'Valor 3'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor4',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 11,
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
              lineNumber: 23,
              columnNumber: 11,
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
              lineNumber: 24,
              columnNumber: 11,
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
              lineNumber: 25,
              columnNumber: 11,
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
              lineNumber: 26,
              columnNumber: 11,
            },
          },
          'Valor 8'
        )
      )
    )
  )
}

exports.Controlled = Controlled

var ErrorMessage = function ErrorMessage() {
  var _useState2 = (0, _react.useState)('valor4'),
    selected = _useState2[0],
    setSelected = _useState2[1]

  var handleChangeSelect = function handleChangeSelect(e) {
    setSelected(e.target.value)
  }

  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      flexWrap: 'wrap',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 7,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _SelectField['default'],
        {
          value: selected,
          error: 'Error message',
          onChange: handleChangeSelect,
          id: 'name',
          name: 'name',
          required: true,
          label: 'Nome',
          m: 2,
          placeholder: 'Nome',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 9,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor1',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 11,
            },
          },
          'Valor 1'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor2',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 11,
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
              lineNumber: 54,
              columnNumber: 11,
            },
          },
          'Valor 3'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor4',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 11,
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
              lineNumber: 56,
              columnNumber: 11,
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
              lineNumber: 57,
              columnNumber: 11,
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
              lineNumber: 58,
              columnNumber: 11,
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
              lineNumber: 59,
              columnNumber: 11,
            },
          },
          'Valor 8'
        )
      )
    )
  )
}

exports.ErrorMessage = ErrorMessage

var HelperText = function HelperText() {
  var _useState3 = (0, _react.useState)('valor4'),
    selected = _useState3[0],
    setSelected = _useState3[1]

  var handleChangeSelect = function handleChangeSelect(e) {
    setSelected(e.target.value)
  }

  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      flexWrap: 'wrap',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 5,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 7,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _SelectField['default'],
        {
          value: selected,
          helperText: 'Helper text',
          onChange: handleChangeSelect,
          id: 'name',
          name: 'name',
          required: true,
          label: 'Nome',
          m: 2,
          placeholder: 'Nome',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 9,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor1',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 11,
            },
          },
          'Valor 1'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor2',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 11,
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
              lineNumber: 87,
              columnNumber: 11,
            },
          },
          'Valor 3'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'option',
          {
            value: 'valor4',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 11,
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
              lineNumber: 89,
              columnNumber: 11,
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
              lineNumber: 90,
              columnNumber: 11,
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
              lineNumber: 91,
              columnNumber: 11,
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
              lineNumber: 92,
              columnNumber: 11,
            },
          },
          'Valor 8'
        )
      )
    )
  )
}

exports.HelperText = HelperText
