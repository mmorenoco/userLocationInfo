<template>
<div class="map-container">
  <div id="map">

  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import { mapState } from 'vuex';

export default {
    name: 'Map',
    methods: {
        /* eslint-disable */
        ...mapActions(['updatePropertiesList']),
        showProperties() {
            this.updatePropertiesList()
            console.log(this.listOfProperties, 'desde el componente')
        },
        initMap() {

            const markers = this.listOfProperties.map(el => ([el.lat, el.lon])) 
            console.log(markers, 'markers')

            const map = new google.maps.Map(document.getElementById("map"), {
                center: { lat: 40.4165, lng: -3.70256 },
                zoom: 6,
                mapTypeControl: false,
                streetViewControl: false
            });

            for(let i=0;i<markers.length;i++){
                console.log(markers[i])
                const  myLatLng = { lat: parseFloat(markers[i][1]), lng: parseFloat(markers[i][0]) };
                console.log(myLatLng, 'mi lat long')
                new google.maps.Marker({
                    position: myLatLng,
                    map
                });
            }

            return map
        }
    },
    async mounted() {
        this.showProperties(),
        this.initMap()
    },
    computed: {
        ...mapState(['listOfProperties'])
    }
}
</script>

<style>
    #map {
        margin: 0 auto;
        height: 600px;
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