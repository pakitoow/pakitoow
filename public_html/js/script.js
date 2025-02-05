/*=================== toggle icon navbar =================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle ('bx-x');
    navbar.classList.toggle ('active');
};

/*=================== scroll sections avtive link =================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });
    /*=================== sticky navbar =================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*=================== remove toggle icon navbar when click navbar link (scroll)=================*/
menuIcon.classList.remove ('bx-x');
navbar.classList.remove ('active');
};

/*=================== scroll reveal =================*/
ScrollReveal({ 
    //reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*=================== typed js =================*/
const typed = new Typed('.multiple-text', {
    strings: ['Elles commentent les matchs.', 'Elles posent des questions aux joueurs.', 'Elles écrivent des articles sur le sport.', 'Elles animent des émissions sportives.', 'Elles sont de plus en plus visibles.', 'Elles parlent de tous les sports.'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});




const fname = document.getElementById('fname');
const phnum = document.getElementById('phnum')
const add_depart = document.getElementById('add_depart')
const add_arrivee = document.getElementById('add_arrivee')
const date = document.getElementById('date')
const time = document.getElementById('time')
const name = document.getElementById('name')
const submit = document.getElementsByClassName('form-contact')[0];
const vehtype = document.getElementById("vehtype")
const pass = document.getElementById("pass")
const babyon = document.getElementById("babyon")
const bagage = document.getElementById("bagage")

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clicked");

    let ebody = `
    <b>Full Name: </b>${fname.value}
    <br>
    <b>Phone Number: </b>${phnum.value}
    <br>
    <b>Adress Départ: </b>${add_depart.value}
    <br>
    <b>Adress Arrivée: </b>${add_arrivee.value}
    <br>
    <b>Date: </b>${date.value}
    <br>
    <b>Time </b>${time.value}
    <br>
    <b>Choix: </b>${name.value}
    <br>
    <b>Véhicule: </b>${vehtype.value}
    <br>
    <b>Passengers: </b>${pass.value}
    <br>
    <b>Bébe à board: </b>${babyon.value}
    <br>
    <b>Bagages: </b>${bagage.value}
    <br>
    `


    Email.send({
        SecureToken : "67b5fe0e-3e15-4c3a-9269-c9f1d8e6c6db",
        To : 'drivesluxe.supp0rt@gmail.com',
        From : "driverluxe.supp0rt@gmail.com",
        Subject : "Reservation reçus",
        Body : ebody
    }).then(
      message => alert(message)
    );
})

const submitcontact = document.getElementsByClassName('submitcontact')[0];
const fnamec = document.getElementById('fnamec')
const emailc = document.getElementById('emailc')
const phc = document.getElementById('phc')
const subject = document.getElementById('subject')
const message = document.getElementById('message')

submitcontact.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clicked");

    let ebody = `
    <b>Full Name: </b>${fnamec.value}
    <br>
    <b>Phone Number: </b>${phc.value}
    <br>
    <b>Email: </b>${emailc.value}
    <br>
    <b>Subject: </b>${subject.value}
    <br>
    <b>Mesage: </b>${message.value}
    <br>
    
    `


    Email.send({
        SecureToken : "67b5fe0e-3e15-4c3a-9269-c9f1d8e6c6db",
        To : 'drivesluxe.supp0rt@gmail.com',
        From : "driverluxe.supp0rt@gmail.com",
        Subject : "Contact message reçus",
        Body : ebody
    }).then(
      message => alert(message)
    );
})

