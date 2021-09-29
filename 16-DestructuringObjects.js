console.log("--------------Destructuring Objects------------------")

const akhila_Dets = {
    name: 'akhila',
    email: 'akhilajo25@gmail.com',
    country: 'India',
    state: 'Karnataka',
    city : 'Dharwad'
}

const abhi_dets = {
    name: 'abhi',
    email: 'abhijo25@gmail.com',
    country: 'India',
    city : 'Dharwad'

}

const {city} = akhila_Dets;

console.log(city);

const {email : EmailAddress} = akhila_Dets;
console.log(EmailAddress);

const {state='KA'} = abhi_dets;
console.log(state);