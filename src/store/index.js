import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    characters: {},
    charactersPageCount: 0
  },
  actions: {
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setCharactersPageCount(state, pages) {
      state.charactersPageCount = pages;
    }
  },
  getters: {
    characters(state) {
      return state.characters;
    },
    charactersPageCount(state) {
      return state.charactersPageCount;
    },
    getCharacterById: (state) => ({id, page}) => {
      const charactersPerPage = state.characters[page];
      if (charactersPerPage) {
        return charactersPerPage.find(character => character.id === id)
      } return null
    },
    getCharacterByPage: (state) => (page) => {
      const charactersPerPage = state.characters[page];
      return charactersPerPage;
    }
  }
})

export default store;
