class navBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <ul>
        <li><a href="popup.html">Home</a></li>
        <li><a href="spinner.html">Spinning Wheel</a></li>
        <li><a href="shop.html">Shop</a></li>
        <li><a href="settings.html">Settings</a></li>
      </ul>
      `;
    }
  }
      
customElements.define('nav-bar', navBar);

