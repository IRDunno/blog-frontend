export const state = () => ({
  success: {},
});

export const getters = {
  success(state) {
    return state.success;
  },
};

export const mutations = {
  SET_VALIDATION_SUCCESS(state, success) {
    state.success = success;
  },
};

export const actions = {
  setSuccess({ commit }, success) {
    commit("SET_VALIDATION_SUCCESS", success);
  },
  clearSuccess({ commit }) {
    commit("SET_VALIDATION_SUCCESS", {});
  },
};
