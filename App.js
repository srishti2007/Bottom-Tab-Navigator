import React from 'react';
import FaceBook from './screens/FaceBook'
import Instagram from './screens/Instagram'
import {createAppContainer} from 'react-navigation' 
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component{
  render(){
    return (
      <AppContainer/>
    );
  }
  
}

const TabNavigator = createBottomTabNavigator({
  Facebook:{screen:FaceBook},
  Instagram:{screen:Instagram}
})

const AppContainer = createAppContainer(TabNavigator)

