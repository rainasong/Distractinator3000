function redditScroll() {
  if (!window.location.hostname.includes("reddit.com")) {
    console.warn(`redditScroll should not be running on ${window.location.hostname}`);
    return;
  }
  addProgressBar();
  window.addEventListener("scroll", amountScrolled);

  // delete "Back to Top" button
  const $elem = document.querySelector("button[tabindex='0']");
  if ($elem.textContent.includes("Back to Top")) {
    $elem.remove();
  }
}

const $redditScrollBar = document.createElement("div");

function addProgressBar() {
  const $container = document.createElement("div");
  const $bar = $redditScrollBar;
  const $p = document.createElement("p");

  $container.style.width = "100%";
  $container.style.height = "24px";
  $container.style.bottom = "0";
  $container.style.left = "0";
  $container.style.zIndex = "999999997";
  $container.style.position = "fixed";
  $container.style.backgroundColor = "hsl(0, 54%, 87%)";
  
  $p.textContent = "Scroll Reddit to win 150 coins!";
  $p.style.color = "black";
  $p.style.width = "100%";
  $p.style.textAlign = "center";
  $p.style.fontSize = "14px";
  $p.style.zIndex = "999999999";
  $p.style.position = "absolute";
  $p.style.lineHeight = "24px";

  $bar.style.width = "0";
  $bar.style.position = "absolute";
  $bar.style.height = "100%";
  $bar.style.top = "0";
  $bar.style.left = "0";
  $bar.style.backgroundColor = "hsl(136, 54%, 93%)";
  $bar.style.zIndex = "999999998";

  $container.appendChild($bar);
  $container.appendChild($p);
  document.body.appendChild($container);
}

let scrollTarget = 15000;

async function amountScrolled() {
  const scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;

  const scrollPercent = Math.round((scrollTop / scrollTarget) * 10000) / 100;
  $redditScrollBar.style.width = `${scrollPercent}%`;

  if (scrollTop >= scrollTarget) {
    const balance = await addCoins(150);
    showConfetti(150, balance);

    // Increase scroll target so the user can earn more coins
    scrollTarget += 15000;
  }
}
