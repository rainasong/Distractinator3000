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

/**
 * Show congratulatory confetti.
 * @param {number} coinsWon Number of coins recently won.
 * @param {number} balance Current number of coins.
 */
function showConfetti(coinsWon, balance) {
    if (showConfetti.$elem == null) {
        // container element (darkens webpage)
        const $elem = document.createElement("div");
        showConfetti.$elem = $elem;

        $elem.style.position = "fixed";
        $elem.style.height = "100%";
        $elem.style.width = "100%";
        $elem.style.top = "0";
        $elem.style.left = "0";
        $elem.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        $elem.style.transition = "opacity 0.2s";
        $elem.style.opacity = "0";

        // centered element (with white background)
        const $main = document.createElement("div");

        $main.style.position = "absolute";
        $main.style.width = "calc(100% - 20px)";
        $main.style.maxWidth = "500px";
        $main.style.zIndex = "999999999";
        $main.style.top = "40%";
        $main.style.left = "50%";
        $main.style.transform = "translate(-50%, -50%)";
        $main.style.borderRadius = "8px";
        $main.style.color = "black";
        $main.style.padding = "40px 20px 20px 20px";
    
        // confetti background
        $main.style.backgroundColor = "white";
        $main.style.backgroundRepeat = "repeat-x";
        $main.style.backgroundPosition = "top -10px center";
        $main.style.backgroundImage = `url("data:image/svg+xml,%3Csvg width='600' height='90' viewBox='0 0 600 90' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='42' y='-10' width='6' height='10'/%3E%3Crect x='84' y='-10' width='6' height='10'/%3E%3Crect x='126' y='-13' width='5' height='13'/%3E%3Crect x='168' y='-13' width='5' height='13'/%3E%3Crect x='210' y='-10' width='6' height='10'/%3E%3Crect x='252' y='-13' width='5' height='13'/%3E%3Crect x='294' y='-10' width='6' height='10'/%3E%3Crect x='336' y='-13' width='5' height='13'/%3E%3Crect x='378' y='-13' width='5' height='13'/%3E%3Crect x='420' y='-10' width='6' height='10'/%3E%3Crect x='462' y='-10' width='6' height='10'/%3E%3Crect x='504' y='-13' width='5' height='13'/%3E%3Crect x='546' y='-10' width='6' height='10'/%3E%3Cstyle type='text/css'%3E rect %7B opacity: 0; %7D rect:nth-child(1) %7B transform-origin: 45px 5px; transform: rotate(-145deg); animation: blast 700ms infinite ease-out; animation-delay: 88ms; animation-duration: 631ms; %7D rect:nth-child(2) %7B transform-origin: 87px 5px; transform: rotate(164deg); animation: blast 700ms infinite ease-out; animation-delay: 131ms; animation-duration: 442ms; %7D rect:nth-child(3) %7B transform-origin: 128px 6px; transform: rotate(4deg); animation: blast 700ms infinite ease-out; animation-delay: 92ms; animation-duration: 662ms; %7D rect:nth-child(4) %7B transform-origin: 170px 6px; transform: rotate(-175deg); animation: blast 700ms infinite ease-out; animation-delay: 17ms; animation-duration: 593ms; %7D rect:nth-child(5) %7B transform-origin: 213px 5px; transform: rotate(-97deg); animation: blast 700ms infinite ease-out; animation-delay: 122ms; animation-duration: 476ms; %7D rect:nth-child(6) %7B transform-origin: 255px 6px; transform: rotate(57deg); animation: blast 700ms infinite ease-out; animation-delay: 271ms; animation-duration: 381ms; %7D rect:nth-child(7) %7B transform-origin: 297px 5px; transform: rotate(-46deg); animation: blast 700ms infinite ease-out; animation-delay: 131ms; animation-duration: 619ms; %7D rect:nth-child(8) %7B transform-origin: 338px 6px; transform: rotate(-65deg); animation: blast 700ms infinite ease-out; animation-delay: 85ms; animation-duration: 668ms; %7D rect:nth-child(9) %7B transform-origin: 380px 6px; transform: rotate(13deg); animation: blast 700ms infinite ease-out; animation-delay: 128ms; animation-duration: 377ms; %7D rect:nth-child(10) %7B transform-origin: 423px 5px; transform: rotate(176deg); animation: blast 700ms infinite ease-out; animation-delay: 311ms; animation-duration: 508ms; %7D rect:nth-child(11) %7B transform-origin: 465px 5px; transform: rotate(108deg); animation: blast 700ms infinite ease-out; animation-delay: 108ms; animation-duration: 595ms; %7D rect:nth-child(12) %7B transform-origin: 506px 6px; transform: rotate(62deg); animation: blast 700ms infinite ease-out; animation-delay: 105ms; animation-duration: 375ms; %7D rect:nth-child(13) %7B transform-origin: 549px 5px; transform: rotate(16deg); animation: blast 700ms infinite ease-out; animation-delay: 149ms; animation-duration: 491ms; %7D rect:nth-child(odd) %7B fill: %2365BB5C; %7D rect:nth-child(even) %7B z-index: 1; fill: %2333AAFF; %7D rect:nth-child(4n) %7B animation-duration: 1400ms; fill: %23F23B14; %7D rect:nth-child(3n) %7B animation-duration: 1750ms; animation-delay: 700ms; %7D rect:nth-child(4n-7) %7B fill: %232A2F6A; %7D rect:nth-child(6n) %7B fill: %23FBBA23; %7D @keyframes blast %7B from %7B opacity: 0; %7D 20%25 %7B opacity: 1; %7D to %7B transform: translateY(90px); %7D %7D %3C/style%3E%3C/svg%3E%0A")`;
    
        // heading
        const $h1 = document.createElement("h1");
        $h1.innerText = `You won ${coinsWon} coins!`;

        // text
        const $p = document.createElement("p");
        $p.innerText = `Congratulations on completing the challenge - you now have ${balance} coins! `
            + "Visit another webpage to win more, or open the extension to spend your winnings :)";

        // button
        const $button = document.createElement("div");
        $button.innerText = "Got it!";
        $button.style.padding = "10px 20px 10px 20px";
        $button.style.borderRadius = "4px";
        $button.style.color = "white";
        $button.style.display = "inline-block";
        $button.style.backgroundColor = "rgb(0, 119, 204)";

        // close popup when clicked off it, or clicking on the button
        $elem.addEventListener("click", ev => {
            if (ev.target === $button || !$main.contains(ev.target)) {
                hideConfetti();
            }
        });

        // append everything
        $main.appendChild($h1);
        $main.appendChild($p);
        $main.appendChild($button);
        $elem.appendChild($main);
        document.body.appendChild($elem);
    }

    // unhide confetti
    showConfetti.$elem.style.pointerEvents = "";
    setTimeout(() => {
        showConfetti.$elem.style.opacity = "1";
    }, 1);
}

/**
 * Hide confetti.
 */
function hideConfetti() {
    if (showConfetti.$elem != null) {
        showConfetti.$elem.style.opacity = "0";
        showConfetti.$elem.style.pointerEvents = "none";
    }
}
