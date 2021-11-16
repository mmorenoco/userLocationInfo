import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const url = 'https://6127f54fc2e8920017bc0f47.mockapi.io/api/v1/properties'

export default new Vuex.Store({
  state: {
    properties: [],
    markers: []
  },
  mutations: {
    updateProperties(state, payload) {
      state.properties = payload
    },
    updateMarkers(state, payload) {
      state.markers = payload
    }
  },
  actions: {
    getProperties({ commit }) {
      try {
        axios.get(url).then((response) => {
          commit('updateProperties', response.data)
        })
      } catch(e) {
        console.log(e)
      }
    },
    getMarkers({ commit }) {
      try {
        axios.get(url).then((response) => {
          const markers = response.data.map(el =>({id: el.id, lat: parseFloat(el.lat), lon: parseFloat(el.lon)}))
          commit('updateMarkers', markers)
        })
      } catch(e) {
        console.log(e)
      }
    }
  },
  getters: {
    properties: state => state.properties,
    markers: state => state.markers
  },
  modules: {
  }
})