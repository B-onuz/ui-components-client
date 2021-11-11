import React from 'react'
import SearchField from './SearchField'
import { Flex, Box } from 'reflexbox'

export default {
  title: 'SearchField',
  component: SearchField,
}

export const SearchFieldExample = () => (
  <Flex>
    <Box width={[1 / 2]} m={20}>
      <SearchField />
    </Box>
  </Flex>
)
