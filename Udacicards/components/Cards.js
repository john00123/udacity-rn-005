import React, { Component } from 'react'
import { View, Text, StyleSheet, Button, TextInput, StatusBar, TouchableOpacity } from 'react-native'
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
    // const{navigation} = this.props.navigation.state.params
    return(
      this.state.cards ?
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
        <StatusBar barStyle='dark-content' />
        { this.state.index < this.state.cards.length ?

          <View style={{width:'100%', padding:20}}>
          <Text>Remaining {this.state.cards.length - this.state.index}</Text>
          <Text style = {styles.question}>{this.state.cards[this.state.index].question}</Text>
          {this.state.show ? <Text style = {styles.answer}>{this.state.cards[this.state.index].answer}</Text>: null}

          {this.state.show ? null : <Button
            onPress = {()=> this.setState({show: true})}
            title = 'Show'
          />}

          <TouchableOpacity
            style={styles.button}
            onPress = {()=> this.setState({index: this.state.index+1, score: this.state.score + 1, show: false})}

          ><Text style= {{color:'white', fontSize:16}}>Correct</Text></TouchableOpacity>

          <TouchableOpacity
            style={styles.button2}
            onPress = {()=> this.setState({index: this.state.index+1, show: false})}
          ><Text style= {{color:'white', fontSize:16}}>Incorrect</Text></TouchableOpacity>
          </View>
          :
          <View style={{width:'100%', padding:20}}>
            <Text style={styles.question}>Congratulations your final score is </Text>
            <Text style={styles.answer}>{this.state.score} </Text>
            <TouchableOpacity
              style={styles.button}
              onPress = {()=> this.setState({index: 0, score: 0, show: false})}
            ><Text style= {{color:'white', fontSize:16}}>Restart</Text></TouchableOpacity>

            <TouchableOpacity
              style={[styles.button2, { backgroundColor:'#1D4FB0'}]}
              onPress = {()=> this.props.navigation.navigate('Home', {onGoBack: () => this.load()})}
            ><Text style= {{color:'white', fontSize:16}}>Back to Deck</Text></TouchableOpacity>
          </View>
        }

      </View> : null
    )
  }
}


const styles = StyleSheet.create({
  question:{
    fontSize: 32,
  },

  button:{
    height:45,
    width:'100%',
    backgroundColor: '#0070E0',
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    borderRadius: 4,
  },

  button2:{
    height:45,
    width:'100%',
    backgroundColor: '#DF4A53',
    alignItems:'center',
    justifyContent:'center',
    marginTop:10,
    marginBottom:20,
    borderRadius: 4,
  },

  answer:{
    backgroundColor: '#ddd',
    width:'100%',
    justifyContent: 'center',
    alignItems:'center',
    textAlign:'center',
    fontSize: 28,
    color: '#333',
    padding:40,
    marginTop:20
  }
})
