import React from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import { Text } from 'react-native-elements'

import { colors } from 'theme'

const BaseHeader = ({ title = 'Title', link = 'link', onPress = () => {} }) => {
  const [active, setActive] = React.useState(false)
  return (
    <View style={styles.wrapper}>
      <Text h4 style={styles.title}>
        {title}
      </Text>
      <TouchableHighlight
        accessibilityRole="link"
        onPress={() => setActive(!active)}
        hitSlop={{ top: 30, left: 30, bottom: 30, right: 30 }}
      >
        <Text h5 style={styles.action}>
          {link}
        </Text>
      </TouchableHighlight>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 20,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    maxWidth: '80%',
    color: colors.text
  },
  action: {
    color: 'gray',
    color: colors.primary,
    textDecorationLine: 'underline'
  }
})

export default BaseHeader
