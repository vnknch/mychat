import firebase from "firebase"
require('firebase/auth')
const state = () => {

}
const mutations = {

}
const actions = {
    async signUp ({ dispatch }, usersData) {
        const auth = firebase.auth()
        try {
            dispatch('user/clearError')
            await auth.createUserWithEmailAndPassword(usersData.email, usersData.password)
            dispatch('setUserInfo', usersData)
        } catch (error) {
            dispatch('user/fetchError', error)
        }
    },
    signIn ({ dispatch }, usersData) {
        
    },
    userId () {
        const user = firebase.auth().currentUser
        return user ? user.uid: undefined
    },
    async setUserInfo ({ dispatch }, userData) {
        const db = firebase.database()
        try {
            const uid = await dispatch('userId')
            await dispatch('user/fetchUser', {
                ...userData,
                id: uid
            })
            db.ref(`Users/${uid}/info`).set({
                ...userData
            })
        } catch (error) {
            dispatch('user/fetchError', error)
        }
    }
}
const getters = {

}
export default {
    state, mutations, actions, getters
}