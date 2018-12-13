/*
    Multiple Pointer Patterns
*/

// First Example, first aproach - #1
// countUniqueValues
/*
    Implement a function called countUniqueValues, which accepts a sorted array, 
    and counts the unique values in the array. There can be negative numbers 
    in the array, but it will always be sorted.

    countUniqueValues([1,1,1,1,1,2]) // 2
    countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7
    countUniqueValues([]) // 0
    countUniqueValues([-2,-1,-1,0,1]) // 4
*/
function countUniqueValues(arr) {
    var i = 0;
    for (var j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
        // console.log(i, j);
    }
    return i + 1;
}

countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]);

// i
// [1,2,3,4,4,4,7,7,12,12,13] 
//     j
