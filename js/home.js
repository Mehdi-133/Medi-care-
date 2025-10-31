
document.addEventListener('DOMContentLoaded', () => {

   
    const track = document.getElementById('carousel-track');
    const slides = Array.from(track.children);
    
 
    if (track && slides.length > 0) {
        
        let currentIndex = 0;
        const slideCount = slides.length;
        let autoSlideInterval;

  
        const getSlideWidth = () => slides[0].getBoundingClientRect().width;

        const moveToSlide = (targetIndex) => {
            const slideWidth = getSlideWidth();
            if (slideWidth === 0) return;  

            track.style.transform = `translateX(-${targetIndex * slideWidth}px)`;
            currentIndex = targetIndex;
        };

    
        const advanceSlide = () => {
            const nextIndex = (currentIndex + 1) % slideCount;
            moveToSlide(nextIndex);
        };

   
        const startAutoSlide = () => {
          
            clearInterval(autoSlideInterval);
            autoSlideInterval = setInterval(advanceSlide, 1800);
        };

       
        window.addEventListener('resize', () => {
            moveToSlide(currentIndex);
        });

       
        const carouselContainer = track.parentElement; 

        carouselContainer.addEventListener('mouseenter', () => {
            clearInterval(autoSlideInterval); 
        });

        carouselContainer.addEventListener('mouseleave', () => {
            startAutoSlide(); 
        });

        
        moveToSlide(0);

        startAutoSlide();
    }
});



function search(){
    let serachBar =  document.getElementById('search').value.toUpperCase();
    let articlList = document.getElementById('articlList');
    let articl = document.querySelectorAll('.articl');
    let articlName = document.getElementsByTagName('h3');

   // let doctor = document.querySelectorAll('.doctor');
    //let docname = document.getElementsByTagName('h3');

    console.log(serachBar)
    console.log(articl)
    console.log(articlName)

    for(let i = 0 ; i <articlName.length; i++){
        if(articlName[i].innerHTML.toUpperCase().indexOf(serachBar) >= 0){
            articl[i].style.display = "";
          //  doctor[i].style.display = "";
        }
        else{
            articl[i].style.display = "none";
           // doctor[i].style.display = "none";
        }
    }

}


const burgerBtn = document.getElementById('burger-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        burgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });