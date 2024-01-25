---
title: Tube Inventory
layout: page
datatable: true
---

![Audio Note](/assets/images/audionote-tube.jpg)

# Tube Databases / Data-Sheets

- [KyteLabs InfoBase](https://www.dl7avf.info/charts/roehren/index.html)
- [Patric Sokoll Datenblätter](https://patric-sokoll.de/R%C3%B6hrenmuseum/Datenbank/Liste%20Hersteller.html)
- [tdsl search database](https://tdsl.duncanamps.com/tubesearch.php)
- [Frank Tabellen](https://frank.pocnet.net/)

# Gerihifi Personal Tube Inventory

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
  <thead>
  {% endfor %}
</table>
