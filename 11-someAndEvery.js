console.log("------------------Some and Every--------------------")

/*

Some and Every are boolean functions,

some returns true of some of the elements match given condition

every returns true if every element matches the given condition
*/

const someAndEvery = [1,2,3,4,5,6,7,8,9,10]

const return_val = someAndEvery.some(a => a<5)

console.log(return_val)

const return_every = someAndEvery.every(a => a<=10)

console.log(return_every)