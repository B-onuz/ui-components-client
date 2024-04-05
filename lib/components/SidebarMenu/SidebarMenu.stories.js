'use strict'

exports.__esModule = true
exports.SidebarMenuOnlyMobile = exports.SidebarMenuExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _SidebarMenu = _interopRequireDefault(require('./SidebarMenu'))

var _SidebarMenuItem = _interopRequireDefault(require('../SidebarMenuItem'))

var _Button = _interopRequireDefault(require('../Button'))

var _shortid = _interopRequireDefault(require('shortid'))

var _reflexbox = require('reflexbox')

var _reactFontawesome = require('@fortawesome/react-fontawesome')

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/SidebarMenu/SidebarMenu.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'SidebarMenu',
  component: _SidebarMenu['default'],
}
exports['default'] = _default
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

var SidebarMenuExample = function SidebarMenuExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _SidebarMenu['default'],
    {
      open: true,
      contactButton: /*#__PURE__*/ _react['default'].createElement(
        _Button['default'],
        {
          style: {
            backgroundColor: 'transparent',
          },
          color: 'white',
          outline: true,
          m: 3,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          _reflexbox.Flex,
          {
            alignItems: 'center',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 33,
              columnNumber: 9,
            },
          },
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Box,
            {
              mr: 2,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 34,
                columnNumber: 11,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faPhone,
              color: '#4AB77C',
              size: 'lg',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 13,
              },
            })
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Flex,
            {
              width: 1,
              justifyContent: 'center',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 37,
                columnNumber: 11,
              },
            },
            '+11 22 33333-3333'
          )
        )
      ),
      logoutHref: 'google.com',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 3,
      },
    },
    menuItems.map(function (item) {
      return /*#__PURE__*/ _react['default'].createElement(_SidebarMenuItem['default'], {
        key: item.text + '-' + _shortid['default'].generate(),
        component: 'header',
        icon: /*#__PURE__*/ _react['default'].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: item.icon,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 17,
          },
        }),
        children: item.text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 9,
        },
      })
    })
  )
}

exports.SidebarMenuExample = SidebarMenuExample

var SidebarMenuOnlyMobile = function SidebarMenuOnlyMobile() {
  return /*#__PURE__*/ _react['default'].createElement(
    _SidebarMenu['default'],
    {
      open: true,
      onlyMobile: true,
      contactButton: /*#__PURE__*/ _react['default'].createElement(
        _Button['default'],
        {
          style: {
            backgroundColor: 'transparent',
          },
          color: 'white',
          outline: true,
          m: 3,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          _reflexbox.Flex,
          {
            alignItems: 'center',
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 9,
            },
          },
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Box,
            {
              mr: 2,
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 11,
              },
            },
            /*#__PURE__*/ _react['default'].createElement(_reactFontawesome.FontAwesomeIcon, {
              icon: _freeSolidSvgIcons.faPhone,
              color: '#4AB77C',
              size: 'lg',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 13,
              },
            })
          ),
          /*#__PURE__*/ _react['default'].createElement(
            _reflexbox.Flex,
            {
              width: 1,
              justifyContent: 'center',
              __self: _this,
              __source: {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 11,
              },
            },
            '+11 22 33333-3333'
          )
        )
      ),
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 3,
      },
    },
    menuItems.map(function (item) {
      return /*#__PURE__*/ _react['default'].createElement(_SidebarMenuItem['default'], {
        key: item.text + '-' + _shortid['default'].generate(),
        component: 'header',
        icon: /*#__PURE__*/ _react['default'].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: item.icon,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 17,
          },
        }),
        children: item.text,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 9,
        },
      })
    })
  )
}

exports.SidebarMenuOnlyMobile = SidebarMenuOnlyMobile
