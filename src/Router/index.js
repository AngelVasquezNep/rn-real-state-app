import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { WrapperApp } from 'Components/Layouts'
import { Landing, StateLanding, PropertyLanding } from 'Pages'

const LandingView = props => {
  return <WrapperApp {...props} Content={Landing} />
}

const StateLandingView = props => {
  return <WrapperApp {...props} Content={StateLanding} />
}

const PropertyView = props => {
  return <WrapperApp {...props} Content={PropertyLanding} />
}

const AppNavigator = createStackNavigator(
  {
    Landing: {
      screen: LandingView
    },
    StateLanding: {
      screen: StateLandingView
    },
    Property: {
      screen: PropertyView
    },
  },
  {
    headerMode: 'none'
  }
)

export default createAppContainer(AppNavigator)
