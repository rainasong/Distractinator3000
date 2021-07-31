let clicks = 0;
let clickTarget = 10;

function instagramClick() {
  window.setInterval(() => {
    const stories = document.querySelectorAll(".Fd_fQ");
    const storyArrows = document.querySelectorAll(".FhutL");

    for (const story of stories) {
      story.addEventListener("click", onStoryClick);
    }

    for (const storyArrow of storyArrows) {
      storyArrow.addEventListener("click", onStoryClick);
    }

    if (clicks > clickTarget) {
      addCoins(100);

      // Increase click target so the user can earn more coins
      clickTarget += 10;
    }
  }, 2000);
}

function onStoryClick() {
  clicks++;
}
