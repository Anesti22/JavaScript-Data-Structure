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
function countDown(num) {
    if (num <= 0) {
        console.log("All Done!");
        return;
    }
    console.log(num);
    num--;
    countDown(num);
}
// countDown(5);
// print 5
// countDown(4);
// print 4
// countDown(3);
// print 3
// countDown(2);
// print 2
// countDown(1);
// print 1
// countDown(0); - this is the BASE CASE
// print "All Done"



// Different way to do the same thing

// function countDown(num) {
//     for (var i = num; i > 0; i--) {
//         console.log(i);
//     }
//     console.log("All Done!");
// }
// countDown(5);
