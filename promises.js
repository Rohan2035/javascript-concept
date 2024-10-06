"use strict";

let x = 0;

// Using promises
function displayValue(data) {
    console.log({message: data});    
}

let thePromise = new Promise( (resolve, reject) => {
    
    if(x == 0) {
        resolve("Success!");
    } else {
        reject("Error!");
    }

});


thePromise
    .then((data) => displayValue(data))
    .catch((data) => displayValue(data));

