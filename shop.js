const shopContent = document.querySelector('.shop-container');

for (let i = 0; i < 8; i++) {
    const shopItem = document.createElement("div");
    shopItem.classList.add('shop-item');
    shopContent.appendChild(shopItem);
}