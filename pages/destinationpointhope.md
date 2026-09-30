---
layout: page
title: DESTINATION POINT HOPE
categories: flightsimulation
permalink: /destinationpointhope/
description: >-
  Destination Point Hope is a long-distance journey across Canada and Alaska, flown entirely in Microsoft Flight Simulator 2024.

  Starting from Oshawa, Ontario, I’m taking my A2A Comanche north and west, following a route of more than 3,000 nautical miles toward Point Hope, Alaska.

  This journey is about more than reaching a destination. Each leg is planned and flown as realistically as possible, using real weather, charts, NOTAMs, navigation and weight & balance calculations - just like a real cross-country flight.

  Along the way, I’ll share the landscapes, airfields, challenges and unexpected moments that make this journey feel like a real adventure.
---

{% for post in site.tags.destination-point-hope %}
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
