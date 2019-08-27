import React, { Component } from 'react'
import { Text, View, ImageBackground, TextInput } from 'react-native'
import Icon from "react-native-vector-icons/FontAwesome";
import AsyncStorage from "@react-native-community/async-storage";

class TextEntry extends Component {
  render() {
    return (
      <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
            <Icon
              name={this.props.iconName}
              size={40}
              style={{ width: 40 }}
              color="#0008"
            />
            <TextInput
              autoCapitalize="none"
              secureTextEntry={this.props.isSecure}
              style={{
                flex: 1,
                borderColor: "#0005",
                borderWidth: 1,
                marginLeft: 16,
                height: 40,
                borderRadius: 5,
                paddingLeft: 8
              }}
              placeholder={this.props.defaultHolder}
            />
          </View>
    );
  }
}

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground
        style={{flex: 1}}
        source={require('./assets/img/bg.png')}>
        <View
          style={{
            backgroundColor: "#FFF7",
            margin: 16,
            padding: 16,
            borderRadius: 5
          }}
        >
          {/* UserName section */}
          <TextEntry iconName="user" isSecure={false} defaultHolder="Username"/>
          <TextEntry iconName="lock" isSecure={true} defaultHolder="Password"/>
        </View>
      </ImageBackground>
    )
  }
}
