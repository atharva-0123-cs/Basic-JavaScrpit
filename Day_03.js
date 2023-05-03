//<Intro to Array>
// --> Array is an ordered collection of iteams.
// --> typeof Array is OBJECT

// creating Array
// let fruit = ["appale", "mango", "grapes"];
// let num = [1,2,3,4];
// let mixed = [1,2,"string","mango",1.1,3.14,"apple"];
// console.log(fruit);
// console.log(num);
// console.log(mixed);

// Array index
// let fruits = ["appple", "Mango", "grapes"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// object literals
// let fruit = ["appale", "mango", "grapes"];
// let obj = {}; // object literal
// console.log(typeof fruit);
// console.log(typeof obj);
// console.log(Array.isArray(fruit));
// console.log(Array.isArray(obj));

// Array push AND pop.
//1)push
// let fruit = ["appale", "mango", "grapes"];
// fruit.push("banana");
// console.log(fruit);
//2)pop
// let fruit = ["appale", "mango", "grapes"];
// let poped = fruit.pop(); // -->pop function retruns poped value.
// console.log(poped);

// Array unshift AND shift.
// 1)unshift
// let fruit = ["appale", "mango", "grapes"];
// fruit.unshift("banana");
// console.log(fruit);
//2)pop
// let fruit = ["appale", "mango", "grapes"];
// let shift = fruit.shift(); // -->pop function retruns poped value.
// console.log(shift);

//<Primitive VS Refernce data types.>
//1)Primitive data type.
// let num1 = 10;
// let num2 = num1;
// console.log(num1);
// console.log(num2);
// num1++;
// console.log("After incrementing num1");
// console.log(num1);
// console.log(num2);

//2)Refernce data type.
// let arr1 = ["apple","mango","grapes"];
// let arr2 = arr1;
// console.log(arr1);
// console.log(arr2);
// arr1.push("banana");
// console.log("After pushing banan in arr1");
// console.log(arr1);
// console.log(arr2);

//Q. how to clone Array
// let arr1 = ["apple","mango","grapes"];
// 1)let arr2 = ["apple","mango","grapes"];
// 2)let arr2 = arr1.slice(0);
// 3)let arr2 = [].concat(arr1);
// new way to clone array
//4)spread operator
//4)let arr2 = [...arr1];

// console.log(arr1 === arr2); //-->arr1 and arr2 stores two different address in stack; And valuse of Arrays store in Heap;
// console.log(arr1);
// console.log(arr2);

//[how to concatenate two Array] OR [how to add more elements in Array]
//let arr1 = ["apple","mango","grapes"];
// 1)let arr2 = arr1.slice(0).concat(["item1","item2"]);
// 2)let arr2 = [].concat(arr1,"item1","item2");
//new way to clone array
//3)spread operator
// moreItem = ["item1", "item2"];
// let arr2 = [...arr1, ...moreItem];

// console.log(arr1 === arr2); //-->arr1 and arr2 stores two different address in stack; And valuse of Arrays store in Heap;
// console.log(arr1);
// console.log(arr2);

// for  loop in Array
// let fruit = ["apple","mango","grapes"];
// for (let i=0; i<fruit.length; i++){
//     console.log(fruit[i].toUpperCase());
// }

// let fruit = ["apple","mango","grapes"];
// let fruit2 =[];
// for (let i=0; i<fruit.length; i++){
//     fruit2.push(fruit[i].toUpperCase());
// }
// console.log(fruit2);