import React, { useState } from 'react'
import Header from './header'
import '../styles/layout_ingresado.css'

const Layout_Ingresado = ({ children }) => {

    return (
      <main className='contenedor-de-paginas-li'>
        <Header/>
        <section className='contenido-principal'>
          {children}
        </section>
      </main>
    )
  }
export default Layout_Ingresado
