import React from 'react'
import { View, Text } from 'react-native'
import Loading from './Loading'

const Feedback = ({
  loadingSize = 'large',
  loading,
  success,
  error,
  children
}) => {
  if (loading) {
    return <Loading size={loadingSize} />
  }
  if (success) {
    return children || null
  }
  if (error) {
    return (
      <View>
        <Text>Tuvimos un error:</Text>
        <Text>{JSON.stringify(error)}</Text>
      </View>
    )
  }
  return null
}

export { Loading }
export default Feedback
