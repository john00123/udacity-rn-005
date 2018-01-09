import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput, StatusBar} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { submitEntry, getDecks } from '../utils/api'


export default class Cards extends Component {

  state = {
    index: 0,
    score: 0
  }

  componentDidMount(){
    return this.setState(this.props.navigation.state.params.state)
  }

  render() {
    return(

      this.state.cards ?
      <View>
        <StatusBar barStyle='dark-content' />
        { this.state.index < this.state.cards.length ?

          <View>
          <Text>{JSON.stringify(this.state)}</Text>
          <Text>{this.state.cards[this.state.index].question}</Text>
          <Text>{this.state.cards[this.state.index].answer}</Text>
          <Button
            onPress = {()=> this.setState({index: this.state.index+1, score: this.state.score + 1})}
            title = 'Next'
          />

          <Button
            onPress = {()=> this.setState({index: this.state.index+1})}
            title = 'Skip'
          />
          </View>
          :
          <View>

          <Text>Congratulations your final score is </Text>
          <Text>{this.state.score} </Text>
          </View>
        }

      </View> : null
    )
  }
}
