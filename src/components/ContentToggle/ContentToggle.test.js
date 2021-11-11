import React from 'react'
import ContentToggle from './ContentToggle.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render ContentToggle', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <ContentToggle />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
