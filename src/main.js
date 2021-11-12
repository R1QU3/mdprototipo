import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

const menu = document.querySelector("#mobile-menu-container");

const closeMenu = document.querySelector("#close").addEventListener("click", () => {
          menu.style.display = "none"
});

const openMenu = document.querySelector("#hamburger").addEventListener("click", () => {
     menu.style.display = "block";
});

/* Slide */

let slideIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(carousel, 8000); 
}
