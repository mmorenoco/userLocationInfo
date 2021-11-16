<template>
    <div class="coordinates-container">
        <h1 class="coordinates-list--header">Click to Focus</h1>
        <div class="coordinates-list__element" v-for='marker in markers' :key='marker.id'  @click="zoomMap(marker.lat, marker.lon)">
                <div class="coordinates-list__id">{{ marker.id }}</div>
                <div class="coordinates-list__lat">{{ marker.lat }}</div>
                <div class="coordinates-list__lon">{{ marker.lon }}</div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Coordinates',
    methods: {
        zoomMap(lat, lon) {
            console.log(lat,lon, 'zoomMap')
            const latLon = {
                lat: lon,
                lng: lat
            }
            
            this.$emit('zoomMap', latLon)
        }
    },
    computed: {
        ...mapGetters(['markers'])
    }
}
</script>

<style>
.coordinates-list--header {
    background-color: var(--secondary);
    color: var(--main);
    margin: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 3em;
}

.coordinates-list__element {
    margin: 0;
    list-style: none;
    display: flex;
    flex-direction: row;
    color: var(--font);
    height: 30px;
    padding-top: 20px;
    padding-bottom: 25px;
}

.coordinates-list__element {
    font-size: 2em;
}

.coordinates-list__element:hover {
    background-color: var(--details);
    color: var(--two);
    cursor:pointer;
}

.coordinates-list__id {
    width: 10%;
}

.coordinates-list__lat, .coordinates-list__lon {
    width: 50%;
    padding-right: 10px;
}

.coordinates-list__id, .coordinates-list__lat, .coordinates-list__lon {
    text-align: right;
}
</style>