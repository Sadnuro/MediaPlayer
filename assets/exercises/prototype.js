/**
 * Creacion de objetos declarando metodos
 */

// function Hero (name) {
//     const hero = {
//         name: name
//     };

//     // La funcion se define cada vez que invocan Hero()
//     hero.saludar = function() {
//         console.log('Hola soy', this.name);
//     };

//     return hero;
// }


// const zelda = Hero('Zelda');
// const link = Hero('Link');

// zelda.saludar();
// link.saludar();


/**
 * Creacion de objetos referenciando metodos
 */
// const heroMethods = {
//     saludar : function() {
//         console.log('Hola soy', this.name);
//     },
// }

// function Hero (name) {
//     const hero = {
//         name: name
//     };
//     // Se referencia
//     hero.saludar = heroMethods.saludar;
//     return hero;
// }


// const zelda = Hero('Zelda');
// const link = Hero('Link');

// zelda.saludar();
// link.saludar();


/**
 * Object.create
 */

// const heroMethods = {
//     saludar : function() {
//         console.log('Soy superheroe!', this.name);
//     },
// }

// function Hero (name) {
//     const hero = Object.create(heroMethods);
//     hero.name = name;
//     return hero;
// }


// const zelda = Hero('Zelda');
// const link = Hero('Link');

// zelda.saludar();
// link.saludar();

/**
 * Metodos de hero dentro de hero y no en __proto__
 */

// function Hero (name) {
//     const hero = Object.create(Hero.prototype);
//     hero.name = name;
//     return hero;
// }

// Hero.prototype.saludar = function() {
//     console.log('Soy superheroe!', this.name);
// }


// const zelda = Hero('Zelda');
// const link = Hero('Link');

// zelda.saludar();
// link.saludar();

/**
 * usando new
 */

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