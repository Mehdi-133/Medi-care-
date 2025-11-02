
document.addEventListener('DOMContentLoaded', () => {

 
    const track = document.getElementById('carousel-track');

  
    if (track) {

        const slides = track.children;

        let currentIndex = 0;

        function showNextSlide() {
           
            slides[currentIndex].style.display = 'none';

            
            currentIndex = currentIndex + 1;

      
            if (currentIndex >= slides.length) {
              
                currentIndex = 0;
            }

      
            slides[currentIndex].style.display = 'block';
        }


        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

   
        if (slides.length > 0) {
            slides[0].style.display = 'block';
        }
        setInterval(showNextSlide, 1800);
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