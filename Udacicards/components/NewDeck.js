import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image, ScrollView , ImagePickerIOS, TextInput} from 'react-native'
import { NavigationActions } from 'react-navigation';


export default class NewDeck extends Component {
  render() {
    return(
      <View style={{flex:1}}>
      <View style ={{alignSelf: 'stretch'}}>

        <ImagePickerIOS/>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />

        <TouchableOpacity> Submit</TouchableOpacity>
        <View style = {[styles.deckAfter, {zIndex:1}]}/>
        <View style = {[styles.deckAfter, {marginLeft:20,  marginBottom: 30, marginRight:20}]}/>
      </View>
      </View>
    )}

}
