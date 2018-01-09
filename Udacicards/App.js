import React from 'react'
import { View, Platform, StatusBar, Text, TouchableOpacity, Button, Dimensions} from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { StackNavigator } from 'react-navigation'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { Constants } from 'expo'
import Decks from './components/Decks'
import NewDeck from './components/NewDeck'
import NewCard from './components/NewCard'
import CardStart from './components/CardStart'
import Cards from './components/Cards'
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

  Home: {
    screen: Decks,
    navigationOptions: {
      gesturesEnabled: true,
      headerTitle: 'All Decks',
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      gesturesEnabled: true,
      headerTitle: 'New Deck',
    },
  },
  NewCard: {
    screen: NewCard,
    navigationOptions: {
      gesturesEnabled: true,
      headerTitle: 'New Card',
    },
  },
  CardStart: {
    screen: CardStart,
    navigationOptions: {
      gesturesEnabled: true,
      headerTitle: null,
    },
  },
  Cards: {
    screen: Cards,
    navigationOptions: {
      gesturesEnabled: true,
      headerTitle: ' Test 1',
    },
  },
  },
  {
    headerMode:'screen',
    navigationOptions: {
    headerStyle: { marginTop:-42 }
  }
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
          <Stack screenProps={{ rootNavigation: this.props.navigation }} />
        </View>

    )
  }
}
