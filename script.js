
const drawer = document.querySelector(".menu-container");
const menuButton = document.querySelector(".menu-box");
let isOpen = false;

menuButton.addEventListener("click", () => {
    if(!isOpen){
        menuButton.classList.add("open");
        drawer.classList.add("open");
        isOpen = true;
    }else{
        menuButton.classList.remove("open");
        drawer.classList.remove("open");   
        isOpen = false;
    }
})

document.querySelectorAll(".menu-container").forEach(n => n.addEventListener("click", () => {
    menuButton.classList.remove("open");
    drawer.classList.remove("open");  
    isOpen = false;
}))
