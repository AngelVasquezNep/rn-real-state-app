import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

import { OPERATION_TYPES_BIBLIO, PROPERTY_TYPES_BIBLIO } from 'services/seo'
import { getImageCover, splitText } from 'utils'

import { Tag } from 'components'

import styles from './styles'

const PropertyCard = ({ property = {}, handlePress = property => {} }) => {
  const { image, title, price, state, propertyType, operationType } = property
  const { amount, currency } = price || {}

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={() => handlePress(property)}>
      <View style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <Image source={getImageCover({ image })} style={styles.cardImage} />
        </View>

        <View style={styles.cardContentContainer}>
          <View style={styles.cardContent}>
            <View>
              <View style={styles.cardHeader}>
                <Text style={styles.title}>{splitText(title, 40)}</Text>
              </View>
              <Text style={styles.stateLocation}>{state}</Text>
            </View>
            <View>
              <View style={styles.tags}>
                <Tag extraStyles={styles.wrapperTag}>
                  <Text style={styles.propertyType}>
                    {PROPERTY_TYPES_BIBLIO[propertyType]}
                  </Text>
                </Tag>
                <Tag color="primary" extraStyles={styles.wrapperTag}>
                  <Text style={styles.price}>
                    {amount} {currency}
                  </Text>
                </Tag>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.operationTypeWrapper}>
          <Tag color="info">
            <Text style={styles.operationType}>
              {OPERATION_TYPES_BIBLIO[operationType]}
            </Text>
          </Tag>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PropertyCard
