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
// Writing Factorial Iteratively
// 4! ( Four Factorial ) 4 * 3 * 2 * 1

function factorial(num) {
    let total = 1;

    for (let i = num; i > 0; i--) {
        total *= i;
    }
    return total;
}

var fact = factorial(3);

console.log(fact);

