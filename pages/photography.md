---
layout: page
title: PHOTOGRAPHY
permalink: /photography/
description : A collection of photographs inspired by aviation, the sky, my travels, and the little moments of everyday life.
published: true
---

<article>
  <h2>
    <a href="{{ site.github.url }}/mykingdomforasky">
      MY KINGDOM FOR A SKY
    </a>
  </h2>

  <p>
    My Kingdom For A Sky is a series of photographs built around three things I’ve been passionate about for a long time: the sky, aviation, and photography.
The idea is simply to share, throughout each series, the photos that catch my eye and that I feel like keeping: an aircraft in the sky, a particular kind of light, or sometimes just a snapshot of everyday life.
  </p>

  <a href="{{ site.github.url }}/mykingdomforasky">
    <img src="{{ site.github.url }}/assets/img/DPH_THE_PROJECT/COVER/DESTINATION_POINT_HOPE_COVER.jpg" alt="DESTINATION POINT HOPE">
  </a>
</article>

{% for post in site.categories.photography %}
{% unless post.tags contains "MKFAS" %} <article> <h2> <a href="{{ site.github.url }}{{ post.url }}">{{ post.title }}</a> </h2>

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
------------
