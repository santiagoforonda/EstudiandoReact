import React, { useState } from "react";
import Layout from '../componentes/layout_ingresado'
import '../styles/login_register.css'
import '../styles/mi_cuenta.css'
function MiCuenta() {
    return (
      <Layout>
        <article className="edit-container">
          <form className="form-editar-datos">
              <input
                type="text"
                placeholder="NOMBRE"
                className="form-input-edit"
              />
              <input
                type="text"
                placeholder="APELLIDO"
                className="form-input-edit"
              />
              <input
                type="email"
                placeholder="CORREO"
                className="form-input-edit"
              />
              <input
                type="date"
                placeholder="FECHA"
                className="form-input-edit"
              />
            <button 
              type="submit"
              className="btn-actualizar"
            >Actualizar Perfil</button>
          </form>               
        </article>   
      </Layout>
    );
  }
  
  export default MiCuenta;