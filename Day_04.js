//<use const for creating>
// const fruit = ["apple","mango","grapse"];
// fruit.push("banana");
// console.log(fruit);

//<While loop in array>
// const fruit = ["apple","mango","grapse"];
// let i = 0;
// const fruit2 = [];
// while(i<fruit.length){
// // console.log(fruit[i]);
// fruit2.push(fruit[i].toUpperCase());
// i++;
// }
// console.log(fruit2);


//<for loop in array>
// const fruits = ["apple","mango"];
// const fruit2 =[];
// for(let i=0; i<fruits.length;i++) {
//     fruit2.push(fruits[i].toUpperCase());
// }
// console.log(fruit2);

// <for 'of' loop in array>
// const fruits = ["apple","mango"];
// const fruit2 =[];
// for (let fruit of fruits) {
//     fruit2.push(fruit.toUpperCase());
// }
// console.log(fruit2);

// <for 'in' loop in array>
// const fruits = ["apple","mango"];
// const fruit2 =[];
// for (let index in fruits) {
//     fruit2.push(fruits[index].toUpperCase());
// }
// console.log(fruit2);

//<array destructuring>
const myArray = ["value1","value2","value3","value4"];
// let [var1,var2] = myArray;
// let newArray = myArray.slice(2); OR
// let [var1,var2, ...newArray] = myArray;
// console.log(var1);
// console.log(var2);
// console.log(newArray);

//<Objects> (it is an refrence type data type)
//Array are good but not sufficent for real world data so we created objects
//objects stores key value pairs
//objects don't have index

//-how to create object
const objPreson  ={
    name : "Atharva",
    age : 21,
    hobbies : ["guitar","listing music","volleyBall"]
} 
console.log(objPreson);

//-how to access data from objects
//1)DOT Notaion
// console.log(objPreson.name);
// console.log(objPreson.age);
// console.log(objPreson.hobbies);
//OR
//2)BRACKET Notaion
// console.log(objPreson["name"]);
// console.log(objPreson["age"]);
// const hobbiesByVar = "hobbies";
// console.log(objPreson[hobbiesByVar]);

//-how to add key value pair to object
// objPreson.newKey = "myKey";
// console.log(objPreson);

//-how to itreate object 
//1) for in loop
// for(let key in objPreson){
//     // console.log(`${key} : ${objPreson[key]}`);
//     console.log(key ," :" , objPreson[key]);
//     // console.log(key, ":", objPreson.key);--> it gives UNDEFINED
// }
//2)Object.keys
//-->Object.keys it converts objects into the Arrays 
// for(let i of objPreson){ //--> objPreson is not iterable
//     console.log(i);
// }

console.log(typeof (Object.keys(objPreson)));
const isArr = Array.isArray(Object.keys(objPreson));
console.log(isArr);

for(let key of Object.keys(objPreson)){
    console.log(objPreson[key]);
}


