import React from 'react'
import Pagination from './Pagination.js'
import renderer from 'react-test-renderer'
import { ThemeProvider } from 'styled-components'
import theme from '../../theme'
import 'jest-styled-components'

test('when render Pagination', () => {
  const component = renderer.create(
    <ThemeProvider theme={theme}>
      <Pagination
        color={'primary'}
        m={20}
        onChangePage={() => {}}
        onPrevPage={() => {}}
        onNextPage={() => {}}
        total={20}
        page={11}
        onLazyChangePage={() => {}}
      />
    </ThemeProvider>
  )
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
