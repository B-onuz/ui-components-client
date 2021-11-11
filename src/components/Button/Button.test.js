import React from 'react'
import Button from './Button.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('Should render button', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Button>Hello Button</Button>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render button when color prop', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Button m={2}>{'Default'}</Button>
      <Button m={2} color={'default'}>
        {'Default'}
      </Button>
      <Button m={2} color={'primary'}>
        {'Primary'}
      </Button>
      <Button m={2} color={'secondary'}>
        {'Secondary'}
      </Button>
      <Button m={2} color={'fullDarkRed'}>
        {'fullDarkRed'}
      </Button>
      <Button m={2} color={'darkRed'}>
        {'darkRed'}
      </Button>
      <Button m={2} color={'lightRed'}>
        {'lightRed'}
      </Button>
      <Button m={2} color={'red'}>
        {'red'}
      </Button>
      <Button m={2} color={'orange'}>
        {'orange'}
      </Button>
      <Button m={2} color={'yellow'}>
        {'yellow'}
      </Button>
      <Button m={2} color={'olive'}>
        {'olive'}
      </Button>
      <Button m={2} color={'green'}>
        {'green'}
      </Button>
      <Button m={2} color={'teal'}>
        {'teal'}
      </Button>
      <Button m={2} color={'blue'}>
        {'blue'}
      </Button>
      <Button m={2} color={'violet'}>
        {'violet'}
      </Button>
      <Button m={2} color={'purple'}>
        {'purple'}
      </Button>
      <Button m={2} color={'pink'}>
        {'pink'}
      </Button>
      <Button m={2} color={'brown'}>
        {'brown'}
      </Button>
      <Button m={2} color={'grey'}>
        {'grey'}
      </Button>
      <Button m={2} color={'black'}>
        {'black'}
      </Button>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render button when size prop', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Button m={2} size={'small'}>
        {'Default'}
      </Button>
      <Button m={2} size={'medium'}>
        {'Primary'}
      </Button>
      <Button m={2} size={'big'}>
        {'Primary'}
      </Button>
      <Button m={2} size={'huge'}>
        {'Secondary'}
      </Button>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('Should render outlined button when outline prop', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Button m={2} outline>
        {'Outline button'}
      </Button>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
