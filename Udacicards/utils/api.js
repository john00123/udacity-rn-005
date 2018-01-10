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
  'How much do you know about plants':{
    name: 'How much do you know about plants',
    image: '1499744632587-7798360ba20f',
    cards: [
      {
        question:'What is the process a plant uses to make food?',
        answer: 'Photosynthesis'
      },
      {
        question:'What type of plant looses its leaves every year?',
        answer: 'Deciduous plants'
      },
      {
        question:'What is one thing plants need to make food?',
        answer: 'Sunlight'
      },
    ],
  },
  'How much do you know about fruits':{
    name: 'How much do you know about fruits',
    image: '1487376480913-24046456a727',
    cards: [
      {
        question:'How many seeds are there on a strawberry?',
        answer: '200'
      },
      {
        question:'This is a long yellow fruit. Monkeys love to eat them!',
        answer: 'Banana'
      },
      {
        question:'This is a red, delicious fruit. One a day will keep the doctor away!',
        answer: 'Apple'
      },
    ],
  },
  'How much do you know about fruits 2':{
    name: 'How much do you know about fruits 2',
    image: '1481349758547-36a0382e3394',
    cards: [
      {
        question:' Some people call this red fruit a vegetable, but it is really a fruit...and very juicy!',
        answer: 'Tomato'
      },
      {
        question:'This fruit comes in bunches, and is most commonly red, purple or green.',
        answer: 'Grapes'
      },
      {
        question:'What is a dried grape called?',
        answer: 'Rasin or Sultana'
      },
    ],
  }
}
