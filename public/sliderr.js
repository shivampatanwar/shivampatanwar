var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("imgdiv");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
}


let slideIndex1 = 0;
showSlides1();
function showSlides1() {
    var i;
    var slides = document.getElementsByClassName("imgdiv1");
    var dots = document.getElementsByClassName("dot1");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) {slideIndex1 = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1-1].style.display = "block";  
    dots[slideIndex1-1].className += " active";
    setTimeout(showSlides1, 2000); // Change image every 2 seconds
}


let slideIndex2 = 0;
showSlides2();
function showSlides2() {
    var i;
    var slides = document.getElementsByClassName("imgdiv2");
    var dots = document.getElementsByClassName("dot2");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex2++;
    if (slideIndex2 > slides.length) {slideIndex2 = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex2-1].style.display = "block";  
    dots[slideIndex2-1].className += " active";
    setTimeout(showSlides2, 2000); // Change image every 2 seconds
}


let slideIndex3 = 0;
showSlides3();
function showSlides3() {
    var i;
    var slides = document.getElementsByClassName("imgdiv3");
    var dots = document.getElementsByClassName("dot3");
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
    }
    slideIndex3++;
    if (slideIndex3 > slides.length) {slideIndex3 = 1}    
    for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex3-1].style.display = "block";  
    dots[slideIndex3-1].className += " active";
    setTimeout(showSlides3, 2000); // Change image every 2 seconds
}