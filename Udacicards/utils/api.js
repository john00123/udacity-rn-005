import {AsyncStorage} from 'react-native'

export const STORAGE_KEY = 'Udacicards:api'

export function submitEntry(entry){
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [entry]:{
    name: entry,
    cards: 30,
    }
  }))
}

export function deleteEntry(key){
  return AsyncStorage.getItem(STORAGE_KEY)
  .then((results)=>{
    const data = JSON.parse(results)
    data[key] = undefined
    delete data[key]
    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  })
}

export function setDeck(){
  return AsyncStorage.mergeItem(STORAGE_KEY,JSON.stringify(initialDeck))
}

export function getDecks(){
  return AsyncStorage.getItem(STORAGE_KEY)
  .then((results)=> JSON.parse(results))
}

const initialDeck = {

  deck1:{
    name: 'Test your whisky knowledge',
    cards: 30,
    image: '1486025402772-bc179c8dfb0e'
  },
  deck2:{
    name: 'How much do you know about New York',
    cards: 32,
    image: '1503914068268-5413b35b45ad'
  },
  deck3:{
    name: 'How much do you know about Architecture',
    cards: 32,
    image: '1507026050002-b9207a0e880c'
  }
}
