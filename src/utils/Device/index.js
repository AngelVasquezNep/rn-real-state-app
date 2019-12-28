import { Dimensions } from 'react-native'

export function getDeviceDimensions() {
  const screenWidth = Math.round(Dimensions.get('window').width)
  const screenHeight = Math.round(Dimensions.get('window').height)

  return { screenWidth, screenHeight }
}
