/*

1. this keyword inside of the method meow is used to refer to cat object itself

2. The value of this keyword depends on the invocation context of the function it is used 
   in

*/

const cat = {
    name: 'yin',
    color: 'grey',
    breed: 'Persian Cat',
    meow(){
        console.log("MEOW MEOW MEOW");
        console.log(this.name); //try without this : error color not defined, it looks 
        // for variable color or name which doesn't exist

        console.log("This is ", this)
    }
};


cat.meow() //Here THis refers to object on the left

const cat2=cat.meow
cat2() //When THIS is printed here, it refers to window object
