import React from 'react'
import Tooltip from './Tooltip.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render Tooltip', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Tooltip text={'Texto'}>Example</Tooltip>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
