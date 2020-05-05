import Vue from 'vue'
import Vuex from 'vuex'
import vulnerabilities from './vulnerabilities.module'
import rollouts from './rollouts.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    vulnerabilities,
    rollouts
  }
})
