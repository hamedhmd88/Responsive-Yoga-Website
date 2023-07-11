/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close')

     //////// Menu Show ///////
     if(navToggle){
        navToggle.addEventListener('click', () => {
            navMenu.classList.add('show-menu')
        })
     }

     ////// Menu Hidde ///////
     if(navClose){
        navClose.addEventListener('click', () => {
            navMenu.classList.remove('show-menu')
        })
     }
     


/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav--link');
const linkActive = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkActive));

/*=============== ADD BLUR TO HEADER ===============*/

const blurHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                        : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY  >= 350 ? scrollUp.classList.add('show-scroll')
                            : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const section = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const sectionHeight = current.offsetHeight,
                    sectionTop = current.offsetTop - 58,
                    sectionId = current.getAttribute('id'),
                    sectionClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')

         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
         }else{
            sectionClass.classList.remove('active-link')
         }           
    })
}

window.addEventListener('scroll', scrollActive);




/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    // rese : true
  }); 

sr.reveal(".home--data, .list--container, .join--container")
sr.reveal('.home--img', {origin: 'bottom'} )
sr.reveal('.health--image, .routine--images, .follow--img-3', {origin: 'left'})
sr.reveal('.health--data, .routine--data, .follow--img-4', {origin: 'right'} )
sr.reveal('.follow--data, .follow-content-1 img', {interval: 100} )

