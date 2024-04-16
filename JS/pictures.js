const fullScreen = document.getElementById(`fullscreen`);

function imageExit(){
    fullScreen.style.display = "none"
}

const imageFullScreen = document.getElementById(`imagefullscreen`)

function zoomIn(event){
    imageFullScreen.src = event.target.src
    fullScreen.style.display = "block"
}