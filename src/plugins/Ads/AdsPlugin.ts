import MediaPlayer from '../../MediaPlayer';
import Ads, { Ad } from './Ads';

class AdsPlugin {
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;

    constructor(){
        this.ads = Ads.getInstance(); // Use Singleton Pattern
        // Allow to keep class instance context when the method will be invoke as addEventListener callback at run() method
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    run(player: MediaPlayer){
        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate );

    }

    private handleTimeUpdate() {
        const currentTime = Math.floor(this.media.currentTime);
        if(currentTime%30 === 0){
            this.renderAd();
        }
    }

    private renderAd() {
        if (this.currentAd){
            return;
        }
        const ad: Ad = this.ads.getAd()!;
        this.currentAd = ad;
        console.log(ad);
    }
}

export default AdsPlugin