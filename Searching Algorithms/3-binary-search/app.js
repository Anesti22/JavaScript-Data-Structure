/* Searching Algorithms */
//
var states = ["Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District Of Columbia", "Federated States Of Micronesia", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Marshall Islands", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Northern Mariana Islands", "Ohio", "Oklahoma", "Oregon", "Palau", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
]
var usernames = ["anesti", "maria", "toto", "lula", "Gideon", "vita", "sokrati", "julisa", "driona", "ziniu", "xhina", "goni", "cezi", "flori", ];

// // Binary Search
function binarySearch(arr, elem) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end)/2);

    // while(arr[middle] !== elem && start <= end) {
    //     console.log(start, middle, end);

    //     if(elem < arr[middle]) {
    //         end = middle - 1;
    //     } else {
    //         start = middle + 1;
    //     }
    //     var middle = Math.floor((start + end)/2);
    //     console.log(start, middle, end);
    //     if(arr[middle] == elem) {
    //         return middle;
    //     }

    //     return -1;
    // }

    while(arr[middle] !== elem && start <= end) {

        if(elem < arr[middle]) end = middle - 1;
        else start = middle + 1;
        var middle = Math.floor((start + end)/2);
    }

    return arr[middle] === elem ? middle :  -1;
}

binarySearch([2,5,6,9,13,15,28,30], 50);
