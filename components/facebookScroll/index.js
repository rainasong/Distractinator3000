let facebookMinutesRemaining = 20;
let facebookSecondsRemaining = 0;
let facebookTimeRemaining;
let facebookCompleted = false;
const facebookCoinsAvailableToWin = 1000;

async function facebookScroll() {
  facebookTimeRemaining = document.createElement("p");
  facebookAddDOMElement();
  facebookStartCountdown();
}

async function facebookStartCountdown() {
  setInterval(() => {
    if (document.visibilityState === "visible") {
      if (facebookSecondsRemaining === 0 && facebookMinutesRemaining !== 0) {
        facebookSecondsRemaining = 59;
        facebookMinutesRemaining--;
      } else if (
        facebookSecondsRemaining >= 1 &&
        facebookMinutesRemaining >= 0
      ) {
        facebookSecondsRemaining--;
      }
      facebookTimeRemaining.innerText = `Time remaining: ${facebookMinutesRemaining}:${facebookSecondsRemaining.toLocaleString(
        "en-US",
        {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }
      )}`;
    }

    if (
      !facebookCompleted &&
      facebookMinutesRemaining <= 0 &&
      facebookSecondsRemaining <= 0
    ) {
      addCoins(facebookCoinsAvailableToWin).then((res) => {
        showConfetti(facebookCoinsAvailableToWin, res);
      });
      facebookCompleted = true;
    }
  }, 1000);
}

async function facebookAddDOMElement() {
  const html = document.querySelector("html");
  const elem = document.createElement("div");

  elem.style.position = "fixed";
  elem.style.zIndex = "999";
  elem.style.bottom = "0";
  elem.style.backgroundColor = "white";
  elem.style.width = "100%";
  elem.style.display = "flex";
  elem.style.padding = "10px 20px";
  elem.style.boxShadow = "0 3px 15px 2px rgba(0, 0, 0, 0.3)";
  elem.style.fontFamily = "Roboto";
  elem.innerHTML = `<p style="margin-right:20px;">Scroll Facebook for 20 minutes to win ${facebookCoinsAvailableToWin} coins!</p>`;
  elem.appendChild(facebookTimeRemaining);

  html.appendChild(elem);
}
