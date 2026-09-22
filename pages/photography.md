---
layout: page
title: PHOTOGRAPHY
permalink: /photography
description : Une collection de photographies autour de l’aviation, du ciel, de mes voyages et des petits instants du quotidien.
published: false
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
