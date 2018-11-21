import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Login from './src/screens/Login';
import Main from './src/screens/Main';
import Garage from './src/screens/Garage';

import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import AppNavigation from './src/components/Navigation/AppNavigation';
import AuthNavigation from './src/components/Navigation/AuthNavigation';

export default createSwitchNavigator(
  {
    Main: Main,
    AppNavigation: AppNavigation,
    AuthNavigation: AuthNavigation,
  },
  {
    initialRouteName: 'Main'
  }
);


// export default class App extends Component {
//   render() {
//     return (
//       <AppNavigator/>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   Login: {screen: Login},
//   Main: {screen: Main},
// })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
