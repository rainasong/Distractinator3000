let spinBtn = document.getElementById("spin-btn");

spinBtn.addEventListener("click", function() {
    var min = 900;
    var max = 9999;
    var deg = Math.floor(Math.random() * (min-max)) + min;
    document.getElementById("spinner").style.transform = "rotate("+deg+"deg)";

    var index = Math.abs(Math.floor(((deg+22.5)%360)/45))+1;
    if (index == 9){
        index = 1;
    }

    var coins = Number.parseInt(document.getElementById(index).innerText);
    
    setTimeout(function(){
        showConfetti(coins, getCoins());
        addCoins(coins);
    }, 5500);
});

