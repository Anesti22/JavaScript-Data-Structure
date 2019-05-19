/* Searching Algorithms */
//
var usernames = ["anesti", "maria", "toto", "lula", "Gideon", "vita", "sokrati", "julisa", "driona", "ziniu", "xhina", "goni", "cezi", "flori", ];

function linearSearch(arr, val) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === val) return i;
    }
    return -1;
}

linearSearch([32, 43, 56, 2], 2);

// Write a function that accepts an array and a value.
// Loop through the array and check if the current array element is equal to the value
// If it is, return index at which the elemnt is found
// If the value is never found, return -1
