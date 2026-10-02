---
layout: page
title: DESTINATION POINT HOPE
permalink: /destinationpointhope/
description: >-
  A long-distance journey across Canada and Alaska, flown entirely in Microsoft Flight Simulator 2024.
  This fictional journey follows a virtual pilot flying from Oshawa, Ontario, to Point Hope, Alaska, while trying to recreate as realistically as possible everything surrounding a real cross-country trip.
published: true
---

<div class="page-grid">

{% for post in site.categories.flightsimulation reversed %}

  {% if post.tags contains "DPH" %}

    <article>
      <h2>
        <a href="{{ site.github.url }}{{ post.url }}">
          {{ post.title }}
        </a>
      </h2>

      <span class="post-date">
        {{ post.date | date: "%B %-d, %Y" }}
      </span>

      {% if post.cover %}
        <a href="{{ site.github.url }}/assets/img/{{ post.cover }}">
          <img src="{{ site.github.url }}/assets/img/{{ post.cover }}" alt="{{ post.title }}">
        </a>
      {% endif %}
    </article>

  {% endif %}

{% endfor %}

</div>
