---
title: Test Page
layout: page
---

# Open Street Map

<div id="map"></div>

<script>
    var map = new L.Map("map", {
        center: new L.LatLng(44.4949, 11.3426),
        zoom: 2,
    });

    var layer = new L.StamenTileLayer("toner-lite");
    map.addLayer(layer);
</script>