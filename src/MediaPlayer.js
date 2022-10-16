// Class
function MediaPlayer(content) {
    this.media = content.media; // Will save the video
    this.plugins = content.plugins || [];

    this._initPlugins();
}

// Methods
MediaPlayer.prototype.play = function() {
    this.media.play();
} 

MediaPlayer.prototype.pause = function() {
    this.media.pause();
}

MediaPlayer.prototype.togglePlay = function() {
    this.media.paused ? this.play() : this.pause();
}

MediaPlayer.prototype.mute = function() {
    this.media.muted = true;
}

MediaPlayer.prototype.unmute = function() {
    this.media.muted = false;
}

MediaPlayer.prototype.toggleMute = function() {
    this.media.muted ? this.unmute() : this.mute();
}

MediaPlayer.prototype._initPlugins = function() {
    const player = {
        play: () => this.play(),
        pause: () => this.pause(),
        media: this.media,
        get muted() {
            return this.media.muted;
        },
        set  muted(value) {
            this.media.muted = value;
        },
    }

    this.plugins.forEach(plugin => {
        plugin.run(player);
    });
}

export default MediaPlayer;