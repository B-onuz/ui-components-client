'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.UserAvatarWithName = exports.UserAvatarExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _UserAvatar = _interopRequireDefault(require('./UserAvatar'))

var _reflexbox = require('reflexbox')

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/UserAvatar/UserAvatar.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'UserAvatar',
  component: _UserAvatar['default'],
}
exports['default'] = _default

var UserAvatarExample = function UserAvatarExample() {
  return /*#__PURE__*/ _react['default'].createElement(_UserAvatar['default'], {
    userName: 'John',
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 40,
    },
  })
}

exports.UserAvatarExample = UserAvatarExample

var UserAvatarWithName = function UserAvatarWithName() {
  return /*#__PURE__*/ _react['default'].createElement(
    _reflexbox.Flex,
    {
      flexDirection: 'column',
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(_UserAvatar['default'], {
      userName: 'John The Doe',
      color: 'primary',
      displayName: 'Client',
      m: 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_UserAvatar['default'], {
      userName: 'John Doe The',
      displayName: 'Lawyer',
      nameColor: 'primary',
      m: 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_UserAvatar['default'], {
      userName: 'Example Lawyer',
      displayName: 'Lawyer',
      m: 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 5,
      },
    }),
    /*#__PURE__*/ _react['default'].createElement(_UserAvatar['default'], {
      userName: 'Client',
      displayName: 'Client',
      color: 'primary',
      nameColor: 'primary',
      m: 2,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5,
      },
    })
  )
}

exports.UserAvatarWithName = UserAvatarWithName
