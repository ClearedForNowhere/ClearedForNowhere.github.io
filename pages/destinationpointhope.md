---
layout: page
title: DESTINATION POINT HOPE
permalink: /destinationpointhope/
description: >-
  A long-distance journey across Canada and Alaska, flown entirely in Microsoft Flight Simulator 2024.
published: true
---

<h2>TEST</h2>

<p>Nombre de posts dans flightsimulation :</p>

<p>{{ site.categories.flightsimulation | size }}</p>

<hr>

{% for post in site.posts %}

  <p>
    <strong>{{ post.title }}</strong><br>
    Category: {{ post.categories | join: ", " }}<br>
    Tags: {{ post.tags | join: ", " }}
  </p>

{% endfor %}
