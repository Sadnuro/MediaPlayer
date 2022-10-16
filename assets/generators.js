
/**
 * Los Generadores son funciones de las que se puede salir y volver a entrar.
 * Su contexto (asociacion de variables y valores) se conserva entre las reentradas
 * Cada vez que llamamos next(), la ejecución del generador continua hasta el proximo yield
 */

function* simpleGenerator() {
    const valueToPrint = 20;
    console.log('GENERATOR START');
    yield ()=>{console.log('Hola')};  // Ceder la ejecucion
    yield 2;  // Ceder la ejecucion
    yield 3;  // Ceder la ejecucion
    console.log('GENERATOR END. Kept context variable:', valueToPrint);
}

// const gen = simpleGenerator();

// console.log( gen.next() );
// console.log( 'outside' );
// console.log( gen.next() );
// console.log( 'outside' );
// console.log( gen.next() );
// console.log( 'outside' );
// console.log( gen.next() );


/**
 * Generadores infinitos
 * A pesar de que se esté ejecutanto un while infinito, los generadores pueden salir y volver a ingresar
 */

function* idMaker() {
    let id= 1;
    while(true){
        yield id;
        id = id + 1;
    }
}

// const idGen = idMaker();

/**
 * Paso de parametros a funciones generadoras
 */

 function* idMakerWithReset() {
    let id= 1;
    let reset;
    while(true){
        reset = yield id;       // yield: Cede la ejecucion y trae el parametro del siguiente next(value);
        reset ? id=1 : id++;
    }
}
const idGenReset = idMakerWithReset();

/**
 * Los generadores permiten hacer funciones eficientes en memoria
 * Ej. Fibonacci secuence
 */

function* fibonacci() {
    let a = 1;
    let b = 1;

    while(true){
        const nextNumber = a + b;
        a = b;
        b = nextNumber;
        yield nextNumber;
    }
}

const fibo = fibonacci();