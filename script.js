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

   // Reset the current thumbnail index when a new slide is shown
   currentThumbnail = 0;  

   // Ensure thumbnails are shown correctly for the active slide
   showThumbnail(currentThumbnail);
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
    const activeSlide = slides[currentSlide];  // Get the current active slide
    const activeWrapper = activeSlide.querySelector('.wrapper');  // Get the wrapper within the active slide
    const sliderWidth = activeSlide.querySelector('.wrapper-holder').offsetWidth;  // Get width for slide
    
    // Apply the transform to move the current set of thumbnails for the active slide
    activeWrapper.style.transform = `translateX(-${index * sliderWidth}px)`;
}

function nextImg() {
    const activeSlide = slides[currentSlide]; // Find the current active slide
    const activeThumbnails = activeSlide.querySelectorAll('.thumbnail-slide'); // Get the thumbnails of the current slide
    
    currentThumbnail = (currentThumbnail + 1) % activeThumbnails.length;
    showThumbnail(currentThumbnail);
}

function prevImg() {
    const activeSlide = slides[currentSlide];
    const activeThumbnails = activeSlide.querySelectorAll('.thumbnail-slide');
    
    currentThumbnail = (currentThumbnail - 1 + activeThumbnails.length) % activeThumbnails.length;
    showThumbnail(currentThumbnail);
}

// Initialize the first thumbnail as active
showThumbnail(currentThumbnail);