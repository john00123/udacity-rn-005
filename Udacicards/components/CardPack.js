import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image, Animated } from 'react-native'
import { NavigationActions } from 'react-navigation'

export default class CardPack extends Component {

  state = {
    opacity: new Animated.Value(0),
    width: new Animated.Value(300),
    height: new Animated.Value(500)
  }

  componentDidMount(){
    const {opacity, width, height} = this.state
    Animated.timing(opacity,{
    toValue: 1,
    duration: 800,
  }).start()

    Animated.spring(width,{
      toValue: 330,
      speed: 5,
      bounciness: 10
    }).start()

    Animated.spring(height,{
      toValue: 600,
      speed: 5,
      bounciness: 10
    }).start()


  }

  render() {
    const {state} = this.props
    const {navigation} = this.props
    const {opacity, width, height} = this.state

    return(
      <Animated.View style = {{opacity, width, height}}>
      <TouchableOpacity
        style ={{alignSelf: 'stretch', justifyContent:'center', flex:1, height:'100%', paddingBottom: 40}}
        onPress = {()=> navigation.navigate('CardStart',
          {state: this.props.state,
          navigation: this.props.navigation
          })}
       >

        <View style = {styles.deck}>
          <View style ={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: url(state.image)}}
            />
          </View>
          <Text style= {{fontSize: 18, lineHeight:24, height:50}}>
            {state.name}
          </Text>
          <Text style={styles.subText}>{state.cards.length} Cards on deck</Text>
        </View>

        <View style = {[styles.deckAfter, {zIndex:1}]}/>

      </TouchableOpacity>
      </Animated.View>
    )}
}

const url = (value = '1501856777435-29877ed80a3d') => {
  return `https://images.unsplash.com/photo-${value}?auto=format&fit=crop&w=900&q=90`
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
    height:'80%',
    width:300,
    padding: 30,
    marginRight: 20,
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
    width:280,
    alignSelf: 'stretch',
    marginLeft:10,
    marginRight:20,
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
    width: 0,
    height: 4,
    },
  },

})
