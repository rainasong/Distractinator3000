// [[function, [canRunOnWebsite1, canRunOnWebsite2, ...]], ...]
const availableTasks = [
  [redditScroll, ["reddit.com"], "free"],
  [instagramClick, ["instagram.com"], "free"],
  [youtubeView, ["youtube.com", "youtu.be"], "free"],
  [canvasDinoGame, ["canvas.auckland.ac.nz"], "Offline Dino"],
  [facebookScroll, ["facebook.com"], "free"],
  [piazzaSpaceInvaders, ["piazza.com"], "Space Invaders"],
];

(async () => {
  const shopItems = await getState("popup", "shopItems", []);
  const selectedTasks = availableTasks.filter(
    ([, , prereq]) => {
      if (prereq === "free") {
        return true;
      }
      const item = shopItems.find((item) => item.name === prereq);
      return !item || item.purchased;
    }
  );
  // get hostname (without www prefix if it exists)
  const hostname = window.location.hostname.replace(/^www\./, "");
  for (const [task, hosts] of selectedTasks) {
    if (hosts.includes(hostname)) {
      console.log(`Running '${task.name}'`);
      task();
    }
  }
})();

/*
  let anyone modify the number of coins we have. super insecure, but this _is_ just a hackathon :)
  usage:

  chrome.tabs.query({ active: true, currentWindow: true }, ([tab]) => {
    chrome.tabs.sendMessage(tab.id, { type: "addCoins", coins: 10 }, ({ balance }) => {
      console.log(balance);
    });
  });
*/
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  (async () => {
    if (request != null && typeof request === "object") {
      const coins = Number.parseInt(request.coins);

      switch (request.type) {
        case "setCoins": {
          setCoins(coins);
          break;
        }
        case "getCoins": {
          const balance = await getCoins();
          sendResponse({ balance });
          break;
        }
        case "addCoins": {
          const balance = await addCoins(coins);
          sendResponse({ balance });
          break;
        }
        case "removeCoins": {
          const balance = await removeCoins(coins);
          sendResponse({ balance });
          break;
        }
        case "showConfetti": {
          showConfetti(coins, Number.parseInt(request.balance));
          break;
        }
      }
    }
  })();
  return true;
});
