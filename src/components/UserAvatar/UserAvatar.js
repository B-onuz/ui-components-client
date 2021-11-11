import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { space } from 'styled-system'
import { color } from './variants'
import Typography from '../Typography'

const StyledUserAvatar = styled.div`
  ${space}
  display: flex;
  align-items: center;
`

const InitialsWrapper = styled.div`
  ${color}
  width: 40px;
  padding: 10px 0;
  text-align: center;
  background: ${({ theme, color }) => `${theme.colors[color]}`};
  border-radius: 50%;
  margin-right: 10px;
`

const UserAvatar = ({ children, userName, color, displayName, nameColor, ...rest }) => {
  const [nameInitials, setNameInitials] = useState()

  useEffect(() => {
    handleInitials(userName)
  }, [])

  const handleInitials = (name) => {
    let initials = name.match(/\b\w/g) || []
    initials = initials.length > 1 ? ((initials.shift() || '') + (initials.pop() || '')).toUpperCase() : name.substring(0, 2).toUpperCase()
    setNameInitials(initials)
  }

  return (
    <StyledUserAvatar {...rest}>
      <InitialsWrapper color={color} m={0}>
        {nameInitials}
      </InitialsWrapper>
      {!!displayName && (
        <Typography color={nameColor} m={0}>
          {displayName}
        </Typography>
      )}
    </StyledUserAvatar>
  )
}

UserAvatar.defaultProps = {
  color: 'black',
  nameColor: 'black',
}

export default UserAvatar
