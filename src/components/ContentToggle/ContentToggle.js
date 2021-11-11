import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'

const StyledContentToggle = styled.div`
  ${color}
  ${space}
`

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #dadada;
  > h2 {
    margin: 0;
  }
  :hover {
    cursor: pointer;
  }
`

const ContentBox = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.1s ease-out;
`

const ContentToggle = ({ startVisible, contentTitle, children, ...rest }) => {
  const [visibility, setVisibility] = useState(startVisible)
  const contentRef = useRef()

  const displayContent = () => {
    if (!visibility) {
      return (contentRef.current.style.maxHeight = null)
    } else {
      return (contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px')
    }
  }

  useEffect(() => {
    displayContent()
  }, [visibility])

  return (
    <StyledContentToggle {...rest} my={2}>
      <StyledTitle onClick={() => setVisibility(!visibility)}>
        <h2>{contentTitle}</h2>
        <FontAwesomeIcon icon={visibility ? faEye : faEyeSlash} size="lg" color="#838383" />
      </StyledTitle>
      <ContentBox ref={contentRef}>{children}</ContentBox>
    </StyledContentToggle>
  )
}

ContentToggle.defaultProps = {
  startVisible: false,
}

export default ContentToggle
