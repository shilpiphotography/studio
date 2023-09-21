//light box responce
lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    disableScrolling: true,
  });
  


//side show
const images = document.querySelectorAll('.header img');
let index = 0;

function showNextImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
}

setInterval(showNextImage, 4000); // Change image every 5 seconds




// Your existing JavaScript code for the sticky navigation bar


//nav bar skcky
const body = document.querySelector("body");
const navbar = document.querySelector(".navbar");
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
menuBtn.onclick = () => {
    navbar.classList.add("show");
    menuBtn.classList.add("hide");
    body.classList.add("disabled");
}
cancelBtn.onclick = () => {
    body.classList.remove("disabled");
    navbar.classList.remove("show");
    menuBtn.classList.remove("hide");
}
window.onscroll = () => {
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


/* Lightbox */
var lightbox = new SimpleLightbox('.gallery a', { /* options */ });


