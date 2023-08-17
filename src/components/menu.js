class Menu extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
    <nav class="division-right">
      <ul class="menu-home">
          <li class="menu-home__item is-active">
              <a class="menu-home__link" href="#">Home</a>
          </li>
          <li class="menu-home__item">
              <a class="menu-home__link" href="#">My library</a>
          </li>
      </ul>
    </nav>
      
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("component-menu", Menu);
