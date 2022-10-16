class AutoPause {
    /**
     * 
     * @param {*} threshold ratio de visibilidad para autopausa. Valores de 0 a 1. Default 0.25
     * 
     */
    constructor( params = { threshold: 0.25 } ) { 
        this.threshold = params.threshold;
        // Asigna contexto de la clase ( Existe {player} ) para que tome los atributos como this.something
        // De lo contrario tomarian el contexto del objeto/metodo que los invoke
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player) {
        this.player = player;

        const observer = new IntersectionObserver(
            this.handleIntersection,
            { threshold: this.threshold  }
        );
        observer.observe(this.player.media);

        document.addEventListener('visibilitychange', this.handleVisibilityChange);
    }
    
    handleIntersection(entries){
        const entry = entries[0]; // Toma el unico objeto HTML observado que nos interesa
        const isVisible = entry.intersectionRatio >= this.threshold;
        isVisible ? this.player.play() : this.player.pause();
    };

    handleVisibilityChange(){
        const isVisible = document.visibilityState === 'visible';
        isVisible ? this.player.play() : this.player.pause();
    };

}
export default AutoPause;