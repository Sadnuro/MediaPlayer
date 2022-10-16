class AutoPause {
    /**
     * 
     * @param {*} threshold ratio de visibilidad para autopausa. Valores de 0 a 1. Default 0.25
     * 
     */
    constructor( params = { threshold: 0.25 } ) { 
        this.threshold = params.threshold;
        this.handleIntersection = this.handleIntersection.bind(this);
    }

    run(player) {
        this.player = player;
        const observer = new IntersectionObserver(
            this.handleIntersection,
            { threshold: this.threshold  }
        );

        observer.observe(this.player.media);
    }
    
    handleIntersection(entries){
        const entry = entries[0]; // Toma el unico objeto HTML observado que nos interesa
        console.log(entry)

        const isVisible = entry.intersectionRatio >= this.threshold;
        isVisible ? this.player.play() : this.player.pause();
    };

}
export default AutoPause;