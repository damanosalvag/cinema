class Header extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
      <header>
        <div class="header-container">
            <app-title></app-title>
            <app-menu></app-menu>
        </div>
        <app-search></app-search>
        </header>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-header", Header);
