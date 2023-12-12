const header = document.querySelector("header");
const showPopUpBtn = document.querySelector(".btn");
const hideBtn = document.querySelector(".form-popup i");
const loginBtn = document.querySelectorAll(".form-box a");
const formBtn = document.querySelector(".form-popup");
const menuBtn = document.querySelector(".ri-menu-line");
const navBar = document.querySelector(".navbar")
const closeBtn = document.querySelector(".ri-close-fill");

// show  mobile menu
menuBtn.addEventListener("click", () =>{
    navBar.classList.add("show-menu");
});

// close menu
closeBtn.addEventListener("click", () => menuBtn.click());

window.addEventListener("scroll", (e) => {
    header.classList.toggle("active", window.scrollY > 0);
});

// show popup link
showPopUpBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup")
});

// Display login and signin code
hideBtn.addEventListener("click", () => showPopUpBtn.click());

// get method by switching through links
loginBtn.forEach(link => {
    link.addEventListener("click", () => {
        formBtn.classList[link.id === "signup-link" ? 'add' : 'remove']("show-signup");
    });
});

