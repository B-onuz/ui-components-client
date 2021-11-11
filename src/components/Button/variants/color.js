import { variant } from 'styled-system'
import Color from 'color'

export default (props) => {
  const variants = Object.entries(props.theme.colors).reduce((acc, [key, value]) => {
    return {
      ...acc,
      [key]: {
        color: new Color(value).isDark() ? '#fff' : '#000',
        bg: value,
        borderColor: value,
      },
    }
  }, {})
  return variant({
    prop: 'color',
    variants,
  })
}
