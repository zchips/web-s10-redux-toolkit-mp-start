import {createSlice} from '@reduxjs/toolkit' // ✨ create your `quotesSlice` in this module

let id = 1
const getNextId = () => id++
const initialState = {
  displayAllQuotes: true,
  highlightedQuote: null,
  quotes: [
    {
      id: getNextId(),
      quoteText: "Don't cry because it's over, smile because it happened.",
      authorName: "Dr. Seuss",
      apocryphal: true,
    },
    {
      id: getNextId(),
      quoteText: "So many books, so little time.",
      authorName: "Frank Zappa",
      apocryphal: false,
    },
    {
      id: getNextId(),
      quoteText: "Be yourself; everyone else is already taken.",
      authorName: "Oscar Wilde",
      apocryphal: false,
    },
  ],
}

export const quotesSlice = createSlice({

   name: 'quotes',
   initialState, 
   reducers: {
    toggleVisibility(state, action){

    },
    deleteQuote(state, action){

    },
    editQuoteAuthenticity(state, action){

    },
    setHighLightedQuote(state, action){    }
   }
})

export default quotesSlice.reducer