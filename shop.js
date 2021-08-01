const shopContent = document.querySelector('.shop-container');

(async() => {
    const shopItems = await getShopItems();
    
    for (shopItem of shopItems) {
        const shopCard = document.createElement("div");
        
        shopCard.innerHTML = `<img class="item-image" src="${shopItem.icon}" alt="${shopItem.name}"><h1 class="item-title">${shopItem.name}</h1><div class="shop-coin">
        <img src="assets/coin.png" alt="coin">
        <label>${shopItem.cost}</label>
      </div>`
        
        shopCard.classList.add('shop-item');
        
        shopContent.appendChild(shopCard);
        
        console.log(shopItem);
    }

})();