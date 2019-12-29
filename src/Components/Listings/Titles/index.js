import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native'
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
            <Text style={[styles.title, titleStyles]}>
              {item.title}
            </Text>
          </View>
        </TouchableHighlight>
      )}
    />
  )
}

export default Titles
