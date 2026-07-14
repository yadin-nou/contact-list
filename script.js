const slide = document.getElementById("slide");
const mobileLayout = document.getElementById("main");
const contactList = document.getElementById("contactlist");
const list = document.getElementById("displayContact");
const accordion = document.getElementById("accordionFlushExample");
const spinner = document.getElementById("spinner");
const dataList = document.getElementById("datalistOptions");
const searchNotFound = document.getElementById("searchNotFound");
const range = document.getElementById("range");
let globalData = [];
let searchData = [];
let reserveData = [];

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
  displayUser();
  reserveData = [...globalData];
};

async function getUser() {
  try {
    const response = await fetch("https://randomuser.me/api/?results=6");
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
  }
}

const displayUser = () => {
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
                              class="img-thumnail"
                              src="${img}"
                              alt=""
                            />
                            <span>
                              <h5>${first} ${last}</h5>
                              <span
                                >
                                ${streetNumber} ${streetName} ,
                                 ${city} , ${state}  
                                 ${postcode} ${country} 
                                 </span
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
                            class="img-thumnail-lg"
                            src="${img}"
                            alt=""
                          />
                          <div>
                            <i class="fa-solid fa-circle-user"></i> ${first} ${last}
                          </div>
                          <div>
                            <a href="tel:${phone}"><i class="fa-solid fa-phone"></i></a>
                            ${phone}
                          </div>
                          <div>
                            <a href="mailto:${email}"><i class="fa-solid fa-envelope"></i></a>
                            ${email}
                          </div>
                          <div>
                            <a href="https://www.google.com/maps?q=${user.location.coordinates.latitude},${user.location.coordinates.longitude}" target="_blank"
                              ><i class="fa-solid fa-location-dot"></i></a
                            >${streetNumber} ${streetName}
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
search.addEventListener("input", (e) => {
  onSearch(e);
});
search.addEventListener("keydown", (e) => {
  if (e.key === "Backspace" || e.key === "Delete") {
    // when user press on delete or backspace key,
    // call back function displayUSer and give all data back to global
    globalData = [...reserveData];
    displayUser();
    searchNotFound.hidden = true;
  }
});

const onSearch = (e) => {
  globalData = globalData.filter((user) => {
    return `${user.name.first} ${user.name.last}`
      .toLowerCase()
      .includes(e.target.value.toLowerCase());
  });
  // console.log(reserveData);
  if (search.value === "") {
    globalData = [...reserveData];
    searchNotFound.hidden = true;
  }
  //console.log(globalData.length);
  if (globalData.length === 0) {
    searchNotFound.hidden = false;
  }
  displayUser();
};

const onDeleteCharSearch = (e) => {};
