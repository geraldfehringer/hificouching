---
title: Tube Inventory
layout: page
datatable: true
---

![Audio Note](/assets/images/audionote-tube.jpg)

_Source: unfortunately, not my personal chain - pic from an great Japan-Audiophile :grin:_

---

# Tube Databases / Data-Sheets

- [KyteLabs InfoBase](https://www.dl7avf.info/charts/roehren/index.html)
- [Patric Sokoll Datenblätter](https://patric-sokoll.de/R%C3%B6hrenmuseum/Datenbank/Liste%20Hersteller.html)
- [tdsl search database](https://tdsl.duncanamps.com/tubesearch.php)
- [Frank Tabellen](https://frank.pocnet.net/)

# Tube Measurement (Roetest V11)

<iframe width="560" height="315" src="https://www.youtube.com/embed/42zvQq45hVo?si=Rntmciz32rBICJfe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---

# Gerihifi Personal Tube Inventory

> Note: i'm always interested to collect and exchange NOS tubes. If you are interested, sent me an E-Mail to: gf @ hificouch . world

:notes:

<table id="tubes" class="display" style="width:100%">
  {% for row in site.data.tubeinventory %}
  <thead>
    {% if forloop.first %}
    <tr>
      {% for pair in row %}
        <th>{{ pair[0] }}</th>
      {% endfor %}
    </tr>
    {% endif %}
    {% tablerow pair in row %}
      {{ pair[1] }}
    {% endtablerow %}
  </thead>
  {% endfor %}
</table>
