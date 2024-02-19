//soal nomor 1

const input  =  9;
const limit = 10 ;

for (let i = 1  ; i<= limit ; i++) {
    console.log(`${input} x ${i} = ${input * i }`);

}


//soal nomor 2  




// nomor 3 
let cm = 100000
let hitung = cm/100000
console.log(`${hitung} KM`);

//nomor 4

// let num = 123456

// let rupiahFormat = new Intl.NumberFormat('id-ID', {
//     style : 'currency', 
//     currency : 'IDR'
// }).format(num)

// console.log(rupiahFormat);

const numb = 1234567 //1.234.567
const numbString = numb.toString() 
let result = ""
let count = 0 // menghitung looping ke berapa

console.log(numb);
console.log(numbString);

for (let i = numbString.length-1 ; i>=0 ; i--) {
	//result += numbString.charAt(i) // result = result + numbString.charAt(i)
	if (count % 3 === 0 && count > 0) {
		result = "." + result
	}
	result = numbString.charAt(i) + result 
	count++
	
}

console.log(`Rp. ${result},00`)

//nomor 5

let a = "Hello world"

console.log(a.replace("ell", ""));


//nomor 6

// let kata = "hello world"
// let ganti2 = kata.replace ('hello world','Hello World')

// console.log(ganti2);

const world3 = "hello world" 
let isCapital = true 
let result3 = ""

for (let i = 0 ; i < world3.length; i++) {
	if (isCapital == true) {
		result3 += world3.charAt(i).toUpperCase()
		isCapital = false
	} else {
		result3 += world3.charAt(i).toLowerCase()
	}
	if (world3.charAt(i) == " " ) {
		isCapital = true
	}

}

console.log(result3);

//nomor 7 dan 2 sama

// function reverseString(str) {
// 	const strRev = [...str].reverse().join("")
// 	console.log(strRev)
// }
// reverseString("Hello")


const word = "kasur rusak"
let reverseWord = ""

for (let i = word.length - 1; i >= 0; i--) {
	//console.log(word.charAt(i)); // karakter ke-
	reverseWord += word.charAt(i)
	//console.log(reverseWord);
}
console.log(reverseWord);

if (word === reverseWord) {
	console.log(`${word} is palindrome`);
} else {
	console.log(`${word} is not palindrome`);
}

//nomor 8

const word4 = "The QuiCk BrOwN Fox"
let result4 = ""

for (let i = 0; i<= word4.length; i++){
	if(word4.charAt(i) === word4.charAt(i).toUpperCase()) {
		result4 += word4.charAt(i).toLowerCase()
	} else {
		result4 += word4.charAt(i).toUpperCase()
	}
}

console.log(result4);


//nomor 9 

const num1 = 42
const num2 = 27 

console.log(num1 > num2 ? num1 : num2);

//nomor 10

let c = 42
let d = 27
let e = 18 

if (c > d ) {    // 42  > 27
	let f = c 
	c = d  // c = 27
	d = f //d = 42
}

if (d > e ) {  // 42 > 18 
	let f = d 
	d = e  // d = 18
	e = f  // e = 42
} 
if (c > d ) { // c = 27 > 18
	let f = c 
	c = d // c = 18
	d = f // d = 27
}

console.log(c,d,e);

//nomor 11

const input2 = "purwadika" 
const type  = typeof input2 

console.log(type == "string" ? 1 : type == "number" ? 2 : 3);

//nomor 12

const word5 = "An apple a day keeps the doctor away"

console.log(word5.toLowerCase().replaceAll("a" , "*"));





