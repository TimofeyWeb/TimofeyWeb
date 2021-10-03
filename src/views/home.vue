<template>
  <div class="home">
    <CharacterFilters @filtersChanged="fetchCharacters()"></CharacterFilters>
    <CharacaterList v-if="!loading" :page="currentPage" @setPage="currentPage = $event"></CharacaterList>
    <div v-else>Loading</div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CharacaterList from '@/components/character-list';
import CharacterFilters from '@/components/character-filters';
import throttle from 'lodash.throttle'

export default {
  name: 'Home',
  components: {
    CharacaterList,
    CharacterFilters,
  },
  data() {
    return {
      loading: true,
      currentPage: 1,
      throttledFetchCharacters: null,
    }
  },
  created() {
    this.currentPage = +this.$route.params.page || 1
    this.throttledFetchCharacters = throttle(() => this.fetchCharacters(), 700);
    this.throttledFetchCharacters();
  },
  watch: {
    currentPage() {
      const path = this.currentPage === 1 ? '/' : '/page/' + this.currentPage;
      history.pushState({}, '', path);
      this.throttledFetchCharacters();
    },
    filters: {
      deep: true,
      handler() {
        if (this.currentPage !== 1) {
          this.currentPage = 1;
        } else {
          this.throttledFetchCharacters();
        }
      },
    },
  },
  computed: {
    ...mapGetters(['filters']),
    characters() {
      return this.$store.getters['getCharacterByPage'](this.currentPage);
    },
    firstCharacter() {
      return this.$store.getters['getCharacterById']({id: 1, page: 1});
    },
    episodeWithCharacter() {
      return this.character.episode.slice(0, 5);
    }
  },
  methods: {
    async fetchCharacters() {
      console.log('fetchChar')
      this.loading = true;
      await this.$store.dispatch('fetchCharacters', this.currentPage);
      this.loading = false;
    }
  }
}
</script>
