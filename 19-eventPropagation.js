document.querySelector('button').addEventListener('click', function(e) {

    e.stopPropagation()
    console.log(e.target)
})