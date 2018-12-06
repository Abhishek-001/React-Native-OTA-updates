/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import codepush from 'react-native-code-push';


export default class App extends Component {

  codePushSync() {
    codepush.sync({
      updateDialog: true,
      installMode: codepush.InstallMode.IMMEDIATE
    });
  } 


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}> This is changed from codepush bundle</Text>
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
