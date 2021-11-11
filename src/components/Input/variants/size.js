import { variant } from 'styled-system'

export default (props) => {
  return variant({
    prop: 'size',
    variants: {
      huge: {
        fontSize: 4,
      },
      big: {
        fontSize: 3,
      },
      medium: {
        fontSize: 2,
      },
      small: {
        fontSize: 1,
      },
    },
  })
}
