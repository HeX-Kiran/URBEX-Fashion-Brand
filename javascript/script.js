//Add trigger class

let btn = document.querySelector(".btn-menu");

let navLinks = document.querySelectorAll(".main-link");

let header = document.querySelector("header");

// Opens nav bar
btn.addEventListener("click",()=>{
    header.classList.toggle("trigger");
})

// When a link is clicked nav bar is closed
navLinks.forEach((val)=>{
    val.addEventListener("click",()=>{
        header.classList.remove("trigger");
    })
    
})
// Brand Name Scroll


let brandName = document.querySelector(".brand-name");

window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    brandName.style.transform = "translateX(" + (value *0.5) + "px)";
})