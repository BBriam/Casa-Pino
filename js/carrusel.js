const slider = document.querySelector("#slidesid");/************************************************************/
let sliderSection = document.querySelectorAll(".slide");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnRight = document.querySelector("#slider_nextid");
const btnLeft = document.querySelector("#slider_previd");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);
// slider.insertAdjacentElement("afterbegin", sliderSectionLast);

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slide")[0];
  slider.style.marginLeft = "-200%";
  slider.style.transition = "all 0.6s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 600);

}

function Prev() {
  let sliderSection = document.querySelectorAll(".slide");
  let sliderSectionLast = sliderSection[sliderSection.length -1];
  slider.style.marginLeft = "0%";
  slider.style.transition = "all 0.6s";
  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
    slider.style.marginLeft = "-100%";
  }, 600);

}

btnRight.addEventListener("click", Next);
btnLeft.addEventListener("click", Prev);
setInterval(Next, 4000);
