import React from 'react'
import Alert from './Alert.js'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'

test('Alert', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <>
        <Alert m={10} color={'warning'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
        <Alert m={10} color={'success'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
        <Alert m={10} color={'info'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
        <Alert m={10} color={'danger'} title={`Exemplo de título`} message={`Este texto é exemplo de uma message`} />
      </>
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
