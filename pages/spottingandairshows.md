---
layout: page
title: SPOTTING AND AIRSHOWS
categories: S&A
permalink: /spottingandairshows/

description: >-
  A collection of photographs taken during aircraft spotting sessions and airshows, from everyday airport activity to special aviation events.
---

{% for post in site.tags.S&A %}
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
