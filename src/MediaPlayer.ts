interface ConfigMediaPlayer {
    media: HTMLMediaElement,
    plugins?: Array<any>,
}


// Class
class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array<any>;

    constructor(config: ConfigMediaPlayer) {
        this.media = config.media; // Will save the video
        this.plugins = config.plugins || [];

        this.initPlugins();
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
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
}

export default MediaPlayer;