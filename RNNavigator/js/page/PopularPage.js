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
  createMaterialTopTabNavigator,
} from "react-navigation";
import NavigationUtil from "../navigator/NavigationUtil"

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class PopularPage extends Component<Props> {
  render() {
    const TabNavigatior = createMaterialTopTabNavigator({
      PopulatTab1:{
        screen:PopularTab,
        navigationOpions:{
          title:'Tab1',
        }
      },
      PopulatTab2:{
        screen:PopularTab,
        navigationOpions:{
          title:'Tab2',
        }
      },
    });
    return (
      // <View style={styles.container}>
      //   <Text style={styles.welcome}>Welcome to PopularPage!</Text>
      //   <Text style={styles.instructions}>To get started, edit App.js</Text>
      //   <Text style={styles.instructions}>{instructions}</Text>
      // </View>
      <View style={{flex:1,marginTop:50}}>
        <TabNavigatior/>
      </View>
    );
  }
}

class PopularTab extends Component<Props>{
  render(){
    const {tabLabel} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>{tabLabel}</Text>
        <Text onPress={()=>{
          NavigationUtil.goPage({
            navigation:this.props.navigation
          },"DetailPage")
        }}>跳转到详情页</Text>
      </View>
    );
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
