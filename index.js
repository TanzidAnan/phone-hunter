const loadAllPhone = async (status, brandName) => {
    console.log("All Phone");
    document.getElementById('spinner').style.display = 'none'

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName ? brandName : 'iphone'}`);
    const data = await res.json();
    if (status) {
        displayAllPhone(data.data)
    }
    else {
        displayAllPhone(data.data.slice(0, 6))
    }

    console.log(status)
}
const data = {
    "brand": "Apple ",
    "phone_name": "iPhone 12",
    "slug": "apple_iphone_12-10509",
    "image": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg"
}

const displayAllPhone = (phones) => {
    
    const phoneContainer = document.getElementById('phones-container');
    phoneContainer.innerHTML =' ';
    phones.forEach(phone => {
        // console.log(phone)
        const {image,phone_name,slug} =phone
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card flex bg-base-100 w-96 shadow-xl mt-4">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${phone_name}</h2>
    <p>${slug}</p>
    <div class="card-actions">
      <button onclick="phoneDeteils('${slug}')" class="btn btn-primary">Show Deteles</button>
    </div>
  </div>
</div>
        
        `
        phoneContainer.appendChild(div)
    })
}

const handleShowAll = () => {
    loadAllPhone(true)
}


const handleSearch = () => {
    // console.log('Data');
    document.getElementById('spinnerphones').style.display = 'block';
    const searchText = document.getElementById('search-box').value;


    setTimeout(function () {
        loadAllPhone(false, searchText);

    }, 3000)
}

const phoneDeteils = async(slug) =>{
    const res =await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
    const data =await res.json();
    console.log(data.data);
    const modalContainer =document.getElementById('modal-container');
    modalContainer.innerHTML =`
    <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="text-lg font-bold">${data.data.mainFeatures.chipSet}</h3>
    <p class="py-4">${data.data.releaseDate}</p>
    <p class="py-1">${data.data.name}</p>
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>
    `
    my_modal_5.showModal()
}

loadAllPhone(false, "iphone");
handleShowAll()