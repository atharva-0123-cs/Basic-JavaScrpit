// console.log("Atharva");
// var firstName = "Atharva";
// console.log(firstName);
// let firstName = "Atharva";
// console.log(firstName);
// const pi = 3.14;
// console.log(pi);

//<Variables: Rules>
// 1)you can only use _ or $ in varilabes
//first_name(valid)
//_firstname(invalid)
// first$name(valid)
//$firstname(invalid)

//2)you can't use spaces but you can use underscroll
//var first_name = "Atharva"; --> snake case wirting.
//var firstName = "Atharva"; -->camel case wirting.
//var first name = "Atharva"; (invalid)

//<typeof>
// Data Types in javascript
//1)string
//2)numbers
//3)bool
//4)undefined
//5)NULL
//6)BigInt
//7)Symbol

let age = 21;
let name = "Atharva";
console.log(typeof age);
console.log(typeof name);

//convert number to string
//1)age += "";
//console.log(typeof age);
//2)console.log(typeof String(age));

//convert string to number
//1)let newstring = +"31"; --> it will convert str to number
//console.log(typeof newstring);
// let newnum = "31";
// console.log(typeof Number(newnum));

//<string concatention>
let string1 = "31";
let string2 = "21";
// let sum = +string1 + +string2;
//let sum = Number(string1+string2); // This will print 3121
//let sum = Number(string1)+Number(string2); // This will print 52
//console.log(sum);

//<templet string>
let aboutMe = `My name is ${name} and age is ${age}`; // use this ` `;
console.log(aboutMe);