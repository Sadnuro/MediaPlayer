class Singleton {
    private static instance: Singleton;

    private constructor() {
        // Initialization code here...
    }

    static getInstance() {
        !Singleton.instance ? Singleton.instance = new Singleton() : undefined;
        return Singleton.instance;
    }
}

export default Singleton;