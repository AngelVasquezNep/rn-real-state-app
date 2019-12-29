import { StyleSheet } from 'react-native'
import { getDeviceDimensions } from 'utils'
import { fontSizes, colors } from 'theme'

const styles = StyleSheet.create({
  cardContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,

    height: 160,
    flexDirection: 'row',
    marginVertical: 20,
    marginHorizontal: 10,
    flex: 1,
    zIndex: 10,
    borderRadius: 20,
    position: 'relative',

    width: getDeviceDimensions().screenWidth - 20
  },
  cardImageContainer: {
    flex: 1
  },
  cardImage: {
    width: '100%',
    height: '100%',
    borderRadius: 20
  },
  cardContentContainer: {
    flex: 2
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between'
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  title: {
    fontSize: fontSizes.h5,
    fontWeight: 'normal',
    paddingVertical: 0,
    marginVertical: 0
  },
  stateLocation: {
    color: colors.secondary
  },
  operationTypeWrapper: {
    flexDirection: 'row',
    position: 'absolute',
    top: 5,
    left: 5,
    zIndex: 1
  },
  propertyType: {
    color: colors.white
  },
  operationType: {
    color: colors.white
  },
  price: {
    color: colors.white,
    fontSize: fontSizes.p,
    fontWeight: 'bold'
  },
  wrapperTag: {
    marginLeft: 5,
    marginTop: 5
  },
  tags: {
    marginRight: -15,
    justifyContent: 'flex-end',
    // flexDirection: 'row-reverse',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})

export default styles