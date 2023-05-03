//<Functions>
//<funcion decleartion>
// function showName(firstName){
//     console.log("Hello",firstName);
// }
// showName("Atharva");

// function findTarget(arr, target){
//     for(let i=0; i<arr.length; i++){
//         return true;
//     }
//     return false;
// }
// const arr = [10,20,30,40];
// console.log(findTarget(arr, 30));


// <function expression>
// const showName = function(firstName){
//     console.log("Hello",firstName);
// }
// showName("Atharva");

// const findTarget = function(arr, target){
//     for(let i=0; i<arr.length; i++){
//         return true;
//     }
//     return false;
// }
// const arr = [10,20,30,40];
// console.log(findTarget(arr, 30));
//<arrow functions>
// const showName = (firstName)=>{
//     console.log("Hello",firstName);
// }
// showName("Atharva");

// const findTarget = (arr, target)=>{
//     for(let i=0; i<arr.length; i++){
//         return true;
//     }
//     return false;
// }
// const arr = [10,20,30,40];
// console.log(findTarget(arr, 30));
// Hosting
//1) you can call a function before it's defination
// hello();
// function hello(){
//     console.log("hello world");
// }
// console.log(hello);
// // 2) you cann't declear variable with same name as function with 'const' and 'let'
// // const hello = "hello world";
// console.log(hello);

// <functions inside function>
// function app(){
//     //print name
//     const printName = function(){
//         console.log("hello, Atharva");
//     }
//     //add number
//     const addNum = (num1, num2) =>{
//         return num1+num2;
//     }
//     // multiply number
//     const mulNum = (num1, num2) =>{
//         return num1*num2;
//     }
//     console.log("inside app");
//     //calling printNamr(), addNum() and mulNum()
//     printName();
//     console.log(addNum(2,5));
//     console.log(mulNum(2,4));
// }
// app();
// <lexical scope>
// const myName ="Atharva"; //--> this is global scope of myName
// function app(){
//     //print name
//     const printName = function(){
//         const myName ="Atharva"; //--> this is lexical scope of myName
//         console.log("hello", myName);
//     }
//     console.log("inside app");
//     //calling printName()
//     printName();
// }
// app();

// <block VS function scope>
// 1) let and const are block scope
// 1) var is function scope

//  --> var
// {
//     var myName = "Atharva";
//     console.log(myName); // --> Valid
// }
// // console.log(myName); // --> Valid

// // --> const
// {
//     const myName = "Atharva";
//     console.log(myName); // --> Valid
// }
// // console.log(myName); // --> Invalid

// // --> let
// {
//     let myName = "Atharva";
//     console.log(myName); // --> Valid
// }
// // console.log(myName); // --> Invalid


// Default parameters
// function defaultParameters(a=10, b=20, c=20){
//     return a+b+c;
// }
// console.log(defaultParameters(10,20,40)); //--> 3 aruments
// console.log(defaultParameters(10,20)); //--> 2 aruments
// console.log(defaultParameters(10)); //--> 1 aruments
// console.log(defaultParameters()); //--> 0 aruments

//<rest parameters>
// Example 1
// const printABC = (a,b,...c) => { //--> stores remaning values of array in c using ... opreator
//     console.log(`a : ${a}`);
//     console.log(`b : ${b}`);
//     console.log(`c : ${c}`);
//     console.log(`c : `, c); //--> print array in c
// }
// printABC(10,20,30,40,50,[10,20,30],"Atharva",1.22,true);

// Example 1
// function addAll(...numbers){
//     let total = 0;
//     for(number of numbers){
//         total = total + number;
//     }
//     return total;
// }
// console.log(addAll(10,20,30,40));

//<Parameter destructuring>
// --> For Objects 
// --> most common concept used in react.js

// const  preson = {
//     firstName: "Atharva",
//     age: 22,
// }
// function pInfo(obj){
//     console.log(obj.firstName);
//     console.log(obj.age);
// }
// //     <--OR-->
// function pInfo({firstName,age}){
//     console.log(firstName);
//     console.log(age);
// }
// pInfo(preson);