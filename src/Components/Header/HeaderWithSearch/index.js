import React from 'react'
import { COMPANY_NAME } from 'react-native-dotenv'
import { View, Text, StyleSheet } from 'react-native'

import { colors, fontSizes } from 'theme'

const HeaderWithSearch = () => {
  return (
    <View style={styles.wrapper}>
      <View style={[styles.flex, styles.titleContainer]}>
        <Text style={styles.title}>
          {COMPANY_NAME}
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  titleContainer: { minHeight: 50 },
  title: {
    fontSize: fontSizes.h2,
    fontWeight: 'bold',
    color: colors.secondary,
    alignContent: 'center',
    marginHorizontal: 10
  }
})

export default HeaderWithSearch
