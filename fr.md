---
title: Sohil Pramij
layout: default
lang: fr
---

<div class="sidenav">
    {% for chapters in site.FR %}
      <a href='#{{ chapters.link }}'>{{chapters.title}}</a>
    {% endfor %}
    <a href="/contact_fr">Contact</a>
    <a href="/">English please</a>
</div>

{% for chapters in site.FR %}
  {{ chapters.content }}
{% endfor %}
