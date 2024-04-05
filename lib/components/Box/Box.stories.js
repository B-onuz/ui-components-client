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
exports.EmptyTableNoBorderBoxExample = exports.BoxExample = exports['default'] = void 0

var _react = _interopRequireWildcard(require('react'))

var _Box = _interopRequireDefault(require('./Box'))

var _Table = _interopRequireDefault(require('../Table'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Box/Box.stories.js'

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
  title: 'Box',
  component: _Box['default'],
}
exports['default'] = _default

var BoxExample = function BoxExample() {
  var _useState = (0, _react.useState)('nome'),
    sort = _useState[0],
    setSort = _useState[1]

  var _useState2 = (0, _react.useState)('asc'),
    order = _useState2[0],
    setOrder = _useState2[1]

  var handleChangeOrder = function handleChangeOrder(item) {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  return /*#__PURE__*/ _react['default'].createElement(
    _Box['default'],
    {
      width: 1000,
      px: 0,
      py: 37,
      m: 30,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 5,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(_Table['default'], {
      width: 1,
      maxHeight: 200,
      onChangeOrder: handleChangeOrder,
      pagination: {
        sort: sort,
        order: order,
      },
      headers: [
        {
          title: 'Advogados',
          key: 'nome',
          sort: true,
          align: 'left',
        },
        {
          title: 'Nome',
          key: 'lawyer.first',
          sort: true,
          align: 'left',
        },
        {
          title: 'Sobrenome',
          key: 'lawyer.last',
          sort: true,
          align: 'center',
        },
        {
          title: 'Ações',
          key: 'actions',
          align: 'center',
        },
      ],
      data: [
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
        {
          nome: 'Last Nome do advogado',
          lawyer: {
            first: 'Jhon',
            last: 'Silva',
          },
          tarefas: 10,
        },
      ],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7,
      },
    })
  )
}

exports.BoxExample = BoxExample

var EmptyTableNoBorderBoxExample = function EmptyTableNoBorderBoxExample() {
  var _useState3 = (0, _react.useState)('nome'),
    sort = _useState3[0],
    setSort = _useState3[1]

  var _useState4 = (0, _react.useState)('asc'),
    order = _useState4[0],
    setOrder = _useState4[1]

  var handleChangeOrder = function handleChangeOrder(item) {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  return /*#__PURE__*/ _react['default'].createElement(
    _Box['default'],
    {
      width: 1000,
      px: 0,
      py: 37,
      m: 30,
      noBorder: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 5,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(_Table['default'], {
      width: 1,
      maxHeight: 200,
      onChangeOrder: handleChangeOrder,
      pagination: {
        sort: sort,
        order: order,
      },
      headers: [
        {
          title: 'Advogados',
          key: 'nome',
          sort: true,
          align: 'left',
        },
        {
          title: 'Nome',
          key: 'lawyer.first',
          sort: true,
          align: 'left',
        },
        {
          title: 'Sobrenome',
          key: 'lawyer.last',
          sort: true,
          align: 'center',
        },
        {
          title: 'Ações',
          key: 'actions',
          align: 'center',
        },
      ],
      data: [],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 7,
      },
    })
  )
}

exports.EmptyTableNoBorderBoxExample = EmptyTableNoBorderBoxExample
