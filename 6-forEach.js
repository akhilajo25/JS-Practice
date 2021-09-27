console.log("----------------forEach---------------------------")

/* ForEach : accepts a callback function, calls funcion once per element in an array */

// 1
const numbers = [1,3,5,7,9,10,11,12,13,14,15,17]

function square (n) {
    console.log(n*n)
}

numbers.forEach(square)

// 2
// Using Anonymous functions 

numbers.forEach(function (element){
    console.log(element)
})