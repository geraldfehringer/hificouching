---
title: Test Page
layout: page
---

# OpenStreetMap

<div id="map"></div>

<script>
    const map = L.map('map').setView([51.505, -0.09], 13);
    const HifiIcon = L.icon({iconUrl: '/assets/images/hifi-location.png'});
    L.marker([51.5, -0.09]){icon: HifiIcon}).addTo(map);
    const mHifi = L.marker([51.5, -0.09], {icon: HifiIcon}).bindPopup('I am a Hifi Location.').addTo(map);
</script>