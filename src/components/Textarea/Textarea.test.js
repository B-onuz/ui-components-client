import React from 'react'
import Textarea from './Textarea.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render Textarea', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Textarea />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
