/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import Icon from 'react-native-vector-icons/FontAwesome5';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import * as firebase from 'firebase';
import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Alert,
  ImageBackground
} from 'react-native';
const firebaseConfig = {
  apiKey: 'AIzaSyAkJqwX75CBFNuX7Rs8TZP9ft0CYhy2WWw',
  authDomain: 'spidey-59cb0.firebaseapp.com',
  databaseURL: 'https://spidey-59cb0.firebaseio.com',
  projectId: 'spidey-59cb0',
  storageBucket: 'spidey-59cb0.appspot.com',
  messagingSenderId: '1029896236476',
  appId: '1:1029896236476:web:2774f6aa1db8792e778fb9',
  measurementId: 'G-2VL0QR6NG2',
};
firebase.initializeApp(firebaseConfig);
import {
  Item,  Form,  Input,  Button,  Label} from 'native-base';
import Finder from './Finder.js'
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      signin:false
    };
  }
  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert('Please enter atleast 6 characters');
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error.toString());
    }
  };
  loginUser = (email, password) => {
    try {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(()=>this.setState({signin:true})
        ).then(()=>{this.props.navigation.navigate('Finder')}
        );
    } catch (error) {
      console.log(error.toString());
    }
    
  };

  render() {
    return (
      <ImageBackground source={require('./w640.jpg') } style={styles.image1} >
      <View style={styles.container}>
      <Icon name={'napster'} size={130} style={{justifyContent:"center",marginLeft:60,marginBottom:30}}></Icon>
       <Text style={{alignItems:"center",marginLeft:75,fontSize:30,color:"white",fontFamily:"monospace"}}>MusiFinder!</Text>
        <Form style={{opacity:10}}>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={email => this.setState({email})}
            />
          </Item>
          <Item floatingLabel>
            <Label>Password</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={password => this.setState({password})}
            />
          </Item>
          <Button
            style={{marginTop: 10}}
            full
            rounded
            success
            onPress={() =>
              this.loginUser(this.state.email, this.state.password)
            }>
            <Text style={{color: 'white'}}> Login</Text>
          </Button>
          <Button
            style={{marginTop: 10}}
            full
            rounded
            primary
            onPress={() =>
              this.signUpUser(this.state.email, this.state.password)
            }>
            <Text style={{color: 'white'}}> Sign Up</Text>
          </Button>
        </Form>
      </View>
    </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
    flex:1,
    backgroundColor:'rgba(47,163,218,.4)',
    justifyContent:"center"
   
  },
  image1:{
    flex:1,
    position:"absolute",
    width:"100%",
    height:"100%",
    
  }
});


// import React from 'react';  
// import { StyleSheet, Text, View } from 'react-native';  
// import {  createAppContainer } from 'react-navigation';  
//   import {createBottomTabNavigator} from 'react-navigation-'
// class Finder extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Home Screen</Text>  
//             </View>  
//         );  
//     }  
// }  
// class ProfileScreen extends React.Component {  
//     render() {  
//         return (  
//             <View style={styles.container}>  
//                 <Text>Profile Screen</Text>  
//             </View>  
//         );  
//     }  
// }  
  
// const TabNavigator = createBottomTabNavigator({  
//     Home: Finder,  
//     Profile: ProfileScreen,  
// },
// {  
//     initialRouteName: "Home"  
// }  
// );  
// const styles = StyleSheet.create({  
//     container: {  
//         flex: 1,  
//         justifyContent: 'center',  
//         alignItems: 'center'  
//     },  
// });  
  
// export default createAppContainer(TabNavigator); 


