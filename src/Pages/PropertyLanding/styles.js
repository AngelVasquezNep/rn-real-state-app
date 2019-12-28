import { StyleSheet } from 'react-native'
import { colors } from 'theme'

const styles = StyleSheet.create({
  cardContainer: {
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: colors.border,
    borderWidth: 1,
    borderRadius: 10
  },
  cardTitle: {
    marginBottom: 10,
  },
  tags: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  tag: {
    marginRight: 10,
  },
  tagText: {
    color: colors.white,
  },
  priceWrapper: {
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  price: {
    color: colors.white,
  },
  imageCarouselContainer: {
    width: 200,
    height: 230,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  imageCarousel: {
    resizeMode: 'cover',
    borderRadius: 10,
    width: '100%',
    height: '100%'
  }
})

export default styles
