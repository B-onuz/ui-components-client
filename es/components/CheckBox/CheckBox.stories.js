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
exports.ControlledCheckbox = exports.CheckBoxExample = exports['default'] = void 0

var _react = _interopRequireWildcard(require('react'))

var _CheckBox = _interopRequireDefault(require('./CheckBox'))

var _styledComponents = require('reflexbox/styled-components')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/CheckBox/CheckBox.stories.js'

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
  title: 'CheckBox',
  component: _CheckBox['default'],
}
exports['default'] = _default

var CheckBoxExample = function CheckBoxExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _styledComponents.Flex,
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
      _styledComponents.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        m: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_CheckBox['default'], {
        id: 'tributarioa',
        label: 'Tributário',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _styledComponents.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        m: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_CheckBox['default'], {
        id: 'tributariob',
        label: 'Tributário',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 7,
        },
      })
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _styledComponents.Box,
      {
        width: [1, 1 / 2, 1 / 3],
        m: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(_CheckBox['default'], {
        id: 'tributarioc',
        label: 'Tributário',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 7,
        },
      })
    )
  )
}

exports.CheckBoxExample = CheckBoxExample

var ControlledCheckbox = function ControlledCheckbox() {
  var _useState = (0, _react.useState)(false),
    acceptConditions = _useState[0],
    setAcceptConditions = _useState[1]

  var handleChangeAcceptConditions = function handleChangeAcceptConditions(event) {
    var target = event.target
    setAcceptConditions(target.checked)
  }

  return /*#__PURE__*/ _react['default'].createElement(_CheckBox['default'], {
    id: 'tributarioa',
    checked: acceptConditions,
    onChange: handleChangeAcceptConditions,
    label: 'Aceite os termos e condições',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 10,
    },
  })
}

exports.ControlledCheckbox = ControlledCheckbox
