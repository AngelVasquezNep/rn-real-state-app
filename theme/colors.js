const i = parseInt,
  r = Math.round

const sbcRip = function(d) {
  const l = d.length,
    RGB = {}
  if (l > 9) {
    d = d.split(',')
    if (d.length < 3 || d.length > 4) return null
    ;(RGB[0] = i(d[0].slice(4))),
      (RGB[1] = i(d[1])),
      (RGB[2] = i(d[2])),
      (RGB[3] = d[3] ? parseFloat(d[3]) : -1)
  } else {
    if (l === 8 || l === 6 || l < 4) return null
    if (l < 6)
      d =
        '#' +
        d[1] +
        d[1] +
        d[2] +
        d[2] +
        d[3] +
        d[3] +
        (l > 4 ? d[4] + '' + d[4] : '')
    ;(d = i(d.slice(1), 16)),
      (RGB[0] = (d >> 16) & 255),
      (RGB[1] = (d >> 8) & 255),
      (RGB[2] = d & 255),
      (RGB[3] =
        l === 9 || l === 5 ? r((((d >> 24) & 255) / 255) * 10000) / 10000 : -1)
  }
  return RGB
}

export const shadeBlendConvert = (p, from, to) => {
  if (
    typeof p !== 'number' ||
    p < -1 ||
    p > 1 ||
    typeof from !== 'string' ||
    (from[0] !== 'r' && from[0] !== '#') ||
    (typeof to !== 'string' && typeof to !== 'undefined')
  )
    return null
  var h = from.length > 9,
    h =
      typeof to === 'string'
        ? to.length > 9
          ? true
          : to === 'c'
          ? !h
          : false
        : h,
    b = p < 0,
    p = b ? p * -1 : p,
    to = to && to !== 'c' ? to : b ? '#000000' : '#FFFFFF',
    f = sbcRip(from),
    t = sbcRip(to)
  if (!f || !t) return null
  if (h)
    return (
      'rgb(' +
      r((t[0] - f[0]) * p + f[0]) +
      ',' +
      r((t[1] - f[1]) * p + f[1]) +
      ',' +
      r((t[2] - f[2]) * p + f[2]) +
      (f[3] < 0 && t[3] < 0
        ? ')'
        : ',' +
          (f[3] > -1 && t[3] > -1
            ? r(((t[3] - f[3]) * p + f[3]) * 10000) / 10000
            : t[3] < 0
            ? f[3]
            : t[3]) +
          ')')
    )
  else
    return (
      '#' +
      (
        0x100000000 +
        (f[3] > -1 && t[3] > -1
          ? r(((t[3] - f[3]) * p + f[3]) * 255)
          : t[3] > -1
          ? r(t[3] * 255)
          : f[3] > -1
          ? r(f[3] * 255)
          : 255) *
          0x1000000 +
        r((t[0] - f[0]) * p + f[0]) * 0x10000 +
        r((t[1] - f[1]) * p + f[1]) * 0x100 +
        r((t[2] - f[2]) * p + f[2])
      )
        .toString(16)
        .slice(f[3] > -1 || t[3] > -1 ? 1 : 3)
    )
}

export const alpha = (hexColor, alpha) => {
  const rgb = hexToRgb(hexColor)
  if (rgb === null) {
    return colors.lightGray
  }

  const { r, g, b } = rgb

  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

const colors = {
  primary: '#20C063',
  lightPrimary: '#dff0d8',
  secondary: '#3973E7',
  text: '#2A5082',
  purple: '#a9a2e7',
  textBlueBackground: '#d9edf7',
  textBlueBright: '#3a87ad',
  lightText: '#54698d',
  altText: '#16325c',
  badge: '#F5A623',
  badgeYellow: '#fcf9e2',
  border: '#D4E5FE',
  borderInput: '#a8b7c7',
  lightBorder: '#CFE1FF',
  frame: '#19325C',
  terciary: '#5E23DC',
  white: '#FFFFFF',
  info: 'gray',
  black: '#000000',
  gray: '#acb8cc',
  lightGray: '#F5F7FA',
  lighterGray: '#F7F8FA',
  darkGray: '#A8B7C7',
  grayBackground: '#fbfbfb',
  disabled: '#E0E5EE',
  danger: 'rgb(232, 1, 27)',
  success: '#27AE60',
  warning: '#f7a700',
  transparent: 'rgba(255, 255, 255, 0)',
  sell: '#5E23DC',
  rent: '#2A5082',
  darkGreen: '#26A257',
  boxShadow: '#c5cfde',
  info: '#31B0D5',
  // el gris usado de fondo en algunos botones documentado en absolutamente
  // ningún lado en los diseños/atomics y tratado como un negro con opacity 0.2
  tertiary: '#EFF1F5',

  outlineFrame: '#19325C',
  footerBg: '#28487d',
  lightBg: '#f4f6fa',

  alpha: alpha,
  facebook: '#3b5998',
  darkWarning: '#8b740a'
}

colors.lightSecondary = shadeBlendConvert(0.1, colors.secondary)
colors.darkSecondary = shadeBlendConvert(-0.1, colors.secondary)
colors.darkPrimary = shadeBlendConvert(-0.1, colors.primary)
colors.darkFrame = shadeBlendConvert(-0.1, colors.frame)
colors.darkText = shadeBlendConvert(-0.35, colors.text)

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)

  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

export default colors
