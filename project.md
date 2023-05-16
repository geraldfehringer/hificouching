---
layout: project
title: Projects
---

<div id="map"></div>

<script>
    var map = L.map('map').setView([51.505, -0.09], 13);

    var marker = L.marker([51.5, -0.09]){icon: HifiIcon}).addTo(map);
    var popup = L.popup()
        .setLatLng([51.513, -0.09])
        .setContent("I am a standalone popup.")
        .openOn(map);

    var HifiIcon = L.icon({
        iconUrl: '/assets/images/hifi-location.png',
        iconSize:     [38, 95], // size of the icon
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
</script>