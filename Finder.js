import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
  StatusBar,
  TouchableOpacity,
  Alert,
  Linking,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {TextInput, Button} from 'react-native-paper';
const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red},${green},${blue})`;
};
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      musics: [],
    };
  }
  fetchMusic(text) {
    this.setState({text});
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=track.search&track=${text}&api_key=577bc22e1d9e8ddc826719c1f0c246eb&format=json`,
    )
      .then(data => data.json())
      .then(music => {
        this.setState({musics: music.results.trackmatches.track.slice(0, 16)});
      });
  }
  renderItem = ({item}) => {
    return (
      <ScrollView style={{marginBottom: 5}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`${item.url}`);
          }}
          style={{flexDirection: 'row'}}>
          <View>
            <Text
              style={{
                fontSize: 28,
                marginLeft: 10,
                fontStyle: 'italic',
                color: 'black',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                fontStyle: 'italic',
                color: 'red',
              }}>
              Artist-
              {item.artist}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  renderSeperator = () => {
    return (
      <View style={{height: 2, width: '100%', backgroundColor: 'black'}}></View>
    );
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="Search Music"
          style={{
            color: 'black',

            textAlign: 'center',
            backgroundColor: '#d3e0d6',
            fontSize: 23,
          }}
          onChangeText={text => {
            this.fetchMusic(text);
          }}
          value={this.state.text}
        />

        <FlatList
          style={{backgroundColor: `${randomRgb()}`}}
          data={this.state.musics}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeperator}
        />
      </View>
    );
  }
}
class Home2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      albums: [],
    };
  }
  fetchAlbum(text) {
    this.setState({text});
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=album.search&album=${text}&api_key=577bc22e1d9e8ddc826719c1f0c246eb&format=json`,
    )
      .then(data => data.json())
      .then(album => {
        this.setState({albums: album.results.albummatches.album.slice(0, 16)});
      });
  }
  renderItem = ({item}) => {
    return (
      <ScrollView style={{marginBottom: 5}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`${item.url}`);
          }}
          style={{flexDirection: 'row'}}>
          <View>
            <Text
              style={{
                fontSize: 28,
                marginLeft: 10,
                fontStyle: 'italic',
                color: `${randomRgb()}`,
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                fontStyle: 'italic',
                color: 'black',
              }}>
              Artist-
              {item.artist}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  renderSeperator = () => {
    return (
      <View style={{height: 2, width: '100%', backgroundColor: 'black'}}></View>
    );
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="Search Album"
          style={{
            color: 'black',

            textAlign: 'center',
            backgroundColor: '#d3e0d6',
            fontSize: 23,
          }}
          onChangeText={text => {
            this.fetchAlbum(text);
          }}
          value={this.state.text}
        />

        <FlatList
          style={{}}
          data={this.state.albums}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeperator}
        />
      </View>
    );
  }
}
class Home3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      artists: [],
    };
  }
  fetchArtist(text) {
    this.setState({text});
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${text}&api_key=577bc22e1d9e8ddc826719c1f0c246eb&format=json`,
    )
      .then(data => data.json())
      .then(artistlist => {
        this.setState({
          artists: artistlist.results.artistmatches.artist.slice(0, 16),
        });
      });
  }
  renderItem = ({item}) => {
    return (
      <ScrollView style={{marginBottom: 5}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`${item.url}`);
          }}
          style={{flexDirection: 'row'}}>
          <View>
            <Text
              style={{
                fontSize: 28,
                marginLeft: 10,
                fontStyle: 'italic',
                color: 'black',
              }}>
              {item.name}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  renderSeperator = () => {
    return (
      <View style={{height: 2, width: '100%', backgroundColor: 'black'}}></View>
    );
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="Search Artist"
          style={{
            color: 'black',

            textAlign: 'center',
            backgroundColor: '#d3e0d6',
            fontSize: 23,
          }}
          onChangeText={text => {
            this.fetchArtist(text);
          }}
          value={this.state.text}
        />

        <FlatList
          style={{backgroundColor: `${randomRgb()}`}}
          data={this.state.artists}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeperator}
        />
      </View>
    );
  }
}
class Home4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      genre: [],
    };
  }
  fetchGenre(text) {
    this.setState({text});
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${text}&api_key=577bc22e1d9e8ddc826719c1f0c246eb&format=json`,
    )
      .then(data => data.json())
      .then(genres => {
        this.setState({genre: genres.topartists.artist.slice(0, 21)});
      });
  }
  renderItem = ({item}) => {
    return (
      <ScrollView style={{marginBottom: 5}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`${item.url}`);
          }}
          style={{flexDirection: 'row'}}>
          <View style={{backgroundColor: `${randomRgb()}`, flex: 1}}>
            <Text
              style={{
                fontSize: 28,
                marginLeft: 10,
                fontStyle: 'italic',
                color: 'black',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                fontStyle: 'italic',
                color: 'black',
              }}>
              {item.url}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  renderSeperator = () => {
    return (
      <View style={{height: 2, width: '100%', backgroundColor: 'black'}}></View>
    );
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="Search Genre"
          style={{
            color: 'black',

            textAlign: 'center',
            backgroundColor: '#d3e0d6',
            fontSize: 23,
          }}
          onChangeText={text => {
            this.fetchGenre(text);
          }}
          value={this.state.text}
        />

        <FlatList
          style={{backgroundColor: '#3b5998'}}
          data={this.state.genre}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeperator}
        />
      </View>
    );
  }
}
class Home5 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      musics: [],
    };
  }
  fetchMusic(text) {
    this.setState({text});
    fetch(
      `http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=${text}&api_key=577bc22e1d9e8ddc826719c1f0c246eb&format=json`,
    )
      .then(data => data.json())
      .then(music => {
        this.setState({musics: music.toptracks.track.slice(0, 16)});
      });
  }
  renderItem = ({item}) => {
    return (
      <ScrollView style={{marginBottom: 5}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <TouchableOpacity
          onPress={() => {
            Linking.openURL(`${item.url}`);
          }}
          style={{flexDirection: 'row'}}>
          <View>
            <Text
              style={{
                fontSize: 28,
                marginLeft: 10,
                fontStyle: 'italic',
                color: 'black',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                fontSize: 18,
                marginLeft: 10,
                fontStyle: 'italic',
                color: 'red',
              }}>
              Views-
              {item.playcount}
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    );
  };
  renderSeperator = () => {
    return (
      <View style={{height: 2, width: '100%', backgroundColor: 'black'}}></View>
    );
  };
  render() {
    return (
      <View>
        <TextInput
          placeholder="Search Music"
          style={{
            color: 'black',

            textAlign: 'center',
            backgroundColor: '#d3e0d6',
            fontSize: 23,
          }}
          onChangeText={text => {
            this.fetchMusic(text);
          }}
          value={this.state.text}
        />

        <FlatList
          style={{backgroundColor: `${randomRgb()}`}}
          data={this.state.musics}
          renderItem={this.renderItem}
          keyExtractor={(item, index) => index}
          ItemSeparatorComponent={this.renderSeperator}
        />
      </View>
    );
  }
}
class Home6 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      currentPlayer: 1,
    };
  }
  componentDidMount() {
    this.initializeGame();
  }
  initializeGame = () => {
    this.setState({
      gameState: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      currentPlayer: 1,
    });
  };
  renderIcon = (row, column) => {
    var value = this.state.gameState[row][column];
    switch (value) {
      case 1:
        return <Icon name="close" style={styles.tilex}></Icon>;
      case -1:
        return <Icon name="circle-thin" style={styles.tileo}></Icon>;
      default:
        return <View />;
    }
  };
  onTilePress = (row, col) => {
    var value = this.state.gameState[row][col];
    if (value !== 0) {
      return;
    }
    var currentPlayer = this.state.currentPlayer;
    var arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr});
    var nextPlayer = (currentPlayer == 1) ? -1 : 1;
    this.setState({currentPlayer: nextPlayer});
    var winner = this.gameWinner();
    if (winner == 1) {
      Alert.alert('Player 1 won');
      this.initializeGame();
    } else if (winner == -1) {
      Alert.alert('Player 2 won',"Thank You");
      this.initializeGame();
    }
  };
  gameWinner = () => {
    const NUM_TILES = 3;
    var sum;
    var arr = this.state.gameState;
    //check rows
    for (var i = 0; i < NUM_TILES; i++) {
      sum = arr[i][0] + arr[i][1] + arr[i][2];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }
    for (var i = 0; i < NUM_TILES; i++) {
      sum = arr[0][i] + arr[1][i] + arr[2][i];
      if (sum == 3) {
        return 1;
      } else if (sum == -3) {
        return -1;
      }
    }
    sum = arr[0][0] + arr[1][1] + arr[2][2];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }
    sum = arr[0][2] + arr[1][1] + arr[2][0];
    if (sum == 3) {
      return 1;
    } else if (sum == -3) {
      return -1;
    }
    return 0;
  };
  onNewGamePress = () => {
    this.initializeGame();
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.onTilePress(0, 0)}
            style={[styles.tile, {borderLeftWidth: 0, borderTopWidth: 0}]}>
            {this.renderIcon(0, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(0, 1)}
            style={[styles.tile, {borderTopWidth: 0}]}>
            {this.renderIcon(0, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(0, 2)}
            style={[styles.tile, {borderRightWidth: 0, borderTopWidth: 0}]}>
            {this.renderIcon(0, 2)}
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.onTilePress(1, 0)}
            style={[styles.tile, {borderLeftWidth: 0}]}>
            {this.renderIcon(1, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(1, 1)}
            style={styles.tile}>
            {this.renderIcon(1, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(1, 2)}
            style={[styles.tile, {borderRightWidth: 0}]}>
            {this.renderIcon(1, 2)}
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() => this.onTilePress(2, 0)}
            style={[styles.tile, {borderLeftWidth: 0, borderBottomWidth: 0}]}>
            {this.renderIcon(2, 0)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(2, 1)}
            style={[styles.tile, {borderBottomWidth: 0}]}>
            {this.renderIcon(2, 1)}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.onTilePress(2, 2)}
            style={
              [styles.tile, {borderRightWidth: 0, borderBottomWidth: 0}]
            }>
            {this.renderIcon(2, 2)}
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 50}}></View>
        <Button onPress={this.onNewGamePress}>New Game</Button>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop:50,
    backgroundColor:"#b0d4e8"
  },
  tile: {
    
    borderWidth: 10,
    width: 100,
    height: 100,
  },
  tilex: {
    marginLeft:15,
    marginTop:10,
    color: 'red',
    fontSize: 60,
  },
  tileo: {
    color: 'green',
    fontSize: 60,
    marginLeft:15,
    marginTop:10
  },
});
const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Icon name={'music'} size={20}></Icon>
          </View>
        ),
        tabBarLabel: 'Music',
      },
    },
    Home2: {
      screen: Home2,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Icon name={'book'} size={20}></Icon>
          </View>
        ),
        tabBarLabel: 'Album',
      },
    },
    Home3: {
      screen: Home3,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Icon name={'group'} size={20}></Icon>
          </View>
        ),
        tabBarLabel: 'Artist',
      },
    },

    Home4: {
      screen: Home4,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Icon name={'flash'} size={20}></Icon>
          </View>
        ),
        tabBarLabel: 'Trending',
      },
    },
    Home5: {
      screen: Home5,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Icon name={'fire'} size={20}></Icon>
          </View>
        ),
        tabBarLabel: 'Singles',
      },
    },
    Home6: {
      screen: Home6,
      navigationOptions: {
        tabBarIcon: () => (
          <View>
            <Icon name={'gamepad'} size={20}></Icon>
          </View>
        ),
        tabBarLabel: 'Game',
      },
    },
  },
  {
    shifting: false,
    initialRouteName: 'Home',
    activeColor: 'green',
    inactiveColor: 'red',
    barStyle: {backgroundColor: '#d3e3d7'},
    labeled: true,
  },
);
const Finder = createAppContainer(TabNavigator);
export default Finder;
// Application name	MusiFinder
// API key	577bc22e1d9e8ddc826719c1f0c246eb
// Shared secret	b284973e061d8a447ca25aaf4274a321
// Registered to	Jinit109
// /2.0/?method=track.search&track=Believe&api_key=577bc22e1d9e8ddc826719c1f0c246eb&format=json
//9e319d0a0629544c6c70ef4878e34886
