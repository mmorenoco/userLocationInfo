<template>
  <div id="app" class="bg-blur">
    <Map :center="center" ref="center"/>
    <Coordinates @zoomMap="focusMap"/>
  </div>
</template>

<script>
import Map from './components/Map.vue'
import Coordinates from './components/Coordinates.vue'

import { mapGetters } from 'vuex'

export default {
  name: 'App',
  components: {
    Map,
    Coordinates
  },
  data() {
    return {
      center: {lat: -34.397, lng: 150.644}
    }
  },
  methods: {
    focusMap(coordinates){
      this.center.lat = coordinates.lng
      this.center.lng = coordinates.lat

      this.$nextTick(() => {
        this.$refs.center.initMap()
        this.$refs.center.setMarkers()
      })

    }
  },
  computed: {
    ...mapGetters(['properties', 'markers'])
  },
  created() {
    this.$store.dispatch('getProperties'),
    this.$store.dispatch('getMarkers')
  }
}
</script>

<style>

@font-face {
  font-family: 'Geomanist webfont';
  src: url(./fonts/Geomanist-Regular.otf);
}

html {
  height: 100vh;
  margin: 0;
  background-image: linear-gradient(to right top, #023059, #204472, #385a8b, #4f71a6, #6688c1, #648dc5, #6291c8, #6196cb, #4888b5, #307a9f, #1a6c89, #025e73);
  font-size: 10px;
  font-family: 'Geomanist webfont';
}

* {
  box-sizing: border-box;
}

:root {
  --main: #86A8E7;
  --secondary: #025E73;
  --details: #023059;
  --font: #C9DFF2;
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.map-container {
  width: 70vw;
  height: 700px;
}

#map {
  position: relative;
  width: 75vw;
  height: 700px;
  border-radius: 4px;
  border: 3px solid var(--main);
  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075)
  ;
}

.coordinates-container {
  background-image: linear-gradient(to bottom, #023059, #294b7a, #48699d, #6688c1, #86a8e7);
  width: 15vw;
  color: var(--main);
  border: 3px solid var(--main);
  border-radius: 4px;
  box-shadow:
    0 1px 1px hsl(0deg 0% 0% / 0.075),
    0 2px 2px hsl(0deg 0% 0% / 0.075),
    0 4px 4px hsl(0deg 0% 0% / 0.075),
    0 8px 8px hsl(0deg 0% 0% / 0.075),
    0 16px 16px hsl(0deg 0% 0% / 0.075)
  ;
}

</style>
