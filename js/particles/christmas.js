var allSnows = [];

var balloon0 = document.getElementById("snow-0");
allSnows.push(balloon0);

var balloon1 = document.getElementById("snow-1");
allSnows.push(balloon1);

var balloon2 = document.getElementById("snow-2");
allSnows.push(balloon2);

var balloon3 = document.getElementById("snow-3");
allSnows.push(balloon3);

var balloon4 = document.getElementById("snow-4");
allSnows.push(balloon4);

var balloon5 = document.getElementById("snow-5");
allSnows.push(balloon5);

var balloon6 = document.getElementById("snow-6");
allSnows.push(balloon6);

var balloon7 = document.getElementById("snow-7");
allSnows.push(balloon7);

var balloon8 = document.getElementById("snow-8");
allSnows.push(balloon8);

var balloon9 = document.getElementById("snow-9");
allSnows.push(balloon9);

var balloon10 = document.getElementById("snow-10");
allSnows.push(balloon10);

var balloon11 = document.getElementById("snow-11");
allSnows.push(balloon11);

var balloon12 = document.getElementById("snow-12");
allSnows.push(balloon12);

var balloon13 = document.getElementById("snow-13");
allSnows.push(balloon13);

var balloon14 = document.getElementById("snow-14");
allSnows.push(balloon14);


var averageDuration;

setAnimationSpeedBasedOnHeight();
setInitialSize();

function setRandomShakeAmount() {

    for (var i = 0; i < allSnows.length; i++) {

    }
}

function setRandomRotationAmount() {
    return Math.floor(Math.random() * 75) - 75;
}

function setAnimationSpeedBasedOnHeight() {

    //calculate duration
    let height = document.getElementById("snows").clientHeight;

    let h = height / 60;

    if (h < 3)
        h = 3;

    averageDuration = h;

    for (var i = 0; i < allSnows.length; i++) {
        allSnows[i].style.setProperty('--duration', h + 's');
    }
}

function setInitialSize() {
    for (let i = 0; i < allSnows.length; i++) {
        allSnows[i].style.setProperty('width', randomIntFromInterval(20, 30) + 'px');
        allSnows[i].style.setProperty('height', randomIntFromInterval(20, 30) + 'px');
        allSnows[i].style.setProperty('--var-shake', randomIntFromInterval(20, 80) + 'px');
        allSnows[i].style.setProperty('--var-shake-duration', randomIntFromInterval(4, 7) + 's');
        allSnows[i].style.setProperty('--duration', randomIntFromInterval(averageDuration - 2, averageDuration + 2) + 's');
    }
}

function randomIntFromInterval(min, max) { // min and max included 
    let d = Math.floor(Math.random() * (max - min + 1) + min);

    if (d < 3)
        d = 3;

    return d;
}