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

function setSectionHighlight () {
    let navBarLinks = document.querySelectorAll('.menu__link');
    for(element of navElements) {
        let navIndex = Array.prototype.indexOf.call(navElements, element);
        if (element.getBoundingClientRect().top > - 100 && element.getBoundingClientRect().top < (window.innerHeight-200)) {
            element.classList.add('your-active-class');
            navBarLinks.item(navIndex).classList.add('highlight_link');
        } else {
            element.classList.remove('your-active-class');
            navBarLinks.item(navIndex).classList.remove('highlight_link');
        }
    };
}



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
    setSectionHighlight();
});

// Scroll to anchor ID using scrollTO event
navBar.addEventListener('click',(event) => {
    event.preventDefault();
    const t = event.target;
    const top = document.querySelector('#'+navElements[t.getAttribute('data-scroll')].getAttribute('id'));
    top.scrollIntoView({behavior: "smooth"});
});

const endingTime = performance.now();
console.log(startingTime - endingTime);
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


//hide navbar when not scrolling
let scrollY = window.scrollY;
window.addEventListener('scroll', () => {
    navMenu.classList.remove('hidden');
    
    setTimeout(()=>{
        if(scrollY > window.innerHeight) {
            scrollLink.classList.remove('hidden');
        } else {
           scrollLink.classList.add('hidden');
        }
        navMenu.classList.remove('hidden');
        if(scrollY > 200) {
            navMenu.classList.add('hidden');
            };
        scrollY = window.scrollY;
    }, 1500);
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
        for(let i = 2; i < landingContainer.childNodes.length ; i++) {
            if(landingContainer.childNodes[i].nodeType == Node.ELEMENT_NODE) {
                landingContainer.childNodes[i].classList.toggle('hidden');
            };
        }
    })
}

