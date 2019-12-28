import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { Text, Icon } from 'react-native-elements'

import { colors } from 'theme'
import { getImageCover } from 'src/utils/Images'

const Cover = ({
  title,
  subtitle,
  image,
  iconName = 'arrow-back',
  sizeIcon = 30,
  handleBack = () => {}
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Icon
          onPress={handleBack}
          size={sizeIcon}
          name={iconName}
          color="white"
        />
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
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
  wrapperTitle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 15,
    paddingHorizontal: 15,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
  },
  title: {
    color: colors.white,
    fontSize: 50,
    fontWeight: '100'
  },
  subtitle: {
    fontSize: 25,
    color: colors.white
  },
})

export default Cover
