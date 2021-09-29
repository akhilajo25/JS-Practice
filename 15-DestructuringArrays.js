console.log("--------------Destructuring Arrays-----------------")

const friends = ['Akhila', 'Anup' , 'Abhinav' , 'Amit']

const [female, bestfriend, ...everyoneElse] = friends

console.log(female)
console.log(bestfriend)
console.log(...everyoneElse)
