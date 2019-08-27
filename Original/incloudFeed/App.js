import React, {Component} from 'react';
import {Text, View} from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={{flex:1, flexDirection:"column"}}>
        <View style={{flex: 1, backgroundColor: 'red'}}>
          <Text> textInComponent </Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'blue'}}>
          <Text> text2 </Text>
        </View>
        <View style={{flex: 1, backgroundColor: 'green'}}>
          <Text> text3 </Text>
        </View>
      </View>
    );
  }
}
