import React, { Component } from 'react'
import { Text, View, ImageBackground, FlatList, StyleSheet } from 'react-native'

export default class JSONFeedScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("./assets/img/bg.png")}
        style={styles.container}
      >
        <FlatList
          style={{ flex: 1 }}
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
          keyExtractor={item => item.id}
        />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  list_header: {
    width: "100%",
    height: 100
  },
  listCard: {
    overflow: "hidden",
    flexDirection: "column",
    marginBottom: 20,
    borderRadius: 20,
    padding: 0
  },
  listCardView: {
    flexDirection: "row",
    marginBottom: 16,
    height: 45,
    alignItems: "center"
  },
  listAvatar: {
    width: 45,
    height: "100%",
    marginRight: 16
  },
  listTitleSubtitleContainer: {
    flexDirection: "column",
    marginRight: 16,
    flex: 1
  },
  listTitle: {
    fontWeight: "700"
  },
  listSubTitle: {
    fontWeight: "100"
  },
  listYoutbeImage: {
    width: "100%",
    height: 190
  }
});
