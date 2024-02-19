const num1 = [1,2,3]
const number2 = [...num1]

number2.push(4)

console.log(num1);
console.log(number2);

console.log(num1.concat(number2));
console.log([...num1,...number2]);

num[3] = 4

console.log(num1);