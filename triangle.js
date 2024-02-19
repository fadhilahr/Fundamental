function triangle (height) {
    for (let i = 1; i <= height; i++) {
        let res = ""
        for (let j = 1; j <= i; j++) {
            res += `${j} ` ;
        }
        console.log(res);
    }
}
triangle (5);


function triangle2 (height2) {
    let counter = 0
    for (let i = 1; i <= height2; i++){
        let res = ""
        for (let j = 1; j <= i; j++ ) {
            counter++
            res += (counter < 10 ? "0" : "") + counter + " " ;   // ~$(counter < 10 ? "0" : "") $(counter)`;

        }
        console.log(res);
    }
}

triangle2(5)


function fizzbuzz (num) {
    let result = [];
    
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i.toString());
        }
    }
    
    return result.join (", ")

}

console.log(fizzbuzz(15))



function bmi (weight, hight) {
    let score = weight / hight ** 2 
    let res = ""

    if (score < 18.5) {
        res = "less weight"
    } else if (score >= 18.5 && score <= 24.9) {
        res = "ideal"
    
    } else if (score >= 25 && score <= 29.9) {
        res = "overweight"
    
    } else if (score >= 30 && score <= 30.9) {
        res = "very overweight"
    } else {
        res = "obesity"
    }
        
    return res
}

console.log(bmi(80, 1.65));


function even (arr) {
    return arr.filter((item) => item % 2 === 0 ) 
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(even(num));



