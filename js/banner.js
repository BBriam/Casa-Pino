function muestra_slide(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {indice_slide = 1} 
  if (n < 1) {indice_slide = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[indice_slide-1].style.display = "block";
}

function cambia_slide(n) {
  direccion = n;
  muestra_slide(indice_slide += n);
}

var direccion = 1;
var indice_slide = 1;

muestra_slide(indice_slide);

setInterval(function () { cambia_slide(direccion); }, 4000);