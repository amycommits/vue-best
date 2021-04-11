import { createStore } from 'vuex';
import form from './modules/form.module';

export default createStore({
  state: {
    frontendTechnologies: ['JavaScript', 'VueJS', 'ReactJS', 'Angular'],
    backendTechnologies: ['Ruby on Rails', 'Python'],
  },
  getters: {
    frontendTechnologies: (state) => state.frontendTechnologies,
    backendTechnologies: (state) => state.backendTechnologies,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    form,
  },
});
