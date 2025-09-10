const loadAllPhons = async (status, searchText) => {
    console.log(searchText)
    document.getElementById("spinner").style.display = 'none'
    // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    // .then(res =>res.json())
    // .then(data =>console.log(data))
    // .catch((error) =>console.log(error))
   

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText ? searchText : 'iphone'}`)
    const data = await res.json();
    if (status) {
        displayAllPhone(data.data)
    }
    else {
        displayAllPhone(data.data.slice(0, 6))
    }

     const showAllButton= document.getElementById('showAllButton');
    if(data.data.length>6 && !status){
        showAllButton.style.display ='block'
    }
    else{
        showAllButton.style.display ='none'
    }


}


const displayAllPhone = (phones) => {
    // console.log(phones);
    const phonesContainer = document.getElementById('phones-container');
     phonesContainer.innerHTML = "";
    phones.forEach(phone => {
        // console.log(phone);
        const { brand, image, slug } = phone
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card bg-base-100 m-2 w-96 shadow-xl">
  <figure class="px-10 pt-10">
    <img
      src=${image}
      alt="phone"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${brand}</h2>
    <p>${slug}</p>
    <div class="card-actions">
      <button onclick="phoneDetails('${slug}')" class="btn bg-red-200">Show Details</button>
    </div>
  </div>
</div>
        `;
        phonesContainer.appendChild(div);
       
    });
}

const handleShowAll = () => {
    document.getElementById("showAllButton").style.display = "none"; 
    loadAllPhons(true,document.getElementById('search-box').value)
}


const handleSearch = () => {
    document.getElementById("spinner").style.display = 'block';
    const searchText = document.getElementById('search-box').value;
    setTimeout(function () {
        loadAllPhons(false, searchText)
    }, 3000)
}

const phoneDetails = async (slug) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phone/${slug}`);
    const data = await response.json()
    console.log(data.data)
    const {brand,image,name} =data.data;


    const modalContainer = document.getElementById('modal-container');
    modalContainer.innerHTML = `
     <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
                    <div class="modal-box">
                    <img src="${image}">
                        <h3 class="text-lg font-bold">${name}</h3>
                        <p class="py-4">Press ESC key or click the button below to close</p>
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

loadAllPhons(false, 'iphone')