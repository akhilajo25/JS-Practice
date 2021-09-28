console.log("--------------S P R E A D----------------------")

console.log(...'hello')

const arr_spread = [1,2,3,4,5,6,7,8,9,10]
console.log(...arr_spread)

const cars = [
    {
        company:"Hyndai",
        model:"i20"
    },
    {
        company:"Fiat",
        model:"Linea"
    }
]

console.log(...cars)
console.log({...cars, color:"Morning glory"}) // appends color to cars array
console.log({...cars[0], color:"Morning glory"}) // appends color to cars[0] object

const cats = ['yin', 'yang']

const dogs = ['max']

const lisis_pets = [...cats,...dogs]

console.log(lisis_pets)



//Frequently asked

array_evens = [2,4,6,8]

console.log({...array_evens})