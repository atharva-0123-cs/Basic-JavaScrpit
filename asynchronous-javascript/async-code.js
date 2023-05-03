// synchronous programing vs asynchronous programing

// synchronous programing

// console.log("Scrpit start");

// for(let i=0; i<100; i++){
//     console.log("inside loop");
// }
// console.log("Scrpit End");

// asynchronous programing
// setTimeout

// console.log("Scrpit start");

// function myFunc(){
//     console.log("inside myFunc");
// }

// setTimeout(myFunc,1000);
// console.log("Scrpit End");

// OR

// console.log("Scrpit start");

// setTimeout(()=>{
//     console.log("inside Arrow Function");
// },1000);

// console.log("Scrpit End");

//Ex: 1
// console.log("Scrpit start");

// setTimeout(()=>{
//     console.log("inside Arrow Function");
// },0);

// for(let i=0; i<100; i++){
//     console.log("inside loop");
// }

// console.log("Scrpit End");

//Ex: 2
// console.log("Scrpit start");

// const id = setTimeout(()=>{
//     console.log("inside Arrow Function");
// },1000);

// for(let i=0; i<100; i++){
//     console.log("inside loop");
// }
// console.log("setTineout id : ", id);
// console.log("Clearing id");
// clearTimeout(id);
// console.log("Scrpit End");

//Ex 3
//setInterval
// const body = document.body;
// const btn = document.querySelector(".btn");

// const intervalId = setInterval(()=>{
//     const red = Math.floor(Math.random()*126);
//     const green = Math.floor(Math.random()*126);
//     const blue = Math.floor(Math.random()*126);
//     const rgb = `rgb(${red},${green},${blue})`;
//     body.style.backgroundColor = rgb;
// },1000);

// btn.addEventListener("click",()=>{
//     clearInterval(intervalId);
//     // body.textContent = body.style.background;
// });


// understing callbacks 
// Ex: 1
// function getTowNumbersAndAdd(num1, num2, addTwoNumbers){
//     if(typeof num1 === "number" && typeof num2 === "number" ){
//         return  addTwoNumbers(num1,num2);
//     }else{
//         return "wrong data type";  
//     }
// }

// function addTwoNumbers(num1,num2){
//     return (num1+num2);
// }

//  const ans = getTowNumbersAndAdd(4,5,addTwoNumbers);
//  console.log(ans);

// Ex: 2
// function getTowNumbersAndAdd(num1, num2, resolve, reject){
//     if(typeof num1 === "number" && typeof num2 === "number" ){
//         resolve(num1,num2);
//     }else{
//         reject();
//     }
// }

//  getTowNumbersAndAdd(4,5,(num1,num2)=>{
//     console.log(num1+num2);
//  },
//  ()=>{
//     console.log("wrong data type");
//  });

// callbacks, callbback hell, pyramid of dom
// asynchronous programming
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");
// setTimeout(()=>{
//     heading1.textContent = "Heading1";
//     heading1.style.color = "violet";
//     setTimeout(()=>{
//         heading2.textContent = "Heading2";
//         heading2.style.color = "violet";
//         setTimeout(()=>{
//             heading3.textContent = "Heading3";
//             heading3.style.color = "violet";
//             setTimeout(()=>{
//                 heading4.textContent = "Heading4";
//                 heading4.style.color = "violet";
//                 setTimeout(()=>{
//                     heading5.textContent = "Heading5";
//                     heading5.style.color = "violet";
//                     setTimeout(()=>{
//                         heading6.textContent = "Heading6";
//                         heading6.style.color = "violet";
//                         setTimeout(()=>{
//                             heading7.textContent = "Heading7";
//                             heading7.style.color = "violet";
//                         },1000);
//                     },1000);
//                 },1000);
//             },1000);
//         },1000);
//     },1000);
// },1000);

// Promise
// const bucket = ['coffee', 'chips', 'vegetables', 'salt', 'rice'];

// const friedRicePromise = new Promise((reslove,reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         reslove("Fried Rice");
//     }else{
//         reject("one of the ingredient is not present");
//     }
// });

// friedRicePromise.then(
//     //resolve
// (friedRice)=>{
//     console.log(friedRice);
// },
//     //reject
// (error)=>{
//     console.log(error);
// });
//OR
// friedRicePromise.then(
//     //resolve
// (friedRice)=>{
//     console.log(friedRice);
// }   //reject
// ).catch((error)=>{
//     console.log(error);
// });


// <---- Promise and setTimeout ---->
// -- I want to resove /reject the promise after 2 seconds
// function myFunc(){
//     return new Promise((resolve , rejecet)=>{
//         const value = true;
//        setTimeout(()=>{
//         if(value){
//             resolve();
//         }else{
//             rejecet();
//         }
//        },2000);
//     });
// }

// const myPromise = myFunc();
// console.log(myPromise);
// myPromise.then(()=>{console.log("Resolve");
// return Promise.resolve();}) .catch(()=>{console.log("reject")});
         
// setTimeout(()=>{
//     console.log(myPromise);
// },2000);

//<---- Promise chaning ---->
// Promise.resolve
// const p = new Promise((resolve, reject)=>{
//     if(true){
//         resolve("a");
//     }else{
//         reject("b");
//     }
// });

// p.then((a)=>myPromise)
//  .then((b)=>{console.log(b)})
//  .catch((b)=>{console.log(b)});
// console.log(p);

// const myPromise = Promise.resolve(5);
// console.log(myPromise);
// Promise.resolve(5).then(value=>{
//     console.log(value);
// })

//Ex:
// function myFunc(){
//     return new Promise((resolve , rejecet)=>{
//        setTimeout(()=>{
//             resolve("Eren");
//        },2000);
//     });
// }

// myFunc().then((val)=>{
//     console.log(val);
//     val += " Yegar";
//     return Promise.resolve(val);
// }).then(val => console.log(val));

//Ex:
// function myFunc(){
//     return new Promise((resolve , rejecet)=>{
//        setTimeout(()=>{
//         const a = 1 + 1;
//         if(a >= 2)
//             resolve("rock");
//         else
//             rejecet("error")    
//        },2000);
//     });
// }

// myFunc().then((val)=>{
//     console.log(val);
//     val += " paper";
//     return val;
// }).then((val)=>{
//     console.log(val);
//     val += " seasor";
//     return val;
// })
// .then(val => console.log(val))
// .catch(err => console.log(err));

// Ex:
// const btn = document.querySelector(".btn");
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");


// function changeText(element, text, color, time){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             if(element){
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             }else{
//                 reject("Element dosen't exist");
//             }
//         },time);
//     })
// }

// changeText(heading1, "one", "#adadad", 1000)
// .then(()=>changeText(heading2, "two", "#affdfd", 1000))
// .then(()=>changeText(heading3, "three", "#afccfd", 1000))
// .then(()=>changeText(heading4, "four", "#34fdfd", 1000))
// .then(()=>changeText(heading5, "five", "#a35ffb", 1000))
// .then(()=>changeText(heading6, "six", "#afa1fd", 1000))
// .then(()=>changeText(heading7, "seven", "#a9fdfd", 1000))
// .catch((err)=>console.log(err));

// btn.addEventListener("click",()=>{
//     // btn.classList.remove("btn");
//     // btn.classList.add("btn-2");
//     heading1.classList.add("btn-2");
//     heading2.classList.add("btn-2");
//     heading3.classList.add("btn-2");
//     heading4.classList.add("btn-2");
//     heading5.classList.add("btn-2");
//     heading6.classList.add("btn-2");
//     heading7.classList.add("btn-2");
// });


// AJAX
// -- asyncronous javascrpit and XML
//1) AJAX is set of "web development technologies"
//2) AJAX uses "web development technologies" on 
// "client-side" to create asyncronous web application

// fetch
// const URL = "./myfile.json";
// console.log(fetch(URL));
// fetch(URL)
//     .then(response => {
//        return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })

// Ex:- Validiting response
// const URL = "./myfile.json";
// console.log(fetch(URL));
// fetch(URL)
//     .then(response => {
//         if(response.ok){
//             return response.json();
//         }else{
//             throw new Error("response not found");
//         }
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     })    

// Ex:- PUSHING data in JSON
// const URL = "./myfile.json";
// fetch(URL,{
//     method : 'POST',
//     body : JSON.stringify({
//         title : 'freedom',
//         body: 'Rumbling',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type' : 'application/json; charset=UTF-8',
//     }
// }) .then(response => {
//             if(response.ok){
//                 return response.json();
//             }else{
//                 throw new Error("response not found");
//             }
//         })
//         .then(data => {
//             console.log(data);
//         })
//         .catch(err => {
//             console.log(err);
//         })   


// <---- async await ---->
// Ex: 1
// const URL = "./myfile.json";
// async function getPosts(){
//     const response = await fetch(URL);
//     const data = await response.json();
//     return data;
// }

// getPosts().then(data => console.log(data));


// Ex: 2
// const URL = "./myfile.json";
// async function getPosts(){
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("response not found");
//     }
//     const data = await response.json();
//     return data;
// }
// console.log(getPosts());
// getPosts().then(data => console.log(data))
//           .catch(err => console.log(err));        



// <----- import export ---->
import { firstName } from "./utility.js";
console.log(firstName);

import Person from "./utility.js";

const p = new Person("Eren"," Yeager",21);
p.info();