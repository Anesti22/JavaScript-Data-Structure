/*
    What is recursion?
    A process (a function in our case) that calls itself
*/

// The Call Stack
function takeShower() { // #2
    return "Showering!" // 0ff
}

function eatBreakfast() { // #3 #5
    let meal = cookFood() // #4 
    return `Eating ${meal}`
}

function cookFood() { // #4 
    let items = ["Oatmeal", "Eggs", "Protein Shake"]
    return items[Math.floor(Math.random() * items.length)];
}

function wakeUp() {
    takeShower() // #2
    eatBreakfast() // #3 #6
    console.log("Ok ready to go to work!") // #7
}

wakeUp() // #1
