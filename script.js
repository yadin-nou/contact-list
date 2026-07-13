const slide = document.getElementById("slide");
const mobileLayout = document.getElementById("main");
const contactList = document.getElementById("contactlist");
const slideUnlock = () => {
  slide.remove(0);
  mobileLayout.classList.add("active");
  contactList.classList.remove("non-display");
};

const showContact = () => {
  alert("show content");
};
