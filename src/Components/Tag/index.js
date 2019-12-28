import React from 'react'
import { View, StyleSheet } from 'react-native'

import { colors } from 'theme'

const backgroundColors = Object.keys(colors)
  .map(key =>
    typeof colors[key] === 'string'
      ? { [key]: { backgroundColor: String(colors[key]).toLowerCase() } }
      : null
  )
  .filter(Boolean)
  .reduce((acc, color) => ({ ...acc, ...color }), {})

const Tag = ({ extraStyles, children, color = 'lightSecondary' }) => {
  return (
    <View style={[styles.tagContainer, styles[color], extraStyles]}>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  tagContainer: {
    marginHorizontal: 'auto',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10
  },
  ...backgroundColors
})

export default Tag
