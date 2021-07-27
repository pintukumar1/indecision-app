class Person {
    constructor(name = "anonymous", age = 0){
        this.name = name
        this.age= age
    }
    getGreeting() {
        return `Hi, I am ${this.name} `
    }
    getDescription() {
        return `${this.name} is ${this.age} years old!`
    }
} 

class Student extends Person {
    constructor(name, age, major){
        super(name,age)
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription(){
        let description = super.getDescription()
        if(this.hasMajor()) {
            description += `Their major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age , homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting(){
        let greeting = super.getGreeting()
        if(this.homeLocation){
            greeting += `I am visiting from ${this.homeLocation}`
        }
        return greeting
    }
}

const me = new Traveler('Pintu Kumar', 22, 'Ballia')
console.log(me.getGreeting())

const other = new Traveler()
console.log(other.getGreeting())

// class Person {
//     constructor(name = 'anonymous'){
//         this.name = name;
//     }
//     getDescription(){
//         return `Hi , I am ${this.name}`;
//     }
// }

// const me = new Person('Pintu Kumar')
// console.log(me.getDescription())

// const other = new Person()
// console.log(other.getDescription())