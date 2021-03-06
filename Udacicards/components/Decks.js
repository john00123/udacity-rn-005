import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView , Button, StatusBar} from 'react-native'
import { AppLoading } from 'expo'
import CardPack from './CardPack'
import {getDecks, deleteEntry} from '../utils/api'




export default class Decks extends Component {

  state = {  }

  componentWillMount(){
    load = () => {
      getDecks().then((res) => this.setState({...res}))
    }
  }

  componentDidMount(){
    load()
  }


  static navigationOptions = ({ navigation }) => {
    const { state, setParams } = navigation
    return {
      headerLeft:(null),
      headerRight: (
        <TouchableOpacity
          onPress = {()=> navigation.navigate
            ('NewDeck', {onGoBack: () => this.load()} )
          }
        >
          <Text style = {{fontSize:40, color:'#0070E0', marginRight:5, marginBottom:8}}> + </Text>
       </TouchableOpacity>
      ),
    }
  }

  render() {
    const {navigation} = this.props
    return(
      <View style={{flex:1}}>
      <StatusBar barStyle='dark-content' />
        <ScrollView style={{flex:1}} horizontal>
          <View style = {[styles.page,{flexDirection:'row'}]}>
            {Object.keys(this.state).map( key =>
              <CardPack
              key = {key}
              state = {this.state[key]}
              navigation = {navigation}
              />

            )}
          </View>
        </ScrollView>
      </View>
    )}

}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // backgroundColor: '#F7F9FA',
    padding: 20,
    paddingTop:35,
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
