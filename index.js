const navBar = document.querySelector(".my-nav-bar");
const navMobile = document.querySelector(".mobile");
const navLaptop = document.querySelector(".laptop");

// console.log(navBar);

const heroSection = document.querySelector(".hero-section");
const someElement = document.querySelector(".test-head");
const stickyBar = document.querySelector(".sticky-bar");
const testimonial = document.querySelector(".testimonial-container");

let newContent = document.querySelector(".new-content");
let newContent2 = document.querySelector(".new-content-2");

let flag = window.matchMedia("(min-width: 768px");
myFunction2(flag);
flag.addListener(myFunction2);

function myFunction2(flag) {
  if (flag.matches) {
    newContent.innerHTML = `<div class="inner-row2">
              <div class="grid-cell" id="cell-1">
                <h4 class="grid-head">78%</h4>
                <p class="grid-content">Job Placement rate of our students</p>
              </div>
              <div class="grid-cell" id="cell-2">
                <h4 class="grid-head">&#x20B9 6 lacs</h4>
                <p class="grid-content">Average CTC</p>
              </div>
              <div class="grid-cell" id="cell-3">
                <h4 class="grid-head">140+</h4>
                <p class="grid-content">Hiring Companies</p>
              </div>
              <div class="grid-cell" id="cell-4">
                <h4 class="grid-head">5 months</h4>
                <p class="grid-content">On the Job Training</p>
              </div>
            </div>`;
    newContent2.innerHTML = ``;
  } else {
    newContent2.innerHTML = `<div class="inner-row2">
              <div class="grid-cell" id="cell-1">
                <h4 class="grid-head">78%</h4>
                <p class="grid-content">Job Placement rate of our students</p>
              </div>
              <div class="grid-cell" id="cell-2">
                <h4 class="grid-head">&#x20B9 6 lacs</h4>
                <p class="grid-content">Average CTC</p>
              </div>
              <div class="grid-cell" id="cell-3">
                <h4 class="grid-head">140+</h4>
                <p class="grid-content">Hiring Companies</p>
              </div>
              <div class="grid-cell" id="cell-4">
                <h4 class="grid-head">5 months</h4>
                <p class="grid-content">on the Job training</p>
              </div>
            </div>`;
    newContent.innerHTML = ``;
  }
}

// Certificate section

const internList = document.querySelector("#intern");
const trainList = document.querySelector("#train");
const certiImage = document.querySelector(".certi-actual-image");

internList.classList.add("certi-active-list");

internList.addEventListener("click", (e) => {
  e.preventDefault();
  internList.classList.add("certi-active-list");
  trainList.classList.remove("certi-active-list");
  certiImage.setAttribute(
    "src",
    "https://trainity.in/assets/img/trainity/certificates/1.png"
  );
});

trainList.addEventListener("click", (e) => {
  e.preventDefault();
  internList.classList.remove("certi-active-list");
  trainList.classList.add("certi-active-list");
  certiImage.setAttribute(
    "src",
    "https://trainity.in/assets/img/trainity/training/1.png"
  );
});

// var scrollEventHandler = function () {
//   window.scroll(0, window.pageYOffset);
// };

// window.addEventListener("scroll", scrollEventHandler, false);
