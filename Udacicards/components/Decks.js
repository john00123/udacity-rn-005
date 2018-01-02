import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView , DeviceEventEmitter} from 'react-native'
import { AppLoading } from 'expo'
import CardPack from './CardPack'
import {getDecks, deleteEntry} from '../utils/api'

export default class Decks extends Component {

  state = {  }

  componentDidMount(){
    getDecks().then((res) => this.setState({...res}))
  }

  render() {
    const {navigation} = this.props
    return(
      <View style={{flex:1}}>
        <TouchableOpacity
          style={styles.addDeck}
          onPress = {()=> navigation.navigate('NewDeck', {
          onGoBack: () => getDecks().then((res) => this.setState({...res}))
    })}
        >
          <Text style ={styles.textButton} > Add New Deck</Text>
        </TouchableOpacity>

        <ScrollView style={{flex:1}}>
          <View style = {styles.page}>
            {Object.keys(this.state).map( key => <CardPack key = {key} state = {this.state[key]}/>)}
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
