---
title: Community Setup's
layout: page
---

> **Klick auf eines der grünen Icon's, um Details zu sehen!** <br>
> Unterhalb der Karte ist ein Suchfeld für Freitext, einfach nutzen wenn Ihr nach was bestimmten sucht! <br>

**DU MÖCHTEST DEIN SETUP AUCH MIT DER COMMUNITY TEILEN?** \
**Bitte, nutze das Google Formular [HIER](hifisetups) ...**

<hr>

**DU MÖCHTEST EINE HÖRPROBE BEI JEMANDEM?** \
**Bitte, nutze hierzu das Formular [HIER](request) ...**

<hr>

Je nachdem wo die Setup's sind, wird der Zoom der Karte automatisch angepasst, daher gerne ran-zoomen. <br>
**HINWEIS: Ein grüner Kreis mit einer Zahl, zeigt an da sind mehrere Setups und daher einfach eine Doppelklick um näher zu zoomen ;-)**

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
