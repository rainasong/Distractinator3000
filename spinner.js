let spin = document.getElementById("spin-btn");

spin.addEventListener("click", function(){
//   let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     function: spin,
//   });
    alert("hello");
});

function spin(){
    var min = 1024;
    var max = 9999;

    var deg = Math.floor(Math.random() * (x-y)) + y;
    document.getElementById("spinner").style.transform = "rotate("+deg+"deg)";
}