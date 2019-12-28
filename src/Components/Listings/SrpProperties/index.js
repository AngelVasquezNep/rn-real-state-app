import React from 'react'
import PropTypes from 'prop-types'
import { Categories, SRPCard } from 'components'

const SrpProperties = ({ onCardPress = item => {}, cardType, ...rest }) => {
  return (
    <Categories
      renderItem={({ item }) => (
        <SRPCard handlePress={onCardPress} cardType={cardType} item={item} />
      )}
      {...rest}
    />
  )
}

SrpProperties.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  keyExtractor: PropTypes.func
}

export default SrpProperties
