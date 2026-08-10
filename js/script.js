// Hide Preloader

window.addEventListener("load", function(){

    const preloader = document.getElementById("preloader");

    preloader.style.display = "none";

});

// Back to Top

window.addEventListener("scroll", function(){

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.boxShadow = "0 8px 20px rgba(0,0,0,.15)";

    }else{

        navbar.style.boxShadow = "none";

    }

});

// Back to Top Button

const topBtn = document.getElementById("topBtn");

topBtn.onclick = function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};