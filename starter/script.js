'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const sectionTitle = document.querySelectorAll('.section__title');
const navLinks = document.querySelectorAll('.nav__link');
const nav = document.querySelector('.nav');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const btnRight = document.querySelector('.slider__btn--right');
const btnLeft = document.querySelector('.slider__btn--left');
const slides = document.querySelectorAll('.slide');
const slider = document.querySelector('.slider');
const dotContainer = document.querySelector('.dots');


const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//Implementing smooth scrolling

btnScrollTo.addEventListener('click', function (e) {
  //get coordinates
  const s1ccords = section1.getBoundingClientRect();
  const btnScrollToCoords = e.target.getBoundingClientRect();

  window.scrollTo({
    left: s1ccords.left,
    top: s1ccords.top,
    behavior: 'smooth',
  });

  //to get height and width of client viewport
  // const browserWidth = document.documentElement.clientWidth;
  // console.log(browserWidth);
  
  // if (browserWidth < 500) {
    //   sectionTitle.forEach(t => (t.style.color = 'red'));
    // }

  //works on all modern browsers - modern way of implementing this
  section1.scrollIntoView({ behavior: 'smooth' });
});
///////////////////////////////////////
//Page navigation
///////////////////////////////////////
///////////////////////////////////////
///////////////////////////////////////

// navLinks.forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();

//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//implement same behavior as above but with using event delegation
// 1. attach an event to the common parent element
// 2. determine where the event originated
document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);

// const randomColor = `rgb(${randomInt(0, 250)}, ${randomInt(
//   0,
//   250
// )}, ${randomInt(0, 250)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   e.stopPropagation();
//   const randomColor = `rgb(${randomInt(0, 250)}, ${randomInt(
//     0,
//     250
//   )}, ${randomInt(0, 250)})`;

//   this.style.backgroundColor = randomColor;
// });

// document.querySelector('.nav__links').addEventListener('click', function () {
//   const randomColor = `rgb(${randomInt(0, 250)}, ${randomInt(
//     0,
//     250
//   )}, ${randomInt(0, 250)})`;

//   this.style.backgroundColor = randomColor;
// });

// document.querySelector('.nav').addEventListener('click', function () {
//   const randomColor = `rgb(${randomInt(0, 250)}, ${randomInt(
//     0,
//     250
//   )}, ${randomInt(0, 250)})`;

//   this.style.backgroundColor = randomColor;
// });

//Lectures
//186 Select, Create and Delete DOM elements

//--SELECTING ELEMENTS--//
//To select all elements on the entire page
// console.log(document.documentElement);

document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// console.log(document.getElementById('section--2'));

//getElementsByTagName() returns an HTML collection / different from the node list because HTML collection is life: if DOM changes, the HTML collection only changes, whereas node list always stays same
const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

const allSections2 = document.getElementsByTagName('section');
// console.log(allSections2);

// console.log(document.getElementsByClassName('btn'));

const header = document.querySelector('.header');

//--CREATING AND INSERTING ELEMENTS--//
//.insertAdjacentHTML
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

//prepend method makes an element the first child of the parent element (header)
// header.prepend(message);
header.append(message);
// header.after(message);

// console.log(message.parentElement);

const cookieBtn = document.querySelector('.btn--close-cookie');

cookieBtn.addEventListener('click', function () {
  // message.remove();
  message.parentElement.removeChild(message);
});

// const html = `<h1>Hello world!</h1>`;
// header.insertAdjacentHTML('afterend', html);

// Styles, Attributes and classes

//Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';
message.style.height =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
// console.log(message.style.height);

// const allh1s = document.querySelectorAll('h1');
// console.log(allh1s.length);
// console.log(getComputedStyle(allh1s[0]).color);
// allh1s.style.color = 'red';
// allh1s.forEach(
// h1 => (h1.style.color = 'red'),
//   h1 => ((h1.style.fontStyle = 'italic'), (h1.style.color = 'red'))
// );
// console.log(getComputedStyle(allh1s[0]).fontStyle);

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// 189 Event types and handlers

// Mouse enter event

// const alertH1 = function (e) {
//   alert("Great! You're reading this :D");

//   h1.removeEventListener('mouseenter', alertH1);
// };
// h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function (e) {
//   alert('Hi there!');
// };

// 190 Event Propagation: Bubbling and capturing
//JS events have important property: capturing phase and bubbling phase
//Event phases:
//Capturing phase --> target phase --> bubbling phase
//not all events have capturing and bubbling phases, some of the events might only have the target phase

// 191
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + 1);
// const randomColor = `rgb(${randomInt(0, 250)}, ${randomInt(
//   0,
//   250
// )}, ${randomInt(0, 250)})`;

// 193 DOM Traversing - selecting element in relation to other elements: direct child or direct parent of another element

const h1 = document.querySelector('h1');

//Going downwards: selecting child elements

//We can use querySlector not only on document, but also on elements
// console.log(h1.querySelectorAll('.highlight'));
//To select direct children nodes
// console.log(h1.childNodes);
//To select html collection
// console.log(h1.children);
// console.log(h1.firstChild);
// console.log(h1.firstElementChild);
// console.log(h1.lastChild);
// console.log(h1.lastElementChild);
h1.firstElementChild.style.color = 'white';

//Going upwards: selecting parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// Sometimes we need to select a closest parent element with a specific class name, no matter how high up the DOM tree it is located
// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// const h2 = document.querySelector('.section__description');
// console.log(h2.closest('.section'));
// h2.closest('.section').style.background = 'green';

// Going sideways: selecting children
// In JS we can only access direct siblings: only the previous and the next one
// console.log(h1.previousSibling);
// console.log(h1.previousElementSibling);
// console.log(h1.nextSibling);
// console.log(h1.nextElementSibling);
//To get all children of a parent element, we need to move up to the parent element and then use children method
// console.log(h1.parentElement.children);
// console.log([...h1.parentElement.children]);
// [...h1.parentElement.children].forEach(e => (e.style.color = 'red'));
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(0.5)';
//   }
// });

// 194 Building a tabbed component
//Attaching event handlers to elements
// This below is a bad practice when there are a lot of tabs
// tabs.forEach(t => t.addEventListener('click', () => console.log('TAB')));

//In that case, it is better to use event delegation, so we will attach an event listener to the container and then use matching method to find out which element was selected

tabsContainer.addEventListener('click', function (e) {
  //Now we need to figure out which btn was clicked
  const clicked = e.target.closest('.operations__tab');

  //However, if click occurs on the parent element clicked will be null: we are clicking on the tabs container and there is no matching parent element
  //To fix that:
  if (!clicked) return;

  //Remove classes
  // To add --active class to a clicked tab, first remove active from all the tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  //To activate the content tab
  //We select the element that was clicked and then add an active class to it
  console.log(clicked.dataset.tab);
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  //Add class to the clicked element
  clicked.classList.add('operations__tab--active');

  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//195 Passing arguments to event handlers
//Fade out links we are not hovering over

//Menu fade animation

//1. Attach event listener to parent element for "mouseover" event. This event allows for event bubbling, when event propagates from a child element to a parent element. In contract, "mouse enter" event doesn't allow for event bubbling
//"mouseenter" - opposite is "mouseleave"
//"mouseover" - opposite is "mouseout"

//Attach event listener to the parent element, use "mouseover" type of event that allows for event bubbling, match which element is being hovered over

const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
        logo.style.opacity = this;
      }
    });
  }
};

// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

//we can refactor the above and remove the anonymous functions by using the bind method
//bind method creates a copy of a callback function and will set "this" keyword to whatever value we are passing

nav.addEventListener('mouseover', handleHover.bind(0.5));

nav.addEventListener('mouseout', handleHover.bind(1));

const initialCoords = section1.getBoundingClientRect();

//Sticky nav - this is bad for performance because the scroll event fires on every scroll
// window.addEventListener('scroll', function (e) {
//   if (window.scrollY > initialCoords.top) {
//     nav.classList.add('sticky');
//   } else nav.classList.remove('sticky');
// });

//The Intersection Observer API

//Inside the callback function we pass in 2 argument, "entries" and observer object
//entries here is an array of threshold values - threshold can have multiple values
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => console.log(entry));
// };

// const obsOptions = {
// root is the element that the target is intersecting
//null option means that the target element intersecting the entire viewport
//threshold is percentage at which the target element can intersect before the callback function get called. 0.1 is 10%
// root: null,
//we're going to use [0, 0.2] - which means callback function will be triggered when the target element moves out of view and then when it comes into view
// threshold: [0, 0.2],
//if we pass in [0, 1, 0.2] - this would mean the function will be called when target el moves out of view (0), when 100% of the target el has moves into view (1)
// threshold: [0, 1, 0.2],
// threshold: 0.1,
// threshold: 0,
// };

//First we store the results of this call into a variable
// const observer = new IntersectionObserver(obsCallback, obsOptions);

//now we need to call an observe method and pass in the target element
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else nav.classList.remove('sticky');
};

//Create observer for a header
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

//198 Revealing elements on scroll
//Create Observer for sections: as section comes into view - it appears and moves slightly up
const sectionCallbackFunction = function (entries, observer) {
  const [entry] = entries;
if (!entry.isIntersecting) return;

entry.target.classList.remove('section--hidden');

observer.unobserve(entry.target);
};

const observerOptions = {
  root: null,
  threshold: 0.15,
};

//store the results of the observer object into a variable
const sectionObserver = new IntersectionObserver(
  sectionCallbackFunction,
  observerOptions
);

//sectionObserver.observe(allSections); // This doesn't work because this is a node list

// allSections.forEach(function (section) {
// sectionObserver.observe(section);
// section.classList.add('section--hidden')
// })

// lazy loading images
const targetImages = document.querySelectorAll('img[data-src]');

const revealImages = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img')
  })

  observer.unobserve(entry.target)
}

const options = {
  root: null,
  threshold: 1,
  rootMargin: '200px'
}

const targetImgObserver = new IntersectionObserver(revealImages, options);

targetImages.forEach(i => targetImgObserver.observe(i));



//Building a slider
//This is irrelevant for the functionality, only needed to visualize the mechanics of the process
// slider.style.transform = 'scale(0.3) translateX(-1400px)';
// slider.style.overflow = 'visible';

let currentSlide = 0;
const maxSlides = slides.length;

//This helps move slides next to each other, without it they will be stacked on top of each other.
//This assigns 0%, 100%, 200%, 300% values to images
// slides.forEach((slide, index) => slide.style.transform = `translateX(${index * 100}%)`)

//Function that creates HTML programmatically
const createDots = function(){
  slides.forEach(function (_, i){
    dotContainer.insertAdjacentHTML('beforeend', 
    `<button class="dots__dot" data-slide="${i}"></button>`
    )
  })
}

createDots();

const activateDot = function (slide) {
  document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active')
}
 

function goToSlide(slide){
  slides.forEach((s, index) => s.style.transform =`translateX(${100 * (index-slide)}%)`)
  activateDot(slide)
}

goToSlide(0);

function nextSlide () {
  if (currentSlide === maxSlides -1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
}

function prevSlide () {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
  activateDot(currentSlide);
}


btnRight.addEventListener('click', nextSlide)
btnLeft.addEventListener('click', prevSlide)

// Building a slider Part II

//Attach event handler to keyboard event, so that we can move through the slider by using right and left arrow keys
//We handle keyboard events by adding event listener to the document
document.addEventListener('keydown', function (e){
  if (e.key === 'ArrowRight') nextSlide();
  if (e.key === 'ArrowLeft') prevSlide();
})


//Add event listener not to each of the dot but to the common parent container
//using event delegation
dotContainer.addEventListener('click', function(e){
if (e.target.classList.contains('dots__dot')) {
  const {slide} = e.target.dataset;
  goToSlide(slide);
  activateDot(slide);
}
})

//202 Lifecycle DOM Events
//Lifecycle - from the moment page is accessed to the moment user leaves the page
// 1st event - DOM Content Loaded - This event is fired by the document as soon as HTML is parsed = HTML downloaded and converted into a DOM tree
//Also, all script need to be downloaded and executed before the "DOM Content Loaded" event can fire
//This event doesn't wait for images or any external resources to load

document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree is built', e);
})

//The next event that occurs is "Load" event and it occurs on the window and fires when all images, external resources and css files are loaded

window.addEventListener('load', function (e) {
  console.log('Page is fully loaded', e)
})

//The last event happens right before a user leaves the page - for example, when the click on closing a tab
// window.addEventListener('beforeunload', function (e) {
//   e.preventDefault();
//   e.returnValue = '';
// })

//203 Efficient script loading - defer and async
//Ways of loading JS script in HTML
//Including <script> tag in the head of a document is a bad practice
//because HTML starts parsing, gets to the <script> tag and starts fetching and executing JS, at which point HTML parsing stops and that has to wait until JS is fully parsed and executed. This could have a huge effect on performance. That is why <script> tags are usually places at the end of the body, so that all the HTML is parsed when it reaches the script tag
//<script async src='script.js'> --> Here HTML parsing and script fetching happens asynchronously. However, HTML parsing still stops while script is being executed, and it waits until script execution is finished for the HTML to complete parsing. This is still not ideal because HTML parsing process is being interrupted
//With this option: <script defer src='script.js'> The execution of JS is differed (postponed) until HTML parsing is finished. Once it is finished, only then JS begins executing. This is better because HTML parsing is not interrupted
//Generally defer is better to use, especially if the code includes third party libraries and especially if code depend on them. Defer will make the code executed in the order, in which it was declared, whereas async will execute the code in which it arrived

