// Load info...
const loadPhone = async (phoneText) =>{
          const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${phoneText}`);
          const data = await res.json();
          let phones = data.data;
          // console.log(phone);
          displayPhone(phones);
}

// Display Phone
const displayPhone = phones =>{
          // console.log(phone);
          const phoneContainer = document.getElementById('phone-container');        
          // clear container before add phone
          phoneContainer.innerText = '';
          // If phone are more than 12
          const showAllBtn = document.getElementById("show-all-btn");
          if (phones.length > 12) {
               showAllBtn.classList.remove("hidden");   
          }
          else{
               showAllBtn.classList.add("hidden");
          }
          // Slice phones
          phones = phones.slice(0,12);

          phones.forEach(phone => {
          //        console.log(phone);
                 const div = document.createElement('div');
                 div.classList = `card pt-8 bg-white shadow-xl`;
                 div.innerHTML =`
                 <figure><img src=${phone.image} /></figure>
                 <div class="card-body">
                   <h2 class="card-title">${phone.phone_name}</h2>
                   <p>If a dog chews shoes whose shoes does he choose?</p>
                   <div class="card-actions justify-center">
                     <button onclick="showDetails('${phone.slug}')" class="btn btn-primary">Show Details</button>
                   </div>
                 </div>
                 `
                 phoneContainer.appendChild(div);
          });
          // hide spinner
          loadingSpinner(false);
}

// Search Button
const searchButton = () =>{
          // show spinner
          loadingSpinner(true);

          const input = document.getElementById("inputBur");
          const inputText = input.value;
          // console.log(inputText);
          loadPhone(inputText);
}

// Loading Spinner
const loadingSpinner =(isLoading) =>{
          const loadingDiv = document.getElementById("loading");
          if (isLoading) {
                 loadingDiv.classList.remove("hidden");    
          }
          else{
                 loadingDiv.classList.add("hidden");    
          }
}

// Load Phone Details
const showDetails = async (id) =>{
        // console.log(id);
        const res = await fetch(` https://openapi.programming-hero.com/api/phone/${id}`);
        const data = await res.json();
        const phoneDetails = data.data;
        //console.log(phoneDetails);
        showPhoneDetails(phoneDetails);
}

// Show Phone Details
const showPhoneDetails = (phoneDetails) =>{
          console.log(phoneDetails);
          
          // show the modal
          my_modal_5.showModal();
}