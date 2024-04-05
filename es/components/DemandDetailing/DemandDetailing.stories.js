'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true,
})
exports.DemandDetailingWithChild = exports.DemandDetailingExample = exports['default'] = void 0

var _react = _interopRequireDefault(require('react'))

var _DemandDetailing = _interopRequireDefault(require('./DemandDetailing'))

var _reflexbox = require('reflexbox')

var _Button = _interopRequireDefault(require('../Button'))

var _Typography = _interopRequireDefault(require('../Typography'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/DemandDetailing/DemandDetailing.stories.js'

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

var _default = {
  title: 'DemandDetailing',
  component: _DemandDetailing['default'],
}
exports['default'] = _default
var data = [
  {
    interactionResponsibleName: 'Advogado Bonuz',
    isLawyer: true,
    createdAt: 1600977892300,
    comment:
      "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:\n\n    \u201CLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\u201D\n    The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.\n\n    The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum.",
  },
  {
    interactionResponsibleName: 'Cliente',
    isLawyer: false,
    createdAt: 1600981780257,
    comment:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
  },
  {
    interactionResponsibleName: 'Advogado Bonuz',
    isLawyer: true,
    createdAt: 1600981780267,
    comment:
      'Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum ',
    documents: [
      {
        fileURL: 'https://lorempixel.com/50/50/44',
        fileName: 'contrato_nda_v1.pdf',
        name: 'arquivo_final.png',
      },
      {
        fileURL: 'https://lorempixel.com/50/50',
        fileName: 'contrato_nda_v2.pdf',
        name: 'arquivo_semifinal.png',
      },
    ],
  },
]

var DemandDetailingExample = function DemandDetailingExample() {
  return /*#__PURE__*/ _react['default'].createElement(_DemandDetailing['default'], {
    reportTitle: 'Conclus\xE3o',
    reportKind: 'Hist\xF3rico',
    detailingData: data,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 45,
    },
  })
}

exports.DemandDetailingExample = DemandDetailingExample

var DemandDetailingWithChild = function DemandDetailingWithChild() {
  return /*#__PURE__*/ _react['default'].createElement(
    _DemandDetailing['default'],
    {
      reportTitle: 'Conclus\xE3o',
      reportKind: 'Hist\xF3rico',
      detailingData: data,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 3,
      },
    },
    /*#__PURE__*/ _react['default'].createElement(
      _reflexbox.Flex,
      {
        justifyContent: 'space-between',
        my: 2,
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 5,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        _Typography['default'],
        {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 7,
          },
        },
        'Here comes any children content'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _reflexbox.Box,
        {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 7,
          },
        },
        /*#__PURE__*/ _react['default'].createElement(
          _Button['default'],
          {
            color: 'primary',
            m: 2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 9,
            },
          },
          'Button 1'
        ),
        /*#__PURE__*/ _react['default'].createElement(
          _Button['default'],
          {
            outline: true,
            color: 'primary',
            m: 2,
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 9,
            },
          },
          'Button 2'
        )
      )
    )
  )
}

exports.DemandDetailingWithChild = DemandDetailingWithChild
