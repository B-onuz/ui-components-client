import React from 'react'
import Spinner from './Spinner.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Spinner changes the class when hovered', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Spinner />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
