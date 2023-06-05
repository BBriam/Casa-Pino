const hamburguesa_nav = document.getElementById("nav_hamburguesaid");
const listamenu_nav = document.getElementById("malla_4_navid");

const hamburguesa_asi = document.getElementById("aside_hamburguesaid");
const listamenu_asi = document.getElementById("lista_asideid");


hamburguesa_nav.addEventListener("click", ()=> {listamenu_nav.classList.toggle("mostrar_grid");
console.log("NAVEGACION");
});

hamburguesa_asi.addEventListener("click", ()=> {listamenu_asi.classList.toggle("mostrar_block");
console.log("ASIDE");
});
