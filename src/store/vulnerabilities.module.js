import vulnerabilities from '../api/vulnerabilities'
import Vue from "vue";
import {FETCH_VULNERABILITIES} from "./actions.type";
import {RESET_STATE, SET_VULNERABILITIES} from "./mutations.type";

const initialState = () => ({
  vulnerabilities: []
})

const state = { ...initialState };

const getters = {
  vulnerabilities(state) {
    return state.vulnerabilities;
  }
};

const actions = {
  async [FETCH_VULNERABILITIES](context) {
    const { data } = await vulnerabilities.fetchVulnerabilities();
    context.commit(SET_VULNERABILITIES, data);
    return data;
  },}

export const mutations = {
  [SET_VULNERABILITIES](state, vulnerabilities) {
    state.vulnerabilities = vulnerabilities;
  },
  [RESET_STATE]() {
    for (let f in state) {
      Vue.set(state, f, initialState[f]);
    }
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
