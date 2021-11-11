import React from 'react'
import FormHelperText from './FormHelperText.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render FormHelperText', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <FormHelperText />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
