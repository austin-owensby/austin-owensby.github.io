// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    index: localStorage.index ? localStorage.index : 0,
    subIndex: localStorage.subIndex ? localStorage.subIndex : 0,
    inDepth: localStorage.getItem('inDepth') !== null ? localStorage.inDepth === 'true' : false,
    page: localStorage.page ? localStorage.page : 0
  },
  mutations: {
    setIndex (state, newIndex) {
      state.index = newIndex
      localStorage.index = newIndex
    },

    setSubIndex (state, newSubIndex) {
      state.subIndex = newSubIndex
      localStorage.subIndex = newSubIndex
    },

    setInDepth (state, newInDepth) {
      state.inDepth = newInDepth
      localStorage.inDepth = newInDepth
    },

    setPage (state, newPage) {
      state.page = newPage
      localStorage.page = newPage
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  store: store
})
