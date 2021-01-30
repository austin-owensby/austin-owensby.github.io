<template>
    <div id="game">
        Games
        <template v-if="index == 0">
            <template v-if="subIndex == 0">
                <Intro></Intro>
            </template>
        </template>
    </div>
</template>

<script>
import Intro from './games/Intro.vue'

export default {
  name: 'Game',
  data () {
    return {
      page: this.$store.state.page
    }
  },
  computed: {
    index () {
      return this.$store.state.index
    },
    subIndex () {
      return this.$store.state.subIndex
    }
  },
  watch: {
    page (newPage) {
      this.$store.commit('setPage', newPage)
    }
  },
  components: {
    Intro
  }
}
</script>

<style scoped>
    #game {
        height: 100%;
        width: 100%;
    }
</style>
