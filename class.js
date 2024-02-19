class Person {
    name = "" // public
    #age = 0   // private
    hobby = ""
    static species = "Human"

    constructor(name, age, hobby) {
        this.name = name
        this.#age = age
        this.hobby = hobby
    }

    greet() {
        console.log(`Hello ${this.name}`);
    }
    getAge() {
        return this.#age
    }
}

let person1 = new Person("Budi", 20, "Reading a book")

console.log(person1);
console.log(person1.getAge());
person1.greet()
console.log(Person.species);


