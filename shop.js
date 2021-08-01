const shopContent = document.querySelector(".shop-container");
let shopItems;
let balance;

(async () => {
  shopItems = await getShopItems();
  balance = await getCoins();
  for (let shopItem of shopItems) {
    const shopCard = document.createElement("div");

    shopCard.classList.add("shop-item");

    // not implemented lol
    if (shopItem.purchased) {
      shopCard.innerHTML = `
      <img class="item-image" src="${shopItem.icon}" alt="${shopItem.name}">
      <h1 class="item-title">${shopItem.name}</h1>
      <a href="https://${shopItem.website}" class="website-label" target="_blank">${shopItem.website}</a>
      <div style="font-style:italic;">
        Purchased
      </div>`;
    } else if (shopItem.cost > balance) {
      shopCard.innerHTML = `
      <img class="item-image" src="${shopItem.icon}" alt="${shopItem.name}">
      <h1 class="item-title">${shopItem.name}</h1>
      <a href="https://${shopItem.website}" class="website-label" target="_blank">${shopItem.website}</a>
      <div class="item-coin cannot-purchase">
        <img src="assets/coin.png" alt="coin" /><label>${shopItem.cost}</label>
      </div>`;
    } else {
      shopCard.innerHTML = `
      <img class="item-image" src="${shopItem.icon}" alt="${shopItem.name}">
      <h1 class="item-title">${shopItem.name}</h1>
      <a href="https://${shopItem.website}" class="website-label" target="_blank">${shopItem.website}</a>
      `;

      const div = document.createElement("div");
      div.classList.add("item-coin");
      div.classList.add("can-purchase");
      div.id;
      div.addEventListener("click", () => {
        shopBuyGame(shopItem, div);
      });
      div.innerHTML = `<img src="assets/coin.png" alt="coin" /><label>${shopItem.cost}</label>`;
      shopCard.appendChild(div);
    }
    shopContent.appendChild(shopCard);
  }
})();

function shopBuyGame(shopItem, div) {
  shopItem.purchased = true;
  div.innerHTML = "Purchased";
  div.style.fontStyle = "italic";
  div.classList.remove("can-purchase");
  div.classList.remove("item-coin");
  setState("popup", "shopItems", shopItems);
  removeCoins(shopItem.cost);
}
