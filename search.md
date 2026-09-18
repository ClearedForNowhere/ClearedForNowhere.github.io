---
layout: default
title: Search
---

<div class="search-page">

  <h1>SEARCH</h1>

  <input
    type="text"
    id="search-input"
    placeholder="Search..."
    autocomplete="off"
  >

  <div id="search-results"></div>

</div>

<script>
  const posts = [
    {% for post in site.posts %}
      {
        title: {{ post.title | jsonify }},
        url: {{ post.url | jsonify }},
        date: {{ post.date | date: "%B %d, %Y" | jsonify }},
        content: {{ post.content | strip_html | strip_newlines | jsonify }},
        categories: {{ post.categories | jsonify }},
        tags: {{ post.tags | jsonify }}
      }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");

  input.addEventListener("input", function() {

    const query = this.value.toLowerCase().trim();

    if (!query) {
      results.innerHTML = "";
      return;
    }

    const matches = posts.filter(post => {

      const text = [
        post.title,
        post.content,
        post.categories.join(" "),
        post.tags.join(" ")
      ].join(" ").toLowerCase();

      return text.includes(query);
    });

    if (matches.length === 0) {
      results.innerHTML = "<p>No results found.</p>";
      return;
    }

    results.innerHTML = matches.map(post => `
      <article class="search-result">
        <h2>
          <a href="{{ site.github.url }}${post.url}">
            ${post.title}
          </a>
        </h2>

        <div class="search-result-date">
          ${post.date}
        </div>
      </article>
    `).join("");

  });
</script>
