<template>
<div class="map-container">
  <div id="map">

  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

import { Loader } from "@googlemaps/js-api-loader"

export default {
    name: 'Maps',
    methods: {
        ...mapActions(['updatePropertiesList']),
        showProperties() {
            this.updatePropertiesList()
        },
        loadMap() {
            const loader = new Loader({
                apiKey: "",
                version: "weekly",
                libraries: ["places"]
            })

            const mapOptions = {
                center: {
                    lat: 40.2085,
                    lng: -3.713
                },
                zoom: 6
            }

            loader
            .load()
            .then((google) => {
                const map = new google.maps.Map(document.getElementById("map"), mapOptions);

                new google.maps.Marker({
                    position: { lat: 40.2085, lng: -3.703339},
                    map: map,
                    title: "Madrid",
                })

                return map
            })

            .catch(e => {
                console.log(e)
            })
        }
    },
    mounted() {
        this.showProperties(),
        this.loadMap()
    }
}
</script>

<style>
    #map {
        margin: 0 auto;
        height: 500px;
        width: 90vw;
        border-radius: 2px;
        -webkit-box-shadow: 0px 0px 5px 0px rgba(31,35,38,1);
        -moz-box-shadow: 0px 0px 5px 0px rgba(31,35,38,1);
        box-shadow: 0px 0px 5px 0px rgba(31,35,38,1);
    }

    .map-container {
        width: 100vw;
        height: 500px;
        padding-top: 50px;
        padding-bottom: 50px;

    }


    @media only screen and  (max-width: 576px) {
        #map {
            width: 100vw;
            border-radius: 0px;
            box-shadow: none;
        }
    }
</style>