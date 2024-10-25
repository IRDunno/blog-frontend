export const state = () => ({})

export const mutations = {}

export const actions = {}

export const getters = {
    authenticated(state) {
        return state.auth.loggedIn;
    },
    user(state) {
        return state.auth.user;
    }
}