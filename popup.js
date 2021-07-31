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

document.addEventListener('click', function(e) {
  console.log(e.target.id);
  // alert(e.target.id);
}, false);
