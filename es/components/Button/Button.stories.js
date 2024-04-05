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
exports.IconButton = exports.LinkButton = exports.Outline = exports.Fullwidth = exports.Sizes = exports.Loading = exports.Colors = exports[
  'default'
] = void 0

var _react = _interopRequireWildcard(require('react'))

var _Button = _interopRequireDefault(require('./Button'))

var _reflexbox = require('reflexbox')

var _icon_grain = _interopRequireDefault(require('../../assets/icon_grain.png'))

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Button/Button.stories.js'

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
  title: 'Button',
  component: _Button['default'],
}
exports['default'] = _default

var Colors = function Colors() {
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14,
          columnNumber: 5,
        },
      },
      'Default'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'default',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 5,
        },
      },
      'Default'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 5,
        },
      },
      'Primary'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'secondary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 5,
        },
      },
      'Secondary'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'fullDarkRed',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 5,
        },
      },
      'fullDarkRed'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'darkRed',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 5,
        },
      },
      'darkRed'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'lightRed',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 5,
        },
      },
      'lightRed'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'red',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 5,
        },
      },
      'red'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'orange',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 5,
        },
      },
      'orange'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'yellow',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 5,
        },
      },
      'yellow'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'olive',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 5,
        },
      },
      'olive'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'green',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 5,
        },
      },
      'green'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'teal',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 5,
        },
      },
      'teal'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'blue',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 5,
        },
      },
      'blue'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'violet',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54,
          columnNumber: 5,
        },
      },
      'violet'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'purple',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 5,
        },
      },
      'purple'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'pink',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 5,
        },
      },
      'pink'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'brown',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 5,
        },
      },
      'brown'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'white',
        borderColor: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 5,
        },
      },
      'white'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        color: 'facebookBlue',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 5,
        },
      },
      'facebookBlue'
    )
  )
}

exports.Colors = Colors

var Loading = function Loading() {
  var _useState = (0, _react.useState)(false),
    loading = _useState[0],
    setLoading = _useState[1]

  var send = function send() {
    setLoading(true)
    setTimeout(function () {
      setLoading(true)
    }, 1000)
  }

  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 5,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        loading: loading,
        disabled: loading,
        outline: true,
        color: 'primary',
        onClick: function onClick() {
          return send()
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 7,
        },
      },
      'Enviar'
    )
  )
}

exports.Loading = Loading

var Sizes = function Sizes() {
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        size: 'small',
        color: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 5,
        },
      },
      'Small'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        size: 'medium',
        color: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 5,
        },
      },
      'Medium'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        size: 'big',
        color: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 5,
        },
      },
      'Big'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        m: 2,
        size: 'huge',
        color: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 5,
        },
      },
      'huge'
    )
  )
}

exports.Sizes = Sizes

var Fullwidth = function Fullwidth() {
  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      flexWrap: 'wrap',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        width: [1],
        m: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _Button['default'],
        {
          color: 'primary',
          fullWidth: true,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 7,
          },
        },
        'Full Width'
      )
    )
  )
}

exports.Fullwidth = Fullwidth

var Outline = function Outline() {
  return /*#__PURE__*/ _react['default'].createElement(
    'div',
    {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 5,
        },
      },
      'Default'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'default',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 5,
        },
      },
      'Default'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127,
          columnNumber: 5,
        },
      },
      'Primary'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'secondary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 5,
        },
      },
      'Secondary'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'fullDarkRed',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 5,
        },
      },
      'fullDarkRed'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'darkRed',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 5,
        },
      },
      'darkRed'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'lightRed',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139,
          columnNumber: 5,
        },
      },
      'lightRed'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'red',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 5,
        },
      },
      'red'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'orange',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 5,
        },
      },
      'orange'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'yellow',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 5,
        },
      },
      'yellow'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'olive',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 5,
        },
      },
      'olive'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'green',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 5,
        },
      },
      'green'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'teal',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 5,
        },
      },
      'teal'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'blue',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 5,
        },
      },
      'blue'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'violet',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 5,
        },
      },
      'violet'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'purple',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 5,
        },
      },
      'purple'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'pink',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 5,
        },
      },
      'pink'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'brown',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 5,
        },
      },
      'brown'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'grey',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 5,
        },
      },
      'grey'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        outline: true,
        m: 2,
        color: 'black',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 5,
        },
      },
      'black'
    )
  )
}

exports.Outline = Outline

var LinkButton = function LinkButton() {
  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        linkButton: true,
        m: 2,
        color: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186,
          columnNumber: 5,
        },
      },
      'Link Button'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        linkButton: true,
        underline: true,
        m: 0,
        p: 0,
        as: 'a',
        color: 'primary',
        href: 'http://google.com',
        target: '_blank',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189,
          columnNumber: 5,
        },
      },
      'http://google.com'
    )
  )
}

exports.LinkButton = LinkButton

var IconButton = function IconButton() {
  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      flexWrap: 'wrap',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Box,
      {
        as: _reflexbox.Flex,
        justifyContent: 'space-evenly',
        width: [1],
        m: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _Button['default'],
        {
          color: 'primary',
          linkButton: true,
          icon: _freeSolidSvgIcons.faArchive,
          iconSize: '18px',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 198,
            columnNumber: 7,
          },
        },
        'Icon example'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _Button['default'],
        {
          color: 'primary',
          linkButton: true,
          imgBackground: 'https://i.pravatar.cc/300',
          imgSize: '50px',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 201,
            columnNumber: 7,
          },
        },
        'Icon example'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _Button['default'],
        {
          color: 'primary',
          linkButton: true,
          imgBackground: _icon_grain['default'],
          bgColor: 'black',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 7,
          },
        },
        'Icon example'
      )
    )
  )
}

exports.IconButton = IconButton
