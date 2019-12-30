import React from 'react'
import { API_BASE_URL, PATH_SEARCH_PROPERTIES } from 'react-native-dotenv'
import { View } from 'react-native'

import { PropertyCard, SimpleCover, Feedback } from 'components'
import { useFetch } from 'Hooks'
import { objetToUrlParams } from 'utils'

const StateLanding = ({ navigation }) => {
  const stateLocation = navigation.getParam('stateLocation', {})

  const { response, ...rest } = useFetch({
    fullUrl:
      API_BASE_URL + PATH_SEARCH_PROPERTIES +
      objetToUrlParams({
        limit: 12,
        selected_locations: `::::${stateLocation.address}`
      })
  })

  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <SimpleCover
        title={stateLocation.title}
        image={stateLocation.image}
        handleBack={() => navigation.goBack()}
      />

      <Feedback {...rest}>
        {response && response.results && response.results.length > 0 ? (
          response.results.map((property, index) => (
            <PropertyCard
              key={property.id}
              property={{
                ...property,
                image: property.firstImage
              }}
              handlePress={property =>
                navigation.navigate('Property', {
                  property
                })
              }
            />
          ))
        ) : (
          <p>Sin resultados</p>
        )}
      </Feedback>
    </View>
  )
}

export default StateLanding
