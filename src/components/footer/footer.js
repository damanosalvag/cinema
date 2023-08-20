class Footer extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });

    const template = document.createElement("template");
    template.innerHTML = `
    <link rel="stylesheet" href="./src/index.scss">
      <footer>
        <section class="footer-container">
          <div class="footer-content">
            <div class="footer-left">
              <p>
                &copy 2023 | Developed by <b>Dairo Manosalva</b> | All rights reserved | 
                <span>Design based on GoIt.</span>
              </p>
            </div>
        </footer>
    `;

    shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

customElements.define("app-footer", Footer);
