import React,{Component} from'react';
import{Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Category from './screens/Category';
import Categories from './screens/Categories';
import Like from './screens/Like';
import noidungtruyen from './screens/noidungtruyen';

const CategoriesStack = createStackNavigator({
  Categories,
  Category,
  noidungtruyen,
});
CategoriesStack.navigationOptions ={
 tabBarLabel:'Trang chủ',
 tabBarIcon: ({ focused }) => (
  focused ? <Image
      source={require('./images/home_active.png')}
      style={{width:25, height: 25}}
    />
    :
    <Image
      source={require('./images/home.png')}
      style={{width:25, height: 25}}
    />
),
};
// const CategoryStack = createStackNavigator({
//    Category,
   
// });
// CategoryStack.navigationOptions={
//   tabBarLabel:'Nổi bật',
//   tabBarIcon: ({ focused}) => (
//     focused ? <Image
//         source={require('./images/book_active.png')}
//         style={{width:25, height: 25}}
//       />
//       :
//       <Image
//         source={require('./images/book.png')}
//         style={{width:25, height: 25}}
//       />
//   ),
// }
// const noidungStack = createStackNavigator({
//   Category,
//   noidungtruyen,
// });
const LikeStack = createStackNavigator({
  Like
});
LikeStack.navigationOptions={
  tabBarLabel:'Yêu thích',
  tabBarIcon: ({ focused }) => (
    focused ? <Image
        source={require('./images/like_active.png')}
        style={{width:25, height: 25}}
      />
      :
      <Image
        source={require('./images/like.png')}
        style={{width:25, height: 25}}
      />
  ),
}
const AppNavigator = createBottomTabNavigator({
  CategoriesStack,
  // noidungStack,
  // CategoryStack,
  LikeStack,
 
});
export default AppNavigator;