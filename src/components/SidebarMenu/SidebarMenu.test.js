import React from 'react'
import SidebarMenu from './SidebarMenu.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('SidebarMenu changes the class when hovered', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <SidebarMenu />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
