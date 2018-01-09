import {AsyncStorage} from 'react-native'

export const STORAGE_KEY = 'Udacicards:api'

export function submitEntry(entry){
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [entry]:{
    name: entry,
    cards: [],
    }
  }))
}

export function submitCard(entry, card) {
  return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
    [entry.name]: {
      ...entry,
      cards: [
        ...entry.cards,
        card
      ]
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
  'Test your whisky knowledge':{
    name: 'Test your whisky knowledge',
    image: '1503631285924-e1544dce8b28',
    cards: [
      {
        question:'What is the name of',
        answer: 'Sia'
      },
      {
        question:'What is the name of',
        answer: 'Yoda'
      },
      {
        question:'What is the name of',
        answer: 'Mote'
      },
    ],
  },
  'How much do you know about New York':{
    name: 'How much do you know about New York',
    image: '1503914068268-5413b35b45ad',
    cards: [
      {
        question:'What is the name of',
        answer: 'Sia'
      },
      {
        question:'What is the name of',
        answer: 'Sia'
      },
      {
        question:'What is the name of',
        answer: 'Sia'
      },
    ],
  },
  'How much do you know about Architecture':{
    name: 'How much do you know about Architecture',
    image: '1507026050002-b9207a0e880c',
    cards: [
      {
        question:'What is the name of',
        answer: 'Sia'
      },
      {
        question:'What is the name of',
        answer: 'Sia'
      },
      {
        question:'What is the name of',
        answer: 'Sia'
      },
    ],
  }
}
