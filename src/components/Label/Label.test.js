import React from 'react'
import Label from './Label.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Label changes the class when hovered', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Label>Hello Label</Label>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
