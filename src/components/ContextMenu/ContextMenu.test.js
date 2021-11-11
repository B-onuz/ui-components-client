import React from 'react'
import ContextMenu from './ContextMenu.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render ContextMenu', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <ContextMenu />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
