---
layout: page
title: PHOTOGRAPHY
permalink: /photography/
description: >-
  A collection of photographs inspired by aviation, the sky, my travels, and the little moments of everyday life.
published: true
---
<article> <h2> <a href="{{ site.github.url }}/mykingdomforasky"> MY KINGDOM FOR A SKY </a> </h2>

<a href="{{ site.github.url }}/mykingdomforasky"> <img src="{{ site.github.url }}/assets/img/MY_KINGDOM_FOR_A_SKY_PAGE/COVER/1.jpg" alt="MY KINGDOM FOR A SKY"> </a> </article>

{% for post in site.categories.photography %}
{% unless post.tags contains "MKFAS" %}
<article>
<h2>
<a href="{{ site.github.url }}{{ post.url }}">{{ post.title }}</a>
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

{% endunless %}
{% endfor %}
