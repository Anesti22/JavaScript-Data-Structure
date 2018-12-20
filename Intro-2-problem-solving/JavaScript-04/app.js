// Diefferent wayes to aproach the problem Version #1
// function charCount(str) {
//     var obj = {};
//     for (var i = 0; i < str.length; i++) {
//         var char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             };
//         }
//     }
//     return obj;
// }


// Diefferent wayes to aproach the problem Version #2
// function charCount(str) {
//     var obj = {};
//     for (var char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char] > 0) {
//                 obj[char]++;
//             } else {
//                 obj[char] = 1;
//             };
//         }
//     }
//     return obj;
// }

// Diefferent wayes to aproach the problem Version #3
// function charCount(str) {
//     var obj = {};
//     for (var char of str) {
//         char = char.toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             obj[char] = ++obj[char] || 1;
//         }
//     }
//     return obj;
// }

// Diefferent wayes to aproach the problem Version #4
function charCount(str) {
    var obj = {};
    for (var char of str) {
        char = char.toLowerCase();
        if (isAlphaNumaric(char)) {
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphaNumaric(char) {
    var code = char.charCodeAt(0);
    if (!(code > 47 && code < 58) && // Numeric 0-9
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
        return false;
    }
    return true;
}

charCodeAt(0);
