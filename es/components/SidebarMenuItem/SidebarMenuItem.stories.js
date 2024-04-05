'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.SidebarMenuItemExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _SidebarMenuItem = _interopRequireDefault(require('./SidebarMenuItem'))

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _reactFontawesome = require('@fortawesome/react-fontawesome')

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/SidebarMenuItem/SidebarMenuItem.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(['\n  list-style: none;\n  padding: 0;\n  background: ', ';\n'])

  _templateObject = function _templateObject() {
    return data
  }

  return data
}

function _taggedTemplateLiteralLoose(strings, raw) {
  if (!raw) {
    raw = strings.slice(0)
  }
  strings.raw = raw
  return strings
}

var _default = {
  title: 'SidebarMenuItem',
  component: _SidebarMenuItem['default'],
}
exports['default'] = _default

var List = _styledComponents['default'].ul(_templateObject(), function (props) {
  return props.theme.colors.primary
})

var SidebarMenuItemExample = function SidebarMenuItemExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    List,
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _SidebarMenuItem['default'],
      {
        icon: /*#__PURE__*/ _react['default'].createElement(_reactFontawesome.FontAwesomeIcon, {
          icon: _freeSolidSvgIcons.faHome,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 28,
          },
        }),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 5,
        },
      },
      'Menu Item'
    )
  )
}

exports.SidebarMenuItemExample = SidebarMenuItemExample
