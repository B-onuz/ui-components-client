import React, { useState } from 'react'
import CheckBox from './CheckBox'
import { Flex, Box } from 'reflexbox/styled-components'

export default {
  title: 'CheckBox',
  component: CheckBox,
}

export const CheckBoxExample = () => (
  <Flex flexWrap={'wrap'}>
    <Box width={[1, 1 / 2, 1 / 3]} m={2}>
      <CheckBox id="tributarioa" label={'Tributário'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]} m={2}>
      <CheckBox id="tributariob" label={'Tributário'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]} m={2}>
      <CheckBox id="tributarioc" label={'Tributário'} />
    </Box>
  </Flex>
)

export const ControlledCheckbox = () => {
  const [acceptConditions, setAcceptConditions] = useState(false)

  const handleChangeAcceptConditions = (event) => {
    const target = event.target
    setAcceptConditions(target.checked)
  }

  return <CheckBox id="tributarioa" checked={acceptConditions} onChange={handleChangeAcceptConditions} label={'Aceite os termos e condições'} />
}
