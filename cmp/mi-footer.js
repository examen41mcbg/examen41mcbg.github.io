class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Carolina Bolaños Gomez.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
