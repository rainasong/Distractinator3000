let instagramClicks = 0;
let instagramClickTarget = 10;
const instagramCoinsAvailableToWin = 100;

function instagramClick() {
  instagramAddDOMElement();
  window.setInterval(instagramCheckForClicks, 2000);
}

function instagramCheckForClicks() {
  const stories = document.querySelectorAll(".Fd_fQ");
  const storyArrows = document.querySelectorAll(".FhutL");

  for (const story of stories) {
    story.addEventListener("click", instagramOnStoryClick);
  }

  for (const storyArrow of storyArrows) {
    storyArrow.addEventListener("click", instagramOnStoryClick);
  }
}

async function instagramOnStoryClick() {
  instagramClicks++;

  if (instagramClicks >= instagramClickTarget) {
    const balance = await addCoins(instagramCoinsAvailableToWin);
    showConfetti(100, balance);

    // Increase click target so the user can earn more coins
    instagramClickTarget += 10;
  }
}

 function instagramAddDOMElement() {
  const html = document.querySelector("html");
  const elem = document.createElement("div");

  elem.style.position = "fixed";
  elem.style.zIndex = "999";
  elem.style.bottom = "0";
  elem.style.backgroundColor = "white";
  elem.style.width = "100%";
  elem.style.display = "flex";
  elem.style.padding = "10px 20px";
  elem.style.boxShadow = "";
  elem.innerHTML = `<p style="margin-right:20px; margin-top: 1em; margin-bottom: 1em;">Look at 10 Instagram stories to win ${instagramCoinsAvailableToWin} coins!</p>`;

  html.appendChild(elem);
}