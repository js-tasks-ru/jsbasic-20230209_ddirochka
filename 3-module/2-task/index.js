function filterRange(arr, a, b){
    return arr.filter(item => (a <= item && item <= b));
}

// function filterRange(arr, a, b) {
//     let filtered = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (( a < arr[i] && arr[i] < b ) || ( a > arr[i] && arr[i] > b ))  filtered.push(arr[i]);
//         if (a === arr[i] || b === arr[i]) filtered.push(arr[i]);
//     }
//     return filtered;
// }
