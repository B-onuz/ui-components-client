import React from 'react'
import AlertStack from './AlertStack.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'
import AlertStackProvider from './AlertStackProvider.js'

test('Should render AlertStack', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <AlertStackProvider>
        <AlertStack />
      </AlertStackProvider>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
