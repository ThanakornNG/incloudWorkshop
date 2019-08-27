import React, { Component } from "react";

import {
  createStackNavigator,
} from "react-navigation";
import HomeScreen from "./HomeScreen";
import RegisterScreen from "./RegisterScreen";

export default createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Register: { screen: RegisterScreen }
  },
  {
    initialRouteName: "Home"
  }
);
