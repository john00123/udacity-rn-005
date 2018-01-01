import React from 'react'
import { View, Platform, StatusBar, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import Decks from './components/Decks'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor = {backgroundColor} {...props} />
    </View>
  )
}


export default class App extends React.Component {

state = {
  card1:{
    Name: 'Test your whisky knowledge',
    Cards: 30,
    Image: '1486025402772-bc179c8dfb0e'
  },
  card2:{
    Name: 'How much do you know about New York',
    Cards: 32,
    Image: '1503914068268-5413b35b45ad'
  },
  card3:{
    Name: 'How much do you know about Architecture',
    Cards: 32,
    Image: '1507026050002-b9207a0e880c'
  }
}

  render() {
    return (
        <View style={{flex: 1}}>
          <UdaciStatusBar/>
          <Decks state = {this.state}/>
        </View>

    )
  }
}
