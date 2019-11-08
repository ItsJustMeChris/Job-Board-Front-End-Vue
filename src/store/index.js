import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    session: undefined,
    jobs: undefined,
    companies: undefined,
    user_companies: undefined,
    user: undefined,
    location: undefined,
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
    setJobs({ commit }, jobs) {
      commit('mutate', { stateId: 'jobs', data: jobs });
    },
    setCompanies({ commit }, companies) {
      commit('mutate', { stateId: 'companies', data: companies });
    },
    addCompany({ commit }, company) {
      commit('mutate', { stateId: 'companies', data: [...this.getters.companies, company] });
    },
    setUserCompanies({ commit }, companies) {
      commit('mutate', { stateId: 'user_companies', data: companies });
    },
    addUserCompany({ commit }, company) {
      commit('mutate', { stateId: 'companies', data: [...this.getters.userCompanies, company] });
    },
  },
  getters: {
    session: state => state.session,
    user: state => state.user,
    jobCount: state => state.job_count,
    companyCount: state => state.company_count,
    jobs: state => state.jobs,
    companies: state => state.companies,
    userCompanies: state => state.user_companies,
  },
  modules: {
  },
});
