var imgUpload = document.getElementById('upload_imgs')
    , imgPreview = document.getElementById('img-thumbs')
    , imgUploadForm = document.getElementById('img-upload-form')
    , totalFiles
    , previewTitle = document.getElementById("preview-title")
    , previewTitleText
    , img;

var imageError = document.getElementById("imgError");

var imgCount = 0;
var maxImages = 5;

imgUpload.addEventListener('change', previewImgs, false);
imgUpload.addEventListener('click', removeImages, false);

async function previewImgs(event) {

    //MAKE CHECKS
    if (imgCount >= maxImages) {
        //Show message saying limit has been reached
        imageError.innerText = "Maximum of 5 images can be uploaded";
        return;
    }

    totalFiles = imgUpload.files.length;

    //Limit number of files
    if (totalFiles > 5) { 
        imageError.innerText = "Maximum of 5 images can be uploaded";
        return;
    }

    //File extensions
    for (let i = 0; i < totalFiles; i++) {
        var fname = imgUpload.files[i].name;
        var re = /(\.jpg|\.jpeg|\.gif|\.png)$/i;
        if (!re.exec(fname)) {
            var re = /(?:\.([^.]+))?$/;
    
            var ext = re.exec(fname)[1];   // "txt"
            imageError.innerText = "File extension ." + ext + " is not supported";
            imgUpload.files = null;
            return;
        }
    }
    //...

    //CHECK OVERALL SIZE...
    var overalSizeKb = 0;
    var maxSize = 10000;//10MB

    for (var i = 0; i < totalFiles; i++) {
        overalSizeKb = overalSizeKb + imgUpload.files[i].size;
    }

    overalSizeKb = overalSizeKb / 1000;

    if (overalSizeKb > maxSize) {
        imageError.innerText = "Image(s) size is over the allowed 10MB";
        return;
    }
    //...

    //SHOW IMAGE COUNT...
    if (!!totalFiles) { //Update image count
        imgCount = imgCount + totalFiles;
        previewTitle.innerText = imgCount + '/' + maxImages + ' Images Selected';
    }
    //...

    //SHOW PREVIEW OF IMAGES...
    for (var i = 0; i < totalFiles; i++) { 
        div = document.createElement('div');
        img = document.createElement('img');
        //img.src = URL.createObjectURL(event.target.files[i]);
        img.src = URL.createObjectURL(imgUpload.files[i]);
        img.classList.add('img-preview-thumb');

        div.appendChild(img);

        imgPreview.appendChild(div);
    }
    //...

    imageError.innerText = "";
}

function showPreviewImgs(images) {

    imgCount = imgCount + images.length;
    previewTitle.innerText = imgCount + '/' + maxImages + ' Images Selected';
    document.getElementById("upload_imgs").files = images[i];
    for (var i = 0; i < images.length; i++) { //Show the preview
        div = document.createElement('div');
        img = document.createElement('img');
        img.src = images[i];
        img.classList.add('img-preview-thumb');
        
        div.appendChild(img);

        imgPreview.appendChild(div);
    }
} //If coming from preview put images back

//Create new file list items
function FileListItem(a) {
    a = [].slice.call(Array.isArray(a) ? a : arguments)
    for (var c, b = c = a.length, d = !0; b-- && d;) d = a[b] instanceof File
    if (!d) throw new TypeError("expected argument to FileList is File or array of File objects")
    for (b = (new ClipboardEvent("")).clipboardData || new DataTransfer; c--;) b.items.add(a[c])
    return b.files
}

function ClearImages() {
    removeImages();
    document.getElementById("upload_imgs").value = "";
    var check = document.getElementById("imagesCleared");
    check.checked = true;
    check.value = true;
}

function removeImages() {

    while (imgPreview.firstChild) {
        imgPreview.removeChild(imgPreview.lastChild);
    }

    imgCount = 0;

    previewTitle.innerText = imgCount + '/' + maxImages + ' Images Selected';
}