import React from 'react';
import {
  Text,
  View,

} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './Login';
import Finder from './Finder'
import { Button } from 'react-native-paper';

const MainNavigator = createStackNavigator(
  {
    Login:{screen:Login},
    Finder:{screen:Finder},
    
   
    
   },
  { 
    initialRouteName: 'Login',
    defaultNavigationOptions:{
      title:'MusiFinder!',
      headerStyle: {
        backgroundColor: '#303833',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleStyle:{textAlign:"center",flex:1,fontSize:30,fontWeight:"bold"},
      
    }
  },
);

const App = createAppContainer(MainNavigator);

export default ()=>{
 return <App/>
}




