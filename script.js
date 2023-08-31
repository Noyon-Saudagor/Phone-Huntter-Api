// load data from api 
const loadData = async (searchInputValue , isShowAll) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchInputValue}`)
    const data = await response.json()
    const phones = data.data
    displayPhones(phones, isShowAll)
}

// show search result to the main body of html 

const displayPhones = (phones, isShowAll) => {
    // loop throw the array and collect the data 
    const phonesContainer = document.getElementById('phone-container')
        phonesContainer.textContent = ""

        // conditional button enable 
        const showAllButton = document.getElementById ('show-all-btn')
        if (phones.length > 12 && !isShowAll) {
             // slice phone to show 12 phone at a time in a page 
            showAllButton.classList.remove('hidden')
        }
        else {
            showAllButton.classList.add('hidden')
        }

        if(!isShowAll){
            phones = phones.slice(0,12)
        }

       
    phones.forEach( (phone , isShowAll) => {
        // set the data on a div 
        const div = document.createElement ('div')
        div.classList = `card bg-base-100 shadow-xl pt-4`;
        div.innerHTML = `
        <figure>
        <img
          src="${phone.image} "
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${phone.phone_name} </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button onclick="showDeatils()" class="btn btn-primary">Show Details</button>
        </div>
      </div>
        `
        phonesContainer.appendChild(div)
    });
    toggleSpiner(false)
}

// search handel
const searchHandel = (isShowAll) => {
    toggleSpiner(true)
    const searchInput = document.getElementById('search-input')
    const searchValue = searchInput.value
    loadData(searchValue, isShowAll);
}
//  show all button 
const showAll = () => {
searchHandel(true)
}

// spiner or loader function 
const toggleSpiner = (isShow) => {
    const spiner = document.getElementById('loading-spiner')
    if (isShow) {
        spiner.classList.remove('hidden') 
    }
    else{
        spiner.classList.add('hidden')
    }
}

// show deatils function 
const showDeatils = () => {
    // console.log('button clicked')
    const section = document.getElementById('modal')
    const div = document.createElement('div')
    div.innerHTML = ` <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    <form method="dialog" class="modal-box">
      <h3 class="font-bold text-lg">Hello!</h3>
      <p class="py-4">Press ESC key or click the button below to close</p>
      <div class="modal-action">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </div>
    </form>
  </dialog>`
  section.appendChild(div);
  
}


loadData('iphone')