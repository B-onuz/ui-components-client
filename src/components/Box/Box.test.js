import React from 'react'
import Box from './Box.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('when render Box', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Box>
        <h1>Qui esse pariatur esse duis tempor enim dolor non ad culpa deserunt dolore culpa dolore.</h1>
        <p>Reprehenderit anim est officia veniam qui veniam aute sint dolore.</p>
      </Box>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
