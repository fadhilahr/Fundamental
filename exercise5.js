/*Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}*/

//With sort

function number (arr) {
    let sortArr = arr.sort((a, b) => a-b)
    const lowest = sortArr [0]
    const highest = sortArr[sortArr.length - 1]
    const sumArr = sortArr.reduce((a, b) => a + b)
    const average = sumArr / sortArr.length


    return {lowest, highest, average}
}

// Without sort

// function number2(arr) {

//     const lowest = Math.min(...arr)
//     const highest = Math.max(...arr)
//     const average = sortArr.reduce((a, b) => a + b) / arr.length

//     return {lowest, highest, average}
// }

let num = [12, 5, 23, 18, 4, 45, 32]
console.log(number(num));
//console.log(number2(num));


//nomor 2

function concat(arr) {
    const fruit = arr[arr.length - 1]
    arr.pop()
    return arr.join(", ") + " and " + fruit
}
console.log(concat(["Apple", "Banana", "Cherry", "Date"]));




//nomor 3 

function string(arr3){
    return (string1.split(" "))
}
let string1 = "Hello World"
console.log(string(string1));



//nomor 4

function calculate (arr1, arr2) {
    return arr1.map((item, index) => item + arr2[index])
}

function calculate2(arr1, arr2) {
    let res = []
    for (let i = 0 ; i < arr1.length; i++) {
        res.push(arr1[i] + arr2[i])

    }
    return res
}


const num2 = [1, 2, 3]
const num3 = [3, 2, 1]
console.log(calculate(num2, num3));
console.log(calculate2(num2, num3));


// Nomor 5 

function addValue (arr, num) {
    if (arr.includes(num) === false) {
        arr.push(num)
    }
    return arr
}

const arr2 = [1, 2, 3, 4]
const number3 = 4
console.log(addValue(arr2,number3));


//nomor 6 

function even (arr) {
    return arr.filter((item) => item % 2 === 0 ) 
}

let num4 = [1, 2, 3, 4, 5, 6]

console.log(even(num4));