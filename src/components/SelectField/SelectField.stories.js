import React, { useState } from 'react'
import SelectField from './SelectField'
import { Box, Flex } from 'reflexbox'

export default {
  title: 'SelectField',
  component: SelectField,
}

export const Controlled = () => {
  const [selected, setSelected] = useState('valor4')
  const handleChangeSelect = (e) => {
    setSelected(e.target.value)
  }
  return (
    <Flex flexWrap={'wrap'}>
      <Box width={[1, 1 / 2, 1 / 3]}>
        <SelectField value={selected} onChange={handleChangeSelect} id="name" name={'name'} required label={'Nome'} m={2} placeholder={'Nome'}>
          <option value="valor1">Valor 1</option>
          <option value="valor2">Valor 2</option>
          <option value="valor3">Valor 3</option>
          <option value="valor4">Valor 4</option>
          <option value="valor5">Valor 5</option>
          <option value="valor6">Valor 6</option>
          <option value="valor7">Valor 7</option>
          <option value="valor8">Valor 8</option>
        </SelectField>
      </Box>
    </Flex>
  )
}

export const ErrorMessage = () => {
  const [selected, setSelected] = useState('valor4')
  const handleChangeSelect = (e) => {
    setSelected(e.target.value)
  }
  return (
    <Flex flexWrap={'wrap'}>
      <Box width={[1, 1 / 2, 1 / 3]}>
        <SelectField
          value={selected}
          error={'Error message'}
          onChange={handleChangeSelect}
          id="name"
          name={'name'}
          required
          label={'Nome'}
          m={2}
          placeholder={'Nome'}
        >
          <option value="valor1">Valor 1</option>
          <option value="valor2">Valor 2</option>
          <option value="valor3">Valor 3</option>
          <option value="valor4">Valor 4</option>
          <option value="valor5">Valor 5</option>
          <option value="valor6">Valor 6</option>
          <option value="valor7">Valor 7</option>
          <option value="valor8">Valor 8</option>
        </SelectField>
      </Box>
    </Flex>
  )
}

export const HelperText = () => {
  const [selected, setSelected] = useState('valor4')
  const handleChangeSelect = (e) => {
    setSelected(e.target.value)
  }
  return (
    <Flex flexWrap={'wrap'}>
      <Box width={[1, 1 / 2, 1 / 3]}>
        <SelectField
          value={selected}
          helperText={'Helper text'}
          onChange={handleChangeSelect}
          id="name"
          name={'name'}
          required
          label={'Nome'}
          m={2}
          placeholder={'Nome'}
        >
          <option value="valor1">Valor 1</option>
          <option value="valor2">Valor 2</option>
          <option value="valor3">Valor 3</option>
          <option value="valor4">Valor 4</option>
          <option value="valor5">Valor 5</option>
          <option value="valor6">Valor 6</option>
          <option value="valor7">Valor 7</option>
          <option value="valor8">Valor 8</option>
        </SelectField>
      </Box>
    </Flex>
  )
}
