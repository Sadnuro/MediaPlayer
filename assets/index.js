import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";

const video = document.querySelector("video");
const playPauseBtn = document.querySelector("#play-pause-btn");

// Instance
const player = new MediaPlayer({ 
    media: video, 
    plugins: [
        new AutoPlay(),
    ] 
});
playPauseBtn.onclick = () => player.togglePlay();