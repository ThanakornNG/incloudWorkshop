import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
export default createAppContainer(
  createStackNavigator(
    {
      Home: {screen: HomeScreen},
    },
    {
      initialRouteName: 'Home',
    },
  ),
);
