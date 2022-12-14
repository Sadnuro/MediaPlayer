import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const playPauseBtn = document.querySelector("#play-pause-btn");
const muteUnmuteBtn = document.querySelector("#mute-unmute-btn");

// Instance
const player = new MediaPlayer({ 
    media: video, 
    plugins: [
        //new AutoPlay(),
        new AutoPause( {threshold: 0.15, onChangeTab: true} ),
    ] 
});
playPauseBtn.onclick = () => player.togglePlay();
muteUnmuteBtn.onclick = () => player.toggleMute();

// Si la funcion está permitida, registra los Workers del aplicativo
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').catch(error => {
        console.log('SW', error.message)
    })
} else {
    console.log('SW not supported by browser.')
}