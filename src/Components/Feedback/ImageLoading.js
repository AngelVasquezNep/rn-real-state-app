import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Loading } from 'components'
import { getImageCover } from 'utils'
import { colors } from 'theme'

const ImageLoading = ({ image, source, style, ...rest }) => {
  const [loading, setLoading] = React.useState(false)

  return (
    <View style={[styles.container, style]}>
      {loading && (
        <View style={[styles.loading, style]}>
          <Loading />
        </View>
      )}
      <Image
        {...rest}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
        source={source ? source : getImageCover({ image })}
        style={[styles.cardImage, style]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    height: '100%',
    width: '100%'
  },
  loading: {
    // zIndex: 10,
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    backgroundColor: colors.alpha(colors.border, 0.5),
  }
})

export default ImageLoading