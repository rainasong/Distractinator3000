// Initialize button with user's preferred color
let changeColor = document.getElementById("toggle");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}

// toggle button
let toggle = document.getElementById("toggle");

toggle.addEventListener("change", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: toggleOption,
  });
});

function toggleOption(){
  alert("hi");
}

let card = document.getElementById("card");

// card.addEventListener("click", async () => {
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: getId,
//   });
// });

document.addEventListener('click', function(e) {
  console.log(e.target.id);
  // alert(e.target.id);
}, false);

document.write('<comp></comp>');

document.getElementById("test").innerHTML = "<comp></comp>";
