import { StyleSheet } from 'react-native'
import { getDeviceDimensions } from 'utils'

import { colors, fontSizes } from 'theme'

const styles = StyleSheet.create({
  container: {
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    flexDirection: 'row',
    flex: 1,
    marginHorizontal: 10,
    borderRadius: 10,
    width: getDeviceDimensions().screenWidth * 0.7,
    position: 'relative'
  },
  imageBackground: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    flex: 1,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  title: {
    textAlign: 'center',
    color: colors.white,
    fontSize: fontSizes.h1,
    fontWeight: 'bold',
    letterSpacing: 1.5,
  }
})

export default styles