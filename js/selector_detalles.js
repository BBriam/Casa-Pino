var img_principal = document.getElementById("img_detalle_principal");
var img_peqs = document.getElementsByClassName("imagen_peq")

img_peqs[0].onclick = () => {
  img_principal.src = img_peqs[0].querySelector('img').src;
}

img_peqs[1].onclick = () => {
  img_principal.src = img_peqs[1].querySelector('img').src;
}

img_peqs[2].onclick = () => {
  img_principal.src = img_peqs[2].querySelector('img').src;
}

img_peqs[3].onclick = () => {
  img_principal.src = img_peqs[3].querySelector('img').src;
  // img_principal.src = img_peqs[3].src;
}