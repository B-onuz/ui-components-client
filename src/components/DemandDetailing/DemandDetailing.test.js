import React from 'react'
import DemandDetailing from './DemandDetailing.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render DemandDetailing', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <DemandDetailing />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
