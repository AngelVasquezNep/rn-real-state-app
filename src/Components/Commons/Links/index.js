import React from 'react'
import PropTypes from 'prop-types'
import { View, TouchableHighlight } from 'react-native'
import CardWithBgImage, { propTypes as cardWithBgImagePropTypes } from 'components/Cards/CardWithBgImage'
import { colors } from 'theme'

import { SRPCardStyles } from './styles'

const Link = () => (
  <TouchableHighlight
    onPress={() => handlePress(item)}
    accessibilityRole="link"
    underlayColor={colors.tertiary}
    style={SRPCardStyles.link}
  >
    <CardWithBgImage label={item.name} {...item} />
  </TouchableHighlight>
)
