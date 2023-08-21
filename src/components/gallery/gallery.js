import { fetchData, fetchMovie } from "../../services/api";

class Gallery extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    this.loadData(shadowRoot);
  }

  async loadData(shadowRoot) {
    try {
      const defaultOptions = { endpoint: "trending/all/day", page: 1 };
      const moviesApi = await fetchData(defaultOptions);

      const movies = await Promise.all(
        moviesApi.map(async (movieId) => {
          const options = { endpoint: `/movie/${movieId}` };
          const movie = await fetchMovie(options);
          return createMovieCard(movie);
        })
      );

      const template = createTemplate(movies);

      shadowRoot.appendChild(template.content.cloneNode(true));
    } catch (error) {
      console.error("Error:", error);
    }
  }
}

function createMovieCard(movie) {
  const {
    id,
    genres,
    poster_path,
    title,
    release_date,
    vote_average,
    vote_count,
    popularity,
  } = movie;

  return `<app-card data-movie='${JSON.stringify({
    id,
    genres,
    poster_path,
    title,
    release_date,
    vote_average,
    vote_count,
    popularity,
  })}'></app-card>`;
}

function createTemplate(content) {
  const template = document.createElement("template");
  template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
      <article class='films'>
        ${content.join("")}
      </article>
    
  `;

  return template;
}

customElements.define("app-gallery", Gallery);
