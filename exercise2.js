// celcius to fahreinheit

let celcius  = 60 ;
let fahreinheit = (9/5 * celcius + 32)

console.log(fahreinheit);

// ganjil genap

let bilangan = 2

if (bilangan % 2 == 1) {
    console.log(`${bilangan} adalah angka ganjil`)   

} else {
    console.log(`${bilangan} adalah angka genap`);
}


// bilangan prima

const z = 17
let divider = 0

for (let y = 0; y <= z; y++) {
    if (z % y === 0) {
        divider++
    }
}

console.log(divider === 2 ? "Prime" : "Not Prime");

// SUM of the numbers 1 to N
const n = 5 
let result = 0 

for (let j = 1; j <=n; j++) {
    result +=j

}
console.log(result);


//factorial
const m = 4
let hasil = 1
for (let k = m; k >0; k--) {
    //console.log(k);
    hasil *=k

}
console.log(hasil);


//fibonaci

let a = 10
let b = 0 
let c = 1
let NextNumber = 0

for (let z = 1; z < a ; z++) {
    NextNumber = b + c
    c = b 
    b = NextNumber
}

console.log(b);

