import styled from 'styled-components'
import { color, space, typography, compose } from 'styled-system'

const SubTitle = styled.h1`
  font-size: 16px;
  color: #00000099;
  font-weight: 400;
  margin: 0;
  ${compose(color, space, typography)}
`

export default SubTitle
