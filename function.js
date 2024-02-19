function square(number) { 
    return number * number
    
}

const square2 = function(number) {
    return number * number
    
}

function multiple(a, b) {
    return a * b
    
}

console.log(square(4))
console.log(multiple(10, 5));

function greeting(name) {
    let hello = "Hello"

    return hello + " " + name
}

console.log(greeting("Budi"));


// default parameter
function multiply(a ,b = 1) {
    return a * b 
}

console.log(multiply(7));

//rest parameter 
function myFunc(a, b, ...etc) {
    console.log("a", a);
    console.log("b", b);
    console.log("etc", etc);

}

myFunc("one", "two", "three", "four", "five")

//nested function

function getMessage(firstName) {
    function sayHallo() {
        return "Hello " + firstName + "."

    }
    function welcomeMessage() {
        return "Welcome To Purwadika"

    }
    return sayHallo() + " " + welcomeMessage()
}
const message = getMessage("David")
console.log(message);

function greeting1 (name1) {
    const defaultMessage1 = "Hello " ; 

    return function() {
        return defaultMessage1 + name1
    }
}
const greetingDavid1 = greeting1("David")
console.log(greetingDavid1());