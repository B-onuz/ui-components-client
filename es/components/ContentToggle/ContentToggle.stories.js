'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.ContentToggleExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _ContentToggle = _interopRequireDefault(require('./ContentToggle'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/ContentToggle/ContentToggle.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'ContentToggle',
  component: _ContentToggle['default'],
}
exports['default'] = _default

var ContentToggleExample = function ContentToggleExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _ContentToggle['default'],
      {
        contentTitle: 'Conte\xFAdo 1',
        startVisible: true,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        'div',
        {
          style: {
            padding: 15,
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          'div',
          {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 13,
              columnNumber: 9,
            },
          },
          'Exemplo'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          'div',
          {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14,
              columnNumber: 9,
            },
          },
          'Texto do conte\xFAdo 1'
        )
      )
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _ContentToggle['default'],
      {
        contentTitle: 'Conte\xFAdo 2',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 5,
        },
      },
      'Exemplo de conte\xFAdo 2'
    )
  )
}

exports.ContentToggleExample = ContentToggleExample
