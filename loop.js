// for loop

for (let i = 0; i < 5; i++) {
    console.log(`Hello ke- ${i}`);
}

for (let i = 10; i > 0 ; i--){
    console.log(`World ke ${i}`);
}

let i = 0;

while (i < 5) {
    if (i === 3) break
    console.log(`Hello ke ${i}`);
    i++
}

let j = 0
do {
    console.log(`World ke ${j}`);
    j++
} while (j < 5);