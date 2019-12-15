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

// import React from 'react';  
// import { StyleSheet, Text, View } from 'react-native';  
// import {  createAppContainer } from 'react-navigation';  
//   import {createBottomTabNavigator} from 'react-navigation-tabs'
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
  
// const App= createAppContainer(TabNavigator); 
// export default ()=>{
//  return <App/>
// }


