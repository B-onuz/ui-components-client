import React from 'react'
import CheckBox from './CheckBox.js'
import renderer from 'react-test-renderer'

test('CheckBox changes the class when hovered', () => {
  const component = renderer.create(<CheckBox />)
  let tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
