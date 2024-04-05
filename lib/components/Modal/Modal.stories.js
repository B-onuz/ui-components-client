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

exports.__esModule = true
exports.useModalHook = exports.MultipleModals = exports['default'] = void 0

var _react = _interopRequireWildcard(require('react'))

var _Modal = _interopRequireDefault(require('./Modal'))

var _Button = _interopRequireDefault(require('../Button'))

var _useModal2 = _interopRequireDefault(require('../../hooks/useModal'))

var _this = void 0,
  _jsxFileName = '/home/junior/Fontes/ui-components-client/src/components/Modal/Modal.stories.js'

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
  title: 'Modal',
  component: _Modal['default'],
}
exports['default'] = _default

var MultipleModals = function MultipleModals() {
  var _useState = (0, _react.useState)([false, false, false]),
    modalOpen = _useState[0],
    setModalOpen = _useState[1]

  var openModal = function openModal(key) {
    setModalOpen(
      modalOpen.map(function (value, index) {
        if (index === key) return true
        return value
      })
    )
  }

  var closeModal = function closeModal(key) {
    setModalOpen(
      modalOpen.map(function (value, index) {
        if (index === key) return false
        return value
      })
    )
  }

  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        onClick: function onClick() {
          return openModal(0)
        },
        m: 10,
        color: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 7,
        },
      },
      'Abrir modal 1'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        onClick: function onClick() {
          return openModal(1)
        },
        m: 10,
        color: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 7,
        },
      },
      'Abrir modal 2'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        onClick: function onClick() {
          return openModal(2)
        },
        m: 10,
        color: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40,
          columnNumber: 7,
        },
      },
      'Abrir modal 3'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Modal['default'],
      {
        open: modalOpen[0],
        onClose: function onClose() {
          return closeModal(0)
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 7,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        'h1',
        {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 9,
          },
        },
        'lorem ipsum modal 1'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _Button['default'],
        {
          onClick: function onClick() {
            return openModal(1)
          },
          m: 10,
          color: 'primary',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 9,
          },
        },
        'Abrir modal 2'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _Button['default'],
        {
          onClick: function onClick() {
            return openModal(2)
          },
          m: 10,
          color: 'primary',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 9,
          },
        },
        'Abrir modal 3'
      )
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Modal['default'],
      {
        open: modalOpen[1],
        onClose: function onClose() {
          return closeModal(1)
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 7,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        'h1',
        {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 9,
          },
        },
        'lorem ipsum modal 2'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _Button['default'],
        {
          onClick: function onClick() {
            return openModal(0)
          },
          m: 10,
          color: 'primary',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 9,
          },
        },
        'Abrir modal 1'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _Button['default'],
        {
          onClick: function onClick() {
            return openModal(2)
          },
          m: 10,
          color: 'primary',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 9,
          },
        },
        'Abrir modal 3'
      )
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Modal['default'],
      {
        open: modalOpen[2],
        spacing: '40px 60px',
        onClose: function onClose() {
          return closeModal(2)
        },
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 7,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        'h1',
        {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 9,
          },
        },
        'lorem ipsum modal 3'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _Button['default'],
        {
          onClick: function onClick() {
            return openModal(0)
          },
          m: 10,
          color: 'primary',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 9,
          },
        },
        'Abrir modal 1'
      ),
      /*#__PURE__*/ _react['default'].createElement(
        _Button['default'],
        {
          onClick: function onClick() {
            return openModal(1)
          },
          m: 10,
          color: 'primary',
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 9,
          },
        },
        'Abrir modal 2'
      )
    )
  )
}

exports.MultipleModals = MultipleModals

var useModalHook = function useModalHook() {
  var _useModal = (0, _useModal2['default'])(),
    isOpen = _useModal.isOpen,
    openModal = _useModal.openModal,
    closeModal = _useModal.closeModal,
    modalParams = _useModal.params

  return /*#__PURE__*/ _react['default'].createElement(
    _react['default'].Fragment,
    null,
    /*#__PURE__*/ _react['default'].createElement(
      _Button['default'],
      {
        onClick: function onClick() {
          return openModal({
            id: '#1',
          })
        },
        m: 10,
        color: 'primary',
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 7,
        },
      },
      'Abrir modal'
    ),
    /*#__PURE__*/ _react['default'].createElement(
      _Modal['default'],
      {
        contentModalProps: {
          width: 1024,
        },
        boxProps: {
          p: 40,
        },
        open: isOpen,
        onClose: closeModal,
        header: /*#__PURE__*/ _react['default'].createElement(
          'h3',
          {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 17,
            },
          },
          'Hello id: ',
          (modalParams || {}).id
        ),
        footer: /*#__PURE__*/ _react['default'].createElement(
          'small',
          {
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 17,
            },
          },
          'Footer'
        ),
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 7,
        },
      },
      /*#__PURE__*/ _react['default'].createElement(
        'p',
        {
          style: {
            maxWidth: 320,
          },
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 9,
          },
        },
        'Magna ullamco incididunt laborum laboris. Qui Lorem nisi laboris minim elit ipsum magna aute commodo quis. Et minim nostrud dolore reprehenderit aliqua non ad quis et. Commodo excepteur proident Lorem laboris non qui pariatur duis id amet. Mollit minim commodo magna mollit dolor irure dolor sint Lorem nostrud reprehenderit ea. Elit laborum in eiusmod consectetur consequat dolore. Sit nostrud deserunt officia laborum Lorem sint officia. Adipisicing veniam aliquip ex reprehenderit tempor velit tempor amet deserunt. Ad veniam minim exercitation officia. Excepteur laborum tempor qui non elit id quis esse enim. Anim do sint fugiat cupidatat dolor officia incididunt incididunt laboris deserunt irure. Velit in dolor est ex aute tempor sunt laborum cupidatat velit amet. Deserunt sunt eu voluptate nisi dolore aliquip cillum ea magna culpa cillum Lorem. Esse occaecat mollit consectetur non velit laborum qui anim occaecat fugiat amet adipisicing. Et ut voluptate duis consectetur dolor eu cupidatat. Voluptate in ipsum do est dolore magna est velit magna in irure. Excepteur proident sit ut Lorem et aute ut. Adipisicing id cillum elit reprehenderit nisi deserunt consequat. Elit duis ad commodo incididunt est. Voluptate sint Lorem minim voluptate in.'
      )
    )
  )
}

exports.useModalHook = useModalHook
