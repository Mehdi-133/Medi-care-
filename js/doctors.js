// console.log("heloo")

const Cards = document.getElementById('Cards')


let card = [
    {
        src : "../images/2645c5de51ce043e2b8242b23f8b9fa1.jpg",
        name : " Dr. Sarah Johnson",
        specialite : "Cardiologue",
        description : "Centre Médical de New York",
        present : 'online'
    },
    {
        src : "/images/doctor8.jpg",
        name : " Dr. Michael Chen",
        specialite : "Neurologue",
        description : "Hôpital de la Ville",
        present : 'offline'
        
    },
    {
        src : "/images/doctor5.jpg",
        name : " Dr.  James Wilson",
        specialite : "Pédiatre",
        description : "Hôpital pour Enfants",
        present : 'online'
    },
    {
        src : "/images/3104a220eb1a84185008520f2c367653.jpg",
        name : " Dr. Robert Taylor",
        specialite : "Cardiologue",
        description : "Institut de Soins Cardiaques",
        present : 'offline'
    },
    {
        src : "/images/167654fae225eca7a25216519432d4ba.jpg",
        name : " Dr.Davide goggings",
        specialite : "Cardiologue",
        description : "Centre Médical de New York",
        present : 'online'
    },
    {
        src : "/images/doctor4.jpg",
        name : "Jhon gray",
        specialite : "Orthopédiste",
        description : "Centre des Os et Articulations",
        present : 'online'
    },
] ;


card.map((value) =>{
    Cards.innerHTML += `<div
                    class="bg-white rounded-2xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-blue-400 focus-within:ring-2 focus-within:ring-blue-500 max-w-xs cursor-pointer">
                    <div class="p-5 text-center">
                        <img src="${value.src}"
                            alt="Doctor"
                            class="object-cover w-full h-64 rounded-lg">
                        <h1
                            class="text-lg font-semibold text-gray-800 hover:text-blue-600 transition mt-3">
                            ${value.name}
                        </h1>
                        <p
                            class="text-blue-600 font-medium mt-1">${value.specialite}</p>
                        <p class="text-gray-500 text-sm mt-2">
                            ${value.description}
                        </p>
                        <div class="flex items-center justify-center mt-3">
                            ${ value.present === 'online' ?
                                `<span
                                class="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                                <span
                                    class="text-sm text-gray-700 font-medium">Online</span> `   
                                :
                                `<span
                                class="w-2 h-2 bg-orange-500 rounded-full mr-2"></span>
                                <span
                                    class="text-sm text-gray-700 font-medium">offline</span> `   
                            }
                            
                        </div>
                    </div>
                </div>`
})

const burgerBtn = document.getElementById('burger-btn');
        const mobileMenu = document.getElementById('mobile-menu');

        burgerBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

