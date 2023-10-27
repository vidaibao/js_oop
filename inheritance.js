class Person {
    constructor(_name, _age) {
        this.name = _name
        this.age = _age
    }

    description(){
        console.log(`I'm ${this.name} and I'm ${this.age} years old.`)
    }
}

class Progrmmer extends Person {
    constructor(_name, _age, _skill) {
        super(_name, _age)
        this.skill = _skill
    }

    description() {
        //super.description()
        console.log(`My name is ${this.name} and I'm ${this.age} years old. I can coding by ${this.skill} language(s).`)
    }
}

const loyee = new Progrmmer("Loyee", 25, "Python")

console.log(loyee.description())

/**
 * 
 */





