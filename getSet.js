let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]

// console.log(arr1 === arr2);
// console.log(arr1.length === arr2.length);
// console.log(arr1[0] === arr2[0]);
// console.log(typeof arr1);


let word = "Bandung"

//console.log(word[0]);

function searchStr(word, search) {
    let res = [word.search(search[0])]
    for (let i = 0; i < search.length - 1; i++) {
        res.push(res[i] + 1)

    }
    return res
}

//console.log(searchStr("Indonesia", "one"));

var x = 10
let y = 6

{
    var x = 1
    let = 2
}
console.log(x, y);

console.log(a); 

var a = 10  // Hoisiting, bisa d panggil di atas
let b = 2

console.log(sum(2, 4));
//console.log(jumlah(2, 4));


function sum (a,b) {  // Hoisting
    return a + b
}

const jumlah = function (a, b) {
    return a + b
}


console.log(typeof console);


let arr = [1, 2, 3]

console.log(arr.forEach((item)=> item * 2 ));
console.log(arr.map((item)=> item * 2 ));

console.log(typeof null);

console.log(false + false);
console.log("true" * true + true);
console.log(1 + undefined);

console.log(!false == Boolean(1));

let i = -1
console.log(++i == 0);

console.log(Boolean([]) + 1);
console.log(0 == false);