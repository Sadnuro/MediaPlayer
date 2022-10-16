/** Establece {this} cuando (call) 
 * 
*/
function saludar() {
    console.log(`Hola soy ${this.name} ${this.apellido}`);
}

const person = {
    name: 'Sadith',
    apellido: 'Nunez R.'
}

saludar.call(person);   // Hola soy Sadith Nunez R



/** 
 * Establece {this} usando (call) y pasar argumentos a la funcion
 * */ 
 function caminar(metros, direccion) {
    console.log(`${this.name}, camina ${metros} metros en direccion ${direccion}`);
}

// context  | param1, param2, p...
caminar.call(person, 500, 'norte');     // Sadith, camina 500 metros en direccion norte

/** 
 * Establece {this} usando (apply) y pasar argumentos a la funcion
 * */ 
 caminar.apply(person, [750, 'oeste']);  // Sadith, camina 750 metros en direccion oeste


/** 
 * Establecer {this} en una nueva funcion usando 'bind'
 * */ 
const daniel = { name: 'Daniel', apellido: 'Sanchez'};

const danielSaluda  = saludar.bind(daniel);
danielSaluda();
saludar.bind(daniel)();

// 1. Pasar contexto. | Pasar argumentos y ejecutar
const danielCamina  = caminar.bind(daniel);
danielCamina(111, 'norte');

// 2. Pasar contexto | pasar argumentos y ejecutar
caminar.bind(daniel)(333, 'sur');

// 3. Pasar contexto y argumentos parciales
const danielCamina2 = caminar.bind(daniel, 444); // Argumentos parciales
danielCamina2('este');  // Resto de argumentos

/** 
 * Cuándo es útil usar uno de estos métodos?
 * */ 

// buttons: is a NodeList similar to arrays but this not have the same methods
const buttons = document.getElementsByClassName('call-to-action');
console.log(buttons)
// buttons.forEach(button => {
//     button.onClick = ()=> alert('Nunca pares de aprender');
// });

// buttons have {lenght} property, so doing posible forEach Works!
// Constext: buttons | each button
Array.prototype.forEach.call(buttons, button => {
    button.onclick = () => alert('Nunca pares de aprender');
});