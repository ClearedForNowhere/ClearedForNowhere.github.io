---
layout: page
title: FLIGHT SIMULATION
permalink: /flightsimulation
description: >-
  A collection of virtual flights, long-distance journeys, and imagined stories built around flight simulation.
  These stories are entirely fictional and follow the life of a virtual pilot as he travels from one destination to another in Microsoft Flight Simulator. I try to take immersion and realism as far as possible, imagining everything that   could happen around a flight such as planning the navigation, managing fuel, finding somewhere to spend the night, heading into town for a meal, setting up camping gear, or simply taking the time to enjoy the place where I have just landed.
  All of this is, of course, part of the fiction. The goal is simply to bring these journeys to life and create a story around each flight.
---

<article>
  <h2>
    <a href="{{ site.github.url }}/destinationpointhope">
      DESTINATION POINT HOPE
    </a>
  </h2>

  <p>
    A long-distance journey across Canada and Alaska, flown entirely in Microsoft Flight Simulator 2024.
  </p>

  <a href="{{ site.github.url }}/destinationpointhope">
    <img src="{{ site.github.url }}/assets/img/DPH_THE_PROJECT/COVER/DESTINATION_POINT_HOPE_COVER.jpg" alt="DESTINATION POINT HOPE">
  </a>
</article>

{% for post in site.categories.flightsimulation %}
{% unless post.tags contains "destination-point-hope" %} <article> <h2> <a href="{{ site.github.url }}{{ post.url }}">{{ post.title }}</a> </h2>

```
  <span class="post-date">
    {{ post.date | date: "%B %-d, %Y" }}
  </span>

  {% if post.cover %}
    <a href="{{ site.github.url }}/assets/img/{{ post.cover }}">
      <img src="{{ site.github.url }}/assets/img/{{ post.cover }}" alt="{{ post.title }}">
    </a>
  {% endif %}
</article>
```

{% endunless %}
{% endfor %}
