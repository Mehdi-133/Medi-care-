
const userForm = document.getElementById('userForm');
const restoreDiv = document.getElementById('restore');


function displayAppointment() {
  
    const userInfoString = localStorage.getItem('userInfo');

    if (userInfoString) {
       
        const userInfo = JSON.parse(userInfoString);
        const appointmentHTML = `
            <h1 class="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Mes Rendez-vous</h1>
            <div class="space-y-2 pt-4">
                <p>Nom: ${userInfo.name}</p>
                <p>Email: ${userInfo.email}</p>
                <p>Médecin: ${userInfo.medecin}</p>
                <p>Date: ${userInfo.date}</p>
                <p>Heure: ${userInfo.hour}</p>
            </div>
        `;

       
        restoreDiv.innerHTML = appointmentHTML;
    } else {
        
        restoreDiv.innerHTML = `
            <h1 class="text-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">Mes Rendez-vous</h1>
            <p class="flex flex-col items-center pb-20">Aucun rendez-vous programmé. Prenez votre premier rendez-vous ci-dessus !</p>
        `;
    }
}

userForm.onsubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements[0].value;
    const email = e.target.elements[1].value;
    const medecin = e.target.elements[2].value;
    const date = e.target.elements[3].value;
    const hour = e.target.elements[4].value;

    if (name === "" || email === "" || medecin === "" || date === "" || hour === "") {

       alert("Submit refused");
        return;
       }

    localStorage.setItem("userInfo", JSON.stringify({ name, email, medecin, date, hour }));

    alert("Submit accepted!");
    console.log(localStorage.getItem('userInfo'));


    displayAppointment();

   
};


document.addEventListener('DOMContentLoaded', displayAppointment);


console.log(localStorage.getItem('userInfo'))



