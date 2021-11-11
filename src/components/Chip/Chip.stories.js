import React from 'react'
import Chip from './Chip'
import { Flex, Box } from 'reflexbox'
import { space } from 'styled-system'

export default {
  title: 'Chip',
  component: Chip,
}

export const ChipExample = () => (
  <Flex m={3}>
    <Chip mr={2} color={'primary'} text={'status'} />
    <Chip mr={2} color={'warning'} text={'status'} />
    <Chip mr={2} color={'info'} text={'status'} />
    <Chip mr={2} color={'success'} text={'status'} />
    <Chip mr={2} color={'orange'} text={'status'} />
    <Chip mr={2} color={'yellow'} text={'status'} />
    <Chip mr={2} color={'secondary'} text={'status'} />
    <Chip mr={2} color={'fullDarkRed'} text={'status'} />
    <Chip mr={2} color={'lightRed'} text={'status'} />
    <Chip mr={2} color={'olive'} text={'status'} />
    <Chip mr={2} color={'blue'} text={'status'} />
    <Chip mr={2} color={'teal'} text={'status'} />
  </Flex>
)
