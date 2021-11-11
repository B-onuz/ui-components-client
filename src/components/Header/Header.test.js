import React from 'react'
import Header from './Header.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Header changes the class when hovered', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
