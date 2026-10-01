---
layout: page
title: SPOTTING AND AIRSHOWS
categories: spotting_and_airshows
permalink: /spottingandairshows/

description: >-
  My Kingdom For A Sky is a series of photographs built around three things I’ve been passionate about for a long time: the sky, aviation, and photography. The idea is simply to share, throughout each series, the photos that catch my eye and that I feel like keeping: an aircraft in the sky, a particular kind of light, or sometimes just a snapshot of everyday life.
---

{% for post in site.tags.spotting_and_airshows %}
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
