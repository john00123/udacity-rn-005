import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TouchableOpacity, Image, ScrollView , TextInput, StatusBar} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { submitEntry, getDecks } from '../utils/api'
import { clearLocalNotification, setLocalNotification} from '../utils/helper'

export default class CardStart extends Component {

  state = {
    value:1
  }

  componentDidMount(){
    return this.setState(this.props.navigation.state.params.state)
  }

  updateData  = (data) => {

      clearLocalNotification().then(setLocalNotification)

      alert('Added: '+JSON.stringify(data))

      this.setState({
        cards: [...this.state.cards, data]
      })
  }

  static navigationOptions = ({ navigation }) => ({
    headerLeft:(
      <TouchableOpacity
      onPress = {()=> navigation.navigate('Home', {onGoBack: () => this.load()})}
      >
        <Text style = {{fontSize:20, color:'white', marginLeft:20}}>
          Back
        </Text>
      </TouchableOpacity>
    ),
    headerTintColor: 'white',
    headerTitleStyle: {
      color:'white'
    },
    headerStyle: {
      marginTop:-42,
      borderBottomWidth: 0,
      backgroundColor: 'transparent',
    },
    headerBackTitleStyle :{
      color:'white'
    },

  })

  render() {
    const {navigation} = this.props.navigation.state.params
    return (
      <ScrollView style = { styles.mainView } >
        <StatusBar barStyle = 'light-content' />
        <Image
          style = {styles.image}
          source = {{uri: url(this.state.image)}}
        />

        {this.state.cards ?
          <View>
          <Text style={styles.mainText}>{this.state.name}</Text>
          <Text style={styles.subText}>{this.state.cards.length} questions</Text>

          </View>
        : null}

        <TouchableOpacity
          style= {styles.button}
          onPress = {()=> navigation.navigate('Cards',
            {state: this.state,
            navigation : {navigation}}
          )}
        >
        <Text style={{color:'white', fontSize:18}}>Start</Text>
        </TouchableOpacity>

        <Button color = '#0070E0' title = 'Add Cards'
          onPress = {()=> navigation.navigate('NewCard',
            {state: this.state,
            updateData:this.updateData}
          )}
        />

      </ScrollView>
    )
  }
}

const url = (value = '1501856777435-29877ed80a3d') => {
  return `https://images.unsplash.com/photo-${value}?auto=format&fit=crop&w=1280&q=80`
}

const styles = StyleSheet.create({
  mainView:{
    marginTop: -150,
    alignSelf: 'stretch',
    height:'100%',
    padding: 20
  },
  add:{
    fontSize:17,
    color:'white',
    marginRight:10
  },
  image:{
    margin : -20,
    marginBottom: 20,
    flexDirection:'row',
    height:500,
  },
  mainText:{
    fontSize:32,
    marginTop:30,
    fontWeight: '700',
  },
  subText:{
    color: '#999',
    fontSize:16,
    lineHeight:32,
  },
  button:{
    height:45,
    width:'100%',
    backgroundColor: '#0070E0',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    marginBottom:20,
    borderRadius: 4,
  }
})
