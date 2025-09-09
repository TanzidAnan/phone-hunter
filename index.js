const loadAllPhons = () => {
    console.log('all Phone')
       document.getElementById("spinner").style.display='none'
}

const handleSearch = () => {
    document.getElementById("spinner").style.display='block'
    console.log(6656565);
    setTimeout(function () {
        loadAllPhons()
    }, 3000)
}