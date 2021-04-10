export default {
  state: {
    data: {},
  },
  getters: {
    data: (state) => state.data,
  },
  actions: {
    clearForm({ commit }) {
      commit('CLEAR_FORM');
    },
    changeFormData({ commit }, info) {
      console.log({ info });
      commit('CHANGE_FORM_DATA', info);
    },
  },
  mutations: {
    CLEAR_FORM(state) {
      state.data = {};
    },
    CHANGE_FORM_DATA(state, info) {
      // {name: '', value: ''}
      if (!state.data[info.label]) {
        state.data[info.label] = '';
      }
      state.data[info.label] = info;
    },
  },
};
