let popup_shopItems = makePromise();

(async () => {
  syncWithState('darkMode', 'Activated', (darkModeActivated, a) => {
    if (darkModeActivated) {
      document.body.parentElement.classList.add("dark");
    } else {
      document.body.parentElement.classList.remove("dark");
    }
  }, false)

  // auto update coins label when changes are made
  syncWithState("shop", "coins", (val) => {
    document.getElementById("coin-value").innerText = val;
  }, 0);

  const DEFAULT_SHOP_ITEMS = [{
    icon: "img/2048.png",
    name: "2048",
    description: "Swipe merge!",
    cost: 10,
    purchased: false,
  }, {
    icon: "img/dino-game.png",
    name: "Offline Dino",
    description: "Run jump!",
    cost: 10,
    purchased: false,
  }, {
    icon: "img/flappy-bird.png",
    name: "Flappy Bird",
    description: "Flap flap!",
    cost: 10,
    purchased: false,
  }, {
    icon: "img/minesweeper.png",
    name: "Minesweeper",
    description: "Boom bang!",
    cost: 10,
    purchased: false,
  }, {
    icon: "img/pacman.png",
    name: "Pacman",
    description: "Chomp chomp!",
    cost: 10,
    purchased: false,
  }, {
    icon: "img/space-invaders.png",
    name: "Space Invaders",
    description: "Pew pew!",
    cost: 10,
    purchased: false,
  }];

  // remove games that are removed from default list
  const shopItems = (await getState("popup", "shopItems", []))
    .filter(item => DEFAULT_SHOP_ITEMS.map(i => i.name).includes(item.name));

  // add games that are added to default list
  for (const item of DEFAULT_SHOP_ITEMS) {
    if (!shopItems.map(i => i.name).includes(item.name)) {
      shopItems.push(item);
    }
  }

  popup_shopItems.resolve(shopItems);
  setState("popup", "shopItems", shopItems);
})();

/**
 * Returns shop items.
 * @returns {Promise<[{}]>}
 */
function getShopItems() {
  return popup_shopItems.promise;
}

/**
 * Reset extension storage.
 */
async function resetStorage() {
  chrome.storage.sync.clear();
}

