import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs'
import {Header} from 'react-native-elements'

import Fb from './screens/fb';
import In from './screens/in';

export default class App extends React.Component() {
    render(){
        return(
          <View>
            <Header
            backgroundColor={'pink'}
            centerComponent={{
              text: 'Buzz App',
              style: { color: 'black', fontSize: 20 },
            }}
            >
            </Header>
            <AppContainer/>
          </View>
        )
      }
}


const TabNavigator = createBottomTabNavigator({
    Facebook: {screen: Fb},
    Instagram: {screen: In}
  })

  const AppContainer = createAppContainer(TabNavigator)
