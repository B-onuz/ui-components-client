import React from 'react'
import styled from 'styled-components'
import { color } from 'styled-system'

const StyledLabel = styled.label`
  color: #555;
  ${color}
  font-size: 0.9em;
  font-weight: 600;
`

const Label = ({ children, required, ...rest }) => {
  return (
    <StyledLabel {...rest}>
      {required && <abbr title={'Campo obrigatório'}>*</abbr>}
      {' ' + children}
    </StyledLabel>
  )
}

export default Label
