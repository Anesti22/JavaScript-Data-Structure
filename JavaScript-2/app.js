// Space Complexity in JS

function sum(arr) {
    let total = 0

    for (i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// double the items
function double(arr) {
    let newArr = [];

    for (i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
