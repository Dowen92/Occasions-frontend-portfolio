var allHearts = [];

var heart0 = document.getElementById("heart0");
allHearts.push(heart0);

var heart1 = document.getElementById("heart1");
allHearts.push(heart1);

var heart2 = document.getElementById("heart2");
allHearts.push(heart2);

var heart3 = document.getElementById("heart3");
allHearts.push(heart3);

var heart4 = document.getElementById("heart4");
allHearts.push(heart4);

var heart5 = document.getElementById("heart5");
allHearts.push(heart5);

var heart6 = document.getElementById("heart6");
allHearts.push(heart6);

var heart7 = document.getElementById("heart7");
allHearts.push(heart7);

var heart8 = document.getElementById("heart8");
allHearts.push(heart8);

var heart9 = document.getElementById("heart9");
allHearts.push(heart9);

var heart10 = document.getElementById("heart10");
allHearts.push(heart10);

var heart11 = document.getElementById("heart11");
allHearts.push(heart1);

var heart12 = document.getElementById("heart12");
allHearts.push(heart12);

var heart13 = document.getElementById("heart13");
allHearts.push(heart13);

var heart14 = document.getElementById("heart14");
allHearts.push(heart14);

var averageDuration;

setAnimationSpeedBasedOnHeight();
setInitialSize();

function setAnimationSpeedBasedOnHeight() {

    //calculate duration
    let height = document.getElementById("hearts").clientHeight;

    let h = height / 60;

    if (h < 3)
        h = 3;

    averageDuration = h;

    for (var i = 0; i < allHearts.length; i++) {
        allHearts[i].style.setProperty('--duration', h + 's');
    }
}

function setRandomRotationAmount() {
    return Math.floor(Math.random() * 75) - 75;
}

function setInitialSize() {
    for (var i = 0; i < allHearts.length; i++) {
        allHearts[i].style.setProperty('width', randomIntFromInterval(35, 50) + 'px');
        allHearts[i].style.setProperty('height', randomIntFromInterval(35, 50) + 'px');
        allHearts[i].style.setProperty('--var-shake', randomIntFromInterval(20, 80) + 'px');
        allHearts[i].style.setProperty('--var-shake-duration', randomIntFromInterval(4, 7) + 's');
        allHearts[i].style.setProperty('--duration', randomIntFromInterval(averageDuration - 2, averageDuration + 2) + 's');
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