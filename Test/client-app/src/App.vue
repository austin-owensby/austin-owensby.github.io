<template>
    <div id="app">
        <div id="nav-bar-container" :class="{ inDepth: inDepth, hideNav: hideNav }">
            <NavBar v-if="!hideNav" @inDepthToggle="toggleInDepth"></NavBar>
        </div>
        <div id="content-container" :class="{ inDepth: inDepth, hideNav: hideNav }">
            <div v-if="hideNav" class="nav-toggle" @click="toggleNav">▼</div>
            <div v-else class="nav-toggle" @click="toggleNav">▲</div>
            <div v-if="hideInfo" class="info-toggle hideInfo" @click="toggleInfo">◀</div>
            <div v-else class="info-toggle" @click="toggleInfo">▶</div>
            <div id="game-container" :class="{ hideInfo: hideInfo }">
                <Game></Game>
            </div>
            <div id="info-container" :class="{ hideInfo: hideInfo }">
                <Info v-if="!hideInfo"></Info>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Info from './components/Info.vue'
import Game from './components/Game.vue'

export default {
  name: 'App',
  data () {
    return {
      hideNav: false,
      hideInfo: false
    }
  },
  mounted () {
    if (localStorage.getItem('hideNav') !== null) {
      this.hideNav = localStorage.hideNav === 'true'
    } else {
      localStorage.hideNav = this.hideNav
    }

    if (localStorage.getItem('hideInfo') !== null) {
      this.hideInfo = localStorage.hideInfo === 'true'
    } else {
      localStorage.hideInfo = this.hideInfo
    }
  },
  watch: {
    hideNav (newHideNav) {
      localStorage.hideNav = newHideNav
    },

    hideInfo (newHideInfo) {
      localStorage.hideInfo = newHideInfo
    }
  },
  methods: {
    toggleNav: function () {
      this.hideNav = !this.hideNav
    },

    toggleInfo: function () {
      this.hideInfo = !this.hideInfo
    }
  },
  computed: {
    inDepth () {
      return this.$store.state.inDepth
    }
  },
  components: {
    NavBar,
    Info,
    Game
  }
}
</script>

<style>
html, body, #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
}

#nav-bar-container{
    height: 189px;
    width: 100%;
    border-bottom: solid 2px;
}

#nav-bar-container.inDepth{
    height: 278px;
}

#nav-bar-container.hideNav{
    height:0%;
}

    #app .nav-toggle,
    #app .info-toggle {
        height: 22px;
        width: 22px;
        background-color: #00f;
        position: absolute;
        border: 2px solid black;
        border-top: none;
        border-left: none;
        color: lightgray;
        cursor: pointer;
    }

    #app .info-toggle {
        height: 22px;
        width: 22px;
        background-color: #00f;
        position: absolute;
        border: 2px solid black;
        border-top: none;
        color: lightgray;
        right: 20%;
    }

    #app .info-toggle.hideInfo{
        right: 0;
    }

#content-container{
    height: calc(100% - 189px);
    width: 100%;
    display: flex;
}

#content-container.inDepth{
    height: calc(100% - 278px);
}

#content-container.hideNav{
    height: 100%;
}

#game-container{
    height: 100%;
    width: 80%;
    border-right: solid 2px;
}

    #game-container.hideInfo {
        width: 100%;
    }

#info-container{
    height: 100%;
    width: 20%;
}

#info-container.hideInfo{
    width: 0;
}
</style>
