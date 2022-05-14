const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show__menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show__menu');
    });
}


// Change Background header

function scrollHeader() {
    const header = document.getElementById('header');
    if (this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

// Swiper Popular
// Swiper JS

let swiperPopular = new Swiper(".popular__container", {
    loop: true,
    spaceBetween: 24,
    sildePerView: 'auto',
    grapCursor: true,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },
    breakpoints: {
        768: {
            slidesPerView: 3,
        },
        1024: {
            spaceBetween: 48,
        },
    },
});


// Mixitup Filter Featured

let mixerFeatured = mixitup('.featured__content', {
    selectors: {
        target: '.featured__card'
    },
    animation: {
        duration: 300
    }
});

// Link Active Featured

const linkFeatured = document.querySelectorAll('.featured__item');
function activeFeatured() {
    linkFeatured.forEach(l => l.classList.remove('active-featured'));
    this.classList.add('.active-featured');
}

linkFeatured.forEach(l => l.addEventListener('click', activeFeatured));

// Scroll Up section

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    if (this.scrollY >= 350) {
        scrollUp.classList.add('show-scroll');
    } else {
        scrollUp.classList.remove('show-scroll');
    }
}

window.addEventListener('scroll', scrollUp);

// Scroll Active

const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Scroll Revel JS

const sr = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400,
    // reset : true
})

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`);
sr.reveal(`.home__subtitle`, {delay : 500})
sr.reveal(`.home__elec`, {delay : 600})
sr.reveal(`.home__img`, {delay : 800})
sr.reveal(`.home__car-data`, {delay : 900, interval : 100, origin : 'bottom'})
sr.reveal(`.home__button`, {delay : 900, origin : 'bottom'})
sr.reveal(`.about__group, .offer__data`, {origin : 'left'})
sr.reveal(`.about__data, .offer__img`, {origin : 'right'})
sr.reveal(`.features__map`, {delay : 600, origin : 'bottom'})
sr.reveal(`.features__card`, {interval : 300})
sr.reveal(`.featured__card, .logos__content, .footer__content`, {interval : 100})