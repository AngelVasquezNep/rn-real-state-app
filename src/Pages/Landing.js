import React from 'react'
import { View } from 'react-native'
import { API_BASE_URL, PATH_LANDING_PAGE } from 'react-native-dotenv'
import { HeaderWithSearch } from 'components/Header'
import { Feedback, PropertyCard, Categories, Titles } from 'components'
import { useFetch } from 'Hooks'

import { states } from 'mocks'

const Landing = props => {
  const { response, ...rest } = useFetch({
    fullUrl: API_BASE_URL + PATH_LANDING_PAGE
  })

  return (
    <View style={{ flex: 1 }}>
      <HeaderWithSearch />

      <Titles
        title="Por estados"
        link={null}
        handlePress={item =>
          props.navigation.navigate('StateLanding', {
            stateLocation: item
          })
        }
        data={states.map(state => ({ ...state, title: state.name }))}
      />

      <Feedback {...rest}>
        {response &&
          response.categories &&
          response.categories.map(({ title, properties }, index) => (
            <Categories
              key={index}
              title={title}
              link={null}
              data={properties}
              renderItem={({ item }) => (
                <PropertyCard
                  property={{
                    ...item,
                    image: item.firstImage
                  }}
                  handlePress={property =>
                    props.navigation.navigate('Property', {
                      property
                    })
                  }
                />
              )}
            />
          ))}
      </Feedback>
    </View>
  )
}

export default Landing
