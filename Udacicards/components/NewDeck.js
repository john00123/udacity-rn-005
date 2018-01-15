import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image, ScrollView , TextInput, KeyboardAvoidingView} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { submitEntry,getDecks } from '../utils/api'


export default class NewDeck extends Component {

  state = {}

  submit = () => {
    const {name} = this.state
    const {navigation} = this.props

    submitEntry(name).then(
      navigation.navigate('CardStart',
        {state: this.state,
        navigation: navigation
        })
    )
    navigation.state.params.onGoBack()

  }


  render() {
    return(
      <KeyboardAvoidingView
      behavior="padding"
      style={{flex:1, padding:20, paddingTop:35, paddingBottom: 10, alignItems:'center',marginBottom:20}}>
        <View style={[styles.deck]}>
          <TextInput
            style={{fontSize: 32, height: 40, color:'#333'}}
            placeholder="New Deck"
            onChangeText={(name) => this.setState({name})}
          />

          <TouchableOpacity
            style={[styles.Button,{marginTop:30}]}
            onPress = {()=> this.submit()}
          >
            <Text style={{color: 'white', textAlign:'center', fontSize:16}} > Submit </Text>
          </TouchableOpacity>
        </View>
        <View style = {[styles.deckAfter, {zIndex:1, marginRight:15,marginBottom:20}]}/>

      </KeyboardAvoidingView>
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
  Button:{
    backgroundColor:'#0070E0',
    borderRadius:4,
    paddingTop:10,
    paddingBottom:10,
  },
  deck:{
    backgroundColor: 'rgb(255,255,255)',
    borderRadius: 4,
    flex:1,
    padding: 30,
    justifyContent:'center',
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
