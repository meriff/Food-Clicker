var clicks = 0;
var cps = 1;
var breadPrice = 10;

function createFood() {
    clicks += cps;
}

function buyBread() {
    clicks = clicks - breadPrice;
    cps += 1;
    breadPrice = Math.round(breadPrice * 1.7);
    document.getElementById('food').innerHTML = clicks;
}
