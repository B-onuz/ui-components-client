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
exports.PaginationExample = exports['default'] = void 0

var _react = _interopRequireWildcard(require('react'))

var _Pagination = _interopRequireDefault(require('./Pagination'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Pagination/Pagination.stories.js'

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
  title: 'Pagination',
  component: _Pagination['default'],
}
exports['default'] = _default

var PaginationExample = function PaginationExample() {
  var _useState = (0, _react.useState)(1),
    currentPage = _useState[0],
    setCurrentPage = _useState[1]

  var total = 7

  var handleChangeNext = function handleChangeNext() {
    var nextPage = currentPage + 1

    if (nextPage <= total) {
      setCurrentPage(nextPage)
    }
  }

  var handleChangePrev = function handleChangePrev() {
    var prevPage = currentPage - 1

    if (prevPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return /*#__PURE__*/ _react['default'].createElement(_Pagination['default'], {
    color: 'primary',
    m: 20,
    onChangePage: function onChangePage(item) {
      return setCurrentPage(item)
    },
    onPrevPage: function onPrevPage(item) {
      return handleChangePrev()
    },
    onNextPage: function onNextPage(item) {
      return handleChangeNext()
    },
    total: total,
    page: currentPage,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5,
    },
  })
}

exports.PaginationExample = PaginationExample
