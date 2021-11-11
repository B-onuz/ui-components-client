import React from 'react'
import Input from './Input.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render Input component', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Input id="my-input" placeholder="My input" />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
