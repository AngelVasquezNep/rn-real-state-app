import React from 'react'
import { View, Image, TouchableHighlight } from 'react-native'
import { Text } from 'react-native-elements'
import { Categories } from 'components'
import { colors } from 'theme'
import styles from './styles'

const Titles = ({ title, link, data, titleStyles, handlePress = () => {} }) => {
  return (
    <Categories
      title={title}
      link={link}
      data={data}
      renderItem={({ item }) => (
        <TouchableHighlight
          onPress={() => handlePress(item)}
          underlayColor={colors.tertiary}
          style={{ borderRadius: 10 }}
        >
          <View style={styles.container}>
            <Image source={item.image} style={styles.imageBackground} />
            <Text h2 style={[styles.title, titleStyles]}>
              {item.title}
            </Text>
          </View>
        </TouchableHighlight>
      )}
    />
  )
}

export default Titles
