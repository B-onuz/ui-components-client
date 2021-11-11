import React from 'react'
import BreadCrumb from './BreadCrumb.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render BreadCrumb', () => {
  const exampleObj = [
    {
      label: 'Gestão da rota do Link 1',
      action: () => console.log('Ação do Link'),
    },
    {
      label: 'Gestão da rota do Link 2',
      action: () => console.log('Ação do Link'),
    },
    {
      label: 'Gestão da rota do Link 3',
      action: () => console.log('Ação do Link'),
    },
    {
      label: 'Gestão da rota do Link 4',
      action: () => console.log('Ação do Link'),
    },
  ]

  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <BreadCrumb navigationLinks={exampleObj} />
    </ThemeProvider>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render BreadCrumb with color', () => {
  const exampleObj = [
    {
      label: 'Gestão da rota do Link 1',
      action: () => console.log('Ação do Link'),
    },
    {
      label: 'Gestão da rota do Link 2',
      action: () => console.log('Ação do Link'),
    },
    {
      label: 'Gestão da rota do Link 3',
      action: () => console.log('Ação do Link'),
    },
    {
      label: 'Gestão da rota do Link 4',
      action: () => console.log('Ação do Link'),
    },
  ]

  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <BreadCrumb navigationLinks={exampleObj} color={'violet'} />
    </ThemeProvider>
  )

  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
