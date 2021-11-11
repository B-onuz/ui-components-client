import React from 'react'
import SearchField from './SearchField.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render SearchField component', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <SearchField id="my-SearchField" placeholder="My SearchField" />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
