import rollouts from '../api/rollouts'
import Vue from "vue";
import {FETCH_ROLLOUTS} from "./actions.type";
import {RESET_STATE, SET_ROLLOUTS} from "./mutations.type";

const initialState = () => ({
  rollouts: []
})

const state = { ...initialState };

const getters = {
  rollouts(state) {
    return state.rollouts;
  }
};

const actions = {
  async [FETCH_ROLLOUTS](context) {
    const { data } = await rollouts.fetchRollouts();
    context.commit(SET_ROLLOUTS, data);
    return data;
  },}

export const mutations = {
  [SET_ROLLOUTS](state, rollouts) {
    state.rollouts = rollouts;
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
