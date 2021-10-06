import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = 'https://6127f54fc2e8920017bc0f47.mockapi.io/api/v1/properties'

export default new Vuex.Store({
    state: {
        listOfProperties : [],
    },
    mutations: {
        setPropertiesList(state, listOfProperties) {
            state.listOfProperties = listOfProperties
        }
    },
    actions: {
        async updatePropertiesList({ commit }) {
            try {
                const response = await fetch(url)
                console.log(response)
                const properties = await response.json()
                commit('setPropertiesList', properties.data)
                console.log(properties[0].lat)
            } catch (e) {
                console.log(e)
            }
        }
    }
});