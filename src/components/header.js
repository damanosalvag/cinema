class Header extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
      <header>
        <div class="header-container">
            <component-title></component-title>
            <component-menu></component-menu>
        </div>
        <component-search></component-search>
        </header>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("component-header", Header);
