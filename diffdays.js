// hitung selisih antara 2 tanggal

let now = new Date ()
let future = new Date ("2025-01-01")

//untuk mempermudah menghitung selisih waktu pake milisecond 

console.log(now.getTime());
console.log(future.getTime());

let diff = future.getTime() - now.getTime()

// conversi dari millisecond ke hari
let days = Math.floor( diff / (1000 * 60 * 60 * 24))

console.log(diff);
console.log(days);
console.log(`${days} hari menuju tahun baru`);


//write code to convert days to year, month and days

let n = 999
let tahun = Math.floor(n / 365)
let sisa = n % 365  // n - (tahun * 360)
let bulan = Math.floor (sisa / 30)
let hari = sisa % 30 // sisa - (bulan * 30)



console.log(`${tahun} tahun , ${bulan} bulan, ${hari} hari`);

