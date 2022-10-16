/** Objetivo: Si nos equivocamos al escribir una propiedad, 
 * el proxy debe sugerir la opcion correcta */


const target = {
    red: 'Rojo',
    green: 'Verde',
    blue: 'azul'
}

const handler = {
    get(obj, prop){
        // debugger;
        if (prop in obj){
            return obj[prop]
        }
        const suggestion = Object.keys(obj).find(key => {
            return Levenshtein.get(key, prop) <= 3
        })

        if (suggestion) {
            console.log(prop, "no se encontró. Quisiste decir", suggestion, "?")
        }
        return obj[prop]
    }
}

console.log(Levenshtein.get('blue', 'blub') );
const p = new Proxy(target, handler);