function showSlide(n) {
    let slides = document.getElementsByClassName("slide-img");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

var slideIndex = 1;
showSlide(slideIndex)

function currentSlide(n) {
    showSlide(slideIndex = n);
}

function plusSlide(n) {
    showSlide(slideIndex += n);
}
