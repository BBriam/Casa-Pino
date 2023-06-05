<div class="form_regi_tot">

  <div class="form_regi_titu negrita tamf_36 purpura"><p>REGISTRATE</p></div>
  <div class="form_regi_subtitu nega3 tamf_18 purpura"><p>REGISTRATE CON TU DIRECCIÓN DE MAIL</p></div>

  <form action="procesar_registro.php" method="post" class="form_regi" id="form_regiid">

    <div class="malla_2_form_regi">

    
      <div id="form_regi_g_nombreid" class="form_regi_g">
        <div class="envoltorio_impico">
          <input class="inp_gris" type="text" id="form_regi_nombreid" name="form_regi_nombre" required placeholder="NOMBRE">
          <i id="form_regi_nombre_iid" class="form_regi_i fa tamf_12"></i>
        </div>
        <p id="form_regi_nombre_eid" class="form_regi_e nega5 tamf_12">Por favor ingrese texto con acentos, espacios y longitud entre 2 y 40 caracteres</p>
      </div>


      <div id="form_regi_g_telefonoid" class="form_regi_g">
        <div class="envoltorio_impico">
          <input class="inp_gris" type="tel" id="form_regi_telefonoid" name="form_regi_telefono" required placeholder="TELÉFONO">
          <i id="form_regi_telefono_iid" class="form_regi_i fa tamf_12"></i>
        </div>
        <p id="form_regi_telefono_eid" class="form_regi_e nega5 tamf_12">Por favor ingrese un número de teléfono válido con 8, 9, 10, 11, 13 o 14 dígitos.</p>
      </div>

      <div id="form_regi_g_apellidoid" class="form_regi_g">
        <div class="envoltorio_impico">
          <input class="inp_gris" type="text" id="form_regi_apellidoid" name="form_regi_apellido" required placeholder="APELLIDO">
          <i id="form_regi_apellido_iid" class="form_regi_i fa tamf_12"></i>
        </div>
        <p id="form_regi_apellido_eid" class="form_regi_e nega5 tamf_12">Por favor ingrese texto con acentos, espacios y longitud entre 2 y 40 caracteres</p>
      </div>


      <div id="form_regi_g_direccionid" class="form_regi_g">
        <div class="envoltorio_impico">
          <input class="inp_gris" type="text" id="form_regi_direccionid" name="form_regi_direccion" required placeholder="DIRECCION">
          <i id="form_regi_direccion_iid" class="form_regi_i fa tamf_12"></i>
        </div>
        <p id="form_regi_direccion_eid" class="form_regi_e nega5 tamf_12">Por favor ingrese letras, números, espacios, comas, puntos y guiones y una longitud entre 8 y 80 caracteres.</p>
      </div>

      <div id="form_regi_g_emailid" class="form_regi_g">
        <div class="envoltorio_impico">
          <input class="inp_gris" type="email" id="form_regi_emailid" name="form_regi_email" required placeholder="EMAIL">
          <i id="form_regi_email_iid" class="form_regi_i fa tamf_12"></i>
        </div>
        <p id="form_regi_email_eid" class="form_regi_e nega5 tamf_12">Por favor ingrese letras minúsculas, números, puntos, guiones medios y bajos</p>
      </div>

      <div id="form_regi_g_cuitid" class="form_regi_g">
        <div class="envoltorio_impico">
          <input class="inp_gris" type="text" id="form_regi_cuitid" name="form_regi_cuit" required placeholder="CUIT">
          <i id="form_regi_cuit_iid" class="form_regi_i fa tamf_12"></i>
        </div>
        <p id="form_regi_cuit_eid" class="form_regi_e nega5 tamf_12">números enteros de 11 dígitos permitidos.</p>
      </div>

      <div id="form_regi_g_passwordid" class="form_regi_g">
        <div class="envoltorio_impico">
          <input class="inp_gris" type="password" id="form_regi_passwordid" name="form_regi_password" required placeholder="CONTRASEÑA">
          <i id="form_regi_password_iid" class="form_regi_i fa tamf_12"></i>
        </div>
        <p id="form_regi_password_eid" class="form_regi_e nega5 tamf_12">Por favor ingrese de 6 a 12 caracteres con números, mayúsculas y minúsculas.</p>
      </div>

      <div id="form_regi_g_transporteid" class="form_regi_g">
        <div class="envoltorio_impico">
          <input class="inp_gris" type="text" id="form_regi_transporteid" name="form_regi_transporte" required placeholder="TRANSPORTE">
          <i id="form_regi_transporte_iid" class="form_regi_i fa tamf_12"></i>
        </div>
        <p id="form_regi_transporte_eid" class="form_regi_e nega5 tamf_12">Por favor ingrese letras, números, espacios, comas, puntos y guiones y una longitud entre 8 y 80 caracteres.</p>
      </div>

      <div id="form_regi_g_repasswordid" class="form_regi_g">
        <div class="envoltorio_impico">
          <input class="inp_gris" type="password" id="form_regi_repasswordid" name="form_regi_repassword" required placeholder="INGRESE CONTRASEÑA NUEVAMENTE">
          <i id="form_regi_repassword_iid" class="form_regi_i fa tamf_12"></i>
        </div>
        <p id="form_regi_repassword_eid" class="form_regi_e nega5 tamf_12">Las contraseñas debe coincidir.</p>
      </div>

      <div class="form_regi_field_sub">
        <input type="checkbox" id="form_regi_terminosid", class="form_regi_terminos" name="suscripcion" value="1" checked>
        <label class="nega7 tamf_14" for="suscripcion">¿Deseas suscribirte a nuestro newsletter?</label>
      </div>
    </div>

    <div class="form_regi_botones_bajos">
      <div class="form_regi_cap"><input class="" type="submit" value="No soy un robot" name="boton_captcha"></div>
      <div class="form_regi_sub"><input class="boton_enviar nega4 tamf_14 blanco" type="submit" value="Enviar" name="boton_enviar"></div>
      <p id="form_regi_errorid" class="form_regi_error nega9 tamf_20">Todos los campos deben ser completados</p>
      <p id="form_regi_exitoid" class="form_regi_exito nega9 tamf_20">Envio exitoso</p>


    </div>

  </form>

</div>