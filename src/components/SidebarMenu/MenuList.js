import styled from 'styled-components'

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  transition: 0.2s linear;
  transform: translateX(100%);
  opacity: 0.5;
  ${({ isOpen }) =>
    isOpen &&
    `
        transform: translateX(0);
        opacity: 1;
    `}
`

export default MenuList
