/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const startingTime = performance.now();
let navElements = document.querySelectorAll('[data-nav]');
let navBar = document.querySelector('#navbar__list');
let navMenu = document.querySelector('.navbar__menu');
let scrollLink = document.querySelector('#scroll__link');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function isOnScreen(e) {
    if (e.getBoundingClientRect().top < (window.innerHeight/2) 
    && e.getBoundingClientRect().bottom > (window.innerHeight/2)) {
        return true;
    }
    return false;
};

//Collapses all except the header
function collapseSection(landingContainer) {
    for(let i = 2; i < landingContainer.childNodes.length ; i++) {
        if(landingContainer.childNodes[i].nodeType == Node.ELEMENT_NODE) {
            landingContainer.childNodes[i].classList.toggle('hidden');
        };
    }
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let navFragment = document.createDocumentFragment();
for (let i = 0; i < navElements.length; i++) {
    let link = document.createElement('a');
    let li = document.createElement('li');
    link.setAttribute('class', 'menu__link');
    link.setAttribute('href','');
    li.setAttribute('data-scroll', i);
    link.setAttribute('data-scroll', i)
    li.textContent = navElements[i].getAttribute('data-nav');
    link.appendChild(li);
    navFragment.appendChild(link);
}
navBar.appendChild(navFragment);

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', () => {
    let navBarLinks = document.querySelectorAll('.menu__link');
    for(element of navElements) {
        let navIndex = Array.prototype.indexOf.call(navElements, element);
        if (isOnScreen(element)) {
            element.classList.add('your-active-class');
            navBarLinks.item(navIndex).classList.add('highlight_link');
        } else {
            element.classList.remove('your-active-class');
            navBarLinks.item(navIndex).classList.remove('highlight_link');
        }
    };
});

// Scroll to anchor ID using scrollTO event
navBar.addEventListener('click',(event) => {
    event.preventDefault();
    const t = event.target;
    const top = document.querySelector('#'+navElements[t.getAttribute('data-scroll')].getAttribute('id'));
    top.scrollIntoView({behavior: "smooth"});
});

//hide navbar when not scrolling
let scrollY = window.scrollY;
window.addEventListener('scroll', () => {
    if(scrollY > 200) {
        navMenu.classList.remove('hidden');
        setTimeout(()=>{ if(scrollY > 200){navMenu.classList.add('hidden')};}, 1500);
    };
    if(scrollY < window.innerHeight) {
        setTimeout(()=>{ scrollLink.classList.add('hidden')}, 0);
    } else {
        scrollLink.classList.remove('hidden');
    };
    scrollY = window.scrollY;
});


//scroll to top listener
scrollLink.addEventListener('click', (event) => { 
    event.preventDefault();
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
});

// Collapse sections listener
let headerLinks = document.querySelectorAll('.header__link');
for(link of headerLinks) {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const link = event.target.parentElement;
        const landingContainer = link.parentElement;
        collapseSection(landingContainer);
    });
};


const endingTime = performance.now();
console.log(startingTime - endingTime);