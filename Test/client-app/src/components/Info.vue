<template>
    <div id="info">
        Info
        <template v-if="index == 0">
            <template v-if="subIndex == 0">
                <IntroInfo></IntroInfo>
            </template>
        </template>
    </div>
</template>

<script>
import IntroInfo from './info/IntroInfo.vue'

export default {
  name: 'Info',
  computed: {
    index () {
      return this.$store.state.index
    },
    subIndex () {
      return this.$store.state.subIndex
    },
    page () {
      return this.$store.state.page
    }
  },
  components: {
    IntroInfo
  }
}
</script>

<style scoped>
    #info{
        height: 100%;
        width: 100%;
        overflow-y: auto;
    }
</style>
