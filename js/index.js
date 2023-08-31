// data load
const loadDataFromApi = async (searchValue) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/phones?search=${searchValue} `
  );
  const data = await res.json();
  const phones = data.data;
//   console.log(phones);
  displayPhones(phones);
};
// show data from api
const displayPhones = (phones) => {
  const phoneContainer = document.getElementById("phone-container");
  phoneContainer.textContent = "";
  console.log(phones)
  if (phones.length > 12) {
    const showAllButton = document.getElementById('show-all-btn')
    showAllButton.classList.remove('hideen')
  }
  else{
    showAllButton.classList.add('hidden')
  }
  phones = phones.slice(0,12)
  phones.forEach((phone) => {
    const div = document.createElement("div");
    div.classList = `card bg-base-100 shadow-xl pt-4`;
    div.innerHTML = `<figure>
        <img
          src="${phone.image} "
        />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${phone.phone_name} </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary">Show Details</button>
        </div>
      </div>
        `;
    phoneContainer.appendChild(div);
  });
};
// search button handler
const handelSearch = () => {
  const searchInput = document.getElementById("search-input");
  const searchValue = searchInput.value;
//   console.log(searchValue);
  loadDataFromApi(searchValue);
};
