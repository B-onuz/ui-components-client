import React from 'react'
import Select from './Select'
import { Flex, Box } from 'reflexbox'

export default {
  title: 'Select',
  component: Select,
}

export const SelectExample = () => (
  <Flex m={20}>
    <Box width={[1 / 2]}>
      <Select placeholder="Nome inteiro">
        <option value="valor4">Valor 1 exemplo teste com texto extenso no campo de opção </option>
        <option value="valor2">Valor 2</option>
        <option value="valor3">Valor 3</option>
        <option value="valor1">Valor 4</option>
        <option value="valor5">Valor 5</option>
        <option value="valor6">Valor 6</option>
        <option value="valor7">Valor 7</option>
        <option value="valor8">Valor 8</option>
      </Select>
    </Box>
  </Flex>
)
