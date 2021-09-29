console.log("--------------Event Delegations------------------")

document.querySelector("#category").addEventListener('click',(e)=>{
    console.log(e.target.id)
    alert(`Clicked on ${e.target.id}`)
})

/* 

Memory : 

*/