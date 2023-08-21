class MovieCard extends HTMLElement {
  constructor() {
    super();
      const shadowRoot = this.attachShadow({ mode: "open" });
      
      const detailsMovieString = this.getAttribute("data-movie");
      const detailsMovieJson = JSON.parse(detailsMovieString);
      const { id, genres, poster_path, title, release_date, vote_average, vote_count, popularity } = detailsMovieJson;
    const date_year = release_date.slice(0, 4);
    const trimGenres = genres.length > 3 ? genres.slice(0, 3) : genres;
      const genresDel = trimGenres.map((elemento) => {
        return " " + elemento.name;
      });
      console.log(detailsMovieString);
    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
    <figure class="movie-card" id="movie-detail">
                <a class="poster-large" data-id="${id}" href="#">
                    <img id="image" class='gallery__image' src="https://image.tmdb.org/t/p/w500${poster_path}" alt="${title}" loading="lazy" />
                </a>
                <figcaption class="info">
                    <h3 class="card-movie-title">${title.toUpperCase()}</h3>
                    <div class="info-items">
                        <p class="info-item">
                            ${genresDel}
                        </p>
                        <p class="info-item">
                            | ${date_year}
                        </p>
                        <p class="info-item addBorder">
                            ${vote_average.toFixed(1)}
                        </p>
                    </div>

                 </figcaption>
            </figure>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-card", MovieCard);
