import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image, ScrollView , TextInput, DeviceEventEmitter} from 'react-native'
import { NavigationActions } from 'react-navigation';
import { submitEntry,getDecks } from '../utils/api'




export default class NewDeck extends Component {

  state = {}

  submit = () => {
   const {name} = this.state
   const {navigation} = this.props
   submitEntry(name)
   navigation.state.params.onGoBack()
   navigation.goBack()
  }


  render() {
    return(
      <View style={{flex:1}}>
        <View style ={{alignSelf: 'stretch'}}>

          <TextInput
            style={{height: 40}}
            placeholder="Type here to translate!"
            onChangeText={(name) => this.setState({name})}
          />

          <TouchableOpacity
            style={styles.addDeck}
            onPress = {()=> this.submit()}
          >
            <Text style ={styles.textButton} > {JSON.stringify(this.state.name)}</Text>
          </TouchableOpacity>

          <View style = {[styles.deckAfter, {zIndex:1}]}/>
          <View style = {[styles.deckAfter, {marginLeft:20,  marginBottom: 30, marginRight:20}]}/>
        </View>
      </View>
    )
  }
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
