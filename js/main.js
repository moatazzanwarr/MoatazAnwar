let pc_nav = document.querySelector(".pc-nav");
let mobile_nav = document.querySelector(".mobile-nav");
let menue_bar = document.querySelector("#menu_bar");

menue_bar.addEventListener("click", () =>{
    mobile_nav.classList.toggle("flex");
})

// Loading Animatin
let loading = document.querySelector('#loading');
setTimeout(() => {
    loading.style.display = "none";
}, 3000)


// Scrolling Animation

window.addEventListener('scroll', () => {
    const element = document.querySelector(".animate");
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if(window.innerWidth < 1100){
        if (scrollPosition > 3150){
            element.style.transform = "translateY(0)";
            element.style.opacity = "1";
        }else{
            element.style.transform = "translateY(300px)";
            element.style.opacity = "0";
    
        }
    }else if(window.innerWidth > 1100){
        if (scrollPosition > 1850){
            element.style.transform = "translateY(0)";
            element.style.opacity = "1";
        }else{
            element.style.transform = "translateY(300px)";
            element.style.opacity = "0";
    
        }
    }
})