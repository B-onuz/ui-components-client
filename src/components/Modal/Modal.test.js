import React from 'react'
import Modal from './Modal.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'
import ReactDOM from 'react-dom'

describe('Component: Modal', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element
    })
  })

  afterEach(() => {
    ReactDOM.createPortal.mockClear()
  })

  it('should render correctly when open is true', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Modal open={true} onClose={() => {}}>
          <h1>lorem ipsum modal 3</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </Modal>
      </ThemeProvider>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })

  it('should render correctly when open is false', () => {
    const component = renderer.create(
      <ThemeProvider theme={theme}>
        <Modal open={false} onClose={() => {}}>
          <h1>lorem ipsum modal 3</h1>
          <p>Lorem ipsum dolor sit amet</p>
        </Modal>
      </ThemeProvider>
    )

    expect(component.toJSON()).toMatchSnapshot()
  })
})
