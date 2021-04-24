var allBalloons = [];

var balloon0 = document.getElementById("balloon0");
allBalloons.push(balloon0);

var balloon1 = document.getElementById("balloon1");
allBalloons.push(balloon1);

var balloon2 = document.getElementById("balloon2");
allBalloons.push(balloon2);

var balloon3 = document.getElementById("balloon3");
allBalloons.push(balloon3);

var balloon4 = document.getElementById("balloon4");
allBalloons.push(balloon4);

var balloon5 = document.getElementById("balloon5");
allBalloons.push(balloon5);

var balloon6 = document.getElementById("balloon6");
allBalloons.push(balloon6);

var balloon7 = document.getElementById("balloon7");
allBalloons.push(balloon7);

var balloon8 = document.getElementById("balloon8");
allBalloons.push(balloon8);

var balloon9 = document.getElementById("balloon9");
allBalloons.push(balloon9);

var balloon10 = document.getElementById("balloon10");
allBalloons.push(balloon10);

var balloon11 = document.getElementById("balloon11");
allBalloons.push(balloon1);

var balloon12 = document.getElementById("balloon12");
allBalloons.push(balloon12);

var balloon13 = document.getElementById("balloon13");
allBalloons.push(balloon13);

var balloon14 = document.getElementById("balloon14");
allBalloons.push(balloon14);

var averageDuration;

setAnimationSpeedBasedOnHeight();
setInitialSize();

function setAnimationSpeedBasedOnHeight() {

    //calculate duration
    let height = document.getElementById("balloons").clientHeight;

    let h = height / 60;

    if (h < 3)
        h = 3;

    averageDuration = h;

    for (var i = 0; i < allBalloons.length; i++) {
        allBalloons[i].style.setProperty('--duration', h + 's');
    }
}

function setRandomRotationAmount() {
    return Math.floor(Math.random() * 75) - 75;
}

function setInitialSize() {
    for (var i = 0; i < allBalloons.length; i++) {
        allBalloons[i].style.setProperty('width', randomIntFromInterval(35, 50) + 'px');
        allBalloons[i].style.setProperty('height', randomIntFromInterval(35, 50) + 'px');
        allBalloons[i].style.setProperty('--var-shake', randomIntFromInterval(20, 80) + 'px');
        allBalloons[i].style.setProperty('--var-shake-duration', randomIntFromInterval(4, 7) + 's');
        allBalloons[i].style.setProperty('--duration', randomIntFromInterval(averageDuration - 2, averageDuration + 2) + 's');
    }
}

function setRandomSize(el) {
    el.style.setProperty('width', randomIntFromInterval(35, 50) + 'px');
    el.style.setProperty('height', randomIntFromInterval(35, 50) + 'px');
}

function randomIntFromInterval(min, max) { // min and max included 
    let d = Math.floor(Math.random() * (max - min + 1) + min); 

    if (d < 3)
        d = 3;

    return d;
}