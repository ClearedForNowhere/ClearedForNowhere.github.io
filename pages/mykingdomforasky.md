---
layout: page
title: MY KINGDOM FOR A SKY
categories: MKFAS
permalink: /mykingdomforasky/

description:
---

{% for post in site.tags.MKFAS %}
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
