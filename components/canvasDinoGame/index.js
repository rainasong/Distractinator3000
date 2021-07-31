async function canvasDinoGame() {
  addDOMElement();
}

async function addDOMElement() {
  const html = document.querySelector("html");
  const elem = document.createElement("div");
  elem.style.position = "fixed";
  elem.style.zIndex = "999";
  elem.style.bottom = "0";
  elem.style.backgroundColor = "white";
  elem.style.height = "30vh";
  elem.style.width = "100%";

  fetch(chrome.runtime.getURL("/components/dinoGame/index.html")).then(
    (res) => {
      elem.innerHTML = `<iframe src="${res.url}" style="height:100%;width:100%"/>`;
    }
  );

  html.appendChild(elem);
}
