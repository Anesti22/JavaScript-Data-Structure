/*
Anagrams
Given two strings , write a function to determine if the second string is 
an anagram of the first. An anagram is a word, phrase, or a name 
formed by rearranging the letters of another, such as cinema formed by iceman!
*/

// First Example, first aproach - #1

// realAnagram('', '') // true
// realAnagram('aaz', 'zza') // false
// realAnagram('anagram', 'nagaram') // true
// realAnagram("rat", "car") // false) // false
// realAnagram('awesome', 'awesom') // false
// realAnagram('qwerty', 'qeywrt') // true
// realAnagram('texttwisttime', 'timetwisttext') // true

// 'germa' is the Albanian word for 'Letter'

function realAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }

    const seeIn = {};
    for (let i = 0; i < first.length; i++) {
        let germa = first[i];
        // If letter exists, increment, otherwise set to 1
        seeIn[germa] ? (seeIn[germa] += 1) : (seeIn[germa] = 1);
    }
    console.log(seeIn);
    for (let i = 0; i < second.length; i++) {
        let germa = second[i];
        // Can't find 'germa' or germa is zero then it's not an argumernt
        if (!seeIn[germa]) {
            return false;
        } else {
            seeIn[germa] -= 1;
        }
    }
    return true;
}

realAnagram("anagram", "nagaram"); // true
