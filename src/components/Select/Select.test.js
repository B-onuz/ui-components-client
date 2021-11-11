import React from 'react'
import Select from './Select.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render Select', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Select placeholder="Nome inteiro">
        <option value="valor1">Valor 1</option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
        <option value="valor4">Valor 4</option>
        <option value="valor5">Valor 5</option>
        <option value="valor6">Valor 6</option>
        <option value="valor7">Valor 7</option>
        <option value="valor8">Valor 8</option>
      </Select>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
