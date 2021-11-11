import React from 'react'
import Fieldset from './Fieldset.js'
import renderer from 'react-test-renderer'

test('Fieldset changes the class when hovered', () => {
  const component = renderer.create(<Fieldset />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
