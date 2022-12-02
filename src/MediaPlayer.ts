interface ConfigMediaPlayer {
    media: HTMLMediaElement,
    plugins?: Array<any>,
}


// Class
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;
    container: HTMLElement;

    constructor(config: ConfigMediaPlayer) {
        this.media = config.media; // Will save the video
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    private initPlayer() {
        // Crea contenerdor y mueve el video adentro
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        this.media.parentNode?.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    }

    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    // Methods
    play() {
        this.media.play();
    }
    pause() {
        this.media.pause();
    }
    togglePlay() {
        this.media.paused ? this.play() : this.pause();
    }
    mute() {
        this.media.muted = true;
    }
    unmute() {
        this.media.muted = false;
    }
    toggleMute() {
        this.media.muted ? this.unmute() : this.mute();
    }
}

export default MediaPlayer;