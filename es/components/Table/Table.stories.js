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
exports.LoadingWithEmpty = exports.TableEmpty = exports.TableWithCellComponent = exports.TableLoadingDynamicWithData = exports.TableLoadingWithData = exports.TableExampleMaxHeight = exports.TableExample = exports[
  'default'
] = void 0

var _react = _interopRequireWildcard(require('react'))

var _Table = _interopRequireDefault(require('./Table'))

var _Button = _interopRequireDefault(require('../Button'))

var _Input = _interopRequireDefault(require('../Input'))

var _ContextMenu = _interopRequireDefault(require('../ContextMenu'))

var _addonActions = require('@storybook/addon-actions')

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Table/Table.stories.js'

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
  title: 'Table',
  component: _Table['default'],
}
exports['default'] = _default
var functionA = (0, _addonActions.action)('Função A')
var functionB = (0, _addonActions.action)('Função B')
var functionC = (0, _addonActions.action)('Função C')
var contextOptions = [
  {
    text: 'editar',
    buttonFunction: functionA,
  },
  {
    text: 'adicionar',
    buttonFunction: functionB,
  },
  {
    text: 'excluir',
    buttonFunction: functionC,
  },
]

var TableExample = function TableExample() {
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

  return /*#__PURE__*/ _react['default'].createElement(_Table['default'], {
    width: [1],
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
        title: 'Especialidades',
        key: 'especialidades',
        sort: true,
        align: 'left',
        width: '350px',
      },
      {
        title: 'Tarefas',
        key: 'tarefas',
        sort: true,
        align: 'center',
      },
      {
        title: 'Ações',
        key: 'actions',
        align: 'center',
        width: '50px',
      },
    ],
    data: [
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Last Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
    ],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5,
    },
  })
}

exports.TableExample = TableExample

var TableExampleMaxHeight = function TableExampleMaxHeight() {
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

  return /*#__PURE__*/ _react['default'].createElement(_Table['default'], {
    width: [2 / 3],
    onChangeOrder: handleChangeOrder,
    maxHeight: 200,
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
        title: 'Especialidades',
        key: 'especialidades',
        sort: true,
        align: 'left',
      },
      {
        title: 'Tarefas',
        key: 'tarefas',
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
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Last Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
    ],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 5,
    },
  })
}

exports.TableExampleMaxHeight = TableExampleMaxHeight

var TableLoadingWithData = function TableLoadingWithData() {
  var _useState5 = (0, _react.useState)('nome'),
    sort = _useState5[0],
    setSort = _useState5[1]

  var _useState6 = (0, _react.useState)('asc'),
    order = _useState6[0],
    setOrder = _useState6[1]

  var handleChangeOrder = function handleChangeOrder(item) {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  return /*#__PURE__*/ _react['default'].createElement(_Table['default'], {
    width: [2 / 3],
    onChangeOrder: handleChangeOrder,
    maxHeight: 200,
    loading: true,
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
        title: 'Especialidades',
        key: 'especialidades',
        sort: true,
        align: 'left',
      },
      {
        title: 'Tarefas',
        key: 'tarefas',
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
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
      {
        nome: 'Last Nome do advogado',
        especialidades: 'Comercial, Contratos',
        tarefas: 10,
      },
    ],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 5,
    },
  })
}

exports.TableLoadingWithData = TableLoadingWithData

var TableLoadingDynamicWithData = function TableLoadingDynamicWithData() {
  var _useState7 = (0, _react.useState)('nome'),
    sort = _useState7[0],
    setSort = _useState7[1]

  var _useState8 = (0, _react.useState)('asc'),
    order = _useState8[0],
    setOrder = _useState8[1]

  var _useState9 = (0, _react.useState)(false),
    loading = _useState9[0],
    setLoading = _useState9[1]

  var _useState10 = (0, _react.useState)(300),
    loadingTime = _useState10[0],
    setLoadingTime = _useState10[1]

  var handleChangeOrder = function handleChangeOrder(item) {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  var handleLoadingButton = function handleLoadingButton() {
    setLoading(true)
    setTimeout(function () {
      setLoading(false)
    }, 5000)
  }

  var handleChangeLoadingTime = function handleChangeLoadingTime(e) {
    setLoadingTime(e.target.value)
  }

  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(_Input['default'], {
      value: loadingTime,
      onChange: handleChangeLoadingTime,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 7,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        color: 'primary',
        onClick: handleLoadingButton,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272,
          columnNumber: 7,
        },
      },
      'Carregar'
    ),
    /*#__PURE__*/ _react['default'].createElement(_Table['default'], {
      width: [2 / 3],
      onChangeOrder: handleChangeOrder,
      maxHeight: 200,
      loading: loading,
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
          title: 'Especialidades',
          key: 'especialidades',
          sort: true,
          align: 'left',
        },
        {
          title: 'Tarefas',
          key: 'tarefas',
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
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          nome: 'Last Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
      ],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 7,
      },
    })
  )
}

exports.TableLoadingDynamicWithData = TableLoadingDynamicWithData

var TableWithCellComponent = function TableWithCellComponent() {
  var _useState11 = (0, _react.useState)('nome'),
    sort = _useState11[0],
    setSort = _useState11[1]

  var _useState12 = (0, _react.useState)('asc'),
    order = _useState12[0],
    setOrder = _useState12[1]

  var handleChangeOrder = function handleChangeOrder(item) {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(_Table['default'], {
      width: [2 / 3],
      onChangeOrder: handleChangeOrder, // maxHeight={200}
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
          title: 'Especialidades',
          key: 'especialidades',
          sort: true,
          align: 'left',
          minWidth: 500,
        },
        {
          title: 'Tarefas',
          key: 'tarefas',
          sort: true,
          cellComponent: function cellComponent(_ref) {
            var row = _ref.row,
              headers = _ref.headers,
              value = _ref.value
            return /*#__PURE__*/ _react['default'].createElement(
              'span',
              {
                style: {
                  color: 'red',
                  textDecoration: 'underline',
                },
                __self: this,
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 375,
                  columnNumber: 17,
                },
              },
              value,
              ' - ',
              row._id
            )
          },
          align: 'center',
        },
        {
          title: 'Ações',
          key: 'actions',
          align: 'center',
          cellComponent: function cellComponent(_ref2) {
            var row = _ref2.row,
              headers = _ref2.headers,
              value = _ref2.value
            return /*#__PURE__*/ _react['default'].createElement(_ContextMenu['default'], {
              contextMenuActions: contextOptions,
              contextFunctions: true,
              buttonIcon: _freeSolidSvgIcons.faPlus,
              direction: 'right',
              __self: this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 387,
                columnNumber: 22,
              },
            })
          },
        },
      ],
      data: [
        {
          _id: '1',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '2',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '3',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '4',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '5',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '6',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '7',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '8',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '9',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '10',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '11',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '12',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '13',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '14',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '15',
          nome: 'Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
        {
          _id: '16',
          nome: 'Last Nome do advogado',
          especialidades: 'Comercial, Contratos',
          tarefas: 10,
        },
      ],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 7,
      },
    })
  )
}

exports.TableWithCellComponent = TableWithCellComponent

var TableEmpty = function TableEmpty() {
  var _useState13 = (0, _react.useState)('nome'),
    sort = _useState13[0],
    setSort = _useState13[1]

  var _useState14 = (0, _react.useState)('asc'),
    order = _useState14[0],
    setOrder = _useState14[1]

  var handleChangeOrder = function handleChangeOrder(item) {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  return /*#__PURE__*/ _react['default'].createElement(_Table['default'], {
    width: [2 / 3],
    onChangeOrder: handleChangeOrder,
    maxHeight: 200,
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
        title: 'Especialidades',
        key: 'especialidades',
        sort: true,
        align: 'left',
      },
      {
        title: 'Tarefas',
        key: 'tarefas',
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
      lineNumber: 428,
      columnNumber: 5,
    },
  })
}

exports.TableEmpty = TableEmpty

var LoadingWithEmpty = function LoadingWithEmpty() {
  var _useState15 = (0, _react.useState)('nome'),
    sort = _useState15[0],
    setSort = _useState15[1]

  var _useState16 = (0, _react.useState)('asc'),
    order = _useState16[0],
    setOrder = _useState16[1]

  var handleChangeOrder = function handleChangeOrder(item) {
    if (item.key === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc')
    } else {
      setSort(item.key)
      setOrder('asc')
    }
  }

  return /*#__PURE__*/ _react['default'].createElement(_Table['default'], {
    width: [2 / 3],
    onChangeOrder: handleChangeOrder,
    maxHeight: 200,
    loading: true,
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
        title: 'Especialidades',
        key: 'especialidades',
        sort: true,
        align: 'left',
      },
      {
        title: 'Tarefas',
        key: 'tarefas',
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
      lineNumber: 479,
      columnNumber: 5,
    },
  })
}

exports.LoadingWithEmpty = LoadingWithEmpty
