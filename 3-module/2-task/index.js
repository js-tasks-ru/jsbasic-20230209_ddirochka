let arr = [5, 3, 8, 1];
let filtered = [];

function filterRange(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (( a < arr[i] && arr[i] < b ) || ( a > arr[i] && arr[i] > b ))  filtered.push(arr[i]);
        if (a == arr[i] || b == arr[i]) filtered.push(arr[i]);
    }
    return filtered;
}

console.log( filtered ); // [3,1] (совпадающие значения)
console.log( arr ); // [5,3,8,1] (без изменений)
