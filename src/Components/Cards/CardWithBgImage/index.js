import React from 'react'
import { Image, View } from 'react-native'
import { Text, Icon } from 'react-native-elements'
import propTypes from './propTypes'

import { getImageCover } from 'src/utils/Images'

import styles from './styles'

const CardWithBgImage = ({
  image,
  label = 'Cancún',
  sizeLabel = {},
  sizeIcon = 30,
  iconName = 'arrow-forward'
}) => {
  return (
    <View style={styles.wrapper}>
      <Image source={getImageCover({ image })} style={styles.image} />
      <View style={styles.controls}>
        <View style={styles.wrapperLabel}>
          <Text {...sizeLabel} style={styles.label}>
            {label}
          </Text>
        </View>
        <View style={styles.icon}>
          <Icon size={sizeIcon} name={iconName} color="white" />
        </View>
      </View>
    </View>
  )
}

CardWithBgImage.propTypes = propTypes

export { propTypes }
export default CardWithBgImage
