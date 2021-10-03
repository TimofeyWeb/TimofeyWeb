<template>
<div>
  <div v-if="characters.length > 0">
    <div class="list">
      <CharacterCard v-for="character in characters" :key="character.id" :character="character"></CharacterCard>
    </div>
    <Pagination :value="page" @input="setPage($event)"></Pagination>
  </div>
  <div v-else>Characters not found</div>
</div>
</template>
<script>
import CharacterCard from '@/components/character-card';
import Pagination from '@/components/pagination';
import { mapGetters } from 'vuex'

export default {
  name: 'CharacterList',
  components: {
    CharacterCard,
    Pagination,
  },
  props: {
    page: { type: Number, default: null },
  },
  computed: {
    ...mapGetters(['characters']),
    pages() {
      return [...Array(this.pageCount)].map((_, i) => i + 1);
    },
  },
  methods: {
    setPage(page) {
      this.$emit('setPage', page)
    }
  }
}
</script>
