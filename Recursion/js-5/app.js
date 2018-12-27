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
// Using Recursion
// Another Recursive Function

function sumRange(num) {
    if (num === 1) return 1;
    return num + sumRange(num - 1);
}
sumRange(4);
