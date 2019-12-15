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
  Linking
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import {TextInput, Button} from 'react-native-paper';
const randomRgb=()=>{
  const red=Math.floor(Math.random()*256);
  const green=Math.floor(Math.random()*256);
  const blue=Math.floor(Math.random()*256);
  return `rgb(${red},${green},${blue})`;
}
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
            Linking.openURL(`${item.url}`)
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
              }}>Artist-
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
            style={{ backgroundColor: `${randomRgb()}`}}
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
      albums:[]
    };
  }
  fetchAlbum(text) {
    this.setState({text});
    fetch(`http://ws.audioscrobbler.com/2.0/?method=album.search&album=${text}&api_key=577bc22e1d9e8ddc826719c1f0c246eb&format=json`)
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
            Linking.openURL(`${item.url}`)
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
                color: "black",
              }}>Artist-
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
            style={{ }}
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
      artists:[]
    };
  }
  fetchArtist(text) {
    this.setState({text});
    fetch(`http://ws.audioscrobbler.com/2.0/?method=artist.search&artist=${text}&api_key=577bc22e1d9e8ddc826719c1f0c246eb&format=json`)
      .then(data => data.json())
      .then(artistlist => {
        this.setState({artists: artistlist.results.artistmatches.artist.slice(0, 16)});
      });
  }
  renderItem = ({item}) => {
    return (
      <ScrollView style={{marginBottom: 5}}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <TouchableOpacity
         onPress={() => {
            Linking.openURL(`${item.url}`)
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
            style={{ backgroundColor: `${randomRgb()}`}}
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
      genre:[]
    };
  }
  fetchGenre(text) {
    this.setState({text});
    fetch(`http://ws.audioscrobbler.com/2.0/?method=tag.gettopartists&tag=${text}&api_key=577bc22e1d9e8ddc826719c1f0c246eb&format=json`)
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
            Linking.openURL(`${item.url}`)
            }}
          style={{flexDirection: 'row'}}>
          <View style={{ backgroundColor:`${randomRgb()}`,flex:1}}>
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
            style={{ backgroundColor: '#3b5998'}}
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
            Linking.openURL(`${item.url}`)
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
              }}>Views-
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
            style={{ backgroundColor: `${randomRgb()}`}}
            data={this.state.musics}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={this.renderSeperator}
          />
        
      </View>
    );
  }
}
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
