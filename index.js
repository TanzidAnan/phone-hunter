const loadAllPhone = async() =>{
    console.log("All Phone");
    document.getElementById('spinner').style.display='none'

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=iphone`);
    const data =await res.json();
    console.log(data.data)

}
const handleSearch =() =>{
    // console.log('Data');
    document.getElementById('spinner').style.display='block'

    setTimeout(function (){
        loadAllPhone();
        
    },3000)
}