console.log("----------------------MAP------------------------")

/*Map creates a new array with the results of calling a callback 
on every element of array */


const even_numbers = [2,4,6,8,10,12,14,16,18,20]

even_numbers.map(function(even_number){
    console.log(even_number)
})

const square_numbers = even_numbers.map(function(n){
    return(n*n)
})

console.log(square_numbers)
console.log(typeof(square_numbers))