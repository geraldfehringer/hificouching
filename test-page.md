---
title: Test Page
layout: page
---

# Open Street Map

<div id="map">

<script>
    var map = L.map('map').setView([51.505, -0.09], 13);
    var layer = new L.StamenTileLayer("toner-lite");
    map.addLayer(layer);
    var marker = L.marker([51.5, -0.09]).addTo(map);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
</script>

</div>