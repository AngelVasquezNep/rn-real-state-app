import React, { Fragment } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  StatusBar,
  StyleSheet
} from 'react-native'
import { CatchRenderError } from 'components'

const WrapperLayoutApp = ({ Content, statusBarConfig = {}, ...rest }) => {
  return (
    <CatchRenderError>
      <StatusBar barStyle="dark-content" {...statusBarConfig} />
      <SafeAreaView>
        <ScrollView style={styles.scrollView}>
          <View style={styles.body}>
            <Content {...rest} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </CatchRenderError>
  )
}

const styles = StyleSheet.create({
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10
  }
})

export default WrapperLayoutApp
