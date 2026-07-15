const slide = document.getElementById("slide");
const mobileLayout = document.getElementById("main");
const contactList = document.getElementById("contactlist");
const list = document.getElementById("displayContact");
const accordion = document.getElementById("accordionFlushExample");
const spinner = document.getElementById("spinner");
const dataList = document.getElementById("datalistOptions");
// const searchNotFound = document.getElementById("searchNotFound");
const range = document.getElementById("range");
let globalData = [];
let searchData = [];
//let reserveData = [];

range.addEventListener("change", (e) => {
  if (e.target.value === "100") {
    slide.remove(0);
    //   slide.setAttribute("hidden", true);
    mobileLayout.classList.add("contact");
    contactList.removeAttribute("hidden");
  } else {
    range.value = 0;
  }
});

// const slideUnlock = () => {
//   slide.remove(0);
//   //   slide.setAttribute("hidden", true);
//   mobileLayout.classList.add("contact");
//   contactList.removeAttribute("hidden");
// };

const showContact = async () => {
  //alert("show content");
  mobileLayout.classList.remove("contact");
  contactList.setAttribute("hidden", true);
  list.classList.remove("non-display");
  //console.log(getUser());
  globalData = await getUser();
  spinner.hidden = true;
  displayUser(globalData);
  // reserveData = [...globalData];
};

async function getUser() {
  try {
    //fetch data, if you await, fucntion have to be async
    const response = await fetch("https://randomuser.me/api/?results=6");
    //convert to json and assing to data
    const data = await response.json();
    //recived data now
    return data.results;
  } catch (error) {
    console.error(error);
  }
  // OR
  //fetch the user without async and await
  //promise method
  // fetch("https://randomuser.me/api/?results=6")
  //   .then((response) => {
  //     //this return to data below
  //     return response.json();
  //   })
  //   .then((data) => {
  //     return data;
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
}

const displayUser = (globalData) => {
  //  globalData = await getUser();
  //  spinner.hidden = true;

  let str = "";
  let dtl = "";
  let totalContact = "";
  globalData.map((user, index) => {
    const img = user.picture.large;
    const first = user.name.first;
    const last = user.name.last;
    const streetNumber = user.location.street.number;
    const streetName = user.location.street.name;
    const city = user.location.city;
    const state = user.location.state;
    const postcode = user.location.postcode;
    const country = user.location.country;
    const email = user.email;
    const phone = user.phone;

    // search in data list
    dtl += `<option value="${first} ${last}"></option>`;

    // display
    str += `<div class="accordion-item">
    
                      <h2 class="accordion-header">
                        <button
                          class="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#flush-collapse${index}"
                          aria-expanded="false"
                          aria-controls="flush-collapse${index}"
                        >
                          <span
                            class="user d-flex justify-content-between gap-3"
                          >
                            <img
                              class="rounded-circle"
                              src="${img}"
                              alt=""
                            />
                            <span>
                              <h5>${first} ${last}</h5>
                              <small
                                >
                                ${streetNumber} ${streetName} ,
                                 ${city} , ${state}  
                                 ${postcode} ${country} 
                                 </small
                              >
                            </span>
                          </span>
                        </button>
                      </h2>
                      <div
                        id="flush-collapse${index}"
                        class="accordion-collapse collapse"
                        data-bs-parent="#accordionFlushExample"
                      >
                        <div
                          class="accordion-body d-flex flex-column justify-content-center align-items-start "
                        >
                          <img
                            class="rounded-circle align-self-center"
                            src="${img}"
                            alt=""
                          />
                          <div class="fw-bolder">
                            <i class="fa-solid fa-circle-user"></i> ${first} ${last}
                          </div>
                          <div>
                            <a href="tel:${phone}"><i class="fa-solid fa-phone"></i>
                            ${phone}</a>
                          </div>
                          <div>
                            <a href="mailto:${email}"><i class="fa-solid fa-envelope"></i>
                            ${email}</a>
                          <div>
                            <a href="https://www.google.com/maps/place/${streetName}+St,+${city}+${state}/" target="_blank"
                              ><i class="fa-solid fa-location-dot"></i>
                            ${streetNumber} ${streetName}</a>
                          </div>
                        </div>
                      </div>
                    </div>`;
  });
  totalContact = `<div class="bg-white text-dark fs-3">${globalData.length} ${globalData.length > 1 ? "Contacts" : "Contact"} </div>`;
  accordion.innerHTML = totalContact + str;
  dataList.innerHTML = dtl;
  // console.log(str);
};

const search = document.getElementById("txt-contactlist");
search.addEventListener("keyup", (e) => {
  onSearch(e);
});
// search.addEventListener("keydown", (e) => {
//   if (e.key === "Backspace" || e.key === "Delete") {
//     // when user press on delete or backspace key,
//     // call back function displayUSer and give all data back to global
//     globalData = [...reserveData];
//     displayUser();
//     searchNotFound.hidden = true;
//   }
// });

const onSearch = (e) => {
  searchData = globalData.filter((user) => {
    return `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
  });
  // console.log(reserveData);
  // if (search.value === "") {
  //   globalData = [...reserveData];
  //   searchNotFound.hidden = true;
  // }
  //console.log(globalData.length);
  // if (searchData.length === "") {
  //   searchNotFound.hidden = false;
  // }
  displayUser(searchData);
};
