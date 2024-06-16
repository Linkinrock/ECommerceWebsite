let slideIdx = 1;
let autoplay;

function changeSlide(ctrl) {
    showSlides(slideIdx + ctrl);
}

function showSlides(idx) {
    slideIdx = idx;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    if(slideIdx > slides.length) {
        slideIdx = 1;
    }else if(slideIdx == 0) {
        slideIdx = slides.length;
    }
    for(let i=0; i<slides.length; i++) {
        slides[i].className = slides[i].className.replace(" show", "")
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIdx - 1].className += " show";
    dots[slideIdx - 1].className += " active";
    setAutoPlay();
}

function setAutoPlay() {
    if(autoplay != undefined) clearInterval(autoplay);
    autoplay = setInterval(function() {
        changeSlide(1);
    }, 2500);
}

window.onload = function() {
    showSlides(slideIdx);
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('sign').addEventListener('click', () => {
        window.location.href = 'sign.html';
    });
    document.getElementById('searchButton').addEventListener('click', () => {
        const inputField = document.getElementById('inputField');
        const search = document.getElementById('search');
        if (inputField.style.display == 'block') {
            inputField.style.display = 'none';
            search.style.display = 'block';
        } else {
            inputField.style.display = 'block';
            search.style.display = 'none';
        }
    });
    const secondNav = document.getElementById('navbar');
    let lastScrollTop = 0;

    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            // Scroll down
            secondNav.style.top = '-50px'; // Hide second nav (adjust based on its height)
        } else {
            // Scroll up
            secondNav.style.top = '100px'; // Show second nav (adjust based on top-nav height)
        }
        lastScrollTop = scrollTop;
    });
    document.querySelectorAll('.second-nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    document.getElementById('noodle1').addEventListener('click', () => {
        window.location.href = 'product_pages/simple_noodle.html';
    });
    document.getElementById('noodle2').addEventListener('click', () => {
        window.location.href = 'product_pages/dou_chan.html';
    });
    document.getElementById('noodle3').addEventListener('click', () => {
        window.location.href = 'product_pages/fu_shou.html';
    });
    document.getElementById('noodle4').addEventListener('click', () => {
        window.location.href = 'product_pages/healthy_tomato_noodle.html';
    });
    document.getElementById('noodle5').addEventListener('click', () => {
        window.location.href = 'product_pages/healthy_noodle.html';
    });
    document.getElementById('noodle6').addEventListener('click', () => {
        window.location.href = 'product_pages/red_noodle.html';
    });
       // Shopping cart functionality
       const cartIcon = document.getElementById('cartIcon');
       const cartPopup = document.getElementById('cartPopup');
   
       cartIcon.addEventListener('mouseover', () => {
           cartPopup.classList.add('active');
       });
   
       cartIcon.addEventListener('mouseout', () => {
           cartPopup.classList.remove('active');
       });
   
       cartPopup.addEventListener('mouseover', () => {
           cartPopup.classList.add('active');
       });
   
       cartPopup.addEventListener('mouseout', () => {
           cartPopup.classList.remove('active');
       });
});