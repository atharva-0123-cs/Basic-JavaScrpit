// <----Maps----> 
// map is an iterable
// store data inn ordered  fashion
// store 'key : value' pair like object
// duplicate keys are not allowed like objects

// difference between maps and objects
//1) objects can have string OR symbol as KEY
//2) In maps you can use anything as KEY like arrays, number, strings


// object literals
// key ---> string OR symbol
// example 
// const  obj  = {
//     firstName : "Harshit",
//     age : 2,
//     1 : "one",
// }
// for(let key in obj){
//     console.log(typeof key);
// }

// Maps
// const preson = new Map();
// preson.set('firstName', "Atharva");
// preson.set('age', 15);
// preson.set(1, 'number');
// preson.set([1,2,3], 'Array');
// preson.set({key : 'value'}, 'Objet');

// console.log(preson);

// for(let key of preson.keys()){
//     console.log(key);
// }
// By destuctring of array
// for(let [key,value] of preson){
//     console.log(Array.isArray(key));
//     console.log(key,value);
// }

// <---cloing using Object.assing---->
// const obj = {
//     key1 : 'value1',
//     key2 : 'value2',
// }
// const obj2 = {...obj}; // coling by spared opreator
// const obj3 = Object.assign({}, obj); // cloing using Object.assing
// obj.key3 = 'value3';
// console.log(obj);
// console.log(obj2);
// console.log(obj3);

// <---optional chaing---->
// const obj = {
//     firstNmae  : "Atharva",
//     // user : { id :  1, num : 100},
// }

// console.log(obj?.firstNmae); 
// console.log(obj?.user?.id); // optional chaing

// console.log("Hello world");

// <----javascript function ===> function + object----->

// const myFunc = function hello() {
//     console.log("Hello");
// }


// console.log(myFunc.name);

// // can add your own properties
// myFunc.myOwnProperties = "Properties";
// console.log(myFunc.myOwnProperties);


//<----proto AND prototpe---->

//Every javascript function has it's own proto and prototype 

// proto --->  A reference to an empty OBJECT{} or empty ARRAY[] or empty MEMORY SPACE
//prototype ----> prototype is an an empty OBJECT{} or empty ARRAY[] or empty MEMORY SPACE

// Note :- Only function provide prototype properties.
// const myFunc = function hello() {
//     console.log("Hello");
// }
// const hello =  {key : "value"};
// console.log(myFunc.key);
// console.log(myFunc.prototype); //{}

// myFunc.prototype.namee = "namee";
// myFunc.prototype.age = "age";
// myFunc.prototype.sing = function(){
//     console.log("LA LA LA LA");
// }
// myFunc.prototype.sing();


// Example 1:-
// the proto of function named 'createUser()' contains the reference of object named 'userMethod' 
// const userMethod = {
//      about : function(){
//      return `${this.firstName} is ${this.age} yrar old`},

//      is18 : age => age>=18,

//      sing : () => "baby camm down",
// }

// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(userMethod);  // {}
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = createUser("Atharva", "Aglawe",  "atharva123king@gmail.com", 19, "Pune");
// const user2 = createUser("Eren", "Yeagar",  "yegariestFreedom@gmail.com", 21, "Paradies");
// const user3 = createUser("Mikasa", "Akraman",  "ErenMyLove@gmail.com", 21, "Paradies");

// console.log(user1);
// console.log(user2);
// console.log(user3);

// console.log(user1.about());
// console.log(user2.about());
// console.log(user3.about());

// Example 2:-

// the proto of function named 'createUser()' contains the reference of it's own prototype 

// function createUser(firstName, lastName, email, age, address){
//    const user = Object.create(createUser.prototype);  // {}
//    user.firstName = firstName;
//    user.lastName = lastName;
//    user.email = email;
//    user.age = age;
//    user.address = address;
//    return user;
// }

// createUser.prototype = {
//     about : function(){
//     return `${this.firstName} is ${this.age} yrar old`},

//     is18 : age => age>=18,

//     sing : () => "baby camm down",
// }

// const user1 = createUser("Atharva", "Aglawe",  "atharva123king@gmail.com", 19, "Pune");
// const user2 = createUser("Eren", "Yeagar",  "yegariestFreedom@gmail.com", 21, "Paradies");
// const user3 = createUser("Mikasa", "Akraman",  "ErenMyLove@gmail.com", 21, "Paradies");

// console.log(user1);
// console.log(user2);
// console.log(user3);

// console.log(user1.about());
// console.log(user2.about());
// console.log(user3.about());

// Example 2:-
// Using 'new' keyword
// 1) it creates empty object referenced by 'this' keyword = {}
// 2) return 'this'
// the proto of function named 'createUser()' contains the reference of it's own prototype 

// function createUser(firstName, lastName, email, age, address){
//     // const user = Object.create(createUser.prototype);  // {}
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     // return user;
//  }
 
//  createUser.prototype = {
//      about : function(){
//      return `${this.firstName} is ${this.age} yrar old`},
 
//      is18 : age => age>=18,
 
//      sing : () => "baby camm down",
//  }
 
//  const user1 = new createUser("Atharva", "Aglawe",  "atharva123king@gmail.com", 19, "Pune");
//  const user2 = new createUser("Eren", "Yeagar",  "yegariestFreedom@gmail.com", 21, "Paradies");
//  const user3 = new createUser("Mikasa", "Akraman",  "ErenMyLove@gmail.com", 21, "Paradies");
 
//  console.log(user1);
//  console.log(user2);
//  console.log(user3);
 
//  console.log(user1.about());
//  console.log(user2.about());
//  console.log(user3.about());

//  for(let key in user1){
//     if(user1.hasOwnProperty(key)){
//        console.log(key); 
//     }
//  }

// Note :- Array has it's own prototype buz,
// let num = [1,2,3];
// intrenal repsentation of Array :-
// let num = new Array(1,2,3);

// console.log(Array.prototype);
// console.log(num);

// console.log(Object.getPrototypeOf(num));

// example

// function hello(){
//     console.log("Hello");
// }

// hello.prototype = [];
// console.log(hello.prototype);
// // hello.prototype.push(1);
// // hello.prototype.push(2);
// // hello.prototype.push(3);
// // hello.prototype.push(4);


// <---- class ---->
//  classes are fake in javascript

// class createUser{

//     constructor(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     }


//     about(){
//         return `${this.firstName} is ${this.age} yrar old`;}
    
//         is18(age){ return age>=18;}
    
//         sing(){ 
//             return "baby cam down";
//         }
//  }
 
//  createUser.prototype = {

//  }
 
//  const user1 = new createUser("Atharva", "Aglawe",  "atharva123king@gmail.com", 19, "Pune");
//  const user2 = new createUser("Eren", "Yeagar",  "yegariestFreedom@gmail.com", 21, "Paradies");
//  const user3 = new createUser("Mikasa", "Akraman",  "ErenMyLove@gmail.com", 21, "Paradies");
 
//  console.log(user1);
//  console.log(user2);
//  console.log(user3);
 
//  console.log(user1.about());
//  console.log(user2.about());
//  console.log(user3.about());

// <----inheritance---->
// // Base Class
// class Animal {
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }

//     isSuperCute(){
//         return this.age<=1;
//     }

//     isCute(){
//         return true;
//     }

//     eat(){
//         return `${this.name} is eating`;
//     }
// }
// // Derived Class
// class Dog extends Animal{
//     constructor(name,age,speed){
//         super(name,age);
//         this.speed = speed;
//     }

//     run(){
//         return this.speed;
//     }
// }

// const animal = new Animal("Groot", 1);
// console.log(animal.name);
// console.log(animal.age);
// console.log(animal.isCute());
// console.log(animal.isSuperCute());

// const dog = new Dog("tom", 1, 10);
// console.log(dog.name);
// console.log(dog.age);
// console.log(dog.isCute());
// console.log(dog.isSuperCute());
// console.log(dog.run());
