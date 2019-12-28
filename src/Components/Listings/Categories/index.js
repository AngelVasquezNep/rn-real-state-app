import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { FlatList } from 'react-native'
import BaseHeader from 'components/Listings/BaseHeader'

const Categories = ({
  data = [],
  title = 'Lo mejor en México',
  link = 'Ver más',
  keyExtractor = item => String(item.id),
  renderItem = () => null
}) => {
  return (
    <Fragment>
      <BaseHeader title={title} link={link} />
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </Fragment>
  )
}

Categories.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  keyExtractor: PropTypes.func
}

export default Categories
