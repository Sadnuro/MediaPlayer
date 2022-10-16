/** This do refer to current block in execution */

// This: En el contexto de un objeto
// 
const person = {
    name : 'Sadith',
    saludar : function() {  // in this scope {This} is person{}
        console.log(`Hola soy ${this.name}`);   // 'Hola soy Sadith'
    },
    despedir: ()=>{ // in this score [This] is despedir()
        console.log(`Adios, soy ${this.name}`); // 'Adios, soy ' 
    }
}

person.saludar();
person.despedir();

// This: Cuando sacamos a una funcin de un objecto
// La funcion  se ejecuta en el contexto global, donde no existe {name}
const accion = person.saludar;
accion();   // 'Hola soy '


// This: En el conexto de una clase
// {This} hará referencia a la instancia de la clase
function Person( name ) {   
    // Initially {This}={}
    this.name = name;

}
Person.prototype.saludar = function() {
    console.log(`Soy ${this.name}!`);
}

const angela = new Person('Angela');
angela.saludar();