const person = {
    firstName : "Frenky" ,
    lastName  : "sihombing" ,
    greet () {
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }
}

person.greet()