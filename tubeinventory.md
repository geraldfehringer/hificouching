---
title: Tube Inventory
layout: page
---

![Audio Note](/assets/images/audionote-tube.jpg)

# Gerihifi Personal Tube Inventory

:notes:


<table>
  {% for row in site.data.tubeinventory %}
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
  {% endfor %}
</table>