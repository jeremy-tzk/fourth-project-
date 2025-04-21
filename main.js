/*========== SHOW MENU ==========*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

    // Menu Show

   if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
   }

//    Menu hidden 

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
   }

 /*========== REMOVE MENU MOBILE ==========*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    // When we click on each nav__link, we remove the show-menu close
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', linkAction))
 
/*========== SWIPER HOME ==========*/

const swiperHome = new Swiper('.home__swiper', {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet:  (index, className) => {
          return '<span class="' + className + '">' + String(index + 1).padStart(2,'0') + "</span>";
        },
    },
})




/*========== CHANGE BACKGROUND HEADER ==========*/


/*========== SHOW SCROLL UP  ==========*/


/*========== SCROLL SECTIONS ACTIVE LINK ==========*/


/*========== SCROLL REVEAL ANIMATION ==========*/