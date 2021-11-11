import React from 'react'
import Logo from './Logo.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import logoImg from '../../assets/logo_white.svg'
import 'jest-styled-components'

test('Logo changes the class when hovered', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Logo src={logoImg} alt={'B-onuz Logo - legal services'} />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
