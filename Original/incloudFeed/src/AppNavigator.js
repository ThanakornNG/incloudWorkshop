import React, {Component} from 'react';
import {createAppContainer, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import JSONFeedScreen from './JSONFeedScreen';

const AppStack = createStackNavigator(
  {
    Tabs: {
      screen: JSONFeedScreen,
      navigationOptions: {
        headerTitle: "JSON",
        headerStyle: { backgroundColor: "#339CED" },
        headerTitleStyle: { color: "#fff" }
      }
    }
  },
  { initialRouteName: "Tabs" }
);

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: {screen: HomeScreen},
      AppScene: {screen: AppStack}
    },
    {
      initialRouteName: 'Home',
    },
  ),
);
