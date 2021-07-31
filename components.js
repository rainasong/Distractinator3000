class navBar extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
      <nav>
      <div class="logo">
        <h1>LOGO</h1>
      </div>
      <div class="menu">
        <a href="popup.html">
          <img src="assets/home.png" alt="home">
        </a>
        <a href="spinner.html">
          <img src="assets/spinner.png" alt="spinner">
        </a>
        <a href="shop.html">
          <img src="assets/shop.png" alt="shop">
        </a>
        <a href="settings.html">
          <img src="assets/settings.png" alt="setting">
        </a>
      </div>
      <div class="coin">
        <img src="assets/coin.png" alt="coin">
        <label id="coin-value">10000</label>
      </div>
    </nav>
      `;
    }
  }
      
customElements.define('nav-bar', navBar);

