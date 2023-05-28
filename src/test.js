const video = document.getElementById("video");
const playBtn = document.getElementById("play");
const muteBtn = document.getElementById("mute");
const time = document.getElementById("time");
const volumeRange = document.getElementById("volume");
let volumeValue = 0.5;

video.volume = volume;
const handlePlayClick = (event) => {
    if (video.paused) {
        video.play();
    }
    else {
        video.pause();
    }
  };
const handleMute = (event) => {
    if (video.muted) {
        video.muted = false;
        muteBtn.innerText = "Mute";
    } 
    else {
        video.muted = true;
        muteBtn.innerText = "Unmute";
    }
    volumeRange.value = video.muted ? 0 : volumeValue;
};
const handlePause = () => (playBtn.innerText = "Play");
const handlePlay = () => (playBtn.innerTExt = "Pause");
const handleVolumeChange = (event) => {
   const {
    target: {value}, 
   } = event;
    if (video.muted) {
        video.muted = false;
        muteBtn.innerText = "Mute";
    } 
    volumeValue = value;
   video.volume = value;
};
    
playBtn.addEventListener("click", handlePlayClick);
muteBtn.addEventListener("click", handleMute);
video.addEventListener("pause", handlePause);
video.addEventListener("play", handlePlay);
volumeRange.addEventListener("change", handleVolumeChange);