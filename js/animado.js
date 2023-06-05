const prevButton = document.getElementById('slider_previd');
const nextButton = document.getElementById('slider_nextid');

const images = document.querySelector('.marco_slider ul');
const tam_pant = parseInt(window.getComputedStyle(document.getElementById('marco_sliderid')).getPropertyValue('width'));
const can_slid = parseInt(document.getElementById('sliderid').querySelectorAll('li').length)
const imageWidth = parseInt(window.getComputedStyle(document.getElementById('marco_sliderid')).getPropertyValue('width'));
// let currentImage = 0;
// const translateX_actual = window.getComputedStyle(document.getElementById('sliderid')).getPropertyValue('margin');
// const translateX_actual = window.getComputedStyle(document.getElementById('sliderid')).getPropertyValue('transform').split(',')[4].trim()



nextButton.addEventListener('click', () => {
  images.style.animationDelay = "0.12s";
  images.style.animationDirection = "normal";
  
  images.style.animationPlayState = "running";

});

prevButton.addEventListener('click', () => {
  images.style.animationDelay = "0.12s";
  images.style.animationDirection = "reverse";
  
  images.style.animationPlayState = "running";

  /*
  const translateX_actual = window.getComputedStyle(document.getElementById('sliderid')).getPropertyValue('transform').split(',')[4].trim()
  console.log("-----------------------------------------------------");
  console.log(translateX_actual);

  currentImage = Math.floor(translateX_actual / imageWidth) * +1;

  if (currentImage == 0 || (currentImage >= can_slid)) {
    currentImage = 3; // Porque se pone siempre al final una copia de la primera y esta en reversa
  }

  console.log("lo que va a entrar a translate");
  console.log(currentImage, can_slid, imageWidth);

  let transformada = "translateX(-" + ((currentImage * imageWidth) + tam_pant)  + "px)";

  console.log(transformada);

  images.style.transform = transformada;
  images.style.animationDirection = `reverse`;

  console.log("-----------------------------------------------------");
  */
});


































// const tam_pant = parseInt(window.getComputedStyle(document.getElementById('marco_sliderid')).getPropertyValue('width'));
// const can_slid = parseInt(document.getElementById('sliderid').querySelectorAll('li').length) - 1;
// const lim_porc = can_slid * 100;

// function Next() {
//   const dato_margen_actual = window.getComputedStyle(document.getElementById('sliderid')).getPropertyValue('margin');
//   let margen_actual
//   let margen_siguiente
//   let continuar = true;
//   let contenedor = [];
//   let ini = 0;
//   let ind = 0;

//   for (let i = 0; i < can_slid; i++) {
//     // console.log([ini, (1 + i) * (tam_pant * -1)]);
//     contenedor.push([ini, (1 + i) * (tam_pant * -1)]);
//     ini = (1 + i) * tam_pant;
//   }

//   try {
//   margen_actual = dato_margen_actual.split(' ')[3].replace('px', '');
//   } catch (error) {
//   margen_actual = dato_margen_actual.replace('px', '');
//   }

//   console.log("margen actual: " + margen_actual);

//   while (continuar) {

//     limites = contenedor[ind];


//     console.log("limites for: " + limites);
//     console.log("margen actual for: " + margen_actual);
//     console.log("antes del if: " + margen_actual + " ,limites: " + limites + " ini - fin:" + limites[0] + " " + limites[1]);


//     if ((margen_actual <= limites[0]) && (margen_actual >= limites[1])) {

//       console.log("si paso al if con: " + margen_actual + " ,limites: " + limites + " ini - fin:" + limites[0] + " " + limites[1]);

//       if ((limites[1] >= (can_slid * tam_pant)) || (limites[1] == (tam_pant))) {
//         console.log("++++++++++++++++++++++++++++primer if con: " + margen_actual + " " + limites[1]);
//         margen_siguiente = 2 * tam_pant;
//         continuar = false;
//       }
//       else {
//         console.log("*****************************primer else con: " + margen_actual + " " + limites[1]);
//         margen_siguiente = (tam_pant * -1) + limites[1];
//         continuar = false;
//       }
//   }

//   console.log("margen actual funcion: " + margen_actual);
//   console.log("margen siguiente funcion: " + margen_siguiente);

//   ind++
//   }

// console.log("margen siguiente despues de la funcion: " + margen_siguiente);

// margen_siguiente = (margen_siguiente / tam_pant) * 100;

// margen_siguiente = margen_siguiente.toFixed(0).toString();
// console.log("------------------------------------------------------Esto es lo que se va para el margen siguiente: " + margen_siguiente + " " + typeof(margen_siguiente) + " " + margen_siguiente + "%");

// document.querySelector('.marco_slider ul').style.marginLeft = margen_siguiente + "%";

// }

// const boton_next = document.querySelector("#slider_nextid");
// boton_next.addEventListener("click", Next);

