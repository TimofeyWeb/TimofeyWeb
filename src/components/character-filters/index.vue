<template>
<div>
  <div>
    Имя:
    <input :value="filters.name" @input="setName($event.target.value)"/>
  </div>
  <div>
    Статус:
    <select v-model="filters.status" @input="setStatus($event.target.value)">
      <option v-for="status in statuses" :value="status.value" :key="status.value">{{ status.name }}</option>
    </select>
  </div>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
import { statuses } from '@/utils/statuses';

export default {
  name: 'CharacterFitlers',
  data() {
    return {
      statuses,
    };
  },
  computed: {
    ...mapGetters(['filters']),
  },
  methods: {
    setName(name) {
      this.$store.commit('setFiltersName', name)
    },
    setStatus(status) {
      this.$store.commit('setFiltersStatus', status)
    },
  }
}
</script>
