const expresiones_regi = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	email: /^[\w-.]+@[a-zA-Z0-9]+(.[a-zA-Z]+)+$/,
  nombre: /^[a-zA-ZáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜñÑ\s^"´]{2,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  telefono: /^(?:\d{8}|\d{9}|\d{10}|\d{11}|54\d{11}|\+54\d{11})$/,
  direccion: /^(?:[\w\dáéíóúàèìòùäëïöüÁÉÍÓÚÀÈÌÒÙÄËÏÖÜñÑ\s.,-]{8,80})$/,
  cuit:/^\d{11}$/,
  password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/
}

const campos_regi = {
  nombre: false,
  telefono: false,
  apellido: false,
  direccion: false,
  email: false,
  cuit: false,
  password: false,
  transporte: false
}

const formulario_regi = document.getElementById("form_regiid");
const inputs_regi = document.querySelectorAll("#form_regiid input")

const validarCampo_regi = (expresion, input, campo) => {
  if (expresion.test(input.value)){
  document.querySelector(`#${campo}id`).classList.remove("inp_incorrecto");
  document.querySelector(`#${campo}id`).classList.add("inp_correcto");
  document.querySelector(`#${campo}_iid`).classList.remove("icono_incorrecto");
  document.querySelector(`#${campo}_iid`).classList.remove("fa-circle-xmark");
  document.querySelector(`#${campo}_iid`).classList.add("icono_correcto");
  document.querySelector(`#${campo}_iid`).classList.add("fa-circle-check");
  document.querySelector(`#${campo}_eid`).classList.remove("muestra_error");
  const camp = campo.split("_");
  campos_regi[camp[camp.length - 1]] = true;
  } else  {
  document.querySelector(`#${campo}id`).classList.remove("inp_correcto");
  document.querySelector(`#${campo}id`).classList.add("inp_incorrecto");
  document.querySelector(`#${campo}_iid`).classList.remove("fa-circle-check");
  document.querySelector(`#${campo}_iid`).classList.remove("icono_correcto");
  document.querySelector(`#${campo}_iid`).classList.add("fa-circle-xmark");
  document.querySelector(`#${campo}_iid`).classList.add("icono_incorrecto");
  document.querySelector(`#${campo}_eid`).classList.add("muestra_error");
  const camp = campo.split("_");
  campos_regi[camp[camp.length - 1]] = false;
}
}

const validarFormulario_regi = (e) => {
  switch (e.target.name) {
    case "form_regi_nombre":
      validarCampo_regi(expresiones_regi.nombre, e.target, e.target.name);
      break;
    case "form_regi_telefono":
      validarCampo_regi(expresiones_regi.telefono, e.target, e.target.name);
      break;
    case "form_regi_direccion":
      validarCampo_regi(expresiones_regi.direccion, e.target, e.target.name);
      break;
    case "form_regi_apellido":
      validarCampo_regi(expresiones_regi.nombre, e.target, e.target.name);
      break;
    case "form_regi_email":
      validarCampo_regi(expresiones_regi.email, e.target, e.target.name);
      break;
    case "form_regi_cuit":
      validarCampo_regi(expresiones_regi.cuit, e.target, e.target.name);
      break;
    case "form_regi_password":
      validarCampo_regi(expresiones_regi.password, e.target, e.target.name);
      validarPassword2();
      break;
    case "form_regi_transporte":
      validarCampo_regi(expresiones_regi.direccion, e.target, e.target.name);
      break;
    case "form_regi_repassword":
      validarPassword2();
      break;
  }
}

const validarPassword2 = () => {

  const password1 = document.getElementById("form_regi_passwordid");
  const password2 = document.getElementById("form_regi_repasswordid");

  if (password1.value === password2.value) {
    document.querySelector("#form_regi_repasswordid").classList.remove("inp_incorrecto");
    document.querySelector("#form_regi_repasswordid").classList.add("inp_correcto");
    document.querySelector("#form_regi_repassword_iid").classList.remove("icono_incorrecto");
    document.querySelector("#form_regi_repassword_iid").classList.remove("fa-circle-xmark");
    document.querySelector("#form_regi_repassword_iid").classList.add("icono_correcto");
    document.querySelector("#form_regi_repassword_iid").classList.add("fa-circle-check");
    document.querySelector("#form_regi_repassword_eid").classList.remove("muestra_error");
    campos_regi["password"] = true;
  } else  {
    document.querySelector("#form_regi_repasswordid").classList.remove("inp_correcto");
    document.querySelector("#form_regi_repasswordid").classList.add("inp_incorrecto");
    document.querySelector("#form_regi_repassword_iid").classList.remove("fa-circle-check");
    document.querySelector("#form_regi_repassword_iid").classList.remove("icono_correcto");
    document.querySelector("#form_regi_repassword_iid").classList.add("fa-circle-xmark");
    document.querySelector("#form_regi_repassword_iid").classList.add("icono_incorrecto");
    document.querySelector("#form_regi_repassword_eid").classList.add("muestra_error");
    campos_regi["password"] = false;
}
}

inputs_regi.forEach((input)=>{
  input.addEventListener("keyup", validarFormulario_regi);
  input.addEventListener("blur", validarFormulario_regi);
});

formulario_regi.addEventListener("submit", (e) => {
  e.preventDefault();

  // const terminos = document.getElementById("form_regi_terminosid");

  if (campos_regi.apellido && campos_regi.cuit && campos_regi.direccion && campos_regi.email && campos_regi.nombre && campos_regi.password && campos_regi.telefono && campos_regi.transporte) {
    formulario_regi.reset();

    document.getElementById("form_regi_errorid").classList.remove("inp_incorrecto");
    document.getElementById("form_regi_exitoid").classList.add("inp_correcto");

    setTimeout(() => {

      document.getElementById("form_regi_exitoid").classList.remove("inp_correcto");

      document.querySelectorAll(".icono_correcto").forEach((icono) => {
      icono.classList.remove("icono_correcto");
      })
      document.querySelectorAll(".inp_correcto").forEach((borde) => {
      borde.classList.remove("inp_correcto");
      })

    }, 5000);

  } else {

    document.getElementById("form_regi_exitoid").classList.remove("inp_correcto");
    document.getElementById("form_regi_errorid").classList.add("inp_incorrecto");

  }


});