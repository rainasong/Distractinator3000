let clicks = 0;

function instagramClick() {
  window.setInterval(() => {
    const stories = document.querySelectorAll(".Fd_fQ");
    const storyArrows = document.querySelectorAll(".coreSpriteRightChevron");

    for (const story of stories) {
      story.addEventListener("click", onStoryClick);
    }

    for (const storyArrow of storyArrows) {
      storyArrow.addEventListener("click", onStoryClick);
    }

    if (clicks > 10) {
      addCoins(100);
      clicks = 0;
    }
  }, 2000);
}

function onStoryClick() {
  clicks++;
}
