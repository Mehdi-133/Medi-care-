// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // Select all the necessary elements
    const track = document.getElementById('carousel-track');
    const slides = Array.from(track.children);
    
    // Check if carousel elements exist on the page
    // (Removed button checks from this 'if' statement)
    if (track && slides.length > 0) {
        
        let currentIndex = 0;
        const slideCount = slides.length;
        let autoSlideInterval;

        // Function to get the width of a single slide
        const getSlideWidth = () => slides[0].getBoundingClientRect().width;

        // Function to move the track to the correct slide
        const moveToSlide = (targetIndex) => {
            const slideWidth = getSlideWidth();
            if (slideWidth === 0) return; 

            track.style.transform = `translateX(-${targetIndex * slideWidth}px)`;
            currentIndex = targetIndex;
        };

        // Function to advance to the next slide
        const advanceSlide = () => {
            const nextIndex = (currentIndex + 1) % slideCount;
            moveToSlide(nextIndex);
        };

        // Function to start the auto-slide timer
        const startAutoSlide = () => {
            // Clear any existing timer before starting a new one
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(advanceSlide, 1800);
        };

        // Update carousel position on window resize
        window.addEventListener('resize', () => {
            moveToSlide(currentIndex);
        });

        // Add pause-on-hover functionality
        const carouselContainer = track.parentElement; // Get the main container

        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval); // Pause on hover
        });

        carouselContainer.addEventListener('mouseleave', () => {
            startAutoSlide(); // Resume on leave
        });

        // Initialize the carousel to the first slide
        moveToSlide(0);

        // Start the auto-slide timer
        startAutoSlide();
    }
});





