const defaultCover = require('assets/images/cancun_cover.jpg')
const defaultCover_1 = require('assets/images/houses/house_1.jpg')
const defaultCover_2 = require('assets/images/houses/house_2.jpg')
const defaultCover_3 = require('assets/images/houses/house_3.jpg')
const defaultCover_4 = require('assets/images/houses/house_4.jpg')
const defaultCover_5 = require('assets/images/houses/house_5.jpg')
const defaultCover_6 = require('assets/images/houses/house_6.jpg')
const defaultCover_7 = require('assets/images/houses/house_7.jpg')

const defaultCovers = [
  defaultCover_1,
  defaultCover_2,
  defaultCover_3,
  defaultCover_4,
  defaultCover_5,
  defaultCover_6,
  defaultCover_7
]

export const getImageCover = (props = {}) => {
  // temporal solution, there is a problem with external images in emulator device
  return defaultCovers[parseInt(Math.random() * 7)]

  const { image } = props
  const cover = typeof image === 'string' ? { uri: image } : image

  return image ? cover : defaultCover
}
