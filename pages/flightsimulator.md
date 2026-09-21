---
layout: page
title: FLIGHT SIMULATOR
permalink: /flightsimulator
description : Une collection de vols virtuels, de voyages au long cours et d’expériences autour de la simulation aérienne.
---

{% for post in site.categories.flightsimulator %}
  <article>
    <h2>
      <a href="{{ site.github.url }}{{ post.url }}">{{ post.title }}</a>
    </h2>

    <span class="post-date">
      {{ post.date | date: "%B %-d, %Y" }}
    </span>

    {% if post.cover %}
<a href="{{ site.github.url }}{{ post.url }}">
  <img src="{{ site.github.url }}/assets/img/{{ post.cover }}" alt="{{ post.title }}">
</a>
    {% endif %}
  </article>
{% endfor %}
