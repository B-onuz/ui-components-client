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
exports.BaseLayoutCornerContentExample = exports.BaseLayoutWithSidebar = exports.BaseLayoutExample = exports['default'] = void 0

var _react = _interopRequireWildcard(require('react'))

var _BaseLayout = _interopRequireDefault(require('./BaseLayout'))

var _Fieldset = _interopRequireDefault(require('../Fieldset'))

var _TextField = _interopRequireDefault(require('../TextField'))

var _reflexbox = require('reflexbox')

var _SidebarMenu = _interopRequireDefault(require('../SidebarMenu'))

var _SidebarMenuItem = _interopRequireDefault(require('../SidebarMenuItem'))

var _CheckBox = _interopRequireDefault(require('../CheckBox'))

var _Button = _interopRequireDefault(require('../Button'))

var _ProfileBox = _interopRequireDefault(require('../ProfileBox'))

var _bnz_icon = _interopRequireDefault(require('../../assets/bnz_icon.png'))

var _reactFontawesome = require('@fortawesome/react-fontawesome')

var _Logo = _interopRequireDefault(require('../Logo'))

var _logo_white = _interopRequireDefault(require('../../assets/logo_white.svg'))

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/BaseLayout/BaseLayout.stories.js'

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

function _extends() {
  _extends =
    Object.assign ||
    function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i]
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key]
          }
        }
      }
      return target
    }
  return _extends.apply(this, arguments)
}

var menuItems = [
  {
    icon: _freeSolidSvgIcons.faHome,
    text: 'Home',
  },
  {
    icon: _freeSolidSvgIcons.faDice,
    text: 'Dados',
  },
  {
    icon: _freeSolidSvgIcons.faCodeBranch,
    text: 'Branch',
  },
  {
    icon: _freeSolidSvgIcons.faAdjust,
    text: 'Adjusts Darkmode',
  },
  {
    icon: _freeSolidSvgIcons.faKey,
    text: 'Chaves de acesso',
  },
]

var DashboardSidebar = function DashboardSidebar(_ref) {
  var rest = _extends({}, _ref)

  return /*#__PURE__*/ _react['default'].createElement(
    _SidebarMenu['default'],
    _extends({}, rest, {
      logo: /*#__PURE__*/ _react['default'].createElement(_Logo['default'], {
        width: 180,
        my: 3,
        src: _logo_white['default'],
        alt: 'B-onuz Logo - legal services',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 34,
        },
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 5,
      },
    }),
    menuItems.map(function (item) {
      return /*#__PURE__*/ _react['default'].createElement(_SidebarMenuItem['default'], {
        component: 'header',
        icon: /*#__PURE__*/ _react['default'].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: item.icon,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 60,
          },
        }),
        children: item.text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 16,
        },
      })
    })
  )
}

var _default = {
  title: 'BaseLayout',
  component: _BaseLayout['default'],
}
exports['default'] = _default

var BaseLayoutExample = function BaseLayoutExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _BaseLayout['default'],
    {
      title: 'Cadastro de advogados',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 5,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      'h1',
      {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7,
        },
      },
      'Layout base'
    )
  )
}

exports.BaseLayoutExample = BaseLayoutExample

var BaseLayoutWithSidebar = function BaseLayoutWithSidebar() {
  var _useState = (0, _react.useState)(true),
    menuIsOpen = _useState[0],
    setMenuIsOpen = _useState[1]

  var toggleMenu = function toggleMenu() {
    setMenuIsOpen(!menuIsOpen)
  }

  var closeMenu = function closeMenu() {
    setMenuIsOpen(false)
  }

  return /*#__PURE__*/ _react['default'].createElement(
    _BaseLayout['default'],
    {
      title: 'Cadastro de advogados',
      menuIsOpen: menuIsOpen,
      handleChangeMenuIsOpen: toggleMenu,
      cornerContent: /*#__PURE__*/ _react['default'].createElement(_ProfileBox['default'], {
        src: _bnz_icon['default'],
        balanceValue: 2300,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 22,
        },
      }),
      sidebar: /*#__PURE__*/ _react['default'].createElement(DashboardSidebar, {
        open: menuIsOpen,
        onClose: closeMenu,
        width: 248,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 16,
        },
      }),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 5,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      'form',
      {
        noValidate: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 7,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _Fieldset['default'],
        {
          legend: 'Informações pessoais',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 9,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          _reflexbox.Flex,
          {
            flexWrap: 'wrap',
            mx: -2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 11,
            },
          },
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Box,
            {
              width: [1, 1 / 2, 1 / 3],
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
              id: 'name',
              name: 'name',
              label: 'Nome',
              m: 2,
              placeholder: 'Nome',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 15,
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
                lineNumber: 72,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
              id: 'lastname',
              name: 'lastname',
              label: 'Sobrenome',
              m: 2,
              placeholder: 'Sobrenome',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 15,
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
                lineNumber: 75,
                columnNumber: 13,
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
                lineNumber: 76,
                columnNumber: 15,
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
                lineNumber: 78,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
              id: 'name',
              name: 'name',
              label: 'Nome',
              m: 2,
              placeholder: 'Nome',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 15,
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
                lineNumber: 81,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
              id: 'lastname',
              name: 'lastname',
              label: 'Sobrenome',
              m: 2,
              placeholder: 'Sobrenome',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 15,
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
                lineNumber: 84,
                columnNumber: 13,
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
                lineNumber: 85,
                columnNumber: 15,
              },
            })
          )
        )
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _Fieldset['default'],
        {
          mt: 4,
          legend: 'Informações Profissionais',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 9,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          _reflexbox.Flex,
          {
            flexWrap: 'wrap',
            mx: -2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 11,
            },
          },
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Box,
            {
              width: [1, 1 / 2, 1 / 3],
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
              id: 'name',
              name: 'name',
              label: 'Nome',
              m: 2,
              placeholder: 'Nome',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 15,
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
                lineNumber: 94,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
              id: 'lastname',
              name: 'lastname',
              label: 'Sobrenome',
              m: 2,
              placeholder: 'Sobrenome',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 15,
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
                lineNumber: 97,
                columnNumber: 13,
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
                lineNumber: 98,
                columnNumber: 15,
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
                lineNumber: 100,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
              id: 'name',
              name: 'name',
              label: 'Nome',
              m: 2,
              placeholder: 'Nome',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 101,
                columnNumber: 15,
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
                lineNumber: 103,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_TextField['default'], {
              id: 'lastname',
              name: 'lastname',
              label: 'Sobrenome',
              m: 2,
              placeholder: 'Sobrenome',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 104,
                columnNumber: 15,
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
                lineNumber: 106,
                columnNumber: 13,
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
                lineNumber: 107,
                columnNumber: 15,
              },
            })
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Box,
            {
              width: [1, 1, 2 / 3],
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 110,
                columnNumber: 13,
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
                lineNumber: 111,
                columnNumber: 15,
              },
            })
          )
        )
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _Fieldset['default'],
        {
          mt: 4,
          legend: 'Seleciona especialidades do advogado',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115,
            columnNumber: 9,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          _reflexbox.Flex,
          {
            m: -2,
            flexWrap: 'wrap',
            flexDirection: ['column', 'column', 'row'],
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 116,
              columnNumber: 11,
            },
          },
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Box,
            {
              m: 2,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 117,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_CheckBox['default'], {
              id: 'societario',
              label: 'Societário',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 118,
                columnNumber: 15,
              },
            })
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Box,
            {
              m: 2,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_CheckBox['default'], {
              id: 'propriedade-intelectual',
              label: 'Propriedade Intelectual',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 121,
                columnNumber: 15,
              },
            })
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Box,
            {
              m: 2,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_CheckBox['default'], {
              id: 'tributario',
              label: 'Tributário',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 124,
                columnNumber: 15,
              },
            })
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Box,
            {
              m: 2,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 126,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_CheckBox['default'], {
              id: 'contratos',
              label: 'Contratos',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 15,
              },
            })
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Box,
            {
              m: 2,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 129,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_CheckBox['default'], {
              id: 'investimentos',
              label: 'Investimentos',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 130,
                columnNumber: 15,
              },
            })
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Box,
            {
              m: 2,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 13,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_CheckBox['default'], {
              id: 'contencioso',
              label: 'Contencioso',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 133,
                columnNumber: 15,
              },
            })
          )
        )
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _Fieldset['default'],
        {
          mt: 4,
          legend: 'Administração da plataforma B-onuz',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137,
            columnNumber: 9,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(_CheckBox['default'], {
          id: 'admin',
          label: 'Adicionar esse advogado ao grupo de Administradores da Plataforma',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 11,
          },
        })
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _reflexbox.Flex,
        {
          justifyContent: 'flex-end',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 9,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          _Button['default'],
          {
            m: 2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141,
              columnNumber: 11,
            },
          },
          'Cancelar'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          _Button['default'],
          {
            type: 'submit',
            color: 'primary',
            m: 2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 11,
            },
          },
          'Adicionar'
        )
      )
    )
  )
}

exports.BaseLayoutWithSidebar = BaseLayoutWithSidebar

var BaseLayoutCornerContentExample = function BaseLayoutCornerContentExample() {
  return /*#__PURE__*/ _react['default'].createElement(_BaseLayout['default'], {
    title: 'Cadastro de advogados',
    cornerContent: /*#__PURE__*/ _react['default'].createElement(_ProfileBox['default'], {
      src: _bnz_icon['default'],
      balanceValue: 2300,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 152,
        columnNumber: 67,
      },
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152,
      columnNumber: 10,
    },
  })
}

exports.BaseLayoutCornerContentExample = BaseLayoutCornerContentExample
