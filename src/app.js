class App extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
      template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
      <div>
        <app-header></app-header>
        <app-body-gallery></app-body-gallery>
        <app-footer></app-footer>
      </div>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-app", App);
