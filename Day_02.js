//<undefined>
// let firstName;
// console.log(typeof firstName);
// firstName = "Atharva";
// console.log(typeof firstName, firstName);

//<null>
// let firstName = null;
// console.log(firstName);
// firstName = "Atharva";
// console.log(typeof firstName, firstName);
// console.log(typeof null); // --> Note: bug in javascript. 

//<BigInt>
// console.log(Number.MAX_SAFE_INTEGER);
// let num1 = BigInt(123456789);
// let num2 = 987654321n;
// console.log(num1+num2);

// <booleans and comresion opreators>

// let a=10;
// let b=20;
// let c='10';
// console.log(a=b);
// console.log(a == b);
// console.log(a == c);
// console.log(a === b);
// console.log(a === c);
// console.log(a != b);
// console.log(a != c);
// console.log(a !== b);
// console.log(a !== c);

// console.log(a>b);
// console.log(a<b);
// console.log(a>c);
// console.log(a<c);
// console.log(a>=b);
// console.log(a<=b);
// console.log(a>=c);
// console.log(a<=c);

//<truthy Values and Falsy Values>
//Thuthy values - 1)true 2)1 and etc....
//Falsy values - 1)false 2)"" 3)null 4)undefined 5)0.

// let firstName = "";
// // let firstName ="Atharva";
// if (firstName) {
//     console.log(firstName);
// }else{
//     console.log("firstName is enpty string");
// }

// <ternary opreator OR conditional opreator>
// let age = 18;
// let drink = age <= 5 ? "Milk" : "Coffee";
// console.log(drink);

// <AND opreator> 
// let firstName = "Atharva";
// let age = 21;
// if(firstName[0] === 'A' && age>=18)
//     console.log("Name starts with A and your age is above 18");
// else 
//     console.log("inside else");   
    
// <OR opreator >
// let firstName = "Atharva";
// let age = 10;
// if(firstName[0] === 'A' || age>=18)
//     console.log("Name starts with A but your age is above 10");
// else 
//     console.log("inside else");      

// <nested if else>
// let winningNumber = 19;
// let guseNumber = +prompt("Guse a number : ");
//  if(guseNumber === winningNumber){
//      console.log("your guse Number is Right");
//  }
//  else{
//      if(guseNumber < winningNumber){
//          console.log("too low !!!!");
//      }
//      else{
//          console.log("too high!!!!");
//      }
//  }

//<while loop>
// let i=0;
// while (i<10) {
//     console.log(i+1);
//     i++;
// }
// console.log(`Current value of ${i}`);

//<for loop>
// let i=0;
// for(let i=0; i<10; i++) {
//     console.log(i+1);
// }
// console.log(`Current value of ${i}`);

//<do while loop>
// let i=0;
// do{
//     console.log(i+1);
//     i++;
// }while (i<10);
// console.log(`Current value of ${i}`);