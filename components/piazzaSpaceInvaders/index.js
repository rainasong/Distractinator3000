async function piazzaSpaceInvaders() {
  piazzaSpaceInvaders_addDOMElement();
}

function piazzaSpaceInvaders_addDOMElement() {
  const html = document.querySelector("html");
  const elem = document.createElement("div");
  elem.style.position = "absolute";
  elem.style.zIndex = "9999999";
  elem.style.bottom = "0";
  elem.style.backgroundColor = "white";
  elem.style.height = "30vh";
  elem.style.width = "100%";
  elem.style.boxShadow = "0 3px 15px 2px rgba(0, 0, 0, 0.3)";

  const $iframe = document.createElement("iframe");
  $iframe.src = chrome.runtime.getURL("/components/spaceInvaders/index.html");
  $iframe.style.height = "50vh";
  $iframe.style.width = "100%";
  $iframe.style.border = "none";
  $iframe.style.borderTop = "solid black 1px";
  $iframe.style.bottom = "0";

  const $label = document.createElement("div");
  $label.style.width = "100%";
  $label.style.height = "30px";
  $label.style.padding = "15px 0 5px 15px";
  $label.style.fontFamily = "Roboto";
  $label.innerText = "Play Space Invaders to win coins!";

  elem.appendChild($label);
  elem.appendChild($iframe);
  html.appendChild(elem);
}
