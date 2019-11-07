import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    session: undefined,
    jobs: undefined,
    location: undefined,
    user: undefined,
    job_count: undefined,
    company_count: undefined,
  },
  mutations: {
    mutate(state, { stateId, data }) {
      state[stateId] = data;
    },
  },
  actions: {
    setSession({ commit }, token) {
      commit('mutate', { stateId: 'session', data: token });
    },
    setUser({ commit }, user) {
      commit('mutate', { stateId: 'user', data: user });
    },
    setJobCount({ commit }, count) {
      commit('mutate', { stateId: 'job_count', data: count });
    },
    setCompanyCount({ commit }, count) {
      commit('mutate', { stateId: 'company_count', data: count });
    },
  },
  getters: {
    session: state => state.session,
    user: state => state.user,
    jobCount: state => state.job_count,
    companyCount: state => state.company_count,
  },
  modules: {
  },
});
