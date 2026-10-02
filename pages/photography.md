---
layout: page
title: PHOTOGRAPHY
permalink: /photography/
description: >-
  A collection of photographs inspired by aviation, the sky, my travels, and the little moments of everyday life.
published: true
---

<div class="page-grid">

  <article>
    <h2>
      <a href="{{ site.github.url }}/mykingdomforasky">
        MY KINGDOM FOR A SKY
      </a>
    </h2>

    <a href="{{ site.github.url }}/mykingdomforasky">
      <img src="{{ site.github.url }}/assets/img/MY_KINGDOM_FOR_A_SKY_PAGE/COVER/1.jpg" alt="MY KINGDOM FOR A SKY">
    </a>
  </article>

  <article>
    <h2>
      <a href="{{ site.github.url }}/spottingandairshows">
        SPOTTING AND AIRSHOWS
      </a>
    </h2>

    <a href="{{ site.github.url }}/spottingandairshows">
      <img src="{{ site.github.url }}/assets/img/SPOTTING_AND_AIRSHOWS_PAGE/COVER/1.jpg" alt="SPOTTING AND AIRSHOWS">
    </a>
  </article>

  {% for post in site.categories.photography %}

    {% unless post.tags contains "MKFAS" %}
      {% unless post.tags contains "SA" %}

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
            <a href="{{ site.github.url }}/assets/img/{{ post.cover }}">
              <img src="{{ site.github.url }}/assets/img/{{ post.cover }}" alt="{{ post.title }}">
            </a>
          {% endif %}
        </article>

      {% endunless %}
    {% endunless %}

  {% endfor %}

</div>
