const progressBar = document.querySelector(".ytp-progress-bar");
const barColour = document.querySelector(".ytp-swatch-background-color");

const timeToWatch = 10; // 10 seconds for demo
let timeViewed = 0;

let timer;

async function youtubeView() {
  if (progressBar == null) {
    console.log("youtubeView skipping because it only runs on video pages");
    return;
  }

  startingTime = progressBar.getAttribute("aria-valuenow");

  timer = window.setInterval(updateTimeElapsed, 1000);
}

async function updateTimeElapsed() {
  const barColourValue = window
    .getComputedStyle(barColour, null)
    .getPropertyValue("background-color");

  if (barColourValue === "rgb(255, 0, 0)") {
    timeViewed++;

    if (timeViewed >= timeToWatch) {
      const balance = await addCoins(2000);
      showConfetti(2000, balance);

      clearInterval(timer);
    }
  }
}
