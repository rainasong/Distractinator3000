let minutesRemaining = 0;
let secondsRemaining = 10;
let timeRemaining;
let completed = false;
const coinsAvailableToWin = 10;

async function facebookScroll() {
  timeRemaining = document.createElement("p");
  addDOMElement();
  startCountdown();
}

async function startCountdown() {
  setInterval(() => {
    if (document.visibilityState === "visible") {
      if (secondsRemaining === 0 && minutesRemaining !== 0) {
        secondsRemaining = 59;
        minutesRemaining--;
      } else if (secondsRemaining >= 1 && minutesRemaining >= 0) {
        secondsRemaining--;
      }
      timeRemaining.innerText = `Time remaining: ${minutesRemaining}:${secondsRemaining.toLocaleString(
        "en-US",
        {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }
      )}`;
    }

    if (!completed && secondsRemaining <= 0 && secondsRemaining <= 0) {
      addCoins(coinsAvailableToWin).then(console.log);
      completed = true;
    }
  }, 1000);
}

async function addDOMElement() {
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
  elem.innerHTML = `<p style="margin-right:20px;">Scroll Facebook for 20 minutes to win ${coinsAvailableToWin} coins!</p>`;
  elem.appendChild(timeRemaining);

  html.appendChild(elem);
}
