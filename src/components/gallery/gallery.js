class Gallery extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
      <article>
        ${markup}
        </article>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-gallery", Gallery);
