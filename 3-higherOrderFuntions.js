/*
Higher Order Functions : Is a fancy way of saying functions that works with other funtions 

Functions that operate on / with other functions.

    They can:
     -- Accept other functions as arguments
     -- Return a function 

*/

//  1. Passing functions as parameters
function addTwice (func) {

    func();

    func();

}

function add_to_numbers(){

    const sum = Math.random()+ Math.random();
    console.log(sum)
}

addTwice(add_to_numbers)

//  2. Returning Function

function returns_function () {
    const random_number = Math.random();

    if (random_number < 0.5){
        const happy_function = function () {console.log("Wohooo!")}
        return happy_function
    }
    else{
        const angry_function = function () {console.log("damn it!")}
        return angry_function
    }
}

const what_returned = returns_function() 
console.log(what_returned)