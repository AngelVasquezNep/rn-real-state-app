import React from 'react'
import { View, Text, FlatList, Image, Modal, Button, TouchableOpacity } from 'react-native'

import { OPERATION_TYPES_BIBLIO, PROPERTY_TYPES_BIBLIO } from 'services/seo'
import { SimpleCover, Tag } from 'components'
import { getImageCover, splitText } from 'utils'

import styles from './styles'

const PropertyLanding = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = React.useState(null)

  const property = navigation.getParam('property', {})

  const {
    title,
    state,
    address,
    amenities = [],
    operationType,
    propertyType,
    price,
    imagesJson = [],
    firstImage,
    ...rest
  } = property
  const { amount, currency } = price || {}

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <SimpleCover
        title={splitText(title, 17)}
        subtitle={state}
        image={getImageCover({ image: firstImage })}
        handleBack={() => navigation.goBack()}
      />

      <View style={styles.cardContainer}>
        <Text>{title}</Text>
      </View>

      <View style={styles.cardContainer}>
        <Text>{address}</Text>
      </View>

      <View style={styles.tags}>
        <Tag color="info" extraStyles={styles.tag}>
          <Text style={styles.tagText}>
            {OPERATION_TYPES_BIBLIO[operationType]}
          </Text>
        </Tag>

        <Tag color="primary" extraStyles={styles.tag}>
          <Text style={styles.tagText}>
            {PROPERTY_TYPES_BIBLIO[propertyType]}
          </Text>
        </Tag>

        <Tag color="primary" style={styles.tag}>
          <Text style={styles.price}>
            {amount} {currency}
          </Text>
        </Tag>
      </View>

      {selectedImage && (
        <Modal visible animationType="slide">
          <View style={{ flex: 1 }}>
            <Image
              style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
              source={getImageCover({ image: selectedImage })}
            />
          </View>
          <Button onPress={() => setSelectedImage(null)} title="Cerrar" />
        </Modal>
      )}

      <FlatList
        horizontal
        keyExtractor={(item, index) => String(index)}
        data={new Array(7).fill({})}
        data={imagesJson}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => setSelectedImage(item.url)}>
            <View style={styles.imageCarouselContainer}>
              <Image
                source={getImageCover({ image: item.url })}
                style={styles.imageCarousel}
              />
            </View>
          </TouchableOpacity>
        )}
      />

      {amenities.length > 0 && (
        <View style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Amenidades</Text>

          {amenities.map(({ name, id }, index) => (
            <Text key={id}>
              {index + 1} - {name}
            </Text>
          ))}
        </View>
      )}
    </View>
  )
}

export default PropertyLanding
