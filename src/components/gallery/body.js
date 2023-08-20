class BodyGallery extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
      <section>
        <div class="gallery-container">
            <app-spinner></app-spinner>
            <app-gallery></app-gallery>
        </div>
        <app-pagination></app-pagination>
        <app-back-to-top></app-back-to-top>
        </section>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-body-gallery", BodyGallery);
