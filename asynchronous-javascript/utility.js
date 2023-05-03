export default class Person{
    constructor(fName,lName,age){
        this.firstName = fName;
        this.lastName = lName;
        this.age = age;
    }
    info(){
        console.log(this.firstName, this.lastName, this.age);
    }
}

export const firstName = "Eren";