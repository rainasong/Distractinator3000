function redditScroll() {
  window.addEventListener("scroll", amountScrolled);
}

let scrollTarget = 15000;

async function amountScrolled() {
  const scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;

  if (scrollTop >= scrollTarget) {
    const balance = await addCoins(150);
    showConfetti(150, balance);

    // Increase scroll target so the user can earn more coins
    scrollTarget += 15000;
  }
}
