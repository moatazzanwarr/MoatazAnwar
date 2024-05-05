let pc_nav = document.querySelector(".pc-nav");
let mobile_nav = document.querySelector(".mobile-nav");
let menue_bar = document.querySelector("#menu_bar");

menue_bar.addEventListener("click", () =>{
    mobile_nav.classList.toggle("flex");
})