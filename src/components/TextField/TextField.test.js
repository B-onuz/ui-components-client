import React from 'react'
import 'jest-styled-components'
import TextField from './TextField.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('TextField changes the class when hovered', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <TextField id="name" name={'name'} required label={'Nome'} m={2} placeholder={'Nome'} />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
