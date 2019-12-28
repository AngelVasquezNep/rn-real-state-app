import React, { Component } from 'react'
import { View, Text } from 'react-native'

class CatchRenderError extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log('---------------------------------')
    console.log(new Date().toDateString())
    console.log(error, errorInfo)
    console.log('---------------------------------')
  }

  render() {
    if (this.state.hasError) {
      return (
        <View>
          <Text>Lo sentimos, ocurrió un error</Text>
        </View>
      )
    }

    return this.props.children
  }
}

export default CatchRenderError