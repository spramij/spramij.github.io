---
title: Sohil Pramij
layout: default
lang: en
---

<div class="sidenav">
    {% for chapters in site.EN %}
      <a href='#{{ chapters.link }}'>{{chapters.title}}</a>
    {% endfor %}
    <a href="/contact">Contact</a>
    <a href="/fr">Français SVP</a>

</div>

{% for chapters in site.EN %}
  {{ chapters.content }}
{% endfor %}

