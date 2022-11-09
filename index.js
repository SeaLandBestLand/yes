var video = document.getElementById('video');
var source = document.createElement('source');

source.setAttribute('src', 'Jesus.mp4');
let num;
if (num == 1) {
    source.setAttribute('src', 'Jesus.mp4');
} else {
    source.setAttribute('src', 'Jesus2.mp4');
}

source.setAttribute('type', 'video/mp4');
video.autoplay = true;
video.appendChild(source);

console.log({
  src: source.getAttribute('src'),
  type: source.getAttribute('type'),
});

//document.body.style.backgroundColour = '#fff'