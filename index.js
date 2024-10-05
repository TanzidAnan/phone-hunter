const loadAllPhone = async(status,brandName) =>{
    console.log("All Phone");
    document.getElementById('spinner').style.display='none'

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName?brandName:'iphone'}`);
    const data =await res.json();
    if(status){
        displayAllPhone(data.data)
    }
    else{
        displayAllPhone(data.data.slice(0,6))
    }
    
    console.log(status)
}

const displayAllPhone =(phones) =>{
    console.log(phones)
}

const handleShowAll =() =>{
    loadAllPhone(true)
}


const handleSearch =() =>{
    // console.log('Data');
    document.getElementById('spinner').style.display='block';
    const searchText =document.getElementById('search-box').value;


    setTimeout(function (){
        loadAllPhone(false,searchText);
        
    },3000)
}

loadAllPhone()