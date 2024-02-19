// nomor 2

function maxArr(max, ...num) {  // rest parameter
    let res = []
    for ( let i = 0; i < max ; i++) {
        res.push(num[i])    
    }
    return res
    
}
console.log(maxArr(5, 5, 10, 24, 3, 6, 7, 8));

function duplicate(arr) {
    let res = []
    for (let i = 0; i < arr.length; i++) {
        if (res.includes(arr[i]) == false && arr[i] == arr[i + 1]) {
            res.push(arr[i])
        }
    }

    return res
}

console.log(duplicate([1, 2, 2, 2, 3, 3, 4, 5, 5]));


function diffArr (arr1, arr2) {
    let res1 = []
    let arr3 = arr1.concat(arr2) 
    arr3.sort((a, b) => a - b)
    for (let i = 0; i < arr3.length; i++) {
        if (arr3[i] != arr3[i + 1] && arr3[i] != arr3[i - 1]) {
            res1.push(arr3[i])
        }
    }

    return res1

}

console.log(diffArr([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));


function primitive(arr) {
    return arr.filter((item) => typeof  item != "object");
}

console.log(primitive([1, [], undefined, {}, "string", {}, []]));
console.log(typeof []);

function secSmall(arr) {
    arr.sort ((a,b) => a - b)
    return arr[1]
}
console.log(secSmall([5, 3, 1, 7, 2, 6]));


function mixArr(arr) {
    return arr.filter((item) => typeof item == "number").reduce((a, b) => a + b);
  }
  
  console.log(mixArr(["3", 1, "string", null, 2]));