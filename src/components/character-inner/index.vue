<template>
<div>
  <div class="the-main__img">
    <img :src="character.image" :alt="character.name">
  </div>
</div>
</template>
<script>
const SHOW_EPISODES_COUNT = 5;

export default {
  name: 'CharacterInner',
  props: {
    character: { type: Object, required: true },
  },
  computed: {
    someEpisodeWithCharacter() {
      if (!this.character) {
        return null;
      }
      return this.character.episode.slice(0, SHOW_EPISODES_COUNT).join(', ')
    }
  }
}
</script>
