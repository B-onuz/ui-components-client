import React from 'react'
import ProfileBox from './ProfileBox.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render ProfileBox', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <ProfileBox />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
