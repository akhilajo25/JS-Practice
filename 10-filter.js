console.log("------------------Filter------------------")

/*
Filter creates a new array with all elements that pass the test implemented by the 
provided function
*/


const all_numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

const eve_num = all_numbers.filter(function(no) { 
    return no %2 == 0
})

console.log(eve_num)