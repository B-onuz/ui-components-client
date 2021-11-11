import React from 'react'
import HamburguerButton from './HamburguerButton.js'
import renderer from 'react-test-renderer'

test('HamburguerButton changes the class when hovered', () => {
  const component = renderer.create(<HamburguerButton />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
