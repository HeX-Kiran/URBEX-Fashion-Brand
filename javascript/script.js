//Add trigger class

let btn = document.querySelector(".btn-menu");

let header = document.querySelector("header");

btn.addEventListener("click",()=>{
    header.classList.toggle("trigger");
})

// Brand Name Scroll


let brandName = document.querySelector(".brand-name");

window.addEventListener("scroll",()=>{
    let value = window.scrollY;
    brandName.style.transform = "translateX(" + (value *0.5) + "px)";
})