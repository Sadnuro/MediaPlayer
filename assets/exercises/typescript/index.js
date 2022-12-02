"use strict";
// // Boolean
// let muted: boolean = true;
exports.__esModule = true;
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
function add(a, b) {
    return 0;
}
function createAdder(a) {
    return function (b) {
        return b + a;
    };
}
var addFour = createAdder(4);
var fourPlus6 = addFour(6);
// Optional function params
function fullName(firstName, lastName) {
    if (lastName === void 0) { lastName = 'Nunez'; }
    return firstName + ' ' + lastName;
}
var sadith = fullName('Sadith'); // 'Sadith Nunez'
var rectangle = {
    width: 5,
    height: 19
};
function calculateArea(r) {
    return r.height * r.width;
}
