    const state = () => {
    user: undefined
    error: undefined
    message: ''
}
    const mutations = {
    setUser: (state, user) => state.user = user,
    clearUser: (state) => state.user = undefined,
    setError: (state, e) => state.error = e,
    clearError: (state) => state.error = undefined,
    setMessage (state, message) {
        state.message = message
        console.log(state.message)
    }
}
    const actions = {
        fetchUser ({ commit }, user) {
            commit('setUser', user)
            console.log(user)
            commit('setMessage', 'User Is')
        },
        clearUser ({ commit },) {
            commit('clearUser')
            commit('setMessage', 'Clear User Data')
        },
        fetchError ({ commit }, e) {
            commit('setError', e)
            commit('setMessage', e.message)
        },
        clearError ({ commit }) {
            commit('clearError')
            commit('setMessage', 'Clear Error')
        },
}
    const getters = {
    getUser: state => state.user,
    getError: state => state.error
}
export default {
    state, mutations, actions, getters
}