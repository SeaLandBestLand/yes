var video = document.getElementById('video');
var source = document.createElement('source');

let num = Math.floor(Math.random() * (2 - 1 + 1) + 1)
if (num == 1) {
    source.setAttribute('src', 'Jesus.mp4');
} else {
    source.setAttribute('src', 'Jesus2.mp4');
}

source.setAttribute('type', 'video/mp4');
video.autoplay = true;
video.appendChild(source);

//document.body.style.backgroundColour = '#fff'