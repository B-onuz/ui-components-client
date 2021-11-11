import React from 'react'
import TextField from './TextField'
import { Box, Flex } from 'reflexbox'

export default {
  title: 'TextField',
  component: TextField,
}

export const TextFieldExample = () => (
  <Flex flexWrap={'wrap'}>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="name" name={'name'} required label={'Nome'} m={2} placeholder={'Nome'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="lastname" name={'lastname'} required label={'Sobrenome'} m={2} placeholder={'Sobrenome'} error={'Este campo é obrigatório.'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} helperText={'Exemplo: John Doe'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="email" type="email" name={'email'} label={'Email'} m={2} placeholder={'Email'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="telefone" type="phone" name={'fullname'} label={'Telefone'} m={2} placeholder={'Telefone'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField id="fullname" name={'fullname'} label={'Exibir Como:'} m={2} placeholder={'Nome + Sobrenome'} />
    </Box>
    <Box width={[1, 1 / 2, 1 / 8]}>
      <TextField id="number" type={'number'} name={'number'} label={'Número'} m={2} placeholder={'Número'} />
    </Box>
  </Flex>
)

export const TextFieldMultiline = () => (
  <Flex flexWrap={'wrap'}>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField
        id="comment"
        name={'comment'}
        multiline
        required
        label={'Comentário'}
        m={2}
        placeholder={'Comentário'}
        inputProps={{ maxLength: 100 }}
      />
    </Box>
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextField
        id="comment"
        error={'Error message here'}
        name={'comment'}
        multiline
        required
        label={'Comentário'}
        m={2}
        placeholder={'Comentário'}
      />
    </Box>
  </Flex>
)
