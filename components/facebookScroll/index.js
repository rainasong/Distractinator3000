const FACEBOOK_DEFAULT_MINUTES = 20;
const FACEBOOK_DEFAULT_SECONDS = 0;

let facebookMinutesRemaining;
let facebookSecondsRemaining;
let facebookCompleted = false;

const facebookCoinsAvailableToWin = 1000;
const $facebookTimeRemaining = document.createElement("p");
const restartButton = document.createElement("button");

async function facebookScroll() {
  facebookMinutesRemaining = await getState(
    "facebookScroll",
    "facebookMinutesRemaining",
    FACEBOOK_DEFAULT_MINUTES
  );
  facebookSecondsRemaining = await getState(
    "facebookScroll",
    "facebookSecondsRemaining",
    FACEBOOK_DEFAULT_SECONDS
  );
  facebookAddDOMElement();
  facebookStartCountdown();
}

async function facebookStartCountdown() {
  setInterval(() => {
    if (document.visibilityState === "visible") {
      facebookCountdown();
      $facebookTimeRemaining.innerText = `Time remaining: ${facebookMinutesRemaining.toLocaleString(
        "en-US",
        {
          minimumIntegerDigits: 2,
          useGrouping: false,
        }
      )}:${facebookSecondsRemaining.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      })}`;
    }
    facebookCheckCompleted();
  }, 1000);
}

function facebookCountdown() {
  if (facebookSecondsRemaining === 0 && facebookMinutesRemaining !== 0) {
    facebookSecondsRemaining = 59;
    facebookMinutesRemaining--;
    setState(
      "facebookScroll",
      "facebookSecondsRemaining",
      facebookSecondsRemaining.toString()
    );
    setState(
      "facebookScroll",
      "facebookMinutesRemaining",
      facebookMinutesRemaining.toString()
    );
  } else if (facebookSecondsRemaining >= 1 && facebookMinutesRemaining >= 0) {
    facebookSecondsRemaining--;
    setState(
      "facebookScroll",
      "facebookSecondsRemaining",
      facebookSecondsRemaining.toString()
    );
  }
}

function facebookCheckCompleted() {
  if (
    !facebookCompleted &&
    facebookMinutesRemaining <= 0 &&
    facebookSecondsRemaining <= 0
  ) {
    addCoins(facebookCoinsAvailableToWin).then((res) => {
      showConfetti(facebookCoinsAvailableToWin, res);
    });
    facebookCompleted = true;
    restartButton.style.display = "inline-block";
  }
}

async function resetTimer() {
  setState(
    "facebookScroll",
    "facebookMinutesRemaining",
    FACEBOOK_DEFAULT_MINUTES
  );
  setState(
    "facebookScroll",
    "facebookSecondsRemaining",
    FACEBOOK_DEFAULT_SECONDS
  );
  facebookMinutesRemaining = FACEBOOK_DEFAULT_MINUTES;
  facebookSecondsRemaining = FACEBOOK_DEFAULT_SECONDS;
  facebookCompleted = false;
  restartButton.style.display = "none";
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
  elem.style.display = "flex";
  elem.style.gap = "20px";
  elem.style.alignItems = "center";
  elem.innerHTML = `<p>Scroll Facebook for 20 minutes to win ${facebookCoinsAvailableToWin} coins!</p>`;

  restartButton.innerText = "Again!";
  restartButton.style.all = "unset";
  restartButton.style.padding = "0 20px";
  restartButton.style.height = "30px";
  restartButton.style.borderRadius = "4px";
  restartButton.style.color = "white";
  restartButton.style.backgroundColor = "rgb(0, 119, 204)";
  restartButton.style.margin = "0";
  restartButton.style.cursor = "pointer";
  restartButton.style.display = "none";
  restartButton.addEventListener("click", resetTimer);

  elem.appendChild($facebookTimeRemaining);
  elem.appendChild(restartButton);

  html.appendChild(elem);
}
