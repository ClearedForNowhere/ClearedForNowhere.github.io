---
layout: page
title: FLIGHT SIMULATOR
permalink: /flightsimulator
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
      <img src="{{ site.github.url }}/assets/img/{{ post.cover }}" alt="{{ post.title }}">
    {% endif %}
  </article>
{% endfor %}