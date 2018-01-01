import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image, ScrollView } from 'react-native'
import { AppLoading } from 'expo'
import CardPack from './CardPack'


export default class Decks extends Component {
  render() {
    return(
      <View style={{flex:1}}>
      <TouchableOpacity style={styles.addDeck}>
        <Text style ={styles.textButton} > Add New Deck</Text>
      </TouchableOpacity>
      <ScrollView style={{flex:1}}>

      <View style = {styles.page}>
        {Object.keys(this.props.state).map( key => <CardPack key = {key} state = {this.props.state[key]}/>)}

      </View>
      </ScrollView>
      </View>
    )}

}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#F7F9FA',
    padding: 20,
    alignItems: 'center',
  },

  addDeck : {
    alignSelf: 'flex-end',
    marginRight:20,
  },

  textButton:{
    color: '#0070E0',
    fontSize: 18,
    lineHeight: 50,
    justifyContent: 'flex-end',
  },

})
