import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative'
  },
  image: {
    borderRadius: 20,
    height: '100%',
    width: '100%'
  },
  controls: {
    flex: 1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 5,
    paddingBottom: 5,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    backgroundColor: 'rgba(12, 12, 12, 0.1)'
  },
  wrapperLabel: {},
  label: {
    fontWeight: '700',
    fontSize: 22,
    color: 'white'
  },
  icon: {
    height: 25,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }
})

export default styles