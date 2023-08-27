class Pagination extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
      <nav class='pagination-container'>
        <button class='pag_first'>First</button>
        <button class='pag_btn-one'>1</button>
        <button class='pag_btn-two'>2</button>
        <button class='pag_btn-three'>3</button>
        <button class='pag_last'>Last</button>
        </nav>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-pagination", Pagination);
