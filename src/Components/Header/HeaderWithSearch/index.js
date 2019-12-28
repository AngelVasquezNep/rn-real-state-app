import React, { useState } from 'react'
import { View, StyleSheet, TouchableHighlight } from 'react-native'
import { Input, Text, Icon } from 'react-native-elements'

import { colors } from 'theme'

const HeaderWithSearch = ({ onSearch = search => {} }) => {
  const [isSearchFocus, setFocus] = useState(false)
  return (
    <View style={styles.wrapper}>
      {!isSearchFocus ? (
        <View style={[styles.flex, styles.title]}>
          <Text h2 style={styles.icon}>
            Neximo
          </Text>
        </View>
      ) : (
        <View style={styles.wrapper}>
          <View style={styles.flex}>
            <Input
              placeholder="Buscar"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
          </View>
          <View style={styles.icon}>
            <TouchableHighlight onPress={() => setFocus(false)}>
              <Icon size={30} name="cancel" />
            </TouchableHighlight>
          </View>
        </View>
      )}
      {!isSearchFocus && (
        <View style={styles.icon}>
          <TouchableHighlight onPress={() => setFocus(true)}>
            <Icon size={30} name="search" />
          </TouchableHighlight>
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  flex: { flex: 1 },
  redBorder: { borderColor: 'red', borderWidth: 1 },
  wrapper: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10
  },
  title: { minHeight: 50 },
  icon: {
    color: colors.secondary,
    display: 'flex',
    alignContent: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
    marginHorizontal: 10
  }
})

export default HeaderWithSearch
