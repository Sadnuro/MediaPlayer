import MediaPlayer from '../MediaPlayer';

class AutoPause {
    private threshold: number;
    private onChangeTab: boolean;
    player: MediaPlayer;

    /**
     * 
     * @param {*} threshold Number: 0-1: Ratio de visibilidad para autopausa. Default 0.25
     * @param {*} onChangeTab Boolean: true: to pause video when tab is changed | false: to allow/keep reproduction when tab is changed. Default false.
     */
    constructor(params =
        {
            threshold: 0.25,
            onChangeTab: false
        }
    ) {
        this.threshold = params.threshold;
        this.onChangeTab = params.onChangeTab;
        // Asigna contexto de la clase ( Existe {player} ) para que tome los atributos como this.something
        // De lo contrario tomarian el contexto del objeto/metodo que los invoke
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(
            this.handleIntersection,    // Llama a handleIntersection y le pasa objetos de tipo IntersectionObserverEntry 
            { threshold: this.threshold }
        );
        observer.observe(this.player.media);

        // Set visibility changes functionality
        if (this.onChangeTab) {
            document.addEventListener('visibilitychange', this.handleVisibilityChange);
        }
    }

    private handleIntersection(entries: IntersectionObserverEntry[]) {
        const entry = entries[0]; // Toma el unico objeto HTML observado que nos interesa
        const isVisible = entry.intersectionRatio >= this.threshold;
        isVisible ? this.player.play() : this.player.pause();
    };

    private handleVisibilityChange() {
        const isVisible = document.visibilityState === 'visible';
        isVisible ? this.player.play() : this.player.pause();
    };

}
export default AutoPause;