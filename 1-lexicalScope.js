// Lexical Scope : An inner cuntion nested inside some parent function has access to all
// variables defined inside parent function


function bankRobbery () {
    
    const heros = ['Spiderman', 'Batman', 'Aquaman', 'Wolverine']

    function helpMe () {

        for (hero of heros){
            
            console.log(`Please help me ${hero.toUpperCase()}`)
        }
    }
    helpMe();
}

bankRobbery();


function grandParent () {
    
    var gpName = "Harry"
    console.log(`I am from GrandParent, ${gpName}`)
    // console.log(pName) you cannot access child elements in parent, 
    // The above console.log will give you an error UncaughtReference error
    function parent () {

        var pName = "John"

        console.log(`I am from Parent, ${pName}`)
        console.log(`I am from Parent, ${gpName}`)

        function child () {

            var childName = "Omegle"

            console.log(`I am from Child, ${childName}`)
            console.log(`I am from Child, ${pName}`)
            console.log(`I am from Child, ${gpName}`)
        }
        child()
    }
    parent ()
}
grandParent()
