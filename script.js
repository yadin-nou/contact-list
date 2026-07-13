const slide = document.getElementById("slide");
const mobileLayout = document.getElementById("main");
const contactList = document.getElementById("contactlist");
const list = document.getElementById("list");

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
  list.removeAttribute("hidden");
};
