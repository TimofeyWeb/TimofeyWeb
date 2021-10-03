<template>
<div>
  <div v-for="i in pages" :key="i" :class="{ pagination__current: value === i }" @click="setPage(i)">
    {{ i }}
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Pagination',
  props: {
    value: { type: Number, default: 1 },
  },
  computed: {
    ...mapGetters(['charactersPageCount']),
    pages() {
      return [...Array(this.charactersPageCount)].map((_, i) => i + 1);
    }
  },
  methods: {
    setPage(page) {
      this.$emit('input', page)
    }
  }
}
</script>
