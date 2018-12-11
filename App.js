/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

'use strict';
import React, {Component} from 'react';
import {Platform, Image, StyleSheet, Text, View, Button,TextInput, Alert} from 'react-native';
import codepush from 'react-native-code-push';


export default class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {text : ''}
  }

codePushSync() {
    codepush.sync({
      updateDialog: false,
      installMode: codepush.InstallMode.IMMEDIATE
    });
  } 

componentDidMount(){
  this.codePushSync()
  codepush.notifyAppReady()

}
 

  render() {
    return (

      <View style={ styles.container } >
      <ul>
    <li>1 lb Salmon</li>
    <li>1 cup Pine Nuts</li>
    <li>2 cups Butter Lettuce</li>
    <li>1 Yellow Squash</li>
    <li>1/2 cup Olive Oil</li>
    <li>3 cloves of Garlic</li>
</ul>  
        <View style={{flexDirection : 'row'}} >
        
        {/* ImageView loaded with Uri  */}
        <Image
          style={styles.image}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />

        {/* Imageview loaded from local project files */}
        <Image style={styles.image} source={require('reactApp/resources/check.png')} />
        </View>

        <Welcome  text='This is Updated Via Codepush' />

        {/* Button which triggers codepush Update on onPress
          & also shows a Alert box on onPress
        */}
         
        <Button title="CodePush"
          color = '#632263'
          style = { styles.button}
          onPress={() => {
           this.codePushSync() 
            Alert.alert('CODEPUSH UPDATING ...')
          } } 
          
          />
        
        <View style={{padding: 10}}>
        <TextInput
          style={{height: 60 , fontSize: 30}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42 }}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
        
      </View>
      
    );
  }
}

class Welcome extends Component {    
  render(){        
    return (             
     <Text style={ [styles.welcome , styles.instructions ] }  > { this.props.text } </Text>         
     )     
  } 
 } 

 class Blink extends Component {

  constructor(props){
    super(props)
    this.state = {isShowingText : true}
    
    setInterval(() => {
      this.setState(previousState => (
        { isShowingText : !previousState.isShowingText  }
        ))  
    }, 1000);
  }

  render(){
    if (!this.state.isShowingText){
      return null
    }
    return (
      <Welcome text={this.props.text} />
    )
  }
 }

const styles = StyleSheet.create({
  container: {
    flex : 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'black',
    marginBottom: 5,
  },
  button: {
    padding : 40,
    margin : 20
  },
  image : {
    width : 70,
    height : 70,
    marginStart: 15
  }
});
