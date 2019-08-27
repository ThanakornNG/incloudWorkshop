import React, { Component } from 'react'
import { Text, View, ImageBackground } from 'react-native'

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('./assets/img/bg.png')}>
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <View
            style={{
              height: 200,
              width: 350,
              backgroundColor: '#FFF7',
              marginTop: 20,
              borderRadius: 20,
            }}></View>
        </View>
      </ImageBackground>
    )
  }
}
