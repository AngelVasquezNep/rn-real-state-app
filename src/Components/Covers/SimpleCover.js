import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

import { colors, fontSizes } from 'theme'
import { getImageCover } from 'src/utils/Images'

const Cover = ({ title, subtitle, image, handleBack = () => {} }) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <TouchableOpacity
          hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
          onPress={handleBack}
        >
          <Image
            style={styles.iconImage}
            source={require('assets/images/icons/left-arrow.png')}
          />
        </TouchableOpacity>
      </View>
      {/* <Image source={getImageCover({ image })} style={styles.image} /> */}
      <Image source={image} style={styles.image} />
      <View style={styles.wrapperTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.2)'
  },
  image: {
    height: 300,
    width: '100%'
  },
  icon: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 2
  },
  iconImage: {
    zIndex: 2,
    width: 25,
    height: 25
  },
  wrapperTitle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 15,
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.25)'
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.h1 * 1.4
  },
  subtitle: {
    fontSize: fontSizes.h4,
    color: colors.white
  }
})

export default Cover
