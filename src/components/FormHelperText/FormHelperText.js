import React from 'react'
import styled from 'styled-components'
import Typography from '../Typography'

const FormHelperText = ({ children, ...rest }) => {
  return children ? <Typography as={'span'} fontSize={'small'} children={children} {...rest}></Typography> : null
}

export default FormHelperText
