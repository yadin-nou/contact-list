const slide = document.getElementById("slide");
const mobileLayout = document.getElementById("main");
const contactList = document.getElementById("contactlist");
const list = document.getElementById("displayContact");
const accordion = document.getElementById("accordionFlushExample");
const spinner = document.getElementById("spinner");
let globalData = [];

const slideUnlock = () => {
  slide.remove(0);
  //   slide.setAttribute("hidden", true);
  mobileLayout.classList.add("contact");
  contactList.removeAttribute("hidden");
};

const showContact = () => {
  //alert("show content");
  mobileLayout.classList.remove("contact");
  contactList.setAttribute("hidden", true);
  list.classList.remove("non-display");
  //console.log(getUser());
  displayUser();
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

const displayUser = async () => {
  //   obj = [
  //     {
  //       gender: "male",
  //       name: {
  //         title: "Mr",
  //         first: "Petko",
  //         last: "Srećković",
  //       },
  //       location: {
  //         street: {
  //           number: 5368,
  //           name: "Mramoračka",
  //         },
  //         city: "Ćićevac",
  //         state: "Pčinja",
  //         country: "Serbia",
  //         postcode: 25142,
  //         coordinates: {
  //           latitude: "56.9262",
  //           longitude: "-147.8921",
  //         },
  //         timezone: {
  //           offset: "-4:00",
  //           description: "Atlantic Time (Canada), Caracas, La Paz",
  //         },
  //       },
  //       email: "petko.sreckovic@example.com",
  //       login: {
  //         uuid: "9b4893a2-199b-411e-8ed7-cedc3639c4f7",
  //         username: "tinykoala808",
  //         password: "texas",
  //         salt: "fKKRfg5W",
  //         md5: "1940f53267716dc419434a9846276d34",
  //         sha1: "1cba61c94a28fcbe10f4160df13123b0b4184e50",
  //         sha256:
  //           "ffd05030a13941834bd27e46fc3f9590bae079260ac71dec9aed32ecb2842096",
  //       },
  //       dob: {
  //         date: "1997-09-03T16:37:16.418Z",
  //         age: 28,
  //       },
  //       registered: {
  //         date: "2019-08-03T19:44:08.891Z",
  //         age: 6,
  //       },
  //       phone: "013-2572-946",
  //       cell: "062-5490-269",
  //       id: {
  //         name: "SID",
  //         value: "014614110",
  //       },
  //       picture: {
  //         large: "https://randomuser.me/api/portraits/men/80.jpg",
  //         medium: "https://randomuser.me/api/portraits/med/men/80.jpg",
  //         thumbnail: "https://randomuser.me/api/portraits/thumb/men/80.jpg",
  //       },
  //       nat: "RS",
  //     },
  //     {
  //       gender: "male",
  //       name: {
  //         title: "Mr",
  //         first: "Zayan",
  //         last: "Bhardwaj",
  //       },
  //       location: {
  //         street: {
  //           number: 3370,
  //           name: "Coaker's Walk",
  //         },
  //         city: "Tiruppur",
  //         state: "Nagaland",
  //         country: "India",
  //         postcode: 94623,
  //         coordinates: {
  //           latitude: "28.4614",
  //           longitude: "-107.2676",
  //         },
  //         timezone: {
  //           offset: "-11:00",
  //           description: "Midway Island, Samoa",
  //         },
  //       },
  //       email: "zayan.bhardwaj@example.com",
  //       login: {
  //         uuid: "86f04af0-26a2-4713-983f-2153fbf9ec2b",
  //         username: "crazyrabbit754",
  //         password: "1993",
  //         salt: "J3XiShLE",
  //         md5: "dde434fa4dce4a6abe33b59989f230fc",
  //         sha1: "b52c11c63a5458d26821d5248d93972e6c79b2a4",
  //         sha256:
  //           "83e9b16f3ab1930407924fae1e234eaaf7f8e5bd9d807e18715abf87127ed08b",
  //       },
  //       dob: {
  //         date: "1946-09-19T03:02:48.648Z",
  //         age: 79,
  //       },
  //       registered: {
  //         date: "2018-10-05T09:33:13.898Z",
  //         age: 7,
  //       },
  //       phone: "9513231381",
  //       cell: "8223840222",
  //       id: {
  //         name: "UIDAI",
  //         value: "164052864712",
  //       },
  //       picture: {
  //         large: "https://randomuser.me/api/portraits/men/83.jpg",
  //         medium: "https://randomuser.me/api/portraits/med/men/83.jpg",
  //         thumbnail: "https://randomuser.me/api/portraits/thumb/men/83.jpg",
  //       },
  //       nat: "IN",
  //     },
  //     {
  //       gender: "female",
  //       name: {
  //         title: "Ms",
  //         first: "Ömür",
  //         last: "Keseroğlu",
  //       },
  //       location: {
  //         street: {
  //           number: 2715,
  //           name: "Kushimoto Sk",
  //         },
  //         city: "Iğdır",
  //         state: "Yozgat",
  //         country: "Turkey",
  //         postcode: 39620,
  //         coordinates: {
  //           latitude: "-69.4784",
  //           longitude: "36.3567",
  //         },
  //         timezone: {
  //           offset: "-12:00",
  //           description: "Eniwetok, Kwajalein",
  //         },
  //       },
  //       email: "omur.keseroglu@example.com",
  //       login: {
  //         uuid: "704cb0dd-d825-4443-9d2a-346d604431a7",
  //         username: "lazyfrog797",
  //         password: "mone",
  //         salt: "UUAYULmT",
  //         md5: "b9f90cf3d4548b54a75d4b18038aabe1",
  //         sha1: "3eed8bec9ec570421de93731b78319f8f4224527",
  //         sha256:
  //           "97531463bca77164dccf4da206ae714bab1083140e3fd6bcb275b40026ce4dd4",
  //       },
  //       dob: {
  //         date: "1974-03-15T09:31:34.956Z",
  //         age: 52,
  //       },
  //       registered: {
  //         date: "2021-12-22T07:45:32.433Z",
  //         age: 4,
  //       },
  //       phone: "(006)-273-1758",
  //       cell: "(495)-181-6677",
  //       id: {
  //         name: "",
  //         value: null,
  //       },
  //       picture: {
  //         large: "https://randomuser.me/api/portraits/women/60.jpg",
  //         medium: "https://randomuser.me/api/portraits/med/women/60.jpg",
  //         thumbnail: "https://randomuser.me/api/portraits/thumb/women/60.jpg",
  //       },
  //       nat: "TR",
  //     },
  //     {
  //       gender: "female",
  //       name: {
  //         title: "Miss",
  //         first: "Estênia",
  //         last: "Monteiro",
  //       },
  //       location: {
  //         street: {
  //           number: 3631,
  //           name: "Rua Santo Antônio ",
  //         },
  //         city: "Ribeirão Pires",
  //         state: "Ceará",
  //         country: "Brazil",
  //         postcode: 52330,
  //         coordinates: {
  //           latitude: "-86.0907",
  //           longitude: "17.9189",
  //         },
  //         timezone: {
  //           offset: "-7:00",
  //           description: "Mountain Time (US & Canada)",
  //         },
  //       },
  //       email: "estenia.monteiro@example.com",
  //       login: {
  //         uuid: "4d97c24e-8d7c-4043-bd5b-c6cc93b985c8",
  //         username: "sadswan693",
  //         password: "frozen",
  //         salt: "yb3WeI6R",
  //         md5: "0e15c60238b31b5d1aab155fb18cb6f3",
  //         sha1: "223a325c237aebab2fd769fa94f153ee625abffd",
  //         sha256:
  //           "64e0edb9ef4300590d8a00cbf2268969809fa82e863592151e80aa8789da0910",
  //       },
  //       dob: {
  //         date: "1979-08-07T17:24:39.818Z",
  //         age: 46,
  //       },
  //       registered: {
  //         date: "2013-04-23T13:45:11.659Z",
  //         age: 13,
  //       },
  //       phone: "(58) 6708-7318",
  //       cell: "(47) 7590-8421",
  //       id: {
  //         name: "CPF",
  //         value: "184.907.347-69",
  //       },
  //       picture: {
  //         large: "https://randomuser.me/api/portraits/women/96.jpg",
  //         medium: "https://randomuser.me/api/portraits/med/women/96.jpg",
  //         thumbnail: "https://randomuser.me/api/portraits/thumb/women/96.jpg",
  //       },
  //       nat: "BR",
  //     },
  //     {
  //       gender: "male",
  //       name: {
  //         title: "Mr",
  //         first: "Logan",
  //         last: "Harcourt",
  //       },
  //       location: {
  //         street: {
  //           number: 5712,
  //           name: "Dundas Rd",
  //         },
  //         city: "Kingston",
  //         state: "Saskatchewan",
  //         country: "Canada",
  //         postcode: "L1Y 8P5",
  //         coordinates: {
  //           latitude: "86.2723",
  //           longitude: "45.3391",
  //         },
  //         timezone: {
  //           offset: "-6:00",
  //           description: "Central Time (US & Canada), Mexico City",
  //         },
  //       },
  //       email: "logan.harcourt@example.com",
  //       login: {
  //         uuid: "1194b53b-8d7e-482d-baab-b1849135ab37",
  //         username: "ticklishtiger605",
  //         password: "sssss",
  //         salt: "oJVRN28j",
  //         md5: "8f657347e233da1055a0f6d42de99e31",
  //         sha1: "fc2886c525913040ed730dc8fa5203afbfe5a2da",
  //         sha256:
  //           "88d28cd4cacbd94a79da581f97a4974e788d46a739732884002facd4ef226dd2",
  //       },
  //       dob: {
  //         date: "1978-05-09T04:31:45.587Z",
  //         age: 48,
  //       },
  //       registered: {
  //         date: "2011-03-22T07:20:12.202Z",
  //         age: 15,
  //       },
  //       phone: "M16 H77-4274",
  //       cell: "Q73 W06-5805",
  //       id: {
  //         name: "SIN",
  //         value: "866022106",
  //       },
  //       picture: {
  //         large: "https://randomuser.me/api/portraits/men/14.jpg",
  //         medium: "https://randomuser.me/api/portraits/med/men/14.jpg",
  //         thumbnail: "https://randomuser.me/api/portraits/thumb/men/14.jpg",
  //       },
  //       nat: "CA",
  //     },
  //     {
  //       gender: "female",
  //       name: {
  //         title: "Miss",
  //         first: "Johanne",
  //         last: "Petersen",
  //       },
  //       location: {
  //         street: {
  //           number: 8237,
  //           name: "Kløvermarken",
  //         },
  //         city: "Juelsminde",
  //         state: "Danmark",
  //         country: "Denmark",
  //         postcode: 84942,
  //         coordinates: {
  //           latitude: "-18.5800",
  //           longitude: "-169.7459",
  //         },
  //         timezone: {
  //           offset: "+3:00",
  //           description: "Baghdad, Riyadh, Moscow, St. Petersburg",
  //         },
  //       },
  //       email: "johanne.petersen@example.com",
  //       login: {
  //         uuid: "ec18eb5b-da98-4f8c-ac0e-c52d6cb9f0d7",
  //         username: "organiccat287",
  //         password: "adult",
  //         salt: "4Q4bOghI",
  //         md5: "541b26a07f956714c22a6163fb7351bb",
  //         sha1: "9e0287aed096a57a7e26d578a05bc67e896e9cb2",
  //         sha256:
  //           "1d0e6e212c45c874e48d23bd38c2442d09f0d07ef058a1a14cbeecf752eeaee4",
  //       },
  //       dob: {
  //         date: "1998-07-03T00:57:46.654Z",
  //         age: 28,
  //       },
  //       registered: {
  //         date: "2007-07-06T18:17:11.777Z",
  //         age: 19,
  //       },
  //       phone: "64092082",
  //       cell: "57141565",
  //       id: {
  //         name: "CPR",
  //         value: "020798-3108",
  //       },
  //       picture: {
  //         large: "https://randomuser.me/api/portraits/women/92.jpg",
  //         medium: "https://randomuser.me/api/portraits/med/women/92.jpg",
  //         thumbnail: "https://randomuser.me/api/portraits/thumb/women/92.jpg",
  //       },
  //       nat: "DK",
  //     },
  //     {
  //       gender: "male",
  //       name: {
  //         title: "Mr",
  //         first: "Arttu",
  //         last: "Leppo",
  //       },
  //       location: {
  //         street: {
  //           number: 5277,
  //           name: "Pyynikintie",
  //         },
  //         city: "Oulu",
  //         state: "Finland Proper",
  //         country: "Finland",
  //         postcode: 54088,
  //         coordinates: {
  //           latitude: "-42.0940",
  //           longitude: "-138.0273",
  //         },
  //         timezone: {
  //           offset: "+8:00",
  //           description: "Beijing, Perth, Singapore, Hong Kong",
  //         },
  //       },
  //       email: "arttu.leppo@example.com",
  //       login: {
  //         uuid: "2d7f0b67-caf1-4586-b978-e739cbadf2dd",
  //         username: "silverswan906",
  //         password: "laddie",
  //         salt: "LxuvE5Uf",
  //         md5: "abdbae907fcd592110bdce47c9bd5c17",
  //         sha1: "23fef555d5ffd404baf8f061824f8568e989243e",
  //         sha256:
  //           "ec08aea1976d5c39bbb0e3d665103de61dd87dd6c70089586baa77a201d028ae",
  //       },
  //       dob: {
  //         date: "1975-08-11T18:54:04.389Z",
  //         age: 50,
  //       },
  //       registered: {
  //         date: "2017-06-29T20:22:44.215Z",
  //         age: 9,
  //       },
  //       phone: "04-105-901",
  //       cell: "048-653-16-02",
  //       id: {
  //         name: "HETU",
  //         value: "NaNNA447undefined",
  //       },
  //       picture: {
  //         large: "https://randomuser.me/api/portraits/men/79.jpg",
  //         medium: "https://randomuser.me/api/portraits/med/men/79.jpg",
  //         thumbnail: "https://randomuser.me/api/portraits/thumb/men/79.jpg",
  //       },
  //       nat: "FI",
  //     },
  //     {
  //       gender: "female",
  //       name: {
  //         title: "Ms",
  //         first: "Catherine",
  //         last: "Morrison",
  //       },
  //       location: {
  //         street: {
  //           number: 3474,
  //           name: "York Road",
  //         },
  //         city: "Sheffield",
  //         state: "Staffordshire",
  //         country: "United Kingdom",
  //         postcode: "F75 3FE",
  //         coordinates: {
  //           latitude: "75.3728",
  //           longitude: "22.2991",
  //         },
  //         timezone: {
  //           offset: "+1:00",
  //           description: "Brussels, Copenhagen, Madrid, Paris",
  //         },
  //       },
  //       email: "catherine.morrison@example.com",
  //       login: {
  //         uuid: "97272a4c-c74b-469c-9d09-9d1916c8dc74",
  //         username: "goldengorilla563",
  //         password: "iceman",
  //         salt: "2XnWZtYu",
  //         md5: "8d403b683d0b12cf468762a2d9ac6769",
  //         sha1: "5960e620deec522f10f9fd17d945fe1e5ef34b16",
  //         sha256:
  //           "0f2cbf1698426bcb524ff40fd6ef78a58545238a548c8ce3aa2e8f97cb77f622",
  //       },
  //       dob: {
  //         date: "1974-07-03T12:41:47.111Z",
  //         age: 52,
  //       },
  //       registered: {
  //         date: "2008-05-20T18:16:00.089Z",
  //         age: 18,
  //       },
  //       phone: "015395 71011",
  //       cell: "07401 632924",
  //       id: {
  //         name: "NINO",
  //         value: "NB 58 32 62 I",
  //       },
  //       picture: {
  //         large: "https://randomuser.me/api/portraits/women/35.jpg",
  //         medium: "https://randomuser.me/api/portraits/med/women/35.jpg",
  //         thumbnail: "https://randomuser.me/api/portraits/thumb/women/35.jpg",
  //       },
  //       nat: "GB",
  //     },
  //     {
  //       gender: "female",
  //       name: {
  //         title: "Miss",
  //         first: "Thea",
  //         last: "Mortensen",
  //       },
  //       location: {
  //         street: {
  //           number: 2773,
  //           name: "Kildemarken",
  //         },
  //         city: "Hurup Thy",
  //         state: "Nordjylland",
  //         country: "Denmark",
  //         postcode: 44099,
  //         coordinates: {
  //           latitude: "-44.5874",
  //           longitude: "5.6841",
  //         },
  //         timezone: {
  //           offset: "-5:00",
  //           description: "Eastern Time (US & Canada), Bogota, Lima",
  //         },
  //       },
  //       email: "thea.mortensen@example.com",
  //       login: {
  //         uuid: "6ff92d0f-5cdd-4e4c-a075-c193c376b9a9",
  //         username: "bigostrich419",
  //         password: "clouds",
  //         salt: "qpRcwjjP",
  //         md5: "adf8b90300926973028839c52c14fd18",
  //         sha1: "8ae5daeeaf228bba9422d5202cc7c7b5dd4920d4",
  //         sha256:
  //           "379973909cb9c5c243e79122c9525a4ba0f1c1bb63d6197897252ab0e912eccb",
  //       },
  //       dob: {
  //         date: "1982-11-05T03:43:39.416Z",
  //         age: 43,
  //       },
  //       registered: {
  //         date: "2008-01-21T19:20:32.986Z",
  //         age: 18,
  //       },
  //       phone: "20838650",
  //       cell: "37990937",
  //       id: {
  //         name: "CPR",
  //         value: "041182-7241",
  //       },
  //       picture: {
  //         large: "https://randomuser.me/api/portraits/women/82.jpg",
  //         medium: "https://randomuser.me/api/portraits/med/women/82.jpg",
  //         thumbnail: "https://randomuser.me/api/portraits/thumb/women/82.jpg",
  //       },
  //       nat: "DK",
  //     },
  //     {
  //       gender: "female",
  //       name: {
  //         title: "Ms",
  //         first: "Assunção",
  //         last: "Viana",
  //       },
  //       location: {
  //         street: {
  //           number: 8299,
  //           name: "Rua São Sebastiao ",
  //         },
  //         city: "Araguaína",
  //         state: "Pernambuco",
  //         country: "Brazil",
  //         postcode: 69541,
  //         coordinates: {
  //           latitude: "-75.7826",
  //           longitude: "149.6452",
  //         },
  //         timezone: {
  //           offset: "-10:00",
  //           description: "Hawaii",
  //         },
  //       },
  //       email: "assuncao.viana@example.com",
  //       login: {
  //         uuid: "896149dc-fccc-4a55-ba5b-d748e67eac1d",
  //         username: "bluefish537",
  //         password: "bigbob",
  //         salt: "ohVT1GfD",
  //         md5: "17b8d82116a63daa288bd268197d7b61",
  //         sha1: "a08212678824ee5039f2d9c1de1cd33a01c27980",
  //         sha256:
  //           "6536ea6a5d2ba0f3496ea909c68c48dbb6e930bdb03dac907497d4fdd451497b",
  //       },
  //       dob: {
  //         date: "1973-07-07T09:51:22.344Z",
  //         age: 53,
  //       },
  //       registered: {
  //         date: "2011-07-27T16:23:33.780Z",
  //         age: 14,
  //       },
  //       phone: "(99) 7850-7250",
  //       cell: "(84) 5519-7059",
  //       id: {
  //         name: "CPF",
  //         value: "754.638.415-12",
  //       },
  //       picture: {
  //         large: "https://randomuser.me/api/portraits/women/33.jpg",
  //         medium: "https://randomuser.me/api/portraits/med/women/33.jpg",
  //         thumbnail: "https://randomuser.me/api/portraits/thumb/women/33.jpg",
  //       },
  //       nat: "BR",
  //     },
  //   ];

  globalData = await getUser();
  spinner.hidden = true;
  //   console.log("out ", obj);
  //   return;
  let str = "";
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
  accordion.innerHTML = str;
  // console.log(str);
};
