"use strict";

async function doSomething() {

    const thePromise = new Promise((resolve) => 
        setTimeout(() => {resolve("Success")}, 3000)
    );

    const myData = await thePromise;

    console.log(myData);

}

doSomething();