function getMaxMin(arr) {
    if (arr.length === 0) {
        return {
            lowest: null,
            highest: null,
            average: null
        };
    }

    let lowest = arr[0];
    let highest = arr[0];
    let sum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < lowest) {
            lowest = arr[i];
        }
        if (arr[i] > highest) {
            highest = arr[i];
        }
        sum += arr[i];
    }

    const average = sum / arr.length;

    return {
        lowest,
        highest,
        average
    };
}

let numbers = [12, 5, 23, 18, 4, 45, 32];
let stats = getMaxMin(numbers);
console.log("Lowest:", stats.lowest);
console.log("Highest:", stats.highest);
console.log("Average:", stats.average);


