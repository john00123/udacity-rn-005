import React from 'react'
import { View, Platform, StatusBar, Text } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import {setDeck, getDecks} from './utils/api'
import {AsyncStorage} from 'react-native'

function UdaciStatusBar ({backgroundColor, ...props}) {
  return (
    <View style={{ backgroundColor, height: Constants.statusBarHeight }}>
      <StatusBar translucent backgroundColor = {backgroundColor} {...props} />
    </View>
  )
}

const Stack = StackNavigator({
  Home: { screen: Decks },
  NewDeck: { screen: NewDeck }
},
{
  headerMode: 'none'
})



export default class App extends React.Component {

componentWillMount(){
  getDecks()
}

componentDidMount(){
    getDecks().then((results)=>(
    results ? null : setDeck()
  ))
}
  render() {
    // AsyncStorage.clear()
    return (
        <View style={{flex: 1}}>
          <UdaciStatusBar/>
          <Stack/>
        </View>

    )
  }
}
