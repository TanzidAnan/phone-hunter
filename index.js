const loadAllPhone = () =>{
    console.log("All Phone");
    document.getElementById('spinner').style.display='none'
}
const handleSearch =() =>{
    // console.log('Data');
    document.getElementById('spinner').style.display='block'

    setTimeout(function (){
        loadAllPhone();
        
    },3000)
}