var pausePlayBtn = document.getElementById("pausePlayBtn");
var leftBtn = document.getElementById("leftBtn");
var rightBtn = document.getElementById("rightBtn");
var noBtn = document.getElementById("noBtn");
var isPlaying = false;
var goingRight = true;

leftBtn.addEventListener("click", left, false);

const imageShow = document.querySelector('.fullscreen-show');

imageShow.onanimationend = () => {
    if (imageShow.classList.contains("hide-fade")) {
        imageShow.classList.add("d-none");
        imageShow.classList.remove("hide-fade");
    } else {
        imageShow.classList.remove("show-fade");
    }
};

noBtn.addEventListener("click", function (event) {
    event.stopPropagation()
});

leftBtn.addEventListener("click", function (event) {
    event.stopPropagation()
});

rightBtn.addEventListener("click", function (event) {
   event.stopPropagation()
});

pausePlayBtn.addEventListener("click", function (event) {
    event.stopPropagation()
});


var fullScreenShow = document.getElementById("fullscreen-show");
var fullScreenImg = document.getElementById("fullscreen-img");
var fullScreenImg2 = document.getElementById("fullscreen-img2");
var nextScreen = fullScreenImg;
var timer;

var numberOfImages = document.getElementById("thumbnails").childElementCount;
var currentImgIndex = 0;

function pause_play() {
    if (isPlaying) {
        pausePlayBtn.innerHTML = '<i class="fa fa-play-circle fa-4x"></i>';
        pause();
        isPlaying = false;
    }
    else {
        pausePlayBtn.innerHTML = '<i class="fa fa-pause-circle fa-4x"></i>';
        goingRight = true;
        play();
        isPlaying = true;
    }

    toggleNextBtns();
}

function right() {
    if (animating)
        return;
    goingRight = true;
    showNextImg();
}

function left() {
    if (animating)
        return;
    goingRight = false;
    showNextImg();
}

function toggleNextBtns() {
    if (leftBtn.classList.contains("d-none")) {
        leftBtn.classList.remove("d-none");
        rightBtn.classList.remove("d-none");
    }
    else {
        leftBtn.classList.add("d-none");
        rightBtn.classList.add("d-none");
    }
}


var animating = false;




function setFullScreenSourceAndShow(index) {
    currentImgIndex = index;
    fullScreenImg.src = imgsSrc[currentImgIndex];
    fullScreenImg2.src = imgsSrc[getNextIndex()];

    fullScreenImg.classList.remove("img-out");    //Make sure first screen is showing
    fullScreenImg.classList.add("img-in");
    fullScreenImg2.classList.remove("img-in");    //Make sure second screen is hidding
    fullScreenImg2.classList.add("img-out");

    showFullScreenShow();
}

function showFullScreenShow() {
    if(isPlaying)
        pause_play();

    document.getElementById("fullscreen-show").classList.add("show-fade");
    fullScreenShow.classList.remove("d-none");

    document.body.classList.add("no-scroll");
    document.body.classList.remove("scroll");

    if (numberOfImages == 1)
        return;

    if (fullScreenImg.classList.contains("img-in")) {
        nextScreen = fullScreenImg2;
    }
    else if (fullScreenImg2.classList.contains("img-in")) {
        nextScreen = fullScreenImg
    }

    updateNextScreen();
}

function showNextImg() { //Call fadeImages to show the next one - wait 2 seconds and call setNextScreen 

    //leftBtn.removeEventListener("click", left, false);
    animating = true;
    //leftBtn.disabled = true;
    //rightBtn.disabled = true;
    noBtn.style.zIndex = 10;
    if (goingRight && currentImgIndex == numberOfImages)
        currentImgIndex = 0;

    if (!goingRight && currentImgIndex == 0)
        currentImgIndex = numberOfImages-1;

    updateNextScreen();//Set the next image to be shown

    fadeImages();

    setTimeout(() => { setNextScreen(); }, 1000);
}

function fadeImages() {	//fade out and in the img containers to reveal the next image
    if (fullScreenImg.classList.contains("img-in")) {
        fullScreenImg.classList.add("img-out");
        fullScreenImg.classList.remove("img-in");
        fullScreenImg2.classList.remove("img-out");
        fullScreenImg2.classList.add("img-in");
    }
    else {
        fullScreenImg.classList.remove("img-out");
        fullScreenImg.classList.add("img-in");
        fullScreenImg2.classList.add("img-out");
        fullScreenImg2.classList.remove("img-in");
    }
}

function getNextIndex() { //Get the next image index to be shown
    if (goingRight && currentImgIndex == numberOfImages - 1)
        return 0;

    if (!goingRight && currentImgIndex == 0)
        currentImgIndex = numberOfImages;

    var nextIndex = 0;
    if (goingRight)
        nextIndex = currentImgIndex + 1;
    else
        nextIndex = currentImgIndex - 1;

    return nextIndex;
}

function setNextScreen() { //Sort images being shown
    animating = false;

    if (goingRight && currentImgIndex == numberOfImages - 1) {
        currentImgIndex = -1;
    }

    if (!goingRight && currentImgIndex == 0) {
        currentImgIndex = numberOfImages;
    }

    if (goingRight)
        currentImgIndex++;
    else
        currentImgIndex--;

    nextScreen.src = imgsSrc[currentImgIndex];

    if (fullScreenImg.classList.contains("img-in")) {
        nextScreen = fullScreenImg2;
    }
    else if (fullScreenImg2.classList.contains("img-in")) {
        nextScreen = fullScreenImg
    }

    nextScreen.src = imgsSrc[getNextIndex()];
}

function updateNextScreen() {
    nextScreen.src = imgsSrc[getNextIndex()];
}

function hideFullScreenShow() {
    document.getElementById("fullscreen-show").classList.add("hide-fade");
    document.body.classList.add("scroll");
    document.body.classList.remove("no-scroll");
    clearInterval(timer)
}

function pause() {
    clearInterval(timer)
}

function play() {
    timer = setInterval(showNextImg, 3000);
}