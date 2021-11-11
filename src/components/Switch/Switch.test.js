import React, { useState } from 'react'
import Switch from './Switch.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render Switch when checked', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Switch checked={true} onChange={(e) => onChange(e.target.checked)} />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render Switch when unchecked', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Switch checked={false} onChange={(e) => onChange(e.target.checked)} />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
