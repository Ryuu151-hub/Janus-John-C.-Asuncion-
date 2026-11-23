/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD SCROLLED NAV ===============*/
const scrollHeader = () => {
  const nav = document.getElementById('nav')
  this.scrollY >= 40
    ? nav.classList.add('scrolled')
    : nav.classList.remove('scrolled')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350
    ? scrollUp.classList.add('show-scroll')
    : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
  const scrollDown = window.scrollY

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (sectionsClass) {
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link')
      } else {
        sectionsClass.classList.remove('active-link')
      }
    }
  })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2000,
  delay: 300,
})

sr.reveal(`.home__perfil, .home__info`)
sr.reveal(`.home__about, .home__skills`, { delay: 500 })
sr.reveal(`.projects__card`, { interval: 100 })
sr.reveal(`.services__card`, { interval: 100 })
sr.reveal(`.experience__card`, { interval: 100 })
sr.reveal(`.contact__data, .contact__form`)

/*=============== CONTACT FORM (Demo) ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  contactMessage.textContent = 'Message sent successfully ✅'
  contactMessage.classList.add('success')
  contactMessage.classList.remove('error')

  contactForm.reset()

  setTimeout(() => {
    contactMessage.textContent = ''
    contactMessage.classList.remove('success')
  }, 5000)
}

if (contactForm) {
  contactForm.addEventListener('submit', sendEmail)
}
