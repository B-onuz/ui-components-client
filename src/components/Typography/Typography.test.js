import React from 'react'
import Typography from './Typography.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render Typography', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Typography>Aliquip in nisi ut ipsum.</Typography>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render Typography when color prop', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Typography color={'black'} bg={'primary'}>
        Aliquip in nisi ut ipsum.
      </Typography>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render Typography when space prop', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Typography m={10}>Aliquip in nisi ut ipsum.</Typography>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
