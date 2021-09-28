console.log("--------------Default params values to function-------------")

const multiply = (a,b=1) =>{

    return a*b;

}

const mul1 = multiply(5,6)
console.log(mul1)
const mul2 = multiply(7)
console.log(mul2)