import Vue from 'vue'
import Vuex from 'vuex'
import vulnerabilities from './vulnerabilities.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vulnerabilities
  }
})
