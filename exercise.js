let lenght =  5
let width = 3
let luas = lenght * width 
let keliling = 2 * (lenght + width)

console.log(luas);
console.log(keliling);


const Phi = 3.14
let r = 5
let L = Phi * (r * r)
let kel = 2 * Phi * r
let diameter = 2 * r


console.log(diameter);
console.log(kel);
console.log(L)

let now = new Date()
let newYear  = new Date("2025-01-01")

const diffInTimeStamps = newYear - now 
const diffInDays = Math.floor(diffInTimeStamps / (24 * 3600 * 1000))

console.log(diffInDays);

const hari = 400
const tahun = Math.round(hari / 365)
const bulan = Math.round(hari / 30) - 12
const sisaHari = Math.round(hari - 365 - 30 ) 

const hari2 = 366
const tahun2 = Math.round(hari2 / 365)
const bulan2 = Math.round(hari2 / 30) - 12
const sisaHari2 = Math.round(hari2 - 365)


console.log(tahun);
console.log(bulan);
console.log(sisaHari);

console.log(tahun2);
console.log(bulan2);
console.log(sisaHari2);