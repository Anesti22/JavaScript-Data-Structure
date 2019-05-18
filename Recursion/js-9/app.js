/*
    How recursive functions work?
    Invoke the 'same' function with a different input until
    you reach your best case!
*/
/* The BASE CASE is when the recursion stops or ends */

/* Two essencial parts of a recursive function 
    - Base case
    - Different Input
*/
// Helper Method Recursion
// Pattern 
// function outer(input){

//     var outerScopedVariable = []

//     function helper(helperInput){
//         // modify the outerScopedVariable
//         helper(helperInput--)
//     }    
//     helper(input)
//     return outerScopedVariable;
// }


// Let's try to collect all of the odd values in an array!

// function collectOddValues(arr){
//     let newArr = [];

//     if(arr.length === 0) {
//         return newArr;
//     }

//     if(arr[0] % 2 !== 0){
//         newArr.push(arr[0]);
//     }

//     newArr = newArr.concat(collectOddValues(arr.slice(1)));
//     return newArr;
// }

// Pure Recursion
function collectOddValues(arr) {
    let newArr = [];

    if (arr.length === 0) {
        return newArr;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0]);
    }

    newArr = newArr.concat(collectOddValues(arr.slice(1)));
    return newArr;
}

collectOddValues([1, 2, 3, 4, 5]);

// test
