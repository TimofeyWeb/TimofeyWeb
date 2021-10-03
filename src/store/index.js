import Vue from 'vue'
import Vuex from 'vuex'
import { getCharacters } from '@/api/character'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    characters: {},
    charactersPageCount: 0,
    filters: {
      name: '',
      status: null,
    }
  },
  actions: {
    async fetchCharacters({commit, state}, page) {
      try {
        const {info, results} = await getCharacters(page, state.filters.name, state.filters.status)
        commit('setCharacters', results);
        commit('setCharactersPageCount', info.pages);
      } catch (e) {
        commit('setCharacters', []);
      }
    }
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
      // Vue.set(state.characters, {page, characters})
    },
    setCharactersPageCount(state, pages) {
      state.charactersPageCount = pages;
    },
    setFiltersName(state, name) {
      state.filters.name = name;
    },
    setFiltersStatus(state, status) {
      state.filters.status = status;
    },
  },
  getters: {
    characters(state) {
      return state.characters;
    },
    filters(state) {
      return state.filters;
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
