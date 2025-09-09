const loadAllPhons = async(status,searchText) => {
    console.log(searchText)
    document.getElementById("spinner").style.display = 'none'
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res =>res.json())
    // .then(data =>console.log(data))
    // .catch((error) =>console.log(error))

    const res =await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText? searchText:'iphone'}`)
    const data =await res.json();
    if(status){
        displayAllPhone(data.data)
    }
    else{
        displayAllPhone(data.data.slice(0,6))
    }
    

}


const displayAllPhone=(phones) =>{
    console.log(phones)
}

const handleShowAll=() =>{
    console.log(5454)
    loadAllPhons(true)
}


const handleSearch = () => {
    document.getElementById("spinner").style.display = 'block';
    const searchText =document.getElementById('search-box').value;
    setTimeout(function () {
        loadAllPhons(false,searchText)
    }, 3000)
}

loadAllPhons(false,'iphone')