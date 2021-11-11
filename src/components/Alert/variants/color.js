import Color from 'color'

export default (props) => {
  const color = props.theme.colors[props.color]
  const objColor = new Color(color)
  const bgColor = objColor.saturate(1.5).lighten(1).fade(0.9).toString()
  const shadowColor = objColor.saturate(1.5).lighten(1).fade(0.4).opaquer(0.7).toString()
  const textColor = objColor.fade(0.15).toString()
  return `
        color: ${color};
        background-color: ${bgColor};
        box-shadow: 0 0 3px ${shadowColor};
        & > p {
          color: ${textColor};
        }
    `
}
