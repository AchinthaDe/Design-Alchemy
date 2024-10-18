let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
let currentThumbnail = 0;
const thumbnails = document.querySelectorAll('.wrapper div');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize first slide as active
showSlide(currentSlide);


// For Thumbnails in mobile
function showThumbnail(index) {
    const sliderWidth = document.querySelector('.wrapper-holder').offsetWidth;
    document.querySelector('.wrapper').style.transform = `translateX(-${index * sliderWidth}px)`;
}

function nextImg() {
    currentThumbnail = (currentThumbnail + 1) % thumbnails.length;
    showThumbnail(currentThumbnail);
}

function prevImg() {
    currentThumbnail = (currentThumbnail - 1 + thumbnails.length) % thumbnails.length;
    showThumbnail(currentThumbnail);
}

// Initialize the first thumbnail as active
showThumbnail(currentThumbnail);