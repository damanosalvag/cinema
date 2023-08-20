class Title extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
      <div class='logoTitle-container'>
        <svg class="film-icon" width="24" height="24" href="/src/index.html">
              <use href="./src/assets/images/icons.svg#icon-film"></use>
            </svg>
        <a href="#" class="main-tittle"><h1>Filmoteka</h1></a>
      </div>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-title", Title);
