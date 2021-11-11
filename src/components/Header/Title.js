import styled from 'styled-components'
import { color, space, typography, compose } from 'styled-system'

const Title = styled.h1`
  margin: 0;
  ${compose(color, typography, space)}
  font-size: 1em !important;
  @media only screen and (min-width: 468px) {
    white-space: nowrap;
    margin-left: 8px;
  }
`

Title.defaultProps = {
  color: 'darkRed',
}

export default Title
