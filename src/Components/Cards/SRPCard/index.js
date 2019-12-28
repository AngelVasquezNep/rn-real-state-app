import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableHighlight } from 'react-native'
import CardWithBgImage, { propTypes as cardWithBgImagePropTypes } from 'components/Cards/CardWithBgImage'
import { colors } from 'theme'

import { SRPCardStyles } from './styles'

const SRPCard = ({ item, handlePress = item => {}, cardType = 'normal', ...rest }) => {
  const styles = {
    normal: SRPCardStyles.card,
    cardLarge: [SRPCardStyles.card, SRPCardStyles.cardLarge]
  }

  return (
    <View style={cardType ? styles[cardType] : styles.normal}>
      <TouchableHighlight
        onPress={() => handlePress(item)}
        accessibilityRole="link"
        underlayColor={colors.tertiary}
        style={SRPCardStyles.link}
      >
        <CardWithBgImage label={item.name} {...item} />
      </TouchableHighlight>
    </View>
  )
}

SRPCard.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    ...cardWithBgImagePropTypes
  }),
  cardType: PropTypes.oneOf(['normal', 'cardLarge'])
}

export default SRPCard
