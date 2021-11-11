import React from 'react'
import UserAvatar from './UserAvatar.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render UserAvatar', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <UserAvatar />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
