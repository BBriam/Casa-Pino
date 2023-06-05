const expresiones_cont = {
	email: /^[\w-.]+@[a-zA-Z0-9]+(.[a-zA-Z]+)+$/,
  nombre: /^[a-zA-ZáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜñÑ\s^"´]{2,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^(?:\d{8}|\d{9}|\d{10}|\d{11}|54\d{11}|\+54\d{11})$/,
  direccion: /^(?:[\w\dáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜñÑ\s.,-]{8,80})$/,
  cuit:/^\d{11}$/,
  mensaje:/^.{15,2500}$/
}

const campos_cont = {
  nombre: false,
  telefono: false,
  apellido: false,
  direccion: false,
  email: false,
  cuit: false,
  transporte: false,
  mensaje: false
}

const formulario_cont = document.getElementById("form_contid");
const inputs_cont = document.querySelectorAll("#form_contid input, #form_contid textarea")

const validarCampo_cont = (expresion, input, campo) => {
  if (expresion.test(input.value)){
  document.querySelector(`#${campo}id`).classList.remove("inp_incorrecto");
  document.querySelector(`#${campo}id`).classList.add("inp_correcto");
  document.querySelector(`#${campo}_iid`).classList.remove("icono_incorrecto");
  document.querySelector(`#${campo}_iid`).classList.remove("fa-circle-xmark");
  document.querySelector(`#${campo}_iid`).classList.add("icono_correcto");
  document.querySelector(`#${campo}_iid`).classList.add("fa-circle-check");
  document.querySelector(`#${campo}_eid`).classList.remove("muestra_error");
  const camp = campo.split("_");
  campos_cont[camp[camp.length - 1]] = true;
  } else  {
  document.querySelector(`#${campo}id`).classList.remove("inp_correcto");
  document.querySelector(`#${campo}id`).classList.add("inp_incorrecto");
  document.querySelector(`#${campo}_iid`).classList.remove("fa-circle-check");
  document.querySelector(`#${campo}_iid`).classList.remove("icono_correcto");
  document.querySelector(`#${campo}_iid`).classList.add("fa-circle-xmark");
  document.querySelector(`#${campo}_iid`).classList.add("icono_incorrecto");
  document.querySelector(`#${campo}_eid`).classList.add("muestra_error");
  const camp = campo.split("_");
  campos_cont[camp[camp.length - 1]] = false;
}
}

const validarFormulario_cont = (e) => {
  switch (e.target.name) {
    case "form_cont_nombre":
      validarCampo_cont(expresiones_cont.nombre, e.target, e.target.name);
      break;
    case "form_cont_telefono":
      validarCampo_cont(expresiones_cont.telefono, e.target, e.target.name);
      break;
    case "form_cont_direccion":
      validarCampo_cont(expresiones_cont.direccion, e.target, e.target.name);
      break;
    case "form_cont_apellido":
      validarCampo_cont(expresiones_cont.nombre, e.target, e.target.name);
      break;
    case "form_cont_email":
      validarCampo_cont(expresiones_cont.email, e.target, e.target.name);
      break;
    case "form_cont_cuit":
      validarCampo_cont(expresiones_cont.cuit, e.target, e.target.name);
      break;
    case "form_cont_transporte":
      validarCampo_cont(expresiones_cont.direccion, e.target, e.target.name);
      break;
    case "form_cont_mensaje":
      validarCampo_cont(expresiones_cont.mensaje, e.target, e.target.name);
      break;
  }
}

inputs_cont.forEach((input)=>{
  input.addEventListener("keyup", validarFormulario_cont);
  input.addEventListener("blur", validarFormulario_cont);
});

formulario_cont.addEventListener("submit", (e) => {
  e.preventDefault();

  if (campos_cont.apellido && 
    campos_cont.cuit && 
    campos_cont.direccion && 
    campos_cont.email && 
    campos_cont.nombre && 
    campos_cont.telefono && 
    campos_cont.transporte && 
    campos_cont.mensaje) {
    formulario_cont.reset();

    document.getElementById("form_cont_errorid").classList.remove("inp_incorrecto");
    document.getElementById("form_cont_exitoid").classList.add("inp_correcto");

    setTimeout(() => {

      document.getElementById("form_cont_exitoid").classList.remove("inp_correcto");

      document.querySelectorAll(".icono_correcto").forEach((icono) => {
      icono.classList.remove("icono_correcto");
      })
      document.querySelectorAll(".inp_correcto").forEach((borde) => {
      borde.classList.remove("inp_correcto");
      })

    }, 5000);

  } else {

    document.getElementById("form_cont_exitoid").classList.remove("inp_correcto");
    document.getElementById("form_cont_errorid").classList.add("inp_incorrecto");

  }


});

// // // // // // // // // // // // // // // // // // // // // // // // LIMITADORES DE CAJAS

var textarea2500 = document.querySelector('#form_cont_mensajeid');
textarea2500.addEventListener('input', function () {
    if (this.value.length > 2500) {
        this.value = this.value.slice(0, 2500);
    }
});