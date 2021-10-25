<template>
  <div class="places">
      <h1>Zoom Places</h1>
      <div v-for="properties in this.listOfProperties" :key="properties.id">
          { properties.id }

      </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name: 'Places',
    methods: {
          ...mapActions(['updatePropertiesList']),
          showPlaces() {
              this.updatePropertiesList()
          }
    },
    created() {
        this.showPlaces()
    }
}
</script>

<style>

</style>