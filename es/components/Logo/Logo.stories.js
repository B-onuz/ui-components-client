'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.LogoExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _Logo = _interopRequireDefault(require('./Logo'))

var _styledComponents = _interopRequireDefault(require('styled-components'))

var _logo_white = _interopRequireDefault(require('../../assets/logo_white.svg'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Logo/Logo.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _templateObject() {
  var data = _taggedTemplateLiteralLoose(['\n  padding: 18px;\n  width: 180px;\n  background: ', ';\n'])

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
  title: 'Logo',
  component: _Logo['default'],
}
exports['default'] = _default

var Wrapper = _styledComponents['default'].div(_templateObject(), function (props) {
  return props.theme.colors['primary']
})

var LogoExample = function LogoExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    Wrapper,
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(_Logo['default'], {
      alt: 'B-onuz Logo - legal services',
      width: '180',
      src: _logo_white['default'],
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 5,
      },
    })
  )
}

exports.LogoExample = LogoExample
