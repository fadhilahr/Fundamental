

function multiplier ( factor, number) {
    return factor * number

}

console.log(multiplier(10, 3));
console.log(multiplier(7, 3));

// ==========================================

function multiply (factor) {
    return function (number) {
        return factor * number
    }
}

const mul3 = multiply(3)
console.log(mul3(7));
console.log(mul3(10));

