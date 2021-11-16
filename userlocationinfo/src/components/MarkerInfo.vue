<template>
    <div class="markerInfo-container">
        <div class="markerInfo-img">
            <img class="markerInfo-img__image" :src="markerInfo[0].image1" alt="image1">
        </div>
        <p class="markerInfo-container__property">Address: {{ markerInfo[0].address }}</p>
        <p class="markerInfo-container__property">Country: {{ markerInfo[0].country }}</p>
        <p class="markerInfo-container__property">Description: {{ properties[0].description }}</p>
        <p class="markerInfo-container__property">Meters: {{ markerInfo[0].meters }}</p>
        <p class="markerInfo-container__property">Name: {{ markerInfo[0].name }}</p>
        <p class="markerInfo-container__property">Price: {{ markerInfo[0].price }}</p>
        <p class="markerInfo-container__property">Rooms: {{ markerInfo[0].rooms }}</p>
        <p class="markerInfo-container__property">Zone: {{ markerInfo[0].zone }}</p>
        <div class="markerInfo-block" @click="closeProperties()">X</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'MarkerInfo',
    data() {
        return {
            markerInfo: null
        }
    },
    methods: {
        getMarkerProperties(id) {
            this.$store.dispatch('getProperties')
                console.log(id)
                this.markerInfo = this.properties.filter(el => (el.id == id))
        },
        closeProperties() {
            this.$emit('close')
        }
    },
    computed: {
        ...mapGetters(['properties'])
    }
}
</script>

<style>
    .markerInfo-container {
        position: fixed;
        top: 100px;
        left: 5%;
        background-color: var(--secondary);
        width: 400px;
        height: 600px;
        color: var(--main);
        border-radius: 4px;
        border: 3px solid var(--main);
        -webkit-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
        font-size: 2em;
    }

    .markerInfo-img__image {
        width: 370px;
        height: 200px;
        margin-top: 10px;
        border-radius: 4px;
        border: 3px solid var(--main);
    }

    .markerInfo-container__element {
        margin: 0;
    }

    .markerInfo-block {
        position: absolute;
        color: var(--main);
        bottom: 0;
        left: 90.5%;
        font-size: 1.5em;
        background-color: var(--details);
        padding-right: 2.5%;
        padding-left: 2.5%;
        padding-top: 2.5%;
        border-top-left-radius: 3px;
        border-bottom-right-radius: 4px;
    }

    .markerInfo-block:hover {
        cursor: pointer;
    }

</style>