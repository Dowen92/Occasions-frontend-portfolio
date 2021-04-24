let senderNameInput = document.getElementById("sendersName");
let senderInputCount = document.getElementById("sendersCount");
let messageInput = document.getElementById("message");
let messageInputCount = document.getElementById("messageCount");
let recieversNameInput = document.getElementById("recieversName");
let recieversInputCount = document.getElementById("recieversCount");

//#region SetUp
$(document).ready(function () {
    $(function () {
        $('#occasion').val("None");

        $('#font').fontselect({ lookahead: 2 }).change(function () {

            // replace + signs with spaces for css
            var font = $(this).val().replace(/\+/g, ' ');

            // split font into family and weight
            font = font.split(':');

            // set font on paragraphs
            $('#preview-reciever').css('font-family', font[0]);
            $('#preview-message').css('font-family', font[0]);
            $('#preview-sender').css('font-family', font[0]);
        });
    });

    $('#font').val('Aladin').change();

    //Set default font
    var font = 'Aladin';
    $('#preview-reciever').css('font-family', font);
    $('#preview-message').css('font-family', font);
    $('#preview-sender').css('font-family', font);

    //Color pickers
    $(".background").spectrum({     
        color: "white",
        move: function (color) { updateBackgroundColor(".preview", color); },
        hide: function (color) { updateBackgroundColor(".preview", color); },
        showButtons: false,
        preferredFormat: "hsl",
    });

    $(".text").spectrum({
        color: "black",
        move: function (color) { updateTextColor(color); },
        hide: function (color) { updateTextColor(color); },
        showButtons: false,
        preferredFormat: "hsl",
    });

    $('#myRange').val(20);
  
});

//#endregion

//#region Contrast

var background = "";
var text = "";

function CheckContrast() {

    var colorContainers = document.querySelectorAll(".sp-preview-inner");

    background = rgba2hex(colorContainers[0].style.backgroundColor);
    text = rgba2hex(colorContainers[1].style.backgroundColor);

    fetch('https://webaim.org/resources/contrastchecker/?fcolor='+text+'&bcolor='+background+'&api')
        .then(
            function (response) {
                if (response.status !== 200) {
                    console.log('Looks like there was a problem. Status Code: ' +
                        response.status);
                    return;
                }

                // Examine the text in the response
                response.json().then(function (data) {
                    if (data.AA === "fail" || data.AALarge === "fail") {
                        document.getElementById("contrast_warning").innerHTML = "Currently selected colors could be hard to read for some users.";
                    }
                    else {
                        document.getElementById("contrast_warning").innerHTML = "";
                    }
                });
            }
        )
        .catch(function (err) {
            console.log('Fetch Error :-S', err);
        });

    //updatePreview();
}

function rgba2hex(orig) {
    var a, isPercent,
        rgb = orig.replace(/\s/g, '').match(/^rgba?\((\d+),(\d+),(\d+),?([^,\s)]+)?/i),
        alpha = (rgb && rgb[4] || "").trim(),
        hex = rgb ?
            (rgb[1] | 1 << 8).toString(16).slice(1) +
            (rgb[2] | 1 << 8).toString(16).slice(1) +
            (rgb[3] | 1 << 8).toString(16).slice(1) : orig;

    if (alpha !== "") {
        a = alpha;
    } else {
        a = 01;
    }
    // multiply before convert to HEX
    a = ((a * 255) | 1 << 8).toString(16).slice(1)
    hex = hex + a;

    return hex;
}
//#endregion

//#region Animations

var animation = bodymovin.loadAnimation({
    container: document.getElementById('bm'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets9.lottiefiles.com/packages/lf20_yfbvqzwi.json'
})
animation.setSpeed(0.5);

var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('bm1'),
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: 'https://assets10.lottiefiles.com/packages/lf20_oUXj84.json'
})

var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('bm2'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets10.lottiefiles.com/packages/lf20_oUXj84.json'
})

var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('bm3'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets10.lottiefiles.com/packages/lf20_oUXj84.json'
})


var number1Anim = bodymovin.loadAnimation({
    container: document.getElementById('bm4'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_Az1u8i.json'
})

var number2Anim = bodymovin.loadAnimation({
    container: document.getElementById('bm5'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_2MnYNd.json'
})

var number3Anim = bodymovin.loadAnimation({
    container: document.getElementById('bm6'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_DCXHIu.json'
})


var number4Anim = bodymovin.loadAnimation({
    container: document.getElementById('bm7'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_9STzCM.json'
})

var number5Anim = bodymovin.loadAnimation({
    container: document.getElementById('bm13'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'https://assets9.lottiefiles.com/packages/lf20_QxUOmv.json'
})

var image1Anim = bodymovin.loadAnimation({
    container: document.getElementById('bm8'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/packages/lf20_xctgdJ.json'
})

var image2Anim = bodymovin.loadAnimation({
    container: document.getElementById('bm9'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/packages/lf20_xctgdJ.json'
})

var image3Anim = bodymovin.loadAnimation({
    container: document.getElementById('bm10'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/packages/lf20_xctgdJ.json'
})

var image4Anim = bodymovin.loadAnimation({
    container: document.getElementById('bm11'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/packages/lf20_xctgdJ.json'
})

var image5Anim = bodymovin.loadAnimation({
    container: document.getElementById('bm12'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/packages/lf20_xctgdJ.json'
})

var thinkingAnim = bodymovin.loadAnimation({
    container: document.getElementById('bm14'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'https://assets4.lottiefiles.com/packages/lf20_zJkn1j.json'
})
thinkingAnim.setSpeed(0.5);

window.addEventListener('scroll', function (event) {
    if (isInViewport(document.getElementById('bm4'))) {
        number1Anim.play();

    }
}, false);

window.addEventListener('scroll', function (event) {
    if (isInViewport(document.getElementById('bm5'))) {
            number2Anim.play();
    }
}, false);

window.addEventListener('scroll', function (event) {
    if (isInViewport(document.getElementById('bm6'))) {
            number3Anim.play();
    }
}, false);


window.addEventListener('scroll', function (event) {
    if (isInViewport(document.getElementById('bm7'))) {
            number4Anim.play();
    }
}, false);

window.addEventListener('scroll', function (event) {
    if (isInViewport(document.getElementById('bm13'))) {
        number5Anim.play();
    }
}, false);

function playAnimSelection(toPlay, callLayout) {
    layoutViewed = toPlay;

    if (toPlay == 0)
        animation1.play();
    else if (toPlay == 1)
        animation2.play();
    else
        animation3.play();

    if (callLayout)
        selectLayout();
}


var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};

//#endregion

//#region UpdatePreview
let previewSenderEl = document.getElementById("preview-sender");
let previewMessageEl = document.getElementById("preview-message");
let previewRecieverEl = document.getElementById("preview-reciever");
let slider = document.getElementById("myRange");

function updateTextColor(color) {
    $(previewSenderEl).css("color", (color ? color.toHexString() : ""));
    $(previewMessageEl).css("color", (color ? color.toHexString() : ""));
    $(previewRecieverEl).css("color", (color ? color.toHexString() : ""));

    document.getElementById("textColor").value = (color ? color.toHexString() : "");
    CheckContrast();
}

function updateBackgroundColor(element, color) {
    $(element).css("background", (color ? color.toHexString() : ""));
    document.getElementById("backgroundColor").value = (color ? color.toHexString() : "");
    CheckContrast();
}

slider.oninput = function () {
    $(previewSenderEl).css("font-size", this.value + "px");
    $(previewMessageEl).css("font-size", this.value + "px");
    $(previewRecieverEl).css("font-size", this.value + "px");
}
//#endregion

//#region InputCount
function sendersNameCount() {
    previewSenderEl.innerText = senderNameInput.value;

    senderInputCount.innerText = senderNameInput.value.length + "/30";

    if (senderNameInput.value.length == 30) {
        senderInputCount.classList.add("text-danger");
    }
    else {
        senderInputCount.classList.remove("text-danger");
    }
}

function messageCount() {
    previewMessageEl.innerText = messageInput.value;

    messageInputCount.innerText = messageInput.value.length + "/150";

    if (messageInput.value.length == 150) {
        messageInputCount.classList.add("text-danger");
    }
    else {
        messageInputCount.classList.remove("text-danger");
    }
}

function recieversNameCount() {
    previewRecieverEl.innerText = recieversNameInput.value;

    recieversInputCount.innerText = recieversNameInput.value.length + "/30";

    if (recieversNameInput.value.length == 30) {
        recieversInputCount.classList.add("text-danger");
    }
    else {
        recieversInputCount.classList.remove("text-danger");
    }
}
//#endregion

function selectLayout() {
    var currentlySelected = document.getElementsByClassName("selected")[0];
    currentlySelected.classList.remove("selected");
    currentlySelected.classList.add("not-selected");
    
    //Remove tick animation
    animation1.goToAndStop(0, true);
    animation2.goToAndStop(0, true);
    animation3.goToAndStop(0, true);

    //Player tick animation on selection
    var newSelection = document.getElementById("layoutSelection" + layoutViewed);
    newSelection.classList.add("selected");
    newSelection.classList.remove("not-selected");
    playAnimSelection(layoutViewed, false);

    document.getElementById("layoutSelection").selectedIndex = layoutViewed;
}