/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import {
  createStackNavigator,
  createMaterialTopTabNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation";

import PopularPage from './PopularPage';
import FavoritePage from './FavoritePage';
import TrendingPage from './TrendingPage';
import MyPage from './MyPage';

//导入最热图标
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//导入趋势图标
import Ionicons from 'react-native-vector-icons/Ionicons'
//导入用户图标
import Entypo from 'react-native-vector-icons/Entypo'
import NavigationUtil from '../navigator/NavigationUtil';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class HomePage extends Component<Props> {
  _tabNavigator(){
    return createBottomTabNavigator({
      PopularPage:{
        screen:PopularPage,
        navigationOptions:{
          tabBarLabel:"最热",
          tabBarIcon: ({tintColor,focused}) => (
            <MaterialIcons
                name={'whatshot'}
                size={26}
                style={{color: tintColor}}
            />
          ),
        }
      },
      FavoritePage:{
        screen:FavoritePage,
        navigationOptions:{
          tabBarLabel:"收藏",
          tabBarIcon: ({tintColor,focused}) => (
            <MaterialIcons
                name={'favorite'}
                size={26}
                style={{color: tintColor}}
            />
          ),
        }
      },
      TrendingPage:{
        screen:TrendingPage,
        navigationOptions:{
          tabBarLabel:"趋势",tabBarIcon: ({tintColor,focused}) => (
            <Ionicons
                name={'md-trending-up'}
                size={26}
                style={{color: tintColor}}
            />
          ),
        }
      },
      MyPage:{
        screen:MyPage,
        navigationOptions:{
          tabBarLabel:"我的",
          tabBarIcon: ({tintColor,focused}) => (
            <Entypo
                name={'user'}
                size={26}
                style={{color: tintColor}}
            />
          ),
        }
      }
    })
  }
  render() {
    //存储外层navigation，方便里面嵌套的navigation使用
    NavigationUtil.navigation = this.props.navigation;
    const Tab = this._tabNavigator();
    // return (
    //   <View style={styles.container}>
    //     <Text style={styles.welcome}>Welcome to HomePage!</Text>
    //     <Text style={styles.instructions}>To get started, edit App.js</Text>
    //     <Text style={styles.instructions}>{instructions}</Text>
    //     <Tab/>
    //   </View>
    // );
    return <Tab/>
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
