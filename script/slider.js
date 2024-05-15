let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

                                                                // SLIDE N2

let slideIndexx = 1;
showSlidess(slideIndexx);

// Next/previous controls
function plusSlidess(n) {
  showSlidess(slideIndexx += n);
}

// Thumbnail image controls
function currentSlidee(n) {
  showSlidess(slideIndexx = n);
}

function showSlidess(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidess");
  let dots = document.getElementsByClassName("dott");
  if (n > slides.length) {slideIndexx = 1}
  if (n < 1) {slideIndexx = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activee", "");
  }
  slides[slideIndexx-1].style.display = "block";
  dots[slideIndexx-1].className += " activee";
}

                                                              // SLIDE N3

let slideIndexxx = 1;
showSlidesss(slideIndexxx);

// Next/previous controls
function plusSlidesss(n) {
  showSlidesss(slideIndexxx += n);
}

// Thumbnail image controls
function currentSlideee(n) {
  showSlidesss(slideIndexxx = n);
}

function showSlidesss(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidesss");
  let dots = document.getElementsByClassName("dottt");
  if (n > slides.length) {slideIndexxx = 1}
  if (n < 1) {slideIndexxx = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeee", "");
  }
  slides[slideIndexxx-1].style.display = "block";
  dots[slideIndexxx-1].className += " activeee";
}




                                                        // SLIDE N4




let slideIndexxxx = 1;
showSlidessss(slideIndexxxx);

// Next/previous controls
function plusSlidessss(n) {
  showSlidessss(slideIndexxxx += n);
}

// Thumbnail image controls
function currentSlideeee(n) {
  showSlidessss(slideIndexxxx = n);
}

function showSlidessss(n) {
  let i;
  let slides = document.getElementsByClassName("mySlidessss");
  let dots = document.getElementsByClassName("dotttt");
  if (n > slides.length) {slideIndexxxx = 1}
  if (n < 1) {slideIndexxxx = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeeee", "");
  }
  slides[slideIndexxxx-1].style.display = "block";
  dots[slideIndexxxx-1].className += " activeeee";
}