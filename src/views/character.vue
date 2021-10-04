<template>
  <div class="character">
    <CharacaterInner v-if="character" :character="character"></CharacaterInner>
    <button @click="goBack">
      Go back
    </button>
  </div>
</template>

<script>

// import { mapGetters } from 'vuex'
import CharacaterInner from '@/components/character-inner';

export default {
  name: 'Character',
  components: {
    CharacaterInner
  },
  data() {
    return {
      character: null
    }
  },
  async created() {
    const id = this.$route.params
    this.character = await this.$store.dispatch('fetchCharactersById', id)
  },
  methods: {
    goBack() {
      this.$router.push({name: 'Home_page'})
    }
  }
}
</script>
