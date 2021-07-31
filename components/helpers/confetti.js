/*
<div>
    <h1>You won 100 coins!</h1>
    <p>
        Congratulations on completing the challenge - you now have 150 coins!
        Visit another webpage to win more, or open the extension to spend your winnings :)
    </p>
    <button>
        Got it!
    </button>
</div>
*/

const $confetti = document.createElement("div");
const $confetti_h1 = document.createElement("h1");
const $confetti_p = document.createElement("p");

(() => {
    // container element (darkens webpage)
    $confetti.style.all = "unset";
    $confetti.style.position = "fixed";
    $confetti.style.height = "100%";
    $confetti.style.width = "100%";
    $confetti.style.top = "0";
    $confetti.style.left = "0";
    $confetti.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    $confetti.style.transition = "opacity 0.2s ease-out";
    $confetti.style.opacity = "0";
    $confetti.style.zIndex = "99999998";
    $confetti.style.padding = "0";
    $confetti.style.margin = "0";
    $confetti.style.fontSize = "16px";
    $confetti.style.fontWeight = "normal";
    $confetti.style.pointerEvents = "none";

    // centered element (with white background)
    const $main = document.createElement("div");

    $main.style.all = "unset";
    $main.style.position = "absolute";
    $main.style.width = "calc(100% - 20px)";
    $main.style.maxWidth = "500px";
    $main.style.zIndex = "99999999";
    $main.style.top = "40%";
    $main.style.left = "50%";
    $main.style.transform = "translate(-50%, -50%)";
    $main.style.borderRadius = "8px";
    $main.style.color = "black";
    $main.style.padding = "40px 20px 20px 20px";
    $main.style.margin = "0";

    // confetti background
    $main.style.backgroundColor = "white";
    $main.style.backgroundRepeat = "repeat-x";
    $main.style.backgroundPosition = "top -10px center";
    $main.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='600' height='90' viewBox='0 0 600 90' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='42' y='-10' width='6' height='10'/%3E%3Crect x='84' y='-10' width='6' height='10'/%3E%3Crect x='126' y='-13' width='5' height='13'/%3E%3Crect x='168' y='-13' width='5' height='13'/%3E%3Crect x='210' y='-10' width='6' height='10'/%3E%3Crect x='252' y='-13' width='5' height='13'/%3E%3Crect x='294' y='-10' width='6' height='10'/%3E%3Crect x='336' y='-13' width='5' height='13'/%3E%3Crect x='378' y='-13' width='5' height='13'/%3E%3Crect x='420' y='-10' width='6' height='10'/%3E%3Crect x='462' y='-10' width='6' height='10'/%3E%3Crect x='504' y='-13' width='5' height='13'/%3E%3Crect x='546' y='-10' width='6' height='10'/%3E%3Cstyle type='text/css'%3E rect %7B opacity: 0; %7D rect:nth-child(1) %7B transform-origin: 45px 5px; transform: rotate(-145deg); animation: blast 700ms infinite ease-out; animation-delay: 88ms; animation-duration: 631ms; %7D rect:nth-child(2) %7B transform-origin: 87px 5px; transform: rotate(164deg); animation: blast 700ms infinite ease-out; animation-delay: 131ms; animation-duration: 442ms; %7D rect:nth-child(3) %7B transform-origin: 128px 6px; transform: rotate(4deg); animation: blast 700ms infinite ease-out; animation-delay: 92ms; animation-duration: 662ms; %7D rect:nth-child(4) %7B transform-origin: 170px 6px; transform: rotate(-175deg); animation: blast 700ms infinite ease-out; animation-delay: 17ms; animation-duration: 593ms; %7D rect:nth-child(5) %7B transform-origin: 213px 5px; transform: rotate(-97deg); animation: blast 700ms infinite ease-out; animation-delay: 122ms; animation-duration: 476ms; %7D rect:nth-child(6) %7B transform-origin: 255px 6px; transform: rotate(57deg); animation: blast 700ms infinite ease-out; animation-delay: 271ms; animation-duration: 381ms; %7D rect:nth-child(7) %7B transform-origin: 297px 5px; transform: rotate(-46deg); animation: blast 700ms infinite ease-out; animation-delay: 131ms; animation-duration: 619ms; %7D rect:nth-child(8) %7B transform-origin: 338px 6px; transform: rotate(-65deg); animation: blast 700ms infinite ease-out; animation-delay: 85ms; animation-duration: 668ms; %7D rect:nth-child(9) %7B transform-origin: 380px 6px; transform: rotate(13deg); animation: blast 700ms infinite ease-out; animation-delay: 128ms; animation-duration: 377ms; %7D rect:nth-child(10) %7B transform-origin: 423px 5px; transform: rotate(176deg); animation: blast 700ms infinite ease-out; animation-delay: 311ms; animation-duration: 508ms; %7D rect:nth-child(11) %7B transform-origin: 465px 5px; transform: rotate(108deg); animation: blast 700ms infinite ease-out; animation-delay: 108ms; animation-duration: 595ms; %7D rect:nth-child(12) %7B transform-origin: 506px 6px; transform: rotate(62deg); animation: blast 700ms infinite ease-out; animation-delay: 105ms; animation-duration: 375ms; %7D rect:nth-child(13) %7B transform-origin: 549px 5px; transform: rotate(16deg); animation: blast 700ms infinite ease-out; animation-delay: 149ms; animation-duration: 491ms; %7D rect:nth-child(odd) %7B fill: %2365BB5C; %7D rect:nth-child(even) %7B z-index: 1; fill: %2333AAFF; %7D rect:nth-child(4n) %7B animation-duration: 1400ms; fill: %23F23B14; %7D rect:nth-child(3n) %7B animation-duration: 1750ms; animation-delay: 700ms; %7D rect:nth-child(4n-7) %7B fill: %232A2F6A; %7D rect:nth-child(6n) %7B fill: %23FBBA23; %7D @keyframes blast %7B from %7B opacity: 0; %7D 20%25 %7B opacity: 1; %7D to %7B transform: translateY(90px); %7D %7D %3C/style%3E%3C/svg%3E%0A")`;

    // heading
    $confetti_h1.style.all = "unset";
    $confetti_h1.style.display = "block";
    $confetti_h1.style.fontSize = "1.3em";
    $confetti_h1.style.fontWeight = "bold";
    $confetti_h1.style.padding = "0";
    $confetti_h1.style.margin = "0";

    // text
    $confetti_p.style.all = "unset";
    $confetti_p.style.padding = "0";
    $confetti_p.style.display = "block";
    $confetti_p.style.margin = "1em 0";

    // button
    const $button = document.createElement("div");
    $button.innerText = "Got it!";
    $button.style.all = "unset";
    $button.style.padding = "10px 20px 10px 20px";
    $button.style.borderRadius = "4px";
    $button.style.color = "white";
    $button.style.display = "inline-block";
    $button.style.backgroundColor = "rgb(0, 119, 204)";
    $button.style.margin = "0";
    $button.style.cursor = "pointer";

    // close popup when clicked off it, or clicking on the button
    $confetti.addEventListener("click", ev => {
        if (ev.target === $button || !$main.contains(ev.target)) {
            hideConfetti();
        }
    });

    // append everything
    $main.appendChild($confetti_h1);
    $main.appendChild($confetti_p);
    $main.appendChild($button);
    $confetti.appendChild($main);
    document.body.appendChild($confetti);
})();

/**
 * Show congratulatory confetti.
 * @param {number} coinsWon Number of coins recently won.
 * @param {number} balance Current number of coins.
 */
function showConfetti(coinsWon, balance) {
    $confetti.style.pointerEvents = "";
    $confetti.style.opacity = "1";

    $confetti_h1.innerText = `You won ${coinsWon} coins!`;
    $confetti_p.innerText = `Congratulations on completing the challenge - you now have ${balance} coins! `
        + "Visit another webpage to win more, or open the extension to spend your winnings :)";
}

/**
 * Hide confetti.
 */
function hideConfetti() {
    $confetti.style.opacity = "0";
    $confetti.style.pointerEvents = "none";
}
