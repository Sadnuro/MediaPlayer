
function Hero (name) {
    // this = Object.create(Hero.prototype);
    this.name = name;
    // return this;
}

Hero.prototype.saludar = function() {
    console.log('new:', this.name);
}

const zelda = new Hero('Zelda');
const link = new Hero('Link');

zelda.saludar();
link.saludar();

/** Propiedades de la instancia */
console.log('Name:', zelda.name);

/** Propiedades de la clase */
console.log('Saludar:', zelda.saludar);

/** Propiedades heredadas. Ej: toString */
console.log('toString:', zelda.toString);

/** hasOwnProperty (de dónde sale toString o esto?)*/
// Permite inspeccionar si {algo} pertenece directamente a un objeto o se hereda
console.log("zelda.hasOwnProperty('name'):", zelda.hasOwnProperty('name'));
console.log("zelda.hasOwnProperty('saludar'):", zelda.hasOwnProperty('saludar'));

// zelda.__proto__
// Object.getPrototypeOf(zelda);

/** Inspeccion de Zelda prototype */
const zeldaPrototype = Object.getPrototypeOf(zelda);
console.log("zeldaPrototype:", zeldaPrototype);

/** Inspeccion de Hero prototype */
const heroPrototype = Object.getPrototypeOf(Hero);
console.log("heroPrototype:", heroPrototype);

/** Inspeccion de Object prototype */
const objectPrototype = Object.prototype;
console.log("objectPrototype:", objectPrototype);

// .ownPropertyOf('airplane')
// >>> false: Exists in zelda? 
// >>> false: Exists in zelda.prototype? (Hero)
// >>> false: Exists in prototype of zelda.prototype? (Hero.prototype)
// >>> false: ...
// >>> false: Object
// >>> undefined: Object.prototype
