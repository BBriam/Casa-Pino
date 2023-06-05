const expresiones_logi = {
	email: /^[\w-.]+@[a-zA-Z0-9]+(.[a-zA-Z]+)+$/,
  password:/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}$/
}

const campos_logi = {
  email: false,
  password: false
}

const formulario_logi = document.getElementById("form_logiid");
const inputs_logi = document.querySelectorAll("#form_logiid input")

const validarCampo_logi = (expresion, input, campo) => {
  if (expresion.test(input.value)){
  document.querySelector(`#${campo}id`).classList.remove("inp_incorrecto");
  document.querySelector(`#${campo}id`).classList.add("inp_correcto");
  document.querySelector(`#${campo}_iid`).classList.remove("icono_incorrecto");
  document.querySelector(`#${campo}_iid`).classList.remove("fa-circle-xmark");
  document.querySelector(`#${campo}_iid`).classList.add("icono_correcto");
  document.querySelector(`#${campo}_iid`).classList.add("fa-circle-check");
  document.querySelector(`#${campo}_eid`).classList.remove("muestra_error");
  const camp = campo.split("_");
  campos_logi[camp[camp.length - 1]] = true;
  } else  {
  document.querySelector(`#${campo}id`).classList.remove("inp_correcto");
  document.querySelector(`#${campo}id`).classList.add("inp_incorrecto");
  document.querySelector(`#${campo}_iid`).classList.remove("fa-circle-check");
  document.querySelector(`#${campo}_iid`).classList.remove("icono_correcto");
  document.querySelector(`#${campo}_iid`).classList.add("fa-circle-xmark");
  document.querySelector(`#${campo}_iid`).classList.add("icono_incorrecto");
  document.querySelector(`#${campo}_eid`).classList.add("muestra_error");
  const camp = campo.split("_");
  campos_logi[camp[camp.length - 1]] = false;
}
}

const validarFormulario_logi = (e) => {
  switch (e.target.name) {
    case "form_logi_email":
      validarCampo_logi(expresiones_logi.email, e.target, e.target.name);
      break;
    case "form_logi_password":
      validarCampo_logi(expresiones_logi.password, e.target, e.target.name);
  }
}


inputs_logi.forEach((input)=>{
  input.addEventListener("keyup", validarFormulario_logi);
  input.addEventListener("blur", validarFormulario_logi);
});

formulario_logi.addEventListener("submit", (e) => {
  e.preventDefault();

  if (campos_logi.email && campos_logi.password) {
    formulario_logi.reset();

    document.getElementById("form_logi_errorid").classList.remove("inp_incorrecto");
    document.getElementById("form_logi_exitoid").classList.add("inp_correcto");

    setTimeout(() => {

      document.getElementById("form_logi_exitoid").classList.remove("inp_correcto");

      document.querySelectorAll(".icono_correcto").forEach((icono) => {
      icono.classList.remove("icono_correcto");
      })
      document.querySelectorAll(".inp_correcto").forEach((borde) => {
      borde.classList.remove("inp_correcto");
      })

    }, 5000);

  } else {

    document.getElementById("form_logi_exitoid").classList.remove("inp_correcto");
    document.getElementById("form_logi_errorid").classList.add("inp_incorrecto");

  }


});