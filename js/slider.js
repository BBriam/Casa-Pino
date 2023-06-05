var padreElemento = document.querySelector("#slidesid");
var originalElemento = padreElemento.firstElementChild;
var nuevaElemento = originalElemento.cloneNode(true);
originalElemento.id = "slide_primeroid";
nuevaElemento.id = "slide_ultimoid";
padreElemento.appendChild(nuevaElemento);

const slider = document.querySelector("#slidesid");/************************************************************/
let sliderSection = document.querySelectorAll(".slide");
let sliderSectionLast = sliderSection[sliderSection.length -1];
let tiempoPorSlider = 4000;
let tiempoPorIniFin = parseInt(tiempoPorSlider / 2);
let tiempoPorTraslado = parseInt(tiempoPorSlider / 8);

const btnRight = document.querySelector("#slider_nextid");
const btnLeft = document.querySelector("#slider_previd");

function Next() {
  let sliderSectionFirst = document.querySelectorAll(".slide")[0];
  let actual = document.querySelectorAll(".slide")[1];

  if (actual.id != "slide_ultimoid") {
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.6s"; /* Esta es la que va despues de marginleft 200*/
  }
  else {
    slider.style.marginLeft = "-200%";
  }

  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, tiempoPorTraslado);

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

function UltAPri() {

  let sliderSectionFirst = document.querySelectorAll(".slide")[0];
  slider.style.marginLeft = "-200%";
  // slider.style.transition = "all 0.3s";



  setTimeout(() => {
    slider.style.transition = "none";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
    slider.style.marginLeft = "-100%";
  }, 600);


}



btnRight.addEventListener("click", Next);
btnLeft.addEventListener("click", Prev);

let tiempoSlider = setInterval(Preproceso, 4000);

function Preproceso() {
  var actual_slide = document.querySelectorAll(".slide")[1];
  if (actual_slide.id != "slide_ultimoid") {
    setTimeout(function() {
      Next();
    }, 2000);
  } else {
    Next();
  }
}




// let tiempoSlider = setInterval(Next, tiempoPorSlider);

// setInterval(transicion_derizq, 4000);

// function transicion_derizq() {
//   let actual = document.querySelectorAll(".slide")[1];
//   if (actual.id == "slide_ultimoid") {
//     UltAPri()
//   }
//   else {
//     Next()
//   }
// }















// function Next() {
//   let sliderSectionFirst = document.querySelectorAll(".slide")[0];
//   slider.style.marginLeft = "-200%";
//   slider.style.transition = "all 0.6s";




  

//   setTimeout(() => {
//     slider.style.transition = "none";
//     slider.insertAdjacentElement("beforeend", sliderSectionFirst);
//     slider.style.marginLeft = "-100%";
//   }, 600);




// }