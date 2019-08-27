import React, {Component} from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
} from 'react-navigation';
import HomeScreen from './HomeScreen';
import JSONFeedScreen from './JSONFeedScreen';

export default createAppContainer(
  createSwitchNavigator(
    {
      Home: {screen: HomeScreen},
      JSONFeedScreen: {
        screen: JSONFeedScreen,
      },
    },
    {
      initialRouteName: 'Home',
    },
  ),
);
