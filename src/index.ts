import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";

const video = document.querySelector("video") as HTMLMediaElement;
// https://bobbyhadz.com/blog/typescript-type-htmlelement-null-not-assignable-to-type
const playPauseBtn:     HTMLElement = document.querySelector("#play-pause-btn") as HTMLElement; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const muteUnmuteBtn:    HTMLElement = document.querySelector("#mute-unmute-btn") as HTMLElement;

// Instance
const player = new MediaPlayer({ 
    media: video, 
    plugins: [
        new AutoPlay(),
        new AutoPause( {threshold: 0.15, onChangeTab: true} ),
    ] 
});
playPauseBtn.onclick = () => player.togglePlay();
muteUnmuteBtn.onclick = () => player.toggleMute();

// Si la funcion está permitida, registra los Workers del aplicativo
// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('/sw.js').catch(error => {
//         console.log('SW', error.message)
//     })
// } else {
//     console.log('SW not supported by browser.')
// }