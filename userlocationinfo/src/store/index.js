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
            console.log(state.listOfProperties, 'desde la store')

        }
    },
    actions: {
        async updatePropertiesList({ commit }) {
            try {
                const response = await fetch(url)
                console.log(response, 'response')
                const properties = await response.json()
                console.log(properties)
                commit('setPropertiesList', properties)
                
                console.log(this.state.listOfProperties, 'properties after')
            } catch (e) {
                console.log(e)
            }
        }
    }
});