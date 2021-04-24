var allconfettis = [];

var confetti0 = document.getElementById("confetti-0");
allconfettis.push(confetti0);

var confetti1 = document.getElementById("confetti-1");
allconfettis.push(confetti1);

var confetti2 = document.getElementById("confetti-2");
allconfettis.push(confetti2);

var confetti3 = document.getElementById("confetti-3");
allconfettis.push(confetti3);

var confetti4 = document.getElementById("confetti-4");
allconfettis.push(confetti4);

var confetti5 = document.getElementById("confetti-5");
allconfettis.push(confetti5);

var confetti6 = document.getElementById("confetti-6");
allconfettis.push(confetti6);

var confetti7 = document.getElementById("confetti-7");
allconfettis.push(confetti7);

var confetti8 = document.getElementById("confetti-8");
allconfettis.push(confetti8);

var confetti9 = document.getElementById("confetti-9");
allconfettis.push(confetti9);

var confetti10 = document.getElementById("confetti-10");
allconfettis.push(confetti10);

var confetti11 = document.getElementById("confetti-11");
allconfettis.push(confetti11);

var confetti12 = document.getElementById("confetti-12");
allconfettis.push(confetti12);

var confetti13 = document.getElementById("confetti-13");
allconfettis.push(confetti13);

var confetti14 = document.getElementById("confetti-14");
allconfettis.push(confetti14);

var averageDuration;

setAnimationSpeedBasedOnHeight();
setInitialSize()

function setAnimationSpeedBasedOnHeight() {

    //calculate duration
    let height = document.body.clientHeight;

    let h = height / 60;

    if (h < 3)
        h = 3;

    averageDuration = h;

    for (var i = 0; i < allconfettis.length; i++) {
        allconfettis[i].style.setProperty('--duration', h+'s');
    }
}

function setRandomRotationAmount() {
    return Math.floor(Math.random() * 75) - 75;
}

function setInitialSize() {
    for (var i = 0; i < allconfettis.length; i++) {
        allconfettis[i].style.setProperty('width', randomIntFromInterval(20, 30) + 'px');
        allconfettis[i].style.setProperty('height', randomIntFromInterval(20, 30) + 'px');
        allconfettis[i].style.setProperty('--rotate-amount', setRandomRotationAmount() + 'deg');
        allconfettis[i].style.setProperty('--duration', randomIntFromInterval(averageDuration - 2, averageDuration + 2) + 's');
    }
}

function setRandomSize(el) {
    el.style.setProperty('width', randomIntFromInterval(20, 30) + 'px');
    el.style.setProperty('height', randomIntFromInterval(20, 30) + 'px');
}

function randomIntFromInterval(min, max) { // min and max included 
    let d = Math.floor(Math.random() * (max - min + 1) + min);

    if (d < 3)
        d = 3;

    return d;
}