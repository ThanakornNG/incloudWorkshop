import React, {Component} from 'react';
import {
  Text,
  View,
  ImageBackground,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {Card} from 'react-native-elements';

export default class JSONFeedScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: false,
      youtubes: [],
    };
  }

  componentDidMount() {
    this.feedData();
  }

  onClickItem = item => {
    //alert(JSON.stringify(item));
    //this.props.navigation.navigate("Youtube", {item})
  };

  feedData = async () => {

    this.setState({ isFetching: true, youtubes: [] });
    let result = await axios.get(
      'http://codemobiles.com/adhoc/youtubes/index_new.php?username=&password=password&type=foods',
    );
    alert(JSON.stringify(result));
    
    this.setState({ youtubes: result.data.youtubes, isFetching: false })
  };

  onClickItem = item => {
    alert(item.id);
  };

  renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        this.onClickItem(item);
      }}>
      <Card containerStyle={styles.listCard}>
        {/* top section */}
        <View style={styles.listCardView}>
          <Image source={{uri: item.avatar_image}} style={styles.listAvatar} />
          {/* title and subtitle */}
          <View style={styles.listTitleSubtitleContainer}>
            <Text style={styles.listTitle}>{item.title}</Text>
            <Text style={styles.listSubTitle}>{item.subtitle}</Text>
          </View>
        </View>
        {/* bottom section */}
        <Image
          source={{uri: item.youtube_image}}
          style={styles.listYoutbeImage}
        />
      </Card>
    </TouchableOpacity>
  );

  render() {
    return (
      <ImageBackground
        source={require('./assets/img/bg.png')}
        style={styles.container}>
        <FlatList
          refreshing={this.state.isFetching}
          onRefresh={this.feedData}
          style={{flex: 1}}
          data={this.state.youtubes}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list_header: {
    width: '100%',
    height: 100,
  },
  listCard: {
    overflow: 'hidden',
    flexDirection: 'column',
    marginBottom: 20,
    borderRadius: 20,
    padding: 0,
  },
  listCardView: {
    flexDirection: 'row',
    marginBottom: 16,
    height: 45,
    alignItems: 'center',
  },
  listAvatar: {
    width: 45,
    height: '100%',
    marginRight: 16,
  },
  listTitleSubtitleContainer: {
    flexDirection: 'column',
    marginRight: 16,
    flex: 1,
  },
  listTitle: {
    fontWeight: '700',
  },
  listSubTitle: {
    fontWeight: '100',
  },
  listYoutbeImage: {
    width: '100%',
    height: 190,
  },
});
