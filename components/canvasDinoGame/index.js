async function canvasDinoGame() {
  canvasDinoGame_addDOMElement();
}

function canvasDinoGame_addDOMElement() {
  const html = document.querySelector("html");
  const elem = document.createElement("div");
  elem.style.position = "fixed";
  elem.style.zIndex = "999";
  elem.style.bottom = "0";
  elem.style.backgroundColor = "white";
  elem.style.height = "30vh";
  elem.style.width = "100%";
  elem.style.boxShadow = "0 3px 15px 2px rgba(0, 0, 0, 0.3)";

  const $iframe = document.createElement("iframe");
  $iframe.src = chrome.runtime.getURL("/components/dinoGame/index.html");
  $iframe.style.height = "calc(100%-30px)";
  $iframe.style.width = "100%";
  $iframe.style.border = "none";
  $iframe.style.borderTop = "solid black 1px";

  const $label = document.createElement("div");
  $label.style.width = "100%";
  $label.style.height = "30px";
  $label.style.padding = "10px 10px 5px 10px";
  $label.innerText = "Play the Dino game to win coins!";

  elem.appendChild($label);
  elem.appendChild($iframe);
  html.appendChild(elem);
}
