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

function setSectionHighlight () {
    for(element of navElements) {
        const section = document.querySelector("#"+element.getAttribute('id'));
        if (section.getBoundingClientRect().top > -100 && section.getBoundingClientRect().top < (window.innerHeight-200)) {
            section.setAttribute('class', 'your-active-class');
        } else {
            section.removeAttribute('class', 'your-active-class');
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
    li.setAttribute('data-scroll', i)
    li.textContent = navElements[i].querySelector('h2').textContent;
    link.appendChild(li);
    navFragment.appendChild(link);
}
navBar.appendChild(navFragment);

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

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', function (){
    setSectionHighlight();
});

// Scroll to anchor ID using scrollTO event
navBar.addEventListener('click', function (event) {
    const t = event.target;
    console.log(t);
    const top = document.querySelector('#'+navElements[t.getAttribute('data-scroll')].getAttribute('id'));
    console.log(top);
    top.scrollIntoView({behavior: "smooth"});
});


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


