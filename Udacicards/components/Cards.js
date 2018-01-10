import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput, StatusBar} from 'react-native'
import { NavigationActions } from 'react-navigation'
import { submitEntry, getDecks } from '../utils/api'


export default class Cards extends Component {

  state = {
    index: 0,
    score: 0,
    show: false
  }

  componentDidMount(){
    return this.setState(this.props.navigation.state.params.state)
  }

  render() {
    return(

      this.state.cards ?
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <StatusBar barStyle='dark-content' />
        { this.state.index < this.state.cards.length ?

          <View>
          <Text>{this.state.cards[this.state.index].question}</Text>
          {this.state.show ? <Text>{this.state.cards[this.state.index].answer}</Text>: null}

          {this.state.show ? null : <Button
            onPress = {()=> this.setState({show: true})}
            title = 'Show'
          />}


          <Button
            onPress = {()=> this.setState({index: this.state.index+1, score: this.state.score + 1, show: false})}
            title = 'Next'
          />

          <Button
            onPress = {()=> this.setState({index: this.state.index+1, show: false})}
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
