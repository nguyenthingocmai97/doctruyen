import React,{Component} from 'react';
import{Image,View,Text,StyleSheet,ScrollView,FlatList} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import AppNavigator from './Appnavigation';
import axios from 'axios';
// axios.defaults.baseURL='http://localhost:8080/server/';
axios.defaults.baseURL='http://localhost:3000';
const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component{
 
  render(){
    return(
      < AppContainer/> 
    )
  }
}
const styles=StyleSheet.create({
  container : {
    flex :1,
    alignItems:'center',
    justifyContent:'center',
    alignItems:'stretch',
    backgroundColor:'#fff',
    paddingLeft:16,
    paddingRight:16

  }
})