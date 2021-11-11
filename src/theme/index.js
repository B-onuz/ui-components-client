const colors = {
  red: '#db2828',
  lightRed: '#ef4d5a',
  mediumRed: '#FF4F5D',
  darkRed: '#9c2543',
  fullDarkRed: '#550e33',
  orange: '#f2711c',
  yellow: '#fbbd08',
  olive: '#b5cc18',
  green: '#21BA45',
  teal: '#00b5ad',
  blue: '#2185d0',
  facebookBlue: '#3B5998',
  blueLink: '#4285F4',
  violet: '#6435c9',
  purple: '#a333c8',
  pink: '#e03997',
  brown: '#a5673f',
  grey: '#767676',
  textGrey: '#8D8D8D',
  lightGrey: '#6D6D6D',
  mediumGrey: '#838383',
  darkGrey: '#9A9A9A',
  boldGray: '#55555A',
  black: '#1b1c1d',
  white: '#fdfdfd',
  warning: '#7A4D05',
  success: '#1E561F',
  info: '#0E566C',
  danger: '#973937',
  cyan: '#1CB5AD',
  disabledGrey: '#ffffff1f',
  disabledGreyText: '#ffffff4d',
}

colors.primary = colors.lightRed
colors.secondary = colors.fullDarkRed
colors.default = '#e0e1e2'

const breakpoints = ['40em', '52em', '64em', '80em']

breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const fontSizes = [12, 14, 16, 20, 24, 32]

export default {
  fontFamily: `'Lato', sans-serif`,
  colors,
  fontSizes,
  breakpoints,
}
