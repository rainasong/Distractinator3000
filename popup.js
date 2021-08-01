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
    website: "notion.so",
  }, {
    icon: "img/dino-game.jpg",
    name: "Offline Dino",
    description: "Run jump!",
    cost: 10,
    purchased: false,
    website: "canvas.auckland.ac.nz",
  }, {
    icon: "img/flappy-bird.jpg",
    name: "Flappy Bird",
    description: "Flap flap!",
    cost: 10,
    purchased: false,
    website: "google.com/drive",
  }, {
    icon: "img/minesweeper.jpg",
    name: "Minesweeper",
    description: "Boom bang!",
    cost: 10,
    purchased: false,
    website: "sesa.org.nz",
  }, {
    icon: "img/pacman.jpg",
    name: "Pacman",
    description: "Chomp chomp!",
    cost: 10,
    purchased: false,
    website: "gmail.com",
  }, {
    icon: "img/space-invaders.png",
    name: "Space Invaders",
    description: "Pew pew!",
    cost: 10,
    purchased: false,
    website: "piazza.com",
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

(() => {
  const taskContent = document.querySelector('.task-container');

  if (!taskContent) {
    console.log("hello");
    return;
  }

  const taskList = [{
    challenge: "Scroll Facebook for 20 minutes",
    website: "https://www.facebook.com/",
    icon: "img/facebook.jpg",
  }, {
    challenge: "Watch 10 Instagram stories",
    website: "https://www.instagram.com/",
    icon: "img/instagram.jpg",
  }, {
    challenge: "Watch Youtube for 20 minutes",
    website: "https://www.youtube.com/",
    icon: "img/youtube.jpg",
  }, {
    challenge: "Play Offline Dino for coins",
    website: "https://canvas.auckland.ac.nz/",
    icon: "img/dino-game.jpg",
  }, {
    challenge: "Play Space Invaders for coins",
    website: "https://piazza.com/",
    icon: "img/space-invaders.png",
  }, {
    challenge: "Play Minesweeper for coins",
    website: "https://sesa.org.nz/",
    icon: "img/minesweeper.jpg",
  }, {
    challenge: "Play Flappy Bird for coins",
    website: "https://www.google.com/drive/",
    icon: "img/flappy-bird.jpg",
  }, {
    challenge: "Play 2048 for coins",
    website: "https://www.notion.so/",
    icon: "img/2048.png",
  }, {
    challenge: "Play Pacman for coins",
    website: "https://gmail.com/",
    icon: "img/pacman.jpg",
  }, {
    challenge: "Play 3 Buzzfeed quizzes",
    website: "https://www.buzzfeed.com/au/quizzes",
    icon: "img/buzzfeed.png",
  },]
  
  for (task of taskList) {
      const wrapper = document.createElement("a");
      wrapper.href = task.website;
      wrapper.target = "_blank";
      wrapper.innerHTML = `
        <div class="task">
        <img class="item-image" src="${task.icon}" alt="${task.name}">
        <p class="item-title">${task.challenge}</p>
        </div>
      `;

      taskContent.appendChild(wrapper);
  }
})();