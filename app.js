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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active



// this is navbar by using unordered list

// this is all section in body to nav menu


// this variable includes ul
let navbarUl= document.getElementById("navbar__list");
// this variable includes all sections
let section= document.querySelectorAll("section");

// It was created arrow function in it for Loop and added access to each of the existing sections and it is list new.
creatActiveClass = () => {
    for (let active of section){
        listItem = document.createElement("li");
        listItem.innerHTML = `<li><a href="#${active.id}" data-nav="${active.id}" class="menu__link"/>${active.dataset.nav}</li>`;
        navbarUl.appendChild(listItem);
    };
};
creatActiveClass();

// The window object was used by onScroll.  
window.onscroll = () => {
// and we added to it forEach.    
document.querySelectorAll("section").forEach (active  => {
    // and the getBoundingClientRect was used
        if(active.getBoundingClientRect().top <= 160  && active.getBoundingClientRect().bottom >= 200){
    // or if the condition is checked, it will add class the active will not be deleted.        
            active.classList.add("your-active-class");
        }else{
            active.classList.remove("your-active-class");
        }
    });
};

// The Ul was entered and we used the addEventListener.   
navbarUl.addEventListener("click", section =>{
    // And here i prevented the event default action.
    section.preventDefault();
    // and created a condition so that when you click on any section, it goes directly.
    if(section.target.dataset.nav){
        document.getElementById(section.target.dataset.nav)
    // and we used the scrollBy to go smoothly.
        .scrollBy({behavior :"smooth"});
    // setTimeout was used because when you click on the listItem it does not go once and smoothly by 300sec.
        setTimeout(() => {
            location.hash=`${section.target.dataset.nav}`;
        }, 300);
    };
});