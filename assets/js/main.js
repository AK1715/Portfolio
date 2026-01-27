/*=========== SHOW MENU ==============*/
const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*============== REMOVE MENU MOBILE ================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu click
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

/* ================== HOME TYPED JS =================== */
const typedHome = new Typed('#home-typed', {
    strings: ['Java Backend Developer', 'Java Backend Developer', 'Java Backend Developer'], // Insert professions here*****
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 2000,
    loop: true,
    cursorChar: '_',
})

/* ============== ADD SHADOW HEADER ================ */
const shadowHeader = () =>{
    const header = document.getElementById('header')
    // Add a class if the bottom offset is greater than 50 of the viewport
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*==================== CONTACT EMAIL JS ==================*/
const contactForm = document.getElementById('contact-form'),
        contactMessage = document.getElementById('contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    // serviceID -templateID- #form - publicKey
    emailjs.sendForm('service_wgxjbse','template_2gn1ct4','#contact-form','VL_V9uFNYcWJRfBc_').then(() =>{
        // Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        // clear input fileds 
        contactForm.reset()
    }, () => {
        // show error message
        contactMessage.textContent = 'Message not send (service error) ❌'
    })
}
contactForm.addEventListener('submit', sendEmail)


/*============== SCROLL SECTIONS ACTIVE LINK ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*================= SCROLL SECTIONS ACTIVE LINK =================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop =current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

              if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionClass.classList.add('active-link')
              }else{
                sectionClass.classList.remove('active-link')
              }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    // reset: true, // Animations repeat
})

sr.reveal(`.home__content, .resume__content:nth-child(1), .footer__container`)
sr.reveal(`.home__data, .resume__content:nth-child(2)`, {delay: 300, origin: 'bottom'})

sr.reveal(`.about__content, .contact__content`, {origin: 'bottom'})
sr.reveal(`.about__image, .contact__form`, {delay: 300})

sr.reveal(`.projects__card`, {intervel: 100})