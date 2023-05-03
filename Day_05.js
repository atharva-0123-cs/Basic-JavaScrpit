//<computed properties>
// const key1 = "obj1";
// const key2 = "obj2";

// const value1 = "myvalue1";
// const value2 = "myvalue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }
// console.log(obj);
//OR
// const obj={};
// obj[key1] = value1;
// obj[key2] = value2;

// console.log(obj);

//<spread opreator in Arrays>
// const arr1 = [1,4,2];
// const arr2 = [5,7,3,7];
// const newArray = [...arr1,...arr2];
// // const newArray = [..."1223337"];
// console.log(newArray);

//<spread opreator in Objrcts>
const obj1 = {
    key1 : "value1",
    key2 : "value2"
};
const obj2 = {
    key1 : "valueUnique",
    key3 : "value3",
    key4 : "value4"
};

const newobject = {...obj1, ...obj2};
// const newobject = {...obj1, ...obj2, key5 : "value5"};
// const newobject = {...["value5","value6","value7"]};
console.log(newobject);
// console.log("Atharva");

// //  object destrucring
// const band = {
//     bandName : "Imagin Dragons",
//     favSong : "Enemy",
//     year : 1945,
//     popularSong : "Beliver"
// };
// let { bandName, favSong} = band;
// console.log(bandName," ", favSong);
//OR
// let { bandName : var1 , favSong : var2} = band;
// console.log(var1," ", var2);
// let { bandName , favSong, ...restProps} = band;
// console.log(restProps);

//Note:[// let{var1,var2} = band;
// console.log(var1,var2);
//-->it gives undefined]

//objects inside Array
// const users=[
//     {userId: 100, firstName: "Atharva", gender: "male"},
//     {userId: 101, firstName: "Neha", gender: "female"},
//     {userId: 102, firstName: "saskue", gender: "male"},
// ];
// for(let user of users){
//     console.log(user.firstName);
// }
// nested destrustring
// const users=[
//     {userId: 100, firstName: "Atharva", gender: "male"},
//     {userId: 101, firstName: "Neha", gender: "female"},
//     {userId: 102, firstName: "saskue", gender: "male"},
// ];

// const [{userId},{firstName},{gender}] = users;
// console.log(firstName);
// console.log(userId);
// console.log(gender);
