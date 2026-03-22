// ==========================================
// 1. DATA CONFIGURATION (The Saga Database)
// ==========================================

const sagasData = [
    {
        id: 'hp',
        title: 'Harry Potter',
        shortDesc: 'Un niño descubre que es un mago y entra a un mundo mágico oculto.',
        desc: 'Explora el mundo mágico de Harry Potter. Sigue el viaje del joven mago a través de Hogwarts mientras descubre la amistad, el coraje y su destino contra las artes oscuras.',
        bgImage: 'img/harry_potter.avif',
        driveLink: 'https://drive.google.com/drive/folders/1flFYWE_5TBZPTCcO9Lay4IeyoVjaUV2m?usp=sharing',
        books: [
            { title: "La Piedra Filosofal", desc: "La leyenda comienza cuando Harry entra al mundo mágico.", coverClass: 'cover-hp-1' },
            { title: "La Cámara Secreta", desc: "Una presencia oscura acecha en los pasillos de Hogwarts.", coverClass: 'cover-hp-2' },
            { title: "El Prisionero de Azkaban", desc: "Un notorio convicto escapa de Azkaban.", coverClass: 'cover-hp-3' },
            { title: "El Cáliz de Fuego", desc: "El mortal Torneo de los Tres Magos llega.", coverClass: 'cover-hp-4' },
            { title: "Animales Fantásticos y Dónde Encontrarlos", desc: "Explora la increíble era de Newt Scamander.", coverClass: 'cover-hp-fb' }
        ],
        characters: [
            { name: "Harry Potter", role: "El Niño que Vivió", desc: "Un valiente mago de Gryffindor." },
            { name: "Hermione Granger", role: "La Bruja Más Brillante", desc: "Táctica brillante y amiga leal." },
            { name: "Ron Weasley", role: "El Mejor Amigo Leal", desc: "Compañero firme." }
        ]
    },
    {
        id: 'lotr',
        title: 'El Señor de los Anillos',
        shortDesc: 'Una comunidad viaja a través de la Tierra Media para destruir un antiguo anillo maligno.',
        desc: 'Adéntrate en la vasta épica de la Tierra Media. Una historia de hobbits, elfos, hombres y enanos unidos en una desesperada misión para destruir el Anillo Único y derrotar a Sauron.',
        bgImage: 'img/el_senor_de_los_anillos.avif',
        books: [
            { title: "La Comunidad del Anillo", desc: "El viaje comienza en la Comarca.", coverClass: 'cover-lotr-1' },
            { title: "Las Dos Torres", desc: "La comunidad se rompe.", coverClass: 'cover-lotr-2' },
            { title: "El Retorno del Rey", desc: "La batalla final se acerca.", coverClass: 'cover-lotr-3' }
        ],
        characters: [
            { name: "Frodo Bolsón", role: "Portador del Anillo", desc: "Un humilde hobbit cargado de un poder inigualable." },
            { name: "Aragorn", role: "Montaraz del Norte", desc: "El verdadero rey regresando a reclamar su trono." },
            { name: "Gandalf", role: "El Jinete Blanco", desc: "Un mago Istari antiguo y sabio." }
        ]
    },
    {
        id: 'sw',
        title: 'Star Wars',
        shortDesc: 'Una épica ópera espacial que detalla la lucha galáctica entre la luz y la oscuridad.',
        desc: 'Viaja a una galaxia muy, muy lejana. Experimenta la batalla atemporal entre los Sith y los Jedi, explorando la Fuerza mística y el destino de la familia Skywalker.',
        bgImage: 'img/star_wars.jpeg',
        books: [
            { title: "Heredero del Imperio", desc: "Un extenso relato del universo expandido.", coverClass: 'cover-sw-1' },
            { title: "El Resurgir de la Fuerza Oscura", desc: "El lado oscuro resurge.", coverClass: 'cover-sw-2' },
            { title: "La Última Orden", desc: "El clímax definitivo de la saga Thrawn.", coverClass: 'cover-sw-3' }
        ],
        characters: [
            { name: "Luke Skywalker", role: "Maestro Jedi", desc: "La nueva esperanza de la galaxia." },
            { name: "Darth Vader", role: "Lord Sith", desc: "Una figura trágica convertida a la oscuridad." },
            { name: "Leia Organa", role: "General / Princesa", desc: "Una feroz líder de la rebelión." }
        ]
    },
    {
        id: 'hg',
        title: 'Los Juegos del Hambre',
        shortDesc: 'Una rebelión distópica provocada por un mortal torneo televisado.',
        desc: 'Bienvenidos a Panem. Sigue la emocionante y distópica historia de Katniss Everdeen mientras navega por brutales juegos políticos y se convierte en el símbolo de una rebelión a nivel nacional.',
        bgImage: 'img/los_juegos_del_hambre.png',
        books: [
            { title: "Los Juegos del Hambre", desc: "Los 74º juegos anuales comienzan.", coverClass: 'cover-hg-1' },
            { title: "En Llamas", desc: "La chispa se enciende.", coverClass: 'cover-hg-2' },
            { title: "Sinsajo", desc: "La rebelión toma vuelo.", coverClass: 'cover-hg-3' }
        ],
        characters: [
            { name: "Katniss Everdeen", role: "El Sinsajo", desc: "La reacia cara de una revolución." },
            { name: "Peeta Mellark", role: "Tributo / Panadero", desc: "Un aliado carismático y estratégico." },
            { name: "Haymitch Abernathy", role: "Mentor", desc: "Un sobreviviente cínico pero brillante." }
        ]
    },
    {
        id: 'twilight',
        title: 'Crepúsculo',
        shortDesc: 'Una joven se enamora de un vampiro centenario, entrando a un mundo de fantasía oculta.',
        desc: 'Adéntrate en el mundo de Forks. Sigue la épica y peligrosa historia de amor entre Bella Swan y Edward Cullen, que desafía las fronteras entre humanos, vampiros y hombres lobo.',
        bgImage: 'img/crepusculo.jpg',
        driveLink: 'https://drive.google.com/drive/folders/1gEBD---4ZT1FQDHdTxbCrvqwLoZSyX3R?usp=drive_link',
        books: [
            { title: "Crepúsculo", desc: "Donde todo comienza en Forks.", coverClass: 'cover-tw-1' },
            { title: "Luna Nueva", desc: "El dolor de la separación y la aparición de los licántropos.", coverClass: 'cover-tw-2' },
            { title: "Eclipse", desc: "Una amenaza creciente en Seattle y una difícil elección.", coverClass: 'cover-tw-3' },
            { title: "Amanecer", desc: "El desenlace final de la historia de los Cullen.", coverClass: 'cover-tw-4' }
        ],
        characters: [
            { name: "Bella Swan", role: "Protagonista", desc: "Una humana atraída a un mundo paranormal mortal." },
            { name: "Edward Cullen", role: "Vampiro telépata", desc: "Un vampiro centenario que lucha con su naturaleza pacífica." },
            { name: "Jacob Black", role: "Hombre lobo", desc: "Amigo leal y protector de la tribu Quileute." }
        ]
    }
];

// Opciones de idioma eliminadas


// ==========================================
// 2. DOM ELEMENTS & INITIALIZATION
// ==========================================

const homeView = document.getElementById('home-view');
const sagaView = document.getElementById('saga-view');
const sagasGridContainer = document.getElementById('sagas-grid-container');

// Saga Detail View Elements
const activeSagaBg = document.getElementById('active-saga-bg');
const activeSagaTitle = document.getElementById('active-saga-title');
const activeSagaDesc = document.getElementById('active-saga-desc');
const sagaBooksContainer = document.getElementById('saga-books-container');
const sagaCharsContainer = document.getElementById('saga-chars-container');

// Initialize the Home Grid
function initHomeSagas() {
    sagasGridContainer.innerHTML = '';
    sagasData.forEach(saga => {
        const card = document.createElement('div');
        card.className = 'saga-portal-card';
        card.style.backgroundImage = `url('${saga.bgImage}')`;
        card.innerHTML = `
            <div class="saga-portal-content">
                <h3 class="saga-portal-title">${saga.title}</h3>
                <p class="saga-portal-desc">${saga.shortDesc}</p>
                <div class="enter-btn">Entrar a la Saga</div>
            </div>
        `;
        card.addEventListener('click', () => loadSagaEnvironment(saga.id));
        sagasGridContainer.appendChild(card);
    });
}
initHomeSagas();

// ==========================================
// 3. SPA ROUTING (Home <-> Saga Views)
// ==========================================

function loadSagaEnvironment(sagaId) {
    const data = sagasData.find(s => s.id === sagaId);
    if (!data) return;

    // Set active state styling on body for CSS context
    document.body.classList.add('saga-active');
    
    // Switch views
    homeView.classList.remove('active');
    setTimeout(() => {
        homeView.style.display = 'none';
        sagaView.style.display = 'block';
        // Force reflow
        void sagaView.offsetWidth;
        sagaView.classList.add('active');
        window.scrollTo(0,0);
    }, 500);

    // Populate data
    activeSagaBg.style.backgroundImage = `url('${data.bgImage}')`;
    activeSagaTitle.innerText = data.title;
    activeSagaDesc.innerText = data.desc;

    // Inject Books
    let booksHTML = '';
    if (data.driveLink) {
        booksHTML += `
            <div style="grid-column: 1 / -1; display:flex; justify-content:center; padding-bottom: 2rem;">
                <a href="${data.driveLink}" target="_blank" class="cine-btn primary-btn" style="text-decoration:none;">✨ Click para leer la saga</a>
            </div>
        `;
    }
    booksHTML += data.books.map(book => `
        <div class="book-card">
            <div class="card-media" style="background-image: url('${data.bgImage}'); filter:sepia(0.6) hue-rotate(-20deg);"></div>
            <div class="card-info">
                <h3>${book.title}</h3>
                <p class="card-desc">${book.desc}</p>
            </div>
        </div>
    `).join('');
    sagaBooksContainer.innerHTML = booksHTML;

    // Inject Characters
    sagaCharsContainer.innerHTML = data.characters.map(char => `
        <div class="char-card">
            <div class="card-media" style="background-image: url('${data.bgImage}'); filter: brightness(0.7) sepia(0.3);"></div>
            <div class="card-info">
                <h3>${char.name}</h3>
                <p class="card-meta">${char.role}</p>
                <p class="card-desc">${char.desc}</p>
            </div>
        </div>
    `).join('');

}

function returnToHome() {
    document.body.classList.remove('saga-active');
    sagaView.classList.remove('active');
    setTimeout(() => {
        sagaView.style.display = 'none';
        homeView.style.display = 'block';
        void homeView.offsetWidth;
        homeView.classList.add('active');
        window.scrollTo(0,0);
    }, 500);
}

document.getElementById('btn-back-home').addEventListener('click', returnToHome);
document.querySelector('.nav-logo').addEventListener('click', returnToHome);

window.scrollToSagas = function() {
    document.getElementById('sagas').scrollIntoView({ behavior: 'smooth' });
};

// Mobile Nav setup
const navToggle = document.querySelector('.nav-toggle');
const navLinksContainer = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => { navLinksContainer.classList.toggle('active'); });


// Modal Interface Removed


// ==========================================
// 5. CINEMATIC AMBIENCE ENGINE (CANVAS)
// ==========================================

const canvas = document.getElementById('cinematic-viewport');
const ctx = canvas.getContext('2d');
let width, height;

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
}
window.addEventListener('resize', resize);
resize();

const stars = [];
const particles = [];

// Init ambient starlight/glows
for(let i = 0; i < 150; i++) {
    stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.5,
        alpha: Math.random(),
        speed: (Math.random() * 0.01) + 0.005
    });
}

// Init slow floating particles
for(let i = 0; i < 60; i++) {
    particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        s: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() * -0.4) - 0.1,
        alpha: Math.random() * 0.4 + 0.1
    });
}

function renderAmbience() {
    ctx.clearRect(0, 0, width, height);

    // Stars
    stars.forEach(star => {
        star.alpha += star.speed;
        if(star.alpha > 1 || star.alpha < 0) star.speed *= -1;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(169, 181, 194, ${Math.abs(star.alpha) * 0.7})`;
        ctx.fill();
    });

    // Particles
    particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if(p.y < -10) { p.y = height + 10; p.x = Math.random() * width; }
        if(p.x < -10) { p.x = width + 10; }
        if(p.x > width + 10) { p.x = -10; }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(194, 163, 102, ${p.alpha})`; // Gold particles
        ctx.fill();
    });

    requestAnimationFrame(renderAmbience);
}
requestAnimationFrame(renderAmbience);
