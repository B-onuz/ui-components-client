import React from 'react'
import Chip from './Chip.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render Chip', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Chip color={'primary'} />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
