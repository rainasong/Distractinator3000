const shopContent = document.querySelector('.shop-container');

(async() => {
    const shopItems = await getShopItems();
    
    for (shopItem of shopItems) {
        const shopCard = document.createElement("div");
        
        shopCard.classList.add('shop-item');

        // not implemented lol
        if (shopItem.purchased) {
            shopCard.innerHTML = `<img class="item-image" src="${shopItem.icon}" alt="${shopItem.name}"><h1 class="item-title">${shopItem.name}</h1><div class="item-coin">
            <img src="assets/coin.png" alt="coin"><label>${shopItem.cost}</label></div>`
        } else {
            shopCard.innerHTML = `<img class="item-image" src="${shopItem.icon}" alt="${shopItem.name}"><h1 class="item-title">${shopItem.name}</h1><div class="item-coin">
        <img src="assets/coin.png" alt="coin"><label>${shopItem.cost}</label></div>`
        }
        shopContent.appendChild(shopCard);
    }
})();