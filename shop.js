const shopContent = document.querySelector('.shop-container');

(async() => {
    const shopItems = await getState('popup', 'shopItems');
    

})();


for (let i = 0; i < 8; i++) {
    const shopItem = document.createElement("div");
    shopItem.classList.add('shop-item');
    shopContent.appendChild(shopItem);
}

