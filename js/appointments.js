let button = document.getElementById('button').addEventListener( 'click', buttonClick);

function buttonClick(event){
    alert('submit accepted')
}

const burgerBtn = document.getElementById('burger-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        burgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });