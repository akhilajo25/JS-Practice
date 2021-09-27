console.log("----------------Arrow Functions-------------------------")

/*

Syntactically compact alternatives to regular functions

Internet explorer soesn't support 

Help us make a function expression 

*/

const cube_number = (x) => {
    return (x*x*x)
}

console.log(cube_number(3))


/* Implicit Return in arrow functions */

const hello = () => (
    "Hello, AKhila!"
)

console.log(hello())

// ONE-LINE

const sum_of_two = (a,b) => a+b

console.log(sum_of_two(6,8))