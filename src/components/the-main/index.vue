<template>
  <div class="the-main">
    <div class="the-main__grid">
      <div class="the-main__img">
        <img :src="character.image" :alt="character.name">
      </div>
      <div>
        <h3>
          {{character.name}}
        </h3>
        <p>
          {{character.status}} - {{character.species}}
        </p>
        <p>
          Episodes featuring {{character.name}}: {{someEpisodeWithCharacter}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TheMain',
  props: {
    character: {
      type: Object,
      required: true 
    }
  },
  data() {
    return {
      numOfEpisodes: 5
    }
  },
  computed: {
    someEpisodeWithCharacter() {
      return this.character.episode.slice(0, this.numOfEpisodes).join(', ')
    }
  }
}
</script>
