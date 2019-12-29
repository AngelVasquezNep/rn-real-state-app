import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import { colors } from 'theme'

const Loading = ({ size = 'large', color, style = {} }) => {
  return (
    <View style={[styles.loadingContainer, style]}>
      <ActivityIndicator size={size} color={color || colors.secondary} />
    </View>
  )
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    height: 80,
  }
})

export default Loading