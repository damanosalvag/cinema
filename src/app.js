class App extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
      template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
      <div>
        <component-header></component-header>
      </div>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("component-app", App);
