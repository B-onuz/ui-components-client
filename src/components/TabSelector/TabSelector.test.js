import React from 'react'
import TabSelector from './TabSelector.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render TabSelector', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <TabSelector />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
