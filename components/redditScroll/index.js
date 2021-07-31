function redditScroll() {
  window.addEventListener("scroll", amountScrolled);
}

function amountScrolled() {
  const scrollTop =
    window.pageYOffset ||
    (document.documentElement || document.body.parentNode || document.body)
      .scrollTop;

  if (scrollTop >= scrollTarget) {
    addCoins(150);

    // Increase scroll target so the user can earn more coins
    scrollTarget += 15000;
  }
}
