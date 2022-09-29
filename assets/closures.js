(function(){
    // Function scope
    let color = 'red';

    function printColor() {
        console.log(color)
    }

    printColor();
})();

function makeColorPrinter(color) {
    const colorMessage = 'The color is ' + color;
    return function(){
        console.log(colorMessage);
    }
}

let greenColorPrinter = makeColorPrinter("green");
greenColorPrinter();

// Variables privadas
function makeCounter(n) {
    let count = n;

    return {
        increase: () => {count++},
        decrease: () => {count--},
        getCount: () => count,
        setCount: (n) => {count = n}
    }
}

const counter = makeCounter(0);
// counter.setCount(5);















console.log(counter.getCount());
counter.increase();
counter.decrease();
counter.decrease();
console.log(counter.getCount());

console.log(counter);
console.log(counter.getCount());