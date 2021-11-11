import React from 'react'
import SidebarMenuItem from './SidebarMenuItem.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('SidebarMenuItem changes the class when hovered', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <SidebarMenuItem />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
