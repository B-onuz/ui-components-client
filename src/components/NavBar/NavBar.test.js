import React from 'react'
import NavBar from './NavBar.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('NavBar changes the class when hovered', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <NavBar />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
