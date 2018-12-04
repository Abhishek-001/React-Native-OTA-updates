/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import Codepush from 'react-native-code-push'
import CodePush from 'react-native-code-push';

 
export default class App extends Component {

  codePushSync(){
    CodePush.sync({
      updateDialog: true,
      installMode: CodePush.InstallMode.IMMEDIATE
    })
  }
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> Home Screen </Text>
        <Text style={styles.instructions}>React App with Codepush</Text>
        <Button title="CodePush" onPress={() => this.codePushSync() } />
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
