function printNumbers() {
    for (var i = 0; i < 10; i++) {

        function eventuallyPrintNumber(n) {
            setTimeout( ()=>{
                console.log(n);
            }, 100);
        }

        eventuallyPrintNumber(i);
    }
} 

printNumbers();