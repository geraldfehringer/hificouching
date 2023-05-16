---
title: Test Page
layout: page
---

# OpenStreetMap

<div id="map"></div>

<script>
    var map = L.map('map').setView([51.505, -0.09], 13);
    var HifiIcon = L.icon({iconUrl: '/assets/images/hifi-location.png'});
    var mHifi = L.marker([51.5, -0.09], {icon: HifiIcon}).bindPopup('I am a Hifi Location.').addTo(map);
</script>