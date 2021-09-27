/*
Higher Order Functions : Is a fancy way of saying functions that works with other funtions 

Functions that operate on / with other functions.

    They can:
     -- Accept other functions as arguments
     -- Return a function 

*/

function addTwice (func) {

    func();

    func();

}

function add_to_numbers(){

    const sum = Math.random()+ Math.random();
    console.log(sum)
}

addTwice(add_to_numbers)