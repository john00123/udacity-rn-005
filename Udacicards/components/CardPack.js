import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image } from 'react-native'


export default class CardPack extends Component {


  render() {
    const {state} = this.props
    return(

      <View style ={{alignSelf: 'stretch'}}>

        <TouchableOpacity style = {styles.deck}>
          <View style ={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: url(state.Image)}}
            />
          </View>
          <Text style= {{fontSize: 18, lineHeight:24}}>{state.Name}</Text>
          <Text style={styles.subText}>{state.Cards} Cards on deck</Text>
        </TouchableOpacity>

        <View style = {[styles.deckAfter, {zIndex:1}]}/>
        <View style = {[styles.deckAfter, {marginLeft:20,  marginBottom: 30, marginRight:20}]}/>
      </View>
    )}
}

const url = (value = '1509374864550-ec7bcb9c17ff') => {
  return `https://images.unsplash.com/photo-${value}?auto=format&fit=crop&w=3034&q=80`
}

const styles = StyleSheet.create({
  imageContainer :{
    marginLeft:-20,
    marginTop:-20,
    marginRight:-20,
    flex:1,
    borderTopLeftRadius:4,
    borderTopRightRadius:4,
    overflow:'hidden',
  },
  image:{
    flex:1,
    marginBottom: 20,
  },
  subText:{
    color: '#999',
    fontSize:16,
    lineHeight:32,
  },
  deck:{
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 4,
    height: 250,
    padding: 20,
    alignSelf: 'stretch',
    zIndex:2,
    shadowRadius:3,
    shadowOpacity: 0.9,
    shadowColor: 'rgba(0, 0, 0, 0.2)',
    shadowOffset: {
    width: 0,
    height: 3,
    },
  },
  deckAfter:{
    backgroundColor: 'rgba(255,255,255, 0.8)',
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
    height: 7,
    alignSelf: 'stretch',
    marginLeft:10,
    marginRight:10,
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
    width: 0,
    height: 4,
    },
  },

})
