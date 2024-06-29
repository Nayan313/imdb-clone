function formatDate(date) {
  const yyyy = date.getFullYear();
  const mm = String(date.getMonth() + 1).padStart(2, '0'); // January is 0!
  const dd = String(date.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}
const currentDate = new Date();
const daysAgo = 10;
const targetDate = new Date(currentDate);
targetDate.setDate(currentDate.getDate() - daysAgo);
const formattedDate = formatDate(targetDate);


var timeOut = 100;
var slideIndex = 0;
var autoOn = true;

autoSlides();

function autoSlides() {
  timeOut = timeOut - 20;

  if (autoOn == true && timeOut < 0) {
    showSlides();
  }
  setTimeout(autoSlides, 20);
}

function prevSlide() {
  timeOut = 4000;

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex--;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  if (slideIndex == 0) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlides() {
  timeOut = 4000;

  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


let currentIndex = {};

function cardS(cardSliderId, direction) {
  const cardSlider = document.getElementById(cardSliderId);
  const cardSlides = cardSlider.querySelector(".cardSlides");
  const totalSlides = cardSlides.children.length;
  if (!currentIndex[cardSliderId]) {
    currentIndex[cardSliderId] = 0;
  }

  currentIndex[cardSliderId] += direction;

  if (currentIndex[cardSliderId] >= totalSlides) {
    currentIndex[cardSliderId] = 0;
  } else if (currentIndex[cardSliderId] < 0) {
    currentIndex[cardSliderId] = totalSlides - 1;
  }

  const cardWidth = cardSlides.children[0].offsetWidth; // Assuming all cards have the same width
  const cardOffset = -currentIndex[cardSliderId] * cardWidth;
  cardSlides.style.transform = `translateX(${cardOffset}px)`;
}






