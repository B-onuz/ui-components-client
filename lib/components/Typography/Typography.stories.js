'use strict'

exports.__esModule = true
exports.TypographyExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _Typography = _interopRequireDefault(require('./Typography'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Typography/Typography.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'Typography',
  component: _Typography['default'],
}
exports['default'] = _default

var TypographyExample = function TypographyExample() {
  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _Typography['default'],
      {
        color: ['primary', 'olive', 'blue'],
        fontSize: [1, 2, 3, 4],
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11,
          columnNumber: 5,
        },
      },
      'Minim incididunt incididunt sint enim id nulla aliqua adipisicing tempor. Proident minim mollit Lorem ad qui occaecat magna. Ex ex Lorem duis Lorem in consectetur consectetur incididunt voluptate. Occaecat cillum nisi culpa deserunt. Pariatur dolor consectetur laborum id ipsum elit dolore aute sit reprehenderit culpa occaecat. Adipisicing eu elit in cillum labore occaecat ullamco est ea enim laboris irure dolore. Eu Lorem reprehenderit et ipsum exercitation. Enim quis excepteur anim ea et tempor nisi officia. Eiusmod proident ad amet qui. Dolor nisi do nisi fugiat sint eu veniam occaecat officia. Sint labore officia irure pariatur dolore quis reprehenderit enim sunt aliquip ea ea ad.'
    )
  )
}

exports.TypographyExample = TypographyExample
