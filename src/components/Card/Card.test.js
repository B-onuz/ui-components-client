import React from 'react'
import Card from './Card.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render Card', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Card />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
