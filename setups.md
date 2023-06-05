---
title: Community Setup's
layout: page
---

> **Click on Icon to see HiFi setup details** <br>
> Under the map is a search field - full-text, if you are looking for some specific gear! <br>
> Here our application [architecture](/assets/images/hifiworld_architecture.png)

**SHARING YOUR SETUP?** \
**Please, add them  [HERE](hifisetups) ...**

<hr>

**REQUEST LISTENING SESSION?** \
**Please, go  [HERE](request) ...**

<hr>

Map default zoom is based on overall system geo location and will be automatically grouped if more systems are close to each other.

<div id="map"></div>
<br>
**Fulltext Search:**
 <div id="filter-container">
        <form class="form-search" class="noSelect" onSubmit="addCsvMarkers(); return false;">
            <a href="#" id="clear" class="leaflet-popup-close-button">&#215;</a>
            <div class="input-append">
                <input type="text" id="filter-string" class="input-large search-query search-box" autocomplete="off">
               <button type="submit" class="btn search-box"><i class="icon-search">GO</i></button>
                <!-- <span class="add-on">
                </span> -->
            </div>
        </form>
        <div id="search-results" class="leaflet-control-attribution leaflet-control pull-right"></div>
</div>

<script src="/assets/js/leaflet.markercluster.js"></script>
<script src="/assets/js/leaflet.geocsv.js"></script>
<script src="/assets/js/leaflet.label.js"></script>

<script src="/assets/js/configmap.js"></script>
<script src="/assets/js/hifimap.js"></script>

<script src="/assets/js/Leaflet.AnimatedSearchBox.js"></script>
