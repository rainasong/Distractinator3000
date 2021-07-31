// coins label (auto updates when changes are made)
const $popup_coins = document.getElementById("coin-value");
chrome.storage.sync.get(["coins"], ({ coins }) => {
  $popup_coins.innerText = coins;
});
chrome.storage.onChanged.addListener(({ coins }) => {
  if (coins != null && Number.isInteger(coins.newValue)) {
    $popup_coins.innerText = coins.newValue;
  }
});
