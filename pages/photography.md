---
layout: page
title: PHOTOGRAPHY
permalink: /photography
description : A collection of photographs inspired by aviation, the sky, my travels, and the little moments of everyday life.
published: true
---

{% for post in site.categories.photography %}
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
    {% endif %}

{% endfor %}
