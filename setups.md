---
title: Community Setup's
layout: page
---

> **Click on Icon to see HiFi setup details**

**SHARING YOUR SETUP?** \
**Please, add them  [HERE](hifisetups) ...**

**REQUEST LISTENING SESSION?** \
**Please, go  [HERE](request) ...**


 <br/>

<div id="map"></div>
 <div id="filter-container">
        <form class="form-search" class="noSelect" onSubmit="addCsvMarkers(); return false;">
            <a href="#" id="clear" class="leaflet-popup-close-button">&#215;</a>
            <div class="input-append">
                <input type="text" id="filter-string" class="input-medium search-query search-box" autocomplete="off">
                <button type="submit" class="btn search-box"><i class="icon-search"></i></button>
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