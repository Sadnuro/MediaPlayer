// // Boolean
// let muted: boolean = true;

import { NumberLiteralType } from "typescript";

// // Number
// let n1: number = 13;
// let n2: number = 0.7;

// // String
// let text: string = 'Sadith';

// // Arrays
// let names: string[] = ['Jorge', 'Zenaida', 'Luis M.', 'Luis D.', 'Sadith'];
// let peopleAndAges: Array<string | number> = [];

// peopleAndAges.push('Jorge');
// peopleAndAges.push(55);

// console.log(names);
// console.log(peopleAndAges);

// // Enum
// enum Color {
//     Red,
//     Green,
//     Blue
// }

// let favoriteColor: Color = Color.Red;
// console.log('Favorite color: ', favoriteColor); // Print index of enum

// enum ColorNames {
//     Red = 'Red',
//     Green = 'Green',
//     Blue = 'Blue',
//     Yellow = 'Yellow'
// }

// let favoriteColor2: ColorNames = ColorNames.Red;
// console.log('Favorite color:', favoriteColor2);

// // Any 
// let something: any = 'A';
// something = 2;

// // Object 
// let someObject: object = { name: 'Sadith', age: 20};



function add(a:number, b:number): number {

    return 0;
}

function createAdder(a:number) : (number)=>number {
    return function (b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

// Optional function params
function fullName (firstName:string, lastName:string= 'Nunez'): string {
    return firstName +' '+ lastName;
}

const sadith = fullName('Sadith'); // 'Sadith Nunez'


// Interfaces

interface Rectangle {
    width: number;
    height: number;
}

let rectangle: Rectangle = {
    width: 5,
    height: 19
}

function calculateArea (r: Rectangle) {
    return r.height * r.width;
}
