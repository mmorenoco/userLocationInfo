<template>
<div class="map-container">
    <div id="map"></div>
    <MarkerInfo  ref="getMarkerInfo" v-if="showMarkerInfo" @close="closeMarkerProperties" />
</div>
</template>

<script>
import { mapGetters } from 'vuex'

import MarkerInfo from './MarkerInfo.vue'

export default {
    name: 'Map',
    components: {
        MarkerInfo
    },
    props: {
        center: null,
    },
    data() {
        return {
            map: null,
            markerId: null,
            showMarkerInfo: null
        }
    },
    methods: {
        initMap() {
            this.map = new google.maps.Map(document.getElementById('map'), {
                center: this.center,
                zoom: 6,
                maxZoom:12,
                minZoom: 3,
                streetViewControl: false,
                mapTypeControl: false,
                fullscreenControl: false,
                zoomControl: true
                })
        },
        setMarkers() {
            this.$store.dispatch('getMarkers')
            setTimeout(() => {
                let points = this.markers
                this.$nextTick(() => {
                for(let i=0;i< points.length;i++){
                    const marker = new google.maps.Marker({
                        position: { lat: points[i].lat, lng: points[i].lon},
                        icon: {
                            path: google.maps.SymbolPath.CIRCLE,
                            scale: 16,
                            strokeColor: '#023059', 
                            strokeWeight: 5,
                            fillColor: '#86A8E7', 
                            fillOpacity:0.75
                        },
                        label: {
                            text: points[i].id,
                            color: '#025E73'
                        },
                        map: this.map
                    })

                    marker.addListener('click', () => {
                    this.showMarkerInfo = true
                    this.markerId = points[i].id
                    this.$refs.getMarkerInfo.getMarkerProperties( this.markerId)
                    })
                }
                })
            }, 1500)
            

        },
        closeMarkerProperties() {
            this.showMarkerInfo = false
        }
    },
    computed: {
        ...mapGetters(['markers'])
    },
    mounted: function() {
        this.initMap(),
        this.setMarkers()
    }
}
</script>

<style>


</style>