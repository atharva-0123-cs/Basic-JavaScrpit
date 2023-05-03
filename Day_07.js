// console.log("Atharva");
// <callback function>

// function myFunc2(name){
//     console.log("inside my first func 2");
//     console.log("your nmae is ${nmae}");
// }

// function myFunc(callback){
//     console.log("hello there I am a func and I can..");
//     callback("Atharva");
// }

// myFunc(myFunc2);

//<function returing function>

// function returnfun(){
//     return function myFunc(){
//         console.log("Hello world");
//     }
// }
// const ans = returnfun();
// ans();

// <import array methods>

// 1)forEach
// 2)Map
// 3)filter
// 4)reduce

//1) forEach -> this will not return new array
// const arr = [2,7,4,3];

// function myFunc(num,idx){
//     console.log(`Number:${num} : index:${idx}`);
// }
// // <----OR----->
// arr.forEach(myFunc);
// arr.forEach((num,idx)=>{
//     console.log(idx);
// });

// forEach Example
// const users = [
//     {fname:"Atharva", age: 22},
//     {fname:"Harshit", age: 23},
//     {fname:"Arysah", age: 19},
//     {fname:"Eren", age: 25},
// ]

// users.forEach(user=>{
//     console.log(`Name:${user.fname} Age: ${user.age}`);
// });

// 2)map -> this will return new array 
// const arr = [1,2,3,4,5];

// function squreFunc(num){
//     return num*num;
// }
// const squre = arr.map(squreFunc);
// console.log(squre);

// <----OR---->
// const squre = arr.map(num=>{
//     return num*num;
// });

// <----OR---->
// console.log(squre);
// console.log(arr.map((num)=>{
//     return num*num;
// }));

// map Example
// const users = [
//     {fname:"Atharva", age: 22},
//     {fname:"Harshit", age: 23},
//     {fname:"Arysah", age: 19},
//     {fname:"Eren", age: 25},
// ]

// const userInfo = users.map(user=>{
//     // console.log(`Name:${user.fname} Age: ${user.age}`);
//     return user.fname;
// });
// console.log(userInfo);

// 3) filter -> this will check weather the given condition is true or not for each element of array
// const arr = [2,4,8,5,9];

// function isEven(num){
//     return num%2==0;
// }
// const evenNum = arr.filter(isEven);
// console.log(evenNum);

// <----OR---->
// console.log(arr.filter(num=>{
//     return num%2 == 0;
// }));

// const arr =[1,2,3,4,5,10];

// 4) reduce
// const sum = arr.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// });

// console.log(sum);

// accumulator , currentValue , return
//     1               2           3
//     3               3           6
//     6               4           10
//     10              5           15
//     15              10          25

//Example of reduce
// const userCart =[
//     {productID : 1,productNmae : "mobile", price : 100000},
//     {productID : 2,productNmae : "laptop", price : 500000},
//     {productID : 3,productNmae : "TV", price : 130000},
// ];

// const totalValue = userCart.reduce((totalPrice, productPrice)=>{
//     return totalPrice + productPrice.price;
// },0 //--> Initial value of acuumulator
// );

// console.log(totalValue);

// totalPrice , currentValue , return
//     0               {}           100000
//     100000          500000       600000
//     600000          130000       730000

// const arr = [3,5,9,8,10];

// more metheods of Array:

//  1)Sort
// arr.sort((a,b)=>{
//     return a-b;
// });
// <----OR---->
// console.log([11,2,22,1].sort((a, b) => a - b));
// 9,8
// a-b == 1 ---> positive ----> b,a

// 3,5
// a-b == -2 ---> negative ----> a,b

// console.log(arr); // [3,5,8,9,10]
// Sort Example
// const products = [
//     {ID : 1 , pName : "p1", price : 100},
//     {ID : 2 , pName : "p1", price : 400},
//     {ID : 3 , pName : "p1", price : 200},
//     {ID : 4 , pName : "p1", price : 800},
//     {ID : 5 , pName : "p1", price : 300},
// ];

// products.sort((a,b)=>{
//     return a.price - b.price;
// });

// console.log(products);

// 2) Find 
// const arr =["tiger","lion","cat","dog"];

// function isLength3(str){
//     return str.length === 3; 
// }
// const ans  = arr.find(isLength3);
// console.log(ans);
// // <----OR---->
// const ans1 = arr.find(str=>{
//     return str.length === 3;
// });
// console.log(ans1);

// find Example
// const users =[
//     {userID : 1, userName : "Atharva"},
//     {userID : 2, userName : "Eren"},
//     {userID : 3, userName : "Armine"},
//     {userID : 4, userName : "Mikasa"},
// ];

// const myUser  = users.find(user=>{
//     return user.userID == 1;
// });

// console.log(myUser);

// 3) every ---> it will return TRUE if every condition is TRUE otherwise it will return FALSE.

// const arr =[2,4,6,8,10];

// console.log(arr.every(number=> number%2 === 0)); // TRUE / FALSE (boolean)

// every Example
// const userCart =[
//     {productID : 1,productNmae : "mobile", price : 100000},
//     {productID : 2,productNmae : "laptop", price : 500000},
//     {productID : 3,productNmae : "TV", price : 130000},
// ];

// const ans = userCart.every(cartItem =>{
//     return cartItem.price >= 100000;
// });
// console.log(ans);

// 4) every ---> it will return TRUE if some condition/s is/are TRUE otherwise it will return FALSE.

// const arr =[2,1,7,9,10];

// console.log(arr.some(number=> number%2 === 0)); // TRUE / FALSE (boolean)

// some Example
// const userCart =[
//     {productID : 1,productNmae : "mobile", price : 100000},
//     {productID : 2,productNmae : "laptop", price : 500000},
//     {productID : 3,productNmae : "TV", price : 130000},
// ];

// const ans = userCart.some(cartItem =>{
//     return cartItem.price >= 100000;
// });
// console.log(ans);


// 5) fill 
// const myArray = [1,2,3,4,5,6,7,8];
// myArray.fill(0,2,5);
// console.log(myArray);

//splice(start , delete , insert)
// 
// const arr =  ['it1','it2','it3'];

// delete 
// const deleteIt = arr.splice(1,2);
// console.log("delete item :", deleteIt);
// console.log(arr);

// insert
// arr.splice(1,0,'insterted item');
// console.log(arr);

// insert delete
// const deleteIt = arr.splice(1,2,'instered item');
// console.log("delete item", deleteIt);
// console.log(arr);

// iterables
// jispe hum for loop laga sakte hai 
// strings, array are iterable
// object is not iterable

// const firstName = "Atharva";
// for(let char of firstName){
//     console.log(char);
// }

// const items =  ['it1','it2','it3'];
// for(let item of items){
//     console.log(item);
// }

// Sets (it is iterable)
// store data
// sets also have it's own methods
// No index-based access
// Order is not guaranteed
// unique items only (no duplicates allowed)

// const items = ['it0','it8', 'it9'];
// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(['it1','it2']);
// numbers.add(['it3','it4']);
// numbers.add(items);
// console.log(numbers);

// if(numbers.has(1)){
//     console.log("1 is present");
// }else{
//     console.log("1 is not present");
// }
// for(let num of numbers){
//     console.log(num);
// }
// const unqueEle = new Set([1,2,3,4,4,4,5]);
// let length  = 0;
// for(let _ of unqueEle){
//     length++;
// }
// console.log(length);