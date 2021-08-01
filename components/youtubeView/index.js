const youtubeView_progressBar = document.querySelector(".ytp-progress-bar");
const youtubeView_barColour = document.querySelector(".ytp-swatch-background-color");

const youtubeView_timeToWatch = 10; // 10 seconds for demo
const youtubeView_coinsAvailableToWin = 2000;
let youtubeView_timeViewed = 0;

let youtubeView_timer;
const $youtubeView_timeRemaining = document.createElement("span");

async function youtubeView() {
  if (youtubeView_progressBar == null) {
    console.log("youtubeView skipping because it only runs on video pages");
    return;
  }

  startingTime = youtubeView_progressBar.getAttribute("aria-valuenow");

  youtubeView_timer = window.setInterval(youtubeView_updateTimeElapsed, 1000);

  youtubeView_addDOMElement();
}

async function youtubeView_updateTimeElapsed() {
  const barColourValue = window
    .getComputedStyle(youtubeView_barColour, null)
    .getPropertyValue("background-color");

  if (barColourValue === "rgb(255, 0, 0)") {
    youtubeView_timeViewed++;

    const remaining = Math.max(0, youtubeView_timeToWatch - youtubeView_timeViewed);
    const mins = Math.floor(remaining / 60);
    const secs = `${remaining % 60}`.padStart(2, "0");
    $youtubeView_timeRemaining.innerText = `Time remaining: ${mins}:${secs}`;

    if (remaining <= 0) {
      const balance = await addCoins(youtubeView_coinsAvailableToWin);
      showConfetti(youtubeView_coinsAvailableToWin, balance);

      youtubeView_timeViewed = 0;
      clearInterval(youtubeView_timer);
    }
  }
}

async function youtubeView_addDOMElement() {
  const $elem = document.createElement("div");

  $elem.style.position = "fixed";
  $elem.style.zIndex = "999";
  $elem.style.bottom = "0";
  $elem.style.backgroundColor = "white";
  $elem.style.width = "100%";
  $elem.style.display = "flex";
  $elem.style.padding = "10px 36px";
  $elem.style.fontSize = "16px";

  const $p = document.createElement("span");
  $p.style.marginRight = "20px";
  $p.innerText = `Watch 20 minutes to win ${youtubeView_coinsAvailableToWin} coins!`

  $elem.appendChild($p);
  $elem.appendChild($youtubeView_timeRemaining);
  document.body.appendChild($elem);
}
