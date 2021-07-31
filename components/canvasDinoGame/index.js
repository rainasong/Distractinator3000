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

  const $iframe = document.createElement("iframe");
  $iframe.src = chrome.runtime.getURL("/components/dinoGame/index.html");
  $iframe.style.height = "100%";
  $iframe.style.width = "100%";

  elem.appendChild($iframe);
  html.appendChild(elem);
}
