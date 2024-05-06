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
    const element_1 = document.querySelector(".about-all");
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if(window.innerWidth < 1100){
        if (scrollPosition > 460){
            element_1.style.transform = "translateY(0)";
            element_1.style.opacity = "1";
        }else{
            element_1.style.transform = "translateY(900px)";
            element_1.style.opacity = "0";
    
        }
    }else if(window.innerWidth > 1100){
        if (scrollPosition > 340){
            element_1.style.transform = "translateY(0)";
            element_1.style.opacity = "1";
        }else{
            element_1.style.transform = "translateY(900px)";
            element_1.style.opacity = "0";
    
        }
    }else{
        return ''
    }
})

window.addEventListener('scroll', () => {
    const element_2 = document.querySelector(".services-all");
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if(window.innerWidth < 1100){
        if (scrollPosition > 1740){
            element_2.style.transform = "translateY(0)";
            element_2.style.opacity = "1";
        }else{
            element_2.style.transform = "translateY(900px)";
            element_2.style.opacity = "0";
    
        }
    }else if(window.innerWidth > 1100){
        if (scrollPosition > 1040){
            element_2.style.transform = "translateY(0)";
            element_2.style.opacity = "1";
        }else{
            element_2.style.transform = "translateY(900px)";
            element_2.style.opacity = "0";
    
        }
    }else{
        return ''
    }
})

window.addEventListener('scroll', () => {
    const element_3 = document.querySelector(".animate");
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if(window.innerWidth < 1100){
        if (scrollPosition > 3130){
            element_3.style.transform = "translateY(0)";
            element_3.style.opacity = "1";
        }else{
            element_3.style.transform = "translateY(900px)";
            element_3.style.opacity = "0";
    
        }
    }else if(window.innerWidth > 1100){
        if (scrollPosition > 1770){
            element_3.style.transform = "translateY(0)";
            element_3.style.opacity = "1";
        }else{
            element_3.style.transform = "translateY(900px)";
            element_3.style.opacity = "0";
    
        }
    }else{
        return ''
    }
})

window.addEventListener('scroll', () => {
    const element_4 = document.querySelector(".contact-all-pr");
    const scrollPosition = window.scrollY;
    console.log(scrollPosition);
    if(window.innerWidth < 1100){
        if (scrollPosition > 5550){
            element_4.style.transform = "translateY(0)";
            element_4.style.opacity = "1";
        }else{
            element_4.style.transform = "translateY(900px)";
            element_4.style.opacity = "0";
    
        }
    }else if(window.innerWidth > 1100){
        if (scrollPosition > 2440){
            element_4.style.transform = "translateY(0)";
            element_4.style.opacity = "1";
        }else{
            element_4.style.transform = "translateY(900px)";
            element_4.style.opacity = "0";
    
        }
    }else{
        return ''
    }
})