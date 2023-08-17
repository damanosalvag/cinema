class Search extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
          <form class="search-form" id="search-form">
            <label class="search-input">
              <input
                name="search-query"
                autocomplete="off"
                id="text-search"
                type="text"
                placeholder="Movie search..."
                autofocus
              />
              <button type="button" class="scoop-icon-btn" id="btn-search">
                <svg class="scop-icon" width="12" height="12" fill="none">
                  <use href="./src/assets/images/icons.svg#icon-lup"></use>
                </svg>
              </button>
            </label>
          </form>
      
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("component-search", Search);
