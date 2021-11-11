import React from 'react'
import Legend from './Legend.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Legend changes the class when hovered', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Legend />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
