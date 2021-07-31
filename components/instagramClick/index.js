let clicks = 0;
let clickTarget = 10;

function instagramClick() {
  window.setInterval(checkForClicks, 2000);
}

function checkForClicks() {
  const stories = document.querySelectorAll(".Fd_fQ");
  const storyArrows = document.querySelectorAll(".FhutL");

  for (const story of stories) {
    story.addEventListener("click", onStoryClick);
  }

  for (const storyArrow of storyArrows) {
    storyArrow.addEventListener("click", onStoryClick);
  }
}

async function onStoryClick() {
  clicks++;

  if (clicks >= clickTarget) {
    const balance = await addCoins(100);
    showConfetti(100, balance);

    // Increase click target so the user can earn more coins
    clickTarget += 10;
  }
}
