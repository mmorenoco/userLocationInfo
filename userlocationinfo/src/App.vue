<template>
  <div id="app">
    <Map />
    <Places />
  </div>
</template>

<script>
import Map from './components/Map.vue'
import Places from './components/Places.vue'

export default {
  name: 'App',
  components: {
    Map,
    Places
  }
}
</script>

<style>
  @font-face {
    font-family:  'Geomanist webfont';
    src: url(fonts/Geomanist-Regular.otf);
  }
 
  :root {
    --main: #1F2326;
    --secondary: #7C9AA6;
    --details-one: #2D6673;
    --details-two: #5C6F73;
  }

  html {
    background-color: var(--details-one);
  }

  body {
    margin: 0 auto;
  }

  #app {
    font-family: 'Geomanist webfont',Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    /* background-color: var(--details-two); */
    color: #2c3e50;
    margin: 0px;
    margin-top: 100px;
  }

</style>
