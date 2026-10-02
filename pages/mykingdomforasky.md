---
layout: page
title: MY KINGDOM FOR A SKY
permalink: /mykingdomforasky/
description: >-
  A collection of photographs inspired by aviation, the sky, my travels, and the moments found between destinations.
published: true
---

<div class="page-grid">

  {% for post in site.categories.photography reversed %}

    {% if post.tags contains "MKFAS" %}

      <article>
        <h2>
          <a href="{{ site.github.url }}{{ post.url }}">
            {{ post.title }}
          </a>
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

    {% endif %}

  {% endfor %}

</div>
