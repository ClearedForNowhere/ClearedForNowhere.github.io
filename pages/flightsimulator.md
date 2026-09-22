---
layout: page
title: FLIGHT SIMULATOR
permalink: /flightsimulator
description : Une collection de vols virtuels, de voyages au long cours et d’histoires imaginées autour de la simulation aérienne.
Ces récits sont entièrement fictifs et racontent la vie d’un pilote virtuel au fil de ses voyages dans Microsoft Flight Simulator. J’essaie de pousser l’immersion et le réalisme aussi loin que possible, en imaginant tout ce qui peut se passer autour d’un vol : préparer la navigation, gérer le carburant, trouver un endroit où passer la nuit, partir manger en ville, installer son matériel de camping ou simplement profiter de l’endroit où l’on vient d’atterrir.
Tout cela est évidemment une partie de la fiction et sert avant tout à donner vie aux voyages et à créer une histoire autour du vol.
L’objectif est simple : m’amuser, raconter des histoires et partager ma passion pour l’aviation et la simulation de vol.
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
<a href="{{ site.github.url }}{{ post.url }}">
  <img src="{{ site.github.url }}/assets/img/{{ post.cover }}" alt="{{ post.title }}">
</a>
    {% endif %}
  </article>
{% endfor %}
