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
let navElements = document.querySelectorAll('[data-nav]');
let navBar = document.querySelector('#navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function getNavData (elements) {
    const navData = [];
    for (element of elements) {
        navData.push(element.getAttribute('data-nav'));
    }
    return navData;
}





/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
let navFragment = document.createDocumentFragment();
for(data of getNavData(navElements)) {
    let i = 1;
    let link = document.createElement('a')
    link.setAttribute('href', '#'+data.toLowerCase().replace(/\s+/g, ''));
    let li = document.createElement('li');
    li.setAttribute('class', 'menu__link');
    li.textContent = data;
    link.appendChild(li);
    navFragment.appendChild(link);
    i += 1;
}
navBar.appendChild( navFragment);

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
let scrollY = window.scrollY
window.addEventListener('scroll', function(){
    if (window.scrollY === 0) {
        console.log('at top');
        navBar.setAttribute('class','visible');
    } else {
        console.log('not at top');
        navBar.setAttribute('class','hidden');
    }
    scrollY = window.screenY;
})

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


