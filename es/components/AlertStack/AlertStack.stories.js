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
exports.AlertStackExample = exports['default'] = void 0

var _react = _interopRequireWildcard(require('react'))

var _Button = _interopRequireDefault(require('../Button'))

var _TextField = _interopRequireDefault(require('../TextField'))

var _SelectField = _interopRequireDefault(require('../SelectField'))

var _AlertStackProvider = _interopRequireDefault(require('./AlertStackProvider'))

var _AlertStack = _interopRequireDefault(require('./AlertStack'))

var _useAlertStack2 = _interopRequireDefault(require('../../hooks/useAlertStack'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/AlertStack/AlertStack.stories.js'

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
  title: 'AlertStack',
  component: _AlertStack['default'],
}
exports['default'] = _default

var App = function App() {
  var _React$createElement, _React$createElement2

  var _useAlertStack = (0, _useAlertStack2['default'])(),
    showMessage = _useAlertStack.showMessage

  var _useState = (0, _react.useState)('Lorem ipsum dolor sit amet larem'),
    message = _useState[0],
    setMessage = _useState[1]

  var _useState2 = (0, _react.useState)('Lorem ipsum dolor'),
    title = _useState2[0],
    setTitle = _useState2[1]

  var _useState3 = (0, _react.useState)('success'),
    color = _useState3[0],
    setColor = _useState3[1]

  var _useState4 = (0, _react.useState)('bottom-left'),
    position = _useState4[0],
    setPosition = _useState4[1]

  var _useState5 = (0, _react.useState)(3000),
    time = _useState5[0],
    setTime = _useState5[1]

  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
      m: 20,
      label: 'Mensagem',
      value: message,
      onChange: function onChange(e) {
        return setMessage(e.target.value)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
      m: 20,
      label: 'T\xEDtulo',
      value: title,
      onChange: function onChange(e) {
        return setTitle(e.target.value)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
      m: 20,
      label: 'Dura\xE7\xE3o',
      type: 'number',
      value: time,
      onChange: function onChange(e) {
        return setTime(e.target.value)
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(
      _SelectField['default'],
      ((_React$createElement = {
        m: 20,
        value: color,
        onChange: function onChange(e) {
          return setColor(e.target.value)
        },
        required: true,
        label: 'Color',
      }),
      (_React$createElement['m'] = 2),
      (_React$createElement.placeholder = 'Nome'),
      (_React$createElement.__self = _this),
      (_React$createElement.__source = {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 7,
      }),
      _React$createElement),
      /*#__PURE__*/ _react['default'].createElement(
        'option',
        {
          value: 'danger',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 9,
          },
        },
        'Danger'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        'option',
        {
          value: 'warning',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 9,
          },
        },
        'Warning'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        'option',
        {
          value: 'success',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 9,
          },
        },
        'Success'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        'option',
        {
          value: 'info',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 9,
          },
        },
        'Info'
      )
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _SelectField['default'],
      ((_React$createElement2 = {
        m: 20,
        value: position,
        onChange: function onChange(e) {
          return setPosition(e.target.value)
        },
        required: true,
        label: 'Posição',
      }),
      (_React$createElement2['m'] = 2),
      (_React$createElement2.placeholder = 'Nome'),
      (_React$createElement2.__self = _this),
      (_React$createElement2.__source = {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7,
      }),
      _React$createElement2),
      /*#__PURE__*/ _react['default'].createElement(
        'option',
        {
          value: 'top-right',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 9,
          },
        },
        'Top - Right'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        'option',
        {
          value: 'top-left',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 9,
          },
        },
        'Top - Left'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        'option',
        {
          value: 'bottom-left',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 9,
          },
        },
        'Bottom - Left'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        'option',
        {
          value: 'bottom-right',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36,
            columnNumber: 9,
          },
        },
        'Bottom - Right'
      )
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        onClick: function onClick() {
          return showMessage({
            title: title,
            message: message,
            color: color,
            position: position,
            time: Number(time),
          })
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 7,
        },
      },
      'Mostrar Mensagem'
    )
  )
}

var AlertStackExample = function AlertStackExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _AlertStackProvider['default'],
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 5,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(App, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 7,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_AlertStack['default'], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 7,
      },
    })
  )
}

exports.AlertStackExample = AlertStackExample
