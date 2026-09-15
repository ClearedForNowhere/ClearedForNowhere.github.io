---
layout: page
title: PHOTOGRAPHY
permalink: /photography
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
  </article>
{% endfor %}