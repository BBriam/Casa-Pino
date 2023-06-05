<div class="form_logi_tot">

  <div class="form_logi_titu negrita tamf_37 purpura"><p>LOGIN</p></div>
  <div class="form_logi_subtitu nega3 tamf_18 purpura"><p>INICIA SESIÓN</p></div>

  <form action="procesar_login.php" method="post" class="form_logi" id="form_logiid">

    <div class="malla_1_form_logi">

      <div id="form_logi_g_emailid" class="form_logi_g">
        <label for="form_logi_email" class="gris51 nega7 eti_form_logi_ema">Email</label>
        <div class="envoltorio_impico">
          <input class="inp_gris" type="email" id="form_logi_emailid" name="form_logi_email" required placeholder="EMAIL">
          <i id="form_logi_email_iid" class="form_logi_i fa tamf_12"></i>
        </div>
        <p id="form_logi_email_eid" class="form_logi_e nega5 tamf_12">Por favor ingrese letras minúsculas, números, puntos, guiones medios y bajos</p>
      </div>

      <div id="form_logi_g_passwordid" class="form_logi_g">
        <label for="form_logi_password" class="gris51 nega7 eti_form_logi_pas">Contraseña</label>
        <div class="envoltorio_impico">
          <input class="inp_gris" type="password" id="form_logi_passwordid" name="form_logi_password" required placeholder="CONTRASEÑA">
          <i id="form_logi_password_iid" class="form_logi_i fa tamf_12"></i>
        </div>
        <p id="form_logi_password_eid" class="form_logi_e nega5 tamf_12">Por favor ingrese de 6 a 12 caracteres con números, mayúsculas y minúsculas.</p>
      </div>
    </div>

    <div class="form_logi_botones_bajos">
      <div class="form_logi_sub"><input class="boton_enviar nega4 tamf_14 blanco" type="submit" value="Enviar" name="boton_enviar"></div>
      <p id="form_logi_errorid" class="form_logi_error nega9 tamf_20">Todos los campos deben ser completados</p>
      <p id="form_logi_exitoid" class="form_logi_exito nega9 tamf_20">Envio exitoso</p>


    </div>

    <!-- <div class="malla_1_form_logi">
      <label for="usuario" class="gris51 nega7 tamf_15 eti_form_logi_usu">Email</label>
      <input class="inp_gris" type="text" id="usuario" name="usuario" required placeholder="">
      <label for="password" class="gris51 nega7 tamf_15 eti_form_logi_pas">Contraseña</label>
      <input class="inp_gris" type="password" id="password" name="password" required placeholder="">
      <div class="form_logi_sub"><input class="boton_enviar nega4 tamf_14 blanco" type="submit" value="Enviar"></div>
    </div> -->

  </form>

</div>