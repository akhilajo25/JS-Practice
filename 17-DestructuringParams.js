console.log("--------------Destructuring Parameters-----------------")

function emberBaby(obj) {

    const {Owner, name, ...everything} = obj;

    console.log(`${name}'s Owner is ${Owner}`);
    console.log(everything)
    

}


const params_to_function ={
    name: "Ember",
    model: "2015",
    dateOfPurchase: "09.2015",
    Owner:"Anup Patil"
}

emberBaby(params_to_function)