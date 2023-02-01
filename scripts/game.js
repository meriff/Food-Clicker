// Copyright code to xfinitywebdev and XFinityWebTester
// Variables needed to declare for the game's core code
var clicks = 0;
var cps = 1;
var breadPrice = 10;
var broccoliPrice = 30;

// Functions for the game
function createFood() {
    clicks += cps;
    document.getElementById('food').innerHTML = clicks;
}

function buyBread() {

    if (clicks >= breadPrice) {
    clicks = clicks - breadPrice;
    cps += 1;
    breadPrice = Math.round(breadPrice * 1.7);
    document.getElementById('food').innerHTML = clicks;
    document.getElementById('breadText').innerHTML = breadPrice;
    } else {
        alert('You do not have enough food to learn this recipe.')
    }
}

function buyBroccoli() {
    
    if (clicks >= broccoliPrice) {
        clicks = clicks - broccoliPrice;
        cps = cps + 5;
        broccoliPrice = Math.round(breadPrice * 1.7);
        document.getElementById('food').innerHTML = clicks;
        document.getElementById('broccoliText').innerHTML = broccoliPrice;
    } else {
        alert('You do not have enough food to learn this recipe.');
    }

}

