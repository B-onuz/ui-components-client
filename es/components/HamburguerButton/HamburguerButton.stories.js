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
exports.HamburguerButtonExample = exports['default'] = void 0

var _react = _interopRequireWildcard(require('react'))

var _HamburguerButton = _interopRequireDefault(require('./HamburguerButton'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/HamburguerButton/HamburguerButton.stories.js'

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
  title: 'HamburguerButton',
  component: _HamburguerButton['default'],
}
exports['default'] = _default

var HamburguerButtonExample = function HamburguerButtonExample() {
  var _useState = (0, _react.useState)(false),
    isOpen = _useState[0],
    setIsOpen = _useState[1]

  return /*#__PURE__*/ _react['default'].createElement(_HamburguerButton['default'], {
    onClick: function onClick() {
      return setIsOpen(!isOpen)
    },
    isOpen: isOpen,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 10,
    },
  })
}

exports.HamburguerButtonExample = HamburguerButtonExample
