---
title: Community Setup's
layout: page
---

> Click on Icon to see HiFi setup details

<div id="map"></div>

<script>
  var map = L.map('map', {
    layers: [
            L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                'attribution': 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors'
            })
        ],
        center: [51.3127, 9.4797],
        zoom: 6,
        maxZoom: 19
    });

    var HifiIcon = L.icon({iconUrl: '/assets/images/hifi-location.png'});
    var mHifi = L.marker([53.551086, 9.993682], {icon: HifiIcon}).bindPopup('Standort: Hamburg<br>Speaker: Monitor M#1<br>Amp: Transisitor A/B Rotel<br>PreAmp: Transitor Denson DM-20<br>Sources: DAC,Vintage-CD,Vinyl,Qobuz').addTo(map);
    var mHifi = L.marker([51.3154546, 9.4924096], {icon: HifiIcon}).bindPopup('Standort: Kassel<br>Speaker: Monitor M#1<br>Amp: Transisitor A/B Rotel<br>PreAmp: Transitor Denson DM-20<br>Sources: DAC,Vintage-CD,Vinyl,Qobuz').addTo(map);
    var mHifi = L.marker([52.5170365, 13.3888599], {icon: HifiIcon}).bindPopup('Standort: Berlin<br>Speaker: Monitor M#1<br>Amp: Transisitor A/B Rotel<br>PreAmp: Transitor Denson DM-20<br>Sources: DAC,Vintage-CD,Vinyl,Qobuz').addTo(map);
    var mHifi = L.marker([50.3219015, 11.9178807], {icon: HifiIcon}).bindPopup('Standort: Hof/Bayern<br>Speaker: Monitor M#1<br>Amp: Transisitor A/B Rotel<br>PreAmp: Transitor Denson DM-20<br>Sources: DAC,Vintage-CD,Vinyl,Qobuz').addTo(map);
    var mHifi = L.marker([49.7596208, 6.6441878], {icon: HifiIcon}).bindPopup('Standort: Trier<br>Speaker: Monitor M#1<br>Amp: Transisitor A/B Rotel<br>PreAmp: Transitor Denson DM-20<br>Sources: DAC,Vintage-CD,Vinyl,Qobuz').addTo(map);
    var mHifi = L.marker([51.0493286, 13.7381437], {icon: HifiIcon}).bindPopup('Standort: Dresden<br>Speaker: Monitor M#1<br>Amp: Transisitor A/B Rotel<br>PreAmp: Transitor Denson DM-20<br>Sources: DAC,Vintage-CD,Vinyl,Qobuz').addTo(map);
    var mHifi = L.marker([50.938361, 6.959974], {icon: HifiIcon}).bindPopup('Standort: Köln<br>Speaker: Monitor M#1<br>Amp: Transisitor A/B Rotel<br>PreAmp: Transitor Denson DM-20<br>Sources: DAC,Vintage-CD,Vinyl,Qobuz').addTo(map);
    var mHifi = L.marker([53.0758196, 8.8071646], {icon: HifiIcon}).bindPopup('Standort: Bremen<br>Speaker: Monitor M#1<br>Amp: Transisitor A/B Rotel<br>PreAmp: Transitor Denson DM-20<br>Sources: DAC,Vintage-CD,Vinyl,Qobuz').addTo(map);
    var mHifi = L.marker([48.17222595214844, 14.535385131835938], {icon: HifiIcon}).bindPopup('Standort: St.Valentin/AT<br>Speaker: Monitor M#1<br>Amp: Transisitor A/B Rotel<br>PreAmp: Transitor Denson DM-20<br>Sources: DAC,Vintage-CD,Vinyl,Qobuz').addTo(map);
    var mHifi = L.marker([47.3744489, 8.5410422], {icon: HifiIcon}).bindPopup('Standort: Zürich/CH<br>Speaker: Monitor M#1<br>Amp: Transisitor A/B Rotel<br>PreAmp: Transitor Denson DM-20<br>Sources: DAC,Vintage-CD,Vinyl,Qobuz').addTo(map);
</script>